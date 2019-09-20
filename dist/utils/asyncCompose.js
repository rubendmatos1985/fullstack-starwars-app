"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.asyncCompose = (...fns) => (data) => fns.reduceRight((acc, f, index) => acc
    .then((v) => f(v))
    .catch((e) => console.log(e)), data);
