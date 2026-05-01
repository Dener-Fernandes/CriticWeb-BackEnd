"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.extractConstraintErrors = extractConstraintErrors;
function extractConstraintErrors(errors) {
    const constraintErrors = [];
    errors.forEach((obj) => {
        const { constraints } = obj;
        if (constraints) {
            const errorKeys = Object.keys(constraints);
            errorKeys.forEach((key) => {
                constraintErrors.push({ message: constraints[key] });
            });
        }
    });
    return constraintErrors;
}
//# sourceMappingURL=extractConstraintErrors.js.map