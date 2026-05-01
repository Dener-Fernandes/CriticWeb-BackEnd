"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindReviewUseCase = void 0;
class FindReviewUseCase {
    constructor(reviewRepository) {
        this.reviewRepository = reviewRepository;
    }
    async execute(title, offset, limit) {
        offset = offset ? Number(offset) : 0;
        limit = limit ? Number(limit) : 10;
        const { totalItems, reviews } = await this.reviewRepository.findReview(title, offset, limit);
        let reviewsFormatted;
        if (reviews && reviews.length > 0) {
            reviewsFormatted = reviews.map((review) => {
                return {
                    reviewId: review.reviewId,
                    description: review.description,
                    rating: review.rating,
                    isLiked: review.isLiked,
                    reviewer: review.user.name,
                };
            });
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
exports.FindReviewUseCase = FindReviewUseCase;
//# sourceMappingURL=FindReviewUseCase.js.map