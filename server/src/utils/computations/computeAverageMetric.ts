import { AverageMetric } from "../../types/metrics/averageMetric";
import { type ReduceAveragePredicate, reduceAverage } from "./reduceAverage";

export const computeJobMetric = <T>(
  scopedJobs: T[],
  predicate: ReduceAveragePredicate<T>
): AverageMetric => {
  const average = reduceAverage(scopedJobs, predicate);

  return {
    average,
    high: 10,
    low: 0,
  };
};
