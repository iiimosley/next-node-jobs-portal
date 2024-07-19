import { reduceAverage } from "./reduceAverage";

export const reduceAveragePercentage = (
  terms: number[],
  initialValue: number = 0
): number => reduceAverage(terms, initialValue) * 100;