import { generateMetadataForPath } from "@/lib/metadata";

export async function generateMetadata() {
  return generateMetadataForPath("/admissions");
}

export default function AdmissionsLayout({ children }) {
  return children;
}
