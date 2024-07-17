import Provider from "../types/domains/provider";
import { parseProvider } from "./transforms/parseProvider";
import { Repository } from "./abstract.repository";

export class ProviderRepository extends Repository<Provider> {
  public constructor() {
    super("providers.csv");
  }

  public async getProviders() {
    return await this.readCsv(parseProvider);
  }
}
