import path from "path";
import { readCsv } from "../utils/streams/csvReader";
import { CsvTransformer } from "../types/utils/csvTransformer";

export abstract class Repository<T> {
  constructor(protected fileName: string) {}

  get sourceFile(): string {
    return path.join(__dirname, "data", this.fileName);
  }

  protected async readCsv(transformer: CsvTransformer<T>): Promise<T[]> {
    return await readCsv<T>(this.sourceFile, transformer);
  }
}