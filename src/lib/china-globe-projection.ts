import {
  geoOrthographic,
  geoPath,
  type GeoPermissibleObjects,
} from "d3-geo";
import type { FeatureCollection, Geometry } from "geojson";
import chinaBorderData from "@/data/china-border.json";
import chinaProvincesData from "@/data/china-provinces.json";

/** Globe layout — tuned so China reads clearly on the night side (reference style) */
export const GLOBE_CONFIG = {
  width: 720,
  height: 720,
  cx: 360,
  cy: 355,
  radius: 278,
  /** d3 orthographic rotation: [-longitude, -latitude] */
  rotation: [-104, -34] as [number, number],
};

export function createGlobeProjection() {
  const { cx, cy, radius, rotation } = GLOBE_CONFIG;
  return geoOrthographic()
    .scale(radius)
    .translate([cx, cy])
    .rotate([rotation[0], rotation[1], 0])
    .clipAngle(90);
}

export function getChinaBorderPath(): string | null {
  const projection = createGlobeProjection();
  const path = geoPath(projection);
  const feature = chinaBorderData.features[0];
  if (!feature) return null;
  return path(feature as GeoPermissibleObjects) ?? null;
}

export function getProvincePaths(): string[] {
  const projection = createGlobeProjection();
  const path = geoPath(projection);
  const collection = chinaProvincesData as FeatureCollection<Geometry>;

  return collection.features
    .map((feature) => path(feature as GeoPermissibleObjects))
    .filter((d): d is string => Boolean(d));
}

export function projectPoint(lng: number, lat: number): [number, number] | null {
  const projection = createGlobeProjection();
  const p = projection([lng, lat]);
  if (!p) return null;
  return p;
}
