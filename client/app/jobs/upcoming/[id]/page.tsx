import React from "react";
import Header from "@components/headers/base";
import InlineCenterContainer from "@components/inlineCenterContainer";
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
  const job = await jobsClient.getJobById(jobId);

  return !!job ? (
    <div>
      <Header title="<- Back to Upcoming Job Listings" href="/jobs/upcoming" />
      <InlineCenterContainer className="mt-8 *:mb-12">
        <JobDetails job={job} />
        {job.availableProviders !== undefined && (
          <List
            numbered
            title="Available Providers"
            subtitle="In order of Estimated Effectiveness"
          >
            {job.availableProviders.map((provider) => (
              <li key={`provider-${provider.id}`}>{provider.name}</li>
            ))}
          </List>
        )}
      </InlineCenterContainer>
    </div>
  ) : null;
}
