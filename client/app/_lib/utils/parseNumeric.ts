export const parseNumeric = (value?: string | null): number =>
  value !== null && value !== undefined && value.search(/[a-zA-Z]/) === -1
    ? parseInt(value, 10)
    : NaN;
