"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.idValidate = idValidate;
const validators_1 = require("../validators");
const idValidator_1 = require("../validators/idValidator");
async function idValidate(request, response, next) {
    const { movieId } = request.params;
    const { reviewId } = request.params;
    let idName;
    let idValue;
    if (movieId) {
        idName = "movieId";
        idValue = Number(movieId);
    }
    else {
        idName = "reviewId";
        idValue = Number(reviewId);
    }
    if (idValue)
        idValue = Number(idValue);
    const validateData = new validators_1.ValidateData();
    const idValidator = new idValidator_1.IdValidator(idValue, idName);
    const errors = await validateData.validate(idValidator);
    if (errors.length > 0) {
        return response.status(400).json(errors);
    }
    next();
}
//# sourceMappingURL=idValidate.js.map