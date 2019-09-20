"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const film_1 = __importDefault(require("./routes/film"));
const helmet_1 = __importDefault(require("helmet"));
const app = require('express')();
const planets_1 = __importDefault(require("./routes/planets"));
const people_1 = __importDefault(require("./routes/people"));
const species_1 = __importDefault(require("./routes/species"));
const vehicle_1 = __importDefault(require("./routes/vehicle"));
const starship_1 = __importDefault(require("./routes/starship"));
const getPort = (p) => p && p.env && p.env.PORT ? p.env.PORT : 3000;
app.use('/films', film_1.default);
app.use('/planets', planets_1.default);
app.use('/people', people_1.default);
app.use('/species', species_1.default);
app.use('/vehicles', vehicle_1.default);
app.use('/starships', starship_1.default);
app.get('/', (req, res) => {
    res.send('Welcome');
});
app.use(helmet_1.default());
app.listen(getPort(process), () => console.log(`server started on port ${getPort(process)}`));
