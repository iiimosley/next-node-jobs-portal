import fs from "fs";
import { parse, Options } from "csv-parse";
import { CsvParser } from "../types/utils/dtoParser";

const makeCsvParser = (options?: Options) =>
  parse({
    columns: true,
    ...options,
  });

export const readCsv = async <T>(
  filePath: string,
  dtoParser?: CsvParser<T>,
  options?: Options
): Promise<T[]> => {
  const records: T[] = [];
  const csvParser = makeCsvParser(options);

  const parser = fs
    .createReadStream(filePath, { encoding: "utf-8" })
    .pipe(csvParser)
    .on("end", () => {
      console.info(`Finished reading from ${filePath}`);
    })
    .on("error", ({ message }) => {
      console.error(message);
    });

  for await (const record of parser) {
    records.push(dtoParser ? dtoParser(record) : record)
  }

  return records;
};
