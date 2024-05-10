import { Repository } from "typeorm";
import { IMovie } from "../../../domain/interfaces/IMovie";
import { Movie } from "../../entities/Movie";
import { IMovieRepository } from "../IMovieRepository";

class MovieRepository implements IMovieRepository {
  constructor(private movieRepository: Repository<Movie>) {}

  async create(movie: IMovie): Promise<void> {
    await this.movieRepository.save(movie);
  }

  async findById(id: number): Promise<IMovie> {
    const movie = await this.movieRepository.findOne({
      where: {
        id,
      },
    });

    if (!movie) return null;

    return movie;
  }
}

export { MovieRepository };
