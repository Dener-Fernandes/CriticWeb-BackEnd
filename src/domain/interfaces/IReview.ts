interface IReview {
  reviewId?: number;
  description: string;
  rating: number;
  isLiked: boolean;
  userId?: number;
  movieId?: number;
}

interface IReviewWithStringIds {
  movieId?: string;
}

export { IReview, IReviewWithStringIds };
