import { IsOptional, IsInt, Min, Max } from "class-validator";
import { IQueryData } from "../../domain/interfaces/IQueryData";

class ListReviewValidator {
  @IsOptional()
  @IsInt({ message: "Invalid field offset. It must be a number." })
  @Min(1, { message: "Field offset must be no less than 1." })
  @Max(250, { message: "Field offset must be no greater than 250." })
  offset: number;

  @IsOptional()
  @IsInt({ message: "Invalid field limit. It must be a number." })
  @Min(1, { message: "Field limit must be no less than 1." })
  @Max(250, { message: "Field limit must be no greater than 250." })
  limit: number;

  constructor(data: IQueryData) {
    this.offset = data.offset;
    this.limit = data.limit;
  }
}

export { ListReviewValidator };
