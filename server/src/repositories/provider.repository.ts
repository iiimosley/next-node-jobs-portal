import Provider from "../types/domains/provider";
import { ProviderWithJobs } from "../types/domains/provider/providerWithJobs";
import { parseProvider } from "./transforms/parseProvider";
import { Repository } from "./abstract.repository";
import { JobRepository } from "./job.repository";

export class ProviderRepository extends Repository<Provider> {
  public constructor() {
    super("providers.csv");
  }

  /** select * from provider */
  public async getProviders() {
    return await this.readCsv(parseProvider);
  }

  /**
   * select provider.*, jobs.* from provider
   *  left join jobs on provider.id = jobs.providerId
   */
  public async getProvidersWithJobs() {
    // A bit of "cheating" here to emulate the SQL join on `jobs`
    const providers = await this.readCsv(parseProvider);
    const jobs = await new JobRepository().getJobsByProviderIds(
      providers.map(({ id }) => id)
    );

    return providers.map<ProviderWithJobs>((provider) => ({
      ...provider,
      // left join, empty array if no jobs related to provider
      relatedJobs: jobs.filter(
        ({ providerId }) => providerId === provider.id
      ),
    }));
  }
}
