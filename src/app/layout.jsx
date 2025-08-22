import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Providers from "../components/Providers";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import { generateMetadataForPath } from "@/lib/metadata";
import ScrollToTop from "../components/ScrollToTop";
import WhatsAppButton from "../components/WhatsAppButton";
import { GoogleTagManager, GoogleAnalytics } from "@next/third-parties/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  ...generateMetadataForPath("/"),
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
    other: {
      rel: "icon",
      url: "/favicon.ico",
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      {process.env.NODE_ENV === "production" && (
        <>
          <GoogleTagManager gtmId="GTM-TV5GXGQ" />
          <GoogleAnalytics gaId="G-08HKSL82EN" />
        </>
      )}
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Providers>
          <Header />
          <main>{children}</main>
          <Footer />
          <ScrollToTop />
          <WhatsAppButton />
        </Providers>
      </body>
    </html>
  );
}
