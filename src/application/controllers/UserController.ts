import { Request, Response } from "express";
import { IUser as IRequest } from "../../domain/interfaces/IUser";
import { CreateUserUseCase } from "../../domain/useCases/CreateUserUseCase";
import { errorHandler } from "../../domain/errors/errorHandler";
import { UserRepository } from "../../data/repositories/userRepositories/UserRepository";
import { dataSource } from "../../data/config/dataSource";
import { User } from "../../data/entities/User";
import { AuthenticateUserUseCase } from "../../domain/useCases/AuthenticateUserUseCase";

class UserController {
  public async createUser(
    request: Request,
    response: Response,
  ): Promise<Response> {
    try {
      const { name, email, password }: IRequest = request.body;

      const userRepository = new UserRepository(dataSource.getRepository(User));

      const createUserUseCase = new CreateUserUseCase(userRepository);
      const authenticateUserUseCase = new AuthenticateUserUseCase(
        userRepository,
      );

      await createUserUseCase.execute({ name, email, password });

      const token = await authenticateUserUseCase.execute(email, password);

      return response.status(201).json({ token: token });
    } catch (error) {
      const errorCaptured = errorHandler(error as string);

      return response
        .status(errorCaptured.status)
        .json({ message: errorCaptured.message });
    }
  }
}

export { UserController };
