"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateTableUser1715291832057 = void 0;
const typeorm_1 = require("typeorm");
class CreateTableUser1715291832057 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
            name: "user",
            columns: [
                {
                    name: "user_id",
                    type: "int",
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: "increment",
                },
                {
                    name: "name",
                    type: "varchar",
                    length: "100",
                    isNullable: false,
                },
                {
                    name: "email",
                    type: "varchar",
                    length: "100",
                    isUnique: true,
                    isNullable: false,
                },
                {
                    name: "password",
                    type: "varchar",
                    length: "100",
                    isNullable: false,
                },
            ],
        }));
    }
    async down(queryRunner) {
        await queryRunner.dropTable("user");
    }
}
exports.CreateTableUser1715291832057 = CreateTableUser1715291832057;
//# sourceMappingURL=1715291832057-CreateTableUser.js.map