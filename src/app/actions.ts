"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

// Simple in-memory rate limiter: max 3 submissions per IP per 15 minutes
const submissions = new Map<string, number[]>();
const RATE_LIMIT = 3;
const RATE_WINDOW = 15 * 60 * 1000;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const timestamps = submissions.get(ip)?.filter((t) => now - t < RATE_WINDOW) ?? [];
  submissions.set(ip, timestamps);
  if (timestamps.length >= RATE_LIMIT) return true;
  timestamps.push(now);
  return false;
}

type FormState = {
  success: boolean;
  error?: string;
};

export async function sendContactEmail(
  _prev: FormState,
  formData: FormData
): Promise<FormState> {
  // Rate limiting via headers (works with Next.js server actions)
  const { headers } = await import("next/headers");
  const headersList = await headers();
  const ip = headersList.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";

  if (isRateLimited(ip)) {
    return { success: false, error: "Te veel berichten verstuurd. Probeer het later opnieuw." };
  }

  const naam = formData.get("naam");
  const email = formData.get("email");
  const bericht = formData.get("bericht");

  if (
    typeof naam !== "string" || naam.trim().length === 0 ||
    typeof email !== "string" || email.trim().length === 0 ||
    typeof bericht !== "string" || bericht.trim().length === 0
  ) {
    return { success: false, error: "Vul alle velden in." };
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return { success: false, error: "Ongeldig e-mailadres." };
  }

  if (naam.length > 200 || email.length > 200 || bericht.length > 5000) {
    return { success: false, error: "Invoer is te lang." };
  }

  try {
    await resend.emails.send({
      from: "Basewise Website <noreply@basewise.nl>",
      to: "c.vaneken@basewise.nl",
      replyTo: email.trim(),
      subject: `Contactformulier: ${naam.trim()}`,
      text: `Naam: ${naam.trim()}\nE-mail: ${email.trim()}\n\nBericht:\n${bericht.trim()}`,
    });

    return { success: true };
  } catch (err) {
    console.error("Resend error:", err);
    return { success: false, error: "Er ging iets mis. Probeer het later opnieuw." };
  }
}
