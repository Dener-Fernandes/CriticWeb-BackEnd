"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidateData = void 0;
const class_validator_1 = require("class-validator");
const extractConstraintErrors_1 = require("../utils/extractConstraintErrors");
class ValidateData {
    async validate(classForValidaton) {
        const errors = await (0, class_validator_1.validate)(classForValidaton);
        if (errors.length > 0) {
            const formattedErrors = (0, extractConstraintErrors_1.extractConstraintErrors)(errors);
            return formattedErrors;
        }
        return [];
    }
}
exports.ValidateData = ValidateData;
//# sourceMappingURL=index.js.map