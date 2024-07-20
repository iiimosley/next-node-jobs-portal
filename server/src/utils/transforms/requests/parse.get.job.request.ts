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
  query: { speed, cost, rating, proximity },
}: Request): GetJobRequest => ({
  id: +id,
  ...parseWeight({ speed, cost, rating, proximity }),
});

// apply requested weights if provided, otherwise use base weights
const parseWeight = (weightRequest: JobScoreWeightRequest): JobScoreWeight =>
  Object.entries(weightRequest).reduce((weight, [key, value]) => {
    if (typeof value !== "string") return weight;

    const point = parseNumeric(value);
    if (isNaN(point)) return weight;

    return { ...weight, [key]: point as Point };
  }, BASE_JOB_SCORE_WEIGHT);
