import { generateMetadataForPath } from "@/lib/metadata";

export async function generateMetadata() {
  return generateMetadataForPath("/disclaimer");
}

export default function DisclaimerLayout({ children }) {
  return children;
}
