import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import Footer from "../components/moleculas/Footer/Footer";
import Header from "../components/moleculas/Header/Header";
import "./globals.css";

const montserrat = Montserrat({ weight: ["400", "700"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Despertar para a ciência",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <div className={`${montserrat.className} antialiased`}>{children}</div>
        <Footer />
      </body>
    </html>
  );
}
