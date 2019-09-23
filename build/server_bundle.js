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










app.use(express__WEBPACK_IMPORTED_MODULE_0__["static"]('/build'));
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
  return "<html lang=\"en\">\n    <head>\n        <meta charset=\"UTF-8\">\n        ".concat(helmet.meta.toString(), "\n        <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n        <meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\">\n        ").concat(helmet.title.toString(), "\n        <link rel=\"stylesheet\" type=\"text/css\" href=\"http://localhost:3000/build/assets/css/styles.min.css\">\n        <link href=\"https://fonts.googleapis.com/css?family=Lato:400,700\" rel=\"stylesheet\">\n        <link rel=\"stylesheet\" type=\"text/css\" charset=\"UTF-8\" href=\"https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css\" />\n        <link rel=\"stylesheet\" href=\"https://use.fontawesome.com/releases/v5.0.9/css/all.css\" integrity=\"sha384-5SOiIsAziJl6AWe0HWRKTXlfcSHKmYV4RBF18PPJ173Kzn7jzMyFuTtk8JA7QQG1\" crossorigin=\"anonymous\">\n    </head>\n    <body ").concat(helmet.bodyAttributes.toString(), ">\n        <div id=\"root\">").concat(content, "</div>\n        <script src=\"http://localhost:").concat(Object(_port_getter__WEBPACK_IMPORTED_MODULE_6__["default"])(process), "/build/client_bundle.js\"></script>\n    </body>\n  \n</html>");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L3BhZ2VzL0Fib3V0LnRzeCIsIndlYnBhY2s6Ly8vLi9jbGllbnQvcGFnZXMvQ29udGFjdC50c3giLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L3BhZ2VzL0hvbWUudHN4Iiwid2VicGFjazovLy8uL2NsaWVudC9yb3V0ZXMvaW5kZXgudHN4Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9wcm9jZXNzL2Jyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL0RCL2dldEFsbC50cyIsIndlYnBhY2s6Ly8vLi9zZXJ2ZXIvREIvZ2V0QnlJZC50cyIsIndlYnBhY2s6Ly8vLi9zZXJ2ZXIvREIvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL2NvbnRyb2xsZXJzL2ZpbG0udHMiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL2NvbnRyb2xsZXJzL3Blb3BsZS50cyIsIndlYnBhY2s6Ly8vLi9zZXJ2ZXIvY29udHJvbGxlcnMvcGxhbmV0LnRzIiwid2VicGFjazovLy8uL3NlcnZlci9jb250cm9sbGVycy9zcGVjaWUudHMiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL2NvbnRyb2xsZXJzL3N0YXJzaGlwLnRzIiwid2VicGFjazovLy8uL3NlcnZlci9jb250cm9sbGVycy92ZWhpY2xlLnRzIiwid2VicGFjazovLy8uL3NlcnZlci9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zZXJ2ZXIva25leGZpbGUudHMiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL3JvdXRlcy9maWxtLnRzIiwid2VicGFjazovLy8uL3NlcnZlci9yb3V0ZXMvcGVvcGxlLnRzIiwid2VicGFjazovLy8uL3NlcnZlci9yb3V0ZXMvcGxhbmV0cy50cyIsIndlYnBhY2s6Ly8vLi9zZXJ2ZXIvcm91dGVzL3NwZWNpZXMudHMiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL3JvdXRlcy9zdGFyc2hpcC50cyIsIndlYnBhY2s6Ly8vLi9zZXJ2ZXIvcm91dGVzL3ZlaGljbGUudHMiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL3NldHRpbmdzLmpzIiwid2VicGFjazovLy8uL3NlcnZlci90eXBlcy9UYWJsZXMudHMiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL3R5cGVzL2ludGVyZmFjZXMvQWN0b3JzLnRzIiwid2VicGFjazovLy8uL3NlcnZlci90eXBlcy9pbnRlcmZhY2VzL0ZpbG0udHMiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL3R5cGVzL2ludGVyZmFjZXMvUGVvcGxlLnRzIiwid2VicGFjazovLy8uL3NlcnZlci90eXBlcy9pbnRlcmZhY2VzL1BpbG90LnRzIiwid2VicGFjazovLy8uL3NlcnZlci90eXBlcy9pbnRlcmZhY2VzL1JhY2VzLnRzIiwid2VicGFjazovLy8uL3NlcnZlci90eXBlcy9pbnRlcmZhY2VzL1NwZWNpZS50cyIsIndlYnBhY2s6Ly8vLi9zZXJ2ZXIvdHlwZXMvaW50ZXJmYWNlcy9TcGVjaWVzSW5GaWxtcy50cyIsIndlYnBhY2s6Ly8vLi9zZXJ2ZXIvdHlwZXMvaW50ZXJmYWNlcy9TdGFyc2hpcC50cyIsIndlYnBhY2s6Ly8vLi9zZXJ2ZXIvdHlwZXMvaW50ZXJmYWNlcy9TdGFyc2hpcFBpbG90LnRzIiwid2VicGFjazovLy8uL3NlcnZlci90eXBlcy9pbnRlcmZhY2VzL1N0YXJzaGlwc0luRmlsbXMudHMiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL3R5cGVzL2ludGVyZmFjZXMvVmVoaWNsZS50cyIsIndlYnBhY2s6Ly8vLi9zZXJ2ZXIvdHlwZXMvaW50ZXJmYWNlcy9WZWhpY2xlc0luRmlsbXMudHMiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL3V0aWxzL2FzeW5jQ29tcG9zZS50cyIsIndlYnBhY2s6Ly8vLi9zZXJ2ZXIvdXRpbHMvbG9nZ2VyLnRzIiwid2VicGFjazovLy8uL3NlcnZlci91dGlscy9tZW1vaXplLnRzIiwid2VicGFjazovLy8uL3NlcnZlci91dGlscy9wb3J0LWdldHRlci50cyIsIndlYnBhY2s6Ly8vLi9zZXJ2ZXIvdXRpbHMvcmVuZGVyZXIudHN4Iiwid2VicGFjazovLy9leHRlcm5hbCBcIkBiYWJlbC9wb2x5ZmlsbFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImV4cHJlc3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJoZWxtZXRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJrbmV4XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmFtZGFcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWRvbS9zZXJ2ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1oZWxtZXRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1yb3V0ZXItY29uZmlnXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3Qtcm91dGVyLWRvbVwiIl0sIm5hbWVzIjpbIkFib3V0IiwicHJvcHMiLCJDb250YWN0IiwiSG9tZSIsInJvdXRlcyIsInBhdGgiLCJjb21wb25lbnQiLCJnZXRJZHMiLCJ0YWJsZU5hbWUiLCJrbmV4Iiwic2VsZWN0IiwiZnJvbSIsIl9nZXRBbGwiLCJnZXRCeUlkSGFuZGxlciIsImlkcyIsIm1hcCIsIm8iLCJpZCIsIm1hcFByb21pc2VzVG9SZXN1bHQiLCJwcm9taXNlcyIsIlByb21pc2UiLCJhbGwiLCJnZXRBbGwiLCJ0YWJsZSIsImNvbmZpZ3VyZWRHZXRCeUlkSGFuZGxlciIsImFzeW5jQ29tcG9zZSIsInJlc29sdmUiLCJnZXRCeUlkUXVlcnkiLCJmb3JlaWduRmllbGRzIiwibWFwREJSZXNwb25zZSIsInJlcyIsInJvd3MiLCJqc29uX2J1aWxkX29iamVjdCIsImZldGNoRW50aXR5V2l0aE1hbnlUb01hbnlGaWVsZHMiLCJnZXRNTUZpZWxkc1F1ZXJ5RnJvbSIsIm1hbnlUb01hbnlGaWVsZHMiLCJyZXN1bHQiLCJPYmplY3QiLCJrZXlzIiwicmVkdWNlIiwiYWNjIiwiY3VyciIsImluZGV4IiwidW5kZWZpbmVkIiwiZmllbGROYW1lSW5SZXNwb25zZSIsImdldE1NRmllbGRCeUlkIiwicmF3Iiwid3JhcCIsIm1hbnlUb01hbnlRdWVyeSIsImZpZWxkRGF0YSIsIndoZXJlIiwiZmllbGROYW1lIiwicXVlcnkiLCJzaG93RmllbGRzIiwibWFueVRvTWFueVRhYmxlTmFtZSIsImludGVyc2VjdEVudGl0eU9uIiwiY29uY2F0RmllbGRzV2l0aFRhYmxlTmFtZSIsImZpZWxkIiwiYnVpbGRNTUZRdWVyeSIsImNvbXBvc2UiLCJmaWVsZHMiLCJyZXF1aXJlIiwiZGV2ZWxvcG1lbnQiLCJfZ2V0QnlJZCIsIk1lbSIsIkVudGl0eVRhYmxlIiwiRmlsbSIsIlZlaGljbGUiLCJWZWhpY2xlRmllbGRzTmFtZXMiLCJJZCIsIk5hbWUiLCJNYW55VG9NYW55VGFibGUiLCJWZWhpY2xlc0luRmlsbXMiLCJWZWhpY2xlc0luRmlsbXNGaWVsZHNOYW1lcyIsIlZlaGljbGVJZCIsIlBlb3BsZSIsIklQZW9wbGVFbnRpdHlGaWVsZHMiLCJBY3RvcnMiLCJJQWN0b3JzRmllbGRzTmFtZXMiLCJQZW9wbGVJZCIsIkZpbG1JZCIsIlN0YXJzaGlwIiwiU3RhcnNoaXBzSW5GaWxtcyIsIlBsYW5ldCIsIlBsYW5ldHNJbkZpbG1zIiwiZ2V0QnlJZCIsIkZpbG1GaWVsZHNOYW1lcyIsIlRpdGxlIiwiU3BlY2llIiwiSVNwZWNpZUVudGl0eUZpZWxkcyIsIk9uZVRvTWFueVRhYmxlIiwiUmFjZSIsIlJhY2VGaWVsZHMiLCJTcGVjaWVJZCIsIlBpbG90IiwiUGlsb3RGaWVsZE5hbWVzIiwiU3RhcnNoaXBFbnRpdHlGaWVsZHMiLCJTdGFyc2hpcFBpbG90IiwiU3RhcnNoaXBQaWxvdEZpZWxkc05hbWVzIiwiU3RhcnNoaXBJZCIsIlJlc2lkZW50IiwiU3BlY2llc0luRmlsbXMiLCJTcGVjaWVzSW5GaWxtc0ZpZWxkc05hbWUiLCJTdGFyc2hpcHNJbkZpbG1zRmllbGRzIiwiYXBwIiwidXNlIiwiZXhwcmVzcyIsImZpbG0iLCJwbGFuZXQiLCJwZW9wbGUiLCJzcGVjaWUiLCJ2ZWhpY2xlIiwic3RhcnNoaXAiLCJnZXQiLCJyZXEiLCJuZXh0IiwibWF0Y2hSb3V0ZXMiLCJSb3V0ZXMiLCJyb3V0ZSIsIm1hdGNoIiwibG9hZERhdGEiLCJwcm9taXNlIiwicmVqZWN0IiwidGhlbiIsImxlbmd0aCIsInNlbmQiLCJyZW5kZXJlciIsImpzb24iLCJtZXNzYWdlIiwiaGVsbWV0IiwibGlzdGVuIiwiZ2V0UG9ydCIsInByb2Nlc3MiLCJjb25zb2xlIiwibG9nIiwicyIsIm1vZHVsZSIsImV4cG9ydHMiLCJjbGllbnQiLCJjb25uZWN0aW9uIiwidXNlciIsImhvc3QiLCJkYXRhYmFzZSIsInBhc3N3b3JkIiwic3NsIiwiUiIsIlJvdXRlciIsInBhcmFtcyIsInIiLCJUYWJsZSIsIkZpbG1GaWVsZHMiLCJQaWxvdEZpZWxkVHlwZXMiLCJTcGVjaWVzSW5GaWxtc0ZpZWxkc1R5cGUiLCJTdGFyc2hpcFBpbG90RmllbGRzIiwiZm5zIiwiZGF0YSIsInJlZHVjZVJpZ2h0IiwiZiIsInYiLCJlIiwibG9nZ2VyIiwicCIsImxvZ0ZuIiwiZW52IiwiTk9ERV9FTlYiLCJtZW1vaXplIiwiZm4iLCJzdGF0ZSIsImFyZ3MiLCJrZXkiLCJjb25jYXQiLCJzb21lIiwiayIsImFzeW5jTWVtb2l6ZSIsIkxvZyIsIlBPUlQiLCJjb250ZXh0IiwiY29udGVudCIsInJlbmRlclRvU3RyaW5nIiwicmVuZGVyUm91dGVzIiwiSGVsbWV0IiwicmVuZGVyU3RhdGljIiwibWV0YSIsInRvU3RyaW5nIiwidGl0bGUiLCJib2R5QXR0cmlidXRlcyJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQUE7QUFBQTs7QUFHQSxJQUFNQSxLQUFLLEdBQUcsU0FBUkEsS0FBUSxDQUFDQyxLQUFEO0FBQUEsU0FDViw2RUFEVTtBQUFBLENBQWQ7O0FBTWVELG9FQUFmLEU7Ozs7Ozs7Ozs7OztBQ1RBO0FBQUE7QUFBQTtBQUFBOztBQUdBLElBQU1FLE9BQU8sR0FBRyxTQUFWQSxPQUFVLENBQUNELEtBQUQ7QUFBQSxTQUNaLDJFQURZO0FBQUEsQ0FBaEI7O0FBTWVDLHNFQUFmLEU7Ozs7Ozs7Ozs7OztBQ1RBO0FBQUE7QUFBQTtBQUFBOztBQUVBLElBQU1DLElBQUksR0FBRyxTQUFQQSxJQUFPLENBQUNGLEtBQUQ7QUFBQSxTQUNULHlGQURTO0FBQUEsQ0FBYjs7QUFPZUUsbUVBQWYsRTs7Ozs7Ozs7Ozs7O0FDUEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQyxNQUFvQixHQUFHLENBQ3pCO0FBQ0lDLE1BQUksRUFBRSxPQURWO0FBRUlDLFdBQVMsRUFBRUgsbURBQUlBO0FBRm5CLENBRHlCLEVBS3pCO0FBQ0lFLE1BQUksRUFBRSxRQURWO0FBRUlDLFdBQVMsRUFBRU4sb0RBQUtBO0FBRnBCLENBTHlCLEVBU3pCO0FBQ0lLLE1BQUksRUFBRSxVQURWO0FBRUlDLFdBQVMsRUFBRUosc0RBQU9BO0FBRnRCLENBVHlCLENBQTdCO0FBZ0JlRSxxRUFBZixFOzs7Ozs7Ozs7OztBQ3RCQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLHNCQUFzQjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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LE1BQWlCLEdBQUdtRCxtREFBTSxDQUFDQyxZQUFQLEVBQTFCO0FBQ0EsNkZBR1FwRCxNQUFNLENBQUNxRCxJQUFQLENBQVlDLFFBQVosRUFIUiw4S0FNUXRELE1BQU0sQ0FBQ3VELEtBQVAsQ0FBYUQsUUFBYixFQU5SLDJtQkFZVXRELE1BQU0sQ0FBQ3dELGNBQVAsQ0FBc0JGLFFBQXRCLEVBWlYseUNBYXVCTixPQWJ2Qiw0REFjc0M5Qyw0REFBTyxDQUFDQyxPQUFELENBZDdDO0FBa0JELENBekJEOztBQTRCZU4sdUVBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BDQSw0Qzs7Ozs7Ozs7Ozs7QUNBQSxvQzs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSxpQzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSw2Qzs7Ozs7Ozs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSxnRDs7Ozs7Ozs7Ozs7QUNBQSw2QyIsImZpbGUiOiJzZXJ2ZXJfYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvYnVpbGRcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuXHJcbmNvbnN0IEFib3V0ID0gKHByb3BzOmFueSkgPT4oXHJcbiAgICA8ZGl2PlxyXG4gICAgICBBYm91dCB1cyFcclxuICAgIDwvZGl2PlxyXG4pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQWJvdXQ7XHJcblxyXG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5cclxuY29uc3QgQ29udGFjdCA9IChwcm9wczphbnkpID0+KFxyXG4gICAgPGRpdj5cclxuICAgICAgQ29udGFjdFxyXG4gICAgPC9kaXY+XHJcbik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb250YWN0O1xyXG5cclxuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuY29uc3QgSG9tZSA9IChwcm9wczphbnkpPT4oXHJcbiAgICA8ZGl2PlxyXG4gICAgICAgIFdlbGNvbWUgVG8gUmVhY3QgU1NSIVxyXG4gICAgPC9kaXY+XHJcbik7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZTsiLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IFJvdXRlQ29uZmlnIH0gZnJvbSAncmVhY3Qtcm91dGVyLWNvbmZpZyc7XHJcbmltcG9ydCBIb21lIGZyb20gJy4uL3BhZ2VzL0hvbWUnO1xyXG5pbXBvcnQgQWJvdXQgZnJvbSAnLi4vcGFnZXMvQWJvdXQnO1xyXG5pbXBvcnQgQ29udGFjdCBmcm9tICcuLi9wYWdlcy9Db250YWN0JztcclxuXHJcbmNvbnN0IHJvdXRlczpSb3V0ZUNvbmZpZ1tdID0gW1xyXG4gICAge1xyXG4gICAgICAgIHBhdGg6ICcvaG9tZScsXHJcbiAgICAgICAgY29tcG9uZW50OiBIb21lXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHBhdGg6ICcvYWJvdXQnLFxyXG4gICAgICAgIGNvbXBvbmVudDogQWJvdXRcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgcGF0aDogJy9jb250YWN0JyxcclxuICAgICAgICBjb21wb25lbnQ6IENvbnRhY3RcclxuICAgIH1cclxuXVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJvdXRlcztcclxuIiwiLy8gc2hpbSBmb3IgdXNpbmcgcHJvY2VzcyBpbiBicm93c2VyXG52YXIgcHJvY2VzcyA9IG1vZHVsZS5leHBvcnRzID0ge307XG5cbi8vIGNhY2hlZCBmcm9tIHdoYXRldmVyIGdsb2JhbCBpcyBwcmVzZW50IHNvIHRoYXQgdGVzdCBydW5uZXJzIHRoYXQgc3R1YiBpdFxuLy8gZG9uJ3QgYnJlYWsgdGhpbmdzLiAgQnV0IHdlIG5lZWQgdG8gd3JhcCBpdCBpbiBhIHRyeSBjYXRjaCBpbiBjYXNlIGl0IGlzXG4vLyB3cmFwcGVkIGluIHN0cmljdCBtb2RlIGNvZGUgd2hpY2ggZG9lc24ndCBkZWZpbmUgYW55IGdsb2JhbHMuICBJdCdzIGluc2lkZSBhXG4vLyBmdW5jdGlvbiBiZWNhdXNlIHRyeS9jYXRjaGVzIGRlb3B0aW1pemUgaW4gY2VydGFpbiBlbmdpbmVzLlxuXG52YXIgY2FjaGVkU2V0VGltZW91dDtcbnZhciBjYWNoZWRDbGVhclRpbWVvdXQ7XG5cbmZ1bmN0aW9uIGRlZmF1bHRTZXRUaW1vdXQoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdzZXRUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG5mdW5jdGlvbiBkZWZhdWx0Q2xlYXJUaW1lb3V0ICgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2NsZWFyVGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuKGZ1bmN0aW9uICgpIHtcbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIHNldFRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIGNsZWFyVGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICB9XG59ICgpKVxuZnVuY3Rpb24gcnVuVGltZW91dChmdW4pIHtcbiAgICBpZiAoY2FjaGVkU2V0VGltZW91dCA9PT0gc2V0VGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgLy8gaWYgc2V0VGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZFNldFRpbWVvdXQgPT09IGRlZmF1bHRTZXRUaW1vdXQgfHwgIWNhY2hlZFNldFRpbWVvdXQpICYmIHNldFRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9IGNhdGNoKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0IHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKG51bGwsIGZ1biwgMCk7XG4gICAgICAgIH0gY2F0Y2goZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvclxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbCh0aGlzLCBmdW4sIDApO1xuICAgICAgICB9XG4gICAgfVxuXG5cbn1cbmZ1bmN0aW9uIHJ1bkNsZWFyVGltZW91dChtYXJrZXIpIHtcbiAgICBpZiAoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgLy8gaWYgY2xlYXJUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBkZWZhdWx0Q2xlYXJUaW1lb3V0IHx8ICFjYWNoZWRDbGVhclRpbWVvdXQpICYmIGNsZWFyVGltZW91dCkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfSBjYXRjaCAoZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgIHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwobnVsbCwgbWFya2VyKTtcbiAgICAgICAgfSBjYXRjaCAoZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvci5cbiAgICAgICAgICAgIC8vIFNvbWUgdmVyc2lvbnMgb2YgSS5FLiBoYXZlIGRpZmZlcmVudCBydWxlcyBmb3IgY2xlYXJUaW1lb3V0IHZzIHNldFRpbWVvdXRcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbCh0aGlzLCBtYXJrZXIpO1xuICAgICAgICB9XG4gICAgfVxuXG5cblxufVxudmFyIHF1ZXVlID0gW107XG52YXIgZHJhaW5pbmcgPSBmYWxzZTtcbnZhciBjdXJyZW50UXVldWU7XG52YXIgcXVldWVJbmRleCA9IC0xO1xuXG5mdW5jdGlvbiBjbGVhblVwTmV4dFRpY2soKSB7XG4gICAgaWYgKCFkcmFpbmluZyB8fCAhY3VycmVudFF1ZXVlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBpZiAoY3VycmVudFF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBxdWV1ZSA9IGN1cnJlbnRRdWV1ZS5jb25jYXQocXVldWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICB9XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBkcmFpblF1ZXVlKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBkcmFpblF1ZXVlKCkge1xuICAgIGlmIChkcmFpbmluZykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciB0aW1lb3V0ID0gcnVuVGltZW91dChjbGVhblVwTmV4dFRpY2spO1xuICAgIGRyYWluaW5nID0gdHJ1ZTtcblxuICAgIHZhciBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgd2hpbGUobGVuKSB7XG4gICAgICAgIGN1cnJlbnRRdWV1ZSA9IHF1ZXVlO1xuICAgICAgICBxdWV1ZSA9IFtdO1xuICAgICAgICB3aGlsZSAoKytxdWV1ZUluZGV4IDwgbGVuKSB7XG4gICAgICAgICAgICBpZiAoY3VycmVudFF1ZXVlKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudFF1ZXVlW3F1ZXVlSW5kZXhdLnJ1bigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICAgICAgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIH1cbiAgICBjdXJyZW50UXVldWUgPSBudWxsO1xuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgcnVuQ2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xufVxuXG5wcm9jZXNzLm5leHRUaWNrID0gZnVuY3Rpb24gKGZ1bikge1xuICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGggLSAxKTtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGFyZ3NbaSAtIDFdID0gYXJndW1lbnRzW2ldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHF1ZXVlLnB1c2gobmV3IEl0ZW0oZnVuLCBhcmdzKSk7XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCA9PT0gMSAmJiAhZHJhaW5pbmcpIHtcbiAgICAgICAgcnVuVGltZW91dChkcmFpblF1ZXVlKTtcbiAgICB9XG59O1xuXG4vLyB2OCBsaWtlcyBwcmVkaWN0aWJsZSBvYmplY3RzXG5mdW5jdGlvbiBJdGVtKGZ1biwgYXJyYXkpIHtcbiAgICB0aGlzLmZ1biA9IGZ1bjtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG59XG5JdGVtLnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5mdW4uYXBwbHkobnVsbCwgdGhpcy5hcnJheSk7XG59O1xucHJvY2Vzcy50aXRsZSA9ICdicm93c2VyJztcbnByb2Nlc3MuYnJvd3NlciA9IHRydWU7XG5wcm9jZXNzLmVudiA9IHt9O1xucHJvY2Vzcy5hcmd2ID0gW107XG5wcm9jZXNzLnZlcnNpb24gPSAnJzsgLy8gZW1wdHkgc3RyaW5nIHRvIGF2b2lkIHJlZ2V4cCBpc3N1ZXNcbnByb2Nlc3MudmVyc2lvbnMgPSB7fTtcblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbnByb2Nlc3Mub24gPSBub29wO1xucHJvY2Vzcy5hZGRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLm9uY2UgPSBub29wO1xucHJvY2Vzcy5vZmYgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUFsbExpc3RlbmVycyA9IG5vb3A7XG5wcm9jZXNzLmVtaXQgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kT25jZUxpc3RlbmVyID0gbm9vcDtcblxucHJvY2Vzcy5saXN0ZW5lcnMgPSBmdW5jdGlvbiAobmFtZSkgeyByZXR1cm4gW10gfVxuXG5wcm9jZXNzLmJpbmRpbmcgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5iaW5kaW5nIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5cbnByb2Nlc3MuY3dkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gJy8nIH07XG5wcm9jZXNzLmNoZGlyID0gZnVuY3Rpb24gKGRpcikge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5jaGRpciBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xucHJvY2Vzcy51bWFzayA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gMDsgfTtcbiIsImltcG9ydCB7IEVudGl0eVRhYmxlIH0gZnJvbSBcIi4uL3R5cGVzL1RhYmxlc1wiO1xyXG5pbXBvcnQgeyBrbmV4IH0gZnJvbSBcIi5cIjtcclxuaW1wb3J0IHsgYXN5bmNDb21wb3NlIH0gZnJvbSBcIi4uL3V0aWxzL2FzeW5jQ29tcG9zZVwiO1xyXG5cclxudHlwZSBHZXRCeUlkSGFuZGxlciA9IChhOiBhbnkpID0+ICgpID0+IFByb21pc2U8YW55PlxyXG5cclxuY29uc3QgZ2V0SWRzID0gKHRhYmxlTmFtZTogRW50aXR5VGFibGUpOiBQcm9taXNlPHsgaWQ6IHN0cmluZyB9W10+ID0+IGtuZXguc2VsZWN0KCdpZCcpLmZyb20odGFibGVOYW1lKTtcclxuXHJcbmNvbnN0IF9nZXRBbGwgPSAoZ2V0QnlJZEhhbmRsZXI6IEdldEJ5SWRIYW5kbGVyKSA9PlxyXG4gIChpZHM6IHsgaWQ6IHN0cmluZyB9W10pOiBQcm9taXNlPGFueVtdPltdID0+IGlkcy5tYXAobyA9PiBnZXRCeUlkSGFuZGxlcihvLmlkKSgpKVxyXG5cclxuY29uc3QgbWFwUHJvbWlzZXNUb1Jlc3VsdCA9IChwcm9taXNlczogUHJvbWlzZTxhbnlbXT5bXSk6IFByb21pc2U8YW55W10+ID0+IFByb21pc2UuYWxsKHByb21pc2VzKTtcclxuXHJcblxyXG5leHBvcnQgY29uc3QgZ2V0QWxsID0gKHRhYmxlOiBFbnRpdHlUYWJsZSwgY29uZmlndXJlZEdldEJ5SWRIYW5kbGVyOiBHZXRCeUlkSGFuZGxlcikgPT4gKCkgPT5cclxuICBhc3luY0NvbXBvc2UoXHJcbiAgICBtYXBQcm9taXNlc1RvUmVzdWx0LFxyXG4gICAgX2dldEFsbChjb25maWd1cmVkR2V0QnlJZEhhbmRsZXIpLFxyXG4gICAgZ2V0SWRzXHJcbiAgKShQcm9taXNlLnJlc29sdmUodGFibGUpKVxyXG5cclxuXHJcbiIsImltcG9ydCB7IE1hbnlUb01hbnlUYWJsZSwgRW50aXR5VGFibGUsIE9uZVRvTWFueVRhYmxlIH0gZnJvbSAnLi4vdHlwZXMvVGFibGVzJztcclxuaW1wb3J0IHsga25leCB9IGZyb20gJy4vaW5kZXgnO1xyXG5pbXBvcnQgeyBJUG9zdGdyZXNKc29uQnVpbGRPYmplY3QgfSBmcm9tICcuLi90eXBlcy9EQic7XHJcbmltcG9ydCB7IGNvbXBvc2UgfSBmcm9tICdyYW1kYSc7XHJcbmltcG9ydCB7IGFzeW5jQ29tcG9zZSB9IGZyb20gJy4uL3V0aWxzL2FzeW5jQ29tcG9zZSc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElNTUZpZWxkc0RhdGEgZXh0ZW5kcyBJRmllbGRzRGF0YSwgSVNob3dGaWVsZHMgeyB9O1xyXG5leHBvcnQgaW50ZXJmYWNlIElNTUZpZWxkc0RhdGFXaXRoRmllbGRzVHJhbnNmb3JtZWQgZXh0ZW5kcyBJRmllbGRzRGF0YSwgSVNob3dGaWVsZHNUcmFuc2Zvcm1lZCB7IH07XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElTaG93RmllbGRzIHtcclxuICBzaG93RmllbGRzOiBzdHJpbmdbXVxyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgSVNob3dGaWVsZHNUcmFuc2Zvcm1lZCB7XHJcbiAgc2hvd0ZpZWxkczogc3RyaW5nXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUZpZWxkc0RhdGEge1xyXG4gIHRhYmxlTmFtZTogRW50aXR5VGFibGUsXHJcbiAgZmllbGROYW1lSW5SZXNwb25zZTogc3RyaW5nLFxyXG4gIG1hbnlUb01hbnlUYWJsZU5hbWU6IE1hbnlUb01hbnlUYWJsZSB8IE9uZVRvTWFueVRhYmxlLFxyXG4gIGludGVyc2VjdEVudGl0eU9uOiBzdHJpbmcsXHJcbiAgd2hlcmU6IHN0cmluZ1xyXG59XHJcblxyXG5cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUZpZWxkV2l0aFF1ZXJ5IHtcclxuICBmaWVsZE5hbWU6IHN0cmluZyxcclxuICBxdWVyeTogc3RyaW5nXHJcbn1cclxuXHJcblxyXG5cclxuXHJcbmludGVyZmFjZSBJT25lVG9NYW55IHtcclxuICB0YWJsZU5hbWU6IEVudGl0eVRhYmxlLFxyXG4gIHNob3dGaWVsZHM6IHN0cmluZ1tdLFxyXG4gIGZpZWxkTmFtZUluUmVzcG9uc2U6IHN0cmluZyxcclxuICB3aGVyZTogc3RyaW5nXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRCeUlkUXVlcnk8VCwgQj4oXHJcbiAgdGFibGVOYW1lOiBULFxyXG4gIGZvcmVpZ25GaWVsZHM/OiBJTU1GaWVsZHNEYXRhW10gfCB1bmRlZmluZWQsXHJcbikge1xyXG4gIHJldHVybiBhc3luYyAoaWQ6IHN0cmluZykgPT5cclxuICAgIGF3YWl0IGFzeW5jQ29tcG9zZShcclxuICAgICAgbWFwREJSZXNwb25zZTxCPihmb3JlaWduRmllbGRzKSxcclxuXHJcbiAgICAgIChyZXM6IElQb3N0Z3Jlc0pzb25CdWlsZE9iamVjdCkgPT4gcmVzLnJvd3NbMF0uanNvbl9idWlsZF9vYmplY3QsXHJcblxyXG4gICAgICBmZXRjaEVudGl0eVdpdGhNYW55VG9NYW55RmllbGRzPFQ+KHRhYmxlTmFtZSwgaWQpLFxyXG5cclxuICAgICAgZ2V0TU1GaWVsZHNRdWVyeUZyb21cclxuXHJcbiAgICApKFByb21pc2UucmVzb2x2ZShmb3JlaWduRmllbGRzKSlcclxuXHJcbn1cclxuXHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIG1hcERCUmVzcG9uc2U8VD4obWFueVRvTWFueUZpZWxkczogSU1NRmllbGRzRGF0YVtdIHwgdW5kZWZpbmVkKXtcclxuICByZXR1cm4gKHJlc3VsdDogYW55KSA9PlxyXG4gICAgT2JqZWN0LmtleXMocmVzdWx0KVxyXG4gICAgICAucmVkdWNlKChhY2M6IGFueSwgY3Vycjogc3RyaW5nLCBpbmRleDogbnVtYmVyKTogVCA9PlxyXG4gICAgICAgIGluZGV4ID09PSAwXHJcbiAgICAgICAgICA/IHsgLi4ucmVzdWx0W2N1cnJdIH1cclxuICAgICAgICAgIDoge1xyXG4gICAgICAgICAgICAuLi5hY2MsIFtcclxuICAgICAgICAgICAgICBtYW55VG9NYW55RmllbGRzICE9PSB1bmRlZmluZWRcclxuICAgICAgICAgICAgICAgID8gbWFueVRvTWFueUZpZWxkc1tpbmRleCAtIDFdLmZpZWxkTmFtZUluUmVzcG9uc2UgOiBjdXJyXHJcbiAgICAgICAgICAgIF06IHJlc3VsdFtjdXJyXVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICwge30pXHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBmZXRjaEVudGl0eVdpdGhNYW55VG9NYW55RmllbGRzPFQ+KHRhYmxlTmFtZTogVCwgaWQ6IHN0cmluZykge1xyXG4gIHJldHVybiAoZ2V0TU1GaWVsZEJ5SWQ6ICh3OnN0cmluZyk9PklGaWVsZFdpdGhRdWVyeSkgPT5cclxuICAgIGtuZXhcclxuICAgICAgLnJhdyhcclxuICAgICAgICBgJyR7dGFibGVOYW1lfScsICggU0VMRUNUIHRvX2pzb24ocm93KVxyXG4gICAgICAgRlJPTSAoIFNFTEVDVCAqIEZST00gJHt0YWJsZU5hbWV9IFdIRVJFIGlkID0gOmlkICkgXHJcbiAgICAgICByb3cgXHJcbiAgICAgICApLFxyXG4gICAke2dldE1NRmllbGRCeUlkKGlkKX0gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuIGAsXHJcbiAgICAgICAgeyBpZCB9XHJcbiAgICAgIClcclxuICAgICAgLndyYXAoJ1NFTEVDVCBqc29uX2J1aWxkX29iamVjdCgnLCAnKScpO1xyXG59XHJcblxyXG5cclxuY29uc3QgbWFueVRvTWFueVF1ZXJ5OiBJTU1RdWVyeUZ1bmN0aW9uID0gKGZpZWxkRGF0YSkgPT4gKHdoZXJlKSA9PiAoe1xyXG4gIGZpZWxkTmFtZTogZmllbGREYXRhLnRhYmxlTmFtZSxcclxuICBxdWVyeTogYFxyXG4gICggU0VMRUNUIGpzb25fYWdnKHJlc3VsdCkgXHJcbiAgICBGUk9NICggU0VMRUNUICR7ZmllbGREYXRhLnNob3dGaWVsZHN9IEZST00gJHtmaWVsZERhdGEudGFibGVOYW1lfSBcclxuICAgIElOTkVSIEpPSU4gJHsgZmllbGREYXRhLm1hbnlUb01hbnlUYWJsZU5hbWV9IE9OICggJHtmaWVsZERhdGEudGFibGVOYW1lfS5pZCA9ICR7ZmllbGREYXRhLm1hbnlUb01hbnlUYWJsZU5hbWV9LiR7ZmllbGREYXRhLmludGVyc2VjdEVudGl0eU9ufSlcclxuICAgIFdIRVJFICR7ZmllbGREYXRhLm1hbnlUb01hbnlUYWJsZU5hbWV9LiR7ZmllbGREYXRhLndoZXJlfSA9ICcke3doZXJlfScpIFxyXG4gICAgcmVzdWx0IFxyXG4gIClcclxuYH0pXHJcbnR5cGUgSUNvbmNhdEZpZWxkc0Z1bmN0aW9uID0gKGZpZWxkczogSU1NRmllbGRzRGF0YSkgPT4gSU1NRmllbGRzRGF0YVdpdGhGaWVsZHNUcmFuc2Zvcm1lZDtcclxudHlwZSBJTU1RdWVyeUZ1bmN0aW9uID0gKGY6IElNTUZpZWxkc0RhdGFXaXRoRmllbGRzVHJhbnNmb3JtZWQpID0+ICh3OiBzdHJpbmcpID0+IElGaWVsZFdpdGhRdWVyeVxyXG5cclxuY29uc3QgY29uY2F0RmllbGRzV2l0aFRhYmxlTmFtZTogSUNvbmNhdEZpZWxkc0Z1bmN0aW9uID0gKGZpZWxkKSA9PiAoe1xyXG4gIC4uLmZpZWxkLFxyXG4gIHNob3dGaWVsZHM6IGZpZWxkLnNob3dGaWVsZHNcclxuICAgIC5yZWR1Y2UoKGFjYywgY3VyciwgaW5kZXgpID0+XHJcbiAgICAgIGluZGV4IDw9IDBcclxuICAgICAgICA/IGAke2ZpZWxkLnRhYmxlTmFtZX0uJHtjdXJyfWBcclxuICAgICAgICA6IGFjYyArIGAsICR7ZmllbGQudGFibGVOYW1lfS4ke2N1cnJ9YFxyXG5cclxuICAgICAgLCBcIlwiKVxyXG59KVxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBidWlsZE1NRlF1ZXJ5OiAoKGY6IElNTUZpZWxkc0RhdGEpID0+ICh3OiBzdHJpbmcpID0+IElGaWVsZFdpdGhRdWVyeSkgPVxyXG4gIGNvbXBvc2U8SU1NRmllbGRzRGF0YSwgSU1NRmllbGRzRGF0YVdpdGhGaWVsZHNUcmFuc2Zvcm1lZCwgKHc6IHN0cmluZykgPT4gSUZpZWxkV2l0aFF1ZXJ5PihcclxuICAgIG1hbnlUb01hbnlRdWVyeSxcclxuICAgIGNvbmNhdEZpZWxkc1dpdGhUYWJsZU5hbWVcclxuICApO1xyXG5cclxuY29uc3QgZ2V0TU1GaWVsZHNRdWVyeUZyb20gPSAoZmllbGRzOiBJTU1GaWVsZHNEYXRhW10gfCB1bmRlZmluZWQpID0+IChpZDogc3RyaW5nKSA9PlxyXG4gIGZpZWxkcyAhPT0gdW5kZWZpbmVkXHJcbiAgICA/IGZpZWxkc1xyXG4gICAgICAubWFwKGJ1aWxkTU1GUXVlcnkpXHJcbiAgICAgIC5yZWR1Y2UoKGFjYzogc3RyaW5nLCBjdXJyOiAoKGlkOiBzdHJpbmcpID0+IElGaWVsZFdpdGhRdWVyeSkpID0+XHJcbiAgICAgICAgYWNjICE9PSBcIlwiXHJcbiAgICAgICAgICA/IChgJHthY2N9LCAnJHtjdXJyKGlkKS5maWVsZE5hbWV9JywgJHtjdXJyKGlkKS5xdWVyeX1gKVxyXG4gICAgICAgICAgOiAoYCcke2N1cnIoaWQpLmZpZWxkTmFtZX0nLCAke2N1cnIoaWQpLnF1ZXJ5fWApXHJcbiAgICAgICAgLCBcIlwiKVxyXG4gICAgOiBcIlwiOyIsImltcG9ydCBLbmV4IGZyb20gJ2tuZXgnO1xyXG5cclxuZXhwb3J0IGNvbnN0IGtuZXg6IEtuZXggPSByZXF1aXJlKCdrbmV4JykocmVxdWlyZSgnLi4va25leGZpbGUnKS5kZXZlbG9wbWVudCk7IiwiaW1wb3J0IHsgYXN5bmNNZW1vaXplIGFzIE1lbSB9IGZyb20gJy4uL3V0aWxzL21lbW9pemUnO1xyXG5pbXBvcnQgeyBFbnRpdHlUYWJsZSwgTWFueVRvTWFueVRhYmxlLCBUYWJsZSB9IGZyb20gJy4uL3R5cGVzL1RhYmxlcyc7XHJcbmltcG9ydCB7IElGaWxtUmVzcG9uc2UgfSBmcm9tICcuLi90eXBlcy9pbnRlcmZhY2VzL0ZpbG0nO1xyXG5pbXBvcnQgeyBnZXRCeUlkUXVlcnkgfSBmcm9tICcuLi9EQi9nZXRCeUlkJztcclxuaW1wb3J0IHsgVmVoaWNsZUZpZWxkc05hbWVzIH0gZnJvbSAnLi4vdHlwZXMvaW50ZXJmYWNlcy9WZWhpY2xlJztcclxuaW1wb3J0IHsgVmVoaWNsZXNJbkZpbG1zRmllbGRzTmFtZXMgfSBmcm9tICcuLi90eXBlcy9pbnRlcmZhY2VzL1ZlaGljbGVzSW5GaWxtcyc7XHJcbmltcG9ydCB7IElQZW9wbGVFbnRpdHlGaWVsZHMgfSBmcm9tICcuLi90eXBlcy9pbnRlcmZhY2VzL1Blb3BsZSc7XHJcbmltcG9ydCB7IElBY3RvcnNGaWVsZHNOYW1lcyB9IGZyb20gJy4uL3R5cGVzL2ludGVyZmFjZXMvQWN0b3JzJztcclxuaW1wb3J0IHsgZ2V0QWxsIH0gZnJvbSAnLi4vREIvZ2V0QWxsJztcclxuZXhwb3J0IGRlZmF1bHQoKCkgPT4ge1xyXG4gIGNvbnN0IF9nZXRCeUlkID0gTWVtKGdldEJ5SWRRdWVyeTxFbnRpdHlUYWJsZS5GaWxtLCBJRmlsbVJlc3BvbnNlPihcclxuICAgIEVudGl0eVRhYmxlLkZpbG0sXHJcbiAgICBbXHJcbiAgICAgIHtcclxuICAgICAgICB0YWJsZU5hbWU6IEVudGl0eVRhYmxlLlZlaGljbGUsXHJcbiAgICAgICAgc2hvd0ZpZWxkczogW1ZlaGljbGVGaWVsZHNOYW1lcy5JZCwgVmVoaWNsZUZpZWxkc05hbWVzLk5hbWVdLFxyXG4gICAgICAgIGZpZWxkTmFtZUluUmVzcG9uc2U6ICd2ZWhpY2xlcycsXHJcbiAgICAgICAgbWFueVRvTWFueVRhYmxlTmFtZTogTWFueVRvTWFueVRhYmxlLlZlaGljbGVzSW5GaWxtcyxcclxuICAgICAgICBpbnRlcnNlY3RFbnRpdHlPbjogVmVoaWNsZXNJbkZpbG1zRmllbGRzTmFtZXMuVmVoaWNsZUlkLFxyXG4gICAgICAgIHdoZXJlOiBWZWhpY2xlc0luRmlsbXNGaWVsZHNOYW1lcy5WZWhpY2xlSWRcclxuXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICB0YWJsZU5hbWU6IEVudGl0eVRhYmxlLlBlb3BsZSxcclxuICAgICAgICBzaG93RmllbGRzOiBbSVBlb3BsZUVudGl0eUZpZWxkcy5JZCwgSVBlb3BsZUVudGl0eUZpZWxkcy5OYW1lXSxcclxuICAgICAgICBmaWVsZE5hbWVJblJlc3BvbnNlOiAnYWN0b3JzJyxcclxuICAgICAgICBtYW55VG9NYW55VGFibGVOYW1lOiBNYW55VG9NYW55VGFibGUuQWN0b3JzLFxyXG4gICAgICAgIGludGVyc2VjdEVudGl0eU9uOiBJQWN0b3JzRmllbGRzTmFtZXMuUGVvcGxlSWQsXHJcbiAgICAgICAgd2hlcmU6IElBY3RvcnNGaWVsZHNOYW1lcy5GaWxtSWRcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHRhYmxlTmFtZTogRW50aXR5VGFibGUuU3RhcnNoaXAsXHJcbiAgICAgICAgc2hvd0ZpZWxkczogWydpZCcsICduYW1lJ10sXHJcbiAgICAgICAgZmllbGROYW1lSW5SZXNwb25zZTogJ3ZlaGljbGVzJyxcclxuICAgICAgICBtYW55VG9NYW55VGFibGVOYW1lOiBNYW55VG9NYW55VGFibGUuU3RhcnNoaXBzSW5GaWxtcyxcclxuICAgICAgICBpbnRlcnNlY3RFbnRpdHlPbjogJ3N0YXJzaGlwX2lkJyxcclxuICAgICAgICB3aGVyZTogJ2ZpbG1faWQnXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICB0YWJsZU5hbWU6IEVudGl0eVRhYmxlLlBsYW5ldCxcclxuICAgICAgICBzaG93RmllbGRzOiBbJ2lkJywgJ25hbWUnXSxcclxuICAgICAgICBmaWVsZE5hbWVJblJlc3BvbnNlOiAncGxhbmV0cycsXHJcbiAgICAgICAgbWFueVRvTWFueVRhYmxlTmFtZTogTWFueVRvTWFueVRhYmxlLlBsYW5ldHNJbkZpbG1zLFxyXG4gICAgICAgIGludGVyc2VjdEVudGl0eU9uOiAncGxhbmV0X2lkJyxcclxuICAgICAgICB3aGVyZTogJ2ZpbG1faWQnXHJcbiAgICAgIH1cclxuICAgIF0sXHJcbiAgKSlcclxuICByZXR1cm4ge1xyXG4gICAgZ2V0QnlJZDogX2dldEJ5SWQsXHJcbiAgICBnZXRBbGw6IGdldEFsbChFbnRpdHlUYWJsZS5GaWxtLCBfZ2V0QnlJZClcclxuICB9XHJcbn0pKClcclxuXHJcblxyXG4iLCJpbXBvcnQgeyBhc3luY01lbW9pemUgYXMgTWVtIH0gZnJvbSBcIi4uL3V0aWxzL21lbW9pemVcIlxyXG5pbXBvcnQgeyBnZXRCeUlkUXVlcnkgfSBmcm9tIFwiLi4vREIvZ2V0QnlJZFwiXHJcbmltcG9ydCB7IEVudGl0eVRhYmxlLCBNYW55VG9NYW55VGFibGUsIE9uZVRvTWFueVRhYmxlIH0gZnJvbSBcIi4uL3R5cGVzL1RhYmxlc1wiXHJcbmltcG9ydCB7IElGaWxtUmVzcG9uc2UsIEZpbG1GaWVsZHNOYW1lcyB9IGZyb20gXCIuLi90eXBlcy9pbnRlcmZhY2VzL0ZpbG1cIlxyXG5pbXBvcnQgeyBJQWN0b3JzRmllbGRzTmFtZXMgfSBmcm9tIFwiLi4vdHlwZXMvaW50ZXJmYWNlcy9BY3RvcnNcIlxyXG5pbXBvcnQgeyBJU3BlY2llRW50aXR5RmllbGRzIH0gZnJvbSBcIi4uL3R5cGVzL2ludGVyZmFjZXMvU3BlY2llXCJcclxuaW1wb3J0IHsgUmFjZUZpZWxkcyB9IGZyb20gXCIuLi90eXBlcy9pbnRlcmZhY2VzL1JhY2VzXCJcclxuaW1wb3J0IHsgVmVoaWNsZUZpZWxkc05hbWVzIH0gZnJvbSBcIi4uL3R5cGVzL2ludGVyZmFjZXMvVmVoaWNsZVwiXHJcbmltcG9ydCB7IFBpbG90RmllbGROYW1lcyB9IGZyb20gXCIuLi90eXBlcy9pbnRlcmZhY2VzL1BpbG90XCJcclxuaW1wb3J0IHsgU3RhcnNoaXBFbnRpdHlGaWVsZHMgfSBmcm9tIFwiLi4vdHlwZXMvaW50ZXJmYWNlcy9TdGFyc2hpcFwiXHJcbmltcG9ydCB7IFN0YXJzaGlwUGlsb3RGaWVsZHNOYW1lcyB9IGZyb20gXCIuLi90eXBlcy9pbnRlcmZhY2VzL1N0YXJzaGlwUGlsb3RcIlxyXG5pbXBvcnQgeyBnZXRBbGwgfSBmcm9tIFwiLi4vREIvZ2V0QWxsXCJcclxuXHJcbmV4cG9ydCBkZWZhdWx0KCgpID0+IHtcclxuICBjb25zdCBfZ2V0QnlJZCA9IE1lbShnZXRCeUlkUXVlcnk8RW50aXR5VGFibGUuUGVvcGxlLCBJRmlsbVJlc3BvbnNlPihFbnRpdHlUYWJsZS5QZW9wbGUsXHJcbiAgICBbXHJcbiAgICAgIHtcclxuICAgICAgICB0YWJsZU5hbWU6IEVudGl0eVRhYmxlLkZpbG0sXHJcbiAgICAgICAgc2hvd0ZpZWxkczogW0ZpbG1GaWVsZHNOYW1lcy5JZCwgRmlsbUZpZWxkc05hbWVzLlRpdGxlXSxcclxuICAgICAgICBmaWVsZE5hbWVJblJlc3BvbnNlOiAnZmlsbXMnLFxyXG4gICAgICAgIG1hbnlUb01hbnlUYWJsZU5hbWU6IE1hbnlUb01hbnlUYWJsZS5BY3RvcnMsXHJcbiAgICAgICAgaW50ZXJzZWN0RW50aXR5T246IElBY3RvcnNGaWVsZHNOYW1lcy5GaWxtSWQsXHJcbiAgICAgICAgd2hlcmU6IElBY3RvcnNGaWVsZHNOYW1lcy5QZW9wbGVJZFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgdGFibGVOYW1lOiBFbnRpdHlUYWJsZS5TcGVjaWUsXHJcbiAgICAgICAgc2hvd0ZpZWxkczogW0lTcGVjaWVFbnRpdHlGaWVsZHMuSWQsIElTcGVjaWVFbnRpdHlGaWVsZHMuTmFtZV0sXHJcbiAgICAgICAgZmllbGROYW1lSW5SZXNwb25zZTogJ3NwZWNpZXMnLFxyXG4gICAgICAgIG1hbnlUb01hbnlUYWJsZU5hbWU6IE9uZVRvTWFueVRhYmxlLlJhY2UsXHJcbiAgICAgICAgaW50ZXJzZWN0RW50aXR5T246IFJhY2VGaWVsZHMuU3BlY2llSWQsXHJcbiAgICAgICAgd2hlcmU6IFJhY2VGaWVsZHMuUGVvcGxlSWRcclxuXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICB0YWJsZU5hbWU6IEVudGl0eVRhYmxlLlZlaGljbGUsXHJcbiAgICAgICAgc2hvd0ZpZWxkczogW1ZlaGljbGVGaWVsZHNOYW1lcy5JZCwgVmVoaWNsZUZpZWxkc05hbWVzLk5hbWVdLFxyXG4gICAgICAgIGZpZWxkTmFtZUluUmVzcG9uc2U6ICd2ZWhpY2xlcycsXHJcbiAgICAgICAgbWFueVRvTWFueVRhYmxlTmFtZTogTWFueVRvTWFueVRhYmxlLlBpbG90LFxyXG4gICAgICAgIGludGVyc2VjdEVudGl0eU9uOiBQaWxvdEZpZWxkTmFtZXMuVmVoaWNsZUlkLFxyXG4gICAgICAgIHdoZXJlOiBQaWxvdEZpZWxkTmFtZXMuUGVvcGxlSWRcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHRhYmxlTmFtZTogRW50aXR5VGFibGUuU3RhcnNoaXAsXHJcbiAgICAgICAgc2hvd0ZpZWxkczogW1N0YXJzaGlwRW50aXR5RmllbGRzLklkLCBTdGFyc2hpcEVudGl0eUZpZWxkcy5OYW1lXSxcclxuICAgICAgICBmaWVsZE5hbWVJblJlc3BvbnNlOiAnc3RhcnNoaXBzJyxcclxuICAgICAgICBtYW55VG9NYW55VGFibGVOYW1lOiBNYW55VG9NYW55VGFibGUuU3RhcnNoaXBQaWxvdCxcclxuICAgICAgICBpbnRlcnNlY3RFbnRpdHlPbjogU3RhcnNoaXBQaWxvdEZpZWxkc05hbWVzLlN0YXJzaGlwSWQsXHJcbiAgICAgICAgd2hlcmU6IFN0YXJzaGlwUGlsb3RGaWVsZHNOYW1lcy5QZW9wbGVJZFxyXG4gICAgICB9XHJcbiAgICBdKSlcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIGdldEJ5SWQ6IF9nZXRCeUlkLFxyXG4gICAgZ2V0QWxsOiBnZXRBbGwoRW50aXR5VGFibGUuUGVvcGxlLCBfZ2V0QnlJZClcclxuICB9XHJcbn0pKCkiLCJpbXBvcnQgeyBJUGxhbmV0UmVzcG9uc2UgfSBmcm9tIFwiLi4vdHlwZXMvaW50ZXJmYWNlcy9QbGFuZXRcIjtcclxuaW1wb3J0IHsgYXN5bmNNZW1vaXplIGFzIE1lbX0gZnJvbSAnLi4vdXRpbHMvbWVtb2l6ZSc7XHJcbmltcG9ydCB7IGdldEJ5SWRRdWVyeSB9IGZyb20gXCIuLi9EQi9nZXRCeUlkXCI7XHJcbmltcG9ydCB7IEVudGl0eVRhYmxlLCBUYWJsZSwgTWFueVRvTWFueVRhYmxlIH0gZnJvbSBcIi4uL3R5cGVzL1RhYmxlc1wiO1xyXG5pbXBvcnQgeyBnZXRBbGwgfSBmcm9tIFwiLi4vREIvZ2V0QWxsXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCgoKT0+e1xyXG4gIGNvbnN0IF9nZXRCeUlkID0gTWVtKGdldEJ5SWRRdWVyeTxFbnRpdHlUYWJsZS5QbGFuZXQsIElQbGFuZXRSZXNwb25zZT4oXHJcbiAgICBFbnRpdHlUYWJsZS5QbGFuZXQsXHJcbiAgICBbXHJcbiAgICAgIHtcclxuICAgICAgICB0YWJsZU5hbWU6IEVudGl0eVRhYmxlLlBlb3BsZSxcclxuICAgICAgICBzaG93RmllbGRzOiBbJ2lkJywgJ25hbWUnXSxcclxuICAgICAgICBmaWVsZE5hbWVJblJlc3BvbnNlOiAncmVzaWRlbnRzJyxcclxuICAgICAgICBtYW55VG9NYW55VGFibGVOYW1lOiBNYW55VG9NYW55VGFibGUuUmVzaWRlbnQsXHJcbiAgICAgICAgaW50ZXJzZWN0RW50aXR5T246ICdwZW9wbGVfaWQnLFxyXG4gICAgICAgIHdoZXJlOiAncGxhbmV0X2lkJ1xyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgdGFibGVOYW1lOiBFbnRpdHlUYWJsZS5GaWxtLFxyXG4gICAgICAgIHNob3dGaWVsZHM6IFsnaWQnLCAndGl0bGUnXSxcclxuICAgICAgICBmaWVsZE5hbWVJblJlc3BvbnNlOiAnZmlsbXMnLFxyXG4gICAgICAgIG1hbnlUb01hbnlUYWJsZU5hbWU6IE1hbnlUb01hbnlUYWJsZS5QbGFuZXRzSW5GaWxtcyxcclxuICAgICAgICBpbnRlcnNlY3RFbnRpdHlPbjogJ2ZpbG1faWQnLFxyXG4gICAgICAgIHdoZXJlOiAncGxhbmV0X2lkJ1xyXG4gICAgICB9XHJcbiAgICBdXHJcbiAgKSlcclxuICByZXR1cm57XHJcbiAgICBnZXRCeUlkOiBfZ2V0QnlJZCxcclxuICAgIGdldEFsbDogZ2V0QWxsKEVudGl0eVRhYmxlLlBsYW5ldCwgX2dldEJ5SWQpXHJcbiAgfVxyXG59KSgpXHJcblxyXG4iLCJpbXBvcnQgeyBnZXRCeUlkUXVlcnkgfSBmcm9tIFwiLi4vREIvZ2V0QnlJZFwiO1xyXG5pbXBvcnQgeyBhc3luY01lbW9pemUgYXMgTWVtIH0gZnJvbSBcIi4uL3V0aWxzL21lbW9pemVcIjtcclxuaW1wb3J0IHsgSVNwZWNpZVJlc3BvbnNlIH0gZnJvbSBcIi4uL3R5cGVzL2ludGVyZmFjZXMvU3BlY2llXCI7XHJcbmltcG9ydCB7IEVudGl0eVRhYmxlLCBNYW55VG9NYW55VGFibGUsIE9uZVRvTWFueVRhYmxlIH0gZnJvbSBcIi4uL3R5cGVzL1RhYmxlc1wiO1xyXG5pbXBvcnQgeyBJUGVvcGxlRW50aXR5RmllbGRzIH0gZnJvbSBcIi4uL3R5cGVzL2ludGVyZmFjZXMvUGVvcGxlXCI7XHJcbmltcG9ydCB7IFNwZWNpZXNJbkZpbG1zRmllbGRzTmFtZSB9IGZyb20gJy4uL3R5cGVzL2ludGVyZmFjZXMvU3BlY2llc0luRmlsbXMnO1xyXG5pbXBvcnQgeyBSYWNlRmllbGRzIH0gZnJvbSBcIi4uL3R5cGVzL2ludGVyZmFjZXMvUmFjZXNcIjtcclxuaW1wb3J0IHsgRmlsbUZpZWxkc05hbWVzIH0gZnJvbSBcIi4uL3R5cGVzL2ludGVyZmFjZXMvRmlsbVwiO1xyXG5pbXBvcnQgeyBnZXRBbGwgfSBmcm9tIFwiLi4vREIvZ2V0QWxsXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCAoKCkgPT4ge1xyXG4gIGNvbnN0IF9nZXRCeUlkID0gTWVtKGdldEJ5SWRRdWVyeTxFbnRpdHlUYWJsZS5TcGVjaWUsIElTcGVjaWVSZXNwb25zZT4oXHJcbiAgICBFbnRpdHlUYWJsZS5TcGVjaWUsIFtcclxuICAgIHtcclxuICAgICAgdGFibGVOYW1lOiBFbnRpdHlUYWJsZS5GaWxtLFxyXG4gICAgICBzaG93RmllbGRzOiBbRmlsbUZpZWxkc05hbWVzLklkLCBGaWxtRmllbGRzTmFtZXMuVGl0bGVdLFxyXG4gICAgICBmaWVsZE5hbWVJblJlc3BvbnNlOiAnZmlsbXMnLFxyXG4gICAgICBtYW55VG9NYW55VGFibGVOYW1lOiBNYW55VG9NYW55VGFibGUuU3BlY2llc0luRmlsbXMsXHJcbiAgICAgIGludGVyc2VjdEVudGl0eU9uOiBTcGVjaWVzSW5GaWxtc0ZpZWxkc05hbWUuRmlsbUlkLFxyXG4gICAgICB3aGVyZTogU3BlY2llc0luRmlsbXNGaWVsZHNOYW1lLlNwZWNpZUlkXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICB0YWJsZU5hbWU6IEVudGl0eVRhYmxlLlBlb3BsZSxcclxuICAgICAgc2hvd0ZpZWxkczogW0lQZW9wbGVFbnRpdHlGaWVsZHMuSWQsIElQZW9wbGVFbnRpdHlGaWVsZHMuTmFtZV0sXHJcbiAgICAgIGZpZWxkTmFtZUluUmVzcG9uc2U6ICdwZW9wbGUnLFxyXG4gICAgICBtYW55VG9NYW55VGFibGVOYW1lOiBPbmVUb01hbnlUYWJsZS5SYWNlLFxyXG4gICAgICBpbnRlcnNlY3RFbnRpdHlPbjogUmFjZUZpZWxkcy5QZW9wbGVJZCxcclxuICAgICAgd2hlcmU6IFJhY2VGaWVsZHMuU3BlY2llSWRcclxuICAgIH1cclxuXHJcbiAgXSkpXHJcbiAgcmV0dXJuIHtcclxuICAgIGdldEJ5SWQ6IF9nZXRCeUlkLFxyXG4gICAgZ2V0QWxsOiBnZXRBbGwoRW50aXR5VGFibGUuU3BlY2llLCBfZ2V0QnlJZClcclxuICB9XHJcbn0pKCkiLCJpbXBvcnQgeyBhc3luY01lbW9pemUgYXMgTWVtIH0gZnJvbSBcIi4uL3V0aWxzL21lbW9pemVcIlxyXG5pbXBvcnQgeyBnZXRCeUlkUXVlcnkgfSBmcm9tIFwiLi4vREIvZ2V0QnlJZFwiXHJcbmltcG9ydCB7IEVudGl0eVRhYmxlLCBNYW55VG9NYW55VGFibGUgfSBmcm9tIFwiLi4vdHlwZXMvVGFibGVzXCJcclxuaW1wb3J0IHsgSVN0YXJzaGlwUmVzcG9uc2UgfSBmcm9tIFwiLi4vdHlwZXMvaW50ZXJmYWNlcy9TdGFyc2hpcFwiXHJcbmltcG9ydCB7IEZpbG1GaWVsZHNOYW1lcyB9IGZyb20gXCIuLi90eXBlcy9pbnRlcmZhY2VzL0ZpbG1cIlxyXG5pbXBvcnQgeyBTdGFyc2hpcHNJbkZpbG1zRmllbGRzIH0gZnJvbSBcIi4uL3R5cGVzL2ludGVyZmFjZXMvU3RhcnNoaXBzSW5GaWxtc1wiXHJcbmltcG9ydCB7IElQZW9wbGVFbnRpdHlGaWVsZHMgfSBmcm9tIFwiLi4vdHlwZXMvaW50ZXJmYWNlcy9QZW9wbGVcIlxyXG5pbXBvcnQgeyBnZXRBbGwgfSBmcm9tIFwiLi4vREIvZ2V0QWxsXCJcclxuaW1wb3J0IHsgU3RhcnNoaXBQaWxvdEZpZWxkc05hbWVzIH0gZnJvbSBcIi4uL3R5cGVzL2ludGVyZmFjZXMvU3RhcnNoaXBQaWxvdFwiXHJcblxyXG5leHBvcnQgZGVmYXVsdCgoKSA9PiB7XHJcbiAgY29uc3QgX2dldEJ5SWQgPSBNZW0oZ2V0QnlJZFF1ZXJ5PEVudGl0eVRhYmxlLlN0YXJzaGlwLCBJU3RhcnNoaXBSZXNwb25zZT4oXHJcbiAgICBFbnRpdHlUYWJsZS5TdGFyc2hpcCxcclxuICAgIFtcclxuICAgICAge1xyXG4gICAgICAgIHRhYmxlTmFtZTogRW50aXR5VGFibGUuRmlsbSxcclxuICAgICAgICBzaG93RmllbGRzOiBbRmlsbUZpZWxkc05hbWVzLklkLCBGaWxtRmllbGRzTmFtZXMuVGl0bGVdLFxyXG4gICAgICAgIGZpZWxkTmFtZUluUmVzcG9uc2U6ICdmaWxtcycsXHJcbiAgICAgICAgbWFueVRvTWFueVRhYmxlTmFtZTogTWFueVRvTWFueVRhYmxlLlN0YXJzaGlwc0luRmlsbXMsXHJcbiAgICAgICAgaW50ZXJzZWN0RW50aXR5T246IFN0YXJzaGlwc0luRmlsbXNGaWVsZHMuRmlsbUlkLFxyXG4gICAgICAgIHdoZXJlOiBTdGFyc2hpcHNJbkZpbG1zRmllbGRzLlN0YXJzaGlwSWRcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHRhYmxlTmFtZTogRW50aXR5VGFibGUuUGVvcGxlLFxyXG4gICAgICAgIHNob3dGaWVsZHM6IFtJUGVvcGxlRW50aXR5RmllbGRzLklkLCBJUGVvcGxlRW50aXR5RmllbGRzLk5hbWVdLFxyXG4gICAgICAgIGZpZWxkTmFtZUluUmVzcG9uc2U6ICdwaWxvdHMnLFxyXG4gICAgICAgIG1hbnlUb01hbnlUYWJsZU5hbWU6IE1hbnlUb01hbnlUYWJsZS5TdGFyc2hpcFBpbG90LFxyXG4gICAgICAgIGludGVyc2VjdEVudGl0eU9uOiBTdGFyc2hpcFBpbG90RmllbGRzTmFtZXMuUGVvcGxlSWQsXHJcbiAgICAgICAgd2hlcmU6IFN0YXJzaGlwUGlsb3RGaWVsZHNOYW1lcy5TdGFyc2hpcElkXHJcbiAgICAgIH1cclxuXHJcbiAgICBdXHJcbiAgKSlcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIGdldEJ5SWQ6IF9nZXRCeUlkLFxyXG4gICAgZ2V0QWxsOiBnZXRBbGwoRW50aXR5VGFibGUuU3RhcnNoaXAsIF9nZXRCeUlkKVxyXG4gIH1cclxufSkoKSIsImltcG9ydCB7IGFzeW5jTWVtb2l6ZSBhcyBNZW0gfSBmcm9tIFwiLi4vdXRpbHMvbWVtb2l6ZVwiXHJcbmltcG9ydCB7IGdldEJ5SWRRdWVyeSB9IGZyb20gXCIuLi9EQi9nZXRCeUlkXCJcclxuaW1wb3J0IHsgSVZlaGljbGVFbnRpdHksIElWZWhpY2xlUmVzcG9uc2UsIFZlaGljbGVGaWVsZHNOYW1lcyB9IGZyb20gXCIuLi90eXBlcy9pbnRlcmZhY2VzL1ZlaGljbGVcIlxyXG5pbXBvcnQgeyBFbnRpdHlUYWJsZSwgTWFueVRvTWFueVRhYmxlIH0gZnJvbSBcIi4uL3R5cGVzL1RhYmxlc1wiXHJcbmltcG9ydCB7IElQZW9wbGVFbnRpdHlGaWVsZHMgfSBmcm9tIFwiLi4vdHlwZXMvaW50ZXJmYWNlcy9QZW9wbGVcIlxyXG5pbXBvcnQgeyBQaWxvdEZpZWxkTmFtZXMgfSBmcm9tIFwiLi4vdHlwZXMvaW50ZXJmYWNlcy9QaWxvdFwiXHJcbmltcG9ydCB7IEZpbG1GaWVsZHNOYW1lcyB9IGZyb20gXCIuLi90eXBlcy9pbnRlcmZhY2VzL0ZpbG1cIlxyXG5pbXBvcnQgeyBWZWhpY2xlc0luRmlsbXNGaWVsZHNOYW1lcyB9IGZyb20gXCIuLi90eXBlcy9pbnRlcmZhY2VzL1ZlaGljbGVzSW5GaWxtc1wiXHJcbmltcG9ydCB7IGdldEFsbCB9IGZyb20gXCIuLi9EQi9nZXRBbGxcIlxyXG5cclxuZXhwb3J0IGRlZmF1bHQgKCgpID0+IHtcclxuICBjb25zdCBfZ2V0QnlJZCA9IE1lbShnZXRCeUlkUXVlcnk8RW50aXR5VGFibGUuVmVoaWNsZSwgSVZlaGljbGVSZXNwb25zZT4oXHJcbiAgICBFbnRpdHlUYWJsZS5WZWhpY2xlLFxyXG4gICAgW1xyXG4gICAgICB7XHJcbiAgICAgICAgdGFibGVOYW1lOiBFbnRpdHlUYWJsZS5QZW9wbGUsXHJcbiAgICAgICAgc2hvd0ZpZWxkczogW0lQZW9wbGVFbnRpdHlGaWVsZHMuSWQsIElQZW9wbGVFbnRpdHlGaWVsZHMuTmFtZV0sXHJcbiAgICAgICAgZmllbGROYW1lSW5SZXNwb25zZTogJ3BpbG90cycsXHJcbiAgICAgICAgbWFueVRvTWFueVRhYmxlTmFtZTogTWFueVRvTWFueVRhYmxlLlBpbG90LFxyXG4gICAgICAgIGludGVyc2VjdEVudGl0eU9uOiBQaWxvdEZpZWxkTmFtZXMuUGVvcGxlSWQsXHJcbiAgICAgICAgd2hlcmU6IFBpbG90RmllbGROYW1lcy5WZWhpY2xlSWRcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHRhYmxlTmFtZTogRW50aXR5VGFibGUuRmlsbSxcclxuICAgICAgICBzaG93RmllbGRzOiBbRmlsbUZpZWxkc05hbWVzLklkLCBGaWxtRmllbGRzTmFtZXMuVGl0bGVdLFxyXG4gICAgICAgIGZpZWxkTmFtZUluUmVzcG9uc2U6ICdmaWxtcycsXHJcbiAgICAgICAgbWFueVRvTWFueVRhYmxlTmFtZTogTWFueVRvTWFueVRhYmxlLlZlaGljbGVzSW5GaWxtcyxcclxuICAgICAgICBpbnRlcnNlY3RFbnRpdHlPbjogVmVoaWNsZXNJbkZpbG1zRmllbGRzTmFtZXMuRmlsbUlkLFxyXG4gICAgICAgIHdoZXJlOiBWZWhpY2xlc0luRmlsbXNGaWVsZHNOYW1lcy5WZWhpY2xlSWRcclxuICAgICAgfVxyXG5cclxuICAgIF1cclxuICApKVxyXG5cclxuICByZXR1cm4ge1xyXG4gICAgZ2V0QnlJZDogX2dldEJ5SWQsXHJcbiAgICBnZXRBbGw6IGdldEFsbChFbnRpdHlUYWJsZS5WZWhpY2xlLCBfZ2V0QnlJZClcclxuICB9XHJcbn0pKCkiLCJpbXBvcnQgKiBhcyBleHByZXNzIGZyb20gJ2V4cHJlc3MnXHJcbmltcG9ydCB7IEFwcGxpY2F0aW9uLCBSZXF1ZXN0LCBSZXNwb25zZSB9IGZyb20gJ2V4cHJlc3MnO1xyXG5pbXBvcnQgZmlsbSBmcm9tICcuL3JvdXRlcy9maWxtJztcclxuaW1wb3J0ICogYXMgaGVsbWV0IGZyb20gJ2hlbG1ldCc7XHJcbmNvbnN0IGFwcDogQXBwbGljYXRpb24gPSByZXF1aXJlKCdleHByZXNzJykoKTtcclxuaW1wb3J0IHBsYW5ldCBmcm9tICcuL3JvdXRlcy9wbGFuZXRzJztcclxuaW1wb3J0IHBlb3BsZSBmcm9tICcuL3JvdXRlcy9wZW9wbGUnO1xyXG5pbXBvcnQgc3BlY2llIGZyb20gJy4vcm91dGVzL3NwZWNpZXMnO1xyXG5pbXBvcnQgdmVoaWNsZSBmcm9tICcuL3JvdXRlcy92ZWhpY2xlJztcclxuaW1wb3J0IHN0YXJzaGlwIGZyb20gJy4vcm91dGVzL3N0YXJzaGlwJztcclxuaW1wb3J0IHsgbWF0Y2hSb3V0ZXMsIE1hdGNoZWRSb3V0ZSB9IGZyb20gJ3JlYWN0LXJvdXRlci1jb25maWcnO1xyXG5pbXBvcnQgUm91dGVzIGZyb20gJy4uL2NsaWVudC9yb3V0ZXMnO1xyXG5pbXBvcnQgZ2V0UG9ydCBmcm9tICcuL3V0aWxzL3BvcnQtZ2V0dGVyJztcclxuaW1wb3J0IHJlbmRlcmVyIGZyb20gJy4vdXRpbHMvcmVuZGVyZXInO1xyXG5cclxuYXBwLnVzZShleHByZXNzLnN0YXRpYygnL2J1aWxkJykpXHJcblxyXG5hcHAudXNlKCcvYXBpL3YxL2ZpbG1zJywgZmlsbSk7XHJcbmFwcC51c2UoJy9hcGkvdjEvcGxhbmV0cycsIHBsYW5ldCk7XHJcbmFwcC51c2UoJy9hcGkvdjEvcGVvcGxlJywgcGVvcGxlKTtcclxuYXBwLnVzZSgnL2FwaS92MS9zcGVjaWVzJywgc3BlY2llKTtcclxuYXBwLnVzZSgnL2FwaS92MS92ZWhpY2xlcycsIHZlaGljbGUpXHJcbmFwcC51c2UoJy9hcGkvdjEvc3RhcnNoaXBzJywgc3RhcnNoaXApXHJcbmFwcC5nZXQoJy8qJywgKHJlcTogYW55LCByZXM6IGFueSwgbmV4dDpleHByZXNzLk5leHRGdW5jdGlvbikgPT4ge1xyXG4gIGNvbnN0IHByb21pc2VzID0gbWF0Y2hSb3V0ZXMoUm91dGVzLCByZXEucGF0aClcclxuICAgIC5tYXAoKHsgcm91dGUsIG1hdGNoIH0pID0+IHJvdXRlLmxvYWREYXRhID8gcm91dGUubG9hZERhdGEobWF0Y2gpIDogUHJvbWlzZS5yZXNvbHZlKG51bGwpKVxyXG4gICAgLm1hcCgocHJvbWlzZTpQcm9taXNlPGFueT4pID0+IHByb21pc2UgJiYgbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4gXHJcbiAgICAgICAgICBwcm9taXNlLnRoZW4ocmVzb2x2ZSkuY2F0Y2gocmVzb2x2ZSlcclxuICAgICAgICApKVxyXG4gICBpZihwcm9taXNlcy5sZW5ndGggPiAwKXtcclxuICAgIFByb21pc2UuYWxsKHByb21pc2VzKS50aGVuKCgpID0+IHJlcy5zZW5kKHJlbmRlcmVyKHJlcSkpKTtcclxuICAgfWVsc2V7XHJcbiAgICAgbmV4dCgpXHJcbiAgICB9IFxyXG59KVxyXG5hcHAudXNlKCcvKicsIChyZXEsIHJlcyk9PiByZXMuanNvbih7bWVzc2FnZTogJ05vdCBGb3VuZCd9KSlcclxuYXBwLnVzZShoZWxtZXQoKSk7XHJcbmFwcC5saXN0ZW4oZ2V0UG9ydChwcm9jZXNzKSwgKCkgPT4gY29uc29sZS5sb2coYHNlcnZlciBzdGFydGVkIG9uIHBvcnQgJHtnZXRQb3J0KHByb2Nlc3MpfWApKTtcclxuXHJcbiIsIi8vIFVwZGF0ZSB3aXRoIHlvdXIgY29uZmlnIHNldHRpbmdzLlxyXG5jb25zdCBzID0gcmVxdWlyZShcIi4vc2V0dGluZ3MuanNcIik7XHJcbm1vZHVsZS5leHBvcnRzID0ge1xyXG5cclxuICBkZXZlbG9wbWVudDoge1xyXG4gICAgY2xpZW50OiAncGcnLFxyXG4gICAgY29ubmVjdGlvbjoge1xyXG4gICAgICB1c2VyOiBzLnVzZXIsXHJcbiAgICAgIGhvc3Q6IHMuaG9zdCxcclxuICAgICAgZGF0YWJhc2U6ICdzdGFyd2FycycsXHJcbiAgICAgIHBhc3N3b3JkOiBzLnBhc3N3b3JkLFxyXG4gICAgICBzc2w6IHRydWVcclxuICAgIH1cclxuICB9XHJcbn07XHJcbiIsImltcG9ydCB7Um91dGVyLCBSZXF1ZXN0LCBSZXNwb25zZX0gZnJvbSAnZXhwcmVzcyc7XHJcbmltcG9ydCB7IElGaWxtUmVzcG9uc2UgfSBmcm9tICcuLi90eXBlcy9pbnRlcmZhY2VzL0ZpbG0nO1xyXG5pbXBvcnQgRmlsbSBmcm9tICcuLi9jb250cm9sbGVycy9maWxtJztcclxuXHJcblxyXG5jb25zdCBSOlJvdXRlciA9IFJvdXRlcigpO1xyXG5cclxuUi5nZXQoJy9pbnNlcnQnLCBhc3luYyAocmVxOlJlcXVlc3QsIHJlczpSZXNwb25zZSk9PntcclxuICBcclxuIFxyXG59KVxyXG5SLmdldCgnLzppZCcsIGFzeW5jIChyZXE6UmVxdWVzdCwgcmVzOlJlc3BvbnNlKSA9PiB7XHJcbiBjb25zdCByZXN1bHQ6SUZpbG1SZXNwb25zZSA9IGF3YWl0IEZpbG0uZ2V0QnlJZChyZXEucGFyYW1zLmlkKSgpXHJcbiAgcmVzLmpzb24ocmVzdWx0KTsgICBcclxufSk7XHJcblIuZ2V0KCcvJywgYXN5bmMgKHJlcTpSZXF1ZXN0LCByZXM6UmVzcG9uc2UpPT57XHJcbiAgY29uc3QgcmVzdWx0ID0gYXdhaXQgRmlsbS5nZXRBbGwoKTtcclxuICByZXMuanNvbihyZXN1bHQpOyBcclxufSlcclxuIGV4cG9ydCBkZWZhdWx0IFI7IiwiaW1wb3J0IHsgUm91dGVyLCBSZXF1ZXN0LCBSZXNwb25zZSB9IGZyb20gJ2V4cHJlc3MnO1xyXG5pbXBvcnQgUGVvcGxlICBmcm9tICcuLi9jb250cm9sbGVycy9wZW9wbGUnO1xyXG5cclxuY29uc3QgUjpSb3V0ZXIgPSBSb3V0ZXIoKTtcclxuXHJcblxyXG5SLmdldCgnLzppZCcsIGFzeW5jIChyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UpPT57XHJcbiAgUGVvcGxlLmdldEJ5SWQocmVxLnBhcmFtcy5pZCkoKVxyXG4gICAudGhlbigocmVzdWx0OmFueSkgPT4gcmVzLmpzb24ocmVzdWx0KSk7XHJcbn0pXHJcblxyXG5SLmdldCgnLycsIGFzeW5jKHJlcTpSZXF1ZXN0LCByZXM6UmVzcG9uc2UpPT57XHJcbiAgY29uc3QgcmVzdWx0ID0gYXdhaXQgUGVvcGxlLmdldEFsbCgpXHJcbiAgcmVzLmpzb24ocmVzdWx0KVxyXG59KVxyXG5leHBvcnQgZGVmYXVsdCBSOyIsImltcG9ydCBleHByZXNzLHtSb3V0ZXIsIFJlcXVlc3QsIFJlc3BvbnNlfSBmcm9tICdleHByZXNzJztcclxuaW1wb3J0IHsgSVBsYW5ldFJlc3BvbnNlIH0gZnJvbSAnLi4vdHlwZXMvaW50ZXJmYWNlcy9QbGFuZXQnO1xyXG5pbXBvcnQgIFBsYW5ldCAgZnJvbSAnLi4vY29udHJvbGxlcnMvcGxhbmV0JztcclxuXHJcbmNvbnN0IFI6Um91dGVyID0gUm91dGVyKCk7XHJcblxyXG5SLmdldCgnLzppZCcsIGFzeW5jIChyZXE6UmVxdWVzdCwgcmVzOlJlc3BvbnNlKT0+e1xyXG4gIGNvbnN0IHBsYW5ldDpJUGxhbmV0UmVzcG9uc2UgPSBhd2FpdCBQbGFuZXQuZ2V0QnlJZChyZXEucGFyYW1zLmlkKSgpXHJcbiAgcmVzLmpzb24ocGxhbmV0KTtcclxufSlcclxuUi5nZXQoJy8nLCBhc3luYyAocmVxOlJlcXVlc3QsIHJlczpSZXNwb25zZSk9PntcclxuICBjb25zdCByID0gYXdhaXQgUGxhbmV0LmdldEFsbCgpOyBcclxuICByZXMuanNvbihyKTtcclxufSlcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFI7IiwiaW1wb3J0IHsgUm91dGVyLCBSZXF1ZXN0LCBSZXNwb25zZSB9IGZyb20gJ2V4cHJlc3MnO1xyXG5pbXBvcnQgU3BlY2llICBmcm9tICcuLi9jb250cm9sbGVycy9zcGVjaWUnO1xyXG5jb25zdCBSID0gUm91dGVyKCk7XHJcblxyXG5SLmdldCgnLzppZCcsIGFzeW5jIChyZXE6UmVxdWVzdCwgcmVzOlJlc3BvbnNlKT0+e1xyXG4gICBjb25zdCByZXN1bHQgPSBhd2FpdCAgU3BlY2llLmdldEJ5SWQocmVxLnBhcmFtcy5pZCkoKTtcclxuICAgcmVzLmpzb24ocmVzdWx0KTtcclxufSlcclxuXHJcblIuZ2V0KCcvJywgYXN5bmMgKHJlcTpSZXF1ZXN0LCByZXM6IFJlc3BvbnNlKT0+e1xyXG4gIGNvbnN0IHJlc3VsdCA9IGF3YWl0IFNwZWNpZS5nZXRBbGwoKTtcclxuICByZXMuanNvbihyZXN1bHQpO1xyXG59KVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFI7IiwiaW1wb3J0IHsgUm91dGVyLCBSZXF1ZXN0LCBSZXNwb25zZSB9IGZyb20gJ2V4cHJlc3MnO1xyXG5pbXBvcnQgIFN0YXJzaGlwICBmcm9tICcuLi9jb250cm9sbGVycy9zdGFyc2hpcCc7XHJcblxyXG5jb25zdCBSID0gUm91dGVyKCk7XHJcblxyXG5SLmdldCgnLzppZCcsIGFzeW5jIChyZXE6UmVxdWVzdCwgcmVzOlJlc3BvbnNlKT0+e1xyXG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgU3RhcnNoaXAuZ2V0QnlJZChyZXEucGFyYW1zLmlkKVxyXG4gICAgcmVzLmpzb24ocmVzdWx0KVxyXG59KVxyXG5cclxuUi5nZXQoJy8nLCBhc3luYyAocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlKT0+e1xyXG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgU3RhcnNoaXAuZ2V0QWxsKCk7XHJcbiAgICByZXMuanNvbihyZXN1bHQpXHJcbn0pXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUjsiLCJpbXBvcnQgeyBSb3V0ZXIsIFJlc3BvbnNlLCBSZXF1ZXN0IH0gZnJvbSAnZXhwcmVzcyc7XHJcbmltcG9ydCBWZWhpY2xlICBmcm9tICcuLi9jb250cm9sbGVycy92ZWhpY2xlJztcclxuXHJcbmNvbnN0IFI6Um91dGVyID0gUm91dGVyKCk7XHJcblxyXG5SLmdldCgnLzppZCcsIGFzeW5jIChyZXE6UmVxdWVzdCwgcmVzOlJlc3BvbnNlKT0+e1xyXG4gIGNvbnN0IHJlc3VsdCA9IGF3YWl0IFZlaGljbGUuZ2V0QnlJZChyZXEucGFyYW1zLmlkKSgpXHJcbiAgcmVzLmpzb24ocmVzdWx0KTsgICAgXHJcbn0pXHJcblxyXG5SLmdldCgnLycsIGFzeW5jIChyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UpPT57XHJcbiAgY29uc3QgcmVzdWx0ID0gYXdhaXQgVmVoaWNsZS5nZXRBbGwoKTtcclxuICByZXMuanNvbihyZXN1bHQpO1xyXG59KVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUjsiLCJcclxubW9kdWxlLmV4cG9ydHMgPSB7XHJcbiAgaG9zdDogXCJwZy1zdGFyd2Fycy5wb3N0Z3Jlcy5kYXRhYmFzZS5henVyZS5jb21cIixcclxuICB1c2VyOiBcInJ1YmVuODVAcGctc3RhcndhcnNcIixcclxuICBwYXNzd29yZDogXCIqcnViZW4yODM0MCpcIlxyXG59IiwiZXhwb3J0IGVudW0gVGFibGV7XHJcbiAgQWN0b3JzID0gJ2FjdG9ycycsXHJcbiAgRmlsbSA9ICdmaWxtJyxcclxuICBQZW9wbGUgPSAncGVvcGxlJyxcclxuICBQaWxvdCA9ICdwaWxvdCcsXHJcbiAgUGxhbmV0ID0gJ3BsYW5ldCcsXHJcbiAgUGxhbmV0c0luRmlsbXMgPSAncGxhbmV0c19pbl9maWxtcycsXHJcbiAgU3BlY2llID0gJ3NwZWNpZScsXHJcbiAgU3RhcnNoaXAgPSAnc3RhcnNoaXAnLFxyXG4gIFZlaGljbGUgPSAndmVoaWNsZScsXHJcbiAgVmVoaWNsZXNJbkZpbG1zID0gJ3ZlaGljbGVzX2luX2ZpbG1zJyxcclxuICBTdGFyc2hpcHNJbkZpbG1zID0gJ3N0YXJzaGlwc19pbl9maWxtcycsXHJcbiAgU3BlY2llc0luRmlsbXMgPSAnc3BlY2llc19pbl9maWxtcycsXHJcbiAgUmFjZSA9ICdyYWNlJyxcclxuICBTdGFyc2hpcFBpbG90ID0gJ3N0YXJzaGlwX3BpbG90J1xyXG5cclxufVxyXG5cclxuZXhwb3J0IGVudW0gTWFueVRvTWFueVRhYmxle1xyXG4gIEFjdG9ycyA9ICdhY3RvcnMnLFxyXG4gIFZlaGljbGVzSW5GaWxtcyA9ICd2ZWhpY2xlc19pbl9maWxtcycsXHJcbiAgU3RhcnNoaXBzSW5GaWxtcyA9ICdzdGFyc2hpcHNfaW5fZmlsbXMnLFxyXG4gIFNwZWNpZXNJbkZpbG1zID0gJ3NwZWNpZXNfaW5fZmlsbXMnLFxyXG4gIFBsYW5ldHNJbkZpbG1zID0gJ3BsYW5ldHNfaW5fZmlsbXMnLFxyXG4gIFJlc2lkZW50ID0gJ3Jlc2lkZW50JyxcclxuICBQaWxvdCA9ICdwaWxvdCcsXHJcbiAgU3RhcnNoaXBQaWxvdCA9ICdzdGFyc2hpcF9waWxvdCdcclxufVxyXG5cclxuZXhwb3J0IGVudW0gT25lVG9NYW55VGFibGV7XHJcbiAgUmFjZSA9ICdyYWNlJyxcclxufVxyXG5cclxuZXhwb3J0IGVudW0gRW50aXR5VGFibGV7XHJcbiAgRmlsbSA9ICdmaWxtJyxcclxuICBQZW9wbGUgPSAncGVvcGxlJyxcclxuICBQbGFuZXQgPSAncGxhbmV0JyxcclxuICBTcGVjaWUgPSAnc3BlY2llJyxcclxuICBTdGFyc2hpcCA9ICdzdGFyc2hpcCcsXHJcbiAgVmVoaWNsZSA9ICd2ZWhpY2xlJyxcclxuICBUZXN0ICAgID0gJ3Rlc3QnXHJcbn0iLCJleHBvcnQgaW50ZXJmYWNlIElBY3RvcnN7XHJcbiAgICBpZDogc3RyaW5nO1xyXG4gICAgcGVvcGxlX2lkOiBzdHJpbmc7XHJcbiAgICBmaWxtX2lkOiBzdHJpbmdcclxufVxyXG5cclxuZXhwb3J0IGVudW0gSUFjdG9yc0ZpZWxkc05hbWVze1xyXG4gICAgSWQgPSAnaWQnLFxyXG4gICAgUGVvcGxlSWQgPSAncGVvcGxlX2lkJyxcclxuICAgIEZpbG1JZCA9ICAnZmlsbV9pZCdcclxufSIsImltcG9ydCB7SUZyb21Gb3JlaWduVGFibGVzfSBmcm9tICcuL0Zyb21Gb3JlaWduVGFibGVzJztcclxuIGV4cG9ydCBpbnRlcmZhY2UgSUZpbG1Gcm9tQXBpe1xyXG4gIHRpdGxlOiAgICAgICAgICBzdHJpbmdcclxuICBlcGlzb2RlX2lkOiAgICAgbnVtYmVyXHJcbiAgb3BlbmluZ19jcmF3bDogIHN0cmluZ1xyXG4gIGRpcmVjdG9yOiAgICAgICBzdHJpbmdcclxuICBwcm9kdWNlcjogICAgICAgc3RyaW5nXHJcbiAgcmVsZWFzZV9kYXRlOiAgIHN0cmluZ1xyXG4gIGNoYXJhY3RlcnM6ICAgICBzdHJpbmdbXVxyXG4gIHBsYW5ldHM6ICAgICAgICBzdHJpbmdbXVxyXG4gIHN0YXJzaGlwczogICAgICBzdHJpbmdbXVxyXG4gIHZlaGljbGVzOiAgICAgICBzdHJpbmdbXVxyXG4gIHNwZWNpZXM6ICAgICAgICBzdHJpbmdbXVxyXG4gIGNyZWF0ZWQ6ICAgICAgICBzdHJpbmdcclxuICBlZGl0ZWQ6ICAgICAgICAgc3RyaW5nXHJcbiAgdXJsOiAgICAgICAgICAgIHN0cmluZ1xyXG59XHJcblxyXG5leHBvcnQgbmFtZXNwYWNlIEZpbG1GaWVsZHMge1xyXG4gIGV4cG9ydCB0eXBlIGlkID0gc3RyaW5nO1xyXG4gIGV4cG9ydCB0eXBlIHRpdGxlID0gc3RyaW5nIHwgbnVsbDtcclxuICBleHBvcnQgdHlwZSBlcGlzb2RlX2lkID0gbnVtYmVyIHwgbnVsbDtcclxuICBleHBvcnQgdHlwZSBvcGVuaW5nX2NyYXdsID0gc3RyaW5nIHwgbnVsbDtcclxuICBleHBvcnQgdHlwZSBkaXJlY3RvciA9IHN0cmluZyB8IG51bGw7XHJcbiAgZXhwb3J0IHR5cGUgcHJvZHVjZXIgPSBzdHJpbmcgfCBudWxsO1xyXG4gIGV4cG9ydCB0eXBlIHJlbGVhc2VfZGF0ZSA9IHN0cmluZyB8IG51bGw7XHJcbiAgZXhwb3J0IHR5cGUgY3JlYXRlZCA9IHN0cmluZyB8IG51bGw7XHJcbiAgZXhwb3J0IHR5cGUgZWRpdGVkID0gc3RyaW5nIHwgbnVsbDtcclxuICBleHBvcnQgdHlwZSB1cmwgPSBzdHJpbmcgfCBudWxsO1xyXG4gIFxyXG59XHJcblxyXG5cclxuZXhwb3J0IGVudW0gRmlsbUZpZWxkc05hbWVze1xyXG4gIElkID0gJ2lkJyxcclxuICBUaXRsZSA9ICd0aXRsZScsXHJcbiAgRXBpc29kZUlkID0gICdlcGlzb2RlX2lkJyxcclxuICBPcGVuaW5nQ3Jhd2wgPSAnb3BlbmluZ19jcmF3bCcsXHJcbiAgRGlyZWN0b3IgPSAnZGlyZWN0b3InLFxyXG4gIFByb2R1Y2VyID0gICdwcm9kdWNlcicsXHJcbiAgUmVsZWFzZURhdGUgPSAgJ3JlbGVhc2VfZGF0ZScsXHJcbiAgQ3JlYXRlZCA9ICdjcmVhdGVkJyxcclxuICBFZGl0ZWQgPSAnZWRpdGVkJyxcclxuICBVcmwgPSAndXJsJ1xyXG59XHJcblxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBGaWxtIHtcclxuICBpZDogRmlsbUZpZWxkcy5pZDtcclxuICB0aXRsZTogRmlsbUZpZWxkcy50aXRsZTtcclxuICBlcGlzb2RlX2lkOiBGaWxtRmllbGRzLmVwaXNvZGVfaWQ7XHJcbiAgb3BlbmluZ19jcmF3bDogRmlsbUZpZWxkcy5vcGVuaW5nX2NyYXdsO1xyXG4gIGRpcmVjdG9yOiBGaWxtRmllbGRzLmRpcmVjdG9yO1xyXG4gIHByb2R1Y2VyOiBGaWxtRmllbGRzLnByb2R1Y2VyO1xyXG4gIHJlbGVhc2VfZGF0ZTogRmlsbUZpZWxkcy5yZWxlYXNlX2RhdGU7XHJcbiAgY3JlYXRlZDogRmlsbUZpZWxkcy5jcmVhdGVkO1xyXG4gIGVkaXRlZDogRmlsbUZpZWxkcy5lZGl0ZWQ7XHJcbiAgdXJsOiBGaWxtRmllbGRzLnVybDtcclxuXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUZpbG1SZXNwb25zZSBleHRlbmRzIEZpbG17XHJcbiAgY2hhcmFjdGVyczogICAgSUZyb21Gb3JlaWduVGFibGVzW10sXHJcbiAgcGxhbmV0czogICAgICAgSUZyb21Gb3JlaWduVGFibGVzW10sXHJcbiAgc3RhcnNoaXBzOiAgICAgSUZyb21Gb3JlaWduVGFibGVzW10sXHJcbiAgdmVoaWNsZXM6ICAgICAgSUZyb21Gb3JlaWduVGFibGVzW11cclxufVxyXG5cclxuIiwiaW1wb3J0IHsgSVNwZWNpZUVudGl0eSBhcyBTcGVjaWUgfSBmcm9tICcuL1NwZWNpZSc7XHJcbmltcG9ydCB7IElTdWJqZWN0LCBJU3ViamVjdEZyb21BcGkgfSBmcm9tICcuL1N1YmplY3QnO1xyXG5pbXBvcnQgeyBJRnJvbUZvcmVpZ25UYWJsZXMgfSBmcm9tICcuL0Zyb21Gb3JlaWduVGFibGVzJztcclxuXHJcbmludGVyZmFjZSBJUGVvcGxlIGV4dGVuZHMgSVN1YmplY3R7XHJcbiAgaGVpZ2h0OiBzdHJpbmdcclxuICBtYXNzOiBzdHJpbmdcclxuICBoYWlyX2NvbG9yOiBzdHJpbmdcclxuICBza2luX2NvbG9yOiBzdHJpbmdcclxuICBleWVfY29sb3I6IHN0cmluZ1xyXG4gIGJpcnRoX3llYXI6IHN0cmluZ1xyXG4gIGdlbmRlcjogc3RyaW5nXHJcbiAgY3JlYXRlZDogc3RyaW5nXHJcbiAgZWRpdGVkOiBzdHJpbmdcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJUGVvcGxlRW50aXR5IGV4dGVuZHMgSVBlb3BsZXtcclxuICBzcGVjaWVzOiBJRnJvbUZvcmVpZ25UYWJsZXNcclxuICB2ZWhpY2xlczogSUZyb21Gb3JlaWduVGFibGVzW11cclxuICBzdGFyc2hpcHM6IElGcm9tRm9yZWlnblRhYmxlc1tdXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVBlb3BsZUZyb21BcGkgZXh0ZW5kcyBJUGVvcGxle1xyXG4gIHNwZWNpZXM6IHN0cmluZ1xyXG4gIHZlaGljbGVzOiBzdHJpbmdbXVxyXG4gIHN0YXJzaGlwczogc3RyaW5nW11cclxufVxyXG5cclxuZXhwb3J0IGVudW0gSVBlb3BsZUVudGl0eUZpZWxkc3tcclxuICBJZCA9ICdpZCcsXHJcbiAgTmFtZSA9ICduYW1lJyxcclxuICBIZWlnaHQgPSAnaGVpZ2h0JyxcclxuICBNYXNzID0gJ21hc3MnLFxyXG4gIEhhaXJDb2xvciA9ICdoYWlyX2NvbG9yJyxcclxuICBTa2luQ29sb3IgPSAnc2tpbl9jb2xvcicsXHJcbiAgRXllQ29sb3IgPSAnZXllX2NvbG9yJyxcclxuICBCaXJ0aFllYXIgPSAnYmlydGhfeWVhcicsXHJcbiAgR2VuZGVyID0gJ2dlbmRlcicsXHJcbiAgQ3JlYXRlZCA9ICdjcmVhdGVkJyxcclxuICBFZGl0ZWQgPSAnZWRpdGVkJyxcclxuICBVcmwgPSAndXJsJ1xyXG59IiwiZXhwb3J0IGludGVyZmFjZSBQaWxvdHtcclxuICAgIGlkOiBQaWxvdEZpZWxkVHlwZXMuaWQ7XHJcbiAgICB2ZWhpY2xlX2lkOiBQaWxvdEZpZWxkVHlwZXMudmVoaWNsZV9pZDtcclxuICAgIHBlb3BsZV9pZDogUGlsb3RGaWVsZFR5cGVzLnBlb3BsZV9pZFxyXG59XHJcblxyXG5leHBvcnQgZW51bSBQaWxvdEZpZWxkTmFtZXN7XHJcbiAgICBJZCA9ICdpZCcsXHJcbiAgICBWZWhpY2xlSWQgPSAndmVoaWNsZV9pZCcsXHJcbiAgICBQZW9wbGVJZCA9ICdwZW9wbGVfaWQnXHJcbn1cclxuXHJcblxyXG5leHBvcnQgbmFtZXNwYWNlIFBpbG90RmllbGRUeXBlc3tcclxuICAgIGV4cG9ydCB0eXBlIGlkID0gc3RyaW5nO1xyXG4gICAgZXhwb3J0IHR5cGUgdmVoaWNsZV9pZCA9IHN0cmluZztcclxuICAgIGV4cG9ydCB0eXBlIHBlb3BsZV9pZCA9IHN0cmluZztcclxufSIsImV4cG9ydCBpbnRlcmZhY2UgSVJhY2V7XHJcbiAgICBpZDogc3RyaW5nXHJcbiAgICBwZW9wbGVfaWQ6IHN0cmluZ1xyXG4gICAgc3BlY2llX2lkOiBzdHJpbmdcclxufVxyXG5cclxuZXhwb3J0IGVudW0gUmFjZUZpZWxkc3tcclxuICAgIGlkID0gJ2lkJyxcclxuICAgIFBlb3BsZUlkID0gJ3Blb3BsZV9pZCcsXHJcbiAgICBTcGVjaWVJZCA9ICdzcGVjaWVfaWQnXHJcbn0iLCJpbXBvcnQgeyBJUGxhbmV0RW50aXR5IGFzIFBsYW5ldH0gZnJvbSAnLi9QbGFuZXQnO1xyXG5pbXBvcnQgeyBJU3ViamVjdCwgSVN1YmplY3RGcm9tQXBpIH0gZnJvbSAnLi9TdWJqZWN0JztcclxuaW1wb3J0IHsgSUZyb21Gb3JlaWduVGFibGVzIH0gZnJvbSAnLi9Gcm9tRm9yZWlnblRhYmxlcyc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElTcGVjaWVFbnRpdHkgZXh0ZW5kcyBJU3ViamVjdHtcclxuICBjbGFzc2lmaWNhdGlvbjogc3RyaW5nXHJcbiAgZGVzaWduYXRpb246IHN0cmluZ1xyXG4gIGF2ZXJhZ2VfaGVpZ2h0OiBzdHJpbmdcclxuICBza2luX2NvbG9yczogc3RyaW5nXHJcbiAgaGFpcl9jb2xvcnM6IHN0cmluZ1xyXG4gIGV5ZV9jb2xvcnM6IHN0cmluZ1xyXG4gIGF2ZXJhZ2VfbGlmZXNwYW46IHN0cmluZ1xyXG4gIGxhbmd1YWdlOiBzdHJpbmdcclxuICBob21ld29ybGQ6IFBsYW5ldFxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElTcGVjaWVGcm9tQXBpIGV4dGVuZHMgSVN1YmplY3RGcm9tQXBpe1xyXG4gIGNsYXNzaWZpY2F0aW9uOiBzdHJpbmdcclxuICBwZW9wbGU6IHN0cmluZ1tdXHJcbiAgZmlsbXM6IHN0cmluZ1tdXHJcbiAgZGVzaWduYXRpb246IHN0cmluZ1xyXG4gIGF2ZXJhZ2VfaGVpZ2h0OiBzdHJpbmdcclxuICBza2luX2NvbG9yczogc3RyaW5nXHJcbiAgaGFpcl9jb2xvcnM6IHN0cmluZ1xyXG4gIGV5ZV9jb2xvcnM6IHN0cmluZ1xyXG4gIGF2ZXJhZ2VfbGlmZXNwYW46IHN0cmluZ1xyXG4gIGxhbmd1YWdlOiBzdHJpbmdcclxuICBob21ld29ybGQ6IHN0cmluZ1xyXG59XHJcblxyXG5leHBvcnQgZW51bSBJU3BlY2llRW50aXR5RmllbGRze1xyXG4gIElkPSdpZCcsXHJcbiAgTmFtZSA9ICduYW1lJyxcclxuICBDbGFzc2lmaWNhdGlvbiA9ICdjbGFzc2lmaWNhdGlvbicsXHJcbiAgRGVzaWduYXRpb24gPSAnZGVzaWduYXRpb24nLFxyXG4gIEF2ZXJhZ2VIZWlnaHQgPSAnYXZlcmFnZV9oZWlnaHQnLFxyXG4gIFNraW5Db2xvcnMgPSAnc2tpbl9jb2xvcnMnLFxyXG4gIEhhaXJDb2xvcnMgPSAnaGFpcl9jb2xvcnMnLFxyXG4gIEV5ZUNvbG9ycyA9ICdleWVfY29sb3JzJyxcclxuICBBdmVyYWdlTGlmZXNwYW4gPSAnYXZlcmFnZV9saWZlc3BhbicsXHJcbiAgSG9tZXdvcmxkID0gJ2hvbWV3b3JsZCcsXHJcbiAgTGFuZ3VhZ2UgPSAnbGFuZ3VhZ2UnLFxyXG4gIFVybCA9ICd1cmwnXHJcbn1cclxuXHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElTcGVjaWVSZXNwb25zZSBleHRlbmRzIElTcGVjaWVFbnRpdHl7XHJcbiAgcGVvcGxlOiBJRnJvbUZvcmVpZ25UYWJsZXNbXSxcclxuICBmaWxtczogSUZyb21Gb3JlaWduVGFibGVzW11cclxufSIsImV4cG9ydCBpbnRlcmZhY2UgSVNwZWNpZXNJbkZpbG1ze1xyXG4gICAgaWQ6IHN0cmluZztcclxuICAgIGZpbG1faWQ6IHN0cmluZztcclxuICAgIHNwZWNpZV9pZDogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgbmFtZXNwYWNlIFNwZWNpZXNJbkZpbG1zRmllbGRzVHlwZXtcclxuICAgIGV4cG9ydCB0eXBlIGlkID0gc3RyaW5nO1xyXG4gICAgZXhwb3J0IHR5cGUgZmlsbV9pZCA9IHN0cmluZztcclxuICAgIGV4cG9ydCB0eXBlIHNwZWNpZV9pZCA9IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGVudW0gU3BlY2llc0luRmlsbXNGaWVsZHNOYW1le1xyXG4gICAgSWQgPSAnaWQnLFxyXG4gICAgRmlsbUlkID0gJ2ZpbG1faWQnLFxyXG4gICAgU3BlY2llSWQgPSAnc3BlY2llX2lkJyAgICBcclxufSIsImltcG9ydCB7SVN1YmplY3QsIElTdWJqZWN0RnJvbUFwaX0gZnJvbSAnLi9TdWJqZWN0JztcclxuaW1wb3J0IHsgSVRyYW5zcG9ydEZyb21BcGksIElUcmFuc3BvcnRFbnRpdHkgfSBmcm9tICcuL1RyYW5zcG9ydCc7XHJcbmltcG9ydCB7IElGcm9tRm9yZWlnblRhYmxlcyB9IGZyb20gJy4vRnJvbUZvcmVpZ25UYWJsZXMnO1xyXG5pbnRlcmZhY2UgSVN0YXJzaGlwe1xyXG4gIGh5cGVyZHJpdmVfcmF0aW5nOiBzdHJpbmdcclxuICBNR0xUOiBzdHJpbmdcclxuICBzdGFyc2hpcF9jbGFzczogc3RyaW5nXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVN0YXJzaGlwRnJvbUFwaSBleHRlbmRzIElTdGFyc2hpcCwgSVN1YmplY3RGcm9tQXBpLCBJVHJhbnNwb3J0RnJvbUFwaXt9XHJcbmV4cG9ydCBpbnRlcmZhY2UgSVN0YXJzaGlwRW50aXR5IGV4dGVuZHMgSVN0YXJzaGlwICxJU3ViamVjdCwgSVRyYW5zcG9ydEVudGl0eXt9XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElTdGFyc2hpcFJlc3BvbnNlIGV4dGVuZHMgSVN0YXJzaGlwRW50aXR5e1xyXG4gIHBpbG90czogSUZyb21Gb3JlaWduVGFibGVzW10sXHJcbiAgZmlsbXM6IElGcm9tRm9yZWlnblRhYmxlc1tdXHJcbn1cclxuXHJcblxyXG5leHBvcnQgZW51bSBTdGFyc2hpcEVudGl0eUZpZWxkcyB7XHJcbiAgSWQgPSAnaWQnLFxyXG4gIFVybCA9ICd1cmwnLFxyXG4gIE5hbWUgPSAnbmFtZScsXHJcbiAgQ3JlYXRlZCA9ICdjcmVhdGVkJyxcclxuICBFZGl0ZWQgPSAnZWRpdGVkJyxcclxuICBNb2RlbCA9ICdtb2RlbCcsXHJcbiAgTWFudWZhY3R1cmVyID0gJ21hbnVmYWN0dXJlcicsXHJcbiAgQ29zdEluQ3JlZGl0cyA9ICdjb3N0X2luX2NyZWRpdHMnLFxyXG4gIExlbmd0aCA9ICdsZW5ndGgnLFxyXG4gIE1heEF0bW9zcGhlcmluZ1NwZWVkID0gJ21heF9hdG1vc3BoZXJpbmdfc3BlZWQnLFxyXG4gIENyZXcgPSAnY3JldycsXHJcbiAgUGFzc2VuZ2VycyA9ICdwYXNzZW5nZXJzJyxcclxuICBDYXJnb0NhcGFjaXR5ID0gJ2NhcmdvX2NhcGFjaXR5JyxcclxuICBDb25zdW1hYmxlcyA9ICdjb25zdW1hYmxlcycsXHJcbiAgSHlwZXJkcml2ZVJhdGluZyA9ICdoeXBlcmRyaXZlX3JhdGluZycsXHJcbiAgTUdMVCA9ICdNR0xUJyxcclxuICBTdGFyc2hpcENsYXNzID0gJ3N0YXJzaGlwX2NsYXNzJ1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFN0YXJzaGlwRW50aXR5RmllbGRzQXJyYXl7XHJcbiAgcmVhZG9ubHkgW2luZGV4OiBudW1iZXJdOiBTdGFyc2hpcEVudGl0eUZpZWxkc1xyXG59IiwiXHJcbmV4cG9ydCBuYW1lc3BhY2UgU3RhcnNoaXBQaWxvdEZpZWxkc3tcclxuICAgZXhwb3J0IHR5cGUgaWQgPSBzdHJpbmc7XHJcbiAgIGV4cG9ydCB0eXBlIHN0YXJzaGlwX2lkID0gc3RyaW5nO1xyXG4gICBleHBvcnQgdHlwZSBwZW9wbGVfaWQgPSBzdHJpbmc7IFxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFN0YXJzaGlwUGlsb3R7XHJcbiAgICBpZDogU3RhcnNoaXBQaWxvdEZpZWxkcy5pZDtcclxuICAgIHN0YXJzaGlwX2lkOiBTdGFyc2hpcFBpbG90RmllbGRzLnN0YXJzaGlwX2lkO1xyXG4gICAgcGVvcGxlX2lkOiBTdGFyc2hpcFBpbG90RmllbGRzLnBlb3BsZV9pZDtcclxufVxyXG5cclxuZXhwb3J0IGVudW0gU3RhcnNoaXBQaWxvdEZpZWxkc05hbWVze1xyXG4gICAgSWQgPSAnaWQnLFxyXG4gICAgU3RhcnNoaXBJZCA9ICdzdGFyc2hpcF9pZCcsXHJcbiAgICBQZW9wbGVJZCA9ICdwZW9wbGVfaWQnXHJcbn0iLCJleHBvcnQgaW50ZXJmYWNlIFN0YXJzaGlwc0luRmlsbXN7XHJcbiAgaWQ6IHN0cmluZ1xyXG4gIHN0YXJzaGlwX2lkOiBzdHJpbmdcclxuICBmaWxtX2lkOiBzdHJpbmdcclxufVxyXG5cclxuZXhwb3J0IGVudW0gU3RhcnNoaXBzSW5GaWxtc0ZpZWxkc3tcclxuICBJZCA9ICdpZCcsXHJcbiAgU3RhcnNoaXBJZCA9ICdzdGFyc2hpcF9pZCcsXHJcbiAgRmlsbUlkID0gJ2ZpbG1faWQnXHJcbn0iLCJpbXBvcnQgeyBJU3ViamVjdEZyb21BcGksIElTdWJqZWN0IH0gZnJvbSBcIi4vU3ViamVjdFwiO1xyXG5pbXBvcnQgeyBJVHJhbnNwb3J0RnJvbUFwaSwgSVRyYW5zcG9ydEVudGl0eSB9IGZyb20gXCIuL1RyYW5zcG9ydFwiO1xyXG5pbXBvcnQgeyBJRnJvbUZvcmVpZ25UYWJsZXMgfSBmcm9tIFwiLi9Gcm9tRm9yZWlnblRhYmxlc1wiO1xyXG5cclxuaW50ZXJmYWNlIFZlaGljbGUgeyBcclxuICB2ZWhpY2xlX2NsYXNzOiBzdHJpbmdcclxuIH1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVZlaGljbGVGcm9tQXBpIGV4dGVuZHMgSVN1YmplY3RGcm9tQXBpLCBJVHJhbnNwb3J0RnJvbUFwaXtcclxuICB2ZWhpY2xlX2NsYXNzOiBzdHJpbmdcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJVmVoaWNsZUVudGl0eSBleHRlbmRzIFZlaGljbGUsIElTdWJqZWN0RnJvbUFwaSwgSVRyYW5zcG9ydEVudGl0eXt9XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElWZWhpY2xlUmVzcG9uc2UgZXh0ZW5kcyBJVmVoaWNsZUVudGl0eXtcclxuICBwaWxvdHM6IElGcm9tRm9yZWlnblRhYmxlc1tdLFxyXG4gIGZpbG1zOiBJRnJvbUZvcmVpZ25UYWJsZXNbXVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGVudW0gVmVoaWNsZUZpZWxkc05hbWVze1xyXG4gIElkID0gJ2lkJyxcclxuICBOYW1lPSAnbmFtZScsXHJcbiAgTW9kZWwgPSAnbW9kZWwnLFxyXG4gIE1hbnVmYWN0dXJlciA9ICdtYW51ZmFjdHVyZXInLFxyXG4gIENvc3RJbkNyZWRpdHMgPSAnY29zdF9pbl9jcmVkaXRzJyxcclxuICBMZW5naHQgPSAnbGVuZ3RoJyxcclxuICBNYXhBdG1vc3BoZXJpbmdTcGVlZCA9ICdtYXhfYXRtb3NwaGVyaW5nX3NwZWVkJyxcclxuICBDcmV3ID0gJ2NyZXcnLFxyXG4gIFBhc3NlbmdlcnMgPSAncGFzc2VuZ2VycycsXHJcbiAgQ2FyZ29DYXBhY2l0eSA9ICdjYXJnb19jYXBhY2l0eScsXHJcbiAgQ29uc3VtYWJsZXMgPSAnY29uc3VtYWJsZXMnLFxyXG4gIFZlaGljbGVDbGFzcyA9ICd2ZWhpY2xlX2NsYXNzJyxcclxuICBVcmwgPSAndXJsJ1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFZlaGljbGVGaWVsZHNOYW1lc0FycmF5e1xyXG4gIFtrZXk6IG51bWJlcl0gOiBWZWhpY2xlRmllbGRzTmFtZXNcclxufSIsImV4cG9ydCBpbnRlcmZhY2UgVmVoaWNsZXNJbkZpbG1ze1xyXG4gIGlkOiBzdHJpbmdcclxuICB2ZWhpY2xlX2lkOiBzdHJpbmdcclxuICBmaWxtX2lkOiBzdHJpbmdcclxufVxyXG5cclxuZXhwb3J0IGVudW0gVmVoaWNsZXNJbkZpbG1zRmllbGRzTmFtZXN7XHJcbiAgSWQgPSAnaWQnLFxyXG4gIFZlaGljbGVJZCA9ICd2ZWhpY2xlX2lkJyxcclxuICBGaWxtSWQgPSAnZmlsbV9pZCdcclxufSIsImltcG9ydCB7IEV4ZWNFeGNlcHRpb24gfSBmcm9tIFwiY2hpbGRfcHJvY2Vzc1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGFzeW5jQ29tcG9zZSA9ICguLi5mbnM6IEZ1bmN0aW9uW10pID0+IChkYXRhOiBQcm9taXNlPGFueT4pID0+XHJcbiAgZm5zLnJlZHVjZVJpZ2h0KFxyXG4gICAgKGFjYzogUHJvbWlzZTxhbnk+LCBmOiBGdW5jdGlvbiwgaW5kZXg6IG51bWJlcikgPT5cclxuICAgICAgYWNjXHJcbiAgICAgICAgLnRoZW4oKHY6IGFueSkgPT4gZih2KSlcclxuICAgICAgICAuY2F0Y2goKGU6RXhlY0V4Y2VwdGlvbikgPT4gY29uc29sZS5sb2coZSkpXHJcbiAgICAsIGRhdGFcclxuICApXHJcbiIsImZ1bmN0aW9uIGxvZ2dlcihwOiBOb2RlSlMuUHJvY2VzcywgbG9nRm46IChzOiBzdHJpbmcpID0+IHZvaWQpIHtcclxuIFxyXG4gIHJldHVybiAobWVzc2FnZTogc3RyaW5nKSA9PiBwLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50JyAmJiBsb2dGbihtZXNzYWdlKTtcclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGxvZ2dlcihwcm9jZXNzLCBjb25zb2xlLmxvZyk7IiwiaW1wb3J0IHsgUHJvY2Vzc0Vudk9wdGlvbnMgfSBmcm9tICdjaGlsZF9wcm9jZXNzJztcclxuaW1wb3J0IExvZyBmcm9tICcuL2xvZ2dlcic7IFxyXG5leHBvcnQgY29uc3QgbWVtb2l6ZTogKGY6IEZ1bmN0aW9uKSA9PiAoYTogYW55KSA9PiBhbnkgPSAoZm4pID0+IHtcclxuICBsZXQgc3RhdGUgPSB7fSBhcyBhbnk7XHJcbiAgcmV0dXJuIGZ1bmN0aW9uKC4uLmFyZ3M6IGFueSkge1xyXG4gICAgY29uc3Qga2V5OiBzdHJpbmcgPSBbLi4uYXJnc10ucmVkdWNlKChhY2MsIGN1cnIpID0+IGFjYy5jb25jYXQoY3VyciksICcnKTtcclxuICAgIGlmIChPYmplY3Qua2V5cyhzdGF0ZSkuc29tZSgoazogc3RyaW5nKSA9PiBrID09PSBrZXkpKSB7XHJcbiAgICAgIHJldHVybiAoKSA9PiBzdGF0ZVtrZXldO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc3RhdGVba2V5XSA9IGZuKC4uLmFyZ3MpO1xyXG4gICAgICByZXR1cm4gKCkgPT4gc3RhdGVba2V5XTtcclxuICAgIH1cclxuICB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGFzeW5jTWVtb2l6ZTogKGY6IChhOiBhbnkpID0+IFByb21pc2U8YW55PikgPT4gKGE6IGFueSkgPT4gKCkgPT4gUHJvbWlzZTxhbnk+ID0gKGZuKSA9PiB7XHJcbiAgbGV0IHN0YXRlID0ge30gYXMgYW55O1xyXG4gIHJldHVybiAoYXJnczogYW55KSA9PiB7XHJcbiAgICBjb25zdCBrZXk6IHN0cmluZyA9IFsuLi5hcmdzXS5yZWR1Y2UoKGFjYywgY3VycikgPT4gYWNjLmNvbmNhdChjdXJyKSwgJycpO1xyXG4gICAgaWYgKE9iamVjdC5rZXlzKHN0YXRlKS5zb21lKChrOiBzdHJpbmcpID0+IGsgPT09IGtleSkpIHtcclxuICAgICAgTG9nKCdNZW1vaXplOiBEYXRhIGV4dHJhY3RlZCBGcm9tIENhY2hlJyk7XHJcbiAgICAgIHJldHVybiAoKSA9PiBzdGF0ZVtrZXldO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgTG9nKCdNZW1vaXplOiBkYXRhIGV4dHJhY3RlZCBGcm9tIERCJyk7XHJcbiAgICAgIHN0YXRlW2tleV0gPSBmbihhcmdzKTtcclxuICAgICAgcmV0dXJuICgpID0+IHN0YXRlW2tleV07XHJcbiAgICB9XHJcbiAgfTtcclxufTtcclxuXHJcbiIsInR5cGUgUG9ydCA9IHN0cmluZztcclxuXHJcbmNvbnN0IGdldFBvcnQgPSAocDpOb2RlSlMuUHJvY2Vzcyk6KFBvcnQgfCAzMDAwKSA9PiBwICYmIHAuZW52ICYmIHAuZW52LlBPUlQgPyBwLmVudi5QT1JUIDogMzAwMDtcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBnZXRQb3J0OyIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBIZWxtZXQsIEhlbG1ldERhdGEgfSBmcm9tICdyZWFjdC1oZWxtZXQnXHJcbmltcG9ydCB7IFN0YXRpY1JvdXRlciB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nXHJcbmltcG9ydCB7IHJlbmRlclJvdXRlcyB9IGZyb20gJ3JlYWN0LXJvdXRlci1jb25maWcnXHJcbmltcG9ydCB7IHJlbmRlclRvU3RyaW5nIH0gZnJvbSAncmVhY3QtZG9tL3NlcnZlcidcclxuaW1wb3J0IFJvdXRlcyBmcm9tICcuLi8uLi9jbGllbnQvcm91dGVzJ1xyXG5pbXBvcnQgeyBSZXF1ZXN0IH0gZnJvbSAnZXhwcmVzcydcclxuaW1wb3J0IGdldFBvcnQgZnJvbSAnLi9wb3J0LWdldHRlcidcclxuY29uc3QgcmVuZGVyZXIgPSAocmVxOiBSZXF1ZXN0LCBjb250ZXh0ID0ge30pID0+IHtcclxuICBjb25zdCBjb250ZW50OnN0cmluZyA9IHJlbmRlclRvU3RyaW5nKFxyXG4gICAgPFN0YXRpY1JvdXRlciBsb2NhdGlvbj17cmVxLnBhdGh9IGNvbnRleHQ9e2NvbnRleHR9PlxyXG4gICAgICA8ZGl2PntyZW5kZXJSb3V0ZXMoUm91dGVzKX08L2Rpdj5cclxuICAgIDwvU3RhdGljUm91dGVyPlxyXG4gIClcclxuICBjb25zdCBoZWxtZXQ6SGVsbWV0RGF0YSA9IEhlbG1ldC5yZW5kZXJTdGF0aWMoKTtcclxuICByZXR1cm4gYDxodG1sIGxhbmc9XCJlblwiPlxyXG4gICAgPGhlYWQ+XHJcbiAgICAgICAgPG1ldGEgY2hhcnNldD1cIlVURi04XCI+XHJcbiAgICAgICAgJHtoZWxtZXQubWV0YS50b1N0cmluZygpfVxyXG4gICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MS4wXCI+XHJcbiAgICAgICAgPG1ldGEgaHR0cC1lcXVpdj1cIlgtVUEtQ29tcGF0aWJsZVwiIGNvbnRlbnQ9XCJpZT1lZGdlXCI+XHJcbiAgICAgICAgJHtoZWxtZXQudGl0bGUudG9TdHJpbmcoKX1cclxuICAgICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgdHlwZT1cInRleHQvY3NzXCIgaHJlZj1cImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9idWlsZC9hc3NldHMvY3NzL3N0eWxlcy5taW4uY3NzXCI+XHJcbiAgICAgICAgPGxpbmsgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1MYXRvOjQwMCw3MDBcIiByZWw9XCJzdHlsZXNoZWV0XCI+XHJcbiAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIHR5cGU9XCJ0ZXh0L2Nzc1wiIGNoYXJzZXQ9XCJVVEYtOFwiIGhyZWY9XCJodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9zbGljay1jYXJvdXNlbC8xLjYuMC9zbGljay5taW4uY3NzXCIgLz5cclxuICAgICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cImh0dHBzOi8vdXNlLmZvbnRhd2Vzb21lLmNvbS9yZWxlYXNlcy92NS4wLjkvY3NzL2FsbC5jc3NcIiBpbnRlZ3JpdHk9XCJzaGEzODQtNVNPaUlzQXppSmw2QVdlMEhXUktUWGxmY1NIS21ZVjRSQkYxOFBQSjE3M0t6bjdqek15RnVUdGs4SkE3UVFHMVwiIGNyb3Nzb3JpZ2luPVwiYW5vbnltb3VzXCI+XHJcbiAgICA8L2hlYWQ+XHJcbiAgICA8Ym9keSAke2hlbG1ldC5ib2R5QXR0cmlidXRlcy50b1N0cmluZygpfT5cclxuICAgICAgICA8ZGl2IGlkPVwicm9vdFwiPiR7Y29udGVudH08L2Rpdj5cclxuICAgICAgICA8c2NyaXB0IHNyYz1cImh0dHA6Ly9sb2NhbGhvc3Q6JHtnZXRQb3J0KHByb2Nlc3MpfS9idWlsZC9jbGllbnRfYnVuZGxlLmpzXCI+PC9zY3JpcHQ+XHJcbiAgICA8L2JvZHk+XHJcbiAgXHJcbjwvaHRtbD5gO1xyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVuZGVyZXI7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGJhYmVsL3BvbHlmaWxsXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImV4cHJlc3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiaGVsbWV0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImtuZXhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmFtZGFcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtZG9tL3NlcnZlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1oZWxtZXRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3Qtcm91dGVyLWNvbmZpZ1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yb3V0ZXItZG9tXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=