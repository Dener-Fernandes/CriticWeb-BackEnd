import { IsNotEmpty, IsString, Length } from "class-validator";
import { IMovie } from "../../domain/interfaces/IMovie";

class createMovieValidator {
  private movieCategories: string[];

  @IsNotEmpty({ message: "Field title cannot be empty." })
  @Length(3, 20, {
    message:
      "Invalid field title. It must be at least 3 characters and at most 20.",
  })
  @IsString({ message: "Invalid field title. It must be a string." })
  title: string;

  @IsNotEmpty({ message: "Field category cannot be empty." })
  @Length(3, 50, {
    message:
      "Invalid field category. It must be at least 3 characters and at most 50.",
  })
  @IsString({ message: "Invalid field category. It must be a string." })
  category: string;

  @IsNotEmpty({ message: "Field image cannot be empty." })
  @Length(5, 200, {
    message:
      "Invalid field image. It must be at least 5 characters and at most 200.",
  })
  @IsString({ message: "Invalid field image. It must be a string." })
  image: string;

  @IsNotEmpty({ message: "Field description cannot be empty." })
  @Length(10, 500, {
    message:
      "Invalid field description. It must be at least 10 characters and at most 500.",
  })
  @IsString({ message: "Invalid field description. It must be a string." })
  description: string;

  constructor(data: IMovie) {
    (this.title = data.title),
      (this.category = data.category),
      (this.image = data.image),
      (this.description = data.description);

    this.movieCategories = [
      "Ação",
      "Aventura",
      "Comédia",
      "Drama",
      "Ficção Científica",
      "Terror",
      "Romance",
      "Animação",
      "Documentário",
      "Fantasia",
    ];
  }

  validateCategory(): boolean {
    let categories: string[],
      isCategoriesValid = false;

    if (this.category) {
      categories = this.category.replace(/\s/g, "").split(",");

      isCategoriesValid = categories.every((category) =>
        this.movieCategories.includes(category),
      );
    }

    return isCategoriesValid;
  }
}

export { createMovieValidator };
