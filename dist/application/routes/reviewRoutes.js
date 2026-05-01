"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.reviewRoutes = void 0;
const express_1 = __importDefault(require("express"));
const ReviewController_1 = require("../controllers/ReviewController");
const reviewValidate_1 = require("../middlewares/reviewValidate");
const queryValidate_1 = require("../middlewares/queryValidate");
const idValidate_1 = require("../middlewares/idValidate");
const reviewRoutes = express_1.default.Router();
exports.reviewRoutes = reviewRoutes;
const reviewController = new ReviewController_1.ReviewController();
reviewRoutes.post("/:movieId", reviewValidate_1.reviewValidate, reviewController.createReview);
reviewRoutes.get("/", queryValidate_1.queryValidate, reviewController.listAllReviews);
reviewRoutes.get("/user-profile", queryValidate_1.queryValidate, reviewController.listAllReviews);
reviewRoutes.get("/:title", reviewController.findReview);
reviewRoutes.put("/:reviewId", idValidate_1.idValidate, reviewValidate_1.reviewValidate, reviewController.updateReview);
reviewRoutes.delete("/:reviewId", idValidate_1.idValidate, reviewController.deleteReview);
//# sourceMappingURL=reviewRoutes.js.map