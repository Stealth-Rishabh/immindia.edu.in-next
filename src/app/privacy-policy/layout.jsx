import { generateMetadataForPath } from "@/lib/metadata";

export async function generateMetadata() {
  return generateMetadataForPath("/privacy-policy");
}

export default function PrivacyPolicyLayout({ children }) {
  return children;
}
