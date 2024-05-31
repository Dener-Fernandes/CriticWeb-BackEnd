import { Response } from "express";
import { IRequest } from "../middlewares/ensureUserIsAuthenticated";
import {
  IReview as IReviewDTO,
  IReviewWithStringIds,
} from "../../domain/interfaces/IReview";
import { ReviewRepository } from "../../data/repositories/implementations/ReviewRepository";
import { Review } from "../../data/entities/Review";
import { dataSource } from "../../data/config/dataSource";
import { CreateReviewUseCase } from "../../domain/useCases/CreateReviewUseCase";
import { errorHandler } from "../../domain/errors/errorHandler";
import { ListAllReviewsUseCase } from "../../domain/useCases/ListAllReviewsUseCase";
import { IQueryData as IQueryDataDTO } from "../../domain/interfaces/IQueryData";
import { MovieRepository } from "../../data/repositories/implementations/MovieRepository";
import { Movie } from "../../data/entities/Movie";

class ReviewController {
  async createReview(request: IRequest, response: Response) {
    try {
      let { description, rating, isLiked }: IReviewDTO = request.body;
      const { movieId }: IReviewWithStringIds = request.params;
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
}

export { ReviewController };
