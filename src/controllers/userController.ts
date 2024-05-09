import { Request, Response } from "express";
import { IUser as IUserDTO } from "../interfaces/IUser";

class UserController {
  public async createUser(
    request: Request,
    response: Response,
  ): Promise<Response> {
    const { name, email, password, confirmPassword }: IUserDTO = request.body;

    console.log(name, email, password, confirmPassword);

    return response.status(201).send();
  }
}

export { UserController };
