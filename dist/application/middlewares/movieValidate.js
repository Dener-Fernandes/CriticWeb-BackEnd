"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.movieValidate = movieValidate;
const validators_1 = require("../validators");
const createMovieValidator_1 = require("../validators/createMovieValidator");
async function movieValidate(request, response, next) {
    const { title, category, image, description, year } = request.body;
    const validateData = new validators_1.ValidateData();
    const movieValidator = new createMovieValidator_1.createMovieValidator({
        title,
        category,
        image,
        description,
        year,
    });
    const errors = await validateData.validate(movieValidator);
    const isCategoryInvalid = movieValidator.validateCategory();
    if (!isCategoryInvalid) {
        errors.push({
            message: `Invalid field category. It must contain only allowed categories: 'Ação', 'Aventura', 'Comédia', 'Drama', 'Ficção Científica', 'Terror', 'Romance', 'Animação', 'Documentário', 'Fantasia'. If there is more than one value, they must be separated by comma without blank: Romance,Drama.`,
        });
    }
    if (errors.length > 0) {
        return response.status(400).json(errors);
    }
    next();
}
//# sourceMappingURL=movieValidate.js.map