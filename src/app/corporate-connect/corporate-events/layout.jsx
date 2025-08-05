import { generateMetadataForPath } from "@/lib/metadata";

export async function generateMetadata() {
  return generateMetadataForPath("/corporate-connect/corporate-events");
}

export default function CorporateEventsLayout({ children }) {
  return children;
}
