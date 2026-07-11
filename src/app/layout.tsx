import type { Metadata } from "next";
import { Source_Sans_3 } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { institution } from "@/lib/siteConfig";
import { createMetadata } from "@/lib/metadata";

const sourceSans = Source_Sans_3({ subsets: ["latin"], variable: "--font-sans" });

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL;

const rootMetadata = createMetadata({
  title: institution.fullName,
  description:
    "The Groundwater Intelligence Academy advances groundwater research, innovation, and partnerships to strengthen potable-water security across Africa.",
  path: "/",
  image: "/images/gia-hero-banner-a.png",
});

export const metadata: Metadata = {
  ...(baseUrl ? { metadataBase: new URL(baseUrl) } : {}),
  ...rootMetadata,
  title: {
    default: `${institution.fullName} (GIA)`,
    template: `%s | ${institution.fullName}`,
  },
  openGraph: {
    ...rootMetadata.openGraph,
    title: `${institution.fullName} (GIA)`,
  },
  twitter: rootMetadata.twitter,
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
