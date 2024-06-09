
import { IReviewRepository } from "../../data/repositories/IReviewRepository";


export class DeleteReviewsUseCase {
  constructor(private reviewRepository: IReviewRepository) {}

  async execute(reviewId: string): Promise<void> {
    await this.reviewRepository.delete(reviewId);
  }
}
