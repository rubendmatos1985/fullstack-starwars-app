/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/build";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./client/pages/About.tsx":
/*!********************************!*\
  !*** ./client/pages/About.tsx ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(__webpack_require__(/*! react */ "react"));
var About = function (props) { return (React.createElement("div", null, "About us!")); };
exports.default = About;


/***/ }),

/***/ "./client/pages/Contact.tsx":
/*!**********************************!*\
  !*** ./client/pages/Contact.tsx ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(__webpack_require__(/*! react */ "react"));
var Contact = function (props) { return (React.createElement("div", null, "Contact")); };
exports.default = Contact;


/***/ }),

/***/ "./client/pages/Home.tsx":
/*!*******************************!*\
  !*** ./client/pages/Home.tsx ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(__webpack_require__(/*! react */ "react"));
var Home = function (props) { return (React.createElement("div", null, "Welcome To React SSR!")); };
exports.default = Home;


/***/ }),

/***/ "./client/routes/index.tsx":
/*!*********************************!*\
  !*** ./client/routes/index.tsx ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Home_1 = __importDefault(__webpack_require__(/*! ../pages/Home */ "./client/pages/Home.tsx"));
var About_1 = __importDefault(__webpack_require__(/*! ../pages/About */ "./client/pages/About.tsx"));
var Contact_1 = __importDefault(__webpack_require__(/*! ../pages/Contact */ "./client/pages/Contact.tsx"));
var routes = [
    {
        path: '/home',
        component: Home_1.default
    },
    {
        path: '/about',
        component: About_1.default
    },
    {
        path: '/contact',
        component: Contact_1.default
    }
];
exports.default = routes;


/***/ }),

/***/ "./server/DB/getAll.ts":
/*!*****************************!*\
  !*** ./server/DB/getAll.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var _1 = __webpack_require__(/*! . */ "./server/DB/index.ts");
var asyncCompose_1 = __webpack_require__(/*! ../utils/asyncCompose */ "./server/utils/asyncCompose.ts");
var getIds = function (tableName) { return _1.knex.select('id').from(tableName); };
var _getAll = function (getByIdHandler) {
    return function (ids) { return ids.map(function (o) { return getByIdHandler(o.id)(); }); };
};
var mapPromisesToResult = function (promises) { return Promise.all(promises); };
exports.getAll = function (table, configuredGetByIdHandler) { return function () {
    return asyncCompose_1.asyncCompose(mapPromisesToResult, _getAll(configuredGetByIdHandler), getIds)(Promise.resolve(table));
}; };


/***/ }),

/***/ "./server/DB/getById.ts":
/*!******************************!*\
  !*** ./server/DB/getById.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = __webpack_require__(/*! ./index */ "./server/DB/index.ts");
var ramda_1 = __webpack_require__(/*! ramda */ "ramda");
var asyncCompose_1 = __webpack_require__(/*! ../utils/asyncCompose */ "./server/utils/asyncCompose.ts");
;
;
function getByIdQuery(tableName, foreignFields) {
    var _this = this;
    return function (id) { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, asyncCompose_1.asyncCompose(mapDBResponse(foreignFields), function (res) { return res.rows[0].json_build_object; }, fetchEntityWithManyToManyFields(tableName, id), getMMFieldsQueryFrom)(Promise.resolve(foreignFields))];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    }); };
}
exports.getByIdQuery = getByIdQuery;
function mapDBResponse(manyToManyFields) {
    return function (result) {
        return Object.keys(result)
            .reduce(function (acc, curr, index) {
            var _a;
            return index === 0
                ? __assign({}, result[curr]) : __assign({}, acc, (_a = {}, _a[manyToManyFields !== undefined
                ? manyToManyFields[index - 1].fieldNameInResponse : curr] = result[curr], _a));
        }, {});
    };
}
function fetchEntityWithManyToManyFields(tableName, id) {
    return function (getMMFieldById) {
        return index_1.knex
            .raw("'" + tableName + "', ( SELECT to_json(row)\n       FROM ( SELECT * FROM " + tableName + " WHERE id = :id ) \n       row \n       ),\n   " + getMMFieldById(id) + "                                 \n ", { id: id })
            .wrap('SELECT json_build_object(', ')');
    };
}
var manyToManyQuery = function (fieldData) { return function (where) { return ({
    fieldName: fieldData.tableName,
    query: "\n  ( SELECT json_agg(result) \n    FROM ( SELECT " + fieldData.showFields + " FROM " + fieldData.tableName + " \n    INNER JOIN " + fieldData.manyToManyTableName + " ON ( " + fieldData.tableName + ".id = " + fieldData.manyToManyTableName + "." + fieldData.intersectEntityOn + ")\n    WHERE " + fieldData.manyToManyTableName + "." + fieldData.where + " = '" + where + "') \n    result \n  )\n"
}); }; };
var concatFieldsWithTableName = function (field) { return (__assign({}, field, { showFields: field.showFields
        .reduce(function (acc, curr, index) {
        return index <= 0
            ? field.tableName + "." + curr
            : acc + (", " + field.tableName + "." + curr);
    }, "") })); };
exports.buildMMFQuery = ramda_1.compose(manyToManyQuery, concatFieldsWithTableName);
var getMMFieldsQueryFrom = function (fields) { return function (id) {
    return fields !== undefined
        ? fields
            .map(exports.buildMMFQuery)
            .reduce(function (acc, curr) {
            return acc !== ""
                ? (acc + ", '" + curr(id).fieldName + "', " + curr(id).query)
                : ("'" + curr(id).fieldName + "', " + curr(id).query);
        }, "")
        : "";
}; };


/***/ }),

/***/ "./server/DB/index.ts":
/*!****************************!*\
  !*** ./server/DB/index.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.knex = __webpack_require__(/*! knex */ "knex")(__webpack_require__(/*! ../knexfile */ "./server/knexfile.ts").development);


/***/ }),

/***/ "./server/controllers/film.ts":
/*!************************************!*\
  !*** ./server/controllers/film.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var memoize_1 = __webpack_require__(/*! ../utils/memoize */ "./server/utils/memoize.ts");
var Tables_1 = __webpack_require__(/*! ../types/Tables */ "./server/types/Tables.ts");
var getById_1 = __webpack_require__(/*! ../DB/getById */ "./server/DB/getById.ts");
var Vehicle_1 = __webpack_require__(/*! ../types/interfaces/Vehicle */ "./server/types/interfaces/Vehicle.ts");
var VehiclesInFilms_1 = __webpack_require__(/*! ../types/interfaces/VehiclesInFilms */ "./server/types/interfaces/VehiclesInFilms.ts");
var People_1 = __webpack_require__(/*! ../types/interfaces/People */ "./server/types/interfaces/People.ts");
var Actors_1 = __webpack_require__(/*! ../types/interfaces/Actors */ "./server/types/interfaces/Actors.ts");
var getAll_1 = __webpack_require__(/*! ../DB/getAll */ "./server/DB/getAll.ts");
exports.default = (function () {
    var _getById = memoize_1.asyncMemoize(getById_1.getByIdQuery(Tables_1.EntityTable.Film, [
        {
            tableName: Tables_1.EntityTable.Vehicle,
            showFields: [Vehicle_1.VehicleFieldsNames.Id, Vehicle_1.VehicleFieldsNames.Name],
            fieldNameInResponse: 'vehicles',
            manyToManyTableName: Tables_1.ManyToManyTable.VehiclesInFilms,
            intersectEntityOn: VehiclesInFilms_1.VehiclesInFilmsFieldsNames.VehicleId,
            where: VehiclesInFilms_1.VehiclesInFilmsFieldsNames.VehicleId
        },
        {
            tableName: Tables_1.EntityTable.People,
            showFields: [People_1.IPeopleEntityFields.Id, People_1.IPeopleEntityFields.Name],
            fieldNameInResponse: 'actors',
            manyToManyTableName: Tables_1.ManyToManyTable.Actors,
            intersectEntityOn: Actors_1.IActorsFieldsNames.PeopleId,
            where: Actors_1.IActorsFieldsNames.FilmId
        },
        {
            tableName: Tables_1.EntityTable.Starship,
            showFields: ['id', 'name'],
            fieldNameInResponse: 'vehicles',
            manyToManyTableName: Tables_1.ManyToManyTable.StarshipsInFilms,
            intersectEntityOn: 'starship_id',
            where: 'film_id'
        },
        {
            tableName: Tables_1.EntityTable.Planet,
            showFields: ['id', 'name'],
            fieldNameInResponse: 'planets',
            manyToManyTableName: Tables_1.ManyToManyTable.PlanetsInFilms,
            intersectEntityOn: 'planet_id',
            where: 'film_id'
        }
    ]));
    return {
        getById: _getById,
        getAll: getAll_1.getAll(Tables_1.EntityTable.Film, _getById)
    };
})();


/***/ }),

/***/ "./server/controllers/people.ts":
/*!**************************************!*\
  !*** ./server/controllers/people.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var memoize_1 = __webpack_require__(/*! ../utils/memoize */ "./server/utils/memoize.ts");
var getById_1 = __webpack_require__(/*! ../DB/getById */ "./server/DB/getById.ts");
var Tables_1 = __webpack_require__(/*! ../types/Tables */ "./server/types/Tables.ts");
var Film_1 = __webpack_require__(/*! ../types/interfaces/Film */ "./server/types/interfaces/Film.ts");
var Actors_1 = __webpack_require__(/*! ../types/interfaces/Actors */ "./server/types/interfaces/Actors.ts");
var Specie_1 = __webpack_require__(/*! ../types/interfaces/Specie */ "./server/types/interfaces/Specie.ts");
var Races_1 = __webpack_require__(/*! ../types/interfaces/Races */ "./server/types/interfaces/Races.ts");
var Vehicle_1 = __webpack_require__(/*! ../types/interfaces/Vehicle */ "./server/types/interfaces/Vehicle.ts");
var Pilot_1 = __webpack_require__(/*! ../types/interfaces/Pilot */ "./server/types/interfaces/Pilot.ts");
var Starship_1 = __webpack_require__(/*! ../types/interfaces/Starship */ "./server/types/interfaces/Starship.ts");
var StarshipPilot_1 = __webpack_require__(/*! ../types/interfaces/StarshipPilot */ "./server/types/interfaces/StarshipPilot.ts");
var getAll_1 = __webpack_require__(/*! ../DB/getAll */ "./server/DB/getAll.ts");
exports.default = (function () {
    var _getById = memoize_1.asyncMemoize(getById_1.getByIdQuery(Tables_1.EntityTable.People, [
        {
            tableName: Tables_1.EntityTable.Film,
            showFields: [Film_1.FilmFieldsNames.Id, Film_1.FilmFieldsNames.Title],
            fieldNameInResponse: 'films',
            manyToManyTableName: Tables_1.ManyToManyTable.Actors,
            intersectEntityOn: Actors_1.IActorsFieldsNames.FilmId,
            where: Actors_1.IActorsFieldsNames.PeopleId
        },
        {
            tableName: Tables_1.EntityTable.Specie,
            showFields: [Specie_1.ISpecieEntityFields.Id, Specie_1.ISpecieEntityFields.Name],
            fieldNameInResponse: 'species',
            manyToManyTableName: Tables_1.OneToManyTable.Race,
            intersectEntityOn: Races_1.RaceFields.SpecieId,
            where: Races_1.RaceFields.PeopleId
        },
        {
            tableName: Tables_1.EntityTable.Vehicle,
            showFields: [Vehicle_1.VehicleFieldsNames.Id, Vehicle_1.VehicleFieldsNames.Name],
            fieldNameInResponse: 'vehicles',
            manyToManyTableName: Tables_1.ManyToManyTable.Pilot,
            intersectEntityOn: Pilot_1.PilotFieldNames.VehicleId,
            where: Pilot_1.PilotFieldNames.PeopleId
        },
        {
            tableName: Tables_1.EntityTable.Starship,
            showFields: [Starship_1.StarshipEntityFields.Id, Starship_1.StarshipEntityFields.Name],
            fieldNameInResponse: 'starships',
            manyToManyTableName: Tables_1.ManyToManyTable.StarshipPilot,
            intersectEntityOn: StarshipPilot_1.StarshipPilotFieldsNames.StarshipId,
            where: StarshipPilot_1.StarshipPilotFieldsNames.PeopleId
        }
    ]));
    return {
        getById: _getById,
        getAll: getAll_1.getAll(Tables_1.EntityTable.People, _getById)
    };
})();


/***/ }),

/***/ "./server/controllers/planet.ts":
/*!**************************************!*\
  !*** ./server/controllers/planet.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var memoize_1 = __webpack_require__(/*! ../utils/memoize */ "./server/utils/memoize.ts");
var getById_1 = __webpack_require__(/*! ../DB/getById */ "./server/DB/getById.ts");
var Tables_1 = __webpack_require__(/*! ../types/Tables */ "./server/types/Tables.ts");
var getAll_1 = __webpack_require__(/*! ../DB/getAll */ "./server/DB/getAll.ts");
exports.default = (function () {
    var _getById = memoize_1.asyncMemoize(getById_1.getByIdQuery(Tables_1.EntityTable.Planet, [
        {
            tableName: Tables_1.EntityTable.People,
            showFields: ['id', 'name'],
            fieldNameInResponse: 'residents',
            manyToManyTableName: Tables_1.ManyToManyTable.Resident,
            intersectEntityOn: 'people_id',
            where: 'planet_id'
        },
        {
            tableName: Tables_1.EntityTable.Film,
            showFields: ['id', 'title'],
            fieldNameInResponse: 'films',
            manyToManyTableName: Tables_1.ManyToManyTable.PlanetsInFilms,
            intersectEntityOn: 'film_id',
            where: 'planet_id'
        }
    ]));
    return {
        getById: _getById,
        getAll: getAll_1.getAll(Tables_1.EntityTable.Planet, _getById)
    };
})();


/***/ }),

/***/ "./server/controllers/specie.ts":
/*!**************************************!*\
  !*** ./server/controllers/specie.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var getById_1 = __webpack_require__(/*! ../DB/getById */ "./server/DB/getById.ts");
var memoize_1 = __webpack_require__(/*! ../utils/memoize */ "./server/utils/memoize.ts");
var Tables_1 = __webpack_require__(/*! ../types/Tables */ "./server/types/Tables.ts");
var People_1 = __webpack_require__(/*! ../types/interfaces/People */ "./server/types/interfaces/People.ts");
var SpeciesInFilms_1 = __webpack_require__(/*! ../types/interfaces/SpeciesInFilms */ "./server/types/interfaces/SpeciesInFilms.ts");
var Races_1 = __webpack_require__(/*! ../types/interfaces/Races */ "./server/types/interfaces/Races.ts");
var Film_1 = __webpack_require__(/*! ../types/interfaces/Film */ "./server/types/interfaces/Film.ts");
var getAll_1 = __webpack_require__(/*! ../DB/getAll */ "./server/DB/getAll.ts");
exports.default = (function () {
    var _getById = memoize_1.asyncMemoize(getById_1.getByIdQuery(Tables_1.EntityTable.Specie, [
        {
            tableName: Tables_1.EntityTable.Film,
            showFields: [Film_1.FilmFieldsNames.Id, Film_1.FilmFieldsNames.Title],
            fieldNameInResponse: 'films',
            manyToManyTableName: Tables_1.ManyToManyTable.SpeciesInFilms,
            intersectEntityOn: SpeciesInFilms_1.SpeciesInFilmsFieldsName.FilmId,
            where: SpeciesInFilms_1.SpeciesInFilmsFieldsName.SpecieId
        },
        {
            tableName: Tables_1.EntityTable.People,
            showFields: [People_1.IPeopleEntityFields.Id, People_1.IPeopleEntityFields.Name],
            fieldNameInResponse: 'people',
            manyToManyTableName: Tables_1.OneToManyTable.Race,
            intersectEntityOn: Races_1.RaceFields.PeopleId,
            where: Races_1.RaceFields.SpecieId
        }
    ]));
    return {
        getById: _getById,
        getAll: getAll_1.getAll(Tables_1.EntityTable.Specie, _getById)
    };
})();


/***/ }),

/***/ "./server/controllers/starship.ts":
/*!****************************************!*\
  !*** ./server/controllers/starship.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var memoize_1 = __webpack_require__(/*! ../utils/memoize */ "./server/utils/memoize.ts");
var getById_1 = __webpack_require__(/*! ../DB/getById */ "./server/DB/getById.ts");
var Tables_1 = __webpack_require__(/*! ../types/Tables */ "./server/types/Tables.ts");
var Film_1 = __webpack_require__(/*! ../types/interfaces/Film */ "./server/types/interfaces/Film.ts");
var StarshipsInFilms_1 = __webpack_require__(/*! ../types/interfaces/StarshipsInFilms */ "./server/types/interfaces/StarshipsInFilms.ts");
var People_1 = __webpack_require__(/*! ../types/interfaces/People */ "./server/types/interfaces/People.ts");
var getAll_1 = __webpack_require__(/*! ../DB/getAll */ "./server/DB/getAll.ts");
var StarshipPilot_1 = __webpack_require__(/*! ../types/interfaces/StarshipPilot */ "./server/types/interfaces/StarshipPilot.ts");
exports.default = (function () {
    var _getById = memoize_1.asyncMemoize(getById_1.getByIdQuery(Tables_1.EntityTable.Starship, [
        {
            tableName: Tables_1.EntityTable.Film,
            showFields: [Film_1.FilmFieldsNames.Id, Film_1.FilmFieldsNames.Title],
            fieldNameInResponse: 'films',
            manyToManyTableName: Tables_1.ManyToManyTable.StarshipsInFilms,
            intersectEntityOn: StarshipsInFilms_1.StarshipsInFilmsFields.FilmId,
            where: StarshipsInFilms_1.StarshipsInFilmsFields.StarshipId
        },
        {
            tableName: Tables_1.EntityTable.People,
            showFields: [People_1.IPeopleEntityFields.Id, People_1.IPeopleEntityFields.Name],
            fieldNameInResponse: 'pilots',
            manyToManyTableName: Tables_1.ManyToManyTable.StarshipPilot,
            intersectEntityOn: StarshipPilot_1.StarshipPilotFieldsNames.PeopleId,
            where: StarshipPilot_1.StarshipPilotFieldsNames.StarshipId
        }
    ]));
    return {
        getById: _getById,
        getAll: getAll_1.getAll(Tables_1.EntityTable.Starship, _getById)
    };
})();


/***/ }),

/***/ "./server/controllers/vehicle.ts":
/*!***************************************!*\
  !*** ./server/controllers/vehicle.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var memoize_1 = __webpack_require__(/*! ../utils/memoize */ "./server/utils/memoize.ts");
var getById_1 = __webpack_require__(/*! ../DB/getById */ "./server/DB/getById.ts");
var Tables_1 = __webpack_require__(/*! ../types/Tables */ "./server/types/Tables.ts");
var People_1 = __webpack_require__(/*! ../types/interfaces/People */ "./server/types/interfaces/People.ts");
var Pilot_1 = __webpack_require__(/*! ../types/interfaces/Pilot */ "./server/types/interfaces/Pilot.ts");
var Film_1 = __webpack_require__(/*! ../types/interfaces/Film */ "./server/types/interfaces/Film.ts");
var VehiclesInFilms_1 = __webpack_require__(/*! ../types/interfaces/VehiclesInFilms */ "./server/types/interfaces/VehiclesInFilms.ts");
var getAll_1 = __webpack_require__(/*! ../DB/getAll */ "./server/DB/getAll.ts");
exports.default = (function () {
    var _getById = memoize_1.asyncMemoize(getById_1.getByIdQuery(Tables_1.EntityTable.Vehicle, [
        {
            tableName: Tables_1.EntityTable.People,
            showFields: [People_1.IPeopleEntityFields.Id, People_1.IPeopleEntityFields.Name],
            fieldNameInResponse: 'pilots',
            manyToManyTableName: Tables_1.ManyToManyTable.Pilot,
            intersectEntityOn: Pilot_1.PilotFieldNames.PeopleId,
            where: Pilot_1.PilotFieldNames.VehicleId
        },
        {
            tableName: Tables_1.EntityTable.Film,
            showFields: [Film_1.FilmFieldsNames.Id, Film_1.FilmFieldsNames.Title],
            fieldNameInResponse: 'films',
            manyToManyTableName: Tables_1.ManyToManyTable.VehiclesInFilms,
            intersectEntityOn: VehiclesInFilms_1.VehiclesInFilmsFieldsNames.FilmId,
            where: VehiclesInFilms_1.VehiclesInFilmsFieldsNames.VehicleId
        }
    ]));
    return {
        getById: _getById,
        getAll: getAll_1.getAll(Tables_1.EntityTable.Vehicle, _getById)
    };
})();


/***/ }),

/***/ "./server/index.ts":
/*!*************************!*\
  !*** ./server/index.ts ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(/*! regenerator-runtime/runtime */ "regenerator-runtime/runtime");
var express = __importStar(__webpack_require__(/*! express */ "express"));
var film_1 = __importDefault(__webpack_require__(/*! ./routes/film */ "./server/routes/film.ts"));
var helmet_1 = __importDefault(__webpack_require__(/*! helmet */ "helmet"));
var app = __webpack_require__(/*! express */ "express")();
var planets_1 = __importDefault(__webpack_require__(/*! ./routes/planets */ "./server/routes/planets.ts"));
var people_1 = __importDefault(__webpack_require__(/*! ./routes/people */ "./server/routes/people.ts"));
var species_1 = __importDefault(__webpack_require__(/*! ./routes/species */ "./server/routes/species.ts"));
var vehicle_1 = __importDefault(__webpack_require__(/*! ./routes/vehicle */ "./server/routes/vehicle.ts"));
var starship_1 = __importDefault(__webpack_require__(/*! ./routes/starship */ "./server/routes/starship.ts"));
var react_router_config_1 = __webpack_require__(/*! react-router-config */ "react-router-config");
var routes_1 = __importDefault(__webpack_require__(/*! ../client/routes */ "./client/routes/index.tsx"));
var port_getter_1 = __importDefault(__webpack_require__(/*! ./utils/port-getter */ "./server/utils/port-getter.ts"));
var renderer_1 = __importDefault(__webpack_require__(/*! ./utils/renderer */ "./server/utils/renderer.tsx"));
app.use('/public', express.static('public'));
app.use('/api/v1/films', film_1.default);
app.use('/api/v1/planets', planets_1.default);
app.use('/api/v1/people', people_1.default);
app.use('/api/v1/species', species_1.default);
app.use('/api/v1/vehicles', vehicle_1.default);
app.use('/api/v1/starships', starship_1.default);
app.get('/*', function (req, res, next) {
    var promises = react_router_config_1.matchRoutes(routes_1.default, req.path)
        .map(function (_a) {
        var route = _a.route, match = _a.match;
        return route.loadData ? route.loadData(match) : Promise.resolve(null);
    })
        .map(function (promise) { return promise && new Promise(function (resolve, reject) {
        return promise.then(resolve).catch(resolve);
    }); });
    if (promises.length > 0) {
        Promise.all(promises).then(function () { return res.send(renderer_1.default(req)); });
    }
    else {
        next();
    }
});
//app.use('/*', (req, res)=> res.json({message: 'Not Found'}))
app.use(helmet_1.default());
app.listen(port_getter_1.default(process), function () { return console.log("server started on port " + port_getter_1.default(process)); });


/***/ }),

/***/ "./server/knexfile.ts":
/*!****************************!*\
  !*** ./server/knexfile.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// Update with your config settings.
var s = __webpack_require__(/*! ./settings.js */ "./server/settings.js");
module.exports = {
    development: {
        client: 'pg',
        connection: {
            user: s.user,
            host: s.host,
            database: 'starwars',
            password: s.password,
            ssl: true
        }
    }
};


/***/ }),

/***/ "./server/routes/film.ts":
/*!*******************************!*\
  !*** ./server/routes/film.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __webpack_require__(/*! express */ "express");
var film_1 = __importDefault(__webpack_require__(/*! ../controllers/film */ "./server/controllers/film.ts"));
var R = express_1.Router();
R.get('/insert', function (req, res) { return __awaiter(_this, void 0, void 0, function () {
    return __generator(this, function (_a) {
        return [2 /*return*/];
    });
}); });
R.get('/:id', function (req, res) { return __awaiter(_this, void 0, void 0, function () {
    var result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, film_1.default.getById(req.params.id)()];
            case 1:
                result = _a.sent();
                res.json(result);
                return [2 /*return*/];
        }
    });
}); });
R.get('/', function (req, res) { return __awaiter(_this, void 0, void 0, function () {
    var result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, film_1.default.getAll()];
            case 1:
                result = _a.sent();
                res.json(result);
                return [2 /*return*/];
        }
    });
}); });
exports.default = R;


/***/ }),

/***/ "./server/routes/people.ts":
/*!*********************************!*\
  !*** ./server/routes/people.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __webpack_require__(/*! express */ "express");
var people_1 = __importDefault(__webpack_require__(/*! ../controllers/people */ "./server/controllers/people.ts"));
var R = express_1.Router();
R.get('/:id', function (req, res) { return __awaiter(_this, void 0, void 0, function () {
    return __generator(this, function (_a) {
        people_1.default.getById(req.params.id)()
            .then(function (result) { return res.json(result); });
        return [2 /*return*/];
    });
}); });
R.get('/', function (req, res) { return __awaiter(_this, void 0, void 0, function () {
    var result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, people_1.default.getAll()];
            case 1:
                result = _a.sent();
                res.json(result);
                return [2 /*return*/];
        }
    });
}); });
exports.default = R;


/***/ }),

/***/ "./server/routes/planets.ts":
/*!**********************************!*\
  !*** ./server/routes/planets.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __webpack_require__(/*! express */ "express");
var planet_1 = __importDefault(__webpack_require__(/*! ../controllers/planet */ "./server/controllers/planet.ts"));
var R = express_1.Router();
R.get('/:id', function (req, res) { return __awaiter(_this, void 0, void 0, function () {
    var planet;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, planet_1.default.getById(req.params.id)()];
            case 1:
                planet = _a.sent();
                res.json(planet);
                return [2 /*return*/];
        }
    });
}); });
R.get('/', function (req, res) { return __awaiter(_this, void 0, void 0, function () {
    var r;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, planet_1.default.getAll()];
            case 1:
                r = _a.sent();
                res.json(r);
                return [2 /*return*/];
        }
    });
}); });
exports.default = R;


/***/ }),

/***/ "./server/routes/species.ts":
/*!**********************************!*\
  !*** ./server/routes/species.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __webpack_require__(/*! express */ "express");
var specie_1 = __importDefault(__webpack_require__(/*! ../controllers/specie */ "./server/controllers/specie.ts"));
var R = express_1.Router();
R.get('/:id', function (req, res) { return __awaiter(_this, void 0, void 0, function () {
    var result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, specie_1.default.getById(req.params.id)()];
            case 1:
                result = _a.sent();
                res.json(result);
                return [2 /*return*/];
        }
    });
}); });
R.get('/', function (req, res) { return __awaiter(_this, void 0, void 0, function () {
    var result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, specie_1.default.getAll()];
            case 1:
                result = _a.sent();
                res.json(result);
                return [2 /*return*/];
        }
    });
}); });
exports.default = R;


/***/ }),

/***/ "./server/routes/starship.ts":
/*!***********************************!*\
  !*** ./server/routes/starship.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __webpack_require__(/*! express */ "express");
var starship_1 = __importDefault(__webpack_require__(/*! ../controllers/starship */ "./server/controllers/starship.ts"));
var R = express_1.Router();
R.get('/:id', function (req, res) { return __awaiter(_this, void 0, void 0, function () {
    var result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, starship_1.default.getById(req.params.id)];
            case 1:
                result = _a.sent();
                res.json(result);
                return [2 /*return*/];
        }
    });
}); });
R.get('/', function (req, res) { return __awaiter(_this, void 0, void 0, function () {
    var result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, starship_1.default.getAll()];
            case 1:
                result = _a.sent();
                res.json(result);
                return [2 /*return*/];
        }
    });
}); });
exports.default = R;


/***/ }),

/***/ "./server/routes/vehicle.ts":
/*!**********************************!*\
  !*** ./server/routes/vehicle.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __webpack_require__(/*! express */ "express");
var vehicle_1 = __importDefault(__webpack_require__(/*! ../controllers/vehicle */ "./server/controllers/vehicle.ts"));
var R = express_1.Router();
R.get('/:id', function (req, res) { return __awaiter(_this, void 0, void 0, function () {
    var result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, vehicle_1.default.getById(req.params.id)()];
            case 1:
                result = _a.sent();
                res.json(result);
                return [2 /*return*/];
        }
    });
}); });
R.get('/', function (req, res) { return __awaiter(_this, void 0, void 0, function () {
    var result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, vehicle_1.default.getAll()];
            case 1:
                result = _a.sent();
                res.json(result);
                return [2 /*return*/];
        }
    });
}); });
exports.default = R;


/***/ }),

/***/ "./server/settings.js":
/*!****************************!*\
  !*** ./server/settings.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {


module.exports = {
  host: "pg-starwars.postgres.database.azure.com",
  user: "ruben85@pg-starwars",
  password: "*ruben28340*"
}

/***/ }),

/***/ "./server/types/Tables.ts":
/*!********************************!*\
  !*** ./server/types/Tables.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Table;
(function (Table) {
    Table["Actors"] = "actors";
    Table["Film"] = "film";
    Table["People"] = "people";
    Table["Pilot"] = "pilot";
    Table["Planet"] = "planet";
    Table["PlanetsInFilms"] = "planets_in_films";
    Table["Specie"] = "specie";
    Table["Starship"] = "starship";
    Table["Vehicle"] = "vehicle";
    Table["VehiclesInFilms"] = "vehicles_in_films";
    Table["StarshipsInFilms"] = "starships_in_films";
    Table["SpeciesInFilms"] = "species_in_films";
    Table["Race"] = "race";
    Table["StarshipPilot"] = "starship_pilot";
})(Table = exports.Table || (exports.Table = {}));
var ManyToManyTable;
(function (ManyToManyTable) {
    ManyToManyTable["Actors"] = "actors";
    ManyToManyTable["VehiclesInFilms"] = "vehicles_in_films";
    ManyToManyTable["StarshipsInFilms"] = "starships_in_films";
    ManyToManyTable["SpeciesInFilms"] = "species_in_films";
    ManyToManyTable["PlanetsInFilms"] = "planets_in_films";
    ManyToManyTable["Resident"] = "resident";
    ManyToManyTable["Pilot"] = "pilot";
    ManyToManyTable["StarshipPilot"] = "starship_pilot";
})(ManyToManyTable = exports.ManyToManyTable || (exports.ManyToManyTable = {}));
var OneToManyTable;
(function (OneToManyTable) {
    OneToManyTable["Race"] = "race";
})(OneToManyTable = exports.OneToManyTable || (exports.OneToManyTable = {}));
var EntityTable;
(function (EntityTable) {
    EntityTable["Film"] = "film";
    EntityTable["People"] = "people";
    EntityTable["Planet"] = "planet";
    EntityTable["Specie"] = "specie";
    EntityTable["Starship"] = "starship";
    EntityTable["Vehicle"] = "vehicle";
    EntityTable["Test"] = "test";
})(EntityTable = exports.EntityTable || (exports.EntityTable = {}));


/***/ }),

/***/ "./server/types/interfaces/Actors.ts":
/*!*******************************************!*\
  !*** ./server/types/interfaces/Actors.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var IActorsFieldsNames;
(function (IActorsFieldsNames) {
    IActorsFieldsNames["Id"] = "id";
    IActorsFieldsNames["PeopleId"] = "people_id";
    IActorsFieldsNames["FilmId"] = "film_id";
})(IActorsFieldsNames = exports.IActorsFieldsNames || (exports.IActorsFieldsNames = {}));


/***/ }),

/***/ "./server/types/interfaces/Film.ts":
/*!*****************************************!*\
  !*** ./server/types/interfaces/Film.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var FilmFieldsNames;
(function (FilmFieldsNames) {
    FilmFieldsNames["Id"] = "id";
    FilmFieldsNames["Title"] = "title";
    FilmFieldsNames["EpisodeId"] = "episode_id";
    FilmFieldsNames["OpeningCrawl"] = "opening_crawl";
    FilmFieldsNames["Director"] = "director";
    FilmFieldsNames["Producer"] = "producer";
    FilmFieldsNames["ReleaseDate"] = "release_date";
    FilmFieldsNames["Created"] = "created";
    FilmFieldsNames["Edited"] = "edited";
    FilmFieldsNames["Url"] = "url";
})(FilmFieldsNames = exports.FilmFieldsNames || (exports.FilmFieldsNames = {}));


/***/ }),

/***/ "./server/types/interfaces/People.ts":
/*!*******************************************!*\
  !*** ./server/types/interfaces/People.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var IPeopleEntityFields;
(function (IPeopleEntityFields) {
    IPeopleEntityFields["Id"] = "id";
    IPeopleEntityFields["Name"] = "name";
    IPeopleEntityFields["Height"] = "height";
    IPeopleEntityFields["Mass"] = "mass";
    IPeopleEntityFields["HairColor"] = "hair_color";
    IPeopleEntityFields["SkinColor"] = "skin_color";
    IPeopleEntityFields["EyeColor"] = "eye_color";
    IPeopleEntityFields["BirthYear"] = "birth_year";
    IPeopleEntityFields["Gender"] = "gender";
    IPeopleEntityFields["Created"] = "created";
    IPeopleEntityFields["Edited"] = "edited";
    IPeopleEntityFields["Url"] = "url";
})(IPeopleEntityFields = exports.IPeopleEntityFields || (exports.IPeopleEntityFields = {}));


/***/ }),

/***/ "./server/types/interfaces/Pilot.ts":
/*!******************************************!*\
  !*** ./server/types/interfaces/Pilot.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var PilotFieldNames;
(function (PilotFieldNames) {
    PilotFieldNames["Id"] = "id";
    PilotFieldNames["VehicleId"] = "vehicle_id";
    PilotFieldNames["PeopleId"] = "people_id";
})(PilotFieldNames = exports.PilotFieldNames || (exports.PilotFieldNames = {}));


/***/ }),

/***/ "./server/types/interfaces/Races.ts":
/*!******************************************!*\
  !*** ./server/types/interfaces/Races.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var RaceFields;
(function (RaceFields) {
    RaceFields["id"] = "id";
    RaceFields["PeopleId"] = "people_id";
    RaceFields["SpecieId"] = "specie_id";
})(RaceFields = exports.RaceFields || (exports.RaceFields = {}));


/***/ }),

/***/ "./server/types/interfaces/Specie.ts":
/*!*******************************************!*\
  !*** ./server/types/interfaces/Specie.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ISpecieEntityFields;
(function (ISpecieEntityFields) {
    ISpecieEntityFields["Id"] = "id";
    ISpecieEntityFields["Name"] = "name";
    ISpecieEntityFields["Classification"] = "classification";
    ISpecieEntityFields["Designation"] = "designation";
    ISpecieEntityFields["AverageHeight"] = "average_height";
    ISpecieEntityFields["SkinColors"] = "skin_colors";
    ISpecieEntityFields["HairColors"] = "hair_colors";
    ISpecieEntityFields["EyeColors"] = "eye_colors";
    ISpecieEntityFields["AverageLifespan"] = "average_lifespan";
    ISpecieEntityFields["Homeworld"] = "homeworld";
    ISpecieEntityFields["Language"] = "language";
    ISpecieEntityFields["Url"] = "url";
})(ISpecieEntityFields = exports.ISpecieEntityFields || (exports.ISpecieEntityFields = {}));


/***/ }),

/***/ "./server/types/interfaces/SpeciesInFilms.ts":
/*!***************************************************!*\
  !*** ./server/types/interfaces/SpeciesInFilms.ts ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var SpeciesInFilmsFieldsName;
(function (SpeciesInFilmsFieldsName) {
    SpeciesInFilmsFieldsName["Id"] = "id";
    SpeciesInFilmsFieldsName["FilmId"] = "film_id";
    SpeciesInFilmsFieldsName["SpecieId"] = "specie_id";
})(SpeciesInFilmsFieldsName = exports.SpeciesInFilmsFieldsName || (exports.SpeciesInFilmsFieldsName = {}));


/***/ }),

/***/ "./server/types/interfaces/Starship.ts":
/*!*********************************************!*\
  !*** ./server/types/interfaces/Starship.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var StarshipEntityFields;
(function (StarshipEntityFields) {
    StarshipEntityFields["Id"] = "id";
    StarshipEntityFields["Url"] = "url";
    StarshipEntityFields["Name"] = "name";
    StarshipEntityFields["Created"] = "created";
    StarshipEntityFields["Edited"] = "edited";
    StarshipEntityFields["Model"] = "model";
    StarshipEntityFields["Manufacturer"] = "manufacturer";
    StarshipEntityFields["CostInCredits"] = "cost_in_credits";
    StarshipEntityFields["Length"] = "length";
    StarshipEntityFields["MaxAtmospheringSpeed"] = "max_atmosphering_speed";
    StarshipEntityFields["Crew"] = "crew";
    StarshipEntityFields["Passengers"] = "passengers";
    StarshipEntityFields["CargoCapacity"] = "cargo_capacity";
    StarshipEntityFields["Consumables"] = "consumables";
    StarshipEntityFields["HyperdriveRating"] = "hyperdrive_rating";
    StarshipEntityFields["MGLT"] = "MGLT";
    StarshipEntityFields["StarshipClass"] = "starship_class";
})(StarshipEntityFields = exports.StarshipEntityFields || (exports.StarshipEntityFields = {}));


/***/ }),

/***/ "./server/types/interfaces/StarshipPilot.ts":
/*!**************************************************!*\
  !*** ./server/types/interfaces/StarshipPilot.ts ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var StarshipPilotFieldsNames;
(function (StarshipPilotFieldsNames) {
    StarshipPilotFieldsNames["Id"] = "id";
    StarshipPilotFieldsNames["StarshipId"] = "starship_id";
    StarshipPilotFieldsNames["PeopleId"] = "people_id";
})(StarshipPilotFieldsNames = exports.StarshipPilotFieldsNames || (exports.StarshipPilotFieldsNames = {}));


/***/ }),

/***/ "./server/types/interfaces/StarshipsInFilms.ts":
/*!*****************************************************!*\
  !*** ./server/types/interfaces/StarshipsInFilms.ts ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var StarshipsInFilmsFields;
(function (StarshipsInFilmsFields) {
    StarshipsInFilmsFields["Id"] = "id";
    StarshipsInFilmsFields["StarshipId"] = "starship_id";
    StarshipsInFilmsFields["FilmId"] = "film_id";
})(StarshipsInFilmsFields = exports.StarshipsInFilmsFields || (exports.StarshipsInFilmsFields = {}));


/***/ }),

/***/ "./server/types/interfaces/Vehicle.ts":
/*!********************************************!*\
  !*** ./server/types/interfaces/Vehicle.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var VehicleFieldsNames;
(function (VehicleFieldsNames) {
    VehicleFieldsNames["Id"] = "id";
    VehicleFieldsNames["Name"] = "name";
    VehicleFieldsNames["Model"] = "model";
    VehicleFieldsNames["Manufacturer"] = "manufacturer";
    VehicleFieldsNames["CostInCredits"] = "cost_in_credits";
    VehicleFieldsNames["Lenght"] = "length";
    VehicleFieldsNames["MaxAtmospheringSpeed"] = "max_atmosphering_speed";
    VehicleFieldsNames["Crew"] = "crew";
    VehicleFieldsNames["Passengers"] = "passengers";
    VehicleFieldsNames["CargoCapacity"] = "cargo_capacity";
    VehicleFieldsNames["Consumables"] = "consumables";
    VehicleFieldsNames["VehicleClass"] = "vehicle_class";
    VehicleFieldsNames["Url"] = "url";
})(VehicleFieldsNames = exports.VehicleFieldsNames || (exports.VehicleFieldsNames = {}));


/***/ }),

/***/ "./server/types/interfaces/VehiclesInFilms.ts":
/*!****************************************************!*\
  !*** ./server/types/interfaces/VehiclesInFilms.ts ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var VehiclesInFilmsFieldsNames;
(function (VehiclesInFilmsFieldsNames) {
    VehiclesInFilmsFieldsNames["Id"] = "id";
    VehiclesInFilmsFieldsNames["VehicleId"] = "vehicle_id";
    VehiclesInFilmsFieldsNames["FilmId"] = "film_id";
})(VehiclesInFilmsFieldsNames = exports.VehiclesInFilmsFieldsNames || (exports.VehiclesInFilmsFieldsNames = {}));


/***/ }),

/***/ "./server/utils/asyncCompose.ts":
/*!**************************************!*\
  !*** ./server/utils/asyncCompose.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.asyncCompose = function () {
    var fns = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        fns[_i] = arguments[_i];
    }
    return function (data) {
        return fns.reduceRight(function (acc, f, index) {
            return acc
                .then(function (v) { return f(v); })
                .catch(function (e) { return console.log(e); });
        }, data);
    };
};


/***/ }),

/***/ "./server/utils/logger.ts":
/*!********************************!*\
  !*** ./server/utils/logger.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function logger(p, logFn) {
    return function (message) { return p.env.NODE_ENV === 'development' && logFn(message); };
}
exports.default = logger(process, console.log);


/***/ }),

/***/ "./server/utils/memoize.ts":
/*!*********************************!*\
  !*** ./server/utils/memoize.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var logger_1 = __importDefault(__webpack_require__(/*! ./logger */ "./server/utils/logger.ts"));
exports.memoize = function (fn) {
    var state = {};
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var key = args.slice().reduce(function (acc, curr) { return acc.concat(curr); }, '');
        if (Object.keys(state).some(function (k) { return k === key; })) {
            return function () { return state[key]; };
        }
        else {
            state[key] = fn.apply(void 0, args);
            return function () { return state[key]; };
        }
    };
};
exports.asyncMemoize = function (fn) {
    var state = {};
    return function (args) {
        var key = args.slice().reduce(function (acc, curr) { return acc.concat(curr); }, '');
        if (Object.keys(state).some(function (k) { return k === key; })) {
            logger_1.default('Memoize: Data extracted From Cache');
            return function () { return state[key]; };
        }
        else {
            logger_1.default('Memoize: data extracted From DB');
            state[key] = fn(args);
            return function () { return state[key]; };
        }
    };
};


/***/ }),

/***/ "./server/utils/port-getter.ts":
/*!*************************************!*\
  !*** ./server/utils/port-getter.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var getPort = function (p) { return p && p.env && p.env.PORT ? p.env.PORT : 3000; };
exports.default = getPort;


/***/ }),

/***/ "./server/utils/renderer.tsx":
/*!***********************************!*\
  !*** ./server/utils/renderer.tsx ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(__webpack_require__(/*! react */ "react"));
var react_helmet_1 = __webpack_require__(/*! react-helmet */ "react-helmet");
var react_router_dom_1 = __webpack_require__(/*! react-router-dom */ "react-router-dom");
var react_router_config_1 = __webpack_require__(/*! react-router-config */ "react-router-config");
var server_1 = __webpack_require__(/*! react-dom/server */ "react-dom/server");
var routes_1 = __importDefault(__webpack_require__(/*! ../../client/routes */ "./client/routes/index.tsx"));
var port_getter_1 = __importDefault(__webpack_require__(/*! ./port-getter */ "./server/utils/port-getter.ts"));
var renderer = function (req, context) {
    if (context === void 0) { context = {}; }
    var content = server_1.renderToString(React.createElement(react_router_dom_1.StaticRouter, { location: req.path, context: context },
        React.createElement("div", null, react_router_config_1.renderRoutes(routes_1.default))));
    var helmet = react_helmet_1.Helmet.renderStatic();
    return "<html lang=\"en\">\n    <head>\n        <meta charset=\"UTF-8\">\n        " + helmet.meta.toString() + "\n        <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n        <meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\">\n        " + helmet.title.toString() + "\n        <link href=\"https://fonts.googleapis.com/css?family=Lato:400,700\" rel=\"stylesheet\">\n        <link rel=\"stylesheet\" type=\"text/css\" charset=\"UTF-8\" href=\"https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css\" />\n        <link rel=\"stylesheet\" href=\"https://use.fontawesome.com/releases/v5.0.9/css/all.css\" integrity=\"sha384-5SOiIsAziJl6AWe0HWRKTXlfcSHKmYV4RBF18PPJ173Kzn7jzMyFuTtk8JA7QQG1\" crossorigin=\"anonymous\">\n    </head>\n    <body " + helmet.bodyAttributes.toString() + ">\n        <div id=\"root\">" + content + "</div>\n        <script src=\"http://localhost:" + port_getter_1.default(process) + "/public/client_bundle.js\"></script>\n    </body>\n  \n</html>";
};
exports.default = renderer;


/***/ }),

/***/ 0:
/*!*******************************!*\
  !*** multi ./server/index.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./server/index.ts */"./server/index.ts");


/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),

/***/ "helmet":
/*!*************************!*\
  !*** external "helmet" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("helmet");

/***/ }),

/***/ "knex":
/*!***********************!*\
  !*** external "knex" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("knex");

/***/ }),

/***/ "ramda":
/*!************************!*\
  !*** external "ramda" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("ramda");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),

/***/ "react-helmet":
/*!*******************************!*\
  !*** external "react-helmet" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-helmet");

/***/ }),

/***/ "react-router-config":
/*!**************************************!*\
  !*** external "react-router-config" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-router-config");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),

/***/ "regenerator-runtime/runtime":
/*!**********************************************!*\
  !*** external "regenerator-runtime/runtime" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("regenerator-runtime/runtime");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L3BhZ2VzL0Fib3V0LnRzeCIsIndlYnBhY2s6Ly8vLi9jbGllbnQvcGFnZXMvQ29udGFjdC50c3giLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L3BhZ2VzL0hvbWUudHN4Iiwid2VicGFjazovLy8uL2NsaWVudC9yb3V0ZXMvaW5kZXgudHN4Iiwid2VicGFjazovLy8uL3NlcnZlci9EQi9nZXRBbGwudHMiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL0RCL2dldEJ5SWQudHMiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL0RCL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NlcnZlci9jb250cm9sbGVycy9maWxtLnRzIiwid2VicGFjazovLy8uL3NlcnZlci9jb250cm9sbGVycy9wZW9wbGUudHMiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL2NvbnRyb2xsZXJzL3BsYW5ldC50cyIsIndlYnBhY2s6Ly8vLi9zZXJ2ZXIvY29udHJvbGxlcnMvc3BlY2llLnRzIiwid2VicGFjazovLy8uL3NlcnZlci9jb250cm9sbGVycy9zdGFyc2hpcC50cyIsIndlYnBhY2s6Ly8vLi9zZXJ2ZXIvY29udHJvbGxlcnMvdmVoaWNsZS50cyIsIndlYnBhY2s6Ly8vLi9zZXJ2ZXIvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL2tuZXhmaWxlLnRzIiwid2VicGFjazovLy8uL3NlcnZlci9yb3V0ZXMvZmlsbS50cyIsIndlYnBhY2s6Ly8vLi9zZXJ2ZXIvcm91dGVzL3Blb3BsZS50cyIsIndlYnBhY2s6Ly8vLi9zZXJ2ZXIvcm91dGVzL3BsYW5ldHMudHMiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL3JvdXRlcy9zcGVjaWVzLnRzIiwid2VicGFjazovLy8uL3NlcnZlci9yb3V0ZXMvc3RhcnNoaXAudHMiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL3JvdXRlcy92ZWhpY2xlLnRzIiwid2VicGFjazovLy8uL3NlcnZlci9zZXR0aW5ncy5qcyIsIndlYnBhY2s6Ly8vLi9zZXJ2ZXIvdHlwZXMvVGFibGVzLnRzIiwid2VicGFjazovLy8uL3NlcnZlci90eXBlcy9pbnRlcmZhY2VzL0FjdG9ycy50cyIsIndlYnBhY2s6Ly8vLi9zZXJ2ZXIvdHlwZXMvaW50ZXJmYWNlcy9GaWxtLnRzIiwid2VicGFjazovLy8uL3NlcnZlci90eXBlcy9pbnRlcmZhY2VzL1Blb3BsZS50cyIsIndlYnBhY2s6Ly8vLi9zZXJ2ZXIvdHlwZXMvaW50ZXJmYWNlcy9QaWxvdC50cyIsIndlYnBhY2s6Ly8vLi9zZXJ2ZXIvdHlwZXMvaW50ZXJmYWNlcy9SYWNlcy50cyIsIndlYnBhY2s6Ly8vLi9zZXJ2ZXIvdHlwZXMvaW50ZXJmYWNlcy9TcGVjaWUudHMiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL3R5cGVzL2ludGVyZmFjZXMvU3BlY2llc0luRmlsbXMudHMiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL3R5cGVzL2ludGVyZmFjZXMvU3RhcnNoaXAudHMiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL3R5cGVzL2ludGVyZmFjZXMvU3RhcnNoaXBQaWxvdC50cyIsIndlYnBhY2s6Ly8vLi9zZXJ2ZXIvdHlwZXMvaW50ZXJmYWNlcy9TdGFyc2hpcHNJbkZpbG1zLnRzIiwid2VicGFjazovLy8uL3NlcnZlci90eXBlcy9pbnRlcmZhY2VzL1ZlaGljbGUudHMiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL3R5cGVzL2ludGVyZmFjZXMvVmVoaWNsZXNJbkZpbG1zLnRzIiwid2VicGFjazovLy8uL3NlcnZlci91dGlscy9hc3luY0NvbXBvc2UudHMiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL3V0aWxzL2xvZ2dlci50cyIsIndlYnBhY2s6Ly8vLi9zZXJ2ZXIvdXRpbHMvbWVtb2l6ZS50cyIsIndlYnBhY2s6Ly8vLi9zZXJ2ZXIvdXRpbHMvcG9ydC1nZXR0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL3V0aWxzL3JlbmRlcmVyLnRzeCIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJleHByZXNzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiaGVsbWV0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwia25leFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJhbWRhXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1kb20vc2VydmVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtaGVsbWV0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3Qtcm91dGVyLWNvbmZpZ1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXJvdXRlci1kb21cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWdlbmVyYXRvci1ydW50aW1lL3J1bnRpbWVcIiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEZBLG9FQUEr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Q0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQTVDLENBQTRDLENBQUM7QUFHakcsa0JBQWUsT0FBTyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTHZCLG9FQUE4QjtBQUM5Qiw2RUFBaUQ7QUFDakQseUZBQStDO0FBQy9DLGtHQUFrRDtBQUNsRCwrRUFBaUQ7QUFDakQsNEdBQXdDO0FBRXhDLCtHQUFtQztBQUNuQyxJQUFNLFFBQVEsR0FBRyxVQUFDLEdBQVksRUFBRSxPQUFZO0lBQVosc0NBQVk7SUFDMUMsSUFBTSxPQUFPLEdBQVUsdUJBQWMsQ0FDbkMsb0JBQUMsK0JBQVksSUFBQyxRQUFRLEVBQUUsR0FBRyxDQUFDLElBQUksRUFBRSxPQUFPLEVBQUUsT0FBTztRQUNoRCxpQ0FBTSxrQ0FBWSxDQUFDLGdCQUFNLENBQUMsQ0FBTyxDQUNwQixDQUNoQjtJQUNELElBQU0sTUFBTSxHQUFjLHFCQUFNLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDaEQsT0FBTywrRUFHQyxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSx5S0FHdEIsTUFBTSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsa2ZBS3JCLE1BQU0sQ0FBQyxjQUFjLENBQUMsUUFBUSxFQUFFLG9DQUNuQixPQUFPLHVEQUNRLHFCQUFPLENBQUMsT0FBTyxDQUFDLG1FQUdoRCxDQUFDO0FBQ1QsQ0FBQztBQUdELGtCQUFlLFFBQVEsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkN4QixvQzs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSxpQzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSw2Qzs7Ozs7Ozs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSxnRDs7Ozs7Ozs7Ozs7QUNBQSw2Qzs7Ozs7Ozs7Ozs7QUNBQSx3RCIsImZpbGUiOiJzZXJ2ZXJfYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvYnVpbGRcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuXHJcbmNvbnN0IEFib3V0ID0gKHByb3BzOmFueSkgPT4oXHJcbiAgICA8ZGl2PlxyXG4gICAgICBBYm91dCB1cyFcclxuICAgIDwvZGl2PlxyXG4pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQWJvdXQ7XHJcblxyXG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5cclxuY29uc3QgQ29udGFjdCA9IChwcm9wczphbnkpID0+KFxyXG4gICAgPGRpdj5cclxuICAgICAgQ29udGFjdFxyXG4gICAgPC9kaXY+XHJcbik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb250YWN0O1xyXG5cclxuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuY29uc3QgSG9tZSA9IChwcm9wczphbnkpPT4oXHJcbiAgICA8ZGl2PlxyXG4gICAgICAgIFdlbGNvbWUgVG8gUmVhY3QgU1NSIVxyXG4gICAgPC9kaXY+XHJcbik7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZTsiLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IFJvdXRlQ29uZmlnIH0gZnJvbSAncmVhY3Qtcm91dGVyLWNvbmZpZyc7XHJcbmltcG9ydCBIb21lIGZyb20gJy4uL3BhZ2VzL0hvbWUnO1xyXG5pbXBvcnQgQWJvdXQgZnJvbSAnLi4vcGFnZXMvQWJvdXQnO1xyXG5pbXBvcnQgQ29udGFjdCBmcm9tICcuLi9wYWdlcy9Db250YWN0JztcclxuXHJcbmNvbnN0IHJvdXRlczpSb3V0ZUNvbmZpZ1tdID0gW1xyXG4gICAge1xyXG4gICAgICAgIHBhdGg6ICcvaG9tZScsXHJcbiAgICAgICAgY29tcG9uZW50OiBIb21lXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHBhdGg6ICcvYWJvdXQnLFxyXG4gICAgICAgIGNvbXBvbmVudDogQWJvdXRcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgcGF0aDogJy9jb250YWN0JyxcclxuICAgICAgICBjb21wb25lbnQ6IENvbnRhY3RcclxuICAgIH1cclxuXVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJvdXRlcztcclxuIiwiaW1wb3J0IHsgRW50aXR5VGFibGUgfSBmcm9tIFwiLi4vdHlwZXMvVGFibGVzXCI7XHJcbmltcG9ydCB7IGtuZXggfSBmcm9tIFwiLlwiO1xyXG5pbXBvcnQgeyBhc3luY0NvbXBvc2UgfSBmcm9tIFwiLi4vdXRpbHMvYXN5bmNDb21wb3NlXCI7XHJcblxyXG50eXBlIEdldEJ5SWRIYW5kbGVyID0gKGE6IGFueSkgPT4gKCkgPT4gUHJvbWlzZTxhbnk+XHJcblxyXG5jb25zdCBnZXRJZHMgPSAodGFibGVOYW1lOiBFbnRpdHlUYWJsZSk6IFByb21pc2U8eyBpZDogc3RyaW5nIH1bXT4gPT4ga25leC5zZWxlY3QoJ2lkJykuZnJvbSh0YWJsZU5hbWUpO1xyXG5cclxuY29uc3QgX2dldEFsbCA9IChnZXRCeUlkSGFuZGxlcjogR2V0QnlJZEhhbmRsZXIpID0+XHJcbiAgKGlkczogeyBpZDogc3RyaW5nIH1bXSk6IFByb21pc2U8YW55W10+W10gPT4gaWRzLm1hcChvID0+IGdldEJ5SWRIYW5kbGVyKG8uaWQpKCkpXHJcblxyXG5jb25zdCBtYXBQcm9taXNlc1RvUmVzdWx0ID0gKHByb21pc2VzOiBQcm9taXNlPGFueVtdPltdKTogUHJvbWlzZTxhbnlbXT4gPT4gUHJvbWlzZS5hbGwocHJvbWlzZXMpO1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBnZXRBbGwgPSAodGFibGU6IEVudGl0eVRhYmxlLCBjb25maWd1cmVkR2V0QnlJZEhhbmRsZXI6IEdldEJ5SWRIYW5kbGVyKSA9PiAoKSA9PlxyXG4gIGFzeW5jQ29tcG9zZShcclxuICAgIG1hcFByb21pc2VzVG9SZXN1bHQsXHJcbiAgICBfZ2V0QWxsKGNvbmZpZ3VyZWRHZXRCeUlkSGFuZGxlciksXHJcbiAgICBnZXRJZHNcclxuICApKFByb21pc2UucmVzb2x2ZSh0YWJsZSkpXHJcblxyXG5cclxuIiwiaW1wb3J0IHsgTWFueVRvTWFueVRhYmxlLCBFbnRpdHlUYWJsZSwgT25lVG9NYW55VGFibGUgfSBmcm9tICcuLi90eXBlcy9UYWJsZXMnO1xyXG5pbXBvcnQgeyBrbmV4IH0gZnJvbSAnLi9pbmRleCc7XHJcbmltcG9ydCB7IElQb3N0Z3Jlc0pzb25CdWlsZE9iamVjdCB9IGZyb20gJy4uL3R5cGVzL0RCJztcclxuaW1wb3J0IHsgY29tcG9zZSB9IGZyb20gJ3JhbWRhJztcclxuaW1wb3J0IHsgYXN5bmNDb21wb3NlIH0gZnJvbSAnLi4vdXRpbHMvYXN5bmNDb21wb3NlJztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSU1NRmllbGRzRGF0YSBleHRlbmRzIElGaWVsZHNEYXRhLCBJU2hvd0ZpZWxkcyB7IH07XHJcbmV4cG9ydCBpbnRlcmZhY2UgSU1NRmllbGRzRGF0YVdpdGhGaWVsZHNUcmFuc2Zvcm1lZCBleHRlbmRzIElGaWVsZHNEYXRhLCBJU2hvd0ZpZWxkc1RyYW5zZm9ybWVkIHsgfTtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVNob3dGaWVsZHMge1xyXG4gIHNob3dGaWVsZHM6IHN0cmluZ1tdXHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBJU2hvd0ZpZWxkc1RyYW5zZm9ybWVkIHtcclxuICBzaG93RmllbGRzOiBzdHJpbmdcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJRmllbGRzRGF0YSB7XHJcbiAgdGFibGVOYW1lOiBFbnRpdHlUYWJsZSxcclxuICBmaWVsZE5hbWVJblJlc3BvbnNlOiBzdHJpbmcsXHJcbiAgbWFueVRvTWFueVRhYmxlTmFtZTogTWFueVRvTWFueVRhYmxlIHwgT25lVG9NYW55VGFibGUsXHJcbiAgaW50ZXJzZWN0RW50aXR5T246IHN0cmluZyxcclxuICB3aGVyZTogc3RyaW5nXHJcbn1cclxuXHJcblxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJRmllbGRXaXRoUXVlcnkge1xyXG4gIGZpZWxkTmFtZTogc3RyaW5nLFxyXG4gIHF1ZXJ5OiBzdHJpbmdcclxufVxyXG5cclxuXHJcblxyXG5cclxuaW50ZXJmYWNlIElPbmVUb01hbnkge1xyXG4gIHRhYmxlTmFtZTogRW50aXR5VGFibGUsXHJcbiAgc2hvd0ZpZWxkczogc3RyaW5nW10sXHJcbiAgZmllbGROYW1lSW5SZXNwb25zZTogc3RyaW5nLFxyXG4gIHdoZXJlOiBzdHJpbmdcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEJ5SWRRdWVyeTxULCBCPihcclxuICB0YWJsZU5hbWU6IFQsXHJcbiAgZm9yZWlnbkZpZWxkcz86IElNTUZpZWxkc0RhdGFbXSB8IHVuZGVmaW5lZCxcclxuKSB7XHJcbiAgcmV0dXJuIGFzeW5jIChpZDogc3RyaW5nKSA9PlxyXG4gICAgYXdhaXQgYXN5bmNDb21wb3NlKFxyXG4gICAgICBtYXBEQlJlc3BvbnNlPEI+KGZvcmVpZ25GaWVsZHMpLFxyXG5cclxuICAgICAgKHJlczogSVBvc3RncmVzSnNvbkJ1aWxkT2JqZWN0KSA9PiByZXMucm93c1swXS5qc29uX2J1aWxkX29iamVjdCxcclxuXHJcbiAgICAgIGZldGNoRW50aXR5V2l0aE1hbnlUb01hbnlGaWVsZHM8VD4odGFibGVOYW1lLCBpZCksXHJcblxyXG4gICAgICBnZXRNTUZpZWxkc1F1ZXJ5RnJvbVxyXG5cclxuICAgICkoUHJvbWlzZS5yZXNvbHZlKGZvcmVpZ25GaWVsZHMpKVxyXG5cclxufVxyXG5cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gbWFwREJSZXNwb25zZTxUPihtYW55VG9NYW55RmllbGRzOiBJTU1GaWVsZHNEYXRhW10gfCB1bmRlZmluZWQpe1xyXG4gIHJldHVybiAocmVzdWx0OiBhbnkpID0+XHJcbiAgICBPYmplY3Qua2V5cyhyZXN1bHQpXHJcbiAgICAgIC5yZWR1Y2UoKGFjYzogYW55LCBjdXJyOiBzdHJpbmcsIGluZGV4OiBudW1iZXIpOiBUID0+XHJcbiAgICAgICAgaW5kZXggPT09IDBcclxuICAgICAgICAgID8geyAuLi5yZXN1bHRbY3Vycl0gfVxyXG4gICAgICAgICAgOiB7XHJcbiAgICAgICAgICAgIC4uLmFjYywgW1xyXG4gICAgICAgICAgICAgIG1hbnlUb01hbnlGaWVsZHMgIT09IHVuZGVmaW5lZFxyXG4gICAgICAgICAgICAgICAgPyBtYW55VG9NYW55RmllbGRzW2luZGV4IC0gMV0uZmllbGROYW1lSW5SZXNwb25zZSA6IGN1cnJcclxuICAgICAgICAgICAgXTogcmVzdWx0W2N1cnJdXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgLCB7fSlcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIGZldGNoRW50aXR5V2l0aE1hbnlUb01hbnlGaWVsZHM8VD4odGFibGVOYW1lOiBULCBpZDogc3RyaW5nKSB7XHJcbiAgcmV0dXJuIChnZXRNTUZpZWxkQnlJZDogKHc6c3RyaW5nKT0+SUZpZWxkV2l0aFF1ZXJ5KSA9PlxyXG4gICAga25leFxyXG4gICAgICAucmF3KFxyXG4gICAgICAgIGAnJHt0YWJsZU5hbWV9JywgKCBTRUxFQ1QgdG9fanNvbihyb3cpXHJcbiAgICAgICBGUk9NICggU0VMRUNUICogRlJPTSAke3RhYmxlTmFtZX0gV0hFUkUgaWQgPSA6aWQgKSBcclxuICAgICAgIHJvdyBcclxuICAgICAgICksXHJcbiAgICR7Z2V0TU1GaWVsZEJ5SWQoaWQpfSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gYCxcclxuICAgICAgICB7IGlkIH1cclxuICAgICAgKVxyXG4gICAgICAud3JhcCgnU0VMRUNUIGpzb25fYnVpbGRfb2JqZWN0KCcsICcpJyk7XHJcbn1cclxuXHJcblxyXG5jb25zdCBtYW55VG9NYW55UXVlcnk6IElNTVF1ZXJ5RnVuY3Rpb24gPSAoZmllbGREYXRhKSA9PiAod2hlcmUpID0+ICh7XHJcbiAgZmllbGROYW1lOiBmaWVsZERhdGEudGFibGVOYW1lLFxyXG4gIHF1ZXJ5OiBgXHJcbiAgKCBTRUxFQ1QganNvbl9hZ2cocmVzdWx0KSBcclxuICAgIEZST00gKCBTRUxFQ1QgJHtmaWVsZERhdGEuc2hvd0ZpZWxkc30gRlJPTSAke2ZpZWxkRGF0YS50YWJsZU5hbWV9IFxyXG4gICAgSU5ORVIgSk9JTiAkeyBmaWVsZERhdGEubWFueVRvTWFueVRhYmxlTmFtZX0gT04gKCAke2ZpZWxkRGF0YS50YWJsZU5hbWV9LmlkID0gJHtmaWVsZERhdGEubWFueVRvTWFueVRhYmxlTmFtZX0uJHtmaWVsZERhdGEuaW50ZXJzZWN0RW50aXR5T259KVxyXG4gICAgV0hFUkUgJHtmaWVsZERhdGEubWFueVRvTWFueVRhYmxlTmFtZX0uJHtmaWVsZERhdGEud2hlcmV9ID0gJyR7d2hlcmV9JykgXHJcbiAgICByZXN1bHQgXHJcbiAgKVxyXG5gfSlcclxudHlwZSBJQ29uY2F0RmllbGRzRnVuY3Rpb24gPSAoZmllbGRzOiBJTU1GaWVsZHNEYXRhKSA9PiBJTU1GaWVsZHNEYXRhV2l0aEZpZWxkc1RyYW5zZm9ybWVkO1xyXG50eXBlIElNTVF1ZXJ5RnVuY3Rpb24gPSAoZjogSU1NRmllbGRzRGF0YVdpdGhGaWVsZHNUcmFuc2Zvcm1lZCkgPT4gKHc6IHN0cmluZykgPT4gSUZpZWxkV2l0aFF1ZXJ5XHJcblxyXG5jb25zdCBjb25jYXRGaWVsZHNXaXRoVGFibGVOYW1lOiBJQ29uY2F0RmllbGRzRnVuY3Rpb24gPSAoZmllbGQpID0+ICh7XHJcbiAgLi4uZmllbGQsXHJcbiAgc2hvd0ZpZWxkczogZmllbGQuc2hvd0ZpZWxkc1xyXG4gICAgLnJlZHVjZSgoYWNjLCBjdXJyLCBpbmRleCkgPT5cclxuICAgICAgaW5kZXggPD0gMFxyXG4gICAgICAgID8gYCR7ZmllbGQudGFibGVOYW1lfS4ke2N1cnJ9YFxyXG4gICAgICAgIDogYWNjICsgYCwgJHtmaWVsZC50YWJsZU5hbWV9LiR7Y3Vycn1gXHJcblxyXG4gICAgICAsIFwiXCIpXHJcbn0pXHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IGJ1aWxkTU1GUXVlcnk6ICgoZjogSU1NRmllbGRzRGF0YSkgPT4gKHc6IHN0cmluZykgPT4gSUZpZWxkV2l0aFF1ZXJ5KSA9XHJcbiAgY29tcG9zZTxJTU1GaWVsZHNEYXRhLCBJTU1GaWVsZHNEYXRhV2l0aEZpZWxkc1RyYW5zZm9ybWVkLCAodzogc3RyaW5nKSA9PiBJRmllbGRXaXRoUXVlcnk+KFxyXG4gICAgbWFueVRvTWFueVF1ZXJ5LFxyXG4gICAgY29uY2F0RmllbGRzV2l0aFRhYmxlTmFtZVxyXG4gICk7XHJcblxyXG5jb25zdCBnZXRNTUZpZWxkc1F1ZXJ5RnJvbSA9IChmaWVsZHM6IElNTUZpZWxkc0RhdGFbXSB8IHVuZGVmaW5lZCkgPT4gKGlkOiBzdHJpbmcpID0+XHJcbiAgZmllbGRzICE9PSB1bmRlZmluZWRcclxuICAgID8gZmllbGRzXHJcbiAgICAgIC5tYXAoYnVpbGRNTUZRdWVyeSlcclxuICAgICAgLnJlZHVjZSgoYWNjOiBzdHJpbmcsIGN1cnI6ICgoaWQ6IHN0cmluZykgPT4gSUZpZWxkV2l0aFF1ZXJ5KSkgPT5cclxuICAgICAgICBhY2MgIT09IFwiXCJcclxuICAgICAgICAgID8gKGAke2FjY30sICcke2N1cnIoaWQpLmZpZWxkTmFtZX0nLCAke2N1cnIoaWQpLnF1ZXJ5fWApXHJcbiAgICAgICAgICA6IChgJyR7Y3VycihpZCkuZmllbGROYW1lfScsICR7Y3VycihpZCkucXVlcnl9YClcclxuICAgICAgICAsIFwiXCIpXHJcbiAgICA6IFwiXCI7IiwiaW1wb3J0IEtuZXggZnJvbSAna25leCc7XHJcblxyXG5leHBvcnQgY29uc3Qga25leDogS25leCA9IHJlcXVpcmUoJ2tuZXgnKShyZXF1aXJlKCcuLi9rbmV4ZmlsZScpLmRldmVsb3BtZW50KTsiLCJpbXBvcnQgeyBhc3luY01lbW9pemUgYXMgTWVtIH0gZnJvbSAnLi4vdXRpbHMvbWVtb2l6ZSc7XHJcbmltcG9ydCB7IEVudGl0eVRhYmxlLCBNYW55VG9NYW55VGFibGUsIFRhYmxlIH0gZnJvbSAnLi4vdHlwZXMvVGFibGVzJztcclxuaW1wb3J0IHsgSUZpbG1SZXNwb25zZSB9IGZyb20gJy4uL3R5cGVzL2ludGVyZmFjZXMvRmlsbSc7XHJcbmltcG9ydCB7IGdldEJ5SWRRdWVyeSB9IGZyb20gJy4uL0RCL2dldEJ5SWQnO1xyXG5pbXBvcnQgeyBWZWhpY2xlRmllbGRzTmFtZXMgfSBmcm9tICcuLi90eXBlcy9pbnRlcmZhY2VzL1ZlaGljbGUnO1xyXG5pbXBvcnQgeyBWZWhpY2xlc0luRmlsbXNGaWVsZHNOYW1lcyB9IGZyb20gJy4uL3R5cGVzL2ludGVyZmFjZXMvVmVoaWNsZXNJbkZpbG1zJztcclxuaW1wb3J0IHsgSVBlb3BsZUVudGl0eUZpZWxkcyB9IGZyb20gJy4uL3R5cGVzL2ludGVyZmFjZXMvUGVvcGxlJztcclxuaW1wb3J0IHsgSUFjdG9yc0ZpZWxkc05hbWVzIH0gZnJvbSAnLi4vdHlwZXMvaW50ZXJmYWNlcy9BY3RvcnMnO1xyXG5pbXBvcnQgeyBnZXRBbGwgfSBmcm9tICcuLi9EQi9nZXRBbGwnO1xyXG5leHBvcnQgZGVmYXVsdCgoKSA9PiB7XHJcbiAgY29uc3QgX2dldEJ5SWQgPSBNZW0oZ2V0QnlJZFF1ZXJ5PEVudGl0eVRhYmxlLkZpbG0sIElGaWxtUmVzcG9uc2U+KFxyXG4gICAgRW50aXR5VGFibGUuRmlsbSxcclxuICAgIFtcclxuICAgICAge1xyXG4gICAgICAgIHRhYmxlTmFtZTogRW50aXR5VGFibGUuVmVoaWNsZSxcclxuICAgICAgICBzaG93RmllbGRzOiBbVmVoaWNsZUZpZWxkc05hbWVzLklkLCBWZWhpY2xlRmllbGRzTmFtZXMuTmFtZV0sXHJcbiAgICAgICAgZmllbGROYW1lSW5SZXNwb25zZTogJ3ZlaGljbGVzJyxcclxuICAgICAgICBtYW55VG9NYW55VGFibGVOYW1lOiBNYW55VG9NYW55VGFibGUuVmVoaWNsZXNJbkZpbG1zLFxyXG4gICAgICAgIGludGVyc2VjdEVudGl0eU9uOiBWZWhpY2xlc0luRmlsbXNGaWVsZHNOYW1lcy5WZWhpY2xlSWQsXHJcbiAgICAgICAgd2hlcmU6IFZlaGljbGVzSW5GaWxtc0ZpZWxkc05hbWVzLlZlaGljbGVJZFxyXG5cclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHRhYmxlTmFtZTogRW50aXR5VGFibGUuUGVvcGxlLFxyXG4gICAgICAgIHNob3dGaWVsZHM6IFtJUGVvcGxlRW50aXR5RmllbGRzLklkLCBJUGVvcGxlRW50aXR5RmllbGRzLk5hbWVdLFxyXG4gICAgICAgIGZpZWxkTmFtZUluUmVzcG9uc2U6ICdhY3RvcnMnLFxyXG4gICAgICAgIG1hbnlUb01hbnlUYWJsZU5hbWU6IE1hbnlUb01hbnlUYWJsZS5BY3RvcnMsXHJcbiAgICAgICAgaW50ZXJzZWN0RW50aXR5T246IElBY3RvcnNGaWVsZHNOYW1lcy5QZW9wbGVJZCxcclxuICAgICAgICB3aGVyZTogSUFjdG9yc0ZpZWxkc05hbWVzLkZpbG1JZFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgdGFibGVOYW1lOiBFbnRpdHlUYWJsZS5TdGFyc2hpcCxcclxuICAgICAgICBzaG93RmllbGRzOiBbJ2lkJywgJ25hbWUnXSxcclxuICAgICAgICBmaWVsZE5hbWVJblJlc3BvbnNlOiAndmVoaWNsZXMnLFxyXG4gICAgICAgIG1hbnlUb01hbnlUYWJsZU5hbWU6IE1hbnlUb01hbnlUYWJsZS5TdGFyc2hpcHNJbkZpbG1zLFxyXG4gICAgICAgIGludGVyc2VjdEVudGl0eU9uOiAnc3RhcnNoaXBfaWQnLFxyXG4gICAgICAgIHdoZXJlOiAnZmlsbV9pZCdcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHRhYmxlTmFtZTogRW50aXR5VGFibGUuUGxhbmV0LFxyXG4gICAgICAgIHNob3dGaWVsZHM6IFsnaWQnLCAnbmFtZSddLFxyXG4gICAgICAgIGZpZWxkTmFtZUluUmVzcG9uc2U6ICdwbGFuZXRzJyxcclxuICAgICAgICBtYW55VG9NYW55VGFibGVOYW1lOiBNYW55VG9NYW55VGFibGUuUGxhbmV0c0luRmlsbXMsXHJcbiAgICAgICAgaW50ZXJzZWN0RW50aXR5T246ICdwbGFuZXRfaWQnLFxyXG4gICAgICAgIHdoZXJlOiAnZmlsbV9pZCdcclxuICAgICAgfVxyXG4gICAgXSxcclxuICApKVxyXG4gIHJldHVybiB7XHJcbiAgICBnZXRCeUlkOiBfZ2V0QnlJZCxcclxuICAgIGdldEFsbDogZ2V0QWxsKEVudGl0eVRhYmxlLkZpbG0sIF9nZXRCeUlkKVxyXG4gIH1cclxufSkoKVxyXG5cclxuXHJcbiIsImltcG9ydCB7IGFzeW5jTWVtb2l6ZSBhcyBNZW0gfSBmcm9tIFwiLi4vdXRpbHMvbWVtb2l6ZVwiXHJcbmltcG9ydCB7IGdldEJ5SWRRdWVyeSB9IGZyb20gXCIuLi9EQi9nZXRCeUlkXCJcclxuaW1wb3J0IHsgRW50aXR5VGFibGUsIE1hbnlUb01hbnlUYWJsZSwgT25lVG9NYW55VGFibGUgfSBmcm9tIFwiLi4vdHlwZXMvVGFibGVzXCJcclxuaW1wb3J0IHsgSUZpbG1SZXNwb25zZSwgRmlsbUZpZWxkc05hbWVzIH0gZnJvbSBcIi4uL3R5cGVzL2ludGVyZmFjZXMvRmlsbVwiXHJcbmltcG9ydCB7IElBY3RvcnNGaWVsZHNOYW1lcyB9IGZyb20gXCIuLi90eXBlcy9pbnRlcmZhY2VzL0FjdG9yc1wiXHJcbmltcG9ydCB7IElTcGVjaWVFbnRpdHlGaWVsZHMgfSBmcm9tIFwiLi4vdHlwZXMvaW50ZXJmYWNlcy9TcGVjaWVcIlxyXG5pbXBvcnQgeyBSYWNlRmllbGRzIH0gZnJvbSBcIi4uL3R5cGVzL2ludGVyZmFjZXMvUmFjZXNcIlxyXG5pbXBvcnQgeyBWZWhpY2xlRmllbGRzTmFtZXMgfSBmcm9tIFwiLi4vdHlwZXMvaW50ZXJmYWNlcy9WZWhpY2xlXCJcclxuaW1wb3J0IHsgUGlsb3RGaWVsZE5hbWVzIH0gZnJvbSBcIi4uL3R5cGVzL2ludGVyZmFjZXMvUGlsb3RcIlxyXG5pbXBvcnQgeyBTdGFyc2hpcEVudGl0eUZpZWxkcyB9IGZyb20gXCIuLi90eXBlcy9pbnRlcmZhY2VzL1N0YXJzaGlwXCJcclxuaW1wb3J0IHsgU3RhcnNoaXBQaWxvdEZpZWxkc05hbWVzIH0gZnJvbSBcIi4uL3R5cGVzL2ludGVyZmFjZXMvU3RhcnNoaXBQaWxvdFwiXHJcbmltcG9ydCB7IGdldEFsbCB9IGZyb20gXCIuLi9EQi9nZXRBbGxcIlxyXG5cclxuZXhwb3J0IGRlZmF1bHQoKCkgPT4ge1xyXG4gIGNvbnN0IF9nZXRCeUlkID0gTWVtKGdldEJ5SWRRdWVyeTxFbnRpdHlUYWJsZS5QZW9wbGUsIElGaWxtUmVzcG9uc2U+KEVudGl0eVRhYmxlLlBlb3BsZSxcclxuICAgIFtcclxuICAgICAge1xyXG4gICAgICAgIHRhYmxlTmFtZTogRW50aXR5VGFibGUuRmlsbSxcclxuICAgICAgICBzaG93RmllbGRzOiBbRmlsbUZpZWxkc05hbWVzLklkLCBGaWxtRmllbGRzTmFtZXMuVGl0bGVdLFxyXG4gICAgICAgIGZpZWxkTmFtZUluUmVzcG9uc2U6ICdmaWxtcycsXHJcbiAgICAgICAgbWFueVRvTWFueVRhYmxlTmFtZTogTWFueVRvTWFueVRhYmxlLkFjdG9ycyxcclxuICAgICAgICBpbnRlcnNlY3RFbnRpdHlPbjogSUFjdG9yc0ZpZWxkc05hbWVzLkZpbG1JZCxcclxuICAgICAgICB3aGVyZTogSUFjdG9yc0ZpZWxkc05hbWVzLlBlb3BsZUlkXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICB0YWJsZU5hbWU6IEVudGl0eVRhYmxlLlNwZWNpZSxcclxuICAgICAgICBzaG93RmllbGRzOiBbSVNwZWNpZUVudGl0eUZpZWxkcy5JZCwgSVNwZWNpZUVudGl0eUZpZWxkcy5OYW1lXSxcclxuICAgICAgICBmaWVsZE5hbWVJblJlc3BvbnNlOiAnc3BlY2llcycsXHJcbiAgICAgICAgbWFueVRvTWFueVRhYmxlTmFtZTogT25lVG9NYW55VGFibGUuUmFjZSxcclxuICAgICAgICBpbnRlcnNlY3RFbnRpdHlPbjogUmFjZUZpZWxkcy5TcGVjaWVJZCxcclxuICAgICAgICB3aGVyZTogUmFjZUZpZWxkcy5QZW9wbGVJZFxyXG5cclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHRhYmxlTmFtZTogRW50aXR5VGFibGUuVmVoaWNsZSxcclxuICAgICAgICBzaG93RmllbGRzOiBbVmVoaWNsZUZpZWxkc05hbWVzLklkLCBWZWhpY2xlRmllbGRzTmFtZXMuTmFtZV0sXHJcbiAgICAgICAgZmllbGROYW1lSW5SZXNwb25zZTogJ3ZlaGljbGVzJyxcclxuICAgICAgICBtYW55VG9NYW55VGFibGVOYW1lOiBNYW55VG9NYW55VGFibGUuUGlsb3QsXHJcbiAgICAgICAgaW50ZXJzZWN0RW50aXR5T246IFBpbG90RmllbGROYW1lcy5WZWhpY2xlSWQsXHJcbiAgICAgICAgd2hlcmU6IFBpbG90RmllbGROYW1lcy5QZW9wbGVJZFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgdGFibGVOYW1lOiBFbnRpdHlUYWJsZS5TdGFyc2hpcCxcclxuICAgICAgICBzaG93RmllbGRzOiBbU3RhcnNoaXBFbnRpdHlGaWVsZHMuSWQsIFN0YXJzaGlwRW50aXR5RmllbGRzLk5hbWVdLFxyXG4gICAgICAgIGZpZWxkTmFtZUluUmVzcG9uc2U6ICdzdGFyc2hpcHMnLFxyXG4gICAgICAgIG1hbnlUb01hbnlUYWJsZU5hbWU6IE1hbnlUb01hbnlUYWJsZS5TdGFyc2hpcFBpbG90LFxyXG4gICAgICAgIGludGVyc2VjdEVudGl0eU9uOiBTdGFyc2hpcFBpbG90RmllbGRzTmFtZXMuU3RhcnNoaXBJZCxcclxuICAgICAgICB3aGVyZTogU3RhcnNoaXBQaWxvdEZpZWxkc05hbWVzLlBlb3BsZUlkXHJcbiAgICAgIH1cclxuICAgIF0pKVxyXG5cclxuICByZXR1cm4ge1xyXG4gICAgZ2V0QnlJZDogX2dldEJ5SWQsXHJcbiAgICBnZXRBbGw6IGdldEFsbChFbnRpdHlUYWJsZS5QZW9wbGUsIF9nZXRCeUlkKVxyXG4gIH1cclxufSkoKSIsImltcG9ydCB7IElQbGFuZXRSZXNwb25zZSB9IGZyb20gXCIuLi90eXBlcy9pbnRlcmZhY2VzL1BsYW5ldFwiO1xyXG5pbXBvcnQgeyBhc3luY01lbW9pemUgYXMgTWVtfSBmcm9tICcuLi91dGlscy9tZW1vaXplJztcclxuaW1wb3J0IHsgZ2V0QnlJZFF1ZXJ5IH0gZnJvbSBcIi4uL0RCL2dldEJ5SWRcIjtcclxuaW1wb3J0IHsgRW50aXR5VGFibGUsIFRhYmxlLCBNYW55VG9NYW55VGFibGUgfSBmcm9tIFwiLi4vdHlwZXMvVGFibGVzXCI7XHJcbmltcG9ydCB7IGdldEFsbCB9IGZyb20gXCIuLi9EQi9nZXRBbGxcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0KCgpPT57XHJcbiAgY29uc3QgX2dldEJ5SWQgPSBNZW0oZ2V0QnlJZFF1ZXJ5PEVudGl0eVRhYmxlLlBsYW5ldCwgSVBsYW5ldFJlc3BvbnNlPihcclxuICAgIEVudGl0eVRhYmxlLlBsYW5ldCxcclxuICAgIFtcclxuICAgICAge1xyXG4gICAgICAgIHRhYmxlTmFtZTogRW50aXR5VGFibGUuUGVvcGxlLFxyXG4gICAgICAgIHNob3dGaWVsZHM6IFsnaWQnLCAnbmFtZSddLFxyXG4gICAgICAgIGZpZWxkTmFtZUluUmVzcG9uc2U6ICdyZXNpZGVudHMnLFxyXG4gICAgICAgIG1hbnlUb01hbnlUYWJsZU5hbWU6IE1hbnlUb01hbnlUYWJsZS5SZXNpZGVudCxcclxuICAgICAgICBpbnRlcnNlY3RFbnRpdHlPbjogJ3Blb3BsZV9pZCcsXHJcbiAgICAgICAgd2hlcmU6ICdwbGFuZXRfaWQnXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICB0YWJsZU5hbWU6IEVudGl0eVRhYmxlLkZpbG0sXHJcbiAgICAgICAgc2hvd0ZpZWxkczogWydpZCcsICd0aXRsZSddLFxyXG4gICAgICAgIGZpZWxkTmFtZUluUmVzcG9uc2U6ICdmaWxtcycsXHJcbiAgICAgICAgbWFueVRvTWFueVRhYmxlTmFtZTogTWFueVRvTWFueVRhYmxlLlBsYW5ldHNJbkZpbG1zLFxyXG4gICAgICAgIGludGVyc2VjdEVudGl0eU9uOiAnZmlsbV9pZCcsXHJcbiAgICAgICAgd2hlcmU6ICdwbGFuZXRfaWQnXHJcbiAgICAgIH1cclxuICAgIF1cclxuICApKVxyXG4gIHJldHVybntcclxuICAgIGdldEJ5SWQ6IF9nZXRCeUlkLFxyXG4gICAgZ2V0QWxsOiBnZXRBbGwoRW50aXR5VGFibGUuUGxhbmV0LCBfZ2V0QnlJZClcclxuICB9XHJcbn0pKClcclxuXHJcbiIsImltcG9ydCB7IGdldEJ5SWRRdWVyeSB9IGZyb20gXCIuLi9EQi9nZXRCeUlkXCI7XHJcbmltcG9ydCB7IGFzeW5jTWVtb2l6ZSBhcyBNZW0gfSBmcm9tIFwiLi4vdXRpbHMvbWVtb2l6ZVwiO1xyXG5pbXBvcnQgeyBJU3BlY2llUmVzcG9uc2UgfSBmcm9tIFwiLi4vdHlwZXMvaW50ZXJmYWNlcy9TcGVjaWVcIjtcclxuaW1wb3J0IHsgRW50aXR5VGFibGUsIE1hbnlUb01hbnlUYWJsZSwgT25lVG9NYW55VGFibGUgfSBmcm9tIFwiLi4vdHlwZXMvVGFibGVzXCI7XHJcbmltcG9ydCB7IElQZW9wbGVFbnRpdHlGaWVsZHMgfSBmcm9tIFwiLi4vdHlwZXMvaW50ZXJmYWNlcy9QZW9wbGVcIjtcclxuaW1wb3J0IHsgU3BlY2llc0luRmlsbXNGaWVsZHNOYW1lIH0gZnJvbSAnLi4vdHlwZXMvaW50ZXJmYWNlcy9TcGVjaWVzSW5GaWxtcyc7XHJcbmltcG9ydCB7IFJhY2VGaWVsZHMgfSBmcm9tIFwiLi4vdHlwZXMvaW50ZXJmYWNlcy9SYWNlc1wiO1xyXG5pbXBvcnQgeyBGaWxtRmllbGRzTmFtZXMgfSBmcm9tIFwiLi4vdHlwZXMvaW50ZXJmYWNlcy9GaWxtXCI7XHJcbmltcG9ydCB7IGdldEFsbCB9IGZyb20gXCIuLi9EQi9nZXRBbGxcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0ICgoKSA9PiB7XHJcbiAgY29uc3QgX2dldEJ5SWQgPSBNZW0oZ2V0QnlJZFF1ZXJ5PEVudGl0eVRhYmxlLlNwZWNpZSwgSVNwZWNpZVJlc3BvbnNlPihcclxuICAgIEVudGl0eVRhYmxlLlNwZWNpZSwgW1xyXG4gICAge1xyXG4gICAgICB0YWJsZU5hbWU6IEVudGl0eVRhYmxlLkZpbG0sXHJcbiAgICAgIHNob3dGaWVsZHM6IFtGaWxtRmllbGRzTmFtZXMuSWQsIEZpbG1GaWVsZHNOYW1lcy5UaXRsZV0sXHJcbiAgICAgIGZpZWxkTmFtZUluUmVzcG9uc2U6ICdmaWxtcycsXHJcbiAgICAgIG1hbnlUb01hbnlUYWJsZU5hbWU6IE1hbnlUb01hbnlUYWJsZS5TcGVjaWVzSW5GaWxtcyxcclxuICAgICAgaW50ZXJzZWN0RW50aXR5T246IFNwZWNpZXNJbkZpbG1zRmllbGRzTmFtZS5GaWxtSWQsXHJcbiAgICAgIHdoZXJlOiBTcGVjaWVzSW5GaWxtc0ZpZWxkc05hbWUuU3BlY2llSWRcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHRhYmxlTmFtZTogRW50aXR5VGFibGUuUGVvcGxlLFxyXG4gICAgICBzaG93RmllbGRzOiBbSVBlb3BsZUVudGl0eUZpZWxkcy5JZCwgSVBlb3BsZUVudGl0eUZpZWxkcy5OYW1lXSxcclxuICAgICAgZmllbGROYW1lSW5SZXNwb25zZTogJ3Blb3BsZScsXHJcbiAgICAgIG1hbnlUb01hbnlUYWJsZU5hbWU6IE9uZVRvTWFueVRhYmxlLlJhY2UsXHJcbiAgICAgIGludGVyc2VjdEVudGl0eU9uOiBSYWNlRmllbGRzLlBlb3BsZUlkLFxyXG4gICAgICB3aGVyZTogUmFjZUZpZWxkcy5TcGVjaWVJZFxyXG4gICAgfVxyXG5cclxuICBdKSlcclxuICByZXR1cm4ge1xyXG4gICAgZ2V0QnlJZDogX2dldEJ5SWQsXHJcbiAgICBnZXRBbGw6IGdldEFsbChFbnRpdHlUYWJsZS5TcGVjaWUsIF9nZXRCeUlkKVxyXG4gIH1cclxufSkoKSIsImltcG9ydCB7IGFzeW5jTWVtb2l6ZSBhcyBNZW0gfSBmcm9tIFwiLi4vdXRpbHMvbWVtb2l6ZVwiXHJcbmltcG9ydCB7IGdldEJ5SWRRdWVyeSB9IGZyb20gXCIuLi9EQi9nZXRCeUlkXCJcclxuaW1wb3J0IHsgRW50aXR5VGFibGUsIE1hbnlUb01hbnlUYWJsZSB9IGZyb20gXCIuLi90eXBlcy9UYWJsZXNcIlxyXG5pbXBvcnQgeyBJU3RhcnNoaXBSZXNwb25zZSB9IGZyb20gXCIuLi90eXBlcy9pbnRlcmZhY2VzL1N0YXJzaGlwXCJcclxuaW1wb3J0IHsgRmlsbUZpZWxkc05hbWVzIH0gZnJvbSBcIi4uL3R5cGVzL2ludGVyZmFjZXMvRmlsbVwiXHJcbmltcG9ydCB7IFN0YXJzaGlwc0luRmlsbXNGaWVsZHMgfSBmcm9tIFwiLi4vdHlwZXMvaW50ZXJmYWNlcy9TdGFyc2hpcHNJbkZpbG1zXCJcclxuaW1wb3J0IHsgSVBlb3BsZUVudGl0eUZpZWxkcyB9IGZyb20gXCIuLi90eXBlcy9pbnRlcmZhY2VzL1Blb3BsZVwiXHJcbmltcG9ydCB7IGdldEFsbCB9IGZyb20gXCIuLi9EQi9nZXRBbGxcIlxyXG5pbXBvcnQgeyBTdGFyc2hpcFBpbG90RmllbGRzTmFtZXMgfSBmcm9tIFwiLi4vdHlwZXMvaW50ZXJmYWNlcy9TdGFyc2hpcFBpbG90XCJcclxuXHJcbmV4cG9ydCBkZWZhdWx0KCgpID0+IHtcclxuICBjb25zdCBfZ2V0QnlJZCA9IE1lbShnZXRCeUlkUXVlcnk8RW50aXR5VGFibGUuU3RhcnNoaXAsIElTdGFyc2hpcFJlc3BvbnNlPihcclxuICAgIEVudGl0eVRhYmxlLlN0YXJzaGlwLFxyXG4gICAgW1xyXG4gICAgICB7XHJcbiAgICAgICAgdGFibGVOYW1lOiBFbnRpdHlUYWJsZS5GaWxtLFxyXG4gICAgICAgIHNob3dGaWVsZHM6IFtGaWxtRmllbGRzTmFtZXMuSWQsIEZpbG1GaWVsZHNOYW1lcy5UaXRsZV0sXHJcbiAgICAgICAgZmllbGROYW1lSW5SZXNwb25zZTogJ2ZpbG1zJyxcclxuICAgICAgICBtYW55VG9NYW55VGFibGVOYW1lOiBNYW55VG9NYW55VGFibGUuU3RhcnNoaXBzSW5GaWxtcyxcclxuICAgICAgICBpbnRlcnNlY3RFbnRpdHlPbjogU3RhcnNoaXBzSW5GaWxtc0ZpZWxkcy5GaWxtSWQsXHJcbiAgICAgICAgd2hlcmU6IFN0YXJzaGlwc0luRmlsbXNGaWVsZHMuU3RhcnNoaXBJZFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgdGFibGVOYW1lOiBFbnRpdHlUYWJsZS5QZW9wbGUsXHJcbiAgICAgICAgc2hvd0ZpZWxkczogW0lQZW9wbGVFbnRpdHlGaWVsZHMuSWQsIElQZW9wbGVFbnRpdHlGaWVsZHMuTmFtZV0sXHJcbiAgICAgICAgZmllbGROYW1lSW5SZXNwb25zZTogJ3BpbG90cycsXHJcbiAgICAgICAgbWFueVRvTWFueVRhYmxlTmFtZTogTWFueVRvTWFueVRhYmxlLlN0YXJzaGlwUGlsb3QsXHJcbiAgICAgICAgaW50ZXJzZWN0RW50aXR5T246IFN0YXJzaGlwUGlsb3RGaWVsZHNOYW1lcy5QZW9wbGVJZCxcclxuICAgICAgICB3aGVyZTogU3RhcnNoaXBQaWxvdEZpZWxkc05hbWVzLlN0YXJzaGlwSWRcclxuICAgICAgfVxyXG5cclxuICAgIF1cclxuICApKVxyXG5cclxuICByZXR1cm4ge1xyXG4gICAgZ2V0QnlJZDogX2dldEJ5SWQsXHJcbiAgICBnZXRBbGw6IGdldEFsbChFbnRpdHlUYWJsZS5TdGFyc2hpcCwgX2dldEJ5SWQpXHJcbiAgfVxyXG59KSgpIiwiaW1wb3J0IHsgYXN5bmNNZW1vaXplIGFzIE1lbSB9IGZyb20gXCIuLi91dGlscy9tZW1vaXplXCJcclxuaW1wb3J0IHsgZ2V0QnlJZFF1ZXJ5IH0gZnJvbSBcIi4uL0RCL2dldEJ5SWRcIlxyXG5pbXBvcnQgeyBJVmVoaWNsZUVudGl0eSwgSVZlaGljbGVSZXNwb25zZSwgVmVoaWNsZUZpZWxkc05hbWVzIH0gZnJvbSBcIi4uL3R5cGVzL2ludGVyZmFjZXMvVmVoaWNsZVwiXHJcbmltcG9ydCB7IEVudGl0eVRhYmxlLCBNYW55VG9NYW55VGFibGUgfSBmcm9tIFwiLi4vdHlwZXMvVGFibGVzXCJcclxuaW1wb3J0IHsgSVBlb3BsZUVudGl0eUZpZWxkcyB9IGZyb20gXCIuLi90eXBlcy9pbnRlcmZhY2VzL1Blb3BsZVwiXHJcbmltcG9ydCB7IFBpbG90RmllbGROYW1lcyB9IGZyb20gXCIuLi90eXBlcy9pbnRlcmZhY2VzL1BpbG90XCJcclxuaW1wb3J0IHsgRmlsbUZpZWxkc05hbWVzIH0gZnJvbSBcIi4uL3R5cGVzL2ludGVyZmFjZXMvRmlsbVwiXHJcbmltcG9ydCB7IFZlaGljbGVzSW5GaWxtc0ZpZWxkc05hbWVzIH0gZnJvbSBcIi4uL3R5cGVzL2ludGVyZmFjZXMvVmVoaWNsZXNJbkZpbG1zXCJcclxuaW1wb3J0IHsgZ2V0QWxsIH0gZnJvbSBcIi4uL0RCL2dldEFsbFwiXHJcblxyXG5leHBvcnQgZGVmYXVsdCAoKCkgPT4ge1xyXG4gIGNvbnN0IF9nZXRCeUlkID0gTWVtKGdldEJ5SWRRdWVyeTxFbnRpdHlUYWJsZS5WZWhpY2xlLCBJVmVoaWNsZVJlc3BvbnNlPihcclxuICAgIEVudGl0eVRhYmxlLlZlaGljbGUsXHJcbiAgICBbXHJcbiAgICAgIHtcclxuICAgICAgICB0YWJsZU5hbWU6IEVudGl0eVRhYmxlLlBlb3BsZSxcclxuICAgICAgICBzaG93RmllbGRzOiBbSVBlb3BsZUVudGl0eUZpZWxkcy5JZCwgSVBlb3BsZUVudGl0eUZpZWxkcy5OYW1lXSxcclxuICAgICAgICBmaWVsZE5hbWVJblJlc3BvbnNlOiAncGlsb3RzJyxcclxuICAgICAgICBtYW55VG9NYW55VGFibGVOYW1lOiBNYW55VG9NYW55VGFibGUuUGlsb3QsXHJcbiAgICAgICAgaW50ZXJzZWN0RW50aXR5T246IFBpbG90RmllbGROYW1lcy5QZW9wbGVJZCxcclxuICAgICAgICB3aGVyZTogUGlsb3RGaWVsZE5hbWVzLlZlaGljbGVJZFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgdGFibGVOYW1lOiBFbnRpdHlUYWJsZS5GaWxtLFxyXG4gICAgICAgIHNob3dGaWVsZHM6IFtGaWxtRmllbGRzTmFtZXMuSWQsIEZpbG1GaWVsZHNOYW1lcy5UaXRsZV0sXHJcbiAgICAgICAgZmllbGROYW1lSW5SZXNwb25zZTogJ2ZpbG1zJyxcclxuICAgICAgICBtYW55VG9NYW55VGFibGVOYW1lOiBNYW55VG9NYW55VGFibGUuVmVoaWNsZXNJbkZpbG1zLFxyXG4gICAgICAgIGludGVyc2VjdEVudGl0eU9uOiBWZWhpY2xlc0luRmlsbXNGaWVsZHNOYW1lcy5GaWxtSWQsXHJcbiAgICAgICAgd2hlcmU6IFZlaGljbGVzSW5GaWxtc0ZpZWxkc05hbWVzLlZlaGljbGVJZFxyXG4gICAgICB9XHJcblxyXG4gICAgXVxyXG4gICkpXHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBnZXRCeUlkOiBfZ2V0QnlJZCxcclxuICAgIGdldEFsbDogZ2V0QWxsKEVudGl0eVRhYmxlLlZlaGljbGUsIF9nZXRCeUlkKVxyXG4gIH1cclxufSkoKSIsImltcG9ydCAncmVnZW5lcmF0b3ItcnVudGltZS9ydW50aW1lJztcclxuaW1wb3J0ICogYXMgZXhwcmVzcyBmcm9tICdleHByZXNzJ1xyXG5pbXBvcnQgeyBBcHBsaWNhdGlvbiwgUmVxdWVzdCwgUmVzcG9uc2UgfSBmcm9tICdleHByZXNzJztcclxuaW1wb3J0IGZpbG0gZnJvbSAnLi9yb3V0ZXMvZmlsbSc7XHJcbmltcG9ydCBoZWxtZXQgZnJvbSAnaGVsbWV0JztcclxuY29uc3QgYXBwOiBBcHBsaWNhdGlvbiA9IHJlcXVpcmUoJ2V4cHJlc3MnKSgpO1xyXG5pbXBvcnQgcGxhbmV0IGZyb20gJy4vcm91dGVzL3BsYW5ldHMnO1xyXG5pbXBvcnQgcGVvcGxlIGZyb20gJy4vcm91dGVzL3Blb3BsZSc7XHJcbmltcG9ydCBzcGVjaWUgZnJvbSAnLi9yb3V0ZXMvc3BlY2llcyc7XHJcbmltcG9ydCB2ZWhpY2xlIGZyb20gJy4vcm91dGVzL3ZlaGljbGUnO1xyXG5pbXBvcnQgc3RhcnNoaXAgZnJvbSAnLi9yb3V0ZXMvc3RhcnNoaXAnO1xyXG5pbXBvcnQgeyBtYXRjaFJvdXRlcywgTWF0Y2hlZFJvdXRlIH0gZnJvbSAncmVhY3Qtcm91dGVyLWNvbmZpZyc7XHJcbmltcG9ydCBSb3V0ZXMgZnJvbSAnLi4vY2xpZW50L3JvdXRlcyc7XHJcbmltcG9ydCBnZXRQb3J0IGZyb20gJy4vdXRpbHMvcG9ydC1nZXR0ZXInO1xyXG5pbXBvcnQgcmVuZGVyZXIgZnJvbSAnLi91dGlscy9yZW5kZXJlcic7XHJcblxyXG5hcHAudXNlKCcvcHVibGljJywgZXhwcmVzcy5zdGF0aWMoJ3B1YmxpYycpKVxyXG5cclxuYXBwLnVzZSgnL2FwaS92MS9maWxtcycsIGZpbG0pO1xyXG5hcHAudXNlKCcvYXBpL3YxL3BsYW5ldHMnLCBwbGFuZXQpO1xyXG5hcHAudXNlKCcvYXBpL3YxL3Blb3BsZScsIHBlb3BsZSk7XHJcbmFwcC51c2UoJy9hcGkvdjEvc3BlY2llcycsIHNwZWNpZSk7XHJcbmFwcC51c2UoJy9hcGkvdjEvdmVoaWNsZXMnLCB2ZWhpY2xlKVxyXG5hcHAudXNlKCcvYXBpL3YxL3N0YXJzaGlwcycsIHN0YXJzaGlwKVxyXG5hcHAuZ2V0KCcvKicsIChyZXE6IGFueSwgcmVzOiBhbnksIG5leHQ6ZXhwcmVzcy5OZXh0RnVuY3Rpb24pID0+IHtcclxuICBjb25zdCBwcm9taXNlcyA9IG1hdGNoUm91dGVzKFJvdXRlcywgcmVxLnBhdGgpXHJcbiAgICAubWFwKCh7IHJvdXRlLCBtYXRjaCB9KSA9PiByb3V0ZS5sb2FkRGF0YSA/IHJvdXRlLmxvYWREYXRhKG1hdGNoKSA6IFByb21pc2UucmVzb2x2ZShudWxsKSlcclxuICAgIC5tYXAoKHByb21pc2U6UHJvbWlzZTxhbnk+KSA9PiBwcm9taXNlICYmIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IFxyXG4gICAgICAgICAgcHJvbWlzZS50aGVuKHJlc29sdmUpLmNhdGNoKHJlc29sdmUpXHJcbiAgICAgICAgKSlcclxuICAgaWYocHJvbWlzZXMubGVuZ3RoID4gMCl7XHJcbiAgICBQcm9taXNlLmFsbChwcm9taXNlcykudGhlbigoKSA9PiByZXMuc2VuZChyZW5kZXJlcihyZXEpKSk7XHJcbiAgIH1lbHNle1xyXG4gICAgIG5leHQoKVxyXG4gICAgfSBcclxufSlcclxuLy9hcHAudXNlKCcvKicsIChyZXEsIHJlcyk9PiByZXMuanNvbih7bWVzc2FnZTogJ05vdCBGb3VuZCd9KSlcclxuYXBwLnVzZShoZWxtZXQoKSk7XHJcbmFwcC5saXN0ZW4oZ2V0UG9ydChwcm9jZXNzKSwgKCkgPT4gY29uc29sZS5sb2coYHNlcnZlciBzdGFydGVkIG9uIHBvcnQgJHtnZXRQb3J0KHByb2Nlc3MpfWApKTtcclxuXHJcbiIsIi8vIFVwZGF0ZSB3aXRoIHlvdXIgY29uZmlnIHNldHRpbmdzLlxyXG5jb25zdCBzID0gcmVxdWlyZShcIi4vc2V0dGluZ3MuanNcIik7XHJcbm1vZHVsZS5leHBvcnRzID0ge1xyXG5cclxuICBkZXZlbG9wbWVudDoge1xyXG4gICAgY2xpZW50OiAncGcnLFxyXG4gICAgY29ubmVjdGlvbjoge1xyXG4gICAgICB1c2VyOiBzLnVzZXIsXHJcbiAgICAgIGhvc3Q6IHMuaG9zdCxcclxuICAgICAgZGF0YWJhc2U6ICdzdGFyd2FycycsXHJcbiAgICAgIHBhc3N3b3JkOiBzLnBhc3N3b3JkLFxyXG4gICAgICBzc2w6IHRydWVcclxuICAgIH1cclxuICB9XHJcbn07XHJcbiIsImltcG9ydCB7Um91dGVyLCBSZXF1ZXN0LCBSZXNwb25zZX0gZnJvbSAnZXhwcmVzcyc7XHJcbmltcG9ydCB7IElGaWxtUmVzcG9uc2UgfSBmcm9tICcuLi90eXBlcy9pbnRlcmZhY2VzL0ZpbG0nO1xyXG5pbXBvcnQgRmlsbSBmcm9tICcuLi9jb250cm9sbGVycy9maWxtJztcclxuXHJcblxyXG5jb25zdCBSOlJvdXRlciA9IFJvdXRlcigpO1xyXG5cclxuUi5nZXQoJy9pbnNlcnQnLCBhc3luYyAocmVxOlJlcXVlc3QsIHJlczpSZXNwb25zZSk9PntcclxuICBcclxuIFxyXG59KVxyXG5SLmdldCgnLzppZCcsIGFzeW5jIChyZXE6UmVxdWVzdCwgcmVzOlJlc3BvbnNlKSA9PiB7XHJcbiBjb25zdCByZXN1bHQ6SUZpbG1SZXNwb25zZSA9IGF3YWl0IEZpbG0uZ2V0QnlJZChyZXEucGFyYW1zLmlkKSgpXHJcbiAgcmVzLmpzb24ocmVzdWx0KTsgICBcclxufSk7XHJcblIuZ2V0KCcvJywgYXN5bmMgKHJlcTpSZXF1ZXN0LCByZXM6UmVzcG9uc2UpPT57XHJcbiAgY29uc3QgcmVzdWx0ID0gYXdhaXQgRmlsbS5nZXRBbGwoKTtcclxuICByZXMuanNvbihyZXN1bHQpOyBcclxufSlcclxuIGV4cG9ydCBkZWZhdWx0IFI7IiwiaW1wb3J0IHsgUm91dGVyLCBSZXF1ZXN0LCBSZXNwb25zZSB9IGZyb20gJ2V4cHJlc3MnO1xyXG5pbXBvcnQgUGVvcGxlICBmcm9tICcuLi9jb250cm9sbGVycy9wZW9wbGUnO1xyXG5cclxuY29uc3QgUjpSb3V0ZXIgPSBSb3V0ZXIoKTtcclxuXHJcblxyXG5SLmdldCgnLzppZCcsIGFzeW5jIChyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UpPT57XHJcbiAgUGVvcGxlLmdldEJ5SWQocmVxLnBhcmFtcy5pZCkoKVxyXG4gICAudGhlbigocmVzdWx0OmFueSkgPT4gcmVzLmpzb24ocmVzdWx0KSk7XHJcbn0pXHJcblxyXG5SLmdldCgnLycsIGFzeW5jKHJlcTpSZXF1ZXN0LCByZXM6UmVzcG9uc2UpPT57XHJcbiAgY29uc3QgcmVzdWx0ID0gYXdhaXQgUGVvcGxlLmdldEFsbCgpXHJcbiAgcmVzLmpzb24ocmVzdWx0KVxyXG59KVxyXG5leHBvcnQgZGVmYXVsdCBSOyIsImltcG9ydCBleHByZXNzLHtSb3V0ZXIsIFJlcXVlc3QsIFJlc3BvbnNlfSBmcm9tICdleHByZXNzJztcclxuaW1wb3J0IHsgSVBsYW5ldFJlc3BvbnNlIH0gZnJvbSAnLi4vdHlwZXMvaW50ZXJmYWNlcy9QbGFuZXQnO1xyXG5pbXBvcnQgIFBsYW5ldCAgZnJvbSAnLi4vY29udHJvbGxlcnMvcGxhbmV0JztcclxuXHJcbmNvbnN0IFI6Um91dGVyID0gUm91dGVyKCk7XHJcblxyXG5SLmdldCgnLzppZCcsIGFzeW5jIChyZXE6UmVxdWVzdCwgcmVzOlJlc3BvbnNlKT0+e1xyXG4gIGNvbnN0IHBsYW5ldDpJUGxhbmV0UmVzcG9uc2UgPSBhd2FpdCBQbGFuZXQuZ2V0QnlJZChyZXEucGFyYW1zLmlkKSgpXHJcbiAgcmVzLmpzb24ocGxhbmV0KTtcclxufSlcclxuUi5nZXQoJy8nLCBhc3luYyAocmVxOlJlcXVlc3QsIHJlczpSZXNwb25zZSk9PntcclxuICBjb25zdCByID0gYXdhaXQgUGxhbmV0LmdldEFsbCgpOyBcclxuICByZXMuanNvbihyKTtcclxufSlcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFI7IiwiaW1wb3J0IHsgUm91dGVyLCBSZXF1ZXN0LCBSZXNwb25zZSB9IGZyb20gJ2V4cHJlc3MnO1xyXG5pbXBvcnQgU3BlY2llICBmcm9tICcuLi9jb250cm9sbGVycy9zcGVjaWUnO1xyXG5jb25zdCBSID0gUm91dGVyKCk7XHJcblxyXG5SLmdldCgnLzppZCcsIGFzeW5jIChyZXE6UmVxdWVzdCwgcmVzOlJlc3BvbnNlKT0+e1xyXG4gICBjb25zdCByZXN1bHQgPSBhd2FpdCAgU3BlY2llLmdldEJ5SWQocmVxLnBhcmFtcy5pZCkoKTtcclxuICAgcmVzLmpzb24ocmVzdWx0KTtcclxufSlcclxuXHJcblIuZ2V0KCcvJywgYXN5bmMgKHJlcTpSZXF1ZXN0LCByZXM6IFJlc3BvbnNlKT0+e1xyXG4gIGNvbnN0IHJlc3VsdCA9IGF3YWl0IFNwZWNpZS5nZXRBbGwoKTtcclxuICByZXMuanNvbihyZXN1bHQpO1xyXG59KVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFI7IiwiaW1wb3J0IHsgUm91dGVyLCBSZXF1ZXN0LCBSZXNwb25zZSB9IGZyb20gJ2V4cHJlc3MnO1xyXG5pbXBvcnQgIFN0YXJzaGlwICBmcm9tICcuLi9jb250cm9sbGVycy9zdGFyc2hpcCc7XHJcblxyXG5jb25zdCBSID0gUm91dGVyKCk7XHJcblxyXG5SLmdldCgnLzppZCcsIGFzeW5jIChyZXE6UmVxdWVzdCwgcmVzOlJlc3BvbnNlKT0+e1xyXG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgU3RhcnNoaXAuZ2V0QnlJZChyZXEucGFyYW1zLmlkKVxyXG4gICAgcmVzLmpzb24ocmVzdWx0KVxyXG59KVxyXG5cclxuUi5nZXQoJy8nLCBhc3luYyAocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlKT0+e1xyXG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgU3RhcnNoaXAuZ2V0QWxsKCk7XHJcbiAgICByZXMuanNvbihyZXN1bHQpXHJcbn0pXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUjsiLCJpbXBvcnQgeyBSb3V0ZXIsIFJlc3BvbnNlLCBSZXF1ZXN0IH0gZnJvbSAnZXhwcmVzcyc7XHJcbmltcG9ydCBWZWhpY2xlICBmcm9tICcuLi9jb250cm9sbGVycy92ZWhpY2xlJztcclxuXHJcbmNvbnN0IFI6Um91dGVyID0gUm91dGVyKCk7XHJcblxyXG5SLmdldCgnLzppZCcsIGFzeW5jIChyZXE6UmVxdWVzdCwgcmVzOlJlc3BvbnNlKT0+e1xyXG4gIGNvbnN0IHJlc3VsdCA9IGF3YWl0IFZlaGljbGUuZ2V0QnlJZChyZXEucGFyYW1zLmlkKSgpXHJcbiAgcmVzLmpzb24ocmVzdWx0KTsgICAgXHJcbn0pXHJcblxyXG5SLmdldCgnLycsIGFzeW5jIChyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UpPT57XHJcbiAgY29uc3QgcmVzdWx0ID0gYXdhaXQgVmVoaWNsZS5nZXRBbGwoKTtcclxuICByZXMuanNvbihyZXN1bHQpO1xyXG59KVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUjsiLCJcclxubW9kdWxlLmV4cG9ydHMgPSB7XHJcbiAgaG9zdDogXCJwZy1zdGFyd2Fycy5wb3N0Z3Jlcy5kYXRhYmFzZS5henVyZS5jb21cIixcclxuICB1c2VyOiBcInJ1YmVuODVAcGctc3RhcndhcnNcIixcclxuICBwYXNzd29yZDogXCIqcnViZW4yODM0MCpcIlxyXG59IiwiZXhwb3J0IGVudW0gVGFibGV7XHJcbiAgQWN0b3JzID0gJ2FjdG9ycycsXHJcbiAgRmlsbSA9ICdmaWxtJyxcclxuICBQZW9wbGUgPSAncGVvcGxlJyxcclxuICBQaWxvdCA9ICdwaWxvdCcsXHJcbiAgUGxhbmV0ID0gJ3BsYW5ldCcsXHJcbiAgUGxhbmV0c0luRmlsbXMgPSAncGxhbmV0c19pbl9maWxtcycsXHJcbiAgU3BlY2llID0gJ3NwZWNpZScsXHJcbiAgU3RhcnNoaXAgPSAnc3RhcnNoaXAnLFxyXG4gIFZlaGljbGUgPSAndmVoaWNsZScsXHJcbiAgVmVoaWNsZXNJbkZpbG1zID0gJ3ZlaGljbGVzX2luX2ZpbG1zJyxcclxuICBTdGFyc2hpcHNJbkZpbG1zID0gJ3N0YXJzaGlwc19pbl9maWxtcycsXHJcbiAgU3BlY2llc0luRmlsbXMgPSAnc3BlY2llc19pbl9maWxtcycsXHJcbiAgUmFjZSA9ICdyYWNlJyxcclxuICBTdGFyc2hpcFBpbG90ID0gJ3N0YXJzaGlwX3BpbG90J1xyXG5cclxufVxyXG5cclxuZXhwb3J0IGVudW0gTWFueVRvTWFueVRhYmxle1xyXG4gIEFjdG9ycyA9ICdhY3RvcnMnLFxyXG4gIFZlaGljbGVzSW5GaWxtcyA9ICd2ZWhpY2xlc19pbl9maWxtcycsXHJcbiAgU3RhcnNoaXBzSW5GaWxtcyA9ICdzdGFyc2hpcHNfaW5fZmlsbXMnLFxyXG4gIFNwZWNpZXNJbkZpbG1zID0gJ3NwZWNpZXNfaW5fZmlsbXMnLFxyXG4gIFBsYW5ldHNJbkZpbG1zID0gJ3BsYW5ldHNfaW5fZmlsbXMnLFxyXG4gIFJlc2lkZW50ID0gJ3Jlc2lkZW50JyxcclxuICBQaWxvdCA9ICdwaWxvdCcsXHJcbiAgU3RhcnNoaXBQaWxvdCA9ICdzdGFyc2hpcF9waWxvdCdcclxufVxyXG5cclxuZXhwb3J0IGVudW0gT25lVG9NYW55VGFibGV7XHJcbiAgUmFjZSA9ICdyYWNlJyxcclxufVxyXG5cclxuZXhwb3J0IGVudW0gRW50aXR5VGFibGV7XHJcbiAgRmlsbSA9ICdmaWxtJyxcclxuICBQZW9wbGUgPSAncGVvcGxlJyxcclxuICBQbGFuZXQgPSAncGxhbmV0JyxcclxuICBTcGVjaWUgPSAnc3BlY2llJyxcclxuICBTdGFyc2hpcCA9ICdzdGFyc2hpcCcsXHJcbiAgVmVoaWNsZSA9ICd2ZWhpY2xlJyxcclxuICBUZXN0ICAgID0gJ3Rlc3QnXHJcbn0iLCJleHBvcnQgaW50ZXJmYWNlIElBY3RvcnN7XHJcbiAgICBpZDogc3RyaW5nO1xyXG4gICAgcGVvcGxlX2lkOiBzdHJpbmc7XHJcbiAgICBmaWxtX2lkOiBzdHJpbmdcclxufVxyXG5cclxuZXhwb3J0IGVudW0gSUFjdG9yc0ZpZWxkc05hbWVze1xyXG4gICAgSWQgPSAnaWQnLFxyXG4gICAgUGVvcGxlSWQgPSAncGVvcGxlX2lkJyxcclxuICAgIEZpbG1JZCA9ICAnZmlsbV9pZCdcclxufSIsImltcG9ydCB7SUZyb21Gb3JlaWduVGFibGVzfSBmcm9tICcuL0Zyb21Gb3JlaWduVGFibGVzJztcclxuIGV4cG9ydCBpbnRlcmZhY2UgSUZpbG1Gcm9tQXBpe1xyXG4gIHRpdGxlOiAgICAgICAgICBzdHJpbmdcclxuICBlcGlzb2RlX2lkOiAgICAgbnVtYmVyXHJcbiAgb3BlbmluZ19jcmF3bDogIHN0cmluZ1xyXG4gIGRpcmVjdG9yOiAgICAgICBzdHJpbmdcclxuICBwcm9kdWNlcjogICAgICAgc3RyaW5nXHJcbiAgcmVsZWFzZV9kYXRlOiAgIHN0cmluZ1xyXG4gIGNoYXJhY3RlcnM6ICAgICBzdHJpbmdbXVxyXG4gIHBsYW5ldHM6ICAgICAgICBzdHJpbmdbXVxyXG4gIHN0YXJzaGlwczogICAgICBzdHJpbmdbXVxyXG4gIHZlaGljbGVzOiAgICAgICBzdHJpbmdbXVxyXG4gIHNwZWNpZXM6ICAgICAgICBzdHJpbmdbXVxyXG4gIGNyZWF0ZWQ6ICAgICAgICBzdHJpbmdcclxuICBlZGl0ZWQ6ICAgICAgICAgc3RyaW5nXHJcbiAgdXJsOiAgICAgICAgICAgIHN0cmluZ1xyXG59XHJcblxyXG5leHBvcnQgbmFtZXNwYWNlIEZpbG1GaWVsZHMge1xyXG4gIGV4cG9ydCB0eXBlIGlkID0gc3RyaW5nO1xyXG4gIGV4cG9ydCB0eXBlIHRpdGxlID0gc3RyaW5nIHwgbnVsbDtcclxuICBleHBvcnQgdHlwZSBlcGlzb2RlX2lkID0gbnVtYmVyIHwgbnVsbDtcclxuICBleHBvcnQgdHlwZSBvcGVuaW5nX2NyYXdsID0gc3RyaW5nIHwgbnVsbDtcclxuICBleHBvcnQgdHlwZSBkaXJlY3RvciA9IHN0cmluZyB8IG51bGw7XHJcbiAgZXhwb3J0IHR5cGUgcHJvZHVjZXIgPSBzdHJpbmcgfCBudWxsO1xyXG4gIGV4cG9ydCB0eXBlIHJlbGVhc2VfZGF0ZSA9IHN0cmluZyB8IG51bGw7XHJcbiAgZXhwb3J0IHR5cGUgY3JlYXRlZCA9IHN0cmluZyB8IG51bGw7XHJcbiAgZXhwb3J0IHR5cGUgZWRpdGVkID0gc3RyaW5nIHwgbnVsbDtcclxuICBleHBvcnQgdHlwZSB1cmwgPSBzdHJpbmcgfCBudWxsO1xyXG4gIFxyXG59XHJcblxyXG5cclxuZXhwb3J0IGVudW0gRmlsbUZpZWxkc05hbWVze1xyXG4gIElkID0gJ2lkJyxcclxuICBUaXRsZSA9ICd0aXRsZScsXHJcbiAgRXBpc29kZUlkID0gICdlcGlzb2RlX2lkJyxcclxuICBPcGVuaW5nQ3Jhd2wgPSAnb3BlbmluZ19jcmF3bCcsXHJcbiAgRGlyZWN0b3IgPSAnZGlyZWN0b3InLFxyXG4gIFByb2R1Y2VyID0gICdwcm9kdWNlcicsXHJcbiAgUmVsZWFzZURhdGUgPSAgJ3JlbGVhc2VfZGF0ZScsXHJcbiAgQ3JlYXRlZCA9ICdjcmVhdGVkJyxcclxuICBFZGl0ZWQgPSAnZWRpdGVkJyxcclxuICBVcmwgPSAndXJsJ1xyXG59XHJcblxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBGaWxtIHtcclxuICBpZDogRmlsbUZpZWxkcy5pZDtcclxuICB0aXRsZTogRmlsbUZpZWxkcy50aXRsZTtcclxuICBlcGlzb2RlX2lkOiBGaWxtRmllbGRzLmVwaXNvZGVfaWQ7XHJcbiAgb3BlbmluZ19jcmF3bDogRmlsbUZpZWxkcy5vcGVuaW5nX2NyYXdsO1xyXG4gIGRpcmVjdG9yOiBGaWxtRmllbGRzLmRpcmVjdG9yO1xyXG4gIHByb2R1Y2VyOiBGaWxtRmllbGRzLnByb2R1Y2VyO1xyXG4gIHJlbGVhc2VfZGF0ZTogRmlsbUZpZWxkcy5yZWxlYXNlX2RhdGU7XHJcbiAgY3JlYXRlZDogRmlsbUZpZWxkcy5jcmVhdGVkO1xyXG4gIGVkaXRlZDogRmlsbUZpZWxkcy5lZGl0ZWQ7XHJcbiAgdXJsOiBGaWxtRmllbGRzLnVybDtcclxuXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUZpbG1SZXNwb25zZSBleHRlbmRzIEZpbG17XHJcbiAgY2hhcmFjdGVyczogICAgSUZyb21Gb3JlaWduVGFibGVzW10sXHJcbiAgcGxhbmV0czogICAgICAgSUZyb21Gb3JlaWduVGFibGVzW10sXHJcbiAgc3RhcnNoaXBzOiAgICAgSUZyb21Gb3JlaWduVGFibGVzW10sXHJcbiAgdmVoaWNsZXM6ICAgICAgSUZyb21Gb3JlaWduVGFibGVzW11cclxufVxyXG5cclxuIiwiaW1wb3J0IHsgSVNwZWNpZUVudGl0eSBhcyBTcGVjaWUgfSBmcm9tICcuL1NwZWNpZSc7XHJcbmltcG9ydCB7IElTdWJqZWN0LCBJU3ViamVjdEZyb21BcGkgfSBmcm9tICcuL1N1YmplY3QnO1xyXG5pbXBvcnQgeyBJRnJvbUZvcmVpZ25UYWJsZXMgfSBmcm9tICcuL0Zyb21Gb3JlaWduVGFibGVzJztcclxuXHJcbmludGVyZmFjZSBJUGVvcGxlIGV4dGVuZHMgSVN1YmplY3R7XHJcbiAgaGVpZ2h0OiBzdHJpbmdcclxuICBtYXNzOiBzdHJpbmdcclxuICBoYWlyX2NvbG9yOiBzdHJpbmdcclxuICBza2luX2NvbG9yOiBzdHJpbmdcclxuICBleWVfY29sb3I6IHN0cmluZ1xyXG4gIGJpcnRoX3llYXI6IHN0cmluZ1xyXG4gIGdlbmRlcjogc3RyaW5nXHJcbiAgY3JlYXRlZDogc3RyaW5nXHJcbiAgZWRpdGVkOiBzdHJpbmdcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJUGVvcGxlRW50aXR5IGV4dGVuZHMgSVBlb3BsZXtcclxuICBzcGVjaWVzOiBJRnJvbUZvcmVpZ25UYWJsZXNcclxuICB2ZWhpY2xlczogSUZyb21Gb3JlaWduVGFibGVzW11cclxuICBzdGFyc2hpcHM6IElGcm9tRm9yZWlnblRhYmxlc1tdXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVBlb3BsZUZyb21BcGkgZXh0ZW5kcyBJUGVvcGxle1xyXG4gIHNwZWNpZXM6IHN0cmluZ1xyXG4gIHZlaGljbGVzOiBzdHJpbmdbXVxyXG4gIHN0YXJzaGlwczogc3RyaW5nW11cclxufVxyXG5cclxuZXhwb3J0IGVudW0gSVBlb3BsZUVudGl0eUZpZWxkc3tcclxuICBJZCA9ICdpZCcsXHJcbiAgTmFtZSA9ICduYW1lJyxcclxuICBIZWlnaHQgPSAnaGVpZ2h0JyxcclxuICBNYXNzID0gJ21hc3MnLFxyXG4gIEhhaXJDb2xvciA9ICdoYWlyX2NvbG9yJyxcclxuICBTa2luQ29sb3IgPSAnc2tpbl9jb2xvcicsXHJcbiAgRXllQ29sb3IgPSAnZXllX2NvbG9yJyxcclxuICBCaXJ0aFllYXIgPSAnYmlydGhfeWVhcicsXHJcbiAgR2VuZGVyID0gJ2dlbmRlcicsXHJcbiAgQ3JlYXRlZCA9ICdjcmVhdGVkJyxcclxuICBFZGl0ZWQgPSAnZWRpdGVkJyxcclxuICBVcmwgPSAndXJsJ1xyXG59IiwiZXhwb3J0IGludGVyZmFjZSBQaWxvdHtcclxuICAgIGlkOiBQaWxvdEZpZWxkVHlwZXMuaWQ7XHJcbiAgICB2ZWhpY2xlX2lkOiBQaWxvdEZpZWxkVHlwZXMudmVoaWNsZV9pZDtcclxuICAgIHBlb3BsZV9pZDogUGlsb3RGaWVsZFR5cGVzLnBlb3BsZV9pZFxyXG59XHJcblxyXG5leHBvcnQgZW51bSBQaWxvdEZpZWxkTmFtZXN7XHJcbiAgICBJZCA9ICdpZCcsXHJcbiAgICBWZWhpY2xlSWQgPSAndmVoaWNsZV9pZCcsXHJcbiAgICBQZW9wbGVJZCA9ICdwZW9wbGVfaWQnXHJcbn1cclxuXHJcblxyXG5leHBvcnQgbmFtZXNwYWNlIFBpbG90RmllbGRUeXBlc3tcclxuICAgIGV4cG9ydCB0eXBlIGlkID0gc3RyaW5nO1xyXG4gICAgZXhwb3J0IHR5cGUgdmVoaWNsZV9pZCA9IHN0cmluZztcclxuICAgIGV4cG9ydCB0eXBlIHBlb3BsZV9pZCA9IHN0cmluZztcclxufSIsImV4cG9ydCBpbnRlcmZhY2UgSVJhY2V7XHJcbiAgICBpZDogc3RyaW5nXHJcbiAgICBwZW9wbGVfaWQ6IHN0cmluZ1xyXG4gICAgc3BlY2llX2lkOiBzdHJpbmdcclxufVxyXG5cclxuZXhwb3J0IGVudW0gUmFjZUZpZWxkc3tcclxuICAgIGlkID0gJ2lkJyxcclxuICAgIFBlb3BsZUlkID0gJ3Blb3BsZV9pZCcsXHJcbiAgICBTcGVjaWVJZCA9ICdzcGVjaWVfaWQnXHJcbn0iLCJpbXBvcnQgeyBJUGxhbmV0RW50aXR5IGFzIFBsYW5ldH0gZnJvbSAnLi9QbGFuZXQnO1xyXG5pbXBvcnQgeyBJU3ViamVjdCwgSVN1YmplY3RGcm9tQXBpIH0gZnJvbSAnLi9TdWJqZWN0JztcclxuaW1wb3J0IHsgSUZyb21Gb3JlaWduVGFibGVzIH0gZnJvbSAnLi9Gcm9tRm9yZWlnblRhYmxlcyc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElTcGVjaWVFbnRpdHkgZXh0ZW5kcyBJU3ViamVjdHtcclxuICBjbGFzc2lmaWNhdGlvbjogc3RyaW5nXHJcbiAgZGVzaWduYXRpb246IHN0cmluZ1xyXG4gIGF2ZXJhZ2VfaGVpZ2h0OiBzdHJpbmdcclxuICBza2luX2NvbG9yczogc3RyaW5nXHJcbiAgaGFpcl9jb2xvcnM6IHN0cmluZ1xyXG4gIGV5ZV9jb2xvcnM6IHN0cmluZ1xyXG4gIGF2ZXJhZ2VfbGlmZXNwYW46IHN0cmluZ1xyXG4gIGxhbmd1YWdlOiBzdHJpbmdcclxuICBob21ld29ybGQ6IFBsYW5ldFxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElTcGVjaWVGcm9tQXBpIGV4dGVuZHMgSVN1YmplY3RGcm9tQXBpe1xyXG4gIGNsYXNzaWZpY2F0aW9uOiBzdHJpbmdcclxuICBwZW9wbGU6IHN0cmluZ1tdXHJcbiAgZmlsbXM6IHN0cmluZ1tdXHJcbiAgZGVzaWduYXRpb246IHN0cmluZ1xyXG4gIGF2ZXJhZ2VfaGVpZ2h0OiBzdHJpbmdcclxuICBza2luX2NvbG9yczogc3RyaW5nXHJcbiAgaGFpcl9jb2xvcnM6IHN0cmluZ1xyXG4gIGV5ZV9jb2xvcnM6IHN0cmluZ1xyXG4gIGF2ZXJhZ2VfbGlmZXNwYW46IHN0cmluZ1xyXG4gIGxhbmd1YWdlOiBzdHJpbmdcclxuICBob21ld29ybGQ6IHN0cmluZ1xyXG59XHJcblxyXG5leHBvcnQgZW51bSBJU3BlY2llRW50aXR5RmllbGRze1xyXG4gIElkPSdpZCcsXHJcbiAgTmFtZSA9ICduYW1lJyxcclxuICBDbGFzc2lmaWNhdGlvbiA9ICdjbGFzc2lmaWNhdGlvbicsXHJcbiAgRGVzaWduYXRpb24gPSAnZGVzaWduYXRpb24nLFxyXG4gIEF2ZXJhZ2VIZWlnaHQgPSAnYXZlcmFnZV9oZWlnaHQnLFxyXG4gIFNraW5Db2xvcnMgPSAnc2tpbl9jb2xvcnMnLFxyXG4gIEhhaXJDb2xvcnMgPSAnaGFpcl9jb2xvcnMnLFxyXG4gIEV5ZUNvbG9ycyA9ICdleWVfY29sb3JzJyxcclxuICBBdmVyYWdlTGlmZXNwYW4gPSAnYXZlcmFnZV9saWZlc3BhbicsXHJcbiAgSG9tZXdvcmxkID0gJ2hvbWV3b3JsZCcsXHJcbiAgTGFuZ3VhZ2UgPSAnbGFuZ3VhZ2UnLFxyXG4gIFVybCA9ICd1cmwnXHJcbn1cclxuXHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElTcGVjaWVSZXNwb25zZSBleHRlbmRzIElTcGVjaWVFbnRpdHl7XHJcbiAgcGVvcGxlOiBJRnJvbUZvcmVpZ25UYWJsZXNbXSxcclxuICBmaWxtczogSUZyb21Gb3JlaWduVGFibGVzW11cclxufSIsImV4cG9ydCBpbnRlcmZhY2UgSVNwZWNpZXNJbkZpbG1ze1xyXG4gICAgaWQ6IHN0cmluZztcclxuICAgIGZpbG1faWQ6IHN0cmluZztcclxuICAgIHNwZWNpZV9pZDogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgbmFtZXNwYWNlIFNwZWNpZXNJbkZpbG1zRmllbGRzVHlwZXtcclxuICAgIGV4cG9ydCB0eXBlIGlkID0gc3RyaW5nO1xyXG4gICAgZXhwb3J0IHR5cGUgZmlsbV9pZCA9IHN0cmluZztcclxuICAgIGV4cG9ydCB0eXBlIHNwZWNpZV9pZCA9IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGVudW0gU3BlY2llc0luRmlsbXNGaWVsZHNOYW1le1xyXG4gICAgSWQgPSAnaWQnLFxyXG4gICAgRmlsbUlkID0gJ2ZpbG1faWQnLFxyXG4gICAgU3BlY2llSWQgPSAnc3BlY2llX2lkJyAgICBcclxufSIsImltcG9ydCB7SVN1YmplY3QsIElTdWJqZWN0RnJvbUFwaX0gZnJvbSAnLi9TdWJqZWN0JztcclxuaW1wb3J0IHsgSVRyYW5zcG9ydEZyb21BcGksIElUcmFuc3BvcnRFbnRpdHkgfSBmcm9tICcuL1RyYW5zcG9ydCc7XHJcbmltcG9ydCB7IElGcm9tRm9yZWlnblRhYmxlcyB9IGZyb20gJy4vRnJvbUZvcmVpZ25UYWJsZXMnO1xyXG5pbnRlcmZhY2UgSVN0YXJzaGlwe1xyXG4gIGh5cGVyZHJpdmVfcmF0aW5nOiBzdHJpbmdcclxuICBNR0xUOiBzdHJpbmdcclxuICBzdGFyc2hpcF9jbGFzczogc3RyaW5nXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVN0YXJzaGlwRnJvbUFwaSBleHRlbmRzIElTdGFyc2hpcCwgSVN1YmplY3RGcm9tQXBpLCBJVHJhbnNwb3J0RnJvbUFwaXt9XHJcbmV4cG9ydCBpbnRlcmZhY2UgSVN0YXJzaGlwRW50aXR5IGV4dGVuZHMgSVN0YXJzaGlwICxJU3ViamVjdCwgSVRyYW5zcG9ydEVudGl0eXt9XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElTdGFyc2hpcFJlc3BvbnNlIGV4dGVuZHMgSVN0YXJzaGlwRW50aXR5e1xyXG4gIHBpbG90czogSUZyb21Gb3JlaWduVGFibGVzW10sXHJcbiAgZmlsbXM6IElGcm9tRm9yZWlnblRhYmxlc1tdXHJcbn1cclxuXHJcblxyXG5leHBvcnQgZW51bSBTdGFyc2hpcEVudGl0eUZpZWxkcyB7XHJcbiAgSWQgPSAnaWQnLFxyXG4gIFVybCA9ICd1cmwnLFxyXG4gIE5hbWUgPSAnbmFtZScsXHJcbiAgQ3JlYXRlZCA9ICdjcmVhdGVkJyxcclxuICBFZGl0ZWQgPSAnZWRpdGVkJyxcclxuICBNb2RlbCA9ICdtb2RlbCcsXHJcbiAgTWFudWZhY3R1cmVyID0gJ21hbnVmYWN0dXJlcicsXHJcbiAgQ29zdEluQ3JlZGl0cyA9ICdjb3N0X2luX2NyZWRpdHMnLFxyXG4gIExlbmd0aCA9ICdsZW5ndGgnLFxyXG4gIE1heEF0bW9zcGhlcmluZ1NwZWVkID0gJ21heF9hdG1vc3BoZXJpbmdfc3BlZWQnLFxyXG4gIENyZXcgPSAnY3JldycsXHJcbiAgUGFzc2VuZ2VycyA9ICdwYXNzZW5nZXJzJyxcclxuICBDYXJnb0NhcGFjaXR5ID0gJ2NhcmdvX2NhcGFjaXR5JyxcclxuICBDb25zdW1hYmxlcyA9ICdjb25zdW1hYmxlcycsXHJcbiAgSHlwZXJkcml2ZVJhdGluZyA9ICdoeXBlcmRyaXZlX3JhdGluZycsXHJcbiAgTUdMVCA9ICdNR0xUJyxcclxuICBTdGFyc2hpcENsYXNzID0gJ3N0YXJzaGlwX2NsYXNzJ1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFN0YXJzaGlwRW50aXR5RmllbGRzQXJyYXl7XHJcbiAgcmVhZG9ubHkgW2luZGV4OiBudW1iZXJdOiBTdGFyc2hpcEVudGl0eUZpZWxkc1xyXG59IiwiXHJcbmV4cG9ydCBuYW1lc3BhY2UgU3RhcnNoaXBQaWxvdEZpZWxkc3tcclxuICAgZXhwb3J0IHR5cGUgaWQgPSBzdHJpbmc7XHJcbiAgIGV4cG9ydCB0eXBlIHN0YXJzaGlwX2lkID0gc3RyaW5nO1xyXG4gICBleHBvcnQgdHlwZSBwZW9wbGVfaWQgPSBzdHJpbmc7IFxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFN0YXJzaGlwUGlsb3R7XHJcbiAgICBpZDogU3RhcnNoaXBQaWxvdEZpZWxkcy5pZDtcclxuICAgIHN0YXJzaGlwX2lkOiBTdGFyc2hpcFBpbG90RmllbGRzLnN0YXJzaGlwX2lkO1xyXG4gICAgcGVvcGxlX2lkOiBTdGFyc2hpcFBpbG90RmllbGRzLnBlb3BsZV9pZDtcclxufVxyXG5cclxuZXhwb3J0IGVudW0gU3RhcnNoaXBQaWxvdEZpZWxkc05hbWVze1xyXG4gICAgSWQgPSAnaWQnLFxyXG4gICAgU3RhcnNoaXBJZCA9ICdzdGFyc2hpcF9pZCcsXHJcbiAgICBQZW9wbGVJZCA9ICdwZW9wbGVfaWQnXHJcbn0iLCJleHBvcnQgaW50ZXJmYWNlIFN0YXJzaGlwc0luRmlsbXN7XHJcbiAgaWQ6IHN0cmluZ1xyXG4gIHN0YXJzaGlwX2lkOiBzdHJpbmdcclxuICBmaWxtX2lkOiBzdHJpbmdcclxufVxyXG5cclxuZXhwb3J0IGVudW0gU3RhcnNoaXBzSW5GaWxtc0ZpZWxkc3tcclxuICBJZCA9ICdpZCcsXHJcbiAgU3RhcnNoaXBJZCA9ICdzdGFyc2hpcF9pZCcsXHJcbiAgRmlsbUlkID0gJ2ZpbG1faWQnXHJcbn0iLCJpbXBvcnQgeyBJU3ViamVjdEZyb21BcGksIElTdWJqZWN0IH0gZnJvbSBcIi4vU3ViamVjdFwiO1xyXG5pbXBvcnQgeyBJVHJhbnNwb3J0RnJvbUFwaSwgSVRyYW5zcG9ydEVudGl0eSB9IGZyb20gXCIuL1RyYW5zcG9ydFwiO1xyXG5pbXBvcnQgeyBJRnJvbUZvcmVpZ25UYWJsZXMgfSBmcm9tIFwiLi9Gcm9tRm9yZWlnblRhYmxlc1wiO1xyXG5cclxuaW50ZXJmYWNlIFZlaGljbGUgeyBcclxuICB2ZWhpY2xlX2NsYXNzOiBzdHJpbmdcclxuIH1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVZlaGljbGVGcm9tQXBpIGV4dGVuZHMgSVN1YmplY3RGcm9tQXBpLCBJVHJhbnNwb3J0RnJvbUFwaXtcclxuICB2ZWhpY2xlX2NsYXNzOiBzdHJpbmdcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJVmVoaWNsZUVudGl0eSBleHRlbmRzIFZlaGljbGUsIElTdWJqZWN0RnJvbUFwaSwgSVRyYW5zcG9ydEVudGl0eXt9XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElWZWhpY2xlUmVzcG9uc2UgZXh0ZW5kcyBJVmVoaWNsZUVudGl0eXtcclxuICBwaWxvdHM6IElGcm9tRm9yZWlnblRhYmxlc1tdLFxyXG4gIGZpbG1zOiBJRnJvbUZvcmVpZ25UYWJsZXNbXVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGVudW0gVmVoaWNsZUZpZWxkc05hbWVze1xyXG4gIElkID0gJ2lkJyxcclxuICBOYW1lPSAnbmFtZScsXHJcbiAgTW9kZWwgPSAnbW9kZWwnLFxyXG4gIE1hbnVmYWN0dXJlciA9ICdtYW51ZmFjdHVyZXInLFxyXG4gIENvc3RJbkNyZWRpdHMgPSAnY29zdF9pbl9jcmVkaXRzJyxcclxuICBMZW5naHQgPSAnbGVuZ3RoJyxcclxuICBNYXhBdG1vc3BoZXJpbmdTcGVlZCA9ICdtYXhfYXRtb3NwaGVyaW5nX3NwZWVkJyxcclxuICBDcmV3ID0gJ2NyZXcnLFxyXG4gIFBhc3NlbmdlcnMgPSAncGFzc2VuZ2VycycsXHJcbiAgQ2FyZ29DYXBhY2l0eSA9ICdjYXJnb19jYXBhY2l0eScsXHJcbiAgQ29uc3VtYWJsZXMgPSAnY29uc3VtYWJsZXMnLFxyXG4gIFZlaGljbGVDbGFzcyA9ICd2ZWhpY2xlX2NsYXNzJyxcclxuICBVcmwgPSAndXJsJ1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFZlaGljbGVGaWVsZHNOYW1lc0FycmF5e1xyXG4gIFtrZXk6IG51bWJlcl0gOiBWZWhpY2xlRmllbGRzTmFtZXNcclxufSIsImV4cG9ydCBpbnRlcmZhY2UgVmVoaWNsZXNJbkZpbG1ze1xyXG4gIGlkOiBzdHJpbmdcclxuICB2ZWhpY2xlX2lkOiBzdHJpbmdcclxuICBmaWxtX2lkOiBzdHJpbmdcclxufVxyXG5cclxuZXhwb3J0IGVudW0gVmVoaWNsZXNJbkZpbG1zRmllbGRzTmFtZXN7XHJcbiAgSWQgPSAnaWQnLFxyXG4gIFZlaGljbGVJZCA9ICd2ZWhpY2xlX2lkJyxcclxuICBGaWxtSWQgPSAnZmlsbV9pZCdcclxufSIsImltcG9ydCB7IEV4ZWNFeGNlcHRpb24gfSBmcm9tIFwiY2hpbGRfcHJvY2Vzc1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGFzeW5jQ29tcG9zZSA9ICguLi5mbnM6IEZ1bmN0aW9uW10pID0+IChkYXRhOiBQcm9taXNlPGFueT4pID0+XHJcbiAgZm5zLnJlZHVjZVJpZ2h0KFxyXG4gICAgKGFjYzogUHJvbWlzZTxhbnk+LCBmOiBGdW5jdGlvbiwgaW5kZXg6IG51bWJlcikgPT5cclxuICAgICAgYWNjXHJcbiAgICAgICAgLnRoZW4oKHY6IGFueSkgPT4gZih2KSlcclxuICAgICAgICAuY2F0Y2goKGU6RXhlY0V4Y2VwdGlvbikgPT4gY29uc29sZS5sb2coZSkpXHJcbiAgICAsIGRhdGFcclxuICApXHJcbiIsImZ1bmN0aW9uIGxvZ2dlcihwOiBOb2RlSlMuUHJvY2VzcywgbG9nRm46IChzOiBzdHJpbmcpID0+IHZvaWQpIHtcclxuIFxyXG4gIHJldHVybiAobWVzc2FnZTogc3RyaW5nKSA9PiBwLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50JyAmJiBsb2dGbihtZXNzYWdlKTtcclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGxvZ2dlcihwcm9jZXNzLCBjb25zb2xlLmxvZyk7IiwiaW1wb3J0IHsgUHJvY2Vzc0Vudk9wdGlvbnMgfSBmcm9tICdjaGlsZF9wcm9jZXNzJztcclxuaW1wb3J0IExvZyBmcm9tICcuL2xvZ2dlcic7IFxyXG5leHBvcnQgY29uc3QgbWVtb2l6ZTogKGY6IEZ1bmN0aW9uKSA9PiAoYTogYW55KSA9PiBhbnkgPSAoZm4pID0+IHtcclxuICBsZXQgc3RhdGUgPSB7fSBhcyBhbnk7XHJcbiAgcmV0dXJuIGZ1bmN0aW9uKC4uLmFyZ3M6IGFueSkge1xyXG4gICAgY29uc3Qga2V5OiBzdHJpbmcgPSBbLi4uYXJnc10ucmVkdWNlKChhY2MsIGN1cnIpID0+IGFjYy5jb25jYXQoY3VyciksICcnKTtcclxuICAgIGlmIChPYmplY3Qua2V5cyhzdGF0ZSkuc29tZSgoazogc3RyaW5nKSA9PiBrID09PSBrZXkpKSB7XHJcbiAgICAgIHJldHVybiAoKSA9PiBzdGF0ZVtrZXldO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc3RhdGVba2V5XSA9IGZuKC4uLmFyZ3MpO1xyXG4gICAgICByZXR1cm4gKCkgPT4gc3RhdGVba2V5XTtcclxuICAgIH1cclxuICB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGFzeW5jTWVtb2l6ZTogKGY6IChhOiBhbnkpID0+IFByb21pc2U8YW55PikgPT4gKGE6IGFueSkgPT4gKCkgPT4gUHJvbWlzZTxhbnk+ID0gKGZuKSA9PiB7XHJcbiAgbGV0IHN0YXRlID0ge30gYXMgYW55O1xyXG4gIHJldHVybiAoYXJnczogYW55KSA9PiB7XHJcbiAgICBjb25zdCBrZXk6IHN0cmluZyA9IFsuLi5hcmdzXS5yZWR1Y2UoKGFjYywgY3VycikgPT4gYWNjLmNvbmNhdChjdXJyKSwgJycpO1xyXG4gICAgaWYgKE9iamVjdC5rZXlzKHN0YXRlKS5zb21lKChrOiBzdHJpbmcpID0+IGsgPT09IGtleSkpIHtcclxuICAgICAgTG9nKCdNZW1vaXplOiBEYXRhIGV4dHJhY3RlZCBGcm9tIENhY2hlJyk7XHJcbiAgICAgIHJldHVybiAoKSA9PiBzdGF0ZVtrZXldO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgTG9nKCdNZW1vaXplOiBkYXRhIGV4dHJhY3RlZCBGcm9tIERCJyk7XHJcbiAgICAgIHN0YXRlW2tleV0gPSBmbihhcmdzKTtcclxuICAgICAgcmV0dXJuICgpID0+IHN0YXRlW2tleV07XHJcbiAgICB9XHJcbiAgfTtcclxufTtcclxuXHJcbiIsInR5cGUgUG9ydCA9IHN0cmluZztcclxuXHJcbmNvbnN0IGdldFBvcnQgPSAocDpOb2RlSlMuUHJvY2Vzcyk6KFBvcnQgfCAzMDAwKSA9PiBwICYmIHAuZW52ICYmIHAuZW52LlBPUlQgPyBwLmVudi5QT1JUIDogMzAwMDtcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBnZXRQb3J0OyIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBIZWxtZXQsIEhlbG1ldERhdGEgfSBmcm9tICdyZWFjdC1oZWxtZXQnXHJcbmltcG9ydCB7IFN0YXRpY1JvdXRlciB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nXHJcbmltcG9ydCB7IHJlbmRlclJvdXRlcyB9IGZyb20gJ3JlYWN0LXJvdXRlci1jb25maWcnXHJcbmltcG9ydCB7IHJlbmRlclRvU3RyaW5nIH0gZnJvbSAncmVhY3QtZG9tL3NlcnZlcidcclxuaW1wb3J0IFJvdXRlcyBmcm9tICcuLi8uLi9jbGllbnQvcm91dGVzJ1xyXG5pbXBvcnQgeyBSZXF1ZXN0IH0gZnJvbSAnZXhwcmVzcydcclxuaW1wb3J0IGdldFBvcnQgZnJvbSAnLi9wb3J0LWdldHRlcidcclxuY29uc3QgcmVuZGVyZXIgPSAocmVxOiBSZXF1ZXN0LCBjb250ZXh0ID0ge30pID0+IHtcclxuICBjb25zdCBjb250ZW50OnN0cmluZyA9IHJlbmRlclRvU3RyaW5nKFxyXG4gICAgPFN0YXRpY1JvdXRlciBsb2NhdGlvbj17cmVxLnBhdGh9IGNvbnRleHQ9e2NvbnRleHR9PlxyXG4gICAgICA8ZGl2PntyZW5kZXJSb3V0ZXMoUm91dGVzKX08L2Rpdj5cclxuICAgIDwvU3RhdGljUm91dGVyPlxyXG4gIClcclxuICBjb25zdCBoZWxtZXQ6SGVsbWV0RGF0YSA9IEhlbG1ldC5yZW5kZXJTdGF0aWMoKTtcclxuICByZXR1cm4gYDxodG1sIGxhbmc9XCJlblwiPlxyXG4gICAgPGhlYWQ+XHJcbiAgICAgICAgPG1ldGEgY2hhcnNldD1cIlVURi04XCI+XHJcbiAgICAgICAgJHtoZWxtZXQubWV0YS50b1N0cmluZygpfVxyXG4gICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MS4wXCI+XHJcbiAgICAgICAgPG1ldGEgaHR0cC1lcXVpdj1cIlgtVUEtQ29tcGF0aWJsZVwiIGNvbnRlbnQ9XCJpZT1lZGdlXCI+XHJcbiAgICAgICAgJHtoZWxtZXQudGl0bGUudG9TdHJpbmcoKX1cclxuICAgICAgICA8bGluayBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PUxhdG86NDAwLDcwMFwiIHJlbD1cInN0eWxlc2hlZXRcIj5cclxuICAgICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgdHlwZT1cInRleHQvY3NzXCIgY2hhcnNldD1cIlVURi04XCIgaHJlZj1cImh0dHBzOi8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL3NsaWNrLWNhcm91c2VsLzEuNi4wL3NsaWNrLm1pbi5jc3NcIiAvPlxyXG4gICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiaHR0cHM6Ly91c2UuZm9udGF3ZXNvbWUuY29tL3JlbGVhc2VzL3Y1LjAuOS9jc3MvYWxsLmNzc1wiIGludGVncml0eT1cInNoYTM4NC01U09pSXNBemlKbDZBV2UwSFdSS1RYbGZjU0hLbVlWNFJCRjE4UFBKMTczS3puN2p6TXlGdVR0azhKQTdRUUcxXCIgY3Jvc3NvcmlnaW49XCJhbm9ueW1vdXNcIj5cclxuICAgIDwvaGVhZD5cclxuICAgIDxib2R5ICR7aGVsbWV0LmJvZHlBdHRyaWJ1dGVzLnRvU3RyaW5nKCl9PlxyXG4gICAgICAgIDxkaXYgaWQ9XCJyb290XCI+JHtjb250ZW50fTwvZGl2PlxyXG4gICAgICAgIDxzY3JpcHQgc3JjPVwiaHR0cDovL2xvY2FsaG9zdDoke2dldFBvcnQocHJvY2Vzcyl9L3B1YmxpYy9jbGllbnRfYnVuZGxlLmpzXCI+PC9zY3JpcHQ+XHJcbiAgICA8L2JvZHk+XHJcbiAgXHJcbjwvaHRtbD5gO1xyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVuZGVyZXI7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZXhwcmVzc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJoZWxtZXRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwia25leFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyYW1kYVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1kb20vc2VydmVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWhlbG1ldFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yb3V0ZXItY29uZmlnXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJvdXRlci1kb21cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVnZW5lcmF0b3ItcnVudGltZS9ydW50aW1lXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=