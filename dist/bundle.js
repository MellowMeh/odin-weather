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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style/index.css":
/*!*******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style/index.css ***!
  \*******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `/*CSS Reset*/\n* {\n  box-sizing: border-box;\n  margin: 0px;\n  padding: 0px;\n  border: none;\n  list-style-type: none;\n  font-family: var(--default-font-family);\n  font-weight: 200;\n}\n\n:root {\n  font-size: 16px;\n}\n\na {\n  color: inherit;\n  text-decoration: inherit;\n}\n\nimg {\n  max-width: 100%;\n  height: auto;\n}\n\nsvg {\n  color: var(--color-base-text);\n}\n\ninput::-webkit-outer-spin-button,\ninput::-webkit-inner-spin-button {\n  -webkit-appearance: none;\n  margin: 0;\n  padding: 0;\n}\n\ninput[type=\"number\"] {\n  -moz-appearance: textfield;\n}\n\ntextarea:focus,\ninput:focus {\n  outline: none;\n}\n\n/*Dark and Light Themes by System Preference*/\n:root,\n:root.light {\n  --color-base-bg: var(--white);\n  --color-nav-bg: var(--off-white);\n  --color-accent-bg: var(--dark-grey);\n  --color-base-text: var(--dark-grey);\n  --color-hover: rgba(220, 220, 220, 0.3);\n  --color-selected: rgba(66, 133, 244, 0.3);\n  --theme-name: \"light\";\n}\n\n@media (prefers-color-scheme: dark) {\n  :root {\n    --color-base-bg: var(--dark-grey);\n    --color-nav-bg: var(--mid-gray);\n    --color-accent-bg: var(--off-white);\n    --color-base-text: var(--white);\n    --color-hover: rgba(294, 186, 105, 0.05);\n    --theme-name: \"dark\";\n  }\n}\n\n:root.dark {\n  --color-base-bg: var(--dark-grey);\n  --color-nav-bg: var(--mid-gray);\n  --color-accent-bg: var(--off-white);\n  --color-base-text: var(--white);\n  --color-hover: rgba(294, 186, 105, 0.05);\n  --theme-name: \"dark\";\n}\n\nbody {\n  background-color: var(--color-base-bg);\n  color: var(--color-base-text);\n  width: 100svw;\n  height: 100svh;\n  overflow: hidden;\n}\n\n.theme-name::after {\n  content: var(--theme-name);\n}\n\n/*Default CSS Custom Variables*/\n:root {\n  --default-size: clamp(2.25rem, 2vw + 1.5rem, 3.25rem);\n  --default-max-inline-size: 66ch;\n  --default-line-height: 1.65;\n  --default-font-family: Inter, Roboto, \"Helvetica Neue\", \"Arial Nova\",\n    \"Nimbus Sans\", Arial, sans-serif;\n  --dark-grey: #18191a;\n  --mid-gray: #242526;\n  --light-grey: #3a3b3c;\n  --blue: #4285f4;\n  --white: #e4e6eb;\n  --off-white: #b0b3b8;\n}\n\n/*Theme Select Slider*/\n.switch {\n  position: relative;\n  display: inline-block;\n  width: 60px;\n  height: 34px;\n}\n\n.switch input {\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n\n.slider {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  height: 26px;\n  width: 46px;\n  background-color: var(--color-accent-bg);\n  border: 3px solid black;\n  -webkit-transition: 0.4s;\n  transition: 0.4s;\n}\n\n.slider:before {\n  position: absolute;\n  content: \"\";\n  height: 20px;\n  width: 20px;\n  left: 0px;\n  bottom: 0px;\n  background-color: var(--light-grey);\n  -webkit-transition: 0.4s;\n  transition: 0.4s;\n}\n\ninput:checked + .slider {\n  background-color: var(--color-accent-bg);\n}\n\ninput:focus + .slider {\n  background-color: var(--color-accent-bg);\n}\n\ninput:checked + .slider:before {\n  -webkit-transform: translateX(20px);\n  -ms-transform: translateX(20px);\n  transform: translateX(20px);\n}\n\n.slider.round {\n  border-radius: 34px;\n}\n\n.slider.round:before {\n  border-radius: 50%;\n}\n\n/* Webpage specific styling*/\nheader {\n  text-transform: capitalize;\n  text-align: center;\n  height: 5svh;\n  background-color: var(--color-nav-bg);\n  border-radius: 10px;\n}\n\nmain {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  height: 90svh;\n}\n\n.left-container,\n.right-container {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.weather-details-container {\n  margin-top: 20px;\n  height: 100%;\n  text-align: center;\n}\n\n.weather-details {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 5px;\n}\n\n.weather-details-label {\n  max-inline-size: 10ch;\n  text-transform: capitalize;\n}\n\n.weather-details-data-one {\n  font-size: 24px;\n  text-transform: uppercase;\n}\n\n.weather-details-data-two {\n  font-size: 12px;\n  text-transform: capitalize;\n}\n\nnav {\n  position: absolute;\n  bottom: 0px;\n  width: 100%;\n  display: flex;\n}\n\n.active,\n.inactive {\n  height: 50px;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-transform: capitalize;\n}\n\n.active {\n  background-color: var(--color-selected);\n  border-right: 2px solid var(--color-base-bg);\n}\n\n.inactive {\n  background-color: var(--color-nav-bg);\n  border-left: 2px solid var(--color-base-bg);\n}\n\n.theme-selector-container {\n  position: absolute;\n  bottom: 0px;\n  right: 0px;\n  z-index: 1111;\n}\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://odin-weather/./src/style/index.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://odin-weather/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://odin-weather/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style/index.css":
/*!*****************************!*\
  !*** ./src/style/index.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./index.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style/index.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://odin-weather/./src/style/index.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://odin-weather/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://odin-weather/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://odin-weather/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://odin-weather/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://odin-weather/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://odin-weather/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/module/clear-display.js":
/*!*************************************!*\
  !*** ./src/module/clear-display.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   clearDisplay: () => (/* binding */ clearDisplay)\n/* harmony export */ });\n/* harmony import */ var _dom_query__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom-query */ \"./src/module/dom-query.js\");\n\n\nlet clearDisplay = () => {\n  while (_dom_query__WEBPACK_IMPORTED_MODULE_0__.leftContainer.firstChild) {\n    _dom_query__WEBPACK_IMPORTED_MODULE_0__.leftContainer.removeChild(_dom_query__WEBPACK_IMPORTED_MODULE_0__.leftContainer.firstChild);\n  }\n  while (_dom_query__WEBPACK_IMPORTED_MODULE_0__.rightContainer.firstChild) {\n    _dom_query__WEBPACK_IMPORTED_MODULE_0__.rightContainer.removeChild(_dom_query__WEBPACK_IMPORTED_MODULE_0__.rightContainer.firstChild);\n  }\n};\n\n\n\n\n//# sourceURL=webpack://odin-weather/./src/module/clear-display.js?");

/***/ }),

/***/ "./src/module/create-days-of-week.js":
/*!*******************************************!*\
  !*** ./src/module/create-days-of-week.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   currentDayOfWeek: () => (/* binding */ currentDayOfWeek),\n/* harmony export */   fifthDayOfWeek: () => (/* binding */ fifthDayOfWeek),\n/* harmony export */   fourthDayOfWeek: () => (/* binding */ fourthDayOfWeek),\n/* harmony export */   secondDayOfWeek: () => (/* binding */ secondDayOfWeek),\n/* harmony export */   seventhDayOfWeek: () => (/* binding */ seventhDayOfWeek),\n/* harmony export */   sixthDayOfWeek: () => (/* binding */ sixthDayOfWeek),\n/* harmony export */   thirdDayOfWeek: () => (/* binding */ thirdDayOfWeek)\n/* harmony export */ });\nconst date = new Date();\n\nconst daysOfWeek = [\n  \"Sunday\",\n  \"Monday\",\n  \"Tuesday\",\n  \"Wednesday\",\n  \"Thursday\",\n  \"Friday\",\n  \"Saturday\",\n];\nconst currentDayOfWeek = daysOfWeek[date.getDay()];\nconst secondDayOfWeek = daysOfWeek[date.getDay() + 1];\nconst thirdDayOfWeek = daysOfWeek[date.getDay() + 2];\nconst fourthDayOfWeek = daysOfWeek[date.getDay() + 3];\nconst fifthDayOfWeek = daysOfWeek[date.getDay() + 4];\nconst sixthDayOfWeek = daysOfWeek[date.getDay() + 5];\nconst seventhDayOfWeek = daysOfWeek[date.getDay() + 6];\nconst currentTime = date.toLocaleTimeString();\n\n\n\n\n//# sourceURL=webpack://odin-weather/./src/module/create-days-of-week.js?");

/***/ }),

/***/ "./src/module/create-weather-report.js":
/*!*********************************************!*\
  !*** ./src/module/create-weather-report.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   weatherReportConstructor: () => (/* binding */ weatherReportConstructor)\n/* harmony export */ });\nfunction weatherReportConstructor(weatherData) {\n  const weatherReport = {\n    title: weatherData.resolvedAddress,\n    currentFeelsLike: weatherData.currentConditions.feelslike,\n    currentHumidity: weatherData.currentConditions.humidity,\n    currentTemperature: weatherData.currentConditions.temp,\n    currentConditionsIcon: weatherData.currentConditions.icon,\n    todayMaximumTemperature: weatherData.days[0].tempmax,\n    todayMinimumTemperature: weatherData.days[0].tempmin,\n    todayConditionsIcon: weatherData.days[0].icon,\n    dayTwoMaximumTemperature: weatherData.days[1].tempmax,\n    dayTwoMinimumTemperature: weatherData.days[1].tempmin,\n    dayTwoConditionsIcon: weatherData.days[1].icon,\n    dayThreeMaximumTemperature: weatherData.days[2].tempmax,\n    dayThreeMinimumTemperature: weatherData.days[2].tempmin,\n    dayThreeConditionsIcon: weatherData.days[2].icon,\n    dayFourMaximumTemperature: weatherData.days[3].tempmax,\n    dayFourMinimumTemperature: weatherData.days[3].tempmin,\n    dayFourConditionsIcon: weatherData.days[3].icon,\n    dayFiveMaximumTemperature: weatherData.days[4].tempmax,\n    dayFiveMinimumTemperature: weatherData.days[4].tempmin,\n    dayFiveConditionsIcon: weatherData.days[4].icon,\n    daySixMaximumTemperature: weatherData.days[5].tempmax,\n    daySixMinimumTemperature: weatherData.days[5].tempmin,\n    daySixConditionsIcon: weatherData.days[5].icon,\n    daySevenMaximumTemperature: weatherData.days[6].tempmax,\n    daySevenMinimumTemperature: weatherData.days[6].tempmin,\n    daySevenConditionsIcon: weatherData.days[6].icon,\n  };\n  return { ...weatherReport };\n}\n\n\n\n\n//# sourceURL=webpack://odin-weather/./src/module/create-weather-report.js?");

/***/ }),

/***/ "./src/module/create-weather-widget.js":
/*!*********************************************!*\
  !*** ./src/module/create-weather-widget.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   generateWeatherWidget: () => (/* binding */ generateWeatherWidget)\n/* harmony export */ });\n/* harmony import */ var _dom_query__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom-query */ \"./src/module/dom-query.js\");\n\n\nlet generateWeatherWidget = (condition, label, dataOne, dataTwo) => {\n  let weatherDetailsContainer = document.createElement(\"div\");\n  weatherDetailsContainer.setAttribute(\"class\", \"weather-details-container\");\n  let weatherDetails = document.createElement(\"div\");\n  weatherDetails.setAttribute(\"class\", \"weather-details\");\n\n  let weatherIcon = document.createElement(\"img\");\n  if (condition === \"feels like\") {\n    weatherIcon.src = \"src/image/feels-like.svg\";\n  } else if (condition === \"humidity\") {\n    weatherIcon.src = \"src/image/humidity.svg\";\n  } else if (condition === \"temperature\") {\n    weatherIcon.src = \"src/image/temperature.svg\";\n  } else if (condition === \"snow\") {\n    weatherIcon.src = \"src/image/snow.svg\";\n  } else if (condition === \"rain\") {\n    weatherIcon.src = \"src/image/rain.svg\";\n  } else if (condition === \"fog\") {\n    weatherIcon.src = \"src/image/fog.svg\";\n  } else if (condition === \"wind\") {\n    weatherIcon.src = \"src/image/wind.svg\";\n  } else if (condition === \"cloudy\") {\n    weatherIcon.src = \"src/image/cloudy.svg\";\n  } else if (condition === \"partly-cloudy-day\") {\n    weatherIcon.src = \"src/image/partly-cloudy-day.svg\";\n  } else if (condition === \"partly-cloudy-night\") {\n    weatherIcon.src = \"src/image/partly-cloudy-night.svg\";\n  } else if (condition === \"clear-day\") {\n    weatherIcon.src = \"src/image/clear-day.svg\";\n  } else if (condition === \"clear-night\") {\n    weatherIcon.src = \"src/image/clear-night.svg\";\n  }\n\n  let weatherDetailsInfo = document.createElement(\"div\");\n  weatherDetailsInfo.setAttribute(\"class\", \"weather-details-info\");\n  let weatherDetailsLabel = document.createElement(\"div\");\n  weatherDetailsLabel.setAttribute(\"class\", \"weather-details-label\");\n  weatherDetailsLabel.textContent = label;\n  let weatherDetailsDataOne = document.createElement(\"div\");\n  weatherDetailsDataOne.setAttribute(\"class\", \"weather-details-data-one\");\n  weatherDetailsDataOne.textContent = dataOne;\n  let weatherDetailsDataTwo = document.createElement(\"div\");\n  weatherDetailsDataTwo.setAttribute(\"class\", \"weather-details-data-two\");\n  weatherDetailsDataTwo.textContent = dataTwo;\n  weatherDetails.appendChild(weatherIcon);\n  weatherDetailsInfo.appendChild(weatherDetailsLabel);\n  weatherDetailsInfo.appendChild(weatherDetailsDataOne);\n  weatherDetailsInfo.appendChild(weatherDetailsDataTwo);\n  weatherDetails.appendChild(weatherDetailsInfo);\n  weatherDetailsContainer.appendChild(weatherDetails);\n\n  if (_dom_query__WEBPACK_IMPORTED_MODULE_0__.dailyButton.className === \"active\") {\n    if (_dom_query__WEBPACK_IMPORTED_MODULE_0__.leftContainer.children.length < 5) {\n      _dom_query__WEBPACK_IMPORTED_MODULE_0__.leftContainer.appendChild(weatherDetailsContainer);\n    } else {\n      _dom_query__WEBPACK_IMPORTED_MODULE_0__.rightContainer.appendChild(weatherDetailsContainer);\n    }\n  } else {\n    if (_dom_query__WEBPACK_IMPORTED_MODULE_0__.leftContainer.children.length < 8) {\n      _dom_query__WEBPACK_IMPORTED_MODULE_0__.leftContainer.appendChild(weatherDetailsContainer);\n    } else {\n      _dom_query__WEBPACK_IMPORTED_MODULE_0__.rightContainer.appendChild(weatherDetailsContainer);\n    }\n  }\n};\n\n\n\n\n//# sourceURL=webpack://odin-weather/./src/module/create-weather-widget.js?");

/***/ }),

/***/ "./src/module/display-daily.js":
/*!*************************************!*\
  !*** ./src/module/display-daily.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   displayDaily: () => (/* binding */ displayDaily)\n/* harmony export */ });\n/* harmony import */ var _create_weather_report__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create-weather-report */ \"./src/module/create-weather-report.js\");\n/* harmony import */ var _create_weather_widget__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create-weather-widget */ \"./src/module/create-weather-widget.js\");\n/* harmony import */ var _read_weather_report__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./read-weather-report */ \"./src/module/read-weather-report.js\");\n/* harmony import */ var _update_weather_report__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./update-weather-report */ \"./src/module/update-weather-report.js\");\n\n\n\n\n\nasync function displayDaily(cityOne, cityTwo) {\n  if (_update_weather_report__WEBPACK_IMPORTED_MODULE_3__.weatherReportArray.length === 0) {\n    const firstCity = await (0,_update_weather_report__WEBPACK_IMPORTED_MODULE_3__.updateWeatherReport)(cityOne);\n    const secondCity = await (0,_update_weather_report__WEBPACK_IMPORTED_MODULE_3__.updateWeatherReport)(cityTwo);\n    const log = await console.log(_update_weather_report__WEBPACK_IMPORTED_MODULE_3__.weatherReportArray);\n  }\n\n  const titleOne = await (0,_create_weather_widget__WEBPACK_IMPORTED_MODULE_1__.generateWeatherWidget)(\n    \"\",\n    \"\",\n    _update_weather_report__WEBPACK_IMPORTED_MODULE_3__.weatherReportArray[0].title\n  );\n\n  const conditionsOne = await (0,_create_weather_widget__WEBPACK_IMPORTED_MODULE_1__.generateWeatherWidget)(\n    _update_weather_report__WEBPACK_IMPORTED_MODULE_3__.weatherReportArray[0].currentConditionsIcon,\n    _update_weather_report__WEBPACK_IMPORTED_MODULE_3__.weatherReportArray[0].currentConditionsIcon\n  );\n\n  const feelsLikeOne = await (0,_create_weather_widget__WEBPACK_IMPORTED_MODULE_1__.generateWeatherWidget)(\n    \"feels like\",\n    \"feels like\",\n    _update_weather_report__WEBPACK_IMPORTED_MODULE_3__.weatherReportArray[0].currentFeelsLike + \" °f\"\n  );\n\n  const humidityOne = await (0,_create_weather_widget__WEBPACK_IMPORTED_MODULE_1__.generateWeatherWidget)(\n    \"humidity\",\n    \"humidity\",\n    _update_weather_report__WEBPACK_IMPORTED_MODULE_3__.weatherReportArray[0].currentHumidity + \"%\"\n  );\n\n  const temperatureOne = await (0,_create_weather_widget__WEBPACK_IMPORTED_MODULE_1__.generateWeatherWidget)(\n    \"temperature\",\n    \"temperature\",\n    _update_weather_report__WEBPACK_IMPORTED_MODULE_3__.weatherReportArray[0].currentTemperature + \"°f\"\n  );\n\n  const titleTwo = await (0,_create_weather_widget__WEBPACK_IMPORTED_MODULE_1__.generateWeatherWidget)(\n    \"\",\n    \"\",\n    _update_weather_report__WEBPACK_IMPORTED_MODULE_3__.weatherReportArray[1].title\n  );\n\n  const conditionsTwo = await (0,_create_weather_widget__WEBPACK_IMPORTED_MODULE_1__.generateWeatherWidget)(\n    _update_weather_report__WEBPACK_IMPORTED_MODULE_3__.weatherReportArray[1].currentConditionsIcon,\n    _update_weather_report__WEBPACK_IMPORTED_MODULE_3__.weatherReportArray[1].currentConditionsIcon\n  );\n\n  const feelsLikeTwo = await (0,_create_weather_widget__WEBPACK_IMPORTED_MODULE_1__.generateWeatherWidget)(\n    \"feels like\",\n    \"feels like\",\n    _update_weather_report__WEBPACK_IMPORTED_MODULE_3__.weatherReportArray[1].currentFeelsLike + \" °f\"\n  );\n\n  const humidityTwo = await (0,_create_weather_widget__WEBPACK_IMPORTED_MODULE_1__.generateWeatherWidget)(\n    \"humidity\",\n    \"humidity\",\n    _update_weather_report__WEBPACK_IMPORTED_MODULE_3__.weatherReportArray[1].currentHumidity + \"%\"\n  );\n\n  const temperatureTwo = await (0,_create_weather_widget__WEBPACK_IMPORTED_MODULE_1__.generateWeatherWidget)(\n    \"temperature\",\n    \"temperature\",\n    _update_weather_report__WEBPACK_IMPORTED_MODULE_3__.weatherReportArray[1].currentTemperature + \"°f\"\n  );\n}\n\n\n\n\n//# sourceURL=webpack://odin-weather/./src/module/display-daily.js?");

/***/ }),

/***/ "./src/module/display-weekly.js":
/*!**************************************!*\
  !*** ./src/module/display-weekly.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   displayWeekly: () => (/* binding */ displayWeekly)\n/* harmony export */ });\n/* harmony import */ var _create_days_of_week__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create-days-of-week */ \"./src/module/create-days-of-week.js\");\n/* harmony import */ var _create_weather_widget__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create-weather-widget */ \"./src/module/create-weather-widget.js\");\n/* harmony import */ var _update_weather_report__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./update-weather-report */ \"./src/module/update-weather-report.js\");\n\n\n\n\n\nasync function displayWeekly() {\n  const titleOne = await (0,_create_weather_widget__WEBPACK_IMPORTED_MODULE_1__.generateWeatherWidget)(\"\", '', _update_weather_report__WEBPACK_IMPORTED_MODULE_2__.weatherReportArray[0].title);\n  const dayOneCityOne = await (0,_create_weather_widget__WEBPACK_IMPORTED_MODULE_1__.generateWeatherWidget)(\n    _update_weather_report__WEBPACK_IMPORTED_MODULE_2__.weatherReportArray[0].todayConditionsIcon,\n    _create_days_of_week__WEBPACK_IMPORTED_MODULE_0__.currentDayOfWeek,\n    _update_weather_report__WEBPACK_IMPORTED_MODULE_2__.weatherReportArray[0].todayMaximumTemperature,\n    _update_weather_report__WEBPACK_IMPORTED_MODULE_2__.weatherReportArray[0].todayMinimumTemperature\n  );\n  const dayTwoCityOne = await (0,_create_weather_widget__WEBPACK_IMPORTED_MODULE_1__.generateWeatherWidget)(\n    _update_weather_report__WEBPACK_IMPORTED_MODULE_2__.weatherReportArray[0].dayTwoConditionsIcon,\n    _create_days_of_week__WEBPACK_IMPORTED_MODULE_0__.secondDayOfWeek,\n    _update_weather_report__WEBPACK_IMPORTED_MODULE_2__.weatherReportArray[0].dayTwoMaximumTemperature,\n    _update_weather_report__WEBPACK_IMPORTED_MODULE_2__.weatherReportArray[0].dayTwoMinimumTemperature\n  );\n  const dayThreeCityOne = await (0,_create_weather_widget__WEBPACK_IMPORTED_MODULE_1__.generateWeatherWidget)(\n    _update_weather_report__WEBPACK_IMPORTED_MODULE_2__.weatherReportArray[0].dayThreeConditionsIcon,\n    _create_days_of_week__WEBPACK_IMPORTED_MODULE_0__.thirdDayOfWeek,\n    _update_weather_report__WEBPACK_IMPORTED_MODULE_2__.weatherReportArray[0].dayThreeMaximumTemperature,\n    _update_weather_report__WEBPACK_IMPORTED_MODULE_2__.weatherReportArray[0].dayThreeMinimumTemperature\n  );\n  const dayFourCityOne = await (0,_create_weather_widget__WEBPACK_IMPORTED_MODULE_1__.generateWeatherWidget)(\n    _update_weather_report__WEBPACK_IMPORTED_MODULE_2__.weatherReportArray[0].dayFourConditionsIcon,\n    _create_days_of_week__WEBPACK_IMPORTED_MODULE_0__.fourthDayOfWeek,\n    _update_weather_report__WEBPACK_IMPORTED_MODULE_2__.weatherReportArray[0].dayFourMaximumTemperature,\n    _update_weather_report__WEBPACK_IMPORTED_MODULE_2__.weatherReportArray[0].dayFourMinimumTemperature\n  );\n  const dayFiveCityOne = await (0,_create_weather_widget__WEBPACK_IMPORTED_MODULE_1__.generateWeatherWidget)(\n    _update_weather_report__WEBPACK_IMPORTED_MODULE_2__.weatherReportArray[0].dayFiveConditionsIcon,\n    _create_days_of_week__WEBPACK_IMPORTED_MODULE_0__.fifthDayOfWeek,\n    _update_weather_report__WEBPACK_IMPORTED_MODULE_2__.weatherReportArray[0].dayFiveMaximumTemperature,\n    _update_weather_report__WEBPACK_IMPORTED_MODULE_2__.weatherReportArray[0].dayFiveMinimumTemperature\n  );\n  const daySixCityOne = await (0,_create_weather_widget__WEBPACK_IMPORTED_MODULE_1__.generateWeatherWidget)(\n    _update_weather_report__WEBPACK_IMPORTED_MODULE_2__.weatherReportArray[0].daySixConditionsIcon,\n    _create_days_of_week__WEBPACK_IMPORTED_MODULE_0__.sixthDayOfWeek,\n    _update_weather_report__WEBPACK_IMPORTED_MODULE_2__.weatherReportArray[0].daySixMaximumTemperature,\n    _update_weather_report__WEBPACK_IMPORTED_MODULE_2__.weatherReportArray[0].daySixMinimumTemperature\n  );\n  const daySevenCityOne = await (0,_create_weather_widget__WEBPACK_IMPORTED_MODULE_1__.generateWeatherWidget)(\n    _update_weather_report__WEBPACK_IMPORTED_MODULE_2__.weatherReportArray[0].daySevenConditionsIcon,\n    _create_days_of_week__WEBPACK_IMPORTED_MODULE_0__.seventhDayOfWeek,\n    _update_weather_report__WEBPACK_IMPORTED_MODULE_2__.weatherReportArray[0].daySevenMaximumTemperature,\n    _update_weather_report__WEBPACK_IMPORTED_MODULE_2__.weatherReportArray[0].daySevenMinimumTemperature\n  );\n\n  const titleTwo = await (0,_create_weather_widget__WEBPACK_IMPORTED_MODULE_1__.generateWeatherWidget)(\"\", '', _update_weather_report__WEBPACK_IMPORTED_MODULE_2__.weatherReportArray[1].title);\n  const dayOneCityTwo = await (0,_create_weather_widget__WEBPACK_IMPORTED_MODULE_1__.generateWeatherWidget)(\n    _update_weather_report__WEBPACK_IMPORTED_MODULE_2__.weatherReportArray[1].todayConditionsIcon,\n    _create_days_of_week__WEBPACK_IMPORTED_MODULE_0__.currentDayOfWeek,\n    _update_weather_report__WEBPACK_IMPORTED_MODULE_2__.weatherReportArray[1].todayMaximumTemperature,\n    _update_weather_report__WEBPACK_IMPORTED_MODULE_2__.weatherReportArray[1].todayMinimumTemperature\n  );\n  const dayTwoCityTwo = await (0,_create_weather_widget__WEBPACK_IMPORTED_MODULE_1__.generateWeatherWidget)(\n    _update_weather_report__WEBPACK_IMPORTED_MODULE_2__.weatherReportArray[1].dayTwoConditionsIcon,\n    _create_days_of_week__WEBPACK_IMPORTED_MODULE_0__.secondDayOfWeek,\n    _update_weather_report__WEBPACK_IMPORTED_MODULE_2__.weatherReportArray[1].dayTwoMaximumTemperature,\n    _update_weather_report__WEBPACK_IMPORTED_MODULE_2__.weatherReportArray[1].dayTwoMinimumTemperature\n  );\n  const dayThreeCityTwo = await (0,_create_weather_widget__WEBPACK_IMPORTED_MODULE_1__.generateWeatherWidget)(\n    _update_weather_report__WEBPACK_IMPORTED_MODULE_2__.weatherReportArray[1].dayThreeConditionsIcon,\n    _create_days_of_week__WEBPACK_IMPORTED_MODULE_0__.thirdDayOfWeek,\n    _update_weather_report__WEBPACK_IMPORTED_MODULE_2__.weatherReportArray[1].dayThreeMaximumTemperature,\n    _update_weather_report__WEBPACK_IMPORTED_MODULE_2__.weatherReportArray[1].dayThreeMinimumTemperature\n  );\n  const dayFourCityTwo = await (0,_create_weather_widget__WEBPACK_IMPORTED_MODULE_1__.generateWeatherWidget)(\n    _update_weather_report__WEBPACK_IMPORTED_MODULE_2__.weatherReportArray[1].dayFourConditionsIcon,\n    _create_days_of_week__WEBPACK_IMPORTED_MODULE_0__.fourthDayOfWeek,\n    _update_weather_report__WEBPACK_IMPORTED_MODULE_2__.weatherReportArray[1].dayFourMaximumTemperature,\n    _update_weather_report__WEBPACK_IMPORTED_MODULE_2__.weatherReportArray[1].dayFourMinimumTemperature\n  );\n  const dayFiveCityTwo = await (0,_create_weather_widget__WEBPACK_IMPORTED_MODULE_1__.generateWeatherWidget)(\n    _update_weather_report__WEBPACK_IMPORTED_MODULE_2__.weatherReportArray[1].dayFiveConditionsIcon,\n    _create_days_of_week__WEBPACK_IMPORTED_MODULE_0__.fifthDayOfWeek,\n    _update_weather_report__WEBPACK_IMPORTED_MODULE_2__.weatherReportArray[1].dayFiveMaximumTemperature,\n    _update_weather_report__WEBPACK_IMPORTED_MODULE_2__.weatherReportArray[1].dayFiveMinimumTemperature\n  );\n  const daySixCityTwo = await (0,_create_weather_widget__WEBPACK_IMPORTED_MODULE_1__.generateWeatherWidget)(\n    _update_weather_report__WEBPACK_IMPORTED_MODULE_2__.weatherReportArray[1].daySixConditionsIcon,\n    _create_days_of_week__WEBPACK_IMPORTED_MODULE_0__.sixthDayOfWeek,\n    _update_weather_report__WEBPACK_IMPORTED_MODULE_2__.weatherReportArray[1].daySixMaximumTemperature,\n    _update_weather_report__WEBPACK_IMPORTED_MODULE_2__.weatherReportArray[1].daySixMinimumTemperature\n  );\n  const daySevenCityTwo = await (0,_create_weather_widget__WEBPACK_IMPORTED_MODULE_1__.generateWeatherWidget)(\n    _update_weather_report__WEBPACK_IMPORTED_MODULE_2__.weatherReportArray[1].daySevenConditionsIcon,\n    _create_days_of_week__WEBPACK_IMPORTED_MODULE_0__.seventhDayOfWeek,\n    _update_weather_report__WEBPACK_IMPORTED_MODULE_2__.weatherReportArray[1].daySevenMaximumTemperature,\n    _update_weather_report__WEBPACK_IMPORTED_MODULE_2__.weatherReportArray[1].daySevenMinimumTemperature\n  );\n}\n\n\n\n\n//# sourceURL=webpack://odin-weather/./src/module/display-weekly.js?");

/***/ }),

/***/ "./src/module/dom-query.js":
/*!*********************************!*\
  !*** ./src/module/dom-query.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   dailyButton: () => (/* binding */ dailyButton),\n/* harmony export */   leftContainer: () => (/* binding */ leftContainer),\n/* harmony export */   rightContainer: () => (/* binding */ rightContainer),\n/* harmony export */   themeSlider: () => (/* binding */ themeSlider),\n/* harmony export */   weeklyButton: () => (/* binding */ weeklyButton)\n/* harmony export */ });\nlet themeSlider = document.querySelector(\"#checkbox\");\nlet leftContainer = document.querySelector(\".left-container\");\nlet rightContainer = document.querySelector(\".right-container\");\nlet dailyButton = document.querySelector(\"#daily\");\nlet weeklyButton = document.querySelector(\"#weekly\");\n\n\n\n\n//# sourceURL=webpack://odin-weather/./src/module/dom-query.js?");

/***/ }),

/***/ "./src/module/read-weather-report.js":
/*!*******************************************!*\
  !*** ./src/module/read-weather-report.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   readWeatherReport: () => (/* binding */ readWeatherReport)\n/* harmony export */ });\n//Code included to practice fetch requests with promises syntax\n// let getWeatherReport = (city) => {\n//   fetch(\n//     `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?key=WNL4XSRW6RREQXLUGP6FJDDWE&contentType=json`,\n//     { mode: \"cors\" }\n//   )\n//     .then((response) => {\n//       return response.json();\n//     })\n//     .then((response) => {\n//       return console.log(response);\n//     });\n// };\n\nasync function readWeatherReport(city) {\n  const response = await fetch(\n    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?key=WNL4XSRW6RREQXLUGP6FJDDWE&contentType=json`,\n    { mode: \"cors\" }\n  );\n  const weatherData = await response.json();\n  return weatherData;\n}\n\n\n\n\n//# sourceURL=webpack://odin-weather/./src/module/read-weather-report.js?");

/***/ }),

/***/ "./src/module/theme-toggle.js":
/*!************************************!*\
  !*** ./src/module/theme-toggle.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   toggleTheme: () => (/* binding */ toggleTheme)\n/* harmony export */ });\nfunction toggleTheme() {\n  if (document.documentElement.classList.contains(\"light\")) {\n    document.documentElement.classList.remove(\"light\");\n    document.documentElement.classList.add(\"dark\");\n  } else if (document.documentElement.classList.contains(\"dark\")) {\n    document.documentElement.classList.remove(\"dark\");\n    document.documentElement.classList.add(\"light\");\n  } else {\n    if (\n      window.matchMedia &&\n      window.matchMedia(\"(prefers-color-scheme: dark)\").matches\n    ) {\n      document.documentElement.classList.add(\"dark\");\n    } else {\n      document.documentElement.classList.add(\"light\");\n    }\n  }\n}\n\n\n\n\n//# sourceURL=webpack://odin-weather/./src/module/theme-toggle.js?");

/***/ }),

/***/ "./src/module/update-weather-report.js":
/*!*********************************************!*\
  !*** ./src/module/update-weather-report.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   updateWeatherReport: () => (/* binding */ updateWeatherReport),\n/* harmony export */   weatherReportArray: () => (/* binding */ weatherReportArray)\n/* harmony export */ });\n/* harmony import */ var _create_weather_report__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create-weather-report */ \"./src/module/create-weather-report.js\");\n/* harmony import */ var _read_weather_report__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./read-weather-report */ \"./src/module/read-weather-report.js\");\n\n\n\nconst weatherReportArray = [];\n\nasync function updateWeatherReport(city) {\n  const weatherData = await (0,_read_weather_report__WEBPACK_IMPORTED_MODULE_1__.readWeatherReport)(city);\n  const weatherReport = await (0,_create_weather_report__WEBPACK_IMPORTED_MODULE_0__.weatherReportConstructor)(weatherData);\n  weatherReportArray.push(weatherReport);\n}\n\n\n\n\n//# sourceURL=webpack://odin-weather/./src/module/update-weather-report.js?");

/***/ }),

/***/ "./src/script/index.js":
/*!*****************************!*\
  !*** ./src/script/index.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../style/index.css */ \"./src/style/index.css\");\n/* harmony import */ var _module_dom_query__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../module/dom-query */ \"./src/module/dom-query.js\");\n/* harmony import */ var _module_theme_toggle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../module/theme-toggle */ \"./src/module/theme-toggle.js\");\n/* harmony import */ var _module_display_daily__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../module/display-daily */ \"./src/module/display-daily.js\");\n/* harmony import */ var _module_clear_display__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../module/clear-display */ \"./src/module/clear-display.js\");\n/* harmony import */ var _module_display_weekly__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../module/display-weekly */ \"./src/module/display-weekly.js\");\n\n\n\n\n\n\n\n_module_dom_query__WEBPACK_IMPORTED_MODULE_1__.themeSlider.addEventListener(\"click\", _module_theme_toggle__WEBPACK_IMPORTED_MODULE_2__.toggleTheme);\n(0,_module_theme_toggle__WEBPACK_IMPORTED_MODULE_2__.toggleTheme)();\n(0,_module_display_daily__WEBPACK_IMPORTED_MODULE_3__.displayDaily)(\"durham\", \"orlando\");\n_module_dom_query__WEBPACK_IMPORTED_MODULE_1__.dailyButton.addEventListener(\"click\", () => {\n  (0,_module_clear_display__WEBPACK_IMPORTED_MODULE_4__.clearDisplay)();\n  (0,_module_display_daily__WEBPACK_IMPORTED_MODULE_3__.displayDaily)(\"durham\", \"orlando\");\n  _module_dom_query__WEBPACK_IMPORTED_MODULE_1__.dailyButton.setAttribute(\"class\", \"active\");\n  _module_dom_query__WEBPACK_IMPORTED_MODULE_1__.weeklyButton.setAttribute(\"class\", \"inactive\");\n});\n_module_dom_query__WEBPACK_IMPORTED_MODULE_1__.weeklyButton.addEventListener('click', () => {\n  (0,_module_clear_display__WEBPACK_IMPORTED_MODULE_4__.clearDisplay)();\n  (0,_module_display_weekly__WEBPACK_IMPORTED_MODULE_5__.displayWeekly)();\n  _module_dom_query__WEBPACK_IMPORTED_MODULE_1__.weeklyButton.setAttribute('class', 'active');\n  _module_dom_query__WEBPACK_IMPORTED_MODULE_1__.dailyButton.setAttribute('class', 'inactive');\n})\n\n//# sourceURL=webpack://odin-weather/./src/script/index.js?");

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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/script/index.js");
/******/ 	
/******/ })()
;