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
exports.RegisterUserValidator = void 0;
const class_validator_1 = require("class-validator");
class RegisterUserValidator {
    constructor(data) {
        this.name = data.name;
        this.email = data.email;
        this.password = data.password;
        this.confirmPassword = data.confirmPassword;
    }
    validatePasswordsMatch() {
        if (this.password !== this.confirmPassword) {
            return {
                message: "Invalid field confirmPassword. It must be equal to password.",
            };
        }
        return null;
    }
}
exports.RegisterUserValidator = RegisterUserValidator;
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: "Field name cannot be empty." }),
    (0, class_validator_1.Length)(8, 20, {
        message: "Invalid field name. It must be at least 8 characters and at most 20.",
    }),
    (0, class_validator_1.IsString)({ message: "Invalid field name. It must be a string." }),
    __metadata("design:type", String)
], RegisterUserValidator.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: "Field email cannot be empty." }),
    (0, class_validator_1.IsEmail)({}, { message: "Invalid field email. It must be a valid email." }),
    __metadata("design:type", String)
], RegisterUserValidator.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: "Field password cannot be empty." }),
    (0, class_validator_1.Length)(8, 20, {
        message: "Invalid field password. It must be at least 8 characters and at most 20.",
    }),
    (0, class_validator_1.IsString)({ message: "Invalid field password. It must be a string" }),
    __metadata("design:type", String)
], RegisterUserValidator.prototype, "password", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: "Field confirmPassword cannot be empty." }),
    (0, class_validator_1.Length)(8, 20, {
        message: "Invalid field confirmPassword. It must be at least 8 characters and at most 20.",
    }),
    (0, class_validator_1.IsString)({ message: "Invalid field confirmPassword. It must be a string" }),
    __metadata("design:type", String)
], RegisterUserValidator.prototype, "confirmPassword", void 0);
//# sourceMappingURL=registerUserValidator.js.map