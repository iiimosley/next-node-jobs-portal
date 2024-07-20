import { AverageRangeMetric } from "./averageRangeMetric";

export interface JobMetrics {
  speed: AverageRangeMetric;
  cost: AverageRangeMetric;
  rating: AverageRangeMetric;
}