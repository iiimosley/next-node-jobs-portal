import { JobMetricsEngine } from "../engines/job.metrics";
import { ProviderRepository } from "../repositories/provider.repository";
import { JobMetricsRepository } from "../repositories/jobMetrics.repository";
import { ProviderWithMetrics } from "../types/domains/provider/providerWithMetrics";
import { computeMetricPercentage } from "../utils/computations/computeMetricPercentage";
import { ProviderWithScore } from "../types/domains/provider/providerWithScore";

export class ProviderService {
  constructor(
    private providerRepository: ProviderRepository = new ProviderRepository(),
    private jobMetricsRepository: JobMetricsRepository = new JobMetricsRepository(),
  ) {}

  async getProviderJobScores() {
    const providers = await this.providerRepository.getProvidersWithJobs();
    const providerMetrics = providers.map<ProviderWithMetrics>(({ relatedJobs, ...provider }) => ({
      ...provider,
      metrics: new JobMetricsEngine(relatedJobs).totalMetrics,
    }));

    return await this.computeProviderScores(providerMetrics);
  }

  private async computeProviderScores(providers: ProviderWithMetrics[]) {
    const {
      speed: compositeSpeed,
      cost: compositeCost,
      rating: compositeRating,
    } = await this.jobMetricsRepository.getLatestJobMetrics();

    return providers.map<ProviderWithScore>(({metrics, ...provider}) => {
      const { speed, cost, rating } = metrics;

      return {
        ...provider,
        score: {
          speed: computeMetricPercentage(compositeSpeed, speed),
          cost: computeMetricPercentage(compositeCost, cost),
          rating: computeMetricPercentage(compositeRating, rating),
        },
      };
    });
  }
}
