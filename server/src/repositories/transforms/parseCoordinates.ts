import { Locatable } from "../../types/domains/shared/locatable";
import { RawCsvRecord } from "../../types/utils/rawCsvRecord";

export const parseCoordinates = (record: RawCsvRecord): Partial<Locatable> => ({
  latitude: record.latitude ? parseFloat(record.latitude) : undefined,
  longitude: record.longitude ? parseFloat(record.longitude) : undefined,
});