import { AverageRangeMetric } from "../../types/metrics/averageRangeMetric";
import { MapMetricPredicate } from "../../types/utils/mapMetricPredicate";
import { reduceAverage } from "./reduceAverage";

export const calculateAverageRangeMetric = <T>(
  scopedJobs: T[],
  mapPredicate: MapMetricPredicate<T>,
): AverageRangeMetric => {
  const computedMetrics = scopedJobs.map(mapPredicate);

  // TODO: Normalize output in handling empty metrics
  return {
    average: reduceAverage(computedMetrics),
    high: Math.max(...computedMetrics),
    low: Math.min(...computedMetrics),
  };
};
