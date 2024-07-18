import JobListing from "../_components/jobListing";

export default function UpcomingJobs() {
  const jobs = [
    {
      status: "Awaiting Materials",
      date: "2021-12-01",
    },
    {
      status: "Completed",
      date: "2021-12-02",
    },
    {
      status: "Scheduled",
      date: "2021-12-03",
    },
  ];

  return (
    <div>
      {jobs.map(({ status, date }) => (
        <JobListing status={status} date={date} />
      ))}
    </div>
  );
}
