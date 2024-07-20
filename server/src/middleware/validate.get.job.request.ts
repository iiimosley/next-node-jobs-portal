import { Request, Response, NextFunction } from "express";
import { parseNumeric } from "../utils/transforms/parseNumeric";

// TODO: Leverage zod more dynamic validation

export const validateGetJobRequest = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;
  const { speed, cost, rating, proximity } = req.query;

  if (isNaN(parseInt(id, 10)))
    return res.status(400).json({ error: "Job ID must be a number" });

  const invalidWeights = Object.entries({
    speed,
    cost,
    rating,
    proximity,
  }).filter(
    ([, value]) =>
      value !== undefined &&
      (typeof value !== "string" || isNaN(parseNumeric(value)))
  );

  if (invalidWeights.length) {
    const invalidKeys = invalidWeights.map(([key]) => key);

    return res.status(400).json({
      error:
        invalidKeys.length > 1
          ? `The following parameters must be numbers: ${invalidKeys.join(", ")}`
          : `${invalidKeys[0]} must be a string`,
    });
  }

  next();
};
