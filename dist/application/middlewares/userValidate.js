"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userValidate = userValidate;
const registerUserValidator_1 = require("../validators/registerUserValidator");
const validators_1 = require("../validators");
async function userValidate(request, response, next) {
    const { name, email, password, confirmPassword } = request.body;
    const validateData = new validators_1.ValidateData();
    const registerUserValidator = new registerUserValidator_1.RegisterUserValidator({
        name,
        email,
        password,
        confirmPassword,
    });
    const errors = await validateData.validate(registerUserValidator);
    const isPasswordsDifferent = registerUserValidator.validatePasswordsMatch();
    if (isPasswordsDifferent) {
        errors.push(isPasswordsDifferent);
    }
    if (errors.length > 0) {
        return response.status(400).json(errors);
    }
    next();
}
//# sourceMappingURL=userValidate.js.map