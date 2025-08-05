import { generateMetadataForPath } from "@/lib/metadata";

export async function generateMetadata() {
  return generateMetadataForPath("/alumni/hall-of-fame");
}

export default function HallOfFameLayout({ children }) {
  return children;
}
