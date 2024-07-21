import HomeRedirectHeader from "@components/headers/homeRedirect";
import JobsClient from "@services/jobs.client";
import Link from "next/link";

export default async function UpcomingJobs() {
  const jobsClient = new JobsClient();
  const jobs = await jobsClient.getUpcomingJobs();

  return (
    <>
      <HomeRedirectHeader />
      <div className="mt-8">
        {jobs
          .sort(
            (jobA, jobB) =>
              new Date(jobA.createdAt).getTime() -
              new Date(jobB.createdAt).getTime()
          )
          .map((job) => (
            <div className="rounded-lg bg-base-200 max-w-sm mx-auto my-4 py-4 lg:py-2 lg:max-w-xl">
              <Link
                className="decoration-none text-center lg:decoration-inherit link-hover size-2 decoration-4 text-sky-300 decoration-sky-600"
                href={`/jobs/upcoming/${job.id}`}
              >
                <div className="font-semibold text-lg">{job.status}</div>
                <div>{new Date(job.createdAt).toUTCString()}</div>
              </Link>
            </div>
          ))}
      </div>
    </>
  );
}
