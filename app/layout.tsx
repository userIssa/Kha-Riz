import type { Metadata } from "next";
import { Playfair_Display, Space_Mono } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-serif-var",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const spaceMono = Space_Mono({
  variable: "--font-mono-var",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "KHA-RIZ ENERGY LTD — Engineering the Future of Energy Infrastructure",
  description:
    "KHA-RIZ ENERGY LTD is a specialist integrated energy company delivering Renewable Energy, EPC Services, Electric Mobility, BESS, Smart Infrastructure, and Energy Advisory in Nigeria.",
  keywords: "renewable energy, solar EPC, battery energy storage, BESS, electric mobility, EV charging, fleet electrification, smart infrastructure, energy advisory, Nigeria",
  openGraph: {
    title: "KHA-RIZ ENERGY LTD — Engineering the Future of Energy Infrastructure",
    description: "Specialist integrated energy, EPC, and electric mobility solutions provider in Nigeria.",
    type: "website",
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${playfair.variable} ${spaceMono.variable} antialiased bg-[#18181A] text-[#ECEAE0]`}>
        {children}
      </body>
    </html>
  );
}
