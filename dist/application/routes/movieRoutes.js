"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.movieRoutes = void 0;
const express_1 = __importDefault(require("express"));
const MovieController_1 = require("../controllers/MovieController");
const movieValidate_1 = require("../middlewares/movieValidate");
const queryValidate_1 = require("../middlewares/queryValidate");
const idValidate_1 = require("../middlewares/idValidate");
const movieRoutes = express_1.default.Router();
exports.movieRoutes = movieRoutes;
const movieController = new MovieController_1.MovieController();
movieRoutes.post("/", movieValidate_1.movieValidate, movieController.createMovie);
movieRoutes.get("/", queryValidate_1.queryValidate, movieController.listAllMovies);
movieRoutes.get("/:movieId", idValidate_1.idValidate, movieController.findMovieAndItsReviews);
//# sourceMappingURL=movieRoutes.js.map