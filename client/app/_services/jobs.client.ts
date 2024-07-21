import Job from "@lib/types/job";
import UpcomingJob from "@lib/types/job/upcomingJob";
import UrlPath from "@lib/types/urlPath";

class JobsClient {
  private baseUrl: string;

  constructor() {
    this.baseUrl = process.env.JOBS_API_URL || "http://localhost:5000";
  }

  async getUpcomingJobs() {
    return await this.fetch<UpcomingJob[]>("/jobs/upcoming");
  }

  async getJobById(id: number) {
    return await this.fetch<Job>(`/jobs/${id}?includeProviders=1`);
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
}

export default JobsClient;
