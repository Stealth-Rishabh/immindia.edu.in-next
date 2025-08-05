import { generateMetadataForPath } from "@/lib/metadata";

export async function generateMetadata() {
  return generateMetadataForPath(
    "/corporate-connect/industry-lectures-and-webinars"
  );
}

export default function IndustryLecturesAndWebinarsLayout({ children }) {
  return children;
}
