import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import "./globals.css";

const notoSans = Noto_Sans({
  variable: "--font-noto-sans",
  subsets: ["latin"],
  weight: ["400", "500", "700"], // You can choose the weights you need
});

export const metadata: Metadata = {
  title: "John Lester Escarlan",
  description: "A CMSC 192 Self Introduction.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${notoSans.variable} antialiased min-h-screen flex flex-col`}
      >
        <main className="flex-1 web-layout">{children}</main>
      </body>
    </html>
  );
}
