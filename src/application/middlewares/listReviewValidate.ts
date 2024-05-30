import { Request, Response, NextFunction } from "express";
import { ValidateData } from "../validators";
import { IQueryData as IQueryDataDTO } from "../../domain/interfaces/IQueryData";
import { ListReviewValidator } from "../validators/listReviewValidator";

async function listReviewValidate(
  request: Request,
  response: Response,
  next: NextFunction,
) {
  const { offset, limit }: IQueryDataDTO = request.query;

  const validateData = new ValidateData();

  const listReviewValidator = new ListReviewValidator({
    offset: offset ? Number(offset) : undefined,
    limit: limit ? Number(limit) : undefined,
  });

  const errors = await validateData.validate(listReviewValidator);

  if (errors.length > 0) {
    return response.status(400).json(errors);
  }

  next();
}

export { listReviewValidate };
