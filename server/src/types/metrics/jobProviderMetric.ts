import { JobMetric } from "./jobMetric";

export interface JobProviderMetric extends JobMetric { 
  proximity: number;
}
