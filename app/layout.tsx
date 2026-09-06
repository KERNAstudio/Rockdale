import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const display = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const body = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.rockdaleschool.in"),
  title: {
    default: "Rockdale School | A School for Life | Visakhapatnam",
    template: "%s | Rockdale School",
  },
  description:
    "Rockdale School in Marripalem, Visakhapatnam has offered CBSE education from Play School to Grade X since 1997 — academic excellence, values and holistic development for over 26 years.",
  keywords: [
    "Rockdale School",
    "Rockdale School Visakhapatnam",
    "CBSE school Vizag",
    "school Marripalem",
    "school admissions Visakhapatnam",
  ],
  openGraph: {
    title: "Rockdale School | A School for Life",
    description:
      "CBSE education from Play School to Grade X in Marripalem, Visakhapatnam — 26+ years of academic excellence, values and holistic development.",
    url: "https://www.rockdaleschool.in",
    siteName: "Rockdale School",
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${body.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-off-white text-navy">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:z-[100] focus:top-3 focus:left-3 focus:bg-navy focus:text-white focus:px-4 focus:py-2 focus:rounded"
        >
          Skip to main content
        </a>
        <Navbar />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
