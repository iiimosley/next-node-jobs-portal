import { Options, parse } from "csv-parse";

export const initializeCsvFileParser = (fileName: string, options?: Options) =>
  parse({
    columns: true,
    ...options,
  })
    .on("end", () => {
      console.info(`Finished reading from ${fileName}`);
    })
    .on("error", ({ message }) => {
      console.error(message);
    });
