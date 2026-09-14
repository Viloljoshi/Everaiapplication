import type { Metadata } from "next";
import { Instrument_Sans, Newsreader } from "next/font/google";
import "./globals.css";

const instrument = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  title: "From Signal to Scale: A Product Builder OS",
  description:
    "An interactive application artifact about turning ambiguous user signals into shipped, measured products.",
  openGraph: {
    title: "From Signal to Scale",
    description: "A Product Builder OS. Built, not presented.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "From Signal to Scale",
    description: "A Product Builder OS. Built, not presented.",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${instrument.variable} ${newsreader.variable}`}>
      <body>{children}</body>
    </html>
  );
}
