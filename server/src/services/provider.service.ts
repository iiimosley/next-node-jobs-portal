import { ProviderRepository } from "../repositories/provider.repository";
import { JobStateMachine } from "../states/job.state";
import Job from "../types/domains/job";
import { reduceAverage } from "../utils/computations/reduceAverage";
import { reduceAveragePercentage } from "../utils/computations/reduceAveragePercentage";

export class ProviderService {
  constructor(
    private providerRepository: ProviderRepository = new ProviderRepository()
  ) {}

  async getProviderJobScores(jobs: Job[]) {
    /** 💭 Refactor Thought: Get Providers as specified in jobs 
     * select provider.*, jobs.* from provider
     * join jobs on provider.id = jobs.providerId 
     * where provider.id in ({jobs.map(({ providerId }) => providerId)}) 
     */
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
