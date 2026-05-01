"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateReviewUseCase = void 0;
const errors_1 = require("../errors/errors");
class CreateReviewUseCase {
    constructor(reviewRepository, movieRepository) {
        this.reviewRepository = reviewRepository;
        this.movieRepository = movieRepository;
    }
    async execute(review) {
        const istMovieNotFound = await this.movieRepository.findById(review.movieId);
        if (!istMovieNotFound) {
            throw errors_1.Errors.NO_MOVIE_FOUND;
        }
        await this.reviewRepository.create(review);
        return;
    }
}
exports.CreateReviewUseCase = CreateReviewUseCase;
//# sourceMappingURL=CreateReviewUseCase.js.map