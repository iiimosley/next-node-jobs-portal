interface JobProvider {
  id: number;
  name: string;
  proximity: number;
  speed?: number
  cost?: number;
  rating?: number;
}

export default JobProvider;
