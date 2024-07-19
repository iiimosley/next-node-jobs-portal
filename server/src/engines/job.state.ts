import Job from "../types/domains/job";
import { JobProviderRatingValue } from "../types/domains/job/jobProviderRating";

// TODO: migrate to abstract parent class as protected type, 
//       applying generic base type to be pulled from abstract class declaration: StateMachine<T>
type JobStatePredicate<T> = (job: Job) => job is T extends Job ? T : never;

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

/** Filters, asserts, and casts Jobs to defined child state types */
export class JobStateMachine {
  constructor(private jobs: Job[]) {}

  get completedJobs(): CompletedJob[] {
    return this.castToPredicate<CompletedJob>(
      (job: Job): job is CompletedJob =>
        job.status === "COMPLETE" && job.completedAt !== undefined,
    );
  }

  get pricedJobs(): PricedJob[] {
    return this.castToPredicate<PricedJob>(
      (job: Job): job is PricedJob => 
        job.averageCostPerPage !== undefined,
    );
  }

  get ratedJobs(): RatedJob[] {
    return this.castToPredicate<RatedJob>(
      (job: Job): job is RatedJob =>
        job.providerRating !== undefined,
    );
  }

  // TODO: migrate to abstract parent class as protected method: StateMachine<T>
  private castToPredicate<T>(predicate: JobStatePredicate<T>): T[] {
    return this.jobs.filter(predicate); // 🔍 How is `never` _really_ handled in boolean coalescing?
  }
}
