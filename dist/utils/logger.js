"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function logger(p, logFn) {
    return (message) => p.env.NODE_ENV === 'development' && logFn(message);
}
exports.default = logger(process, console.log);
//# sourceMappingURL=logger.js.map