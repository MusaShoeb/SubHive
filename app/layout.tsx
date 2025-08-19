import type { Metadata } from "next";
import {Cinzel, Crimson_Pro } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/navbar";

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["400", "500"]
});

const crimsonPro = Crimson_Pro({
  variable: "--font-crimson-pro",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Class Minaret",
  description: "A platform for freelance substitute teachers to display their acheivements and be recruited by schools.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${cinzel.variable} ${crimsonPro.variable} antialiased`}
      >
        <NavBar></NavBar>
        {children}
      </body>
    </html>
  );
}
