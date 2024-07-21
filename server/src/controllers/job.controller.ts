import { Request, Response } from "express";
import { JobService } from "../services/job.service";
import { parseGetJobRequest } from "../utils/transforms/requests/parse.get.job.request";
import { parseGetJobResponse } from "../utils/transforms/responses/parse.get.job.response";
import { parseGetJobsResponse } from "../utils/transforms/responses/parse.get.jobs.response";
import { JobStatus } from "../types/domains/job/jobStatus";

export class JobController {
  private jobService: JobService;

  public constructor() {
    this.jobService = new JobService();
  }

  public getJobs = async (__: Request, res: Response) => {
    const jobs = await this.jobService.getJobs();

    return res.status(200).json(parseGetJobsResponse(jobs));
  };

  public getUpcomingJobs = async (__: Request, res: Response) => {
    const upcomingJobs = await this.jobService.getUpcomingJobs();
    return res.status(200).json(parseGetJobsResponse(upcomingJobs));
  };

  public getJobById = async (
    req: Request,
    res: Response
  ) => {
    const jobRequest = parseGetJobRequest(req); // TODO: figure out how to transform via validation middleware
    const job = await this.jobService.getJobById(jobRequest);

    return job !== undefined
      ? res.status(200).json(parseGetJobResponse(job))
      : res.status(404).json({ error: `Job not found` });
  };
}
