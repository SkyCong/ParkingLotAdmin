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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {


__webpack_require__(1)

const a = __webpack_require__(2)
console.log('index!')

render()
function render () {
    // 得到的是打包之后的图片的路径
    // 但是一般的情况下，图片直接作为静态资源放入到对于目录后，使用时直接引入就好了，没有必要做模块化导入
    // 只有当图片非常小的时候, 小于url-loader限制的时候就会转换为base64格式的编码
    let img = __webpack_require__(3)
    console.log(img)
    document.getElementById('img').src = '/static/images/1.jpg'
    document.getElementById('img').src = img
}

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {


let a = __webpack_require__(2)
console.log(a.text)

/***/ }),
/* 2 */
/***/ (function(module, exports) {

console.log('aaaaaaaaaaaaaaaa')

module.exports = {
    text: 'Hello A'
}

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,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"

/***/ })
/******/ ]);