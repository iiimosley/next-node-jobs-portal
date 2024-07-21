"use client";

import React, { use, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import useJobScore from "@hooks/useJobScore";
import { MAX_POINTS, MIN_POINTS } from "@lib/constants/pointSystem";
import { JOB_SCORE_PARAMETERS } from "@lib/constants/jobScoreParameters";
import { JobScore, JobScoreKey } from "@lib/types/provider/providerScore";
import { parseNumeric } from "@lib/utils/parseNumeric";
import { normalizeToRange } from "@lib/utils/normalizeToRange";

export default function PointBuy({
  title,
}: {
  title: string;
}) {
  const [jobScore, setJobScore] = useJobScore();
  const searchParams = useSearchParams();

  useEffect(() => {
    setJobScore(
      Object.fromEntries(
        JOB_SCORE_PARAMETERS.map((parameter: JobScoreKey) => [
          parameter,
          normalizeToRange(
            parseNumeric(searchParams.get(parameter)) || jobScore[parameter],
            MIN_POINTS,
            MAX_POINTS
          ),
        ])
      ) as JobScore
    );
  }, [searchParams]);

  const onSlide = ({
    target: { name, value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    setJobScore({
      [name]: parseInt(value),
    });
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
