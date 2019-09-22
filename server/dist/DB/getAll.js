"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = require(".");
const asyncCompose_1 = require("../utils/asyncCompose");
const getIds = (tableName) => _1.knex.select('id').from(tableName);
const _getAll = (getByIdHandler) => (ids) => ids.map(o => getByIdHandler(o.id)());
const mapPromisesToResult = (promises) => Promise.all(promises);
exports.getAll = (table, configuredGetByIdHandler) => () => asyncCompose_1.asyncCompose(mapPromisesToResult, _getAll(configuredGetByIdHandler), getIds)(Promise.resolve(table));
