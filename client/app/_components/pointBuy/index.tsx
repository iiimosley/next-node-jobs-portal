"use client";

import React from "react";

const POINTS_PER_ATTRIBUTE = 5;

export default function PointBuy({
  title,
  attributes,
  limit = POINTS_PER_ATTRIBUTE,
}: {
  title: string,
  attributes: string[];
  limit?: number;
}) {
  
  const totalPoints = attributes.length * limit;

  const onSlide = () => (e: React.ChangeEvent<HTMLInputElement>) => {
    // TODO: Implement slider limits for point buy total
    //       Prevent any increments that would exceed the total points
    console.log(`${e.target.name}: ${parseInt(e.target.value)}`);
  };

  const onEventUp = () => (
    e: React.UIEvent<HTMLInputElement>
  ) => {
    // TODO: Bubble up all attributes to the parent component
    //       to calculate the new provider scores
  };

  return (
    <div>
      <div className="font-semibold text-lg italic mb-2">{title}</div>
      {attributes.map((attribute) => (
        <div key={`point-attribute-${attribute}`}>
          <label>{attribute}</label>
          <input
            type="range"
            name={attribute}
            min={1}
            max={limit}
            defaultValue={3}
            className="range range-sm"
            step="1"
            onChange={onSlide()}
            onMouseUp={onEventUp()}
            onKeyUp={onEventUp()}
          />
        </div>
      ))}
    </div>
  );
}

{
  /* <input
  type="number"
  value={value}
  onChange={(e) => {
    const newValue = parseInt(e.target.value);
    if (newValue <= totalPoints) {
      attributes[key] = newValue;
    }
  }}
  disabled={value >= limit}
/>
<button
  onClick={() => {
    if (value < limit) {
      attributes[key] = value + 1;
    }
  }}
  disabled={value >= limit}
>
  +
</button>
<button
  onClick={() => {
    if (value > 0) {
      attributes[key] = value - 1;
    }
  }}
  disabled={value <= 0}
>
  -
</button> */
}