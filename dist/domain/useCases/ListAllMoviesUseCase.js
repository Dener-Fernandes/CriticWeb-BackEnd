"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListAllMoviesUseCase = void 0;
const errors_1 = require("../errors/errors");
class ListAllMoviesUseCase {
    constructor(movieRepository) {
        this.movieRepository = movieRepository;
    }
    async execute(offset, limit) {
        offset = offset ? Number(offset) : 0;
        limit = limit ? Number(limit) : 10;
        const { totalItems, movies } = await this.movieRepository.listAll(offset, limit);
        if (!totalItems) {
            throw errors_1.Errors.NO_MOVIE_FOUND;
        }
        const moviesWithoutReviews = movies.map((movie) => {
            let totalRating = 0;
            let averageRating = 0;
            if (movie.reviews && movie.reviews.length > 0) {
                totalRating = movie.reviews.reduce((sum, review) => sum + review.rating, 0);
                averageRating = totalRating / movie.reviews.length;
            }
            return {
                movieId: movie.movieId,
                title: movie.title,
                category: movie.category,
                image: movie.image,
                description: movie.description,
                rating: averageRating,
                year: movie.year,
            };
        });
        return {
            totalItems,
            currentPage: Math.floor(offset / limit) + 1,
            limit,
            totalPages: Math.ceil(totalItems / limit),
            items: moviesWithoutReviews,
        };
    }
}
exports.ListAllMoviesUseCase = ListAllMoviesUseCase;
//# sourceMappingURL=ListAllMoviesUseCase.js.map