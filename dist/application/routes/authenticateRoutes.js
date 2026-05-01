"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authenticateRoutes = void 0;
const express_1 = __importDefault(require("express"));
const AuthenticateController_1 = require("../controllers/AuthenticateController");
const userValidate_1 = require("../middlewares/userValidate");
const loginValidate_1 = require("../middlewares/loginValidate");
const authenticateRoutes = express_1.default.Router();
exports.authenticateRoutes = authenticateRoutes;
const authenticateController = new AuthenticateController_1.AuthenticateController();
authenticateRoutes.post("/register", userValidate_1.userValidate, authenticateController.register);
authenticateRoutes.post("/login", loginValidate_1.loginValidate, authenticateController.login);
//# sourceMappingURL=authenticateRoutes.js.map