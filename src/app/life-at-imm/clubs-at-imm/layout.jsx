import { generateMetadataForPath } from "@/lib/metadata";

export async function generateMetadata() {
  return generateMetadataForPath("/life-at-imm/clubs-at-imm");
}

export default function ClubsAtImmLayout({ children }) {
  return children;
}
