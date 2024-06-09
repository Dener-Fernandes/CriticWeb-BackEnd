import { Request, Response, NextFunction } from "express";
import {
  IReview as IReviewDTO,
  IReviewWithStringIds,
} from "../../domain/interfaces/IReview";
import { CreateReviewValidator } from "../validators/createReviewValidator";
import { ValidateData } from "../validators";

async function updateReviewValidate(
  request: Request,
  response: Response,
  next: NextFunction,
) {
  const { description, rating, isLiked }: IReviewDTO = request.body;
  const { reviewId } = request.params;

  if (!Number(reviewId)) {
    return response.status(400).json({ message: "Invalid review ID" });
  }

  const validateData = new ValidateData();

  const reviewValidator = new CreateReviewValidator({
    description,
    rating,
    isLiked,
  });

  const errors = await validateData.validate(reviewValidator);

  if (errors.length > 0) {
    return response.status(400).json(errors);
  }

  next();
}

export { updateReviewValidate };
