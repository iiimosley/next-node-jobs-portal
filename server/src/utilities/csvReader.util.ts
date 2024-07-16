import fs from "fs";
import { parse, Options } from "csv-parse";

const makeCsvParser = (options?: Options) => {
  const parseOptions = {
    columns: true,
    ...options,
  };

  return parse(parseOptions);
};

export const readCsv = async <T>(
  filePath: string,
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
    records.push(record as T);
  }

  return records;
};

