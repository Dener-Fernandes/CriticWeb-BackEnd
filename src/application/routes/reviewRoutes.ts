import express from "express";
import { ReviewController } from "../controllers/ReviewController";
import { reviewValidate } from "../middlewares/reviewValidate";
import { queryValidate } from "../middlewares/queryValidate";
import { idValidate } from "../middlewares/idValidate";
const reviewRoutes = express.Router();
const reviewController = new ReviewController();

reviewRoutes.post("/:movieId", reviewValidate, reviewController.createReview);
reviewRoutes.get("/", queryValidate, reviewController.listAllReviews);
reviewRoutes.delete("/:reviewId", idValidate, reviewController.deleteReview);
reviewRoutes.get("/:title", reviewController.findReview);

export { reviewRoutes };
