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
exports.ReviewDataValidator = void 0;
const class_validator_1 = require("class-validator");
class ReviewDataValidator {
    constructor(data) {
        this.description = data.description;
        this.rating = data.rating;
        this.isLiked = data.isLiked;
        this.movieId = data.movieId;
    }
}
exports.ReviewDataValidator = ReviewDataValidator;
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: "Field description cannot be empty." }),
    (0, class_validator_1.IsString)({ message: "Invalid field title. It must be a string." }),
    __metadata("design:type", String)
], ReviewDataValidator.prototype, "description", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: "Field rating cannot be empty." }),
    (0, class_validator_1.IsNumber)({ allowNaN: false, maxDecimalPlaces: 1 }, {
        message: "Invalid field rating. It must be a float with one decimal place.",
    }),
    (0, class_validator_1.Min)(0, { message: "Invalid field rating. It must be no less than 0." }),
    (0, class_validator_1.Max)(10, { message: "Invalid field rating. It must be no greater than 10." }),
    __metadata("design:type", Number)
], ReviewDataValidator.prototype, "rating", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)({ message: "Invalid field isLiked. It must be a boolean." }),
    __metadata("design:type", Boolean)
], ReviewDataValidator.prototype, "isLiked", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: "Field movieId cannot be empty." }),
    (0, class_validator_1.IsInt)({ message: "Invalid field movieId. It must be a number." }),
    (0, class_validator_1.Min)(1, { message: "Invalid field movieId. It must be no less than 1." }),
    __metadata("design:type", Number)
], ReviewDataValidator.prototype, "movieId", void 0);
//# sourceMappingURL=reviewDataValidator.js.map