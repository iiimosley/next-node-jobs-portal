import JobProvider from "@lib/types/provider";
import List from "@components/list";

export default function ProviderDetails({
  provider,
  ranking,
}: {
  provider: JobProvider;
  ranking: number;
}) {
  return (
    <div className="collapse collapse-arrow bg-base-200 max-w-lg mx-auto my-4 lg:max-w-2xl">
      <input type="radio" name="upcoming-job-accordion" />
      <div className="collapse-title text-xl font-semibold">
          #{ranking}: {provider.name}
      </div>
      <div className="collapse-content">
        {/* TODO: Filter out Proximity scores for Remote jobs */}
        <List title="Scores">
          {Object.entries(provider.score).map(([label, value]) => (
            <li key={`provider-score-${label}`}>
              <span className="font-medium capitalize">{label}:</span>{" "}
              {value !== 0 ? `${value.toFixed(2)}%` : "N/A"}
            </li>
          ))}
        </List>
      </div>
    </div>
  );
}
