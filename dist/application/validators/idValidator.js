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
exports.IdValidator = void 0;
const class_validator_1 = require("class-validator");
class IdValidator {
    constructor(id, idName) {
        this.idName = idName;
        this.id = id;
    }
}
exports.IdValidator = IdValidator;
__decorate([
    (0, class_validator_1.IsInt)({
        message: (validationArguments) => {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const idName = validationArguments.object?.idName;
            return `Invalid field ${idName}. It must be a number.`;
        },
    }),
    (0, class_validator_1.Min)(1, {
        message: (validationArguments) => {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const idName = validationArguments.object?.idName;
            return `Field ${idName} must be no less than 1.`;
        },
    }),
    __metadata("design:type", Number)
], IdValidator.prototype, "id", void 0);
//# sourceMappingURL=idValidator.js.map