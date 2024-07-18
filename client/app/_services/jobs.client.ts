import UpcomingJob from "@lib/types/job/upcomingJob";
import UrlPath from "@lib/types/urlPath";

class JobsClient {
  private baseUrl: string;

  constructor() {
    // TODO: Set to environment variable
    this.baseUrl = "http://localhost:5000";
  }

  async getUpcomingJobs() {
    return await this.fetch<UpcomingJob[]>("/jobs/upcoming");
  }

  private async fetch<T>(path: UrlPath) {
    const response = await fetch(`${this.baseUrl}${path}`);
    
    if (!response.ok) {
      throw new Error(`Failed to fetch: ${response.statusText}`);
    }

    return response.json() as Promise<T>;
  }
}

export default JobsClient;
