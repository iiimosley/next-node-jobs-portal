import { Locatable } from "../../types/domains/shared/locatable";

const degreesToRadians = (degrees: number): number => degrees * (Math.PI / 180);

export const computeHaversineFormulaPercentage = (
  target: Locatable,
  source: Locatable,
  maxDistanceKm: number = 100 //maximum distance for 0% proximity
): number => {
  // I am not even going to pretend like I knew what the Haversine Formula was before this project
  // Or that I fully translated to TypeScript this formula from scratch
  // This formula was the immediate option in research for calculating proximity between two coordinates
  // The formula calculates the shortest distance between two points on a sphere
  // Maybe overkill, but it certainly does the job

  const earthRadiusKm = 6371;
  const dLat = degreesToRadians(source.latitude - target.latitude);
  const dLon = degreesToRadians(source.longitude - target.longitude);
  const lat1 = degreesToRadians(target.latitude);
  const lat2 = degreesToRadians(source.latitude);

  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const distance = earthRadiusKm * c;

  // Calculate the proximity percentage
  return Math.max(0, (1 - distance / maxDistanceKm) * 100);
};
