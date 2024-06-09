import { IReviewRepository } from "../../data/repositories/IReviewRepository";
import { IReview } from "../interfaces/IReview";




class FindReviewUseCase{

    constructor(private reviewRepository: IReviewRepository){}

    async execute(
        reviewId: number,
    ):Promise<{review: IReview | null}>{

        try{
           const review = await this.reviewRepository.findReview(reviewId);
           return review;
        }catch (error) {
            console.error("Error finding review:", error);
            return { review: null }; 
        }



    }





}
export {FindReviewUseCase}