import { NextFunction, Request, Response } from "express";
import { CreateUserValidator } from "../validators/createUserValidator";
import { ValidateData } from "../validators";

async function validateUser(
  request: Request,
  response: Response,
  next: NextFunction,
) {
  const validateData = new ValidateData();
  const createUserValidator = new CreateUserValidator(request.body);

  const errors = await validateData.validate(createUserValidator);
  const isPasswordsDifferent = createUserValidator.validatePasswordsMatch();

  if (isPasswordsDifferent) {
    errors.push(isPasswordsDifferent);
  }

  if (errors.length > 0) {
    return response.status(400).json(errors);
  }

  next();
}

export { validateUser };
