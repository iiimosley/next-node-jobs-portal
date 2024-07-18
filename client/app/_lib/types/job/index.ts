interface Job {
  id: number;
  status: string;
  createdAt: string;
  locationType: string;
  latitude?: number;
  longitude?: number;
}

export default Job;
