import {
  Search,
  ClipboardCheck,
  Presentation,
  Plane,
  Handshake,
  RefreshCw,
  type LucideIcon,
} from "lucide-react";
import type { ServiceImageKey } from "@/lib/service-images";

export const serviceConfig: {
  key: ServiceImageKey;
  icon: LucideIcon;
}[] = [
  { key: "prospecting", icon: Search },
  { key: "qualityInspection", icon: ClipboardCheck },
  { key: "tradeShows", icon: Presentation },
  { key: "businessTrips", icon: Plane },
  { key: "importExport", icon: Handshake },
  { key: "supplierManagement", icon: RefreshCw },
];
