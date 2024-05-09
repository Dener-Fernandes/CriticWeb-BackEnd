import { Repository } from "typeorm";
import { IUser } from "../../../domain/interfaces/IUser";
import { User } from "../../entities/User";
import { IUserRepositoryCommand } from "../IUserRepository";

class UserRepositoryCommand implements IUserRepositoryCommand {
  constructor(private userRepository: Repository<User>) {}

  async createUser(user: IUser): Promise<void> {
    await this.userRepository.save(user);
  }
}

export { UserRepositoryCommand };
