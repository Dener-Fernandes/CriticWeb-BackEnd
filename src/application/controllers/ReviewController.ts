import { Response } from "express";
import { IRequest } from "../middlewares/ensureUserIsAuthenticated";
import {
  IReview,
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
import { DeleteReviewsUseCase } from "../../domain/useCases/DeleteReviewsUseCase";

import { UpdateReviewUseCase } from "../../domain/useCases/UpdateReviewUseCase";
import { FindReviewUseCase } from "../../domain/useCases/FindReviewUseCase";

class ReviewController {
  async createReview(request: IRequest, response: Response) {
    try {
      let { description, rating, isLiked }: IReviewDTO = request.body;
      const { movieId }: IReviewWithStringIds = request.params;
      const { userId } = request.user;

      isLiked = isLiked ? true : false;

      const reviewRepository = new ReviewRepository(
        dataSource.getRepository(Review),
      );

      const createReviewUseCase = new CreateReviewUseCase(reviewRepository);

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
      console.log(error);
      const errorCaptured = errorHandler(error as string);

      return response
        .status(errorCaptured.status)
        .json({ message: errorCaptured.message });
    }
  }
  async deleteReview(request: IRequest, response: Response) {
    try {
      const { reviewId } = request.params;
      const { userId } = request.user;
      const reviewRepository = new ReviewRepository(
        dataSource.getRepository(Review),
      );

      const deleteReviewUseCase = new DeleteReviewsUseCase(reviewRepository);
      await deleteReviewUseCase.execute(reviewId, userId);
      return response.status(204).send();
    } catch (error) {
      const errorCaptured = errorHandler(error as string);
      return response
        .status(errorCaptured.status)
        .json({ message: errorCaptured.message });
    }
  }

  async UpdateReview(request: IRequest, response: Response) {
    try {
      const reviewRepository = new ReviewRepository(
        dataSource.getRepository(Review),
      );

      const { reviewId } = request.params;
      const updatedData: Partial<IReview> = request.body;

      const updateReviewUseCase = new UpdateReviewUseCase(reviewRepository);
      const { updatedReview, message } = await updateReviewUseCase.execute(
        Number(reviewId),
        updatedData,
      );
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

      const { review_id } = request.params;
      const findReviewUseCase = new FindReviewUseCase(reviewRepository);

      const result = await findReviewUseCase.execute(parseInt(review_id));

      if (result.review) {
        return response.status(200).json(result.review);
      } else {
        return response.status(404).json({ message: "Review not found" });
      }
    } catch (error) {
      console.error("Error finding review:", error);
      return response.status(500).json({ message: "Internal server error" });
    }
  }
}

export { ReviewController };
