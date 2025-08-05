import { generateMetadataForPath } from "@/lib/metadata";

export async function generateMetadata() {
  return generateMetadataForPath("/faculty-and-research");
}

export default function FacultyAndResearchLayout({ children }) {
  return children;
}
