import Job from "../types/domains/job";
import { parseJob } from "./transforms/parseJob";
import { Repository } from "./abstract.repository";

export class JobRepository extends Repository<Job> {
  public constructor() {
    super("jobs.csv");
  }

  /** select * from jobs */
  public async getJobs() {
    return await this.readCsv(parseJob);
  }

  /** select * from jobs where status = 'SCHEDULED' */
  public async getScheduledJobs() {
    return (await this.getJobs()).filter(
      ({ status }) => status === "SCHEDULED"
    );
  }

  /** select * from jobs where id = :id */
  public async getJobById(id: number) {
    return (await this.getJobs()).find((job) => job.id === id);
  }
}
