import { type Request } from "express";
import { GetJobRequest } from "../../../types/requests/get.job.request";
import { BASE_JOB_SCORE_WEIGHT } from "../../../constants/baseJobScoreWeight";
import { JobScoreWeight } from "../../../types/metrics/jobScoreWeight";
import { Point } from "../../../types/metrics/point";
import { parseNumeric } from "../parseNumeric";

type QueryParams = qs.ParsedQs[keyof qs.ParsedQs];

type JobScoreWeightRequest = {
  [key in keyof JobScoreWeight]: QueryParams;
};

export const parseGetJobRequest = ({
  params: { id },
  query: { includeProviders, speed, cost, rating, proximity },
}: Request): GetJobRequest => ({
  id: +id,
  includeProviders: includeProviders === "true" || includeProviders === "1",
  ...parseWeight({ speed, cost, rating, proximity }),
});

// apply requested weights if provided, otherwise use base weights
const parseWeight = (weightRequest: JobScoreWeightRequest): JobScoreWeight =>
  Object.entries(weightRequest).reduce((weight, [key, value]) => {
    if (typeof value !== "string") return weight;

    const int = parseNumeric(value);
    if (isNaN(int)) return weight;

    // ensure point is between 1 and 5
    // TODO: pull min and max values from Point type
    const point = Math.min(5, Math.max(1, int)) as Point;

    return { ...weight, [key]: point };
  }, BASE_JOB_SCORE_WEIGHT);
