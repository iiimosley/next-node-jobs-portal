interface Job {
  id: number;
  status: string;
  createdAt: string;
  completedAt?: string;
}

export default Job;