import express from "express";
import { routes } from "./routes";

import "reflect-metadata";

import dotenv from "dotenv";

const app = express();

dotenv.config({ path: "./.env" });

app.use(express.json());

app.use(routes);

export { app };
