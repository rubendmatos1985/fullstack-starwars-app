"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const planet_1 = __importDefault(require("../controllers/planet"));
const R = express_1.Router();
R.get('/:id', async (req, res) => {
    const planet = await planet_1.default.getById(req.params.id)();
    res.json(planet);
});
R.get('/', async (req, res) => {
    const r = await planet_1.default.getAll();
    res.json(r);
});
exports.default = R;
