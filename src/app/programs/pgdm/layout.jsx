import { generateMetadataForPath } from "@/lib/metadata";

export async function generateMetadata() {
  return generateMetadataForPath("/programs/pgdm");
}

export default function PgdmLayout({ children }) {
  return children;
}
