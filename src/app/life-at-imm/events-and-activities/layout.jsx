import { generateMetadataForPath } from "@/lib/metadata";

export async function generateMetadata() {
  return generateMetadataForPath("/life-at-imm/events-and-activities");
}

export default function EventsAndActivitiesLayout({ children }) {
  return children;
}
