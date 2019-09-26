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
        return knex.schema.createTable(Tables_1.Table.Vehicle, (table) => {
            table.uuid('id').primary().unique();
            table.text('name');
            table.text('model');
            table.text('manufacturer');
            table.text('cost_in_credits');
            table.text('length');
            table.text('max_atmosphering_speed');
            table.text('crew');
            table.text('passengers');
            table.text('cargo_capacity');
            table.text('consumables');
            table.text('vehicle_class');
            table.text('url');
        });
    });
}
exports.up = up;
function down(knex) {
    return __awaiter(this, void 0, void 0, function* () {
        return knex.schema.dropTable('vehicle');
    });
}
exports.down = down;
//# sourceMappingURL=20190821182614_create_vehicle.js.map