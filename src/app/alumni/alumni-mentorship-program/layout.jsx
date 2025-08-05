import { generateMetadataForPath } from "@/lib/metadata";

export async function generateMetadata() {
  return generateMetadataForPath("/alumni/alumni-mentorship-program");
}

export default function AlumniMentorshipProgramLayout({ children }) {
  return children;
}
