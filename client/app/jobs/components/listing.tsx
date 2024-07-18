import Job from "@lib/types/job";
import JobDetails from "./details";
import Link from "next/link";

export default function UpcomingJobListing({
  job,
}: {
  job: Job;
}) {
  return (
    <div className="collapse collapse-arrow bg-base-200 max-w-lg mx-auto my-4 lg:max-w-2xl">
      <input type="radio" name="upcoming-job-accordion" />
      <div className="collapse-title text-xl font-medium">
        <div className="lg:inline">{job.status}: </div>
        <div className="lg:inline">{job.createdAt}</div>
      </div>
      <div className="collapse-content">
        <div className="py-1 px-8">
          <div className="mx-auto text-center">
            <Link
              className="italic link-hover font-semibold size-2 decoration-4 text-sky-300 decoration-sky-600"
              href={`/jobs/upcoming/${job.id}`}
            >
              View Available Providers
            </Link>
          </div>
          <JobDetails job={job} />
        </div>
      </div>
    </div>
  );
}
