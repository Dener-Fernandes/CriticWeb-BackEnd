"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateReviewUseCase = void 0;
const errors_1 = require("../errors/errors");
class UpdateReviewUseCase {
    constructor(reviewRepository) {
        this.reviewRepository = reviewRepository;
    }
    async execute(review) {
        const isReviewFound = await this.reviewRepository.findReviewById(review.reviewId);
        if (!isReviewFound) {
            throw errors_1.Errors.REVIEW_NOT_FOUND;
        }
        if (review.userId !== isReviewFound.userId) {
            throw errors_1.Errors.ACTION_NOT_AUTHORIZED;
        }
        await this.reviewRepository.update(review);
        return;
    }
}
exports.UpdateReviewUseCase = UpdateReviewUseCase;
//# sourceMappingURL=UpdateReviewUseCase.js.map