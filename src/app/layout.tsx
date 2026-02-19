import type { Metadata } from "next";
import { Exo_2, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const exo2 = Exo_2({
  variable: "--font-exo2",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Multivision Network — The Network Behind the Voices",
    template: "%s | Multivision Network",
  },
  description:
    "Multivision Network builds, launches, and scales culture-driven podcasts and digital media brands. Explore our shows, join the network, or become a sponsor.",
  keywords: [
    "podcast network",
    "podcast production",
    "digital media",
    "Multivision",
    "podcast distribution",
    "media company",
  ],
  openGraph: {
    title: "Multivision Network — The Network Behind the Voices",
    description:
      "We build, launch, and scale culture-driven podcasts and digital media brands.",
    type: "website",
    locale: "en_US",
    siteName: "Multivision Network",
  },
  twitter: {
    card: "summary_large_image",
    title: "Multivision Network",
    description:
      "We build, launch, and scale culture-driven podcasts and digital media brands.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${exo2.variable} ${plusJakarta.variable} antialiased`}
        style={{
          fontFamily: "var(--font-plus-jakarta), 'Plus Jakarta Sans', sans-serif",
        }}
      >
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
