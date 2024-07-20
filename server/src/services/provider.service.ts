import { JobMetricsEngine } from "../engines/job.metrics";
import { ProviderRepository } from "../repositories/provider.repository";
import { JobMetricsRepository } from "../repositories/jobMetrics.repository";
import { ProviderWithJobMetrics } from "../types/domains/provider/providerWithJobMetrics";
import { ProviderWithJobScore } from "../types/domains/provider/providerWithScore";
import { calculateAverageRangeScore } from "../utils/computations/calculateAverageRangeScore";

export class ProviderService {
  constructor(
    private providerRepository: ProviderRepository = new ProviderRepository(),
    private jobMetricsRepository: JobMetricsRepository = new JobMetricsRepository(),
  ) {}

  async getProviderJobScores() {
    const providers = await this.providerRepository.getProvidersWithJobs();
    const providersWithMetrics = providers.map<ProviderWithJobMetrics>(
      ({ relatedJobs, ...provider }) => ({
        ...provider,
        metrics: new JobMetricsEngine(relatedJobs).totalMetrics,
      })
    );

    return await this.computeProviderScores(providersWithMetrics);
  }

  private async computeProviderScores(providers: ProviderWithJobMetrics[]) {
    const {
      speed: speedAggregate,
      cost: costAggregate,
      rating: ratingAggregate,
    } = await this.jobMetricsRepository.getLatestJobMetrics();

    return providers.map<ProviderWithJobScore>(({metrics, ...provider}) => {
      const { speed, cost, rating } = metrics;

      return {
        ...provider,
        score: {
          speed: calculateAverageRangeScore(speedAggregate, speed),
          cost: calculateAverageRangeScore(costAggregate, cost),
          rating: calculateAverageRangeScore(ratingAggregate, rating),
        },
      };
    });
  }
}
