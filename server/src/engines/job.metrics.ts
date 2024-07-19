import Job from "../types/domains/job";
import { AverageJobMetrics } from "../types/metrics/averageJobMetrics";
import { computeJobMetric } from "../utils/computations/computeAverageMetric";
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
    return computeJobMetric(
      this.completedJobs,
      ({ completedAt, createdAt }) =>
        completedAt.getTime() - createdAt.getTime()
    );
  }

  get cost() {
    return computeJobMetric(
      this.pricedJobs,
      ({ averageCostPerPage }) => averageCostPerPage
    );
  }

  get rating() {
    return computeJobMetric(
      this.ratedJobs,
      ({ providerRating }) => providerRating
    );
  }

  get totalMetrics(): AverageJobMetrics {
    return {
      speed: this.speed,
      cost: this.cost,
      rating: this.rating,
    };
  }
}
