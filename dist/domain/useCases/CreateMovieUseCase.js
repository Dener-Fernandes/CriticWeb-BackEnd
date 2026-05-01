"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateMovieUseCase = void 0;
class CreateMovieUseCase {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async execute(movie) {
        await this.userRepository.create(movie);
        return;
    }
}
exports.CreateMovieUseCase = CreateMovieUseCase;
//# sourceMappingURL=CreateMovieUseCase.js.map