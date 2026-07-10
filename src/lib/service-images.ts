export type ServiceImageKey =
  | "prospecting"
  | "qualityInspection"
  | "tradeShows"
  | "businessTrips"
  | "importExport"
  | "supplierManagement";

/** Unique images — not reused in hero, about, or blog articles */
export const serviceImages: Record<
  ServiceImageKey,
  { src: string; alt: { en: string; zh: string } }
> = {
  prospecting: {
    src: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&fit=crop&w=900&q=80",
    alt: {
      en: "Supplier sourcing and factory prospecting meeting",
      zh: "供应商寻源与工厂开发会议",
    },
  },
  qualityInspection: {
    src: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=900&q=80",
    alt: {
      en: "Factory quality inspection on production line",
      zh: "工厂产线质量检验",
    },
  },
  tradeShows: {
    src: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=900&q=80",
    alt: {
      en: "Canton Fair and trade exhibition halls",
      zh: "广交会及展会展馆",
    },
  },
  businessTrips: {
    src: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=900&q=80",
    alt: {
      en: "Business travel planning for China sourcing trips",
      zh: "中国寻源商务行程规划",
    },
  },
  importExport: {
    src: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=900&q=80",
    alt: {
      en: "Import and export consulting with trade documentation",
      zh: "进出口咨询与贸易文件",
    },
  },
  supplierManagement: {
    src: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=80",
    alt: {
      en: "Ongoing supplier relationship management",
      zh: "供应商长期关系管理",
    },
  },
};
