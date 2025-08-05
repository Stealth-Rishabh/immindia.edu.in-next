import { generateMetadataForPath } from "@/lib/metadata";

export async function generateMetadata() {
  return generateMetadataForPath("/placements/placement-records");
}

export default function PlacementRecordsLayout({ children }) {
  return children;
}
