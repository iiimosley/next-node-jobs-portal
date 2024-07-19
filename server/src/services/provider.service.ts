import { JobMetricsEngine } from "../engines/job.metrics";
import { ProviderRepository } from "../repositories/provider.repository";
import { JobMetricsRepository } from "../repositories/jobMetrics.repository";

export class ProviderService {
  constructor(
    private providerRepository: ProviderRepository = new ProviderRepository(),
    private jobMetricsRepository: JobMetricsRepository = new JobMetricsRepository(),
  ) {}

  async getProviderJobScores() {
    const providers = await this.providerRepository.getProvidersWithJobs();
    const jobMetrics = await this.jobMetricsRepository.getLatestJobMetrics();

    return providers.map(({ relatedJobs, ...provider }) => ({
      ...provider,
      score: (new JobMetricsEngine(relatedJobs)).totalMetrics,
    }));
  }
}
