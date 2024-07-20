import Job from ".";
import JobProvider from "../provider";

interface UpcomingJob extends Job {
  availableProviders: JobProvider[];
}

export default UpcomingJob;
