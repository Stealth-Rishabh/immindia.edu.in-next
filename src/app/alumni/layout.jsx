import { generateMetadataForPath } from "@/lib/metadata";

export async function generateMetadata() {
  return generateMetadataForPath("/alumni");
}

export default function AlumniLayout({ children }) {
  return children;
}
