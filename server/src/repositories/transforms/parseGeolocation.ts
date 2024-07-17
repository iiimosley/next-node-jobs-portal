import { Geolocated } from "../../types/domains/shared/geolocated";
import { RawCsvRecord } from "../../types/utils/rawCsvRecord";

export const parseGeolocation = (record: RawCsvRecord): Partial<Geolocated> => ({
  latitude: record.latitude ? parseFloat(record.latitude) : undefined,
  longitude: record.longitude ? parseFloat(record.longitude) : undefined,
});