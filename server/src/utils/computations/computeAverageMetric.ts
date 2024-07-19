import { AverageMetric } from "../../types/metrics/averageMetric";
import { MapMetricPredicate } from "../../types/utils/mapMetricPredicate";
import { reduceAverage } from "./reduceAverage";

export const computeJobMetric = <T>(
  scopedJobs: T[],
  mapPredicate: MapMetricPredicate<T>,
): AverageMetric => {
  const computedMetrics = scopedJobs.map(mapPredicate);
  const average = reduceAverage(computedMetrics);

  return {
    average,
    high: 10,
    low: 0,
  };
};
