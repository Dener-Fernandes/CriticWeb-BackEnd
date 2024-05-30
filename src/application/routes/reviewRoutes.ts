import express from "express";
import { ReviewController } from "../controllers/ReviewController";
import { reviewValidate } from "../middlewares/reviewValidate";
import { listReviewValidate } from "../middlewares/listReviewValidate";

const reviewRoutes = express.Router();

const reviewController = new ReviewController();

reviewRoutes.post("/:movieId", reviewValidate, reviewController.createReview);
reviewRoutes.get("/", listReviewValidate, reviewController.listAllReviews);

export { reviewRoutes };
