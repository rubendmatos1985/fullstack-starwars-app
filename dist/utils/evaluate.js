"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Maybe = require('folktale/maybe');
exports.evaluate = (condition, val) => condition(val) ? Maybe.Just(val) : Maybe.Nothing();
//# sourceMappingURL=evaluate.js.map