import express from "express";
import { routes } from "./routes";

import "reflect-metadata";

import swaggerUI from "swagger-ui-express";
import swaggerDocs from "./docs/swagger.json";

import dotenv from "dotenv";

const app = express();

dotenv.config({ path: "./.env" });

app.use(express.json());

app.use("/criticweb/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerDocs));
app.use("/criticweb", routes);

export { app };
