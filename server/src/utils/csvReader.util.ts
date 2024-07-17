import fs from "fs";
import { parse, Options } from "csv-parse";
import { transform } from "stream-transform";
import { CsvTransformer } from "../types/utils/csvTransformer";
import { RawCsvRecord } from "../types/utils/rawCsvRecord";

const makeCsvFileParser = (options?: Options) =>
  parse({
    columns: true,
    ...options,
  });

const makeCsvFileTransformer = <T>(transformer: CsvTransformer<T>) =>
  transform<RawCsvRecord, T>((record) => transformer(record));

export const readCsv = async <T>(
  filePath: string,
  csvTransformer: CsvTransformer<T> = (record) => record as T,
  options?: Options
): Promise<T[]> => {
  const records: T[] = [];
  const csvFileParser = makeCsvFileParser(options);
  const csvFileTransformer = makeCsvFileTransformer(csvTransformer);

  const csvReadStream = fs
    .createReadStream(filePath, { encoding: "utf-8" })
    .pipe(csvFileParser)
    .pipe(csvFileTransformer)
    .on("end", () => {
      console.info(`Finished reading from ${filePath}`);
    })
    .on("error", ({ message }) => {
      console.error(message);
    });

  for await (const record of csvReadStream) {
    records.push(record)
  }

  return records;
};
