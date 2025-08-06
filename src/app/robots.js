import { headers } from "next/headers";

export default function robots() {
  const headersList = headers();
  const domain = headersList.get("host") || "immindia.edu.in";
  const protocol = process.env.NODE_ENV === "production" ? "https" : "http";
  const baseUrl = `${protocol}://${domain}`;

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/admin", "/private", "/api"],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
