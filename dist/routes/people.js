"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const people_1 = __importDefault(require("../controllers/people"));
const R = express_1.Router();
R.get('/:id', async (req, res) => {
    people_1.default.getById(req.params.id)()
        .then((result) => res.json(result));
});
R.get('/', async (req, res) => {
    const result = await people_1.default.getAll();
    res.json(result);
});
exports.default = R;
