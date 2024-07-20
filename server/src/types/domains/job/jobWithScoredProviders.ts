import Job from ".";
import { ProviderWithProximalJobScore } from "../provider/providerWithProximalScore";

export interface JobWithScoredProviders extends Job {
  availableProviders: ProviderWithProximalJobScore[];
}