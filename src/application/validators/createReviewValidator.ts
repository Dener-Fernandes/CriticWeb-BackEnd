import {
  IsBoolean,
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from "class-validator";
import { IReview } from "../../domain/interfaces/IReview";

class CreateReviewValidator {
  @IsNotEmpty({ message: "Field description cannot be empty." })
  @IsString({ message: "Invalid field title. It must be a string." })
  description: string;

  @IsNotEmpty({ message: "Field rating cannot be empty." })
  @IsNumber(
    { allowNaN: false, maxDecimalPlaces: 2 },
    {
      message:
        "Invalid field rating. It must be a float with two decimal places.",
    },
  )
  rating: number;

  @IsOptional()
  @IsBoolean({ message: "Invalid field isLiked. It must be a boolean." })
  isLiked: boolean;

  @IsNotEmpty({ message: "Field movieId cannot be empty." })
  @IsInt({ message: "Invalid field movieId. It must be a number." })
  @Min(1, { message: "Field movieId must be no less than 1." })
  movieId: number;

  constructor(data: IReview) {
    this.description = data.description;
    this.rating = data.rating;
    this.isLiked = data.isLiked;
    this.movieId = data.movieId;
  }
}

export { CreateReviewValidator };
