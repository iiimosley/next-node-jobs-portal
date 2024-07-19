import Job from "../types/domains/job";
import { parseJob } from "./transforms/parseJob";
import { Repository } from "./abstract.repository";

export class JobRepository extends Repository<Job> {
  public constructor() {
    super("jobs.csv");
  }

  public async getJobs() {
    // select * from jobs
    return await this.readCsv(parseJob);
  }

  public async getScheduledJobs() {
    // select * from jobs where status = 'SCHEDULED'
    return (await this.getJobs()).filter(
      ({ status }) => status === "SCHEDULED"
    );
  }

  public async getJobById(id: number) {
    // select * from jobs where id = :id
    return (await this.getJobs()).find((job) => job.id === id);
  }
}
