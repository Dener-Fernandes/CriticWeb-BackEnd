import { IReview } from "../../domain/interfaces/IReview";

interface IReviewRepository {
  create(review: IReview): Promise<void>;
  listAll(
    userId: string,
    offset: number,
    limit: number,
  ): Promise<{
    totalItems: number;
    reviews: IReview[];
  }>;

  update(
    reviewId: number,
    updatedData: { description?: string; rating?: number; isLiked?: boolean },
  ): Promise<{ updatedReview: IReview; message: string | null }>;

  delete(reviewId: number): Promise<void>;

  findReviewById(reviewId: number): Promise<{ review: IReview | null }>;
}

export { IReviewRepository };
