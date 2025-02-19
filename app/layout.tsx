import { Inter } from "next/font/google";
import "./globals.css";

const interFont = Inter({ subsets: ["latin"], weight: "400", variable: "--font-inter" });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${interFont.variable} antialiased`}>{children}</body>
    </html>
  );
}
