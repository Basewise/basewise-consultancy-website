import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Basewise Consultancy B.V. | Systems Engineering & AI",
  description:
    "Systems Engineering consultancy voor infrastructuur en bouw in Nederland. Basewise helpt complexe projecten beheersbaar te maken met SE en AI.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl">
      <body>{children}</body>
    </html>
  );
}
