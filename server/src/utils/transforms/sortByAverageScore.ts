import { reduceAveragePercentage } from "../computations/reduceAveragePercentage";

export const calculateScoreAggregateAverage = (score: {
  [key: string]: number;
}): number =>
  reduceAveragePercentage(Object.values(score));

