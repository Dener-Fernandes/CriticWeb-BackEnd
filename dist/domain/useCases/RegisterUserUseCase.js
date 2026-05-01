"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegisterUserUseCase = void 0;
const errors_1 = require("../errors/errors");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
class RegisterUserUseCase {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async execute({ name, email, password }) {
        const userAlreadyExists = await this.userRepository.findByEmail(email);
        if (userAlreadyExists) {
            throw errors_1.Errors.INVALID_USER_DATA;
        }
        password = await bcryptjs_1.default.hash(password, 12);
        await this.userRepository.create({ name, email, password });
        return;
    }
}
exports.RegisterUserUseCase = RegisterUserUseCase;
//# sourceMappingURL=RegisterUserUseCase.js.map