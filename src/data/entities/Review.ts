import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { User } from "./User";
import { Movie } from "./Movie";

@Entity()
class Review {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  description: string;

  @Column()
  rating: number;

  // Relacionamento com User (Muitas reviews pertencem a um User)
  @ManyToOne(() => User, (user) => user.reviews)
  @JoinColumn({ name: "id", referencedColumnName: "id" }) // Especifica a coluna de junção para o relacionamento com User
  user: User;

  // Relacionamento com Movie (Muitas reviews pertencem a um Movie)
  @ManyToOne(() => Movie, (movie) => movie.reviews)
  @JoinColumn({ name: "id", referencedColumnName: "id" }) // Especifica a coluna de junção para o relacionamento com Movie
  movie: Movie;
}

export { Review };
