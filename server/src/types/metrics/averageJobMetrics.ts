import { AverageMetric } from "./averageMetric";

export interface AverageJobMetrics {
  speed: AverageMetric;
  cost: AverageMetric;
  rating: AverageMetric;
}