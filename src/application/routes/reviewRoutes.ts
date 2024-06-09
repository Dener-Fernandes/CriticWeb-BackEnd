import express from "express";
import { ReviewController } from "../controllers/ReviewController";
import { reviewValidate } from "../middlewares/reviewValidate";
import { listReviewValidate } from "../middlewares/listReviewValidate";
import { deleteReviewValidate } from "../middlewares/validateDeleteReview";
import { findReviewValidate } from "../middlewares/findReviewValidate";
import { updateReviewValidate } from "../middlewares/updateReviewValidate";

const reviewRoutes = express.Router();
const reviewController = new ReviewController();

reviewRoutes.post("/:movieId", reviewValidate, reviewController.createReview);
reviewRoutes.get("/", listReviewValidate, reviewController.listAllReviews);
reviewRoutes.delete("/:reviewID", deleteReviewValidate, reviewController.deleteReview);
reviewRoutes.put("/:reviewID", updateReviewValidate, reviewController.UpdateReview);
reviewRoutes.get("/:reviewID", findReviewValidate, reviewController.findReview);

export { reviewRoutes };
