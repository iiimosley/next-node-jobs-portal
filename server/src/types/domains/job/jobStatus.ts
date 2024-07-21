export const JobStatus = {
  COMPLETE: "Complete",
  "AWAITING MATERIALS": "Awaiting Material",
  SCHEDULED: "Scheduled",
} as const;

export type JobStatusValue = keyof typeof JobStatus;
