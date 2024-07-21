"use client";

import React from "react";
import useJobScore from "@hooks/useJobScore";
import {
  MAX_POINTS,
  MIN_POINTS,
} from "@lib/constants/pointSystem";

export default function PointBuy({
  title,
  attributes,
}: {
  title: string,
  attributes: string[];
  limit?: number;
}) {
  const [jobScore, updateJobScore] = useJobScore();
  
  const onSlide = ({
    target: { name, value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    updateJobScore({
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
