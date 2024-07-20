import { Request, Response, NextFunction } from "express";

// TODO: Leverage zod more dynamic validation

export const validateGetJobRequest = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (isNaN(parseInt(req.params.id, 10)))
    return res.status(400).json({ error: "Job ID must be a number" });

  next();
};
