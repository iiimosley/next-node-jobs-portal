import React from "react";
import Header from "@components/headers/base";
import InlineCenterContainer from "@components/inlineCenterContainer";
import List from "@components/list";
import {
  parseJobScoreFromSearchParams,
  parseJobScoreDefaults,
} from "@lib/utils/parseJobScore";
import { PlainSearchParams } from "@lib/types/plainSearchParams";
import JobsClient from "@services/jobs.client";
import JobDetails from "../../components/details";
import ProviderDetails from "./components/providerDetails";
import PointBuy from "./components/pointBuy";

export default async function UpcomingJob({
  params: { id },
  searchParams,
}: {
  params: { id: string };
  searchParams: PlainSearchParams;
}) {
  const jobId = parseInt(id, 10);
  if (isNaN(jobId)) return null;

  const jobScoreParams = parseJobScoreFromSearchParams(searchParams);

  const jobsClient = new JobsClient();
  const job = await jobsClient.getJobById(jobId, jobScoreParams);
  if (job === undefined) return null;

  const jobScore = parseJobScoreDefaults(jobScoreParams);

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
            {job.availableProviders.map((provider, index) => (
              <ProviderDetails
                key={`provider-${provider.id}`}
                provider={provider}
                ranking={index + 1}
              />
            ))}
          </List>
        )}
        {process.env.NEXT_PUBLIC_POINT_BUY_ENABLED && (
          <PointBuy
            title="Adjust attributes for to recalculate provider recommendations"
            jobScore={jobScore}
          />
        )}
      </InlineCenterContainer>
    </div>
  );
}
