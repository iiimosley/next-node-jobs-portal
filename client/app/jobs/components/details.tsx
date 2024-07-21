import React from "react";
import Job from "@lib/types/job";
import List from "@components/list";

const JobDetailListItem = ({ label, value }: { label: string ; value?: string | number }) => !!value ? (
  <li>
    <span className="font-semibold">{label}:</span> {value}
  </li>
): null;

export default function JobDetails({ job }: { job: Job }) {
  return (
    <List title="Details">
      <JobDetailListItem label="Status" value={job.status} />
      <JobDetailListItem
        label="Created"
        value={new Date(job.createdAt).toLocaleDateString()}
      />
      <JobDetailListItem label="Location Type" value={job.locationType} />
      <JobDetailListItem label="Latitude" value={job.latitude} />
      <JobDetailListItem label="Longitude" value={job.longitude} />
    </List>
  );
}
