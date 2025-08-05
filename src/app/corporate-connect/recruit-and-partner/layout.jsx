import { generateMetadataForPath } from "@/lib/metadata";

export async function generateMetadata() {
  return generateMetadataForPath("/corporate-connect/recruit-and-partner");
}

export default function RecruitAndPartnerLayout({ children }) {
  return children;
}
