"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateTableMovie1715366147291 = void 0;
const typeorm_1 = require("typeorm");
class CreateTableMovie1715366147291 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
            name: "movie",
            columns: [
                {
                    name: "movie_id",
                    type: "int",
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: "increment",
                },
                {
                    name: "title",
                    type: "varchar",
                },
                {
                    name: "category",
                    type: "varchar",
                },
                {
                    name: "image",
                    type: "varchar",
                },
                {
                    name: "description",
                    type: "text",
                },
                {
                    name: "year",
                    type: "int",
                },
            ],
        }), true);
    }
    async down(queryRunner) {
        await queryRunner.dropTable("movie");
    }
}
exports.CreateTableMovie1715366147291 = CreateTableMovie1715366147291;
//# sourceMappingURL=1715366147291-CreateTableMovie.js.map