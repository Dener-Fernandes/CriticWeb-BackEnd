import express from "express";
import { userRoutes } from "./userRoutes";
import { validateUser } from "../middlewares/validateUser";

const routes = express.Router();

routes.use("/user", validateUser, userRoutes);

export { routes };
