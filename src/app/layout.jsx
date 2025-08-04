import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Providers from "../components/Providers";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "IMM - Best MBA Colleges in Delhi NCR | PGDM Colleges in India",
  description:
    "Institute of marketing & management is a top-ranked MBA college in Delhi. Industry-focused curriculum, excellent placements, and strong alumni network.",
  keywords:
    "MBA colleges in Delhi, PGDM colleges in India, IMM, Institute of Marketing & Management",
  openGraph: {
    title: "IMM - Best MBA Colleges in Delhi NCR | PGDM Colleges in India",
    description:
      "Institute of marketing & management is a top-ranked MBA college in Delhi. Industry-focused curriculum, excellent placements, and strong alumni network.",
    type: "website",
    url: "https://immindia.edu.in",
  },
  twitter: {
    card: "summary_large_image",
    title: "IMM - Best MBA Colleges in Delhi NCR | PGDM Colleges in India",
    description:
      "Institute of marketing & management is a top-ranked MBA college in Delhi. Industry-focused curriculum, excellent placements, and strong alumni network.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Providers>
          <Header />
          <main>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
