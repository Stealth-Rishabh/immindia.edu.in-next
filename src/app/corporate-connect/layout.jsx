import { generateMetadataForPath } from "@/lib/metadata";

export async function generateMetadata() {
  return generateMetadataForPath("/corporate-connect");
}

export default function CorporateConnectLayout({ children }) {
  return children;
}
