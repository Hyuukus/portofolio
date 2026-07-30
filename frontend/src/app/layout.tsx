import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MyPortfolio - Portofolio Dinamis",
  description: "Website portofolio dinamis siswa XII RPL 1. Dibangun dengan Next.js, Express.js, dan MySQL.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className={`${inter.className} min-h-screen flex flex-col bg-gray-950 text-gray-100`}>
        <Navbar />
        {/* Main diberi flex-1 agar memenuhi ruang sisa dan mendorong footer ke bawah */}
        <main className="flex-1 pt-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}