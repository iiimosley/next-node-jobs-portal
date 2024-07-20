import { JobScoreWeight } from "../metrics/jobScoreWeight";

export interface GetJobRequest extends JobScoreWeight {
  id: number;
};
