"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListAllReviewsUseCase = void 0;
class ListAllReviewsUseCase {
    constructor(reviewRepository) {
        this.reviewRepository = reviewRepository;
    }
    async execute(userId, offset, limit) {
        offset = offset ? Number(offset) : 0;
        limit = limit ? Number(limit) : 10;
        const { totalItems, reviews } = await this.reviewRepository.listAll(userId, offset, limit);
        let reviewsFormatted;
        if (reviews && reviews.length > 0) {
            reviewsFormatted = reviews.map((review) => ({
                reviewId: review.reviewId,
                description: review.description,
                rating: review.rating,
                isLiked: review.isLiked,
                reviewer: review.user.name,
                movie: {
                    title: review.movie.title,
                    category: review.movie.category,
                    image: review.movie.image,
                },
            }));
        }
        return {
            totalItems,
            currentPage: Math.floor(offset / limit) + 1,
            limit,
            totalPages: Math.ceil(totalItems / limit),
            items: reviewsFormatted.length > 0 ? reviewsFormatted : reviews,
        };
    }
}
exports.ListAllReviewsUseCase = ListAllReviewsUseCase;
//# sourceMappingURL=ListAllReviewsUseCase.js.map