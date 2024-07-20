import { Request, Response } from "express";
import { JobService } from "../services/job.service";

export class JobController {
  private jobService: JobService;

  public constructor() {
    this.jobService = new JobService();
  }

  public getJobs = async (__: Request, res: Response) => {
    const jobs = await this.jobService.getJobs();
    return res.status(200).json(jobs);
  };

  public getUpcomingJobs = async (__: Request, res: Response) => {
    const upcomingJobs = await this.jobService.getUpcomingJobs();
    return res.status(200).json(upcomingJobs);
  };

  public getJobById = async (
    { params: { id } }: Request,   // TODO: figure out transform via validation middleware
    res: Response
  ) => {
    const job = await this.jobService.getJobById(+id);

    return job !== undefined
      ? res.status(200).json(job)
      : res.status(404).json({ error: `Job #${id} not found` });
  };
}
