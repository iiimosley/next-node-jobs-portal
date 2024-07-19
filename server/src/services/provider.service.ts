import { JobMetricsEngine } from "../engines/job.metrics";
import { ProviderRepository } from "../repositories/provider.repository";
import { JobMetricsRepository } from "../repositories/jobMetrics.repository";
import { ProviderWithMetrics } from "../types/domains/provider/providerWithMetrics";

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

    return providerMetrics;
  }

  private async computeProviderScores(providers: ProviderWithMetrics[]) {
    // TODO: Leverage historical job metrics against provider metrics to determine score
    const jobMetrics = await this.jobMetricsRepository.getLatestJobMetrics();

  }
}
