import { generateMetadataForPath } from "@/lib/metadata";

export async function generateMetadata() {
  return generateMetadataForPath("/alumni/dazzling-divas");
}

export default function DazzlingDivasLayout({ children }) {
  return children;
}
