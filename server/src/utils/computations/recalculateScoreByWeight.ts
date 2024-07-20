import { POINT_ADJUSTMENTS } from "../../constants/pointAdjustments";
import { Weight } from "../../types/metrics/weight";

export const recalculateScoreByWeight = <T extends { [key: string]: number }>(
  scores: T,
  weight: Weight<T>
): T =>
  Object.entries(weight).reduce(
    (recalculatedScores, [key, point]) => ({
      ...recalculatedScores,
      [key]: POINT_ADJUSTMENTS[point](scores[key] || 0),
    }),
    scores
  );
