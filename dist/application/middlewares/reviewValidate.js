"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reviewValidate = reviewValidate;
const reviewDataValidator_1 = require("../validators/reviewDataValidator");
const validators_1 = require("../validators");
async function reviewValidate(request, response, next) {
    let { description, rating, isLiked } = request.body;
    const { movieId } = request.params;
    const validateData = new validators_1.ValidateData();
    // This is a fake id to pass validation when validating data to update a review. It will not bet set after validation is completed, in this case.
    const fakeMovieId = 1;
    const reviewValidator = new reviewDataValidator_1.ReviewDataValidator({
        description,
        rating,
        isLiked,
        movieId: movieId ? Number(movieId) : fakeMovieId,
    });
    const errors = await validateData.validate(reviewValidator);
    if (errors.length > 0) {
        return response.status(400).json(errors);
    }
    next();
}
//# sourceMappingURL=reviewValidate.js.map