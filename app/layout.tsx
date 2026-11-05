import type { Metadata } from "next";
import { Poppins, DM_Serif_Display } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import ClientLayout from "./ClientLayout";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["300", "400"],
});

const dmserif = DM_Serif_Display({
  subsets: ["latin"],
  variable: "--font-dmserif",
  weight: "400",
});

export const metadata: Metadata = {
  title: "Rose Aura Salon",
  description: "Modern Luxury Beauty Salon Website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${poppins.variable} ${dmserif.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <Script
          src="https://roseaurapk.vercel.app/api/widget.js?websiteId=cmw3kubzb0003ugk4qn31sbg7"
          strategy="afterInteractive"
        />
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
