import { useAtom } from "jotai";
import { useSearchParams } from "next/navigation";
import { jobScoreAtom } from "@atoms/jobScoreAtom";
import { JobScore } from "../_lib/types/provider/providerScore";

export default function useJobScore() {
  const [jobScore, setAtomJobScore] = useAtom(jobScoreAtom);
  const searchParams = useSearchParams();
  
  const setJobScore = (newJobScore: Partial<JobScore>) => {
    const updatedScore = { ...jobScore, ...newJobScore };

    Object.entries(updatedScore).forEach(([key, value]) => {
      // TODO: Set values to query params
    })

    setAtomJobScore(updatedScore);
  };
  
  return [jobScore, setJobScore] as const;
};
