import { Geolocated } from "../shared/geolocated";
import { JobProviderRatingValue } from "./jobProviderRating";
import { JobStatusValue } from "./jobStatus";
import { LocationTypeValue } from "./locationType";

interface Job extends Partial<Geolocated> {
  id: number;
  status: JobStatusValue;
  averageCostPerPage?: number;
  providerId?: number;
  providerRating?: JobProviderRatingValue;
  createdAt: Date;
  completedAt?: Date;
  locationType: LocationTypeValue;
}

export default Job;
