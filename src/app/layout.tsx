import type { Metadata } from "next";
import { Instrument_Sans, Source_Sans_3 } from "next/font/google";
import Navbar from "@/src/components/Navbar";
import Footer from "@/src/components/Footer"
import "./globals.css";
import SmoothScroll from "../components/SmoothScroll";

export const metadata: Metadata = {
  title: "Sukoon Developer",
  description: "Building homes, developing spaces, and growing land wealth all over Gujarat.",
};

// Define the fonts and map them to CSS variables
const instrumentSans = Instrument_Sans({
  subsets: ['latin'],
  variable: '--font-instrument-sans',
  display: 'swap',
});

const sourceSans = Source_Sans_3({
  subsets: ['latin'],
  variable: '--font-source-sans',
  display: 'swap',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // Inject the variables into the HTML class
    <html lang="en">
      <body className={`${instrumentSans.variable} ${sourceSans.variable} font-body antialiased bg-background text-foreground`}>
        <SmoothScroll>
        <Navbar />
        <main>{children}</main>
        <Footer/>
        </SmoothScroll>
      </body>
    </html>
  );
}