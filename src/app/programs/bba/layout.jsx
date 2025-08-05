import { generateMetadataForPath } from "@/lib/metadata";

export async function generateMetadata() {
  return generateMetadataForPath("/programs/bba");
}

export default function BbaLayout({ children }) {
  return children;
}
