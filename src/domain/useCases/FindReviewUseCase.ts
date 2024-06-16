import { IReviewRepository } from "../../data/repositories/IReviewRepository";
import { IReview } from "../interfaces/IReview";

class FindReviewUseCase {
  constructor(private reviewRepository: IReviewRepository) {}

  async execute(
    title: string,
    offset: number,
    limit: number,
  ): Promise<{
    totalItems: number;
    currentPage: number;
    limit: number;
    totalPages: number;
    items: IReview[];
  }> {
    offset = offset ? Number(offset) : 0;
    limit = limit ? Number(limit) : 10;

    const { totalItems, reviews } = await this.reviewRepository.findReview(
      title,
      offset,
      limit,
    );

    return {
      totalItems,
      currentPage: Math.floor(offset / limit) + 1,
      limit,
      totalPages: Math.ceil(totalItems / limit),
      items: reviews,
    };
  }
}
export { FindReviewUseCase };
