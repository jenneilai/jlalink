export const ARTICLE_KEYS = [
  "article1",
  "article2",
  "article3",
  "article4",
] as const;

export type ArticleKey = (typeof ARTICLE_KEYS)[number];

export type ArticleCategory =
  | "tradeShows"
  | "sourcing"
  | "quality"
  | "logistics";

export const ARTICLES: {
  key: ArticleKey;
  slug: string;
  category: ArticleCategory;
  image: string;
}[] = [
  {
    key: "article1",
    slug: "canton-fair-preparation",
    category: "tradeShows",
    image:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1400&q=80",
  },
  {
    key: "article2",
    slug: "china-supplier-prospecting",
    category: "sourcing",
    image:
      "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?auto=format&fit=crop&w=1400&q=80",
  },
  {
    key: "article3",
    slug: "factory-audit-checklist",
    category: "quality",
    image:
      "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=1400&q=80",
  },
  {
    key: "article4",
    slug: "import-export-logistics-china",
    category: "logistics",
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1400&q=80",
  },
];

export const ARTICLE_SLUGS = ARTICLES.map((a) => a.slug);

export function getArticleBySlug(slug: string) {
  return ARTICLES.find((a) => a.slug === slug);
}

export function getArticleByKey(key: ArticleKey) {
  return ARTICLES.find((a) => a.key === key);
}
