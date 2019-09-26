"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fetchData_1 = __importDefault(require("../utils/fetchData"));
const memoize_1 = require("../utils/memoize");
const Api = {
    People: memoize_1.asyncMemoize((url) => __awaiter(this, void 0, void 0, function* () {
        return yield Promise.all(Array(9)
            .fill(0)
            .map((_, i) => fetchData_1.default(`${url}${i + 1}`)))
            .then((response) => response.reduce((acc, obj) => [...acc, ...obj.results], []))
            .catch((e) => ({ message: 'error' }));
    }))('https://swapi.co/api/people/?page='),
    Film: memoize_1.asyncMemoize((url) => __awaiter(this, void 0, void 0, function* () {
        return yield fetchData_1.default(url)
            .then((response) => response.results)
            .catch((e) => ({ message: 'error' }));
    }))('https://swapi.co/api/films/'),
    Planet: memoize_1.asyncMemoize((url) => __awaiter(this, void 0, void 0, function* () {
        return yield Promise.all(Array(6)
            .fill(0)
            .map((_, i) => fetchData_1.default(`${url}${i + 1}`)))
            .then((v) => v.reduce((acc, obj) => [...acc, ...obj.results], []))
            .catch((e) => ({ message: 'error' }));
    }))('https://swapi.co/api/planets/?page='),
    Starship: memoize_1.asyncMemoize((url) => __awaiter(this, void 0, void 0, function* () {
        return yield Promise.all(Array(4)
            .fill(0)
            .map((_, i) => fetchData_1.default(`${url}${i + 1}`)))
            .then((v) => v.reduce((acc, obj) => [...acc, ...obj.results], []))
            .catch((e) => ({ message: 'error' }));
    }))('https://swapi.co/api/starships/?page='),
    Vehicle: memoize_1.asyncMemoize((url) => __awaiter(this, void 0, void 0, function* () {
        return yield Promise.all(Array(4)
            .fill(0)
            .map((_, i) => fetchData_1.default(`${url}${i + 1}`)))
            .then((v) => v.reduce((acc, obj) => [...acc, ...obj.results], []))
            .catch((e) => ({ message: 'error' }));
    }))('https://swapi.co/api/vehicles/?page='),
    Specie: memoize_1.asyncMemoize((url) => __awaiter(this, void 0, void 0, function* () {
        return yield Promise.all(Array(4)
            .fill(0)
            .map((_, i) => fetchData_1.default(`${url}${i + 1}`)))
            .then((v) => v.reduce((acc, obj) => [...acc, ...obj.results], []))
            .catch((e) => ({ message: 'error' }));
    }))('https://swapi.co/api/species/?page=')
};
exports.default = Api;
//# sourceMappingURL=index.js.map