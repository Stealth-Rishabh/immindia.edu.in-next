import { generateMetadataForPath } from "@/lib/metadata";

export async function generateMetadata() {
  return generateMetadataForPath("/about");
}

export default function AboutLayout({ children }) {
  return children;
}
