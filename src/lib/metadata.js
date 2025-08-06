import seoMetadata from "../data/imm_seo_metadata.json";

export function findMetadataByPath(path) {
  // Remove trailing slash if present
  const cleanPath = path.endsWith("/") ? path.slice(0, -1) : path;

  // Find metadata for the exact path
  const metadata = seoMetadata.find((item) => item.path === cleanPath);

  if (metadata) {
    return {
      title: metadata.title,
      description: metadata.description,
      canonical: `https://immindia.edu.in${metadata.canonical}`,
    };
  }

  // If no exact match, return default metadata
  return {
    title: "Best MBA Colleges in Delhi NCR | PGDM Colleges in India | IMM ",
    description:
      "Institute of Marketing & Management (IMM) is a top-ranked MBA college in Delhi. Industry-focused curriculum, excellent placements, and strong alumni network.",
    canonical: `https://immindia.edu.in${cleanPath}`,
  };
}

export function generateMetadataForPath(path) {
  const metadata = findMetadataByPath(path);

  return {
    title: metadata.title,
    description: metadata.description,
    keywords:
      "IMM, Institute of Marketing & Management, MBA colleges in Delhi, PGDM colleges in India, business school",
    openGraph: {
      title: metadata.title,
      description: metadata.description,
      type: "website",
      url: metadata.canonical,
      siteName: "IMM - Institute of Marketing & Management",
    },
    twitter: {
      card: "summary_large_image",
      title: metadata.title,
      description: metadata.description,
    },
    alternates: {
      canonical: metadata.canonical,
    },
  };
}
