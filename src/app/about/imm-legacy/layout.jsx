import { generateMetadataForPath } from "@/lib/metadata";

export async function generateMetadata() {
  return generateMetadataForPath("/about/imm-legacy");
}

export default function ImmLegacyLayout({ children }) {
  return children;
}
