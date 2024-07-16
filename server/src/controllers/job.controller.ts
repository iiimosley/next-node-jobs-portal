import { Request, Response } from "express";
import { JobService } from "../services/job.service";

export class JobController {
  private jobService: JobService;

  public constructor() {
    this.jobService = new JobService();
  }

  public getJobs = async (__: Request, res: Response) => {
    const jobs = await this.jobService.getJobs();
    return res.status(200).json({ jobs });
  };

  public getUpcomingJobs = async (__: Request, res: Response) => {
    const upcomingJobs = await this.jobService.getUpcomingJobs();
    res.status(200).json({ upcomingJobs });
  };
}
