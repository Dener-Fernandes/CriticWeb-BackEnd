import express from "express";
import { authenticateRoutes } from "./authenticateRoutes";

const routes = express.Router();

routes.use("/authenticate", authenticateRoutes);

export { routes };
