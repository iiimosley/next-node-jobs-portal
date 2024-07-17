import { ProviderRepository } from "../repositories/provider.repository";
import Job from "../types/domains/job";

export class ProviderService {
  constructor(
    private providerRepository: ProviderRepository = new ProviderRepository()
  ) {}

  // if DB-based repository - would join jobs into providers query vs composing through method arguments
  async getProviderJobScores(jobs: Job[]) {
    const providers = await this.providerRepository.getProviders();

    return providers.map((provider) => {
      const providerJobs = jobs.filter(
        ({ providerId }) => providerId === provider.id
      );
      const completedJobs = providerJobs.filter(
        ({ status, createdAt, completedAt }) =>
          status === "COMPLETE" &&
          completedAt !== undefined &&
          createdAt !== undefined
      );
      const pricedJobs = providerJobs.filter(
        ({ averageCostPerPage }) => averageCostPerPage !== undefined
      );
      const ratedJobs = providerJobs.filter(
        ({ providerRating }) => providerRating !== undefined
      );

      return {
        ...provider,
        speed: !!completedJobs.length
          ? completedJobs.reduce(
              (acc, { completedAt, createdAt }) =>
                acc + (completedAt!.getTime() - createdAt.getTime()),
              0
            ) / completedJobs.length
          : undefined, // TODO: determine timespan formatting
        cost: !!pricedJobs.length
          ? pricedJobs.reduce(
              (acc, { averageCostPerPage }) => acc + averageCostPerPage!,
              0
            ) / pricedJobs.length
          : undefined,
        rating: !!ratedJobs.length
          ? (ratedJobs.reduce(
              (acc, { providerRating }) => acc + providerRating!,
              0
            ) / ratedJobs.length) * 100
          : undefined,
      };
    });
  }
}
