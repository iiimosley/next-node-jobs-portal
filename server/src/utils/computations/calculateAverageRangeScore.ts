import { AverageRangeMetric } from "../../types/metrics/averageRangeMetric";

export const calculateAverageRangeScore = (
  aggregate: AverageRangeMetric,
  target: AverageRangeMetric,
  inverse: boolean = false
): number => {
  const { high: aggregateHigh, low: aggregateLow } = aggregate;
  const { average: targetAverage } = target;

  if (aggregateHigh === aggregateLow || targetAverage === 0) return 0; // prevent division by zero & negative values

  return (
    ((inverse ? aggregateHigh - targetAverage : targetAverage - aggregateLow) /
      (aggregateHigh - aggregateLow)) *
    100
  );
};
