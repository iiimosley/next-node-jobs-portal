import { type ReduceAveragePredicate, reduceAverage } from "./reduceAverage";

export interface AverageMetric {
  average: number;
  high: number;
  low: number;
}

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
