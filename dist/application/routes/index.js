"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const express_1 = __importDefault(require("express"));
const authenticateRoutes_1 = require("./authenticateRoutes");
const movieRoutes_1 = require("./movieRoutes");
const ensureUserIsAuthenticated_1 = require("../middlewares/ensureUserIsAuthenticated");
const reviewRoutes_1 = require("./reviewRoutes");
const routes = express_1.default.Router();
exports.routes = routes;
routes.use("/authenticate", authenticateRoutes_1.authenticateRoutes);
routes.use("/movie", ensureUserIsAuthenticated_1.ensureUserIsAuthenticated, movieRoutes_1.movieRoutes);
routes.use("/review", ensureUserIsAuthenticated_1.ensureUserIsAuthenticated, reviewRoutes_1.reviewRoutes);
//# sourceMappingURL=index.js.map