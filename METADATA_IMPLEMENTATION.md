# IMM Website Metadata Implementation

This document outlines the SEO metadata implementation for the IMM website using Next.js built-in metadata features.

## Overview

The metadata system uses a centralized approach with:

- `src/lib/metadata.js` - Utility functions for metadata generation
- `src/data/imm_seo_metadata.json` - SEO metadata data source
- Layout files in each route directory for metadata generation

## Metadata Structure

Each route has metadata with the following structure:

```json
{
  "path": "/route-path",
  "canonical": "/route-path",
  "title": "Page Title | IMM",
  "description": "Page description for SEO"
}
```

## Implemented Routes

### Root Routes

- `/` - Home page (root layout)
- `/admissions` - Admissions page
- `/career` - Career page
- `/contact-us` - Contact page
- `/blog` - Blog listing page
- `/privacy-policy` - Privacy policy page
- `/disclaimer` - Disclaimer page
- `/aicte-approval` - AICTE approval page
- `/feedback` - Feedback page
- `/nirf` - NIRF documents page
- `/gallery` - Gallery page

### About Section

- `/about` - About section layout
- `/about/imm-legacy` - IMM Legacy page
- `/about/leadership` - Leadership page
- `/about/advisory-board` - Advisory Board page
- `/about/accreditations-awards` - Accreditations & Awards page
- `/about/imm-partners` - IMM Partners page

### Programs Section

- `/programs` - Programs section layout
- `/programs/pgdm` - PGDM program page
- `/programs/bba` - BBA program page

### Corporate Connect Section

- `/corporate-connect` - Corporate Connect section layout
- `/corporate-connect/industry-lectures-and-webinars` - Industry Lectures & Webinars
- `/corporate-connect/industry-visit` - Industry Visit page
- `/corporate-connect/corporate-events` - Corporate Events page
- `/corporate-connect/recruit-and-partner` - Recruit & Partner page

### Faculty & Research Section

- `/faculty-and-research` - Faculty & Research section layout
- `/faculty-and-research/faculty` - Faculty page
- `/faculty-and-research/research` - Research page
- `/faculty-and-research/international-conference` - International Conference page
- `/faculty-and-research/national-conference` - National Conference page

### Life at IMM Section

- `/life-at-imm` - Life at IMM section layout
- `/life-at-imm/events-and-activities` - Events & Activities page
- `/life-at-imm/clubs-at-imm` - Clubs at IMM page
- `/life-at-imm/gallery` - Life at IMM Gallery page

### Placements Section

- `/placements` - Placements section layout
- `/placements/campus-recruitment` - Campus Recruitment page
- `/placements/placement-records` - Placement Records page

### Alumni Section

- `/alumni` - Alumni section layout
- `/alumni/dazzling-divas` - Dazzling Divas page
- `/alumni/hall-of-fame` - Hall of Fame page
- `/alumni/alumni-mentorship-program` - Alumni Mentorship Program page
- `/alumni/dazzling-divas-and-hall-of-fame` - Combined Dazzling Divas & Hall of Fame page

### Dynamic Routes

- `/career/[job-opening]` - Dynamic job opening pages
- `/blog/[slug]` - Dynamic blog post pages (already implemented with custom metadata)

## Metadata Features

### Canonical URLs

All pages have canonical URLs pointing to `https://immindia.edu.in` domain.

### Open Graph Tags

- Title and description for social media sharing
- Website type for general pages
- Article type for blog posts

### Twitter Cards

- Summary large image cards
- Title and description for Twitter sharing

### Keywords

Standard keywords for IMM website including:

- IMM, Institute of Marketing & Management
- MBA colleges in Delhi
- PGDM colleges in India
- Business school

## Implementation Details

### Metadata Utility (`src/lib/metadata.js`)

- `findMetadataByPath(path)` - Finds metadata for a specific path
- `generateMetadataForPath(path)` - Generates complete metadata object with OpenGraph and Twitter tags

### Layout Files

Each route has a `layout.jsx` file that:

- Imports the metadata utility
- Exports `generateMetadataForPath()` function
- Returns children components

### Fallback Metadata

If a route doesn't have specific metadata in the JSON file, it falls back to default IMM metadata.

## Domain Configuration

All canonical URLs use the domain: `https://immindia.edu.in`

## Notes

- Blog posts have dynamic metadata generation from WordPress API
- All metadata is generated server-side for better SEO
- Canonical URLs prevent duplicate content issues
- OpenGraph and Twitter tags ensure proper social media sharing
