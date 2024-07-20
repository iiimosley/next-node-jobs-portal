export const parseNumeric = (value: string): number =>
  value.search(/[a-zA-Z]/) === -1 ? parseInt(value, 10): NaN;
