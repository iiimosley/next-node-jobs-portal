import React from "react";
import Header from "@components/headers/base";
import JobsClient from "@services/jobs.client";
import JobOverview from "./components/jobOverview";

export default async function UpcomingJob({
  params: { id },
}: {
  params: { id: string };
}) {
  const jobId = parseInt(id, 10);
  if (isNaN(jobId)) return null;

  const jobsClient = new JobsClient();
  const job = await jobsClient.getJobById(jobId);
  if (job === undefined) return null;

  return (
    <div>
      <Header title="<- Back to Upcoming Job Listings" href="/jobs/upcoming" />
      <JobOverview job={job} />
    </div>
  );
}
