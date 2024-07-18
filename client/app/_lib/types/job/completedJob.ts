import Job from ".";

interface CompletedJob extends Job {
  completedAt: string;
}

export default CompletedJob;
