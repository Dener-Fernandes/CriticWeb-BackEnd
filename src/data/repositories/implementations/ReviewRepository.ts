import { Repository, createQueryBuilder } from "typeorm";
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
        "review.is_liked",
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

  async delete(reviewId: number): Promise<void> {
    await this.reviewRepository.delete(reviewId);
    return;
  }

  async update(
    reviewId: number,
    updatedData: { description?: string; rating?: number; isLiked?: boolean },
  ): Promise<{ updatedReview: IReview; message: string | null }> {
    const updatedReview = await this.reviewRepository.save(review);

    return { updatedReview, message: "Crítica Atualizada com sucesso!! " };
  }
  async findReviewById(reviewId: number): Promise<IReview | null> {
    const review = await this.reviewRepository.findOne({ where: { reviewId } });
    if (!review) return null;

    return {
      review: {
        description: review.description,
        rating: review.rating,
        isLiked: review.isLiked,
        userId: review.userId,
      },
    };
  }
}

export { ReviewRepository };
