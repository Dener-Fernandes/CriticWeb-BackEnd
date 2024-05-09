import { IUser } from "../interfaces/IUser";

class CreateUserUseCase {
  public async execute({ name, email, password }: IUser) {
    console.log(name, email, password);
  }
}

export { CreateUserUseCase };
