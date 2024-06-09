import { Request, Response, NextFunction } from "express";

function findReviewValidate(
  request: Request,
  response: Response,
  next: NextFunction,
) {
  const { reviewId } = request.params;

  if (!Number(reviewId)) {
    return response.status(400).json({ message: "Invalid review ID" });
  }

  next();
}

export { findReviewValidate };
