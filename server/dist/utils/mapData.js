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
const v1_1 = __importDefault(require("uuid/v1"));
function mapData(from, fields) {
    return __awaiter(this, void 0, void 0, function* () {
        const data = yield from();
        return data.map((obj) => Object.keys(obj)
            .filter((k) => fields.indexOf(k) > -1)
            .reduce((acc, curr) => (Object.assign({ id: v1_1.default() }, acc, { [curr]: obj[curr] })), {}));
    });
}
exports.default = mapData;
