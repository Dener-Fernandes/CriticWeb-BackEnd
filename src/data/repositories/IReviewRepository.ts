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

  update(review: IReview): Promise<void>;

  findReviewById(reviewId: number): Promise<IReview | null>;
}

export { IReviewRepository };
