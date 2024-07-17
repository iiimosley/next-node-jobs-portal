import fs from "fs";
import { Options } from "csv-parse";
import { CsvTransformer } from "../../types/utils/csvTransformer";
import { initializeCsvFileParser } from "./pipes/parser.pipe";
import { initializeCsvFileTransformer } from "./pipes/transformer.pipe";

export const readCsv = async <T>(
  filePath: string,
  csvTransformer: CsvTransformer<T> = (record) => record as T,
  options?: Options
): Promise<T[]> => {
  const fileName = filePath.split("/").pop() ?? "";

  const records: T[] = [];
  const csvFileParser = initializeCsvFileParser(fileName, options);
  const csvFileTransformer = initializeCsvFileTransformer(csvTransformer, fileName);

  const csvReadStream = fs
    .createReadStream(filePath, { encoding: "utf-8" })
    .pipe(csvFileParser)
    .pipe(csvFileTransformer);

  for await (const record of csvReadStream) {
    records.push(record)
  }

  return records;
};
