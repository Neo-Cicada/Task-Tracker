import { Inter } from "next/font/google";
import "../globals.css";
import Header from "@/components/Header";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Airdrops Task Tracker",
  description: "Airdrop",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} border border-red-500 `}>
        <Header/>
        {children}
      </body>
    </html>
  );
}
