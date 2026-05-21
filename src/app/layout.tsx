import type { Metadata, Viewport } from "next";
import { Oranienbaum, Mea_Culpa, Cinzel_Decorative, Cormorant_Garamond, Montserrat } from "next/font/google";
import "./globals.css";

const oranienbaum = Oranienbaum({
  weight: "400",
  variable: "--font-oranienbaum",
  subsets: ["latin"],
});

const meaCulpa = Mea_Culpa({
  weight: "400",
  variable: "--font-mea",
  subsets: ["latin"],
});

const cinzelDeco = Cinzel_Decorative({
  weight: "400",
  variable: "--font-cinzel",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CHAMMI & DHANUKA | Digital Wedding Invitation",
  description: "You are cordially invited to celebrate the love and union of Chammi & Dhanuka on Monday, July 20, 2026. Summerfield's Banquet Hall. Powered by Knexa System.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${oranienbaum.variable} ${meaCulpa.variable} ${cinzelDeco.variable} ${cormorant.variable} ${montserrat.variable} h-full antialiased scroll-smooth`}
    >
      <body suppressHydrationWarning className="min-h-full flex flex-col font-sans bg-[#0d0d0d] text-[#fdfbf7]">
        {children}
      </body>
    </html>
  );
}


