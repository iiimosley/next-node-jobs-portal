import Provider from ".";
import { JobScoreProximal } from "../../metrics/jobScoreProximal";

export interface ProviderWithProximalJobScore extends Provider {
  score: JobScoreProximal;
}
