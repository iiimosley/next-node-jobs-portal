import { JobMetricsEngine } from "../engines/job.metrics";
import { JobRepository } from "./job.repository";

  //  Ideally, there would be job_metrics table, which would...
  //    - be hydrated by a scheduled compute process
  //    - have redundancies in cold storage for historical analysis
  //    - be periodically culled to keep the table size manageable
  // 
  //  Computing these metrics on demand can be $$$$$$ and slow.
  //  As well, having historical data can be useful for analysis.
  //
  //  job_metrics.columns:
  //  score_high | score_low | score_avg | cost_high | cost_low | cost_avg | rating_high | rating_low | rating_avg

export class JobMetricsRepository {
  /** SELECT * FROM job_metrics ORDER BY updated_at DESC LIMIT 1; */
  public async getLatestJobMetrics() {
    const { totalMetrics } = new JobMetricsEngine(
      await new JobRepository().getJobs()
    );

    return totalMetrics;
  }
}
