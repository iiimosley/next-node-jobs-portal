import ProviderScore from "./providerScore";

interface JobProvider {
  id: number;
  name: string;
  score: ProviderScore;
}

export default JobProvider;
