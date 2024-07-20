import { Locatable } from "../../types/domains/shared/locatable";

// I am not even going to pretend like I knew what the Haversine Formula was before this project
// Or that I fully translated this formula to TypeScript from scratch
//
// The formula calculates the shortest distance between two points on a sphere
// as the distance formula (√(x2 - x1)^2 + (y2 - y1)^2) doesn't account for the curvature of the Earth (or whichever spherical planet you're navigating)
//
// Maybe overkill for an approximation metric, but who am I to argue with science?
//
// more details on JS implementation: https://www.movable-type.co.uk/scripts/latlong.html

export const calculateHaversineFormulaPercentage = (
  target: Locatable,
  source: Locatable,
  maxDistanceKm: number = 100, // maximum distance for 0% proximity
  sphereRadiusKm: number = 6371 // Earth
): number => {
  const convertDegreesToRadians = (degrees: number): number =>
    degrees * (Math.PI / 180);

  const targetLatitudeRadians = convertDegreesToRadians(target.latitude);
  const sourceLatitudeRadians = convertDegreesToRadians(source.latitude);
  const deltaLatitudeRadians = convertDegreesToRadians(
    source.latitude - target.latitude
  );
  const deltaLongitudeRadians = convertDegreesToRadians(
    source.longitude - target.longitude
  );

  const halfChordLengthSquared =
    Math.sin(deltaLatitudeRadians / 2) * Math.sin(deltaLatitudeRadians / 2) + 
    Math.sin(deltaLongitudeRadians / 2) *
      Math.sin(deltaLongitudeRadians / 2) *
      Math.cos(targetLatitudeRadians) *
      Math.cos(sourceLatitudeRadians);

  const centralAngle =
    2 *
    Math.atan2(
      Math.sqrt(halfChordLengthSquared),
      Math.sqrt(1 - halfChordLengthSquared)
    );

  const distance = sphereRadiusKm * centralAngle;

  // Calculate the proximity percentage
  return Math.max(0, (1 - distance / maxDistanceKm) * 100);
};
