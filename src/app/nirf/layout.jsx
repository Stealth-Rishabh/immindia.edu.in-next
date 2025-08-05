import { generateMetadataForPath } from "@/lib/metadata";

export async function generateMetadata() {
  return generateMetadataForPath("/nirf");
}

export default function NirfLayout({ children }) {
  return children;
}
