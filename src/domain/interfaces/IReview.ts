interface IReview {
  reviewId?: number;
  description: string;
  rating: number;
  isLiked: boolean;
  userId?: number;
  movieId?: number;
}

interface IReviewAndMovieIds {
  movieId?: string;
  reviewId?: string;
}

export { IReview, IReviewAndMovieIds };
