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
/* harmony import */ var _utils_port_getter__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./utils/port-getter */ "./server/utils/port-getter.ts");
/* harmony import */ var _utils_renderer__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./utils/renderer */ "./server/utils/renderer.tsx");




var app = __webpack_require__(/*! express */ "express")();










app.use('/static', express__WEBPACK_IMPORTED_MODULE_0__["static"]('public'));
app.use('/api/v1/films', _routes_film__WEBPACK_IMPORTED_MODULE_1__["default"]);
app.use('/api/v1/planets', _routes_planets__WEBPACK_IMPORTED_MODULE_3__["default"]);
app.use('/api/v1/people', _routes_people__WEBPACK_IMPORTED_MODULE_4__["default"]);
app.use('/api/v1/species', _routes_species__WEBPACK_IMPORTED_MODULE_5__["default"]);
app.use('/api/v1/vehicles', _routes_vehicle__WEBPACK_IMPORTED_MODULE_6__["default"]);
app.use('/api/v1/starships', _routes_starship__WEBPACK_IMPORTED_MODULE_7__["default"]);
app.get('/*', function (req, res, next) {
  var promises = Object(react_router_config__WEBPACK_IMPORTED_MODULE_8__["matchRoutes"])(_client_routes__WEBPACK_IMPORTED_MODULE_9__["default"], req.path).map(function (_ref) {
    var route = _ref.route,
        match = _ref.match;
    return route.loadData ? route.loadData(match) : Promise.resolve(null);
  }).map(function (promise) {
    return promise && new Promise(function (resolve, reject) {
      return promise.then(resolve)["catch"](resolve);
    });
  });

  if (promises.length > 0) {
    Promise.all(promises).then(function () {
      return res.send(Object(_utils_renderer__WEBPACK_IMPORTED_MODULE_11__["default"])(req));
    });
  } else {
    next();
  }
});
app.use('/*', function (req, res) {
  return res.json({
    message: 'Not Found'
  });
});
app.use(helmet__WEBPACK_IMPORTED_MODULE_2__());
app.listen(Object(_utils_port_getter__WEBPACK_IMPORTED_MODULE_10__["default"])(process), function () {
  return console.log("server started on port ".concat(Object(_utils_port_getter__WEBPACK_IMPORTED_MODULE_10__["default"])(process)));
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

/***/ "./server/utils/port-getter.ts":
/*!*************************************!*\
  !*** ./server/utils/port-getter.ts ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var getPort = function getPort(p) {
  return p && p.env && p.env.PORT ? p.env.PORT : 3000;
};

/* harmony default export */ __webpack_exports__["default"] = (getPort);

/***/ }),

/***/ "./server/utils/renderer.tsx":
/*!***********************************!*\
  !*** ./server/utils/renderer.tsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(process) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-helmet */ "react-helmet");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-config */ "react-router-config");
/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_router_config__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-dom/server */ "react-dom/server");
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _client_routes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../client/routes */ "./client/routes/index.tsx");
/* harmony import */ var _port_getter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./port-getter */ "./server/utils/port-getter.ts");








var renderer = function renderer(req) {
  var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var content = Object(react_dom_server__WEBPACK_IMPORTED_MODULE_4__["renderToString"])(react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_2__["StaticRouter"], {
    location: req.path,
    context: context
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", null, Object(react_router_config__WEBPACK_IMPORTED_MODULE_3__["renderRoutes"])(_client_routes__WEBPACK_IMPORTED_MODULE_5__["default"]))));
  var helmet = react_helmet__WEBPACK_IMPORTED_MODULE_1__["Helmet"].renderStatic();
  return "<html lang=\"en\">\n    <head>\n        <meta charset=\"UTF-8\">\n        ".concat(helmet.meta.toString(), "\n        <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n        <meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\">\n        ").concat(helmet.title.toString(), "\n        <link href=\"https://fonts.googleapis.com/css?family=Lato:400,700\" rel=\"stylesheet\">\n        <link rel=\"stylesheet\" type=\"text/css\" charset=\"UTF-8\" href=\"https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css\" />\n        <link rel=\"stylesheet\" href=\"https://use.fontawesome.com/releases/v5.0.9/css/all.css\" integrity=\"sha384-5SOiIsAziJl6AWe0HWRKTXlfcSHKmYV4RBF18PPJ173Kzn7jzMyFuTtk8JA7QQG1\" crossorigin=\"anonymous\">\n    </head>\n    <body ").concat(helmet.bodyAttributes.toString(), ">\n        <div id=\"root\">").concat(content, "</div>\n        <script src=\"http://localhost:").concat(Object(_port_getter__WEBPACK_IMPORTED_MODULE_6__["default"])(process), "/public/client_bundle.js\"></script>\n    </body>\n  \n</html>");
};

/* harmony default export */ __webpack_exports__["default"] = (renderer);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ 0:
/*!***********************************************!*\
  !*** multi @babel/polyfill ./server/index.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! @babel/polyfill */"@babel/polyfill");
module.exports = __webpack_require__(/*! ./server/index.ts */"./server/index.ts");


/***/ }),

/***/ "@babel/polyfill":
/*!**********************************!*\
  !*** external "@babel/polyfill" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/polyfill");

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

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L3BhZ2VzL0Fib3V0LnRzeCIsIndlYnBhY2s6Ly8vLi9jbGllbnQvcGFnZXMvQ29udGFjdC50c3giLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L3BhZ2VzL0hvbWUudHN4Iiwid2VicGFjazovLy8uL2NsaWVudC9yb3V0ZXMvaW5kZXgudHN4Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9wcm9jZXNzL2Jyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL0RCL2dldEFsbC50cyIsIndlYnBhY2s6Ly8vLi9zZXJ2ZXIvREIvZ2V0QnlJZC50cyIsIndlYnBhY2s6Ly8vLi9zZXJ2ZXIvREIvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL2NvbnRyb2xsZXJzL2ZpbG0udHMiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL2NvbnRyb2xsZXJzL3Blb3BsZS50cyIsIndlYnBhY2s6Ly8vLi9zZXJ2ZXIvY29udHJvbGxlcnMvcGxhbmV0LnRzIiwid2VicGFjazovLy8uL3NlcnZlci9jb250cm9sbGVycy9zcGVjaWUudHMiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL2NvbnRyb2xsZXJzL3N0YXJzaGlwLnRzIiwid2VicGFjazovLy8uL3NlcnZlci9jb250cm9sbGVycy92ZWhpY2xlLnRzIiwid2VicGFjazovLy8uL3NlcnZlci9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zZXJ2ZXIva25leGZpbGUudHMiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL3JvdXRlcy9maWxtLnRzIiwid2VicGFjazovLy8uL3NlcnZlci9yb3V0ZXMvcGVvcGxlLnRzIiwid2VicGFjazovLy8uL3NlcnZlci9yb3V0ZXMvcGxhbmV0cy50cyIsIndlYnBhY2s6Ly8vLi9zZXJ2ZXIvcm91dGVzL3NwZWNpZXMudHMiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL3JvdXRlcy9zdGFyc2hpcC50cyIsIndlYnBhY2s6Ly8vLi9zZXJ2ZXIvcm91dGVzL3ZlaGljbGUudHMiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL3NldHRpbmdzLmpzIiwid2VicGFjazovLy8uL3NlcnZlci90eXBlcy9UYWJsZXMudHMiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL3R5cGVzL2ludGVyZmFjZXMvQWN0b3JzLnRzIiwid2VicGFjazovLy8uL3NlcnZlci90eXBlcy9pbnRlcmZhY2VzL0ZpbG0udHMiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL3R5cGVzL2ludGVyZmFjZXMvUGVvcGxlLnRzIiwid2VicGFjazovLy8uL3NlcnZlci90eXBlcy9pbnRlcmZhY2VzL1BpbG90LnRzIiwid2VicGFjazovLy8uL3NlcnZlci90eXBlcy9pbnRlcmZhY2VzL1JhY2VzLnRzIiwid2VicGFjazovLy8uL3NlcnZlci90eXBlcy9pbnRlcmZhY2VzL1NwZWNpZS50cyIsIndlYnBhY2s6Ly8vLi9zZXJ2ZXIvdHlwZXMvaW50ZXJmYWNlcy9TcGVjaWVzSW5GaWxtcy50cyIsIndlYnBhY2s6Ly8vLi9zZXJ2ZXIvdHlwZXMvaW50ZXJmYWNlcy9TdGFyc2hpcC50cyIsIndlYnBhY2s6Ly8vLi9zZXJ2ZXIvdHlwZXMvaW50ZXJmYWNlcy9TdGFyc2hpcFBpbG90LnRzIiwid2VicGFjazovLy8uL3NlcnZlci90eXBlcy9pbnRlcmZhY2VzL1N0YXJzaGlwc0luRmlsbXMudHMiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL3R5cGVzL2ludGVyZmFjZXMvVmVoaWNsZS50cyIsIndlYnBhY2s6Ly8vLi9zZXJ2ZXIvdHlwZXMvaW50ZXJmYWNlcy9WZWhpY2xlc0luRmlsbXMudHMiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL3V0aWxzL2FzeW5jQ29tcG9zZS50cyIsIndlYnBhY2s6Ly8vLi9zZXJ2ZXIvdXRpbHMvbG9nZ2VyLnRzIiwid2VicGFjazovLy8uL3NlcnZlci91dGlscy9tZW1vaXplLnRzIiwid2VicGFjazovLy8uL3NlcnZlci91dGlscy9wb3J0LWdldHRlci50cyIsIndlYnBhY2s6Ly8vLi9zZXJ2ZXIvdXRpbHMvcmVuZGVyZXIudHN4Iiwid2VicGFjazovLy9leHRlcm5hbCBcIkBiYWJlbC9wb2x5ZmlsbFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImV4cHJlc3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJoZWxtZXRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJrbmV4XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmFtZGFcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWRvbS9zZXJ2ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1oZWxtZXRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1yb3V0ZXItY29uZmlnXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3Qtcm91dGVyLWRvbVwiIl0sIm5hbWVzIjpbIkFib3V0IiwicHJvcHMiLCJDb250YWN0IiwiSG9tZSIsInJvdXRlcyIsInBhdGgiLCJjb21wb25lbnQiLCJnZXRJZHMiLCJ0YWJsZU5hbWUiLCJrbmV4Iiwic2VsZWN0IiwiZnJvbSIsIl9nZXRBbGwiLCJnZXRCeUlkSGFuZGxlciIsImlkcyIsIm1hcCIsIm8iLCJpZCIsIm1hcFByb21pc2VzVG9SZXN1bHQiLCJwcm9taXNlcyIsIlByb21pc2UiLCJhbGwiLCJnZXRBbGwiLCJ0YWJsZSIsImNvbmZpZ3VyZWRHZXRCeUlkSGFuZGxlciIsImFzeW5jQ29tcG9zZSIsInJlc29sdmUiLCJnZXRCeUlkUXVlcnkiLCJmb3JlaWduRmllbGRzIiwibWFwREJSZXNwb25zZSIsInJlcyIsInJvd3MiLCJqc29uX2J1aWxkX29iamVjdCIsImZldGNoRW50aXR5V2l0aE1hbnlUb01hbnlGaWVsZHMiLCJnZXRNTUZpZWxkc1F1ZXJ5RnJvbSIsIm1hbnlUb01hbnlGaWVsZHMiLCJyZXN1bHQiLCJPYmplY3QiLCJrZXlzIiwicmVkdWNlIiwiYWNjIiwiY3VyciIsImluZGV4IiwidW5kZWZpbmVkIiwiZmllbGROYW1lSW5SZXNwb25zZSIsImdldE1NRmllbGRCeUlkIiwicmF3Iiwid3JhcCIsIm1hbnlUb01hbnlRdWVyeSIsImZpZWxkRGF0YSIsIndoZXJlIiwiZmllbGROYW1lIiwicXVlcnkiLCJzaG93RmllbGRzIiwibWFueVRvTWFueVRhYmxlTmFtZSIsImludGVyc2VjdEVudGl0eU9uIiwiY29uY2F0RmllbGRzV2l0aFRhYmxlTmFtZSIsImZpZWxkIiwiYnVpbGRNTUZRdWVyeSIsImNvbXBvc2UiLCJmaWVsZHMiLCJyZXF1aXJlIiwiZGV2ZWxvcG1lbnQiLCJfZ2V0QnlJZCIsIk1lbSIsIkVudGl0eVRhYmxlIiwiRmlsbSIsIlZlaGljbGUiLCJWZWhpY2xlRmllbGRzTmFtZXMiLCJJZCIsIk5hbWUiLCJNYW55VG9NYW55VGFibGUiLCJWZWhpY2xlc0luRmlsbXMiLCJWZWhpY2xlc0luRmlsbXNGaWVsZHNOYW1lcyIsIlZlaGljbGVJZCIsIlBlb3BsZSIsIklQZW9wbGVFbnRpdHlGaWVsZHMiLCJBY3RvcnMiLCJJQWN0b3JzRmllbGRzTmFtZXMiLCJQZW9wbGVJZCIsIkZpbG1JZCIsIlN0YXJzaGlwIiwiU3RhcnNoaXBzSW5GaWxtcyIsIlBsYW5ldCIsIlBsYW5ldHNJbkZpbG1zIiwiZ2V0QnlJZCIsIkZpbG1GaWVsZHNOYW1lcyIsIlRpdGxlIiwiU3BlY2llIiwiSVNwZWNpZUVudGl0eUZpZWxkcyIsIk9uZVRvTWFueVRhYmxlIiwiUmFjZSIsIlJhY2VGaWVsZHMiLCJTcGVjaWVJZCIsIlBpbG90IiwiUGlsb3RGaWVsZE5hbWVzIiwiU3RhcnNoaXBFbnRpdHlGaWVsZHMiLCJTdGFyc2hpcFBpbG90IiwiU3RhcnNoaXBQaWxvdEZpZWxkc05hbWVzIiwiU3RhcnNoaXBJZCIsIlJlc2lkZW50IiwiU3BlY2llc0luRmlsbXMiLCJTcGVjaWVzSW5GaWxtc0ZpZWxkc05hbWUiLCJTdGFyc2hpcHNJbkZpbG1zRmllbGRzIiwiYXBwIiwidXNlIiwiZXhwcmVzcyIsImZpbG0iLCJwbGFuZXQiLCJwZW9wbGUiLCJzcGVjaWUiLCJ2ZWhpY2xlIiwic3RhcnNoaXAiLCJnZXQiLCJyZXEiLCJuZXh0IiwibWF0Y2hSb3V0ZXMiLCJSb3V0ZXMiLCJyb3V0ZSIsIm1hdGNoIiwibG9hZERhdGEiLCJwcm9taXNlIiwicmVqZWN0IiwidGhlbiIsImxlbmd0aCIsInNlbmQiLCJyZW5kZXJlciIsImpzb24iLCJtZXNzYWdlIiwiaGVsbWV0IiwibGlzdGVuIiwiZ2V0UG9ydCIsInByb2Nlc3MiLCJjb25zb2xlIiwibG9nIiwicyIsIm1vZHVsZSIsImV4cG9ydHMiLCJjbGllbnQiLCJjb25uZWN0aW9uIiwidXNlciIsImhvc3QiLCJkYXRhYmFzZSIsInBhc3N3b3JkIiwic3NsIiwiUiIsIlJvdXRlciIsInBhcmFtcyIsInIiLCJUYWJsZSIsIkZpbG1GaWVsZHMiLCJQaWxvdEZpZWxkVHlwZXMiLCJTcGVjaWVzSW5GaWxtc0ZpZWxkc1R5cGUiLCJTdGFyc2hpcFBpbG90RmllbGRzIiwiZm5zIiwiZGF0YSIsInJlZHVjZVJpZ2h0IiwiZiIsInYiLCJlIiwibG9nZ2VyIiwicCIsImxvZ0ZuIiwiZW52IiwiTk9ERV9FTlYiLCJtZW1vaXplIiwiZm4iLCJzdGF0ZSIsImFyZ3MiLCJrZXkiLCJjb25jYXQiLCJzb21lIiwiayIsImFzeW5jTWVtb2l6ZSIsIkxvZyIsIlBPUlQiLCJjb250ZXh0IiwiY29udGVudCIsInJlbmRlclRvU3RyaW5nIiwicmVuZGVyUm91dGVzIiwiSGVsbWV0IiwicmVuZGVyU3RhdGljIiwibWV0YSIsInRvU3RyaW5nIiwidGl0bGUiLCJib2R5QXR0cmlidXRlcyJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQUE7QUFBQTs7QUFHQSxJQUFNQSxLQUFLLEdBQUcsU0FBUkEsS0FBUSxDQUFDQyxLQUFEO0FBQUEsU0FDViw2RUFEVTtBQUFBLENBQWQ7O0FBTWVELG9FQUFmLEU7Ozs7Ozs7Ozs7OztBQ1RBO0FBQUE7QUFBQTtBQUFBOztBQUdBLElBQU1FLE9BQU8sR0FBRyxTQUFWQSxPQUFVLENBQUNELEtBQUQ7QUFBQSxTQUNaLDJFQURZO0FBQUEsQ0FBaEI7O0FBTWVDLHNFQUFmLEU7Ozs7Ozs7Ozs7OztBQ1RBO0FBQUE7QUFBQTtBQUFBOztBQUVBLElBQU1DLElBQUksR0FBRyxTQUFQQSxJQUFPLENBQUNGLEtBQUQ7QUFBQSxTQUNULHlGQURTO0FBQUEsQ0FBYjs7QUFPZUUsbUVBQWYsRTs7Ozs7Ozs7Ozs7O0FDUEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQyxNQUFvQixHQUFHLENBQ3pCO0FBQ0lDLE1BQUksRUFBRSxPQURWO0FBRUlDLFdBQVMsRUFBRUgsbURBQUlBO0FBRm5CLENBRHlCLEVBS3pCO0FBQ0lFLE1BQUksRUFBRSxRQURWO0FBRUlDLFdBQVMsRUFBRU4sb0RBQUtBO0FBRnBCLENBTHlCLEVBU3pCO0FBQ0lLLE1BQUksRUFBRSxVQURWO0FBRUlDLFdBQVMsRUFBRUosc0RBQU9BO0FBRnRCLENBVHlCLENBQTdCO0FBZ0JlRSxxRUFBZixFOzs7Ozs7Ozs7OztBQ3RCQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLHNCQUFzQjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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QztBQUtBLE1BQU1ZLE1BQWlCLEdBQUdtRCxtREFBTSxDQUFDQyxZQUFQLEVBQTFCO0FBQ0EsNkZBR1FwRCxNQUFNLENBQUNxRCxJQUFQLENBQVlDLFFBQVosRUFIUiw4S0FNUXRELE1BQU0sQ0FBQ3VELEtBQVAsQ0FBYUQsUUFBYixFQU5SLHVmQVdVdEQsTUFBTSxDQUFDd0QsY0FBUCxDQUFzQkYsUUFBdEIsRUFYVix5Q0FZdUJOLE9BWnZCLDREQWFzQzlDLDREQUFPLENBQUNDLE9BQUQsQ0FiN0M7QUFpQkQsQ0F4QkQ7O0FBMkJlTix1RUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkNBLDRDOzs7Ozs7Ozs7OztBQ0FBLG9DOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLGlDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLDZDOzs7Ozs7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7OztBQ0FBLGdEOzs7Ozs7Ozs7OztBQ0FBLDZDIiwiZmlsZSI6InNlcnZlcl9idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9idWlsZFwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5cclxuY29uc3QgQWJvdXQgPSAocHJvcHM6YW55KSA9PihcclxuICAgIDxkaXY+XHJcbiAgICAgIEFib3V0IHVzIVxyXG4gICAgPC9kaXY+XHJcbik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBYm91dDtcclxuXHJcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcblxyXG5jb25zdCBDb250YWN0ID0gKHByb3BzOmFueSkgPT4oXHJcbiAgICA8ZGl2PlxyXG4gICAgICBDb250YWN0XHJcbiAgICA8L2Rpdj5cclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbnRhY3Q7XHJcblxyXG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5jb25zdCBIb21lID0gKHByb3BzOmFueSk9PihcclxuICAgIDxkaXY+XHJcbiAgICAgICAgV2VsY29tZSBUbyBSZWFjdCBTU1IhXHJcbiAgICA8L2Rpdj5cclxuKTtcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lOyIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgUm91dGVDb25maWcgfSBmcm9tICdyZWFjdC1yb3V0ZXItY29uZmlnJztcclxuaW1wb3J0IEhvbWUgZnJvbSAnLi4vcGFnZXMvSG9tZSc7XHJcbmltcG9ydCBBYm91dCBmcm9tICcuLi9wYWdlcy9BYm91dCc7XHJcbmltcG9ydCBDb250YWN0IGZyb20gJy4uL3BhZ2VzL0NvbnRhY3QnO1xyXG5cclxuY29uc3Qgcm91dGVzOlJvdXRlQ29uZmlnW10gPSBbXHJcbiAgICB7XHJcbiAgICAgICAgcGF0aDogJy9ob21lJyxcclxuICAgICAgICBjb21wb25lbnQ6IEhvbWVcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgcGF0aDogJy9hYm91dCcsXHJcbiAgICAgICAgY29tcG9uZW50OiBBYm91dFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBwYXRoOiAnL2NvbnRhY3QnLFxyXG4gICAgICAgIGNvbXBvbmVudDogQ29udGFjdFxyXG4gICAgfVxyXG5dXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcm91dGVzO1xyXG4iLCIvLyBzaGltIGZvciB1c2luZyBwcm9jZXNzIGluIGJyb3dzZXJcbnZhciBwcm9jZXNzID0gbW9kdWxlLmV4cG9ydHMgPSB7fTtcblxuLy8gY2FjaGVkIGZyb20gd2hhdGV2ZXIgZ2xvYmFsIGlzIHByZXNlbnQgc28gdGhhdCB0ZXN0IHJ1bm5lcnMgdGhhdCBzdHViIGl0XG4vLyBkb24ndCBicmVhayB0aGluZ3MuICBCdXQgd2UgbmVlZCB0byB3cmFwIGl0IGluIGEgdHJ5IGNhdGNoIGluIGNhc2UgaXQgaXNcbi8vIHdyYXBwZWQgaW4gc3RyaWN0IG1vZGUgY29kZSB3aGljaCBkb2Vzbid0IGRlZmluZSBhbnkgZ2xvYmFscy4gIEl0J3MgaW5zaWRlIGFcbi8vIGZ1bmN0aW9uIGJlY2F1c2UgdHJ5L2NhdGNoZXMgZGVvcHRpbWl6ZSBpbiBjZXJ0YWluIGVuZ2luZXMuXG5cbnZhciBjYWNoZWRTZXRUaW1lb3V0O1xudmFyIGNhY2hlZENsZWFyVGltZW91dDtcblxuZnVuY3Rpb24gZGVmYXVsdFNldFRpbW91dCgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3NldFRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbmZ1bmN0aW9uIGRlZmF1bHRDbGVhclRpbWVvdXQgKCkge1xuICAgIHRocm93IG5ldyBFcnJvcignY2xlYXJUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG4oZnVuY3Rpb24gKCkge1xuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2Ygc2V0VGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2YgY2xlYXJUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgIH1cbn0gKCkpXG5mdW5jdGlvbiBydW5UaW1lb3V0KGZ1bikge1xuICAgIGlmIChjYWNoZWRTZXRUaW1lb3V0ID09PSBzZXRUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICAvLyBpZiBzZXRUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkU2V0VGltZW91dCA9PT0gZGVmYXVsdFNldFRpbW91dCB8fCAhY2FjaGVkU2V0VGltZW91dCkgJiYgc2V0VGltZW91dCkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dChmdW4sIDApO1xuICAgIH0gY2F0Y2goZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwobnVsbCwgZnVuLCAwKTtcbiAgICAgICAgfSBjYXRjaChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yXG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKHRoaXMsIGZ1biwgMCk7XG4gICAgICAgIH1cbiAgICB9XG5cblxufVxuZnVuY3Rpb24gcnVuQ2xlYXJUaW1lb3V0KG1hcmtlcikge1xuICAgIGlmIChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGNsZWFyVGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICAvLyBpZiBjbGVhclRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGRlZmF1bHRDbGVhclRpbWVvdXQgfHwgIWNhY2hlZENsZWFyVGltZW91dCkgJiYgY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCAgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbChudWxsLCBtYXJrZXIpO1xuICAgICAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yLlxuICAgICAgICAgICAgLy8gU29tZSB2ZXJzaW9ucyBvZiBJLkUuIGhhdmUgZGlmZmVyZW50IHJ1bGVzIGZvciBjbGVhclRpbWVvdXQgdnMgc2V0VGltZW91dFxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKHRoaXMsIG1hcmtlcik7XG4gICAgICAgIH1cbiAgICB9XG5cblxuXG59XG52YXIgcXVldWUgPSBbXTtcbnZhciBkcmFpbmluZyA9IGZhbHNlO1xudmFyIGN1cnJlbnRRdWV1ZTtcbnZhciBxdWV1ZUluZGV4ID0gLTE7XG5cbmZ1bmN0aW9uIGNsZWFuVXBOZXh0VGljaygpIHtcbiAgICBpZiAoIWRyYWluaW5nIHx8ICFjdXJyZW50UXVldWUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIGlmIChjdXJyZW50UXVldWUubGVuZ3RoKSB7XG4gICAgICAgIHF1ZXVlID0gY3VycmVudFF1ZXVlLmNvbmNhdChxdWV1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgIH1cbiAgICBpZiAocXVldWUubGVuZ3RoKSB7XG4gICAgICAgIGRyYWluUXVldWUoKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGRyYWluUXVldWUoKSB7XG4gICAgaWYgKGRyYWluaW5nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIHRpbWVvdXQgPSBydW5UaW1lb3V0KGNsZWFuVXBOZXh0VGljayk7XG4gICAgZHJhaW5pbmcgPSB0cnVlO1xuXG4gICAgdmFyIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB3aGlsZShsZW4pIHtcbiAgICAgICAgY3VycmVudFF1ZXVlID0gcXVldWU7XG4gICAgICAgIHF1ZXVlID0gW107XG4gICAgICAgIHdoaWxlICgrK3F1ZXVlSW5kZXggPCBsZW4pIHtcbiAgICAgICAgICAgIGlmIChjdXJyZW50UXVldWUpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50UXVldWVbcXVldWVJbmRleF0ucnVuKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgICAgICBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgfVxuICAgIGN1cnJlbnRRdWV1ZSA9IG51bGw7XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBydW5DbGVhclRpbWVvdXQodGltZW91dCk7XG59XG5cbnByb2Nlc3MubmV4dFRpY2sgPSBmdW5jdGlvbiAoZnVuKSB7XG4gICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCAtIDEpO1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgYXJnc1tpIC0gMV0gPSBhcmd1bWVudHNbaV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcXVldWUucHVzaChuZXcgSXRlbShmdW4sIGFyZ3MpKTtcbiAgICBpZiAocXVldWUubGVuZ3RoID09PSAxICYmICFkcmFpbmluZykge1xuICAgICAgICBydW5UaW1lb3V0KGRyYWluUXVldWUpO1xuICAgIH1cbn07XG5cbi8vIHY4IGxpa2VzIHByZWRpY3RpYmxlIG9iamVjdHNcbmZ1bmN0aW9uIEl0ZW0oZnVuLCBhcnJheSkge1xuICAgIHRoaXMuZnVuID0gZnVuO1xuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbn1cbkl0ZW0ucHJvdG90eXBlLnJ1biA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmZ1bi5hcHBseShudWxsLCB0aGlzLmFycmF5KTtcbn07XG5wcm9jZXNzLnRpdGxlID0gJ2Jyb3dzZXInO1xucHJvY2Vzcy5icm93c2VyID0gdHJ1ZTtcbnByb2Nlc3MuZW52ID0ge307XG5wcm9jZXNzLmFyZ3YgPSBbXTtcbnByb2Nlc3MudmVyc2lvbiA9ICcnOyAvLyBlbXB0eSBzdHJpbmcgdG8gYXZvaWQgcmVnZXhwIGlzc3Vlc1xucHJvY2Vzcy52ZXJzaW9ucyA9IHt9O1xuXG5mdW5jdGlvbiBub29wKCkge31cblxucHJvY2Vzcy5vbiA9IG5vb3A7XG5wcm9jZXNzLmFkZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3Mub25jZSA9IG5vb3A7XG5wcm9jZXNzLm9mZiA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUxpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlQWxsTGlzdGVuZXJzID0gbm9vcDtcbnByb2Nlc3MuZW1pdCA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRPbmNlTGlzdGVuZXIgPSBub29wO1xuXG5wcm9jZXNzLmxpc3RlbmVycyA9IGZ1bmN0aW9uIChuYW1lKSB7IHJldHVybiBbXSB9XG5cbnByb2Nlc3MuYmluZGluZyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmJpbmRpbmcgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcblxucHJvY2Vzcy5jd2QgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAnLycgfTtcbnByb2Nlc3MuY2hkaXIgPSBmdW5jdGlvbiAoZGlyKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmNoZGlyIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5wcm9jZXNzLnVtYXNrID0gZnVuY3Rpb24oKSB7IHJldHVybiAwOyB9O1xuIiwiaW1wb3J0IHsgRW50aXR5VGFibGUgfSBmcm9tIFwiLi4vdHlwZXMvVGFibGVzXCI7XHJcbmltcG9ydCB7IGtuZXggfSBmcm9tIFwiLlwiO1xyXG5pbXBvcnQgeyBhc3luY0NvbXBvc2UgfSBmcm9tIFwiLi4vdXRpbHMvYXN5bmNDb21wb3NlXCI7XHJcblxyXG50eXBlIEdldEJ5SWRIYW5kbGVyID0gKGE6IGFueSkgPT4gKCkgPT4gUHJvbWlzZTxhbnk+XHJcblxyXG5jb25zdCBnZXRJZHMgPSAodGFibGVOYW1lOiBFbnRpdHlUYWJsZSk6IFByb21pc2U8eyBpZDogc3RyaW5nIH1bXT4gPT4ga25leC5zZWxlY3QoJ2lkJykuZnJvbSh0YWJsZU5hbWUpO1xyXG5cclxuY29uc3QgX2dldEFsbCA9IChnZXRCeUlkSGFuZGxlcjogR2V0QnlJZEhhbmRsZXIpID0+XHJcbiAgKGlkczogeyBpZDogc3RyaW5nIH1bXSk6IFByb21pc2U8YW55W10+W10gPT4gaWRzLm1hcChvID0+IGdldEJ5SWRIYW5kbGVyKG8uaWQpKCkpXHJcblxyXG5jb25zdCBtYXBQcm9taXNlc1RvUmVzdWx0ID0gKHByb21pc2VzOiBQcm9taXNlPGFueVtdPltdKTogUHJvbWlzZTxhbnlbXT4gPT4gUHJvbWlzZS5hbGwocHJvbWlzZXMpO1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBnZXRBbGwgPSAodGFibGU6IEVudGl0eVRhYmxlLCBjb25maWd1cmVkR2V0QnlJZEhhbmRsZXI6IEdldEJ5SWRIYW5kbGVyKSA9PiAoKSA9PlxyXG4gIGFzeW5jQ29tcG9zZShcclxuICAgIG1hcFByb21pc2VzVG9SZXN1bHQsXHJcbiAgICBfZ2V0QWxsKGNvbmZpZ3VyZWRHZXRCeUlkSGFuZGxlciksXHJcbiAgICBnZXRJZHNcclxuICApKFByb21pc2UucmVzb2x2ZSh0YWJsZSkpXHJcblxyXG5cclxuIiwiaW1wb3J0IHsgTWFueVRvTWFueVRhYmxlLCBFbnRpdHlUYWJsZSwgT25lVG9NYW55VGFibGUgfSBmcm9tICcuLi90eXBlcy9UYWJsZXMnO1xyXG5pbXBvcnQgeyBrbmV4IH0gZnJvbSAnLi9pbmRleCc7XHJcbmltcG9ydCB7IElQb3N0Z3Jlc0pzb25CdWlsZE9iamVjdCB9IGZyb20gJy4uL3R5cGVzL0RCJztcclxuaW1wb3J0IHsgY29tcG9zZSB9IGZyb20gJ3JhbWRhJztcclxuaW1wb3J0IHsgYXN5bmNDb21wb3NlIH0gZnJvbSAnLi4vdXRpbHMvYXN5bmNDb21wb3NlJztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSU1NRmllbGRzRGF0YSBleHRlbmRzIElGaWVsZHNEYXRhLCBJU2hvd0ZpZWxkcyB7IH07XHJcbmV4cG9ydCBpbnRlcmZhY2UgSU1NRmllbGRzRGF0YVdpdGhGaWVsZHNUcmFuc2Zvcm1lZCBleHRlbmRzIElGaWVsZHNEYXRhLCBJU2hvd0ZpZWxkc1RyYW5zZm9ybWVkIHsgfTtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVNob3dGaWVsZHMge1xyXG4gIHNob3dGaWVsZHM6IHN0cmluZ1tdXHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBJU2hvd0ZpZWxkc1RyYW5zZm9ybWVkIHtcclxuICBzaG93RmllbGRzOiBzdHJpbmdcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJRmllbGRzRGF0YSB7XHJcbiAgdGFibGVOYW1lOiBFbnRpdHlUYWJsZSxcclxuICBmaWVsZE5hbWVJblJlc3BvbnNlOiBzdHJpbmcsXHJcbiAgbWFueVRvTWFueVRhYmxlTmFtZTogTWFueVRvTWFueVRhYmxlIHwgT25lVG9NYW55VGFibGUsXHJcbiAgaW50ZXJzZWN0RW50aXR5T246IHN0cmluZyxcclxuICB3aGVyZTogc3RyaW5nXHJcbn1cclxuXHJcblxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJRmllbGRXaXRoUXVlcnkge1xyXG4gIGZpZWxkTmFtZTogc3RyaW5nLFxyXG4gIHF1ZXJ5OiBzdHJpbmdcclxufVxyXG5cclxuXHJcblxyXG5cclxuaW50ZXJmYWNlIElPbmVUb01hbnkge1xyXG4gIHRhYmxlTmFtZTogRW50aXR5VGFibGUsXHJcbiAgc2hvd0ZpZWxkczogc3RyaW5nW10sXHJcbiAgZmllbGROYW1lSW5SZXNwb25zZTogc3RyaW5nLFxyXG4gIHdoZXJlOiBzdHJpbmdcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEJ5SWRRdWVyeTxULCBCPihcclxuICB0YWJsZU5hbWU6IFQsXHJcbiAgZm9yZWlnbkZpZWxkcz86IElNTUZpZWxkc0RhdGFbXSB8IHVuZGVmaW5lZCxcclxuKSB7XHJcbiAgcmV0dXJuIGFzeW5jIChpZDogc3RyaW5nKSA9PlxyXG4gICAgYXdhaXQgYXN5bmNDb21wb3NlKFxyXG4gICAgICBtYXBEQlJlc3BvbnNlPEI+KGZvcmVpZ25GaWVsZHMpLFxyXG5cclxuICAgICAgKHJlczogSVBvc3RncmVzSnNvbkJ1aWxkT2JqZWN0KSA9PiByZXMucm93c1swXS5qc29uX2J1aWxkX29iamVjdCxcclxuXHJcbiAgICAgIGZldGNoRW50aXR5V2l0aE1hbnlUb01hbnlGaWVsZHM8VD4odGFibGVOYW1lLCBpZCksXHJcblxyXG4gICAgICBnZXRNTUZpZWxkc1F1ZXJ5RnJvbVxyXG5cclxuICAgICkoUHJvbWlzZS5yZXNvbHZlKGZvcmVpZ25GaWVsZHMpKVxyXG5cclxufVxyXG5cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gbWFwREJSZXNwb25zZTxUPihtYW55VG9NYW55RmllbGRzOiBJTU1GaWVsZHNEYXRhW10gfCB1bmRlZmluZWQpe1xyXG4gIHJldHVybiAocmVzdWx0OiBhbnkpID0+XHJcbiAgICBPYmplY3Qua2V5cyhyZXN1bHQpXHJcbiAgICAgIC5yZWR1Y2UoKGFjYzogYW55LCBjdXJyOiBzdHJpbmcsIGluZGV4OiBudW1iZXIpOiBUID0+XHJcbiAgICAgICAgaW5kZXggPT09IDBcclxuICAgICAgICAgID8geyAuLi5yZXN1bHRbY3Vycl0gfVxyXG4gICAgICAgICAgOiB7XHJcbiAgICAgICAgICAgIC4uLmFjYywgW1xyXG4gICAgICAgICAgICAgIG1hbnlUb01hbnlGaWVsZHMgIT09IHVuZGVmaW5lZFxyXG4gICAgICAgICAgICAgICAgPyBtYW55VG9NYW55RmllbGRzW2luZGV4IC0gMV0uZmllbGROYW1lSW5SZXNwb25zZSA6IGN1cnJcclxuICAgICAgICAgICAgXTogcmVzdWx0W2N1cnJdXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgLCB7fSlcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIGZldGNoRW50aXR5V2l0aE1hbnlUb01hbnlGaWVsZHM8VD4odGFibGVOYW1lOiBULCBpZDogc3RyaW5nKSB7XHJcbiAgcmV0dXJuIChnZXRNTUZpZWxkQnlJZDogKHc6c3RyaW5nKT0+SUZpZWxkV2l0aFF1ZXJ5KSA9PlxyXG4gICAga25leFxyXG4gICAgICAucmF3KFxyXG4gICAgICAgIGAnJHt0YWJsZU5hbWV9JywgKCBTRUxFQ1QgdG9fanNvbihyb3cpXHJcbiAgICAgICBGUk9NICggU0VMRUNUICogRlJPTSAke3RhYmxlTmFtZX0gV0hFUkUgaWQgPSA6aWQgKSBcclxuICAgICAgIHJvdyBcclxuICAgICAgICksXHJcbiAgICR7Z2V0TU1GaWVsZEJ5SWQoaWQpfSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gYCxcclxuICAgICAgICB7IGlkIH1cclxuICAgICAgKVxyXG4gICAgICAud3JhcCgnU0VMRUNUIGpzb25fYnVpbGRfb2JqZWN0KCcsICcpJyk7XHJcbn1cclxuXHJcblxyXG5jb25zdCBtYW55VG9NYW55UXVlcnk6IElNTVF1ZXJ5RnVuY3Rpb24gPSAoZmllbGREYXRhKSA9PiAod2hlcmUpID0+ICh7XHJcbiAgZmllbGROYW1lOiBmaWVsZERhdGEudGFibGVOYW1lLFxyXG4gIHF1ZXJ5OiBgXHJcbiAgKCBTRUxFQ1QganNvbl9hZ2cocmVzdWx0KSBcclxuICAgIEZST00gKCBTRUxFQ1QgJHtmaWVsZERhdGEuc2hvd0ZpZWxkc30gRlJPTSAke2ZpZWxkRGF0YS50YWJsZU5hbWV9IFxyXG4gICAgSU5ORVIgSk9JTiAkeyBmaWVsZERhdGEubWFueVRvTWFueVRhYmxlTmFtZX0gT04gKCAke2ZpZWxkRGF0YS50YWJsZU5hbWV9LmlkID0gJHtmaWVsZERhdGEubWFueVRvTWFueVRhYmxlTmFtZX0uJHtmaWVsZERhdGEuaW50ZXJzZWN0RW50aXR5T259KVxyXG4gICAgV0hFUkUgJHtmaWVsZERhdGEubWFueVRvTWFueVRhYmxlTmFtZX0uJHtmaWVsZERhdGEud2hlcmV9ID0gJyR7d2hlcmV9JykgXHJcbiAgICByZXN1bHQgXHJcbiAgKVxyXG5gfSlcclxudHlwZSBJQ29uY2F0RmllbGRzRnVuY3Rpb24gPSAoZmllbGRzOiBJTU1GaWVsZHNEYXRhKSA9PiBJTU1GaWVsZHNEYXRhV2l0aEZpZWxkc1RyYW5zZm9ybWVkO1xyXG50eXBlIElNTVF1ZXJ5RnVuY3Rpb24gPSAoZjogSU1NRmllbGRzRGF0YVdpdGhGaWVsZHNUcmFuc2Zvcm1lZCkgPT4gKHc6IHN0cmluZykgPT4gSUZpZWxkV2l0aFF1ZXJ5XHJcblxyXG5jb25zdCBjb25jYXRGaWVsZHNXaXRoVGFibGVOYW1lOiBJQ29uY2F0RmllbGRzRnVuY3Rpb24gPSAoZmllbGQpID0+ICh7XHJcbiAgLi4uZmllbGQsXHJcbiAgc2hvd0ZpZWxkczogZmllbGQuc2hvd0ZpZWxkc1xyXG4gICAgLnJlZHVjZSgoYWNjLCBjdXJyLCBpbmRleCkgPT5cclxuICAgICAgaW5kZXggPD0gMFxyXG4gICAgICAgID8gYCR7ZmllbGQudGFibGVOYW1lfS4ke2N1cnJ9YFxyXG4gICAgICAgIDogYWNjICsgYCwgJHtmaWVsZC50YWJsZU5hbWV9LiR7Y3Vycn1gXHJcblxyXG4gICAgICAsIFwiXCIpXHJcbn0pXHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IGJ1aWxkTU1GUXVlcnk6ICgoZjogSU1NRmllbGRzRGF0YSkgPT4gKHc6IHN0cmluZykgPT4gSUZpZWxkV2l0aFF1ZXJ5KSA9XHJcbiAgY29tcG9zZTxJTU1GaWVsZHNEYXRhLCBJTU1GaWVsZHNEYXRhV2l0aEZpZWxkc1RyYW5zZm9ybWVkLCAodzogc3RyaW5nKSA9PiBJRmllbGRXaXRoUXVlcnk+KFxyXG4gICAgbWFueVRvTWFueVF1ZXJ5LFxyXG4gICAgY29uY2F0RmllbGRzV2l0aFRhYmxlTmFtZVxyXG4gICk7XHJcblxyXG5jb25zdCBnZXRNTUZpZWxkc1F1ZXJ5RnJvbSA9IChmaWVsZHM6IElNTUZpZWxkc0RhdGFbXSB8IHVuZGVmaW5lZCkgPT4gKGlkOiBzdHJpbmcpID0+XHJcbiAgZmllbGRzICE9PSB1bmRlZmluZWRcclxuICAgID8gZmllbGRzXHJcbiAgICAgIC5tYXAoYnVpbGRNTUZRdWVyeSlcclxuICAgICAgLnJlZHVjZSgoYWNjOiBzdHJpbmcsIGN1cnI6ICgoaWQ6IHN0cmluZykgPT4gSUZpZWxkV2l0aFF1ZXJ5KSkgPT5cclxuICAgICAgICBhY2MgIT09IFwiXCJcclxuICAgICAgICAgID8gKGAke2FjY30sICcke2N1cnIoaWQpLmZpZWxkTmFtZX0nLCAke2N1cnIoaWQpLnF1ZXJ5fWApXHJcbiAgICAgICAgICA6IChgJyR7Y3VycihpZCkuZmllbGROYW1lfScsICR7Y3VycihpZCkucXVlcnl9YClcclxuICAgICAgICAsIFwiXCIpXHJcbiAgICA6IFwiXCI7IiwiaW1wb3J0IEtuZXggZnJvbSAna25leCc7XHJcblxyXG5leHBvcnQgY29uc3Qga25leDogS25leCA9IHJlcXVpcmUoJ2tuZXgnKShyZXF1aXJlKCcuLi9rbmV4ZmlsZScpLmRldmVsb3BtZW50KTsiLCJpbXBvcnQgeyBhc3luY01lbW9pemUgYXMgTWVtIH0gZnJvbSAnLi4vdXRpbHMvbWVtb2l6ZSc7XHJcbmltcG9ydCB7IEVudGl0eVRhYmxlLCBNYW55VG9NYW55VGFibGUsIFRhYmxlIH0gZnJvbSAnLi4vdHlwZXMvVGFibGVzJztcclxuaW1wb3J0IHsgSUZpbG1SZXNwb25zZSB9IGZyb20gJy4uL3R5cGVzL2ludGVyZmFjZXMvRmlsbSc7XHJcbmltcG9ydCB7IGdldEJ5SWRRdWVyeSB9IGZyb20gJy4uL0RCL2dldEJ5SWQnO1xyXG5pbXBvcnQgeyBWZWhpY2xlRmllbGRzTmFtZXMgfSBmcm9tICcuLi90eXBlcy9pbnRlcmZhY2VzL1ZlaGljbGUnO1xyXG5pbXBvcnQgeyBWZWhpY2xlc0luRmlsbXNGaWVsZHNOYW1lcyB9IGZyb20gJy4uL3R5cGVzL2ludGVyZmFjZXMvVmVoaWNsZXNJbkZpbG1zJztcclxuaW1wb3J0IHsgSVBlb3BsZUVudGl0eUZpZWxkcyB9IGZyb20gJy4uL3R5cGVzL2ludGVyZmFjZXMvUGVvcGxlJztcclxuaW1wb3J0IHsgSUFjdG9yc0ZpZWxkc05hbWVzIH0gZnJvbSAnLi4vdHlwZXMvaW50ZXJmYWNlcy9BY3RvcnMnO1xyXG5pbXBvcnQgeyBnZXRBbGwgfSBmcm9tICcuLi9EQi9nZXRBbGwnO1xyXG5leHBvcnQgZGVmYXVsdCgoKSA9PiB7XHJcbiAgY29uc3QgX2dldEJ5SWQgPSBNZW0oZ2V0QnlJZFF1ZXJ5PEVudGl0eVRhYmxlLkZpbG0sIElGaWxtUmVzcG9uc2U+KFxyXG4gICAgRW50aXR5VGFibGUuRmlsbSxcclxuICAgIFtcclxuICAgICAge1xyXG4gICAgICAgIHRhYmxlTmFtZTogRW50aXR5VGFibGUuVmVoaWNsZSxcclxuICAgICAgICBzaG93RmllbGRzOiBbVmVoaWNsZUZpZWxkc05hbWVzLklkLCBWZWhpY2xlRmllbGRzTmFtZXMuTmFtZV0sXHJcbiAgICAgICAgZmllbGROYW1lSW5SZXNwb25zZTogJ3ZlaGljbGVzJyxcclxuICAgICAgICBtYW55VG9NYW55VGFibGVOYW1lOiBNYW55VG9NYW55VGFibGUuVmVoaWNsZXNJbkZpbG1zLFxyXG4gICAgICAgIGludGVyc2VjdEVudGl0eU9uOiBWZWhpY2xlc0luRmlsbXNGaWVsZHNOYW1lcy5WZWhpY2xlSWQsXHJcbiAgICAgICAgd2hlcmU6IFZlaGljbGVzSW5GaWxtc0ZpZWxkc05hbWVzLlZlaGljbGVJZFxyXG5cclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHRhYmxlTmFtZTogRW50aXR5VGFibGUuUGVvcGxlLFxyXG4gICAgICAgIHNob3dGaWVsZHM6IFtJUGVvcGxlRW50aXR5RmllbGRzLklkLCBJUGVvcGxlRW50aXR5RmllbGRzLk5hbWVdLFxyXG4gICAgICAgIGZpZWxkTmFtZUluUmVzcG9uc2U6ICdhY3RvcnMnLFxyXG4gICAgICAgIG1hbnlUb01hbnlUYWJsZU5hbWU6IE1hbnlUb01hbnlUYWJsZS5BY3RvcnMsXHJcbiAgICAgICAgaW50ZXJzZWN0RW50aXR5T246IElBY3RvcnNGaWVsZHNOYW1lcy5QZW9wbGVJZCxcclxuICAgICAgICB3aGVyZTogSUFjdG9yc0ZpZWxkc05hbWVzLkZpbG1JZFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgdGFibGVOYW1lOiBFbnRpdHlUYWJsZS5TdGFyc2hpcCxcclxuICAgICAgICBzaG93RmllbGRzOiBbJ2lkJywgJ25hbWUnXSxcclxuICAgICAgICBmaWVsZE5hbWVJblJlc3BvbnNlOiAndmVoaWNsZXMnLFxyXG4gICAgICAgIG1hbnlUb01hbnlUYWJsZU5hbWU6IE1hbnlUb01hbnlUYWJsZS5TdGFyc2hpcHNJbkZpbG1zLFxyXG4gICAgICAgIGludGVyc2VjdEVudGl0eU9uOiAnc3RhcnNoaXBfaWQnLFxyXG4gICAgICAgIHdoZXJlOiAnZmlsbV9pZCdcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHRhYmxlTmFtZTogRW50aXR5VGFibGUuUGxhbmV0LFxyXG4gICAgICAgIHNob3dGaWVsZHM6IFsnaWQnLCAnbmFtZSddLFxyXG4gICAgICAgIGZpZWxkTmFtZUluUmVzcG9uc2U6ICdwbGFuZXRzJyxcclxuICAgICAgICBtYW55VG9NYW55VGFibGVOYW1lOiBNYW55VG9NYW55VGFibGUuUGxhbmV0c0luRmlsbXMsXHJcbiAgICAgICAgaW50ZXJzZWN0RW50aXR5T246ICdwbGFuZXRfaWQnLFxyXG4gICAgICAgIHdoZXJlOiAnZmlsbV9pZCdcclxuICAgICAgfVxyXG4gICAgXSxcclxuICApKVxyXG4gIHJldHVybiB7XHJcbiAgICBnZXRCeUlkOiBfZ2V0QnlJZCxcclxuICAgIGdldEFsbDogZ2V0QWxsKEVudGl0eVRhYmxlLkZpbG0sIF9nZXRCeUlkKVxyXG4gIH1cclxufSkoKVxyXG5cclxuXHJcbiIsImltcG9ydCB7IGFzeW5jTWVtb2l6ZSBhcyBNZW0gfSBmcm9tIFwiLi4vdXRpbHMvbWVtb2l6ZVwiXHJcbmltcG9ydCB7IGdldEJ5SWRRdWVyeSB9IGZyb20gXCIuLi9EQi9nZXRCeUlkXCJcclxuaW1wb3J0IHsgRW50aXR5VGFibGUsIE1hbnlUb01hbnlUYWJsZSwgT25lVG9NYW55VGFibGUgfSBmcm9tIFwiLi4vdHlwZXMvVGFibGVzXCJcclxuaW1wb3J0IHsgSUZpbG1SZXNwb25zZSwgRmlsbUZpZWxkc05hbWVzIH0gZnJvbSBcIi4uL3R5cGVzL2ludGVyZmFjZXMvRmlsbVwiXHJcbmltcG9ydCB7IElBY3RvcnNGaWVsZHNOYW1lcyB9IGZyb20gXCIuLi90eXBlcy9pbnRlcmZhY2VzL0FjdG9yc1wiXHJcbmltcG9ydCB7IElTcGVjaWVFbnRpdHlGaWVsZHMgfSBmcm9tIFwiLi4vdHlwZXMvaW50ZXJmYWNlcy9TcGVjaWVcIlxyXG5pbXBvcnQgeyBSYWNlRmllbGRzIH0gZnJvbSBcIi4uL3R5cGVzL2ludGVyZmFjZXMvUmFjZXNcIlxyXG5pbXBvcnQgeyBWZWhpY2xlRmllbGRzTmFtZXMgfSBmcm9tIFwiLi4vdHlwZXMvaW50ZXJmYWNlcy9WZWhpY2xlXCJcclxuaW1wb3J0IHsgUGlsb3RGaWVsZE5hbWVzIH0gZnJvbSBcIi4uL3R5cGVzL2ludGVyZmFjZXMvUGlsb3RcIlxyXG5pbXBvcnQgeyBTdGFyc2hpcEVudGl0eUZpZWxkcyB9IGZyb20gXCIuLi90eXBlcy9pbnRlcmZhY2VzL1N0YXJzaGlwXCJcclxuaW1wb3J0IHsgU3RhcnNoaXBQaWxvdEZpZWxkc05hbWVzIH0gZnJvbSBcIi4uL3R5cGVzL2ludGVyZmFjZXMvU3RhcnNoaXBQaWxvdFwiXHJcbmltcG9ydCB7IGdldEFsbCB9IGZyb20gXCIuLi9EQi9nZXRBbGxcIlxyXG5cclxuZXhwb3J0IGRlZmF1bHQoKCkgPT4ge1xyXG4gIGNvbnN0IF9nZXRCeUlkID0gTWVtKGdldEJ5SWRRdWVyeTxFbnRpdHlUYWJsZS5QZW9wbGUsIElGaWxtUmVzcG9uc2U+KEVudGl0eVRhYmxlLlBlb3BsZSxcclxuICAgIFtcclxuICAgICAge1xyXG4gICAgICAgIHRhYmxlTmFtZTogRW50aXR5VGFibGUuRmlsbSxcclxuICAgICAgICBzaG93RmllbGRzOiBbRmlsbUZpZWxkc05hbWVzLklkLCBGaWxtRmllbGRzTmFtZXMuVGl0bGVdLFxyXG4gICAgICAgIGZpZWxkTmFtZUluUmVzcG9uc2U6ICdmaWxtcycsXHJcbiAgICAgICAgbWFueVRvTWFueVRhYmxlTmFtZTogTWFueVRvTWFueVRhYmxlLkFjdG9ycyxcclxuICAgICAgICBpbnRlcnNlY3RFbnRpdHlPbjogSUFjdG9yc0ZpZWxkc05hbWVzLkZpbG1JZCxcclxuICAgICAgICB3aGVyZTogSUFjdG9yc0ZpZWxkc05hbWVzLlBlb3BsZUlkXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICB0YWJsZU5hbWU6IEVudGl0eVRhYmxlLlNwZWNpZSxcclxuICAgICAgICBzaG93RmllbGRzOiBbSVNwZWNpZUVudGl0eUZpZWxkcy5JZCwgSVNwZWNpZUVudGl0eUZpZWxkcy5OYW1lXSxcclxuICAgICAgICBmaWVsZE5hbWVJblJlc3BvbnNlOiAnc3BlY2llcycsXHJcbiAgICAgICAgbWFueVRvTWFueVRhYmxlTmFtZTogT25lVG9NYW55VGFibGUuUmFjZSxcclxuICAgICAgICBpbnRlcnNlY3RFbnRpdHlPbjogUmFjZUZpZWxkcy5TcGVjaWVJZCxcclxuICAgICAgICB3aGVyZTogUmFjZUZpZWxkcy5QZW9wbGVJZFxyXG5cclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHRhYmxlTmFtZTogRW50aXR5VGFibGUuVmVoaWNsZSxcclxuICAgICAgICBzaG93RmllbGRzOiBbVmVoaWNsZUZpZWxkc05hbWVzLklkLCBWZWhpY2xlRmllbGRzTmFtZXMuTmFtZV0sXHJcbiAgICAgICAgZmllbGROYW1lSW5SZXNwb25zZTogJ3ZlaGljbGVzJyxcclxuICAgICAgICBtYW55VG9NYW55VGFibGVOYW1lOiBNYW55VG9NYW55VGFibGUuUGlsb3QsXHJcbiAgICAgICAgaW50ZXJzZWN0RW50aXR5T246IFBpbG90RmllbGROYW1lcy5WZWhpY2xlSWQsXHJcbiAgICAgICAgd2hlcmU6IFBpbG90RmllbGROYW1lcy5QZW9wbGVJZFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgdGFibGVOYW1lOiBFbnRpdHlUYWJsZS5TdGFyc2hpcCxcclxuICAgICAgICBzaG93RmllbGRzOiBbU3RhcnNoaXBFbnRpdHlGaWVsZHMuSWQsIFN0YXJzaGlwRW50aXR5RmllbGRzLk5hbWVdLFxyXG4gICAgICAgIGZpZWxkTmFtZUluUmVzcG9uc2U6ICdzdGFyc2hpcHMnLFxyXG4gICAgICAgIG1hbnlUb01hbnlUYWJsZU5hbWU6IE1hbnlUb01hbnlUYWJsZS5TdGFyc2hpcFBpbG90LFxyXG4gICAgICAgIGludGVyc2VjdEVudGl0eU9uOiBTdGFyc2hpcFBpbG90RmllbGRzTmFtZXMuU3RhcnNoaXBJZCxcclxuICAgICAgICB3aGVyZTogU3RhcnNoaXBQaWxvdEZpZWxkc05hbWVzLlBlb3BsZUlkXHJcbiAgICAgIH1cclxuICAgIF0pKVxyXG5cclxuICByZXR1cm4ge1xyXG4gICAgZ2V0QnlJZDogX2dldEJ5SWQsXHJcbiAgICBnZXRBbGw6IGdldEFsbChFbnRpdHlUYWJsZS5QZW9wbGUsIF9nZXRCeUlkKVxyXG4gIH1cclxufSkoKSIsImltcG9ydCB7IElQbGFuZXRSZXNwb25zZSB9IGZyb20gXCIuLi90eXBlcy9pbnRlcmZhY2VzL1BsYW5ldFwiO1xyXG5pbXBvcnQgeyBhc3luY01lbW9pemUgYXMgTWVtfSBmcm9tICcuLi91dGlscy9tZW1vaXplJztcclxuaW1wb3J0IHsgZ2V0QnlJZFF1ZXJ5IH0gZnJvbSBcIi4uL0RCL2dldEJ5SWRcIjtcclxuaW1wb3J0IHsgRW50aXR5VGFibGUsIFRhYmxlLCBNYW55VG9NYW55VGFibGUgfSBmcm9tIFwiLi4vdHlwZXMvVGFibGVzXCI7XHJcbmltcG9ydCB7IGdldEFsbCB9IGZyb20gXCIuLi9EQi9nZXRBbGxcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0KCgpPT57XHJcbiAgY29uc3QgX2dldEJ5SWQgPSBNZW0oZ2V0QnlJZFF1ZXJ5PEVudGl0eVRhYmxlLlBsYW5ldCwgSVBsYW5ldFJlc3BvbnNlPihcclxuICAgIEVudGl0eVRhYmxlLlBsYW5ldCxcclxuICAgIFtcclxuICAgICAge1xyXG4gICAgICAgIHRhYmxlTmFtZTogRW50aXR5VGFibGUuUGVvcGxlLFxyXG4gICAgICAgIHNob3dGaWVsZHM6IFsnaWQnLCAnbmFtZSddLFxyXG4gICAgICAgIGZpZWxkTmFtZUluUmVzcG9uc2U6ICdyZXNpZGVudHMnLFxyXG4gICAgICAgIG1hbnlUb01hbnlUYWJsZU5hbWU6IE1hbnlUb01hbnlUYWJsZS5SZXNpZGVudCxcclxuICAgICAgICBpbnRlcnNlY3RFbnRpdHlPbjogJ3Blb3BsZV9pZCcsXHJcbiAgICAgICAgd2hlcmU6ICdwbGFuZXRfaWQnXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICB0YWJsZU5hbWU6IEVudGl0eVRhYmxlLkZpbG0sXHJcbiAgICAgICAgc2hvd0ZpZWxkczogWydpZCcsICd0aXRsZSddLFxyXG4gICAgICAgIGZpZWxkTmFtZUluUmVzcG9uc2U6ICdmaWxtcycsXHJcbiAgICAgICAgbWFueVRvTWFueVRhYmxlTmFtZTogTWFueVRvTWFueVRhYmxlLlBsYW5ldHNJbkZpbG1zLFxyXG4gICAgICAgIGludGVyc2VjdEVudGl0eU9uOiAnZmlsbV9pZCcsXHJcbiAgICAgICAgd2hlcmU6ICdwbGFuZXRfaWQnXHJcbiAgICAgIH1cclxuICAgIF1cclxuICApKVxyXG4gIHJldHVybntcclxuICAgIGdldEJ5SWQ6IF9nZXRCeUlkLFxyXG4gICAgZ2V0QWxsOiBnZXRBbGwoRW50aXR5VGFibGUuUGxhbmV0LCBfZ2V0QnlJZClcclxuICB9XHJcbn0pKClcclxuXHJcbiIsImltcG9ydCB7IGdldEJ5SWRRdWVyeSB9IGZyb20gXCIuLi9EQi9nZXRCeUlkXCI7XHJcbmltcG9ydCB7IGFzeW5jTWVtb2l6ZSBhcyBNZW0gfSBmcm9tIFwiLi4vdXRpbHMvbWVtb2l6ZVwiO1xyXG5pbXBvcnQgeyBJU3BlY2llUmVzcG9uc2UgfSBmcm9tIFwiLi4vdHlwZXMvaW50ZXJmYWNlcy9TcGVjaWVcIjtcclxuaW1wb3J0IHsgRW50aXR5VGFibGUsIE1hbnlUb01hbnlUYWJsZSwgT25lVG9NYW55VGFibGUgfSBmcm9tIFwiLi4vdHlwZXMvVGFibGVzXCI7XHJcbmltcG9ydCB7IElQZW9wbGVFbnRpdHlGaWVsZHMgfSBmcm9tIFwiLi4vdHlwZXMvaW50ZXJmYWNlcy9QZW9wbGVcIjtcclxuaW1wb3J0IHsgU3BlY2llc0luRmlsbXNGaWVsZHNOYW1lIH0gZnJvbSAnLi4vdHlwZXMvaW50ZXJmYWNlcy9TcGVjaWVzSW5GaWxtcyc7XHJcbmltcG9ydCB7IFJhY2VGaWVsZHMgfSBmcm9tIFwiLi4vdHlwZXMvaW50ZXJmYWNlcy9SYWNlc1wiO1xyXG5pbXBvcnQgeyBGaWxtRmllbGRzTmFtZXMgfSBmcm9tIFwiLi4vdHlwZXMvaW50ZXJmYWNlcy9GaWxtXCI7XHJcbmltcG9ydCB7IGdldEFsbCB9IGZyb20gXCIuLi9EQi9nZXRBbGxcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0ICgoKSA9PiB7XHJcbiAgY29uc3QgX2dldEJ5SWQgPSBNZW0oZ2V0QnlJZFF1ZXJ5PEVudGl0eVRhYmxlLlNwZWNpZSwgSVNwZWNpZVJlc3BvbnNlPihcclxuICAgIEVudGl0eVRhYmxlLlNwZWNpZSwgW1xyXG4gICAge1xyXG4gICAgICB0YWJsZU5hbWU6IEVudGl0eVRhYmxlLkZpbG0sXHJcbiAgICAgIHNob3dGaWVsZHM6IFtGaWxtRmllbGRzTmFtZXMuSWQsIEZpbG1GaWVsZHNOYW1lcy5UaXRsZV0sXHJcbiAgICAgIGZpZWxkTmFtZUluUmVzcG9uc2U6ICdmaWxtcycsXHJcbiAgICAgIG1hbnlUb01hbnlUYWJsZU5hbWU6IE1hbnlUb01hbnlUYWJsZS5TcGVjaWVzSW5GaWxtcyxcclxuICAgICAgaW50ZXJzZWN0RW50aXR5T246IFNwZWNpZXNJbkZpbG1zRmllbGRzTmFtZS5GaWxtSWQsXHJcbiAgICAgIHdoZXJlOiBTcGVjaWVzSW5GaWxtc0ZpZWxkc05hbWUuU3BlY2llSWRcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHRhYmxlTmFtZTogRW50aXR5VGFibGUuUGVvcGxlLFxyXG4gICAgICBzaG93RmllbGRzOiBbSVBlb3BsZUVudGl0eUZpZWxkcy5JZCwgSVBlb3BsZUVudGl0eUZpZWxkcy5OYW1lXSxcclxuICAgICAgZmllbGROYW1lSW5SZXNwb25zZTogJ3Blb3BsZScsXHJcbiAgICAgIG1hbnlUb01hbnlUYWJsZU5hbWU6IE9uZVRvTWFueVRhYmxlLlJhY2UsXHJcbiAgICAgIGludGVyc2VjdEVudGl0eU9uOiBSYWNlRmllbGRzLlBlb3BsZUlkLFxyXG4gICAgICB3aGVyZTogUmFjZUZpZWxkcy5TcGVjaWVJZFxyXG4gICAgfVxyXG5cclxuICBdKSlcclxuICByZXR1cm4ge1xyXG4gICAgZ2V0QnlJZDogX2dldEJ5SWQsXHJcbiAgICBnZXRBbGw6IGdldEFsbChFbnRpdHlUYWJsZS5TcGVjaWUsIF9nZXRCeUlkKVxyXG4gIH1cclxufSkoKSIsImltcG9ydCB7IGFzeW5jTWVtb2l6ZSBhcyBNZW0gfSBmcm9tIFwiLi4vdXRpbHMvbWVtb2l6ZVwiXHJcbmltcG9ydCB7IGdldEJ5SWRRdWVyeSB9IGZyb20gXCIuLi9EQi9nZXRCeUlkXCJcclxuaW1wb3J0IHsgRW50aXR5VGFibGUsIE1hbnlUb01hbnlUYWJsZSB9IGZyb20gXCIuLi90eXBlcy9UYWJsZXNcIlxyXG5pbXBvcnQgeyBJU3RhcnNoaXBSZXNwb25zZSB9IGZyb20gXCIuLi90eXBlcy9pbnRlcmZhY2VzL1N0YXJzaGlwXCJcclxuaW1wb3J0IHsgRmlsbUZpZWxkc05hbWVzIH0gZnJvbSBcIi4uL3R5cGVzL2ludGVyZmFjZXMvRmlsbVwiXHJcbmltcG9ydCB7IFN0YXJzaGlwc0luRmlsbXNGaWVsZHMgfSBmcm9tIFwiLi4vdHlwZXMvaW50ZXJmYWNlcy9TdGFyc2hpcHNJbkZpbG1zXCJcclxuaW1wb3J0IHsgSVBlb3BsZUVudGl0eUZpZWxkcyB9IGZyb20gXCIuLi90eXBlcy9pbnRlcmZhY2VzL1Blb3BsZVwiXHJcbmltcG9ydCB7IGdldEFsbCB9IGZyb20gXCIuLi9EQi9nZXRBbGxcIlxyXG5pbXBvcnQgeyBTdGFyc2hpcFBpbG90RmllbGRzTmFtZXMgfSBmcm9tIFwiLi4vdHlwZXMvaW50ZXJmYWNlcy9TdGFyc2hpcFBpbG90XCJcclxuXHJcbmV4cG9ydCBkZWZhdWx0KCgpID0+IHtcclxuICBjb25zdCBfZ2V0QnlJZCA9IE1lbShnZXRCeUlkUXVlcnk8RW50aXR5VGFibGUuU3RhcnNoaXAsIElTdGFyc2hpcFJlc3BvbnNlPihcclxuICAgIEVudGl0eVRhYmxlLlN0YXJzaGlwLFxyXG4gICAgW1xyXG4gICAgICB7XHJcbiAgICAgICAgdGFibGVOYW1lOiBFbnRpdHlUYWJsZS5GaWxtLFxyXG4gICAgICAgIHNob3dGaWVsZHM6IFtGaWxtRmllbGRzTmFtZXMuSWQsIEZpbG1GaWVsZHNOYW1lcy5UaXRsZV0sXHJcbiAgICAgICAgZmllbGROYW1lSW5SZXNwb25zZTogJ2ZpbG1zJyxcclxuICAgICAgICBtYW55VG9NYW55VGFibGVOYW1lOiBNYW55VG9NYW55VGFibGUuU3RhcnNoaXBzSW5GaWxtcyxcclxuICAgICAgICBpbnRlcnNlY3RFbnRpdHlPbjogU3RhcnNoaXBzSW5GaWxtc0ZpZWxkcy5GaWxtSWQsXHJcbiAgICAgICAgd2hlcmU6IFN0YXJzaGlwc0luRmlsbXNGaWVsZHMuU3RhcnNoaXBJZFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgdGFibGVOYW1lOiBFbnRpdHlUYWJsZS5QZW9wbGUsXHJcbiAgICAgICAgc2hvd0ZpZWxkczogW0lQZW9wbGVFbnRpdHlGaWVsZHMuSWQsIElQZW9wbGVFbnRpdHlGaWVsZHMuTmFtZV0sXHJcbiAgICAgICAgZmllbGROYW1lSW5SZXNwb25zZTogJ3BpbG90cycsXHJcbiAgICAgICAgbWFueVRvTWFueVRhYmxlTmFtZTogTWFueVRvTWFueVRhYmxlLlN0YXJzaGlwUGlsb3QsXHJcbiAgICAgICAgaW50ZXJzZWN0RW50aXR5T246IFN0YXJzaGlwUGlsb3RGaWVsZHNOYW1lcy5QZW9wbGVJZCxcclxuICAgICAgICB3aGVyZTogU3RhcnNoaXBQaWxvdEZpZWxkc05hbWVzLlN0YXJzaGlwSWRcclxuICAgICAgfVxyXG5cclxuICAgIF1cclxuICApKVxyXG5cclxuICByZXR1cm4ge1xyXG4gICAgZ2V0QnlJZDogX2dldEJ5SWQsXHJcbiAgICBnZXRBbGw6IGdldEFsbChFbnRpdHlUYWJsZS5TdGFyc2hpcCwgX2dldEJ5SWQpXHJcbiAgfVxyXG59KSgpIiwiaW1wb3J0IHsgYXN5bmNNZW1vaXplIGFzIE1lbSB9IGZyb20gXCIuLi91dGlscy9tZW1vaXplXCJcclxuaW1wb3J0IHsgZ2V0QnlJZFF1ZXJ5IH0gZnJvbSBcIi4uL0RCL2dldEJ5SWRcIlxyXG5pbXBvcnQgeyBJVmVoaWNsZUVudGl0eSwgSVZlaGljbGVSZXNwb25zZSwgVmVoaWNsZUZpZWxkc05hbWVzIH0gZnJvbSBcIi4uL3R5cGVzL2ludGVyZmFjZXMvVmVoaWNsZVwiXHJcbmltcG9ydCB7IEVudGl0eVRhYmxlLCBNYW55VG9NYW55VGFibGUgfSBmcm9tIFwiLi4vdHlwZXMvVGFibGVzXCJcclxuaW1wb3J0IHsgSVBlb3BsZUVudGl0eUZpZWxkcyB9IGZyb20gXCIuLi90eXBlcy9pbnRlcmZhY2VzL1Blb3BsZVwiXHJcbmltcG9ydCB7IFBpbG90RmllbGROYW1lcyB9IGZyb20gXCIuLi90eXBlcy9pbnRlcmZhY2VzL1BpbG90XCJcclxuaW1wb3J0IHsgRmlsbUZpZWxkc05hbWVzIH0gZnJvbSBcIi4uL3R5cGVzL2ludGVyZmFjZXMvRmlsbVwiXHJcbmltcG9ydCB7IFZlaGljbGVzSW5GaWxtc0ZpZWxkc05hbWVzIH0gZnJvbSBcIi4uL3R5cGVzL2ludGVyZmFjZXMvVmVoaWNsZXNJbkZpbG1zXCJcclxuaW1wb3J0IHsgZ2V0QWxsIH0gZnJvbSBcIi4uL0RCL2dldEFsbFwiXHJcblxyXG5leHBvcnQgZGVmYXVsdCAoKCkgPT4ge1xyXG4gIGNvbnN0IF9nZXRCeUlkID0gTWVtKGdldEJ5SWRRdWVyeTxFbnRpdHlUYWJsZS5WZWhpY2xlLCBJVmVoaWNsZVJlc3BvbnNlPihcclxuICAgIEVudGl0eVRhYmxlLlZlaGljbGUsXHJcbiAgICBbXHJcbiAgICAgIHtcclxuICAgICAgICB0YWJsZU5hbWU6IEVudGl0eVRhYmxlLlBlb3BsZSxcclxuICAgICAgICBzaG93RmllbGRzOiBbSVBlb3BsZUVudGl0eUZpZWxkcy5JZCwgSVBlb3BsZUVudGl0eUZpZWxkcy5OYW1lXSxcclxuICAgICAgICBmaWVsZE5hbWVJblJlc3BvbnNlOiAncGlsb3RzJyxcclxuICAgICAgICBtYW55VG9NYW55VGFibGVOYW1lOiBNYW55VG9NYW55VGFibGUuUGlsb3QsXHJcbiAgICAgICAgaW50ZXJzZWN0RW50aXR5T246IFBpbG90RmllbGROYW1lcy5QZW9wbGVJZCxcclxuICAgICAgICB3aGVyZTogUGlsb3RGaWVsZE5hbWVzLlZlaGljbGVJZFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgdGFibGVOYW1lOiBFbnRpdHlUYWJsZS5GaWxtLFxyXG4gICAgICAgIHNob3dGaWVsZHM6IFtGaWxtRmllbGRzTmFtZXMuSWQsIEZpbG1GaWVsZHNOYW1lcy5UaXRsZV0sXHJcbiAgICAgICAgZmllbGROYW1lSW5SZXNwb25zZTogJ2ZpbG1zJyxcclxuICAgICAgICBtYW55VG9NYW55VGFibGVOYW1lOiBNYW55VG9NYW55VGFibGUuVmVoaWNsZXNJbkZpbG1zLFxyXG4gICAgICAgIGludGVyc2VjdEVudGl0eU9uOiBWZWhpY2xlc0luRmlsbXNGaWVsZHNOYW1lcy5GaWxtSWQsXHJcbiAgICAgICAgd2hlcmU6IFZlaGljbGVzSW5GaWxtc0ZpZWxkc05hbWVzLlZlaGljbGVJZFxyXG4gICAgICB9XHJcblxyXG4gICAgXVxyXG4gICkpXHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBnZXRCeUlkOiBfZ2V0QnlJZCxcclxuICAgIGdldEFsbDogZ2V0QWxsKEVudGl0eVRhYmxlLlZlaGljbGUsIF9nZXRCeUlkKVxyXG4gIH1cclxufSkoKSIsImltcG9ydCAqIGFzIGV4cHJlc3MgZnJvbSAnZXhwcmVzcydcclxuaW1wb3J0IHsgQXBwbGljYXRpb24sIFJlcXVlc3QsIFJlc3BvbnNlIH0gZnJvbSAnZXhwcmVzcyc7XHJcbmltcG9ydCBmaWxtIGZyb20gJy4vcm91dGVzL2ZpbG0nO1xyXG5pbXBvcnQgKiBhcyBoZWxtZXQgZnJvbSAnaGVsbWV0JztcclxuY29uc3QgYXBwOiBBcHBsaWNhdGlvbiA9IHJlcXVpcmUoJ2V4cHJlc3MnKSgpO1xyXG5pbXBvcnQgcGxhbmV0IGZyb20gJy4vcm91dGVzL3BsYW5ldHMnO1xyXG5pbXBvcnQgcGVvcGxlIGZyb20gJy4vcm91dGVzL3Blb3BsZSc7XHJcbmltcG9ydCBzcGVjaWUgZnJvbSAnLi9yb3V0ZXMvc3BlY2llcyc7XHJcbmltcG9ydCB2ZWhpY2xlIGZyb20gJy4vcm91dGVzL3ZlaGljbGUnO1xyXG5pbXBvcnQgc3RhcnNoaXAgZnJvbSAnLi9yb3V0ZXMvc3RhcnNoaXAnO1xyXG5pbXBvcnQgeyBtYXRjaFJvdXRlcywgTWF0Y2hlZFJvdXRlIH0gZnJvbSAncmVhY3Qtcm91dGVyLWNvbmZpZyc7XHJcbmltcG9ydCBSb3V0ZXMgZnJvbSAnLi4vY2xpZW50L3JvdXRlcyc7XHJcbmltcG9ydCBnZXRQb3J0IGZyb20gJy4vdXRpbHMvcG9ydC1nZXR0ZXInO1xyXG5pbXBvcnQgcmVuZGVyZXIgZnJvbSAnLi91dGlscy9yZW5kZXJlcic7XHJcblxyXG5hcHAudXNlKCcvc3RhdGljJywgZXhwcmVzcy5zdGF0aWMoJ3B1YmxpYycpKVxyXG5cclxuYXBwLnVzZSgnL2FwaS92MS9maWxtcycsIGZpbG0pO1xyXG5hcHAudXNlKCcvYXBpL3YxL3BsYW5ldHMnLCBwbGFuZXQpO1xyXG5hcHAudXNlKCcvYXBpL3YxL3Blb3BsZScsIHBlb3BsZSk7XHJcbmFwcC51c2UoJy9hcGkvdjEvc3BlY2llcycsIHNwZWNpZSk7XHJcbmFwcC51c2UoJy9hcGkvdjEvdmVoaWNsZXMnLCB2ZWhpY2xlKVxyXG5hcHAudXNlKCcvYXBpL3YxL3N0YXJzaGlwcycsIHN0YXJzaGlwKVxyXG5hcHAuZ2V0KCcvKicsIChyZXE6IGFueSwgcmVzOiBhbnksIG5leHQ6ZXhwcmVzcy5OZXh0RnVuY3Rpb24pID0+IHtcclxuICBjb25zdCBwcm9taXNlcyA9IG1hdGNoUm91dGVzKFJvdXRlcywgcmVxLnBhdGgpXHJcbiAgICAubWFwKCh7IHJvdXRlLCBtYXRjaCB9KSA9PiByb3V0ZS5sb2FkRGF0YSA/IHJvdXRlLmxvYWREYXRhKG1hdGNoKSA6IFByb21pc2UucmVzb2x2ZShudWxsKSlcclxuICAgIC5tYXAoKHByb21pc2U6UHJvbWlzZTxhbnk+KSA9PiBwcm9taXNlICYmIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IFxyXG4gICAgICAgICAgcHJvbWlzZS50aGVuKHJlc29sdmUpLmNhdGNoKHJlc29sdmUpXHJcbiAgICAgICAgKSlcclxuICAgaWYocHJvbWlzZXMubGVuZ3RoID4gMCl7XHJcbiAgICBQcm9taXNlLmFsbChwcm9taXNlcykudGhlbigoKSA9PiByZXMuc2VuZChyZW5kZXJlcihyZXEpKSk7XHJcbiAgIH1lbHNle1xyXG4gICAgIG5leHQoKVxyXG4gICAgfSBcclxufSlcclxuYXBwLnVzZSgnLyonLCAocmVxLCByZXMpPT4gcmVzLmpzb24oe21lc3NhZ2U6ICdOb3QgRm91bmQnfSkpXHJcbmFwcC51c2UoaGVsbWV0KCkpO1xyXG5hcHAubGlzdGVuKGdldFBvcnQocHJvY2VzcyksICgpID0+IGNvbnNvbGUubG9nKGBzZXJ2ZXIgc3RhcnRlZCBvbiBwb3J0ICR7Z2V0UG9ydChwcm9jZXNzKX1gKSk7XHJcblxyXG4iLCIvLyBVcGRhdGUgd2l0aCB5b3VyIGNvbmZpZyBzZXR0aW5ncy5cclxuY29uc3QgcyA9IHJlcXVpcmUoXCIuL3NldHRpbmdzLmpzXCIpO1xyXG5tb2R1bGUuZXhwb3J0cyA9IHtcclxuXHJcbiAgZGV2ZWxvcG1lbnQ6IHtcclxuICAgIGNsaWVudDogJ3BnJyxcclxuICAgIGNvbm5lY3Rpb246IHtcclxuICAgICAgdXNlcjogcy51c2VyLFxyXG4gICAgICBob3N0OiBzLmhvc3QsXHJcbiAgICAgIGRhdGFiYXNlOiAnc3RhcndhcnMnLFxyXG4gICAgICBwYXNzd29yZDogcy5wYXNzd29yZCxcclxuICAgICAgc3NsOiB0cnVlXHJcbiAgICB9XHJcbiAgfVxyXG59O1xyXG4iLCJpbXBvcnQge1JvdXRlciwgUmVxdWVzdCwgUmVzcG9uc2V9IGZyb20gJ2V4cHJlc3MnO1xyXG5pbXBvcnQgeyBJRmlsbVJlc3BvbnNlIH0gZnJvbSAnLi4vdHlwZXMvaW50ZXJmYWNlcy9GaWxtJztcclxuaW1wb3J0IEZpbG0gZnJvbSAnLi4vY29udHJvbGxlcnMvZmlsbSc7XHJcblxyXG5cclxuY29uc3QgUjpSb3V0ZXIgPSBSb3V0ZXIoKTtcclxuXHJcblIuZ2V0KCcvaW5zZXJ0JywgYXN5bmMgKHJlcTpSZXF1ZXN0LCByZXM6UmVzcG9uc2UpPT57XHJcbiAgXHJcbiBcclxufSlcclxuUi5nZXQoJy86aWQnLCBhc3luYyAocmVxOlJlcXVlc3QsIHJlczpSZXNwb25zZSkgPT4ge1xyXG4gY29uc3QgcmVzdWx0OklGaWxtUmVzcG9uc2UgPSBhd2FpdCBGaWxtLmdldEJ5SWQocmVxLnBhcmFtcy5pZCkoKVxyXG4gIHJlcy5qc29uKHJlc3VsdCk7ICAgXHJcbn0pO1xyXG5SLmdldCgnLycsIGFzeW5jIChyZXE6UmVxdWVzdCwgcmVzOlJlc3BvbnNlKT0+e1xyXG4gIGNvbnN0IHJlc3VsdCA9IGF3YWl0IEZpbG0uZ2V0QWxsKCk7XHJcbiAgcmVzLmpzb24ocmVzdWx0KTsgXHJcbn0pXHJcbiBleHBvcnQgZGVmYXVsdCBSOyIsImltcG9ydCB7IFJvdXRlciwgUmVxdWVzdCwgUmVzcG9uc2UgfSBmcm9tICdleHByZXNzJztcclxuaW1wb3J0IFBlb3BsZSAgZnJvbSAnLi4vY29udHJvbGxlcnMvcGVvcGxlJztcclxuXHJcbmNvbnN0IFI6Um91dGVyID0gUm91dGVyKCk7XHJcblxyXG5cclxuUi5nZXQoJy86aWQnLCBhc3luYyAocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlKT0+e1xyXG4gIFBlb3BsZS5nZXRCeUlkKHJlcS5wYXJhbXMuaWQpKClcclxuICAgLnRoZW4oKHJlc3VsdDphbnkpID0+IHJlcy5qc29uKHJlc3VsdCkpO1xyXG59KVxyXG5cclxuUi5nZXQoJy8nLCBhc3luYyhyZXE6UmVxdWVzdCwgcmVzOlJlc3BvbnNlKT0+e1xyXG4gIGNvbnN0IHJlc3VsdCA9IGF3YWl0IFBlb3BsZS5nZXRBbGwoKVxyXG4gIHJlcy5qc29uKHJlc3VsdClcclxufSlcclxuZXhwb3J0IGRlZmF1bHQgUjsiLCJpbXBvcnQgZXhwcmVzcyx7Um91dGVyLCBSZXF1ZXN0LCBSZXNwb25zZX0gZnJvbSAnZXhwcmVzcyc7XHJcbmltcG9ydCB7IElQbGFuZXRSZXNwb25zZSB9IGZyb20gJy4uL3R5cGVzL2ludGVyZmFjZXMvUGxhbmV0JztcclxuaW1wb3J0ICBQbGFuZXQgIGZyb20gJy4uL2NvbnRyb2xsZXJzL3BsYW5ldCc7XHJcblxyXG5jb25zdCBSOlJvdXRlciA9IFJvdXRlcigpO1xyXG5cclxuUi5nZXQoJy86aWQnLCBhc3luYyAocmVxOlJlcXVlc3QsIHJlczpSZXNwb25zZSk9PntcclxuICBjb25zdCBwbGFuZXQ6SVBsYW5ldFJlc3BvbnNlID0gYXdhaXQgUGxhbmV0LmdldEJ5SWQocmVxLnBhcmFtcy5pZCkoKVxyXG4gIHJlcy5qc29uKHBsYW5ldCk7XHJcbn0pXHJcblIuZ2V0KCcvJywgYXN5bmMgKHJlcTpSZXF1ZXN0LCByZXM6UmVzcG9uc2UpPT57XHJcbiAgY29uc3QgciA9IGF3YWl0IFBsYW5ldC5nZXRBbGwoKTsgXHJcbiAgcmVzLmpzb24ocik7XHJcbn0pXHJcblxyXG5leHBvcnQgZGVmYXVsdCBSOyIsImltcG9ydCB7IFJvdXRlciwgUmVxdWVzdCwgUmVzcG9uc2UgfSBmcm9tICdleHByZXNzJztcclxuaW1wb3J0IFNwZWNpZSAgZnJvbSAnLi4vY29udHJvbGxlcnMvc3BlY2llJztcclxuY29uc3QgUiA9IFJvdXRlcigpO1xyXG5cclxuUi5nZXQoJy86aWQnLCBhc3luYyAocmVxOlJlcXVlc3QsIHJlczpSZXNwb25zZSk9PntcclxuICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgIFNwZWNpZS5nZXRCeUlkKHJlcS5wYXJhbXMuaWQpKCk7XHJcbiAgIHJlcy5qc29uKHJlc3VsdCk7XHJcbn0pXHJcblxyXG5SLmdldCgnLycsIGFzeW5jIChyZXE6UmVxdWVzdCwgcmVzOiBSZXNwb25zZSk9PntcclxuICBjb25zdCByZXN1bHQgPSBhd2FpdCBTcGVjaWUuZ2V0QWxsKCk7XHJcbiAgcmVzLmpzb24ocmVzdWx0KTtcclxufSlcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBSOyIsImltcG9ydCB7IFJvdXRlciwgUmVxdWVzdCwgUmVzcG9uc2UgfSBmcm9tICdleHByZXNzJztcclxuaW1wb3J0ICBTdGFyc2hpcCAgZnJvbSAnLi4vY29udHJvbGxlcnMvc3RhcnNoaXAnO1xyXG5cclxuY29uc3QgUiA9IFJvdXRlcigpO1xyXG5cclxuUi5nZXQoJy86aWQnLCBhc3luYyAocmVxOlJlcXVlc3QsIHJlczpSZXNwb25zZSk9PntcclxuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IFN0YXJzaGlwLmdldEJ5SWQocmVxLnBhcmFtcy5pZClcclxuICAgIHJlcy5qc29uKHJlc3VsdClcclxufSlcclxuXHJcblIuZ2V0KCcvJywgYXN5bmMgKHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSk9PntcclxuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IFN0YXJzaGlwLmdldEFsbCgpO1xyXG4gICAgcmVzLmpzb24ocmVzdWx0KVxyXG59KVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFI7IiwiaW1wb3J0IHsgUm91dGVyLCBSZXNwb25zZSwgUmVxdWVzdCB9IGZyb20gJ2V4cHJlc3MnO1xyXG5pbXBvcnQgVmVoaWNsZSAgZnJvbSAnLi4vY29udHJvbGxlcnMvdmVoaWNsZSc7XHJcblxyXG5jb25zdCBSOlJvdXRlciA9IFJvdXRlcigpO1xyXG5cclxuUi5nZXQoJy86aWQnLCBhc3luYyAocmVxOlJlcXVlc3QsIHJlczpSZXNwb25zZSk9PntcclxuICBjb25zdCByZXN1bHQgPSBhd2FpdCBWZWhpY2xlLmdldEJ5SWQocmVxLnBhcmFtcy5pZCkoKVxyXG4gIHJlcy5qc29uKHJlc3VsdCk7ICAgIFxyXG59KVxyXG5cclxuUi5nZXQoJy8nLCBhc3luYyAocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlKT0+e1xyXG4gIGNvbnN0IHJlc3VsdCA9IGF3YWl0IFZlaGljbGUuZ2V0QWxsKCk7XHJcbiAgcmVzLmpzb24ocmVzdWx0KTtcclxufSlcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFI7IiwiXHJcbm1vZHVsZS5leHBvcnRzID0ge1xyXG4gIGhvc3Q6IFwicGctc3RhcndhcnMucG9zdGdyZXMuZGF0YWJhc2UuYXp1cmUuY29tXCIsXHJcbiAgdXNlcjogXCJydWJlbjg1QHBnLXN0YXJ3YXJzXCIsXHJcbiAgcGFzc3dvcmQ6IFwiKnJ1YmVuMjgzNDAqXCJcclxufSIsImV4cG9ydCBlbnVtIFRhYmxle1xyXG4gIEFjdG9ycyA9ICdhY3RvcnMnLFxyXG4gIEZpbG0gPSAnZmlsbScsXHJcbiAgUGVvcGxlID0gJ3Blb3BsZScsXHJcbiAgUGlsb3QgPSAncGlsb3QnLFxyXG4gIFBsYW5ldCA9ICdwbGFuZXQnLFxyXG4gIFBsYW5ldHNJbkZpbG1zID0gJ3BsYW5ldHNfaW5fZmlsbXMnLFxyXG4gIFNwZWNpZSA9ICdzcGVjaWUnLFxyXG4gIFN0YXJzaGlwID0gJ3N0YXJzaGlwJyxcclxuICBWZWhpY2xlID0gJ3ZlaGljbGUnLFxyXG4gIFZlaGljbGVzSW5GaWxtcyA9ICd2ZWhpY2xlc19pbl9maWxtcycsXHJcbiAgU3RhcnNoaXBzSW5GaWxtcyA9ICdzdGFyc2hpcHNfaW5fZmlsbXMnLFxyXG4gIFNwZWNpZXNJbkZpbG1zID0gJ3NwZWNpZXNfaW5fZmlsbXMnLFxyXG4gIFJhY2UgPSAncmFjZScsXHJcbiAgU3RhcnNoaXBQaWxvdCA9ICdzdGFyc2hpcF9waWxvdCdcclxuXHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIE1hbnlUb01hbnlUYWJsZXtcclxuICBBY3RvcnMgPSAnYWN0b3JzJyxcclxuICBWZWhpY2xlc0luRmlsbXMgPSAndmVoaWNsZXNfaW5fZmlsbXMnLFxyXG4gIFN0YXJzaGlwc0luRmlsbXMgPSAnc3RhcnNoaXBzX2luX2ZpbG1zJyxcclxuICBTcGVjaWVzSW5GaWxtcyA9ICdzcGVjaWVzX2luX2ZpbG1zJyxcclxuICBQbGFuZXRzSW5GaWxtcyA9ICdwbGFuZXRzX2luX2ZpbG1zJyxcclxuICBSZXNpZGVudCA9ICdyZXNpZGVudCcsXHJcbiAgUGlsb3QgPSAncGlsb3QnLFxyXG4gIFN0YXJzaGlwUGlsb3QgPSAnc3RhcnNoaXBfcGlsb3QnXHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIE9uZVRvTWFueVRhYmxle1xyXG4gIFJhY2UgPSAncmFjZScsXHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIEVudGl0eVRhYmxle1xyXG4gIEZpbG0gPSAnZmlsbScsXHJcbiAgUGVvcGxlID0gJ3Blb3BsZScsXHJcbiAgUGxhbmV0ID0gJ3BsYW5ldCcsXHJcbiAgU3BlY2llID0gJ3NwZWNpZScsXHJcbiAgU3RhcnNoaXAgPSAnc3RhcnNoaXAnLFxyXG4gIFZlaGljbGUgPSAndmVoaWNsZScsXHJcbiAgVGVzdCAgICA9ICd0ZXN0J1xyXG59IiwiZXhwb3J0IGludGVyZmFjZSBJQWN0b3Jze1xyXG4gICAgaWQ6IHN0cmluZztcclxuICAgIHBlb3BsZV9pZDogc3RyaW5nO1xyXG4gICAgZmlsbV9pZDogc3RyaW5nXHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIElBY3RvcnNGaWVsZHNOYW1lc3tcclxuICAgIElkID0gJ2lkJyxcclxuICAgIFBlb3BsZUlkID0gJ3Blb3BsZV9pZCcsXHJcbiAgICBGaWxtSWQgPSAgJ2ZpbG1faWQnXHJcbn0iLCJpbXBvcnQge0lGcm9tRm9yZWlnblRhYmxlc30gZnJvbSAnLi9Gcm9tRm9yZWlnblRhYmxlcyc7XHJcbiBleHBvcnQgaW50ZXJmYWNlIElGaWxtRnJvbUFwaXtcclxuICB0aXRsZTogICAgICAgICAgc3RyaW5nXHJcbiAgZXBpc29kZV9pZDogICAgIG51bWJlclxyXG4gIG9wZW5pbmdfY3Jhd2w6ICBzdHJpbmdcclxuICBkaXJlY3RvcjogICAgICAgc3RyaW5nXHJcbiAgcHJvZHVjZXI6ICAgICAgIHN0cmluZ1xyXG4gIHJlbGVhc2VfZGF0ZTogICBzdHJpbmdcclxuICBjaGFyYWN0ZXJzOiAgICAgc3RyaW5nW11cclxuICBwbGFuZXRzOiAgICAgICAgc3RyaW5nW11cclxuICBzdGFyc2hpcHM6ICAgICAgc3RyaW5nW11cclxuICB2ZWhpY2xlczogICAgICAgc3RyaW5nW11cclxuICBzcGVjaWVzOiAgICAgICAgc3RyaW5nW11cclxuICBjcmVhdGVkOiAgICAgICAgc3RyaW5nXHJcbiAgZWRpdGVkOiAgICAgICAgIHN0cmluZ1xyXG4gIHVybDogICAgICAgICAgICBzdHJpbmdcclxufVxyXG5cclxuZXhwb3J0IG5hbWVzcGFjZSBGaWxtRmllbGRzIHtcclxuICBleHBvcnQgdHlwZSBpZCA9IHN0cmluZztcclxuICBleHBvcnQgdHlwZSB0aXRsZSA9IHN0cmluZyB8IG51bGw7XHJcbiAgZXhwb3J0IHR5cGUgZXBpc29kZV9pZCA9IG51bWJlciB8IG51bGw7XHJcbiAgZXhwb3J0IHR5cGUgb3BlbmluZ19jcmF3bCA9IHN0cmluZyB8IG51bGw7XHJcbiAgZXhwb3J0IHR5cGUgZGlyZWN0b3IgPSBzdHJpbmcgfCBudWxsO1xyXG4gIGV4cG9ydCB0eXBlIHByb2R1Y2VyID0gc3RyaW5nIHwgbnVsbDtcclxuICBleHBvcnQgdHlwZSByZWxlYXNlX2RhdGUgPSBzdHJpbmcgfCBudWxsO1xyXG4gIGV4cG9ydCB0eXBlIGNyZWF0ZWQgPSBzdHJpbmcgfCBudWxsO1xyXG4gIGV4cG9ydCB0eXBlIGVkaXRlZCA9IHN0cmluZyB8IG51bGw7XHJcbiAgZXhwb3J0IHR5cGUgdXJsID0gc3RyaW5nIHwgbnVsbDtcclxuICBcclxufVxyXG5cclxuXHJcbmV4cG9ydCBlbnVtIEZpbG1GaWVsZHNOYW1lc3tcclxuICBJZCA9ICdpZCcsXHJcbiAgVGl0bGUgPSAndGl0bGUnLFxyXG4gIEVwaXNvZGVJZCA9ICAnZXBpc29kZV9pZCcsXHJcbiAgT3BlbmluZ0NyYXdsID0gJ29wZW5pbmdfY3Jhd2wnLFxyXG4gIERpcmVjdG9yID0gJ2RpcmVjdG9yJyxcclxuICBQcm9kdWNlciA9ICAncHJvZHVjZXInLFxyXG4gIFJlbGVhc2VEYXRlID0gICdyZWxlYXNlX2RhdGUnLFxyXG4gIENyZWF0ZWQgPSAnY3JlYXRlZCcsXHJcbiAgRWRpdGVkID0gJ2VkaXRlZCcsXHJcbiAgVXJsID0gJ3VybCdcclxufVxyXG5cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgRmlsbSB7XHJcbiAgaWQ6IEZpbG1GaWVsZHMuaWQ7XHJcbiAgdGl0bGU6IEZpbG1GaWVsZHMudGl0bGU7XHJcbiAgZXBpc29kZV9pZDogRmlsbUZpZWxkcy5lcGlzb2RlX2lkO1xyXG4gIG9wZW5pbmdfY3Jhd2w6IEZpbG1GaWVsZHMub3BlbmluZ19jcmF3bDtcclxuICBkaXJlY3RvcjogRmlsbUZpZWxkcy5kaXJlY3RvcjtcclxuICBwcm9kdWNlcjogRmlsbUZpZWxkcy5wcm9kdWNlcjtcclxuICByZWxlYXNlX2RhdGU6IEZpbG1GaWVsZHMucmVsZWFzZV9kYXRlO1xyXG4gIGNyZWF0ZWQ6IEZpbG1GaWVsZHMuY3JlYXRlZDtcclxuICBlZGl0ZWQ6IEZpbG1GaWVsZHMuZWRpdGVkO1xyXG4gIHVybDogRmlsbUZpZWxkcy51cmw7XHJcblxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElGaWxtUmVzcG9uc2UgZXh0ZW5kcyBGaWxte1xyXG4gIGNoYXJhY3RlcnM6ICAgIElGcm9tRm9yZWlnblRhYmxlc1tdLFxyXG4gIHBsYW5ldHM6ICAgICAgIElGcm9tRm9yZWlnblRhYmxlc1tdLFxyXG4gIHN0YXJzaGlwczogICAgIElGcm9tRm9yZWlnblRhYmxlc1tdLFxyXG4gIHZlaGljbGVzOiAgICAgIElGcm9tRm9yZWlnblRhYmxlc1tdXHJcbn1cclxuXHJcbiIsImltcG9ydCB7IElTcGVjaWVFbnRpdHkgYXMgU3BlY2llIH0gZnJvbSAnLi9TcGVjaWUnO1xyXG5pbXBvcnQgeyBJU3ViamVjdCwgSVN1YmplY3RGcm9tQXBpIH0gZnJvbSAnLi9TdWJqZWN0JztcclxuaW1wb3J0IHsgSUZyb21Gb3JlaWduVGFibGVzIH0gZnJvbSAnLi9Gcm9tRm9yZWlnblRhYmxlcyc7XHJcblxyXG5pbnRlcmZhY2UgSVBlb3BsZSBleHRlbmRzIElTdWJqZWN0e1xyXG4gIGhlaWdodDogc3RyaW5nXHJcbiAgbWFzczogc3RyaW5nXHJcbiAgaGFpcl9jb2xvcjogc3RyaW5nXHJcbiAgc2tpbl9jb2xvcjogc3RyaW5nXHJcbiAgZXllX2NvbG9yOiBzdHJpbmdcclxuICBiaXJ0aF95ZWFyOiBzdHJpbmdcclxuICBnZW5kZXI6IHN0cmluZ1xyXG4gIGNyZWF0ZWQ6IHN0cmluZ1xyXG4gIGVkaXRlZDogc3RyaW5nXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVBlb3BsZUVudGl0eSBleHRlbmRzIElQZW9wbGV7XHJcbiAgc3BlY2llczogSUZyb21Gb3JlaWduVGFibGVzXHJcbiAgdmVoaWNsZXM6IElGcm9tRm9yZWlnblRhYmxlc1tdXHJcbiAgc3RhcnNoaXBzOiBJRnJvbUZvcmVpZ25UYWJsZXNbXVxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElQZW9wbGVGcm9tQXBpIGV4dGVuZHMgSVBlb3BsZXtcclxuICBzcGVjaWVzOiBzdHJpbmdcclxuICB2ZWhpY2xlczogc3RyaW5nW11cclxuICBzdGFyc2hpcHM6IHN0cmluZ1tdXHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIElQZW9wbGVFbnRpdHlGaWVsZHN7XHJcbiAgSWQgPSAnaWQnLFxyXG4gIE5hbWUgPSAnbmFtZScsXHJcbiAgSGVpZ2h0ID0gJ2hlaWdodCcsXHJcbiAgTWFzcyA9ICdtYXNzJyxcclxuICBIYWlyQ29sb3IgPSAnaGFpcl9jb2xvcicsXHJcbiAgU2tpbkNvbG9yID0gJ3NraW5fY29sb3InLFxyXG4gIEV5ZUNvbG9yID0gJ2V5ZV9jb2xvcicsXHJcbiAgQmlydGhZZWFyID0gJ2JpcnRoX3llYXInLFxyXG4gIEdlbmRlciA9ICdnZW5kZXInLFxyXG4gIENyZWF0ZWQgPSAnY3JlYXRlZCcsXHJcbiAgRWRpdGVkID0gJ2VkaXRlZCcsXHJcbiAgVXJsID0gJ3VybCdcclxufSIsImV4cG9ydCBpbnRlcmZhY2UgUGlsb3R7XHJcbiAgICBpZDogUGlsb3RGaWVsZFR5cGVzLmlkO1xyXG4gICAgdmVoaWNsZV9pZDogUGlsb3RGaWVsZFR5cGVzLnZlaGljbGVfaWQ7XHJcbiAgICBwZW9wbGVfaWQ6IFBpbG90RmllbGRUeXBlcy5wZW9wbGVfaWRcclxufVxyXG5cclxuZXhwb3J0IGVudW0gUGlsb3RGaWVsZE5hbWVze1xyXG4gICAgSWQgPSAnaWQnLFxyXG4gICAgVmVoaWNsZUlkID0gJ3ZlaGljbGVfaWQnLFxyXG4gICAgUGVvcGxlSWQgPSAncGVvcGxlX2lkJ1xyXG59XHJcblxyXG5cclxuZXhwb3J0IG5hbWVzcGFjZSBQaWxvdEZpZWxkVHlwZXN7XHJcbiAgICBleHBvcnQgdHlwZSBpZCA9IHN0cmluZztcclxuICAgIGV4cG9ydCB0eXBlIHZlaGljbGVfaWQgPSBzdHJpbmc7XHJcbiAgICBleHBvcnQgdHlwZSBwZW9wbGVfaWQgPSBzdHJpbmc7XHJcbn0iLCJleHBvcnQgaW50ZXJmYWNlIElSYWNle1xyXG4gICAgaWQ6IHN0cmluZ1xyXG4gICAgcGVvcGxlX2lkOiBzdHJpbmdcclxuICAgIHNwZWNpZV9pZDogc3RyaW5nXHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIFJhY2VGaWVsZHN7XHJcbiAgICBpZCA9ICdpZCcsXHJcbiAgICBQZW9wbGVJZCA9ICdwZW9wbGVfaWQnLFxyXG4gICAgU3BlY2llSWQgPSAnc3BlY2llX2lkJ1xyXG59IiwiaW1wb3J0IHsgSVBsYW5ldEVudGl0eSBhcyBQbGFuZXR9IGZyb20gJy4vUGxhbmV0JztcclxuaW1wb3J0IHsgSVN1YmplY3QsIElTdWJqZWN0RnJvbUFwaSB9IGZyb20gJy4vU3ViamVjdCc7XHJcbmltcG9ydCB7IElGcm9tRm9yZWlnblRhYmxlcyB9IGZyb20gJy4vRnJvbUZvcmVpZ25UYWJsZXMnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJU3BlY2llRW50aXR5IGV4dGVuZHMgSVN1YmplY3R7XHJcbiAgY2xhc3NpZmljYXRpb246IHN0cmluZ1xyXG4gIGRlc2lnbmF0aW9uOiBzdHJpbmdcclxuICBhdmVyYWdlX2hlaWdodDogc3RyaW5nXHJcbiAgc2tpbl9jb2xvcnM6IHN0cmluZ1xyXG4gIGhhaXJfY29sb3JzOiBzdHJpbmdcclxuICBleWVfY29sb3JzOiBzdHJpbmdcclxuICBhdmVyYWdlX2xpZmVzcGFuOiBzdHJpbmdcclxuICBsYW5ndWFnZTogc3RyaW5nXHJcbiAgaG9tZXdvcmxkOiBQbGFuZXRcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJU3BlY2llRnJvbUFwaSBleHRlbmRzIElTdWJqZWN0RnJvbUFwaXtcclxuICBjbGFzc2lmaWNhdGlvbjogc3RyaW5nXHJcbiAgcGVvcGxlOiBzdHJpbmdbXVxyXG4gIGZpbG1zOiBzdHJpbmdbXVxyXG4gIGRlc2lnbmF0aW9uOiBzdHJpbmdcclxuICBhdmVyYWdlX2hlaWdodDogc3RyaW5nXHJcbiAgc2tpbl9jb2xvcnM6IHN0cmluZ1xyXG4gIGhhaXJfY29sb3JzOiBzdHJpbmdcclxuICBleWVfY29sb3JzOiBzdHJpbmdcclxuICBhdmVyYWdlX2xpZmVzcGFuOiBzdHJpbmdcclxuICBsYW5ndWFnZTogc3RyaW5nXHJcbiAgaG9tZXdvcmxkOiBzdHJpbmdcclxufVxyXG5cclxuZXhwb3J0IGVudW0gSVNwZWNpZUVudGl0eUZpZWxkc3tcclxuICBJZD0naWQnLFxyXG4gIE5hbWUgPSAnbmFtZScsXHJcbiAgQ2xhc3NpZmljYXRpb24gPSAnY2xhc3NpZmljYXRpb24nLFxyXG4gIERlc2lnbmF0aW9uID0gJ2Rlc2lnbmF0aW9uJyxcclxuICBBdmVyYWdlSGVpZ2h0ID0gJ2F2ZXJhZ2VfaGVpZ2h0JyxcclxuICBTa2luQ29sb3JzID0gJ3NraW5fY29sb3JzJyxcclxuICBIYWlyQ29sb3JzID0gJ2hhaXJfY29sb3JzJyxcclxuICBFeWVDb2xvcnMgPSAnZXllX2NvbG9ycycsXHJcbiAgQXZlcmFnZUxpZmVzcGFuID0gJ2F2ZXJhZ2VfbGlmZXNwYW4nLFxyXG4gIEhvbWV3b3JsZCA9ICdob21ld29ybGQnLFxyXG4gIExhbmd1YWdlID0gJ2xhbmd1YWdlJyxcclxuICBVcmwgPSAndXJsJ1xyXG59XHJcblxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJU3BlY2llUmVzcG9uc2UgZXh0ZW5kcyBJU3BlY2llRW50aXR5e1xyXG4gIHBlb3BsZTogSUZyb21Gb3JlaWduVGFibGVzW10sXHJcbiAgZmlsbXM6IElGcm9tRm9yZWlnblRhYmxlc1tdXHJcbn0iLCJleHBvcnQgaW50ZXJmYWNlIElTcGVjaWVzSW5GaWxtc3tcclxuICAgIGlkOiBzdHJpbmc7XHJcbiAgICBmaWxtX2lkOiBzdHJpbmc7XHJcbiAgICBzcGVjaWVfaWQ6IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IG5hbWVzcGFjZSBTcGVjaWVzSW5GaWxtc0ZpZWxkc1R5cGV7XHJcbiAgICBleHBvcnQgdHlwZSBpZCA9IHN0cmluZztcclxuICAgIGV4cG9ydCB0eXBlIGZpbG1faWQgPSBzdHJpbmc7XHJcbiAgICBleHBvcnQgdHlwZSBzcGVjaWVfaWQgPSBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIFNwZWNpZXNJbkZpbG1zRmllbGRzTmFtZXtcclxuICAgIElkID0gJ2lkJyxcclxuICAgIEZpbG1JZCA9ICdmaWxtX2lkJyxcclxuICAgIFNwZWNpZUlkID0gJ3NwZWNpZV9pZCcgICAgXHJcbn0iLCJpbXBvcnQge0lTdWJqZWN0LCBJU3ViamVjdEZyb21BcGl9IGZyb20gJy4vU3ViamVjdCc7XHJcbmltcG9ydCB7IElUcmFuc3BvcnRGcm9tQXBpLCBJVHJhbnNwb3J0RW50aXR5IH0gZnJvbSAnLi9UcmFuc3BvcnQnO1xyXG5pbXBvcnQgeyBJRnJvbUZvcmVpZ25UYWJsZXMgfSBmcm9tICcuL0Zyb21Gb3JlaWduVGFibGVzJztcclxuaW50ZXJmYWNlIElTdGFyc2hpcHtcclxuICBoeXBlcmRyaXZlX3JhdGluZzogc3RyaW5nXHJcbiAgTUdMVDogc3RyaW5nXHJcbiAgc3RhcnNoaXBfY2xhc3M6IHN0cmluZ1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElTdGFyc2hpcEZyb21BcGkgZXh0ZW5kcyBJU3RhcnNoaXAsIElTdWJqZWN0RnJvbUFwaSwgSVRyYW5zcG9ydEZyb21BcGl7fVxyXG5leHBvcnQgaW50ZXJmYWNlIElTdGFyc2hpcEVudGl0eSBleHRlbmRzIElTdGFyc2hpcCAsSVN1YmplY3QsIElUcmFuc3BvcnRFbnRpdHl7fVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJU3RhcnNoaXBSZXNwb25zZSBleHRlbmRzIElTdGFyc2hpcEVudGl0eXtcclxuICBwaWxvdHM6IElGcm9tRm9yZWlnblRhYmxlc1tdLFxyXG4gIGZpbG1zOiBJRnJvbUZvcmVpZ25UYWJsZXNbXVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGVudW0gU3RhcnNoaXBFbnRpdHlGaWVsZHMge1xyXG4gIElkID0gJ2lkJyxcclxuICBVcmwgPSAndXJsJyxcclxuICBOYW1lID0gJ25hbWUnLFxyXG4gIENyZWF0ZWQgPSAnY3JlYXRlZCcsXHJcbiAgRWRpdGVkID0gJ2VkaXRlZCcsXHJcbiAgTW9kZWwgPSAnbW9kZWwnLFxyXG4gIE1hbnVmYWN0dXJlciA9ICdtYW51ZmFjdHVyZXInLFxyXG4gIENvc3RJbkNyZWRpdHMgPSAnY29zdF9pbl9jcmVkaXRzJyxcclxuICBMZW5ndGggPSAnbGVuZ3RoJyxcclxuICBNYXhBdG1vc3BoZXJpbmdTcGVlZCA9ICdtYXhfYXRtb3NwaGVyaW5nX3NwZWVkJyxcclxuICBDcmV3ID0gJ2NyZXcnLFxyXG4gIFBhc3NlbmdlcnMgPSAncGFzc2VuZ2VycycsXHJcbiAgQ2FyZ29DYXBhY2l0eSA9ICdjYXJnb19jYXBhY2l0eScsXHJcbiAgQ29uc3VtYWJsZXMgPSAnY29uc3VtYWJsZXMnLFxyXG4gIEh5cGVyZHJpdmVSYXRpbmcgPSAnaHlwZXJkcml2ZV9yYXRpbmcnLFxyXG4gIE1HTFQgPSAnTUdMVCcsXHJcbiAgU3RhcnNoaXBDbGFzcyA9ICdzdGFyc2hpcF9jbGFzcydcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBTdGFyc2hpcEVudGl0eUZpZWxkc0FycmF5e1xyXG4gIHJlYWRvbmx5IFtpbmRleDogbnVtYmVyXTogU3RhcnNoaXBFbnRpdHlGaWVsZHNcclxufSIsIlxyXG5leHBvcnQgbmFtZXNwYWNlIFN0YXJzaGlwUGlsb3RGaWVsZHN7XHJcbiAgIGV4cG9ydCB0eXBlIGlkID0gc3RyaW5nO1xyXG4gICBleHBvcnQgdHlwZSBzdGFyc2hpcF9pZCA9IHN0cmluZztcclxuICAgZXhwb3J0IHR5cGUgcGVvcGxlX2lkID0gc3RyaW5nOyBcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBTdGFyc2hpcFBpbG90e1xyXG4gICAgaWQ6IFN0YXJzaGlwUGlsb3RGaWVsZHMuaWQ7XHJcbiAgICBzdGFyc2hpcF9pZDogU3RhcnNoaXBQaWxvdEZpZWxkcy5zdGFyc2hpcF9pZDtcclxuICAgIHBlb3BsZV9pZDogU3RhcnNoaXBQaWxvdEZpZWxkcy5wZW9wbGVfaWQ7XHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIFN0YXJzaGlwUGlsb3RGaWVsZHNOYW1lc3tcclxuICAgIElkID0gJ2lkJyxcclxuICAgIFN0YXJzaGlwSWQgPSAnc3RhcnNoaXBfaWQnLFxyXG4gICAgUGVvcGxlSWQgPSAncGVvcGxlX2lkJ1xyXG59IiwiZXhwb3J0IGludGVyZmFjZSBTdGFyc2hpcHNJbkZpbG1ze1xyXG4gIGlkOiBzdHJpbmdcclxuICBzdGFyc2hpcF9pZDogc3RyaW5nXHJcbiAgZmlsbV9pZDogc3RyaW5nXHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIFN0YXJzaGlwc0luRmlsbXNGaWVsZHN7XHJcbiAgSWQgPSAnaWQnLFxyXG4gIFN0YXJzaGlwSWQgPSAnc3RhcnNoaXBfaWQnLFxyXG4gIEZpbG1JZCA9ICdmaWxtX2lkJ1xyXG59IiwiaW1wb3J0IHsgSVN1YmplY3RGcm9tQXBpLCBJU3ViamVjdCB9IGZyb20gXCIuL1N1YmplY3RcIjtcclxuaW1wb3J0IHsgSVRyYW5zcG9ydEZyb21BcGksIElUcmFuc3BvcnRFbnRpdHkgfSBmcm9tIFwiLi9UcmFuc3BvcnRcIjtcclxuaW1wb3J0IHsgSUZyb21Gb3JlaWduVGFibGVzIH0gZnJvbSBcIi4vRnJvbUZvcmVpZ25UYWJsZXNcIjtcclxuXHJcbmludGVyZmFjZSBWZWhpY2xlIHsgXHJcbiAgdmVoaWNsZV9jbGFzczogc3RyaW5nXHJcbiB9XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElWZWhpY2xlRnJvbUFwaSBleHRlbmRzIElTdWJqZWN0RnJvbUFwaSwgSVRyYW5zcG9ydEZyb21BcGl7XHJcbiAgdmVoaWNsZV9jbGFzczogc3RyaW5nXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVZlaGljbGVFbnRpdHkgZXh0ZW5kcyBWZWhpY2xlLCBJU3ViamVjdEZyb21BcGksIElUcmFuc3BvcnRFbnRpdHl7fVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJVmVoaWNsZVJlc3BvbnNlIGV4dGVuZHMgSVZlaGljbGVFbnRpdHl7XHJcbiAgcGlsb3RzOiBJRnJvbUZvcmVpZ25UYWJsZXNbXSxcclxuICBmaWxtczogSUZyb21Gb3JlaWduVGFibGVzW11cclxufVxyXG5cclxuXHJcbmV4cG9ydCBlbnVtIFZlaGljbGVGaWVsZHNOYW1lc3tcclxuICBJZCA9ICdpZCcsXHJcbiAgTmFtZT0gJ25hbWUnLFxyXG4gIE1vZGVsID0gJ21vZGVsJyxcclxuICBNYW51ZmFjdHVyZXIgPSAnbWFudWZhY3R1cmVyJyxcclxuICBDb3N0SW5DcmVkaXRzID0gJ2Nvc3RfaW5fY3JlZGl0cycsXHJcbiAgTGVuZ2h0ID0gJ2xlbmd0aCcsXHJcbiAgTWF4QXRtb3NwaGVyaW5nU3BlZWQgPSAnbWF4X2F0bW9zcGhlcmluZ19zcGVlZCcsXHJcbiAgQ3JldyA9ICdjcmV3JyxcclxuICBQYXNzZW5nZXJzID0gJ3Bhc3NlbmdlcnMnLFxyXG4gIENhcmdvQ2FwYWNpdHkgPSAnY2FyZ29fY2FwYWNpdHknLFxyXG4gIENvbnN1bWFibGVzID0gJ2NvbnN1bWFibGVzJyxcclxuICBWZWhpY2xlQ2xhc3MgPSAndmVoaWNsZV9jbGFzcycsXHJcbiAgVXJsID0gJ3VybCdcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBWZWhpY2xlRmllbGRzTmFtZXNBcnJheXtcclxuICBba2V5OiBudW1iZXJdIDogVmVoaWNsZUZpZWxkc05hbWVzXHJcbn0iLCJleHBvcnQgaW50ZXJmYWNlIFZlaGljbGVzSW5GaWxtc3tcclxuICBpZDogc3RyaW5nXHJcbiAgdmVoaWNsZV9pZDogc3RyaW5nXHJcbiAgZmlsbV9pZDogc3RyaW5nXHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIFZlaGljbGVzSW5GaWxtc0ZpZWxkc05hbWVze1xyXG4gIElkID0gJ2lkJyxcclxuICBWZWhpY2xlSWQgPSAndmVoaWNsZV9pZCcsXHJcbiAgRmlsbUlkID0gJ2ZpbG1faWQnXHJcbn0iLCJpbXBvcnQgeyBFeGVjRXhjZXB0aW9uIH0gZnJvbSBcImNoaWxkX3Byb2Nlc3NcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBhc3luY0NvbXBvc2UgPSAoLi4uZm5zOiBGdW5jdGlvbltdKSA9PiAoZGF0YTogUHJvbWlzZTxhbnk+KSA9PlxyXG4gIGZucy5yZWR1Y2VSaWdodChcclxuICAgIChhY2M6IFByb21pc2U8YW55PiwgZjogRnVuY3Rpb24sIGluZGV4OiBudW1iZXIpID0+XHJcbiAgICAgIGFjY1xyXG4gICAgICAgIC50aGVuKCh2OiBhbnkpID0+IGYodikpXHJcbiAgICAgICAgLmNhdGNoKChlOkV4ZWNFeGNlcHRpb24pID0+IGNvbnNvbGUubG9nKGUpKVxyXG4gICAgLCBkYXRhXHJcbiAgKVxyXG4iLCJmdW5jdGlvbiBsb2dnZXIocDogTm9kZUpTLlByb2Nlc3MsIGxvZ0ZuOiAoczogc3RyaW5nKSA9PiB2b2lkKSB7XHJcbiBcclxuICByZXR1cm4gKG1lc3NhZ2U6IHN0cmluZykgPT4gcC5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcgJiYgbG9nRm4obWVzc2FnZSk7XHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBsb2dnZXIocHJvY2VzcywgY29uc29sZS5sb2cpOyIsImltcG9ydCB7IFByb2Nlc3NFbnZPcHRpb25zIH0gZnJvbSAnY2hpbGRfcHJvY2Vzcyc7XHJcbmltcG9ydCBMb2cgZnJvbSAnLi9sb2dnZXInOyBcclxuZXhwb3J0IGNvbnN0IG1lbW9pemU6IChmOiBGdW5jdGlvbikgPT4gKGE6IGFueSkgPT4gYW55ID0gKGZuKSA9PiB7XHJcbiAgbGV0IHN0YXRlID0ge30gYXMgYW55O1xyXG4gIHJldHVybiBmdW5jdGlvbiguLi5hcmdzOiBhbnkpIHtcclxuICAgIGNvbnN0IGtleTogc3RyaW5nID0gWy4uLmFyZ3NdLnJlZHVjZSgoYWNjLCBjdXJyKSA9PiBhY2MuY29uY2F0KGN1cnIpLCAnJyk7XHJcbiAgICBpZiAoT2JqZWN0LmtleXMoc3RhdGUpLnNvbWUoKGs6IHN0cmluZykgPT4gayA9PT0ga2V5KSkge1xyXG4gICAgICByZXR1cm4gKCkgPT4gc3RhdGVba2V5XTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHN0YXRlW2tleV0gPSBmbiguLi5hcmdzKTtcclxuICAgICAgcmV0dXJuICgpID0+IHN0YXRlW2tleV07XHJcbiAgICB9XHJcbiAgfTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBhc3luY01lbW9pemU6IChmOiAoYTogYW55KSA9PiBQcm9taXNlPGFueT4pID0+IChhOiBhbnkpID0+ICgpID0+IFByb21pc2U8YW55PiA9IChmbikgPT4ge1xyXG4gIGxldCBzdGF0ZSA9IHt9IGFzIGFueTtcclxuICByZXR1cm4gKGFyZ3M6IGFueSkgPT4ge1xyXG4gICAgY29uc3Qga2V5OiBzdHJpbmcgPSBbLi4uYXJnc10ucmVkdWNlKChhY2MsIGN1cnIpID0+IGFjYy5jb25jYXQoY3VyciksICcnKTtcclxuICAgIGlmIChPYmplY3Qua2V5cyhzdGF0ZSkuc29tZSgoazogc3RyaW5nKSA9PiBrID09PSBrZXkpKSB7XHJcbiAgICAgIExvZygnTWVtb2l6ZTogRGF0YSBleHRyYWN0ZWQgRnJvbSBDYWNoZScpO1xyXG4gICAgICByZXR1cm4gKCkgPT4gc3RhdGVba2V5XTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIExvZygnTWVtb2l6ZTogZGF0YSBleHRyYWN0ZWQgRnJvbSBEQicpO1xyXG4gICAgICBzdGF0ZVtrZXldID0gZm4oYXJncyk7XHJcbiAgICAgIHJldHVybiAoKSA9PiBzdGF0ZVtrZXldO1xyXG4gICAgfVxyXG4gIH07XHJcbn07XHJcblxyXG4iLCJ0eXBlIFBvcnQgPSBzdHJpbmc7XHJcblxyXG5jb25zdCBnZXRQb3J0ID0gKHA6Tm9kZUpTLlByb2Nlc3MpOihQb3J0IHwgMzAwMCkgPT4gcCAmJiBwLmVudiAmJiBwLmVudi5QT1JUID8gcC5lbnYuUE9SVCA6IDMwMDA7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZ2V0UG9ydDsiLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgSGVsbWV0LCBIZWxtZXREYXRhIH0gZnJvbSAncmVhY3QtaGVsbWV0J1xyXG5pbXBvcnQgeyBTdGF0aWNSb3V0ZXIgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJ1xyXG5pbXBvcnQgeyByZW5kZXJSb3V0ZXMgfSBmcm9tICdyZWFjdC1yb3V0ZXItY29uZmlnJ1xyXG5pbXBvcnQgeyByZW5kZXJUb1N0cmluZyB9IGZyb20gJ3JlYWN0LWRvbS9zZXJ2ZXInXHJcbmltcG9ydCBSb3V0ZXMgZnJvbSAnLi4vLi4vY2xpZW50L3JvdXRlcydcclxuaW1wb3J0IHsgUmVxdWVzdCB9IGZyb20gJ2V4cHJlc3MnXHJcbmltcG9ydCBnZXRQb3J0IGZyb20gJy4vcG9ydC1nZXR0ZXInXHJcbmNvbnN0IHJlbmRlcmVyID0gKHJlcTogUmVxdWVzdCwgY29udGV4dCA9IHt9KSA9PiB7XHJcbiAgY29uc3QgY29udGVudDpzdHJpbmcgPSByZW5kZXJUb1N0cmluZyhcclxuICAgIDxTdGF0aWNSb3V0ZXIgbG9jYXRpb249e3JlcS5wYXRofSBjb250ZXh0PXtjb250ZXh0fT5cclxuICAgICAgPGRpdj57cmVuZGVyUm91dGVzKFJvdXRlcyl9PC9kaXY+XHJcbiAgICA8L1N0YXRpY1JvdXRlcj5cclxuICApXHJcbiAgY29uc3QgaGVsbWV0OkhlbG1ldERhdGEgPSBIZWxtZXQucmVuZGVyU3RhdGljKCk7XHJcbiAgcmV0dXJuIGA8aHRtbCBsYW5nPVwiZW5cIj5cclxuICAgIDxoZWFkPlxyXG4gICAgICAgIDxtZXRhIGNoYXJzZXQ9XCJVVEYtOFwiPlxyXG4gICAgICAgICR7aGVsbWV0Lm1ldGEudG9TdHJpbmcoKX1cclxuICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTEuMFwiPlxyXG4gICAgICAgIDxtZXRhIGh0dHAtZXF1aXY9XCJYLVVBLUNvbXBhdGlibGVcIiBjb250ZW50PVwiaWU9ZWRnZVwiPlxyXG4gICAgICAgICR7aGVsbWV0LnRpdGxlLnRvU3RyaW5nKCl9XHJcbiAgICAgICAgPGxpbmsgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1MYXRvOjQwMCw3MDBcIiByZWw9XCJzdHlsZXNoZWV0XCI+XHJcbiAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIHR5cGU9XCJ0ZXh0L2Nzc1wiIGNoYXJzZXQ9XCJVVEYtOFwiIGhyZWY9XCJodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9zbGljay1jYXJvdXNlbC8xLjYuMC9zbGljay5taW4uY3NzXCIgLz5cclxuICAgICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cImh0dHBzOi8vdXNlLmZvbnRhd2Vzb21lLmNvbS9yZWxlYXNlcy92NS4wLjkvY3NzL2FsbC5jc3NcIiBpbnRlZ3JpdHk9XCJzaGEzODQtNVNPaUlzQXppSmw2QVdlMEhXUktUWGxmY1NIS21ZVjRSQkYxOFBQSjE3M0t6bjdqek15RnVUdGs4SkE3UVFHMVwiIGNyb3Nzb3JpZ2luPVwiYW5vbnltb3VzXCI+XHJcbiAgICA8L2hlYWQ+XHJcbiAgICA8Ym9keSAke2hlbG1ldC5ib2R5QXR0cmlidXRlcy50b1N0cmluZygpfT5cclxuICAgICAgICA8ZGl2IGlkPVwicm9vdFwiPiR7Y29udGVudH08L2Rpdj5cclxuICAgICAgICA8c2NyaXB0IHNyYz1cImh0dHA6Ly9sb2NhbGhvc3Q6JHtnZXRQb3J0KHByb2Nlc3MpfS9wdWJsaWMvY2xpZW50X2J1bmRsZS5qc1wiPjwvc2NyaXB0PlxyXG4gICAgPC9ib2R5PlxyXG4gIFxyXG48L2h0bWw+YDtcclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJlbmRlcmVyOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBiYWJlbC9wb2x5ZmlsbFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJleHByZXNzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImhlbG1ldFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJrbmV4XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJhbWRhXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWRvbS9zZXJ2ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaGVsbWV0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJvdXRlci1jb25maWdcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3Qtcm91dGVyLWRvbVwiKTsiXSwic291cmNlUm9vdCI6IiJ9