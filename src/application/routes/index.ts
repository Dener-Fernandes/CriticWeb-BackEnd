import express from "express";
import { authenticateRoutes } from "./authenticateRoutes";
import { movieRoutes } from "./movieRoutes";
import { ensureUserIsAuthenticated } from "../middlewares/ensureUserIsAuthenticated";

const routes = express.Router();

routes.use("/authenticate", authenticateRoutes);
routes.use("/movie", ensureUserIsAuthenticated, movieRoutes);

export { routes };
