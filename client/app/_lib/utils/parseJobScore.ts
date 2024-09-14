import { JOB_SCORE_PARAMETERS } from "../constants/jobScoreParameters";
import {
  DEFAULT_POINT_VALUE,
  MAX_POINTS,
  MIN_POINTS,
} from "../constants/pointSystem";
import { PlainSearchParams } from "../types/plainSearchParams";
import { JobScore } from "../types/provider/providerScore";
import { normalizeToRange } from "./normalizeToRange";
import { parseNumeric } from "./parseNumeric";

export const parseJobScoreFromSearchParams = (searchParams: PlainSearchParams) =>
  JOB_SCORE_PARAMETERS.reduce<Partial<JobScore>>(
    (jobScore, currentScoreParam) => {
      if (typeof searchParams[currentScoreParam] === "string") {
        const currentScore = parseNumeric(searchParams[currentScoreParam]);

        if (!isNaN(currentScore)) {
          jobScore[currentScoreParam] = normalizeToRange(
            currentScore,
            MIN_POINTS,
            MAX_POINTS
          );
        }
      }

      return jobScore;
    },
    {}
  );

export const parseJobScoreDefaults = (
  partial: Partial<JobScore>
): JobScore => ({
  ...(Object.fromEntries(
    JOB_SCORE_PARAMETERS.map((key) => [key, DEFAULT_POINT_VALUE])
  ) as JobScore),
  ...partial,
});
