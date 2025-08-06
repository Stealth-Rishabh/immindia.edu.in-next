import React from "react";
import LandingPage from "./LandingPage/page";

export const metadata = {
  title: "IMM - Best MBA Colleges in Delhi NCR | PGDM Colleges in India",
  description:
    "Institute of marketing & management is a top-ranked MBA college in Delhi. Industry-focused curriculum, excellent placements, and strong alumni network.",
  keywords:
    "MBA colleges in Delhi, PGDM colleges in India, IMM, Institute of Marketing & Management",
  openGraph: {
    title: "IMM - Best MBA Colleges in Delhi NCR | PGDM Colleges in India",
    description:
      "Institute of marketing & management is a top-ranked MBA college in Delhi. Industry-focused curriculum, excellent placements, and strong alumni network.",
    type: "website",
    url: "https://immindia.edu.in",
  },
  twitter: {
    card: "summary_large_image",
    title: "IMM - Best MBA Colleges in Delhi NCR | PGDM Colleges in India",
    description:
      "Institute of marketing & management is a top-ranked MBA college in Delhi. Industry-focused curriculum, excellent placements, and strong alumni network.",
  },
};

const Home = () => {
  return (
    <>
      <LandingPage />
    </>
  );
};

export default Home;
