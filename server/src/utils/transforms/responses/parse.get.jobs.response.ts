import Job from "../../../types/domains/job";
import { JobResponse, parseGetJobResponse } from "./parse.get.job.response";

export const parseGetJobsResponse = (job: Job[]): JobResponse[] =>
  job.map(parseGetJobResponse);
