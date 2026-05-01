"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRepository = void 0;
class UserRepository {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async create(user) {
        await this.userRepository.save(user);
    }
    async findByEmail(email) {
        const user = await this.userRepository.findOne({
            where: {
                email,
            },
        });
        if (!user)
            return null;
        return user;
    }
}
exports.UserRepository = UserRepository;
//# sourceMappingURL=UserRepository.js.map