import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "./navbar";
import { Footer } from ".";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Figma1",
  description: "End SEEF responsive Figma Design",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-white">
        <div className="lg:p-24 p-0">
          <Navbar/>
        </div>
        {children}
        <div className="lg:p-24 lg:py-0 py-[565px]">
          <Footer/>
        </div>
        </body>
    </html>
  );
}
