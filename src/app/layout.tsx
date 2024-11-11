import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Kiwari Labs",
  description:
    "Research and development team focused on distributed ledger technology and smart contracts for enterprise-grade software solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header>
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/assets/logo.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/assets/logo.png"
          />
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
