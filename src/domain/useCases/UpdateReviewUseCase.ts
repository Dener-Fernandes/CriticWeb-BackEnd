import { IReviewRepository } from "../../data/repositories/IReviewRepository";
import { IReview } from "../interfaces/IReview";

class UpdateReviewUseCase {
  constructor(private reviewRepository: IReviewRepository) {}

  async execute(
    reviewId: number,
    updatedData: {
      description?: string;
      rating?: number;
      isLiked?: boolean;
    }
  ): Promise<{ updatedReview: IReview | null; message: string }> {
    try {
      const result = await this.reviewRepository.update(reviewId, updatedData);
      return result;
    } catch (error) {
      console.error("Error updating review:", error);
      return { updatedReview: null, message: "Falha ao atualizar Review" };
    }
  }
}

export { UpdateReviewUseCase };
