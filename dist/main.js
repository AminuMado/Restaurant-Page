/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./src/RestaurantImages/wallpaper-7.jpg */ "./src/RestaurantImages/wallpaper-7.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;500;600;700&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n*{\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    font-family: 'Dancing Script', cursive;\n    color: white;\n  }\n  \nbody{\n  display: grid;\n  width: 100%;\n  height: auto;\n  min-height: 100vh;\n  grid-template-areas:  \"header\"\n                        \"nav\"\n                        \"content\"\n                        \"footer\";\n  grid-template-rows: 100px 100px 1fr 30px;\n  grid-template-columns: 1fr;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  -webkit-background-size: cover;\n  -moz-background-size: cover;\n  -o-background-size: cover;\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: center center;\n}\n#header{\n  grid-area: header;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 40px;\n}\n#nav{\n  grid-area: nav;\n  display: flex;\n  flex-wrap: wrap;\n  gap: 40px;\n  font-size: 50px;\n  justify-content: center;\n  align-items: center;\n}\n#nav > a{\n  text-decoration:none;\n}\n#nav >a:hover{\n  color:orange;\n}\n.current{\n  color:orange;\n}\n#content{\n  grid-area: content;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 160px;\n}\n/* Menu */\n#pastaContainer,#ramenContainer,#saladContainer{\n  display: flex;\n  gap: 20px;\n  flex-wrap: wrap;\n  justify-content: center;\n \n}\n#pastaContainer > h1{\n  margin: 0;\n  padding: 30px 15px;\n  font-size: 50px;\n  border-top: 4px solid black;\n  border-bottom: 4px solid black;\n  text-align: center;\n  width: 96%;\n}\n#ramenContainer > h1{\n  margin: 0;\n  padding: 30px 15px;\n  font-size: 50px;\n  border-top: 4px solid black;\n  border-bottom: 4px solid black;\n  text-align: center;\n  width: 93%; \n}\n#saladContainer > h1{\n  margin: 0;\n  padding: 30px 15px;\n  font-size: 40px;\n  border-top: 4px solid black;\n  border-bottom: 4px solid black;\n  text-align: center;\n  width:90%;\n}\n.card-container{\n  background: rgb(0 0 0 / 70%);\n  display: flex;\n  flex-direction: column;\n  width: 275px;\n  height: auto;\n  align-items: center;\n  -webkit-transition: box-shadow 200ms ease,-webkit-transform 200ms ease;\n  transition: box-shadow 200ms ease,transform 200ms ease;\n  box-shadow: 0px 0px 0 black;\n  gap: 10px;\n  padding:10px;\n\n}\n.card-container:hover{\n  box-shadow: -8px 8px 0px 0px black;\n  transform: translate(4px,-4px);\n\n}\n.placeholder{\n  color: azure;\n  grid-area: placeholder;\n  width: 200px;\n  height: 200px;\n  border-radius: 50%;\n}\n.placeholder > img{\n  width: inherit;\n  height: inherit;\n}\n/* Footer */\n.footer{\n  grid-area: footer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 6.5px;\n  width: 100%;\n  padding: 10px;\n  font-size: 25px;\n  margin-top: auto;\n  background: rgb(0 0 0);\n  margin-top: 5px;\n}\n.github-logo{\n    width: 20px;\n    height:20px;\n    transition: all 300ms linear;\n    border-radius: 50%;\n    box-shadow: 0px 0px 5px gold;\n    cursor: pointer;\n    filter: invert(61%) sepia(60%) saturate(576%) hue-rotate(353deg) brightness(96%) contrast(93%);}\n.github-logo:hover{\n        transform: rotate(360deg) scale(1.3);\n        box-shadow: 0px 0px 5px crimson;\n        filter: invert(36%) sepia(68%) saturate(1441%) hue-rotate(332deg) brightness(63%) contrast(120%);\n\n}\n/* Home Page*/\n#about {\n    margin-top: 150px;\n    font-size: 30px;\n}\n#about h1 {\n    margin: 0;\n    padding: 30px 15px;\n    font-size: 35px;\n    border-top: 4px solid black;\n    border-bottom: 4px solid black;\n    text-align: center;\n\n}\n/* MENU */\nh2 {\n  font-size: 30px;\n}\n\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":";AAIA;IACI,SAAS;IACT,UAAU;IACV,sBAAsB;IACtB,sCAAsC;IACtC,YAAY;EACd;;AAEF;EACE,aAAa;EACb,WAAW;EACX,YAAY;EACZ,iBAAiB;EACjB;;;gCAG8B;EAC9B,wCAAwC;EACxC,0BAA0B;EAC1B,yDAAkI;EAClI,8BAA8B;EAC9B,2BAA2B;EAC3B,yBAAyB;EACzB,sBAAsB;EACtB,4BAA4B;EAC5B,kCAAkC;AACpC;AACA;EACE,iBAAiB;EACjB,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,eAAe;AACjB;AACA;EACE,cAAc;EACd,aAAa;EACb,eAAe;EACf,SAAS;EACT,eAAe;EACf,uBAAuB;EACvB,mBAAmB;AACrB;AACA;EACE,oBAAoB;AACtB;AACA;EACE,YAAY;AACd;AACA;EACE,YAAY;AACd;AACA;EACE,kBAAkB;EAClB,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,UAAU;AACZ;AACA,SAAS;AACT;EACE,aAAa;EACb,SAAS;EACT,eAAe;EACf,uBAAuB;;AAEzB;AACA;EACE,SAAS;EACT,kBAAkB;EAClB,eAAe;EACf,2BAA2B;EAC3B,8BAA8B;EAC9B,kBAAkB;EAClB,UAAU;AACZ;AACA;EACE,SAAS;EACT,kBAAkB;EAClB,eAAe;EACf,2BAA2B;EAC3B,8BAA8B;EAC9B,kBAAkB;EAClB,UAAU;AACZ;AACA;EACE,SAAS;EACT,kBAAkB;EAClB,eAAe;EACf,2BAA2B;EAC3B,8BAA8B;EAC9B,kBAAkB;EAClB,SAAS;AACX;AACA;EACE,4BAA4B;EAC5B,aAAa;EACb,sBAAsB;EACtB,YAAY;EACZ,YAAY;EACZ,mBAAmB;EACnB,sEAAsE;EACtE,sDAAsD;EACtD,2BAA2B;EAC3B,SAAS;EACT,YAAY;;AAEd;AACA;EACE,kCAAkC;EAClC,8BAA8B;;AAEhC;AACA;EACE,YAAY;EACZ,sBAAsB;EACtB,YAAY;EACZ,aAAa;EACb,kBAAkB;AACpB;AACA;EACE,cAAc;EACd,eAAe;AACjB;AACA,WAAW;AACX;EACE,iBAAiB;EACjB,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,UAAU;EACV,WAAW;EACX,aAAa;EACb,eAAe;EACf,gBAAgB;EAChB,sBAAsB;EACtB,eAAe;AACjB;AACA;IACI,WAAW;IACX,WAAW;IACX,4BAA4B;IAC5B,kBAAkB;IAClB,4BAA4B;IAC5B,eAAe;IACf,8FAA8F,CAAC;AACnG;QACQ,oCAAoC;QACpC,+BAA+B;QAC/B,gGAAgG;;AAExG;AACA,aAAa;AACb;IACI,iBAAiB;IACjB,eAAe;AACnB;AACA;IACI,SAAS;IACT,kBAAkB;IAClB,eAAe;IACf,2BAA2B;IAC3B,8BAA8B;IAC9B,kBAAkB;;AAEtB;AACA,SAAS;AACT;EACE,eAAe;AACjB","sourcesContent":["\n@import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;500;600;700&display=swap');\n\n\n*{\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    font-family: 'Dancing Script', cursive;\n    color: white;\n  }\n  \nbody{\n  display: grid;\n  width: 100%;\n  height: auto;\n  min-height: 100vh;\n  grid-template-areas:  \"header\"\n                        \"nav\"\n                        \"content\"\n                        \"footer\";\n  grid-template-rows: 100px 100px 1fr 30px;\n  grid-template-columns: 1fr;\n  background-image: url(/home/aminumado/Git-Repository/Projects/TheOdinProject/Restaurant-Page/src/RestaurantImages/wallpaper-7.jpg);\n  -webkit-background-size: cover;\n  -moz-background-size: cover;\n  -o-background-size: cover;\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: center center;\n}\n#header{\n  grid-area: header;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 40px;\n}\n#nav{\n  grid-area: nav;\n  display: flex;\n  flex-wrap: wrap;\n  gap: 40px;\n  font-size: 50px;\n  justify-content: center;\n  align-items: center;\n}\n#nav > a{\n  text-decoration:none;\n}\n#nav >a:hover{\n  color:orange;\n}\n.current{\n  color:orange;\n}\n#content{\n  grid-area: content;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 160px;\n}\n/* Menu */\n#pastaContainer,#ramenContainer,#saladContainer{\n  display: flex;\n  gap: 20px;\n  flex-wrap: wrap;\n  justify-content: center;\n \n}\n#pastaContainer > h1{\n  margin: 0;\n  padding: 30px 15px;\n  font-size: 50px;\n  border-top: 4px solid black;\n  border-bottom: 4px solid black;\n  text-align: center;\n  width: 96%;\n}\n#ramenContainer > h1{\n  margin: 0;\n  padding: 30px 15px;\n  font-size: 50px;\n  border-top: 4px solid black;\n  border-bottom: 4px solid black;\n  text-align: center;\n  width: 93%; \n}\n#saladContainer > h1{\n  margin: 0;\n  padding: 30px 15px;\n  font-size: 40px;\n  border-top: 4px solid black;\n  border-bottom: 4px solid black;\n  text-align: center;\n  width:90%;\n}\n.card-container{\n  background: rgb(0 0 0 / 70%);\n  display: flex;\n  flex-direction: column;\n  width: 275px;\n  height: auto;\n  align-items: center;\n  -webkit-transition: box-shadow 200ms ease,-webkit-transform 200ms ease;\n  transition: box-shadow 200ms ease,transform 200ms ease;\n  box-shadow: 0px 0px 0 black;\n  gap: 10px;\n  padding:10px;\n\n}\n.card-container:hover{\n  box-shadow: -8px 8px 0px 0px black;\n  transform: translate(4px,-4px);\n\n}\n.placeholder{\n  color: azure;\n  grid-area: placeholder;\n  width: 200px;\n  height: 200px;\n  border-radius: 50%;\n}\n.placeholder > img{\n  width: inherit;\n  height: inherit;\n}\n/* Footer */\n.footer{\n  grid-area: footer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 6.5px;\n  width: 100%;\n  padding: 10px;\n  font-size: 25px;\n  margin-top: auto;\n  background: rgb(0 0 0);\n  margin-top: 5px;\n}\n.github-logo{\n    width: 20px;\n    height:20px;\n    transition: all 300ms linear;\n    border-radius: 50%;\n    box-shadow: 0px 0px 5px gold;\n    cursor: pointer;\n    filter: invert(61%) sepia(60%) saturate(576%) hue-rotate(353deg) brightness(96%) contrast(93%);}\n.github-logo:hover{\n        transform: rotate(360deg) scale(1.3);\n        box-shadow: 0px 0px 5px crimson;\n        filter: invert(36%) sepia(68%) saturate(1441%) hue-rotate(332deg) brightness(63%) contrast(120%);\n\n}\n/* Home Page*/\n#about {\n    margin-top: 150px;\n    font-size: 30px;\n}\n#about h1 {\n    margin: 0;\n    padding: 30px 15px;\n    font-size: 35px;\n    border-top: 4px solid black;\n    border-bottom: 4px solid black;\n    text-align: center;\n\n}\n/* MENU */\nh2 {\n  font-size: 30px;\n}\n\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const contact = (() => {
    function render() {
        const content = document.querySelector('#content');
        const aboutDiv = document.createElement('div');
        const aboutTxt = document.createElement('h1');
        const text1 = document.createTextNode('Paradis Island');
        aboutDiv.setAttribute('id', 'about');
        aboutTxt.appendChild(text1);
        aboutDiv.appendChild(aboutTxt);
        content.appendChild(aboutDiv);
    };
    return{render};
  })();
  
  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (contact);
  

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });


const home = (() => {
    function render(){
        const content = document.querySelector('#content');
        const aboutDiv = document.createElement('div');
        const aboutTxt = document.createElement('h1');
        const br1 = document.createElement('br');
        const br2 = document.createElement('br');
        const text1 = document.createTextNode('This is where all worlds converge, come take your tastebuds on a trip');
        const text2 = document.createTextNode('&');
        const text3 = document.createTextNode('Dedicate your Hearts');
        aboutDiv.setAttribute('id', 'about');
        aboutTxt.appendChild(text1);
        aboutTxt.appendChild(br1);
        aboutTxt.appendChild(text2);
        aboutTxt.appendChild(br2);
        aboutTxt.appendChild(text3);
        aboutDiv.appendChild(aboutTxt);
        content.appendChild(aboutDiv);
    };
    return{render};
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (home);

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _src_RestaurantImages_ramen_1_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/RestaurantImages/ramen-1.png */ "./src/RestaurantImages/ramen-1.png");
/* harmony import */ var _src_RestaurantImages_ramen_2_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/RestaurantImages/ramen-2.png */ "./src/RestaurantImages/ramen-2.png");
/* harmony import */ var _src_RestaurantImages_ramen_3_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/RestaurantImages/ramen-3.png */ "./src/RestaurantImages/ramen-3.png");
/* harmony import */ var _src_RestaurantImages_ramen_4_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/RestaurantImages/ramen-4.png */ "./src/RestaurantImages/ramen-4.png");
/* harmony import */ var _src_RestaurantImages_ramen_5_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/RestaurantImages/ramen-5.png */ "./src/RestaurantImages/ramen-5.png");
/* harmony import */ var _src_RestaurantImages_salad_2_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/RestaurantImages/salad-2.png */ "./src/RestaurantImages/salad-2.png");
/* harmony import */ var _src_RestaurantImages_salad_3_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../src/RestaurantImages/salad-3.png */ "./src/RestaurantImages/salad-3.png");
/* harmony import */ var _src_RestaurantImages_salad_4_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../src/RestaurantImages/salad-4.png */ "./src/RestaurantImages/salad-4.png");
/* harmony import */ var _src_RestaurantImages_pasta_1_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../src/RestaurantImages/pasta-1.png */ "./src/RestaurantImages/pasta-1.png");
/* harmony import */ var _src_RestaurantImages_pasta_2_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../src/RestaurantImages/pasta-2.png */ "./src/RestaurantImages/pasta-2.png");
/* harmony import */ var _src_RestaurantImages_pasta_3_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../src/RestaurantImages/pasta-3.png */ "./src/RestaurantImages/pasta-3.png");
/* harmony import */ var _src_RestaurantImages_pasta_4_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../src/RestaurantImages/pasta-4.png */ "./src/RestaurantImages/pasta-4.png");
/* harmony import */ var _src_RestaurantImages_pasta_5_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../src/RestaurantImages/pasta-5.png */ "./src/RestaurantImages/pasta-5.png");
/* harmony import */ var _src_RestaurantImages_pasta_6_png__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../src/RestaurantImages/pasta-6.png */ "./src/RestaurantImages/pasta-6.png");
/* harmony import */ var _src_RestaurantImages_pasta_7_png__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../src/RestaurantImages/pasta-7.png */ "./src/RestaurantImages/pasta-7.png");
















const menu = (() => {
    function render() {
        const content = document.querySelector('#content');
        const pastaContainer = document.createElement('div');
        const ramenContainer = document.createElement('div');
        const saladContainer = document.createElement('div');
        const pastaHeader = document.createElement('h1');
        const ramenHeader = document.createElement('h1');
        const saladHeader = document.createElement('h1');
        // TEXT NODES
        const pastaText = document.createTextNode('Pasta');
        const ramenText = document.createTextNode('Ramen');
        const saladText = document.createTextNode('Salad');
        //Appends
        pastaHeader.appendChild(pastaText);
        ramenHeader.appendChild(ramenText);
        saladHeader.appendChild(saladText);
        
        pastaContainer.appendChild(pastaHeader);
        ramenContainer.appendChild(ramenHeader);
        saladContainer.appendChild(saladHeader);

        function renderPastaMenu(menu){
            menu.forEach(item => {
                menu[item] = createMenuCard();
                appendCardElements(menu[item]);
                setCardDetails(menu[item],item);
                setCardAttributes(menu[item]);
                menu[item].card.classList.add('card-container');
                pastaContainer.appendChild(menu[item].card);
            })
        };
        function renderRamenMenu(menu){
            menu.forEach(item =>{
                menu[item] = createMenuCard();
                appendCardElements(menu[item]);
                setCardDetails(menu[item],item);
                setCardAttributes(menu[item]);
                menu[item].card.classList.add('card-container');
                ramenContainer.appendChild(menu[item].card);

            })
        };
        function renderSaladMenu(menu){
            menu.forEach(item =>{
                menu[item] = createMenuCard();
                appendCardElements(menu[item]);
                setCardDetails(menu[item],item);
                setCardAttributes(menu[item]);
                menu[item].card.classList.add('card-container');
                saladContainer.appendChild(menu[item].card);

            })
        };
        function createMenuCard(){
            const card = document.createElement('div');
            const name = document.createElement('h2');
            const price = document.createElement('p');
            const photo = document.createElement('img');
            const seperator = document.createElement("seperator");
            const ingredients = document.createElement('p');
            const placeHolder = document.createElement('div');
            return {card,name,price,photo,seperator,placeHolder,ingredients};
         };
         function appendCardElements(target){
            target.placeHolder.appendChild(target.photo);
            target.card.appendChild(target.price);
            target.card.appendChild(target.placeHolder);
            target.card.appendChild(target.seperator);
            target.card.appendChild(target.name);
            target.card.appendChild(target.ingredients);
            content.appendChild(pastaContainer);
            content.appendChild(ramenContainer);
            content.appendChild(saladContainer);
         };
         function setCardAttributes(target){
            target.placeHolder.classList.add('placeholder');
            target.seperator.classList.add('seperator');
            pastaContainer.setAttribute('id','pastaContainer');
            ramenContainer.setAttribute('id','ramenContainer');
            saladContainer.setAttribute('id','saladContainer');
         }
         function setCardDetails(menuItem, item){
            menuItem.photo.src = item.src;
            menuItem.name.innerText = item.name;
            menuItem.price.innerText = item.price;
            menuItem.ingredients.innerText = item.ingredients;
         };

        const menuItemsRamen =[{
            name: 'Chicken Ramen',
            src: _src_RestaurantImages_ramen_1_png__WEBPACK_IMPORTED_MODULE_0__,
            ingredients: 'chicken broth: chicken chashu, wood ear mushrooms,fried onion, grated cheese » served with thin noodles.',
            price: '$15',
            category: 'ramen'
        },
        {
            name: 'Shrimp Ramen',
            src: _src_RestaurantImages_ramen_2_png__WEBPACK_IMPORTED_MODULE_1__,
            ingredients: 'shrimp broth: shrimps, cilantro, lime and chilli sauce, grated garlic, scallions.',
            price: '$18',
            category: 'ramen'
        },
        {
            name: 'Shio Black',
            src: _src_RestaurantImages_ramen_3_png__WEBPACK_IMPORTED_MODULE_2__,
            ingredients: 'shio broth: black garlic oil, kikurage mushrooms, sesame, scallions.',
            price: '$17',
            category: 'ramen'
        },
        {
            name: 'Spicy Chicken Ramen',
            src: _src_RestaurantImages_ramen_4_png__WEBPACK_IMPORTED_MODULE_3__,
            ingredients: 'chicken broth: chilli sauce, chicken chashu, tatsu egg, green onion » served with thin noodles',
            price: '$19',
            category: 'ramen'
        },
        {
            name: 'Beef Ramen',
            src: _src_RestaurantImages_ramen_5_png__WEBPACK_IMPORTED_MODULE_4__,
            ingredients: 'beef broth: beef chunks, lime, cilantro, red pepper, onions » served with thin noodles',
            price: '$13',
            category: 'ramen'
        }];

        const menuItemsSalad =[{
            name: 'Greek Salmon',
            src: _src_RestaurantImages_salad_2_png__WEBPACK_IMPORTED_MODULE_5__,
            ingredients: 'Salmon, Romaine Lettuce, Cucumber, Crouton',
            price: '$8',
            category: 'salad'

        },
        {
            name: 'Kale Caesar',
            src: _src_RestaurantImages_salad_3_png__WEBPACK_IMPORTED_MODULE_6__,
            ingredients: 'Kale, Roasted Chicken, Cheese, Grape Tomatoes, Croutons, Caesar Dressing',
            price: '$9',
            category: 'salad'
        },
        {
            name: 'Chicken Ceasar',
            src: _src_RestaurantImages_salad_4_png__WEBPACK_IMPORTED_MODULE_7__,
            ingredients: 'Kale, Romaine, Roasted Chicken, Avocado, Shaved Parmesan, Caesar Dressing',
            price: '$10',
            category: 'salad'
        }];

        const menuItemsPasta =[{
            name: 'Brocolli',
            src: _src_RestaurantImages_pasta_1_png__WEBPACK_IMPORTED_MODULE_8__,
            ingredients: 'Spaghetti, Brocolli, Sesame, Ground Beef',
            price: '$12',
            category: 'pasta'
        },
        {
            name: 'Parmesian',
            src: _src_RestaurantImages_pasta_2_png__WEBPACK_IMPORTED_MODULE_9__,
            ingredients: 'Spaghetti, Parmesian, Chicken Strips',
            price: '$13',
            category: 'pasta'
        },
        {
            name: 'Grape Tomato',
            src: _src_RestaurantImages_pasta_3_png__WEBPACK_IMPORTED_MODULE_10__,
            ingredients: 'Spaghetti, Grape Tomato, Shaved Parmesian',
            price: '$19',
            category: 'pasta'
        },
        {
            name: 'Classic',
            src: _src_RestaurantImages_pasta_4_png__WEBPACK_IMPORTED_MODULE_11__,
            ingredients: 'Spaghetti, Tomato Sauce',
            price: '$10',
            category: 'pasta'
        },
        {
            name: 'Meatball',
            src: _src_RestaurantImages_pasta_5_png__WEBPACK_IMPORTED_MODULE_12__,
            ingredients: 'Spaghetti, Meatball, Tomato Sauce',
            price: '$18',
            category: 'pasta'
        },
        {
            name: 'Sausage',
            src: _src_RestaurantImages_pasta_6_png__WEBPACK_IMPORTED_MODULE_13__,
            ingredients: 'Spaghetti, Sausage Strips',
            price: '$16',
            category: 'pasta'
        },
        {
            name: 'Clam',
            src: _src_RestaurantImages_pasta_7_png__WEBPACK_IMPORTED_MODULE_14__,
            ingredients: 'Spaghetti, Small Clams',
            price: '$22',
            category: 'pasta'
        }];
        renderRamenMenu(menuItemsRamen);
        renderPastaMenu(menuItemsPasta);
        renderSaladMenu(menuItemsSalad);
        
    }
    return { render };
  })();
  
  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);
  

/***/ }),

/***/ "./src/RestaurantImages/github-logo.svg":
/*!**********************************************!*\
  !*** ./src/RestaurantImages/github-logo.svg ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e2f073269da5b56e8238.svg";

/***/ }),

/***/ "./src/RestaurantImages/pasta-1.png":
/*!******************************************!*\
  !*** ./src/RestaurantImages/pasta-1.png ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a4ac9a7b4bf0be6e0d37.png";

/***/ }),

/***/ "./src/RestaurantImages/pasta-2.png":
/*!******************************************!*\
  !*** ./src/RestaurantImages/pasta-2.png ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b939c95f4a633a02b894.png";

/***/ }),

/***/ "./src/RestaurantImages/pasta-3.png":
/*!******************************************!*\
  !*** ./src/RestaurantImages/pasta-3.png ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f2f249eb617c0a2f8ce7.png";

/***/ }),

/***/ "./src/RestaurantImages/pasta-4.png":
/*!******************************************!*\
  !*** ./src/RestaurantImages/pasta-4.png ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "523f1c8e0e7fd2e86fce.png";

/***/ }),

/***/ "./src/RestaurantImages/pasta-5.png":
/*!******************************************!*\
  !*** ./src/RestaurantImages/pasta-5.png ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a76292b14484d2700bfb.png";

/***/ }),

/***/ "./src/RestaurantImages/pasta-6.png":
/*!******************************************!*\
  !*** ./src/RestaurantImages/pasta-6.png ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c1dcb5905a7dd7b7f22b.png";

/***/ }),

/***/ "./src/RestaurantImages/pasta-7.png":
/*!******************************************!*\
  !*** ./src/RestaurantImages/pasta-7.png ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7ab9be3a8217b1200240.png";

/***/ }),

/***/ "./src/RestaurantImages/ramen-1.png":
/*!******************************************!*\
  !*** ./src/RestaurantImages/ramen-1.png ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9ad99b8e6f8c5c55df13.png";

/***/ }),

/***/ "./src/RestaurantImages/ramen-2.png":
/*!******************************************!*\
  !*** ./src/RestaurantImages/ramen-2.png ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4e08b5e2892352a67509.png";

/***/ }),

/***/ "./src/RestaurantImages/ramen-3.png":
/*!******************************************!*\
  !*** ./src/RestaurantImages/ramen-3.png ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "79304a7b4aecbbd9e179.png";

/***/ }),

/***/ "./src/RestaurantImages/ramen-4.png":
/*!******************************************!*\
  !*** ./src/RestaurantImages/ramen-4.png ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "44971d1462f7661beb77.png";

/***/ }),

/***/ "./src/RestaurantImages/ramen-5.png":
/*!******************************************!*\
  !*** ./src/RestaurantImages/ramen-5.png ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "34e62303ea82270ae52d.png";

/***/ }),

/***/ "./src/RestaurantImages/salad-2.png":
/*!******************************************!*\
  !*** ./src/RestaurantImages/salad-2.png ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "71a35200b70ab3e9224a.png";

/***/ }),

/***/ "./src/RestaurantImages/salad-3.png":
/*!******************************************!*\
  !*** ./src/RestaurantImages/salad-3.png ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b30369cd42bd59723ceb.png";

/***/ }),

/***/ "./src/RestaurantImages/salad-4.png":
/*!******************************************!*\
  !*** ./src/RestaurantImages/salad-4.png ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7ae07daeb7ddbe797a62.png";

/***/ }),

/***/ "./src/RestaurantImages/wallpaper-7.jpg":
/*!**********************************************!*\
  !*** ./src/RestaurantImages/wallpaper-7.jpg ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f16a4866be89926d5ea3.jpg";

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
/******/ 			id: moduleId,
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _src_RestaurantImages_github_logo_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/RestaurantImages/github-logo.svg */ "./src/RestaurantImages/github-logo.svg");
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home */ "./src/home.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu */ "./src/menu.js");
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contact */ "./src/contact.js");






const render = (() => {

    function renderHeader() {
      const header = document.createElement('div');
      const title = document.createElement('h1');
      header.setAttribute('id','header');
      title.textContent = 'The Rumbling';
    //   Appends
      document.body.appendChild(header);
      header.appendChild(title);
    };
    function renderNav(){
        const nav = document.createElement('nav');
        nav.setAttribute('id','nav');
        document.body.appendChild(nav);
        const navItems = ['Home','Menu','Contact'];
        // Menu items
        for (let i = 0; i < navItems.length; i += 1) {
          const navItem = document.createElement('a');
          navItem.id = navItems[i];
          navItem.classList.add('nav-link');
          navItem.setAttribute('href', '#');
          navItem.textContent = navItems[i];
          nav.appendChild(navItem);
        }
    };

    function renderContent(){
        const section = document.createElement('section');
        section.setAttribute('id','content');
        document.body.appendChild(section)
    };
    function renderFooter(){
        const footer = document.createElement('footer');
        const p = document.createElement('p');
        const link = document.createElement('a');
        const logo = document.createElement('img');
        p.textContent = 'Copyright © 2021 AminuMado';
        link.setAttribute('href','https://github.com/AminuMado');
        link.setAttribute('target','blank');
        logo.setAttribute('src',_src_RestaurantImages_github_logo_svg__WEBPACK_IMPORTED_MODULE_1__);
        footer.classList.add('footer');
        logo.classList.add('github-logo');
        // Appends
        link.appendChild(logo);
        footer.appendChild(p);
        footer.appendChild(link);
        document.body.appendChild(footer);
    };
    function buttonsHandler() {
        const menuItems = document.querySelectorAll('#nav a');
        const menuItemHome = menuItems[0];
        const menuItemMenu = menuItems[1];
        const menuItemContacts = menuItems[2];
    
        function removeCurrentClass() {
          menuItems.forEach((element) => {
            element.classList.remove('current');
          });
        }
    
        document.addEventListener('click', (event) => {
          if (event.target.id === 'Home'){
            removeCurrentClass();
            content.textContent = '';
            _home__WEBPACK_IMPORTED_MODULE_2__["default"].render();
            menuItemHome.classList.add('current');
          } else if (event.target.id === 'Menu'){
            removeCurrentClass();
            content.textContent = '';
            _menu__WEBPACK_IMPORTED_MODULE_3__["default"].render();
            menuItemMenu.classList.add('current');
          } else if (event.target.id === 'Contact'){
            removeCurrentClass();
            content.textContent = '';
            _contact__WEBPACK_IMPORTED_MODULE_4__["default"].render();
            menuItemContacts.classList.add('current');
          }else return;
    });
}
    function start(){
        renderHeader();
        renderNav();
        renderContent();
        renderFooter();
        buttonsHandler();
        _home__WEBPACK_IMPORTED_MODULE_2__["default"].render();
    };
    return {start}
  })();
  render.start();
  
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsaUJBQWlCLDhEQUFNO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsaUJBQWlCLDhEQUFNO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsaUJBQWlCLDhEQUFNO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsaUJBQWlCLDhEQUFNO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsaUJBQWlCLDhEQUFNO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBLGlCQUFpQiw4REFBTTtBQUN2QjtBQUNBO0FBQ0E7O0FBRUEsU0FBUztBQUNUO0FBQ0E7QUFDQSxpQkFBaUIsOERBQU07QUFDdkI7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxpQkFBaUIsOERBQU07QUFDdkI7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0EsaUJBQWlCLDhEQUFNO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsaUJBQWlCLDhEQUFNO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsaUJBQWlCLCtEQUFNO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsaUJBQWlCLCtEQUFNO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsaUJBQWlCLCtEQUFNO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsaUJBQWlCLCtEQUFNO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsaUJBQWlCLCtEQUFNO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLEdBQUc7QUFDSDtBQUNBLEVBQUUsaUVBQWUsSUFBSSxFQUFDO0FBQ3RCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQzlOQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOztVQUVBO1VBQ0E7Ozs7O1dDekJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2ZBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7Ozs7Ozs7Ozs7OztBQ3JCb0I7QUFDeUM7QUFDcEM7QUFDQTtBQUNNOztBQUUvQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IscUJBQXFCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0Msa0VBQU87QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLG9EQUFXO0FBQ3ZCO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQSxZQUFZLG9EQUFXO0FBQ3ZCO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQSxZQUFZLHVEQUFjO0FBQzFCO0FBQ0EsV0FBVztBQUNYLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsb0RBQVc7QUFDbkI7QUFDQSxZQUFZO0FBQ1osR0FBRztBQUNIO0FBQ0EsRSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9jb250YWN0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9ob21lLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tZW51LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiL2hvbWUvYW1pbnVtYWRvL0dpdC1SZXBvc2l0b3J5L1Byb2plY3RzL1RoZU9kaW5Qcm9qZWN0L1Jlc3RhdXJhbnQtUGFnZS9zcmMvUmVzdGF1cmFudEltYWdlcy93YWxscGFwZXItNy5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PURhbmNpbmcrU2NyaXB0OndnaHRANDAwOzUwMDs2MDA7NzAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJcXG4qe1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIGZvbnQtZmFtaWx5OiAnRGFuY2luZyBTY3JpcHQnLCBjdXJzaXZlO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICB9XFxuICBcXG5ib2R5e1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiBhdXRvO1xcbiAgbWluLWhlaWdodDogMTAwdmg7XFxuICBncmlkLXRlbXBsYXRlLWFyZWFzOiAgXFxcImhlYWRlclxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICBcXFwibmF2XFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIFxcXCJjb250ZW50XFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIFxcXCJmb290ZXJcXFwiO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxMDBweCAxMDBweCAxZnIgMzBweDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG4gIC13ZWJraXQtYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIC1tb3otYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIC1vLWJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XFxufVxcbiNoZWFkZXJ7XFxuICBncmlkLWFyZWE6IGhlYWRlcjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDQwcHg7XFxufVxcbiNuYXZ7XFxuICBncmlkLWFyZWE6IG5hdjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBnYXA6IDQwcHg7XFxuICBmb250LXNpemU6IDUwcHg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbiNuYXYgPiBhe1xcbiAgdGV4dC1kZWNvcmF0aW9uOm5vbmU7XFxufVxcbiNuYXYgPmE6aG92ZXJ7XFxuICBjb2xvcjpvcmFuZ2U7XFxufVxcbi5jdXJyZW50e1xcbiAgY29sb3I6b3JhbmdlO1xcbn1cXG4jY29udGVudHtcXG4gIGdyaWQtYXJlYTogY29udGVudDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMTYwcHg7XFxufVxcbi8qIE1lbnUgKi9cXG4jcGFzdGFDb250YWluZXIsI3JhbWVuQ29udGFpbmVyLCNzYWxhZENvbnRhaW5lcntcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDIwcHg7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gXFxufVxcbiNwYXN0YUNvbnRhaW5lciA+IGgxe1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMzBweCAxNXB4O1xcbiAgZm9udC1zaXplOiA1MHB4O1xcbiAgYm9yZGVyLXRvcDogNHB4IHNvbGlkIGJsYWNrO1xcbiAgYm9yZGVyLWJvdHRvbTogNHB4IHNvbGlkIGJsYWNrO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgd2lkdGg6IDk2JTtcXG59XFxuI3JhbWVuQ29udGFpbmVyID4gaDF7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAzMHB4IDE1cHg7XFxuICBmb250LXNpemU6IDUwcHg7XFxuICBib3JkZXItdG9wOiA0cHggc29saWQgYmxhY2s7XFxuICBib3JkZXItYm90dG9tOiA0cHggc29saWQgYmxhY2s7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB3aWR0aDogOTMlOyBcXG59XFxuI3NhbGFkQ29udGFpbmVyID4gaDF7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAzMHB4IDE1cHg7XFxuICBmb250LXNpemU6IDQwcHg7XFxuICBib3JkZXItdG9wOiA0cHggc29saWQgYmxhY2s7XFxuICBib3JkZXItYm90dG9tOiA0cHggc29saWQgYmxhY2s7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB3aWR0aDo5MCU7XFxufVxcbi5jYXJkLWNvbnRhaW5lcntcXG4gIGJhY2tncm91bmQ6IHJnYigwIDAgMCAvIDcwJSk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHdpZHRoOiAyNzVweDtcXG4gIGhlaWdodDogYXV0bztcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAtd2Via2l0LXRyYW5zaXRpb246IGJveC1zaGFkb3cgMjAwbXMgZWFzZSwtd2Via2l0LXRyYW5zZm9ybSAyMDBtcyBlYXNlO1xcbiAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAyMDBtcyBlYXNlLHRyYW5zZm9ybSAyMDBtcyBlYXNlO1xcbiAgYm94LXNoYWRvdzogMHB4IDBweCAwIGJsYWNrO1xcbiAgZ2FwOiAxMHB4O1xcbiAgcGFkZGluZzoxMHB4O1xcblxcbn1cXG4uY2FyZC1jb250YWluZXI6aG92ZXJ7XFxuICBib3gtc2hhZG93OiAtOHB4IDhweCAwcHggMHB4IGJsYWNrO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoNHB4LC00cHgpO1xcblxcbn1cXG4ucGxhY2Vob2xkZXJ7XFxuICBjb2xvcjogYXp1cmU7XFxuICBncmlkLWFyZWE6IHBsYWNlaG9sZGVyO1xcbiAgd2lkdGg6IDIwMHB4O1xcbiAgaGVpZ2h0OiAyMDBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG59XFxuLnBsYWNlaG9sZGVyID4gaW1ne1xcbiAgd2lkdGg6IGluaGVyaXQ7XFxuICBoZWlnaHQ6IGluaGVyaXQ7XFxufVxcbi8qIEZvb3RlciAqL1xcbi5mb290ZXJ7XFxuICBncmlkLWFyZWE6IGZvb3RlcjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IDYuNXB4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgZm9udC1zaXplOiAyNXB4O1xcbiAgbWFyZ2luLXRvcDogYXV0bztcXG4gIGJhY2tncm91bmQ6IHJnYigwIDAgMCk7XFxuICBtYXJnaW4tdG9wOiA1cHg7XFxufVxcbi5naXRodWItbG9nb3tcXG4gICAgd2lkdGg6IDIwcHg7XFxuICAgIGhlaWdodDoyMHB4O1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMzAwbXMgbGluZWFyO1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggNXB4IGdvbGQ7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgZmlsdGVyOiBpbnZlcnQoNjElKSBzZXBpYSg2MCUpIHNhdHVyYXRlKDU3NiUpIGh1ZS1yb3RhdGUoMzUzZGVnKSBicmlnaHRuZXNzKDk2JSkgY29udHJhc3QoOTMlKTt9XFxuLmdpdGh1Yi1sb2dvOmhvdmVye1xcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKSBzY2FsZSgxLjMpO1xcbiAgICAgICAgYm94LXNoYWRvdzogMHB4IDBweCA1cHggY3JpbXNvbjtcXG4gICAgICAgIGZpbHRlcjogaW52ZXJ0KDM2JSkgc2VwaWEoNjglKSBzYXR1cmF0ZSgxNDQxJSkgaHVlLXJvdGF0ZSgzMzJkZWcpIGJyaWdodG5lc3MoNjMlKSBjb250cmFzdCgxMjAlKTtcXG5cXG59XFxuLyogSG9tZSBQYWdlKi9cXG4jYWJvdXQge1xcbiAgICBtYXJnaW4tdG9wOiAxNTBweDtcXG4gICAgZm9udC1zaXplOiAzMHB4O1xcbn1cXG4jYWJvdXQgaDEge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDMwcHggMTVweDtcXG4gICAgZm9udC1zaXplOiAzNXB4O1xcbiAgICBib3JkZXItdG9wOiA0cHggc29saWQgYmxhY2s7XFxuICAgIGJvcmRlci1ib3R0b206IDRweCBzb2xpZCBibGFjaztcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcblxcbn1cXG4vKiBNRU5VICovXFxuaDIge1xcbiAgZm9udC1zaXplOiAzMHB4O1xcbn1cXG5cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCI7QUFJQTtJQUNJLFNBQVM7SUFDVCxVQUFVO0lBQ1Ysc0JBQXNCO0lBQ3RCLHNDQUFzQztJQUN0QyxZQUFZO0VBQ2Q7O0FBRUY7RUFDRSxhQUFhO0VBQ2IsV0FBVztFQUNYLFlBQVk7RUFDWixpQkFBaUI7RUFDakI7OztnQ0FHOEI7RUFDOUIsd0NBQXdDO0VBQ3hDLDBCQUEwQjtFQUMxQix5REFBa0k7RUFDbEksOEJBQThCO0VBQzlCLDJCQUEyQjtFQUMzQix5QkFBeUI7RUFDekIsc0JBQXNCO0VBQ3RCLDRCQUE0QjtFQUM1QixrQ0FBa0M7QUFDcEM7QUFDQTtFQUNFLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxjQUFjO0VBQ2QsYUFBYTtFQUNiLGVBQWU7RUFDZixTQUFTO0VBQ1QsZUFBZTtFQUNmLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7QUFDQTtFQUNFLG9CQUFvQjtBQUN0QjtBQUNBO0VBQ0UsWUFBWTtBQUNkO0FBQ0E7RUFDRSxZQUFZO0FBQ2Q7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQixVQUFVO0FBQ1o7QUFDQSxTQUFTO0FBQ1Q7RUFDRSxhQUFhO0VBQ2IsU0FBUztFQUNULGVBQWU7RUFDZix1QkFBdUI7O0FBRXpCO0FBQ0E7RUFDRSxTQUFTO0VBQ1Qsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZiwyQkFBMkI7RUFDM0IsOEJBQThCO0VBQzlCLGtCQUFrQjtFQUNsQixVQUFVO0FBQ1o7QUFDQTtFQUNFLFNBQVM7RUFDVCxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLDJCQUEyQjtFQUMzQiw4QkFBOEI7RUFDOUIsa0JBQWtCO0VBQ2xCLFVBQVU7QUFDWjtBQUNBO0VBQ0UsU0FBUztFQUNULGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsMkJBQTJCO0VBQzNCLDhCQUE4QjtFQUM5QixrQkFBa0I7RUFDbEIsU0FBUztBQUNYO0FBQ0E7RUFDRSw0QkFBNEI7RUFDNUIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixzRUFBc0U7RUFDdEUsc0RBQXNEO0VBQ3RELDJCQUEyQjtFQUMzQixTQUFTO0VBQ1QsWUFBWTs7QUFFZDtBQUNBO0VBQ0Usa0NBQWtDO0VBQ2xDLDhCQUE4Qjs7QUFFaEM7QUFDQTtFQUNFLFlBQVk7RUFDWixzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLGFBQWE7RUFDYixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLGNBQWM7RUFDZCxlQUFlO0FBQ2pCO0FBQ0EsV0FBVztBQUNYO0VBQ0UsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLFVBQVU7RUFDVixXQUFXO0VBQ1gsYUFBYTtFQUNiLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsc0JBQXNCO0VBQ3RCLGVBQWU7QUFDakI7QUFDQTtJQUNJLFdBQVc7SUFDWCxXQUFXO0lBQ1gsNEJBQTRCO0lBQzVCLGtCQUFrQjtJQUNsQiw0QkFBNEI7SUFDNUIsZUFBZTtJQUNmLDhGQUE4RixDQUFDO0FBQ25HO1FBQ1Esb0NBQW9DO1FBQ3BDLCtCQUErQjtRQUMvQixnR0FBZ0c7O0FBRXhHO0FBQ0EsYUFBYTtBQUNiO0lBQ0ksaUJBQWlCO0lBQ2pCLGVBQWU7QUFDbkI7QUFDQTtJQUNJLFNBQVM7SUFDVCxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLDJCQUEyQjtJQUMzQiw4QkFBOEI7SUFDOUIsa0JBQWtCOztBQUV0QjtBQUNBLFNBQVM7QUFDVDtFQUNFLGVBQWU7QUFDakJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiXFxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9RGFuY2luZytTY3JpcHQ6d2dodEA0MDA7NTAwOzYwMDs3MDAmZGlzcGxheT1zd2FwJyk7XFxuXFxuXFxuKntcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBmb250LWZhbWlseTogJ0RhbmNpbmcgU2NyaXB0JywgY3Vyc2l2ZTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgfVxcbiAgXFxuYm9keXtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogYXV0bztcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogIFxcXCJoZWFkZXJcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgXFxcIm5hdlxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICBcXFwiY29udGVudFxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICBcXFwiZm9vdGVyXFxcIjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMTAwcHggMTAwcHggMWZyIDMwcHg7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvaG9tZS9hbWludW1hZG8vR2l0LVJlcG9zaXRvcnkvUHJvamVjdHMvVGhlT2RpblByb2plY3QvUmVzdGF1cmFudC1QYWdlL3NyYy9SZXN0YXVyYW50SW1hZ2VzL3dhbGxwYXBlci03LmpwZyk7XFxuICAtd2Via2l0LWJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAtbW96LWJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAtby1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xcbn1cXG4jaGVhZGVye1xcbiAgZ3JpZC1hcmVhOiBoZWFkZXI7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZm9udC1zaXplOiA0MHB4O1xcbn1cXG4jbmF2e1xcbiAgZ3JpZC1hcmVhOiBuYXY7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAgZ2FwOiA0MHB4O1xcbiAgZm9udC1zaXplOiA1MHB4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4jbmF2ID4gYXtcXG4gIHRleHQtZGVjb3JhdGlvbjpub25lO1xcbn1cXG4jbmF2ID5hOmhvdmVye1xcbiAgY29sb3I6b3JhbmdlO1xcbn1cXG4uY3VycmVudHtcXG4gIGNvbG9yOm9yYW5nZTtcXG59XFxuI2NvbnRlbnR7XFxuICBncmlkLWFyZWE6IGNvbnRlbnQ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDE2MHB4O1xcbn1cXG4vKiBNZW51ICovXFxuI3Bhc3RhQ29udGFpbmVyLCNyYW1lbkNvbnRhaW5lciwjc2FsYWRDb250YWluZXJ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAyMHB4O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuIFxcbn1cXG4jcGFzdGFDb250YWluZXIgPiBoMXtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDMwcHggMTVweDtcXG4gIGZvbnQtc2l6ZTogNTBweDtcXG4gIGJvcmRlci10b3A6IDRweCBzb2xpZCBibGFjaztcXG4gIGJvcmRlci1ib3R0b206IDRweCBzb2xpZCBibGFjaztcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHdpZHRoOiA5NiU7XFxufVxcbiNyYW1lbkNvbnRhaW5lciA+IGgxe1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMzBweCAxNXB4O1xcbiAgZm9udC1zaXplOiA1MHB4O1xcbiAgYm9yZGVyLXRvcDogNHB4IHNvbGlkIGJsYWNrO1xcbiAgYm9yZGVyLWJvdHRvbTogNHB4IHNvbGlkIGJsYWNrO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgd2lkdGg6IDkzJTsgXFxufVxcbiNzYWxhZENvbnRhaW5lciA+IGgxe1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMzBweCAxNXB4O1xcbiAgZm9udC1zaXplOiA0MHB4O1xcbiAgYm9yZGVyLXRvcDogNHB4IHNvbGlkIGJsYWNrO1xcbiAgYm9yZGVyLWJvdHRvbTogNHB4IHNvbGlkIGJsYWNrO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgd2lkdGg6OTAlO1xcbn1cXG4uY2FyZC1jb250YWluZXJ7XFxuICBiYWNrZ3JvdW5kOiByZ2IoMCAwIDAgLyA3MCUpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB3aWR0aDogMjc1cHg7XFxuICBoZWlnaHQ6IGF1dG87XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBib3gtc2hhZG93IDIwMG1zIGVhc2UsLXdlYmtpdC10cmFuc2Zvcm0gMjAwbXMgZWFzZTtcXG4gIHRyYW5zaXRpb246IGJveC1zaGFkb3cgMjAwbXMgZWFzZSx0cmFuc2Zvcm0gMjAwbXMgZWFzZTtcXG4gIGJveC1zaGFkb3c6IDBweCAwcHggMCBibGFjaztcXG4gIGdhcDogMTBweDtcXG4gIHBhZGRpbmc6MTBweDtcXG5cXG59XFxuLmNhcmQtY29udGFpbmVyOmhvdmVye1xcbiAgYm94LXNoYWRvdzogLThweCA4cHggMHB4IDBweCBibGFjaztcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDRweCwtNHB4KTtcXG5cXG59XFxuLnBsYWNlaG9sZGVye1xcbiAgY29sb3I6IGF6dXJlO1xcbiAgZ3JpZC1hcmVhOiBwbGFjZWhvbGRlcjtcXG4gIHdpZHRoOiAyMDBweDtcXG4gIGhlaWdodDogMjAwcHg7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxufVxcbi5wbGFjZWhvbGRlciA+IGltZ3tcXG4gIHdpZHRoOiBpbmhlcml0O1xcbiAgaGVpZ2h0OiBpbmhlcml0O1xcbn1cXG4vKiBGb290ZXIgKi9cXG4uZm9vdGVye1xcbiAgZ3JpZC1hcmVhOiBmb290ZXI7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiA2LjVweDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGZvbnQtc2l6ZTogMjVweDtcXG4gIG1hcmdpbi10b3A6IGF1dG87XFxuICBiYWNrZ3JvdW5kOiByZ2IoMCAwIDApO1xcbiAgbWFyZ2luLXRvcDogNXB4O1xcbn1cXG4uZ2l0aHViLWxvZ297XFxuICAgIHdpZHRoOiAyMHB4O1xcbiAgICBoZWlnaHQ6MjBweDtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDMwMG1zIGxpbmVhcjtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDVweCBnb2xkO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGZpbHRlcjogaW52ZXJ0KDYxJSkgc2VwaWEoNjAlKSBzYXR1cmF0ZSg1NzYlKSBodWUtcm90YXRlKDM1M2RlZykgYnJpZ2h0bmVzcyg5NiUpIGNvbnRyYXN0KDkzJSk7fVxcbi5naXRodWItbG9nbzpob3ZlcntcXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZykgc2NhbGUoMS4zKTtcXG4gICAgICAgIGJveC1zaGFkb3c6IDBweCAwcHggNXB4IGNyaW1zb247XFxuICAgICAgICBmaWx0ZXI6IGludmVydCgzNiUpIHNlcGlhKDY4JSkgc2F0dXJhdGUoMTQ0MSUpIGh1ZS1yb3RhdGUoMzMyZGVnKSBicmlnaHRuZXNzKDYzJSkgY29udHJhc3QoMTIwJSk7XFxuXFxufVxcbi8qIEhvbWUgUGFnZSovXFxuI2Fib3V0IHtcXG4gICAgbWFyZ2luLXRvcDogMTUwcHg7XFxuICAgIGZvbnQtc2l6ZTogMzBweDtcXG59XFxuI2Fib3V0IGgxIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAzMHB4IDE1cHg7XFxuICAgIGZvbnQtc2l6ZTogMzVweDtcXG4gICAgYm9yZGVyLXRvcDogNHB4IHNvbGlkIGJsYWNrO1xcbiAgICBib3JkZXItYm90dG9tOiA0cHggc29saWQgYmxhY2s7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG5cXG59XFxuLyogTUVOVSAqL1xcbmgyIHtcXG4gIGZvbnQtc2l6ZTogMzBweDtcXG59XFxuXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuXG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTsgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImNvbnN0IGNvbnRhY3QgPSAoKCkgPT4ge1xuICAgIGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50Jyk7XG4gICAgICAgIGNvbnN0IGFib3V0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnN0IGFib3V0VHh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICAgICAgY29uc3QgdGV4dDEgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnUGFyYWRpcyBJc2xhbmQnKTtcbiAgICAgICAgYWJvdXREaXYuc2V0QXR0cmlidXRlKCdpZCcsICdhYm91dCcpO1xuICAgICAgICBhYm91dFR4dC5hcHBlbmRDaGlsZCh0ZXh0MSk7XG4gICAgICAgIGFib3V0RGl2LmFwcGVuZENoaWxkKGFib3V0VHh0KTtcbiAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZChhYm91dERpdik7XG4gICAgfTtcbiAgICByZXR1cm57cmVuZGVyfTtcbiAgfSkoKTtcbiAgXG4gIGV4cG9ydCBkZWZhdWx0IGNvbnRhY3Q7XG4gICIsIlxuXG5jb25zdCBob21lID0gKCgpID0+IHtcbiAgICBmdW5jdGlvbiByZW5kZXIoKXtcbiAgICAgICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50Jyk7XG4gICAgICAgIGNvbnN0IGFib3V0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnN0IGFib3V0VHh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICAgICAgY29uc3QgYnIxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnInKTtcbiAgICAgICAgY29uc3QgYnIyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnInKTtcbiAgICAgICAgY29uc3QgdGV4dDEgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnVGhpcyBpcyB3aGVyZSBhbGwgd29ybGRzIGNvbnZlcmdlLCBjb21lIHRha2UgeW91ciB0YXN0ZWJ1ZHMgb24gYSB0cmlwJyk7XG4gICAgICAgIGNvbnN0IHRleHQyID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJyYnKTtcbiAgICAgICAgY29uc3QgdGV4dDMgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnRGVkaWNhdGUgeW91ciBIZWFydHMnKTtcbiAgICAgICAgYWJvdXREaXYuc2V0QXR0cmlidXRlKCdpZCcsICdhYm91dCcpO1xuICAgICAgICBhYm91dFR4dC5hcHBlbmRDaGlsZCh0ZXh0MSk7XG4gICAgICAgIGFib3V0VHh0LmFwcGVuZENoaWxkKGJyMSk7XG4gICAgICAgIGFib3V0VHh0LmFwcGVuZENoaWxkKHRleHQyKTtcbiAgICAgICAgYWJvdXRUeHQuYXBwZW5kQ2hpbGQoYnIyKTtcbiAgICAgICAgYWJvdXRUeHQuYXBwZW5kQ2hpbGQodGV4dDMpO1xuICAgICAgICBhYm91dERpdi5hcHBlbmRDaGlsZChhYm91dFR4dCk7XG4gICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoYWJvdXREaXYpO1xuICAgIH07XG4gICAgcmV0dXJue3JlbmRlcn07XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBob21lOyIsImltcG9ydCByYW1lbjEgZnJvbSAnLi4vc3JjL1Jlc3RhdXJhbnRJbWFnZXMvcmFtZW4tMS5wbmcnXG5pbXBvcnQgcmFtZW4yIGZyb20gJy4uL3NyYy9SZXN0YXVyYW50SW1hZ2VzL3JhbWVuLTIucG5nJ1xuaW1wb3J0IHJhbWVuMyBmcm9tICcuLi9zcmMvUmVzdGF1cmFudEltYWdlcy9yYW1lbi0zLnBuZydcbmltcG9ydCByYW1lbjQgZnJvbSAnLi4vc3JjL1Jlc3RhdXJhbnRJbWFnZXMvcmFtZW4tNC5wbmcnXG5pbXBvcnQgcmFtZW41IGZyb20gJy4uL3NyYy9SZXN0YXVyYW50SW1hZ2VzL3JhbWVuLTUucG5nJ1xuaW1wb3J0IHNhbGFkMiBmcm9tICcuLi9zcmMvUmVzdGF1cmFudEltYWdlcy9zYWxhZC0yLnBuZydcbmltcG9ydCBzYWxhZDMgZnJvbSAnLi4vc3JjL1Jlc3RhdXJhbnRJbWFnZXMvc2FsYWQtMy5wbmcnXG5pbXBvcnQgc2FsYWQ0IGZyb20gJy4uL3NyYy9SZXN0YXVyYW50SW1hZ2VzL3NhbGFkLTQucG5nJ1xuaW1wb3J0IHBhc3RhMSBmcm9tICcuLi9zcmMvUmVzdGF1cmFudEltYWdlcy9wYXN0YS0xLnBuZydcbmltcG9ydCBwYXN0YTIgZnJvbSAnLi4vc3JjL1Jlc3RhdXJhbnRJbWFnZXMvcGFzdGEtMi5wbmcnXG5pbXBvcnQgcGFzdGEzIGZyb20gJy4uL3NyYy9SZXN0YXVyYW50SW1hZ2VzL3Bhc3RhLTMucG5nJ1xuaW1wb3J0IHBhc3RhNCBmcm9tICcuLi9zcmMvUmVzdGF1cmFudEltYWdlcy9wYXN0YS00LnBuZydcbmltcG9ydCBwYXN0YTUgZnJvbSAnLi4vc3JjL1Jlc3RhdXJhbnRJbWFnZXMvcGFzdGEtNS5wbmcnXG5pbXBvcnQgcGFzdGE2IGZyb20gJy4uL3NyYy9SZXN0YXVyYW50SW1hZ2VzL3Bhc3RhLTYucG5nJ1xuaW1wb3J0IHBhc3RhNyBmcm9tICcuLi9zcmMvUmVzdGF1cmFudEltYWdlcy9wYXN0YS03LnBuZydcblxuY29uc3QgbWVudSA9ICgoKSA9PiB7XG4gICAgZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKTtcbiAgICAgICAgY29uc3QgcGFzdGFDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29uc3QgcmFtZW5Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29uc3Qgc2FsYWRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29uc3QgcGFzdGFIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgICAgICBjb25zdCByYW1lbkhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgICAgIGNvbnN0IHNhbGFkSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICAgICAgLy8gVEVYVCBOT0RFU1xuICAgICAgICBjb25zdCBwYXN0YVRleHQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnUGFzdGEnKTtcbiAgICAgICAgY29uc3QgcmFtZW5UZXh0ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJ1JhbWVuJyk7XG4gICAgICAgIGNvbnN0IHNhbGFkVGV4dCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCdTYWxhZCcpO1xuICAgICAgICAvL0FwcGVuZHNcbiAgICAgICAgcGFzdGFIZWFkZXIuYXBwZW5kQ2hpbGQocGFzdGFUZXh0KTtcbiAgICAgICAgcmFtZW5IZWFkZXIuYXBwZW5kQ2hpbGQocmFtZW5UZXh0KTtcbiAgICAgICAgc2FsYWRIZWFkZXIuYXBwZW5kQ2hpbGQoc2FsYWRUZXh0KTtcbiAgICAgICAgXG4gICAgICAgIHBhc3RhQ29udGFpbmVyLmFwcGVuZENoaWxkKHBhc3RhSGVhZGVyKTtcbiAgICAgICAgcmFtZW5Db250YWluZXIuYXBwZW5kQ2hpbGQocmFtZW5IZWFkZXIpO1xuICAgICAgICBzYWxhZENvbnRhaW5lci5hcHBlbmRDaGlsZChzYWxhZEhlYWRlcik7XG5cbiAgICAgICAgZnVuY3Rpb24gcmVuZGVyUGFzdGFNZW51KG1lbnUpe1xuICAgICAgICAgICAgbWVudS5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICAgICAgICAgIG1lbnVbaXRlbV0gPSBjcmVhdGVNZW51Q2FyZCgpO1xuICAgICAgICAgICAgICAgIGFwcGVuZENhcmRFbGVtZW50cyhtZW51W2l0ZW1dKTtcbiAgICAgICAgICAgICAgICBzZXRDYXJkRGV0YWlscyhtZW51W2l0ZW1dLGl0ZW0pO1xuICAgICAgICAgICAgICAgIHNldENhcmRBdHRyaWJ1dGVzKG1lbnVbaXRlbV0pO1xuICAgICAgICAgICAgICAgIG1lbnVbaXRlbV0uY2FyZC5jbGFzc0xpc3QuYWRkKCdjYXJkLWNvbnRhaW5lcicpO1xuICAgICAgICAgICAgICAgIHBhc3RhQ29udGFpbmVyLmFwcGVuZENoaWxkKG1lbnVbaXRlbV0uY2FyZCk7XG4gICAgICAgICAgICB9KVxuICAgICAgICB9O1xuICAgICAgICBmdW5jdGlvbiByZW5kZXJSYW1lbk1lbnUobWVudSl7XG4gICAgICAgICAgICBtZW51LmZvckVhY2goaXRlbSA9PntcbiAgICAgICAgICAgICAgICBtZW51W2l0ZW1dID0gY3JlYXRlTWVudUNhcmQoKTtcbiAgICAgICAgICAgICAgICBhcHBlbmRDYXJkRWxlbWVudHMobWVudVtpdGVtXSk7XG4gICAgICAgICAgICAgICAgc2V0Q2FyZERldGFpbHMobWVudVtpdGVtXSxpdGVtKTtcbiAgICAgICAgICAgICAgICBzZXRDYXJkQXR0cmlidXRlcyhtZW51W2l0ZW1dKTtcbiAgICAgICAgICAgICAgICBtZW51W2l0ZW1dLmNhcmQuY2xhc3NMaXN0LmFkZCgnY2FyZC1jb250YWluZXInKTtcbiAgICAgICAgICAgICAgICByYW1lbkNvbnRhaW5lci5hcHBlbmRDaGlsZChtZW51W2l0ZW1dLmNhcmQpO1xuXG4gICAgICAgICAgICB9KVxuICAgICAgICB9O1xuICAgICAgICBmdW5jdGlvbiByZW5kZXJTYWxhZE1lbnUobWVudSl7XG4gICAgICAgICAgICBtZW51LmZvckVhY2goaXRlbSA9PntcbiAgICAgICAgICAgICAgICBtZW51W2l0ZW1dID0gY3JlYXRlTWVudUNhcmQoKTtcbiAgICAgICAgICAgICAgICBhcHBlbmRDYXJkRWxlbWVudHMobWVudVtpdGVtXSk7XG4gICAgICAgICAgICAgICAgc2V0Q2FyZERldGFpbHMobWVudVtpdGVtXSxpdGVtKTtcbiAgICAgICAgICAgICAgICBzZXRDYXJkQXR0cmlidXRlcyhtZW51W2l0ZW1dKTtcbiAgICAgICAgICAgICAgICBtZW51W2l0ZW1dLmNhcmQuY2xhc3NMaXN0LmFkZCgnY2FyZC1jb250YWluZXInKTtcbiAgICAgICAgICAgICAgICBzYWxhZENvbnRhaW5lci5hcHBlbmRDaGlsZChtZW51W2l0ZW1dLmNhcmQpO1xuXG4gICAgICAgICAgICB9KVxuICAgICAgICB9O1xuICAgICAgICBmdW5jdGlvbiBjcmVhdGVNZW51Q2FyZCgpe1xuICAgICAgICAgICAgY29uc3QgY2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgY29uc3QgbmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgICAgICAgICBjb25zdCBwcmljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgICAgIGNvbnN0IHBob3RvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICAgICAgICBjb25zdCBzZXBlcmF0b3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VwZXJhdG9yXCIpO1xuICAgICAgICAgICAgY29uc3QgaW5ncmVkaWVudHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgICAgICBjb25zdCBwbGFjZUhvbGRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgcmV0dXJuIHtjYXJkLG5hbWUscHJpY2UscGhvdG8sc2VwZXJhdG9yLHBsYWNlSG9sZGVyLGluZ3JlZGllbnRzfTtcbiAgICAgICAgIH07XG4gICAgICAgICBmdW5jdGlvbiBhcHBlbmRDYXJkRWxlbWVudHModGFyZ2V0KXtcbiAgICAgICAgICAgIHRhcmdldC5wbGFjZUhvbGRlci5hcHBlbmRDaGlsZCh0YXJnZXQucGhvdG8pO1xuICAgICAgICAgICAgdGFyZ2V0LmNhcmQuYXBwZW5kQ2hpbGQodGFyZ2V0LnByaWNlKTtcbiAgICAgICAgICAgIHRhcmdldC5jYXJkLmFwcGVuZENoaWxkKHRhcmdldC5wbGFjZUhvbGRlcik7XG4gICAgICAgICAgICB0YXJnZXQuY2FyZC5hcHBlbmRDaGlsZCh0YXJnZXQuc2VwZXJhdG9yKTtcbiAgICAgICAgICAgIHRhcmdldC5jYXJkLmFwcGVuZENoaWxkKHRhcmdldC5uYW1lKTtcbiAgICAgICAgICAgIHRhcmdldC5jYXJkLmFwcGVuZENoaWxkKHRhcmdldC5pbmdyZWRpZW50cyk7XG4gICAgICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKHBhc3RhQ29udGFpbmVyKTtcbiAgICAgICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQocmFtZW5Db250YWluZXIpO1xuICAgICAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZChzYWxhZENvbnRhaW5lcik7XG4gICAgICAgICB9O1xuICAgICAgICAgZnVuY3Rpb24gc2V0Q2FyZEF0dHJpYnV0ZXModGFyZ2V0KXtcbiAgICAgICAgICAgIHRhcmdldC5wbGFjZUhvbGRlci5jbGFzc0xpc3QuYWRkKCdwbGFjZWhvbGRlcicpO1xuICAgICAgICAgICAgdGFyZ2V0LnNlcGVyYXRvci5jbGFzc0xpc3QuYWRkKCdzZXBlcmF0b3InKTtcbiAgICAgICAgICAgIHBhc3RhQ29udGFpbmVyLnNldEF0dHJpYnV0ZSgnaWQnLCdwYXN0YUNvbnRhaW5lcicpO1xuICAgICAgICAgICAgcmFtZW5Db250YWluZXIuc2V0QXR0cmlidXRlKCdpZCcsJ3JhbWVuQ29udGFpbmVyJyk7XG4gICAgICAgICAgICBzYWxhZENvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2lkJywnc2FsYWRDb250YWluZXInKTtcbiAgICAgICAgIH1cbiAgICAgICAgIGZ1bmN0aW9uIHNldENhcmREZXRhaWxzKG1lbnVJdGVtLCBpdGVtKXtcbiAgICAgICAgICAgIG1lbnVJdGVtLnBob3RvLnNyYyA9IGl0ZW0uc3JjO1xuICAgICAgICAgICAgbWVudUl0ZW0ubmFtZS5pbm5lclRleHQgPSBpdGVtLm5hbWU7XG4gICAgICAgICAgICBtZW51SXRlbS5wcmljZS5pbm5lclRleHQgPSBpdGVtLnByaWNlO1xuICAgICAgICAgICAgbWVudUl0ZW0uaW5ncmVkaWVudHMuaW5uZXJUZXh0ID0gaXRlbS5pbmdyZWRpZW50cztcbiAgICAgICAgIH07XG5cbiAgICAgICAgY29uc3QgbWVudUl0ZW1zUmFtZW4gPVt7XG4gICAgICAgICAgICBuYW1lOiAnQ2hpY2tlbiBSYW1lbicsXG4gICAgICAgICAgICBzcmM6IHJhbWVuMSxcbiAgICAgICAgICAgIGluZ3JlZGllbnRzOiAnY2hpY2tlbiBicm90aDogY2hpY2tlbiBjaGFzaHUsIHdvb2QgZWFyIG11c2hyb29tcyxmcmllZCBvbmlvbiwgZ3JhdGVkIGNoZWVzZSDCuyBzZXJ2ZWQgd2l0aCB0aGluIG5vb2RsZXMuJyxcbiAgICAgICAgICAgIHByaWNlOiAnJDE1JyxcbiAgICAgICAgICAgIGNhdGVnb3J5OiAncmFtZW4nXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6ICdTaHJpbXAgUmFtZW4nLFxuICAgICAgICAgICAgc3JjOiByYW1lbjIsXG4gICAgICAgICAgICBpbmdyZWRpZW50czogJ3NocmltcCBicm90aDogc2hyaW1wcywgY2lsYW50cm8sIGxpbWUgYW5kIGNoaWxsaSBzYXVjZSwgZ3JhdGVkIGdhcmxpYywgc2NhbGxpb25zLicsXG4gICAgICAgICAgICBwcmljZTogJyQxOCcsXG4gICAgICAgICAgICBjYXRlZ29yeTogJ3JhbWVuJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiAnU2hpbyBCbGFjaycsXG4gICAgICAgICAgICBzcmM6IHJhbWVuMyxcbiAgICAgICAgICAgIGluZ3JlZGllbnRzOiAnc2hpbyBicm90aDogYmxhY2sgZ2FybGljIG9pbCwga2lrdXJhZ2UgbXVzaHJvb21zLCBzZXNhbWUsIHNjYWxsaW9ucy4nLFxuICAgICAgICAgICAgcHJpY2U6ICckMTcnLFxuICAgICAgICAgICAgY2F0ZWdvcnk6ICdyYW1lbidcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogJ1NwaWN5IENoaWNrZW4gUmFtZW4nLFxuICAgICAgICAgICAgc3JjOiByYW1lbjQsXG4gICAgICAgICAgICBpbmdyZWRpZW50czogJ2NoaWNrZW4gYnJvdGg6IGNoaWxsaSBzYXVjZSwgY2hpY2tlbiBjaGFzaHUsIHRhdHN1IGVnZywgZ3JlZW4gb25pb24gwrsgc2VydmVkIHdpdGggdGhpbiBub29kbGVzJyxcbiAgICAgICAgICAgIHByaWNlOiAnJDE5JyxcbiAgICAgICAgICAgIGNhdGVnb3J5OiAncmFtZW4nXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6ICdCZWVmIFJhbWVuJyxcbiAgICAgICAgICAgIHNyYzogcmFtZW41LFxuICAgICAgICAgICAgaW5ncmVkaWVudHM6ICdiZWVmIGJyb3RoOiBiZWVmIGNodW5rcywgbGltZSwgY2lsYW50cm8sIHJlZCBwZXBwZXIsIG9uaW9ucyDCuyBzZXJ2ZWQgd2l0aCB0aGluIG5vb2RsZXMnLFxuICAgICAgICAgICAgcHJpY2U6ICckMTMnLFxuICAgICAgICAgICAgY2F0ZWdvcnk6ICdyYW1lbidcbiAgICAgICAgfV07XG5cbiAgICAgICAgY29uc3QgbWVudUl0ZW1zU2FsYWQgPVt7XG4gICAgICAgICAgICBuYW1lOiAnR3JlZWsgU2FsbW9uJyxcbiAgICAgICAgICAgIHNyYzogc2FsYWQyLFxuICAgICAgICAgICAgaW5ncmVkaWVudHM6ICdTYWxtb24sIFJvbWFpbmUgTGV0dHVjZSwgQ3VjdW1iZXIsIENyb3V0b24nLFxuICAgICAgICAgICAgcHJpY2U6ICckOCcsXG4gICAgICAgICAgICBjYXRlZ29yeTogJ3NhbGFkJ1xuXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6ICdLYWxlIENhZXNhcicsXG4gICAgICAgICAgICBzcmM6IHNhbGFkMyxcbiAgICAgICAgICAgIGluZ3JlZGllbnRzOiAnS2FsZSwgUm9hc3RlZCBDaGlja2VuLCBDaGVlc2UsIEdyYXBlIFRvbWF0b2VzLCBDcm91dG9ucywgQ2Flc2FyIERyZXNzaW5nJyxcbiAgICAgICAgICAgIHByaWNlOiAnJDknLFxuICAgICAgICAgICAgY2F0ZWdvcnk6ICdzYWxhZCdcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogJ0NoaWNrZW4gQ2Vhc2FyJyxcbiAgICAgICAgICAgIHNyYzogc2FsYWQ0LFxuICAgICAgICAgICAgaW5ncmVkaWVudHM6ICdLYWxlLCBSb21haW5lLCBSb2FzdGVkIENoaWNrZW4sIEF2b2NhZG8sIFNoYXZlZCBQYXJtZXNhbiwgQ2Flc2FyIERyZXNzaW5nJyxcbiAgICAgICAgICAgIHByaWNlOiAnJDEwJyxcbiAgICAgICAgICAgIGNhdGVnb3J5OiAnc2FsYWQnXG4gICAgICAgIH1dO1xuXG4gICAgICAgIGNvbnN0IG1lbnVJdGVtc1Bhc3RhID1be1xuICAgICAgICAgICAgbmFtZTogJ0Jyb2NvbGxpJyxcbiAgICAgICAgICAgIHNyYzogcGFzdGExLFxuICAgICAgICAgICAgaW5ncmVkaWVudHM6ICdTcGFnaGV0dGksIEJyb2NvbGxpLCBTZXNhbWUsIEdyb3VuZCBCZWVmJyxcbiAgICAgICAgICAgIHByaWNlOiAnJDEyJyxcbiAgICAgICAgICAgIGNhdGVnb3J5OiAncGFzdGEnXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6ICdQYXJtZXNpYW4nLFxuICAgICAgICAgICAgc3JjOiBwYXN0YTIsXG4gICAgICAgICAgICBpbmdyZWRpZW50czogJ1NwYWdoZXR0aSwgUGFybWVzaWFuLCBDaGlja2VuIFN0cmlwcycsXG4gICAgICAgICAgICBwcmljZTogJyQxMycsXG4gICAgICAgICAgICBjYXRlZ29yeTogJ3Bhc3RhJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiAnR3JhcGUgVG9tYXRvJyxcbiAgICAgICAgICAgIHNyYzogcGFzdGEzLFxuICAgICAgICAgICAgaW5ncmVkaWVudHM6ICdTcGFnaGV0dGksIEdyYXBlIFRvbWF0bywgU2hhdmVkIFBhcm1lc2lhbicsXG4gICAgICAgICAgICBwcmljZTogJyQxOScsXG4gICAgICAgICAgICBjYXRlZ29yeTogJ3Bhc3RhJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiAnQ2xhc3NpYycsXG4gICAgICAgICAgICBzcmM6IHBhc3RhNCxcbiAgICAgICAgICAgIGluZ3JlZGllbnRzOiAnU3BhZ2hldHRpLCBUb21hdG8gU2F1Y2UnLFxuICAgICAgICAgICAgcHJpY2U6ICckMTAnLFxuICAgICAgICAgICAgY2F0ZWdvcnk6ICdwYXN0YSdcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogJ01lYXRiYWxsJyxcbiAgICAgICAgICAgIHNyYzogcGFzdGE1LFxuICAgICAgICAgICAgaW5ncmVkaWVudHM6ICdTcGFnaGV0dGksIE1lYXRiYWxsLCBUb21hdG8gU2F1Y2UnLFxuICAgICAgICAgICAgcHJpY2U6ICckMTgnLFxuICAgICAgICAgICAgY2F0ZWdvcnk6ICdwYXN0YSdcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogJ1NhdXNhZ2UnLFxuICAgICAgICAgICAgc3JjOiBwYXN0YTYsXG4gICAgICAgICAgICBpbmdyZWRpZW50czogJ1NwYWdoZXR0aSwgU2F1c2FnZSBTdHJpcHMnLFxuICAgICAgICAgICAgcHJpY2U6ICckMTYnLFxuICAgICAgICAgICAgY2F0ZWdvcnk6ICdwYXN0YSdcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogJ0NsYW0nLFxuICAgICAgICAgICAgc3JjOiBwYXN0YTcsXG4gICAgICAgICAgICBpbmdyZWRpZW50czogJ1NwYWdoZXR0aSwgU21hbGwgQ2xhbXMnLFxuICAgICAgICAgICAgcHJpY2U6ICckMjInLFxuICAgICAgICAgICAgY2F0ZWdvcnk6ICdwYXN0YSdcbiAgICAgICAgfV07XG4gICAgICAgIHJlbmRlclJhbWVuTWVudShtZW51SXRlbXNSYW1lbik7XG4gICAgICAgIHJlbmRlclBhc3RhTWVudShtZW51SXRlbXNQYXN0YSk7XG4gICAgICAgIHJlbmRlclNhbGFkTWVudShtZW51SXRlbXNTYWxhZCk7XG4gICAgICAgIFxuICAgIH1cbiAgICByZXR1cm4geyByZW5kZXIgfTtcbiAgfSkoKTtcbiAgXG4gIGV4cG9ydCBkZWZhdWx0IG1lbnU7XG4gICIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiaW1wb3J0ICcuL3N0eWxlLmNzcydcbmltcG9ydCBnaXRJY29uIGZyb20gJy4uL3NyYy9SZXN0YXVyYW50SW1hZ2VzL2dpdGh1Yi1sb2dvLnN2ZydcbmltcG9ydCBob21lIGZyb20gJy4vaG9tZSdcbmltcG9ydCBtZW51IGZyb20gJy4vbWVudSdcbmltcG9ydCBjb250YWN0IGZyb20gJy4vY29udGFjdCdcblxuY29uc3QgcmVuZGVyID0gKCgpID0+IHtcblxuICAgIGZ1bmN0aW9uIHJlbmRlckhlYWRlcigpIHtcbiAgICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgICAgaGVhZGVyLnNldEF0dHJpYnV0ZSgnaWQnLCdoZWFkZXInKTtcbiAgICAgIHRpdGxlLnRleHRDb250ZW50ID0gJ1RoZSBSdW1ibGluZyc7XG4gICAgLy8gICBBcHBlbmRzXG4gICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGhlYWRlcik7XG4gICAgICBoZWFkZXIuYXBwZW5kQ2hpbGQodGl0bGUpO1xuICAgIH07XG4gICAgZnVuY3Rpb24gcmVuZGVyTmF2KCl7XG4gICAgICAgIGNvbnN0IG5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ25hdicpO1xuICAgICAgICBuYXYuc2V0QXR0cmlidXRlKCdpZCcsJ25hdicpO1xuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG5hdik7XG4gICAgICAgIGNvbnN0IG5hdkl0ZW1zID0gWydIb21lJywnTWVudScsJ0NvbnRhY3QnXTtcbiAgICAgICAgLy8gTWVudSBpdGVtc1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG5hdkl0ZW1zLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgY29uc3QgbmF2SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICAgICAgICBuYXZJdGVtLmlkID0gbmF2SXRlbXNbaV07XG4gICAgICAgICAgbmF2SXRlbS5jbGFzc0xpc3QuYWRkKCduYXYtbGluaycpO1xuICAgICAgICAgIG5hdkl0ZW0uc2V0QXR0cmlidXRlKCdocmVmJywgJyMnKTtcbiAgICAgICAgICBuYXZJdGVtLnRleHRDb250ZW50ID0gbmF2SXRlbXNbaV07XG4gICAgICAgICAgbmF2LmFwcGVuZENoaWxkKG5hdkl0ZW0pO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIHJlbmRlckNvbnRlbnQoKXtcbiAgICAgICAgY29uc3Qgc2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcbiAgICAgICAgc2VjdGlvbi5zZXRBdHRyaWJ1dGUoJ2lkJywnY29udGVudCcpO1xuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHNlY3Rpb24pXG4gICAgfTtcbiAgICBmdW5jdGlvbiByZW5kZXJGb290ZXIoKXtcbiAgICAgICAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9vdGVyJyk7XG4gICAgICAgIGNvbnN0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIGNvbnN0IGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgICAgIGNvbnN0IGxvZ28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgICAgcC50ZXh0Q29udGVudCA9ICdDb3B5cmlnaHQgwqkgMjAyMSBBbWludU1hZG8nO1xuICAgICAgICBsaW5rLnNldEF0dHJpYnV0ZSgnaHJlZicsJ2h0dHBzOi8vZ2l0aHViLmNvbS9BbWludU1hZG8nKTtcbiAgICAgICAgbGluay5zZXRBdHRyaWJ1dGUoJ3RhcmdldCcsJ2JsYW5rJyk7XG4gICAgICAgIGxvZ28uc2V0QXR0cmlidXRlKCdzcmMnLGdpdEljb24pO1xuICAgICAgICBmb290ZXIuY2xhc3NMaXN0LmFkZCgnZm9vdGVyJyk7XG4gICAgICAgIGxvZ28uY2xhc3NMaXN0LmFkZCgnZ2l0aHViLWxvZ28nKTtcbiAgICAgICAgLy8gQXBwZW5kc1xuICAgICAgICBsaW5rLmFwcGVuZENoaWxkKGxvZ28pO1xuICAgICAgICBmb290ZXIuYXBwZW5kQ2hpbGQocCk7XG4gICAgICAgIGZvb3Rlci5hcHBlbmRDaGlsZChsaW5rKTtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChmb290ZXIpO1xuICAgIH07XG4gICAgZnVuY3Rpb24gYnV0dG9uc0hhbmRsZXIoKSB7XG4gICAgICAgIGNvbnN0IG1lbnVJdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyNuYXYgYScpO1xuICAgICAgICBjb25zdCBtZW51SXRlbUhvbWUgPSBtZW51SXRlbXNbMF07XG4gICAgICAgIGNvbnN0IG1lbnVJdGVtTWVudSA9IG1lbnVJdGVtc1sxXTtcbiAgICAgICAgY29uc3QgbWVudUl0ZW1Db250YWN0cyA9IG1lbnVJdGVtc1syXTtcbiAgICBcbiAgICAgICAgZnVuY3Rpb24gcmVtb3ZlQ3VycmVudENsYXNzKCkge1xuICAgICAgICAgIG1lbnVJdGVtcy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2N1cnJlbnQnKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIFxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgICAgIGlmIChldmVudC50YXJnZXQuaWQgPT09ICdIb21lJyl7XG4gICAgICAgICAgICByZW1vdmVDdXJyZW50Q2xhc3MoKTtcbiAgICAgICAgICAgIGNvbnRlbnQudGV4dENvbnRlbnQgPSAnJztcbiAgICAgICAgICAgIGhvbWUucmVuZGVyKCk7XG4gICAgICAgICAgICBtZW51SXRlbUhvbWUuY2xhc3NMaXN0LmFkZCgnY3VycmVudCcpO1xuICAgICAgICAgIH0gZWxzZSBpZiAoZXZlbnQudGFyZ2V0LmlkID09PSAnTWVudScpe1xuICAgICAgICAgICAgcmVtb3ZlQ3VycmVudENsYXNzKCk7XG4gICAgICAgICAgICBjb250ZW50LnRleHRDb250ZW50ID0gJyc7XG4gICAgICAgICAgICBtZW51LnJlbmRlcigpO1xuICAgICAgICAgICAgbWVudUl0ZW1NZW51LmNsYXNzTGlzdC5hZGQoJ2N1cnJlbnQnKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKGV2ZW50LnRhcmdldC5pZCA9PT0gJ0NvbnRhY3QnKXtcbiAgICAgICAgICAgIHJlbW92ZUN1cnJlbnRDbGFzcygpO1xuICAgICAgICAgICAgY29udGVudC50ZXh0Q29udGVudCA9ICcnO1xuICAgICAgICAgICAgY29udGFjdC5yZW5kZXIoKTtcbiAgICAgICAgICAgIG1lbnVJdGVtQ29udGFjdHMuY2xhc3NMaXN0LmFkZCgnY3VycmVudCcpO1xuICAgICAgICAgIH1lbHNlIHJldHVybjtcbiAgICB9KTtcbn1cbiAgICBmdW5jdGlvbiBzdGFydCgpe1xuICAgICAgICByZW5kZXJIZWFkZXIoKTtcbiAgICAgICAgcmVuZGVyTmF2KCk7XG4gICAgICAgIHJlbmRlckNvbnRlbnQoKTtcbiAgICAgICAgcmVuZGVyRm9vdGVyKCk7XG4gICAgICAgIGJ1dHRvbnNIYW5kbGVyKCk7XG4gICAgICAgIGhvbWUucmVuZGVyKCk7XG4gICAgfTtcbiAgICByZXR1cm4ge3N0YXJ0fVxuICB9KSgpO1xuICByZW5kZXIuc3RhcnQoKTtcbiAgIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9