import { RawCsvRecord } from "./rawCsvRecord";

export type CsvParser<T> = (dto: RawCsvRecord) => T;
