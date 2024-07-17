import Job from "../../types/domains/job";
import { JobProviderRatingValue } from "../../types/domains/job/jobProviderRating";
import { JobStatusValue } from "../../types/domains/job/jobStatus";
import { LocationTypeValue } from "../../types/domains/job/locationType";
import { RawCsvRecord } from "../../types/utils/rawCsvRecord";
import { parseGeolocation } from "./parseGeolocation";

export const parseJob = (record: RawCsvRecord): Job => ({
  id: parseInt(record.id, 10),
  status: record.status as JobStatusValue,
  averageCostPerPage: record.avg_cost_per_page
    ? parseInt(record.avg_cost_per_page, 10)
    : undefined,
  providerId: record.provider_id
    ? parseInt(record.provider_id, 10)
    : undefined,
  providerRating: record.provider_rating ? parseInt(
    record.provider_rating,
    10
  ) as JobProviderRatingValue : undefined,
  createdAt: new Date(record.datetime),
  completedAt: record.materials_turned_in_at
    ? new Date(record.materials_turned_in_at)
    : undefined,
  locationType: record.location_type as LocationTypeValue,
  ...parseGeolocation(record),
});
