import HomeRedirectHeader from "../../_components/headers/homeRedirect";
import { JobsClient } from "../../_services/jobs.client";
import JobListing from "../_components/jobListing";

export default async function UpcomingJobs() {
  const jobsClient = new JobsClient();
  const jobs = await jobsClient.getUpcomingJobs();

  return (
    <>
      <HomeRedirectHeader />
      {jobs.map(({ status, createdAt, completedAt }) => (
        <JobListing status={status} date={completedAt ?? createdAt} />
      ))}
    </>
  );
}
