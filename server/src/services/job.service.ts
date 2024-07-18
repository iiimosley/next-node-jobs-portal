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
    // This jobs query would occur as join on Providers in DB-based repository
    // pulling all jobs for now as they will be reused for filtering scheduled jobs
    const jobs = await this.getJobs();
    const providerJobScores = await this.providerService.getProviderJobScores(jobs);
    
    const upcomingJobs = jobs.filter(({ status }) => status === "SCHEDULED").map((job) => ({
     ...job,
      availableProviders: providerJobScores.map((provider) => ({
        ...provider,
        proximity: Math.random() * 100, // TODO: implement proximity calculation
      })), 
    }));

    return upcomingJobs;
  }
}
