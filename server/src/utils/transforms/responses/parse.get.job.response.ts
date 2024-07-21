import Job from "../../../types/domains/job";
import { JobStatus, JobStatusValue } from "../../../types/domains/job/jobStatus";
import { LocationType, LocationTypeValue } from "../../../types/domains/job/locationType";

export interface JobResponse extends Omit<Job, "status" | "locationType"> {
  status: typeof JobStatus[JobStatusValue],
  locationType: typeof LocationType[LocationTypeValue],
}

export const parseGetJobResponse = (job: Job): JobResponse => ({
  ...job,
  status: JobStatus[job.status] ?? job.status,
  locationType: LocationType[job.locationType] ?? job.locationType,
});
