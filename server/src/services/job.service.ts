import { JobRepository } from "../repositories/job.repository";
import Job from "../types/domains/job";
import Provider from "../types/domains/provider";
import { computeHaversineFormulaPercentage } from "../utils/computations/haversineFormulaPercentage";
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
    const providerJobScores = await this.providerService.getProviderJobScores();

    return {
      ...job,
      availableProviders: providerJobScores.map((provider) => ({
        ...provider,
        score:{
          ...provider.score,
          proximity: this.computeProximityScore(job, provider),
        }
      })),
    };
  }

  private computeProximityScore(
    { latitude: jobLatitude, longitude: jobLongitude, locationType }: Job,
    { latitude: providerLatitude, longitude: providerLongitude }: Provider
  ): number {
    return locationType !== "LOCATION_BASED" ||
      jobLatitude === undefined ||
      jobLongitude === undefined ||
      providerLatitude === undefined ||
      providerLongitude === undefined
      ? 0
      : computeHaversineFormulaPercentage(
          { latitude: jobLatitude, longitude: jobLongitude },
          { latitude: providerLatitude, longitude: providerLongitude }
        );
  }
}
