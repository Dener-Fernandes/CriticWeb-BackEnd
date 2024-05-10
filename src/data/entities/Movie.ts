import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

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
}

export { Movie };
