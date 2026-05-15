import type { Metadata } from "next";
import { Instrument_Sans, Source_Sans_3 } from "next/font/google";
import Navbar from "@/src/components/Navbar";
import Footer from "@/src/components/Footer"
import "./globals.css";
import SmoothScroll from "../components/SmoothScroll";

// Configure the fonts based on your Figma design
const instrumentSans = Instrument_Sans({ 
  subsets: ["latin"], 
  variable: "--font-heading" 
});

const sourceSans = Source_Sans_3({ 
  subsets: ["latin"], 
  variable: "--font-body" 
});

export const metadata: Metadata = {
  title: "Sukoon Developers",
  description: "Build, Invest & Grow with Us in Gujarat.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
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