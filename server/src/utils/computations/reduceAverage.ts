export const reduceAverage = (terms: number[], initialValue: number = 0): number =>
  terms.length &&
  terms.reduce((acc: number, term: number) => acc + term, initialValue) / terms.length;
