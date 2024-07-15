import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import Header from "@/components/Header";
import { Analytics } from "@vercel/analytics/react"
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TaskChain",
  description: "Discover the latest crypto airdrops and manage your tasks effortlessly. Stay informed and organized with TaskChain, where crypto and productivity meet.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-w-[200px]`}>
        <Header />
        {children}
      </body>
      <Analytics />
    </html>
  );
}
