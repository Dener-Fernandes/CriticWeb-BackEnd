import { Request, Response } from "express";
import { IUser as IRequest } from "../../domain/interfaces/IUser";
import { CreateUserUseCase } from "../../domain/useCases/CreateUserUseCase";
import { errorHandler } from "../../domain/errors/errorHandler";
import { UserRepositoryCommand } from "../../data/repositories/userRepositories/UserRepositoryCommand";
import { dataSource } from "../../data/config/dataSource";
import { User } from "../../data/entities/User";

class UserController {
  public async createUser(
    request: Request,
    response: Response,
  ): Promise<Response> {
    try {
      const { name, email, password }: IRequest = request.body;

      const userRepository = new UserRepositoryCommand(
        dataSource.getRepository(User),
      );
      // console.log("USER", dataSource.getRepository(User))
      const createUserUseCase = new CreateUserUseCase(userRepository);

      await createUserUseCase.execute({ name, email, password });

      return response.status(201).send();
    } catch (error) {
      console.log(error);
      const errorCaptured = errorHandler(error as string);

      return response
        .status(errorCaptured.status)
        .json({ message: errorCaptured.message });
    }
  }
}

export { UserController };
