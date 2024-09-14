"use client";

import React from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { MAX_POINTS, MIN_POINTS } from "@lib/constants/pointSystem";
import { JobScore } from "@lib/types/provider/providerScore";

export default function PointBuy({
  title,
  jobScore,
}: {
  title: string;
  jobScore: JobScore;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const onSlide = ({
    target: { name, value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set(name, value);

    router.push(pathname + "?" + params.toString(), { scroll: false });
  };

  return (
    <div>
      <div className="font-semibold text-lg italic mb-2">{title}</div>
      {Object.entries(jobScore).map(([attribute, score]) => (
        <div key={`point-attribute-${attribute}`}>
          <label>{attribute}</label>
          <input
            type="range"
            name={attribute}
            min={MIN_POINTS}
            max={MAX_POINTS}
            value={score}
            className="range range-sm"
            step="1"
            onChange={onSlide}
          />
        </div>
      ))}
    </div>
  );
}
