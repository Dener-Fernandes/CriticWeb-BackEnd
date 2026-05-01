"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReviewRepository = void 0;
class ReviewRepository {
    constructor(reviewRepository) {
        this.reviewRepository = reviewRepository;
    }
    async create({ description, rating, isLiked, userId, movieId, }) {
        await this.reviewRepository.save({
            description,
            rating,
            isLiked,
            userId,
            movieId,
        });
        return;
    }
    async listAll(userId, offset, limit) {
        const whereCondition = userId ? { userId } : {};
        const [reviews, totalItems] = await this.reviewRepository.findAndCount({
            where: whereCondition,
            relations: ["movie", "user"],
            skip: offset,
            take: limit,
        });
        return {
            totalItems,
            reviews,
        };
    }
    async findReview(title, offset, limit) {
        const [reviews, totalItems] = await this.reviewRepository
            .createQueryBuilder("review")
            .leftJoinAndSelect("review.movie", "movie")
            .leftJoinAndSelect("review.user", "user") // Join com a entidade User
            .select([
            "review.reviewId",
            "review.description",
            "review.rating",
            "review.isLiked",
            "user.name", // Seleciona o nome do usuário da review
        ])
            .where("movie.title = :title", { title })
            .skip(offset)
            .take(limit)
            .getManyAndCount();
        console.log(reviews);
        return { totalItems, reviews };
    }
    async findReviewById(reviewId) {
        const review = await this.reviewRepository.findOne({ where: { reviewId } });
        if (!review)
            return null;
        return review;
    }
    async update(review) {
        await this.reviewRepository.save(review);
    }
    async delete(reviewId) {
        await this.reviewRepository.delete({ reviewId });
        return;
    }
}
exports.ReviewRepository = ReviewRepository;
//# sourceMappingURL=ReviewRepository.js.map