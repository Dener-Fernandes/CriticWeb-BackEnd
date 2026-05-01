"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginValidate = loginValidate;
const loginValidator_1 = require("../validators/loginValidator");
const validators_1 = require("../validators");
async function loginValidate(request, response, next) {
    const { email, password } = request.body;
    const validateData = new validators_1.ValidateData();
    const loginValidator = new loginValidator_1.LoginValidator(email, password);
    const errors = await validateData.validate(loginValidator);
    if (errors.length > 0) {
        return response.status(400).json(errors);
    }
    next();
}
//# sourceMappingURL=loginValidate.js.map