import { generateMetadataForPath } from "@/lib/metadata";

export async function generateMetadata() {
  return generateMetadataForPath("/about/imm-partners");
}

export default function ImmPartnersLayout({ children }) {
  return children;
}
