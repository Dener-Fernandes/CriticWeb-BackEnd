import { Response } from "express";
import { IMovie } from "../../domain/interfaces/IMovie";
import { MovieRepository } from "../../data/repositories/implementations/MovieRepository";
import { dataSource } from "../../data/config/dataSource";
import { Movie } from "../../data/entities/Movie";
import { CreateMovieUseCase } from "../../domain/useCases/CreateMovieUseCase";
import { IRequest } from "../middlewares/ensureUserIsAuthenticated";
import { errorHandler } from "../../domain/errors/errorHandler";

class MovieController {
  async createMovie(request: IRequest, response: Response) {
    try {
      const { title, category, image, description }: IMovie = request.body;

      const movieRepository = new MovieRepository(
        dataSource.getRepository(Movie),
      );

      const createMovieUseCase = new CreateMovieUseCase(movieRepository);

      await createMovieUseCase.execute({ title, category, image, description });

      return response.status(201).send();
    } catch (error) {
      const errorCaptured = errorHandler(error as string);

      return response
        .status(errorCaptured.status)
        .json({ message: errorCaptured.message });
    }
  }
}

export { MovieController };
