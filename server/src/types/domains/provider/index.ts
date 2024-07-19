import Job from "../job";
import { Geolocated } from "../shared/geolocated";

interface Provider extends Partial<Geolocated> {
  id: number;
  name: string;
  relatedJobs?: Job[];
}

export default Provider;
