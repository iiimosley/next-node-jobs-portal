export const deduplicate = <T>(acc: T[], item: T) =>
  acc.includes(item) ? acc : [...acc, item];
