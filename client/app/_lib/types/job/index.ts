import JobProvider from "./jobProvider";

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
