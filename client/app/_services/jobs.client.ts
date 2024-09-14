import Job from "@lib/types/job";
import UpcomingJob from "@lib/types/job/upcomingJob";
import UrlPath from "@lib/types/urlPath";
import { JobScore } from "@lib/types/provider/providerScore";

class JobsClient {
  private baseUrl: string;

  constructor() {
    this.baseUrl = process.env.JOBS_API_URL || "http://localhost:5000";
  }

  async getUpcomingJobs() {
    return await this.fetch<UpcomingJob[]>("/jobs/upcoming");
  }

  async getJobById(id: number, scores?: Partial<JobScore>) {
    const search = this.buildJobFindQueryParams(scores);

    console.log(`Fetching Job #${id} with the following params`, search);

    return await this.fetch<Job>(`/jobs/${id}?${search}`);
  }

  private async fetch<T>(path: UrlPath) {
    const response = await fetch(`${this.baseUrl}${path}`, {
      cache: "no-cache",
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch: ${response.statusText}`);
    }

    return response.json() as Promise<T>;
  }

  private buildJobFindQueryParams = (scores?: Partial<JobScore>) =>
    new URLSearchParams({
      includeProviders: "1",
      ...(scores &&
        Object.fromEntries(
          Object.entries(scores).map(([key, value]) => [key, value?.toString()])
        )),
    });
}

export default JobsClient;
