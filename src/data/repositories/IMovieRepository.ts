import { IMovie } from "../../domain/interfaces/IMovie";

interface IMovieRepository {
  create(movie: IMovie): Promise<void>;
  findById(id: number): Promise<IMovie | null>;
}

export { IMovieRepository };
