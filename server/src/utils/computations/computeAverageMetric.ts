import { AverageMetric } from "../../types/metrics/averageMetric";
import { MapMetricPredicate } from "../../types/utils/mapMetricPredicate";
import { reduceAverage } from "./reduceAverage";

export const computeJobMetric = <T>(
  scopedJobs: T[],
  mapPredicate: MapMetricPredicate<T>,
): AverageMetric => {
  const computedMetrics = scopedJobs.map(mapPredicate);

  // TODO: Normalize output in handling empty metrics
  return {
    average: reduceAverage(computedMetrics),
    high: Math.max(...computedMetrics),
    low: Math.min(...computedMetrics),
  };
};
