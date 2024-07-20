import { AverageRangeMetric } from "../../types/metrics/averageRangeMetric";

export const calculateAverageRangeScore = (
  composite: AverageRangeMetric,
  target: AverageRangeMetric
): number => {
  const { high: compositeHigh, low: compositeLow } = composite;
  const { average: targetAverage } = target;

  return compositeHigh > compositeLow && targetAverage !== 0 // prevent division by zero & negative values
    ? ((targetAverage - compositeLow) / (compositeHigh - compositeLow)) * 100
    : 0;
};
