"use client";

import React from "react";
import InlineCenterContainer from "@components/inlineCenterContainer";
import List from "@components/list";
import Job from "@lib/types/job";
import JobDetails from "../../../components/details";
import PointBuy from "./pointBuy";


export default function JobOverview({ job }: { job: Job }) {
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
        <PointBuy
          title="Adjust attributes for to recalculate provider recommendations"
        />
    </InlineCenterContainer>
  );
}
