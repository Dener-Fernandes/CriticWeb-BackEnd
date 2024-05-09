import { IUserRepositoryCommand } from "../../data/repositories/IUserRepository";
import { IUser } from "../interfaces/IUser";

class CreateUserUseCase {
  constructor(private userRepository: IUserRepositoryCommand) {}

  public async execute({ name, email, password }: IUser): Promise<void> {
    await this.userRepository.createUser({ name, email, password });

    return;
  }
}

export { CreateUserUseCase };
