"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
const routes_1 = require("./routes");
const cors_1 = __importDefault(require("cors"));
require("reflect-metadata");
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const swagger_json_1 = __importDefault(require("./docs/swagger.json"));
const dotenv_1 = __importDefault(require("dotenv"));
const app = (0, express_1.default)();
exports.app = app;
dotenv_1.default.config({ path: "./.env" });
const corsOptions = {
    origin: process.env.FRONT_END_URL,
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    allowedHeaders: ["Content-Type", "Authorization"],
    exposedHeaders: ["Authorization"],
};
app.use((0, cors_1.default)(corsOptions));
app.use(express_1.default.json());
app.use("/criticweb/api-docs", swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swagger_json_1.default));
app.use("/criticweb", routes_1.routes);
//# sourceMappingURL=app.js.map