export const LocationType = {
  REMOTE: "Remote",
  LOCATION_BASED: "Location Based",
} as const;

export type LocationTypeValue = keyof typeof LocationType;
