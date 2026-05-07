import type { Metadata } from "next";
import { Syne, Geist_Mono } from "next/font/google";
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
  metadataBase: new URL("https://giannisf12.dev"),
  title: {
    default: "Portfolio",
    template: "%s · Giannis Foras",
  },
  description:
    "Computer Science graduate. Full-stack work across Java/Spring Boot, Next.js, and PHP, plus a machine-learning thesis. Open to entry-level roles.",
  authors: [{ name: "Giannis Foras", url: "https://github.com/GiannisF12" }],
  creator: "Giannis Foras",
  keywords: [
    "Giannis Foras",
    "full-stack developer",
    "entry-level developer",
    // main stack
    "Java",
    "Spring Boot",
    "Next.js",
    "TypeScript",
    "React",
    // databases / devops
    "PostgreSQL",
    "MySQL",
    "Docker",
    // other shipped work
    "PHP",
    "Python",
    "machine learning",
    "data analytics",
    "scikit-learn",
    "TensorFlow",
    // location
    "Greece",
    "Athens",
    "Thessaloniki",
    "portfolio",
  ],
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    url: "https://giannisf12.dev",
    siteName: "Giannis Foras",
    title: "Giannis Foras — Full-stack Developer",
    description:
      "Computer Science graduate building with Java, Spring Boot, and Next.js.",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Giannis Foras — Full-stack Developer",
    description:
      "Computer Science graduate building with Java, Spring Boot, and Next.js.",
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
      <body>{children}</body>
    </html>
  );
}
