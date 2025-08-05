import { generateMetadataForPath } from "@/lib/metadata";

export async function generateMetadata() {
  return generateMetadataForPath("/about/accreditations-awards");
}

export default function AccreditationsAwardsLayout({ children }) {
  return children;
}
