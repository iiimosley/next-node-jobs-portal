import Provider from ".";
import Job from "../job";

export interface ProviderWithJobs extends Provider {
  relatedJobs: Job[];  
};