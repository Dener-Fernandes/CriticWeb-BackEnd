import { compare } from "bcryptjs";
import { IUserRepository } from "../../data/repositories/IUserRepository";
import auth from "../../application/utils/auth";
import { Errors } from "../errors/errors";
import { Secret, sign } from "jsonwebtoken";

class AuthenticateUserUseCase {
  constructor(private userRepository: IUserRepository) {}

  async execute(email: string, password: string): Promise<string> {
    const user = await this.userRepository.findByEmail(email);

    const { secret_token } = auth;

    if (!user) {
      throw Errors.INVALID_EMAIL_OR_PASSWORD;
    }

    const passwordMatch = await compare(password, user.password);

    if (!passwordMatch) {
      throw Errors.INVALID_EMAIL_OR_PASSWORD;
    }

    const token = sign({}, secret_token as Secret, {
      subject: String(user.userId),
    });

    return token;
  }
}

export { AuthenticateUserUseCase };
