import HomeRedirectHeader from "@components/headers/homeRedirect";
import JobsClient from "@services/jobs.client";
import UpcomingJobListing from "./components/listing";

export default async function UpcomingJobs() {
  const jobsClient = new JobsClient();
  const jobs = await jobsClient.getUpcomingJobs();

  return (
    <>
      <HomeRedirectHeader />
      {jobs.map((job) => (
        <UpcomingJobListing job={job} />
      ))}
    </>
  );
}
