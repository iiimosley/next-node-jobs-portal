import { transform } from "stream-transform";
import { CsvTransformer } from "../../../../types/utils/csvTransformer";
import { RawCsvRecord } from "../../../../types/utils/rawCsvRecord";

export const initializeCsvFileTransformer = <T>(
  transformer: CsvTransformer<T>,
  fileName: string,
) =>
  transform<RawCsvRecord, T>((record) => transformer(record))
    .on("end", () => {
      console.info(`Finished transforms on ${fileName}`);
    })
    .on("error", ({ message }) => {
      console.error(message);
    });
