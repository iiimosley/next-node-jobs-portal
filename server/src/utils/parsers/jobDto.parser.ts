import Job from "../../types/job";
import { JobProviderRatingValue } from "../../types/jobProviderRating";
import JobStatus from "../../types/jobStatus";
import LocationType from "../../types/locationType";

export const parseJobDto = (jobDto: Record<string, unknown>): Job => ({
  id: parseInt(jobDto.id as string, 10),
  status: jobDto.status as JobStatus,
  averageCostPerPage: parseInt(jobDto.avg_cost_per_page as string, 10),
  createdAt: new Date(jobDto.createdAt as string),
  completedAt: jobDto.materials_turned_in_at
    ? new Date(jobDto.materials_turned_in_at as string)
    : undefined,
  providerId: parseInt(jobDto.provider_id as string, 10),
  providerRating: jobDto.provider_rating as JobProviderRatingValue,
  locationType: jobDto.location_type as LocationType,
  latitude: jobDto.latitude ? parseFloat(jobDto.latitude as string) : undefined,
  longitude: jobDto.longitude
    ? parseFloat(jobDto.longitude as string)
    : undefined,
});
