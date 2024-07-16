export const JobProviderRating = {
  "Good": 1,
  "Bad": 0,
} as const;

export type JobProviderRatingValue =
  (typeof JobProviderRating)[keyof typeof JobProviderRating];
