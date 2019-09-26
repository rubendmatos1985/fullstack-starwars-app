"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//import regenerator from 'regenerator-runtime/runtime';
const express_1 = __importDefault(require("express"));
const film_1 = __importDefault(require("./routes/film"));
const helmet_1 = __importDefault(require("helmet"));
const app = require('express')();
const planets_1 = __importDefault(require("./routes/planets"));
const people_1 = __importDefault(require("./routes/people"));
const species_1 = __importDefault(require("./routes/species"));
const vehicle_1 = __importDefault(require("./routes/vehicle"));
const starship_1 = __importDefault(require("./routes/starship"));
const path_1 = __importDefault(require("path"));
const port_getter_1 = __importDefault(require("./utils/port-getter"));
app.use('/static', express_1.default.static(path_1.default.join(path_1.default.dirname(__dirname), 'client', 'dist')));
app.use('/api/v1/films', film_1.default);
app.use('/api/v1/planets', planets_1.default);
app.use('/api/v1/people', people_1.default);
app.use('/api/v1/species', species_1.default);
app.use('/api/v1/vehicles', vehicle_1.default);
app.use('/api/v1/starships', starship_1.default);
app.get('/*', (req, res, next) => {
});
console.log();
app.use(helmet_1.default());
app.listen(port_getter_1.default(process), () => console.log(`server started on port ${port_getter_1.default(process)}`));
//# sourceMappingURL=index.js.map