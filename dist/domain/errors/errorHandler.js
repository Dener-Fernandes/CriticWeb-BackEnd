"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = errorHandler;
const errors_1 = require("./errors");
function errorHandler(exception) {
    const error = errors_1.errorsDescription.find((error) => error.title == exception);
    const internalServerErroIndex = errors_1.errorsDescription.length - 1;
    if (error) {
        return error;
    }
    return errors_1.errorsDescription[internalServerErroIndex];
}
//# sourceMappingURL=errorHandler.js.map