import { JobRepository } from "../repositories/job.repository";
import { ProviderRepository } from "../repositories/provider.repository";

export class JobService {
  private jobRepository: JobRepository;
  private providerRepository: ProviderRepository;

  public constructor() {
    this.jobRepository = new JobRepository();
    this.providerRepository = new ProviderRepository();
  }

  public async getJobs() {
    return await this.jobRepository.getJobs();
  }

  public async getUpcomingJobs() {
    return await this.jobRepository.getUpcomingJobs();
  }
}
