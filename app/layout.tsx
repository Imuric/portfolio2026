import type { Metadata } from "next";
import { Bricolage_Grotesque, Inter } from "next/font/google";
import "./globals.css";
import { Header, Footer, BackToTopFloat, ScrollReveal } from "@/components";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--head-font",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--body-font",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Prathamesh Patil — Product Designer",
  description:
    "Prathamesh Patil - Product Designer | M.Des HCI | B.Tech CSE | Fintech & B2B Specialist | User-Centric Design Advocate",
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.ico" },
    ],
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${bricolage.variable} ${inter.variable}`}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <BackToTopFloat />
        <ScrollReveal />
      </body>
    </html>
  );
}

