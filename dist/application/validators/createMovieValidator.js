"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createMovieValidator = void 0;
const class_validator_1 = require("class-validator");
class createMovieValidator {
    constructor(data) {
        this.title = data.title;
        this.category = data.category;
        this.image = data.image;
        this.description = data.description;
        this.year = data.year;
        this.movieCategories = [
            "Ação",
            "Aventura",
            "Comédia",
            "Drama",
            "FicçãoCientífica",
            "Terror",
            "Romance",
            "Animação",
            "Documentário",
            "Fantasia",
        ];
    }
    validateCategory() {
        let categories, isCategoriesValid = false;
        if (this.category) {
            categories = this.category.replace(/\s/g, "").split(",");
            isCategoriesValid = categories.every((category) => this.movieCategories.includes(category));
        }
        return isCategoriesValid;
    }
}
exports.createMovieValidator = createMovieValidator;
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: "Field title cannot be empty." }),
    (0, class_validator_1.Length)(3, 50, {
        message: "Invalid field title. It must be at least 3 characters and at most 50.",
    }),
    (0, class_validator_1.IsString)({ message: "Invalid field title. It must be a string." }),
    __metadata("design:type", String)
], createMovieValidator.prototype, "title", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: "Field category cannot be empty." }),
    (0, class_validator_1.Length)(3, 50, {
        message: "Invalid field category. It must be at least 3 characters and at most 50.",
    }),
    (0, class_validator_1.IsString)({ message: "Invalid field category. It must be a string." }),
    __metadata("design:type", String)
], createMovieValidator.prototype, "category", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: "Field image cannot be empty." }),
    (0, class_validator_1.Length)(5, 200, {
        message: "Invalid field image. It must be at least 5 characters and at most 200.",
    }),
    (0, class_validator_1.IsString)({ message: "Invalid field image. It must be a string." }),
    __metadata("design:type", String)
], createMovieValidator.prototype, "image", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: "Field description cannot be empty." }),
    (0, class_validator_1.Length)(10, 500, {
        message: "Invalid field description. It must be at least 10 characters and at most 500.",
    }),
    (0, class_validator_1.IsString)({ message: "Invalid field description. It must be a string." }),
    __metadata("design:type", String)
], createMovieValidator.prototype, "description", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: "Field year cannot be empty." }),
    (0, class_validator_1.IsInt)({ message: "Invalid field year. It must be a number." }),
    (0, class_validator_1.Min)(1888, { message: "Field year must be no less than 1888." }),
    (0, class_validator_1.Max)(new Date().getFullYear(), {
        message: `Field year must be no greater than the current year (${new Date().getFullYear()}).`,
    }),
    __metadata("design:type", Number)
], createMovieValidator.prototype, "year", void 0);
//# sourceMappingURL=createMovieValidator.js.map