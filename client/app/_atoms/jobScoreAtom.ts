"use client";

import { atom } from "jotai";
import { JOB_SCORE_PARAMETERS } from "@lib/constants/jobScoreParameters";
import { DEFAULT_POINT_VALUE } from "@lib/constants/pointSystem";
import { JobScore, JobScoreKey } from "@lib/types/provider/providerScore";

const DEFAULT_POINTS = Object.fromEntries(
  JOB_SCORE_PARAMETERS.map((parameter: JobScoreKey) => [
    parameter,
    DEFAULT_POINT_VALUE,
  ])
) as JobScore;

export const jobScoreAtom = atom(DEFAULT_POINTS);

