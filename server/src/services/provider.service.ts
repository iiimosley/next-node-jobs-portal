import { ProviderRepository } from "../repositories/provider.repository";
import { JobStateMachine } from "../states/job.state";
import Job from "../types/domains/job";
import { reduceAverage } from "../utils/reduceAverage";
import { reduceAveragePercentage } from "../utils/reduceAveragePercentage";

export class ProviderService {
  constructor(
    private providerRepository: ProviderRepository = new ProviderRepository()
  ) {}

  // if DB-based repository - would join jobs into providers query vs composing through method arguments
  async getProviderJobScores(jobs: Job[]) {
    const providers = await this.providerRepository.getProviders();

    return providers.map((provider) => {
      const { completedJobs, pricedJobs, ratedJobs } = new JobStateMachine(
        jobs.filter(({ providerId }) => providerId === provider.id)
      );

      return {
        ...provider,
        speed: reduceAverage(
          completedJobs,
          (acc, { completedAt, createdAt }) =>
            acc + (completedAt.getTime() - createdAt.getTime())
        ),
        cost: reduceAverage(
          pricedJobs,
          (acc, { averageCostPerPage }) => acc + averageCostPerPage
        ),
        rating: reduceAveragePercentage(
          ratedJobs,
          (acc, { providerRating }) => acc + providerRating
        ),
      };
    });
  }
}
