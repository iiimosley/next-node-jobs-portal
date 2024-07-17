import { ProviderRepository } from "../repositories/provider.repository";
import Job from "../types/domains/job";

export class ProviderService {
  constructor(
    private providerRepository: ProviderRepository = new ProviderRepository()
  ) {}
  
  async getProviderJobScores(jobs: Job[]) {
    const providers = await this.providerRepository.getProviders();
    
    // Computations to determine provider job scores:
    // speed = job end time - job start time
    // cost (total cost/total jobs)
    // rating (total score/total jobs)
    // 
    // extra credit:
    // completion count
    // distance traveled (job lat/long - provider lat/long = distance)
    // remote score (remote jobs completed/total jobs)

    return providers.map((provider) => ({
      ...provider,
      jobs: jobs
        .filter(({ providerId }) => providerId === provider.id)
        .map(({ providerId, ...job }) => job),
    }));
  }
}
