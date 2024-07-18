import HomeRedirectHeader from "@components/headers/homeRedirect";
import JobsClient from "@services/jobs.client";
import UpcomingJobListing from "./components/listing";

export default async function UpcomingJobs() {
  const jobsClient = new JobsClient();
  const jobs = await jobsClient.getUpcomingJobs();

  return (
    <>
      <HomeRedirectHeader />
      <div className="mt-8">
        {jobs.map((job) => (
          <UpcomingJobListing key={`upcoming-job-${job.id}`} job={job} />
        ))}
      </div>
    </>
  );
}
