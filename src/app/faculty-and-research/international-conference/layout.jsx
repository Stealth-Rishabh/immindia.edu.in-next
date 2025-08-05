import { generateMetadataForPath } from "@/lib/metadata";

export async function generateMetadata() {
  return generateMetadataForPath(
    "/faculty-and-research/international-conference"
  );
}

export default function InternationalConferenceLayout({ children }) {
  return children;
}
