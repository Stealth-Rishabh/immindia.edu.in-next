import { Metadata } from "next";

// This function generates metadata for each blog post
export async function generateMetadata({ params }) {
  const { slug } = params;

  try {
    const response = await fetch(
      `https://stealthlearn.in/immblog/wp-json/wp/v2/posts?slug=${slug}&_embed`,
      { next: { revalidate: 3600 } } // Cache for 1 hour
    );

    if (!response.ok) {
      return {
        title: "Post Not Found | IMM India",
        description: "The requested blog post could not be found.",
      };
    }

    const posts = await response.json();

    if (posts.length === 0) {
      return {
        title: "Post Not Found | IMM India",
        description: "The requested blog post could not be found.",
      };
    }

    const post = posts[0];

    // Strip HTML tags from excerpt for meta description
    const metaDescription = post.excerpt.rendered
      .replace(/<[^>]+>/g, "")
      .slice(0, 160);

    const canonicalUrl = `https://immindia.edu.in/blog/${slug}`;
    const featuredImage = post._embedded?.["wp:featuredmedia"]?.[0]?.source_url;

    return {
      title: `${post.title.rendered} | IMM India`,
      description: metaDescription,
      keywords:
        post._embedded?.["wp:term"]?.[0]?.map((term) => term.name).join(", ") ||
        "",
      authors: [{ name: "blogimmadmin" }],
      creator: "IMM India",
      publisher: "IMM India",
      formatDetection: {
        email: false,
        address: false,
        telephone: false,
      },
      metadataBase: new URL("https://immindia.edu.in"),
      alternates: {
        canonical: canonicalUrl,
      },
      openGraph: {
        title: post.title.rendered,
        description: metaDescription,
        url: canonicalUrl,
        siteName: "IMM India",
        images: featuredImage
          ? [
              {
                url: featuredImage,
                width: 1200,
                height: 630,
                alt: post.title.rendered,
              },
            ]
          : [],
        locale: "en_US",
        type: "article",
      },
      twitter: {
        card: "summary_large_image",
        title: post.title.rendered,
        description: metaDescription,
        images: featuredImage ? [featuredImage] : [],
      },
      other: {
        "article:published_time": post.date,
        "article:modified_time": post.modified,
        "article:author": "blogimmadmin",
        "article:section": "Blog",
        "article:tag":
          post._embedded?.["wp:term"]?.[0]
            ?.map((term) => term.name)
            .join(", ") || "",
      },
    };
  } catch (error) {
    console.error("Error generating metadata:", error);
    return {
      title: "Blog Post | IMM India",
      description: "Read the latest insights and articles from IMM India.",
    };
  }
}

export default function BlogLayout({ children }) {
  return children;
}
