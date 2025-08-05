import { generateMetadataForPath } from "@/lib/metadata";

export async function generateMetadata() {
  return generateMetadataForPath("/aicte-approval");
}

export default function AicteApprovalLayout({ children }) {
  return children;
}
