import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Topbar from "@/components/shared/Topbar";
import Footer from "@/components/shared/Footer";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "তথ্য ও যোগাযোগ প্রযুক্তি বিভাগ",
  description: "গণপ্রজাতন্ত্রী বাংলাদেশ সরকার",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
 
 <body className={inter.className}>
      <Topbar/>
        {children}
        <Footer/>
        </body>

      
    </html>
  );
}
