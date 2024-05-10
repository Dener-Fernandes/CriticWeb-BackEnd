import { Request, Response, NextFunction } from "express";
import { IMovie } from "../../domain/interfaces/IMovie";
import { ValidateData } from "../validators";
import { createMovieValidator } from "../validators/createMovieValidator";

async function movieValidate(
  request: Request,
  response: Response,
  next: NextFunction,
) {
  const { title, category, image, description }: IMovie = request.body;

  const validateData = new ValidateData();

  const movieValidator = new createMovieValidator({
    title,
    category,
    image,
    description,
  });

  const errors = await validateData.validate(movieValidator);
  const isCategoryInvalid = movieValidator.validateCategory();

  if (!isCategoryInvalid) {
    errors.push({
      message: `Invalid field category. It must contain only allowed categories: 'Ação', 'Aventura', 'Comédia', 'Drama', 'Ficção Científica', 'Terror', 'Romance', 'Animação', 'Documentário', 'Fantasia'.`,
    });
  }

  if (errors.length > 0) {
    return response.status(400).json(errors);
  }

  next();
}
export { movieValidate };
