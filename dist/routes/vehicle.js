"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Vehicle_1 = __importDefault(require("../controllers/Vehicle"));
const R = express_1.Router();
R.get('/:id', async (req, res) => {
    const result = await Vehicle_1.default.getById(req.params.id)();
    res.json(result);
});
R.get('/', async (req, res) => {
    const result = await Vehicle_1.default.getAll();
    res.json(result);
});
exports.default = R;
