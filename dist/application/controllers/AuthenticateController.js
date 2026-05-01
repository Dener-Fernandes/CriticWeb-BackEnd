"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthenticateController = void 0;
const RegisterUserUseCase_1 = require("../../domain/useCases/RegisterUserUseCase");
const errorHandler_1 = require("../../domain/errors/errorHandler");
const UserRepository_1 = require("../../data/repositories/implementations/UserRepository");
const dataSource_1 = require("../../data/config/dataSource");
const User_1 = require("../../data/entities/User");
const AuthenticateUserUseCase_1 = require("../../domain/useCases/AuthenticateUserUseCase");
class AuthenticateController {
    async register(request, response) {
        try {
            const { name, email, password } = request.body;
            const userRepository = new UserRepository_1.UserRepository(dataSource_1.dataSource.getRepository(User_1.User));
            const registerUserUseCase = new RegisterUserUseCase_1.RegisterUserUseCase(userRepository);
            const authenticateUserUseCase = new AuthenticateUserUseCase_1.AuthenticateUserUseCase(userRepository);
            await registerUserUseCase.execute({ name, email, password });
            const token = await authenticateUserUseCase.execute(email, password);
            return response
                .status(200)
                .header("Authorization", `Bearer ${token}`)
                .json({ message: "Successfull registration." });
        }
        catch (error) {
            const errorCaptured = (0, errorHandler_1.errorHandler)(error);
            return response
                .status(errorCaptured.status)
                .json({ message: errorCaptured.message });
        }
    }
    async login(request, response) {
        try {
            const { email, password } = request.body;
            const userRepository = new UserRepository_1.UserRepository(dataSource_1.dataSource.getRepository(User_1.User));
            const authenticateUserUseCase = new AuthenticateUserUseCase_1.AuthenticateUserUseCase(userRepository);
            const token = await authenticateUserUseCase.execute(email, password);
            return response
                .status(200)
                .header("Authorization", `Bearer ${token}`)
                .json({ message: "Successfull login." });
        }
        catch (error) {
            const errorCaptured = (0, errorHandler_1.errorHandler)(error);
            return response
                .status(errorCaptured.status)
                .json({ message: errorCaptured.message });
        }
    }
}
exports.AuthenticateController = AuthenticateController;
//# sourceMappingURL=AuthenticateController.js.map