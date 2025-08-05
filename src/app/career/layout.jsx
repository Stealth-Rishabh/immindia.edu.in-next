import { generateMetadataForPath } from "@/lib/metadata";

export async function generateMetadata() {
  return generateMetadataForPath("/career");
}

export default function CareerLayout({ children }) {
  return children;
}
