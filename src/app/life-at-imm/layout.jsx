import { generateMetadataForPath } from "@/lib/metadata";

export async function generateMetadata() {
  return generateMetadataForPath("/life-at-imm");
}

export default function LifeAtImmLayout({ children }) {
  return children;
}
