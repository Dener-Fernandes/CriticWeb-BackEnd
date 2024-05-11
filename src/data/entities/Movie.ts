import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Review } from "./Review";

@Entity()
class Movie {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  category: string;

  @Column()
  image: string;

  @Column()
  description: string;

  // Relacionamento com Review (Um Movie tem muitas Reviews)
  @OneToMany(() => Review, (review) => review.movie)
  reviews: Review[];
}

export { Movie };
