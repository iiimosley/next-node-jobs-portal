import { JobScoreWeight } from "../types/metrics/jobScoreWeight";

export const BASE_JOB_SCORE_WEIGHT: JobScoreWeight = {
  speed: 3,
  cost: 3,
  rating: 3,
  proximity: 3,
} as const;
