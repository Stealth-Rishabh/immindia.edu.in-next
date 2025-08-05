import { generateMetadataForPath } from "@/lib/metadata";

export async function generateMetadata() {
  return generateMetadataForPath("/life-at-imm/gallery");
}

export default function GalleryLayout({ children }) {
  return children;
}
