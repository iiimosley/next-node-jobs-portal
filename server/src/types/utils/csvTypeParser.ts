import { RawCsvRecord } from "./rawCsvRecord";

export type CsvTypeParser<T> = (dto: RawCsvRecord) => T;
