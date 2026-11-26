import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Header, Footer, BackToTopFloat, ScrollReveal } from "@/components";

const bricolage = localFont({
  src: "./fonts/bricolage-grotesque-latin.woff2",
  weight: "600 800",
  variable: "--head-font",
  display: "swap",
});

const inter = localFont({
  src: "./fonts/inter-latin.woff2",
  weight: "400 700",
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
  manifest: "/site.webmanifest",
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

