import { generateMetadataForPath } from "@/lib/metadata";

export async function generateMetadata() {
  return generateMetadataForPath("/placements");
}

export default function PlacementsLayout({ children }) {
  return children;
}
