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

  public async getUpcomingJobs() {
    return await this.jobRepository.getScheduledJobs();
  }

  public async getJobById(jobId: number) {
    const job = await this.jobRepository.getJobById(jobId);
    if (job === undefined) return undefined;

    // This jobs query would occur as join on Providers in DB-based repository
    // pulling all jobs for now as they will be reused for filtering scheduled jobs
    const providerJobScores = await this.providerService.getProviderJobScores(
      await this.getJobs()
    );

    return {
      ...job,
      availableProviders: providerJobScores.map((provider) => ({
        ...provider,
        proximity: Math.random() * 100, // TODO: implement proximity calculation
      })),
    };
  }
}
