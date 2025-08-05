import { generateMetadataForPath } from "@/lib/metadata";

export async function generateMetadata() {
  return generateMetadataForPath("/placements/campus-recruitment");
}

export default function CampusRecruitmentLayout({ children }) {
  return children;
}
