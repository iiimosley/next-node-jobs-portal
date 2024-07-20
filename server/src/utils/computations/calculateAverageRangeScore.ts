import { AverageRangeMetric } from "../../types/metrics/averageRangeMetric";

export const calculateAverageRangeScore = (
  aggregate: AverageRangeMetric,
  target: AverageRangeMetric
): number => {
  const { high: aggregateHigh, low: aggregateLow } = aggregate;
  const { average: targetAverage } = target;

  return aggregateHigh > aggregateLow && targetAverage !== 0 // prevent division by zero & negative values
    ? ((targetAverage - aggregateLow) / (aggregateHigh - aggregateLow)) * 100
    : 0;
};
