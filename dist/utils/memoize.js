"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const logger_1 = __importDefault(require("./logger"));
exports.memoize = (fn) => {
    let state = {};
    return function (...args) {
        const key = [...args].reduce((acc, curr) => acc.concat(curr), '');
        if (Object.keys(state).some((k) => k === key)) {
            return () => state[key];
        }
        else {
            state[key] = fn(...args);
            return () => state[key];
        }
    };
};
exports.asyncMemoize = (fn) => {
    let state = {};
    return (args) => {
        const key = [...args].reduce((acc, curr) => acc.concat(curr), '');
        if (Object.keys(state).some((k) => k === key)) {
            logger_1.default('Memoize: Data extracted From Cache');
            return () => state[key];
        }
        else {
            logger_1.default('Memoize: data extracted From DB');
            state[key] = fn(args);
            return () => state[key];
        }
    };
};
//# sourceMappingURL=memoize.js.map