import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "@/components/footer";
import Nav from "@/components/nav";
import "./globals.css";
import MobileNav from "@/components/mobile-nav";
import NoJSHeader from "@/components/no-js-header";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Christina Raganit",
  description: "Portfolio website for Christina Raganit.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <noscript>
          <NoJSHeader></NoJSHeader>
        </noscript>

        <Nav></Nav>
        <MobileNav></MobileNav>
        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}
