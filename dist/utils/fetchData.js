"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require('es6-promise').polyfill();
const fetch = require('isomorphic-fetch');
function getDataFromApi(url) {
    return fetch(url)
        .then((data) => data.json())
        .catch((e) => ({ error: e }));
}
exports.default = getDataFromApi;
