import type { Metadata } from "next";
import { Poppins, DM_Serif_Display } from "next/font/google";
import "./globals.css";
import ClientLayout from "./ClientLayout";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["300", "400", "500", "600"],
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
    <html
      lang="en"
      className={`${poppins.variable} ${dmserif.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-black">
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}