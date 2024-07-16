import { Request, Response } from "express";

export class JobController {
  public getJobs = (__: Request, res: Response) =>
    res.status(200).json({ message: "Get Jobs" });

  public getUpcomingJobs = (__: Request, res: Response) =>
    res.status(200).json({ message: "Get Upcoming Jobs" });
}
