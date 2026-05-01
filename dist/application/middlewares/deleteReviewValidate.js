"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteReviewValidate = deleteReviewValidate;
const deleteReviewValidator_1 = require("../validators/deleteReviewValidator");
const class_validator_1 = require("class-validator");
async function deleteReviewValidate(request, response, next) {
    const { reviewId, userId } = request.params;
    const deleteReviewValidator = new deleteReviewValidator_1.DeleteReviewValidator({
        reviewId: Number(reviewId),
        userId: Number(userId),
    });
    const errors = await (0, class_validator_1.validate)(deleteReviewValidator);
    if (errors.length > 0) {
        return response.status(400).json(errors);
    }
    next();
}
//# sourceMappingURL=deleteReviewValidate.js.map