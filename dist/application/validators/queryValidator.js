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
exports.QueryValidator = void 0;
const class_validator_1 = require("class-validator");
class QueryValidator {
    constructor(data) {
        this.offset = data.offset;
        this.limit = data.limit;
    }
}
exports.QueryValidator = QueryValidator;
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsInt)({ message: "Invalid field offset. It must be a number." }),
    (0, class_validator_1.Min)(1, { message: "Invalid fiield offset. It must be no less than 1." }),
    (0, class_validator_1.Max)(250, {
        message: "Invalid field offset. It must be no greater than 250.",
    }),
    __metadata("design:type", Number)
], QueryValidator.prototype, "offset", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsInt)({ message: "Invalid field limit. It must be a number." }),
    (0, class_validator_1.Min)(1, { message: "Invalid field limit. It must be no less than 1." }),
    (0, class_validator_1.Max)(250, { message: "Invalid field limit. It must be no greater than 250." }),
    __metadata("design:type", Number)
], QueryValidator.prototype, "limit", void 0);
//# sourceMappingURL=queryValidator.js.map