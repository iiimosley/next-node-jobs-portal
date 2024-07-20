import { JobScoreProximal } from "../types/metrics/jobScoreProximal";
import { Weight } from "../types/metrics/weight";

export const BASE_JOB_SCORE_WEIGHT: Weight<JobScoreProximal> = {
  speed: 3,
  cost: 3,
  rating: 3,
  proximity: 3,
} as const;
