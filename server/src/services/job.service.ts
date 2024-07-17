import { JobRepository } from "../repositories/job.repository";

export class JobService {
  private jobRepository: JobRepository;

  public constructor() {
    this.jobRepository = new JobRepository();
  }

  public async getJobs() {
    return await this.jobRepository.getJobs();
  }

  public async getUpcomingJobs() {
    return await this.jobRepository.getUpcomingJobs();
  }
}
