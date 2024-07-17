import { RawCsvRecord } from "./rawCsvRecord";

export type CsvTransformer<T> = (dto: RawCsvRecord) => T;
