"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReviewController = void 0;
const ReviewRepository_1 = require("../../data/repositories/implementations/ReviewRepository");
const Review_1 = require("../../data/entities/Review");
const dataSource_1 = require("../../data/config/dataSource");
const CreateReviewUseCase_1 = require("../../domain/useCases/CreateReviewUseCase");
const errorHandler_1 = require("../../domain/errors/errorHandler");
const ListAllReviewsUseCase_1 = require("../../domain/useCases/ListAllReviewsUseCase");
const DeleteReviewsUseCase_1 = require("../../domain/useCases/DeleteReviewsUseCase");
const FindReviewUseCase_1 = require("../../domain/useCases/FindReviewUseCase");
const MovieRepository_1 = require("../../data/repositories/implementations/MovieRepository");
const Movie_1 = require("../../data/entities/Movie");
const UpdateReviewUseCase_1 = require("../../domain/useCases/UpdateReviewUseCase");
class ReviewController {
    async createReview(request, response) {
        try {
            let { description, rating, isLiked } = request.body;
            const { movieId } = request.params;
            const { userId } = request.user;
            isLiked = isLiked ? true : false;
            const movieRepository = new MovieRepository_1.MovieRepository(dataSource_1.dataSource.getRepository(Movie_1.Movie));
            const reviewRepository = new ReviewRepository_1.ReviewRepository(dataSource_1.dataSource.getRepository(Review_1.Review));
            const createReviewUseCase = new CreateReviewUseCase_1.CreateReviewUseCase(reviewRepository, movieRepository);
            await createReviewUseCase.execute({
                description,
                rating,
                isLiked,
                userId: Number(userId),
                movieId: Number(movieId),
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
    async updateReview(request, response) {
        try {
            let { description, rating, isLiked } = request.body;
            const { reviewId } = request.params;
            const { userId } = request.user;
            isLiked = isLiked ? true : false;
            const reviewRepository = new ReviewRepository_1.ReviewRepository(dataSource_1.dataSource.getRepository(Review_1.Review));
            const updateReviewUseCase = new UpdateReviewUseCase_1.UpdateReviewUseCase(reviewRepository);
            await updateReviewUseCase.execute({
                reviewId: Number(reviewId),
                description,
                rating,
                isLiked,
                userId: Number(userId),
            });
            return response.status(204).send();
        }
        catch (error) {
            const errorCaptured = (0, errorHandler_1.errorHandler)(error);
            return response
                .status(errorCaptured.status)
                .json({ message: errorCaptured.message });
        }
    }
    async listAllReviews(request, response) {
        try {
            const { offset, limit } = request.query;
            let userId = null;
            const path = request.url;
            if (path == "/user-profile")
                userId = Number(request.user.userId);
            const reviewRepository = new ReviewRepository_1.ReviewRepository(dataSource_1.dataSource.getRepository(Review_1.Review));
            const listAllReviewsUseCase = new ListAllReviewsUseCase_1.ListAllReviewsUseCase(reviewRepository);
            const reviews = await listAllReviewsUseCase.execute(userId, offset, limit);
            return response.status(200).json(reviews);
        }
        catch (error) {
            const errorCaptured = (0, errorHandler_1.errorHandler)(error);
            return response
                .status(errorCaptured.status)
                .json({ message: errorCaptured.message });
        }
    }
    async deleteReview(request, response) {
        try {
            const { reviewId } = request.params;
            const { userId } = request.user;
            const reviewRepository = new ReviewRepository_1.ReviewRepository(dataSource_1.dataSource.getRepository(Review_1.Review));
            const deleteReviewUseCase = new DeleteReviewsUseCase_1.DeleteReviewsUseCase(reviewRepository);
            await deleteReviewUseCase.execute(Number(reviewId), Number(userId));
            return response.status(204).send();
        }
        catch (error) {
            const errorCaptured = (0, errorHandler_1.errorHandler)(error);
            return response
                .status(errorCaptured.status)
                .json({ message: errorCaptured.message });
        }
    }
    async findReview(request, response) {
        try {
            const reviewRepository = new ReviewRepository_1.ReviewRepository(dataSource_1.dataSource.getRepository(Review_1.Review));
            const { offset, limit } = request.query;
            const { title } = request.params;
            const findReviewUseCase = new FindReviewUseCase_1.FindReviewUseCase(reviewRepository);
            const reviews = await findReviewUseCase.execute(String(title), offset, limit);
            return response.status(200).json(reviews);
        }
        catch (error) {
            const errorCaptured = (0, errorHandler_1.errorHandler)(error);
            return response
                .status(errorCaptured.status)
                .json({ message: errorCaptured.message });
        }
    }
}
exports.ReviewController = ReviewController;
//# sourceMappingURL=ReviewController.js.map