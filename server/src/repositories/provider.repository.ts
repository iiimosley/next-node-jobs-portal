import path from "path";
import { readCsv } from "../utils/csvReader";
import { parseProvider } from "./transforms/parseProvider";
import Provider from "../types/domains/provider";

export class ProviderRepository {
  sourceFile: string;

  public constructor() {
    this.sourceFile = path.join(__dirname, "data", "providers.csv");
  }

  public async getProviders() {
    return await readCsv<Provider>(this.sourceFile, parseProvider);
  }
}
