import React from "react";
import Header from "@components/headers/base";
import InlineCenterContainer from "@components/inlineCenterContainer";
import List from "@components/list";
import PointBuy from "@components/pointBuy";
import JobsClient from "@services/jobs.client";
import JobDetails from "@/jobs/components/details";

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

  const scoreAttributes = job.availableProviders
    ?.flatMap(({ score }) => Object.keys(score))
    .reduce<string[]>(
      (acc, attribute) => (acc.includes(attribute) ? acc : [...acc, attribute]),
      []
    );

  // TODO: Pull out JSX to client component for react hooks
  //       Create state for attributes with default values (3)
  //       Extend the PointBuy component to handle state
  //       On state change, recalculate provider scores with fetch request
  //       Create new endpoint in the server to handle provider score recalculation
  //       Rehydrate the provider scores with the new values

  return (
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
        {scoreAttributes && (
          <PointBuy
            title="Adjust attributes for to recalculate provider recommendations"
            attributes={scoreAttributes}
          />
        )}
      </InlineCenterContainer>
    </div>
  );
}
