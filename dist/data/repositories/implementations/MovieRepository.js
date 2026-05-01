"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MovieRepository = void 0;
class MovieRepository {
    constructor(movieRepository) {
        this.movieRepository = movieRepository;
    }
    async create(movie) {
        await this.movieRepository.save(movie);
    }
    async findById(id) {
        const movie = await this.movieRepository.findOne({
            where: {
                movieId: id,
            },
        });
        if (!movie)
            return null;
        return movie;
    }
    async findMovieAndItsReviewsById(id) {
        const movie = await this.movieRepository
            .createQueryBuilder("movie")
            .where("movie.movieId = :id", { id })
            .leftJoinAndSelect("movie.reviews", "review")
            .leftJoinAndSelect("review.user", "user")
            .getOne();
        if (!movie)
            return null;
        return movie;
    }
    async listAll(offset, limit) {
        const [movies, totalItems] = await this.movieRepository.findAndCount({
            skip: offset,
            take: limit,
            relations: ["reviews"],
            select: ["movieId", "title", "category", "image", "year"],
        });
        return {
            totalItems,
            movies,
        };
    }
}
exports.MovieRepository = MovieRepository;
//# sourceMappingURL=MovieRepository.js.map