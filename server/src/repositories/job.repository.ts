import path from "path";
import Job from "../types/domains/job";
import { readCsv } from "../utils/csvReader";
import { parseJob } from "./transforms/parseJob";

export class JobRepository {
  sourceFile: string;

  public constructor() {
    this.sourceFile = path.join(__dirname, "data", "jobs.csv");
  }

  public async getJobs() {
    return await readCsv<Job>(this.sourceFile, parseJob);
  }

  public async getUpcomingJobs() {
    const jobs = await this.getJobs();
    return jobs.filter(({ status }) => status === "SCHEDULED");
  }
}
