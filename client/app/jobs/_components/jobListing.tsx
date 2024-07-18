export default function JobListing({
  status,
  date,
}: {
  status: string;
  date: string;
}) {
  return (
    <div>
      <h1>{status} - {date}</h1>
    </div>
  );
}
