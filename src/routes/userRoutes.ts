import express from "express";
import { UserController } from "../controllers/userController";

const userRoutes = express.Router();

const userController = new UserController();

userRoutes.post("/", userController.createUser);

export { userRoutes };
