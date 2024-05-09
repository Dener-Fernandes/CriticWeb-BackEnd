import { Request, Response } from "express";
import { IUser as IRequest } from "../../domain/interfaces/IUser";
import { CreateUserUseCase } from "../../domain/useCases/CreateUserUseCase";
import { errorHandler } from "../../domain/errors/errorHandler";

class UserController {
  public async createUser(
    request: Request,
    response: Response,
  ): Promise<Response> {
    try {
      const { name, email, password }: IRequest = request.body;

      const createUserUseCase = new CreateUserUseCase();

      await createUserUseCase.execute({ name, email, password });

      return response.status(201).send();
    } catch (error) {
      const errorCaptured = errorHandler(error as string);

      return response
        .status(errorCaptured.status)
        .json({ message: errorCaptured.message });
    }
  }
}

export { UserController };
