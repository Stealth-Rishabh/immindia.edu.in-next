import { generateMetadataForPath } from "@/lib/metadata";

export async function generateMetadata() {
  return generateMetadataForPath("/feedback");
}

export default function FeedbackLayout({ children }) {
  return children;
}
