import { JobProviderRatingValue } from "./jobProviderRating";
import JobStatus from "./jobStatus";
import LocationType from "./locationType";

interface Job {
  id: number;
  status: JobStatus;
  averageCostPerPage: number;
  createdAt: Date;
  completedAt?: Date;
  providerId: number;
  providerRating?: JobProviderRatingValue;
  locationType: LocationType;
  latitude?: number;
  longitude?: number;
}

export default Job;
