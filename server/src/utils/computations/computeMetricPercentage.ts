import { AverageMetric } from "../../types/metrics/averageMetric";

export const computeMetricPercentage = (
  composite: AverageMetric,
  target: AverageMetric
): number => {
  const { high: compositeHigh, low: compositeLow } = composite;
  const { average: targetAverage } = target;

  return compositeHigh > compositeLow && targetAverage !== 0 // prevent division by zero & negative values
    ? ((targetAverage - compositeLow) / (compositeHigh - compositeLow)) * 100
    : 0;
};
