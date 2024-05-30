import { Request, Response, NextFunction } from "express";
import {
  IReview as IReviewDTO,
  IReviewWithStringIds,
} from "../../domain/interfaces/IReview";
import { CreateReviewValidator } from "../validators/createReviewValidator";
import { ValidateData } from "../validators";

async function reviewValidate(
  request: Request,
  response: Response,
  next: NextFunction,
) {
  let { description, rating, isLiked }: IReviewDTO = request.body;
  const { movieId }: IReviewWithStringIds = request.params;

  const validateData = new ValidateData();

  const reviewValidator = new CreateReviewValidator({
    description,
    rating,
    isLiked,
    movieId: Number(movieId),
  });

  const errors = await validateData.validate(reviewValidator);

  if (errors.length > 0) {
    return response.status(400).json(errors);
  }

  next();
}

export { reviewValidate };
