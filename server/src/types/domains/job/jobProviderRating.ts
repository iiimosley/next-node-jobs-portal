const JobProviderRating = {
  1: "Satisfactory",
  0: "Unsatisfactory",
} as const;

export type JobProviderRatingValue = keyof typeof JobProviderRating;
