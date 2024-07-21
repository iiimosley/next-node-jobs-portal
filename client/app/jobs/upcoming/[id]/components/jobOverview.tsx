"use client";

import React from "react";
import InlineCenterContainer from "@components/inlineCenterContainer";
import List from "@components/list";
import Job from "@lib/types/job";
import { deduplicate } from "@lib/utils/deduplicate";
import JobDetails from "../../../components/details";
import PointBuy from "./pointBuy";

// TODO: Create state for attributes with default values (3)
//       Extend the PointBuy component to handle state
//       On state change, recalculate provider scores with fetch request
//       Create new endpoint in the server to handle provider score recalculation
//       Rehydrate the provider scores with the new values

const setScoreAttributes = (job: Job) => {
  const scoreAttributes = job.availableProviders
    ?.flatMap(({ score }) => Object.keys(score))
    .reduce<string[]>(deduplicate, []);

  return scoreAttributes;
}

export default function JobOverview({ job }: { job: Job }) {
  const scoreAttributes = setScoreAttributes(job);

  return (
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
  );
}
