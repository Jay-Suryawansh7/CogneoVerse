import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cogneverse — Open Innovation Platform for Engineers and AI Builders",
  description: "Cogneverse is a collaborative platform for engineers, designers, and AI builders to create, learn, and launch real-world technology products.",
  keywords: ["innovation", "engineering", "AI", "collaboration", "open-source", "technology", "builders"],
  authors: [{ name: "Cogneverse" }],
  openGraph: {
    title: "Cogneverse — Build the Future. Together.",
    description: "An open innovation ecosystem where engineers, designers, and AI builders collaborate to turn ideas into real-world technology.",
    url: "https://cogneoverse.org",
    siteName: "CogneoVerse",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cogneverse — Build the Future. Together.",
    description: "An open innovation ecosystem where engineers, designers, and AI builders collaborate to turn ideas into real-world technology.",
  },
};

import { Providers } from "@/components/providers";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className="antialiased min-h-screen">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
