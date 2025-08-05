import { generateMetadataForPath } from "@/lib/metadata";

export async function generateMetadata() {
  return generateMetadataForPath("/corporate-connect/industry-visit");
}

export default function IndustryVisitLayout({ children }) {
  return children;
}
