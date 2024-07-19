import Job from "../types/domains/job";
import { reduceAverage } from "../utils/computations/reduceAverage";
import { JobStateMachine } from "./job.state";

export class JobMetricsEngine extends JobStateMachine {
  constructor(jobs: Job[]) {
    super(jobs);
  }

  get speed() {
    return reduceAverage(
      this.completedJobs,
      (acc, { completedAt, createdAt }) =>
        acc + (completedAt.getTime() - createdAt.getTime())
    );
  }

  get cost() {
    return reduceAverage(
      this.pricedJobs,
      (acc, { averageCostPerPage }) => acc + averageCostPerPage
    );
  }

  get rating() {
    return reduceAverage(
      this.ratedJobs,
      (acc, { providerRating }) => acc + providerRating
    );
  }
}
