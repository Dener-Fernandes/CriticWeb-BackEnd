"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteReviewsUseCase = void 0;
const errors_1 = require("../errors/errors");
class DeleteReviewsUseCase {
    constructor(reviewRepository) {
        this.reviewRepository = reviewRepository;
    }
    async execute(reviewId, userId) {
        const review = await this.reviewRepository.findReviewById(reviewId);
        if (!review) {
            throw errors_1.Errors.REVIEW_NOT_FOUND;
        }
        if (review.userId !== userId) {
            throw errors_1.Errors.ACTION_NOT_AUTHORIZED;
        }
        await this.reviewRepository.delete(reviewId);
        return;
    }
}
exports.DeleteReviewsUseCase = DeleteReviewsUseCase;
//# sourceMappingURL=DeleteReviewsUseCase.js.map