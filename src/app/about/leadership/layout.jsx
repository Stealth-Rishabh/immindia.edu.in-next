import { generateMetadataForPath } from "@/lib/metadata";

export async function generateMetadata() {
  return generateMetadataForPath("/about/leadership");
}

export default function LeadershipLayout({ children }) {
  return children;
}
