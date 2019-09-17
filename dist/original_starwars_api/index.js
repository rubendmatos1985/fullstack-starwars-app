"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fetchData_1 = __importDefault(require("../utils/fetchData"));
const memoize_1 = require("../utils/memoize");
const Api = {
    People: memoize_1.asyncMemoize(async (url) => await Promise.all(Array(9)
        .fill(0)
        .map((_, i) => fetchData_1.default(`${url}${i + 1}`)))
        .then((response) => response.reduce((acc, obj) => [...acc, ...obj.results], []))
        .catch((e) => ({ message: 'error' })))('https://swapi.co/api/people/?page='),
    Film: memoize_1.asyncMemoize(async (url) => await fetchData_1.default(url)
        .then((response) => response.results)
        .catch((e) => ({ message: 'error' })))('https://swapi.co/api/films/'),
    Planet: memoize_1.asyncMemoize(async (url) => await Promise.all(Array(6)
        .fill(0)
        .map((_, i) => fetchData_1.default(`${url}${i + 1}`)))
        .then((v) => v.reduce((acc, obj) => [...acc, ...obj.results], []))
        .catch((e) => ({ message: 'error' })))('https://swapi.co/api/planets/?page='),
    Starship: memoize_1.asyncMemoize(async (url) => await Promise.all(Array(4)
        .fill(0)
        .map((_, i) => fetchData_1.default(`${url}${i + 1}`)))
        .then((v) => v.reduce((acc, obj) => [...acc, ...obj.results], []))
        .catch((e) => ({ message: 'error' })))('https://swapi.co/api/starships/?page='),
    Vehicle: memoize_1.asyncMemoize(async (url) => await Promise.all(Array(4)
        .fill(0)
        .map((_, i) => fetchData_1.default(`${url}${i + 1}`)))
        .then((v) => v.reduce((acc, obj) => [...acc, ...obj.results], []))
        .catch((e) => ({ message: 'error' })))('https://swapi.co/api/vehicles/?page='),
    Specie: memoize_1.asyncMemoize(async (url) => await Promise.all(Array(4)
        .fill(0)
        .map((_, i) => fetchData_1.default(`${url}${i + 1}`)))
        .then((v) => v.reduce((acc, obj) => [...acc, ...obj.results], []))
        .catch((e) => ({ message: 'error' })))('https://swapi.co/api/species/?page=')
};
exports.default = Api;
