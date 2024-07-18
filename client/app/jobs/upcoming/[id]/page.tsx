import React from "react";
import Header from "@components/headers/base";
import JobsClient from "@services/jobs.client";
import JobDetails from "@/jobs/components/details";
import List from "@/_components/list";

export default async function UpcomingJob({
  params: { id },
}: {
  params: { id: string };
}) {
  const jobId = parseInt(id, 10);
  if (isNaN(jobId)) return null;

  const jobsClient = new JobsClient();
  const jobs = await jobsClient.getUpcomingJobs();

  const job = jobs.find(({ id }) => jobId === id);

  return !!job ? (
    <div>
      <Header title="<- Back to Upcoming Job Listings" href="/jobs/upcoming" />
      {/* <div className="mt-8 mx-auto flex flex-col content-center"> */}
      <div className="flex justify-center">
        <div className="mt-8 inline-block *:mb-12">
          <JobDetails job={job} />
          <List
            numbered
            title="Available Providers"
            subtitle="In order of Estimated Effectiveness"
          >
            {job.availableProviders.map((provider) => (
              <li key={`provider-${provider.id}`}>{provider.name}</li>
            ))}
          </List>
        </div>
      </div>
    </div>
  ) : null;
}
