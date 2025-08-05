import { generateMetadataForPath } from "@/lib/metadata";

export async function generateMetadata() {
  return generateMetadataForPath("/faculty-and-research/research");
}

export default function ResearchLayout({ children }) {
  return children;
}
