import fs from "fs";
import { parse, Options } from "csv-parse";
import { CsvTypeParser } from "../types/utils/csvTypeParser";
import { transform } from "stream-transform";
import { RawCsvRecord } from "../types/utils/rawCsvRecord";

const makeCsvFileParser = (options?: Options) =>
  parse({
    columns: true,
    ...options,
  });

const makeCsvTransformer = <T>(typeParser?: CsvTypeParser<T>) =>
  transform<RawCsvRecord, T>((record) =>
    typeParser ? typeParser(record) : (record as T)
  );

export const readCsv = async <T>(
  filePath: string,
  csvTypeParser?: CsvTypeParser<T>,
  options?: Options
): Promise<T[]> => {
  const records: T[] = [];
  const csvFileParser = makeCsvFileParser(options);
  const csvTransformer = makeCsvTransformer(csvTypeParser);

  const parser = fs
    .createReadStream(filePath, { encoding: "utf-8" })
    .pipe(csvFileParser)
    .pipe(csvTransformer)
    .on("end", () => {
      console.info(`Finished reading from ${filePath}`);
    })
    .on("error", ({ message }) => {
      console.error(message);
    });

  for await (const record of parser) {
    records.push(record)
  }

  return records;
};
