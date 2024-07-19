import Provider from "../../types/domains/provider";
import { RawCsvRecord } from "../../types/utils/rawCsvRecord";
import { parseCoordinates } from "./parseCoordinates";

export const parseProvider = (record: RawCsvRecord): Provider => ({
  id: parseInt(record.id, 10),
  name: record.full_name,
  ...parseCoordinates(record),
});
