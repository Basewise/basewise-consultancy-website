import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Basewise Consultancy B.V. | Systems Engineering",
  description:
    "Systems Engineering consultancy voor infrastructuur en bouw in Nederland. Basewise helpt complexe projecten beheersbaar te maken.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl">
      <body className="antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
