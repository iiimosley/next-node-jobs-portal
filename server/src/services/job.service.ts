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

    // TODO: Place job score operation under conditional property to avoid unnecessary computation
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

  /** Ideally, this would pull the latest record from a job_metrics table,
   * which would compute and insert new records on a schedule
   * and would push stale metric records into cold storage.
   * Getting these sorta computes from a large table on demand is $$$$$$ and slow.
   * 
   * EG: SELECT * FROM job_metrics ORDER BY updated_at DESC LIMIT 1;
   */
  public async getLatestJobMetrics() {
    return await this.jobRepository.getJobs();

    

  }
}
