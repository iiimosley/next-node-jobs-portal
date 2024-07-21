import { useAtom } from "jotai";
import { jobScoreAtom } from "@atoms/jobScoreAtom";
import { JobScore } from "@lib/types/provider/providerScore";

export default function useJobScore() {
  const [jobScore, setAtomJobScore] = useAtom(jobScoreAtom);
  
  const setJobScore = (newJobScore: Partial<JobScore>) => {
    const updatedScore = { ...jobScore, ...newJobScore };

    // TODO: Set values to query params
    // Object.entries(updatedScore).forEach(([key, value]) => {});

    setAtomJobScore(updatedScore);
  };
  
  return [jobScore, setJobScore] as const;
};
