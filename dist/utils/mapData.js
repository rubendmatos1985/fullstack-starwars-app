"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const v1_1 = __importDefault(require("uuid/v1"));
async function mapData(from, fields) {
    const data = await from();
    return data.map((obj) => Object.keys(obj)
        .filter((k) => fields.indexOf(k) > -1)
        .reduce((acc, curr) => (Object.assign({ id: v1_1.default() }, acc, { [curr]: obj[curr] })), {}));
}
exports.default = mapData;
