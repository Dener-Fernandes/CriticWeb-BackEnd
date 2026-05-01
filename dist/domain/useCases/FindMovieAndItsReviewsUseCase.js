"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindMovieAndItsReviewsUseCase = void 0;
const errors_1 = require("../errors/errors");
class FindMovieAndItsReviewsUseCase {
    constructor(movieRepository) {
        this.movieRepository = movieRepository;
    }
    async execute(id) {
        const movie = await this.movieRepository.findMovieAndItsReviewsById(id);
        if (!movie) {
            throw errors_1.Errors.NO_MOVIE_FOUND;
        }
        if (movie.reviews && movie.reviews.length > 0) {
            movie.reviews = movie.reviews.map((review) => ({
                description: review.description,
                isLiked: review.isLiked,
                rating: review.rating,
                reviewer: review.user.name,
            }));
        }
        let totalRating = 0;
        let averageRating = 0;
        if (movie.reviews && movie.reviews.length > 0) {
            totalRating = movie.reviews.reduce((sum, review) => sum + review.rating, 0);
            averageRating = totalRating / movie.reviews.length;
        }
        movie.rating = averageRating;
        return movie;
    }
}
exports.FindMovieAndItsReviewsUseCase = FindMovieAndItsReviewsUseCase;
//# sourceMappingURL=FindMovieAndItsReviewsUseCase.js.map