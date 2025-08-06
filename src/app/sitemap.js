import { headers } from "next/headers";

// Force dynamic rendering to ensure fresh data on each request
export const dynamic = "force-dynamic";

// API endpoints
const WORDPRESS_BLOG_API =
  "https://stealthlearn.in/immblog/wp-json/wp/v2/posts";
const CAREER_API = process.env.NEXT_PUBLIC_API_BASE_URL
  ? `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/indexCareer.php`
  : "https://immindia.edu.in/api/indexCareer.php";

// Static routes with their metadata
const staticRoutes = [
  {
    url: "/",
    lastModified: new Date(),
    changeFrequency: "daily",
    priority: 1.0,
  },
  {
    url: "/admissions",
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.9,
  },
  {
    url: "/aicte-approval",
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.6,
  },
  {
    url: "/blog",
    lastModified: new Date(),
    changeFrequency: "daily",
    priority: 0.9,
  },
  {
    url: "/career",
    lastModified: new Date(),
    changeFrequency: "daily",
    priority: 0.9,
  },
  {
    url: "/contact-us",
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.9,
  },
  {
    url: "/disclaimer",
    lastModified: new Date(),
    changeFrequency: "yearly",
    priority: 0.3,
  },
  {
    url: "/feedback",
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.6,
  },
  {
    url: "/nirf",
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.6,
  },
  {
    url: "/privacy-policy",
    lastModified: new Date(),
    changeFrequency: "yearly",
    priority: 0.3,
  },
  {
    url: "/programs",
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.9,
  },
  {
    url: "/programs/bba",
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.9,
  },
  {
    url: "/programs/pgdm",
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.9,
  },
  // About section routes
  {
    url: "/about/accreditations-awards",
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.7,
  },
  {
    url: "/about/advisory-board",
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.7,
  },
  {
    url: "/about/imm-legacy",
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.7,
  },
  {
    url: "/about/imm-partners",
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.7,
  },
  {
    url: "/about/leadership",
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.7,
  },
  // Alumni section routes
  {
    url: "/alumni/alumni-mentorship-program",
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.7,
  },
  {
    url: "/alumni/dazzling-divas",
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.7,
  },
  {
    url: "/alumni/dazzling-divas-and-hall-of-fame",
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.7,
  },
  {
    url: "/alumni/hall-of-fame",
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.7,
  },
  // Corporate Connect section routes
  {
    url: "/corporate-connect/corporate-events",
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.7,
  },
  {
    url: "/corporate-connect/industry-lectures-and-webinars",
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.7,
  },
  {
    url: "/corporate-connect/industry-visit",
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.7,
  },
  {
    url: "/corporate-connect/recruit-and-partner",
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.7,
  },
  // Faculty and Research section routes
  {
    url: "/faculty-and-research/faculty",
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.8,
  },
  {
    url: "/faculty-and-research/international-conference",
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.7,
  },
  {
    url: "/faculty-and-research/national-conference",
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.7,
  },
  {
    url: "/faculty-and-research/research",
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.8,
  },
  // Life at IMM section routes
  {
    url: "/life-at-imm/clubs-at-imm",
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.7,
  },
  {
    url: "/life-at-imm/events-and-activities",
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.7,
  },
  {
    url: "/life-at-imm/gallery",
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.7,
  },
  // Placements section routes
  {
    url: "/placements/campus-recruitment",
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.8,
  },
  {
    url: "/placements/placement-records",
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.8,
  },
];

// Fetch blog posts from WordPress API
async function fetchBlogPosts() {
  try {
    const response = await fetch(
      `${WORDPRESS_BLOG_API}?per_page=100&_fields=slug,modified,status`,
      {
        next: { revalidate: 3600 }, // Cache for 1 hour
      }
    );

    if (!response.ok) {
      console.error("Failed to fetch blog posts:", response.status);
      return [];
    }

    const posts = await response.json();

    // Filter only published posts and ensure they have required fields
    const publishedPosts = posts.filter(
      (post) => post.status === "publish" && post.slug && post.modified
    );

    return publishedPosts.map((post) => ({
      url: `/blog/${post.slug}`,
      lastModified: new Date(post.modified),
      changeFrequency: "weekly",
      priority: 0.7,
    }));
  } catch (error) {
    console.error("Error fetching blog posts:", error);
    return [];
  }
}

// Fetch career posts from custom backend API
async function fetchCareerPosts() {
  try {
    const response = await fetch(`${CAREER_API}?scope=active`, {
      next: { revalidate: 3600 }, // Cache for 1 hour
    });

    if (!response.ok) {
      console.error("Failed to fetch career posts:", response.status);
      return [];
    }

    const careers = await response.json();

    // Filter only active careers and ensure they have required fields
    const activeCareers = careers.filter(
      (career) =>
        career.slug &&
        (career.status === "active" ||
          career.status === "published" ||
          !career.status)
    );

    return activeCareers.map((career) => ({
      url: `/career/${career.slug}`,
      lastModified: new Date(
        career.updated_at || career.created_at || career.modified || Date.now()
      ),
      changeFrequency: "weekly",
      priority: 0.7,
    }));
  } catch (error) {
    console.error("Error fetching career posts:", error);
    return [];
  }
}

export default async function sitemap() {
  const headersList = headers();
  const domain = headersList.get("host") || "immindia.edu.in";
  const protocol = process.env.NODE_ENV === "production" ? "https" : "http";
  const baseUrl = `${protocol}://${domain}`;

  // Fetch dynamic content
  const [blogPosts, careerPosts] = await Promise.all([
    fetchBlogPosts(),
    fetchCareerPosts(),
  ]);

  // Combine static and dynamic routes
  const allRoutes = [...staticRoutes, ...blogPosts, ...careerPosts];

  // Add base URL to all routes
  return allRoutes.map((route) => ({
    ...route,
    url: `${baseUrl}${route.url}`,
  }));
}
