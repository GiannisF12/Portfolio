import type { Metadata } from "next";
import { Syne, Geist_Mono } from "next/font/google";
import CursorFx from "@/components/CursorFx";
import "./globals.css";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Giannis Foras — Full-stack Developer",
  description:
    "Selected projects by Giannis Foras, a full-stack developer based in Athens.",
  openGraph: {
    title: "Giannis Foras — Full-stack Developer",
    description:
      "Selected projects by Giannis Foras, a full-stack developer based in Athens.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${syne.variable} ${geistMono.variable} antialiased`}
    >
      <body>
        <CursorFx />
        {children}
      </body>
    </html>
  );
}
