import Job from ".";
import JobProvider from "../jobProvider";

interface UpcomingJob extends Job {
  availableProviders: JobProvider[];
}

export default UpcomingJob;
