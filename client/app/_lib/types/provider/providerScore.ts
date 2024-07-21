import { JOB_SCORE_PARAMETERS } from "../../constants/jobScoreParameters";

export type JobScoreKey = typeof JOB_SCORE_PARAMETERS[number];

export type JobScore = {
  [key in JobScoreKey]: number;
};
