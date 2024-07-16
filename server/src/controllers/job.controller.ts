import { Request, Response } from "express";
import { JobService } from "../services/job.service";

export class JobController {
  private jobService: JobService;

  public constructor() {
    this.jobService = new JobService();
  }

  public getJobs = (__: Request, res: Response) => {
    const jobs = this.jobService.getJobs();
    return res.status(200).json({ jobs });
  };

  public getUpcomingJobs = (__: Request, res: Response) => {
    const upcomingJobs = this.jobService.getUpcomingJobs();
    res.status(200).json({ upcomingJobs });
  };
}
