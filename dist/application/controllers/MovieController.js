"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MovieController = void 0;
const MovieRepository_1 = require("../../data/repositories/implementations/MovieRepository");
const dataSource_1 = require("../../data/config/dataSource");
const Movie_1 = require("../../data/entities/Movie");
const CreateMovieUseCase_1 = require("../../domain/useCases/CreateMovieUseCase");
const errorHandler_1 = require("../../domain/errors/errorHandler");
const ListAllMoviesUseCase_1 = require("../../domain/useCases/ListAllMoviesUseCase");
const FindMovieAndItsReviewsUseCase_1 = require("../../domain/useCases/FindMovieAndItsReviewsUseCase");
class MovieController {
    async createMovie(request, response) {
        try {
            const { title, category, image, description, year } = request.body;
            const movieRepository = new MovieRepository_1.MovieRepository(dataSource_1.dataSource.getRepository(Movie_1.Movie));
            const createMovieUseCase = new CreateMovieUseCase_1.CreateMovieUseCase(movieRepository);
            await createMovieUseCase.execute({
                title,
                category,
                image,
                description,
                year,
            });
            return response.status(201).send();
        }
        catch (error) {
            const errorCaptured = (0, errorHandler_1.errorHandler)(error);
            return response
                .status(errorCaptured.status)
                .json({ message: errorCaptured.message });
        }
    }
    async listAllMovies(request, response) {
        try {
            const { offset, limit } = request.query;
            const movieRepository = new MovieRepository_1.MovieRepository(dataSource_1.dataSource.getRepository(Movie_1.Movie));
            const listAllMoviesUseCase = new ListAllMoviesUseCase_1.ListAllMoviesUseCase(movieRepository);
            const movies = await listAllMoviesUseCase.execute(offset, limit);
            return response.status(200).json(movies);
        }
        catch (error) {
            const errorCaptured = (0, errorHandler_1.errorHandler)(error);
            return response
                .status(errorCaptured.status)
                .json({ message: errorCaptured.message });
        }
    }
    async findMovieAndItsReviews(request, response) {
        try {
            const { movieId } = request.params;
            const movieRepository = new MovieRepository_1.MovieRepository(dataSource_1.dataSource.getRepository(Movie_1.Movie));
            const findMovieAndItsReviews = new FindMovieAndItsReviewsUseCase_1.FindMovieAndItsReviewsUseCase(movieRepository);
            const movie = await findMovieAndItsReviews.execute(Number(movieId));
            return response.status(200).json(movie);
        }
        catch (error) {
            const errorCaptured = (0, errorHandler_1.errorHandler)(error);
            return response
                .status(errorCaptured.status)
                .json({ message: errorCaptured.message });
        }
    }
}
exports.MovieController = MovieController;
//# sourceMappingURL=MovieController.js.map