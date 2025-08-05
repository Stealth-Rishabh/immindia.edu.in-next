import { Metadata } from "next";

export const metadata = {
  title: "Blog | IMM India",
  description:
    "Discover the latest insights, articles, and updates from IMM India. Stay informed about management education, career opportunities, and industry trends.",
  keywords:
    "IMM blog, management education, business school, career insights, industry trends, IMM India",
  authors: [{ name: "blogimmadmin" }],
  creator: "IMM India",
  publisher: "IMM India",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://immindia.edu.in"),
  alternates: {
    canonical: "https://immindia.edu.in/blog",
  },
  openGraph: {
    title: "Blog | IMM India",
    description:
      "Discover the latest insights, articles, and updates from IMM India. Stay informed about management education, career opportunities, and industry trends.",
    url: "https://immindia.edu.in/blog",
    siteName: "IMM India",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog | IMM India",
    description:
      "Discover the latest insights, articles, and updates from IMM India.",
  },
};

export default function BlogLayout({ children }) {
  return children;
}
