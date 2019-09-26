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
        return knex.schema.createTable(Tables_1.Table.Starship, (t) => {
            t.uuid('id').unique();
            t.text('name');
            t.text('model');
            t.text('manufacturer');
            t.text('cost_in_credits');
            t.text('length');
            t.text('max_atmosphering_speed');
            t.text('crew');
            t.text('passengers');
            t.text('cargo_capacity');
            t.text('consumables');
            t.text('hyperdrive_rating');
            t.text('MGLT');
            t.text('starship_class');
            t.text('url');
            t.text('created');
            t.text('edited');
        });
    });
}
exports.up = up;
function down(knex) {
    return __awaiter(this, void 0, void 0, function* () {
        return knex.schema.dropTable(Tables_1.Table.Starship);
    });
}
exports.down = down;
//# sourceMappingURL=20190826181357_starship.js.map