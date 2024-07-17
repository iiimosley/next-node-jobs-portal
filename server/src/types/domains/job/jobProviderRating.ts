const JobProviderRating = {
  1: "Good",
  0: "Bad"
} as const;

export type JobProviderRatingValue = keyof typeof JobProviderRating;
