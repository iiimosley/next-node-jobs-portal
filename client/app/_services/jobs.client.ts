import Job from "../_lib/types/job";
import UrlPath from "../_lib/types/urlPath";

export class JobsClient {
  private baseUrl: string;

  constructor() {
    // TODO: Set to environment variable
    this.baseUrl = "http://localhost:5000";
  }

  async getUpcomingJobs() {
    return await this.fetch<Job[]>("/jobs/upcoming");
  }

  private async fetch<T>(path: UrlPath) {
    const response = await fetch(`${this.baseUrl}${path}`);
    
    if (!response.ok) {
      throw new Error(`Failed to fetch: ${response.statusText}`);
    }

    return response.json() as Promise<T>;
  }
}
