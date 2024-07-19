export type ReduceAveragePredicate<T> = (acc: number, val: T) => number;

export const reduceAverage = <T>(
  arr: T[],
  reducer: ReduceAveragePredicate<T>,
  initialValue: number = 0
): number => arr.length && arr.reduce(reducer, initialValue) / arr.length;
