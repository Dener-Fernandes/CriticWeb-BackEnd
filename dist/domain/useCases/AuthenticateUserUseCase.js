"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthenticateUserUseCase = void 0;
const bcryptjs_1 = require("bcryptjs");
const auth_1 = __importDefault(require("../../application/utils/auth"));
const errors_1 = require("../errors/errors");
const jsonwebtoken_1 = require("jsonwebtoken");
class AuthenticateUserUseCase {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async execute(email, password) {
        const user = await this.userRepository.findByEmail(email);
        const { secret_token } = auth_1.default;
        if (!user) {
            throw errors_1.Errors.INVALID_EMAIL_OR_PASSWORD;
        }
        const passwordMatch = await (0, bcryptjs_1.compare)(password, user.password);
        if (!passwordMatch) {
            throw errors_1.Errors.INVALID_EMAIL_OR_PASSWORD;
        }
        const token = (0, jsonwebtoken_1.sign)({}, secret_token, {
            subject: String(user.userId),
        });
        return token;
    }
}
exports.AuthenticateUserUseCase = AuthenticateUserUseCase;
//# sourceMappingURL=AuthenticateUserUseCase.js.map