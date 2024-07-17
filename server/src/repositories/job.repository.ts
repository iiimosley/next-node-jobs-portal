import path from "path";
import Job from "../types/domains/job/job";
import { readCsv } from "../utils/csvReader.util";
import { parseJobDto } from "../utils/parsers/jobDto.parser";

export class JobRepository {
  sourceFile: string;

  public constructor() {
    this.sourceFile = path.join(__dirname, "data", "jobs.csv");
  }

  public async getJobs() {
    return await readCsv<Job>(this.sourceFile, parseJobDto);
  }
}
