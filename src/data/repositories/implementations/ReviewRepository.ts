import { Repository } from "typeorm";
import { IReview } from "../../../domain/interfaces/IReview";
import { Review } from "../../entities/Review";
import { IReviewRepository } from "../IReviewRepository";

class ReviewRepository implements IReviewRepository {
  constructor(private reviewRepository: Repository<Review>) {}

  async create({
    description,
    rating,
    isLiked,
    userId,
    movieId,
  }: IReview): Promise<void> {
    await this.reviewRepository.save({
      description,
      rating,
      isLiked,
      userId,
      movieId,
    });

    return;
  }

  async listAll(
    userId: string,
    offset: number,
    limit: number,
  ): Promise<{
    totalItems: number;
    reviews: IReview[];
  }> {
    const [reviews, totalItems] = await this.reviewRepository
      .createQueryBuilder("review")
      .leftJoinAndSelect("review.movie", "movie")
      .select([
        "review.reviewId",
        "review.description",
        "review.rating",
        "review.isLiked",
        "movie.title",
        "movie.image",
        "movie.description",
        "movie.year",
      ])
      .where("review.user_id = :userId", { userId })
      .skip(offset)
      .take(limit)
      .getManyAndCount();

    return {
      totalItems,
      reviews,
    };
  }

  async findReview(
    title: string,
    offset: number,
    limit: number,
  ): Promise<{
    totalItems: number;
    reviews: IReview[];
  }> {
    const [reviews, totalItems] = await this.reviewRepository
      .createQueryBuilder("review")
      .leftJoinAndSelect("review.movie", "movie")
      .select([
        "review.reviewId",
        "review.description",
        "review.rating",
        "review.isLiked",
      ])
      .where("movie.title = :title", { title })
      .skip(offset)
      .take(limit)
      .getManyAndCount();

    return {
      totalItems,
      reviews,
    };
  }

  async findReviewById(reviewId: number): Promise<IReview | null> {
    const review = await this.reviewRepository.findOne({ where: { reviewId } });

    if (!review) return null;

    return review;
  }

  async update(review: IReview): Promise<void> {
    await this.reviewRepository.save(review);
  }

  async delete(reviewId: number): Promise<void> {
    await this.reviewRepository.delete({ reviewId });
    return;
  }
}

export { ReviewRepository };
