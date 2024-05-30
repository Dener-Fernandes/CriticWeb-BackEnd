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
}

export { IReviewRepository };
