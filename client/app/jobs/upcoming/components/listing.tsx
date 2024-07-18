import UpcomingJob from "@lib/types/job/upcomingJob";

export default function UpcomingJobListing({
  job: { status, createdAt, availableProviders },
}: {
  job: UpcomingJob;
}) {
  return (
    <div className="collapse collapse-arrow bg-base-200 max-w-lg mx-auto my-4 lg:max-w-2xl">
      <input type="radio" name="upcoming-job-accordion" />
      <div className="collapse-title text-xl font-medium">
        <div className="lg:inline">{status}: </div>
        <div className="lg:inline">{createdAt}</div>
      </div>
      <div className="collapse-content">
        {availableProviders.map(({id, name}) => (
          <p key={`available-provider-${id}`}>{name}</p>
        ))}
      </div>
    </div>
  );
}
