"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateTableReview1715436977159 = void 0;
const typeorm_1 = require("typeorm");
class CreateTableReview1715436977159 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
            name: "review",
            columns: [
                {
                    name: "review_id",
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
                    name: "is_liked",
                    type: "boolean",
                },
                {
                    name: "user_id",
                    type: "int",
                },
                {
                    name: "movie_id",
                    type: "int",
                },
            ],
        }), true);
        // Adicionando as chaves estrangeiras
        await queryRunner.createForeignKeys("review", [
            new typeorm_1.TableForeignKey({
                name: "fk_user_id",
                columnNames: ["user_id"],
                referencedColumnNames: ["user_id"],
                referencedTableName: "user",
                onDelete: "CASCADE",
            }),
            new typeorm_1.TableForeignKey({
                name: "fk_movie_id",
                columnNames: ["movie_id"],
                referencedColumnNames: ["movie_id"],
                referencedTableName: "movie",
                onDelete: "CASCADE",
            }),
        ]);
    }
    async down(queryRunner) {
        // Removendo as chaves estrangeiras
        await queryRunner.dropForeignKey("review", "fk_user_id");
        await queryRunner.dropForeignKey("review", "fk_movie_id");
        // Removendo a tabela de review
        await queryRunner.dropTable("review");
    }
}
exports.CreateTableReview1715436977159 = CreateTableReview1715436977159;
//# sourceMappingURL=1715436977159-CreateTableReview.js.map