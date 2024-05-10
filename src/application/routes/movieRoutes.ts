import express from "express";
import { MovieController } from "../controllers/MovieController";
import { movieValidate } from "../middlewares/movieValidate";

const movieRoutes = express.Router();

const movieController = new MovieController();

movieRoutes.post("/", movieValidate, movieController.createMovie);

export { movieRoutes };
