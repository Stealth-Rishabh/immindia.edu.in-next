import { generateMetadataForPath } from "@/lib/metadata";

export async function generateMetadata() {
  return generateMetadataForPath("/programs");
}

export default function ProgramsLayout({ children }) {
  return children;
}
