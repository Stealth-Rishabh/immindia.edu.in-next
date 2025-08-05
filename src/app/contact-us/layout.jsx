import { generateMetadataForPath } from "@/lib/metadata";

export async function generateMetadata() {
  return generateMetadataForPath("/contact-us");
}

export default function ContactUsLayout({ children }) {
  return children;
}
