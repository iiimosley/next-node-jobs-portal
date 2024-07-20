import Provider from ".";
import { JobMetrics } from "../../metrics/jobMetrics";

export interface ProviderWithJobMetrics extends Provider {
  metrics: JobMetrics;
}
