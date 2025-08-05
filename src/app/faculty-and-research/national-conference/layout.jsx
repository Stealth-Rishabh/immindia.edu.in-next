import { generateMetadataForPath } from "@/lib/metadata";

export async function generateMetadata() {
  return generateMetadataForPath("/faculty-and-research/national-conference");
}

export default function NationalConferenceLayout({ children }) {
  return children;
}
