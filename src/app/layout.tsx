import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import "lenis/dist/lenis.css";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Femmeflo - Feel Fresh. Feel Free.",
  description: "Experience superior comfort, dependable leak protection, and confidence throughout your day with Femmeflo XL sanitary pads.",
};

export const viewport = {
  themeColor: "#FAF8F5",
  colorScheme: "light" as const,
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${jakarta.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans bg-[#FAF8F5] text-zinc-800 selection:bg-rose-200 selection:text-rose-900">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}

