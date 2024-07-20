import Job from "../types/domains/job";
import { JobMetrics } from "../types/metrics/jobMetrics";
import { calculateAverageRangeMetric } from "../utils/computations/calculateAverageRangeMetric";
import { JobStateMachine } from "./job.state";

// TODO: - migrate to abstract parent class: MetricsEngine<T>
//       - place computeJobMetric in MetricsEngine
//       - union inheritance with JobStateMachine: JobStateMachine & MetricsEngine<T>
//       🔍 Can I get <T> from JobStateMachine instead of redeclaring on MetricsEngine<T>?
//       💭 Is inheriting the JobStateMachine mudding SoC? Should StateMachine instantiated on construction?

export class JobMetricsEngine extends JobStateMachine {
  constructor(jobs: Job[]) {
    super(jobs);
  }

  get speed() {
    return calculateAverageRangeMetric(
      this.completedJobs,
      ({ completedAt, createdAt }) =>
        completedAt.getTime() - createdAt.getTime(),
    );
  }

  get cost() {
    return calculateAverageRangeMetric(
      this.pricedJobs,
      ({ averageCostPerPage }) => averageCostPerPage
    );
  }

  get rating() {
    return calculateAverageRangeMetric(
      this.ratedJobs,
      ({ providerRating }) => providerRating
    );
  }

  get totalMetrics(): JobMetrics {
    return {
      speed: this.speed,
      cost: this.cost,
      rating: this.rating,
    };
  }
}
