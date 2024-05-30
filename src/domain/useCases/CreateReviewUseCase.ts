import { IReviewRepository } from "../../data/repositories/IReviewRepository";
import { IReview } from "../interfaces/IReview";

class CreateReviewUseCase {
  constructor(private reviewRepository: IReviewRepository) {}

  async execute(review: IReview): Promise<void> {
    await this.reviewRepository.create(review);

    return;
  }
}

export { CreateReviewUseCase };
