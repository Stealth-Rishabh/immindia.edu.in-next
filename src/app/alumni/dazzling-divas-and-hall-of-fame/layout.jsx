import { generateMetadataForPath } from "@/lib/metadata";

export async function generateMetadata() {
  return generateMetadataForPath("/alumni/dazzling-divas-and-hall-of-fame");
}

export default function DazzlingDivasAndHallOfFameLayout({ children }) {
  return children;
}
