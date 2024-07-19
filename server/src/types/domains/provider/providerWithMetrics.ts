import Provider from ".";
import { AverageJobMetrics } from "../../metrics/averageJobMetrics";

export interface ProviderWithMetrics extends Provider {
  metrics: AverageJobMetrics;
}
