import JobProvider from "../provider";

interface Job {
  id: number;
  status: string;
  createdAt: string;
  locationType: string;
  latitude?: number;
  longitude?: number;
  availableProviders?: JobProvider[];
}

export default Job;
