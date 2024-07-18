import UpcomingJob from "@lib/types/job/upcomingJob";

export default function UpcomingJobListing({
  job: { status, createdAt, availableProviders },
}: {
  job: UpcomingJob;
}) {
  return (
    <div className="collapse collapse-plus bg-base-200">
      <input type="radio" name="upcoming-job-accordion" />
      <div className="collapse-title text-xl font-medium">
        {status} - {createdAt}
      </div>
      <div className="collapse-content">
       { availableProviders.map((provider) => (
          <p>{provider.name}</p>
        ))}
      </div>
    </div>
  );
}
