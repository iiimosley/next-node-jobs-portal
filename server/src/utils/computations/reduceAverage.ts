export const reduceAverage = <T>(
  arr: T[],
  reducer: (acc: number, val: T) => number,
  initialValue: number = 0
): number | undefined =>
  arr.length ? arr.reduce(reducer, initialValue) / arr.length : undefined;