import { generateMetadataForPath } from "@/lib/metadata";

export async function generateMetadata() {
  return generateMetadataForPath("/career/[job-opening]");
}

export default function JobOpeningLayout({ children }) {
  return children;
}
