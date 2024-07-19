import Provider from ".";
import { AverageProximalJobScore } from "../../metrics/averageProximalJobScore";

export interface ProviderWithProximalScore extends Provider {
  score: AverageProximalJobScore;
}
