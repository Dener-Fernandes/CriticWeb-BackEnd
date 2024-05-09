import { IUser } from "../interfaces/IUser";

class User {
  protected data: IUser;

  constructor(user: IUser) {
    this.data = user;
  }

  public returnData(): IUser {
    return this.data;
  }
}

export { User };
