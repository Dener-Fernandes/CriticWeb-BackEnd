"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ensureUserIsAuthenticated = ensureUserIsAuthenticated;
const jsonwebtoken_1 = require("jsonwebtoken");
const auth_1 = __importDefault(require("../utils/auth"));
async function ensureUserIsAuthenticated(request, response, next) {
    try {
        const authHeader = request.headers.authorization;
        if (!authHeader) {
            return response.status(401).json({ message: "Token missing." });
        }
        const [, token] = authHeader.split(" ");
        const { sub: userId } = (0, jsonwebtoken_1.verify)(token, auth_1.default.secret_token);
        request.user = {
            userId: userId,
        };
        return next();
    }
    catch {
        return response.status(401).json({ message: "Invalid token." });
    }
}
//# sourceMappingURL=ensureUserIsAuthenticated.js.map