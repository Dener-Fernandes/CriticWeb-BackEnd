"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dataSource = void 0;
require("reflect-metadata");
const typeorm_1 = require("typeorm");
require("dotenv/config");
const dataSource = new typeorm_1.DataSource({
    type: process.env.TYPEORM_TYPE,
    host: process.env.TYPEORM_HOST,
    port: Number(process.env.TYPEORM_PORT),
    username: process.env.TYPEORM_USERNAME,
    password: process.env.TYPEORM_PASSWORD,
    database: process.env.TYPEORM_DATABASE,
    synchronize: true,
    logging: false,
    schema: process.env.TYPEORM_SCHEMA,
    entities: [__dirname + "/../entities/**/*.{ts,js}"],
    migrations: [__dirname + "/../migrations/**/*.{ts,js}"],
});
exports.dataSource = dataSource;
dataSource
    .initialize()
    .then(() => {
    console.log("Connected to database");
})
    .catch((error) => console.log(error));
//# sourceMappingURL=dataSource.js.map