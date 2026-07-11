import type { Metadata } from "next";
import { Source_Sans_3 } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { siteUrl } from "@/lib/utils";
import { institution } from "@/lib/siteConfig";

const sourceSans = Source_Sans_3({ subsets: ["latin"], variable: "--font-sans" });

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL;

export const metadata: Metadata = {
  ...(baseUrl ? { metadataBase: new URL(baseUrl) } : {}),
  title: {
    default: `${institution.fullName} (GIA)`,
    template: `%s | ${institution.fullName}`,
  },
  description:
    "The Groundwater Intelligence Institute of Africa advances groundwater research, innovation, and partnerships to strengthen potable-water security across Africa.",
  openGraph: {
    title: `${institution.fullName} (GIA)`,
    description:
      "Advancing groundwater research, innovation, and partnerships for sustainable potable-water access across Africa.",
    url: siteUrl("/"),
    siteName: institution.fullName,
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
    <html lang="en" className={sourceSans.variable}>
      <body className="flex min-h-screen flex-col font-sans antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
