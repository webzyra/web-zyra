import type { Metadata } from "next";
import { Space_Grotesk, IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const display = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const body = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://webzyra.xyz"),
  title: {
    default: "Webzyra — Professional Website Design & Development",
    template: "%s — Webzyra",
  },
  description:
    "Webzyra builds professional, responsive websites and ecommerce experiences for businesses, brands, and individuals.",
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    title: "Webzyra — Professional Website Design & Development",
    description:
      "Webzyra builds professional, responsive websites and ecommerce experiences for businesses, brands, and individuals.",
    url: "https://webzyra.xyz",
    siteName: "Webzyra",
    images: [{ url: "/logo.png", width: 1200, height: 400 }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Webzyra — Professional Website Design & Development",
    description:
      "Webzyra builds professional, responsive websites and ecommerce experiences for businesses, brands, and individuals.",
    images: ["/logo.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
