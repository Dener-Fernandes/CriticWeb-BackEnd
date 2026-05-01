"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.queryValidate = queryValidate;
const validators_1 = require("../validators");
const queryValidator_1 = require("../validators/queryValidator");
async function queryValidate(request, response, next) {
    const { offset, limit } = request.query;
    const validateData = new validators_1.ValidateData();
    const queryValidator = new queryValidator_1.QueryValidator({
        offset: offset ? Number(offset) : undefined,
        limit: limit ? Number(limit) : undefined,
    });
    const errors = await validateData.validate(queryValidator);
    if (errors.length > 0) {
        return response.status(400).json(errors);
    }
    next();
}
//# sourceMappingURL=queryValidate.js.map