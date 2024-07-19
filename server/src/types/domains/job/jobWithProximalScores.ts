import Job from ".";
import { ProviderWithProximalScore } from "../provider/providerWithProximalScore";

export interface JobWithProximalScores extends Job {
  availableProviders: ProviderWithProximalScore[];
}