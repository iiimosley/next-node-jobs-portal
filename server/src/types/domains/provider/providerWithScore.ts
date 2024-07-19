import Provider from ".";
import { AverageJobScore } from "../../metrics/averageJobScore";

export interface ProviderWithScore extends Provider {
  score: AverageJobScore;
}
