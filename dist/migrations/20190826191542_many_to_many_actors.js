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
        return knex.schema.createTable(Tables_1.Table.Actors, (t) => {
            t.uuid('id').unique();
            t.uuid('people_id').references('id').inTable(Tables_1.Table.People).onDelete('cascade');
            t.uuid('film_id').references('id').inTable(Tables_1.Table.Film).onDelete('cascade');
        });
    });
}
exports.up = up;
function down(knex) {
    return __awaiter(this, void 0, void 0, function* () {
        return knex.schema.dropTable(Tables_1.Table.Actors);
    });
}
exports.down = down;
//# sourceMappingURL=20190826191542_many_to_many_actors.js.map