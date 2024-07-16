import path from "path";
import Job from "../types/job";
import { readCsv } from "../utilities/csvReader.util";

export class JobRepository {
  sourceFile: string;

  public constructor() {
    this.sourceFile = path.join(__dirname, "data", "jobs.csv");
  }

  public async getJobs() {
    return await readCsv<Job>(this.sourceFile);
  }
}
