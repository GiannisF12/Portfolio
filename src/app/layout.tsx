import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Giannis Foras — Full-stack Developer",
  description:
    "Portfolio of Giannis Foras, a full-stack developer building clean, fast web applications.",
  openGraph: {
    title: "Giannis Foras — Full-stack Developer",
    description:
      "Portfolio of Giannis Foras, a full-stack developer building clean, fast web applications.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-[#080808] text-[#ededed]">{children}</body>
    </html>
  );
}
