import { generateMetadataForPath } from "@/lib/metadata";

export async function generateMetadata() {
  return generateMetadataForPath("/faculty-and-research/faculty");
}

export default function FacultyLayout({ children }) {
  return children;
}
