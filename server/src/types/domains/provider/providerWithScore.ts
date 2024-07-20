import Provider from ".";
import { JobScore } from "../../metrics/jobScore";

export interface ProviderWithJobScore extends Provider {
  score: JobScore;
}
