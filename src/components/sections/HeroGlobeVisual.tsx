"use client";

import Image from "next/image";
import { useId, useMemo } from "react";
import { siteImages } from "@/lib/site-config";
import {
  GLOBE_CONFIG,
  getChinaBorderPath,
  getProvincePaths,
  projectPoint,
} from "@/lib/china-globe-projection";
import { cn } from "@/lib/utils";

interface HeroGlobeVisualProps {
  className?: string;
  compact?: boolean;
}

export function HeroGlobeVisual({ className, compact }: HeroGlobeVisualProps) {
  const uid = useId().replace(/:/g, "");
  const glow = `orangeGlow-${uid}`;
  const strongGlow = `strongOrangeGlow-${uid}`;
  const clip = `globeClip-${uid}`;

  const { borderPath, provincePaths, hub } = useMemo(() => {
    const border = getChinaBorderPath();
    const provinces = getProvincePaths();
    const gz = projectPoint(113.26, 23.13);
    return {
      borderPath: border,
      provincePaths: provinces,
      hub: gz ? { x: gz[0], y: gz[1] } : null,
    };
  }, []);

  const { cx, cy, radius } = GLOBE_CONFIG;

  return (
    <div
      className={cn("hero-globe-cinematic relative h-full w-full", className)}
      aria-hidden
    >
      <div
        className={cn(
          "relative mx-auto aspect-square h-full max-h-full",
          compact ? "max-w-[680px]" : "max-w-[1020px]"
        )}
      >
        {/* Night Earth */}
        <div className="hero-globe-sphere absolute inset-0 overflow-hidden rounded-full">
          <Image
            src={siteImages.heroEarthNight}
            alt=""
            fill
            priority
            className="object-cover object-[54%_46%] scale-[1.08]"
            sizes="(max-width: 768px) 100vw, 60vw"
          />

          {/* Night-side depth (left) */}
          <div className="absolute inset-0 bg-[linear-gradient(108deg,rgba(0,0,0,0.15)_0%,rgba(0,0,0,0.45)_38%,rgba(0,0,0,0.08)_62%,transparent_100%)]" />

          {/* Dawn atmosphere (right edge — reference style) */}
          <div className="absolute inset-0 bg-[linear-gradient(258deg,transparent_42%,rgba(120,185,255,0.12)_68%,rgba(160,210,255,0.28)_84%,rgba(200,230,255,0.1)_100%)]" />
        </div>

        {/* Atmospheric rim */}
        <div className="pointer-events-none absolute -inset-[2%] rounded-full shadow-[0_0_120px_rgba(255,120,40,0.12),0_0_60px_rgba(100,180,255,0.15)]" />
        <div className="pointer-events-none absolute inset-0 rounded-full ring-1 ring-[rgba(120,180,255,0.2)]" />

        {/* Accurate China map overlay */}
        <svg
          viewBox={`0 0 ${GLOBE_CONFIG.width} ${GLOBE_CONFIG.height}`}
          className="absolute inset-0 h-full w-full"
        >
          <defs>
            <clipPath id={clip}>
              <circle cx={cx} cy={cy} r={radius} />
            </clipPath>
            <filter id={glow} x="-80%" y="-80%" width="260%" height="260%">
              <feGaussianBlur stdDeviation="3.5" result="b" />
              <feMerge>
                <feMergeNode in="b" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            <filter id={strongGlow} x="-100%" y="-100%" width="300%" height="300%">
              <feGaussianBlur stdDeviation="9" result="b" />
              <feMerge>
                <feMergeNode in="b" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          <g clipPath={`url(#${clip})`}>
            {/* Provincial boundaries — key for instant China recognition */}
            {provincePaths.map((d, i) => (
              <path
                key={i}
                d={d}
                fill="none"
                stroke="#ff9f43"
                strokeWidth="0.65"
                strokeOpacity="0.72"
                filter={`url(#${glow})`}
              />
            ))}

            {/* National border — triple glow like reference */}
            {borderPath && (
              <>
                <path
                  d={borderPath}
                  fill="rgba(255,120,30,0.06)"
                  stroke="none"
                  filter={`url(#${strongGlow})`}
                />
                <path
                  d={borderPath}
                  fill="none"
                  stroke="rgba(255,100,0,0.55)"
                  strokeWidth="7"
                  filter={`url(#${strongGlow})`}
                />
                <path
                  d={borderPath}
                  fill="none"
                  stroke="#ff8c00"
                  strokeWidth="2.8"
                  className="hero-china-border"
                  filter={`url(#${glow})`}
                />
                <path
                  d={borderPath}
                  fill="none"
                  stroke="#ffd080"
                  strokeWidth="1"
                  opacity="0.85"
                />
              </>
            )}

            {/* Guangzhou hub — subtle JLA accent */}
            {hub && (
              <g filter={`url(#${strongGlow})`}>
                <circle
                  cx={hub.x}
                  cy={hub.y}
                  r="12"
                  fill="rgba(0,196,180,0.25)"
                  className="hero-hub-pulse"
                />
                <circle
                  cx={hub.x}
                  cy={hub.y}
                  r="5"
                  fill="#00c4b4"
                  stroke="#fff"
                  strokeWidth="1.5"
                />
              </g>
            )}
          </g>

          {/* Globe edge atmosphere */}
          <circle
            cx={cx}
            cy={cy}
            r={radius}
            fill="none"
            stroke="rgba(130,190,255,0.22)"
            strokeWidth="2.5"
          />
        </svg>
      </div>
    </div>
  );
}
