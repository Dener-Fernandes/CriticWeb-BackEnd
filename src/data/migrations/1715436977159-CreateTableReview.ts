import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from "typeorm";

export class CreateTableReview1715436977159 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "review",
        columns: [
          {
            name: "id",
            type: "int",
            isPrimary: true,
            isGenerated: true,
            generationStrategy: "increment",
          },
          {
            name: "description",
            type: "text",
          },
          {
            name: "rating",
            type: "float",
          },
          {
            name: "fk_user_id",
            type: "int",
          },
          {
            name: "fk_movie_id",
            type: "int",
          },
        ],
      }),
      true,
    );

    // Adicionando as chaves estrangeiras
    await queryRunner.createForeignKeys("review", [
      new TableForeignKey({
        columnNames: ["fk_user_id"],
        referencedColumnNames: ["id"],
        referencedTableName: "user",
        onDelete: "CASCADE",
      }),
      new TableForeignKey({
        columnNames: ["fk_movie_id"],
        referencedColumnNames: ["id"],
        referencedTableName: "movie",
        onDelete: "CASCADE",
      }),
    ]);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    // Removendo as chaves estrangeiras
    await queryRunner.dropForeignKey("review", "fk_user_id");
    await queryRunner.dropForeignKey("review", "fk_movie_id");

    // Removendo a tabela de review
    await queryRunner.dropTable("review");
  }
}
