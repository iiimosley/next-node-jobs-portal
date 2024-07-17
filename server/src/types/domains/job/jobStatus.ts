const JobStatus = {
  COMPLETE: "Complete",
  "AWAITING MATERIAL": "Awaiting Material",
  SCHEDULED: "Scheduled",
} as const;

export type JobStatusValue = keyof typeof JobStatus;
