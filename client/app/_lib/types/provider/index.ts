import { JobScore } from "./providerScore";

interface JobProvider {
  id: number;
  name: string;
  score: JobScore;
}

export default JobProvider;
