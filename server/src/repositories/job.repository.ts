import Job from "../types/domains/job";
import { parseJob } from "./transforms/parseJob";
import { Repository } from "./abstract.repository";

export class JobRepository extends Repository<Job> {
  public constructor() {
    super("jobs.csv");
  }

  public async getJobs() {
    return await this.readCsv(parseJob);
  }

  public async getUpcomingJobs() {
    const jobs = await this.getJobs();
    return jobs.filter(({ status }) => status === "SCHEDULED");
  }
}
