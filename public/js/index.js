/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _introduction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./introduction */ \"./src/introduction.js\");\n\n\nconsole.log(\"1 + 2 = \", (0,_introduction__WEBPACK_IMPORTED_MODULE_0__.add)(1, 2));\n\n\n//# sourceURL=webpack://r301-js-introduction/./src/index.js?");

/***/ }),

/***/ "./src/introduction.js":
/*!*****************************!*\
  !*** ./src/introduction.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   add: () => (/* binding */ add),\n/* harmony export */   addIsAdultProperty: () => (/* binding */ addIsAdultProperty),\n/* harmony export */   addToAll: () => (/* binding */ addToAll),\n/* harmony export */   adultFilter: () => (/* binding */ adultFilter),\n/* harmony export */   ageAverage: () => (/* binding */ ageAverage),\n/* harmony export */   average: () => (/* binding */ average),\n/* harmony export */   extractAge: () => (/* binding */ extractAge),\n/* harmony export */   hasChild: () => (/* binding */ hasChild),\n/* harmony export */   isAdult: () => (/* binding */ isAdult),\n/* harmony export */   isAllAdult: () => (/* binding */ isAllAdult),\n/* harmony export */   isChild: () => (/* binding */ isChild),\n/* harmony export */   sub: () => (/* binding */ sub),\n/* harmony export */   sum: () => (/* binding */ sum)\n/* harmony export */ });\nfunction add(a, b)\n{\n  return a + b;\n}\n\nfunction sub(a, b)\n{\n  return b - a;\n}\n\nfunction sum(values)\n{\n  return values.reduce((resultat, element) => resultat + element, 0);\n}\n\nfunction addToAll(values, toAdd)\n{\n  return values.map((element) => element + toAdd);\n}\n\nfunction average(values)\n{\n  let resultat = null;\n  if (values.length != 0) {\n    resultat = sum(values)/values.length;\n  }\n  \n  return resultat;\n}\n\nfunction isAdult(user)\n{\n  return user.age >= 18;\n}\n\nfunction isChild(user)\n{\n  return !isAdult(user);\n}\n\nfunction extractAge(users)\n{\n  return users.map((user) => user.age);\n}\n\nfunction adultFilter(users, type)\n{\n  if (type == \"adult\") {\n    return users.filter(isAdult);\n\n  } else if (type == \"child\") {\n    return users.filter(isChild);\n\n  } else {\n    return users;\n  }\n}\n\nfunction ageAverage(users, type)\n{\n  return average(extractAge(adultFilter(users, type)));\n}\n\nfunction isAllAdult(users)\n{\n  return users.every(isAdult);\n}\n\nfunction hasChild(users)\n{\n  return !isAllAdult(users);\n}\n\nfunction addIsAdultProperty(users)\n{\n  return users.map((user) => ({...user, isAdult: isAdult(user)}));\n}\n\n\n//# sourceURL=webpack://r301-js-introduction/./src/introduction.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;