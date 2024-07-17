import Job from "../../types/domains/job/job";
import { JobProviderRatingValue } from "../../types/domains/job/jobProviderRating";
import { JobStatusValue } from "../../types/domains/job/jobStatus";
import { LocationTypeValue } from "../../types/domains/job/locationType";

export const parseJobDto = (jobDto: Record<string, unknown>): Job => ({
  id: parseInt(jobDto.id as string, 10),
  status: jobDto.status as JobStatusValue,
  averageCostPerPage: jobDto.avg_cost_per_page
    ? parseInt(jobDto.avg_cost_per_page as string, 10)
    : undefined,
  providerId: jobDto.provider_id
    ? parseInt(jobDto.provider_id as string, 10)
    : undefined,
  providerRating: jobDto.provider_rating ? parseInt(
    jobDto.provider_rating as string,
    10
  ) as JobProviderRatingValue : undefined,
  createdAt: new Date(jobDto.datetime as string),
  completedAt: jobDto.materials_turned_in_at
    ? new Date(jobDto.materials_turned_in_at as string)
    : undefined,
  locationType: jobDto.location_type as LocationTypeValue,
  latitude: jobDto.latitude ? parseFloat(jobDto.latitude as string) : undefined,
  longitude: jobDto.longitude
    ? parseFloat(jobDto.longitude as string)
    : undefined,
});
