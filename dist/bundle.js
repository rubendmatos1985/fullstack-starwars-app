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
/******/ 	return __webpack_require__(__webpack_require__.s = "./server/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./client/pages/About.tsx":
/*!********************************!*\
  !*** ./client/pages/About.tsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var About = function About(props) {
  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", null, "About us!");
};

/* harmony default export */ __webpack_exports__["default"] = (About);

/***/ }),

/***/ "./client/pages/Contact.tsx":
/*!**********************************!*\
  !*** ./client/pages/Contact.tsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var Contact = function Contact(props) {
  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", null, "Contact");
};

/* harmony default export */ __webpack_exports__["default"] = (Contact);

/***/ }),

/***/ "./client/pages/Home.tsx":
/*!*******************************!*\
  !*** ./client/pages/Home.tsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var Home = function Home(props) {
  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", null, "Welcome To React SSR!");
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "./client/routes/index.tsx":
/*!*********************************!*\
  !*** ./client/routes/index.tsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pages_Home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../pages/Home */ "./client/pages/Home.tsx");
/* harmony import */ var _pages_About__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pages/About */ "./client/pages/About.tsx");
/* harmony import */ var _pages_Contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pages/Contact */ "./client/pages/Contact.tsx");



var routes = [{
  path: '/home',
  component: _pages_Home__WEBPACK_IMPORTED_MODULE_0__["default"]
}, {
  path: '/about',
  component: _pages_About__WEBPACK_IMPORTED_MODULE_1__["default"]
}, {
  path: '/contact',
  component: _pages_Contact__WEBPACK_IMPORTED_MODULE_2__["default"]
}];
/* harmony default export */ __webpack_exports__["default"] = (routes);

/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./server/DB/getAll.ts":
/*!*****************************!*\
  !*** ./server/DB/getAll.ts ***!
  \*****************************/
/*! exports provided: getAll */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAll", function() { return getAll; });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ "./server/DB/index.ts");
/* harmony import */ var _utils_asyncCompose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/asyncCompose */ "./server/utils/asyncCompose.ts");



var getIds = function getIds(tableName) {
  return ___WEBPACK_IMPORTED_MODULE_0__["knex"].select('id').from(tableName);
};

var _getAll = function _getAll(getByIdHandler) {
  return function (ids) {
    return ids.map(function (o) {
      return getByIdHandler(o.id)();
    });
  };
};

var mapPromisesToResult = function mapPromisesToResult(promises) {
  return Promise.all(promises);
};

var getAll = function getAll(table, configuredGetByIdHandler) {
  return function () {
    return Object(_utils_asyncCompose__WEBPACK_IMPORTED_MODULE_1__["asyncCompose"])(mapPromisesToResult, _getAll(configuredGetByIdHandler), getIds)(Promise.resolve(table));
  };
};

/***/ }),

/***/ "./server/DB/getById.ts":
/*!******************************!*\
  !*** ./server/DB/getById.ts ***!
  \******************************/
/*! exports provided: getByIdQuery, buildMMFQuery */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getByIdQuery", function() { return getByIdQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buildMMFQuery", function() { return buildMMFQuery; });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./server/DB/index.ts");
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ramda */ "ramda");
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ramda__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_asyncCompose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/asyncCompose */ "./server/utils/asyncCompose.ts");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }




;
;
function getByIdQuery(tableName, foreignFields) {
  return (
    /*#__PURE__*/
    function () {
      var _ref = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(id) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return Object(_utils_asyncCompose__WEBPACK_IMPORTED_MODULE_2__["asyncCompose"])(mapDBResponse(foreignFields), function (res) {
                  return res.rows[0].json_build_object;
                }, fetchEntityWithManyToManyFields(tableName, id), getMMFieldsQueryFrom)(Promise.resolve(foreignFields));

              case 2:
                return _context.abrupt("return", _context.sent);

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }()
  );
}

function mapDBResponse(manyToManyFields) {
  return function (result) {
    return Object.keys(result).reduce(function (acc, curr, index) {
      return index === 0 ? _objectSpread({}, result[curr]) : _objectSpread({}, acc, _defineProperty({}, manyToManyFields !== undefined ? manyToManyFields[index - 1].fieldNameInResponse : curr, result[curr]));
    }, {});
  };
}

function fetchEntityWithManyToManyFields(tableName, id) {
  return function (getMMFieldById) {
    return _index__WEBPACK_IMPORTED_MODULE_0__["knex"].raw("'".concat(tableName, "', ( SELECT to_json(row)\n       FROM ( SELECT * FROM ").concat(tableName, " WHERE id = :id ) \n       row \n       ),\n   ").concat(getMMFieldById(id), "                                 \n "), {
      id: id
    }).wrap('SELECT json_build_object(', ')');
  };
}

var manyToManyQuery = function manyToManyQuery(fieldData) {
  return function (where) {
    return {
      fieldName: fieldData.tableName,
      query: "\n  ( SELECT json_agg(result) \n    FROM ( SELECT ".concat(fieldData.showFields, " FROM ").concat(fieldData.tableName, " \n    INNER JOIN ").concat(fieldData.manyToManyTableName, " ON ( ").concat(fieldData.tableName, ".id = ").concat(fieldData.manyToManyTableName, ".").concat(fieldData.intersectEntityOn, ")\n    WHERE ").concat(fieldData.manyToManyTableName, ".").concat(fieldData.where, " = '").concat(where, "') \n    result \n  )\n")
    };
  };
};

var concatFieldsWithTableName = function concatFieldsWithTableName(field) {
  return _objectSpread({}, field, {
    showFields: field.showFields.reduce(function (acc, curr, index) {
      return index <= 0 ? "".concat(field.tableName, ".").concat(curr) : acc + ", ".concat(field.tableName, ".").concat(curr);
    }, "")
  });
};

var buildMMFQuery = Object(ramda__WEBPACK_IMPORTED_MODULE_1__["compose"])(manyToManyQuery, concatFieldsWithTableName);

var getMMFieldsQueryFrom = function getMMFieldsQueryFrom(fields) {
  return function (id) {
    return fields !== undefined ? fields.map(buildMMFQuery).reduce(function (acc, curr) {
      return acc !== "" ? "".concat(acc, ", '").concat(curr(id).fieldName, "', ").concat(curr(id).query) : "'".concat(curr(id).fieldName, "', ").concat(curr(id).query);
    }, "") : "";
  };
};

/***/ }),

/***/ "./server/DB/index.ts":
/*!****************************!*\
  !*** ./server/DB/index.ts ***!
  \****************************/
/*! exports provided: knex */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "knex", function() { return knex; });
var knex = __webpack_require__(/*! knex */ "knex")(__webpack_require__(/*! ../knexfile */ "./server/knexfile.ts").development);

/***/ }),

/***/ "./server/controllers/film.ts":
/*!************************************!*\
  !*** ./server/controllers/film.ts ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_memoize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/memoize */ "./server/utils/memoize.ts");
/* harmony import */ var _types_Tables__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../types/Tables */ "./server/types/Tables.ts");
/* harmony import */ var _DB_getById__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../DB/getById */ "./server/DB/getById.ts");
/* harmony import */ var _types_interfaces_Vehicle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../types/interfaces/Vehicle */ "./server/types/interfaces/Vehicle.ts");
/* harmony import */ var _types_interfaces_VehiclesInFilms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../types/interfaces/VehiclesInFilms */ "./server/types/interfaces/VehiclesInFilms.ts");
/* harmony import */ var _types_interfaces_People__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../types/interfaces/People */ "./server/types/interfaces/People.ts");
/* harmony import */ var _types_interfaces_Actors__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../types/interfaces/Actors */ "./server/types/interfaces/Actors.ts");
/* harmony import */ var _DB_getAll__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../DB/getAll */ "./server/DB/getAll.ts");








/* harmony default export */ __webpack_exports__["default"] = ((function () {
  var _getById = Object(_utils_memoize__WEBPACK_IMPORTED_MODULE_0__["asyncMemoize"])(Object(_DB_getById__WEBPACK_IMPORTED_MODULE_2__["getByIdQuery"])(_types_Tables__WEBPACK_IMPORTED_MODULE_1__["EntityTable"].Film, [{
    tableName: _types_Tables__WEBPACK_IMPORTED_MODULE_1__["EntityTable"].Vehicle,
    showFields: [_types_interfaces_Vehicle__WEBPACK_IMPORTED_MODULE_3__["VehicleFieldsNames"].Id, _types_interfaces_Vehicle__WEBPACK_IMPORTED_MODULE_3__["VehicleFieldsNames"].Name],
    fieldNameInResponse: 'vehicles',
    manyToManyTableName: _types_Tables__WEBPACK_IMPORTED_MODULE_1__["ManyToManyTable"].VehiclesInFilms,
    intersectEntityOn: _types_interfaces_VehiclesInFilms__WEBPACK_IMPORTED_MODULE_4__["VehiclesInFilmsFieldsNames"].VehicleId,
    where: _types_interfaces_VehiclesInFilms__WEBPACK_IMPORTED_MODULE_4__["VehiclesInFilmsFieldsNames"].VehicleId
  }, {
    tableName: _types_Tables__WEBPACK_IMPORTED_MODULE_1__["EntityTable"].People,
    showFields: [_types_interfaces_People__WEBPACK_IMPORTED_MODULE_5__["IPeopleEntityFields"].Id, _types_interfaces_People__WEBPACK_IMPORTED_MODULE_5__["IPeopleEntityFields"].Name],
    fieldNameInResponse: 'actors',
    manyToManyTableName: _types_Tables__WEBPACK_IMPORTED_MODULE_1__["ManyToManyTable"].Actors,
    intersectEntityOn: _types_interfaces_Actors__WEBPACK_IMPORTED_MODULE_6__["IActorsFieldsNames"].PeopleId,
    where: _types_interfaces_Actors__WEBPACK_IMPORTED_MODULE_6__["IActorsFieldsNames"].FilmId
  }, {
    tableName: _types_Tables__WEBPACK_IMPORTED_MODULE_1__["EntityTable"].Starship,
    showFields: ['id', 'name'],
    fieldNameInResponse: 'vehicles',
    manyToManyTableName: _types_Tables__WEBPACK_IMPORTED_MODULE_1__["ManyToManyTable"].StarshipsInFilms,
    intersectEntityOn: 'starship_id',
    where: 'film_id'
  }, {
    tableName: _types_Tables__WEBPACK_IMPORTED_MODULE_1__["EntityTable"].Planet,
    showFields: ['id', 'name'],
    fieldNameInResponse: 'planets',
    manyToManyTableName: _types_Tables__WEBPACK_IMPORTED_MODULE_1__["ManyToManyTable"].PlanetsInFilms,
    intersectEntityOn: 'planet_id',
    where: 'film_id'
  }]));

  return {
    getById: _getById,
    getAll: Object(_DB_getAll__WEBPACK_IMPORTED_MODULE_7__["getAll"])(_types_Tables__WEBPACK_IMPORTED_MODULE_1__["EntityTable"].Film, _getById)
  };
})());

/***/ }),

/***/ "./server/controllers/people.ts":
/*!**************************************!*\
  !*** ./server/controllers/people.ts ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_memoize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/memoize */ "./server/utils/memoize.ts");
/* harmony import */ var _DB_getById__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../DB/getById */ "./server/DB/getById.ts");
/* harmony import */ var _types_Tables__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../types/Tables */ "./server/types/Tables.ts");
/* harmony import */ var _types_interfaces_Film__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../types/interfaces/Film */ "./server/types/interfaces/Film.ts");
/* harmony import */ var _types_interfaces_Actors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../types/interfaces/Actors */ "./server/types/interfaces/Actors.ts");
/* harmony import */ var _types_interfaces_Specie__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../types/interfaces/Specie */ "./server/types/interfaces/Specie.ts");
/* harmony import */ var _types_interfaces_Races__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../types/interfaces/Races */ "./server/types/interfaces/Races.ts");
/* harmony import */ var _types_interfaces_Vehicle__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../types/interfaces/Vehicle */ "./server/types/interfaces/Vehicle.ts");
/* harmony import */ var _types_interfaces_Pilot__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../types/interfaces/Pilot */ "./server/types/interfaces/Pilot.ts");
/* harmony import */ var _types_interfaces_Starship__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../types/interfaces/Starship */ "./server/types/interfaces/Starship.ts");
/* harmony import */ var _types_interfaces_StarshipPilot__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../types/interfaces/StarshipPilot */ "./server/types/interfaces/StarshipPilot.ts");
/* harmony import */ var _DB_getAll__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../DB/getAll */ "./server/DB/getAll.ts");












/* harmony default export */ __webpack_exports__["default"] = ((function () {
  var _getById = Object(_utils_memoize__WEBPACK_IMPORTED_MODULE_0__["asyncMemoize"])(Object(_DB_getById__WEBPACK_IMPORTED_MODULE_1__["getByIdQuery"])(_types_Tables__WEBPACK_IMPORTED_MODULE_2__["EntityTable"].People, [{
    tableName: _types_Tables__WEBPACK_IMPORTED_MODULE_2__["EntityTable"].Film,
    showFields: [_types_interfaces_Film__WEBPACK_IMPORTED_MODULE_3__["FilmFieldsNames"].Id, _types_interfaces_Film__WEBPACK_IMPORTED_MODULE_3__["FilmFieldsNames"].Title],
    fieldNameInResponse: 'films',
    manyToManyTableName: _types_Tables__WEBPACK_IMPORTED_MODULE_2__["ManyToManyTable"].Actors,
    intersectEntityOn: _types_interfaces_Actors__WEBPACK_IMPORTED_MODULE_4__["IActorsFieldsNames"].FilmId,
    where: _types_interfaces_Actors__WEBPACK_IMPORTED_MODULE_4__["IActorsFieldsNames"].PeopleId
  }, {
    tableName: _types_Tables__WEBPACK_IMPORTED_MODULE_2__["EntityTable"].Specie,
    showFields: [_types_interfaces_Specie__WEBPACK_IMPORTED_MODULE_5__["ISpecieEntityFields"].Id, _types_interfaces_Specie__WEBPACK_IMPORTED_MODULE_5__["ISpecieEntityFields"].Name],
    fieldNameInResponse: 'species',
    manyToManyTableName: _types_Tables__WEBPACK_IMPORTED_MODULE_2__["OneToManyTable"].Race,
    intersectEntityOn: _types_interfaces_Races__WEBPACK_IMPORTED_MODULE_6__["RaceFields"].SpecieId,
    where: _types_interfaces_Races__WEBPACK_IMPORTED_MODULE_6__["RaceFields"].PeopleId
  }, {
    tableName: _types_Tables__WEBPACK_IMPORTED_MODULE_2__["EntityTable"].Vehicle,
    showFields: [_types_interfaces_Vehicle__WEBPACK_IMPORTED_MODULE_7__["VehicleFieldsNames"].Id, _types_interfaces_Vehicle__WEBPACK_IMPORTED_MODULE_7__["VehicleFieldsNames"].Name],
    fieldNameInResponse: 'vehicles',
    manyToManyTableName: _types_Tables__WEBPACK_IMPORTED_MODULE_2__["ManyToManyTable"].Pilot,
    intersectEntityOn: _types_interfaces_Pilot__WEBPACK_IMPORTED_MODULE_8__["PilotFieldNames"].VehicleId,
    where: _types_interfaces_Pilot__WEBPACK_IMPORTED_MODULE_8__["PilotFieldNames"].PeopleId
  }, {
    tableName: _types_Tables__WEBPACK_IMPORTED_MODULE_2__["EntityTable"].Starship,
    showFields: [_types_interfaces_Starship__WEBPACK_IMPORTED_MODULE_9__["StarshipEntityFields"].Id, _types_interfaces_Starship__WEBPACK_IMPORTED_MODULE_9__["StarshipEntityFields"].Name],
    fieldNameInResponse: 'starships',
    manyToManyTableName: _types_Tables__WEBPACK_IMPORTED_MODULE_2__["ManyToManyTable"].StarshipPilot,
    intersectEntityOn: _types_interfaces_StarshipPilot__WEBPACK_IMPORTED_MODULE_10__["StarshipPilotFieldsNames"].StarshipId,
    where: _types_interfaces_StarshipPilot__WEBPACK_IMPORTED_MODULE_10__["StarshipPilotFieldsNames"].PeopleId
  }]));

  return {
    getById: _getById,
    getAll: Object(_DB_getAll__WEBPACK_IMPORTED_MODULE_11__["getAll"])(_types_Tables__WEBPACK_IMPORTED_MODULE_2__["EntityTable"].People, _getById)
  };
})());

/***/ }),

/***/ "./server/controllers/planet.ts":
/*!**************************************!*\
  !*** ./server/controllers/planet.ts ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_memoize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/memoize */ "./server/utils/memoize.ts");
/* harmony import */ var _DB_getById__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../DB/getById */ "./server/DB/getById.ts");
/* harmony import */ var _types_Tables__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../types/Tables */ "./server/types/Tables.ts");
/* harmony import */ var _DB_getAll__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../DB/getAll */ "./server/DB/getAll.ts");




/* harmony default export */ __webpack_exports__["default"] = ((function () {
  var _getById = Object(_utils_memoize__WEBPACK_IMPORTED_MODULE_0__["asyncMemoize"])(Object(_DB_getById__WEBPACK_IMPORTED_MODULE_1__["getByIdQuery"])(_types_Tables__WEBPACK_IMPORTED_MODULE_2__["EntityTable"].Planet, [{
    tableName: _types_Tables__WEBPACK_IMPORTED_MODULE_2__["EntityTable"].People,
    showFields: ['id', 'name'],
    fieldNameInResponse: 'residents',
    manyToManyTableName: _types_Tables__WEBPACK_IMPORTED_MODULE_2__["ManyToManyTable"].Resident,
    intersectEntityOn: 'people_id',
    where: 'planet_id'
  }, {
    tableName: _types_Tables__WEBPACK_IMPORTED_MODULE_2__["EntityTable"].Film,
    showFields: ['id', 'title'],
    fieldNameInResponse: 'films',
    manyToManyTableName: _types_Tables__WEBPACK_IMPORTED_MODULE_2__["ManyToManyTable"].PlanetsInFilms,
    intersectEntityOn: 'film_id',
    where: 'planet_id'
  }]));

  return {
    getById: _getById,
    getAll: Object(_DB_getAll__WEBPACK_IMPORTED_MODULE_3__["getAll"])(_types_Tables__WEBPACK_IMPORTED_MODULE_2__["EntityTable"].Planet, _getById)
  };
})());

/***/ }),

/***/ "./server/controllers/specie.ts":
/*!**************************************!*\
  !*** ./server/controllers/specie.ts ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DB_getById__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../DB/getById */ "./server/DB/getById.ts");
/* harmony import */ var _utils_memoize__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/memoize */ "./server/utils/memoize.ts");
/* harmony import */ var _types_Tables__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../types/Tables */ "./server/types/Tables.ts");
/* harmony import */ var _types_interfaces_People__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../types/interfaces/People */ "./server/types/interfaces/People.ts");
/* harmony import */ var _types_interfaces_SpeciesInFilms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../types/interfaces/SpeciesInFilms */ "./server/types/interfaces/SpeciesInFilms.ts");
/* harmony import */ var _types_interfaces_Races__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../types/interfaces/Races */ "./server/types/interfaces/Races.ts");
/* harmony import */ var _types_interfaces_Film__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../types/interfaces/Film */ "./server/types/interfaces/Film.ts");
/* harmony import */ var _DB_getAll__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../DB/getAll */ "./server/DB/getAll.ts");








/* harmony default export */ __webpack_exports__["default"] = ((function () {
  var _getById = Object(_utils_memoize__WEBPACK_IMPORTED_MODULE_1__["asyncMemoize"])(Object(_DB_getById__WEBPACK_IMPORTED_MODULE_0__["getByIdQuery"])(_types_Tables__WEBPACK_IMPORTED_MODULE_2__["EntityTable"].Specie, [{
    tableName: _types_Tables__WEBPACK_IMPORTED_MODULE_2__["EntityTable"].Film,
    showFields: [_types_interfaces_Film__WEBPACK_IMPORTED_MODULE_6__["FilmFieldsNames"].Id, _types_interfaces_Film__WEBPACK_IMPORTED_MODULE_6__["FilmFieldsNames"].Title],
    fieldNameInResponse: 'films',
    manyToManyTableName: _types_Tables__WEBPACK_IMPORTED_MODULE_2__["ManyToManyTable"].SpeciesInFilms,
    intersectEntityOn: _types_interfaces_SpeciesInFilms__WEBPACK_IMPORTED_MODULE_4__["SpeciesInFilmsFieldsName"].FilmId,
    where: _types_interfaces_SpeciesInFilms__WEBPACK_IMPORTED_MODULE_4__["SpeciesInFilmsFieldsName"].SpecieId
  }, {
    tableName: _types_Tables__WEBPACK_IMPORTED_MODULE_2__["EntityTable"].People,
    showFields: [_types_interfaces_People__WEBPACK_IMPORTED_MODULE_3__["IPeopleEntityFields"].Id, _types_interfaces_People__WEBPACK_IMPORTED_MODULE_3__["IPeopleEntityFields"].Name],
    fieldNameInResponse: 'people',
    manyToManyTableName: _types_Tables__WEBPACK_IMPORTED_MODULE_2__["OneToManyTable"].Race,
    intersectEntityOn: _types_interfaces_Races__WEBPACK_IMPORTED_MODULE_5__["RaceFields"].PeopleId,
    where: _types_interfaces_Races__WEBPACK_IMPORTED_MODULE_5__["RaceFields"].SpecieId
  }]));

  return {
    getById: _getById,
    getAll: Object(_DB_getAll__WEBPACK_IMPORTED_MODULE_7__["getAll"])(_types_Tables__WEBPACK_IMPORTED_MODULE_2__["EntityTable"].Specie, _getById)
  };
})());

/***/ }),

/***/ "./server/controllers/starship.ts":
/*!****************************************!*\
  !*** ./server/controllers/starship.ts ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_memoize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/memoize */ "./server/utils/memoize.ts");
/* harmony import */ var _DB_getById__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../DB/getById */ "./server/DB/getById.ts");
/* harmony import */ var _types_Tables__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../types/Tables */ "./server/types/Tables.ts");
/* harmony import */ var _types_interfaces_Film__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../types/interfaces/Film */ "./server/types/interfaces/Film.ts");
/* harmony import */ var _types_interfaces_StarshipsInFilms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../types/interfaces/StarshipsInFilms */ "./server/types/interfaces/StarshipsInFilms.ts");
/* harmony import */ var _types_interfaces_People__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../types/interfaces/People */ "./server/types/interfaces/People.ts");
/* harmony import */ var _DB_getAll__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../DB/getAll */ "./server/DB/getAll.ts");
/* harmony import */ var _types_interfaces_StarshipPilot__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../types/interfaces/StarshipPilot */ "./server/types/interfaces/StarshipPilot.ts");








/* harmony default export */ __webpack_exports__["default"] = ((function () {
  var _getById = Object(_utils_memoize__WEBPACK_IMPORTED_MODULE_0__["asyncMemoize"])(Object(_DB_getById__WEBPACK_IMPORTED_MODULE_1__["getByIdQuery"])(_types_Tables__WEBPACK_IMPORTED_MODULE_2__["EntityTable"].Starship, [{
    tableName: _types_Tables__WEBPACK_IMPORTED_MODULE_2__["EntityTable"].Film,
    showFields: [_types_interfaces_Film__WEBPACK_IMPORTED_MODULE_3__["FilmFieldsNames"].Id, _types_interfaces_Film__WEBPACK_IMPORTED_MODULE_3__["FilmFieldsNames"].Title],
    fieldNameInResponse: 'films',
    manyToManyTableName: _types_Tables__WEBPACK_IMPORTED_MODULE_2__["ManyToManyTable"].StarshipsInFilms,
    intersectEntityOn: _types_interfaces_StarshipsInFilms__WEBPACK_IMPORTED_MODULE_4__["StarshipsInFilmsFields"].FilmId,
    where: _types_interfaces_StarshipsInFilms__WEBPACK_IMPORTED_MODULE_4__["StarshipsInFilmsFields"].StarshipId
  }, {
    tableName: _types_Tables__WEBPACK_IMPORTED_MODULE_2__["EntityTable"].People,
    showFields: [_types_interfaces_People__WEBPACK_IMPORTED_MODULE_5__["IPeopleEntityFields"].Id, _types_interfaces_People__WEBPACK_IMPORTED_MODULE_5__["IPeopleEntityFields"].Name],
    fieldNameInResponse: 'pilots',
    manyToManyTableName: _types_Tables__WEBPACK_IMPORTED_MODULE_2__["ManyToManyTable"].StarshipPilot,
    intersectEntityOn: _types_interfaces_StarshipPilot__WEBPACK_IMPORTED_MODULE_7__["StarshipPilotFieldsNames"].PeopleId,
    where: _types_interfaces_StarshipPilot__WEBPACK_IMPORTED_MODULE_7__["StarshipPilotFieldsNames"].StarshipId
  }]));

  return {
    getById: _getById,
    getAll: Object(_DB_getAll__WEBPACK_IMPORTED_MODULE_6__["getAll"])(_types_Tables__WEBPACK_IMPORTED_MODULE_2__["EntityTable"].Starship, _getById)
  };
})());

/***/ }),

/***/ "./server/controllers/vehicle.ts":
/*!***************************************!*\
  !*** ./server/controllers/vehicle.ts ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_memoize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/memoize */ "./server/utils/memoize.ts");
/* harmony import */ var _DB_getById__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../DB/getById */ "./server/DB/getById.ts");
/* harmony import */ var _types_Tables__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../types/Tables */ "./server/types/Tables.ts");
/* harmony import */ var _types_interfaces_People__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../types/interfaces/People */ "./server/types/interfaces/People.ts");
/* harmony import */ var _types_interfaces_Pilot__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../types/interfaces/Pilot */ "./server/types/interfaces/Pilot.ts");
/* harmony import */ var _types_interfaces_Film__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../types/interfaces/Film */ "./server/types/interfaces/Film.ts");
/* harmony import */ var _types_interfaces_VehiclesInFilms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../types/interfaces/VehiclesInFilms */ "./server/types/interfaces/VehiclesInFilms.ts");
/* harmony import */ var _DB_getAll__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../DB/getAll */ "./server/DB/getAll.ts");








/* harmony default export */ __webpack_exports__["default"] = ((function () {
  var _getById = Object(_utils_memoize__WEBPACK_IMPORTED_MODULE_0__["asyncMemoize"])(Object(_DB_getById__WEBPACK_IMPORTED_MODULE_1__["getByIdQuery"])(_types_Tables__WEBPACK_IMPORTED_MODULE_2__["EntityTable"].Vehicle, [{
    tableName: _types_Tables__WEBPACK_IMPORTED_MODULE_2__["EntityTable"].People,
    showFields: [_types_interfaces_People__WEBPACK_IMPORTED_MODULE_3__["IPeopleEntityFields"].Id, _types_interfaces_People__WEBPACK_IMPORTED_MODULE_3__["IPeopleEntityFields"].Name],
    fieldNameInResponse: 'pilots',
    manyToManyTableName: _types_Tables__WEBPACK_IMPORTED_MODULE_2__["ManyToManyTable"].Pilot,
    intersectEntityOn: _types_interfaces_Pilot__WEBPACK_IMPORTED_MODULE_4__["PilotFieldNames"].PeopleId,
    where: _types_interfaces_Pilot__WEBPACK_IMPORTED_MODULE_4__["PilotFieldNames"].VehicleId
  }, {
    tableName: _types_Tables__WEBPACK_IMPORTED_MODULE_2__["EntityTable"].Film,
    showFields: [_types_interfaces_Film__WEBPACK_IMPORTED_MODULE_5__["FilmFieldsNames"].Id, _types_interfaces_Film__WEBPACK_IMPORTED_MODULE_5__["FilmFieldsNames"].Title],
    fieldNameInResponse: 'films',
    manyToManyTableName: _types_Tables__WEBPACK_IMPORTED_MODULE_2__["ManyToManyTable"].VehiclesInFilms,
    intersectEntityOn: _types_interfaces_VehiclesInFilms__WEBPACK_IMPORTED_MODULE_6__["VehiclesInFilmsFieldsNames"].FilmId,
    where: _types_interfaces_VehiclesInFilms__WEBPACK_IMPORTED_MODULE_6__["VehiclesInFilmsFieldsNames"].VehicleId
  }]));

  return {
    getById: _getById,
    getAll: Object(_DB_getAll__WEBPACK_IMPORTED_MODULE_7__["getAll"])(_types_Tables__WEBPACK_IMPORTED_MODULE_2__["EntityTable"].Vehicle, _getById)
  };
})());

/***/ }),

/***/ "./server/index.ts":
/*!*************************!*\
  !*** ./server/index.ts ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(process) {/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _routes_film__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./routes/film */ "./server/routes/film.ts");
/* harmony import */ var helmet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! helmet */ "helmet");
/* harmony import */ var helmet__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(helmet__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _routes_planets__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./routes/planets */ "./server/routes/planets.ts");
/* harmony import */ var _routes_people__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./routes/people */ "./server/routes/people.ts");
/* harmony import */ var _routes_species__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./routes/species */ "./server/routes/species.ts");
/* harmony import */ var _routes_vehicle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./routes/vehicle */ "./server/routes/vehicle.ts");
/* harmony import */ var _routes_starship__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./routes/starship */ "./server/routes/starship.ts");
/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-router-config */ "react-router-config");
/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_router_config__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _client_routes__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../client/routes */ "./client/routes/index.tsx");




var app = __webpack_require__(/*! express */ "express")();









var getPort = function getPort(p) {
  return p && p.env && p.env.PORT ? p.env.PORT : 3000;
};

app.use(express__WEBPACK_IMPORTED_MODULE_0__["static"]('/build'));
app.use('/films', _routes_film__WEBPACK_IMPORTED_MODULE_1__["default"]);
app.use('/planets', _routes_planets__WEBPACK_IMPORTED_MODULE_3__["default"]);
app.use('/people', _routes_people__WEBPACK_IMPORTED_MODULE_4__["default"]);
app.use('/species', _routes_species__WEBPACK_IMPORTED_MODULE_5__["default"]);
app.use('/vehicles', _routes_vehicle__WEBPACK_IMPORTED_MODULE_6__["default"]);
app.use('/starships', _routes_starship__WEBPACK_IMPORTED_MODULE_7__["default"]);
app.get('/', function (req, res) {
  var promises = Object(react_router_config__WEBPACK_IMPORTED_MODULE_8__["matchRoutes"])(_client_routes__WEBPACK_IMPORTED_MODULE_9__["default"], req.path).map(function (_ref) {
    var route = _ref.route,
        match = _ref.match;
    return route.loadData ? route.loadData(match) : Promise.resolve(null);
  }).map(function (promise) {
    if (promise) {
      return new Promise(function (resolve, reject) {
        promise.then(resolve)["catch"](resolve);
      });
    }
  });
  Promise.all(promises).then(function () {
    var context = {}; //const content = renderer(req, /* store, */ context);

    /* 	if (context.url) {
    		return res.redirect(301, context.url);
    	}
    	if (context.notFound) {
    		res.status(404);
    	} */
    //res.send(content);
  });
});
app.use(helmet__WEBPACK_IMPORTED_MODULE_2__());
app.listen(getPort(process), function () {
  return console.log("server started on port ".concat(getPort(process)));
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./server/knexfile.ts":
/*!****************************!*\
  !*** ./server/knexfile.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _controllers_film__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../controllers/film */ "./server/controllers/film.ts");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }



var R = Object(express__WEBPACK_IMPORTED_MODULE_0__["Router"])();
R.get('/insert',
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(req, res) {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}());
R.get('/:id',
/*#__PURE__*/
function () {
  var _ref2 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2(req, res) {
    var result;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return _controllers_film__WEBPACK_IMPORTED_MODULE_1__["default"].getById(req.params.id)();

          case 2:
            result = _context2.sent;
            res.json(result);

          case 4:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function (_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}());
R.get('/',
/*#__PURE__*/
function () {
  var _ref3 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee3(req, res) {
    var result;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return _controllers_film__WEBPACK_IMPORTED_MODULE_1__["default"].getAll();

          case 2:
            result = _context3.sent;
            res.json(result);

          case 4:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function (_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}());
/* harmony default export */ __webpack_exports__["default"] = (R);

/***/ }),

/***/ "./server/routes/people.ts":
/*!*********************************!*\
  !*** ./server/routes/people.ts ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _controllers_people__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../controllers/people */ "./server/controllers/people.ts");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }



var R = Object(express__WEBPACK_IMPORTED_MODULE_0__["Router"])();
R.get('/:id',
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(req, res) {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _controllers_people__WEBPACK_IMPORTED_MODULE_1__["default"].getById(req.params.id)().then(function (result) {
              return res.json(result);
            });

          case 1:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}());
R.get('/',
/*#__PURE__*/
function () {
  var _ref2 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2(req, res) {
    var result;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return _controllers_people__WEBPACK_IMPORTED_MODULE_1__["default"].getAll();

          case 2:
            result = _context2.sent;
            res.json(result);

          case 4:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function (_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}());
/* harmony default export */ __webpack_exports__["default"] = (R);

/***/ }),

/***/ "./server/routes/planets.ts":
/*!**********************************!*\
  !*** ./server/routes/planets.ts ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _controllers_planet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../controllers/planet */ "./server/controllers/planet.ts");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }



var R = Object(express__WEBPACK_IMPORTED_MODULE_0__["Router"])();
R.get('/:id',
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(req, res) {
    var planet;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _controllers_planet__WEBPACK_IMPORTED_MODULE_1__["default"].getById(req.params.id)();

          case 2:
            planet = _context.sent;
            res.json(planet);

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}());
R.get('/',
/*#__PURE__*/
function () {
  var _ref2 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2(req, res) {
    var r;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return _controllers_planet__WEBPACK_IMPORTED_MODULE_1__["default"].getAll();

          case 2:
            r = _context2.sent;
            res.json(r);

          case 4:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function (_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}());
/* harmony default export */ __webpack_exports__["default"] = (R);

/***/ }),

/***/ "./server/routes/species.ts":
/*!**********************************!*\
  !*** ./server/routes/species.ts ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _controllers_specie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../controllers/specie */ "./server/controllers/specie.ts");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }



var R = Object(express__WEBPACK_IMPORTED_MODULE_0__["Router"])();
R.get('/:id',
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(req, res) {
    var result;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _controllers_specie__WEBPACK_IMPORTED_MODULE_1__["default"].getById(req.params.id)();

          case 2:
            result = _context.sent;
            res.json(result);

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}());
R.get('/',
/*#__PURE__*/
function () {
  var _ref2 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2(req, res) {
    var result;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return _controllers_specie__WEBPACK_IMPORTED_MODULE_1__["default"].getAll();

          case 2:
            result = _context2.sent;
            res.json(result);

          case 4:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function (_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}());
/* harmony default export */ __webpack_exports__["default"] = (R);

/***/ }),

/***/ "./server/routes/starship.ts":
/*!***********************************!*\
  !*** ./server/routes/starship.ts ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _controllers_starship__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../controllers/starship */ "./server/controllers/starship.ts");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }



var R = Object(express__WEBPACK_IMPORTED_MODULE_0__["Router"])();
R.get('/:id',
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(req, res) {
    var result;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _controllers_starship__WEBPACK_IMPORTED_MODULE_1__["default"].getById(req.params.id);

          case 2:
            result = _context.sent;
            res.json(result);

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}());
R.get('/',
/*#__PURE__*/
function () {
  var _ref2 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2(req, res) {
    var result;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return _controllers_starship__WEBPACK_IMPORTED_MODULE_1__["default"].getAll();

          case 2:
            result = _context2.sent;
            res.json(result);

          case 4:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function (_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}());
/* harmony default export */ __webpack_exports__["default"] = (R);

/***/ }),

/***/ "./server/routes/vehicle.ts":
/*!**********************************!*\
  !*** ./server/routes/vehicle.ts ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _controllers_vehicle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../controllers/vehicle */ "./server/controllers/vehicle.ts");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }



var R = Object(express__WEBPACK_IMPORTED_MODULE_0__["Router"])();
R.get('/:id',
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(req, res) {
    var result;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _controllers_vehicle__WEBPACK_IMPORTED_MODULE_1__["default"].getById(req.params.id)();

          case 2:
            result = _context.sent;
            res.json(result);

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}());
R.get('/',
/*#__PURE__*/
function () {
  var _ref2 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2(req, res) {
    var result;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return _controllers_vehicle__WEBPACK_IMPORTED_MODULE_1__["default"].getAll();

          case 2:
            result = _context2.sent;
            res.json(result);

          case 4:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function (_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}());
/* harmony default export */ __webpack_exports__["default"] = (R);

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
/*! exports provided: Table, ManyToManyTable, OneToManyTable, EntityTable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Table", function() { return Table; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManyToManyTable", function() { return ManyToManyTable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OneToManyTable", function() { return OneToManyTable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntityTable", function() { return EntityTable; });
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
})(Table || (Table = {}));

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
})(ManyToManyTable || (ManyToManyTable = {}));

var OneToManyTable;

(function (OneToManyTable) {
  OneToManyTable["Race"] = "race";
})(OneToManyTable || (OneToManyTable = {}));

var EntityTable;

(function (EntityTable) {
  EntityTable["Film"] = "film";
  EntityTable["People"] = "people";
  EntityTable["Planet"] = "planet";
  EntityTable["Specie"] = "specie";
  EntityTable["Starship"] = "starship";
  EntityTable["Vehicle"] = "vehicle";
  EntityTable["Test"] = "test";
})(EntityTable || (EntityTable = {}));

/***/ }),

/***/ "./server/types/interfaces/Actors.ts":
/*!*******************************************!*\
  !*** ./server/types/interfaces/Actors.ts ***!
  \*******************************************/
/*! exports provided: IActorsFieldsNames */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IActorsFieldsNames", function() { return IActorsFieldsNames; });
var IActorsFieldsNames;

(function (IActorsFieldsNames) {
  IActorsFieldsNames["Id"] = "id";
  IActorsFieldsNames["PeopleId"] = "people_id";
  IActorsFieldsNames["FilmId"] = "film_id";
})(IActorsFieldsNames || (IActorsFieldsNames = {}));

/***/ }),

/***/ "./server/types/interfaces/Film.ts":
/*!*****************************************!*\
  !*** ./server/types/interfaces/Film.ts ***!
  \*****************************************/
/*! exports provided: FilmFields, FilmFieldsNames */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilmFields", function() { return FilmFields; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilmFieldsNames", function() { return FilmFieldsNames; });
var FilmFields;

(function (_FilmFields) {})(FilmFields || (FilmFields = {}));

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
})(FilmFieldsNames || (FilmFieldsNames = {}));

/***/ }),

/***/ "./server/types/interfaces/People.ts":
/*!*******************************************!*\
  !*** ./server/types/interfaces/People.ts ***!
  \*******************************************/
/*! exports provided: IPeopleEntityFields */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IPeopleEntityFields", function() { return IPeopleEntityFields; });
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
})(IPeopleEntityFields || (IPeopleEntityFields = {}));

/***/ }),

/***/ "./server/types/interfaces/Pilot.ts":
/*!******************************************!*\
  !*** ./server/types/interfaces/Pilot.ts ***!
  \******************************************/
/*! exports provided: PilotFieldNames, PilotFieldTypes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PilotFieldNames", function() { return PilotFieldNames; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PilotFieldTypes", function() { return PilotFieldTypes; });
var PilotFieldNames;

(function (PilotFieldNames) {
  PilotFieldNames["Id"] = "id";
  PilotFieldNames["VehicleId"] = "vehicle_id";
  PilotFieldNames["PeopleId"] = "people_id";
})(PilotFieldNames || (PilotFieldNames = {}));

var PilotFieldTypes;

(function (_PilotFieldTypes) {})(PilotFieldTypes || (PilotFieldTypes = {}));

/***/ }),

/***/ "./server/types/interfaces/Races.ts":
/*!******************************************!*\
  !*** ./server/types/interfaces/Races.ts ***!
  \******************************************/
/*! exports provided: RaceFields */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RaceFields", function() { return RaceFields; });
var RaceFields;

(function (RaceFields) {
  RaceFields["id"] = "id";
  RaceFields["PeopleId"] = "people_id";
  RaceFields["SpecieId"] = "specie_id";
})(RaceFields || (RaceFields = {}));

/***/ }),

/***/ "./server/types/interfaces/Specie.ts":
/*!*******************************************!*\
  !*** ./server/types/interfaces/Specie.ts ***!
  \*******************************************/
/*! exports provided: ISpecieEntityFields */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ISpecieEntityFields", function() { return ISpecieEntityFields; });
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
})(ISpecieEntityFields || (ISpecieEntityFields = {}));

/***/ }),

/***/ "./server/types/interfaces/SpeciesInFilms.ts":
/*!***************************************************!*\
  !*** ./server/types/interfaces/SpeciesInFilms.ts ***!
  \***************************************************/
/*! exports provided: SpeciesInFilmsFieldsType, SpeciesInFilmsFieldsName */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpeciesInFilmsFieldsType", function() { return SpeciesInFilmsFieldsType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpeciesInFilmsFieldsName", function() { return SpeciesInFilmsFieldsName; });
var SpeciesInFilmsFieldsType;

(function (_SpeciesInFilmsFieldsType) {})(SpeciesInFilmsFieldsType || (SpeciesInFilmsFieldsType = {}));

var SpeciesInFilmsFieldsName;

(function (SpeciesInFilmsFieldsName) {
  SpeciesInFilmsFieldsName["Id"] = "id";
  SpeciesInFilmsFieldsName["FilmId"] = "film_id";
  SpeciesInFilmsFieldsName["SpecieId"] = "specie_id";
})(SpeciesInFilmsFieldsName || (SpeciesInFilmsFieldsName = {}));

/***/ }),

/***/ "./server/types/interfaces/Starship.ts":
/*!*********************************************!*\
  !*** ./server/types/interfaces/Starship.ts ***!
  \*********************************************/
/*! exports provided: StarshipEntityFields */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StarshipEntityFields", function() { return StarshipEntityFields; });
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
})(StarshipEntityFields || (StarshipEntityFields = {}));

/***/ }),

/***/ "./server/types/interfaces/StarshipPilot.ts":
/*!**************************************************!*\
  !*** ./server/types/interfaces/StarshipPilot.ts ***!
  \**************************************************/
/*! exports provided: StarshipPilotFields, StarshipPilotFieldsNames */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StarshipPilotFields", function() { return StarshipPilotFields; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StarshipPilotFieldsNames", function() { return StarshipPilotFieldsNames; });
var StarshipPilotFields;

(function (_StarshipPilotFields) {})(StarshipPilotFields || (StarshipPilotFields = {}));

var StarshipPilotFieldsNames;

(function (StarshipPilotFieldsNames) {
  StarshipPilotFieldsNames["Id"] = "id";
  StarshipPilotFieldsNames["StarshipId"] = "starship_id";
  StarshipPilotFieldsNames["PeopleId"] = "people_id";
})(StarshipPilotFieldsNames || (StarshipPilotFieldsNames = {}));

/***/ }),

/***/ "./server/types/interfaces/StarshipsInFilms.ts":
/*!*****************************************************!*\
  !*** ./server/types/interfaces/StarshipsInFilms.ts ***!
  \*****************************************************/
/*! exports provided: StarshipsInFilmsFields */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StarshipsInFilmsFields", function() { return StarshipsInFilmsFields; });
var StarshipsInFilmsFields;

(function (StarshipsInFilmsFields) {
  StarshipsInFilmsFields["Id"] = "id";
  StarshipsInFilmsFields["StarshipId"] = "starship_id";
  StarshipsInFilmsFields["FilmId"] = "film_id";
})(StarshipsInFilmsFields || (StarshipsInFilmsFields = {}));

/***/ }),

/***/ "./server/types/interfaces/Vehicle.ts":
/*!********************************************!*\
  !*** ./server/types/interfaces/Vehicle.ts ***!
  \********************************************/
/*! exports provided: VehicleFieldsNames */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VehicleFieldsNames", function() { return VehicleFieldsNames; });
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
})(VehicleFieldsNames || (VehicleFieldsNames = {}));

/***/ }),

/***/ "./server/types/interfaces/VehiclesInFilms.ts":
/*!****************************************************!*\
  !*** ./server/types/interfaces/VehiclesInFilms.ts ***!
  \****************************************************/
/*! exports provided: VehiclesInFilmsFieldsNames */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VehiclesInFilmsFieldsNames", function() { return VehiclesInFilmsFieldsNames; });
var VehiclesInFilmsFieldsNames;

(function (VehiclesInFilmsFieldsNames) {
  VehiclesInFilmsFieldsNames["Id"] = "id";
  VehiclesInFilmsFieldsNames["VehicleId"] = "vehicle_id";
  VehiclesInFilmsFieldsNames["FilmId"] = "film_id";
})(VehiclesInFilmsFieldsNames || (VehiclesInFilmsFieldsNames = {}));

/***/ }),

/***/ "./server/utils/asyncCompose.ts":
/*!**************************************!*\
  !*** ./server/utils/asyncCompose.ts ***!
  \**************************************/
/*! exports provided: asyncCompose */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "asyncCompose", function() { return asyncCompose; });
var asyncCompose = function asyncCompose() {
  for (var _len = arguments.length, fns = new Array(_len), _key = 0; _key < _len; _key++) {
    fns[_key] = arguments[_key];
  }

  return function (data) {
    return fns.reduceRight(function (acc, f, index) {
      return acc.then(function (v) {
        return f(v);
      })["catch"](function (e) {
        return console.log(e);
      });
    }, data);
  };
};

/***/ }),

/***/ "./server/utils/logger.ts":
/*!********************************!*\
  !*** ./server/utils/logger.ts ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(process) {function logger(p, logFn) {
  return function (message) {
    return p.env.NODE_ENV === 'development' && logFn(message);
  };
}

/* harmony default export */ __webpack_exports__["default"] = (logger(process, console.log));
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./server/utils/memoize.ts":
/*!*********************************!*\
  !*** ./server/utils/memoize.ts ***!
  \*********************************/
/*! exports provided: memoize, asyncMemoize */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "memoize", function() { return memoize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "asyncMemoize", function() { return asyncMemoize; });
/* harmony import */ var _logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./logger */ "./server/utils/logger.ts");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }


var memoize = function memoize(fn) {
  var state = {};
  return function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var key = [].concat(args).reduce(function (acc, curr) {
      return acc.concat(curr);
    }, '');

    if (Object.keys(state).some(function (k) {
      return k === key;
    })) {
      return function () {
        return state[key];
      };
    } else {
      state[key] = fn.apply(void 0, args);
      return function () {
        return state[key];
      };
    }
  };
};
var asyncMemoize = function asyncMemoize(fn) {
  var state = {};
  return function (args) {
    var key = _toConsumableArray(args).reduce(function (acc, curr) {
      return acc.concat(curr);
    }, '');

    if (Object.keys(state).some(function (k) {
      return k === key;
    })) {
      Object(_logger__WEBPACK_IMPORTED_MODULE_0__["default"])('Memoize: Data extracted From Cache');
      return function () {
        return state[key];
      };
    } else {
      Object(_logger__WEBPACK_IMPORTED_MODULE_0__["default"])('Memoize: data extracted From DB');
      state[key] = fn(args);
      return function () {
        return state[key];
      };
    }
  };
};

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

/***/ "react-router-config":
/*!**************************************!*\
  !*** external "react-router-config" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-router-config");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L3BhZ2VzL0Fib3V0LnRzeCIsIndlYnBhY2s6Ly8vLi9jbGllbnQvcGFnZXMvQ29udGFjdC50c3giLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L3BhZ2VzL0hvbWUudHN4Iiwid2VicGFjazovLy8uL2NsaWVudC9yb3V0ZXMvaW5kZXgudHN4Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9wcm9jZXNzL2Jyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL0RCL2dldEFsbC50cyIsIndlYnBhY2s6Ly8vLi9zZXJ2ZXIvREIvZ2V0QnlJZC50cyIsIndlYnBhY2s6Ly8vLi9zZXJ2ZXIvREIvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL2NvbnRyb2xsZXJzL2ZpbG0udHMiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL2NvbnRyb2xsZXJzL3Blb3BsZS50cyIsIndlYnBhY2s6Ly8vLi9zZXJ2ZXIvY29udHJvbGxlcnMvcGxhbmV0LnRzIiwid2VicGFjazovLy8uL3NlcnZlci9jb250cm9sbGVycy9zcGVjaWUudHMiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL2NvbnRyb2xsZXJzL3N0YXJzaGlwLnRzIiwid2VicGFjazovLy8uL3NlcnZlci9jb250cm9sbGVycy92ZWhpY2xlLnRzIiwid2VicGFjazovLy8uL3NlcnZlci9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zZXJ2ZXIva25leGZpbGUudHMiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL3JvdXRlcy9maWxtLnRzIiwid2VicGFjazovLy8uL3NlcnZlci9yb3V0ZXMvcGVvcGxlLnRzIiwid2VicGFjazovLy8uL3NlcnZlci9yb3V0ZXMvcGxhbmV0cy50cyIsIndlYnBhY2s6Ly8vLi9zZXJ2ZXIvcm91dGVzL3NwZWNpZXMudHMiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL3JvdXRlcy9zdGFyc2hpcC50cyIsIndlYnBhY2s6Ly8vLi9zZXJ2ZXIvcm91dGVzL3ZlaGljbGUudHMiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL3NldHRpbmdzLmpzIiwid2VicGFjazovLy8uL3NlcnZlci90eXBlcy9UYWJsZXMudHMiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL3R5cGVzL2ludGVyZmFjZXMvQWN0b3JzLnRzIiwid2VicGFjazovLy8uL3NlcnZlci90eXBlcy9pbnRlcmZhY2VzL0ZpbG0udHMiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL3R5cGVzL2ludGVyZmFjZXMvUGVvcGxlLnRzIiwid2VicGFjazovLy8uL3NlcnZlci90eXBlcy9pbnRlcmZhY2VzL1BpbG90LnRzIiwid2VicGFjazovLy8uL3NlcnZlci90eXBlcy9pbnRlcmZhY2VzL1JhY2VzLnRzIiwid2VicGFjazovLy8uL3NlcnZlci90eXBlcy9pbnRlcmZhY2VzL1NwZWNpZS50cyIsIndlYnBhY2s6Ly8vLi9zZXJ2ZXIvdHlwZXMvaW50ZXJmYWNlcy9TcGVjaWVzSW5GaWxtcy50cyIsIndlYnBhY2s6Ly8vLi9zZXJ2ZXIvdHlwZXMvaW50ZXJmYWNlcy9TdGFyc2hpcC50cyIsIndlYnBhY2s6Ly8vLi9zZXJ2ZXIvdHlwZXMvaW50ZXJmYWNlcy9TdGFyc2hpcFBpbG90LnRzIiwid2VicGFjazovLy8uL3NlcnZlci90eXBlcy9pbnRlcmZhY2VzL1N0YXJzaGlwc0luRmlsbXMudHMiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL3R5cGVzL2ludGVyZmFjZXMvVmVoaWNsZS50cyIsIndlYnBhY2s6Ly8vLi9zZXJ2ZXIvdHlwZXMvaW50ZXJmYWNlcy9WZWhpY2xlc0luRmlsbXMudHMiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL3V0aWxzL2FzeW5jQ29tcG9zZS50cyIsIndlYnBhY2s6Ly8vLi9zZXJ2ZXIvdXRpbHMvbG9nZ2VyLnRzIiwid2VicGFjazovLy8uL3NlcnZlci91dGlscy9tZW1vaXplLnRzIiwid2VicGFjazovLy9leHRlcm5hbCBcImV4cHJlc3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJoZWxtZXRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJrbmV4XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmFtZGFcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXJvdXRlci1jb25maWdcIiJdLCJuYW1lcyI6WyJBYm91dCIsInByb3BzIiwiQ29udGFjdCIsIkhvbWUiLCJyb3V0ZXMiLCJwYXRoIiwiY29tcG9uZW50IiwiZ2V0SWRzIiwidGFibGVOYW1lIiwia25leCIsInNlbGVjdCIsImZyb20iLCJfZ2V0QWxsIiwiZ2V0QnlJZEhhbmRsZXIiLCJpZHMiLCJtYXAiLCJvIiwiaWQiLCJtYXBQcm9taXNlc1RvUmVzdWx0IiwicHJvbWlzZXMiLCJQcm9taXNlIiwiYWxsIiwiZ2V0QWxsIiwidGFibGUiLCJjb25maWd1cmVkR2V0QnlJZEhhbmRsZXIiLCJhc3luY0NvbXBvc2UiLCJyZXNvbHZlIiwiZ2V0QnlJZFF1ZXJ5IiwiZm9yZWlnbkZpZWxkcyIsIm1hcERCUmVzcG9uc2UiLCJyZXMiLCJyb3dzIiwianNvbl9idWlsZF9vYmplY3QiLCJmZXRjaEVudGl0eVdpdGhNYW55VG9NYW55RmllbGRzIiwiZ2V0TU1GaWVsZHNRdWVyeUZyb20iLCJtYW55VG9NYW55RmllbGRzIiwicmVzdWx0IiwiT2JqZWN0Iiwia2V5cyIsInJlZHVjZSIsImFjYyIsImN1cnIiLCJpbmRleCIsInVuZGVmaW5lZCIsImZpZWxkTmFtZUluUmVzcG9uc2UiLCJnZXRNTUZpZWxkQnlJZCIsInJhdyIsIndyYXAiLCJtYW55VG9NYW55UXVlcnkiLCJmaWVsZERhdGEiLCJ3aGVyZSIsImZpZWxkTmFtZSIsInF1ZXJ5Iiwic2hvd0ZpZWxkcyIsIm1hbnlUb01hbnlUYWJsZU5hbWUiLCJpbnRlcnNlY3RFbnRpdHlPbiIsImNvbmNhdEZpZWxkc1dpdGhUYWJsZU5hbWUiLCJmaWVsZCIsImJ1aWxkTU1GUXVlcnkiLCJjb21wb3NlIiwiZmllbGRzIiwicmVxdWlyZSIsImRldmVsb3BtZW50IiwiX2dldEJ5SWQiLCJNZW0iLCJFbnRpdHlUYWJsZSIsIkZpbG0iLCJWZWhpY2xlIiwiVmVoaWNsZUZpZWxkc05hbWVzIiwiSWQiLCJOYW1lIiwiTWFueVRvTWFueVRhYmxlIiwiVmVoaWNsZXNJbkZpbG1zIiwiVmVoaWNsZXNJbkZpbG1zRmllbGRzTmFtZXMiLCJWZWhpY2xlSWQiLCJQZW9wbGUiLCJJUGVvcGxlRW50aXR5RmllbGRzIiwiQWN0b3JzIiwiSUFjdG9yc0ZpZWxkc05hbWVzIiwiUGVvcGxlSWQiLCJGaWxtSWQiLCJTdGFyc2hpcCIsIlN0YXJzaGlwc0luRmlsbXMiLCJQbGFuZXQiLCJQbGFuZXRzSW5GaWxtcyIsImdldEJ5SWQiLCJGaWxtRmllbGRzTmFtZXMiLCJUaXRsZSIsIlNwZWNpZSIsIklTcGVjaWVFbnRpdHlGaWVsZHMiLCJPbmVUb01hbnlUYWJsZSIsIlJhY2UiLCJSYWNlRmllbGRzIiwiU3BlY2llSWQiLCJQaWxvdCIsIlBpbG90RmllbGROYW1lcyIsIlN0YXJzaGlwRW50aXR5RmllbGRzIiwiU3RhcnNoaXBQaWxvdCIsIlN0YXJzaGlwUGlsb3RGaWVsZHNOYW1lcyIsIlN0YXJzaGlwSWQiLCJSZXNpZGVudCIsIlNwZWNpZXNJbkZpbG1zIiwiU3BlY2llc0luRmlsbXNGaWVsZHNOYW1lIiwiU3RhcnNoaXBzSW5GaWxtc0ZpZWxkcyIsImFwcCIsImdldFBvcnQiLCJwIiwiZW52IiwiUE9SVCIsInVzZSIsImV4cHJlc3MiLCJmaWxtIiwicGxhbmV0IiwicGVvcGxlIiwic3BlY2llIiwidmVoaWNsZSIsInN0YXJzaGlwIiwiZ2V0IiwicmVxIiwibWF0Y2hSb3V0ZXMiLCJSb3V0ZXMiLCJyb3V0ZSIsIm1hdGNoIiwibG9hZERhdGEiLCJwcm9taXNlIiwicmVqZWN0IiwidGhlbiIsImNvbnRleHQiLCJoZWxtZXQiLCJsaXN0ZW4iLCJwcm9jZXNzIiwiY29uc29sZSIsImxvZyIsInMiLCJtb2R1bGUiLCJleHBvcnRzIiwiY2xpZW50IiwiY29ubmVjdGlvbiIsInVzZXIiLCJob3N0IiwiZGF0YWJhc2UiLCJwYXNzd29yZCIsInNzbCIsIlIiLCJSb3V0ZXIiLCJwYXJhbXMiLCJqc29uIiwiciIsIlRhYmxlIiwiRmlsbUZpZWxkcyIsIlBpbG90RmllbGRUeXBlcyIsIlNwZWNpZXNJbkZpbG1zRmllbGRzVHlwZSIsIlN0YXJzaGlwUGlsb3RGaWVsZHMiLCJmbnMiLCJkYXRhIiwicmVkdWNlUmlnaHQiLCJmIiwidiIsImUiLCJsb2dnZXIiLCJsb2dGbiIsIm1lc3NhZ2UiLCJOT0RFX0VOViIsIm1lbW9pemUiLCJmbiIsInN0YXRlIiwiYXJncyIsImtleSIsImNvbmNhdCIsInNvbWUiLCJrIiwiYXN5bmNNZW1vaXplIiwiTG9nIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBQTtBQUFBOztBQUdBLElBQU1BLEtBQUssR0FBRyxTQUFSQSxLQUFRLENBQUNDLEtBQUQ7QUFBQSxTQUNWLDZFQURV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InNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2J1aWxkXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc2VydmVyL2luZGV4LnRzXCIpO1xuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuXHJcbmNvbnN0IEFib3V0ID0gKHByb3BzOmFueSkgPT4oXHJcbiAgICA8ZGl2PlxyXG4gICAgICBBYm91dCB1cyFcclxuICAgIDwvZGl2PlxyXG4pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQWJvdXQ7XHJcblxyXG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5cclxuY29uc3QgQ29udGFjdCA9IChwcm9wczphbnkpID0+KFxyXG4gICAgPGRpdj5cclxuICAgICAgQ29udGFjdFxyXG4gICAgPC9kaXY+XHJcbik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb250YWN0O1xyXG5cclxuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuY29uc3QgSG9tZSA9IChwcm9wczphbnkpPT4oXHJcbiAgICA8ZGl2PlxyXG4gICAgICAgIFdlbGNvbWUgVG8gUmVhY3QgU1NSIVxyXG4gICAgPC9kaXY+XHJcbik7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZTsiLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IFJvdXRlQ29uZmlnIH0gZnJvbSAncmVhY3Qtcm91dGVyLWNvbmZpZyc7XHJcbmltcG9ydCBIb21lIGZyb20gJy4uL3BhZ2VzL0hvbWUnO1xyXG5pbXBvcnQgQWJvdXQgZnJvbSAnLi4vcGFnZXMvQWJvdXQnO1xyXG5pbXBvcnQgQ29udGFjdCBmcm9tICcuLi9wYWdlcy9Db250YWN0JztcclxuXHJcbmNvbnN0IHJvdXRlczpSb3V0ZUNvbmZpZ1tdID0gW1xyXG4gICAge1xyXG4gICAgICAgIHBhdGg6ICcvaG9tZScsXHJcbiAgICAgICAgY29tcG9uZW50OiBIb21lXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHBhdGg6ICcvYWJvdXQnLFxyXG4gICAgICAgIGNvbXBvbmVudDogQWJvdXRcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgcGF0aDogJy9jb250YWN0JyxcclxuICAgICAgICBjb21wb25lbnQ6IENvbnRhY3RcclxuICAgIH1cclxuXVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJvdXRlcztcclxuIiwiLy8gc2hpbSBmb3IgdXNpbmcgcHJvY2VzcyBpbiBicm93c2VyXG52YXIgcHJvY2VzcyA9IG1vZHVsZS5leHBvcnRzID0ge307XG5cbi8vIGNhY2hlZCBmcm9tIHdoYXRldmVyIGdsb2JhbCBpcyBwcmVzZW50IHNvIHRoYXQgdGVzdCBydW5uZXJzIHRoYXQgc3R1YiBpdFxuLy8gZG9uJ3QgYnJlYWsgdGhpbmdzLiAgQnV0IHdlIG5lZWQgdG8gd3JhcCBpdCBpbiBhIHRyeSBjYXRjaCBpbiBjYXNlIGl0IGlzXG4vLyB3cmFwcGVkIGluIHN0cmljdCBtb2RlIGNvZGUgd2hpY2ggZG9lc24ndCBkZWZpbmUgYW55IGdsb2JhbHMuICBJdCdzIGluc2lkZSBhXG4vLyBmdW5jdGlvbiBiZWNhdXNlIHRyeS9jYXRjaGVzIGRlb3B0aW1pemUgaW4gY2VydGFpbiBlbmdpbmVzLlxuXG52YXIgY2FjaGVkU2V0VGltZW91dDtcbnZhciBjYWNoZWRDbGVhclRpbWVvdXQ7XG5cbmZ1bmN0aW9uIGRlZmF1bHRTZXRUaW1vdXQoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdzZXRUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG5mdW5jdGlvbiBkZWZhdWx0Q2xlYXJUaW1lb3V0ICgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2NsZWFyVGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuKGZ1bmN0aW9uICgpIHtcbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIHNldFRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIGNsZWFyVGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICB9XG59ICgpKVxuZnVuY3Rpb24gcnVuVGltZW91dChmdW4pIHtcbiAgICBpZiAoY2FjaGVkU2V0VGltZW91dCA9PT0gc2V0VGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgLy8gaWYgc2V0VGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZFNldFRpbWVvdXQgPT09IGRlZmF1bHRTZXRUaW1vdXQgfHwgIWNhY2hlZFNldFRpbWVvdXQpICYmIHNldFRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9IGNhdGNoKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0IHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKG51bGwsIGZ1biwgMCk7XG4gICAgICAgIH0gY2F0Y2goZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvclxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbCh0aGlzLCBmdW4sIDApO1xuICAgICAgICB9XG4gICAgfVxuXG5cbn1cbmZ1bmN0aW9uIHJ1bkNsZWFyVGltZW91dChtYXJrZXIpIHtcbiAgICBpZiAoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgLy8gaWYgY2xlYXJUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBkZWZhdWx0Q2xlYXJUaW1lb3V0IHx8ICFjYWNoZWRDbGVhclRpbWVvdXQpICYmIGNsZWFyVGltZW91dCkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfSBjYXRjaCAoZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgIHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwobnVsbCwgbWFya2VyKTtcbiAgICAgICAgfSBjYXRjaCAoZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvci5cbiAgICAgICAgICAgIC8vIFNvbWUgdmVyc2lvbnMgb2YgSS5FLiBoYXZlIGRpZmZlcmVudCBydWxlcyBmb3IgY2xlYXJUaW1lb3V0IHZzIHNldFRpbWVvdXRcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbCh0aGlzLCBtYXJrZXIpO1xuICAgICAgICB9XG4gICAgfVxuXG5cblxufVxudmFyIHF1ZXVlID0gW107XG52YXIgZHJhaW5pbmcgPSBmYWxzZTtcbnZhciBjdXJyZW50UXVldWU7XG52YXIgcXVldWVJbmRleCA9IC0xO1xuXG5mdW5jdGlvbiBjbGVhblVwTmV4dFRpY2soKSB7XG4gICAgaWYgKCFkcmFpbmluZyB8fCAhY3VycmVudFF1ZXVlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBpZiAoY3VycmVudFF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBxdWV1ZSA9IGN1cnJlbnRRdWV1ZS5jb25jYXQocXVldWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICB9XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBkcmFpblF1ZXVlKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBkcmFpblF1ZXVlKCkge1xuICAgIGlmIChkcmFpbmluZykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciB0aW1lb3V0ID0gcnVuVGltZW91dChjbGVhblVwTmV4dFRpY2spO1xuICAgIGRyYWluaW5nID0gdHJ1ZTtcblxuICAgIHZhciBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgd2hpbGUobGVuKSB7XG4gICAgICAgIGN1cnJlbnRRdWV1ZSA9IHF1ZXVlO1xuICAgICAgICBxdWV1ZSA9IFtdO1xuICAgICAgICB3aGlsZSAoKytxdWV1ZUluZGV4IDwgbGVuKSB7XG4gICAgICAgICAgICBpZiAoY3VycmVudFF1ZXVlKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudFF1ZXVlW3F1ZXVlSW5kZXhdLnJ1bigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICAgICAgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIH1cbiAgICBjdXJyZW50UXVldWUgPSBudWxsO1xuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgcnVuQ2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xufVxuXG5wcm9jZXNzLm5leHRUaWNrID0gZnVuY3Rpb24gKGZ1bikge1xuICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGggLSAxKTtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGFyZ3NbaSAtIDFdID0gYXJndW1lbnRzW2ldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHF1ZXVlLnB1c2gobmV3IEl0ZW0oZnVuLCBhcmdzKSk7XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCA9PT0gMSAmJiAhZHJhaW5pbmcpIHtcbiAgICAgICAgcnVuVGltZW91dChkcmFpblF1ZXVlKTtcbiAgICB9XG59O1xuXG4vLyB2OCBsaWtlcyBwcmVkaWN0aWJsZSBvYmplY3RzXG5mdW5jdGlvbiBJdGVtKGZ1biwgYXJyYXkpIHtcbiAgICB0aGlzLmZ1biA9IGZ1bjtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG59XG5JdGVtLnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5mdW4uYXBwbHkobnVsbCwgdGhpcy5hcnJheSk7XG59O1xucHJvY2Vzcy50aXRsZSA9ICdicm93c2VyJztcbnByb2Nlc3MuYnJvd3NlciA9IHRydWU7XG5wcm9jZXNzLmVudiA9IHt9O1xucHJvY2Vzcy5hcmd2ID0gW107XG5wcm9jZXNzLnZlcnNpb24gPSAnJzsgLy8gZW1wdHkgc3RyaW5nIHRvIGF2b2lkIHJlZ2V4cCBpc3N1ZXNcbnByb2Nlc3MudmVyc2lvbnMgPSB7fTtcblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbnByb2Nlc3Mub24gPSBub29wO1xucHJvY2Vzcy5hZGRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLm9uY2UgPSBub29wO1xucHJvY2Vzcy5vZmYgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUFsbExpc3RlbmVycyA9IG5vb3A7XG5wcm9jZXNzLmVtaXQgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kT25jZUxpc3RlbmVyID0gbm9vcDtcblxucHJvY2Vzcy5saXN0ZW5lcnMgPSBmdW5jdGlvbiAobmFtZSkgeyByZXR1cm4gW10gfVxuXG5wcm9jZXNzLmJpbmRpbmcgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5iaW5kaW5nIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5cbnByb2Nlc3MuY3dkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gJy8nIH07XG5wcm9jZXNzLmNoZGlyID0gZnVuY3Rpb24gKGRpcikge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5jaGRpciBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xucHJvY2Vzcy51bWFzayA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gMDsgfTtcbiIsImltcG9ydCB7IEVudGl0eVRhYmxlIH0gZnJvbSBcIi4uL3R5cGVzL1RhYmxlc1wiO1xyXG5pbXBvcnQgeyBrbmV4IH0gZnJvbSBcIi5cIjtcclxuaW1wb3J0IHsgYXN5bmNDb21wb3NlIH0gZnJvbSBcIi4uL3V0aWxzL2FzeW5jQ29tcG9zZVwiO1xyXG5cclxudHlwZSBHZXRCeUlkSGFuZGxlciA9IChhOiBhbnkpID0+ICgpID0+IFByb21pc2U8YW55PlxyXG5cclxuY29uc3QgZ2V0SWRzID0gKHRhYmxlTmFtZTogRW50aXR5VGFibGUpOiBQcm9taXNlPHsgaWQ6IHN0cmluZyB9W10+ID0+IGtuZXguc2VsZWN0KCdpZCcpLmZyb20odGFibGVOYW1lKTtcclxuXHJcbmNvbnN0IF9nZXRBbGwgPSAoZ2V0QnlJZEhhbmRsZXI6IEdldEJ5SWRIYW5kbGVyKSA9PlxyXG4gIChpZHM6IHsgaWQ6IHN0cmluZyB9W10pOiBQcm9taXNlPGFueVtdPltdID0+IGlkcy5tYXAobyA9PiBnZXRCeUlkSGFuZGxlcihvLmlkKSgpKVxyXG5cclxuY29uc3QgbWFwUHJvbWlzZXNUb1Jlc3VsdCA9IChwcm9taXNlczogUHJvbWlzZTxhbnlbXT5bXSk6IFByb21pc2U8YW55W10+ID0+IFByb21pc2UuYWxsKHByb21pc2VzKTtcclxuXHJcblxyXG5leHBvcnQgY29uc3QgZ2V0QWxsID0gKHRhYmxlOiBFbnRpdHlUYWJsZSwgY29uZmlndXJlZEdldEJ5SWRIYW5kbGVyOiBHZXRCeUlkSGFuZGxlcikgPT4gKCkgPT5cclxuICBhc3luY0NvbXBvc2UoXHJcbiAgICBtYXBQcm9taXNlc1RvUmVzdWx0LFxyXG4gICAgX2dldEFsbChjb25maWd1cmVkR2V0QnlJZEhhbmRsZXIpLFxyXG4gICAgZ2V0SWRzXHJcbiAgKShQcm9taXNlLnJlc29sdmUodGFibGUpKVxyXG5cclxuXHJcbiIsImltcG9ydCB7IE1hbnlUb01hbnlUYWJsZSwgRW50aXR5VGFibGUsIE9uZVRvTWFueVRhYmxlIH0gZnJvbSAnLi4vdHlwZXMvVGFibGVzJztcclxuaW1wb3J0IHsga25leCB9IGZyb20gJy4vaW5kZXgnO1xyXG5pbXBvcnQgeyBJUG9zdGdyZXNKc29uQnVpbGRPYmplY3QgfSBmcm9tICcuLi90eXBlcy9EQic7XHJcbmltcG9ydCB7IGNvbXBvc2UgfSBmcm9tICdyYW1kYSc7XHJcbmltcG9ydCB7IGFzeW5jQ29tcG9zZSB9IGZyb20gJy4uL3V0aWxzL2FzeW5jQ29tcG9zZSc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElNTUZpZWxkc0RhdGEgZXh0ZW5kcyBJRmllbGRzRGF0YSwgSVNob3dGaWVsZHMgeyB9O1xyXG5leHBvcnQgaW50ZXJmYWNlIElNTUZpZWxkc0RhdGFXaXRoRmllbGRzVHJhbnNmb3JtZWQgZXh0ZW5kcyBJRmllbGRzRGF0YSwgSVNob3dGaWVsZHNUcmFuc2Zvcm1lZCB7IH07XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElTaG93RmllbGRzIHtcclxuICBzaG93RmllbGRzOiBzdHJpbmdbXVxyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgSVNob3dGaWVsZHNUcmFuc2Zvcm1lZCB7XHJcbiAgc2hvd0ZpZWxkczogc3RyaW5nXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUZpZWxkc0RhdGEge1xyXG4gIHRhYmxlTmFtZTogRW50aXR5VGFibGUsXHJcbiAgZmllbGROYW1lSW5SZXNwb25zZTogc3RyaW5nLFxyXG4gIG1hbnlUb01hbnlUYWJsZU5hbWU6IE1hbnlUb01hbnlUYWJsZSB8IE9uZVRvTWFueVRhYmxlLFxyXG4gIGludGVyc2VjdEVudGl0eU9uOiBzdHJpbmcsXHJcbiAgd2hlcmU6IHN0cmluZ1xyXG59XHJcblxyXG5cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUZpZWxkV2l0aFF1ZXJ5IHtcclxuICBmaWVsZE5hbWU6IHN0cmluZyxcclxuICBxdWVyeTogc3RyaW5nXHJcbn1cclxuXHJcblxyXG5cclxuXHJcbmludGVyZmFjZSBJT25lVG9NYW55IHtcclxuICB0YWJsZU5hbWU6IEVudGl0eVRhYmxlLFxyXG4gIHNob3dGaWVsZHM6IHN0cmluZ1tdLFxyXG4gIGZpZWxkTmFtZUluUmVzcG9uc2U6IHN0cmluZyxcclxuICB3aGVyZTogc3RyaW5nXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRCeUlkUXVlcnk8VCwgQj4oXHJcbiAgdGFibGVOYW1lOiBULFxyXG4gIGZvcmVpZ25GaWVsZHM/OiBJTU1GaWVsZHNEYXRhW10gfCB1bmRlZmluZWQsXHJcbikge1xyXG4gIHJldHVybiBhc3luYyAoaWQ6IHN0cmluZykgPT5cclxuICAgIGF3YWl0IGFzeW5jQ29tcG9zZShcclxuICAgICAgbWFwREJSZXNwb25zZTxCPihmb3JlaWduRmllbGRzKSxcclxuXHJcbiAgICAgIChyZXM6IElQb3N0Z3Jlc0pzb25CdWlsZE9iamVjdCkgPT4gcmVzLnJvd3NbMF0uanNvbl9idWlsZF9vYmplY3QsXHJcblxyXG4gICAgICBmZXRjaEVudGl0eVdpdGhNYW55VG9NYW55RmllbGRzPFQ+KHRhYmxlTmFtZSwgaWQpLFxyXG5cclxuICAgICAgZ2V0TU1GaWVsZHNRdWVyeUZyb21cclxuXHJcbiAgICApKFByb21pc2UucmVzb2x2ZShmb3JlaWduRmllbGRzKSlcclxuXHJcbn1cclxuXHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIG1hcERCUmVzcG9uc2U8VD4obWFueVRvTWFueUZpZWxkczogSU1NRmllbGRzRGF0YVtdIHwgdW5kZWZpbmVkKXtcclxuICByZXR1cm4gKHJlc3VsdDogYW55KSA9PlxyXG4gICAgT2JqZWN0LmtleXMocmVzdWx0KVxyXG4gICAgICAucmVkdWNlKChhY2M6IGFueSwgY3Vycjogc3RyaW5nLCBpbmRleDogbnVtYmVyKTogVCA9PlxyXG4gICAgICAgIGluZGV4ID09PSAwXHJcbiAgICAgICAgICA/IHsgLi4ucmVzdWx0W2N1cnJdIH1cclxuICAgICAgICAgIDoge1xyXG4gICAgICAgICAgICAuLi5hY2MsIFtcclxuICAgICAgICAgICAgICBtYW55VG9NYW55RmllbGRzICE9PSB1bmRlZmluZWRcclxuICAgICAgICAgICAgICAgID8gbWFueVRvTWFueUZpZWxkc1tpbmRleCAtIDFdLmZpZWxkTmFtZUluUmVzcG9uc2UgOiBjdXJyXHJcbiAgICAgICAgICAgIF06IHJlc3VsdFtjdXJyXVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICwge30pXHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBmZXRjaEVudGl0eVdpdGhNYW55VG9NYW55RmllbGRzPFQ+KHRhYmxlTmFtZTogVCwgaWQ6IHN0cmluZykge1xyXG4gIHJldHVybiAoZ2V0TU1GaWVsZEJ5SWQ6ICh3OnN0cmluZyk9PklGaWVsZFdpdGhRdWVyeSkgPT5cclxuICAgIGtuZXhcclxuICAgICAgLnJhdyhcclxuICAgICAgICBgJyR7dGFibGVOYW1lfScsICggU0VMRUNUIHRvX2pzb24ocm93KVxyXG4gICAgICAgRlJPTSAoIFNFTEVDVCAqIEZST00gJHt0YWJsZU5hbWV9IFdIRVJFIGlkID0gOmlkICkgXHJcbiAgICAgICByb3cgXHJcbiAgICAgICApLFxyXG4gICAke2dldE1NRmllbGRCeUlkKGlkKX0gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuIGAsXHJcbiAgICAgICAgeyBpZCB9XHJcbiAgICAgIClcclxuICAgICAgLndyYXAoJ1NFTEVDVCBqc29uX2J1aWxkX29iamVjdCgnLCAnKScpO1xyXG59XHJcblxyXG5cclxuY29uc3QgbWFueVRvTWFueVF1ZXJ5OiBJTU1RdWVyeUZ1bmN0aW9uID0gKGZpZWxkRGF0YSkgPT4gKHdoZXJlKSA9PiAoe1xyXG4gIGZpZWxkTmFtZTogZmllbGREYXRhLnRhYmxlTmFtZSxcclxuICBxdWVyeTogYFxyXG4gICggU0VMRUNUIGpzb25fYWdnKHJlc3VsdCkgXHJcbiAgICBGUk9NICggU0VMRUNUICR7ZmllbGREYXRhLnNob3dGaWVsZHN9IEZST00gJHtmaWVsZERhdGEudGFibGVOYW1lfSBcclxuICAgIElOTkVSIEpPSU4gJHsgZmllbGREYXRhLm1hbnlUb01hbnlUYWJsZU5hbWV9IE9OICggJHtmaWVsZERhdGEudGFibGVOYW1lfS5pZCA9ICR7ZmllbGREYXRhLm1hbnlUb01hbnlUYWJsZU5hbWV9LiR7ZmllbGREYXRhLmludGVyc2VjdEVudGl0eU9ufSlcclxuICAgIFdIRVJFICR7ZmllbGREYXRhLm1hbnlUb01hbnlUYWJsZU5hbWV9LiR7ZmllbGREYXRhLndoZXJlfSA9ICcke3doZXJlfScpIFxyXG4gICAgcmVzdWx0IFxyXG4gIClcclxuYH0pXHJcbnR5cGUgSUNvbmNhdEZpZWxkc0Z1bmN0aW9uID0gKGZpZWxkczogSU1NRmllbGRzRGF0YSkgPT4gSU1NRmllbGRzRGF0YVdpdGhGaWVsZHNUcmFuc2Zvcm1lZDtcclxudHlwZSBJTU1RdWVyeUZ1bmN0aW9uID0gKGY6IElNTUZpZWxkc0RhdGFXaXRoRmllbGRzVHJhbnNmb3JtZWQpID0+ICh3OiBzdHJpbmcpID0+IElGaWVsZFdpdGhRdWVyeVxyXG5cclxuY29uc3QgY29uY2F0RmllbGRzV2l0aFRhYmxlTmFtZTogSUNvbmNhdEZpZWxkc0Z1bmN0aW9uID0gKGZpZWxkKSA9PiAoe1xyXG4gIC4uLmZpZWxkLFxyXG4gIHNob3dGaWVsZHM6IGZpZWxkLnNob3dGaWVsZHNcclxuICAgIC5yZWR1Y2UoKGFjYywgY3VyciwgaW5kZXgpID0+XHJcbiAgICAgIGluZGV4IDw9IDBcclxuICAgICAgICA/IGAke2ZpZWxkLnRhYmxlTmFtZX0uJHtjdXJyfWBcclxuICAgICAgICA6IGFjYyArIGAsICR7ZmllbGQudGFibGVOYW1lfS4ke2N1cnJ9YFxyXG5cclxuICAgICAgLCBcIlwiKVxyXG59KVxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBidWlsZE1NRlF1ZXJ5OiAoKGY6IElNTUZpZWxkc0RhdGEpID0+ICh3OiBzdHJpbmcpID0+IElGaWVsZFdpdGhRdWVyeSkgPVxyXG4gIGNvbXBvc2U8SU1NRmllbGRzRGF0YSwgSU1NRmllbGRzRGF0YVdpdGhGaWVsZHNUcmFuc2Zvcm1lZCwgKHc6IHN0cmluZykgPT4gSUZpZWxkV2l0aFF1ZXJ5PihcclxuICAgIG1hbnlUb01hbnlRdWVyeSxcclxuICAgIGNvbmNhdEZpZWxkc1dpdGhUYWJsZU5hbWVcclxuICApO1xyXG5cclxuY29uc3QgZ2V0TU1GaWVsZHNRdWVyeUZyb20gPSAoZmllbGRzOiBJTU1GaWVsZHNEYXRhW10gfCB1bmRlZmluZWQpID0+IChpZDogc3RyaW5nKSA9PlxyXG4gIGZpZWxkcyAhPT0gdW5kZWZpbmVkXHJcbiAgICA/IGZpZWxkc1xyXG4gICAgICAubWFwKGJ1aWxkTU1GUXVlcnkpXHJcbiAgICAgIC5yZWR1Y2UoKGFjYzogc3RyaW5nLCBjdXJyOiAoKGlkOiBzdHJpbmcpID0+IElGaWVsZFdpdGhRdWVyeSkpID0+XHJcbiAgICAgICAgYWNjICE9PSBcIlwiXHJcbiAgICAgICAgICA/IChgJHthY2N9LCAnJHtjdXJyKGlkKS5maWVsZE5hbWV9JywgJHtjdXJyKGlkKS5xdWVyeX1gKVxyXG4gICAgICAgICAgOiAoYCcke2N1cnIoaWQpLmZpZWxkTmFtZX0nLCAke2N1cnIoaWQpLnF1ZXJ5fWApXHJcbiAgICAgICAgLCBcIlwiKVxyXG4gICAgOiBcIlwiOyIsImltcG9ydCBLbmV4IGZyb20gJ2tuZXgnO1xyXG5cclxuZXhwb3J0IGNvbnN0IGtuZXg6IEtuZXggPSByZXF1aXJlKCdrbmV4JykocmVxdWlyZSgnLi4va25leGZpbGUnKS5kZXZlbG9wbWVudCk7IiwiaW1wb3J0IHsgYXN5bmNNZW1vaXplIGFzIE1lbSB9IGZyb20gJy4uL3V0aWxzL21lbW9pemUnO1xyXG5pbXBvcnQgeyBFbnRpdHlUYWJsZSwgTWFueVRvTWFueVRhYmxlLCBUYWJsZSB9IGZyb20gJy4uL3R5cGVzL1RhYmxlcyc7XHJcbmltcG9ydCB7IElGaWxtUmVzcG9uc2UgfSBmcm9tICcuLi90eXBlcy9pbnRlcmZhY2VzL0ZpbG0nO1xyXG5pbXBvcnQgeyBnZXRCeUlkUXVlcnkgfSBmcm9tICcuLi9EQi9nZXRCeUlkJztcclxuaW1wb3J0IHsgVmVoaWNsZUZpZWxkc05hbWVzIH0gZnJvbSAnLi4vdHlwZXMvaW50ZXJmYWNlcy9WZWhpY2xlJztcclxuaW1wb3J0IHsgVmVoaWNsZXNJbkZpbG1zRmllbGRzTmFtZXMgfSBmcm9tICcuLi90eXBlcy9pbnRlcmZhY2VzL1ZlaGljbGVzSW5GaWxtcyc7XHJcbmltcG9ydCB7IElQZW9wbGVFbnRpdHlGaWVsZHMgfSBmcm9tICcuLi90eXBlcy9pbnRlcmZhY2VzL1Blb3BsZSc7XHJcbmltcG9ydCB7IElBY3RvcnNGaWVsZHNOYW1lcyB9IGZyb20gJy4uL3R5cGVzL2ludGVyZmFjZXMvQWN0b3JzJztcclxuaW1wb3J0IHsgZ2V0QWxsIH0gZnJvbSAnLi4vREIvZ2V0QWxsJztcclxuZXhwb3J0IGRlZmF1bHQoKCkgPT4ge1xyXG4gIGNvbnN0IF9nZXRCeUlkID0gTWVtKGdldEJ5SWRRdWVyeTxFbnRpdHlUYWJsZS5GaWxtLCBJRmlsbVJlc3BvbnNlPihcclxuICAgIEVudGl0eVRhYmxlLkZpbG0sXHJcbiAgICBbXHJcbiAgICAgIHtcclxuICAgICAgICB0YWJsZU5hbWU6IEVudGl0eVRhYmxlLlZlaGljbGUsXHJcbiAgICAgICAgc2hvd0ZpZWxkczogW1ZlaGljbGVGaWVsZHNOYW1lcy5JZCwgVmVoaWNsZUZpZWxkc05hbWVzLk5hbWVdLFxyXG4gICAgICAgIGZpZWxkTmFtZUluUmVzcG9uc2U6ICd2ZWhpY2xlcycsXHJcbiAgICAgICAgbWFueVRvTWFueVRhYmxlTmFtZTogTWFueVRvTWFueVRhYmxlLlZlaGljbGVzSW5GaWxtcyxcclxuICAgICAgICBpbnRlcnNlY3RFbnRpdHlPbjogVmVoaWNsZXNJbkZpbG1zRmllbGRzTmFtZXMuVmVoaWNsZUlkLFxyXG4gICAgICAgIHdoZXJlOiBWZWhpY2xlc0luRmlsbXNGaWVsZHNOYW1lcy5WZWhpY2xlSWRcclxuXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICB0YWJsZU5hbWU6IEVudGl0eVRhYmxlLlBlb3BsZSxcclxuICAgICAgICBzaG93RmllbGRzOiBbSVBlb3BsZUVudGl0eUZpZWxkcy5JZCwgSVBlb3BsZUVudGl0eUZpZWxkcy5OYW1lXSxcclxuICAgICAgICBmaWVsZE5hbWVJblJlc3BvbnNlOiAnYWN0b3JzJyxcclxuICAgICAgICBtYW55VG9NYW55VGFibGVOYW1lOiBNYW55VG9NYW55VGFibGUuQWN0b3JzLFxyXG4gICAgICAgIGludGVyc2VjdEVudGl0eU9uOiBJQWN0b3JzRmllbGRzTmFtZXMuUGVvcGxlSWQsXHJcbiAgICAgICAgd2hlcmU6IElBY3RvcnNGaWVsZHNOYW1lcy5GaWxtSWRcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHRhYmxlTmFtZTogRW50aXR5VGFibGUuU3RhcnNoaXAsXHJcbiAgICAgICAgc2hvd0ZpZWxkczogWydpZCcsICduYW1lJ10sXHJcbiAgICAgICAgZmllbGROYW1lSW5SZXNwb25zZTogJ3ZlaGljbGVzJyxcclxuICAgICAgICBtYW55VG9NYW55VGFibGVOYW1lOiBNYW55VG9NYW55VGFibGUuU3RhcnNoaXBzSW5GaWxtcyxcclxuICAgICAgICBpbnRlcnNlY3RFbnRpdHlPbjogJ3N0YXJzaGlwX2lkJyxcclxuICAgICAgICB3aGVyZTogJ2ZpbG1faWQnXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICB0YWJsZU5hbWU6IEVudGl0eVRhYmxlLlBsYW5ldCxcclxuICAgICAgICBzaG93RmllbGRzOiBbJ2lkJywgJ25hbWUnXSxcclxuICAgICAgICBmaWVsZE5hbWVJblJlc3BvbnNlOiAncGxhbmV0cycsXHJcbiAgICAgICAgbWFueVRvTWFueVRhYmxlTmFtZTogTWFueVRvTWFueVRhYmxlLlBsYW5ldHNJbkZpbG1zLFxyXG4gICAgICAgIGludGVyc2VjdEVudGl0eU9uOiAncGxhbmV0X2lkJyxcclxuICAgICAgICB3aGVyZTogJ2ZpbG1faWQnXHJcbiAgICAgIH1cclxuICAgIF0sXHJcbiAgKSlcclxuICByZXR1cm4ge1xyXG4gICAgZ2V0QnlJZDogX2dldEJ5SWQsXHJcbiAgICBnZXRBbGw6IGdldEFsbChFbnRpdHlUYWJsZS5GaWxtLCBfZ2V0QnlJZClcclxuICB9XHJcbn0pKClcclxuXHJcblxyXG4iLCJpbXBvcnQgeyBhc3luY01lbW9pemUgYXMgTWVtIH0gZnJvbSBcIi4uL3V0aWxzL21lbW9pemVcIlxyXG5pbXBvcnQgeyBnZXRCeUlkUXVlcnkgfSBmcm9tIFwiLi4vREIvZ2V0QnlJZFwiXHJcbmltcG9ydCB7IEVudGl0eVRhYmxlLCBNYW55VG9NYW55VGFibGUsIE9uZVRvTWFueVRhYmxlIH0gZnJvbSBcIi4uL3R5cGVzL1RhYmxlc1wiXHJcbmltcG9ydCB7IElGaWxtUmVzcG9uc2UsIEZpbG1GaWVsZHNOYW1lcyB9IGZyb20gXCIuLi90eXBlcy9pbnRlcmZhY2VzL0ZpbG1cIlxyXG5pbXBvcnQgeyBJQWN0b3JzRmllbGRzTmFtZXMgfSBmcm9tIFwiLi4vdHlwZXMvaW50ZXJmYWNlcy9BY3RvcnNcIlxyXG5pbXBvcnQgeyBJU3BlY2llRW50aXR5RmllbGRzIH0gZnJvbSBcIi4uL3R5cGVzL2ludGVyZmFjZXMvU3BlY2llXCJcclxuaW1wb3J0IHsgUmFjZUZpZWxkcyB9IGZyb20gXCIuLi90eXBlcy9pbnRlcmZhY2VzL1JhY2VzXCJcclxuaW1wb3J0IHsgVmVoaWNsZUZpZWxkc05hbWVzIH0gZnJvbSBcIi4uL3R5cGVzL2ludGVyZmFjZXMvVmVoaWNsZVwiXHJcbmltcG9ydCB7IFBpbG90RmllbGROYW1lcyB9IGZyb20gXCIuLi90eXBlcy9pbnRlcmZhY2VzL1BpbG90XCJcclxuaW1wb3J0IHsgU3RhcnNoaXBFbnRpdHlGaWVsZHMgfSBmcm9tIFwiLi4vdHlwZXMvaW50ZXJmYWNlcy9TdGFyc2hpcFwiXHJcbmltcG9ydCB7IFN0YXJzaGlwUGlsb3RGaWVsZHNOYW1lcyB9IGZyb20gXCIuLi90eXBlcy9pbnRlcmZhY2VzL1N0YXJzaGlwUGlsb3RcIlxyXG5pbXBvcnQgeyBnZXRBbGwgfSBmcm9tIFwiLi4vREIvZ2V0QWxsXCJcclxuXHJcbmV4cG9ydCBkZWZhdWx0KCgpID0+IHtcclxuICBjb25zdCBfZ2V0QnlJZCA9IE1lbShnZXRCeUlkUXVlcnk8RW50aXR5VGFibGUuUGVvcGxlLCBJRmlsbVJlc3BvbnNlPihFbnRpdHlUYWJsZS5QZW9wbGUsXHJcbiAgICBbXHJcbiAgICAgIHtcclxuICAgICAgICB0YWJsZU5hbWU6IEVudGl0eVRhYmxlLkZpbG0sXHJcbiAgICAgICAgc2hvd0ZpZWxkczogW0ZpbG1GaWVsZHNOYW1lcy5JZCwgRmlsbUZpZWxkc05hbWVzLlRpdGxlXSxcclxuICAgICAgICBmaWVsZE5hbWVJblJlc3BvbnNlOiAnZmlsbXMnLFxyXG4gICAgICAgIG1hbnlUb01hbnlUYWJsZU5hbWU6IE1hbnlUb01hbnlUYWJsZS5BY3RvcnMsXHJcbiAgICAgICAgaW50ZXJzZWN0RW50aXR5T246IElBY3RvcnNGaWVsZHNOYW1lcy5GaWxtSWQsXHJcbiAgICAgICAgd2hlcmU6IElBY3RvcnNGaWVsZHNOYW1lcy5QZW9wbGVJZFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgdGFibGVOYW1lOiBFbnRpdHlUYWJsZS5TcGVjaWUsXHJcbiAgICAgICAgc2hvd0ZpZWxkczogW0lTcGVjaWVFbnRpdHlGaWVsZHMuSWQsIElTcGVjaWVFbnRpdHlGaWVsZHMuTmFtZV0sXHJcbiAgICAgICAgZmllbGROYW1lSW5SZXNwb25zZTogJ3NwZWNpZXMnLFxyXG4gICAgICAgIG1hbnlUb01hbnlUYWJsZU5hbWU6IE9uZVRvTWFueVRhYmxlLlJhY2UsXHJcbiAgICAgICAgaW50ZXJzZWN0RW50aXR5T246IFJhY2VGaWVsZHMuU3BlY2llSWQsXHJcbiAgICAgICAgd2hlcmU6IFJhY2VGaWVsZHMuUGVvcGxlSWRcclxuXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICB0YWJsZU5hbWU6IEVudGl0eVRhYmxlLlZlaGljbGUsXHJcbiAgICAgICAgc2hvd0ZpZWxkczogW1ZlaGljbGVGaWVsZHNOYW1lcy5JZCwgVmVoaWNsZUZpZWxkc05hbWVzLk5hbWVdLFxyXG4gICAgICAgIGZpZWxkTmFtZUluUmVzcG9uc2U6ICd2ZWhpY2xlcycsXHJcbiAgICAgICAgbWFueVRvTWFueVRhYmxlTmFtZTogTWFueVRvTWFueVRhYmxlLlBpbG90LFxyXG4gICAgICAgIGludGVyc2VjdEVudGl0eU9uOiBQaWxvdEZpZWxkTmFtZXMuVmVoaWNsZUlkLFxyXG4gICAgICAgIHdoZXJlOiBQaWxvdEZpZWxkTmFtZXMuUGVvcGxlSWRcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHRhYmxlTmFtZTogRW50aXR5VGFibGUuU3RhcnNoaXAsXHJcbiAgICAgICAgc2hvd0ZpZWxkczogW1N0YXJzaGlwRW50aXR5RmllbGRzLklkLCBTdGFyc2hpcEVudGl0eUZpZWxkcy5OYW1lXSxcclxuICAgICAgICBmaWVsZE5hbWVJblJlc3BvbnNlOiAnc3RhcnNoaXBzJyxcclxuICAgICAgICBtYW55VG9NYW55VGFibGVOYW1lOiBNYW55VG9NYW55VGFibGUuU3RhcnNoaXBQaWxvdCxcclxuICAgICAgICBpbnRlcnNlY3RFbnRpdHlPbjogU3RhcnNoaXBQaWxvdEZpZWxkc05hbWVzLlN0YXJzaGlwSWQsXHJcbiAgICAgICAgd2hlcmU6IFN0YXJzaGlwUGlsb3RGaWVsZHNOYW1lcy5QZW9wbGVJZFxyXG4gICAgICB9XHJcbiAgICBdKSlcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIGdldEJ5SWQ6IF9nZXRCeUlkLFxyXG4gICAgZ2V0QWxsOiBnZXRBbGwoRW50aXR5VGFibGUuUGVvcGxlLCBfZ2V0QnlJZClcclxuICB9XHJcbn0pKCkiLCJpbXBvcnQgeyBJUGxhbmV0UmVzcG9uc2UgfSBmcm9tIFwiLi4vdHlwZXMvaW50ZXJmYWNlcy9QbGFuZXRcIjtcclxuaW1wb3J0IHsgYXN5bmNNZW1vaXplIGFzIE1lbX0gZnJvbSAnLi4vdXRpbHMvbWVtb2l6ZSc7XHJcbmltcG9ydCB7IGdldEJ5SWRRdWVyeSB9IGZyb20gXCIuLi9EQi9nZXRCeUlkXCI7XHJcbmltcG9ydCB7IEVudGl0eVRhYmxlLCBUYWJsZSwgTWFueVRvTWFueVRhYmxlIH0gZnJvbSBcIi4uL3R5cGVzL1RhYmxlc1wiO1xyXG5pbXBvcnQgeyBnZXRBbGwgfSBmcm9tIFwiLi4vREIvZ2V0QWxsXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCgoKT0+e1xyXG4gIGNvbnN0IF9nZXRCeUlkID0gTWVtKGdldEJ5SWRRdWVyeTxFbnRpdHlUYWJsZS5QbGFuZXQsIElQbGFuZXRSZXNwb25zZT4oXHJcbiAgICBFbnRpdHlUYWJsZS5QbGFuZXQsXHJcbiAgICBbXHJcbiAgICAgIHtcclxuICAgICAgICB0YWJsZU5hbWU6IEVudGl0eVRhYmxlLlBlb3BsZSxcclxuICAgICAgICBzaG93RmllbGRzOiBbJ2lkJywgJ25hbWUnXSxcclxuICAgICAgICBmaWVsZE5hbWVJblJlc3BvbnNlOiAncmVzaWRlbnRzJyxcclxuICAgICAgICBtYW55VG9NYW55VGFibGVOYW1lOiBNYW55VG9NYW55VGFibGUuUmVzaWRlbnQsXHJcbiAgICAgICAgaW50ZXJzZWN0RW50aXR5T246ICdwZW9wbGVfaWQnLFxyXG4gICAgICAgIHdoZXJlOiAncGxhbmV0X2lkJ1xyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgdGFibGVOYW1lOiBFbnRpdHlUYWJsZS5GaWxtLFxyXG4gICAgICAgIHNob3dGaWVsZHM6IFsnaWQnLCAndGl0bGUnXSxcclxuICAgICAgICBmaWVsZE5hbWVJblJlc3BvbnNlOiAnZmlsbXMnLFxyXG4gICAgICAgIG1hbnlUb01hbnlUYWJsZU5hbWU6IE1hbnlUb01hbnlUYWJsZS5QbGFuZXRzSW5GaWxtcyxcclxuICAgICAgICBpbnRlcnNlY3RFbnRpdHlPbjogJ2ZpbG1faWQnLFxyXG4gICAgICAgIHdoZXJlOiAncGxhbmV0X2lkJ1xyXG4gICAgICB9XHJcbiAgICBdXHJcbiAgKSlcclxuICByZXR1cm57XHJcbiAgICBnZXRCeUlkOiBfZ2V0QnlJZCxcclxuICAgIGdldEFsbDogZ2V0QWxsKEVudGl0eVRhYmxlLlBsYW5ldCwgX2dldEJ5SWQpXHJcbiAgfVxyXG59KSgpXHJcblxyXG4iLCJpbXBvcnQgeyBnZXRCeUlkUXVlcnkgfSBmcm9tIFwiLi4vREIvZ2V0QnlJZFwiO1xyXG5pbXBvcnQgeyBhc3luY01lbW9pemUgYXMgTWVtIH0gZnJvbSBcIi4uL3V0aWxzL21lbW9pemVcIjtcclxuaW1wb3J0IHsgSVNwZWNpZVJlc3BvbnNlIH0gZnJvbSBcIi4uL3R5cGVzL2ludGVyZmFjZXMvU3BlY2llXCI7XHJcbmltcG9ydCB7IEVudGl0eVRhYmxlLCBNYW55VG9NYW55VGFibGUsIE9uZVRvTWFueVRhYmxlIH0gZnJvbSBcIi4uL3R5cGVzL1RhYmxlc1wiO1xyXG5pbXBvcnQgeyBJUGVvcGxlRW50aXR5RmllbGRzIH0gZnJvbSBcIi4uL3R5cGVzL2ludGVyZmFjZXMvUGVvcGxlXCI7XHJcbmltcG9ydCB7IFNwZWNpZXNJbkZpbG1zRmllbGRzTmFtZSB9IGZyb20gJy4uL3R5cGVzL2ludGVyZmFjZXMvU3BlY2llc0luRmlsbXMnO1xyXG5pbXBvcnQgeyBSYWNlRmllbGRzIH0gZnJvbSBcIi4uL3R5cGVzL2ludGVyZmFjZXMvUmFjZXNcIjtcclxuaW1wb3J0IHsgRmlsbUZpZWxkc05hbWVzIH0gZnJvbSBcIi4uL3R5cGVzL2ludGVyZmFjZXMvRmlsbVwiO1xyXG5pbXBvcnQgeyBnZXRBbGwgfSBmcm9tIFwiLi4vREIvZ2V0QWxsXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCAoKCkgPT4ge1xyXG4gIGNvbnN0IF9nZXRCeUlkID0gTWVtKGdldEJ5SWRRdWVyeTxFbnRpdHlUYWJsZS5TcGVjaWUsIElTcGVjaWVSZXNwb25zZT4oXHJcbiAgICBFbnRpdHlUYWJsZS5TcGVjaWUsIFtcclxuICAgIHtcclxuICAgICAgdGFibGVOYW1lOiBFbnRpdHlUYWJsZS5GaWxtLFxyXG4gICAgICBzaG93RmllbGRzOiBbRmlsbUZpZWxkc05hbWVzLklkLCBGaWxtRmllbGRzTmFtZXMuVGl0bGVdLFxyXG4gICAgICBmaWVsZE5hbWVJblJlc3BvbnNlOiAnZmlsbXMnLFxyXG4gICAgICBtYW55VG9NYW55VGFibGVOYW1lOiBNYW55VG9NYW55VGFibGUuU3BlY2llc0luRmlsbXMsXHJcbiAgICAgIGludGVyc2VjdEVudGl0eU9uOiBTcGVjaWVzSW5GaWxtc0ZpZWxkc05hbWUuRmlsbUlkLFxyXG4gICAgICB3aGVyZTogU3BlY2llc0luRmlsbXNGaWVsZHNOYW1lLlNwZWNpZUlkXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICB0YWJsZU5hbWU6IEVudGl0eVRhYmxlLlBlb3BsZSxcclxuICAgICAgc2hvd0ZpZWxkczogW0lQZW9wbGVFbnRpdHlGaWVsZHMuSWQsIElQZW9wbGVFbnRpdHlGaWVsZHMuTmFtZV0sXHJcbiAgICAgIGZpZWxkTmFtZUluUmVzcG9uc2U6ICdwZW9wbGUnLFxyXG4gICAgICBtYW55VG9NYW55VGFibGVOYW1lOiBPbmVUb01hbnlUYWJsZS5SYWNlLFxyXG4gICAgICBpbnRlcnNlY3RFbnRpdHlPbjogUmFjZUZpZWxkcy5QZW9wbGVJZCxcclxuICAgICAgd2hlcmU6IFJhY2VGaWVsZHMuU3BlY2llSWRcclxuICAgIH1cclxuXHJcbiAgXSkpXHJcbiAgcmV0dXJuIHtcclxuICAgIGdldEJ5SWQ6IF9nZXRCeUlkLFxyXG4gICAgZ2V0QWxsOiBnZXRBbGwoRW50aXR5VGFibGUuU3BlY2llLCBfZ2V0QnlJZClcclxuICB9XHJcbn0pKCkiLCJpbXBvcnQgeyBhc3luY01lbW9pemUgYXMgTWVtIH0gZnJvbSBcIi4uL3V0aWxzL21lbW9pemVcIlxyXG5pbXBvcnQgeyBnZXRCeUlkUXVlcnkgfSBmcm9tIFwiLi4vREIvZ2V0QnlJZFwiXHJcbmltcG9ydCB7IEVudGl0eVRhYmxlLCBNYW55VG9NYW55VGFibGUgfSBmcm9tIFwiLi4vdHlwZXMvVGFibGVzXCJcclxuaW1wb3J0IHsgSVN0YXJzaGlwUmVzcG9uc2UgfSBmcm9tIFwiLi4vdHlwZXMvaW50ZXJmYWNlcy9TdGFyc2hpcFwiXHJcbmltcG9ydCB7IEZpbG1GaWVsZHNOYW1lcyB9IGZyb20gXCIuLi90eXBlcy9pbnRlcmZhY2VzL0ZpbG1cIlxyXG5pbXBvcnQgeyBTdGFyc2hpcHNJbkZpbG1zRmllbGRzIH0gZnJvbSBcIi4uL3R5cGVzL2ludGVyZmFjZXMvU3RhcnNoaXBzSW5GaWxtc1wiXHJcbmltcG9ydCB7IElQZW9wbGVFbnRpdHlGaWVsZHMgfSBmcm9tIFwiLi4vdHlwZXMvaW50ZXJmYWNlcy9QZW9wbGVcIlxyXG5pbXBvcnQgeyBnZXRBbGwgfSBmcm9tIFwiLi4vREIvZ2V0QWxsXCJcclxuaW1wb3J0IHsgU3RhcnNoaXBQaWxvdEZpZWxkc05hbWVzIH0gZnJvbSBcIi4uL3R5cGVzL2ludGVyZmFjZXMvU3RhcnNoaXBQaWxvdFwiXHJcblxyXG5leHBvcnQgZGVmYXVsdCgoKSA9PiB7XHJcbiAgY29uc3QgX2dldEJ5SWQgPSBNZW0oZ2V0QnlJZFF1ZXJ5PEVudGl0eVRhYmxlLlN0YXJzaGlwLCBJU3RhcnNoaXBSZXNwb25zZT4oXHJcbiAgICBFbnRpdHlUYWJsZS5TdGFyc2hpcCxcclxuICAgIFtcclxuICAgICAge1xyXG4gICAgICAgIHRhYmxlTmFtZTogRW50aXR5VGFibGUuRmlsbSxcclxuICAgICAgICBzaG93RmllbGRzOiBbRmlsbUZpZWxkc05hbWVzLklkLCBGaWxtRmllbGRzTmFtZXMuVGl0bGVdLFxyXG4gICAgICAgIGZpZWxkTmFtZUluUmVzcG9uc2U6ICdmaWxtcycsXHJcbiAgICAgICAgbWFueVRvTWFueVRhYmxlTmFtZTogTWFueVRvTWFueVRhYmxlLlN0YXJzaGlwc0luRmlsbXMsXHJcbiAgICAgICAgaW50ZXJzZWN0RW50aXR5T246IFN0YXJzaGlwc0luRmlsbXNGaWVsZHMuRmlsbUlkLFxyXG4gICAgICAgIHdoZXJlOiBTdGFyc2hpcHNJbkZpbG1zRmllbGRzLlN0YXJzaGlwSWRcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHRhYmxlTmFtZTogRW50aXR5VGFibGUuUGVvcGxlLFxyXG4gICAgICAgIHNob3dGaWVsZHM6IFtJUGVvcGxlRW50aXR5RmllbGRzLklkLCBJUGVvcGxlRW50aXR5RmllbGRzLk5hbWVdLFxyXG4gICAgICAgIGZpZWxkTmFtZUluUmVzcG9uc2U6ICdwaWxvdHMnLFxyXG4gICAgICAgIG1hbnlUb01hbnlUYWJsZU5hbWU6IE1hbnlUb01hbnlUYWJsZS5TdGFyc2hpcFBpbG90LFxyXG4gICAgICAgIGludGVyc2VjdEVudGl0eU9uOiBTdGFyc2hpcFBpbG90RmllbGRzTmFtZXMuUGVvcGxlSWQsXHJcbiAgICAgICAgd2hlcmU6IFN0YXJzaGlwUGlsb3RGaWVsZHNOYW1lcy5TdGFyc2hpcElkXHJcbiAgICAgIH1cclxuXHJcbiAgICBdXHJcbiAgKSlcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIGdldEJ5SWQ6IF9nZXRCeUlkLFxyXG4gICAgZ2V0QWxsOiBnZXRBbGwoRW50aXR5VGFibGUuU3RhcnNoaXAsIF9nZXRCeUlkKVxyXG4gIH1cclxufSkoKSIsImltcG9ydCB7IGFzeW5jTWVtb2l6ZSBhcyBNZW0gfSBmcm9tIFwiLi4vdXRpbHMvbWVtb2l6ZVwiXHJcbmltcG9ydCB7IGdldEJ5SWRRdWVyeSB9IGZyb20gXCIuLi9EQi9nZXRCeUlkXCJcclxuaW1wb3J0IHsgSVZlaGljbGVFbnRpdHksIElWZWhpY2xlUmVzcG9uc2UsIFZlaGljbGVGaWVsZHNOYW1lcyB9IGZyb20gXCIuLi90eXBlcy9pbnRlcmZhY2VzL1ZlaGljbGVcIlxyXG5pbXBvcnQgeyBFbnRpdHlUYWJsZSwgTWFueVRvTWFueVRhYmxlIH0gZnJvbSBcIi4uL3R5cGVzL1RhYmxlc1wiXHJcbmltcG9ydCB7IElQZW9wbGVFbnRpdHlGaWVsZHMgfSBmcm9tIFwiLi4vdHlwZXMvaW50ZXJmYWNlcy9QZW9wbGVcIlxyXG5pbXBvcnQgeyBQaWxvdEZpZWxkTmFtZXMgfSBmcm9tIFwiLi4vdHlwZXMvaW50ZXJmYWNlcy9QaWxvdFwiXHJcbmltcG9ydCB7IEZpbG1GaWVsZHNOYW1lcyB9IGZyb20gXCIuLi90eXBlcy9pbnRlcmZhY2VzL0ZpbG1cIlxyXG5pbXBvcnQgeyBWZWhpY2xlc0luRmlsbXNGaWVsZHNOYW1lcyB9IGZyb20gXCIuLi90eXBlcy9pbnRlcmZhY2VzL1ZlaGljbGVzSW5GaWxtc1wiXHJcbmltcG9ydCB7IGdldEFsbCB9IGZyb20gXCIuLi9EQi9nZXRBbGxcIlxyXG5cclxuZXhwb3J0IGRlZmF1bHQgKCgpID0+IHtcclxuICBjb25zdCBfZ2V0QnlJZCA9IE1lbShnZXRCeUlkUXVlcnk8RW50aXR5VGFibGUuVmVoaWNsZSwgSVZlaGljbGVSZXNwb25zZT4oXHJcbiAgICBFbnRpdHlUYWJsZS5WZWhpY2xlLFxyXG4gICAgW1xyXG4gICAgICB7XHJcbiAgICAgICAgdGFibGVOYW1lOiBFbnRpdHlUYWJsZS5QZW9wbGUsXHJcbiAgICAgICAgc2hvd0ZpZWxkczogW0lQZW9wbGVFbnRpdHlGaWVsZHMuSWQsIElQZW9wbGVFbnRpdHlGaWVsZHMuTmFtZV0sXHJcbiAgICAgICAgZmllbGROYW1lSW5SZXNwb25zZTogJ3BpbG90cycsXHJcbiAgICAgICAgbWFueVRvTWFueVRhYmxlTmFtZTogTWFueVRvTWFueVRhYmxlLlBpbG90LFxyXG4gICAgICAgIGludGVyc2VjdEVudGl0eU9uOiBQaWxvdEZpZWxkTmFtZXMuUGVvcGxlSWQsXHJcbiAgICAgICAgd2hlcmU6IFBpbG90RmllbGROYW1lcy5WZWhpY2xlSWRcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHRhYmxlTmFtZTogRW50aXR5VGFibGUuRmlsbSxcclxuICAgICAgICBzaG93RmllbGRzOiBbRmlsbUZpZWxkc05hbWVzLklkLCBGaWxtRmllbGRzTmFtZXMuVGl0bGVdLFxyXG4gICAgICAgIGZpZWxkTmFtZUluUmVzcG9uc2U6ICdmaWxtcycsXHJcbiAgICAgICAgbWFueVRvTWFueVRhYmxlTmFtZTogTWFueVRvTWFueVRhYmxlLlZlaGljbGVzSW5GaWxtcyxcclxuICAgICAgICBpbnRlcnNlY3RFbnRpdHlPbjogVmVoaWNsZXNJbkZpbG1zRmllbGRzTmFtZXMuRmlsbUlkLFxyXG4gICAgICAgIHdoZXJlOiBWZWhpY2xlc0luRmlsbXNGaWVsZHNOYW1lcy5WZWhpY2xlSWRcclxuICAgICAgfVxyXG5cclxuICAgIF1cclxuICApKVxyXG5cclxuICByZXR1cm4ge1xyXG4gICAgZ2V0QnlJZDogX2dldEJ5SWQsXHJcbiAgICBnZXRBbGw6IGdldEFsbChFbnRpdHlUYWJsZS5WZWhpY2xlLCBfZ2V0QnlJZClcclxuICB9XHJcbn0pKCkiLCJpbXBvcnQgKiBhcyBleHByZXNzIGZyb20gJ2V4cHJlc3MnIFxyXG5pbXBvcnQgeyBBcHBsaWNhdGlvbiwgUmVxdWVzdCwgUmVzcG9uc2UgfSBmcm9tICdleHByZXNzJztcclxuaW1wb3J0IGZpbG0gZnJvbSAnLi9yb3V0ZXMvZmlsbSc7XHJcbmltcG9ydCAqIGFzIGhlbG1ldCAgZnJvbSAnaGVsbWV0JztcclxuY29uc3QgYXBwOiBBcHBsaWNhdGlvbiA9IHJlcXVpcmUoJ2V4cHJlc3MnKSgpO1xyXG5pbXBvcnQgcGxhbmV0IGZyb20gJy4vcm91dGVzL3BsYW5ldHMnO1xyXG5pbXBvcnQgcGVvcGxlIGZyb20gJy4vcm91dGVzL3Blb3BsZSc7XHJcbmltcG9ydCBzcGVjaWUgZnJvbSAnLi9yb3V0ZXMvc3BlY2llcyc7XHJcbmltcG9ydCB2ZWhpY2xlIGZyb20gJy4vcm91dGVzL3ZlaGljbGUnO1xyXG5pbXBvcnQgc3RhcnNoaXAgZnJvbSAnLi9yb3V0ZXMvc3RhcnNoaXAnO1xyXG5pbXBvcnQgeyBtYXRjaFJvdXRlcywgTWF0Y2hlZFJvdXRlICB9IGZyb20gJ3JlYWN0LXJvdXRlci1jb25maWcnO1xyXG5pbXBvcnQgUm91dGVzIGZyb20gJy4uL2NsaWVudC9yb3V0ZXMnO1xyXG50eXBlIFBvcnQgPSBzdHJpbmc7XHJcbmNvbnN0IGdldFBvcnQgPSAocDpOb2RlSlMuUHJvY2Vzcyk6KFBvcnQgfCAzMDAwKSA9PiBwICYmIHAuZW52ICYmIHAuZW52LlBPUlQgPyBwLmVudi5QT1JUIDogMzAwMDtcclxuXHJcbmFwcC51c2UoZXhwcmVzcy5zdGF0aWMoJy9idWlsZCcpKVxyXG5cclxuYXBwLnVzZSgnL2ZpbG1zJywgZmlsbSk7XHJcbmFwcC51c2UoJy9wbGFuZXRzJywgcGxhbmV0KTtcclxuYXBwLnVzZSgnL3Blb3BsZScsIHBlb3BsZSk7XHJcbmFwcC51c2UoJy9zcGVjaWVzJywgc3BlY2llKTtcclxuYXBwLnVzZSgnL3ZlaGljbGVzJywgdmVoaWNsZSlcclxuYXBwLnVzZSgnL3N0YXJzaGlwcycsIHN0YXJzaGlwKVxyXG5hcHAuZ2V0KCcvJywgKHJlcTphbnksIHJlczphbnkpID0+e1xyXG4gIGNvbnN0IHByb21pc2VzID0gbWF0Y2hSb3V0ZXMoUm91dGVzLCByZXEucGF0aClcclxuICAgIC5tYXAoKHsgcm91dGUsIG1hdGNoIH0pPT4gcm91dGUubG9hZERhdGEgPyByb3V0ZS5sb2FkRGF0YShtYXRjaCkgOiBQcm9taXNlLnJlc29sdmUobnVsbCkpXHJcbiAgICAubWFwKChwcm9taXNlKSA9PiB7XHJcbiAgICAgICAgaWYgKHByb21pc2UpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgICAgIHByb21pc2UudGhlbihyZXNvbHZlKS5jYXRjaChyZXNvbHZlKVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG4gICAgUHJvbWlzZS5hbGwocHJvbWlzZXMpLnRoZW4oKCkgPT4ge1xyXG5cdFx0Y29uc3QgY29udGV4dCA9IHt9O1xyXG5cdFx0Ly9jb25zdCBjb250ZW50ID0gcmVuZGVyZXIocmVxLCAvKiBzdG9yZSwgKi8gY29udGV4dCk7XHJcblxyXG5cdC8qIFx0aWYgKGNvbnRleHQudXJsKSB7XHJcblx0XHRcdHJldHVybiByZXMucmVkaXJlY3QoMzAxLCBjb250ZXh0LnVybCk7XHJcblx0XHR9XHJcblx0XHRpZiAoY29udGV4dC5ub3RGb3VuZCkge1xyXG5cdFx0XHRyZXMuc3RhdHVzKDQwNCk7XHJcblx0XHR9ICovXHJcblx0XHQvL3Jlcy5zZW5kKGNvbnRlbnQpO1xyXG5cdH0pO1xyXG59KSAgXHJcblxyXG5hcHAudXNlKGhlbG1ldCgpKTtcclxuYXBwLmxpc3RlbihnZXRQb3J0KHByb2Nlc3MpLCAoKSA9PiBjb25zb2xlLmxvZyhgc2VydmVyIHN0YXJ0ZWQgb24gcG9ydCAke2dldFBvcnQocHJvY2Vzcyl9YCkpO1xyXG5cclxuIiwiLy8gVXBkYXRlIHdpdGggeW91ciBjb25maWcgc2V0dGluZ3MuXHJcbmNvbnN0IHMgPSByZXF1aXJlKFwiLi9zZXR0aW5ncy5qc1wiKTtcclxubW9kdWxlLmV4cG9ydHMgPSB7XHJcblxyXG4gIGRldmVsb3BtZW50OiB7XHJcbiAgICBjbGllbnQ6ICdwZycsXHJcbiAgICBjb25uZWN0aW9uOiB7XHJcbiAgICAgIHVzZXI6IHMudXNlcixcclxuICAgICAgaG9zdDogcy5ob3N0LFxyXG4gICAgICBkYXRhYmFzZTogJ3N0YXJ3YXJzJyxcclxuICAgICAgcGFzc3dvcmQ6IHMucGFzc3dvcmQsXHJcbiAgICAgIHNzbDogdHJ1ZVxyXG4gICAgfVxyXG4gIH1cclxufTtcclxuIiwiaW1wb3J0IHtSb3V0ZXIsIFJlcXVlc3QsIFJlc3BvbnNlfSBmcm9tICdleHByZXNzJztcclxuaW1wb3J0IHsgSUZpbG1SZXNwb25zZSB9IGZyb20gJy4uL3R5cGVzL2ludGVyZmFjZXMvRmlsbSc7XHJcbmltcG9ydCBGaWxtIGZyb20gJy4uL2NvbnRyb2xsZXJzL2ZpbG0nO1xyXG5cclxuXHJcbmNvbnN0IFI6Um91dGVyID0gUm91dGVyKCk7XHJcblxyXG5SLmdldCgnL2luc2VydCcsIGFzeW5jIChyZXE6UmVxdWVzdCwgcmVzOlJlc3BvbnNlKT0+e1xyXG4gIFxyXG4gXHJcbn0pXHJcblIuZ2V0KCcvOmlkJywgYXN5bmMgKHJlcTpSZXF1ZXN0LCByZXM6UmVzcG9uc2UpID0+IHtcclxuIGNvbnN0IHJlc3VsdDpJRmlsbVJlc3BvbnNlID0gYXdhaXQgRmlsbS5nZXRCeUlkKHJlcS5wYXJhbXMuaWQpKClcclxuICByZXMuanNvbihyZXN1bHQpOyAgIFxyXG59KTtcclxuUi5nZXQoJy8nLCBhc3luYyAocmVxOlJlcXVlc3QsIHJlczpSZXNwb25zZSk9PntcclxuICBjb25zdCByZXN1bHQgPSBhd2FpdCBGaWxtLmdldEFsbCgpO1xyXG4gIHJlcy5qc29uKHJlc3VsdCk7IFxyXG59KVxyXG4gZXhwb3J0IGRlZmF1bHQgUjsiLCJpbXBvcnQgeyBSb3V0ZXIsIFJlcXVlc3QsIFJlc3BvbnNlIH0gZnJvbSAnZXhwcmVzcyc7XHJcbmltcG9ydCBQZW9wbGUgIGZyb20gJy4uL2NvbnRyb2xsZXJzL3Blb3BsZSc7XHJcblxyXG5jb25zdCBSOlJvdXRlciA9IFJvdXRlcigpO1xyXG5cclxuXHJcblIuZ2V0KCcvOmlkJywgYXN5bmMgKHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSk9PntcclxuICBQZW9wbGUuZ2V0QnlJZChyZXEucGFyYW1zLmlkKSgpXHJcbiAgIC50aGVuKChyZXN1bHQ6YW55KSA9PiByZXMuanNvbihyZXN1bHQpKTtcclxufSlcclxuXHJcblIuZ2V0KCcvJywgYXN5bmMocmVxOlJlcXVlc3QsIHJlczpSZXNwb25zZSk9PntcclxuICBjb25zdCByZXN1bHQgPSBhd2FpdCBQZW9wbGUuZ2V0QWxsKClcclxuICByZXMuanNvbihyZXN1bHQpXHJcbn0pXHJcbmV4cG9ydCBkZWZhdWx0IFI7IiwiaW1wb3J0IGV4cHJlc3Mse1JvdXRlciwgUmVxdWVzdCwgUmVzcG9uc2V9IGZyb20gJ2V4cHJlc3MnO1xyXG5pbXBvcnQgeyBJUGxhbmV0UmVzcG9uc2UgfSBmcm9tICcuLi90eXBlcy9pbnRlcmZhY2VzL1BsYW5ldCc7XHJcbmltcG9ydCAgUGxhbmV0ICBmcm9tICcuLi9jb250cm9sbGVycy9wbGFuZXQnO1xyXG5cclxuY29uc3QgUjpSb3V0ZXIgPSBSb3V0ZXIoKTtcclxuXHJcblIuZ2V0KCcvOmlkJywgYXN5bmMgKHJlcTpSZXF1ZXN0LCByZXM6UmVzcG9uc2UpPT57XHJcbiAgY29uc3QgcGxhbmV0OklQbGFuZXRSZXNwb25zZSA9IGF3YWl0IFBsYW5ldC5nZXRCeUlkKHJlcS5wYXJhbXMuaWQpKClcclxuICByZXMuanNvbihwbGFuZXQpO1xyXG59KVxyXG5SLmdldCgnLycsIGFzeW5jIChyZXE6UmVxdWVzdCwgcmVzOlJlc3BvbnNlKT0+e1xyXG4gIGNvbnN0IHIgPSBhd2FpdCBQbGFuZXQuZ2V0QWxsKCk7IFxyXG4gIHJlcy5qc29uKHIpO1xyXG59KVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUjsiLCJpbXBvcnQgeyBSb3V0ZXIsIFJlcXVlc3QsIFJlc3BvbnNlIH0gZnJvbSAnZXhwcmVzcyc7XHJcbmltcG9ydCBTcGVjaWUgIGZyb20gJy4uL2NvbnRyb2xsZXJzL3NwZWNpZSc7XHJcbmNvbnN0IFIgPSBSb3V0ZXIoKTtcclxuXHJcblIuZ2V0KCcvOmlkJywgYXN5bmMgKHJlcTpSZXF1ZXN0LCByZXM6UmVzcG9uc2UpPT57XHJcbiAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0ICBTcGVjaWUuZ2V0QnlJZChyZXEucGFyYW1zLmlkKSgpO1xyXG4gICByZXMuanNvbihyZXN1bHQpO1xyXG59KVxyXG5cclxuUi5nZXQoJy8nLCBhc3luYyAocmVxOlJlcXVlc3QsIHJlczogUmVzcG9uc2UpPT57XHJcbiAgY29uc3QgcmVzdWx0ID0gYXdhaXQgU3BlY2llLmdldEFsbCgpO1xyXG4gIHJlcy5qc29uKHJlc3VsdCk7XHJcbn0pXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUjsiLCJpbXBvcnQgeyBSb3V0ZXIsIFJlcXVlc3QsIFJlc3BvbnNlIH0gZnJvbSAnZXhwcmVzcyc7XHJcbmltcG9ydCAgU3RhcnNoaXAgIGZyb20gJy4uL2NvbnRyb2xsZXJzL3N0YXJzaGlwJztcclxuXHJcbmNvbnN0IFIgPSBSb3V0ZXIoKTtcclxuXHJcblIuZ2V0KCcvOmlkJywgYXN5bmMgKHJlcTpSZXF1ZXN0LCByZXM6UmVzcG9uc2UpPT57XHJcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBTdGFyc2hpcC5nZXRCeUlkKHJlcS5wYXJhbXMuaWQpXHJcbiAgICByZXMuanNvbihyZXN1bHQpXHJcbn0pXHJcblxyXG5SLmdldCgnLycsIGFzeW5jIChyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UpPT57XHJcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBTdGFyc2hpcC5nZXRBbGwoKTtcclxuICAgIHJlcy5qc29uKHJlc3VsdClcclxufSlcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBSOyIsImltcG9ydCB7IFJvdXRlciwgUmVzcG9uc2UsIFJlcXVlc3QgfSBmcm9tICdleHByZXNzJztcclxuaW1wb3J0IFZlaGljbGUgIGZyb20gJy4uL2NvbnRyb2xsZXJzL3ZlaGljbGUnO1xyXG5cclxuY29uc3QgUjpSb3V0ZXIgPSBSb3V0ZXIoKTtcclxuXHJcblIuZ2V0KCcvOmlkJywgYXN5bmMgKHJlcTpSZXF1ZXN0LCByZXM6UmVzcG9uc2UpPT57XHJcbiAgY29uc3QgcmVzdWx0ID0gYXdhaXQgVmVoaWNsZS5nZXRCeUlkKHJlcS5wYXJhbXMuaWQpKClcclxuICByZXMuanNvbihyZXN1bHQpOyAgICBcclxufSlcclxuXHJcblIuZ2V0KCcvJywgYXN5bmMgKHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSk9PntcclxuICBjb25zdCByZXN1bHQgPSBhd2FpdCBWZWhpY2xlLmdldEFsbCgpO1xyXG4gIHJlcy5qc29uKHJlc3VsdCk7XHJcbn0pXHJcblxyXG5leHBvcnQgZGVmYXVsdCBSOyIsIlxyXG5tb2R1bGUuZXhwb3J0cyA9IHtcclxuICBob3N0OiBcInBnLXN0YXJ3YXJzLnBvc3RncmVzLmRhdGFiYXNlLmF6dXJlLmNvbVwiLFxyXG4gIHVzZXI6IFwicnViZW44NUBwZy1zdGFyd2Fyc1wiLFxyXG4gIHBhc3N3b3JkOiBcIipydWJlbjI4MzQwKlwiXHJcbn0iLCJleHBvcnQgZW51bSBUYWJsZXtcclxuICBBY3RvcnMgPSAnYWN0b3JzJyxcclxuICBGaWxtID0gJ2ZpbG0nLFxyXG4gIFBlb3BsZSA9ICdwZW9wbGUnLFxyXG4gIFBpbG90ID0gJ3BpbG90JyxcclxuICBQbGFuZXQgPSAncGxhbmV0JyxcclxuICBQbGFuZXRzSW5GaWxtcyA9ICdwbGFuZXRzX2luX2ZpbG1zJyxcclxuICBTcGVjaWUgPSAnc3BlY2llJyxcclxuICBTdGFyc2hpcCA9ICdzdGFyc2hpcCcsXHJcbiAgVmVoaWNsZSA9ICd2ZWhpY2xlJyxcclxuICBWZWhpY2xlc0luRmlsbXMgPSAndmVoaWNsZXNfaW5fZmlsbXMnLFxyXG4gIFN0YXJzaGlwc0luRmlsbXMgPSAnc3RhcnNoaXBzX2luX2ZpbG1zJyxcclxuICBTcGVjaWVzSW5GaWxtcyA9ICdzcGVjaWVzX2luX2ZpbG1zJyxcclxuICBSYWNlID0gJ3JhY2UnLFxyXG4gIFN0YXJzaGlwUGlsb3QgPSAnc3RhcnNoaXBfcGlsb3QnXHJcblxyXG59XHJcblxyXG5leHBvcnQgZW51bSBNYW55VG9NYW55VGFibGV7XHJcbiAgQWN0b3JzID0gJ2FjdG9ycycsXHJcbiAgVmVoaWNsZXNJbkZpbG1zID0gJ3ZlaGljbGVzX2luX2ZpbG1zJyxcclxuICBTdGFyc2hpcHNJbkZpbG1zID0gJ3N0YXJzaGlwc19pbl9maWxtcycsXHJcbiAgU3BlY2llc0luRmlsbXMgPSAnc3BlY2llc19pbl9maWxtcycsXHJcbiAgUGxhbmV0c0luRmlsbXMgPSAncGxhbmV0c19pbl9maWxtcycsXHJcbiAgUmVzaWRlbnQgPSAncmVzaWRlbnQnLFxyXG4gIFBpbG90ID0gJ3BpbG90JyxcclxuICBTdGFyc2hpcFBpbG90ID0gJ3N0YXJzaGlwX3BpbG90J1xyXG59XHJcblxyXG5leHBvcnQgZW51bSBPbmVUb01hbnlUYWJsZXtcclxuICBSYWNlID0gJ3JhY2UnLFxyXG59XHJcblxyXG5leHBvcnQgZW51bSBFbnRpdHlUYWJsZXtcclxuICBGaWxtID0gJ2ZpbG0nLFxyXG4gIFBlb3BsZSA9ICdwZW9wbGUnLFxyXG4gIFBsYW5ldCA9ICdwbGFuZXQnLFxyXG4gIFNwZWNpZSA9ICdzcGVjaWUnLFxyXG4gIFN0YXJzaGlwID0gJ3N0YXJzaGlwJyxcclxuICBWZWhpY2xlID0gJ3ZlaGljbGUnLFxyXG4gIFRlc3QgICAgPSAndGVzdCdcclxufSIsImV4cG9ydCBpbnRlcmZhY2UgSUFjdG9yc3tcclxuICAgIGlkOiBzdHJpbmc7XHJcbiAgICBwZW9wbGVfaWQ6IHN0cmluZztcclxuICAgIGZpbG1faWQ6IHN0cmluZ1xyXG59XHJcblxyXG5leHBvcnQgZW51bSBJQWN0b3JzRmllbGRzTmFtZXN7XHJcbiAgICBJZCA9ICdpZCcsXHJcbiAgICBQZW9wbGVJZCA9ICdwZW9wbGVfaWQnLFxyXG4gICAgRmlsbUlkID0gICdmaWxtX2lkJ1xyXG59IiwiaW1wb3J0IHtJRnJvbUZvcmVpZ25UYWJsZXN9IGZyb20gJy4vRnJvbUZvcmVpZ25UYWJsZXMnO1xyXG4gZXhwb3J0IGludGVyZmFjZSBJRmlsbUZyb21BcGl7XHJcbiAgdGl0bGU6ICAgICAgICAgIHN0cmluZ1xyXG4gIGVwaXNvZGVfaWQ6ICAgICBudW1iZXJcclxuICBvcGVuaW5nX2NyYXdsOiAgc3RyaW5nXHJcbiAgZGlyZWN0b3I6ICAgICAgIHN0cmluZ1xyXG4gIHByb2R1Y2VyOiAgICAgICBzdHJpbmdcclxuICByZWxlYXNlX2RhdGU6ICAgc3RyaW5nXHJcbiAgY2hhcmFjdGVyczogICAgIHN0cmluZ1tdXHJcbiAgcGxhbmV0czogICAgICAgIHN0cmluZ1tdXHJcbiAgc3RhcnNoaXBzOiAgICAgIHN0cmluZ1tdXHJcbiAgdmVoaWNsZXM6ICAgICAgIHN0cmluZ1tdXHJcbiAgc3BlY2llczogICAgICAgIHN0cmluZ1tdXHJcbiAgY3JlYXRlZDogICAgICAgIHN0cmluZ1xyXG4gIGVkaXRlZDogICAgICAgICBzdHJpbmdcclxuICB1cmw6ICAgICAgICAgICAgc3RyaW5nXHJcbn1cclxuXHJcbmV4cG9ydCBuYW1lc3BhY2UgRmlsbUZpZWxkcyB7XHJcbiAgZXhwb3J0IHR5cGUgaWQgPSBzdHJpbmc7XHJcbiAgZXhwb3J0IHR5cGUgdGl0bGUgPSBzdHJpbmcgfCBudWxsO1xyXG4gIGV4cG9ydCB0eXBlIGVwaXNvZGVfaWQgPSBudW1iZXIgfCBudWxsO1xyXG4gIGV4cG9ydCB0eXBlIG9wZW5pbmdfY3Jhd2wgPSBzdHJpbmcgfCBudWxsO1xyXG4gIGV4cG9ydCB0eXBlIGRpcmVjdG9yID0gc3RyaW5nIHwgbnVsbDtcclxuICBleHBvcnQgdHlwZSBwcm9kdWNlciA9IHN0cmluZyB8IG51bGw7XHJcbiAgZXhwb3J0IHR5cGUgcmVsZWFzZV9kYXRlID0gc3RyaW5nIHwgbnVsbDtcclxuICBleHBvcnQgdHlwZSBjcmVhdGVkID0gc3RyaW5nIHwgbnVsbDtcclxuICBleHBvcnQgdHlwZSBlZGl0ZWQgPSBzdHJpbmcgfCBudWxsO1xyXG4gIGV4cG9ydCB0eXBlIHVybCA9IHN0cmluZyB8IG51bGw7XHJcbiAgXHJcbn1cclxuXHJcblxyXG5leHBvcnQgZW51bSBGaWxtRmllbGRzTmFtZXN7XHJcbiAgSWQgPSAnaWQnLFxyXG4gIFRpdGxlID0gJ3RpdGxlJyxcclxuICBFcGlzb2RlSWQgPSAgJ2VwaXNvZGVfaWQnLFxyXG4gIE9wZW5pbmdDcmF3bCA9ICdvcGVuaW5nX2NyYXdsJyxcclxuICBEaXJlY3RvciA9ICdkaXJlY3RvcicsXHJcbiAgUHJvZHVjZXIgPSAgJ3Byb2R1Y2VyJyxcclxuICBSZWxlYXNlRGF0ZSA9ICAncmVsZWFzZV9kYXRlJyxcclxuICBDcmVhdGVkID0gJ2NyZWF0ZWQnLFxyXG4gIEVkaXRlZCA9ICdlZGl0ZWQnLFxyXG4gIFVybCA9ICd1cmwnXHJcbn1cclxuXHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEZpbG0ge1xyXG4gIGlkOiBGaWxtRmllbGRzLmlkO1xyXG4gIHRpdGxlOiBGaWxtRmllbGRzLnRpdGxlO1xyXG4gIGVwaXNvZGVfaWQ6IEZpbG1GaWVsZHMuZXBpc29kZV9pZDtcclxuICBvcGVuaW5nX2NyYXdsOiBGaWxtRmllbGRzLm9wZW5pbmdfY3Jhd2w7XHJcbiAgZGlyZWN0b3I6IEZpbG1GaWVsZHMuZGlyZWN0b3I7XHJcbiAgcHJvZHVjZXI6IEZpbG1GaWVsZHMucHJvZHVjZXI7XHJcbiAgcmVsZWFzZV9kYXRlOiBGaWxtRmllbGRzLnJlbGVhc2VfZGF0ZTtcclxuICBjcmVhdGVkOiBGaWxtRmllbGRzLmNyZWF0ZWQ7XHJcbiAgZWRpdGVkOiBGaWxtRmllbGRzLmVkaXRlZDtcclxuICB1cmw6IEZpbG1GaWVsZHMudXJsO1xyXG5cclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJRmlsbVJlc3BvbnNlIGV4dGVuZHMgRmlsbXtcclxuICBjaGFyYWN0ZXJzOiAgICBJRnJvbUZvcmVpZ25UYWJsZXNbXSxcclxuICBwbGFuZXRzOiAgICAgICBJRnJvbUZvcmVpZ25UYWJsZXNbXSxcclxuICBzdGFyc2hpcHM6ICAgICBJRnJvbUZvcmVpZ25UYWJsZXNbXSxcclxuICB2ZWhpY2xlczogICAgICBJRnJvbUZvcmVpZ25UYWJsZXNbXVxyXG59XHJcblxyXG4iLCJpbXBvcnQgeyBJU3BlY2llRW50aXR5IGFzIFNwZWNpZSB9IGZyb20gJy4vU3BlY2llJztcclxuaW1wb3J0IHsgSVN1YmplY3QsIElTdWJqZWN0RnJvbUFwaSB9IGZyb20gJy4vU3ViamVjdCc7XHJcbmltcG9ydCB7IElGcm9tRm9yZWlnblRhYmxlcyB9IGZyb20gJy4vRnJvbUZvcmVpZ25UYWJsZXMnO1xyXG5cclxuaW50ZXJmYWNlIElQZW9wbGUgZXh0ZW5kcyBJU3ViamVjdHtcclxuICBoZWlnaHQ6IHN0cmluZ1xyXG4gIG1hc3M6IHN0cmluZ1xyXG4gIGhhaXJfY29sb3I6IHN0cmluZ1xyXG4gIHNraW5fY29sb3I6IHN0cmluZ1xyXG4gIGV5ZV9jb2xvcjogc3RyaW5nXHJcbiAgYmlydGhfeWVhcjogc3RyaW5nXHJcbiAgZ2VuZGVyOiBzdHJpbmdcclxuICBjcmVhdGVkOiBzdHJpbmdcclxuICBlZGl0ZWQ6IHN0cmluZ1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElQZW9wbGVFbnRpdHkgZXh0ZW5kcyBJUGVvcGxle1xyXG4gIHNwZWNpZXM6IElGcm9tRm9yZWlnblRhYmxlc1xyXG4gIHZlaGljbGVzOiBJRnJvbUZvcmVpZ25UYWJsZXNbXVxyXG4gIHN0YXJzaGlwczogSUZyb21Gb3JlaWduVGFibGVzW11cclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJUGVvcGxlRnJvbUFwaSBleHRlbmRzIElQZW9wbGV7XHJcbiAgc3BlY2llczogc3RyaW5nXHJcbiAgdmVoaWNsZXM6IHN0cmluZ1tdXHJcbiAgc3RhcnNoaXBzOiBzdHJpbmdbXVxyXG59XHJcblxyXG5leHBvcnQgZW51bSBJUGVvcGxlRW50aXR5RmllbGRze1xyXG4gIElkID0gJ2lkJyxcclxuICBOYW1lID0gJ25hbWUnLFxyXG4gIEhlaWdodCA9ICdoZWlnaHQnLFxyXG4gIE1hc3MgPSAnbWFzcycsXHJcbiAgSGFpckNvbG9yID0gJ2hhaXJfY29sb3InLFxyXG4gIFNraW5Db2xvciA9ICdza2luX2NvbG9yJyxcclxuICBFeWVDb2xvciA9ICdleWVfY29sb3InLFxyXG4gIEJpcnRoWWVhciA9ICdiaXJ0aF95ZWFyJyxcclxuICBHZW5kZXIgPSAnZ2VuZGVyJyxcclxuICBDcmVhdGVkID0gJ2NyZWF0ZWQnLFxyXG4gIEVkaXRlZCA9ICdlZGl0ZWQnLFxyXG4gIFVybCA9ICd1cmwnXHJcbn0iLCJleHBvcnQgaW50ZXJmYWNlIFBpbG90e1xyXG4gICAgaWQ6IFBpbG90RmllbGRUeXBlcy5pZDtcclxuICAgIHZlaGljbGVfaWQ6IFBpbG90RmllbGRUeXBlcy52ZWhpY2xlX2lkO1xyXG4gICAgcGVvcGxlX2lkOiBQaWxvdEZpZWxkVHlwZXMucGVvcGxlX2lkXHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIFBpbG90RmllbGROYW1lc3tcclxuICAgIElkID0gJ2lkJyxcclxuICAgIFZlaGljbGVJZCA9ICd2ZWhpY2xlX2lkJyxcclxuICAgIFBlb3BsZUlkID0gJ3Blb3BsZV9pZCdcclxufVxyXG5cclxuXHJcbmV4cG9ydCBuYW1lc3BhY2UgUGlsb3RGaWVsZFR5cGVze1xyXG4gICAgZXhwb3J0IHR5cGUgaWQgPSBzdHJpbmc7XHJcbiAgICBleHBvcnQgdHlwZSB2ZWhpY2xlX2lkID0gc3RyaW5nO1xyXG4gICAgZXhwb3J0IHR5cGUgcGVvcGxlX2lkID0gc3RyaW5nO1xyXG59IiwiZXhwb3J0IGludGVyZmFjZSBJUmFjZXtcclxuICAgIGlkOiBzdHJpbmdcclxuICAgIHBlb3BsZV9pZDogc3RyaW5nXHJcbiAgICBzcGVjaWVfaWQ6IHN0cmluZ1xyXG59XHJcblxyXG5leHBvcnQgZW51bSBSYWNlRmllbGRze1xyXG4gICAgaWQgPSAnaWQnLFxyXG4gICAgUGVvcGxlSWQgPSAncGVvcGxlX2lkJyxcclxuICAgIFNwZWNpZUlkID0gJ3NwZWNpZV9pZCdcclxufSIsImltcG9ydCB7IElQbGFuZXRFbnRpdHkgYXMgUGxhbmV0fSBmcm9tICcuL1BsYW5ldCc7XHJcbmltcG9ydCB7IElTdWJqZWN0LCBJU3ViamVjdEZyb21BcGkgfSBmcm9tICcuL1N1YmplY3QnO1xyXG5pbXBvcnQgeyBJRnJvbUZvcmVpZ25UYWJsZXMgfSBmcm9tICcuL0Zyb21Gb3JlaWduVGFibGVzJztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVNwZWNpZUVudGl0eSBleHRlbmRzIElTdWJqZWN0e1xyXG4gIGNsYXNzaWZpY2F0aW9uOiBzdHJpbmdcclxuICBkZXNpZ25hdGlvbjogc3RyaW5nXHJcbiAgYXZlcmFnZV9oZWlnaHQ6IHN0cmluZ1xyXG4gIHNraW5fY29sb3JzOiBzdHJpbmdcclxuICBoYWlyX2NvbG9yczogc3RyaW5nXHJcbiAgZXllX2NvbG9yczogc3RyaW5nXHJcbiAgYXZlcmFnZV9saWZlc3Bhbjogc3RyaW5nXHJcbiAgbGFuZ3VhZ2U6IHN0cmluZ1xyXG4gIGhvbWV3b3JsZDogUGxhbmV0XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVNwZWNpZUZyb21BcGkgZXh0ZW5kcyBJU3ViamVjdEZyb21BcGl7XHJcbiAgY2xhc3NpZmljYXRpb246IHN0cmluZ1xyXG4gIHBlb3BsZTogc3RyaW5nW11cclxuICBmaWxtczogc3RyaW5nW11cclxuICBkZXNpZ25hdGlvbjogc3RyaW5nXHJcbiAgYXZlcmFnZV9oZWlnaHQ6IHN0cmluZ1xyXG4gIHNraW5fY29sb3JzOiBzdHJpbmdcclxuICBoYWlyX2NvbG9yczogc3RyaW5nXHJcbiAgZXllX2NvbG9yczogc3RyaW5nXHJcbiAgYXZlcmFnZV9saWZlc3Bhbjogc3RyaW5nXHJcbiAgbGFuZ3VhZ2U6IHN0cmluZ1xyXG4gIGhvbWV3b3JsZDogc3RyaW5nXHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIElTcGVjaWVFbnRpdHlGaWVsZHN7XHJcbiAgSWQ9J2lkJyxcclxuICBOYW1lID0gJ25hbWUnLFxyXG4gIENsYXNzaWZpY2F0aW9uID0gJ2NsYXNzaWZpY2F0aW9uJyxcclxuICBEZXNpZ25hdGlvbiA9ICdkZXNpZ25hdGlvbicsXHJcbiAgQXZlcmFnZUhlaWdodCA9ICdhdmVyYWdlX2hlaWdodCcsXHJcbiAgU2tpbkNvbG9ycyA9ICdza2luX2NvbG9ycycsXHJcbiAgSGFpckNvbG9ycyA9ICdoYWlyX2NvbG9ycycsXHJcbiAgRXllQ29sb3JzID0gJ2V5ZV9jb2xvcnMnLFxyXG4gIEF2ZXJhZ2VMaWZlc3BhbiA9ICdhdmVyYWdlX2xpZmVzcGFuJyxcclxuICBIb21ld29ybGQgPSAnaG9tZXdvcmxkJyxcclxuICBMYW5ndWFnZSA9ICdsYW5ndWFnZScsXHJcbiAgVXJsID0gJ3VybCdcclxufVxyXG5cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVNwZWNpZVJlc3BvbnNlIGV4dGVuZHMgSVNwZWNpZUVudGl0eXtcclxuICBwZW9wbGU6IElGcm9tRm9yZWlnblRhYmxlc1tdLFxyXG4gIGZpbG1zOiBJRnJvbUZvcmVpZ25UYWJsZXNbXVxyXG59IiwiZXhwb3J0IGludGVyZmFjZSBJU3BlY2llc0luRmlsbXN7XHJcbiAgICBpZDogc3RyaW5nO1xyXG4gICAgZmlsbV9pZDogc3RyaW5nO1xyXG4gICAgc3BlY2llX2lkOiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBuYW1lc3BhY2UgU3BlY2llc0luRmlsbXNGaWVsZHNUeXBle1xyXG4gICAgZXhwb3J0IHR5cGUgaWQgPSBzdHJpbmc7XHJcbiAgICBleHBvcnQgdHlwZSBmaWxtX2lkID0gc3RyaW5nO1xyXG4gICAgZXhwb3J0IHR5cGUgc3BlY2llX2lkID0gc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgZW51bSBTcGVjaWVzSW5GaWxtc0ZpZWxkc05hbWV7XHJcbiAgICBJZCA9ICdpZCcsXHJcbiAgICBGaWxtSWQgPSAnZmlsbV9pZCcsXHJcbiAgICBTcGVjaWVJZCA9ICdzcGVjaWVfaWQnICAgIFxyXG59IiwiaW1wb3J0IHtJU3ViamVjdCwgSVN1YmplY3RGcm9tQXBpfSBmcm9tICcuL1N1YmplY3QnO1xyXG5pbXBvcnQgeyBJVHJhbnNwb3J0RnJvbUFwaSwgSVRyYW5zcG9ydEVudGl0eSB9IGZyb20gJy4vVHJhbnNwb3J0JztcclxuaW1wb3J0IHsgSUZyb21Gb3JlaWduVGFibGVzIH0gZnJvbSAnLi9Gcm9tRm9yZWlnblRhYmxlcyc7XHJcbmludGVyZmFjZSBJU3RhcnNoaXB7XHJcbiAgaHlwZXJkcml2ZV9yYXRpbmc6IHN0cmluZ1xyXG4gIE1HTFQ6IHN0cmluZ1xyXG4gIHN0YXJzaGlwX2NsYXNzOiBzdHJpbmdcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJU3RhcnNoaXBGcm9tQXBpIGV4dGVuZHMgSVN0YXJzaGlwLCBJU3ViamVjdEZyb21BcGksIElUcmFuc3BvcnRGcm9tQXBpe31cclxuZXhwb3J0IGludGVyZmFjZSBJU3RhcnNoaXBFbnRpdHkgZXh0ZW5kcyBJU3RhcnNoaXAgLElTdWJqZWN0LCBJVHJhbnNwb3J0RW50aXR5e31cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVN0YXJzaGlwUmVzcG9uc2UgZXh0ZW5kcyBJU3RhcnNoaXBFbnRpdHl7XHJcbiAgcGlsb3RzOiBJRnJvbUZvcmVpZ25UYWJsZXNbXSxcclxuICBmaWxtczogSUZyb21Gb3JlaWduVGFibGVzW11cclxufVxyXG5cclxuXHJcbmV4cG9ydCBlbnVtIFN0YXJzaGlwRW50aXR5RmllbGRzIHtcclxuICBJZCA9ICdpZCcsXHJcbiAgVXJsID0gJ3VybCcsXHJcbiAgTmFtZSA9ICduYW1lJyxcclxuICBDcmVhdGVkID0gJ2NyZWF0ZWQnLFxyXG4gIEVkaXRlZCA9ICdlZGl0ZWQnLFxyXG4gIE1vZGVsID0gJ21vZGVsJyxcclxuICBNYW51ZmFjdHVyZXIgPSAnbWFudWZhY3R1cmVyJyxcclxuICBDb3N0SW5DcmVkaXRzID0gJ2Nvc3RfaW5fY3JlZGl0cycsXHJcbiAgTGVuZ3RoID0gJ2xlbmd0aCcsXHJcbiAgTWF4QXRtb3NwaGVyaW5nU3BlZWQgPSAnbWF4X2F0bW9zcGhlcmluZ19zcGVlZCcsXHJcbiAgQ3JldyA9ICdjcmV3JyxcclxuICBQYXNzZW5nZXJzID0gJ3Bhc3NlbmdlcnMnLFxyXG4gIENhcmdvQ2FwYWNpdHkgPSAnY2FyZ29fY2FwYWNpdHknLFxyXG4gIENvbnN1bWFibGVzID0gJ2NvbnN1bWFibGVzJyxcclxuICBIeXBlcmRyaXZlUmF0aW5nID0gJ2h5cGVyZHJpdmVfcmF0aW5nJyxcclxuICBNR0xUID0gJ01HTFQnLFxyXG4gIFN0YXJzaGlwQ2xhc3MgPSAnc3RhcnNoaXBfY2xhc3MnXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgU3RhcnNoaXBFbnRpdHlGaWVsZHNBcnJheXtcclxuICByZWFkb25seSBbaW5kZXg6IG51bWJlcl06IFN0YXJzaGlwRW50aXR5RmllbGRzXHJcbn0iLCJcclxuZXhwb3J0IG5hbWVzcGFjZSBTdGFyc2hpcFBpbG90RmllbGRze1xyXG4gICBleHBvcnQgdHlwZSBpZCA9IHN0cmluZztcclxuICAgZXhwb3J0IHR5cGUgc3RhcnNoaXBfaWQgPSBzdHJpbmc7XHJcbiAgIGV4cG9ydCB0eXBlIHBlb3BsZV9pZCA9IHN0cmluZzsgXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgU3RhcnNoaXBQaWxvdHtcclxuICAgIGlkOiBTdGFyc2hpcFBpbG90RmllbGRzLmlkO1xyXG4gICAgc3RhcnNoaXBfaWQ6IFN0YXJzaGlwUGlsb3RGaWVsZHMuc3RhcnNoaXBfaWQ7XHJcbiAgICBwZW9wbGVfaWQ6IFN0YXJzaGlwUGlsb3RGaWVsZHMucGVvcGxlX2lkO1xyXG59XHJcblxyXG5leHBvcnQgZW51bSBTdGFyc2hpcFBpbG90RmllbGRzTmFtZXN7XHJcbiAgICBJZCA9ICdpZCcsXHJcbiAgICBTdGFyc2hpcElkID0gJ3N0YXJzaGlwX2lkJyxcclxuICAgIFBlb3BsZUlkID0gJ3Blb3BsZV9pZCdcclxufSIsImV4cG9ydCBpbnRlcmZhY2UgU3RhcnNoaXBzSW5GaWxtc3tcclxuICBpZDogc3RyaW5nXHJcbiAgc3RhcnNoaXBfaWQ6IHN0cmluZ1xyXG4gIGZpbG1faWQ6IHN0cmluZ1xyXG59XHJcblxyXG5leHBvcnQgZW51bSBTdGFyc2hpcHNJbkZpbG1zRmllbGRze1xyXG4gIElkID0gJ2lkJyxcclxuICBTdGFyc2hpcElkID0gJ3N0YXJzaGlwX2lkJyxcclxuICBGaWxtSWQgPSAnZmlsbV9pZCdcclxufSIsImltcG9ydCB7IElTdWJqZWN0RnJvbUFwaSwgSVN1YmplY3QgfSBmcm9tIFwiLi9TdWJqZWN0XCI7XHJcbmltcG9ydCB7IElUcmFuc3BvcnRGcm9tQXBpLCBJVHJhbnNwb3J0RW50aXR5IH0gZnJvbSBcIi4vVHJhbnNwb3J0XCI7XHJcbmltcG9ydCB7IElGcm9tRm9yZWlnblRhYmxlcyB9IGZyb20gXCIuL0Zyb21Gb3JlaWduVGFibGVzXCI7XHJcblxyXG5pbnRlcmZhY2UgVmVoaWNsZSB7IFxyXG4gIHZlaGljbGVfY2xhc3M6IHN0cmluZ1xyXG4gfVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJVmVoaWNsZUZyb21BcGkgZXh0ZW5kcyBJU3ViamVjdEZyb21BcGksIElUcmFuc3BvcnRGcm9tQXBpe1xyXG4gIHZlaGljbGVfY2xhc3M6IHN0cmluZ1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElWZWhpY2xlRW50aXR5IGV4dGVuZHMgVmVoaWNsZSwgSVN1YmplY3RGcm9tQXBpLCBJVHJhbnNwb3J0RW50aXR5e31cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVZlaGljbGVSZXNwb25zZSBleHRlbmRzIElWZWhpY2xlRW50aXR5e1xyXG4gIHBpbG90czogSUZyb21Gb3JlaWduVGFibGVzW10sXHJcbiAgZmlsbXM6IElGcm9tRm9yZWlnblRhYmxlc1tdXHJcbn1cclxuXHJcblxyXG5leHBvcnQgZW51bSBWZWhpY2xlRmllbGRzTmFtZXN7XHJcbiAgSWQgPSAnaWQnLFxyXG4gIE5hbWU9ICduYW1lJyxcclxuICBNb2RlbCA9ICdtb2RlbCcsXHJcbiAgTWFudWZhY3R1cmVyID0gJ21hbnVmYWN0dXJlcicsXHJcbiAgQ29zdEluQ3JlZGl0cyA9ICdjb3N0X2luX2NyZWRpdHMnLFxyXG4gIExlbmdodCA9ICdsZW5ndGgnLFxyXG4gIE1heEF0bW9zcGhlcmluZ1NwZWVkID0gJ21heF9hdG1vc3BoZXJpbmdfc3BlZWQnLFxyXG4gIENyZXcgPSAnY3JldycsXHJcbiAgUGFzc2VuZ2VycyA9ICdwYXNzZW5nZXJzJyxcclxuICBDYXJnb0NhcGFjaXR5ID0gJ2NhcmdvX2NhcGFjaXR5JyxcclxuICBDb25zdW1hYmxlcyA9ICdjb25zdW1hYmxlcycsXHJcbiAgVmVoaWNsZUNsYXNzID0gJ3ZlaGljbGVfY2xhc3MnLFxyXG4gIFVybCA9ICd1cmwnXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgVmVoaWNsZUZpZWxkc05hbWVzQXJyYXl7XHJcbiAgW2tleTogbnVtYmVyXSA6IFZlaGljbGVGaWVsZHNOYW1lc1xyXG59IiwiZXhwb3J0IGludGVyZmFjZSBWZWhpY2xlc0luRmlsbXN7XHJcbiAgaWQ6IHN0cmluZ1xyXG4gIHZlaGljbGVfaWQ6IHN0cmluZ1xyXG4gIGZpbG1faWQ6IHN0cmluZ1xyXG59XHJcblxyXG5leHBvcnQgZW51bSBWZWhpY2xlc0luRmlsbXNGaWVsZHNOYW1lc3tcclxuICBJZCA9ICdpZCcsXHJcbiAgVmVoaWNsZUlkID0gJ3ZlaGljbGVfaWQnLFxyXG4gIEZpbG1JZCA9ICdmaWxtX2lkJ1xyXG59IiwiaW1wb3J0IHsgRXhlY0V4Y2VwdGlvbiB9IGZyb20gXCJjaGlsZF9wcm9jZXNzXCI7XHJcblxyXG5leHBvcnQgY29uc3QgYXN5bmNDb21wb3NlID0gKC4uLmZuczogRnVuY3Rpb25bXSkgPT4gKGRhdGE6IFByb21pc2U8YW55PikgPT5cclxuICBmbnMucmVkdWNlUmlnaHQoXHJcbiAgICAoYWNjOiBQcm9taXNlPGFueT4sIGY6IEZ1bmN0aW9uLCBpbmRleDogbnVtYmVyKSA9PlxyXG4gICAgICBhY2NcclxuICAgICAgICAudGhlbigodjogYW55KSA9PiBmKHYpKVxyXG4gICAgICAgIC5jYXRjaCgoZTpFeGVjRXhjZXB0aW9uKSA9PiBjb25zb2xlLmxvZyhlKSlcclxuICAgICwgZGF0YVxyXG4gIClcclxuIiwiZnVuY3Rpb24gbG9nZ2VyKHA6IE5vZGVKUy5Qcm9jZXNzLCBsb2dGbjogKHM6IHN0cmluZykgPT4gdm9pZCkge1xyXG4gXHJcbiAgcmV0dXJuIChtZXNzYWdlOiBzdHJpbmcpID0+IHAuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnICYmIGxvZ0ZuKG1lc3NhZ2UpO1xyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgbG9nZ2VyKHByb2Nlc3MsIGNvbnNvbGUubG9nKTsiLCJpbXBvcnQgeyBQcm9jZXNzRW52T3B0aW9ucyB9IGZyb20gJ2NoaWxkX3Byb2Nlc3MnO1xyXG5pbXBvcnQgTG9nIGZyb20gJy4vbG9nZ2VyJzsgXHJcbmV4cG9ydCBjb25zdCBtZW1vaXplOiAoZjogRnVuY3Rpb24pID0+IChhOiBhbnkpID0+IGFueSA9IChmbikgPT4ge1xyXG4gIGxldCBzdGF0ZSA9IHt9IGFzIGFueTtcclxuICByZXR1cm4gZnVuY3Rpb24oLi4uYXJnczogYW55KSB7XHJcbiAgICBjb25zdCBrZXk6IHN0cmluZyA9IFsuLi5hcmdzXS5yZWR1Y2UoKGFjYywgY3VycikgPT4gYWNjLmNvbmNhdChjdXJyKSwgJycpO1xyXG4gICAgaWYgKE9iamVjdC5rZXlzKHN0YXRlKS5zb21lKChrOiBzdHJpbmcpID0+IGsgPT09IGtleSkpIHtcclxuICAgICAgcmV0dXJuICgpID0+IHN0YXRlW2tleV07XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzdGF0ZVtrZXldID0gZm4oLi4uYXJncyk7XHJcbiAgICAgIHJldHVybiAoKSA9PiBzdGF0ZVtrZXldO1xyXG4gICAgfVxyXG4gIH07XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgYXN5bmNNZW1vaXplOiAoZjogKGE6IGFueSkgPT4gUHJvbWlzZTxhbnk+KSA9PiAoYTogYW55KSA9PiAoKSA9PiBQcm9taXNlPGFueT4gPSAoZm4pID0+IHtcclxuICBsZXQgc3RhdGUgPSB7fSBhcyBhbnk7XHJcbiAgcmV0dXJuIChhcmdzOiBhbnkpID0+IHtcclxuICAgIGNvbnN0IGtleTogc3RyaW5nID0gWy4uLmFyZ3NdLnJlZHVjZSgoYWNjLCBjdXJyKSA9PiBhY2MuY29uY2F0KGN1cnIpLCAnJyk7XHJcbiAgICBpZiAoT2JqZWN0LmtleXMoc3RhdGUpLnNvbWUoKGs6IHN0cmluZykgPT4gayA9PT0ga2V5KSkge1xyXG4gICAgICBMb2coJ01lbW9pemU6IERhdGEgZXh0cmFjdGVkIEZyb20gQ2FjaGUnKTtcclxuICAgICAgcmV0dXJuICgpID0+IHN0YXRlW2tleV07XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBMb2coJ01lbW9pemU6IGRhdGEgZXh0cmFjdGVkIEZyb20gREInKTtcclxuICAgICAgc3RhdGVba2V5XSA9IGZuKGFyZ3MpO1xyXG4gICAgICByZXR1cm4gKCkgPT4gc3RhdGVba2V5XTtcclxuICAgIH1cclxuICB9O1xyXG59O1xyXG5cclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZXhwcmVzc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJoZWxtZXRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwia25leFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyYW1kYVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yb3V0ZXItY29uZmlnXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=