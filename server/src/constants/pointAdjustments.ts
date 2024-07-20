export const POINT_ADJUSTMENTS = {
  1: (score: number) => Math.max(score * 0.5, score > 0 ? 1 : 0),
  2: (score: number) => Math.max(score * 0.75, score > 0 ? 1 : 0),
  3: (score: number) => score,
  4: (score: number) => Math.min(score * 1.25, 100),
  5: (score: number) => Math.min(score * 1.5, 100),
} as const;
