import { BASE_JOB_SCORE_WEIGHT } from "../constants/baseJobScoreWeight";
import { JobRepository } from "../repositories/job.repository";
import Job from "../types/domains/job";
import { JobWithScoredProviders } from "../types/domains/job/jobWithScoredProviders";
import Provider from "../types/domains/provider";
import { calculateHaversineFormulaPercentage } from "../utils/computations/calculateHaversineFormulaPercentage";
import { recalculateScoreByWeight } from "../utils/computations/recalculateScoreByWeight";
import { reduceAveragePercentage } from "../utils/computations/reduceAveragePercentage";
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

  public async getJobById(
    jobId: number
  ): Promise<JobWithScoredProviders | undefined> {
    const job = await this.jobRepository.getJobById(jobId);
    if (job === undefined) return undefined;

    // TODO: Conditionally protect the score calculations
    //       using bool function argument (from the controller).
    //       Return job without scores if false.
    return await this.getJobProviderScores(job);
  }

  private async getJobProviderScores(
    job: Job
  ): Promise<JobWithScoredProviders> {
    const providerJobScores = await this.providerService.getProviderJobScores();

    // TODO: Decompose into more readable chunks vs nested transforms
    return {
      ...job,
      availableProviders: providerJobScores
        .map((provider) => ({
          ...provider,
          score: recalculateScoreByWeight(
            {
              ...provider.score,
              proximity: this.calculateProximityScore(job, provider),
            },
            BASE_JOB_SCORE_WEIGHT
          ),
        }))
        .sort(
          (a, b) =>
            reduceAveragePercentage(Object.values(b.score)) -
            reduceAveragePercentage(Object.values(a.score))
        ),
    };
  }

  private calculateProximityScore(job: Job, provider: Provider): number {
    return job.locationType !== "LOCATION_BASED" ||
      job.latitude === undefined ||
      job.longitude === undefined ||
      provider.latitude === undefined ||
      provider.longitude === undefined
      ? 0
      : calculateHaversineFormulaPercentage(
          { latitude: job.latitude, longitude: job.longitude },
          { latitude: provider.latitude, longitude: provider.longitude }
        );
  }
}
