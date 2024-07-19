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
      (acc, { completedAt, createdAt }) =>
        acc + (completedAt.getTime() - createdAt.getTime())
    );
  }

  get cost() {
    return computeJobMetric(
      this.pricedJobs,
      (acc, { averageCostPerPage }) => acc + averageCostPerPage
    );
  }

  get rating() {
    return computeJobMetric(
      this.ratedJobs,
      (acc, { providerRating }) => acc + providerRating
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
