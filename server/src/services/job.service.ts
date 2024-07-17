import { JobRepository } from "../repositories/job.repository";
import { ProviderService } from "./provider.service";

export class JobService {
  public constructor(
    private jobRepository: JobRepository = new JobRepository(),
    private providerService: ProviderService = new ProviderService()
  ) {}

  public async getJobs() {
    return await this.jobRepository.getJobs();
  }

  public async getUpcomingJobsWithAvailableProviders() {
    const jobs = await this.getJobs();
    const upcomingJobs = jobs.filter(({ status }) => status === "SCHEDULED");

    const providerJobScores = await this.providerService.getProviderJobScores(jobs);

    // Further score computations:
    // proximity (provider lat/long - job lat/long = distance; lower is better)

    return { upcomingJobs, providerJobScores};
  }
}
