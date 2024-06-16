import { Response } from "express";
import { IRequest } from "../middlewares/ensureUserIsAuthenticated";
import {
  IReview as IReviewDTO,
  IReviewAndMovieIds,
} from "../../domain/interfaces/IReview";
import { ReviewRepository } from "../../data/repositories/implementations/ReviewRepository";
import { Review } from "../../data/entities/Review";
import { dataSource } from "../../data/config/dataSource";
import { CreateReviewUseCase } from "../../domain/useCases/CreateReviewUseCase";
import { errorHandler } from "../../domain/errors/errorHandler";
import { ListAllReviewsUseCase } from "../../domain/useCases/ListAllReviewsUseCase";
import { IQueryData as IQueryDataDTO } from "../../domain/interfaces/IQueryData";
import { DeleteReviewsUseCase } from "../../domain/useCases/DeleteReviewsUseCase";

import { FindReviewUseCase } from "../../domain/useCases/FindReviewUseCase";
import { MovieRepository } from "../../data/repositories/implementations/MovieRepository";
import { Movie } from "../../data/entities/Movie";

class ReviewController {
  async createReview(request: IRequest, response: Response) {
    try {
      let { description, rating, isLiked }: IReviewDTO = request.body;
      const { movieId }: IReviewAndMovieIds = request.params;
      const { userId } = request.user;

      isLiked = isLiked ? true : false;

      const movieRepository = new MovieRepository(
        dataSource.getRepository(Movie),
      );

      const reviewRepository = new ReviewRepository(
        dataSource.getRepository(Review),
      );

      const createReviewUseCase = new CreateReviewUseCase(
        reviewRepository,
        movieRepository,
      );

      await createReviewUseCase.execute({
        description,
        rating,
        isLiked,
        userId: Number(userId),
        movieId: Number(movieId),
      });

      return response.status(201).send();
    } catch (error) {
      const errorCaptured = errorHandler(error as string);

      return response
        .status(errorCaptured.status)
        .json({ message: errorCaptured.message });
    }
  }

  async listAllReviews(request: IRequest, response: Response) {
    try {
      const { offset, limit }: IQueryDataDTO = request.query;

      const { userId } = request.user;

      const reviewRepository = new ReviewRepository(
        dataSource.getRepository(Review),
      );

      const listAllReviewsUseCase = new ListAllReviewsUseCase(reviewRepository);

      const reviews = await listAllReviewsUseCase.execute(
        userId,
        offset,
        limit,
      );

      return response.status(200).json(reviews);
    } catch (error) {
      const errorCaptured = errorHandler(error as string);

      return response
        .status(errorCaptured.status)
        .json({ message: errorCaptured.message });
    }
  }
  async deleteReview(request: IRequest, response: Response) {
    try {
      const { reviewId }: IReviewAndMovieIds = request.params;
      const { userId } = request.user;
      const reviewRepository = new ReviewRepository(
        dataSource.getRepository(Review),
      );

      const deleteReviewUseCase = new DeleteReviewsUseCase(reviewRepository);
      await deleteReviewUseCase.execute(Number(reviewId), Number(userId));

      return response.status(204).send();
    } catch (error) {
      const errorCaptured = errorHandler(error as string);
      return response
        .status(errorCaptured.status)
        .json({ message: errorCaptured.message });
    }
  }

  async findReview(request: IRequest, response: Response) {
    try {
      const reviewRepository = new ReviewRepository(
        dataSource.getRepository(Review),
      );
      const { title } = request.params;

      const findReviewUseCase = new FindReviewUseCase(reviewRepository);
      const review = await findReviewUseCase.execute(String(title));

      return response.status(200).json(review);
    } catch (error) {
      const errorCaptured = errorHandler(error as string);

      return response
        .status(errorCaptured.status)
        .json({ message: errorCaptured.message });
    }
  }
}

export { ReviewController };
