import type { Metadata } from "next";
import Head from 'next/head';
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "../public/fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../public/fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});
const magicBubble = localFont({
  src: "../public/fonts/MagicBubbleReg.ttf",
  variable: "--font-magic-bubble",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Misha Burnayev",
  description: "Created using Next.js",
  // when favicon is valled 'favicon.ico', it can't be found for some reason
  // also the icon has to be in the same directory as layout or it isn't found
  icons: "icon.ico"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} ${magicBubble.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
