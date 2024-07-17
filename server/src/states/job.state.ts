import Job from "../types/domains/job";
import { JobProviderRatingValue } from "../types/domains/job/jobProviderRating";

export interface CompletedJob extends Job {
  status: "COMPLETE";
  completedAt: Date;
}

export interface PricedJob extends Job {
  averageCostPerPage: number;
}

export interface RatedJob extends Job {
  providerRating: JobProviderRatingValue;
}

export class JobStateMachine {
  constructor(private jobs: Job[]) {}

  get completedJobs(): CompletedJob[] {
    return this.castToPredicate<CompletedJob>(
      ({status, completedAt}) => status === "COMPLETE" && completedAt !== undefined,
    );
  }

  get pricedJobs(): PricedJob[] {
    return this.castToPredicate<PricedJob>(
      ({averageCostPerPage}) => averageCostPerPage !== undefined,
    );
  }

  get ratedJobs(): RatedJob[] {
    return this.castToPredicate<RatedJob>(
      ({providerRating}) => providerRating !== undefined,
    );
  }

  private castToPredicate<T>(predicate: (job: Job) => boolean): T[] {
    return this.jobs.reduce<T[]>((acc, job) => {
      return predicate(job) ? [...acc, job as T] : acc;
    }, []);
  }
}
