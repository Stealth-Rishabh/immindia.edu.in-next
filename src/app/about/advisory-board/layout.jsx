import { generateMetadataForPath } from "@/lib/metadata";

export async function generateMetadata() {
  return generateMetadataForPath("/about/advisory-board");
}

export default function AdvisoryBoardLayout({ children }) {
  return children;
}
