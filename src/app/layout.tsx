import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import type { Metadata } from "next";
import { Smooch_Sans } from "next/font/google";
import "./globals.css";

const font = Smooch_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Promotional Site",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${font.className} antialiased`}>
        <div className="flex flex-col px-4 lg:px-6 xl:px-8">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
