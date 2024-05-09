import { IUser } from "../../domain/interfaces/IUser";

export interface IUserRepositoryCommand {
  createUser(user: IUser): Promise<void>;
}
