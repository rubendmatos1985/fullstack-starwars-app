"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const Tables_1 = require("../types/Tables");
function up(knex) {
    return __awaiter(this, void 0, void 0, function* () {
        return knex.schema.createTable(Tables_1.Table.Specie, (table) => {
            table.uuid('id').primary().unique();
            table.text('name');
            table.text('classification');
            table.text('designation');
            table.text('average_height');
            table.text('skin_colors');
            table.text('hair_colors');
            table.text('eye_colors');
            table.text('average_lifespan');
            table.text('language');
            table.text('url');
        });
    });
}
exports.up = up;
function down(knex) {
    return __awaiter(this, void 0, void 0, function* () {
        return knex.schema.dropTable('specie');
    });
}
exports.down = down;
//# sourceMappingURL=20190822113233_create_specie.js.map