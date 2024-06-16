import { IReviewRepository } from "../../data/repositories/IReviewRepository";
import { Errors } from "../errors/errors";
import { IReview } from "../interfaces/IReview";

class FindReviewUseCase {
  constructor(private reviewRepository: IReviewRepository) {}

  async execute(title: string): Promise<IReview> {
    const review = await this.reviewRepository.findReview(title);

    if (!review) {
      throw Errors.REVIEW_NOT_FOUND;
    }

    return review;
  }
}
export { FindReviewUseCase };
