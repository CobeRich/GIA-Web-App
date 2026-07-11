import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { siteUrl } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL;

export const metadata: Metadata = {
  ...(baseUrl ? { metadataBase: new URL(baseUrl) } : {}),
  title: {
    default: "Groundwater Institute of Africa (GIA)",
    template: "%s | Groundwater Institute of Africa",
  },
  description:
    "The Groundwater Institute of Africa (GIA) advances groundwater research, innovation, and partnerships to secure potable water access across Africa.",
  openGraph: {
    title: "Groundwater Institute of Africa (GIA)",
    description:
      "Advancing groundwater research, innovation, and partnerships for potable water access across Africa.",
    url: siteUrl("/"),
    siteName: "Groundwater Institute of Africa",
    // TODO: Replace with a real Open Graph image asset.
    images: [{ url: "/og-image-placeholder.jpg", width: 1200, height: 630 }],
    locale: "en_GB",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="flex min-h-screen flex-col font-sans antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
