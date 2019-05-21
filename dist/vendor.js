(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vendor"],{

/***/ "./node_modules/codesandbox-import-utils/lib/api/define.js":
/*!*****************************************************************!*\
  !*** ./node_modules/codesandbox-import-utils/lib/api/define.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var LZString = __webpack_require__(/*! lz-string */ "./node_modules/lz-string/libs/lz-string.js");
function compress(input) {
    return LZString.compressToBase64(input)
        .replace(/\+/g, "-") // Convert '+' to '-'
        .replace(/\//g, "_") // Convert '/' to '_'
        .replace(/=+$/, ""); // Remove ending '='
}
function getParameters(parameters) {
    return compress(JSON.stringify(parameters));
}
exports.getParameters = getParameters;
//# sourceMappingURL=define.js.map

/***/ }),

/***/ "./node_modules/codesandbox/lib/api/define.js":
/*!****************************************************!*\
  !*** ./node_modules/codesandbox/lib/api/define.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var define_1 = __webpack_require__(/*! codesandbox-import-utils/lib/api/define */ "./node_modules/codesandbox-import-utils/lib/api/define.js");
exports.getParameters = define_1.getParameters;
//# sourceMappingURL=define.js.map

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/filepond/dist/filepond.css":
/*!***************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/filepond/dist/filepond.css ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "/*!\n * FilePond 4.4.7\n * Licensed under MIT, https://opensource.org/licenses/MIT/\n * Please visit https://pqina.nl/filepond/ for details.\n */\n\n/* eslint-disable */\n.filepond--assistant {\n  position: absolute;\n  overflow: hidden;\n  height: 1px;\n  width: 1px;\n  padding: 0;\n  border: 0;\n  clip: rect(1px, 1px, 1px, 1px);\n  -webkit-clip-path: inset(50%);\n  clip-path: inset(50%);\n  white-space: nowrap;\n}\n\n/* Hard to override styles */\n.filepond--browser.filepond--browser {\n  position: absolute;\n  margin: 0;\n  padding: 0;\n  left: 1em;\n  top: 1.75em;\n  width: calc(100% - 2em);\n  opacity: 0;\n  font-size: 0;\n}\n\n.filepond--drip {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  overflow: hidden;\n  opacity: 0.1;\n  pointer-events: none;\n  border-radius: 0.5em;\n  background: rgba(0, 0, 0, 0.01);\n}\n\n.filepond--drip-blob {\n  position: absolute;\n  -webkit-transform-origin: center center;\n  transform-origin: center center;\n  top: 0;\n  left: 0;\n  width: 8em;\n  height: 8em;\n  margin-left: -4em;\n  margin-top: -4em;\n  background: #292625;\n  border-radius: 50%;\n  will-change: transform, opacity;\n}\n\n.filepond--drop-label {\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  margin: 0;\n  color: #4f4f4f;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 0px;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  will-change: transform, opacity;\n}\n\n/* Hard to override styles on purpose */\n.filepond--drop-label.filepond--drop-label label {\n  display: block;\n  margin: 0;\n  padding: 0.5em;\n}\n\n.filepond--drop-label label {\n  cursor: default;\n  font-size: 0.875em;\n  font-weight: normal;\n  text-align: center;\n  line-height: 1.5;\n}\n\n.filepond--label-action {\n  text-decoration: underline;\n  -webkit-text-decoration-skip: ink;\n  text-decoration-skip-ink: auto;\n  -webkit-text-decoration-color: #a7a4a4;\n  text-decoration-color: #a7a4a4;\n  cursor: pointer;\n}\n\n.filepond--root[data-disabled] .filepond--drop-label label {\n  opacity: 0.5;\n}\n\n/* Hard to override styles */\n.filepond--file-action-button.filepond--file-action-button {\n  font-size: 1em;\n  width: 1.625em;\n  height: 1.625em;\n  font-family: inherit;\n  line-height: inherit;\n  margin: 0;\n  padding: 0;\n  border: none;\n  outline: none;\n  will-change: transform, opacity;\n}\n.filepond--file-action-button.filepond--file-action-button span {\n  position: absolute;\n  overflow: hidden;\n  height: 1px;\n  width: 1px;\n  padding: 0;\n  border: 0;\n  clip: rect(1px, 1px, 1px, 1px);\n  -webkit-clip-path: inset(50%);\n  clip-path: inset(50%);\n  white-space: nowrap;\n}\n.filepond--file-action-button.filepond--file-action-button svg {\n  width: 100%;\n  height: 100%;\n}\n.filepond--file-action-button.filepond--file-action-button::after {\n  position: absolute;\n  left: -0.75em;\n  right: -0.75em;\n  top: -0.75em;\n  bottom: -0.75em;\n  content: '';\n}\n\n/* Soft styles */\n.filepond--file-action-button {\n  cursor: auto;\n  color: #fff;\n  border-radius: 50%;\n  background-color: rgba(0, 0, 0, 0.5);\n  background-image: none;\n  box-shadow: 0 0 0 0 rgba(255, 255, 255, 0);\n  transition: box-shadow 0.25s ease-in;\n}\n.filepond--file-action-button:hover,\n.filepond--file-action-button:focus {\n  box-shadow: 0 0 0 0.125em rgba(255, 255, 255, 0.9);\n}\n.filepond--file-action-button[disabled] {\n  color: rgba(255, 255, 255, 0.5);\n  background-color: rgba(0, 0, 0, 0.25);\n}\n\n.filepond--file-info {\n  position: static;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  flex: 1;\n  margin: 0 0.5em 0 0;\n  min-width: 0;\n  will-change: transform, opacity;\n  pointer-events: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n.filepond--file-info * {\n  margin: 0;\n}\n.filepond--file-info .filepond--file-info-main {\n  font-size: 0.75em;\n  line-height: 1.2;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n  width: 100%;\n}\n.filepond--file-info .filepond--file-info-sub {\n  font-size: 0.625em;\n  opacity: 0.5;\n  transition: opacity 0.25s ease-in-out;\n  white-space: nowrap;\n}\n.filepond--file-info .filepond--file-info-sub:empty {\n  display: none;\n}\n\n.filepond--file-status {\n  position: static;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  flex-grow: 0;\n  flex-shrink: 0;\n  margin: 0;\n  min-width: 2.25em;\n  text-align: right;\n  will-change: transform, opacity;\n  pointer-events: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n.filepond--file-status * {\n  margin: 0;\n  white-space: nowrap;\n}\n.filepond--file-status .filepond--file-status-main {\n  font-size: 0.75em;\n  line-height: 1.2;\n}\n.filepond--file-status .filepond--file-status-sub {\n  font-size: 0.625em;\n  opacity: 0.5;\n  transition: opacity 0.25s ease-in-out;\n}\n\n/* Hard to override styles */\n.filepond--file-wrapper.filepond--file-wrapper {\n  border: none;\n  margin: 0;\n  padding: 0;\n  min-width: 0;\n  height: 100%;\n}\n.filepond--file-wrapper.filepond--file-wrapper > legend {\n  position: absolute;\n  overflow: hidden;\n  height: 1px;\n  width: 1px;\n  padding: 0;\n  border: 0;\n  clip: rect(1px, 1px, 1px, 1px);\n  -webkit-clip-path: inset(50%);\n  clip-path: inset(50%);\n  white-space: nowrap;\n}\n\n.filepond--file {\n  position: static;\n  display: flex;\n  height: 100%;\n  align-items: flex-start;\n  padding: 0.5625em 0.5625em;\n  color: #fff;\n  border-radius: 0.5em;\n}\n.filepond--file .filepond--file-status {\n  margin-left: auto;\n  margin-right: 2.25em;\n}\n.filepond--file .filepond--processing-complete-indicator {\n  pointer-events: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  z-index: 3;\n}\n.filepond--file .filepond--processing-complete-indicator,\n.filepond--file .filepond--progress-indicator,\n.filepond--file .filepond--file-action-button {\n  position: absolute;\n}\n.filepond--file [data-align*='left'] {\n  left: 0.5625em;\n}\n.filepond--file [data-align*='right'] {\n  right: 0.5625em;\n}\n.filepond--file [data-align*='center'] {\n  left: calc(50% - 0.8125em);\n}\n.filepond--file [data-align*='bottom'] {\n  bottom: 1.125em;\n}\n.filepond--file [data-align='center'] {\n  top: calc(50% - 0.8125em);\n}\n.filepond--file .filepond--progress-indicator {\n  margin-top: 0.1875em;\n}\n.filepond--file .filepond--progress-indicator[data-align*='right'] {\n  margin-right: 0.1875em;\n}\n.filepond--file .filepond--progress-indicator[data-align*='left'] {\n  margin-left: 0.1875em;\n}\n\n[data-filepond-item-state='cancelled'] .filepond--file-info,\n[data-filepond-item-state*='invalid'] .filepond--file-info,\n[data-filepond-item-state*='error'] .filepond--file-info {\n  margin-right: 2.25em;\n}\n\n[data-filepond-item-state='processing-complete']\n  .filepond--action-revert-item-processing\n  svg {\n  -webkit-animation: fall 0.5s 0.125s linear both;\n  animation: fall 0.5s 0.125s linear both;\n}\n\n[data-filepond-item-state='processing-complete'] .filepond--file-info-sub,\n[data-filepond-item-state='processing-complete'] .filepond--file-status-sub {\n  opacity: 0;\n}\n\n[data-filepond-item-state='processing-complete']\n  .filepond--action-revert-item-processing\n  ~ .filepond--file-info\n  .filepond--file-info-sub,\n[data-filepond-item-state='processing-complete']\n  .filepond--action-revert-item-processing\n  ~ .filepond--file-status\n  .filepond--file-status-sub {\n  opacity: 0.5;\n}\n\n[data-filepond-item-state*='invalid'] .filepond--panel,\n[data-filepond-item-state*='invalid'] .filepond--file-wrapper,\n[data-filepond-item-state*='error'] .filepond--panel,\n[data-filepond-item-state*='error'] .filepond--file-wrapper {\n  -webkit-animation: shake 0.65s linear both;\n  animation: shake 0.65s linear both;\n}\n\n[data-filepond-item-state*='busy'] .filepond--progress-indicator svg {\n  -webkit-animation: spin 1s linear infinite;\n  animation: spin 1s linear infinite;\n}\n\n/**\n * States\n */\n@-webkit-keyframes spin {\n  0% {\n    -webkit-transform: rotateZ(0deg);\n    transform: rotateZ(0deg);\n  }\n  100% {\n    -webkit-transform: rotateZ(360deg);\n    transform: rotateZ(360deg);\n  }\n}\n@keyframes spin {\n  0% {\n    -webkit-transform: rotateZ(0deg);\n    transform: rotateZ(0deg);\n  }\n  100% {\n    -webkit-transform: rotateZ(360deg);\n    transform: rotateZ(360deg);\n  }\n}\n\n@-webkit-keyframes shake {\n  10%,\n  90% {\n    -webkit-transform: translateX(-0.0625em);\n    transform: translateX(-0.0625em);\n  }\n  20%,\n  80% {\n    -webkit-transform: translateX(0.125em);\n    transform: translateX(0.125em);\n  }\n  30%,\n  50%,\n  70% {\n    -webkit-transform: translateX(-0.25em);\n    transform: translateX(-0.25em);\n  }\n  40%,\n  60% {\n    -webkit-transform: translateX(0.25em);\n    transform: translateX(0.25em);\n  }\n}\n\n@keyframes shake {\n  10%,\n  90% {\n    -webkit-transform: translateX(-0.0625em);\n    transform: translateX(-0.0625em);\n  }\n  20%,\n  80% {\n    -webkit-transform: translateX(0.125em);\n    transform: translateX(0.125em);\n  }\n  30%,\n  50%,\n  70% {\n    -webkit-transform: translateX(-0.25em);\n    transform: translateX(-0.25em);\n  }\n  40%,\n  60% {\n    -webkit-transform: translateX(0.25em);\n    transform: translateX(0.25em);\n  }\n}\n\n@-webkit-keyframes fall {\n  0% {\n    opacity: 0;\n    -webkit-transform: scale(0.5);\n    transform: scale(0.5);\n    -webkit-animation-timing-function: ease-out;\n    animation-timing-function: ease-out;\n  }\n  70% {\n    opacity: 1;\n    -webkit-transform: scale(1.1);\n    transform: scale(1.1);\n    -webkit-animation-timing-function: ease-in-out;\n    animation-timing-function: ease-in-out;\n  }\n  100% {\n    -webkit-transform: scale(1);\n    transform: scale(1);\n    -webkit-animation-timing-function: ease-out;\n    animation-timing-function: ease-out;\n  }\n}\n\n@keyframes fall {\n  0% {\n    opacity: 0;\n    -webkit-transform: scale(0.5);\n    transform: scale(0.5);\n    -webkit-animation-timing-function: ease-out;\n    animation-timing-function: ease-out;\n  }\n  70% {\n    opacity: 1;\n    -webkit-transform: scale(1.1);\n    transform: scale(1.1);\n    -webkit-animation-timing-function: ease-in-out;\n    animation-timing-function: ease-in-out;\n  }\n  100% {\n    -webkit-transform: scale(1);\n    transform: scale(1);\n    -webkit-animation-timing-function: ease-out;\n    animation-timing-function: ease-out;\n  }\n}\n\n.filepond--hopper[data-hopper-state='drag-over'] > * {\n  pointer-events: none;\n}\n\n.filepond--hopper[data-hopper-state='drag-over']::after {\n  content: '';\n  position: absolute;\n  left: 0;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  z-index: 100;\n}\n\n.filepond--progress-indicator {\n  z-index: 103;\n}\n\n.filepond--file-action-button {\n  z-index: 102;\n}\n\n.filepond--file-status {\n  z-index: 101;\n}\n\n.filepond--file-info {\n  z-index: 100;\n}\n\n.filepond--item {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  z-index: 1;\n  padding: 0;\n  margin: 0.25em;\n  will-change: transform, opacity;\n}\n.filepond--item > .filepond--panel {\n  z-index: -1;\n}\n.filepond--item > .filepond--panel .filepond--panel-bottom {\n  box-shadow: 0 0.0625em 0.125em -0.0625em rgba(0, 0, 0, 0.25);\n}\n\n.filepond--item-panel {\n  background-color: #64605e;\n}\n\n[data-filepond-item-state='processing-complete'] .filepond--item-panel {\n  background-color: #369763;\n}\n\n[data-filepond-item-state*='invalid'] .filepond--item-panel,\n[data-filepond-item-state*='error'] .filepond--item-panel {\n  background-color: #c44e47;\n}\n\n.filepond--item-panel {\n  border-radius: 0.5em;\n  transition: background-color 0.25s;\n}\n\n.filepond--list-scroller {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  margin: 0;\n  will-change: transform;\n}\n\n.filepond--list-scroller[data-state='overflow'] {\n  overflow-y: scroll;\n  overflow-x: hidden;\n  -webkit-overflow-scrolling: touch;\n  -webkit-mask: linear-gradient(\n    to bottom,\n    #000 calc(100% - 0.5em),\n    transparent 100%\n  );\n  mask: linear-gradient(to bottom, #000 calc(100% - 0.5em), transparent 100%);\n}\n.filepond--list-scroller[data-state='overflow'] .filepond--list {\n  bottom: 0;\n  right: 0;\n}\n\n.filepond--list-scroller::-webkit-scrollbar {\n  background: transparent;\n}\n\n.filepond--list-scroller::-webkit-scrollbar:vertical {\n  width: 1em;\n}\n\n.filepond--list-scroller::-webkit-scrollbar:horizontal {\n  height: 0;\n}\n\n.filepond--list-scroller::-webkit-scrollbar-thumb {\n  background-color: rgba(0, 0, 0, 0.3);\n  border-radius: 99999px;\n  border: 0.3125em solid transparent;\n  background-clip: content-box;\n}\n\n/* hard to overide styles on purpose */\n.filepond--list.filepond--list {\n  position: absolute;\n  top: 0;\n  margin: 0;\n  padding: 0;\n  list-style-type: none;\n  will-change: transform;\n}\n\n/* used for padding so allowed to be restyled */\n.filepond--list {\n  left: 0.75em;\n  right: 0.75em;\n}\n\n.filepond--root[data-style-panel-layout~='integrated'] {\n  width: 100%;\n  height: 100%;\n  max-width: none;\n  margin: 0;\n}\n\n.filepond--root[data-style-panel-layout~='circle'] .filepond--panel-root,\n.filepond--root[data-style-panel-layout~='integrated'] .filepond--panel-root {\n  border-radius: 0;\n}\n.filepond--root[data-style-panel-layout~='circle'] .filepond--panel-root > *,\n.filepond--root[data-style-panel-layout~='integrated']\n  .filepond--panel-root\n  > * {\n  display: none;\n}\n\n.filepond--root[data-style-panel-layout~='circle'] .filepond--drop-label,\n.filepond--root[data-style-panel-layout~='integrated'] .filepond--drop-label {\n  bottom: 0;\n  height: auto;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 7;\n}\n\n.filepond--root[data-style-panel-layout~='circle'] .filepond--item-panel,\n.filepond--root[data-style-panel-layout~='integrated'] .filepond--item-panel {\n  display: none;\n}\n\n.filepond--root[data-style-panel-layout~='compact'] .filepond--list-scroller,\n.filepond--root[data-style-panel-layout~='integrated']\n  .filepond--list-scroller {\n  overflow: hidden;\n  height: 100%;\n  margin-top: 0;\n  margin-bottom: 0;\n}\n\n.filepond--root[data-style-panel-layout~='compact'] .filepond--list,\n.filepond--root[data-style-panel-layout~='integrated'] .filepond--list {\n  left: 0;\n  right: 0;\n  height: 100%;\n}\n\n.filepond--root[data-style-panel-layout~='compact'] .filepond--item,\n.filepond--root[data-style-panel-layout~='integrated'] .filepond--item {\n  margin: 0;\n}\n\n.filepond--root[data-style-panel-layout~='compact'] .filepond--file-wrapper,\n.filepond--root[data-style-panel-layout~='integrated'] .filepond--file-wrapper {\n  height: 100%;\n}\n\n.filepond--root[data-style-panel-layout~='circle'] {\n  border-radius: 99999rem;\n  overflow: hidden;\n}\n.filepond--root[data-style-panel-layout~='circle'] > .filepond--panel {\n  border-radius: inherit;\n}\n.filepond--root[data-style-panel-layout~='circle'] > .filepond--panel > * {\n  display: none;\n}\n.filepond--root[data-style-panel-layout~='circle'] .filepond--file-info {\n  display: none;\n}\n.filepond--root[data-style-panel-layout~='circle'] .filepond--file-status {\n  display: none;\n}\n\n.filepond--panel-root {\n  border-radius: 0.5em;\n  background-color: #f1f0ef;\n}\n\n.filepond--panel {\n  position: absolute;\n  left: 0;\n  top: 0;\n  right: 0;\n  margin: 0;\n  height: 100% !important;\n  pointer-events: none;\n}\n\n.filepond-panel:not([data-scalable='false']) {\n  height: auto !important;\n}\n\n.filepond--panel[data-scalable='false'] > div {\n  display: none;\n}\n\n.filepond--panel[data-scalable='true'] {\n  -webkit-transform-style: preserve-3d;\n  transform-style: preserve-3d;\n  background-color: transparent !important;\n  border: none !important;\n}\n\n.filepond--panel-top,\n.filepond--panel-bottom,\n.filepond--panel-center {\n  position: absolute;\n  left: 0;\n  top: 0;\n  right: 0;\n  margin: 0;\n  padding: 0;\n}\n\n.filepond--panel-top,\n.filepond--panel-bottom {\n  height: 0.5em;\n}\n\n.filepond--panel-top {\n  border-bottom-left-radius: 0 !important;\n  border-bottom-right-radius: 0 !important;\n  border-bottom: none !important;\n}\n.filepond--panel-top::after {\n  content: '';\n  position: absolute;\n  height: 2px;\n  left: 0;\n  right: 0;\n  bottom: -1px;\n  background-color: inherit;\n}\n\n.filepond--panel-center,\n.filepond--panel-bottom {\n  will-change: transform;\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  -webkit-transform-origin: left top;\n  transform-origin: left top;\n  -webkit-transform: translate3d(0, 0.5em, 0);\n  transform: translate3d(0, 0.5em, 0);\n}\n\n.filepond--panel-bottom {\n  border-top-left-radius: 0 !important;\n  border-top-right-radius: 0 !important;\n  border-top: none !important;\n}\n.filepond--panel-bottom::before {\n  content: '';\n  position: absolute;\n  height: 2px;\n  left: 0;\n  right: 0;\n  top: -1px;\n  background-color: inherit;\n}\n\n.filepond--panel-center {\n  height: 100px !important;\n  border-top: none !important;\n  border-bottom: none !important;\n  border-radius: 0 !important;\n}\n.filepond--panel-center:not([style]) {\n  visibility: hidden;\n}\n\n.filepond--progress-indicator {\n  position: static;\n  width: 1.25em;\n  height: 1.25em;\n  color: #fff;\n  margin: 0;\n  pointer-events: none;\n  will-change: transform, opacity;\n}\n\n.filepond--progress-indicator svg {\n  width: 100%;\n  height: 100%;\n  vertical-align: top;\n  transform-box: fill-box;\n}\n\n.filepond--progress-indicator path {\n  fill: none;\n  stroke: currentColor;\n}\n\n.filepond--list-scroller {\n  z-index: 6;\n}\n\n.filepond--drop-label {\n  z-index: 5;\n}\n\n.filepond--drip {\n  z-index: 3;\n}\n\n.filepond--root > .filepond--panel {\n  z-index: 2;\n}\n\n.filepond--browser {\n  z-index: 1;\n}\n\n.filepond--root {\n  /* layout*/\n  box-sizing: border-box;\n  position: relative;\n  margin-bottom: 1em;\n  /* base font size for whole component */\n  font-size: 1rem;\n  /* base line height */\n  line-height: normal;\n  /* up uses default system font family */\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica,\n    Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';\n  /* will increase font weight a bit on Safari */\n  font-weight: 450;\n  text-align: left;\n  text-rendering: optimizeLegibility;\n  direction: ltr;\n  contain: layout style size;\n}\n.filepond--root * {\n  font-size: inherit;\n  box-sizing: inherit;\n  line-height: inherit;\n}\n.filepond--root[data-disabled] {\n  pointer-events: none;\n}\n\n/**\n * Root element children layout\n */\n.filepond--root .filepond--drop-label {\n  min-height: 4.75em;\n}\n\n.filepond--root .filepond--list-scroller {\n  margin-top: 1em;\n  margin-bottom: 1em;\n}\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return '@media ' + item[2] + '{' + content + '}';
      } else {
        return content;
      }
    }).join('');
  }; // import a list of modules into the list


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (i = 0; i < modules.length; i++) {
      var item = modules[i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = '(' + item[2] + ') and (' + mediaQuery + ')';
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || '';
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;
  return '/*# ' + data + ' */';
}

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/url-escape.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/url-escape.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function escape(url, needQuotes) {
  if (typeof url !== 'string') {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || needQuotes) {
    return '"' + url.replace(/"/g, '\\"').replace(/\n/g, '\\n') + '"';
  }

  return url;
};

/***/ }),

/***/ "./node_modules/filepond/dist/filepond.js":
/*!************************************************!*\
  !*** ./node_modules/filepond/dist/filepond.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*!
 * FilePond 4.4.7
 * Licensed under MIT, https://opensource.org/licenses/MIT/
 * Please visit https://pqina.nl/filepond/ for details.
 */

/* eslint-disable */

(function(global, factory) {
   true
    ? factory(exports)
    : undefined;
})(this, function(exports) {
  'use strict';

  var isNode = function isNode(value) {
    return value instanceof HTMLElement;
  };

  var createStore = function createStore(initialState) {
    var queries =
      arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
    var actions =
      arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
    // internal state
    var state = Object.assign({}, initialState);

    // contains all actions for next frame, is clear when actions are requested
    var actionQueue = [];
    var dispatchQueue = [];

    // returns a duplicate of the current state
    var getState = function getState() {
      return Object.assign({}, state);
    };

    // returns a duplicate of the actions array and clears the actions array
    var processActionQueue = function processActionQueue() {
      // create copy of actions queue
      var queue = [].concat(actionQueue);

      // clear actions queue (we don't want no double actions)
      actionQueue.length = 0;

      return queue;
    };

    // processes actions that might block the main UI thread
    var processDispatchQueue = function processDispatchQueue() {
      // create copy of actions queue
      var queue = [].concat(dispatchQueue);

      // clear actions queue (we don't want no double actions)
      dispatchQueue.length = 0;

      // now dispatch these actions
      queue.forEach(function(_ref) {
        var type = _ref.type,
          data = _ref.data;
        dispatch(type, data);
      });
    };

    // adds a new action, calls its handler and
    var dispatch = function dispatch(type, data, isBlocking) {
      // is blocking action
      if (isBlocking) {
        dispatchQueue.push({
          type: type,
          data: data
        });

        return;
      }

      // if this action has a handler, handle the action
      if (actionHandlers[type]) {
        actionHandlers[type](data);
      }

      // now add action
      actionQueue.push({
        type: type,
        data: data
      });
    };

    var query = function query(str) {
      var _queryHandles;
      for (
        var _len = arguments.length,
          args = new Array(_len > 1 ? _len - 1 : 0),
          _key = 1;
        _key < _len;
        _key++
      ) {
        args[_key - 1] = arguments[_key];
      }
      return queryHandles[str]
        ? (_queryHandles = queryHandles)[str].apply(_queryHandles, args)
        : null;
    };

    var api = {
      getState: getState,
      processActionQueue: processActionQueue,
      processDispatchQueue: processDispatchQueue,
      dispatch: dispatch,
      query: query
    };

    var queryHandles = {};
    queries.forEach(function(query) {
      queryHandles = Object.assign({}, query(state), queryHandles);
    });

    var actionHandlers = {};
    actions.forEach(function(action) {
      actionHandlers = Object.assign(
        {},
        action(dispatch, query, state),
        actionHandlers
      );
    });

    return api;
  };

  var defineProperty = function defineProperty(obj, property, definition) {
    if (typeof definition === 'function') {
      obj[property] = definition;
      return;
    }
    Object.defineProperty(obj, property, Object.assign({}, definition));
  };

  var forin = function forin(obj, cb) {
    for (var key in obj) {
      if (!obj.hasOwnProperty(key)) {
        continue;
      }

      cb(key, obj[key]);
    }
  };

  var createObject = function createObject(definition) {
    var obj = {};
    forin(definition, function(property) {
      defineProperty(obj, property, definition[property]);
    });
    return obj;
  };

  var attr = function attr(node, name) {
    var value =
      arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
    if (value === null) {
      return node.getAttribute(name) || node.hasAttribute(name);
    }
    node.setAttribute(name, value);
  };

  var ns = 'http://www.w3.org/2000/svg';
  var svgElements = ['svg', 'path']; // only svg elements used

  var isSVGElement = function isSVGElement(tag) {
    return svgElements.includes(tag);
  };

  var createElement = function createElement(tag, className) {
    var attributes =
      arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    if (typeof className === 'object') {
      attributes = className;
      className = null;
    }
    var element = isSVGElement(tag)
      ? document.createElementNS(ns, tag)
      : document.createElement(tag);
    if (className) {
      if (isSVGElement(tag)) {
        attr(element, 'class', className);
      } else {
        element.className = className;
      }
    }
    forin(attributes, function(name, value) {
      attr(element, name, value);
    });
    return element;
  };

  var appendChild = function appendChild(parent) {
    return function(child, index) {
      if (typeof index !== 'undefined' && parent.children[index]) {
        parent.insertBefore(child, parent.children[index]);
      } else {
        parent.appendChild(child);
      }
    };
  };

  var appendChildView = function appendChildView(parent, childViews) {
    return function(view, index) {
      if (typeof index !== 'undefined') {
        childViews.splice(index, 0, view);
      } else {
        childViews.push(view);
      }

      return view;
    };
  };

  var removeChildView = function removeChildView(parent, childViews) {
    return function(view) {
      // remove from child views
      childViews.splice(childViews.indexOf(view), 1);

      // remove the element
      if (view.element.parentNode) {
        parent.removeChild(view.element);
      }

      return view;
    };
  };

  var getViewRect = function getViewRect(
    elementRect,
    childViews,
    offset,
    scale
  ) {
    var left = offset[0] || elementRect.left;
    var top = offset[1] || elementRect.top;
    var right = left + elementRect.width;
    var bottom = top + elementRect.height * (scale[1] || 1);

    var rect = {
      // the rectangle of the element itself
      element: Object.assign({}, elementRect),

      // the rectangle of the element expanded to contain its children, does not include any margins
      inner: {
        left: elementRect.left,
        top: elementRect.top,
        right: elementRect.right,
        bottom: elementRect.bottom
      },

      // the rectangle of the element expanded to contain its children including own margin and child margins
      // margins will be added after we've recalculated the size
      outer: {
        left: left,
        top: top,
        right: right,
        bottom: bottom
      }
    };

    // expand rect to fit all child rectangles
    childViews
      .filter(function(childView) {
        return !childView.isRectIgnored();
      })
      .map(function(childView) {
        return childView.rect;
      })
      .forEach(function(childViewRect) {
        expandRect(rect.inner, Object.assign({}, childViewRect.inner));
        expandRect(rect.outer, Object.assign({}, childViewRect.outer));
      });

    // calculate inner width and height
    calculateRectSize(rect.inner);

    // append additional margin (top and left margins are included in top and left automatically)
    rect.outer.bottom += rect.element.marginBottom;
    rect.outer.right += rect.element.marginRight;

    // calculate outer width and height
    calculateRectSize(rect.outer);

    return rect;
  };

  var expandRect = function expandRect(parent, child) {
    // adjust for parent offset
    child.top += parent.top;
    child.right += parent.left;
    child.bottom += parent.top;
    child.left += parent.left;

    if (child.bottom > parent.bottom) {
      parent.bottom = child.bottom;
    }

    if (child.right > parent.right) {
      parent.right = child.right;
    }
  };

  var calculateRectSize = function calculateRectSize(rect) {
    rect.width = rect.right - rect.left;
    rect.height = rect.bottom - rect.top;
  };

  var isNumber = function isNumber(value) {
    return typeof value === 'number';
  };

  /**
   * Determines if position is at destination
   * @param position
   * @param destination
   * @param velocity
   * @param errorMargin
   * @returns {boolean}
   */
  var thereYet = function thereYet(position, destination, velocity) {
    var errorMargin =
      arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0.001;
    return (
      Math.abs(position - destination) < errorMargin &&
      Math.abs(velocity) < errorMargin
    );
  };

  /**
   * Spring animation
   */
  var spring =
    // default options
    function spring() // method definition
    {
      var _ref =
          arguments.length > 0 && arguments[0] !== undefined
            ? arguments[0]
            : {},
        _ref$stiffness = _ref.stiffness,
        stiffness = _ref$stiffness === void 0 ? 0.5 : _ref$stiffness,
        _ref$damping = _ref.damping,
        damping = _ref$damping === void 0 ? 0.75 : _ref$damping,
        _ref$mass = _ref.mass,
        mass = _ref$mass === void 0 ? 10 : _ref$mass;
      var target = null;
      var position = null;
      var velocity = 0;
      var resting = false;

      // updates spring state
      var interpolate = function interpolate() {
        // in rest, don't animate
        if (resting) {
          return;
        }

        // need at least a target or position to do springy things
        if (!(isNumber(target) && isNumber(position))) {
          resting = true;
          velocity = 0;
          return;
        }

        // calculate spring force
        var f = -(position - target) * stiffness;

        // update velocity by adding force based on mass
        velocity += f / mass;

        // update position by adding velocity
        position += velocity;

        // slow down based on amount of damping
        velocity *= damping;

        // we've arrived if we're near target and our velocity is near zero
        if (thereYet(position, target, velocity)) {
          position = target;
          velocity = 0;
          resting = true;

          // we done
          api.onupdate(position);
          api.oncomplete(position);
        } else {
          // progress update
          api.onupdate(position);
        }
      };

      /**
       * Set new target value
       * @param value
       */
      var setTarget = function setTarget(value) {
        // if currently has no position, set target and position to this value
        if (isNumber(value) && !isNumber(position)) {
          position = value;
        }

        // next target value will not be animated to
        if (target === null) {
          target = value;
          position = value;
        }

        // let start moving to target
        target = value;

        // already at target
        if (position === target || typeof target === 'undefined') {
          // now resting as target is current position, stop moving
          resting = true;
          velocity = 0;

          // done!
          api.onupdate(position);
          api.oncomplete(position);

          return;
        }

        resting = false;
      };

      // need 'api' to call onupdate callback
      var api = createObject({
        interpolate: interpolate,
        target: {
          set: setTarget,
          get: function get() {
            return target;
          }
        },

        resting: {
          get: function get() {
            return resting;
          }
        },

        onupdate: function onupdate(value) {},
        oncomplete: function oncomplete(value) {}
      });

      return api;
    };

  var easeLinear = function easeLinear(t) {
    return t;
  };
  var easeInOutQuad = function easeInOutQuad(t) {
    return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
  };

  var tween =
    // default values
    function tween() // method definition
    {
      var _ref =
          arguments.length > 0 && arguments[0] !== undefined
            ? arguments[0]
            : {},
        _ref$duration = _ref.duration,
        duration = _ref$duration === void 0 ? 500 : _ref$duration,
        _ref$easing = _ref.easing,
        easing = _ref$easing === void 0 ? easeInOutQuad : _ref$easing,
        _ref$delay = _ref.delay,
        delay = _ref$delay === void 0 ? 0 : _ref$delay;
      var start = null;
      var t;
      var p;
      var resting = true;
      var reverse = false;
      var target = null;

      var interpolate = function interpolate(ts) {
        if (resting || target === null) {
          return;
        }

        if (start === null) {
          start = ts;
        }

        if (ts - start < delay) {
          return;
        }

        t = ts - start - delay;

        if (t < duration) {
          p = t / duration;
          api.onupdate((t >= 0 ? easing(reverse ? 1 - p : p) : 0) * target);
        } else {
          t = 1;
          p = reverse ? 0 : 1;
          api.onupdate(p * target);
          api.oncomplete(p * target);
          resting = true;
        }
      };

      // need 'api' to call onupdate callback
      var api = createObject({
        interpolate: interpolate,
        target: {
          get: function get() {
            return reverse ? 0 : target;
          },
          set: function set(value) {
            // is initial value
            if (target === null) {
              target = value;
              api.onupdate(value);
              api.oncomplete(value);
              return;
            }

            // want to tween to a smaller value and have a current value
            if (value < target) {
              target = 1;
              reverse = true;
            } else {
              // not tweening to a smaller value
              reverse = false;
              target = value;
            }

            // let's go!
            resting = false;
            start = null;
          }
        },

        resting: {
          get: function get() {
            return resting;
          }
        },

        onupdate: function onupdate(value) {},
        oncomplete: function oncomplete(value) {}
      });

      return api;
    };

  var animator = {
    spring: spring,
    tween: tween
  };

  /*
                       { type: 'spring', stiffness: .5, damping: .75, mass: 10 };
                       { translation: { type: 'spring', ... }, ... }
                       { translation: { x: { type: 'spring', ... } } }
                      */
  var createAnimator = function createAnimator(definition, category, property) {
    // default is single definition
    // we check if transform is set, if so, we check if property is set
    var def =
      definition[category] && typeof definition[category][property] === 'object'
        ? definition[category][property]
        : definition[category] || definition;

    var type = typeof def === 'string' ? def : def.type;
    var props = typeof def === 'object' ? Object.assign({}, def) : {};

    return animator[type] ? animator[type](props) : null;
  };

  var addGetSet = function addGetSet(keys, obj, props) {
    var overwrite =
      arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
    obj = Array.isArray(obj) ? obj : [obj];
    obj.forEach(function(o) {
      keys.forEach(function(key) {
        var name = key;
        var getter = function getter() {
          return props[key];
        };
        var setter = function setter(value) {
          return (props[key] = value);
        };

        if (typeof key === 'object') {
          name = key.key;
          getter = key.getter || getter;
          setter = key.setter || setter;
        }

        if (o[name] && !overwrite) {
          return;
        }

        o[name] = {
          get: getter,
          set: setter
        };
      });
    });
  };

  var isDefined = function isDefined(value) {
    return value != null;
  };

  // add to state,
  // add getters and setters to internal and external api (if not set)
  // setup animators

  var animations = function animations(_ref) {
    var mixinConfig = _ref.mixinConfig,
      viewProps = _ref.viewProps,
      viewInternalAPI = _ref.viewInternalAPI,
      viewExternalAPI = _ref.viewExternalAPI,
      viewState = _ref.viewState;
    // initial properties
    var initialProps = Object.assign({}, viewProps);

    // list of all active animations
    var animations = [];

    // setup animators
    forin(mixinConfig, function(property, animation) {
      var animator = createAnimator(animation);
      if (!animator) {
        return;
      }

      // when the animator updates, update the view state value
      animator.onupdate = function(value) {
        viewProps[property] = value;
      };

      // set animator target
      animator.target = initialProps[property];

      // when value is set, set the animator target value
      var prop = {
        key: property,
        setter: function setter(value) {
          // if already at target, we done!
          if (animator.target === value) {
            return;
          }

          animator.target = value;
        },
        getter: function getter() {
          return viewProps[property];
        }
      };

      // add getters and setters
      addGetSet([prop], [viewInternalAPI, viewExternalAPI], viewProps, true);

      // add it to the list for easy updating from the _write method
      animations.push(animator);
    });

    // expose internal write api
    return {
      write: function write(ts) {
        var resting = true;
        animations.forEach(function(animation) {
          if (!animation.resting) {
            resting = false;
          }
          animation.interpolate(ts);
        });
        return resting;
      },
      destroy: function destroy() {}
    };
  };

  var addEvent = function addEvent(element) {
    return function(type, fn) {
      element.addEventListener(type, fn);
    };
  };

  var removeEvent = function removeEvent(element) {
    return function(type, fn) {
      element.removeEventListener(type, fn);
    };
  };

  // mixin
  var listeners = function listeners(_ref) {
    var mixinConfig = _ref.mixinConfig,
      viewProps = _ref.viewProps,
      viewInternalAPI = _ref.viewInternalAPI,
      viewExternalAPI = _ref.viewExternalAPI,
      viewState = _ref.viewState,
      view = _ref.view;
    var events = [];

    var add = addEvent(view.element);
    var remove = removeEvent(view.element);

    viewExternalAPI.on = function(type, fn) {
      events.push({
        type: type,
        fn: fn
      });

      add(type, fn);
    };

    viewExternalAPI.off = function(type, fn) {
      events.splice(
        events.findIndex(function(event) {
          return event.type === type && event.fn === fn;
        }),
        1
      );

      remove(type, fn);
    };

    return {
      write: function write() {
        // not busy
        return true;
      },
      destroy: function destroy() {
        events.forEach(function(event) {
          remove(event.type, event.fn);
        });
      }
    };
  };

  // add to external api and link to props

  var apis = function apis(_ref) {
    var mixinConfig = _ref.mixinConfig,
      viewProps = _ref.viewProps,
      viewExternalAPI = _ref.viewExternalAPI;
    addGetSet(mixinConfig, viewExternalAPI, viewProps);
  };

  // add to state,
  // add getters and setters to internal and external api (if not set)
  // set initial state based on props in viewProps
  // apply as transforms each frame

  var defaults = {
    opacity: 1,
    scaleX: 1,
    scaleY: 1,
    translateX: 0,
    translateY: 0,
    rotateX: 0,
    rotateY: 0,
    rotateZ: 0,
    originX: 0,
    originY: 0
  };

  var styles = function styles(_ref) {
    var mixinConfig = _ref.mixinConfig,
      viewProps = _ref.viewProps,
      viewInternalAPI = _ref.viewInternalAPI,
      viewExternalAPI = _ref.viewExternalAPI,
      view = _ref.view;
    // initial props
    var initialProps = Object.assign({}, viewProps);

    // current props
    var currentProps = {};

    // we will add those properties to the external API and link them to the viewState
    addGetSet(mixinConfig, [viewInternalAPI, viewExternalAPI], viewProps);

    // override rect on internal and external rect getter so it takes in account transforms
    var getOffset = function getOffset() {
      return [viewProps['translateX'] || 0, viewProps['translateY'] || 0];
    };

    var getScale = function getScale() {
      return [viewProps['scaleX'] || 0, viewProps['scaleY'] || 0];
    };
    var getRect = function getRect() {
      return view.rect
        ? getViewRect(view.rect, view.childViews, getOffset(), getScale())
        : null;
    };
    viewInternalAPI.rect = { get: getRect };
    viewExternalAPI.rect = { get: getRect };

    // apply view props
    mixinConfig.forEach(function(key) {
      viewProps[key] =
        typeof initialProps[key] === 'undefined'
          ? defaults[key]
          : initialProps[key];
    });

    // expose api
    return {
      write: function write() {
        // see if props have changed
        if (!propsHaveChanged(currentProps, viewProps)) {
          return;
        }

        // moves element to correct position on screen
        applyStyles(view.element, viewProps);

        // store new transforms
        Object.assign(currentProps, Object.assign({}, viewProps));

        // no longer busy
        return true;
      },
      destroy: function destroy() {}
    };
  };

  var propsHaveChanged = function propsHaveChanged(currentProps, newProps) {
    // different amount of keys
    if (Object.keys(currentProps).length !== Object.keys(newProps).length) {
      return true;
    }

    // lets analyze the individual props
    for (var prop in newProps) {
      if (newProps[prop] !== currentProps[prop]) {
        return true;
      }
    }

    return false;
  };

  var applyStyles = function applyStyles(element, _ref2) {
    var opacity = _ref2.opacity,
      perspective = _ref2.perspective,
      translateX = _ref2.translateX,
      translateY = _ref2.translateY,
      scaleX = _ref2.scaleX,
      scaleY = _ref2.scaleY,
      rotateX = _ref2.rotateX,
      rotateY = _ref2.rotateY,
      rotateZ = _ref2.rotateZ,
      originX = _ref2.originX,
      originY = _ref2.originY,
      width = _ref2.width,
      height = _ref2.height;

    var transforms = '';
    var styles = '';

    // handle transform origin
    if (isDefined(originX) || isDefined(originY)) {
      styles +=
        'transform-origin: ' + (originX || 0) + 'px ' + (originY || 0) + 'px;';
    }

    // transform order is relevant
    // 0. perspective
    if (isDefined(perspective)) {
      transforms += 'perspective(' + perspective + 'px) ';
    }

    // 1. translate
    if (isDefined(translateX) || isDefined(translateY)) {
      transforms +=
        'translate3d(' +
        (translateX || 0) +
        'px, ' +
        (translateY || 0) +
        'px, 0) ';
    }

    // 2. scale
    if (isDefined(scaleX) || isDefined(scaleY)) {
      transforms +=
        'scale3d(' +
        (isDefined(scaleX) ? scaleX : 1) +
        ', ' +
        (isDefined(scaleY) ? scaleY : 1) +
        ', 1) ';
    }

    // 3. rotate
    if (isDefined(rotateZ)) {
      transforms += 'rotateZ(' + rotateZ + 'rad) ';
    }

    if (isDefined(rotateX)) {
      transforms += 'rotateX(' + rotateX + 'rad) ';
    }

    if (isDefined(rotateY)) {
      transforms += 'rotateY(' + rotateY + 'rad) ';
    }

    // add transforms
    if (transforms.length) {
      styles += 'transform:' + transforms + ';';
    }

    // add opacity
    if (isDefined(opacity)) {
      styles += 'opacity:' + opacity + ';';

      // if we reach zero, we make the element inaccessible
      if (opacity === 0) {
        styles += 'visibility:hidden;';
      }

      // if we're below 100% opacity this element can't be clicked
      if (opacity < 1) {
        styles += 'pointer-events:none;';
      }
    }

    // add height
    if (isDefined(height)) {
      styles += 'height:' + height + 'px;';
    }

    // add width
    if (isDefined(width)) {
      styles += 'width:' + width + 'px;';
    }

    // apply styles
    var elementCurrentStyle = element.elementCurrentStyle || '';

    // if new styles does not match current styles, lets update!
    if (
      styles.length !== elementCurrentStyle.length ||
      styles !== elementCurrentStyle
    ) {
      element.setAttribute('style', styles);
      // store current styles so we can compare them to new styles later on
      // _not_ getting the style attribute is faster
      element.elementCurrentStyle = styles;
    }
  };

  var Mixins = {
    styles: styles,
    listeners: listeners,
    animations: animations,
    apis: apis
  };

  var updateRect = function updateRect() {
    var rect =
      arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var element =
      arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var style =
      arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

    if (!element.layoutCalculated) {
      rect.paddingTop = parseInt(style.paddingTop, 10) || 0;
      rect.marginTop = parseInt(style.marginTop, 10) || 0;
      rect.marginRight = parseInt(style.marginRight, 10) || 0;
      rect.marginBottom = parseInt(style.marginBottom, 10) || 0;
      rect.marginLeft = parseInt(style.marginLeft, 10) || 0;
      element.layoutCalculated = true;
    }

    rect.left = element.offsetLeft || 0;
    rect.top = element.offsetTop || 0;
    rect.width = element.offsetWidth || 0;
    rect.height = element.offsetHeight || 0;

    rect.right = rect.left + rect.width;
    rect.bottom = rect.top + rect.height;

    rect.scrollTop = element.scrollTop;

    rect.hidden = element.offsetParent === null;

    return rect;
  };

  var createView =
    // default view definition
    function createView() {
      var _ref =
          arguments.length > 0 && arguments[0] !== undefined
            ? arguments[0]
            : {},
        _ref$tag = _ref.tag,
        tag = _ref$tag === void 0 ? 'div' : _ref$tag,
        _ref$name = _ref.name,
        name = _ref$name === void 0 ? null : _ref$name,
        _ref$attributes = _ref.attributes,
        attributes = _ref$attributes === void 0 ? {} : _ref$attributes,
        _ref$read = _ref.read,
        read = _ref$read === void 0 ? function() {} : _ref$read,
        _ref$write = _ref.write,
        write = _ref$write === void 0 ? function() {} : _ref$write,
        _ref$create = _ref.create,
        create = _ref$create === void 0 ? function() {} : _ref$create,
        _ref$destroy = _ref.destroy,
        destroy = _ref$destroy === void 0 ? function() {} : _ref$destroy,
        _ref$filterFrameActio = _ref.filterFrameActionsForChild,
        filterFrameActionsForChild =
          _ref$filterFrameActio === void 0
            ? function(child, actions) {
                return actions;
              }
            : _ref$filterFrameActio,
        _ref$didCreateView = _ref.didCreateView,
        didCreateView =
          _ref$didCreateView === void 0 ? function() {} : _ref$didCreateView,
        _ref$didWriteView = _ref.didWriteView,
        didWriteView =
          _ref$didWriteView === void 0 ? function() {} : _ref$didWriteView,
        _ref$ignoreRect = _ref.ignoreRect,
        ignoreRect = _ref$ignoreRect === void 0 ? false : _ref$ignoreRect,
        _ref$ignoreRectUpdate = _ref.ignoreRectUpdate,
        ignoreRectUpdate =
          _ref$ignoreRectUpdate === void 0 ? false : _ref$ignoreRectUpdate,
        _ref$mixins = _ref.mixins,
        mixins = _ref$mixins === void 0 ? [] : _ref$mixins;
      return function(
        // each view requires reference to store
        store
      ) {
        var props =
          arguments.length > 1 && arguments[1] !== undefined
            ? arguments[1]
            : {};
        // root element should not be changed
        var element = createElement(tag, 'filepond--' + name, attributes);

        // style reference should also not be changed
        var style = window.getComputedStyle(element, null);

        // element rectangle
        var rect = updateRect();
        var frameRect = null;

        // rest state
        var isResting = false;

        // pretty self explanatory
        var childViews = [];

        // loaded mixins
        var activeMixins = [];

        // references to created children
        var ref = {};

        // state used for each instance
        var state = {};

        // list of writers that will be called to update this view
        var writers = [
          write // default writer
        ];

        var readers = [
          read // default reader
        ];

        var destroyers = [
          destroy // default destroy
        ];

        // core view methods
        var getElement = function getElement() {
          return element;
        };
        var getChildViews = function getChildViews() {
          return childViews.concat();
        };
        var getReference = function getReference() {
          return ref;
        };
        var createChildView = function createChildView(store) {
          return function(view, props) {
            return view(store, props);
          };
        };
        var getRect = function getRect() {
          if (frameRect) {
            return frameRect;
          }
          frameRect = getViewRect(rect, childViews, [0, 0], [1, 1]);
          return frameRect;
        };
        var getStyle = function getStyle() {
          return style;
        };

        /**
         * Read data from DOM
         * @private
         */
        var _read = function _read() {
          frameRect = null;

          // read child views
          childViews.forEach(function(child) {
            return child._read();
          });

          var shouldUpdate = !(ignoreRectUpdate && rect.width && rect.height);
          if (shouldUpdate) {
            updateRect(rect, element, style);
          }

          // readers
          var api = { root: internalAPI, props: props, rect: rect };
          readers.forEach(function(reader) {
            return reader(api);
          });
        };

        /**
         * Write data to DOM
         * @private
         */
        var _write = function _write(ts, frameActions, shouldOptimize) {
          // if no actions, we assume that the view is resting
          var resting = frameActions.length === 0;

          // writers
          writers.forEach(function(writer) {
            var writerResting = writer({
              props: props,
              root: internalAPI,
              actions: frameActions,
              timestamp: ts,
              shouldOptimize: shouldOptimize
            });

            if (writerResting === false) {
              resting = false;
            }
          });

          // run mixins
          activeMixins.forEach(function(mixin) {
            // if one of the mixins is still busy after write operation, we are not resting
            var mixinResting = mixin.write(ts);
            if (mixinResting === false) {
              resting = false;
            }
          });

          // updates child views that are currently attached to the DOM
          childViews
            .filter(function(child) {
              return !!child.element.parentNode;
            })
            .forEach(function(child) {
              // if a child view is not resting, we are not resting
              var childResting = child._write(
                ts,
                filterFrameActionsForChild(child, frameActions),
                shouldOptimize
              );

              if (!childResting) {
                resting = false;
              }
            });

          // append new elements to DOM and update those
          childViews
            //.filter(child => !child.element.parentNode)
            .forEach(function(child, index) {
              // skip
              if (child.element.parentNode) {
                return;
              }

              // append to DOM
              internalAPI.appendChild(child.element, index);

              // call read (need to know the size of these elements)
              child._read();

              // re-call write
              child._write(
                ts,
                filterFrameActionsForChild(child, frameActions),
                shouldOptimize
              );

              // we just added somthing to the dom, no rest
              resting = false;
            });

          // update resting state
          isResting = resting;

          didWriteView({
            props: props,
            root: internalAPI,
            actions: frameActions,
            timestamp: ts
          });

          // let parent know if we are resting
          return resting;
        };

        var _destroy = function _destroy() {
          activeMixins.forEach(function(mixin) {
            return mixin.destroy();
          });
          destroyers.forEach(function(destroyer) {
            destroyer({ root: internalAPI, props: props });
          });
          childViews.forEach(function(child) {
            return child._destroy();
          });
        };

        // sharedAPI
        var sharedAPIDefinition = {
          element: {
            get: getElement
          },

          style: {
            get: getStyle
          },

          childViews: {
            get: getChildViews
          }
        };

        // private API definition
        var internalAPIDefinition = Object.assign({}, sharedAPIDefinition, {
          rect: {
            get: getRect
          },

          // access to custom children references
          ref: {
            get: getReference
          },

          // dom modifiers
          is: function is(needle) {
            return name === needle;
          },
          appendChild: appendChild(element),
          createChildView: createChildView(store),
          linkView: function linkView(view) {
            childViews.push(view);
            return view;
          },
          unlinkView: function unlinkView(view) {
            childViews.splice(childViews.indexOf(view), 1);
          },
          appendChildView: appendChildView(element, childViews),
          removeChildView: removeChildView(element, childViews),
          registerWriter: function registerWriter(writer) {
            return writers.push(writer);
          },
          registerReader: function registerReader(reader) {
            return readers.push(reader);
          },
          registerDestroyer: function registerDestroyer(destroyer) {
            return destroyers.push(destroyer);
          },
          invalidateLayout: function invalidateLayout() {
            return (element.layoutCalculated = false);
          },

          // access to data store
          dispatch: store.dispatch,
          query: store.query
        });

        // public view API methods
        var externalAPIDefinition = {
          element: {
            get: getElement
          },

          childViews: {
            get: getChildViews
          },

          rect: {
            get: getRect
          },

          resting: {
            get: function get() {
              return isResting;
            }
          },

          isRectIgnored: function isRectIgnored() {
            return ignoreRect;
          },
          _read: _read,
          _write: _write,
          _destroy: _destroy
        };

        // mixin API methods
        var mixinAPIDefinition = Object.assign({}, sharedAPIDefinition, {
          rect: {
            get: function get() {
              return rect;
            }
          }
        });

        // add mixin functionality
        Object.keys(mixins)
          .sort(function(a, b) {
            // move styles to the back of the mixin list (so adjustments of other mixins are applied to the props correctly)
            if (a === 'styles') {
              return 1;
            } else if (b === 'styles') {
              return -1;
            }
            return 0;
          })
          .forEach(function(key) {
            var mixinAPI = Mixins[key]({
              mixinConfig: mixins[key],
              viewProps: props,
              viewState: state,
              viewInternalAPI: internalAPIDefinition,
              viewExternalAPI: externalAPIDefinition,
              view: createObject(mixinAPIDefinition)
            });

            if (mixinAPI) {
              activeMixins.push(mixinAPI);
            }
          });

        // construct private api
        var internalAPI = createObject(internalAPIDefinition);

        // create the view
        create({
          root: internalAPI,
          props: props
        });

        // append created child views to root node
        var childCount = element.children.length; // need to know the current child count so appending happens in correct order
        childViews.forEach(function(child, index) {
          internalAPI.appendChild(child.element, childCount + index);
        });

        // call did create
        didCreateView(internalAPI);

        // expose public api
        return createObject(externalAPIDefinition, props);
      };
    };

  var createPainter = function createPainter(read, write) {
    var fps =
      arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 60;

    var name = '__framePainter';

    // set global painter
    if (window[name]) {
      window[name].readers.push(read);
      window[name].writers.push(write);
      return;
    }

    window[name] = {
      readers: [read],
      writers: [write]
    };

    var painter = window[name];

    var interval = 1000 / fps;
    var last = null;
    var id = null;
    var requestTick = null;
    var cancelTick = null;

    var setTimerType = function setTimerType() {
      if (document.hidden) {
        requestTick = function requestTick() {
          return window.setTimeout(function() {
            return tick(performance.now());
          }, interval);
        };
        cancelTick = function cancelTick() {
          return window.clearTimeout(id);
        };
      } else {
        requestTick = function requestTick() {
          return window.requestAnimationFrame(tick);
        };
        cancelTick = function cancelTick() {
          return window.cancelAnimationFrame(id);
        };
      }
    };

    document.addEventListener('visibilitychange', function() {
      if (cancelTick) cancelTick();
      setTimerType();
      tick(performance.now());
    });

    var tick = function tick(ts) {
      // queue next tick
      id = requestTick(tick);

      // limit fps
      if (!last) {
        last = ts;
      }

      var delta = ts - last;

      if (delta <= interval) {
        // skip frame
        return;
      }

      // align next frame
      last = ts - (delta % interval);

      // update view
      painter.readers.forEach(function(read) {
        return read();
      });
      painter.writers.forEach(function(write) {
        return write(ts);
      });
    };

    setTimerType();
    tick(performance.now());

    return {
      pause: function pause() {
        cancelTick(id);
      }
    };
  };

  var createRoute = function createRoute(routes, fn) {
    return function(_ref) {
      var root = _ref.root,
        props = _ref.props,
        _ref$actions = _ref.actions,
        actions = _ref$actions === void 0 ? [] : _ref$actions,
        timestamp = _ref.timestamp,
        shouldOptimize = _ref.shouldOptimize;
      actions
        .filter(function(action) {
          return routes[action.type];
        })
        .forEach(function(action) {
          return routes[action.type]({
            root: root,
            props: props,
            action: action.data,
            timestamp: timestamp,
            shouldOptimize: shouldOptimize
          });
        });

      if (fn) {
        fn({
          root: root,
          props: props,
          actions: actions,
          timestamp: timestamp,
          shouldOptimize: shouldOptimize
        });
      }
    };
  };

  var insertBefore = function insertBefore(newNode, referenceNode) {
    return referenceNode.parentNode.insertBefore(newNode, referenceNode);
  };

  var insertAfter = function insertAfter(newNode, referenceNode) {
    return referenceNode.parentNode.insertBefore(
      newNode,
      referenceNode.nextSibling
    );
  };

  var isArray = function isArray(value) {
    return Array.isArray(value);
  };

  var isEmpty = function isEmpty(value) {
    return value == null;
  };

  var trim = function trim(str) {
    return str.trim();
  };

  var toString = function toString(value) {
    return '' + value;
  };

  var toArray = function toArray(value) {
    var splitter =
      arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ',';
    if (isEmpty(value)) {
      return [];
    }
    if (isArray(value)) {
      return value;
    }
    return toString(value)
      .split(splitter)
      .map(trim)
      .filter(function(str) {
        return str.length;
      });
  };

  var isBoolean = function isBoolean(value) {
    return typeof value === 'boolean';
  };

  var toBoolean = function toBoolean(value) {
    return isBoolean(value) ? value : value === 'true';
  };

  var isString = function isString(value) {
    return typeof value === 'string';
  };

  var toNumber = function toNumber(value) {
    return isNumber(value)
      ? value
      : isString(value)
      ? toString(value).replace(/[a-z]+/gi, '')
      : 0;
  };

  var toInt = function toInt(value) {
    return parseInt(toNumber(value), 10);
  };

  var toFloat = function toFloat(value) {
    return parseFloat(toNumber(value));
  };

  var isInt = function isInt(value) {
    return isNumber(value) && isFinite(value) && Math.floor(value) === value;
  };

  var toBytes = function toBytes(value) {
    // is in bytes
    if (isInt(value)) {
      return value;
    }

    // is natural file size
    var naturalFileSize = toString(value).trim();

    // if is value in megabytes
    if (/MB$/i.test(naturalFileSize)) {
      naturalFileSize = naturalFileSize.replace(/MB$i/, '').trim();
      return toInt(naturalFileSize) * 1000 * 1000;
    }

    // if is value in kilobytes
    if (/KB/i.test(naturalFileSize)) {
      naturalFileSize = naturalFileSize.replace(/KB$i/, '').trim();
      return toInt(naturalFileSize) * 1000;
    }

    return toInt(naturalFileSize);
  };

  var isFunction = function isFunction(value) {
    return typeof value === 'function';
  };

  var toFunctionReference = function toFunctionReference(string) {
    var ref = self;
    var levels = string.split('.');
    var level = null;
    while ((level = levels.shift())) {
      ref = ref[level];
      if (!ref) {
        return null;
      }
    }
    return ref;
  };

  var methods = {
    process: 'POST',
    revert: 'DELETE',
    fetch: 'GET',
    restore: 'GET',
    load: 'GET'
  };

  var createServerAPI = function createServerAPI(outline) {
    var api = {};

    api.url = isString(outline) ? outline : outline.url || '';
    api.timeout = outline.timeout ? parseInt(outline.timeout, 10) : 0;

    forin(methods, function(key) {
      api[key] = createAction(key, outline[key], methods[key], api.timeout);
    });

    // special treatment for remove
    api.remove = outline.remove || null;

    return api;
  };

  var createAction = function createAction(name, outline, method, timeout) {
    // is explicitely set to null so disable
    if (outline === null) {
      return null;
    }

    // if is custom function, done! Dev handles everything.
    if (typeof outline === 'function') {
      return outline;
    }

    // build action object
    var action = {
      url: method === 'GET' ? '?' + name + '=' : '',
      method: method,
      headers: {},
      withCredentials: false,
      timeout: timeout,
      onload: null,
      ondata: null,
      onerror: null
    };

    // is a single url
    if (isString(outline)) {
      action.url = outline;
      return action;
    }

    // overwrite
    Object.assign(action, outline);

    // see if should reformat headers;
    if (isString(action.headers)) {
      var parts = action.headers.split(/:(.+)/);
      action.headers = {
        header: parts[0],
        value: parts[1]
      };
    }

    // if is bool withCredentials
    action.withCredentials = toBoolean(action.withCredentials);

    return action;
  };

  var toServerAPI = function toServerAPI(value) {
    return createServerAPI(value);
  };

  var isNull = function isNull(value) {
    return value === null;
  };

  var isObject = function isObject(value) {
    return typeof value === 'object' && value !== null;
  };

  var isAPI = function isAPI(value) {
    return (
      isObject(value) &&
      isString(value.url) &&
      isObject(value.process) &&
      isObject(value.revert) &&
      isObject(value.restore) &&
      isObject(value.fetch)
    );
  };

  var getType = function getType(value) {
    if (isArray(value)) {
      return 'array';
    }

    if (isNull(value)) {
      return 'null';
    }

    if (isInt(value)) {
      return 'int';
    }

    if (/^[0-9]+ ?(?:GB|MB|KB)$/gi.test(value)) {
      return 'bytes';
    }

    if (isAPI(value)) {
      return 'api';
    }

    return typeof value;
  };

  var replaceSingleQuotes = function replaceSingleQuotes(str) {
    return str
      .replace(/{\s*'/g, '{"')
      .replace(/'\s*}/g, '"}')
      .replace(/'\s*:/g, '":')
      .replace(/:\s*'/g, ':"')
      .replace(/,\s*'/g, ',"')
      .replace(/'\s*,/g, '",');
  };

  var conversionTable = {
    array: toArray,
    boolean: toBoolean,
    int: function int(value) {
      return getType(value) === 'bytes' ? toBytes(value) : toInt(value);
    },
    number: toFloat,
    float: toFloat,
    bytes: toBytes,
    string: function string(value) {
      return isFunction(value) ? value : toString(value);
    },
    function: function _function(value) {
      return toFunctionReference(value);
    },
    serverapi: toServerAPI,
    object: function object(value) {
      try {
        return JSON.parse(replaceSingleQuotes(value));
      } catch (e) {
        return null;
      }
    }
  };

  var convertTo = function convertTo(value, type) {
    return conversionTable[type](value);
  };

  var getValueByType = function getValueByType(
    newValue,
    defaultValue,
    valueType
  ) {
    // can always assign default value
    if (newValue === defaultValue) {
      return newValue;
    }

    // get the type of the new value
    var newValueType = getType(newValue);

    // is valid type?
    if (newValueType !== valueType) {
      // is string input, let's attempt to convert
      var convertedValue = convertTo(newValue, valueType);

      // what is the type now
      newValueType = getType(convertedValue);

      // no valid conversions found
      if (convertedValue === null) {
        throw 'Trying to assign value with incorrect type to "' +
          option +
          '", allowed type: "' +
          valueType +
          '"';
      } else {
        newValue = convertedValue;
      }
    }

    // assign new value
    return newValue;
  };

  var createOption = function createOption(defaultValue, valueType) {
    var currentValue = defaultValue;
    return {
      enumerable: true,
      get: function get() {
        return currentValue;
      },
      set: function set(newValue) {
        currentValue = getValueByType(newValue, defaultValue, valueType);
      }
    };
  };

  var createOptions = function createOptions(options) {
    var obj = {};
    forin(options, function(prop) {
      var optionDefinition = options[prop];
      obj[prop] = createOption(optionDefinition[0], optionDefinition[1]);
    });
    return createObject(obj);
  };

  var createInitialState = function createInitialState(options) {
    return {
      // model
      items: [],

      // timeout used for calling update items
      listUpdateTimeout: null,

      // queue of items waiting to be processed
      processingQueue: [],

      // options
      options: createOptions(options)
    };
  };

  var fromCamels = function fromCamels(string) {
    var separator =
      arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '-';
    return string
      .split(/(?=[A-Z])/)
      .map(function(part) {
        return part.toLowerCase();
      })
      .join(separator);
  };

  var createOptionAPI = function createOptionAPI(store, options) {
    var obj = {};
    forin(options, function(key) {
      obj[key] = {
        get: function get() {
          return store.getState().options[key];
        },
        set: function set(value) {
          store.dispatch('SET_' + fromCamels(key, '_').toUpperCase(), {
            value: value
          });
        }
      };
    });
    return obj;
  };

  var createOptionActions = function createOptionActions(options) {
    return function(dispatch, query, state) {
      var obj = {};
      forin(options, function(key) {
        var name = fromCamels(key, '_').toUpperCase();

        obj['SET_' + name] = function(action) {
          try {
            state.options[key] = action.value;
          } catch (e) {} // nope, failed

          // we successfully set the value of this option
          dispatch('DID_SET_' + name, { value: state.options[key] });
        };
      });
      return obj;
    };
  };

  var createOptionQueries = function createOptionQueries(options) {
    return function(state) {
      var obj = {};
      forin(options, function(key) {
        obj['GET_' + fromCamels(key, '_').toUpperCase()] = function(action) {
          return state.options[key];
        };
      });
      return obj;
    };
  };

  var InteractionMethod = {
    API: 1,
    DROP: 2,
    BROWSE: 3,
    PASTE: 4,
    NONE: 5
  };

  var getUniqueId = function getUniqueId() {
    return Math.random()
      .toString(36)
      .substr(2, 9);
  };

  var arrayRemove = function arrayRemove(arr, index) {
    return arr.splice(index, 1);
  };

  var on = function on() {
    var listeners = [];
    var off = function off(event, cb) {
      arrayRemove(
        listeners,
        listeners.findIndex(function(listener) {
          return listener.event === event && (listener.cb === cb || !cb);
        })
      );
    };
    return {
      fire: function fire(event) {
        for (
          var _len = arguments.length,
            args = new Array(_len > 1 ? _len - 1 : 0),
            _key = 1;
          _key < _len;
          _key++
        ) {
          args[_key - 1] = arguments[_key];
        }
        listeners
          .filter(function(listener) {
            return listener.event === event;
          })
          .map(function(listener) {
            return listener.cb;
          })
          .forEach(function(cb) {
            setTimeout(function() {
              cb.apply(void 0, args);
            }, 0);
          });
      },
      on: function on(event, cb) {
        listeners.push({ event: event, cb: cb });
      },
      onOnce: function onOnce(event, _cb) {
        listeners.push({
          event: event,
          cb: function cb() {
            off(event, _cb);
            _cb.apply(void 0, arguments);
          }
        });
      },
      off: off
    };
  };

  var copyObjectPropertiesToObject = function copyObjectPropertiesToObject(
    src,
    target,
    excluded
  ) {
    Object.getOwnPropertyNames(src)
      .filter(function(property) {
        return !excluded.includes(property);
      })
      .forEach(function(key) {
        return Object.defineProperty(
          target,
          key,
          Object.getOwnPropertyDescriptor(src, key)
        );
      });
  };

  var PRIVATE = [
    'fire',
    'process',
    'revert',
    'load',
    'on',
    'off',
    'onOnce',
    'retryLoad',
    'extend',
    'archive',
    'archived',
    'release',
    'released',
    'requestProcessing',
    'freeze'
  ];

  var createItemAPI = function createItemAPI(item) {
    var api = {};
    copyObjectPropertiesToObject(item, api, PRIVATE);
    return api;
  };

  var removeReleasedItems = function removeReleasedItems(items) {
    items.forEach(function(item, index) {
      if (item.released) {
        arrayRemove(items, index);
      }
    });
  };

  var ItemStatus = {
    INIT: 1,
    IDLE: 2,
    PROCESSING_QUEUED: 9,
    PROCESSING: 3,
    PROCESSING_COMPLETE: 5,
    PROCESSING_ERROR: 6,
    PROCESSING_REVERT_ERROR: 10,
    LOADING: 7,
    LOAD_ERROR: 8
  };

  var FileOrigin = {
    INPUT: 1,
    LIMBO: 2,
    LOCAL: 3
  };

  var getNonNumeric = function getNonNumeric(str) {
    return /[^0-9]+/.exec(str);
  };

  var getDecimalSeparator = function getDecimalSeparator() {
    return getNonNumeric((1.1).toLocaleString())[0];
  };

  var getThousandsSeparator = function getThousandsSeparator() {
    // Added for browsers that do not return the thousands separator (happend on native browser Android 4.4.4)
    // We check against the normal toString output and if they're the same return a comma when decimal separator is a dot
    var decimalSeparator = getDecimalSeparator();
    var thousandsStringWithSeparator = (1000.0).toLocaleString();
    var thousandsStringWithoutSeparator = (1000.0).toString();
    if (thousandsStringWithSeparator !== thousandsStringWithoutSeparator) {
      return getNonNumeric(thousandsStringWithSeparator)[0];
    }
    return decimalSeparator === '.' ? ',' : '.';
  };

  var Type = {
    BOOLEAN: 'boolean',
    INT: 'int',
    NUMBER: 'number',
    STRING: 'string',
    ARRAY: 'array',
    OBJECT: 'object',
    FUNCTION: 'function',
    ACTION: 'action',
    SERVER_API: 'serverapi',
    REGEX: 'regex'
  };

  // all registered filters
  var filters = [];

  // loops over matching filters and passes options to each filter, returning the mapped results
  var applyFilterChain = function applyFilterChain(key, value, utils) {
    return new Promise(function(resolve, reject) {
      // find matching filters for this key
      var matchingFilters = filters
        .filter(function(f) {
          return f.key === key;
        })
        .map(function(f) {
          return f.cb;
        });

      // resolve now
      if (matchingFilters.length === 0) {
        resolve(value);
        return;
      }

      // first filter to kick things of
      var initialFilter = matchingFilters.shift();

      // chain filters
      matchingFilters
        .reduce(
          // loop over promises passing value to next promise
          function(current, next) {
            return current.then(function(value) {
              return next(value, utils);
            });
          },

          // call initial filter, will return a promise
          initialFilter(value, utils)

          // all executed
        )
        .then(function(value) {
          return resolve(value);
        })
        .catch(function(error) {
          return reject(error);
        });
    });
  };

  var applyFilters = function applyFilters(key, value, utils) {
    return filters
      .filter(function(f) {
        return f.key === key;
      })
      .map(function(f) {
        return f.cb(value, utils);
      });
  };

  // adds a new filter to the list
  var addFilter = function addFilter(key, cb) {
    return filters.push({ key: key, cb: cb });
  };

  var extendDefaultOptions = function extendDefaultOptions(additionalOptions) {
    return Object.assign(defaultOptions, additionalOptions);
  };

  var getOptions = function getOptions() {
    return Object.assign({}, defaultOptions);
  };

  var setOptions = function setOptions(opts) {
    forin(opts, function(key, value) {
      // key does not exist, so this option cannot be set
      if (!defaultOptions[key]) {
        return;
      }
      defaultOptions[key][0] = getValueByType(
        value,
        defaultOptions[key][0],
        defaultOptions[key][1]
      );
    });
  };

  // default options on app
  var defaultOptions = {
    // the id to add to the root element
    id: [null, Type.STRING],

    // input field name to use
    name: ['filepond', Type.STRING],

    // disable the field
    disabled: [false, Type.BOOLEAN],

    // classname to put on wrapper
    className: [null, Type.STRING],

    // is the field required
    required: [false, Type.BOOLEAN],

    // Allow media capture when value is set
    captureMethod: [null, Type.STRING],
    // - "camera", "microphone" or "camcorder",
    // - Does not work with multiple on apple devices
    // - If set, acceptedFileTypes must be made to match with media wildcard "image/*", "audio/*" or "video/*"

    // Feature toggles
    allowDrop: [true, Type.BOOLEAN], // Allow dropping of files
    allowBrowse: [true, Type.BOOLEAN], // Allow browsing the file system
    allowPaste: [true, Type.BOOLEAN], // Allow pasting files
    allowMultiple: [false, Type.BOOLEAN], // Allow multiple files (disabled by default, as multiple attribute is also required on input to allow multiple)
    allowReplace: [true, Type.BOOLEAN], // Allow dropping a file on other file to replace it (only works when multiple is set to false)
    allowRevert: [true, Type.BOOLEAN], // Allows user to revert file upload

    // Revert mode
    forceRevert: [false, Type.BOOLEAN], // Set to 'force' to require the file to be reverted before removal

    // Input requirements
    maxFiles: [null, Type.INT], // Max number of files
    checkValidity: [false, Type.BOOLEAN], // Enables custom validity messages

    // Where to put file
    itemInsertLocationFreedom: [true, Type.BOOLEAN], // Set to false to always add items to begin or end of list
    itemInsertLocation: ['before', Type.STRING], // Default index in list to add items that have been dropped at the top of the list
    itemInsertInterval: [75, Type.INT],

    // Drag 'n Drop related
    dropOnPage: [false, Type.BOOLEAN], // Allow dropping of files anywhere on page (prevents browser from opening file if dropped outside of Up)
    dropOnElement: [true, Type.BOOLEAN], // Drop needs to happen on element (set to false to also load drops outside of Up)
    dropValidation: [false, Type.BOOLEAN], // Enable or disable validating files on drop
    ignoredFiles: [['.ds_store', 'thumbs.db', 'desktop.ini'], Type.ARRAY],

    // Upload related
    instantUpload: [true, Type.BOOLEAN], // Should upload files immidiately on drop
    maxParallelUploads: [2, Type.INT], // Maximum files to upload in parallel

    // The server api end points to use for uploading (see docs)
    server: [null, Type.SERVER_API],

    // Labels and status messages
    labelDecimalSeparator: [getDecimalSeparator(), Type.STRING], // Default is locale separator
    labelThousandsSeparator: [getThousandsSeparator(), Type.STRING], // Default is locale separator

    labelIdle: [
      'Drag & Drop your files or <span class="filepond--label-action">Browse</span>',
      Type.STRING
    ],
    labelInvalidField: ['Field contains invalid files', Type.STRING],
    labelFileWaitingForSize: ['Waiting for size', Type.STRING],
    labelFileSizeNotAvailable: ['Size not available', Type.STRING],
    labelFileCountSingular: ['file in list', Type.STRING],
    labelFileCountPlural: ['files in list', Type.STRING],
    labelFileLoading: ['Loading', Type.STRING],
    labelFileAdded: ['Added', Type.STRING], // assistive only
    labelFileLoadError: ['Error during load', Type.STRING],
    labelFileRemoved: ['Removed', Type.STRING], // assistive only
    labelFileRemoveError: ['Error during remove', Type.STRING],
    labelFileProcessing: ['Uploading', Type.STRING],
    labelFileProcessingComplete: ['Upload complete', Type.STRING],
    labelFileProcessingAborted: ['Upload cancelled', Type.STRING],
    labelFileProcessingError: ['Error during upload', Type.STRING],
    labelFileProcessingRevertError: ['Error during revert', Type.STRING],

    labelTapToCancel: ['tap to cancel', Type.STRING],
    labelTapToRetry: ['tap to retry', Type.STRING],
    labelTapToUndo: ['tap to undo', Type.STRING],

    labelButtonRemoveItem: ['Remove', Type.STRING],
    labelButtonAbortItemLoad: ['Abort', Type.STRING],
    labelButtonRetryItemLoad: ['Retry', Type.STRING],
    labelButtonAbortItemProcessing: ['Cancel', Type.STRING],
    labelButtonUndoItemProcessing: ['Undo', Type.STRING],
    labelButtonRetryItemProcessing: ['Retry', Type.STRING],
    labelButtonProcessItem: ['Upload', Type.STRING],

    // make sure width and height plus viewpox are even numbers so icons are nicely centered
    iconRemove: [
      '<svg width="26" height="26" viewBox="0 0 26 26" xmlns="http://www.w3.org/2000/svg"><path d="M11.586 13l-2.293 2.293a1 1 0 0 0 1.414 1.414L13 14.414l2.293 2.293a1 1 0 0 0 1.414-1.414L14.414 13l2.293-2.293a1 1 0 0 0-1.414-1.414L13 11.586l-2.293-2.293a1 1 0 0 0-1.414 1.414L11.586 13z" fill="currentColor" fill-rule="nonzero"/></svg>',
      Type.STRING
    ],

    iconProcess: [
      '<svg width="26" height="26" viewBox="0 0 26 26" xmlns="http://www.w3.org/2000/svg"><path d="M14 10.414v3.585a1 1 0 0 1-2 0v-3.585l-1.293 1.293a1 1 0 0 1-1.414-1.415l3-3a1 1 0 0 1 1.414 0l3 3a1 1 0 0 1-1.414 1.415L14 10.414zM9 18a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2H9z" fill="currentColor" fill-rule="evenodd"/></svg>',
      Type.STRING
    ],

    iconRetry: [
      '<svg width="26" height="26" viewBox="0 0 26 26" xmlns="http://www.w3.org/2000/svg"><path d="M10.81 9.185l-.038.02A4.997 4.997 0 0 0 8 13.683a5 5 0 0 0 5 5 5 5 0 0 0 5-5 1 1 0 0 1 2 0A7 7 0 1 1 9.722 7.496l-.842-.21a.999.999 0 1 1 .484-1.94l3.23.806c.535.133.86.675.73 1.21l-.804 3.233a.997.997 0 0 1-1.21.73.997.997 0 0 1-.73-1.21l.23-.928v-.002z" fill="currentColor" fill-rule="nonzero"/></svg>',
      Type.STRING
    ],

    iconUndo: [
      '<svg width="26" height="26" viewBox="0 0 26 26" xmlns="http://www.w3.org/2000/svg"><path d="M9.185 10.81l.02-.038A4.997 4.997 0 0 1 13.683 8a5 5 0 0 1 5 5 5 5 0 0 1-5 5 1 1 0 0 0 0 2A7 7 0 1 0 7.496 9.722l-.21-.842a.999.999 0 1 0-1.94.484l.806 3.23c.133.535.675.86 1.21.73l3.233-.803a.997.997 0 0 0 .73-1.21.997.997 0 0 0-1.21-.73l-.928.23-.002-.001z" fill="currentColor" fill-rule="nonzero"/></svg>',
      Type.STRING
    ],

    iconDone: [
      '<svg width="26" height="26" viewBox="0 0 26 26" xmlns="http://www.w3.org/2000/svg"><path d="M18.293 9.293a1 1 0 0 1 1.414 1.414l-7.002 7a1 1 0 0 1-1.414 0l-3.998-4a1 1 0 1 1 1.414-1.414L12 15.586l6.294-6.293z" fill="currentColor" fill-rule="nonzero"/></svg>',
      Type.STRING
    ],

    // event handlers
    oninit: [null, Type.FUNCTION],
    onwarning: [null, Type.FUNCTION],
    onerror: [null, Type.FUNCTION],
    onactivatefile: [null, Type.FUNCTION],
    onaddfilestart: [null, Type.FUNCTION],
    onaddfileprogress: [null, Type.FUNCTION],
    onaddfile: [null, Type.FUNCTION],
    onprocessfilestart: [null, Type.FUNCTION],
    onprocessfileprogress: [null, Type.FUNCTION],
    onprocessfileabort: [null, Type.FUNCTION],
    onprocessfilerevert: [null, Type.FUNCTION],
    onprocessfile: [null, Type.FUNCTION],
    onprocessfiles: [null, Type.FUNCTION],
    onremovefile: [null, Type.FUNCTION],
    onpreparefile: [null, Type.FUNCTION],
    onupdatefiles: [null, Type.FUNCTION],

    // hooks
    beforeDropFile: [null, Type.FUNCTION],
    beforeAddFile: [null, Type.FUNCTION],
    beforeRemoveFile: [null, Type.FUNCTION],

    // styles
    stylePanelLayout: [null, Type.STRING], // null 'integrated', 'compact', 'circle'
    stylePanelAspectRatio: [null, Type.STRING], // null or '3:2' or 1
    styleItemPanelAspectRatio: [null, Type.STRING],
    styleButtonRemoveItemPosition: ['left', Type.STRING],
    styleButtonProcessItemPosition: ['right', Type.STRING],
    styleLoadIndicatorPosition: ['right', Type.STRING],
    styleProgressIndicatorPosition: ['right', Type.STRING],

    // custom initial files array
    files: [[], Type.ARRAY]
  };

  var getItemByQuery = function getItemByQuery(items, query) {
    // just return first index
    if (isEmpty(query)) {
      return items[0] || null;
    }

    // query is index
    if (isInt(query)) {
      return items[query] || null;
    }

    // if query is item, get the id
    if (typeof query === 'object') {
      query = query.id;
    }

    // assume query is a string and return item by id
    return (
      items.find(function(item) {
        return item.id === query;
      }) || null
    );
  };

  var getNumericAspectRatioFromString = function getNumericAspectRatioFromString(
    aspectRatio
  ) {
    if (isEmpty(aspectRatio)) {
      return aspectRatio;
    }
    if (/:/.test(aspectRatio)) {
      var parts = aspectRatio.split(':');
      return parts[1] / parts[0];
    }
    return parseFloat(aspectRatio);
  };

  var getActiveItems = function getActiveItems(items) {
    return items.filter(function(item) {
      return !item.archived;
    });
  };

  var Status = {
    EMPTY: 0,
    IDLE: 1, // waiting
    ERROR: 2, // a file is in error state
    BUSY: 3, // busy processing or loading
    READY: 4 // all files uploaded
  };

  var ITEM_ERROR = [
    ItemStatus.LOAD_ERROR,
    ItemStatus.PROCESSING_ERROR,
    ItemStatus.PROCESSING_REVERT_ERROR
  ];
  var ITEM_BUSY = [
    ItemStatus.LOADING,
    ItemStatus.PROCESSING,
    ItemStatus.PROCESSING_QUEUED,
    ItemStatus.INIT
  ];
  var ITEM_READY = [ItemStatus.PROCESSING_COMPLETE];

  var isItemInErrorState = function isItemInErrorState(item) {
    return ITEM_ERROR.includes(item.status);
  };
  var isItemInBusyState = function isItemInBusyState(item) {
    return ITEM_BUSY.includes(item.status);
  };
  var isItemInReadyState = function isItemInReadyState(item) {
    return ITEM_READY.includes(item.status);
  };

  var queries = function queries(state) {
    return {
      GET_STATUS: function GET_STATUS() {
        var items = getActiveItems(state.items);
        var EMPTY = Status.EMPTY,
          ERROR = Status.ERROR,
          BUSY = Status.BUSY,
          IDLE = Status.IDLE,
          READY = Status.READY;

        if (items.length === 0) return EMPTY;

        if (items.some(isItemInErrorState)) return ERROR;

        if (items.some(isItemInBusyState)) return BUSY;

        if (items.some(isItemInReadyState)) return READY;

        return IDLE;
      },

      GET_ITEM: function GET_ITEM(query) {
        return getItemByQuery(state.items, query);
      },

      GET_ACTIVE_ITEM: function GET_ACTIVE_ITEM(query) {
        return getItemByQuery(getActiveItems(state.items), query);
      },

      GET_ACTIVE_ITEMS: function GET_ACTIVE_ITEMS(query) {
        return getActiveItems(state.items);
      },

      GET_ITEMS: function GET_ITEMS(query) {
        return state.items;
      },

      GET_ITEM_NAME: function GET_ITEM_NAME(query) {
        var item = getItemByQuery(state.items, query);
        return item ? item.filename : null;
      },

      GET_ITEM_SIZE: function GET_ITEM_SIZE(query) {
        var item = getItemByQuery(state.items, query);
        return item ? item.fileSize : null;
      },

      GET_STYLES: function GET_STYLES() {
        return Object.keys(state.options)
          .filter(function(key) {
            return /^style/.test(key);
          })
          .map(function(option) {
            return {
              name: option,
              value: state.options[option]
            };
          });
      },

      GET_PANEL_ASPECT_RATIO: function GET_PANEL_ASPECT_RATIO() {
        var isShapeCircle = /circle/.test(state.options.stylePanelLayout);
        var aspectRatio = isShapeCircle
          ? 1
          : getNumericAspectRatioFromString(
              state.options.stylePanelAspectRatio
            );
        return aspectRatio;
      },

      GET_ITEM_PANEL_ASPECT_RATIO: function GET_ITEM_PANEL_ASPECT_RATIO() {
        return state.options.styleItemPanelAspectRatio;
      },

      GET_ITEMS_BY_STATUS: function GET_ITEMS_BY_STATUS(status) {
        return getActiveItems(state.items).filter(function(item) {
          return item.status === status;
        });
      },

      GET_TOTAL_ITEMS: function GET_TOTAL_ITEMS() {
        return getActiveItems(state.items).length;
      },

      IS_ASYNC: function IS_ASYNC() {
        return (
          isObject(state.options.server) &&
          (isObject(state.options.server.process) ||
            isFunction(state.options.server.process))
        );
      }
    };
  };

  var hasRoomForItem = function hasRoomForItem(state) {
    var count = getActiveItems(state.items).length;

    // if cannot have multiple items, to add one item it should currently not contain items
    if (!state.options.allowMultiple) {
      return count === 0;
    }

    // if allows multiple items, we check if a max item count has been set, if not, there's no limit
    var maxFileCount = state.options.maxFiles;
    if (maxFileCount === null) {
      return true;
    }

    // we check if the current count is smaller than the max count, if so, another file can still be added
    if (count < maxFileCount) {
      return true;
    }

    // no more room for another file
    return false;
  };

  var limit = function limit(value, min, max) {
    return Math.max(Math.min(max, value), min);
  };

  var arrayInsert = function arrayInsert(arr, index, item) {
    return arr.splice(index, 0, item);
  };

  var insertItem = function insertItem(items, item, index) {
    if (isEmpty(item)) {
      return null;
    }

    // if index is undefined, append
    if (typeof index === 'undefined') {
      items.push(item);
      return item;
    }

    // limit the index to the size of the items array
    index = limit(index, 0, items.length);

    // add item to array
    arrayInsert(items, index, item);

    // expose
    return item;
  };

  var isBase64DataURI = function isBase64DataURI(str) {
    return /^\s*data:([a-z]+\/[a-z0-9-+.]+(;[a-z-]+=[a-z0-9-]+)?)?(;base64)?,([a-z0-9!$&',()*+;=\-._~:@\/?%\s]*)\s*$/i.test(
      str
    );
  };

  var getFilenameFromURL = function getFilenameFromURL(url) {
    return url
      .split('/')
      .pop()
      .split('?')
      .shift();
  };

  var getExtensionFromFilename = function getExtensionFromFilename(name) {
    return name.split('.').pop();
  };

  var guesstimateExtension = function guesstimateExtension(type) {
    // if no extension supplied, exit here
    if (typeof type !== 'string') {
      return '';
    }

    // get subtype
    var subtype = type.split('/').pop();

    // is svg subtype
    if (/svg/.test(subtype)) {
      return 'svg';
    }

    if (/zip|compressed/.test(subtype)) {
      return 'zip';
    }

    if (/plain/.test(subtype)) {
      return 'txt';
    }

    if (/msword/.test(subtype)) {
      return 'doc';
    }

    // if is valid subtype
    if (/[a-z]+/.test(subtype)) {
      // always use jpg extension
      if (subtype === 'jpeg') {
        return 'jpg';
      }

      // return subtype
      return subtype;
    }

    return '';
  };

  var leftPad = function leftPad(value) {
    var padding =
      arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
    return (padding + value).slice(-padding.length);
  };

  var getDateString = function getDateString() {
    var date =
      arguments.length > 0 && arguments[0] !== undefined
        ? arguments[0]
        : new Date();
    return (
      date.getFullYear() +
      '-' +
      leftPad(date.getMonth() + 1, '00') +
      '-' +
      leftPad(date.getDate(), '00') +
      '_' +
      leftPad(date.getHours(), '00') +
      '-' +
      leftPad(date.getMinutes(), '00') +
      '-' +
      leftPad(date.getSeconds(), '00')
    );
  };

  var getFileFromBlob = function getFileFromBlob(blob, filename) {
    var type =
      arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
    var extension =
      arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
    var file =
      typeof type === 'string'
        ? blob.slice(0, blob.size, type)
        : blob.slice(0, blob.size, blob.type);
    file.lastModifiedDate = new Date();

    // if blob has name property, use as filename if no filename supplied
    if (!isString(filename)) {
      filename = getDateString();
    }

    // if filename supplied but no extension and filename has extension
    if (filename && extension === null && getExtensionFromFilename(filename)) {
      file.name = filename;
    } else {
      extension = extension || guesstimateExtension(file.type);
      file.name = filename + (extension ? '.' + extension : '');
    }

    return file;
  };

  var getBlobBuilder = function getBlobBuilder() {
    return (window.BlobBuilder =
      window.BlobBuilder ||
      window.WebKitBlobBuilder ||
      window.MozBlobBuilder ||
      window.MSBlobBuilder);
  };

  var createBlob = function createBlob(arrayBuffer, mimeType) {
    var BB = getBlobBuilder();

    if (BB) {
      var bb = new BB();
      bb.append(arrayBuffer);
      return bb.getBlob(mimeType);
    }

    return new Blob([arrayBuffer], {
      type: mimeType
    });
  };

  var getBlobFromByteStringWithMimeType = function getBlobFromByteStringWithMimeType(
    byteString,
    mimeType
  ) {
    var ab = new ArrayBuffer(byteString.length);
    var ia = new Uint8Array(ab);

    for (var i = 0; i < byteString.length; i++) {
      ia[i] = byteString.charCodeAt(i);
    }

    return createBlob(ab, mimeType);
  };

  var getMimeTypeFromBase64DataURI = function getMimeTypeFromBase64DataURI(
    dataURI
  ) {
    return (/^data:(.+);/.exec(dataURI) || [])[1] || null;
  };

  var getBase64DataFromBase64DataURI = function getBase64DataFromBase64DataURI(
    dataURI
  ) {
    // get data part of string (remove data:image/jpeg...,)
    var data = dataURI.split(',')[1];

    // remove any whitespace as that causes InvalidCharacterError in IE
    return data.replace(/\s/g, '');
  };

  var getByteStringFromBase64DataURI = function getByteStringFromBase64DataURI(
    dataURI
  ) {
    return atob(getBase64DataFromBase64DataURI(dataURI));
  };

  var getBlobFromBase64DataURI = function getBlobFromBase64DataURI(dataURI) {
    var mimeType = getMimeTypeFromBase64DataURI(dataURI);
    var byteString = getByteStringFromBase64DataURI(dataURI);

    return getBlobFromByteStringWithMimeType(byteString, mimeType);
  };

  var getFileFromBase64DataURI = function getFileFromBase64DataURI(
    dataURI,
    filename,
    extension
  ) {
    return getFileFromBlob(
      getBlobFromBase64DataURI(dataURI),
      filename,
      null,
      extension
    );
  };

  var getFileNameFromHeader = function getFileNameFromHeader(header) {
    // test if is content disposition header, if not exit
    if (!/^content-disposition:/i.test(header)) return null;

    // get filename parts
    var matches = header
      .split(/filename=|filename\*=.+''/)
      .splice(1)
      .map(function(name) {
        return name.trim().replace(/^["']|[;"']{0,2}$/g, '');
      })
      .filter(function(name) {
        return name.length;
      });

    return matches.length ? decodeURI(matches[matches.length - 1]) : null;
  };

  var getFileSizeFromHeader = function getFileSizeFromHeader(header) {
    if (/content-length:/i.test(header)) {
      var size = header.match(/[0-9]+/)[0];
      return size ? parseInt(size, 10) : null;
    }
    return null;
  };

  var getTranfserIdFromHeader = function getTranfserIdFromHeader(header) {
    if (/x-content-transfer-id:/i.test(header)) {
      var id = (header.split(':')[1] || '').trim();
      return id || null;
    }
    return null;
  };

  var getFileInfoFromHeaders = function getFileInfoFromHeaders(headers) {
    var info = {
      source: null,
      name: null,
      size: null
    };

    var rows = headers.split('\n');
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;
    try {
      for (
        var _iterator = rows[Symbol.iterator](), _step;
        !(_iteratorNormalCompletion = (_step = _iterator.next()).done);
        _iteratorNormalCompletion = true
      ) {
        var header = _step.value;

        var name = getFileNameFromHeader(header);
        if (name) {
          info.name = name;
          continue;
        }

        var size = getFileSizeFromHeader(header);
        if (size) {
          info.size = size;
          continue;
        }

        var source = getTranfserIdFromHeader(header);
        if (source) {
          info.source = source;
          continue;
        }
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return != null) {
          _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }

    return info;
  };

  var createFileLoader = function createFileLoader(fetchFn) {
    var state = {
      source: null,
      complete: false,
      progress: 0,
      size: null,
      timestamp: null,
      duration: 0,
      request: null
    };

    var getProgress = function getProgress() {
      return state.progress;
    };
    var abort = function abort() {
      if (!state.request) {
        return;
      }
      state.request.abort();
    };

    // load source
    var load = function load() {
      // get quick reference
      var source = state.source;

      api.fire('init', source);

      // Load Files
      if (source instanceof File) {
        api.fire('load', source);
      } else if (source instanceof Blob) {
        // Load blobs, set default name to current date
        api.fire('load', getFileFromBlob(source, source.name));
      } else if (isBase64DataURI(source)) {
        // Load base 64, set default name to current date
        api.fire('load', getFileFromBase64DataURI(source));
      } else {
        // Deal as if is external URL, let's load it!
        loadURL(source);
      }
    };

    // loads a url
    var loadURL = function loadURL(url) {
      // is remote url and no fetch method supplied
      if (!fetchFn) {
        api.fire('error', {
          type: 'error',
          body: "Can't load URL",
          code: 400
        });

        return;
      }

      // set request start
      state.timestamp = Date.now();

      // load file
      state.request = fetchFn(
        url,
        function(response) {
          // update duration
          state.duration = Date.now() - state.timestamp;

          // done!
          state.complete = true;

          // turn blob response into a file
          if (response instanceof Blob) {
            response = getFileFromBlob(response, getFilenameFromURL(url));
          }

          api.fire('load', response instanceof Blob ? response : response.body);
        },
        function(error) {
          api.fire(
            'error',
            typeof error === 'string'
              ? {
                  type: 'error',
                  code: 0,
                  body: error
                }
              : error
          );
        },
        function(computable, current, total) {
          // collected some meta data already
          if (total) {
            state.size = total;
          }

          // update duration
          state.duration = Date.now() - state.timestamp;

          // if we can't compute progress, we're not going to fire progress events
          if (!computable) {
            state.progress = null;
            return;
          }

          // update progress percentage
          state.progress = current / total;

          // expose
          api.fire('progress', state.progress);
        },
        function() {
          api.fire('abort');
        },
        function(response) {
          var fileinfo = getFileInfoFromHeaders(
            typeof response === 'string' ? response : response.headers
          );
          api.fire('meta', {
            size: state.size || fileinfo.size,
            filename: fileinfo.name,
            source: fileinfo.source
          });
        }
      );
    };

    var api = Object.assign({}, on(), {
      setSource: function setSource(source) {
        return (state.source = source);
      },
      getProgress: getProgress, // file load progress
      abort: abort, // abort file load
      load: load // start load
    });

    return api;
  };

  var isGet = function isGet(method) {
    return /GET|HEAD/.test(method);
  };

  var sendRequest = function sendRequest(data, url, options) {
    var api = {
      onheaders: function onheaders() {},
      onprogress: function onprogress() {},
      onload: function onload() {},
      ontimeout: function ontimeout() {},
      onerror: function onerror() {},
      onabort: function onabort() {},
      abort: function abort() {
        aborted = true;
        xhr.abort();
      }
    };

    // timeout identifier, only used when timeout is defined
    var aborted = false;
    var headersReceived = false;

    // set default options
    options = Object.assign(
      {
        method: 'POST',
        headers: {},
        withCredentials: false
      },
      options
    );

    // encode url
    url = encodeURI(url);

    // if method is GET, add any received data to url

    if (isGet(options.method) && data) {
      url =
        '' +
        url +
        encodeURIComponent(
          typeof data === 'string' ? data : JSON.stringify(data)
        );
    }

    // create request
    var xhr = new XMLHttpRequest();

    // progress of load
    var process = isGet(options.method) ? xhr : xhr.upload;
    process.onprogress = function(e) {
      // no progress event when aborted ( onprogress is called once after abort() )
      if (aborted) {
        return;
      }

      api.onprogress(e.lengthComputable, e.loaded, e.total);
    };

    // tries to get header info to the app as fast as possible
    xhr.onreadystatechange = function() {
      // not interesting in these states ('unsent' and 'openend' as they don't give us any additional info)
      if (xhr.readyState < 2) {
        return;
      }

      // no server response
      if (xhr.readyState === 4 && xhr.status === 0) {
        return;
      }

      if (headersReceived) {
        return;
      }

      headersReceived = true;

      // we've probably received some useful data in response headers
      api.onheaders(xhr);
    };

    // load successful
    xhr.onload = function() {
      // is classified as valid response
      if (xhr.status >= 200 && xhr.status < 300) {
        api.onload(xhr);
      } else {
        api.onerror(xhr);
      }
    };

    // error during load
    xhr.onerror = function() {
      return api.onerror(xhr);
    };

    // request aborted
    xhr.onabort = function() {
      aborted = true;
      api.onabort();
    };

    // request timeout
    xhr.ontimeout = function() {
      return api.ontimeout(xhr);
    };

    // open up open up!
    xhr.open(options.method, url, true);

    // set timeout if defined (do it after open so IE11 plays ball)
    if (isInt(options.timeout)) {
      xhr.timeout = options.timeout;
    }

    // add headers
    Object.keys(options.headers).forEach(function(key) {
      xhr.setRequestHeader(key, options.headers[key]);
    });

    // set type of response
    if (options.responseType) {
      xhr.responseType = options.responseType;
    }

    // set credentials
    if (options.withCredentials) {
      xhr.withCredentials = true;
    }

    // let's send our data
    xhr.send(data);

    return api;
  };

  var createResponse = function createResponse(type, code, body, headers) {
    return {
      type: type,
      code: code,
      body: body,
      headers: headers
    };
  };

  var createTimeoutResponse = function createTimeoutResponse(cb) {
    return function(xhr) {
      cb(createResponse('error', 0, 'Timeout', xhr.getAllResponseHeaders()));
    };
  };

  var createFetchFunction = function createFetchFunction() {
    var apiUrl =
      arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var action = arguments.length > 1 ? arguments[1] : undefined;
    // custom handler (should also handle file, load, error, progress and abort)
    if (typeof action === 'function') {
      return action;
    }

    // no action supplied
    if (!action || !isString(action.url)) {
      return null;
    }

    // set onload hanlder
    var onload =
      action.onload ||
      function(res) {
        return res;
      };
    var onerror =
      action.onerror ||
      function(res) {
        return null;
      };

    // internal handler
    return function(url, load, error, progress, abort, headers) {
      // do local or remote request based on if the url is external
      var request = sendRequest(
        url,
        apiUrl + action.url,
        Object.assign({}, action, {
          responseType: 'blob'
        })
      );

      request.onload = function(xhr) {
        // get headers
        var headers = xhr.getAllResponseHeaders();

        // get filename
        var filename =
          getFileInfoFromHeaders(headers).name || getFilenameFromURL(url);

        // create response
        load(
          createResponse(
            'load',
            xhr.status,
            getFileFromBlob(onload(xhr.response), filename),
            headers
          )
        );
      };

      request.onerror = function(xhr) {
        error(
          createResponse(
            'error',
            xhr.status,
            onerror(xhr.response) || xhr.statusText,
            xhr.getAllResponseHeaders()
          )
        );
      };

      request.onheaders = function(xhr) {
        headers(
          createResponse(
            'headers',
            xhr.status,
            null,
            xhr.getAllResponseHeaders()
          )
        );
      };

      request.ontimeout = createTimeoutResponse(error);
      request.onprogress = progress;
      request.onabort = abort;

      // should return request
      return request;
    };
  };

  /*
                                                     function signature:
                                                       (file, metadata, load, error, progress, abort) => {
                                                         return {
                                                         abort:() => {}
                                                       }
                                                     }
                                                     */
  var createProcessorFunction = function createProcessorFunction() {
    var apiUrl =
      arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var action = arguments.length > 1 ? arguments[1] : undefined;
    var name = arguments.length > 2 ? arguments[2] : undefined;
    // custom handler (should also handle file, load, error, progress and abort)
    if (typeof action === 'function') {
      return function() {
        for (
          var _len = arguments.length, params = new Array(_len), _key = 0;
          _key < _len;
          _key++
        ) {
          params[_key] = arguments[_key];
        }
        return action.apply(void 0, [name].concat(params));
      };
    }

    // no action supplied
    if (!action || !isString(action.url)) {
      return null;
    }

    // internal handler
    return function(file, metadata, load, error, progress, abort) {
      // set onload hanlder
      var ondata =
        action.ondata ||
        function(fd) {
          return fd;
        };
      var onload =
        action.onload ||
        function(res) {
          return res;
        };
      var onerror =
        action.onerror ||
        function(res) {
          return null;
        };

      // no file received
      if (!file) return;

      // create formdata object
      var formData = new FormData();

      // add metadata under same name
      if (isObject(metadata)) {
        formData.append(name, JSON.stringify(metadata));
      }

      // Turn into an array of objects so no matter what the input, we can handle it the same way
      (file instanceof Blob ? [{ name: null, file: file }] : file).forEach(
        function(item) {
          formData.append(
            name,
            item.file,
            item.name === null
              ? item.file.name
              : '' + item.name + item.file.name
          );
        }
      );

      // send request object
      var request = sendRequest(ondata(formData), apiUrl + action.url, action);
      request.onload = function(xhr) {
        load(
          createResponse(
            'load',
            xhr.status,
            onload(xhr.response),
            xhr.getAllResponseHeaders()
          )
        );
      };

      request.onerror = function(xhr) {
        error(
          createResponse(
            'error',
            xhr.status,
            onerror(xhr.response) || xhr.statusText,
            xhr.getAllResponseHeaders()
          )
        );
      };

      request.ontimeout = createTimeoutResponse(error);
      request.onprogress = progress;
      request.onabort = abort;

      // should return request
      return request;
    };
  };

  /*
                                                      function signature:
                                                      (uniqueFileId, load, error) => { }
                                                      */
  var createRevertFunction = function createRevertFunction() {
    var apiUrl =
      arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var action = arguments.length > 1 ? arguments[1] : undefined;
    // is custom implementation
    if (typeof action === 'function') {
      return action;
    }

    // no action supplied, return stub function, interface will work, but file won't be removed
    if (!action || !isString(action.url)) {
      return function(uniqueFileId, load) {
        return load();
      };
    }

    // set onload hanlder
    var onload =
      action.onload ||
      function(res) {
        return res;
      };
    var onerror =
      action.onerror ||
      function(res) {
        return null;
      };

    // internal implementation
    return function(uniqueFileId, load, error) {
      var request = sendRequest(
        uniqueFileId,
        apiUrl + action.url,
        action // contains method, headers and withCredentials properties
      );
      request.onload = function(xhr) {
        load(
          createResponse(
            'load',
            xhr.status,
            onload(xhr.response),
            xhr.getAllResponseHeaders()
          )
        );
      };

      request.onerror = function(xhr) {
        error(
          createResponse(
            'error',
            xhr.status,
            onerror(xhr.response) || xhr.statusText,
            xhr.getAllResponseHeaders()
          )
        );
      };

      request.ontimeout = createTimeoutResponse(error);

      return request;
    };
  };

  var getRandomNumber = function getRandomNumber() {
    var min =
      arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    var max =
      arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
    return min + Math.random() * (max - min);
  };

  var createPerceivedPerformanceUpdater = function createPerceivedPerformanceUpdater(
    cb
  ) {
    var duration =
      arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1000;
    var offset =
      arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
    var tickMin =
      arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 25;
    var tickMax =
      arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 250;
    var timeout = null;
    var start = Date.now();

    var tick = function tick() {
      var runtime = Date.now() - start;
      var delay = getRandomNumber(tickMin, tickMax);

      if (runtime + delay > duration) {
        delay = runtime + delay - duration;
      }

      var progress = runtime / duration;
      if (progress >= 1) {
        cb(1);
        return;
      }

      cb(progress);

      timeout = setTimeout(tick, delay);
    };

    tick();

    return {
      clear: function clear() {
        clearTimeout(timeout);
      }
    };
  };

  var createFileProcessor = function createFileProcessor(processFn) {
    var state = {
      complete: false,
      perceivedProgress: 0,
      perceivedPerformanceUpdater: null,
      progress: null,
      timestamp: null,
      perceivedDuration: 0,
      duration: 0,
      request: null,
      response: null
    };

    var process = function process(file, metadata) {
      var progressFn = function progressFn() {
        // we've not yet started the real download, stop here
        // the request might not go through, for instance, there might be some server trouble
        // if state.progress is null, the server does not allow computing progress and we show the spinner instead
        if (state.duration === 0 || state.progress === null) {
          return;
        }

        // as we're now processing, fire the progress event
        api.fire('progress', api.getProgress());
      };

      var completeFn = function completeFn() {
        state.complete = true;

        api.fire('load-perceived', state.response.body);
      };

      // let's start processing
      api.fire('start');

      // set request start
      state.timestamp = Date.now();

      // create perceived performance progress indicator
      state.perceivedPerformanceUpdater = createPerceivedPerformanceUpdater(
        function(progress) {
          state.perceivedProgress = progress;
          state.perceivedDuration = Date.now() - state.timestamp;

          progressFn();

          // if fake progress is done, and a response has been received,
          // and we've not yet called the complete method
          if (
            state.response &&
            state.perceivedProgress === 1 &&
            !state.complete
          ) {
            // we done!
            completeFn();
          }
        },
        // random delay as in a list of files you start noticing
        // files uploading at the exact same speed
        getRandomNumber(750, 1500)
      );

      // remember request so we can abort it later
      state.request = processFn(
        // the file to process
        file,

        // the metadata to send along
        metadata,

        // callbacks (load, error, progress, abort)
        // load expects the body to be a server id if
        // you want to make use of revert
        function(response) {
          // we put the response in state so we can access
          // it outside of this method
          state.response = isObject(response)
            ? response
            : {
                type: 'load',
                code: 200,
                body: '' + response,
                headers: {}
              };

          // update duration
          state.duration = Date.now() - state.timestamp;

          // force progress to 1 as we're now done
          state.progress = 1;

          // actual load is done let's share results
          api.fire('load', state.response.body);

          // we are really done
          // if perceived progress is 1 ( wait for perceived progress to complete )
          // or if server does not support progress ( null )
          if (state.perceivedProgress === 1) {
            completeFn();
          }
        },

        // error is expected to be an object with type, code, body
        function(error) {
          // cancel updater
          state.perceivedPerformanceUpdater.clear();

          // update others about this error
          api.fire(
            'error',
            isObject(error)
              ? error
              : {
                  type: 'error',
                  code: 0,
                  body: '' + error
                }
          );
        },

        // actual processing progress
        function(computable, current, total) {
          // update actual duration
          state.duration = Date.now() - state.timestamp;

          // update actual progress
          state.progress = computable ? current / total : null;

          progressFn();
        },

        // abort does not expect a value
        function() {
          // stop updater
          state.perceivedPerformanceUpdater.clear();

          // fire the abort event so we can switch visuals
          api.fire('abort', state.response ? state.response.body : null);
        }
      );
    };

    var abort = function abort() {
      // no request running, can't abort
      if (!state.request) return;

      // stop updater
      state.perceivedPerformanceUpdater.clear();

      // abort actual request
      state.request.abort();

      // if has response object, we've completed the request
      state.complete = true;
    };

    var reset = function reset() {
      abort();
      state.complete = false;
      state.perceivedProgress = 0;
      state.progress = 0;
      state.timestamp = null;
      state.perceivedDuration = 0;
      state.duration = 0;
      state.request = null;
      state.response = null;
    };

    var getProgress = function getProgress() {
      return state.progress
        ? Math.min(state.progress, state.perceivedProgress)
        : null;
    };
    var getDuration = function getDuration() {
      return Math.min(state.duration, state.perceivedDuration);
    };

    var api = Object.assign({}, on(), {
      process: process, // start processing file
      abort: abort, // abort active process request
      getProgress: getProgress,
      getDuration: getDuration,
      reset: reset
    });

    return api;
  };

  var getFilenameWithoutExtension = function getFilenameWithoutExtension(name) {
    return name.substr(0, name.lastIndexOf('.')) || name;
  };

  var createFileStub = function createFileStub(source) {
    var data = [source.name, source.size, source.type];

    // is blob or base64, then we need to set the name
    if (source instanceof Blob || isBase64DataURI(source)) {
      data[0] = source.name || getDateString();
    } else if (isBase64DataURI(source)) {
      // if is base64 data uri we need to determine the average size and type
      data[1] = source.length;
      data[2] = getMimeTypeFromBase64DataURI(source);
    } else if (isString(source)) {
      // url
      data[0] = getFilenameFromURL(source);
      data[1] = 0;
      data[2] = 'application/octet-stream';
    }

    return {
      name: data[0],
      size: data[1],
      type: data[2]
    };
  };

  var isFile = function isFile(value) {
    return !!(value instanceof File || (value instanceof Blob && value.name));
  };

  var deepCloneObject = function deepCloneObject(src) {
    if (!isObject(src)) return src;
    var target = isArray(src) ? [] : {};
    for (var key in src) {
      if (!src.hasOwnProperty(key)) continue;
      var v = src[key];
      target[key] = v && isObject(v) ? deepCloneObject(v) : v;
    }
    return target;
  };

  var createItem = function createItem() {
    var origin =
      arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    var serverFileReference =
      arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    var file =
      arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
    // unique id for this item, is used to identify the item across views
    var id = getUniqueId();

    /**
     * Internal item state
     */
    var state = {
      // is archived
      archived: false,

      // if is frozen, no longer fires events
      frozen: false,

      // removed from view
      released: false,

      // original source
      source: null,

      // file model reference
      file: file,

      // id of file on server
      serverFileReference: serverFileReference,

      // current item status
      status: serverFileReference
        ? ItemStatus.PROCESSING_COMPLETE
        : ItemStatus.INIT,

      // active processes
      activeLoader: null,
      activeProcessor: null
    };

    // callback used when abort processing is called to link back to the resolve method
    var abortProcessingRequestComplete = null;

    /**
     * Externally added item metadata
     */
    var metadata = {};

    // item data
    var setStatus = function setStatus(status) {
      return (state.status = status);
    };

    // fire event unless the item has been archived
    var fire = function fire(event) {
      if (state.released || state.frozen) return;
      for (
        var _len = arguments.length,
          params = new Array(_len > 1 ? _len - 1 : 0),
          _key = 1;
        _key < _len;
        _key++
      ) {
        params[_key - 1] = arguments[_key];
      }
      api.fire.apply(api, [event].concat(params));
    };

    // file data
    var getFileExtension = function getFileExtension() {
      return getExtensionFromFilename(state.file.name);
    };
    var getFileType = function getFileType() {
      return state.file.type;
    };
    var getFileSize = function getFileSize() {
      return state.file.size;
    };
    var getFile = function getFile() {
      return state.file;
    };

    //
    // logic to load a file
    //
    var load = function load(source, loader, onload) {
      // remember the original item source
      state.source = source;

      // file stub is already there
      if (state.file) {
        fire('load-skip');
        return;
      }

      // set a stub file object while loading the actual data
      state.file = createFileStub(source);

      // starts loading
      loader.on('init', function() {
        fire('load-init');
      });

      // we'eve received a size indication, let's update the stub
      loader.on('meta', function(meta) {
        // set size of file stub
        state.file.size = meta.size;

        // set name of file stub
        state.file.filename = meta.filename;

        // if has received source, we done
        if (meta.source) {
          origin = FileOrigin.LIMBO;
          state.serverFileReference = meta.source;
          state.status = ItemStatus.PROCESSING_COMPLETE;
        }

        // size has been updated
        fire('load-meta');
      });

      // the file is now loading we need to update the progress indicators
      loader.on('progress', function(progress) {
        setStatus(ItemStatus.LOADING);

        fire('load-progress', progress);
      });

      // an error was thrown while loading the file, we need to switch to error state
      loader.on('error', function(error) {
        setStatus(ItemStatus.LOAD_ERROR);

        fire('load-request-error', error);
      });

      // user or another process aborted the file load (cannot retry)
      loader.on('abort', function() {
        setStatus(ItemStatus.INIT);
        fire('load-abort');
      });

      // done loading
      loader.on('load', function(file) {
        // as we've now loaded the file the loader is no longer required
        state.activeLoader = null;

        // called when file has loaded succesfully
        var success = function success(result) {
          // set (possibly) transformed file
          state.file = isFile(result) ? result : state.file;

          // file received
          if (origin === FileOrigin.LIMBO && state.serverFileReference) {
            setStatus(ItemStatus.PROCESSING_COMPLETE);
          } else {
            setStatus(ItemStatus.IDLE);
          }

          fire('load');
        };

        var error = function error(result) {
          // set original file
          state.file = file;
          fire('load-meta');

          setStatus(ItemStatus.LOAD_ERROR);
          fire('load-file-error', result);
        };

        // if we already have a server file reference, we don't need to call the onload method
        if (state.serverFileReference) {
          success(file);
          return;
        }

        // no server id, let's give this file the full treatment
        onload(file, success, error);
      });

      // set loader source data
      loader.setSource(source);

      // set as active loader
      state.activeLoader = loader;

      // load the source data
      loader.load();
    };

    var retryLoad = function retryLoad() {
      if (!state.activeLoader) {
        return;
      }
      state.activeLoader.load();
    };

    var abortLoad = function abortLoad() {
      if (state.activeLoader) {
        state.activeLoader.abort();
        return;
      }
      setStatus(ItemStatus.INIT);
      fire('load-abort');
    };

    //
    // logic to process a file
    //
    var process = function process(processor, onprocess) {
      // now processing
      setStatus(ItemStatus.PROCESSING);

      // reset abort callback
      abortProcessingRequestComplete = null;

      // if no file loaded we'll wait for the load event
      if (!(state.file instanceof Blob)) {
        api.on('load', function() {
          process(processor, onprocess);
        });
        return;
      }

      // setup processor
      processor.on('load', function(serverFileReference) {
        // need this id to be able to revert the upload
        state.serverFileReference = serverFileReference;
      });

      processor.on('load-perceived', function(serverFileReference) {
        // no longer required
        state.activeProcessor = null;

        // need this id to be able to rever the upload
        state.serverFileReference = serverFileReference;

        setStatus(ItemStatus.PROCESSING_COMPLETE);
        fire('process-complete', serverFileReference);
      });

      processor.on('start', function() {
        fire('process-start');
      });

      processor.on('error', function(error) {
        state.activeProcessor = null;
        setStatus(ItemStatus.PROCESSING_ERROR);
        fire('process-error', error);
      });

      processor.on('abort', function(serverFileReference) {
        state.activeProcessor = null;

        // if file was uploaded but processing was cancelled during perceived processor time store file reference
        state.serverFileReference = serverFileReference;

        setStatus(ItemStatus.IDLE);
        fire('process-abort');

        // has timeout so doesn't interfere with remove action
        if (abortProcessingRequestComplete) {
          abortProcessingRequestComplete();
        }
      });

      processor.on('progress', function(progress) {
        fire('process-progress', progress);
      });

      // when successfully transformed
      var success = function success(file) {
        // if was archived in the mean time, don't process
        if (state.archived) return;

        // process file!
        processor.process(file, Object.assign({}, metadata));
      };

      // something went wrong during transform phase
      var error = function error(result) {};

      // start processing the file
      onprocess(state.file, success, error);

      // set as active processor
      state.activeProcessor = processor;
    };

    var requestProcessing = function requestProcessing() {
      setStatus(ItemStatus.PROCESSING_QUEUED);
    };

    var abortProcessing = function abortProcessing() {
      return new Promise(function(resolve) {
        if (!state.activeProcessor) {
          setStatus(ItemStatus.IDLE);
          fire('process-abort');

          resolve();
          return;
        }

        abortProcessingRequestComplete = function abortProcessingRequestComplete() {
          resolve();
        };

        state.activeProcessor.abort();
      });
    };

    //
    // logic to revert a processed file
    //
    var revert = function revert(revertFileUpload, forceRevert) {
      return new Promise(function(resolve, reject) {
        // cannot revert without a server id for this process
        if (state.serverFileReference === null) {
          resolve();
          return;
        }

        // revert the upload (fire and forget)
        revertFileUpload(
          state.serverFileReference,
          function() {
            // reset file server id as now it's no available on the server
            state.serverFileReference = null;
            resolve();
          },
          function(error) {
            // don't set error state when reverting is optional, it will always resolve
            if (!forceRevert) {
              resolve();
              return;
            }

            // oh no errors
            setStatus(ItemStatus.PROCESSING_REVERT_ERROR);
            fire('process-revert-error');
            reject(error);
          }
        );

        // fire event
        setStatus(ItemStatus.IDLE);
        fire('process-revert');
      });
    };

    // exposed methods
    var _setMetadata = function setMetadata(key, value, silent) {
      var keys = key.split('.');
      var root = keys[0];
      var last = keys.pop();
      var data = metadata;
      keys.forEach(function(key) {
        return (data = data[key]);
      });

      // compare old value against new value, if they're the same, we're not updating
      if (JSON.stringify(data[last]) === JSON.stringify(value)) {
        return;
      }

      // update value
      data[last] = value;

      if (silent) return;

      fire('metadata-update', {
        key: root,
        value: metadata[root]
      });
    };

    var getMetadata = function getMetadata(key) {
      return deepCloneObject(key ? metadata[key] : metadata);
    };

    var api = Object.assign(
      {
        id: {
          get: function get() {
            return id;
          }
        },
        origin: {
          get: function get() {
            return origin;
          }
        },
        serverId: {
          get: function get() {
            return state.serverFileReference;
          }
        },
        status: {
          get: function get() {
            return state.status;
          }
        },
        filename: {
          get: function get() {
            return state.file.name;
          }
        },
        filenameWithoutExtension: {
          get: function get() {
            return getFilenameWithoutExtension(state.file.name);
          }
        },
        fileExtension: { get: getFileExtension },
        fileType: { get: getFileType },
        fileSize: { get: getFileSize },
        file: { get: getFile },

        source: {
          get: function get() {
            return state.source;
          }
        },

        getMetadata: getMetadata,
        setMetadata: function setMetadata(key, value, silent) {
          if (isObject(key)) {
            var data = key;
            Object.keys(data).forEach(function(key) {
              _setMetadata(key, data[key], value);
            });
            return key;
          }
          _setMetadata(key, value, silent);
          return value;
        },

        extend: function extend(name, handler) {
          return (itemAPI[name] = handler);
        },

        abortLoad: abortLoad,
        retryLoad: retryLoad,
        requestProcessing: requestProcessing,
        abortProcessing: abortProcessing,

        load: load,
        process: process,
        revert: revert
      },

      on(),
      {
        freeze: function freeze() {
          return (state.frozen = true);
        },

        release: function release() {
          return (state.released = true);
        },
        released: {
          get: function get() {
            return state.released;
          }
        },

        archive: function archive() {
          return (state.archived = true);
        },
        archived: {
          get: function get() {
            return state.archived;
          }
        }
      }
    );

    // create it here instead of returning it instantly so we can extend it later
    var itemAPI = createObject(api);

    return itemAPI;
  };

  var getItemIndexByQuery = function getItemIndexByQuery(items, query) {
    // just return first index
    if (isEmpty(query)) {
      return 0;
    }

    // invalid queries
    if (!isString(query)) {
      return -1;
    }

    // return item by id (or -1 if not found)
    return items.findIndex(function(item) {
      return item.id === query;
    });
  };

  var getItemById = function getItemById(items, itemId) {
    var index = getItemIndexByQuery(items, itemId);
    if (index < 0) {
      return;
    }
    return items[index] || null;
  };

  var fetchLocal = function fetchLocal(
    url,
    load,
    error,
    progress,
    abort,
    headers
  ) {
    var request = sendRequest(null, url, {
      method: 'GET',
      responseType: 'blob'
    });

    request.onload = function(xhr) {
      // get headers
      var headers = xhr.getAllResponseHeaders();

      // get filename
      var filename =
        getFileInfoFromHeaders(headers).name || getFilenameFromURL(url);

      // create response
      load(
        createResponse(
          'load',
          xhr.status,
          getFileFromBlob(xhr.response, filename),
          headers
        )
      );
    };

    request.onerror = function(xhr) {
      error(
        createResponse(
          'error',
          xhr.status,
          xhr.statusText,
          xhr.getAllResponseHeaders()
        )
      );
    };

    request.onheaders = function(xhr) {
      headers(
        createResponse('headers', xhr.status, null, xhr.getAllResponseHeaders())
      );
    };

    request.ontimeout = createTimeoutResponse(error);
    request.onprogress = progress;
    request.onabort = abort;

    // should return request
    return request;
  };

  var getDomainFromURL = function getDomainFromURL(url) {
    if (url.indexOf('//') === 0) {
      url = location.protocol + url;
    }
    return url
      .toLowerCase()
      .replace('blob:', '')
      .replace(/([a-z])?:\/\//, '$1')
      .split('/')[0];
  };

  var isExternalURL = function isExternalURL(url) {
    return (
      (url.indexOf(':') > -1 || url.indexOf('//') > -1) &&
      getDomainFromURL(location.href) !== getDomainFromURL(url)
    );
  };

  var dynamicLabel = function dynamicLabel(label) {
    return function() {
      return isFunction(label) ? label.apply(void 0, arguments) : label;
    };
  };

  var isMockItem = function isMockItem(item) {
    return !isFile(item.file);
  };

  var listUpdated = function listUpdated(dispatch, state) {
    clearTimeout(state.listUpdateTimeout);
    state.listUpdateTimeout = setTimeout(function() {
      dispatch('DID_UPDATE_ITEMS', { items: getActiveItems(state.items) });
    }, 0);
  };

  var optionalPromise = function optionalPromise(fn) {
    for (
      var _len = arguments.length,
        params = new Array(_len > 1 ? _len - 1 : 0),
        _key = 1;
      _key < _len;
      _key++
    ) {
      params[_key - 1] = arguments[_key];
    }
    return new Promise(function(resolve) {
      if (!fn) {
        return resolve(true);
      }

      var result = fn.apply(void 0, params);

      if (result == null) {
        return resolve(true);
      }

      if (typeof result === 'boolean') {
        return resolve(result);
      }

      if (typeof result.then === 'function') {
        result.then(resolve);
      }
    });
  };

  var sortItems = function sortItems(state, compare) {
    state.items.sort(function(a, b) {
      return compare(createItemAPI(a), createItemAPI(b));
    });
  };

  // returns item based on state
  var getItemByQueryFromState = function getItemByQueryFromState(
    state,
    itemHandler
  ) {
    return function() {
      var _ref =
          arguments.length > 0 && arguments[0] !== undefined
            ? arguments[0]
            : {},
        query = _ref.query,
        _ref$success = _ref.success,
        success = _ref$success === void 0 ? function() {} : _ref$success,
        _ref$failure = _ref.failure,
        failure = _ref$failure === void 0 ? function() {} : _ref$failure;
      var item = getItemByQuery(state.items, query);
      if (!item) {
        failure({
          error: createResponse('error', 0, 'Item not found'),

          file: null
        });

        return;
      }
      itemHandler(item, success, failure);
    };
  };

  var actions = function actions(dispatch, query, state) {
    return {
      /**
       * Aborts all ongoing processes
       */
      ABORT_ALL: function ABORT_ALL() {
        getActiveItems(state.items).forEach(function(item) {
          item.freeze();
          item.abortLoad();
          item.abortProcessing();
        });
      },

      /**
       * Sets initial files
       */
      DID_SET_FILES: function DID_SET_FILES(_ref2) {
        var _ref2$value = _ref2.value,
          value = _ref2$value === void 0 ? [] : _ref2$value;

        // map values to file objects
        var files = value.map(function(file) {
          return {
            source: file.source ? file.source : file,
            options: file.options
          };
        });

        // loop over files, if file is in list, leave it be, if not, remove
        // test if items should be moved
        var activeItems = getActiveItems(state.items);

        activeItems.forEach(function(item) {
          // if item not is in new value, remove
          if (
            !files.find(function(file) {
              return file.source === item.source || file.source === item.file;
            })
          ) {
            dispatch('REMOVE_ITEM', { query: item });
          }
        });

        // add new files
        activeItems = getActiveItems(state.items);
        files.forEach(function(file, index) {
          // if file is already in list
          if (
            activeItems.find(function(item) {
              return item.source === file.source || item.file === file.source;
            })
          )
            return;

          // not in list, add
          dispatch(
            'ADD_ITEM',
            Object.assign({}, file, {
              interactionMethod: InteractionMethod.NONE,
              index: index
            })
          );
        });
      },

      DID_UPDATE_ITEM_METADATA: function DID_UPDATE_ITEM_METADATA(_ref3) {
        var id = _ref3.id,
          change = _ref3.change;

        var item = getItemById(state.items, id);

        // only revert and attempt to upload when we're uploading to a server
        if (!query('IS_ASYNC')) {
          // should we update the output data
          applyFilterChain('SHOULD_PREPARE_OUTPUT', false, {
            item: item,
            query: query
          }).then(function(shouldPrepareOutput) {
            if (!shouldPrepareOutput) {
              return;
            }
            dispatch(
              'REQUEST_PREPARE_OUTPUT',
              {
                query: id,
                item: item,
                ready: function ready(file) {
                  dispatch('DID_PREPARE_OUTPUT', { id: id, file: file });
                }
              },
              true
            );
          });

          return;
        }

        // for async scenarios
        var upload = function upload() {
          // we push this forward a bit so the interface is updated correctly
          setTimeout(function() {
            dispatch('REQUEST_ITEM_PROCESSING', { query: id });
          }, 32);
        };

        var revert = function revert(doUpload) {
          item
            .revert(
              createRevertFunction(
                state.options.server.url,
                state.options.server.revert
              ),
              query('GET_FORCE_REVERT')
            )
            .then(doUpload ? upload : function() {})
            .catch(function() {});
        };

        var abort = function abort(doUpload) {
          item.abortProcessing().then(doUpload ? upload : function() {});
        };

        // if we should re-upload the file immidiately
        if (item.status === ItemStatus.PROCESSING_COMPLETE) {
          return revert(state.options.instantUpload);
        }

        // if currently uploading, cancel upload
        if (item.status === ItemStatus.PROCESSING) {
          return abort(state.options.instantUpload);
        }

        if (state.options.instantUpload) {
          upload();
        }
      },

      SORT: function SORT(_ref4) {
        var compare = _ref4.compare;
        sortItems(state, compare);
      },

      ADD_ITEMS: function ADD_ITEMS(_ref5) {
        var items = _ref5.items,
          index = _ref5.index,
          interactionMethod = _ref5.interactionMethod,
          _ref5$success = _ref5.success,
          success = _ref5$success === void 0 ? function() {} : _ref5$success,
          _ref5$failure = _ref5.failure,
          failure = _ref5$failure === void 0 ? function() {} : _ref5$failure;

        var currentIndex = index;

        if (index === -1 || typeof index === 'undefined') {
          var insertLocation = query('GET_ITEM_INSERT_LOCATION');
          var totalItems = query('GET_TOTAL_ITEMS');
          currentIndex = insertLocation === 'before' ? 0 : totalItems;
        }

        var ignoredFiles = query('GET_IGNORED_FILES');
        var isValidFile = function isValidFile(source) {
          return isFile(source)
            ? !ignoredFiles.includes(source.name.toLowerCase())
            : !isEmpty(source);
        };
        var validItems = items.filter(isValidFile);

        var promises = validItems.map(function(source) {
          return new Promise(function(resolve, reject) {
            dispatch('ADD_ITEM', {
              interactionMethod: interactionMethod,
              source: source.source || source,
              success: resolve,
              failure: reject,
              index: currentIndex++,
              options: source.options || {}
            });
          });
        });

        Promise.all(promises)
          .then(success)
          .catch(failure);
      },

      /**
       * @param source
       * @param index
       * @param interactionMethod
       */
      ADD_ITEM: function ADD_ITEM(_ref6) {
        var source = _ref6.source,
          _ref6$index = _ref6.index,
          index = _ref6$index === void 0 ? -1 : _ref6$index,
          interactionMethod = _ref6.interactionMethod,
          _ref6$success = _ref6.success,
          success = _ref6$success === void 0 ? function() {} : _ref6$success,
          _ref6$failure = _ref6.failure,
          failure = _ref6$failure === void 0 ? function() {} : _ref6$failure,
          _ref6$options = _ref6.options,
          options = _ref6$options === void 0 ? {} : _ref6$options;

        // if no source supplied
        if (isEmpty(source)) {
          failure({
            error: createResponse('error', 0, 'No source'),

            file: null
          });

          return;
        }

        // filter out invalid file items, used to filter dropped directory contents
        if (
          isFile(source) &&
          state.options.ignoredFiles.includes(source.name.toLowerCase())
        ) {
          // fail silently
          return;
        }

        // test if there's still room in the list of files
        if (!hasRoomForItem(state)) {
          // if multiple allowed, we can't replace
          // or if only a single item is allowed but we're not allowed to replace it we exit
          if (
            state.options.allowMultiple ||
            (!state.options.allowMultiple && !state.options.allowReplace)
          ) {
            var error = createResponse('warning', 0, 'Max files');

            dispatch('DID_THROW_MAX_FILES', {
              source: source,
              error: error
            });

            failure({ error: error, file: null });

            return;
          }

          // let's replace the item
          // id of first item we're about to remove
          var _item = getActiveItems(state.items)[0];

          // if has been processed remove it from the server as well
          if (
            _item.status === ItemStatus.PROCESSING_COMPLETE ||
            _item.status === ItemStatus.PROCESSING_REVERT_ERROR
          ) {
            var forceRevert = query('GET_FORCE_REVERT');
            _item
              .revert(
                createRevertFunction(
                  state.options.server.url,
                  state.options.server.revert
                ),
                forceRevert
              )
              .then(function() {
                if (!forceRevert) return;

                // try to add now
                dispatch('ADD_ITEM', {
                  source: source,
                  index: index,
                  interactionMethod: interactionMethod,
                  success: success,
                  failure: failure,
                  options: options
                });
              })
              .catch(function() {}); // no need to handle this catch state for now

            if (forceRevert) return;
          }

          // remove first item as it will be replaced by this item
          dispatch('REMOVE_ITEM', { query: _item.id });
        }

        // where did the file originate
        var origin =
          options.type === 'local'
            ? FileOrigin.LOCAL
            : options.type === 'limbo'
            ? FileOrigin.LIMBO
            : FileOrigin.INPUT;

        // create a new blank item
        var item = createItem(
          // where did this file come from
          origin,

          // an input file never has a server file reference
          origin === FileOrigin.INPUT ? null : source,

          // file mock data, if defined
          options.file
        );

        // set initial meta data
        Object.keys(options.metadata || {}).forEach(function(key) {
          item.setMetadata(key, options.metadata[key]);
        });

        // created the item, let plugins add methods
        applyFilters('DID_CREATE_ITEM', item, {
          query: query,
          dispatch: dispatch
        });

        // where to insert new items
        var itemInsertLocation = query('GET_ITEM_INSERT_LOCATION');

        // adjust index if is not allowed to pick location
        if (!state.options.itemInsertLocationFreedom) {
          index = itemInsertLocation === 'before' ? -1 : state.items.length;
        }

        // add item to list
        insertItem(state.items, item, index);

        // sort items in list
        if (isFunction(itemInsertLocation) && source) {
          sortItems(state, itemInsertLocation);
        }

        // get a quick reference to the item id
        var id = item.id;

        // observe item events
        item.on('load-init', function() {
          dispatch('DID_START_ITEM_LOAD', { id: id });
        });

        item.on('load-meta', function() {
          dispatch('DID_UPDATE_ITEM_META', { id: id });
        });

        item.on('load-progress', function(progress) {
          dispatch('DID_UPDATE_ITEM_LOAD_PROGRESS', {
            id: id,
            progress: progress
          });
        });

        item.on('load-request-error', function(error) {
          var mainStatus = dynamicLabel(state.options.labelFileLoadError)(
            error
          );

          // is client error, no way to recover
          if (error.code >= 400 && error.code < 500) {
            dispatch('DID_THROW_ITEM_INVALID', {
              id: id,
              error: error,
              status: {
                main: mainStatus,
                sub: error.code + ' (' + error.body + ')'
              }
            });

            // reject the file so can be dealt with through API
            failure({ error: error, file: createItemAPI(item) });
            return;
          }

          // is possible server error, so might be possible to retry
          dispatch('DID_THROW_ITEM_LOAD_ERROR', {
            id: id,
            error: error,
            status: {
              main: mainStatus,
              sub: state.options.labelTapToRetry
            }
          });
        });

        item.on('load-file-error', function(error) {
          dispatch('DID_THROW_ITEM_INVALID', {
            id: id,
            error: error.status,
            status: error.status
          });
        });

        item.on('load-abort', function() {
          dispatch('REMOVE_ITEM', { query: id });
        });

        item.on('load-skip', function() {
          dispatch('COMPLETE_LOAD_ITEM', {
            query: id,
            item: item,
            data: {
              source: source,
              success: success
            }
          });
        });

        item.on('load', function() {
          var handleAdd = function handleAdd(shouldAdd) {
            // no should not add this file
            if (!shouldAdd) {
              dispatch('REMOVE_ITEM', {
                query: id
              });

              return;
            }

            // now interested in metadata updates
            item.on('metadata-update', function(change) {
              dispatch('DID_UPDATE_ITEM_METADATA', { id: id, change: change });
            });

            // let plugins decide if the output data should be prepared at this point
            // means we'll do this and wait for idle state
            applyFilterChain('SHOULD_PREPARE_OUTPUT', false, {
              item: item,
              query: query
            }).then(function(shouldPrepareOutput) {
              var loadComplete = function loadComplete() {
                dispatch('COMPLETE_LOAD_ITEM', {
                  query: id,
                  item: item,
                  data: {
                    source: source,
                    success: success
                  }
                });

                listUpdated(dispatch, state);
              };

              // exit
              if (shouldPrepareOutput) {
                // wait for idle state and then run PREPARE_OUTPUT
                dispatch(
                  'REQUEST_PREPARE_OUTPUT',
                  {
                    query: id,
                    item: item,
                    ready: function ready(file) {
                      dispatch('DID_PREPARE_OUTPUT', { id: id, file: file });
                      loadComplete();
                    }
                  },
                  true
                );

                return;
              }

              loadComplete();
            });
          };

          // item loaded, allow plugins to
          // - read data (quickly)
          // - add metadata
          applyFilterChain('DID_LOAD_ITEM', item, {
            query: query,
            dispatch: dispatch
          })
            .then(function() {
              optionalPromise(
                query('GET_BEFORE_ADD_FILE'),
                createItemAPI(item)
              ).then(handleAdd);
            })
            .catch(function() {
              handleAdd(false);
            });
        });

        item.on('process-start', function() {
          dispatch('DID_START_ITEM_PROCESSING', { id: id });
        });

        item.on('process-progress', function(progress) {
          dispatch('DID_UPDATE_ITEM_PROCESS_PROGRESS', {
            id: id,
            progress: progress
          });
        });

        item.on('process-error', function(error) {
          dispatch('DID_THROW_ITEM_PROCESSING_ERROR', {
            id: id,
            error: error,
            status: {
              main: dynamicLabel(state.options.labelFileProcessingError)(error),
              sub: state.options.labelTapToRetry
            }
          });
        });

        item.on('process-revert-error', function(error) {
          dispatch('DID_THROW_ITEM_PROCESSING_REVERT_ERROR', {
            id: id,
            error: error,
            status: {
              main: dynamicLabel(state.options.labelFileProcessingRevertError)(
                error
              ),
              sub: state.options.labelTapToRetry
            }
          });
        });

        item.on('process-complete', function(serverFileReference) {
          dispatch('DID_COMPLETE_ITEM_PROCESSING', {
            id: id,
            error: null,
            serverFileReference: serverFileReference
          });
        });

        item.on('process-abort', function() {
          dispatch('DID_ABORT_ITEM_PROCESSING', { id: id });
        });

        item.on('process-revert', function() {
          dispatch('DID_REVERT_ITEM_PROCESSING', { id: id });
        });

        // let view know the item has been inserted
        dispatch('DID_ADD_ITEM', {
          id: id,
          index: index,
          interactionMethod: interactionMethod
        });

        listUpdated(dispatch, state);

        // start loading the source
        var _ref7 = state.options.server || {},
          url = _ref7.url,
          load = _ref7.load,
          restore = _ref7.restore,
          fetch = _ref7.fetch;

        item.load(
          source,

          // this creates a function that loads the file based on the type of file (string, base64, blob, file) and location of file (local, remote, limbo)
          createFileLoader(
            origin === FileOrigin.INPUT
              ? // input
                isString(source) && isExternalURL(source)
                ? createFetchFunction(url, fetch) // remote url
                : fetchLocal // local url
              : // limbo or local
              origin === FileOrigin.LIMBO
              ? createFetchFunction(url, restore) // limbo
              : createFetchFunction(url, load) // local
          ),

          // called when the file is loaded so it can be piped through the filters
          function(file, success, error) {
            // let's process the file
            applyFilterChain('LOAD_FILE', file, { query: query })
              .then(success)
              .catch(error);
          }
        );
      },

      REQUEST_PREPARE_OUTPUT: function REQUEST_PREPARE_OUTPUT(_ref8) {
        var item = _ref8.item,
          ready = _ref8.ready;

        // don't handle archived items, an item could have been archived (load aborted) while waiting to be prepared
        if (item.archived) return;

        // allow plugins to alter the file data
        applyFilterChain('PREPARE_OUTPUT', item.file, {
          query: query,
          item: item
        }).then(function(result) {
          applyFilterChain('COMPLETE_PREPARE_OUTPUT', result, {
            query: query,
            item: item
          }).then(function(result) {
            // don't handle archived items, an item could have been archived (load aborted) while being prepared
            if (item.archived) return;

            // we done!
            ready(result);
          });
        });
      },

      COMPLETE_LOAD_ITEM: function COMPLETE_LOAD_ITEM(_ref9) {
        var item = _ref9.item,
          data = _ref9.data;
        var success = data.success,
          source = data.source;

        // sort items in list
        var itemInsertLocation = query('GET_ITEM_INSERT_LOCATION');
        if (isFunction(itemInsertLocation) && source) {
          sortItems(state, itemInsertLocation);
        }

        // let interface know the item has loaded
        dispatch('DID_LOAD_ITEM', {
          id: item.id,
          error: null,
          serverFileReference: item.origin === FileOrigin.INPUT ? null : source
        });

        // item has been successfully loaded and added to the
        // list of items so can now be safely returned for use
        success(createItemAPI(item));

        // if this is a local server file we need to show a different state
        if (item.origin === FileOrigin.LOCAL) {
          dispatch('DID_LOAD_LOCAL_ITEM', { id: item.id });
          return;
        }

        // if is a temp server file we prevent async upload call here (as the file is already on the server)
        if (item.origin === FileOrigin.LIMBO) {
          dispatch('DID_COMPLETE_ITEM_PROCESSING', {
            id: item.id,
            error: null,
            serverFileReference: source
          });

          return;
        }

        // id we are allowed to upload the file immidiately, lets do it
        if (query('IS_ASYNC') && state.options.instantUpload) {
          dispatch('REQUEST_ITEM_PROCESSING', { query: item.id });
        }
      },

      RETRY_ITEM_LOAD: getItemByQueryFromState(state, function(item) {
        // try loading the source one more time
        item.retryLoad();
      }),

      REQUEST_ITEM_PROCESSING: getItemByQueryFromState(state, function(
        item,
        success,
        failure
      ) {
        // cannot be queued (or is already queued)
        var itemCanBeQueuedForProcessing =
          // waiting for something
          item.status === ItemStatus.IDLE ||
          // processing went wrong earlier
          item.status === ItemStatus.PROCESSING_ERROR;

        // not ready to be processed
        if (!itemCanBeQueuedForProcessing) {
          var process = function process() {
            setTimeout(function() {
              dispatch('REQUEST_ITEM_PROCESSING', {
                query: item,
                success: success,
                failure: failure
              });
            }, 32);
          };

          // if already done processing or tried to revert but didn't work, try again
          if (
            item.status === ItemStatus.PROCESSING_COMPLETE ||
            item.status === ItemStatus.PROCESSING_REVERT_ERROR
          ) {
            item
              .revert(
                createRevertFunction(
                  state.options.server.url,
                  state.options.server.revert
                ),
                query('GET_FORCE_REVERT')
              )
              .then(process)
              .catch(function() {}); // don't continue with processing if something went wrong
          } else if (item.status === ItemStatus.PROCESSING) {
            item.abortProcessing().then(process);
          }

          return;
        }

        // already queued for processing
        if (item.status === ItemStatus.PROCESSING_QUEUED) return;

        item.requestProcessing();

        dispatch('DID_REQUEST_ITEM_PROCESSING', { id: item.id });

        dispatch(
          'PROCESS_ITEM',
          { query: item, success: success, failure: failure },
          true
        );
      }),

      PROCESS_ITEM: getItemByQueryFromState(state, function(
        item,
        success,
        failure
      ) {
        var maxParallelUploads = query('GET_MAX_PARALLEL_UPLOADS');
        var totalCurrentUploads = query(
          'GET_ITEMS_BY_STATUS',
          ItemStatus.PROCESSING
        ).length;

        // queue and wait till queue is freed up
        if (totalCurrentUploads === maxParallelUploads) {
          // queue for later processing
          state.processingQueue.push({
            id: item.id,
            success: success,
            failure: failure
          });

          // stop it!
          return;
        }

        // if was not queued or is already processing exit here
        if (item.status === ItemStatus.PROCESSING) return;

        var processNext = function processNext() {
          // process queueud items
          var queueEntry = state.processingQueue.shift();

          // no items left
          if (!queueEntry) return;

          // get item reference
          var id = queueEntry.id,
            success = queueEntry.success,
            failure = queueEntry.failure;
          var itemReference = getItemByQuery(state.items, id);

          // if item was archived while in queue, jump to next
          if (!itemReference || itemReference.archived) {
            processNext();
            return;
          }

          // process queued item
          dispatch(
            'PROCESS_ITEM',
            { query: id, success: success, failure: failure },
            true
          );
        };

        // we done function
        item.onOnce('process-complete', function() {
          success(createItemAPI(item));
          processNext();

          // All items processed? No errors?
          var allItemsProcessed =
            query('GET_ITEMS_BY_STATUS', ItemStatus.PROCESSING_COMPLETE)
              .length === state.items.length;
          if (allItemsProcessed) {
            dispatch('DID_COMPLETE_ITEM_PROCESSING_ALL');
          }
        });

        // we error function
        item.onOnce('process-error', function(error) {
          failure({ error: error, file: createItemAPI(item) });
          processNext();
        });

        // start file processing
        item.process(
          createFileProcessor(
            createProcessorFunction(
              state.options.server.url,
              state.options.server.process,
              state.options.name
            )
          ),

          // called when the file is about to be processed so it can be piped through the transform filters
          function(file, success, error) {
            // allow plugins to alter the file data
            applyFilterChain('PREPARE_OUTPUT', file, {
              query: query,
              item: item
            })
              .then(function(file) {
                dispatch('DID_PREPARE_OUTPUT', { id: item.id, file: file });

                success(file);
              })
              .catch(error);
          }
        );
      }),

      RETRY_ITEM_PROCESSING: getItemByQueryFromState(state, function(item) {
        dispatch('REQUEST_ITEM_PROCESSING', { query: item });
      }),

      REQUEST_REMOVE_ITEM: getItemByQueryFromState(state, function(item) {
        optionalPromise(
          query('GET_BEFORE_REMOVE_FILE'),
          createItemAPI(item)
        ).then(function(shouldRemove) {
          if (!shouldRemove) {
            return;
          }
          dispatch('REMOVE_ITEM', { query: item });
        });
      }),

      RELEASE_ITEM: getItemByQueryFromState(state, function(item) {
        item.release();
      }),

      REMOVE_ITEM: getItemByQueryFromState(state, function(item, success) {
        var removeFromView = function removeFromView() {
          // get id reference
          var id = item.id;

          // archive the item, this does not remove it from the list
          getItemById(state.items, id).archive();

          // tell the view the item has been removed
          dispatch('DID_REMOVE_ITEM', { error: null, id: id, item: item });

          // now the list has been modified
          listUpdated(dispatch, state);

          // correctly removed
          success(createItemAPI(item));
        };

        // if this is a local file and the server.remove function has been configured, send source there so dev can remove file from server
        var server = state.options.server;
        if (
          item.origin === FileOrigin.LOCAL &&
          server &&
          isFunction(server.remove)
        ) {
          dispatch('DID_START_ITEM_REMOVE', { id: item.id });

          server.remove(
            item.source,
            function() {
              return removeFromView();
            },
            function(status) {
              dispatch('DID_THROW_ITEM_REMOVE_ERROR', {
                id: item.id,
                error: createResponse('error', 0, status, null),
                status: {
                  main: dynamicLabel(state.options.labelFileRemoveError)(
                    status
                  ),
                  sub: state.options.labelTapToRetry
                }
              });
            }
          );
        } else {
          removeFromView();
        }
      }),

      ABORT_ITEM_LOAD: getItemByQueryFromState(state, function(item) {
        item.abortLoad();
      }),

      ABORT_ITEM_PROCESSING: getItemByQueryFromState(state, function(item) {
        // test if is already processed
        if (item.serverId) {
          dispatch('REVERT_ITEM_PROCESSING', { id: item.id });
          return;
        }

        // abort
        item.abortProcessing().then(function() {
          var shouldRemove = state.options.instantUpload;
          if (shouldRemove) {
            dispatch('REMOVE_ITEM', { query: item.id });
          }
        });
      }),

      REQUEST_REVERT_ITEM_PROCESSING: getItemByQueryFromState(state, function(
        item
      ) {
        // not instant uploading, revert immidiately
        if (!state.options.instantUpload) {
          dispatch('REVERT_ITEM_PROCESSING', { query: item });
          return;
        }

        // if we're instant uploading the file will also be removed if we revert,
        // so if a before remove file hook is defined we need to run it now
        var handleRevert = function handleRevert(shouldRevert) {
          if (!shouldRevert) return;
          dispatch('REVERT_ITEM_PROCESSING', { query: item });
        };

        var fn = query('GET_BEFORE_REMOVE_FILE');
        if (!fn) {
          return handleRevert(true);
        }

        var requestRemoveResult = fn(createItemAPI(item));
        if (requestRemoveResult == null) {
          // undefined or null
          return handleRevert(true);
        }

        if (typeof requestRemoveResult === 'boolean') {
          return handleRevert(requestRemoveResult);
        }

        if (typeof requestRemoveResult.then === 'function') {
          requestRemoveResult.then(handleRevert);
        }
      }),

      REVERT_ITEM_PROCESSING: getItemByQueryFromState(state, function(item) {
        item
          .revert(
            createRevertFunction(
              state.options.server.url,
              state.options.server.revert
            ),
            query('GET_FORCE_REVERT')
          )
          .then(function() {
            var shouldRemove = state.options.instantUpload || isMockItem(item);
            if (shouldRemove) {
              dispatch('REMOVE_ITEM', { query: item.id });
            }
          })
          .catch(function() {});
      }),

      SET_OPTIONS: function SET_OPTIONS(_ref10) {
        var options = _ref10.options;
        forin(options, function(key, value) {
          dispatch('SET_' + fromCamels(key, '_').toUpperCase(), {
            value: value
          });
        });
      }
    };
  };

  var formatFilename = function formatFilename(name) {
    return name;
  };

  var createElement$1 = function createElement(tagName) {
    return document.createElement(tagName);
  };

  var text = function text(node, value) {
    var textNode = node.childNodes[0];
    if (!textNode) {
      textNode = document.createTextNode(value);
      node.appendChild(textNode);
    } else if (value !== textNode.nodeValue) {
      textNode.nodeValue = value;
    }
  };

  var polarToCartesian = function polarToCartesian(
    centerX,
    centerY,
    radius,
    angleInDegrees
  ) {
    var angleInRadians = (((angleInDegrees % 360) - 90) * Math.PI) / 180.0;
    return {
      x: centerX + radius * Math.cos(angleInRadians),
      y: centerY + radius * Math.sin(angleInRadians)
    };
  };

  var describeArc = function describeArc(
    x,
    y,
    radius,
    startAngle,
    endAngle,
    arcSweep
  ) {
    var start = polarToCartesian(x, y, radius, endAngle);
    var end = polarToCartesian(x, y, radius, startAngle);
    return [
      'M',
      start.x,
      start.y,
      'A',
      radius,
      radius,
      0,
      arcSweep,
      0,
      end.x,
      end.y
    ].join(' ');
  };

  var percentageArc = function percentageArc(x, y, radius, from, to) {
    var arcSweep = 1;
    if (to > from && to - from <= 0.5) {
      arcSweep = 0;
    }
    if (from > to && from - to >= 0.5) {
      arcSweep = 0;
    }
    return describeArc(
      x,
      y,
      radius,
      Math.min(0.9999, from) * 360,
      Math.min(0.9999, to) * 360,
      arcSweep
    );
  };

  var create = function create(_ref) {
    var root = _ref.root,
      props = _ref.props;
    // start at 0
    props.spin = false;
    props.progress = 0;
    props.opacity = 0;

    // svg
    var svg = createElement('svg');
    root.ref.path = createElement('path', {
      'stroke-width': 2,
      'stroke-linecap': 'round'
    });

    svg.appendChild(root.ref.path);

    root.ref.svg = svg;

    root.appendChild(svg);
  };

  var write = function write(_ref2) {
    var root = _ref2.root,
      props = _ref2.props;

    if (props.opacity === 0) {
      return;
    }

    if (props.align) {
      root.element.dataset.align = props.align;
    }

    // get width of stroke
    var ringStrokeWidth = parseInt(attr(root.ref.path, 'stroke-width'), 10);

    // calculate size of ring
    var size = root.rect.element.width * 0.5;

    // ring state
    var ringFrom = 0;
    var ringTo = 0;

    // now in busy mode
    if (props.spin) {
      ringFrom = 0;
      ringTo = 0.5;
    } else {
      ringFrom = 0;
      ringTo = props.progress;
    }

    // get arc path
    var coordinates = percentageArc(
      size,
      size,
      size - ringStrokeWidth,
      ringFrom,
      ringTo
    );

    // update progress bar
    attr(root.ref.path, 'd', coordinates);

    // hide while contains 0 value
    attr(
      root.ref.path,
      'stroke-opacity',
      props.spin || props.progress > 0 ? 1 : 0
    );
  };

  var progressIndicator = createView({
    tag: 'div',
    name: 'progress-indicator',
    ignoreRectUpdate: true,
    ignoreRect: true,
    create: create,
    write: write,
    mixins: {
      apis: ['progress', 'spin', 'align'],
      styles: ['opacity'],
      animations: {
        opacity: { type: 'tween', duration: 500 },
        progress: {
          type: 'spring',
          stiffness: 0.95,
          damping: 0.65,
          mass: 10
        }
      }
    }
  });

  var create$1 = function create(_ref) {
    var root = _ref.root,
      props = _ref.props;
    root.element.innerHTML =
      (props.icon || '') + ('<span>' + props.label + '</span>');

    props.isDisabled = false;
  };

  var write$1 = function write(_ref2) {
    var root = _ref2.root,
      props = _ref2.props;
    var isDisabled = props.isDisabled;
    var shouldDisable = root.query('GET_DISABLED') || props.opacity === 0;

    if (shouldDisable && !isDisabled) {
      props.isDisabled = true;
      attr(root.element, 'disabled', 'disabled');
    } else if (!shouldDisable && isDisabled) {
      props.isDisabled = false;
      root.element.removeAttribute('disabled');
    }
  };

  var fileActionButton = createView({
    tag: 'button',
    attributes: {
      type: 'button'
    },

    ignoreRect: true,
    ignoreRectUpdate: true,
    name: 'file-action-button',
    mixins: {
      apis: ['label'],
      styles: ['translateX', 'translateY', 'scaleX', 'scaleY', 'opacity'],
      animations: {
        scaleX: 'spring',
        scaleY: 'spring',
        translateX: 'spring',
        translateY: 'spring',
        opacity: { type: 'tween', duration: 250 }
      },

      listeners: true
    },

    create: create$1,
    write: write$1
  });

  var toNaturalFileSize = function toNaturalFileSize(bytes) {
    var decimalSeparator =
      arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '.';
    // nope, no negative byte sizes
    bytes = Math.round(Math.abs(bytes));

    // just bytes
    if (bytes < 1000) {
      return bytes + ' bytes';
    }

    // kilobytes
    if (bytes < MB) {
      return Math.floor(bytes / KB) + ' KB';
    }

    // megabytes
    if (bytes < GB) {
      return removeDecimalsWhenZero(bytes / MB, 1, decimalSeparator) + ' MB';
    }

    // gigabytes
    return removeDecimalsWhenZero(bytes / GB, 2, decimalSeparator) + ' GB';
  };

  var KB = 1000;
  var MB = 1000000;
  var GB = 1000000000;

  var removeDecimalsWhenZero = function removeDecimalsWhenZero(
    value,
    decimalCount,
    separator
  ) {
    return value
      .toFixed(decimalCount)
      .split('.')
      .filter(function(part) {
        return part !== '0';
      })
      .join(separator);
  };

  var create$2 = function create(_ref) {
    var root = _ref.root,
      props = _ref.props;
    // filename
    var fileName = createElement$1('span');
    fileName.className = 'filepond--file-info-main';
    // hide for screenreaders
    // the file is contained in a fieldset with legend that contains the filename
    // no need to read it twice
    attr(fileName, 'aria-hidden', 'true');
    root.appendChild(fileName);
    root.ref.fileName = fileName;

    // filesize
    var fileSize = createElement$1('span');
    fileSize.className = 'filepond--file-info-sub';
    root.appendChild(fileSize);
    root.ref.fileSize = fileSize;

    // set initial values
    text(fileSize, root.query('GET_LABEL_FILE_WAITING_FOR_SIZE'));
    text(fileName, formatFilename(root.query('GET_ITEM_NAME', props.id)));
  };

  var updateFile = function updateFile(_ref2) {
    var root = _ref2.root,
      props = _ref2.props;
    text(
      root.ref.fileSize,
      toNaturalFileSize(root.query('GET_ITEM_SIZE', props.id))
    );

    text(
      root.ref.fileName,
      formatFilename(root.query('GET_ITEM_NAME', props.id))
    );
  };

  var updateFileSizeOnError = function updateFileSizeOnError(_ref3) {
    var root = _ref3.root,
      props = _ref3.props;
    // if size is available don't fallback to unknown size message
    if (isInt(root.query('GET_ITEM_SIZE', props.id))) {
      return;
    }

    text(root.ref.fileSize, root.query('GET_LABEL_FILE_SIZE_NOT_AVAILABLE'));
  };

  var fileInfo = createView({
    name: 'file-info',
    ignoreRect: true,
    ignoreRectUpdate: true,
    write: createRoute({
      DID_LOAD_ITEM: updateFile,
      DID_UPDATE_ITEM_META: updateFile,
      DID_THROW_ITEM_LOAD_ERROR: updateFileSizeOnError,
      DID_THROW_ITEM_INVALID: updateFileSizeOnError
    }),

    didCreateView: function didCreateView(root) {
      applyFilters('CREATE_VIEW', Object.assign({}, root, { view: root }));
    },
    create: create$2,
    mixins: {
      styles: ['translateX', 'translateY'],
      animations: {
        translateX: 'spring',
        translateY: 'spring'
      }
    }
  });

  var toPercentage = function toPercentage(value) {
    return Math.round(value * 100);
  };

  var create$3 = function create(_ref) {
    var root = _ref.root,
      props = _ref.props;
    // main status
    var main = createElement$1('span');
    main.className = 'filepond--file-status-main';
    root.appendChild(main);
    root.ref.main = main;

    // sub status
    var sub = createElement$1('span');
    sub.className = 'filepond--file-status-sub';
    root.appendChild(sub);
    root.ref.sub = sub;

    didSetItemLoadProgress({ root: root, action: { progress: null } });
  };

  var didSetItemLoadProgress = function didSetItemLoadProgress(_ref2) {
    var root = _ref2.root,
      action = _ref2.action;
    var title =
      action.progress === null
        ? root.query('GET_LABEL_FILE_LOADING')
        : root.query('GET_LABEL_FILE_LOADING') +
          ' ' +
          toPercentage(action.progress) +
          '%';

    text(root.ref.main, title);
    text(root.ref.sub, root.query('GET_LABEL_TAP_TO_CANCEL'));
  };

  var didSetItemProcessProgress = function didSetItemProcessProgress(_ref3) {
    var root = _ref3.root,
      action = _ref3.action;
    var title =
      action.progress === null
        ? root.query('GET_LABEL_FILE_PROCESSING')
        : root.query('GET_LABEL_FILE_PROCESSING') +
          ' ' +
          toPercentage(action.progress) +
          '%';

    text(root.ref.main, title);
    text(root.ref.sub, root.query('GET_LABEL_TAP_TO_CANCEL'));
  };

  var didRequestItemProcessing = function didRequestItemProcessing(_ref4) {
    var root = _ref4.root;
    text(root.ref.main, root.query('GET_LABEL_FILE_PROCESSING'));
    text(root.ref.sub, root.query('GET_LABEL_TAP_TO_CANCEL'));
  };

  var didAbortItemProcessing = function didAbortItemProcessing(_ref5) {
    var root = _ref5.root;
    text(root.ref.main, root.query('GET_LABEL_FILE_PROCESSING_ABORTED'));
    text(root.ref.sub, root.query('GET_LABEL_TAP_TO_RETRY'));
  };

  var didCompleteItemProcessing = function didCompleteItemProcessing(_ref6) {
    var root = _ref6.root;
    text(root.ref.main, root.query('GET_LABEL_FILE_PROCESSING_COMPLETE'));
    text(root.ref.sub, root.query('GET_LABEL_TAP_TO_UNDO'));
  };

  var clear = function clear(_ref7) {
    var root = _ref7.root;
    text(root.ref.main, '');
    text(root.ref.sub, '');
  };

  var error = function error(_ref8) {
    var root = _ref8.root,
      action = _ref8.action;
    text(root.ref.main, action.status.main);
    text(root.ref.sub, action.status.sub);
  };

  var fileStatus = createView({
    name: 'file-status',
    ignoreRect: true,
    ignoreRectUpdate: true,
    write: createRoute({
      DID_LOAD_ITEM: clear,
      DID_REVERT_ITEM_PROCESSING: clear,
      DID_REQUEST_ITEM_PROCESSING: didRequestItemProcessing,
      DID_ABORT_ITEM_PROCESSING: didAbortItemProcessing,
      DID_COMPLETE_ITEM_PROCESSING: didCompleteItemProcessing,
      DID_UPDATE_ITEM_PROCESS_PROGRESS: didSetItemProcessProgress,
      DID_UPDATE_ITEM_LOAD_PROGRESS: didSetItemLoadProgress,
      DID_THROW_ITEM_LOAD_ERROR: error,
      DID_THROW_ITEM_INVALID: error,
      DID_THROW_ITEM_PROCESSING_ERROR: error,
      DID_THROW_ITEM_PROCESSING_REVERT_ERROR: error,
      DID_THROW_ITEM_REMOVE_ERROR: error
    }),

    didCreateView: function didCreateView(root) {
      applyFilters('CREATE_VIEW', Object.assign({}, root, { view: root }));
    },
    create: create$3,
    mixins: {
      styles: ['translateX', 'translateY', 'opacity'],
      animations: {
        opacity: { type: 'tween', duration: 250 },
        translateX: 'spring',
        translateY: 'spring'
      }
    }
  });

  /**
   * Button definitions for the file view
   */

  var Buttons = {
    AbortItemLoad: {
      label: 'GET_LABEL_BUTTON_ABORT_ITEM_LOAD',
      action: 'ABORT_ITEM_LOAD',
      className: 'filepond--action-abort-item-load',
      align: 'LOAD_INDICATOR_POSITION' // right
    },
    RetryItemLoad: {
      label: 'GET_LABEL_BUTTON_RETRY_ITEM_LOAD',
      action: 'RETRY_ITEM_LOAD',
      icon: 'GET_ICON_RETRY',
      className: 'filepond--action-retry-item-load',
      align: 'BUTTON_PROCESS_ITEM_POSITION' // right
    },
    RemoveItem: {
      label: 'GET_LABEL_BUTTON_REMOVE_ITEM',
      action: 'REQUEST_REMOVE_ITEM',
      icon: 'GET_ICON_REMOVE',
      className: 'filepond--action-remove-item',
      align: 'BUTTON_REMOVE_ITEM_POSITION' // left
    },
    ProcessItem: {
      label: 'GET_LABEL_BUTTON_PROCESS_ITEM',
      action: 'REQUEST_ITEM_PROCESSING',
      icon: 'GET_ICON_PROCESS',
      className: 'filepond--action-process-item',
      align: 'BUTTON_PROCESS_ITEM_POSITION' // right
    },
    AbortItemProcessing: {
      label: 'GET_LABEL_BUTTON_ABORT_ITEM_PROCESSING',
      action: 'ABORT_ITEM_PROCESSING',
      className: 'filepond--action-abort-item-processing',
      align: 'BUTTON_PROCESS_ITEM_POSITION' // right
    },
    RetryItemProcessing: {
      label: 'GET_LABEL_BUTTON_RETRY_ITEM_PROCESSING',
      action: 'RETRY_ITEM_PROCESSING',
      icon: 'GET_ICON_RETRY',
      className: 'filepond--action-retry-item-processing',
      align: 'BUTTON_PROCESS_ITEM_POSITION' // right
    },
    RevertItemProcessing: {
      label: 'GET_LABEL_BUTTON_UNDO_ITEM_PROCESSING',
      action: 'REQUEST_REVERT_ITEM_PROCESSING',
      icon: 'GET_ICON_UNDO',
      className: 'filepond--action-revert-item-processing',
      align: 'BUTTON_PROCESS_ITEM_POSITION' // right
    }
  };

  // make a list of buttons, we can then remove buttons from this list if they're disabled
  var ButtonKeys = [];
  forin(Buttons, function(key) {
    ButtonKeys.push(key);
  });

  var calculateFileInfoOffset = function calculateFileInfoOffset(root) {
    var buttonRect = root.ref.buttonRemoveItem.rect.element;
    return buttonRect.hidden ? null : buttonRect.width + buttonRect.left;
  };

  // Force on full pixels so text stays crips
  var calculateFileVerticalCenterOffset = function calculateFileVerticalCenterOffset(
    root
  ) {
    return Math.floor(root.ref.buttonRemoveItem.rect.element.height / 4);
  };
  var calculateFileHorizontalCenterOffset = function calculateFileHorizontalCenterOffset(
    root
  ) {
    return Math.floor(root.ref.buttonRemoveItem.rect.element.left / 2);
  };

  var getLoadIndicatorAlignment = function getLoadIndicatorAlignment(root) {
    return root.query('GET_STYLE_LOAD_INDICATOR_POSITION');
  };
  var getProcessIndicatorAlignment = function getProcessIndicatorAlignment(
    root
  ) {
    return root.query('GET_STYLE_PROGRESS_INDICATOR_POSITION');
  };
  var getRemoveIndicatorAligment = function getRemoveIndicatorAligment(root) {
    return root.query('GET_STYLE_BUTTON_REMOVE_ITEM_POSITION');
  };

  var DefaultStyle = {
    buttonAbortItemLoad: { opacity: 0 },
    buttonRetryItemLoad: { opacity: 0 },
    buttonRemoveItem: { opacity: 0 },
    buttonProcessItem: { opacity: 0 },
    buttonAbortItemProcessing: { opacity: 0 },
    buttonRetryItemProcessing: { opacity: 0 },
    buttonRevertItemProcessing: { opacity: 0 },
    loadProgressIndicator: { opacity: 0, align: getLoadIndicatorAlignment },
    processProgressIndicator: {
      opacity: 0,
      align: getProcessIndicatorAlignment
    },
    processingCompleteIndicator: { opacity: 0, scaleX: 0.75, scaleY: 0.75 },
    info: { translateX: 0, translateY: 0, opacity: 0 },
    status: { translateX: 0, translateY: 0, opacity: 0 }
  };

  var IdleStyle = {
    buttonRemoveItem: { opacity: 1 },
    buttonProcessItem: { opacity: 1 },
    info: { translateX: calculateFileInfoOffset },
    status: { translateX: calculateFileInfoOffset }
  };

  var ProcessingStyle = {
    buttonAbortItemProcessing: { opacity: 1 },
    processProgressIndicator: { opacity: 1 },
    status: { opacity: 1 }
  };

  var StyleMap = {
    DID_THROW_ITEM_INVALID: {
      buttonRemoveItem: { opacity: 1 },
      info: { translateX: calculateFileInfoOffset },
      status: { translateX: calculateFileInfoOffset, opacity: 1 }
    },

    DID_START_ITEM_LOAD: {
      buttonAbortItemLoad: { opacity: 1 },
      loadProgressIndicator: { opacity: 1 },
      status: { opacity: 1 }
    },

    DID_THROW_ITEM_LOAD_ERROR: {
      buttonRetryItemLoad: { opacity: 1 },
      buttonRemoveItem: { opacity: 1 },
      info: { translateX: calculateFileInfoOffset },
      status: { opacity: 1 }
    },

    DID_START_ITEM_REMOVE: {
      processProgressIndicator: {
        opacity: 1,
        align: getRemoveIndicatorAligment
      },
      info: { translateX: calculateFileInfoOffset },
      status: { opacity: 0 }
    },

    DID_THROW_ITEM_REMOVE_ERROR: {
      processProgressIndicator: {
        opacity: 0,
        align: getRemoveIndicatorAligment
      },
      buttonRemoveItem: { opacity: 1 },
      info: { translateX: calculateFileInfoOffset },
      status: { opacity: 1, translateX: calculateFileInfoOffset }
    },

    DID_LOAD_ITEM: IdleStyle,
    DID_LOAD_LOCAL_ITEM: {
      buttonRemoveItem: { opacity: 1 },
      info: { translateX: calculateFileInfoOffset },
      status: { translateX: calculateFileInfoOffset }
    },

    DID_START_ITEM_PROCESSING: ProcessingStyle,
    DID_REQUEST_ITEM_PROCESSING: ProcessingStyle,
    DID_UPDATE_ITEM_PROCESS_PROGRESS: ProcessingStyle,
    DID_COMPLETE_ITEM_PROCESSING: {
      buttonRevertItemProcessing: { opacity: 1 },
      info: { opacity: 1 },
      status: { opacity: 1 }
    },

    DID_THROW_ITEM_PROCESSING_ERROR: {
      buttonRemoveItem: { opacity: 1 },
      buttonRetryItemProcessing: { opacity: 1 },
      status: { opacity: 1 },
      info: { translateX: calculateFileInfoOffset }
    },

    DID_THROW_ITEM_PROCESSING_REVERT_ERROR: {
      buttonRevertItemProcessing: { opacity: 1 },
      status: { opacity: 1 },
      info: { opacity: 1 }
    },

    DID_ABORT_ITEM_PROCESSING: {
      buttonRemoveItem: { opacity: 1 },
      buttonProcessItem: { opacity: 1 },
      info: { translateX: calculateFileInfoOffset },
      status: { opacity: 1 }
    },

    DID_REVERT_ITEM_PROCESSING: IdleStyle
  };

  // complete indicator view
  var processingCompleteIndicatorView = createView({
    create: function create(_ref) {
      var root = _ref.root;
      root.element.innerHTML = root.query('GET_ICON_DONE');
    },
    name: 'processing-complete-indicator',
    ignoreRect: true,
    mixins: {
      styles: ['scaleX', 'scaleY', 'opacity'],
      animations: {
        scaleX: 'spring',
        scaleY: 'spring',
        opacity: { type: 'tween', duration: 250 }
      }
    }
  });

  /**
   * Creates the file view
   */
  var create$4 = function create(_ref2) {
    var root = _ref2.root,
      props = _ref2.props;
    var id = props.id;

    // allow reverting upload
    var allowRevert = root.query('GET_ALLOW_REVERT');

    // is instant uploading, need this to determine the icon of the undo button
    var instantUpload = root.query('GET_INSTANT_UPLOAD');

    // is async set up
    var isAsync = root.query('IS_ASYNC');

    // enabled buttons array
    var enabledButtons = isAsync
      ? ButtonKeys.concat()
      : ButtonKeys.filter(function(key) {
          return !/Process/.test(key);
        });

    // remove last button (revert) if not allowed
    if (isAsync && !allowRevert) {
      enabledButtons.splice(-1, 1);
      var map = StyleMap['DID_COMPLETE_ITEM_PROCESSING'];
      map.info.translateX = calculateFileHorizontalCenterOffset;
      map.info.translateY = calculateFileVerticalCenterOffset;
      map.status.translateY = calculateFileVerticalCenterOffset;
      map.processingCompleteIndicator = { opacity: 1, scaleX: 1, scaleY: 1 };
    }

    // update icon and label for revert button when instant uploading
    if (instantUpload && allowRevert) {
      Buttons['RevertItemProcessing'].label = 'GET_LABEL_BUTTON_REMOVE_ITEM';
      Buttons['RevertItemProcessing'].icon = 'GET_ICON_REMOVE';
    }

    // create the button views
    forin(Buttons, function(key, definition) {
      // create button
      var buttonView = root.createChildView(fileActionButton, {
        label: root.query(definition.label),
        icon: root.query(definition.icon),
        opacity: 0
      });

      // should be appended?
      if (enabledButtons.includes(key)) {
        root.appendChildView(buttonView);
      }

      // add position attribute
      buttonView.element.dataset.align = root.query(
        'GET_STYLE_' + definition.align
      );

      // add class
      buttonView.element.classList.add(definition.className);

      // handle interactions
      buttonView.on('click', function(e) {
        e.stopPropagation();
        root.dispatch(definition.action, { query: id });
      });

      // set reference
      root.ref['button' + key] = buttonView;
    });

    // create file info view
    root.ref.info = root.appendChildView(
      root.createChildView(fileInfo, { id: id })
    );

    // create file status view
    root.ref.status = root.appendChildView(
      root.createChildView(fileStatus, { id: id })
    );

    // checkmark
    root.ref.processingCompleteIndicator = root.appendChildView(
      root.createChildView(processingCompleteIndicatorView)
    );
    root.ref.processingCompleteIndicator.element.dataset.align = root.query(
      'GET_STYLE_BUTTON_PROCESS_ITEM_POSITION'
    );

    // add progress indicators
    var loadIndicatorView = root.appendChildView(
      root.createChildView(progressIndicator, {
        opacity: 0,
        align: root.query('GET_STYLE_LOAD_INDICATOR_POSITION')
      })
    );

    loadIndicatorView.element.classList.add('filepond--load-indicator');
    root.ref.loadProgressIndicator = loadIndicatorView;

    var progressIndicatorView = root.appendChildView(
      root.createChildView(progressIndicator, {
        opacity: 0,
        align: root.query('GET_STYLE_PROGRESS_INDICATOR_POSITION')
      })
    );

    progressIndicatorView.element.classList.add('filepond--process-indicator');
    root.ref.processProgressIndicator = progressIndicatorView;

    // current active styles
    root.ref.activeStyles = [];
  };

  var write$2 = function write(_ref3) {
    var root = _ref3.root,
      actions = _ref3.actions,
      props = _ref3.props;

    // route actions
    route({ root: root, actions: actions, props: props });

    // select last state change action
    var action = actions
      .concat()
      .filter(function(action) {
        return /^DID_/.test(action.type);
      })
      .reverse()
      .find(function(action) {
        return StyleMap[action.type];
      });

    // a new action happened, let's get the matching styles
    if (action) {
      // define new active styles
      root.ref.activeStyles = [];

      var stylesToApply = StyleMap[action.type];
      forin(DefaultStyle, function(name, defaultStyles) {
        // get reference to control
        var control = root.ref[name];

        // loop over all styles for this control
        forin(defaultStyles, function(key, defaultValue) {
          var value =
            stylesToApply[name] &&
            typeof stylesToApply[name][key] !== 'undefined'
              ? stylesToApply[name][key]
              : defaultValue;
          root.ref.activeStyles.push({
            control: control,
            key: key,
            value: value
          });
        });
      });
    }

    // apply active styles to element
    root.ref.activeStyles.forEach(function(_ref4) {
      var control = _ref4.control,
        key = _ref4.key,
        value = _ref4.value;

      control[key] = typeof value === 'function' ? value(root) : value;
    });
  };

  var route = createRoute({
    DID_SET_LABEL_BUTTON_ABORT_ITEM_PROCESSING: function DID_SET_LABEL_BUTTON_ABORT_ITEM_PROCESSING(
      _ref5
    ) {
      var root = _ref5.root,
        action = _ref5.action;
      root.ref.buttonAbortItemProcessing.label = action.value;
    },
    DID_SET_LABEL_BUTTON_ABORT_ITEM_LOAD: function DID_SET_LABEL_BUTTON_ABORT_ITEM_LOAD(
      _ref6
    ) {
      var root = _ref6.root,
        action = _ref6.action;
      root.ref.buttonAbortItemLoad.label = action.value;
    },
    DID_SET_LABEL_BUTTON_ABORT_ITEM_REMOVAL: function DID_SET_LABEL_BUTTON_ABORT_ITEM_REMOVAL(
      _ref7
    ) {
      var root = _ref7.root,
        action = _ref7.action;
      root.ref.buttonAbortItemRemoval.label = action.value;
    },
    DID_REQUEST_ITEM_PROCESSING: function DID_REQUEST_ITEM_PROCESSING(_ref8) {
      var root = _ref8.root;
      root.ref.processProgressIndicator.spin = true;
      root.ref.processProgressIndicator.progress = 0;
    },
    DID_START_ITEM_LOAD: function DID_START_ITEM_LOAD(_ref9) {
      var root = _ref9.root;
      root.ref.loadProgressIndicator.spin = true;
      root.ref.loadProgressIndicator.progress = 0;
    },
    DID_START_ITEM_REMOVE: function DID_START_ITEM_REMOVE(_ref10) {
      var root = _ref10.root;
      root.ref.processProgressIndicator.spin = true;
      root.ref.processProgressIndicator.progress = 0;
    },
    DID_UPDATE_ITEM_LOAD_PROGRESS: function DID_UPDATE_ITEM_LOAD_PROGRESS(
      _ref11
    ) {
      var root = _ref11.root,
        action = _ref11.action;
      root.ref.loadProgressIndicator.spin = false;
      root.ref.loadProgressIndicator.progress = action.progress;
    },
    DID_UPDATE_ITEM_PROCESS_PROGRESS: function DID_UPDATE_ITEM_PROCESS_PROGRESS(
      _ref12
    ) {
      var root = _ref12.root,
        action = _ref12.action;
      root.ref.processProgressIndicator.spin = false;
      root.ref.processProgressIndicator.progress = action.progress;
    }
  });

  var file = createView({
    create: create$4,
    write: write$2,
    didCreateView: function didCreateView(root) {
      applyFilters('CREATE_VIEW', Object.assign({}, root, { view: root }));
    },
    name: 'file'
  });

  /**
   * Creates the file view
   */
  var create$5 = function create(_ref) {
    var root = _ref.root,
      props = _ref.props;

    // filename
    root.ref.fileName = createElement$1('legend');
    root.appendChild(root.ref.fileName);

    // file appended
    root.ref.file = root.appendChildView(
      root.createChildView(file, { id: props.id })
    );

    // create data container
    var dataContainer = createElement$1('input');
    dataContainer.type = 'hidden';
    dataContainer.name = root.query('GET_NAME');
    dataContainer.disabled = root.query('GET_DISABLED');
    root.ref.data = dataContainer;
    root.appendChild(dataContainer);
  };

  var didSetDisabled = function didSetDisabled(_ref2) {
    var root = _ref2.root;
    root.ref.data.disabled = root.query('GET_DISABLED');
  };

  /**
   * Data storage
   */
  var didLoadItem = function didLoadItem(_ref3) {
    var root = _ref3.root,
      action = _ref3.action,
      props = _ref3.props;
    root.ref.data.value = action.serverFileReference;

    // updates the legend of the fieldset so screenreaders can better group buttons
    text(
      root.ref.fileName,
      formatFilename(root.query('GET_ITEM_NAME', props.id))
    );
  };

  var didRemoveItem = function didRemoveItem(_ref4) {
    var root = _ref4.root;
    root.ref.data.removeAttribute('value');
  };

  var didCompleteItemProcessing$1 = function didCompleteItemProcessing(_ref5) {
    var root = _ref5.root,
      action = _ref5.action;
    root.ref.data.value = action.serverFileReference;
  };

  var didRevertItemProcessing = function didRevertItemProcessing(_ref6) {
    var root = _ref6.root;
    root.ref.data.removeAttribute('value');
  };

  var fileWrapper = createView({
    create: create$5,
    ignoreRect: true,
    write: createRoute({
      DID_SET_DISABLED: didSetDisabled,
      DID_LOAD_ITEM: didLoadItem,
      DID_REMOVE_ITEM: didRemoveItem,
      DID_COMPLETE_ITEM_PROCESSING: didCompleteItemProcessing$1,
      DID_REVERT_ITEM_PROCESSING: didRevertItemProcessing
    }),

    didCreateView: function didCreateView(root) {
      applyFilters('CREATE_VIEW', Object.assign({}, root, { view: root }));
    },
    tag: 'fieldset',
    name: 'file-wrapper'
  });

  var PANEL_SPRING_PROPS = { type: 'spring', damping: 0.6, mass: 7 };

  var create$6 = function create(_ref) {
    var root = _ref.root,
      props = _ref.props;
    [
      {
        name: 'top'
      },

      {
        name: 'center',
        props: {
          translateY: null,
          scaleY: null
        },

        mixins: {
          animations: {
            scaleY: PANEL_SPRING_PROPS
          },

          styles: ['translateY', 'scaleY']
        }
      },

      {
        name: 'bottom',
        props: {
          translateY: null
        },

        mixins: {
          animations: {
            translateY: PANEL_SPRING_PROPS
          },

          styles: ['translateY']
        }
      }
    ].forEach(function(section) {
      createSection(root, section, props.name);
    });

    root.element.classList.add('filepond--' + props.name);

    root.ref.scalable = null;
  };

  var createSection = function createSection(root, section, className) {
    var viewConstructor = createView({
      name: 'panel-' + section.name + ' filepond--' + className,
      mixins: section.mixins,
      ignoreRectUpdate: true
    });

    var view = root.createChildView(viewConstructor, section.props);

    root.ref[section.name] = root.appendChildView(view);
  };

  var write$3 = function write(_ref2) {
    var root = _ref2.root,
      props = _ref2.props;

    // update scalable state
    if (root.ref.scalable === null || props.scalable !== root.ref.scalable) {
      root.ref.scalable = isBoolean(props.scalable) ? props.scalable : true;
      root.element.dataset.scalable = root.ref.scalable;
    }

    // no height, can't set
    if (!props.height) return;

    // get child rects
    var topRect = root.ref.top.rect.element;
    var bottomRect = root.ref.bottom.rect.element;

    // make sure height never is smaller than bottom and top seciton heights combined (will probably never happen, but who knows)
    var height = Math.max(topRect.height + bottomRect.height, props.height);

    // offset center part
    root.ref.center.translateY = topRect.height;

    // scale center part
    // use math ceil to prevent transparent lines because of rounding errors
    root.ref.center.scaleY =
      (height - topRect.height - bottomRect.height) / 100;

    // offset bottom part
    root.ref.bottom.translateY = height - bottomRect.height;
  };

  var panel = createView({
    name: 'panel',
    write: write$3,
    create: create$6,
    ignoreRect: true,
    mixins: {
      apis: ['height', 'scalable']
    }
  });

  var ITEM_TRANSLATE_SPRING = {
    type: 'spring',
    stiffness: 0.75,
    damping: 0.45,
    mass: 10
  };

  var ITEM_SCALE_SPRING = 'spring';

  /**
   * Creates the file view
   */
  var create$7 = function create(_ref) {
    var root = _ref.root,
      props = _ref.props;

    // select
    root.ref.handleClick = function() {
      return root.dispatch('DID_ACTIVATE_ITEM', { id: props.id });
    };

    // set id
    root.element.id = 'filepond--item-' + props.id;
    root.element.addEventListener('click', root.ref.handleClick);

    // file view
    root.ref.container = root.appendChildView(
      root.createChildView(fileWrapper, { id: props.id })
    );

    // file panel
    root.ref.panel = root.appendChildView(
      root.createChildView(panel, { name: 'item-panel' })
    );

    // default start height
    root.ref.panel.height = null;

    // by default not marked for removal
    props.markedForRemoval = false;
  };

  var StateMap = {
    DID_START_ITEM_LOAD: 'busy',
    DID_UPDATE_ITEM_LOAD_PROGRESS: 'loading',
    DID_THROW_ITEM_INVALID: 'load-invalid',
    DID_THROW_ITEM_LOAD_ERROR: 'load-error',
    DID_LOAD_ITEM: 'idle',
    DID_THROW_ITEM_REMOVE_ERROR: 'remove-error',
    DID_START_ITEM_REMOVE: 'busy',
    DID_START_ITEM_PROCESSING: 'busy',
    DID_REQUEST_ITEM_PROCESSING: 'busy',
    DID_UPDATE_ITEM_PROCESS_PROGRESS: 'processing',
    DID_COMPLETE_ITEM_PROCESSING: 'processing-complete',
    DID_THROW_ITEM_PROCESSING_ERROR: 'processing-error',
    DID_THROW_ITEM_PROCESSING_REVERT_ERROR: 'processing-revert-error',
    DID_ABORT_ITEM_PROCESSING: 'cancelled',
    DID_REVERT_ITEM_PROCESSING: 'idle'
  };

  var route$1 = createRoute({
    DID_UPDATE_PANEL_HEIGHT: function DID_UPDATE_PANEL_HEIGHT(_ref2) {
      var root = _ref2.root,
        action = _ref2.action;
      var height = action.height;
      root.height = height;
    }
  });

  var write$4 = function write(_ref3) {
    var root = _ref3.root,
      actions = _ref3.actions,
      props = _ref3.props,
      shouldOptimize = _ref3.shouldOptimize;

    // select last state change action
    var action = actions
      .concat()
      .filter(function(action) {
        return /^DID_/.test(action.type);
      })
      .reverse()
      .find(function(action) {
        return StateMap[action.type];
      });

    // no need to set same state twice
    if (action && action.type !== props.currentState) {
      // set current state
      props.currentState = action.type;

      // set state
      root.element.dataset.filepondItemState =
        StateMap[props.currentState] || '';
    }

    // route actions
    var aspectRatio =
      root.query('GET_ITEM_PANEL_ASPECT_RATIO') ||
      root.query('GET_PANEL_ASPECT_RATIO');
    if (!aspectRatio) {
      route$1({ root: root, actions: actions, props: props });
      if (!root.height && root.ref.container.rect.element.height > 0) {
        root.height = root.ref.container.rect.element.height;
      }
    } else if (!shouldOptimize) {
      root.height = root.rect.element.width * aspectRatio;
    }

    // sync panel height with item height
    if (shouldOptimize) {
      root.ref.panel.height = null;
    }

    root.ref.panel.height = root.height;
  };

  var item = createView({
    create: create$7,
    write: write$4,
    destroy: function destroy(_ref4) {
      var root = _ref4.root,
        props = _ref4.props;
      root.element.removeEventListener('click', root.ref.handleClick);
      root.dispatch('RELEASE_ITEM', { query: props.id });
    },
    tag: 'li',
    name: 'item',
    mixins: {
      apis: ['id', 'interactionMethod', 'markedForRemoval', 'spawnDate'],
      styles: [
        'translateX',
        'translateY',
        'scaleX',
        'scaleY',
        'opacity',
        'height'
      ],

      animations: {
        scaleX: ITEM_SCALE_SPRING,
        scaleY: ITEM_SCALE_SPRING,
        translateX: ITEM_TRANSLATE_SPRING,
        translateY: ITEM_TRANSLATE_SPRING,
        opacity: { type: 'tween', duration: 150 }
      }
    }
  });

  var getItemIndexByPosition = function getItemIndexByPosition(
    view,
    positionInView
  ) {
    if (!positionInView) return;

    var horizontalSpace = view.rect.element.width;
    var children = view.childViews;
    var l = children.length;
    var last = null;

    // -1, don't move items to accomodate (either add to top or bottom)
    if (l === 0 || positionInView.top < children[0].rect.element.top) return -1;

    // let's get the item width
    var item = children[0];
    var itemRect = item.rect.element;
    var itemHorizontalMargin = itemRect.marginLeft + itemRect.marginRight;
    var itemWidth = itemRect.width + itemHorizontalMargin;
    var itemsPerRow = Math.round(horizontalSpace / itemWidth);

    // stack
    if (itemsPerRow === 1) {
      for (var index = 0; index < l; index++) {
        var child = children[index];
        var childMid = child.rect.outer.top + child.rect.element.height * 0.5;
        if (positionInView.top < childMid) {
          return index;
        }
      }
      return l;
    }

    // grid
    var itemVerticalMargin = itemRect.marginTop + itemRect.marginBottom;
    var itemHeight = itemRect.height + itemVerticalMargin;
    for (var _index = 0; _index < l; _index++) {
      var indexX = _index % itemsPerRow;
      var indexY = Math.floor(_index / itemsPerRow);

      var offsetX = indexX * itemWidth;
      var offsetY = indexY * itemHeight;

      var itemTop = offsetY - itemRect.marginTop;
      var itemRight = offsetX + itemWidth;
      var itemBottom = offsetY + itemHeight + itemRect.marginBottom;

      if (positionInView.top < itemBottom && positionInView.top > itemTop) {
        if (positionInView.left < itemRight) {
          return _index;
        } else if (_index !== l - 1) {
          last = _index;
        } else {
          last = null;
        }
      }
    }

    if (last !== null) {
      return last;
    }

    return l;
  };

  var create$8 = function create(_ref) {
    var root = _ref.root;
    // need to set role to list as otherwise it won't be read as a list by VoiceOver
    attr(root.element, 'role', 'list');

    root.ref.lastItemSpanwDate = Date.now();
  };

  /**
   * Inserts a new item
   * @param root
   * @param action
   */
  var addItemView = function addItemView(_ref2) {
    var root = _ref2.root,
      action = _ref2.action;
    var id = action.id,
      index = action.index,
      interactionMethod = action.interactionMethod;

    root.ref.addIndex = index;

    var now = Date.now();
    var spawnDate = now;
    var opacity = 1;

    if (interactionMethod !== InteractionMethod.NONE) {
      opacity = 0;
      var cooldown = root.query('GET_ITEM_INSERT_INTERVAL');
      var dist = now - root.ref.lastItemSpanwDate;
      spawnDate = dist < cooldown ? now + (cooldown - dist) : now;
    }

    root.ref.lastItemSpanwDate = spawnDate;

    root.appendChildView(
      root.createChildView(
        // view type
        item,

        // props
        {
          spawnDate: spawnDate,
          id: id,
          opacity: opacity,
          interactionMethod: interactionMethod
        }
      ),

      index
    );
  };

  var moveItem = function moveItem(item, x, y) {
    var vx =
      arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
    var vy =
      arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 1;

    item.translateX = x;
    item.translateY = y;

    if (Date.now() > item.spawnDate) {
      // reveal element
      if (item.opacity === 0) {
        introItemView(item, x, y, vx, vy);
      }

      // make sure is default scale every frame
      item.scaleX = 1;
      item.scaleY = 1;
      item.opacity = 1;
    }
  };

  var introItemView = function introItemView(item, x, y, vx, vy) {
    if (item.interactionMethod === InteractionMethod.NONE) {
      item.translateX = null;
      item.translateX = x;
      item.translateY = null;
      item.translateY = y;
    } else if (item.interactionMethod === InteractionMethod.DROP) {
      item.translateX = null;
      item.translateX = x - vx * 20;

      item.translateY = null;
      item.translateY = y - vy * 10;

      item.scaleX = 0.8;
      item.scaleY = 0.8;
    } else if (item.interactionMethod === InteractionMethod.BROWSE) {
      item.translateY = null;
      item.translateY = y - 30;
    } else if (item.interactionMethod === InteractionMethod.API) {
      item.translateX = null;
      item.translateX = x - 30;
      item.translateY = null;
    }
  };

  /**
   * Removes an existing item
   * @param root
   * @param action
   */
  var removeItemView = function removeItemView(_ref3) {
    var root = _ref3.root,
      action = _ref3.action;
    var id = action.id;

    // get the view matching the given id
    var view = root.childViews.find(function(child) {
      return child.id === id;
    });

    // if no view found, exit
    if (!view) {
      return;
    }

    // animate view out of view
    view.scaleX = 0.9;
    view.scaleY = 0.9;
    view.opacity = 0;

    // mark for removal
    view.markedForRemoval = true;
  };

  /**
   * Setup action routes
   */
  var route$2 = createRoute({
    DID_ADD_ITEM: addItemView,
    DID_REMOVE_ITEM: removeItemView
  });

  /**
   * Write to view
   * @param root
   * @param actions
   * @param props
   */
  var write$5 = function write(_ref4) {
    var root = _ref4.root,
      props = _ref4.props,
      actions = _ref4.actions,
      shouldOptimize = _ref4.shouldOptimize;

    // route actions
    route$2({ root: root, props: props, actions: actions });
    var dragCoordinates = props.dragCoordinates;

    // get index
    var dragIndex = dragCoordinates
      ? getItemIndexByPosition(root, dragCoordinates)
      : null;

    // available space on horizontal axis
    var horizontalSpace = root.rect.element.width;

    // only draw children that have dimensions
    var visibleChildren = root.childViews.filter(function(child) {
      return child.rect.element.height;
    });

    // sort based on current active items
    var children = root
      .query('GET_ACTIVE_ITEMS')
      .map(function(item) {
        return visibleChildren.find(function(child) {
          return child.id === item.id;
        });
      })
      .filter(function(item) {
        return item;
      });

    // add index is used to reserve the dropped/added item index till the actual item is rendered
    var addIndex = root.ref.addIndex || null;

    // add index no longer needed till possibly next draw
    root.ref.addIndex = null;

    var dragIndexOffset = 0;
    var removeIndexOffset = 0;
    var addIndexOffset = 0;

    if (children.length === 0) return;

    var childRect = children[0].rect.element;
    var itemVerticalMargin = childRect.marginTop + childRect.marginBottom;
    var itemHorizontalMargin = childRect.marginLeft + childRect.marginRight;
    var itemWidth = childRect.width + itemHorizontalMargin;
    var itemHeight = childRect.height + itemVerticalMargin;
    var itemsPerRow = Math.round(horizontalSpace / itemWidth);

    // stack
    if (itemsPerRow === 1) {
      var offsetY = 0;
      var dragOffset = 0;

      children.forEach(function(child, index) {
        if (dragIndex) {
          var dist = index - dragIndex;
          if (dist === -2) {
            dragOffset = -itemVerticalMargin * 0.25;
          } else if (dist === -1) {
            dragOffset = -itemVerticalMargin * 0.75;
          } else if (dist === 0) {
            dragOffset = itemVerticalMargin * 0.75;
          } else if (dist === 1) {
            dragOffset = itemVerticalMargin * 0.25;
          } else {
            dragOffset = 0;
          }
        }

        if (shouldOptimize) {
          child.translateX = null;
          child.translateY = null;
        }

        if (!child.markedForRemoval) {
          moveItem(child, 0, offsetY + dragOffset);
        }

        var itemHeight = child.rect.element.height + itemVerticalMargin;

        var visualHeight =
          itemHeight * (child.markedForRemoval ? child.opacity : 1);

        offsetY += visualHeight;
      });
    }
    // grid
    else {
      var prevX = 0;
      var prevY = 0;

      children.forEach(function(child, index) {
        if (index === dragIndex) {
          dragIndexOffset = 1;
        }

        if (index === addIndex) {
          addIndexOffset += 1;
        }

        if (child.markedForRemoval && child.opacity < 0.5) {
          removeIndexOffset -= 1;
        }

        var visualIndex =
          index + addIndexOffset + dragIndexOffset + removeIndexOffset;

        var indexX = visualIndex % itemsPerRow;
        var indexY = Math.floor(visualIndex / itemsPerRow);

        var offsetX = indexX * itemWidth;
        var offsetY = indexY * itemHeight;

        var vectorX = Math.sign(offsetX - prevX);
        var vectorY = Math.sign(offsetY - prevY);

        prevX = offsetX;
        prevY = offsetY;

        if (child.markedForRemoval) return;

        if (shouldOptimize) {
          child.translateX = null;
          child.translateY = null;
        }

        moveItem(child, offsetX, offsetY, vectorX, vectorY);
      });
    }
  };

  /**
   * Filters actions that are meant specifically for a certain child of the list
   * @param child
   * @param actions
   */
  var filterSetItemActions = function filterSetItemActions(child, actions) {
    return actions.filter(function(action) {
      // if action has an id, filter out actions that don't have this child id
      if (action.data && action.data.id) {
        return child.id === action.data.id;
      }

      // allow all other actions
      return true;
    });
  };

  var list = createView({
    create: create$8,
    write: write$5,
    tag: 'ul',
    name: 'list',
    didWriteView: function didWriteView(_ref5) {
      var root = _ref5.root;
      root.childViews
        .filter(function(view) {
          return view.markedForRemoval && view.opacity === 0 && view.resting;
        })
        .forEach(function(view) {
          view._destroy();
          root.removeChildView(view);
        });
    },
    filterFrameActionsForChild: filterSetItemActions,
    mixins: {
      apis: ['dragCoordinates']
    }
  });

  var create$9 = function create(_ref) {
    var root = _ref.root,
      props = _ref.props;
    root.ref.list = root.appendChildView(root.createChildView(list));
    props.dragCoordinates = null;
    props.overflowing = false;
  };

  var storeDragCoordinates = function storeDragCoordinates(_ref2) {
    var root = _ref2.root,
      props = _ref2.props,
      action = _ref2.action;
    if (!root.query('GET_ITEM_INSERT_LOCATION_FREEDOM')) return;
    props.dragCoordinates = {
      left: action.position.scopeLeft - root.ref.list.rect.element.left,
      top:
        action.position.scopeTop -
        (root.rect.outer.top +
          root.rect.element.marginTop +
          root.rect.element.scrollTop)
    };
  };

  var clearDragCoordinates = function clearDragCoordinates(_ref3) {
    var props = _ref3.props;
    props.dragCoordinates = null;
  };

  var route$3 = createRoute({
    DID_DRAG: storeDragCoordinates,
    DID_END_DRAG: clearDragCoordinates
  });

  var write$6 = function write(_ref4) {
    var root = _ref4.root,
      props = _ref4.props,
      actions = _ref4.actions;

    // route actions
    route$3({ root: root, props: props, actions: actions });

    // current drag position
    root.ref.list.dragCoordinates = props.dragCoordinates;

    // if currently overflowing but no longer received overflow
    if (props.overflowing && !props.overflow) {
      props.overflowing = false;

      // reset overflow state
      root.element.dataset.state = '';
      root.height = null;
    }

    // if is not overflowing currently but does receive overflow value
    if (props.overflow) {
      var newHeight = Math.round(props.overflow);
      if (newHeight !== root.height) {
        props.overflowing = true;
        root.element.dataset.state = 'overflow';
        root.height = newHeight;
      }
    }
  };

  var listScroller = createView({
    create: create$9,
    write: write$6,
    name: 'list-scroller',
    mixins: {
      apis: ['overflow', 'dragCoordinates'],
      styles: ['height', 'translateY'],
      animations: {
        translateY: 'spring'
      }
    }
  });

  var attrToggle = function attrToggle(element, name, state) {
    var enabledValue =
      arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '';
    if (state) {
      attr(element, name, enabledValue);
    } else {
      element.removeAttribute(name);
    }
  };

  var resetFileInput = function resetFileInput(input) {
    // no value, no need to reset
    if (!input || input.value === '') {
      return;
    }

    try {
      // for modern browsers
      input.value = '';
    } catch (err) {}

    // for IE10
    if (input.value) {
      // quickly append input to temp form and reset form
      var form = createElement$1('form');
      var parentNode = input.parentNode;
      var ref = input.nextSibling;
      form.appendChild(input);
      form.reset();

      // re-inject input where it originally was
      if (ref) {
        parentNode.insertBefore(input, ref);
      } else {
        parentNode.appendChild(input);
      }
    }
  };

  var create$a = function create(_ref) {
    var root = _ref.root,
      props = _ref.props;

    // set id so can be referenced from outside labels
    root.element.id = 'filepond--browser-' + props.id;

    // set name of element (is removed when a value is set)
    attr(root.element, 'name', root.query('GET_NAME'));

    // we have to link this element to the status element
    attr(root.element, 'aria-controls', 'filepond--assistant-' + props.id);

    // set label, we use labelled by as otherwise the screenreader does not read the "browse" text in the label (as it has tabindex: 0)
    attr(root.element, 'aria-labelledby', 'filepond--drop-label-' + props.id);

    // handle changes to the input field
    root.ref.handleChange = function(e) {
      if (!root.element.value) {
        return;
      }

      // extract files
      var files = Array.from(root.element.files);

      // we add a little delay so the OS file select window can move out of the way before we add our file
      setTimeout(function() {
        // load files
        props.onload(files);

        // reset input, it's just for exposing a method to drop files, should not retain any state
        resetFileInput(root.element);
      }, 250);
    };
    root.element.addEventListener('change', root.ref.handleChange);
  };

  var setAcceptedFileTypes = function setAcceptedFileTypes(_ref2) {
    var root = _ref2.root,
      action = _ref2.action;
    attrToggle(
      root.element,
      'accept',
      !!action.value,
      action.value ? action.value.join(',') : ''
    );
  };

  var toggleAllowMultiple = function toggleAllowMultiple(_ref3) {
    var root = _ref3.root,
      action = _ref3.action;
    attrToggle(root.element, 'multiple', action.value);
  };

  var toggleDisabled = function toggleDisabled(_ref4) {
    var root = _ref4.root,
      action = _ref4.action;
    var isDisabled = root.query('GET_DISABLED');
    var doesAllowBrowse = root.query('GET_ALLOW_BROWSE');
    var disableField = isDisabled || !doesAllowBrowse;
    attrToggle(root.element, 'disabled', disableField);
  };

  var toggleRequired = function toggleRequired(_ref5) {
    var root = _ref5.root,
      action = _ref5.action;
    // want to remove required, always possible
    if (!action.value) {
      attrToggle(root.element, 'required', false);
    }
    // if want to make required, only possible when zero items
    else if (root.query('GET_TOTAL_ITEMS') === 0) {
      attrToggle(root.element, 'required', true);
    }
  };

  var setCaptureMethod = function setCaptureMethod(_ref6) {
    var root = _ref6.root,
      action = _ref6.action;
    attrToggle(
      root.element,
      'capture',
      !!action.value,
      action.value === true ? '' : action.value
    );
  };

  var updateRequiredStatus = function updateRequiredStatus(_ref7) {
    var root = _ref7.root;
    var element = root.element;
    // always remove the required attribute when more than zero items
    if (root.query('GET_TOTAL_ITEMS') > 0) {
      attrToggle(element, 'required', false);
      attrToggle(element, 'name', false);
    } else {
      // add name attribute
      attrToggle(element, 'name', true, root.query('GET_NAME'));

      // remove any validation messages
      var shouldCheckValidity = root.query('GET_CHECK_VALIDITY');
      if (shouldCheckValidity) {
        element.setCustomValidity('');
      }

      // we only add required if the field has been deemed required
      if (root.query('GET_REQUIRED')) {
        attrToggle(element, 'required', true);
      }
    }
  };

  var updateFieldValidityStatus = function updateFieldValidityStatus(_ref8) {
    var root = _ref8.root;
    var shouldCheckValidity = root.query('GET_CHECK_VALIDITY');
    if (!shouldCheckValidity) return;
    root.element.setCustomValidity(root.query('GET_LABEL_INVALID_FIELD'));
  };

  var browser = createView({
    tag: 'input',
    name: 'browser',
    ignoreRect: true,
    ignoreRectUpdate: true,
    attributes: {
      type: 'file'
    },

    create: create$a,
    destroy: function destroy(_ref9) {
      var root = _ref9.root;
      root.element.removeEventListener('change', root.ref.handleChange);
    },
    write: createRoute({
      DID_LOAD_ITEM: updateRequiredStatus,
      DID_REMOVE_ITEM: updateRequiredStatus,
      DID_THROW_ITEM_INVALID: updateFieldValidityStatus,

      DID_SET_DISABLED: toggleDisabled,
      DID_SET_ALLOW_BROWSE: toggleDisabled,
      DID_SET_ALLOW_MULTIPLE: toggleAllowMultiple,
      DID_SET_ACCEPTED_FILE_TYPES: setAcceptedFileTypes,
      DID_SET_CAPTURE_METHOD: setCaptureMethod,
      DID_SET_REQUIRED: toggleRequired
    })
  });

  var Key = {
    ENTER: 13,
    SPACE: 32
  };

  var create$b = function create(_ref) {
    var root = _ref.root,
      props = _ref.props;

    // create the label and link it to the file browser
    var label = createElement$1('label');
    attr(label, 'for', 'filepond--browser-' + props.id);

    // use for labeling file input (aria-labelledby on file input)
    attr(label, 'id', 'filepond--drop-label-' + props.id);

    // hide the label for screenreaders, the input element will read the contents of the label when it's focussed. If we don't set aria-hidden the screenreader will also navigate the contents of the label separately from the input.
    attr(label, 'aria-hidden', 'true');

    // handle keys
    label.addEventListener('keydown', function(e) {
      var isActivationKey = e.keyCode === Key.ENTER || e.keyCode === Key.SPACE;
      if (!isActivationKey) return;
      // stops from triggering the element a second time
      e.preventDefault();

      // click link (will then in turn activate file input)
      root.ref.label.click();
    });

    root.element.addEventListener('click', function(e) {
      var isLabelClick = e.target === label || label.contains(e.target);

      // don't want to click twice
      if (isLabelClick) return;

      // click link (will then in turn activate file input)
      root.ref.label.click();
    });

    // update
    updateLabelValue(label, props.caption);

    // add!
    root.appendChild(label);
    root.ref.label = label;
  };

  var updateLabelValue = function updateLabelValue(label, value) {
    label.innerHTML = value;
    var clickable = label.querySelector('.filepond--label-action');
    if (clickable) {
      attr(clickable, 'tabindex', '0');
    }
    return value;
  };

  var dropLabel = createView({
    name: 'drop-label',
    ignoreRect: true,
    create: create$b,
    write: createRoute({
      DID_SET_LABEL_IDLE: function DID_SET_LABEL_IDLE(_ref2) {
        var root = _ref2.root,
          action = _ref2.action;
        updateLabelValue(root.ref.label, action.value);
      }
    }),

    mixins: {
      styles: ['opacity', 'translateX', 'translateY'],
      animations: {
        opacity: { type: 'tween', duration: 150 },
        translateX: 'spring',
        translateY: 'spring'
      }
    }
  });

  var blob = createView({
    name: 'drip-blob',
    ignoreRect: true,
    mixins: {
      styles: ['translateX', 'translateY', 'scaleX', 'scaleY', 'opacity'],
      animations: {
        scaleX: 'spring',
        scaleY: 'spring',
        translateX: 'spring',
        translateY: 'spring',
        opacity: { type: 'tween', duration: 250 }
      }
    }
  });

  var addBlob = function addBlob(_ref) {
    var root = _ref.root;
    var centerX = root.rect.element.width * 0.5;
    var centerY = root.rect.element.height * 0.5;

    root.ref.blob = root.appendChildView(
      root.createChildView(blob, {
        opacity: 0,
        scaleX: 2.5,
        scaleY: 2.5,
        translateX: centerX,
        translateY: centerY
      })
    );
  };

  var moveBlob = function moveBlob(_ref2) {
    var root = _ref2.root,
      action = _ref2.action;
    if (!root.ref.blob) {
      addBlob({ root: root });
      return;
    }

    root.ref.blob.translateX = action.position.scopeLeft;
    root.ref.blob.translateY = action.position.scopeTop;
    root.ref.blob.scaleX = 1;
    root.ref.blob.scaleY = 1;
    root.ref.blob.opacity = 1;
  };

  var hideBlob = function hideBlob(_ref3) {
    var root = _ref3.root;
    if (!root.ref.blob) {
      return;
    }
    root.ref.blob.opacity = 0;
  };

  var explodeBlob = function explodeBlob(_ref4) {
    var root = _ref4.root;
    if (!root.ref.blob) {
      return;
    }
    root.ref.blob.scaleX = 2.5;
    root.ref.blob.scaleY = 2.5;
    root.ref.blob.opacity = 0;
  };

  var write$7 = function write(_ref5) {
    var root = _ref5.root,
      props = _ref5.props,
      actions = _ref5.actions;
    route$4({ root: root, props: props, actions: actions });
    var blob = root.ref.blob;

    if (actions.length === 0 && blob && blob.opacity === 0) {
      root.removeChildView(blob);
      root.ref.blob = null;
    }
  };

  var route$4 = createRoute({
    DID_DRAG: moveBlob,
    DID_DROP: explodeBlob,
    DID_END_DRAG: hideBlob
  });

  var drip = createView({
    ignoreRect: true,
    ignoreRectUpdate: true,
    name: 'drip',
    write: write$7
  });

  var getRootNode = function getRootNode(element) {
    return 'getRootNode' in element ? element.getRootNode() : document;
  };

  var images = ['jpg', 'jpeg', 'png', 'gif', 'bmp', 'webp', 'svg', 'tiff'];
  var text$1 = ['css', 'csv', 'html', 'txt'];
  var apps = ['rtf', 'pdf', 'json'];
  var map = {
    zip: 'zip|compressed',
    epub: 'application/epub+zip'
  };

  var guesstimateMimeType = function guesstimateMimeType() {
    var extension =
      arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    extension = extension.toLowerCase();
    if (images.includes(extension)) {
      return (
        'image/' +
        (extension === 'jpg'
          ? 'jpeg'
          : extension === 'svg'
          ? 'svg+xml'
          : extension)
      );
    }
    if (text$1.includes(extension)) {
      return 'text/' + extension;
    }
    return map[extension] || null;
  };

  var requestDataTransferItems = function requestDataTransferItems(
    dataTransfer
  ) {
    return new Promise(function(resolve, reject) {
      // try to get links from transfer, if found, we'll exit immidiately
      // as only one link can be dragged at once
      var links = getLinks(dataTransfer);
      if (links.length) {
        resolve(links);
        return;
      }

      // try to get files from the transfer
      getFiles(dataTransfer).then(resolve);
    });
  };

  /**
   * Extracts files from a DataTransfer object
   */
  var getFiles = function getFiles(dataTransfer) {
    return new Promise(function(resolve, reject) {
      // get the transfer items as promises
      var promisedFiles = (dataTransfer.items
        ? Array.from(dataTransfer.items)
        : []
      )
        // only keep file system items (files and directories)
        .filter(function(item) {
          return isFileSystemItem(item);
        })

        // map each item to promise
        .map(function(item) {
          return getFilesFromItem(item);
        });

      // if is empty, see if we can extract some info from the files property as a fallback
      if (!promisedFiles.length) {
        // TODO: test for directories (should not be allowed)
        // Use FileReader, problem is that the files property gets lost in the process

        resolve(dataTransfer.files ? Array.from(dataTransfer.files) : []);
        return;
      }

      // done!
      Promise.all(promisedFiles).then(function(returendFileGroups) {
        // flatten groups
        var files = [];
        returendFileGroups.forEach(function(group) {
          files.push.apply(files, group);
        });

        // done (filter out empty files)!
        resolve(
          files.filter(function(file) {
            return file;
          })
        );
      });
    });
  };

  var isFileSystemItem = function isFileSystemItem(item) {
    if (isEntry(item)) {
      var entry = getAsEntry(item);
      if (entry) {
        return entry.isFile || entry.isDirectory;
      }
    }
    return item.kind === 'file';
  };

  var getFilesFromItem = function getFilesFromItem(item) {
    return new Promise(function(resolve, reject) {
      if (isDirectoryEntry(item)) {
        getFilesInDirectory(getAsEntry(item)).then(resolve);
        return;
      }

      resolve([item.getAsFile()]);
    });
  };

  var getFilesInDirectory = function getFilesInDirectory(entry) {
    return new Promise(function(resolve, reject) {
      var files = [];

      // the total entries to read
      var totalFilesFound = 0;

      // the recursive function
      var readEntries = function readEntries(dirEntry) {
        var directoryReader = dirEntry.createReader();
        directoryReader.readEntries(function(entries) {
          entries.forEach(function(entry) {
            // recursively read more directories
            if (entry.isDirectory) {
              readEntries(entry);
            } else {
              // read as file
              totalFilesFound++;
              entry.file(function(file) {
                files.push(correctMissingFileType(file));

                if (totalFilesFound === files.length) {
                  resolve(files);
                }
              });
            }
          });
        });
      };

      // go!
      readEntries(entry);
    });
  };

  var correctMissingFileType = function correctMissingFileType(file) {
    if (file.type.length) return file;
    var date = file.lastModifiedDate;
    var name = file.name;
    file = file.slice(
      0,
      file.size,
      guesstimateMimeType(getExtensionFromFilename(file.name))
    );
    file.name = name;
    file.lastModifiedDate = date;
    return file;
  };

  var isDirectoryEntry = function isDirectoryEntry(item) {
    return isEntry(item) && (getAsEntry(item) || {}).isDirectory;
  };

  var isEntry = function isEntry(item) {
    return 'webkitGetAsEntry' in item;
  };

  var getAsEntry = function getAsEntry(item) {
    return item.webkitGetAsEntry();
  };

  /**
   * Extracts links from a DataTransfer object
   */
  var getLinks = function getLinks(dataTransfer) {
    var links = [];
    try {
      // look in meta data property
      links = getLinksFromTransferMetaData(dataTransfer);
      if (links.length) {
        return links;
      }
      links = getLinksFromTransferURLData(dataTransfer);
    } catch (e) {
      // nope nope nope (probably IE trouble)
    }
    return links;
  };

  var getLinksFromTransferURLData = function getLinksFromTransferURLData(
    dataTransfer
  ) {
    var data = dataTransfer.getData('url');
    if (typeof data === 'string' && data.length) {
      return [data];
    }
    return [];
  };

  var getLinksFromTransferMetaData = function getLinksFromTransferMetaData(
    dataTransfer
  ) {
    var data = dataTransfer.getData('text/html');
    if (typeof data === 'string' && data.length) {
      var matches = data.match(/src\s*=\s*"(.+?)"/);
      if (matches) {
        return [matches[1]];
      }
    }
    return [];
  };

  var dragNDropObservers = [];

  var eventPosition = function eventPosition(e) {
    return {
      pageLeft: e.pageX,
      pageTop: e.pageY,
      scopeLeft: e.offsetX || e.layerX,
      scopeTop: e.offsetY || e.layerY
    };
  };

  var createDragNDropClient = function createDragNDropClient(
    element,
    scopeToObserve,
    filterElement
  ) {
    var observer = getDragNDropObserver(scopeToObserve);

    var client = {
      element: element,
      filterElement: filterElement,
      state: null,
      ondrop: function ondrop() {},
      onenter: function onenter() {},
      ondrag: function ondrag() {},
      onexit: function onexit() {},
      onload: function onload() {},
      allowdrop: function allowdrop() {}
    };

    client.destroy = observer.addListener(client);

    return client;
  };

  var getDragNDropObserver = function getDragNDropObserver(element) {
    // see if already exists, if so, return
    var observer = dragNDropObservers.find(function(item) {
      return item.element === element;
    });
    if (observer) {
      return observer;
    }

    // create new observer, does not yet exist for this element
    var newObserver = createDragNDropObserver(element);
    dragNDropObservers.push(newObserver);
    return newObserver;
  };

  var createDragNDropObserver = function createDragNDropObserver(element) {
    var clients = [];

    var routes = {
      dragenter: dragenter,
      dragover: dragover,
      dragleave: dragleave,
      drop: drop
    };

    var handlers = {};

    forin(routes, function(event, createHandler) {
      handlers[event] = createHandler(element, clients);
      element.addEventListener(event, handlers[event], false);
    });

    var observer = {
      element: element,
      addListener: function addListener(client) {
        // add as client
        clients.push(client);

        // return removeListener function
        return function() {
          // remove client
          clients.splice(clients.indexOf(client), 1);

          // if no more clients, clean up observer
          if (clients.length === 0) {
            dragNDropObservers.splice(dragNDropObservers.indexOf(observer), 1);

            forin(routes, function(event) {
              element.removeEventListener(event, handlers[event], false);
            });
          }
        };
      }
    };

    return observer;
  };

  var elementFromPoint = function elementFromPoint(root, point) {
    if (!('elementFromPoint' in root)) {
      root = document;
    }
    return root.elementFromPoint(point.x, point.y);
  };

  var isEventTarget = function isEventTarget(e, target) {
    // get root
    var root = getRootNode(target);

    // get element at position
    // if root is not actual shadow DOM and does not have elementFromPoint method, use the one on document
    var elementAtPosition = elementFromPoint(root, {
      x: e.pageX - window.pageXOffset,
      y: e.pageY - window.pageYOffset
    });

    // test if target is the element or if one of its children is
    return elementAtPosition === target || target.contains(elementAtPosition);
  };

  var initialTarget = null;

  var setDropEffect = function setDropEffect(dataTransfer, effect) {
    // is in try catch as IE11 will throw error if not
    try {
      dataTransfer.dropEffect = effect;
    } catch (e) {}
  };

  var dragenter = function dragenter(root, clients) {
    return function(e) {
      e.preventDefault();

      initialTarget = e.target;

      clients.forEach(function(client) {
        var element = client.element,
          onenter = client.onenter;

        if (isEventTarget(e, element)) {
          client.state = 'enter';

          // fire enter event
          onenter(eventPosition(e));
        }
      });
    };
  };

  var dragover = function dragover(root, clients) {
    return function(e) {
      e.preventDefault();

      var dataTransfer = e.dataTransfer;

      requestDataTransferItems(dataTransfer).then(function(items) {
        var overDropTarget = false;

        clients.some(function(client) {
          var filterElement = client.filterElement,
            element = client.element,
            onenter = client.onenter,
            onexit = client.onexit,
            ondrag = client.ondrag,
            allowdrop = client.allowdrop;

          // by default we can drop
          setDropEffect(dataTransfer, 'copy');

          // allow transfer of these items
          var allowsTransfer = allowdrop(items);

          // only used when can be dropped on page
          if (!allowsTransfer) {
            setDropEffect(dataTransfer, 'none');
            return;
          }

          // targetting this client
          if (isEventTarget(e, element)) {
            overDropTarget = true;

            // had no previous state, means we are entering this client
            if (client.state === null) {
              client.state = 'enter';
              onenter(eventPosition(e));
              return;
            }

            // now over element (no matter if it allows the drop or not)
            client.state = 'over';

            // needs to allow transfer
            if (filterElement && !allowsTransfer) {
              setDropEffect(dataTransfer, 'none');
              return;
            }

            // dragging
            ondrag(eventPosition(e));
          } else {
            // should be over an element to drop
            if (filterElement && !overDropTarget) {
              setDropEffect(dataTransfer, 'none');
            }

            // might have just left this client?
            if (client.state) {
              client.state = null;
              onexit(eventPosition(e));
            }
          }
        });
      });
    };
  };

  var drop = function drop(root, clients) {
    return function(e) {
      e.preventDefault();

      var dataTransfer = e.dataTransfer;

      requestDataTransferItems(dataTransfer).then(function(items) {
        clients.forEach(function(client) {
          var filterElement = client.filterElement,
            element = client.element,
            ondrop = client.ondrop,
            onexit = client.onexit,
            allowdrop = client.allowdrop;

          client.state = null;

          var allowsTransfer = allowdrop(items);

          // no transfer for this client
          if (!allowsTransfer) {
            onexit(eventPosition(e));
            return;
          }

          // if we're filtering on element we need to be over the element to drop
          if (filterElement && !isEventTarget(e, element)) {
            return;
          }

          ondrop(eventPosition(e), items);
        });
      });
    };
  };

  var dragleave = function dragleave(root, clients) {
    return function(e) {
      if (initialTarget !== e.target) {
        return;
      }

      clients.forEach(function(client) {
        var onexit = client.onexit;

        client.state = null;

        onexit(eventPosition(e));
      });
    };
  };

  var createHopper = function createHopper(scope, validateItems, options) {
    // is now hopper scope
    scope.classList.add('filepond--hopper');

    // shortcuts
    var catchesDropsOnPage = options.catchesDropsOnPage,
      requiresDropOnElement = options.requiresDropOnElement,
      _options$filterItems = options.filterItems,
      filterItems =
        _options$filterItems === void 0
          ? function(items) {
              return items;
            }
          : _options$filterItems;

    // create a dnd client
    var client = createDragNDropClient(
      scope,
      catchesDropsOnPage ? document.documentElement : scope,
      requiresDropOnElement
    );

    // current client state
    var lastState = '';
    var currentState = '';

    // determines if a file may be dropped
    client.allowdrop = function(items) {
      // TODO: if we can, throw error to indicate the items cannot by dropped

      return validateItems(filterItems(items));
    };

    client.ondrop = function(position, items) {
      var filteredItems = filterItems(items);

      if (!validateItems(filteredItems)) {
        api.ondragend(position);
        return;
      }

      currentState = 'drag-drop';

      api.onload(filteredItems, position);
    };

    client.ondrag = function(position) {
      api.ondrag(position);
    };

    client.onenter = function(position) {
      currentState = 'drag-over';

      api.ondragstart(position);
    };

    client.onexit = function(position) {
      currentState = 'drag-exit';

      api.ondragend(position);
    };

    var api = {
      updateHopperState: function updateHopperState() {
        if (lastState !== currentState) {
          scope.dataset.hopperState = currentState;
          lastState = currentState;
        }
      },
      onload: function onload() {},
      ondragstart: function ondragstart() {},
      ondrag: function ondrag() {},
      ondragend: function ondragend() {},
      destroy: function destroy() {
        // destroy client
        client.destroy();
      }
    };

    return api;
  };

  var listening = false;
  var listeners$1 = [];

  var handlePaste = function handlePaste(e) {
    requestDataTransferItems(e.clipboardData).then(function(files) {
      // no files received
      if (!files.length) {
        return;
      }

      // notify listeners of received files
      listeners$1.forEach(function(listener) {
        return listener(files);
      });
    });
  };

  var listen = function listen(cb) {
    // can't add twice
    if (listeners$1.includes(cb)) {
      return;
    }

    // add initial listener
    listeners$1.push(cb);

    // setup paste listener for entire page
    if (listening) {
      return;
    }

    listening = true;
    document.addEventListener('paste', handlePaste);
  };

  var unlisten = function unlisten(listener) {
    arrayRemove(listeners$1, listeners$1.indexOf(listener));

    // clean up
    if (listeners$1.length === 0) {
      document.removeEventListener('paste', handlePaste);
      listening = false;
    }
  };

  var createPaster = function createPaster() {
    var cb = function cb(files) {
      api.onload(files);
    };

    var api = {
      destroy: function destroy() {
        unlisten(cb);
      },
      onload: function onload() {}
    };

    listen(cb);

    return api;
  };

  /**
   * Creates the file view
   */
  var create$c = function create(_ref) {
    var root = _ref.root,
      props = _ref.props;
    root.element.id = 'filepond--assistant-' + props.id;
    attr(root.element, 'role', 'status');
    attr(root.element, 'aria-live', 'polite');
    attr(root.element, 'aria-relevant', 'additions');
  };

  var addFilesNotificationTimeout = null;
  var notificationClearTimeout = null;

  var filenames = [];

  var assist = function assist(root, message) {
    root.element.textContent = message;
  };

  var clear$1 = function clear(root) {
    root.element.textContent = '';
  };

  var listModified = function listModified(root, filename, label) {
    var total = root.query('GET_TOTAL_ITEMS');
    assist(
      root,
      label +
        ' ' +
        filename +
        ', ' +
        total +
        ' ' +
        (total === 1
          ? root.query('GET_LABEL_FILE_COUNT_SINGULAR')
          : root.query('GET_LABEL_FILE_COUNT_PLURAL'))
    );

    // clear group after set amount of time so the status is not read twice
    clearTimeout(notificationClearTimeout);
    notificationClearTimeout = setTimeout(function() {
      clear$1(root);
    }, 1500);
  };

  var isUsingFilePond = function isUsingFilePond(root) {
    return root.element.parentNode.contains(document.activeElement);
  };

  var itemAdded = function itemAdded(_ref2) {
    var root = _ref2.root,
      action = _ref2.action;
    if (!isUsingFilePond(root)) {
      return;
    }

    root.element.textContent = '';
    var item = root.query('GET_ITEM', action.id);
    filenames.push(item.filename);

    clearTimeout(addFilesNotificationTimeout);
    addFilesNotificationTimeout = setTimeout(function() {
      listModified(
        root,
        filenames.join(', '),
        root.query('GET_LABEL_FILE_ADDED')
      );

      filenames.length = 0;
    }, 750);
  };

  var itemRemoved = function itemRemoved(_ref3) {
    var root = _ref3.root,
      action = _ref3.action;
    if (!isUsingFilePond(root)) {
      return;
    }

    var item = action.item;
    listModified(root, item.filename, root.query('GET_LABEL_FILE_REMOVED'));
  };

  var itemProcessed = function itemProcessed(_ref4) {
    var root = _ref4.root,
      action = _ref4.action;
    // will also notify the user when FilePond is not being used, as the user might be occupied with other activities while uploading a file

    var item = root.query('GET_ITEM', action.id);
    var filename = item.filename;
    var label = root.query('GET_LABEL_FILE_PROCESSING_COMPLETE');

    assist(root, filename + ' ' + label);
  };

  var itemProcessedUndo = function itemProcessedUndo(_ref5) {
    var root = _ref5.root,
      action = _ref5.action;
    var item = root.query('GET_ITEM', action.id);
    var filename = item.filename;
    var label = root.query('GET_LABEL_FILE_PROCESSING_ABORTED');

    assist(root, filename + ' ' + label);
  };

  var itemError = function itemError(_ref6) {
    var root = _ref6.root,
      action = _ref6.action;
    var item = root.query('GET_ITEM', action.id);
    var filename = item.filename;

    // will also notify the user when FilePond is not being used, as the user might be occupied with other activities while uploading a file

    assist(root, action.status.main + ' ' + filename + ' ' + action.status.sub);
  };

  var assistant = createView({
    create: create$c,
    ignoreRect: true,
    ignoreRectUpdate: true,
    write: createRoute({
      DID_LOAD_ITEM: itemAdded,
      DID_REMOVE_ITEM: itemRemoved,
      DID_COMPLETE_ITEM_PROCESSING: itemProcessed,

      DID_ABORT_ITEM_PROCESSING: itemProcessedUndo,
      DID_REVERT_ITEM_PROCESSING: itemProcessedUndo,

      DID_THROW_ITEM_REMOVE_ERROR: itemError,
      DID_THROW_ITEM_LOAD_ERROR: itemError,
      DID_THROW_ITEM_INVALID: itemError,
      DID_THROW_ITEM_PROCESSING_ERROR: itemError
    }),

    tag: 'span',
    name: 'assistant'
  });

  var toCamels = function toCamels(string) {
    var separator =
      arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '-';
    return string.replace(new RegExp(separator + '.', 'g'), function(sub) {
      return sub.charAt(1).toUpperCase();
    });
  };

  var debounce = function debounce(func) {
    var interval =
      arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 16;
    var immidiateOnly =
      arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
    var last = Date.now();
    var timeout = null;

    return function() {
      for (
        var _len = arguments.length, args = new Array(_len), _key = 0;
        _key < _len;
        _key++
      ) {
        args[_key] = arguments[_key];
      }
      clearTimeout(timeout);

      var dist = Date.now() - last;

      var fn = function fn() {
        last = Date.now();
        func.apply(void 0, args);
      };

      if (dist < interval) {
        // we need to delay by the difference between interval and dist
        // for example: if distance is 10 ms and interval is 16 ms,
        // we need to wait an additional 6ms before calling the function)
        if (!immidiateOnly) {
          timeout = setTimeout(fn, interval - dist);
        }
      } else {
        // go!
        fn();
      }
    };
  };

  var MAX_FILES_LIMIT = 1000000;

  var create$d = function create(_ref) {
    var root = _ref.root,
      props = _ref.props;

    // Add id
    var id = root.query('GET_ID');
    if (id) {
      root.element.id = id;
    }

    // Add className
    var className = root.query('GET_CLASS_NAME');
    if (className) {
      className.split(' ').forEach(function(name) {
        root.element.classList.add(name);
      });
    }

    // Field label
    root.ref.label = root.appendChildView(
      root.createChildView(
        dropLabel,
        Object.assign({}, props, {
          translateY: null,
          caption: root.query('GET_LABEL_IDLE')
        })
      )
    );

    // List of items
    root.ref.list = root.appendChildView(
      root.createChildView(listScroller, { translateY: null })
    );

    // Background panel
    root.ref.panel = root.appendChildView(
      root.createChildView(panel, { name: 'panel-root' })
    );

    // Assistant notifies assistive tech when content changes
    root.ref.assistant = root.appendChildView(
      root.createChildView(assistant, Object.assign({}, props))
    );

    // Measure (tests if fixed height was set)
    // DOCTYPE needs to be set for this to work
    root.ref.measure = createElement$1('div');
    root.ref.measure.style.height = '100%';
    root.element.appendChild(root.ref.measure);

    // information on the root height or fixed height status
    root.ref.bounds = null;

    // apply initial style properties
    root
      .query('GET_STYLES')
      .filter(function(style) {
        return !isEmpty(style.value);
      })
      .map(function(_ref2) {
        var name = _ref2.name,
          value = _ref2.value;
        root.element.dataset[name] = value;
      });

    // determine if width changed
    root.ref.widthPrevious = null;
    root.ref.widthUpdated = debounce(function() {
      root.dispatch('DID_RESIZE_ROOT');
    }, 250);

    // history of updates
    root.ref.previousAspectRatio = null;
    root.ref.updateHistory = [];
  };

  var write$8 = function write(_ref3) {
    var root = _ref3.root,
      props = _ref3.props,
      actions = _ref3.actions;

    // route actions
    route$5({ root: root, props: props, actions: actions });

    // apply style properties
    actions
      .filter(function(action) {
        return /^DID_SET_STYLE_/.test(action.type);
      })
      .filter(function(action) {
        return !isEmpty(action.data.value);
      })
      .map(function(_ref4) {
        var type = _ref4.type,
          data = _ref4.data;
        var name = toCamels(type.substr(8).toLowerCase(), '_');
        root.element.dataset[name] = data.value;
        root.invalidateLayout();
      });

    if (root.rect.element.hidden) return;

    if (root.rect.element.width !== root.ref.widthPrevious) {
      root.ref.widthPrevious = root.rect.element.width;
      root.ref.widthUpdated();
    }

    // get box bounds, we do this only once
    var bounds = root.ref.bounds;
    if (!bounds) {
      bounds = root.ref.bounds = calculateRootBoundingBoxHeight(root);

      // destroy measure element
      root.element.removeChild(root.ref.measure);
      root.ref.measure = null;
    }

    // get quick references to various high level parts of the upload tool
    var _root$ref = root.ref,
      hopper = _root$ref.hopper,
      label = _root$ref.label,
      list = _root$ref.list,
      panel = _root$ref.panel;

    // sets correct state to hopper scope
    if (hopper) {
      hopper.updateHopperState();
    }

    // bool to indicate if we're full or not
    var aspectRatio = root.query('GET_PANEL_ASPECT_RATIO');
    var isMultiItem = root.query('GET_ALLOW_MULTIPLE');
    var totalItems = root.query('GET_TOTAL_ITEMS');
    var maxItems = isMultiItem
      ? root.query('GET_MAX_FILES') || MAX_FILES_LIMIT
      : 1;
    var atMaxCapacity = totalItems === maxItems;

    // action used to add item
    var addAction = actions.find(function(action) {
      return action.type === 'DID_ADD_ITEM';
    });

    // if reached max capacity and we've just reached it
    if (atMaxCapacity && addAction) {
      // get interaction type
      var interactionMethod = addAction.data.interactionMethod;

      // hide label
      label.opacity = 0;

      if (isMultiItem) {
        label.translateY = -40;
      } else {
        if (interactionMethod === InteractionMethod.API) {
          label.translateX = 40;
        } else if (interactionMethod === InteractionMethod.BROWSE) {
          label.translateY = 40;
        } else {
          label.translateY = 30;
        }
      }
    } else if (!atMaxCapacity) {
      label.opacity = 1;
      label.translateX = 0;
      label.translateY = 0;
    }

    var listItemMargin = calculateListItemMargin(root);

    var listHeight = calculateListHeight(root);

    var labelHeight = label.rect.element.height;
    var currentLabelHeight = !isMultiItem || atMaxCapacity ? 0 : labelHeight;

    var listMarginTop = atMaxCapacity ? list.rect.element.marginTop : 0;
    var listMarginBottom =
      totalItems === 0 ? 0 : list.rect.element.marginBottom;

    var visualHeight =
      currentLabelHeight + listMarginTop + listHeight.visual + listMarginBottom;
    var boundsHeight =
      currentLabelHeight + listMarginTop + listHeight.bounds + listMarginBottom;

    // link list to label bottom position
    list.translateY =
      Math.max(0, currentLabelHeight - list.rect.element.marginTop) -
      listItemMargin.top;

    if (aspectRatio) {
      // fixed aspect ratio

      // calculate height based on width
      var width = root.rect.element.width;
      var height = width * aspectRatio;

      // clear history if aspect ratio has changed
      if (aspectRatio !== root.ref.previousAspectRatio) {
        root.ref.previousAspectRatio = aspectRatio;
        root.ref.updateHistory = [];
      }

      // remember this width
      var history = root.ref.updateHistory;
      history.push(width);

      var MAX_BOUNCES = 2;
      if (history.length > MAX_BOUNCES * 2) {
        var l = history.length;
        var bottom = l - 10;
        var bounces = 0;
        for (var i = l; i >= bottom; i--) {
          if (history[i] === history[i - 2]) {
            bounces++;
          }

          if (bounces >= MAX_BOUNCES) {
            // dont adjust height
            return;
          }
        }
      }

      // fix height of panel so it adheres to aspect ratio
      panel.scalable = false;
      panel.height = height;

      // available height for list
      var listAvailableHeight =
        // the height of the panel minus the label height
        height -
        currentLabelHeight -
        // the room we leave open between the end of the list and the panel bottom
        (listMarginBottom - listItemMargin.bottom) -
        // if we're full we need to leave some room between the top of the panel and the list
        (atMaxCapacity ? listMarginTop : 0);

      if (listHeight.visual > listAvailableHeight) {
        list.overflow = listAvailableHeight;
      } else {
        list.overflow = null;
      }

      // set container bounds (so pushes siblings downwards)
      root.height = height;
    } else if (bounds.fixedHeight) {
      // fixed height

      // fix height of panel
      panel.scalable = false;

      // available height for list
      var _listAvailableHeight =
        // the height of the panel minus the label height
        bounds.fixedHeight -
        currentLabelHeight -
        // the room we leave open between the end of the list and the panel bottom
        (listMarginBottom - listItemMargin.bottom) -
        // if we're full we need to leave some room between the top of the panel and the list
        (atMaxCapacity ? listMarginTop : 0);

      // set list height
      if (listHeight.visual > _listAvailableHeight) {
        list.overflow = _listAvailableHeight;
      } else {
        list.overflow = null;
      }

      // no need to set container bounds as these are handles by CSS fixed height
    } else if (bounds.cappedHeight) {
      // max-height

      // not a fixed height panel
      var isCappedHeight = visualHeight >= bounds.cappedHeight;
      var panelHeight = Math.min(bounds.cappedHeight, visualHeight);
      panel.scalable = true;
      panel.height = isCappedHeight
        ? panelHeight
        : panelHeight - listItemMargin.top - listItemMargin.bottom;

      // available height for list
      var _listAvailableHeight2 =
        // the height of the panel minus the label height
        panelHeight -
        currentLabelHeight -
        // the room we leave open between the end of the list and the panel bottom
        (listMarginBottom - listItemMargin.bottom) -
        // if we're full we need to leave some room between the top of the panel and the list
        (atMaxCapacity ? listMarginTop : 0);

      // set list height (if is overflowing)
      if (
        visualHeight > bounds.cappedHeight &&
        listHeight.visual > _listAvailableHeight2
      ) {
        list.overflow = _listAvailableHeight2;
      } else {
        list.overflow = null;
      }

      // set container bounds (so pushes siblings downwards)
      root.height = Math.min(
        bounds.cappedHeight,
        boundsHeight - listItemMargin.top - listItemMargin.bottom
      );
    } else {
      // flexible height

      // not a fixed height panel
      var itemMargin =
        totalItems > 0 ? listItemMargin.top + listItemMargin.bottom : 0;
      panel.scalable = true;
      panel.height = Math.max(labelHeight, visualHeight - itemMargin);

      // set container bounds (so pushes siblings downwards)
      root.height = Math.max(labelHeight, boundsHeight - itemMargin);
    }
  };

  var calculateListItemMargin = function calculateListItemMargin(root) {
    var item = root.ref.list.childViews[0].childViews[0];
    return item
      ? {
          top: item.rect.element.marginTop,
          bottom: item.rect.element.marginBottom
        }
      : {
          top: 0,
          bottom: 0
        };
  };

  var calculateListHeight = function calculateListHeight(root) {
    var visual = 0;
    var bounds = 0;

    // get file list reference
    var scrollList = root.ref.list;
    var itemList = scrollList.childViews[0];
    var children = itemList.childViews;

    // no children, done!
    if (children.length === 0) return { visual: visual, bounds: bounds };

    var horizontalSpace = itemList.rect.element.width;
    var dragIndex = getItemIndexByPosition(
      itemList,
      scrollList.dragCoordinates
    );

    var childRect = children[0].rect.element;

    var itemVerticalMargin = childRect.marginTop + childRect.marginBottom;
    var itemHorizontalMargin = childRect.marginLeft + childRect.marginRight;

    var itemWidth = childRect.width + itemHorizontalMargin;
    var itemHeight = childRect.height + itemVerticalMargin;

    var newItem = typeof dragIndex !== 'undefined' && dragIndex >= 0 ? 1 : 0;
    var removedItem = children.find(function(child) {
      return child.markedForRemoval && child.opacity < 0.45;
    })
      ? -1
      : 0;
    var verticalItemCount = children.length + newItem + removedItem;
    var itemsPerRow = Math.round(horizontalSpace / itemWidth);

    // stack
    if (itemsPerRow === 1) {
      children.forEach(function(item) {
        var height = item.rect.element.height + itemVerticalMargin;
        bounds += height;
        visual += height * item.opacity;
      });
    }
    // grid
    else {
      bounds = Math.ceil(verticalItemCount / itemsPerRow) * itemHeight;
      visual = bounds;
    }

    return { visual: visual, bounds: bounds };
  };

  var calculateRootBoundingBoxHeight = function calculateRootBoundingBoxHeight(
    root
  ) {
    var height = root.ref.measureHeight || null;
    var cappedHeight = parseInt(root.style.maxHeight, 10) || null;
    var fixedHeight = height === 0 ? null : height;

    return {
      cappedHeight: cappedHeight,
      fixedHeight: fixedHeight
    };
  };

  var exceedsMaxFiles = function exceedsMaxFiles(root, items) {
    var allowReplace = root.query('GET_ALLOW_REPLACE');
    var allowMultiple = root.query('GET_ALLOW_MULTIPLE');
    var totalItems = root.query('GET_TOTAL_ITEMS');
    var maxItems = root.query('GET_MAX_FILES');

    // total amount of items being dragged
    var totalBrowseItems = items.length;

    // if does not allow multiple items and dragging more than one item
    if (!allowMultiple && totalBrowseItems > 1) {
      return true;
    }

    // limit max items to one if not allowed to drop multiple items
    maxItems = allowMultiple ? maxItems : allowReplace ? maxItems : 1;

    // no more room?
    var hasMaxItems = isInt(maxItems);
    if (hasMaxItems && totalItems + totalBrowseItems > maxItems) {
      root.dispatch('DID_THROW_MAX_FILES', {
        source: items,
        error: createResponse('warning', 0, 'Max files')
      });

      return true;
    }

    return false;
  };

  var getDragIndex = function getDragIndex(list, position) {
    var itemList = list.childViews[0];
    return getItemIndexByPosition(itemList, {
      left: position.scopeLeft - itemList.rect.element.left,
      top:
        position.scopeTop -
        (list.rect.outer.top +
          list.rect.element.marginTop +
          list.rect.element.scrollTop)
    });
  };

  /**
   * Enable or disable file drop functionality
   */
  var toggleDrop = function toggleDrop(root) {
    var isAllowed = root.query('GET_ALLOW_DROP');
    var isDisabled = root.query('GET_DISABLED');
    var enabled = isAllowed && !isDisabled;
    if (enabled && !root.ref.hopper) {
      var hopper = createHopper(
        root.element,
        function(items) {
          // these files don't fit so stop here
          if (exceedsMaxFiles(root, items)) return false;

          // allow quick validation of dropped items
          var beforeDropFile =
            root.query('GET_BEFORE_DROP_FILE') ||
            function() {
              return true;
            };

          // all items should be validated by all filters as valid
          var dropValidation = root.query('GET_DROP_VALIDATION');
          return dropValidation
            ? items.every(function(item) {
                return (
                  applyFilters('ALLOW_HOPPER_ITEM', item, {
                    query: root.query
                  }).every(function(result) {
                    return result === true;
                  }) && beforeDropFile(item)
                );
              })
            : true;
        },
        {
          filterItems: function filterItems(items) {
            var ignoredFiles = root.query('GET_IGNORED_FILES');
            return items.filter(function(item) {
              if (isFile(item)) {
                return !ignoredFiles.includes(item.name.toLowerCase());
              }
              return true;
            });
          },
          catchesDropsOnPage: root.query('GET_DROP_ON_PAGE'),
          requiresDropOnElement: root.query('GET_DROP_ON_ELEMENT')
        }
      );

      hopper.onload = function(items, position) {
        root.dispatch('ADD_ITEMS', {
          items: items,
          index: getDragIndex(root.ref.list, position),
          interactionMethod: InteractionMethod.DROP
        });

        root.dispatch('DID_DROP', { position: position });

        root.dispatch('DID_END_DRAG', { position: position });
      };

      hopper.ondragstart = function(position) {
        root.dispatch('DID_START_DRAG', { position: position });
      };

      hopper.ondrag = debounce(function(position) {
        root.dispatch('DID_DRAG', { position: position });
      });

      hopper.ondragend = function(position) {
        root.dispatch('DID_END_DRAG', { position: position });
      };

      root.ref.hopper = hopper;

      root.ref.drip = root.appendChildView(root.createChildView(drip));
    } else if (!enabled && root.ref.hopper) {
      root.ref.hopper.destroy();
      root.ref.hopper = null;
      root.removeChildView(root.ref.drip);
    }
  };

  /**
   * Enable or disable browse functionality
   */
  var toggleBrowse = function toggleBrowse(root, props) {
    var isAllowed = root.query('GET_ALLOW_BROWSE');
    var isDisabled = root.query('GET_DISABLED');
    var enabled = isAllowed && !isDisabled;
    if (enabled && !root.ref.browser) {
      root.ref.browser = root.appendChildView(
        root.createChildView(
          browser,
          Object.assign({}, props, {
            onload: function onload(items) {
              // these files don't fit so stop here
              if (exceedsMaxFiles(root, items)) return false;

              // add items!
              root.dispatch('ADD_ITEMS', {
                items: items,
                index: -1,
                interactionMethod: InteractionMethod.BROWSE
              });
            }
          })
        ),

        0
      );
    } else if (!enabled && root.ref.browser) {
      root.removeChildView(root.ref.browser);
      root.ref.browser = null;
    }
  };

  /**
   * Enable or disable paste functionality
   */
  var togglePaste = function togglePaste(root) {
    var isAllowed = root.query('GET_ALLOW_PASTE');
    var isDisabled = root.query('GET_DISABLED');
    var enabled = isAllowed && !isDisabled;
    if (enabled && !root.ref.paster) {
      root.ref.paster = createPaster();
      root.ref.paster.onload = function(items) {
        root.dispatch('ADD_ITEMS', {
          items: items,
          index: -1,
          interactionMethod: InteractionMethod.PASTE
        });
      };
    } else if (!enabled && root.ref.paster) {
      root.ref.paster.destroy();
      root.ref.paster = null;
    }
  };

  /**
   * Route actions
   */
  var route$5 = createRoute({
    DID_SET_ALLOW_BROWSE: function DID_SET_ALLOW_BROWSE(_ref5) {
      var root = _ref5.root,
        props = _ref5.props;
      toggleBrowse(root, props);
    },
    DID_SET_ALLOW_DROP: function DID_SET_ALLOW_DROP(_ref6) {
      var root = _ref6.root;
      toggleDrop(root);
    },
    DID_SET_ALLOW_PASTE: function DID_SET_ALLOW_PASTE(_ref7) {
      var root = _ref7.root;
      togglePaste(root);
    },
    DID_SET_DISABLED: function DID_SET_DISABLED(_ref8) {
      var root = _ref8.root,
        props = _ref8.props;
      toggleDrop(root);
      togglePaste(root);
      toggleBrowse(root, props);
      var isDisabled = root.query('GET_DISABLED');
      if (isDisabled) {
        root.element.dataset.disabled = 'disabled';
      } else {
        delete root.element.dataset.disabled;
      }
    }
  });

  var root = createView({
    name: 'root',
    read: function read(_ref9) {
      var root = _ref9.root;
      if (root.ref.measure) {
        root.ref.measureHeight = root.ref.measure.offsetHeight;
      }
    },
    create: create$d,
    write: write$8,
    destroy: function destroy(_ref10) {
      var root = _ref10.root;
      if (root.ref.paster) {
        root.ref.paster.destroy();
      }
      if (root.ref.hopper) {
        root.ref.hopper.destroy();
      }
    },
    mixins: {
      styles: ['height']
    }
  });

  // creates the app
  var createApp = function createApp() {
    var initialOptions =
      arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    // let element
    var originalElement = null;

    // get default options
    var defaultOptions = getOptions();

    // create the data store, this will contain all our app info
    var store = createStore(
      // initial state (should be serializable)
      createInitialState(defaultOptions),

      // queries
      [queries, createOptionQueries(defaultOptions)],

      // action handlers
      [actions, createOptionActions(defaultOptions)]
    );

    // set initial options
    store.dispatch('SET_OPTIONS', { options: initialOptions });

    // kick thread if visibility changes
    var visibilityHandler = function visibilityHandler() {
      if (document.hidden) return;
      store.dispatch('KICK');
    };
    document.addEventListener('visibilitychange', visibilityHandler);

    // re-render on window resize start and finish
    var resizeDoneTimer = null;
    var isResizing = false;
    var isResizingHorizontally = false;
    var initialWindowWidth = null;
    var currentWindowWidth = null;
    var resizeHandler = function resizeHandler() {
      if (!isResizing) {
        isResizing = true;
      }
      clearTimeout(resizeDoneTimer);
      resizeDoneTimer = setTimeout(function() {
        isResizing = false;
        initialWindowWidth = null;
        currentWindowWidth = null;
        if (isResizingHorizontally) {
          isResizingHorizontally = false;
          store.dispatch('DID_STOP_RESIZE');
        }
      }, 500);
    };
    window.addEventListener('resize', resizeHandler);

    // render initial view
    var view = root(store, { id: getUniqueId() });

    //
    // PRIVATE API -------------------------------------------------------------------------------------
    //
    var isResting = false;
    var isHidden = false;

    var readWriteApi = {
      // necessary for update loop

      /**
       * Reads from dom (never call manually)
       * @private
       */
      _read: function _read() {
        // test if we're resizing horizontally
        // TODO: see if we can optimize this by measuring root rect
        if (isResizing) {
          currentWindowWidth = window.innerWidth;
          if (!initialWindowWidth) {
            initialWindowWidth = currentWindowWidth;
          }

          if (
            !isResizingHorizontally &&
            currentWindowWidth !== initialWindowWidth
          ) {
            store.dispatch('DID_START_RESIZE');
            isResizingHorizontally = true;
          }
        }

        if (isHidden && isResting) {
          // test if is no longer hidden
          isResting = view.element.offsetParent === null;
        }

        // if resting, no need to read as numbers will still all be correct
        if (isResting) return;

        // read view data
        view._read();

        // if is hidden we need to know so we exit rest mode when revealed
        isHidden = view.rect.element.hidden;
      },

      /**
       * Writes to dom (never call manually)
       * @private
       */
      _write: function _write(ts) {
        // get all actions from store
        var actions = store
          .processActionQueue()

          // filter out set actions (these will automatically trigger DID_SET)
          .filter(function(action) {
            return !/^SET_/.test(action.type);
          });

        // if was idling and no actions stop here
        if (isResting && !actions.length) return;

        // some actions might trigger events
        routeActionsToEvents(actions);

        // update the view
        isResting = view._write(ts, actions, isResizingHorizontally);

        // will clean up all archived items
        removeReleasedItems(store.query('GET_ITEMS'));

        // now idling
        if (isResting) {
          store.processDispatchQueue();
        }
      }
    };

    //
    // EXPOSE EVENTS -------------------------------------------------------------------------------------
    //
    var createEvent = function createEvent(name) {
      return function(data) {
        // create default event
        var event = {
          type: name
        };

        // no data to add
        if (!data) {
          return event;
        }

        // copy relevant props
        if (data.hasOwnProperty('error')) {
          event.error = data.error ? Object.assign({}, data.error) : null;
        }

        if (data.status) {
          event.status = Object.assign({}, data.status);
        }

        if (data.file) {
          event.output = data.file;
        }

        // only source is available, else add item if possible
        if (data.source) {
          event.file = data.source;
        } else if (data.item || data.id) {
          var item = data.item ? data.item : store.query('GET_ITEM', data.id);
          event.file = item ? createItemAPI(item) : null;
        }

        // map all items in a possible items array
        if (data.items) {
          event.items = data.items.map(createItemAPI);
        }

        // if this is a progress event add the progress amount
        if (/progress/.test(name)) {
          event.progress = data.progress;
        }

        return event;
      };
    };

    var eventRoutes = {
      DID_DESTROY: createEvent('destroy'),

      DID_INIT: createEvent('init'),

      DID_THROW_MAX_FILES: createEvent('warning'),

      DID_START_ITEM_LOAD: createEvent('addfilestart'),
      DID_UPDATE_ITEM_LOAD_PROGRESS: createEvent('addfileprogress'),
      DID_LOAD_ITEM: createEvent('addfile'),

      DID_THROW_ITEM_INVALID: [createEvent('error'), createEvent('addfile')],

      DID_THROW_ITEM_LOAD_ERROR: [createEvent('error'), createEvent('addfile')],

      DID_THROW_ITEM_REMOVE_ERROR: [
        createEvent('error'),
        createEvent('removefile')
      ],

      DID_PREPARE_OUTPUT: createEvent('preparefile'),

      DID_START_ITEM_PROCESSING: createEvent('processfilestart'),
      DID_UPDATE_ITEM_PROCESS_PROGRESS: createEvent('processfileprogress'),
      DID_ABORT_ITEM_PROCESSING: createEvent('processfileabort'),
      DID_COMPLETE_ITEM_PROCESSING: createEvent('processfile'),
      DID_COMPLETE_ITEM_PROCESSING_ALL: createEvent('processfiles'),
      DID_REVERT_ITEM_PROCESSING: createEvent('processfilerevert'),

      DID_THROW_ITEM_PROCESSING_ERROR: [
        createEvent('error'),
        createEvent('processfile')
      ],

      DID_REMOVE_ITEM: createEvent('removefile'),

      DID_UPDATE_ITEMS: createEvent('updatefiles'),

      DID_ACTIVATE_ITEM: createEvent('activatefile')
    };

    var exposeEvent = function exposeEvent(event) {
      // create event object to be dispatched
      var detail = Object.assign({ pond: exports }, event);
      delete detail.type;
      view.element.dispatchEvent(
        new CustomEvent('FilePond:' + event.type, {
          // event info
          detail: detail,

          // event behaviour
          bubbles: true,
          cancelable: true,
          composed: true // triggers listeners outside of shadow root
        })
      );

      // event object to params used for `on()` event handlers and callbacks `oninit()`
      var params = [];

      // if is possible error event, make it the first param
      if (event.hasOwnProperty('error')) {
        params.push(event.error);
      }

      // file is always section
      if (event.hasOwnProperty('file')) {
        params.push(event.file);
      }

      // append other props
      var filtered = ['type', 'error', 'file'];
      Object.keys(event)
        .filter(function(key) {
          return !filtered.includes(key);
        })
        .forEach(function(key) {
          return params.push(event[key]);
        });

      // on(type, () => { })
      exports.fire.apply(exports, [event.type].concat(params));

      // oninit = () => {}
      var handler = store.query('GET_ON' + event.type.toUpperCase());
      if (handler) {
        handler.apply(void 0, params);
      }
    };

    var routeActionsToEvents = function routeActionsToEvents(actions) {
      if (!actions.length) {
        return;
      }

      actions.forEach(function(action) {
        if (!eventRoutes[action.type]) {
          return;
        }
        var routes = eventRoutes[action.type];
        (Array.isArray(routes) ? routes : [routes]).forEach(function(route) {
          setTimeout(function() {
            exposeEvent(route(action.data));
          }, 0);
        });
      });
    };

    //
    // PUBLIC API -------------------------------------------------------------------------------------
    //
    var setOptions = function setOptions(options) {
      return store.dispatch('SET_OPTIONS', { options: options });
    };

    var getFile = function getFile(query) {
      return store.query('GET_ACTIVE_ITEM', query);
    };

    var addFile = function addFile(source) {
      var options =
        arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return new Promise(function(resolve, reject) {
        addFiles([{ source: source, options: options }], {
          index: options.index
        })
          .then(function(items) {
            return resolve(items && items[0]);
          })
          .catch(reject);
      });
    };

    var removeFile = function removeFile(query) {
      // request item removal
      store.dispatch('REMOVE_ITEM', { query: query });

      // see if item has been removed
      return store.query('GET_ACTIVE_ITEM', query) === null;
    };

    var addFiles = function addFiles() {
      for (
        var _len = arguments.length, args = new Array(_len), _key = 0;
        _key < _len;
        _key++
      ) {
        args[_key] = arguments[_key];
      }
      return new Promise(function(resolve, reject) {
        var sources = [];
        var options = {};

        // user passed a sources array
        if (isArray(args[0])) {
          sources.push.apply(sources, args[0]);
          Object.assign(options, args[1] || {});
        } else {
          // user passed sources as arguments, last one might be options object
          var lastArgument = args[args.length - 1];
          if (
            typeof lastArgument === 'object' &&
            !(lastArgument instanceof Blob)
          ) {
            Object.assign(options, args.pop());
          }

          // add rest to sources
          sources.push.apply(sources, args);
        }

        store.dispatch('ADD_ITEMS', {
          items: sources,
          index: options.index,
          interactionMethod: InteractionMethod.API,
          success: resolve,
          failure: reject
        });
      });
    };

    var getFiles = function getFiles() {
      return store.query('GET_ACTIVE_ITEMS');
    };

    var processFile = function processFile(query) {
      return new Promise(function(resolve, reject) {
        store.dispatch('REQUEST_ITEM_PROCESSING', {
          query: query,
          success: function success(item) {
            resolve(item);
          },
          failure: function failure(error) {
            reject(error);
          }
        });
      });
    };

    var processFiles = function processFiles() {
      for (
        var _len2 = arguments.length, args = new Array(_len2), _key2 = 0;
        _key2 < _len2;
        _key2++
      ) {
        args[_key2] = arguments[_key2];
      }
      var queries = Array.isArray(args[0]) ? args[0] : args;
      if (!queries.length) {
        var files = getFiles().filter(function(item) {
          return (
            !(
              item.status === ItemStatus.IDLE &&
              item.origin === FileOrigin.LOCAL
            ) &&
            item.status !== ItemStatus.PROCESSING &&
            item.status !== ItemStatus.PROCESSING_COMPLETE &&
            item.status !== ItemStatus.PROCESSING_REVERT_ERROR
          );
        });

        return Promise.all(files.map(processFile));
      }
      return Promise.all(queries.map(processFile));
    };

    var removeFiles = function removeFiles() {
      for (
        var _len3 = arguments.length, args = new Array(_len3), _key3 = 0;
        _key3 < _len3;
        _key3++
      ) {
        args[_key3] = arguments[_key3];
      }
      var queries = Array.isArray(args[0]) ? args[0] : args;
      var files = getFiles();

      if (!queries.length) {
        return Promise.all(files.map(removeFile));
      }

      // when removing by index the indexes shift after each file removal so we need to convert indexes to ids
      var mappedQueries = queries
        .map(function(query) {
          return isNumber(query)
            ? files[query]
              ? files[query].id
              : null
            : query;
        })
        .filter(function(query) {
          return query;
        });

      return mappedQueries.map(removeFile);
    };

    var exports = Object.assign(
      {},

      on(),

      readWriteApi,

      createOptionAPI(store, defaultOptions),
      {
        /**
         * Override options defined in options object
         * @param options
         */
        setOptions: setOptions,

        /**
         * Load the given file
         * @param source - the source of the file (either a File, base64 data uri or url)
         * @param options - object, { index: 0 }
         */
        addFile: addFile,

        /**
         * Load the given files
         * @param sources - the sources of the files to load
         * @param options - object, { index: 0 }
         */
        addFiles: addFiles,

        /**
         * Returns the file objects matching the given query
         * @param query { string, number, null }
         */
        getFile: getFile,

        /**
         * Upload file with given name
         * @param query { string, number, null  }
         */
        processFile: processFile,

        /**
         * Removes a file by its name
         * @param query { string, number, null  }
         */
        removeFile: removeFile,

        /**
         * Returns all files (wrapped in public api)
         */
        getFiles: getFiles,

        /**
         * Starts uploading all files
         */
        processFiles: processFiles,

        /**
         * Clears all files from the files list
         */
        removeFiles: removeFiles,

        /**
         * Sort list of files
         */
        sort: function sort(compare) {
          return store.dispatch('SORT', { compare: compare });
        },

        /**
         * Browse the file system for a file
         */
        browse: function browse() {
          // needs to be trigger directly as user action needs to be traceable (is not traceable in requestAnimationFrame)
          var input = view.element.querySelector('input[type=file]');
          if (input) {
            input.click();
          }
        },

        /**
         * Destroys the app
         */
        destroy: function destroy() {
          // request destruction
          exports.fire('destroy', view.element);

          // stop active processes (file uploads, fetches, stuff like that)
          // loop over items and depending on states call abort for ongoing processes
          store.dispatch('ABORT_ALL');

          // destroy view
          view._destroy();

          // stop listening to resize
          window.removeEventListener('resize', resizeHandler);

          // stop listening to the visiblitychange event
          document.addEventListener('visibilitychange', visibilityHandler);

          // dispatch destroy
          store.dispatch('DID_DESTROY');
        },

        /**
         * Inserts the plugin before the target element
         */
        insertBefore: function insertBefore$1(element) {
          return insertBefore(view.element, element);
        },

        /**
         * Inserts the plugin after the target element
         */
        insertAfter: function insertAfter$1(element) {
          return insertAfter(view.element, element);
        },

        /**
         * Appends the plugin to the target element
         */
        appendTo: function appendTo(element) {
          return element.appendChild(view.element);
        },

        /**
         * Replaces an element with the app
         */
        replaceElement: function replaceElement(element) {
          // insert the app before the element
          insertBefore(view.element, element);

          // remove the original element
          element.parentNode.removeChild(element);

          // remember original element
          originalElement = element;
        },

        /**
         * Restores the original element
         */
        restoreElement: function restoreElement() {
          if (!originalElement) {
            return; // no element to restore
          }

          // restore original element
          insertAfter(originalElement, view.element);

          // remove our element
          view.element.parentNode.removeChild(view.element);

          // remove reference
          originalElement = null;
        },

        /**
         * Returns true if the app root is attached to given element
         * @param element
         */
        isAttachedTo: function isAttachedTo(element) {
          return view.element === element || originalElement === element;
        },

        /**
         * Returns the root element
         */
        element: {
          get: function get() {
            return view.element;
          }
        },

        /**
         * Returns the current pond status
         */
        status: {
          get: function get() {
            return store.query('GET_STATUS');
          }
        }
      }
    );

    // Done!
    store.dispatch('DID_INIT');

    // create actual api object
    return createObject(exports);
  };

  var createAppObject = function createAppObject() {
    var customOptions =
      arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    // default options
    var defaultOptions = {};
    forin(getOptions(), function(key, value) {
      defaultOptions[key] = value[0];
    });

    // set app options
    var app = createApp(
      Object.assign(
        {},

        defaultOptions,

        customOptions
      )
    );

    // return the plugin instance
    return app;
  };

  var lowerCaseFirstLetter = function lowerCaseFirstLetter(string) {
    return string.charAt(0).toLowerCase() + string.slice(1);
  };

  var attributeNameToPropertyName = function attributeNameToPropertyName(
    attributeName
  ) {
    return toCamels(attributeName.replace(/^data-/, ''));
  };

  var mapObject = function mapObject(object, propertyMap) {
    // remove unwanted
    forin(propertyMap, function(selector, mapping) {
      forin(object, function(property, value) {
        // create regexp shortcut
        var selectorRegExp = new RegExp(selector);

        // tests if
        var matches = selectorRegExp.test(property);

        // no match, skip
        if (!matches) {
          return;
        }

        // if there's a mapping, the original property is always removed
        delete object[property];

        // should only remove, we done!
        if (mapping === false) {
          return;
        }

        // move value to new property
        if (isString(mapping)) {
          object[mapping] = value;
          return;
        }

        // move to group
        var group = mapping.group;
        if (isObject(mapping) && !object[group]) {
          object[group] = {};
        }

        object[group][
          lowerCaseFirstLetter(property.replace(selectorRegExp, ''))
        ] = value;
      });

      // do submapping
      if (mapping.mapping) {
        mapObject(object[mapping.group], mapping.mapping);
      }
    });
  };

  var getAttributesAsObject = function getAttributesAsObject(node) {
    var attributeMapping =
      arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    // turn attributes into object
    var attributes = [];
    forin(node.attributes, function(index) {
      attributes.push(node.attributes[index]);
    });

    var output = attributes
      .filter(function(attribute) {
        return attribute.name;
      })
      .reduce(function(obj, attribute) {
        var value = attr(node, attribute.name);

        obj[attributeNameToPropertyName(attribute.name)] =
          value === attribute.name ? true : value;
        return obj;
      }, {});

    // do mapping of object properties
    mapObject(output, attributeMapping);

    return output;
  };

  var createAppAtElement = function createAppAtElement(element) {
    var options =
      arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    // how attributes of the input element are mapped to the options for the plugin
    var attributeMapping = {
      // translate to other name
      '^class$': 'className',
      '^multiple$': 'allowMultiple',
      '^capture$': 'captureMethod',

      // group under single property
      '^server': {
        group: 'server',
        mapping: {
          '^process': {
            group: 'process'
          },

          '^revert': {
            group: 'revert'
          },

          '^fetch': {
            group: 'fetch'
          },

          '^restore': {
            group: 'restore'
          },

          '^load': {
            group: 'load'
          }
        }
      },

      // don't include in object
      '^type$': false,
      '^files$': false
    };

    // add additional option translators
    applyFilters('SET_ATTRIBUTE_TO_OPTION_MAP', attributeMapping);

    // create final options object by setting options object and then overriding options supplied on element
    var mergedOptions = Object.assign({}, options);

    var attributeOptions = getAttributesAsObject(
      element.nodeName === 'FIELDSET'
        ? element.querySelector('input[type=file]')
        : element,
      attributeMapping
    );

    // merge with options object
    Object.keys(attributeOptions).forEach(function(key) {
      if (isObject(attributeOptions[key])) {
        if (!isObject(mergedOptions[key])) {
          mergedOptions[key] = {};
        }
        Object.assign(mergedOptions[key], attributeOptions[key]);
      } else {
        mergedOptions[key] = attributeOptions[key];
      }
    });

    // if parent is a fieldset, get files from parent by selecting all input fields that are not file upload fields
    // these will then be automatically set to the initial files
    mergedOptions.files = (options.files || []).concat(
      Array.from(element.querySelectorAll('input:not([type=file])')).map(
        function(input) {
          return {
            source: input.value,
            options: {
              type: input.dataset.type
            }
          };
        }
      )
    );

    // build plugin
    var app = createAppObject(mergedOptions);

    // add already selected files
    if (element.files) {
      Array.from(element.files).forEach(function(file) {
        app.addFile(file);
      });
    }

    // replace the target element
    app.replaceElement(element);

    // expose
    return app;
  };

  // if an element is passed, we create the instance at that element, if not, we just create an up object
  var createApp$1 = function createApp() {
    return isNode(arguments.length <= 0 ? undefined : arguments[0])
      ? createAppAtElement.apply(void 0, arguments)
      : createAppObject.apply(void 0, arguments);
  };

  var PRIVATE_METHODS = ['fire', '_read', '_write'];

  var createAppAPI = function createAppAPI(app) {
    var api = {};

    copyObjectPropertiesToObject(app, api, PRIVATE_METHODS);

    return api;
  };

  /**
   * Replaces placeholders in given string with replacements
   * @param string - "Foo {bar}""
   * @param replacements - { "bar": 10 }
   */
  var replaceInString = function replaceInString(string, replacements) {
    return string.replace(/(?:{([a-zA-Z]+)})/g, function(match, group) {
      return replacements[group];
    });
  };

  var createWorker = function createWorker(fn) {
    var workerBlob = new Blob(['(', fn.toString(), ')()'], {
      type: 'application/javascript'
    });

    var workerURL = URL.createObjectURL(workerBlob);
    var worker = new Worker(workerURL);

    return {
      transfer: function transfer(message, cb) {},
      post: function post(message, cb, transferList) {
        var id = getUniqueId();

        worker.onmessage = function(e) {
          if (e.data.id === id) {
            cb(e.data.message);
          }
        };

        worker.postMessage(
          {
            id: id,
            message: message
          },

          transferList
        );
      },
      terminate: function terminate() {
        worker.terminate();
        URL.revokeObjectURL(workerURL);
      }
    };
  };

  var loadImage = function loadImage(url) {
    return new Promise(function(resolve, reject) {
      var img = new Image();
      img.onload = function() {
        resolve(img);
      };
      img.onerror = function(e) {
        reject(e);
      };
      img.src = url;
    });
  };

  var renameFile = function renameFile(file, name) {
    var renamedFile = file.slice(0, file.size, file.type);
    renamedFile.lastModifiedDate = file.lastModifiedDate;
    renamedFile.name = name;
    return renamedFile;
  };

  var copyFile = function copyFile(file) {
    return renameFile(file, file.name);
  };

  // already registered plugins (can't register twice)
  var registeredPlugins = [];

  // pass utils to plugin
  var createAppPlugin = function createAppPlugin(plugin) {
    // already registered
    if (registeredPlugins.includes(plugin)) {
      return;
    }

    // remember this plugin
    registeredPlugins.push(plugin);

    // setup!
    var pluginOutline = plugin({
      addFilter: addFilter,
      utils: {
        Type: Type,
        forin: forin,
        isString: isString,
        isFile: isFile,
        toNaturalFileSize: toNaturalFileSize,
        replaceInString: replaceInString,
        getExtensionFromFilename: getExtensionFromFilename,
        getFilenameWithoutExtension: getFilenameWithoutExtension,
        guesstimateMimeType: guesstimateMimeType,
        getFileFromBlob: getFileFromBlob,
        getFilenameFromURL: getFilenameFromURL,
        createRoute: createRoute,
        createWorker: createWorker,
        createView: createView,
        createItemAPI: createItemAPI,
        loadImage: loadImage,
        copyFile: copyFile,
        renameFile: renameFile,
        createBlob: createBlob,
        applyFilterChain: applyFilterChain,
        text: text,
        getNumericAspectRatioFromString: getNumericAspectRatioFromString
      },

      views: {
        fileActionButton: fileActionButton
      }
    });

    // add plugin options to default options
    extendDefaultOptions(pluginOutline.options);
  };

  // feature detection used by supported() method
  var isOperaMini = function isOperaMini() {
    return (
      Object.prototype.toString.call(window.operamini) === '[object OperaMini]'
    );
  };
  var hasPromises = function hasPromises() {
    return 'Promise' in window;
  };
  var hasBlobSlice = function hasBlobSlice() {
    return 'slice' in Blob.prototype;
  };
  var hasCreateObjectURL = function hasCreateObjectURL() {
    return 'URL' in window && 'createObjectURL' in window.URL;
  };
  var hasVisibility = function hasVisibility() {
    return 'visibilityState' in document;
  };
  var hasTiming = function hasTiming() {
    return 'performance' in window;
  }; // iOS 8.x
  var isBrowser = function isBrowser() {
    return (
      typeof window !== 'undefined' && typeof window.document !== 'undefined'
    );
  };

  var supported = (function() {
    // Runs immidiately and then remembers result for subsequent calls
    var isSupported =
      // Has to be a browser
      isBrowser() &&
      // Can't run on Opera Mini due to lack of everything
      !isOperaMini() &&
      // Require these APIs to feature detect a modern browser
      hasVisibility() &&
      hasPromises() &&
      hasBlobSlice() &&
      hasCreateObjectURL() &&
      hasTiming();

    return function() {
      return isSupported;
    };
  })();

  /**
   * Plugin internal state (over all instances)
   */
  var state = {
    // active app instances, used to redraw the apps and to find the later
    apps: []
  };

  // plugin name
  var name = 'filepond';

  /**
   * Public Plugin methods
   */
  var fn = function fn() {};
  exports.Status = {};
  exports.FileStatus = {};
  exports.FileOrigin = {};
  exports.OptionTypes = {};
  exports.create = fn;
  exports.destroy = fn;
  exports.parse = fn;
  exports.find = fn;
  exports.registerPlugin = fn;
  exports.getOptions = fn;
  exports.setOptions = fn;

  // if not supported, no API
  if (supported()) {
    // start painter and fire load event
    createPainter(
      function() {
        state.apps.forEach(function(app) {
          return app._read();
        });
      },
      function(ts) {
        state.apps.forEach(function(app) {
          return app._write(ts);
        });
      }
    );

    // fire loaded event so we know when FilePond is available
    var dispatch = function dispatch() {
      // let others know we have area ready
      document.dispatchEvent(
        new CustomEvent('FilePond:loaded', {
          detail: {
            supported: supported,
            create: exports.create,
            destroy: exports.destroy,
            parse: exports.parse,
            find: exports.find,
            registerPlugin: exports.registerPlugin,
            setOptions: exports.setOptions
          }
        })
      );

      // clean up event
      document.removeEventListener('DOMContentLoaded', dispatch);
    };

    if (document.readyState !== 'loading') {
      // move to back of execution queue, FilePond should have been exported by then
      setTimeout(function() {
        return dispatch();
      }, 0);
    } else {
      document.addEventListener('DOMContentLoaded', dispatch);
    }

    // updates the OptionTypes object based on the current options
    var updateOptionTypes = function updateOptionTypes() {
      return forin(getOptions(), function(key, value) {
        exports.OptionTypes[key] = value[1];
      });
    };

    exports.Status = Object.assign({}, Status);
    exports.FileOrigin = Object.assign({}, FileOrigin);
    exports.FileStatus = Object.assign({}, ItemStatus);

    exports.OptionTypes = {};
    updateOptionTypes();

    // create method, creates apps and adds them to the app array
    exports.create = function create() {
      var app = createApp$1.apply(void 0, arguments);
      app.on('destroy', exports.destroy);
      state.apps.push(app);
      return createAppAPI(app);
    };

    // destroys apps and removes them from the app array
    exports.destroy = function destroy(hook) {
      // returns true if the app was destroyed successfully
      var indexToRemove = state.apps.findIndex(function(app) {
        return app.isAttachedTo(hook);
      });
      if (indexToRemove >= 0) {
        // remove from apps
        var app = state.apps.splice(indexToRemove, 1)[0];

        // restore original dom element
        app.restoreElement();

        return true;
      }

      return false;
    };

    // parses the given context for plugins (does not include the context element itself)
    exports.parse = function parse(context) {
      // get all possible hooks
      var matchedHooks = Array.from(context.querySelectorAll('.' + name));

      // filter out already active hooks
      var newHooks = matchedHooks.filter(function(newHook) {
        return !state.apps.find(function(app) {
          return app.isAttachedTo(newHook);
        });
      });

      // create new instance for each hook
      return newHooks.map(function(hook) {
        return exports.create(hook);
      });
    };

    // returns an app based on the given element hook
    exports.find = function find(hook) {
      var app = state.apps.find(function(app) {
        return app.isAttachedTo(hook);
      });
      if (!app) {
        return null;
      }
      return createAppAPI(app);
    };

    // adds a plugin extension
    exports.registerPlugin = function registerPlugin() {
      for (
        var _len = arguments.length, plugins = new Array(_len), _key = 0;
        _key < _len;
        _key++
      ) {
        plugins[_key] = arguments[_key];
      }

      // register plugins
      plugins.forEach(createAppPlugin);

      // update OptionTypes, each plugin might have extended the default options
      updateOptionTypes();
    };

    exports.getOptions = function getOptions$1() {
      var opts = {};
      forin(getOptions(), function(key, value) {
        opts[key] = value[0];
      });
      return opts;
    };

    exports.setOptions = function setOptions$1(opts) {
      if (isObject(opts)) {
        // update existing plugins
        state.apps.forEach(function(app) {
          app.setOptions(opts);
        });

        // override defaults
        setOptions(opts);
      }

      // return new options
      return exports.getOptions();
    };
  }

  exports.supported = supported;

  Object.defineProperty(exports, '__esModule', { value: true });
});


/***/ }),

/***/ "./node_modules/js-event-bus/src/index.js":
/*!************************************************!*\
  !*** ./node_modules/js-event-bus/src/index.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

(function (caller, bus) {
  if (true) {
    module.exports = bus();
  } else {}
})(this, function () {
  var EventBus = function () {
    this.listeners = {};

    this.registerListener = function (event, callback, number) {
      var type = event.constructor.name;
      number = this.validateNumber(number || 'any');
  
      if (type !== 'Array') {
        event = [event];
      }

      event.forEach(function (e) {
        if (e.constructor.name !== 'String') {
          throw new Error('Only `String` and array of `String` are accepted for the event names!');
        }
  
        that.listeners[e] = that.listeners[e] || [];
        that.listeners[e].push({
          callback: callback,
          number: number
        });
  
      });
    };

    // valiodate that the number is a vild number for the number of executions
    this.validateNumber = function (n) {
      var type = n.constructor.name;

      if (type === 'Number') {
        return n;
      } else if (type === 'String' && n.toLowerCase() === 'any') {
        return 'any';
      }

      throw new Error('Only `Number` and `any` are accepted in the number of possible executions!');
    };

    // return wether or not this event needs to be removed 
    this.toBeRemoved = function (info) {
      var number = info.number;
      info.execution = info.execution || 0;
      info.execution++;

      if (number === 'any' || info.execution < number) {
        return false;
      }

      return true;
    };

    var that = this;
    return {
      /**
       * Attach a callback to an event
       * @param {string} eventName - name of the event.
       * @param {function} callback - callback executed when this event is triggered
       */
      on: function (eventName, callback) {
        that.registerListener.bind(that)(eventName, callback, 'any');
      },

      /**
       * Attach a callback to an event. This callback will not be executed more than once if the event is trigger mutiple times
       * @param {string} eventName - name of the event.
       * @param {function} callback - callback executed when this event is triggered
       */
      once: function (eventName, callback) {
        that.registerListener.bind(that)(eventName, callback, 1);
      },

      /**
       * Attach a callback to an event. This callback will be executed will not be executed more than the number if the event is trigger mutiple times
       * @param {number} number - max number of executions
       * @param {string} eventName - name of the event.
       * @param {function} callback - callback executed when this event is triggered
       */
      exactly: function (number, eventName, callback) {
        that.registerListener.bind(that)(eventName, callback, number);
      },

      /**
       * Kill an event with all it's callbacks
       * @param {string} eventName - name of the event.
       */
      die: function (eventName) {
        delete that.listeners[eventName];
      },

      /**
       * Kill an event with all it's callbacks
       * @param {string} eventName - name of the event.
       */
      off: function (eventName) {
        this.die(eventName);
      },

      /**
       * Remove the callback for the given event
       * @param {string} eventName - name of the event.
       * @param {callback} callback - the callback to remove (undefined to remove all of them).
       */
      detach: function (eventName, callback) {
        for (var k in that.listeners[eventName]) {
          if (
            that.listeners[eventName].hasOwnProperty(k) && 
            (that.listeners[eventName][k].callback === callback || callback === undefined)
          ) {
            that.listeners[eventName].splice(k, 1);
          }
        }
      },

      /**
       * Remove all the events
       */
      detachAll: function () {
        for (var eventName in that.listeners) {
          if (that.listeners.hasOwnProperty(eventName)) {
            this.detach(eventName);
          }
        }
      },

      /**
       * Emit the event
       * @param {string} eventName - name of the event.
       */
      emit: function (eventName, context) {
        var listeners = that.listeners[eventName] || [];
        var parentArgs = arguments;

        context = context || this;
        listeners.forEach(function (info, index) {
          var callback = info.callback;
          var number = info.number;

          if (context) {
            callback = callback.bind(context);
          }

          var args = [];
          Object
            .keys(parentArgs)
            .map(function (i) {
              if (i > 1) {
                args.push(parentArgs[i]);
              }
            });

          // this event cannot be fired again, remove from the stack
          if (that.toBeRemoved(info)) {
            that.listeners[eventName].splice(index, 1);
          }

          callback.apply(null, args);
        });
      }
    };
  };

  return EventBus;
});

/***/ }),

/***/ "./node_modules/lz-string/libs/lz-string.js":
/*!**************************************************!*\
  !*** ./node_modules/lz-string/libs/lz-string.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;// Copyright (c) 2013 Pieroxy <pieroxy@pieroxy.net>
// This work is free. You can redistribute it and/or modify it
// under the terms of the WTFPL, Version 2
// For more information see LICENSE.txt or http://www.wtfpl.net/
//
// For more information, the home page:
// http://pieroxy.net/blog/pages/lz-string/testing.html
//
// LZ-based compression algorithm, version 1.4.4
var LZString = (function() {

// private property
var f = String.fromCharCode;
var keyStrBase64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
var keyStrUriSafe = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$";
var baseReverseDic = {};

function getBaseValue(alphabet, character) {
  if (!baseReverseDic[alphabet]) {
    baseReverseDic[alphabet] = {};
    for (var i=0 ; i<alphabet.length ; i++) {
      baseReverseDic[alphabet][alphabet.charAt(i)] = i;
    }
  }
  return baseReverseDic[alphabet][character];
}

var LZString = {
  compressToBase64 : function (input) {
    if (input == null) return "";
    var res = LZString._compress(input, 6, function(a){return keyStrBase64.charAt(a);});
    switch (res.length % 4) { // To produce valid Base64
    default: // When could this happen ?
    case 0 : return res;
    case 1 : return res+"===";
    case 2 : return res+"==";
    case 3 : return res+"=";
    }
  },

  decompressFromBase64 : function (input) {
    if (input == null) return "";
    if (input == "") return null;
    return LZString._decompress(input.length, 32, function(index) { return getBaseValue(keyStrBase64, input.charAt(index)); });
  },

  compressToUTF16 : function (input) {
    if (input == null) return "";
    return LZString._compress(input, 15, function(a){return f(a+32);}) + " ";
  },

  decompressFromUTF16: function (compressed) {
    if (compressed == null) return "";
    if (compressed == "") return null;
    return LZString._decompress(compressed.length, 16384, function(index) { return compressed.charCodeAt(index) - 32; });
  },

  //compress into uint8array (UCS-2 big endian format)
  compressToUint8Array: function (uncompressed) {
    var compressed = LZString.compress(uncompressed);
    var buf=new Uint8Array(compressed.length*2); // 2 bytes per character

    for (var i=0, TotalLen=compressed.length; i<TotalLen; i++) {
      var current_value = compressed.charCodeAt(i);
      buf[i*2] = current_value >>> 8;
      buf[i*2+1] = current_value % 256;
    }
    return buf;
  },

  //decompress from uint8array (UCS-2 big endian format)
  decompressFromUint8Array:function (compressed) {
    if (compressed===null || compressed===undefined){
        return LZString.decompress(compressed);
    } else {
        var buf=new Array(compressed.length/2); // 2 bytes per character
        for (var i=0, TotalLen=buf.length; i<TotalLen; i++) {
          buf[i]=compressed[i*2]*256+compressed[i*2+1];
        }

        var result = [];
        buf.forEach(function (c) {
          result.push(f(c));
        });
        return LZString.decompress(result.join(''));

    }

  },


  //compress into a string that is already URI encoded
  compressToEncodedURIComponent: function (input) {
    if (input == null) return "";
    return LZString._compress(input, 6, function(a){return keyStrUriSafe.charAt(a);});
  },

  //decompress from an output of compressToEncodedURIComponent
  decompressFromEncodedURIComponent:function (input) {
    if (input == null) return "";
    if (input == "") return null;
    input = input.replace(/ /g, "+");
    return LZString._decompress(input.length, 32, function(index) { return getBaseValue(keyStrUriSafe, input.charAt(index)); });
  },

  compress: function (uncompressed) {
    return LZString._compress(uncompressed, 16, function(a){return f(a);});
  },
  _compress: function (uncompressed, bitsPerChar, getCharFromInt) {
    if (uncompressed == null) return "";
    var i, value,
        context_dictionary= {},
        context_dictionaryToCreate= {},
        context_c="",
        context_wc="",
        context_w="",
        context_enlargeIn= 2, // Compensate for the first entry which should not count
        context_dictSize= 3,
        context_numBits= 2,
        context_data=[],
        context_data_val=0,
        context_data_position=0,
        ii;

    for (ii = 0; ii < uncompressed.length; ii += 1) {
      context_c = uncompressed.charAt(ii);
      if (!Object.prototype.hasOwnProperty.call(context_dictionary,context_c)) {
        context_dictionary[context_c] = context_dictSize++;
        context_dictionaryToCreate[context_c] = true;
      }

      context_wc = context_w + context_c;
      if (Object.prototype.hasOwnProperty.call(context_dictionary,context_wc)) {
        context_w = context_wc;
      } else {
        if (Object.prototype.hasOwnProperty.call(context_dictionaryToCreate,context_w)) {
          if (context_w.charCodeAt(0)<256) {
            for (i=0 ; i<context_numBits ; i++) {
              context_data_val = (context_data_val << 1);
              if (context_data_position == bitsPerChar-1) {
                context_data_position = 0;
                context_data.push(getCharFromInt(context_data_val));
                context_data_val = 0;
              } else {
                context_data_position++;
              }
            }
            value = context_w.charCodeAt(0);
            for (i=0 ; i<8 ; i++) {
              context_data_val = (context_data_val << 1) | (value&1);
              if (context_data_position == bitsPerChar-1) {
                context_data_position = 0;
                context_data.push(getCharFromInt(context_data_val));
                context_data_val = 0;
              } else {
                context_data_position++;
              }
              value = value >> 1;
            }
          } else {
            value = 1;
            for (i=0 ; i<context_numBits ; i++) {
              context_data_val = (context_data_val << 1) | value;
              if (context_data_position ==bitsPerChar-1) {
                context_data_position = 0;
                context_data.push(getCharFromInt(context_data_val));
                context_data_val = 0;
              } else {
                context_data_position++;
              }
              value = 0;
            }
            value = context_w.charCodeAt(0);
            for (i=0 ; i<16 ; i++) {
              context_data_val = (context_data_val << 1) | (value&1);
              if (context_data_position == bitsPerChar-1) {
                context_data_position = 0;
                context_data.push(getCharFromInt(context_data_val));
                context_data_val = 0;
              } else {
                context_data_position++;
              }
              value = value >> 1;
            }
          }
          context_enlargeIn--;
          if (context_enlargeIn == 0) {
            context_enlargeIn = Math.pow(2, context_numBits);
            context_numBits++;
          }
          delete context_dictionaryToCreate[context_w];
        } else {
          value = context_dictionary[context_w];
          for (i=0 ; i<context_numBits ; i++) {
            context_data_val = (context_data_val << 1) | (value&1);
            if (context_data_position == bitsPerChar-1) {
              context_data_position = 0;
              context_data.push(getCharFromInt(context_data_val));
              context_data_val = 0;
            } else {
              context_data_position++;
            }
            value = value >> 1;
          }


        }
        context_enlargeIn--;
        if (context_enlargeIn == 0) {
          context_enlargeIn = Math.pow(2, context_numBits);
          context_numBits++;
        }
        // Add wc to the dictionary.
        context_dictionary[context_wc] = context_dictSize++;
        context_w = String(context_c);
      }
    }

    // Output the code for w.
    if (context_w !== "") {
      if (Object.prototype.hasOwnProperty.call(context_dictionaryToCreate,context_w)) {
        if (context_w.charCodeAt(0)<256) {
          for (i=0 ; i<context_numBits ; i++) {
            context_data_val = (context_data_val << 1);
            if (context_data_position == bitsPerChar-1) {
              context_data_position = 0;
              context_data.push(getCharFromInt(context_data_val));
              context_data_val = 0;
            } else {
              context_data_position++;
            }
          }
          value = context_w.charCodeAt(0);
          for (i=0 ; i<8 ; i++) {
            context_data_val = (context_data_val << 1) | (value&1);
            if (context_data_position == bitsPerChar-1) {
              context_data_position = 0;
              context_data.push(getCharFromInt(context_data_val));
              context_data_val = 0;
            } else {
              context_data_position++;
            }
            value = value >> 1;
          }
        } else {
          value = 1;
          for (i=0 ; i<context_numBits ; i++) {
            context_data_val = (context_data_val << 1) | value;
            if (context_data_position == bitsPerChar-1) {
              context_data_position = 0;
              context_data.push(getCharFromInt(context_data_val));
              context_data_val = 0;
            } else {
              context_data_position++;
            }
            value = 0;
          }
          value = context_w.charCodeAt(0);
          for (i=0 ; i<16 ; i++) {
            context_data_val = (context_data_val << 1) | (value&1);
            if (context_data_position == bitsPerChar-1) {
              context_data_position = 0;
              context_data.push(getCharFromInt(context_data_val));
              context_data_val = 0;
            } else {
              context_data_position++;
            }
            value = value >> 1;
          }
        }
        context_enlargeIn--;
        if (context_enlargeIn == 0) {
          context_enlargeIn = Math.pow(2, context_numBits);
          context_numBits++;
        }
        delete context_dictionaryToCreate[context_w];
      } else {
        value = context_dictionary[context_w];
        for (i=0 ; i<context_numBits ; i++) {
          context_data_val = (context_data_val << 1) | (value&1);
          if (context_data_position == bitsPerChar-1) {
            context_data_position = 0;
            context_data.push(getCharFromInt(context_data_val));
            context_data_val = 0;
          } else {
            context_data_position++;
          }
          value = value >> 1;
        }


      }
      context_enlargeIn--;
      if (context_enlargeIn == 0) {
        context_enlargeIn = Math.pow(2, context_numBits);
        context_numBits++;
      }
    }

    // Mark the end of the stream
    value = 2;
    for (i=0 ; i<context_numBits ; i++) {
      context_data_val = (context_data_val << 1) | (value&1);
      if (context_data_position == bitsPerChar-1) {
        context_data_position = 0;
        context_data.push(getCharFromInt(context_data_val));
        context_data_val = 0;
      } else {
        context_data_position++;
      }
      value = value >> 1;
    }

    // Flush the last char
    while (true) {
      context_data_val = (context_data_val << 1);
      if (context_data_position == bitsPerChar-1) {
        context_data.push(getCharFromInt(context_data_val));
        break;
      }
      else context_data_position++;
    }
    return context_data.join('');
  },

  decompress: function (compressed) {
    if (compressed == null) return "";
    if (compressed == "") return null;
    return LZString._decompress(compressed.length, 32768, function(index) { return compressed.charCodeAt(index); });
  },

  _decompress: function (length, resetValue, getNextValue) {
    var dictionary = [],
        next,
        enlargeIn = 4,
        dictSize = 4,
        numBits = 3,
        entry = "",
        result = [],
        i,
        w,
        bits, resb, maxpower, power,
        c,
        data = {val:getNextValue(0), position:resetValue, index:1};

    for (i = 0; i < 3; i += 1) {
      dictionary[i] = i;
    }

    bits = 0;
    maxpower = Math.pow(2,2);
    power=1;
    while (power!=maxpower) {
      resb = data.val & data.position;
      data.position >>= 1;
      if (data.position == 0) {
        data.position = resetValue;
        data.val = getNextValue(data.index++);
      }
      bits |= (resb>0 ? 1 : 0) * power;
      power <<= 1;
    }

    switch (next = bits) {
      case 0:
          bits = 0;
          maxpower = Math.pow(2,8);
          power=1;
          while (power!=maxpower) {
            resb = data.val & data.position;
            data.position >>= 1;
            if (data.position == 0) {
              data.position = resetValue;
              data.val = getNextValue(data.index++);
            }
            bits |= (resb>0 ? 1 : 0) * power;
            power <<= 1;
          }
        c = f(bits);
        break;
      case 1:
          bits = 0;
          maxpower = Math.pow(2,16);
          power=1;
          while (power!=maxpower) {
            resb = data.val & data.position;
            data.position >>= 1;
            if (data.position == 0) {
              data.position = resetValue;
              data.val = getNextValue(data.index++);
            }
            bits |= (resb>0 ? 1 : 0) * power;
            power <<= 1;
          }
        c = f(bits);
        break;
      case 2:
        return "";
    }
    dictionary[3] = c;
    w = c;
    result.push(c);
    while (true) {
      if (data.index > length) {
        return "";
      }

      bits = 0;
      maxpower = Math.pow(2,numBits);
      power=1;
      while (power!=maxpower) {
        resb = data.val & data.position;
        data.position >>= 1;
        if (data.position == 0) {
          data.position = resetValue;
          data.val = getNextValue(data.index++);
        }
        bits |= (resb>0 ? 1 : 0) * power;
        power <<= 1;
      }

      switch (c = bits) {
        case 0:
          bits = 0;
          maxpower = Math.pow(2,8);
          power=1;
          while (power!=maxpower) {
            resb = data.val & data.position;
            data.position >>= 1;
            if (data.position == 0) {
              data.position = resetValue;
              data.val = getNextValue(data.index++);
            }
            bits |= (resb>0 ? 1 : 0) * power;
            power <<= 1;
          }

          dictionary[dictSize++] = f(bits);
          c = dictSize-1;
          enlargeIn--;
          break;
        case 1:
          bits = 0;
          maxpower = Math.pow(2,16);
          power=1;
          while (power!=maxpower) {
            resb = data.val & data.position;
            data.position >>= 1;
            if (data.position == 0) {
              data.position = resetValue;
              data.val = getNextValue(data.index++);
            }
            bits |= (resb>0 ? 1 : 0) * power;
            power <<= 1;
          }
          dictionary[dictSize++] = f(bits);
          c = dictSize-1;
          enlargeIn--;
          break;
        case 2:
          return result.join('');
      }

      if (enlargeIn == 0) {
        enlargeIn = Math.pow(2, numBits);
        numBits++;
      }

      if (dictionary[c]) {
        entry = dictionary[c];
      } else {
        if (c === dictSize) {
          entry = w + w.charAt(0);
        } else {
          return null;
        }
      }
      result.push(entry);

      // Add w+entry[0] to the dictionary.
      dictionary[dictSize++] = w + entry.charAt(0);
      enlargeIn--;

      w = entry;

      if (enlargeIn == 0) {
        enlargeIn = Math.pow(2, numBits);
        numBits++;
      }

    }
  }
};
  return LZString;
})();

if (true) {
  !(__WEBPACK_AMD_DEFINE_RESULT__ = (function () { return LZString; }).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
} else {}


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

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./node_modules/tesseract.js/package.json":
/*!************************************************!*\
  !*** ./node_modules/tesseract.js/package.json ***!
  \************************************************/
/*! exports provided: _from, _id, _inBundle, _integrity, _location, _phantomChildren, _requested, _requiredBy, _resolved, _shasum, _spec, _where, author, browser, bugs, bundleDependencies, dependencies, deprecated, description, devDependencies, homepage, license, main, name, repository, scripts, version, default */
/***/ (function(module) {

module.exports = {"_from":"tesseract.js","_id":"tesseract.js@1.0.19","_inBundle":false,"_integrity":"sha512-UXnCd2GkDOuVwPYv8MryzDwXEPLJ/BjEuT76PWzVC8XhZbsChRkpoiKDSGDbZ2BW2rwg1yBWJ0joSdCTw1umBA==","_location":"/tesseract.js","_phantomChildren":{},"_requested":{"type":"tag","registry":true,"raw":"tesseract.js","name":"tesseract.js","escapedName":"tesseract.js","rawSpec":"","saveSpec":null,"fetchSpec":"latest"},"_requiredBy":["#USER","/"],"_resolved":"https://registry.npmjs.org/tesseract.js/-/tesseract.js-1.0.19.tgz","_shasum":"f66a9accef1aa933ec7e574d1bb3205f7d2aef65","_spec":"tesseract.js","_where":"/Projects/screenshotToCodeSandbox.git","author":"","browser":{"./src/node/index.js":"./src/browser/index.js"},"bugs":{"url":"https://github.com/naptha/tesseract.js/issues"},"bundleDependencies":false,"dependencies":{"file-type":"^3.8.0","is-url":"1.2.2","isomorphic-fetch":"^2.2.1","jpeg-js":"^0.2.0","level-js":"^2.2.4","node-fetch":"^1.6.3","object-assign":"^4.1.0","png.js":"^0.2.1","tesseract.js-core":"^1.0.2"},"deprecated":false,"description":"Pure Javascript Multilingual OCR","devDependencies":{"babel-preset-es2015":"^6.16.0","babelify":"^7.3.0","browserify":"^13.1.0","concurrently":"^3.1.0","envify":"^3.4.1","http-server":"^0.9.0","pako":"^1.0.3","uglify-js":"^3.4.9","watchify":"^3.7.0"},"homepage":"https://github.com/naptha/tesseract.js","license":"Apache-2.0","main":"src/index.js","name":"tesseract.js","repository":{"type":"git","url":"git+https://github.com/naptha/tesseract.js.git"},"scripts":{"build":"browserify src/index.js -t [ babelify --presets [ es2015 ] ] -o dist/tesseract.js --standalone Tesseract && browserify src/browser/worker.js -t [ babelify --presets [ es2015 ] ] -o dist/worker.js && uglifyjs dist/tesseract.js --source-map -o dist/tesseract.min.js && uglifyjs dist/worker.js --source-map -o dist/worker.min.js","release":"npm run build && git commit -am 'new release' && git push && git tag `jq -r '.version' package.json` && git push origin --tags && npm publish","start":"concurrently --kill-others \"watchify src/index.js  -t [ envify --TESS_ENV development ] -t [ babelify --presets [ es2015 ] ] -o dist/tesseract.dev.js --standalone Tesseract\" \"watchify src/browser/worker.js  -t [ envify --TESS_ENV development ] -t [ babelify --presets [ es2015 ] ] -o dist/worker.dev.js\" \"http-server -p 7355\""},"version":"1.0.19"};

/***/ }),

/***/ "./node_modules/tesseract.js/src/browser/index.js":
/*!********************************************************!*\
  !*** ./node_modules/tesseract.js/src/browser/index.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {var defaultOptions = {
    // workerPath: 'https://cdn.jsdelivr.net/gh/naptha/tesseract.js@0.2.0/dist/worker.js',
    corePath: 'https://cdn.jsdelivr.net/gh/naptha/tesseract.js-core@0.1.0/index.js',    
    langPath: 'https://tessdata.projectnaptha.com/3.02/',
}

if (process.env.TESS_ENV === "development") {
    console.debug('Using Development Configuration')
    defaultOptions.workerPath = location.protocol + '//' + location.host + '/dist/worker.dev.js?nocache=' + Math.random().toString(36).slice(3)
}else{
    var version = __webpack_require__(/*! ../../package.json */ "./node_modules/tesseract.js/package.json").version;
    defaultOptions.workerPath = 'https://cdn.jsdelivr.net/gh/naptha/tesseract.js@' + version + '/dist/worker.js'
}

exports.defaultOptions = defaultOptions;


exports.spawnWorker = function spawnWorker(instance, workerOptions){
    if(Blob && URL){
        var blob = new Blob(['importScripts("' + workerOptions.workerPath + '");'], {
            type: 'application/javascript'
        });
        var worker = new Worker(URL.createObjectURL(blob));
    }else{
        var worker = new Worker(workerOptions.workerPath)
    }

    worker.onmessage = function(e){
        var packet = e.data;
        instance._recv(packet)
    }
    return worker
}

exports.terminateWorker = function(instance){
    instance.worker.terminate()
}

exports.sendPacket = function sendPacket(instance, packet){
    loadImage(packet.payload.image, function(img){
        packet.payload.image = img
        instance.worker.postMessage(packet) 
    })
}


function loadImage(image, cb){
    if(typeof image === 'string'){
        if(/^\#/.test(image)){
            // element css selector
            return loadImage(document.querySelector(image), cb)
        }else if(/(blob|data)\:/.test(image)){
            // data url
            var im = new Image
            im.src = image;
            im.onload = e => loadImage(im, cb);
            im.onerror = e => { throw e; };
            return
        }else{
            var xhr = new XMLHttpRequest();
            xhr.open('GET', image, true)
            xhr.responseType = "blob";
            
            xhr.onload = e => {
                if (xhr.status >= 400){
                  throw new Error('Fail to get image as Blob');
                }else{
                    loadImage(xhr.response, cb);
                }
            };
            xhr.onerror = e => { throw e; }; 
            
            xhr.send(null)
            return
        }
    }else if(image instanceof File){
        // files
        var fr = new FileReader()
        fr.onload = e => loadImage(fr.result, cb);
        fr.onerror = e => { throw e; }; 
        fr.readAsDataURL(image)
        return
    }else if(image instanceof Blob){
        return loadImage(URL.createObjectURL(image), cb)
    }else if(image.getContext){
        // canvas element
        return loadImage(image.getContext('2d'), cb)
    }else if(image.tagName == "IMG" || image.tagName == "VIDEO"){
        // image element or video element
        var c = document.createElement('canvas');
        c.width  = image.naturalWidth  || image.videoWidth;
        c.height = image.naturalHeight || image.videoHeight;
        var ctx = c.getContext('2d');
        ctx.drawImage(image, 0, 0);
        return loadImage(ctx, cb)
    }else if(image.getImageData){
        // canvas context
        var data = image.getImageData(0, 0, image.canvas.width, image.canvas.height);
        return loadImage(data, cb)
    }else{
        return cb(image)
    }
    throw new Error('Missing return in loadImage cascade')

}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/tesseract.js/src/common/circularize.js":
/*!*************************************************************!*\
  !*** ./node_modules/tesseract.js/src/common/circularize.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// The result of dump.js is a big JSON tree
// which can be easily serialized (for instance
// to be sent from a webworker to the main app
// or through Node's IPC), but we want
// a (circular) DOM-like interface for walking
// through the data. 

module.exports = function circularize(page){
    page.paragraphs = []
    page.lines = []
    page.words = []
    page.symbols = []

    page.blocks.forEach(function(block){
        block.page = page;

        block.lines = []
        block.words = []
        block.symbols = []

        block.paragraphs.forEach(function(para){
            para.block = block;
            para.page = page;

            para.words = []
            para.symbols = []
            
            para.lines.forEach(function(line){
                line.paragraph = para;
                line.block = block;
                line.page = page;

                line.symbols = []

                line.words.forEach(function(word){
                    word.line = line;
                    word.paragraph = para;
                    word.block = block;
                    word.page = page;
                    word.symbols.forEach(function(sym){
                        sym.word = word;
                        sym.line = line;
                        sym.paragraph = para;
                        sym.block = block;
                        sym.page = page;
                        
                        sym.line.symbols.push(sym)
                        sym.paragraph.symbols.push(sym)
                        sym.block.symbols.push(sym)
                        sym.page.symbols.push(sym)
                    })
                    word.paragraph.words.push(word)
                    word.block.words.push(word)
                    word.page.words.push(word)
                })
                line.block.lines.push(line)
                line.page.lines.push(line)
            })
            para.page.paragraphs.push(para)
        })
    })
    return page
}

/***/ }),

/***/ "./node_modules/tesseract.js/src/common/job.js":
/*!*****************************************************!*\
  !*** ./node_modules/tesseract.js/src/common/job.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const adapter = __webpack_require__(/*! ../node/index.js */ "./node_modules/tesseract.js/src/browser/index.js")

let jobCounter = 0;

module.exports = class TesseractJob {
    constructor(instance){
        this.id = 'Job-' + (++jobCounter) + '-' + Math.random().toString(16).slice(3, 8)

        this._instance = instance;
        this._resolve = []
        this._reject = []
        this._progress = []
        this._finally = []
    }

    then(resolve, reject){
        if(this._resolve.push){
            this._resolve.push(resolve) 
        }else{
            resolve(this._resolve)
        }

        if(reject) this.catch(reject);
        return this;
    }
    catch(reject){
        if(this._reject.push){
            this._reject.push(reject) 
        }else{
            reject(this._reject)
        }
        return this;
    }
    progress(fn){
        this._progress.push(fn)
        return this;
    }
    finally(fn) {
        this._finally.push(fn)
        return this;  
    }
    _send(action, payload){
        adapter.sendPacket(this._instance, {
            jobId: this.id,
            action: action,
            payload: payload
        })
    }

    _handle(packet){
        var data = packet.data;
        let runFinallyCbs = false;

        if(packet.status === 'resolve'){
            if(this._resolve.length === 0) console.log(data);
            this._resolve.forEach(fn => {
                var ret = fn(data);
                if(ret && typeof ret.then == 'function'){
                    console.warn('TesseractJob instances do not chain like ES6 Promises. To convert it into a real promise, use Promise.resolve.')
                }
            })
            this._resolve = data;
            this._instance._dequeue()
            runFinallyCbs = true;
        }else if(packet.status === 'reject'){
            if(this._reject.length === 0) console.error(data);
            this._reject.forEach(fn => fn(data))
            this._reject = data;
            this._instance._dequeue()
            runFinallyCbs = true;
        }else if(packet.status === 'progress'){
            this._progress.forEach(fn => fn(data))
        }else{
            console.warn('Message type unknown', packet.status)
        }

        if (runFinallyCbs) {
            this._finally.forEach(fn => fn(data));
        }
    }
}


/***/ }),

/***/ "./node_modules/tesseract.js/src/index.js":
/*!************************************************!*\
  !*** ./node_modules/tesseract.js/src/index.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const adapter = __webpack_require__(/*! ./node/index.js */ "./node_modules/tesseract.js/src/browser/index.js")
const circularize = __webpack_require__(/*! ./common/circularize.js */ "./node_modules/tesseract.js/src/common/circularize.js")
const TesseractJob = __webpack_require__(/*! ./common/job */ "./node_modules/tesseract.js/src/common/job.js");
const version = __webpack_require__(/*! ../package.json */ "./node_modules/tesseract.js/package.json").version;

const create = function(workerOptions = {}){
	var worker = new TesseractWorker(Object.assign({}, adapter.defaultOptions, workerOptions));
	worker.create = create;
	worker.version = version;
	return worker;
}

class TesseractWorker {
	constructor(workerOptions){
		this.worker = null;
		this.workerOptions = workerOptions;
		this._currentJob = null;
		this._queue = [];
	}

	recognize(image, options = {}){
		return this._delay(job => {
			if (typeof options === 'string') options = {lang: options}
			options.lang = options.lang || 'eng';

			job._send('recognize', { image, options, workerOptions: this.workerOptions });
		})
	}
	detect(image, options = {}){
		return this._delay(job => {
			job._send('detect', { image, options, workerOptions: this.workerOptions });
		})
	}

	terminate(){
		if(this.worker) adapter.terminateWorker(this);
		this.worker = null;
		this._currentJob = null;
		this._queue = [];
	}

	_delay(fn){
		if(!this.worker) this.worker = adapter.spawnWorker(this, this.workerOptions);

		var job = new TesseractJob(this);
		this._queue.push(e => {
			this._queue.shift();
			this._currentJob = job;
			fn(job);
		});
		if(!this._currentJob) this._dequeue();
		return job;
	}

	_dequeue(){
		this._currentJob = null;
		if(this._queue.length){
			this._queue[0]();
		}
	}

	_recv(packet){
        if(packet.status === 'resolve' && packet.action === 'recognize'){
            packet.data = circularize(packet.data);
        }

		if(this._currentJob.id === packet.jobId){
			this._currentJob._handle(packet)
		} else {
			console.warn('Job ID ' + packet.jobId + ' not known.')
		}
	}
}

module.exports = create();


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29kZXNhbmRib3gtaW1wb3J0LXV0aWxzL2xpYi9hcGkvZGVmaW5lLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb2Rlc2FuZGJveC9saWIvYXBpL2RlZmluZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZmlsZXBvbmQvZGlzdC9maWxlcG9uZC5jc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvdXJsLWVzY2FwZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZmlsZXBvbmQvZGlzdC9maWxlcG9uZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvanMtZXZlbnQtYnVzL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbHotc3RyaW5nL2xpYnMvbHotc3RyaW5nLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9wcm9jZXNzL2Jyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL3VybHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Rlc3NlcmFjdC5qcy9zcmMvYnJvd3Nlci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdGVzc2VyYWN0LmpzL3NyYy9jb21tb24vY2lyY3VsYXJpemUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Rlc3NlcmFjdC5qcy9zcmMvY29tbW9uL2pvYi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdGVzc2VyYWN0LmpzL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQWE7QUFDYiw4Q0FBOEMsY0FBYztBQUM1RCxlQUFlLG1CQUFPLENBQUMsNkRBQVc7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEI7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDOzs7Ozs7Ozs7Ozs7QUNiYTtBQUNiO0FBQ0EsZUFBZSxtQkFBTyxDQUFDLDBHQUF5QztBQUNoRTtBQUNBLGtDOzs7Ozs7Ozs7OztBQ0pBLDJCQUEyQixtQkFBTyxDQUFDLDJGQUFzQztBQUN6RTtBQUNBLGNBQWMsUUFBUyxvTUFBb00sdUJBQXVCLHFCQUFxQixnQkFBZ0IsZUFBZSxlQUFlLGNBQWMsbUNBQW1DLGtDQUFrQywwQkFBMEIsd0JBQXdCLEdBQUcseUVBQXlFLHVCQUF1QixjQUFjLGVBQWUsY0FBYyxnQkFBZ0IsNEJBQTRCLGVBQWUsaUJBQWlCLEdBQUcscUJBQXFCLHVCQUF1QixXQUFXLFlBQVksYUFBYSxjQUFjLHFCQUFxQixpQkFBaUIseUJBQXlCLHlCQUF5QixvQ0FBb0MsR0FBRywwQkFBMEIsdUJBQXVCLDRDQUE0QyxvQ0FBb0MsV0FBVyxZQUFZLGVBQWUsZ0JBQWdCLHNCQUFzQixxQkFBcUIsd0JBQXdCLHVCQUF1QixvQ0FBb0MsR0FBRywyQkFBMkIsdUJBQXVCLFlBQVksYUFBYSxXQUFXLGNBQWMsbUJBQW1CLGtCQUFrQiw0QkFBNEIsd0JBQXdCLGdCQUFnQiw4QkFBOEIsMkJBQTJCLDBCQUEwQixzQkFBc0Isb0NBQW9DLEdBQUcsZ0dBQWdHLG1CQUFtQixjQUFjLG1CQUFtQixHQUFHLGlDQUFpQyxvQkFBb0IsdUJBQXVCLHdCQUF3Qix1QkFBdUIscUJBQXFCLEdBQUcsNkJBQTZCLCtCQUErQixzQ0FBc0MsbUNBQW1DLDJDQUEyQyxtQ0FBbUMsb0JBQW9CLEdBQUcsZ0VBQWdFLGlCQUFpQixHQUFHLCtGQUErRixtQkFBbUIsbUJBQW1CLG9CQUFvQix5QkFBeUIseUJBQXlCLGNBQWMsZUFBZSxpQkFBaUIsa0JBQWtCLG9DQUFvQyxHQUFHLG1FQUFtRSx1QkFBdUIscUJBQXFCLGdCQUFnQixlQUFlLGVBQWUsY0FBYyxtQ0FBbUMsa0NBQWtDLDBCQUEwQix3QkFBd0IsR0FBRyxrRUFBa0UsZ0JBQWdCLGlCQUFpQixHQUFHLHFFQUFxRSx1QkFBdUIsa0JBQWtCLG1CQUFtQixpQkFBaUIsb0JBQW9CLGdCQUFnQixHQUFHLHNEQUFzRCxpQkFBaUIsZ0JBQWdCLHVCQUF1Qix5Q0FBeUMsMkJBQTJCLCtDQUErQyx5Q0FBeUMsR0FBRyw2RUFBNkUsdURBQXVELEdBQUcsMkNBQTJDLG9DQUFvQywwQ0FBMEMsR0FBRywwQkFBMEIscUJBQXFCLGtCQUFrQiwyQkFBMkIsNEJBQTRCLFlBQVksd0JBQXdCLGlCQUFpQixvQ0FBb0MseUJBQXlCLDhCQUE4QiwyQkFBMkIsMEJBQTBCLHNCQUFzQixHQUFHLDBCQUEwQixjQUFjLEdBQUcsa0RBQWtELHNCQUFzQixxQkFBcUIsNEJBQTRCLHFCQUFxQix3QkFBd0IsZ0JBQWdCLEdBQUcsaURBQWlELHVCQUF1QixpQkFBaUIsMENBQTBDLHdCQUF3QixHQUFHLHVEQUF1RCxrQkFBa0IsR0FBRyw0QkFBNEIscUJBQXFCLGtCQUFrQiwyQkFBMkIsMEJBQTBCLGlCQUFpQixtQkFBbUIsY0FBYyxzQkFBc0Isc0JBQXNCLG9DQUFvQyx5QkFBeUIsOEJBQThCLDJCQUEyQiwwQkFBMEIsc0JBQXNCLEdBQUcsNEJBQTRCLGNBQWMsd0JBQXdCLEdBQUcsc0RBQXNELHNCQUFzQixxQkFBcUIsR0FBRyxxREFBcUQsdUJBQXVCLGlCQUFpQiwwQ0FBMEMsR0FBRyxtRkFBbUYsaUJBQWlCLGNBQWMsZUFBZSxpQkFBaUIsaUJBQWlCLEdBQUcsMkRBQTJELHVCQUF1QixxQkFBcUIsZ0JBQWdCLGVBQWUsZUFBZSxjQUFjLG1DQUFtQyxrQ0FBa0MsMEJBQTBCLHdCQUF3QixHQUFHLHFCQUFxQixxQkFBcUIsa0JBQWtCLGlCQUFpQiw0QkFBNEIsK0JBQStCLGdCQUFnQix5QkFBeUIsR0FBRywwQ0FBMEMsc0JBQXNCLHlCQUF5QixHQUFHLDREQUE0RCx5QkFBeUIsOEJBQThCLDJCQUEyQiwwQkFBMEIsc0JBQXNCLGVBQWUsR0FBRyw0SkFBNEosdUJBQXVCLEdBQUcsd0NBQXdDLG1CQUFtQixHQUFHLHlDQUF5QyxvQkFBb0IsR0FBRywwQ0FBMEMsK0JBQStCLEdBQUcsMENBQTBDLG9CQUFvQixHQUFHLHlDQUF5Qyw4QkFBOEIsR0FBRyxpREFBaUQseUJBQXlCLEdBQUcsc0VBQXNFLDJCQUEyQixHQUFHLHFFQUFxRSwwQkFBMEIsR0FBRyx5TEFBeUwseUJBQXlCLEdBQUcseUdBQXlHLG9EQUFvRCw0Q0FBNEMsR0FBRyw2SkFBNkosZUFBZSxHQUFHLGlUQUFpVCxpQkFBaUIsR0FBRyxpUEFBaVAsK0NBQStDLHVDQUF1QyxHQUFHLDBFQUEwRSwrQ0FBK0MsdUNBQXVDLEdBQUcsa0RBQWtELFFBQVEsdUNBQXVDLCtCQUErQixLQUFLLFVBQVUseUNBQXlDLGlDQUFpQyxLQUFLLEdBQUcsbUJBQW1CLFFBQVEsdUNBQXVDLCtCQUErQixLQUFLLFVBQVUseUNBQXlDLGlDQUFpQyxLQUFLLEdBQUcsOEJBQThCLGlCQUFpQiwrQ0FBK0MsdUNBQXVDLEtBQUssaUJBQWlCLDZDQUE2QyxxQ0FBcUMsS0FBSyx5QkFBeUIsNkNBQTZDLHFDQUFxQyxLQUFLLGlCQUFpQiw0Q0FBNEMsb0NBQW9DLEtBQUssR0FBRyxzQkFBc0IsaUJBQWlCLCtDQUErQyx1Q0FBdUMsS0FBSyxpQkFBaUIsNkNBQTZDLHFDQUFxQyxLQUFLLHlCQUF5Qiw2Q0FBNkMscUNBQXFDLEtBQUssaUJBQWlCLDRDQUE0QyxvQ0FBb0MsS0FBSyxHQUFHLDZCQUE2QixRQUFRLGlCQUFpQixvQ0FBb0MsNEJBQTRCLGtEQUFrRCwwQ0FBMEMsS0FBSyxTQUFTLGlCQUFpQixvQ0FBb0MsNEJBQTRCLHFEQUFxRCw2Q0FBNkMsS0FBSyxVQUFVLGtDQUFrQywwQkFBMEIsa0RBQWtELDBDQUEwQyxLQUFLLEdBQUcscUJBQXFCLFFBQVEsaUJBQWlCLG9DQUFvQyw0QkFBNEIsa0RBQWtELDBDQUEwQyxLQUFLLFNBQVMsaUJBQWlCLG9DQUFvQyw0QkFBNEIscURBQXFELDZDQUE2QyxLQUFLLFVBQVUsa0NBQWtDLDBCQUEwQixrREFBa0QsMENBQTBDLEtBQUssR0FBRywwREFBMEQseUJBQXlCLEdBQUcsNkRBQTZELGdCQUFnQix1QkFBdUIsWUFBWSxXQUFXLGFBQWEsY0FBYyxpQkFBaUIsR0FBRyxtQ0FBbUMsaUJBQWlCLEdBQUcsbUNBQW1DLGlCQUFpQixHQUFHLDRCQUE0QixpQkFBaUIsR0FBRywwQkFBMEIsaUJBQWlCLEdBQUcscUJBQXFCLHVCQUF1QixXQUFXLFlBQVksYUFBYSxlQUFlLGVBQWUsbUJBQW1CLG9DQUFvQyxHQUFHLHNDQUFzQyxnQkFBZ0IsR0FBRyw4REFBOEQsaUVBQWlFLEdBQUcsMkJBQTJCLDhCQUE4QixHQUFHLDRFQUE0RSw4QkFBOEIsR0FBRyw2SEFBNkgsOEJBQThCLEdBQUcsMkJBQTJCLHlCQUF5Qix1Q0FBdUMsR0FBRyw4QkFBOEIsdUJBQXVCLFdBQVcsWUFBWSxhQUFhLGNBQWMsMkJBQTJCLEdBQUcscURBQXFELHVCQUF1Qix1QkFBdUIsc0NBQXNDLDRHQUE0RyxnRkFBZ0YsR0FBRyxtRUFBbUUsY0FBYyxhQUFhLEdBQUcsaURBQWlELDRCQUE0QixHQUFHLDBEQUEwRCxlQUFlLEdBQUcsNERBQTRELGNBQWMsR0FBRyx1REFBdUQseUNBQXlDLDJCQUEyQix1Q0FBdUMsaUNBQWlDLEdBQUcsNkVBQTZFLHVCQUF1QixXQUFXLGNBQWMsZUFBZSwwQkFBMEIsMkJBQTJCLEdBQUcsdUVBQXVFLGlCQUFpQixrQkFBa0IsR0FBRyw0REFBNEQsZ0JBQWdCLGlCQUFpQixvQkFBb0IsY0FBYyxHQUFHLDZKQUE2SixxQkFBcUIsR0FBRyx5S0FBeUssa0JBQWtCLEdBQUcsNkpBQTZKLGNBQWMsaUJBQWlCLGtCQUFrQiw0QkFBNEIsd0JBQXdCLGVBQWUsR0FBRyw2SkFBNkosa0JBQWtCLEdBQUcsdUtBQXVLLHFCQUFxQixpQkFBaUIsa0JBQWtCLHFCQUFxQixHQUFHLGtKQUFrSixZQUFZLGFBQWEsaUJBQWlCLEdBQUcsa0pBQWtKLGNBQWMsR0FBRyxrS0FBa0ssaUJBQWlCLEdBQUcsd0RBQXdELDRCQUE0QixxQkFBcUIsR0FBRyx5RUFBeUUsMkJBQTJCLEdBQUcsNkVBQTZFLGtCQUFrQixHQUFHLDJFQUEyRSxrQkFBa0IsR0FBRyw2RUFBNkUsa0JBQWtCLEdBQUcsMkJBQTJCLHlCQUF5Qiw4QkFBOEIsR0FBRyxzQkFBc0IsdUJBQXVCLFlBQVksV0FBVyxhQUFhLGNBQWMsNEJBQTRCLHlCQUF5QixHQUFHLGtEQUFrRCw0QkFBNEIsR0FBRyxtREFBbUQsa0JBQWtCLEdBQUcsNENBQTRDLHlDQUF5QyxpQ0FBaUMsNkNBQTZDLDRCQUE0QixHQUFHLDhFQUE4RSx1QkFBdUIsWUFBWSxXQUFXLGFBQWEsY0FBYyxlQUFlLEdBQUcsb0RBQW9ELGtCQUFrQixHQUFHLDBCQUEwQiw0Q0FBNEMsNkNBQTZDLG1DQUFtQyxHQUFHLCtCQUErQixnQkFBZ0IsdUJBQXVCLGdCQUFnQixZQUFZLGFBQWEsaUJBQWlCLDhCQUE4QixHQUFHLHVEQUF1RCwyQkFBMkIsd0NBQXdDLGdDQUFnQyx1Q0FBdUMsK0JBQStCLGdEQUFnRCx3Q0FBd0MsR0FBRyw2QkFBNkIseUNBQXlDLDBDQUEwQyxnQ0FBZ0MsR0FBRyxtQ0FBbUMsZ0JBQWdCLHVCQUF1QixnQkFBZ0IsWUFBWSxhQUFhLGNBQWMsOEJBQThCLEdBQUcsNkJBQTZCLDZCQUE2QixnQ0FBZ0MsbUNBQW1DLGdDQUFnQyxHQUFHLHdDQUF3Qyx1QkFBdUIsR0FBRyxtQ0FBbUMscUJBQXFCLGtCQUFrQixtQkFBbUIsZ0JBQWdCLGNBQWMseUJBQXlCLG9DQUFvQyxHQUFHLHVDQUF1QyxnQkFBZ0IsaUJBQWlCLHdCQUF3Qiw0QkFBNEIsR0FBRyx3Q0FBd0MsZUFBZSx5QkFBeUIsR0FBRyw4QkFBOEIsZUFBZSxHQUFHLDJCQUEyQixlQUFlLEdBQUcscUJBQXFCLGVBQWUsR0FBRyx3Q0FBd0MsZUFBZSxHQUFHLHdCQUF3QixlQUFlLEdBQUcscUJBQXFCLDBDQUEwQyx1QkFBdUIsdUJBQXVCLGdFQUFnRSxrREFBa0QsZ05BQWdOLHdFQUF3RSxxQkFBcUIsdUNBQXVDLG1CQUFtQiwrQkFBK0IsR0FBRyxxQkFBcUIsdUJBQXVCLHdCQUF3Qix5QkFBeUIsR0FBRyxrQ0FBa0MseUJBQXlCLEdBQUcsc0ZBQXNGLHVCQUF1QixHQUFHLDhDQUE4QyxvQkFBb0IsdUJBQXVCLEdBQUc7Ozs7Ozs7Ozs7Ozs7O0FDRi9sbEI7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCOztBQUVoQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx1Q0FBdUMsZ0JBQWdCO0FBQ3ZELE9BQU87QUFDUDtBQUNBO0FBQ0EsS0FBSztBQUNMLElBQUk7OztBQUdKO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLG1CQUFtQixpQkFBaUI7QUFDcEM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsZUFBZSxvQkFBb0I7QUFDbkMsNEJBQTRCO0FBQzVCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBLENBQUM7OztBQUdEO0FBQ0E7QUFDQTtBQUNBLHFEQUFxRCxjQUFjO0FBQ25FO0FBQ0EsQzs7Ozs7Ozs7Ozs7O0FDcEZhOztBQUViO0FBQ0E7QUFDQTtBQUNBLEdBQUc7OztBQUdIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEU7Ozs7Ozs7Ozs7O0FDbkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxFQUFFLEtBQTREO0FBQzlEO0FBQ0EsTUFBTSxTQUU0RDtBQUNsRSxDQUFDO0FBQ0Q7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQzs7QUFFaEM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHFDQUFxQztBQUNyQyxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlEQUF5RDtBQUN6RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxvQ0FBb0M7O0FBRXBDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSwrQkFBK0I7O0FBRS9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSwrQ0FBK0M7QUFDL0MsK0NBQStDO0FBQy9DLE9BQU87O0FBRVA7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVCw2Q0FBNkM7QUFDN0M7QUFDQSxPQUFPOztBQUVQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVULDZDQUE2QztBQUM3QztBQUNBLE9BQU87O0FBRVA7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHdCQUF3QjtBQUN4Qix3QkFBd0IsZUFBZSxzQkFBc0I7QUFDN0Qsd0JBQXdCLGVBQWUsS0FBSyxzQkFBc0IsRUFBRTtBQUNwRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMERBQTBEOztBQUUxRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDOztBQUV2QztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDOztBQUV2QztBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QjtBQUM1Qiw0QkFBNEI7O0FBRTVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLG9EQUFvRDs7QUFFcEQ7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsNkVBQTZFO0FBQzdFOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw4Q0FBOEM7QUFDOUM7O0FBRUE7QUFDQTtBQUNBLHlDQUF5Qzs7QUFFekM7QUFDQTtBQUNBLHFDQUFxQztBQUNyQzs7QUFFQTtBQUNBO0FBQ0EsdUNBQXVDO0FBQ3ZDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHlDQUF5QztBQUN6Qzs7QUFFQTtBQUNBO0FBQ0EsdUNBQXVDO0FBQ3ZDOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvREFBb0Q7QUFDcEQ7QUFDQSxtREFBbUQ7QUFDbkQ7QUFDQSxxREFBcUQ7QUFDckQ7QUFDQSx1REFBdUQ7QUFDdkQ7QUFDQSx5REFBeUQ7QUFDekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdURBQXVEO0FBQ3ZEO0FBQ0E7QUFDQSxzREFBc0Q7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVzs7QUFFWDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EsV0FBVztBQUNYOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhOztBQUViO0FBQ0E7QUFDQTtBQUNBLFdBQVc7O0FBRVg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXOztBQUVYO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxhQUFhOztBQUViO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7O0FBRVg7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBLHVCQUF1QixrQ0FBa0M7QUFDekQsV0FBVztBQUNYO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXOztBQUVYO0FBQ0E7QUFDQSxXQUFXOztBQUVYO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esb0RBQW9EO0FBQ3BEO0FBQ0E7QUFDQSxXQUFXOztBQUVYO0FBQ0E7QUFDQTtBQUNBLFdBQVc7O0FBRVg7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBLFdBQVc7O0FBRVg7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7O0FBRVg7QUFDQTtBQUNBLFdBQVc7O0FBRVg7QUFDQTtBQUNBLFdBQVc7O0FBRVg7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXOztBQUVYO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpREFBaUQ7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQSxXQUFXOztBQUVYO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0EsaURBQWlEO0FBQ2pEO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWCxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxpQkFBaUIsVUFBVTtBQUMzQixxQkFBcUIsT0FBTztBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxhQUFhOztBQUV4QjtBQUNBLHVDQUF1Qyw0QkFBNEI7QUFDbkU7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixXQUFXO0FBQ1gsT0FBTztBQUNQO0FBQ0Esd0JBQXdCLHVCQUF1QjtBQUMvQyxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixXQUFXOztBQUVYO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVCxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0EseUJBQXlCLG1CQUFtQjtBQUM1Qzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwyQkFBMkI7QUFDM0I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1gsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTzs7QUFFUDtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDRDQUE0Qyx3QkFBd0IsMkJBQTJCO0FBQy9GO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsbUJBQW1CLHVCQUF1QjtBQUMxQztBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCO0FBQ3hCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNENBQTRDLElBQUksSUFBSTtBQUNwRCxPQUFPO0FBQ1A7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBOztBQUVBLDhCQUE4QjtBQUM5QjtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHdDQUF3QztBQUN4QywwQ0FBMEM7QUFDMUMsa0NBQWtDO0FBQ2xDLHdDQUF3QztBQUN4QyxvQ0FBb0M7QUFDcEMsb0NBQW9DO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0I7QUFDeEI7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZ0NBQWdDLHlCQUF5QjtBQUN6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxzRkFBc0Y7QUFDdEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDhCQUE4QjtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBOztBQUVBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGdEQUFnRDtBQUNoRDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCx3QkFBd0Isd0JBQXdCO0FBQ2hELG1CQUFtQixtQkFBbUI7QUFDdEMsbUJBQW1CLG1CQUFtQjtBQUN0QyxlQUFlLGVBQWU7O0FBRTlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0MscUNBQXFDO0FBQ3pFLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBLHlEQUF5RDtBQUN6RDtBQUNBLHlEQUF5RDtBQUN6RDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EscUNBQXFDLGNBQWM7QUFDbkQ7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCO0FBQzVCO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSxTQUFTO0FBQ1QsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtEQUFrRCxxQkFBcUI7QUFDdkU7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBLFdBQVc7O0FBRVg7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUFpRCxZQUFZO0FBQzdELFdBQVc7QUFDWDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtREFBbUQ7QUFDbkQsZ0NBQWdDO0FBQ2hDOztBQUVBO0FBQ0EsdUVBQXVFO0FBQ3ZFOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNERBQTREO0FBQzVEO0FBQ0EsNERBQTREOztBQUU1RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixXQUFXO0FBQ1gsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0REFBNEQ7QUFDNUQ7QUFDQSw0REFBNEQ7QUFDNUQ7QUFDQSxpREFBaUQ7O0FBRWpEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsV0FBVzs7QUFFWDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7O0FBRWIscUJBQXFCLDJCQUEyQjs7QUFFaEQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQixlQUFlO0FBQ2Ysa0NBQWtDLEVBQUU7O0FBRXBDO0FBQ0E7O0FBRUE7QUFDQSxtQ0FBbUMsa0JBQWtCO0FBQ3JEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMENBQTBDO0FBQzFDO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDJDQUEyQyxTQUFTO0FBQ3BELFNBQVM7O0FBRVQ7QUFDQSw0Q0FBNEMsU0FBUztBQUNyRCxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTs7QUFFYjtBQUNBLHFCQUFxQiwwQ0FBMEM7QUFDL0Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWCxTQUFTOztBQUVUO0FBQ0EsbUNBQW1DLFlBQVk7QUFDL0MsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTs7QUFFZjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxvREFBb0QseUJBQXlCO0FBQzdFLGFBQWE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCOztBQUVqQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNEQUFzRCxxQkFBcUI7QUFDM0U7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTOztBQUVUO0FBQ0EsaURBQWlELFNBQVM7QUFDMUQsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWCxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1gsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWCxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1gsU0FBUzs7QUFFVDtBQUNBLGlEQUFpRCxTQUFTO0FBQzFELFNBQVM7O0FBRVQ7QUFDQSxrREFBa0QsU0FBUztBQUMzRCxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUOztBQUVBO0FBQ0EsOENBQThDO0FBQzlDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGlEQUFpRCxlQUFlO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsV0FBVztBQUNYLFNBQVM7QUFDVCxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDJDQUEyQyxjQUFjO0FBQ3pEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVzs7QUFFWDtBQUNBOztBQUVBO0FBQ0E7QUFDQSwrQ0FBK0MsaUJBQWlCO0FBQ2hFO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZixhQUFhO0FBQ2I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQyxFQUFFO0FBQ3BDLFdBQVc7QUFDWDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQSxpREFBaUQsY0FBYzs7QUFFL0Q7QUFDQTtBQUNBLFdBQVcsa0RBQWtEO0FBQzdEO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVzs7QUFFWDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYSxnREFBZ0Q7QUFDN0Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0EsbUJBQW1CLDBDQUEwQztBQUM3RDtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLGdEQUFnRCwwQkFBMEI7O0FBRTFFO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQSw2Q0FBNkMsY0FBYztBQUMzRCxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMsY0FBYztBQUNqRCxTQUFTO0FBQ1QsT0FBTzs7QUFFUDtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsdUNBQXVDLGtDQUFrQzs7QUFFekU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2Q0FBNkMsY0FBYzs7QUFFM0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQXFDLGlCQUFpQjtBQUN0RDtBQUNBLFNBQVM7QUFDVCxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUMsaUJBQWlCO0FBQ3hEO0FBQ0EsV0FBVztBQUNYLDhCQUE4QjtBQUM5QixPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1gsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLCtCQUErQjtBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEIsT0FBTzs7QUFFUDtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQSxrREFBa0QsU0FBUyxhQUFhO0FBQ3hFLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDRCQUE0QixzQkFBc0IsaUJBQWlCLEVBQUU7QUFDckU7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBLGtEQUFrRCxTQUFTLGFBQWE7QUFDeEUsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLCtCQUErQjtBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwwQkFBMEIsYUFBYTtBQUN2QywwQkFBMEIsYUFBYTtBQUN2Qyx1QkFBdUIsYUFBYTtBQUNwQyx3QkFBd0IsYUFBYTtBQUNyQyxnQ0FBZ0MsYUFBYTtBQUM3QyxnQ0FBZ0MsYUFBYTtBQUM3QyxpQ0FBaUMsYUFBYTtBQUM5Qyw0QkFBNEIsK0NBQStDO0FBQzNFO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxrQ0FBa0MseUNBQXlDO0FBQzNFLFdBQVcsMkNBQTJDO0FBQ3RELGFBQWE7QUFDYjs7QUFFQTtBQUNBLHVCQUF1QixhQUFhO0FBQ3BDLHdCQUF3QixhQUFhO0FBQ3JDLFdBQVcsc0NBQXNDO0FBQ2pELGFBQWE7QUFDYjs7QUFFQTtBQUNBLGdDQUFnQyxhQUFhO0FBQzdDLCtCQUErQixhQUFhO0FBQzVDLGFBQWE7QUFDYjs7QUFFQTtBQUNBO0FBQ0EseUJBQXlCLGFBQWE7QUFDdEMsYUFBYSxzQ0FBc0M7QUFDbkQsZUFBZTtBQUNmLEtBQUs7O0FBRUw7QUFDQSw0QkFBNEIsYUFBYTtBQUN6Qyw4QkFBOEIsYUFBYTtBQUMzQyxlQUFlO0FBQ2YsS0FBSzs7QUFFTDtBQUNBLDRCQUE0QixhQUFhO0FBQ3pDLHlCQUF5QixhQUFhO0FBQ3RDLGFBQWEsc0NBQXNDO0FBQ25ELGVBQWU7QUFDZixLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLGFBQWEsc0NBQXNDO0FBQ25ELGVBQWU7QUFDZixLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLHlCQUF5QixhQUFhO0FBQ3RDLGFBQWEsc0NBQXNDO0FBQ25ELGVBQWU7QUFDZixLQUFLOztBQUVMO0FBQ0E7QUFDQSx5QkFBeUIsYUFBYTtBQUN0QyxhQUFhLHNDQUFzQztBQUNuRCxlQUFlO0FBQ2YsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQyxhQUFhO0FBQ2hELGFBQWEsYUFBYTtBQUMxQixlQUFlO0FBQ2YsS0FBSzs7QUFFTDtBQUNBLHlCQUF5QixhQUFhO0FBQ3RDLGtDQUFrQyxhQUFhO0FBQy9DLGVBQWUsYUFBYTtBQUM1QixhQUFhO0FBQ2IsS0FBSzs7QUFFTDtBQUNBLG1DQUFtQyxhQUFhO0FBQ2hELGVBQWUsYUFBYTtBQUM1QixhQUFhO0FBQ2IsS0FBSzs7QUFFTDtBQUNBLHlCQUF5QixhQUFhO0FBQ3RDLDBCQUEwQixhQUFhO0FBQ3ZDLGFBQWEsc0NBQXNDO0FBQ25ELGVBQWU7QUFDZixLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlDQUF5QztBQUN6Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDBDQUEwQyxZQUFZO0FBQ3RELE9BQU87O0FBRVA7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBLHNDQUFzQyxTQUFTO0FBQy9DOztBQUVBO0FBQ0E7QUFDQSx3Q0FBd0MsU0FBUztBQUNqRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxXQUFXLDZDQUE2Qzs7QUFFeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1gsU0FBUztBQUNULE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrREFBa0QsU0FBUyxhQUFhO0FBQ3hFLEtBQUs7QUFDTDtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esa0NBQWtDLGVBQWU7QUFDakQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQSxrREFBa0QsU0FBUyxhQUFhO0FBQ3hFLEtBQUs7QUFDTDtBQUNBO0FBQ0EsR0FBRzs7QUFFSCw0QkFBNEI7O0FBRTVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0EsV0FBVzs7QUFFWDtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0EsV0FBVzs7QUFFWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxpREFBaUQsZUFBZTtBQUNoRTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHlDQUF5QyxlQUFlO0FBQ3hEOztBQUVBO0FBQ0E7QUFDQSxtQ0FBbUMscUJBQXFCO0FBQ3hEOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLDZDQUE2QztBQUM1RDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQXFDLGtCQUFrQjtBQUN2RCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EseUJBQXlCLFdBQVc7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsWUFBWTtBQUNwQztBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsYUFBYSw2Q0FBNkM7QUFDMUQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1A7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBLFdBQVc7QUFDWDtBQUNBLFdBQVc7QUFDWDtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxhQUFhLDZDQUE2Qzs7QUFFMUQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLCtCQUErQjtBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsYUFBYTtBQUM1QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLDZDQUE2QztBQUMxRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0EsV0FBVztBQUNYLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsbURBQW1EO0FBQ25EOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEMsb0NBQW9DO0FBQ3BDLGtDQUFrQztBQUNsQyxrQ0FBa0M7QUFDbEMsa0NBQWtDO0FBQ2xDO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxrQ0FBa0M7QUFDbEMsNENBQTRDO0FBQzVDLGtDQUFrQztBQUNsQyx3Q0FBd0M7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0I7QUFDeEI7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7QUFDQSwwQ0FBMEMsbUJBQW1CO0FBQzdEOztBQUVBO0FBQ0E7QUFDQSxtQ0FBbUMscUJBQXFCO0FBQ3hEOztBQUVBO0FBQ0E7QUFDQSxzREFBc0Q7QUFDdEQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGFBQWEsNkNBQTZDOztBQUUxRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVA7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixhQUFhO0FBQ3BDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx1Q0FBdUM7O0FBRXZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFlBQVk7QUFDWjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0EsZUFBZTtBQUNmO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVULG1DQUFtQyxxQkFBcUI7O0FBRXhELHVDQUF1QyxxQkFBcUI7QUFDNUQ7O0FBRUE7QUFDQSx5Q0FBeUMscUJBQXFCO0FBQzlEOztBQUVBO0FBQ0EsbUNBQW1DLHFCQUFxQjtBQUN4RCxPQUFPOztBQUVQO0FBQ0EsdUNBQXVDLHFCQUFxQjtBQUM1RDs7QUFFQTs7QUFFQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEI7QUFDMUI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQSxXQUFXO0FBQ1g7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsbUNBQW1DLDBCQUEwQjs7QUFFN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQSw0QkFBNEIsb0JBQW9COztBQUVoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVzs7QUFFWDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHFEQUFxRDtBQUNyRDs7QUFFQTtBQUNBLHlDQUF5QztBQUN6Qzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGtDQUFrQyxnQkFBZ0I7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7O0FBRVQseUJBQXlCLEVBQUU7QUFDM0I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1gsU0FBUztBQUNULE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxtQkFBbUI7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLG1DQUFtQztBQUN0RDtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQSxxQ0FBcUMsZUFBZTs7QUFFcEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsOENBQThDO0FBQzlDLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBOztBQUVBO0FBQ0EsUUFBUTs7QUFFUjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUM7QUFDckM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUM7QUFDckM7QUFDQTs7QUFFQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBOztBQUVBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlDQUF5QyxtQkFBbUI7QUFDNUQsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBLFVBQVU7O0FBRVY7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLElBQUk7O0FBRVg7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVzs7QUFFWDtBQUNBO0FBQ0EsV0FBVzs7QUFFWDtBQUNBO0FBQ0EsV0FBVzs7QUFFWDtBQUNBO0FBQ0EsV0FBVzs7QUFFWDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLHdDQUF3Qzs7QUFFeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSwyQkFBMkIsSUFBSTtBQUMvQiw0QkFBNEI7QUFDNUI7QUFDQTtBQUNBLCtCQUErQixZQUFZO0FBQzNDO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBLGlEQUFpRDtBQUNqRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXOztBQUVYO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUEscUNBQXFDO0FBQ3JDLHlDQUF5QztBQUN6Qyx5Q0FBeUM7O0FBRXpDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsZ0RBQWdELGNBQWM7QUFDOUQsQ0FBQzs7Ozs7Ozs7Ozs7O0FDdHdURDtBQUNBLE1BQU0sSUFBeUQ7QUFDL0Q7QUFDQSxHQUFHLE1BQU0sRUFJTjtBQUNILENBQUM7QUFDRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVULE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixPQUFPO0FBQ3hCLGlCQUFpQixTQUFTO0FBQzFCO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBLGlCQUFpQixPQUFPO0FBQ3hCLGlCQUFpQixTQUFTO0FBQzFCO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBLGlCQUFpQixPQUFPO0FBQ3hCLGlCQUFpQixPQUFPO0FBQ3hCLGlCQUFpQixTQUFTO0FBQzFCO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBLGlCQUFpQixPQUFPO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBLGlCQUFpQixPQUFPO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBLGlCQUFpQixPQUFPO0FBQ3hCLGlCQUFpQixTQUFTO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQSxpQkFBaUIsT0FBTztBQUN4QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhOztBQUViO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLENBQUMsRTs7Ozs7Ozs7Ozs7QUMzS0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isb0JBQW9CO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsdURBQXVELCtCQUErQjtBQUN0Riw2QkFBNkI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQSxtRUFBbUUsd0RBQXdELEVBQUU7QUFDN0gsR0FBRzs7QUFFSDtBQUNBO0FBQ0EscURBQXFELGdCQUFnQjtBQUNyRSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBLDJFQUEyRSwwQ0FBMEMsRUFBRTtBQUN2SCxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBLGdEQUFnRDs7QUFFaEQsNkNBQTZDLFlBQVk7QUFDekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsK0NBQStDO0FBQy9DLDBDQUEwQyxZQUFZO0FBQ3REO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBOztBQUVBLEdBQUc7OztBQUdIO0FBQ0E7QUFDQTtBQUNBLG9EQUFvRCxnQ0FBZ0M7QUFDcEYsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUVBQW1FLHlEQUF5RCxFQUFFO0FBQzlILEdBQUc7O0FBRUg7QUFDQSw0REFBNEQsYUFBYTtBQUN6RSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsOEJBQThCO0FBQzlCLHNDQUFzQztBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxnQkFBZ0IsMEJBQTBCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxzQkFBc0Isb0JBQW9CO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsTUFBTTtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0Esc0JBQXNCLG9CQUFvQjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsT0FBTztBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxvQkFBb0Isb0JBQW9CO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0Isb0JBQW9CO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsTUFBTTtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0Esb0JBQW9CLG9CQUFvQjtBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsT0FBTztBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxrQkFBa0Isb0JBQW9CO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxjQUFjLG9CQUFvQjtBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQSwyRUFBMkUscUNBQXFDLEVBQUU7QUFDbEgsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7O0FBRWhCLGVBQWUsT0FBTztBQUN0QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRCxJQUFJLElBQTBDO0FBQzlDLEVBQUUsbUNBQU8sYUFBYSxpQkFBaUIsRUFBRTtBQUFBLG9HQUFDO0FBQzFDLENBQUMsTUFBTSxFQUVOOzs7Ozs7Ozs7Ozs7QUNwZkQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixzQkFBc0I7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHFDQUFxQzs7QUFFckM7QUFDQTtBQUNBOztBQUVBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsVUFBVTs7Ozs7Ozs7Ozs7O0FDdkx0QztBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOENBQThDO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBOztBQUVBLGNBQWMsbUJBQU8sQ0FBQyx1REFBUTs7QUFFOUI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBLGlCQUFpQixtQkFBbUI7QUFDcEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUJBQWlCLHNCQUFzQjtBQUN2Qzs7QUFFQTtBQUNBLG1CQUFtQiwyQkFBMkI7O0FBRTlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxnQkFBZ0IsbUJBQW1CO0FBQ25DO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxpQkFBaUIsMkJBQTJCO0FBQzVDO0FBQ0E7O0FBRUEsUUFBUSx1QkFBdUI7QUFDL0I7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQSxpQkFBaUIsdUJBQXVCO0FBQ3hDO0FBQ0E7O0FBRUEsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsZ0JBQWdCLGlCQUFpQjtBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYzs7QUFFZCxrREFBa0Qsc0JBQXNCO0FBQ3hFO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGOztBQUVBO0FBQ0EsS0FBSyxLQUF3QyxFQUFFLEVBRTdDOztBQUVGLFFBQVEsc0JBQWlCO0FBQ3pCOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUEsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVEQUF1RDtBQUN2RDs7QUFFQSw2QkFBNkIsbUJBQW1COztBQUVoRDs7QUFFQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDOVlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QyxXQUFXLEVBQUU7QUFDckQsd0NBQXdDLFdBQVcsRUFBRTs7QUFFckQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxzQ0FBc0M7QUFDdEMsR0FBRztBQUNIO0FBQ0EsOERBQThEO0FBQzlEOztBQUVBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4RkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Qsa0JBQWtCLG1CQUFPLENBQUMsb0VBQW9CO0FBQzlDO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQSxnRkFBZ0Y7QUFDaEY7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLFNBQVM7QUFDeEM7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MsU0FBUyxHOztBQUV6QztBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLFNBQVMsRztBQUNwQztBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7OztBQ3hHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsU0FBUztBQUNULEtBQUs7QUFDTDtBQUNBLEM7Ozs7Ozs7Ozs7O0FDOURBLGdCQUFnQixtQkFBTyxDQUFDLDBFQUFrQjs7QUFFMUM7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNoRkEsZ0JBQWdCLG1CQUFPLENBQUMseUVBQWlCO0FBQ3pDLG9CQUFvQixtQkFBTyxDQUFDLHNGQUF5QjtBQUNyRCxxQkFBcUIsbUJBQU8sQ0FBQyxtRUFBYztBQUMzQyxnQkFBZ0IsbUJBQU8sQ0FBQyxpRUFBaUI7O0FBRXpDLDBDQUEwQztBQUMxQyxrREFBa0Q7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsOEJBQThCO0FBQzlCO0FBQ0EsK0NBQStDO0FBQy9DOztBQUVBLDJCQUEyQixvREFBb0Q7QUFDL0UsR0FBRztBQUNIO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0Esd0JBQXdCLG9EQUFvRDtBQUM1RSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUEiLCJmaWxlIjoidmVuZG9yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgTFpTdHJpbmcgPSByZXF1aXJlKFwibHotc3RyaW5nXCIpO1xuZnVuY3Rpb24gY29tcHJlc3MoaW5wdXQpIHtcbiAgICByZXR1cm4gTFpTdHJpbmcuY29tcHJlc3NUb0Jhc2U2NChpbnB1dClcbiAgICAgICAgLnJlcGxhY2UoL1xcKy9nLCBcIi1cIikgLy8gQ29udmVydCAnKycgdG8gJy0nXG4gICAgICAgIC5yZXBsYWNlKC9cXC8vZywgXCJfXCIpIC8vIENvbnZlcnQgJy8nIHRvICdfJ1xuICAgICAgICAucmVwbGFjZSgvPSskLywgXCJcIik7IC8vIFJlbW92ZSBlbmRpbmcgJz0nXG59XG5mdW5jdGlvbiBnZXRQYXJhbWV0ZXJzKHBhcmFtZXRlcnMpIHtcbiAgICByZXR1cm4gY29tcHJlc3MoSlNPTi5zdHJpbmdpZnkocGFyYW1ldGVycykpO1xufVxuZXhwb3J0cy5nZXRQYXJhbWV0ZXJzID0gZ2V0UGFyYW1ldGVycztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRlZmluZS5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG52YXIgZGVmaW5lXzEgPSByZXF1aXJlKFwiY29kZXNhbmRib3gtaW1wb3J0LXV0aWxzL2xpYi9hcGkvZGVmaW5lXCIpO1xuZXhwb3J0cy5nZXRQYXJhbWV0ZXJzID0gZGVmaW5lXzEuZ2V0UGFyYW1ldGVycztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRlZmluZS5qcy5tYXAiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLyohXFxuICogRmlsZVBvbmQgNC40LjdcXG4gKiBMaWNlbnNlZCB1bmRlciBNSVQsIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUL1xcbiAqIFBsZWFzZSB2aXNpdCBodHRwczovL3BxaW5hLm5sL2ZpbGVwb25kLyBmb3IgZGV0YWlscy5cXG4gKi9cXG5cXG4vKiBlc2xpbnQtZGlzYWJsZSAqL1xcbi5maWxlcG9uZC0tYXNzaXN0YW50IHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBoZWlnaHQ6IDFweDtcXG4gIHdpZHRoOiAxcHg7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm9yZGVyOiAwO1xcbiAgY2xpcDogcmVjdCgxcHgsIDFweCwgMXB4LCAxcHgpO1xcbiAgLXdlYmtpdC1jbGlwLXBhdGg6IGluc2V0KDUwJSk7XFxuICBjbGlwLXBhdGg6IGluc2V0KDUwJSk7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbn1cXG5cXG4vKiBIYXJkIHRvIG92ZXJyaWRlIHN0eWxlcyAqL1xcbi5maWxlcG9uZC0tYnJvd3Nlci5maWxlcG9uZC0tYnJvd3NlciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgbGVmdDogMWVtO1xcbiAgdG9wOiAxLjc1ZW07XFxuICB3aWR0aDogY2FsYygxMDAlIC0gMmVtKTtcXG4gIG9wYWNpdHk6IDA7XFxuICBmb250LXNpemU6IDA7XFxufVxcblxcbi5maWxlcG9uZC0tZHJpcCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgcmlnaHQ6IDA7XFxuICBib3R0b206IDA7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgb3BhY2l0eTogMC4xO1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiAwLjVlbTtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4wMSk7XFxufVxcblxcbi5maWxlcG9uZC0tZHJpcC1ibG9iIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyIGNlbnRlcjtcXG4gIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlciBjZW50ZXI7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgd2lkdGg6IDhlbTtcXG4gIGhlaWdodDogOGVtO1xcbiAgbWFyZ2luLWxlZnQ6IC00ZW07XFxuICBtYXJnaW4tdG9wOiAtNGVtO1xcbiAgYmFja2dyb3VuZDogIzI5MjYyNTtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIHdpbGwtY2hhbmdlOiB0cmFuc2Zvcm0sIG9wYWNpdHk7XFxufVxcblxcbi5maWxlcG9uZC0tZHJvcC1sYWJlbCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiAwO1xcbiAgcmlnaHQ6IDA7XFxuICB0b3A6IDA7XFxuICBtYXJnaW46IDA7XFxuICBjb2xvcjogIzRmNGY0ZjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBoZWlnaHQ6IDBweDtcXG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xcbiAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICB3aWxsLWNoYW5nZTogdHJhbnNmb3JtLCBvcGFjaXR5O1xcbn1cXG5cXG4vKiBIYXJkIHRvIG92ZXJyaWRlIHN0eWxlcyBvbiBwdXJwb3NlICovXFxuLmZpbGVwb25kLS1kcm9wLWxhYmVsLmZpbGVwb25kLS1kcm9wLWxhYmVsIGxhYmVsIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMC41ZW07XFxufVxcblxcbi5maWxlcG9uZC0tZHJvcC1sYWJlbCBsYWJlbCB7XFxuICBjdXJzb3I6IGRlZmF1bHQ7XFxuICBmb250LXNpemU6IDAuODc1ZW07XFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgbGluZS1oZWlnaHQ6IDEuNTtcXG59XFxuXFxuLmZpbGVwb25kLS1sYWJlbC1hY3Rpb24ge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxuICAtd2Via2l0LXRleHQtZGVjb3JhdGlvbi1za2lwOiBpbms7XFxuICB0ZXh0LWRlY29yYXRpb24tc2tpcC1pbms6IGF1dG87XFxuICAtd2Via2l0LXRleHQtZGVjb3JhdGlvbi1jb2xvcjogI2E3YTRhNDtcXG4gIHRleHQtZGVjb3JhdGlvbi1jb2xvcjogI2E3YTRhNDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmZpbGVwb25kLS1yb290W2RhdGEtZGlzYWJsZWRdIC5maWxlcG9uZC0tZHJvcC1sYWJlbCBsYWJlbCB7XFxuICBvcGFjaXR5OiAwLjU7XFxufVxcblxcbi8qIEhhcmQgdG8gb3ZlcnJpZGUgc3R5bGVzICovXFxuLmZpbGVwb25kLS1maWxlLWFjdGlvbi1idXR0b24uZmlsZXBvbmQtLWZpbGUtYWN0aW9uLWJ1dHRvbiB7XFxuICBmb250LXNpemU6IDFlbTtcXG4gIHdpZHRoOiAxLjYyNWVtO1xcbiAgaGVpZ2h0OiAxLjYyNWVtO1xcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICBsaW5lLWhlaWdodDogaW5oZXJpdDtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3JkZXI6IG5vbmU7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgd2lsbC1jaGFuZ2U6IHRyYW5zZm9ybSwgb3BhY2l0eTtcXG59XFxuLmZpbGVwb25kLS1maWxlLWFjdGlvbi1idXR0b24uZmlsZXBvbmQtLWZpbGUtYWN0aW9uLWJ1dHRvbiBzcGFuIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBoZWlnaHQ6IDFweDtcXG4gIHdpZHRoOiAxcHg7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm9yZGVyOiAwO1xcbiAgY2xpcDogcmVjdCgxcHgsIDFweCwgMXB4LCAxcHgpO1xcbiAgLXdlYmtpdC1jbGlwLXBhdGg6IGluc2V0KDUwJSk7XFxuICBjbGlwLXBhdGg6IGluc2V0KDUwJSk7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbn1cXG4uZmlsZXBvbmQtLWZpbGUtYWN0aW9uLWJ1dHRvbi5maWxlcG9uZC0tZmlsZS1hY3Rpb24tYnV0dG9uIHN2ZyB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuLmZpbGVwb25kLS1maWxlLWFjdGlvbi1idXR0b24uZmlsZXBvbmQtLWZpbGUtYWN0aW9uLWJ1dHRvbjo6YWZ0ZXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogLTAuNzVlbTtcXG4gIHJpZ2h0OiAtMC43NWVtO1xcbiAgdG9wOiAtMC43NWVtO1xcbiAgYm90dG9tOiAtMC43NWVtO1xcbiAgY29udGVudDogJyc7XFxufVxcblxcbi8qIFNvZnQgc3R5bGVzICovXFxuLmZpbGVwb25kLS1maWxlLWFjdGlvbi1idXR0b24ge1xcbiAgY3Vyc29yOiBhdXRvO1xcbiAgY29sb3I6ICNmZmY7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xcbiAgYm94LXNoYWRvdzogMCAwIDAgMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApO1xcbiAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAwLjI1cyBlYXNlLWluO1xcbn1cXG4uZmlsZXBvbmQtLWZpbGUtYWN0aW9uLWJ1dHRvbjpob3ZlcixcXG4uZmlsZXBvbmQtLWZpbGUtYWN0aW9uLWJ1dHRvbjpmb2N1cyB7XFxuICBib3gtc2hhZG93OiAwIDAgMCAwLjEyNWVtIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45KTtcXG59XFxuLmZpbGVwb25kLS1maWxlLWFjdGlvbi1idXR0b25bZGlzYWJsZWRdIHtcXG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMjUpO1xcbn1cXG5cXG4uZmlsZXBvbmQtLWZpbGUtaW5mbyB7XFxuICBwb3NpdGlvbjogc3RhdGljO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gIGZsZXg6IDE7XFxuICBtYXJnaW46IDAgMC41ZW0gMCAwO1xcbiAgbWluLXdpZHRoOiAwO1xcbiAgd2lsbC1jaGFuZ2U6IHRyYW5zZm9ybSwgb3BhY2l0eTtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcXG4gIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXG59XFxuLmZpbGVwb25kLS1maWxlLWluZm8gKiB7XFxuICBtYXJnaW46IDA7XFxufVxcbi5maWxlcG9uZC0tZmlsZS1pbmZvIC5maWxlcG9uZC0tZmlsZS1pbmZvLW1haW4ge1xcbiAgZm9udC1zaXplOiAwLjc1ZW07XFxuICBsaW5lLWhlaWdodDogMS4yO1xcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG4uZmlsZXBvbmQtLWZpbGUtaW5mbyAuZmlsZXBvbmQtLWZpbGUtaW5mby1zdWIge1xcbiAgZm9udC1zaXplOiAwLjYyNWVtO1xcbiAgb3BhY2l0eTogMC41O1xcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjI1cyBlYXNlLWluLW91dDtcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxufVxcbi5maWxlcG9uZC0tZmlsZS1pbmZvIC5maWxlcG9uZC0tZmlsZS1pbmZvLXN1YjplbXB0eSB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uZmlsZXBvbmQtLWZpbGUtc3RhdHVzIHtcXG4gIHBvc2l0aW9uOiBzdGF0aWM7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcXG4gIGZsZXgtZ3JvdzogMDtcXG4gIGZsZXgtc2hyaW5rOiAwO1xcbiAgbWFyZ2luOiAwO1xcbiAgbWluLXdpZHRoOiAyLjI1ZW07XFxuICB0ZXh0LWFsaWduOiByaWdodDtcXG4gIHdpbGwtY2hhbmdlOiB0cmFuc2Zvcm0sIG9wYWNpdHk7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xcbiAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxufVxcbi5maWxlcG9uZC0tZmlsZS1zdGF0dXMgKiB7XFxuICBtYXJnaW46IDA7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbn1cXG4uZmlsZXBvbmQtLWZpbGUtc3RhdHVzIC5maWxlcG9uZC0tZmlsZS1zdGF0dXMtbWFpbiB7XFxuICBmb250LXNpemU6IDAuNzVlbTtcXG4gIGxpbmUtaGVpZ2h0OiAxLjI7XFxufVxcbi5maWxlcG9uZC0tZmlsZS1zdGF0dXMgLmZpbGVwb25kLS1maWxlLXN0YXR1cy1zdWIge1xcbiAgZm9udC1zaXplOiAwLjYyNWVtO1xcbiAgb3BhY2l0eTogMC41O1xcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjI1cyBlYXNlLWluLW91dDtcXG59XFxuXFxuLyogSGFyZCB0byBvdmVycmlkZSBzdHlsZXMgKi9cXG4uZmlsZXBvbmQtLWZpbGUtd3JhcHBlci5maWxlcG9uZC0tZmlsZS13cmFwcGVyIHtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBtaW4td2lkdGg6IDA7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcbi5maWxlcG9uZC0tZmlsZS13cmFwcGVyLmZpbGVwb25kLS1maWxlLXdyYXBwZXIgPiBsZWdlbmQge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIGhlaWdodDogMXB4O1xcbiAgd2lkdGg6IDFweDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3JkZXI6IDA7XFxuICBjbGlwOiByZWN0KDFweCwgMXB4LCAxcHgsIDFweCk7XFxuICAtd2Via2l0LWNsaXAtcGF0aDogaW5zZXQoNTAlKTtcXG4gIGNsaXAtcGF0aDogaW5zZXQoNTAlKTtcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxufVxcblxcbi5maWxlcG9uZC0tZmlsZSB7XFxuICBwb3NpdGlvbjogc3RhdGljO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgcGFkZGluZzogMC41NjI1ZW0gMC41NjI1ZW07XFxuICBjb2xvcjogI2ZmZjtcXG4gIGJvcmRlci1yYWRpdXM6IDAuNWVtO1xcbn1cXG4uZmlsZXBvbmQtLWZpbGUgLmZpbGVwb25kLS1maWxlLXN0YXR1cyB7XFxuICBtYXJnaW4tbGVmdDogYXV0bztcXG4gIG1hcmdpbi1yaWdodDogMi4yNWVtO1xcbn1cXG4uZmlsZXBvbmQtLWZpbGUgLmZpbGVwb25kLS1wcm9jZXNzaW5nLWNvbXBsZXRlLWluZGljYXRvciB7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xcbiAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICB6LWluZGV4OiAzO1xcbn1cXG4uZmlsZXBvbmQtLWZpbGUgLmZpbGVwb25kLS1wcm9jZXNzaW5nLWNvbXBsZXRlLWluZGljYXRvcixcXG4uZmlsZXBvbmQtLWZpbGUgLmZpbGVwb25kLS1wcm9ncmVzcy1pbmRpY2F0b3IsXFxuLmZpbGVwb25kLS1maWxlIC5maWxlcG9uZC0tZmlsZS1hY3Rpb24tYnV0dG9uIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG59XFxuLmZpbGVwb25kLS1maWxlIFtkYXRhLWFsaWduKj0nbGVmdCddIHtcXG4gIGxlZnQ6IDAuNTYyNWVtO1xcbn1cXG4uZmlsZXBvbmQtLWZpbGUgW2RhdGEtYWxpZ24qPSdyaWdodCddIHtcXG4gIHJpZ2h0OiAwLjU2MjVlbTtcXG59XFxuLmZpbGVwb25kLS1maWxlIFtkYXRhLWFsaWduKj0nY2VudGVyJ10ge1xcbiAgbGVmdDogY2FsYyg1MCUgLSAwLjgxMjVlbSk7XFxufVxcbi5maWxlcG9uZC0tZmlsZSBbZGF0YS1hbGlnbio9J2JvdHRvbSddIHtcXG4gIGJvdHRvbTogMS4xMjVlbTtcXG59XFxuLmZpbGVwb25kLS1maWxlIFtkYXRhLWFsaWduPSdjZW50ZXInXSB7XFxuICB0b3A6IGNhbGMoNTAlIC0gMC44MTI1ZW0pO1xcbn1cXG4uZmlsZXBvbmQtLWZpbGUgLmZpbGVwb25kLS1wcm9ncmVzcy1pbmRpY2F0b3Ige1xcbiAgbWFyZ2luLXRvcDogMC4xODc1ZW07XFxufVxcbi5maWxlcG9uZC0tZmlsZSAuZmlsZXBvbmQtLXByb2dyZXNzLWluZGljYXRvcltkYXRhLWFsaWduKj0ncmlnaHQnXSB7XFxuICBtYXJnaW4tcmlnaHQ6IDAuMTg3NWVtO1xcbn1cXG4uZmlsZXBvbmQtLWZpbGUgLmZpbGVwb25kLS1wcm9ncmVzcy1pbmRpY2F0b3JbZGF0YS1hbGlnbio9J2xlZnQnXSB7XFxuICBtYXJnaW4tbGVmdDogMC4xODc1ZW07XFxufVxcblxcbltkYXRhLWZpbGVwb25kLWl0ZW0tc3RhdGU9J2NhbmNlbGxlZCddIC5maWxlcG9uZC0tZmlsZS1pbmZvLFxcbltkYXRhLWZpbGVwb25kLWl0ZW0tc3RhdGUqPSdpbnZhbGlkJ10gLmZpbGVwb25kLS1maWxlLWluZm8sXFxuW2RhdGEtZmlsZXBvbmQtaXRlbS1zdGF0ZSo9J2Vycm9yJ10gLmZpbGVwb25kLS1maWxlLWluZm8ge1xcbiAgbWFyZ2luLXJpZ2h0OiAyLjI1ZW07XFxufVxcblxcbltkYXRhLWZpbGVwb25kLWl0ZW0tc3RhdGU9J3Byb2Nlc3NpbmctY29tcGxldGUnXVxcbiAgLmZpbGVwb25kLS1hY3Rpb24tcmV2ZXJ0LWl0ZW0tcHJvY2Vzc2luZ1xcbiAgc3ZnIHtcXG4gIC13ZWJraXQtYW5pbWF0aW9uOiBmYWxsIDAuNXMgMC4xMjVzIGxpbmVhciBib3RoO1xcbiAgYW5pbWF0aW9uOiBmYWxsIDAuNXMgMC4xMjVzIGxpbmVhciBib3RoO1xcbn1cXG5cXG5bZGF0YS1maWxlcG9uZC1pdGVtLXN0YXRlPSdwcm9jZXNzaW5nLWNvbXBsZXRlJ10gLmZpbGVwb25kLS1maWxlLWluZm8tc3ViLFxcbltkYXRhLWZpbGVwb25kLWl0ZW0tc3RhdGU9J3Byb2Nlc3NpbmctY29tcGxldGUnXSAuZmlsZXBvbmQtLWZpbGUtc3RhdHVzLXN1YiB7XFxuICBvcGFjaXR5OiAwO1xcbn1cXG5cXG5bZGF0YS1maWxlcG9uZC1pdGVtLXN0YXRlPSdwcm9jZXNzaW5nLWNvbXBsZXRlJ11cXG4gIC5maWxlcG9uZC0tYWN0aW9uLXJldmVydC1pdGVtLXByb2Nlc3NpbmdcXG4gIH4gLmZpbGVwb25kLS1maWxlLWluZm9cXG4gIC5maWxlcG9uZC0tZmlsZS1pbmZvLXN1YixcXG5bZGF0YS1maWxlcG9uZC1pdGVtLXN0YXRlPSdwcm9jZXNzaW5nLWNvbXBsZXRlJ11cXG4gIC5maWxlcG9uZC0tYWN0aW9uLXJldmVydC1pdGVtLXByb2Nlc3NpbmdcXG4gIH4gLmZpbGVwb25kLS1maWxlLXN0YXR1c1xcbiAgLmZpbGVwb25kLS1maWxlLXN0YXR1cy1zdWIge1xcbiAgb3BhY2l0eTogMC41O1xcbn1cXG5cXG5bZGF0YS1maWxlcG9uZC1pdGVtLXN0YXRlKj0naW52YWxpZCddIC5maWxlcG9uZC0tcGFuZWwsXFxuW2RhdGEtZmlsZXBvbmQtaXRlbS1zdGF0ZSo9J2ludmFsaWQnXSAuZmlsZXBvbmQtLWZpbGUtd3JhcHBlcixcXG5bZGF0YS1maWxlcG9uZC1pdGVtLXN0YXRlKj0nZXJyb3InXSAuZmlsZXBvbmQtLXBhbmVsLFxcbltkYXRhLWZpbGVwb25kLWl0ZW0tc3RhdGUqPSdlcnJvciddIC5maWxlcG9uZC0tZmlsZS13cmFwcGVyIHtcXG4gIC13ZWJraXQtYW5pbWF0aW9uOiBzaGFrZSAwLjY1cyBsaW5lYXIgYm90aDtcXG4gIGFuaW1hdGlvbjogc2hha2UgMC42NXMgbGluZWFyIGJvdGg7XFxufVxcblxcbltkYXRhLWZpbGVwb25kLWl0ZW0tc3RhdGUqPSdidXN5J10gLmZpbGVwb25kLS1wcm9ncmVzcy1pbmRpY2F0b3Igc3ZnIHtcXG4gIC13ZWJraXQtYW5pbWF0aW9uOiBzcGluIDFzIGxpbmVhciBpbmZpbml0ZTtcXG4gIGFuaW1hdGlvbjogc3BpbiAxcyBsaW5lYXIgaW5maW5pdGU7XFxufVxcblxcbi8qKlxcbiAqIFN0YXRlc1xcbiAqL1xcbkAtd2Via2l0LWtleWZyYW1lcyBzcGluIHtcXG4gIDAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVooMGRlZyk7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlWigwZGVnKTtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWigzNjBkZWcpO1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVooMzYwZGVnKTtcXG4gIH1cXG59XFxuQGtleWZyYW1lcyBzcGluIHtcXG4gIDAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVooMGRlZyk7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlWigwZGVnKTtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWigzNjBkZWcpO1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVooMzYwZGVnKTtcXG4gIH1cXG59XFxuXFxuQC13ZWJraXQta2V5ZnJhbWVzIHNoYWtlIHtcXG4gIDEwJSxcXG4gIDkwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0wLjA2MjVlbSk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMC4wNjI1ZW0pO1xcbiAgfVxcbiAgMjAlLFxcbiAgODAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMC4xMjVlbSk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwLjEyNWVtKTtcXG4gIH1cXG4gIDMwJSxcXG4gIDUwJSxcXG4gIDcwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0wLjI1ZW0pO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTAuMjVlbSk7XFxuICB9XFxuICA0MCUsXFxuICA2MCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgwLjI1ZW0pO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMC4yNWVtKTtcXG4gIH1cXG59XFxuXFxuQGtleWZyYW1lcyBzaGFrZSB7XFxuICAxMCUsXFxuICA5MCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMC4wNjI1ZW0pO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTAuMDYyNWVtKTtcXG4gIH1cXG4gIDIwJSxcXG4gIDgwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDAuMTI1ZW0pO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMC4xMjVlbSk7XFxuICB9XFxuICAzMCUsXFxuICA1MCUsXFxuICA3MCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMC4yNWVtKTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0wLjI1ZW0pO1xcbiAgfVxcbiAgNDAlLFxcbiAgNjAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMC4yNWVtKTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDAuMjVlbSk7XFxuICB9XFxufVxcblxcbkAtd2Via2l0LWtleWZyYW1lcyBmYWxsIHtcXG4gIDAlIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAuNSk7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMC41KTtcXG4gICAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcXG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQ7XFxuICB9XFxuICA3MCUge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcbiAgICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0O1xcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dDtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSk7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxuICAgIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQ7XFxuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0O1xcbiAgfVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIGZhbGwge1xcbiAgMCUge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC41KTtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjUpO1xcbiAgICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0O1xcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcXG4gIH1cXG4gIDcwJSB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxuICAgIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7XFxuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0O1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG4gICAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcXG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQ7XFxuICB9XFxufVxcblxcbi5maWxlcG9uZC0taG9wcGVyW2RhdGEtaG9wcGVyLXN0YXRlPSdkcmFnLW92ZXInXSA+ICoge1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxufVxcblxcbi5maWxlcG9uZC0taG9wcGVyW2RhdGEtaG9wcGVyLXN0YXRlPSdkcmFnLW92ZXInXTo6YWZ0ZXIge1xcbiAgY29udGVudDogJyc7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiAwO1xcbiAgdG9wOiAwO1xcbiAgcmlnaHQ6IDA7XFxuICBib3R0b206IDA7XFxuICB6LWluZGV4OiAxMDA7XFxufVxcblxcbi5maWxlcG9uZC0tcHJvZ3Jlc3MtaW5kaWNhdG9yIHtcXG4gIHotaW5kZXg6IDEwMztcXG59XFxuXFxuLmZpbGVwb25kLS1maWxlLWFjdGlvbi1idXR0b24ge1xcbiAgei1pbmRleDogMTAyO1xcbn1cXG5cXG4uZmlsZXBvbmQtLWZpbGUtc3RhdHVzIHtcXG4gIHotaW5kZXg6IDEwMTtcXG59XFxuXFxuLmZpbGVwb25kLS1maWxlLWluZm8ge1xcbiAgei1pbmRleDogMTAwO1xcbn1cXG5cXG4uZmlsZXBvbmQtLWl0ZW0ge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgei1pbmRleDogMTtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDAuMjVlbTtcXG4gIHdpbGwtY2hhbmdlOiB0cmFuc2Zvcm0sIG9wYWNpdHk7XFxufVxcbi5maWxlcG9uZC0taXRlbSA+IC5maWxlcG9uZC0tcGFuZWwge1xcbiAgei1pbmRleDogLTE7XFxufVxcbi5maWxlcG9uZC0taXRlbSA+IC5maWxlcG9uZC0tcGFuZWwgLmZpbGVwb25kLS1wYW5lbC1ib3R0b20ge1xcbiAgYm94LXNoYWRvdzogMCAwLjA2MjVlbSAwLjEyNWVtIC0wLjA2MjVlbSByZ2JhKDAsIDAsIDAsIDAuMjUpO1xcbn1cXG5cXG4uZmlsZXBvbmQtLWl0ZW0tcGFuZWwge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzY0NjA1ZTtcXG59XFxuXFxuW2RhdGEtZmlsZXBvbmQtaXRlbS1zdGF0ZT0ncHJvY2Vzc2luZy1jb21wbGV0ZSddIC5maWxlcG9uZC0taXRlbS1wYW5lbCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzY5NzYzO1xcbn1cXG5cXG5bZGF0YS1maWxlcG9uZC1pdGVtLXN0YXRlKj0naW52YWxpZCddIC5maWxlcG9uZC0taXRlbS1wYW5lbCxcXG5bZGF0YS1maWxlcG9uZC1pdGVtLXN0YXRlKj0nZXJyb3InXSAuZmlsZXBvbmQtLWl0ZW0tcGFuZWwge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2M0NGU0NztcXG59XFxuXFxuLmZpbGVwb25kLS1pdGVtLXBhbmVsIHtcXG4gIGJvcmRlci1yYWRpdXM6IDAuNWVtO1xcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjI1cztcXG59XFxuXFxuLmZpbGVwb25kLS1saXN0LXNjcm9sbGVyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICByaWdodDogMDtcXG4gIG1hcmdpbjogMDtcXG4gIHdpbGwtY2hhbmdlOiB0cmFuc2Zvcm07XFxufVxcblxcbi5maWxlcG9uZC0tbGlzdC1zY3JvbGxlcltkYXRhLXN0YXRlPSdvdmVyZmxvdyddIHtcXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcXG4gIC13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nOiB0b3VjaDtcXG4gIC13ZWJraXQtbWFzazogbGluZWFyLWdyYWRpZW50KFxcbiAgICB0byBib3R0b20sXFxuICAgICMwMDAgY2FsYygxMDAlIC0gMC41ZW0pLFxcbiAgICB0cmFuc3BhcmVudCAxMDAlXFxuICApO1xcbiAgbWFzazogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgIzAwMCBjYWxjKDEwMCUgLSAwLjVlbSksIHRyYW5zcGFyZW50IDEwMCUpO1xcbn1cXG4uZmlsZXBvbmQtLWxpc3Qtc2Nyb2xsZXJbZGF0YS1zdGF0ZT0nb3ZlcmZsb3cnXSAuZmlsZXBvbmQtLWxpc3Qge1xcbiAgYm90dG9tOiAwO1xcbiAgcmlnaHQ6IDA7XFxufVxcblxcbi5maWxlcG9uZC0tbGlzdC1zY3JvbGxlcjo6LXdlYmtpdC1zY3JvbGxiYXIge1xcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxufVxcblxcbi5maWxlcG9uZC0tbGlzdC1zY3JvbGxlcjo6LXdlYmtpdC1zY3JvbGxiYXI6dmVydGljYWwge1xcbiAgd2lkdGg6IDFlbTtcXG59XFxuXFxuLmZpbGVwb25kLS1saXN0LXNjcm9sbGVyOjotd2Via2l0LXNjcm9sbGJhcjpob3Jpem9udGFsIHtcXG4gIGhlaWdodDogMDtcXG59XFxuXFxuLmZpbGVwb25kLS1saXN0LXNjcm9sbGVyOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMyk7XFxuICBib3JkZXItcmFkaXVzOiA5OTk5OXB4O1xcbiAgYm9yZGVyOiAwLjMxMjVlbSBzb2xpZCB0cmFuc3BhcmVudDtcXG4gIGJhY2tncm91bmQtY2xpcDogY29udGVudC1ib3g7XFxufVxcblxcbi8qIGhhcmQgdG8gb3ZlcmlkZSBzdHlsZXMgb24gcHVycG9zZSAqL1xcbi5maWxlcG9uZC0tbGlzdC5maWxlcG9uZC0tbGlzdCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbiAgd2lsbC1jaGFuZ2U6IHRyYW5zZm9ybTtcXG59XFxuXFxuLyogdXNlZCBmb3IgcGFkZGluZyBzbyBhbGxvd2VkIHRvIGJlIHJlc3R5bGVkICovXFxuLmZpbGVwb25kLS1saXN0IHtcXG4gIGxlZnQ6IDAuNzVlbTtcXG4gIHJpZ2h0OiAwLjc1ZW07XFxufVxcblxcbi5maWxlcG9uZC0tcm9vdFtkYXRhLXN0eWxlLXBhbmVsLWxheW91dH49J2ludGVncmF0ZWQnXSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIG1heC13aWR0aDogbm9uZTtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuLmZpbGVwb25kLS1yb290W2RhdGEtc3R5bGUtcGFuZWwtbGF5b3V0fj0nY2lyY2xlJ10gLmZpbGVwb25kLS1wYW5lbC1yb290LFxcbi5maWxlcG9uZC0tcm9vdFtkYXRhLXN0eWxlLXBhbmVsLWxheW91dH49J2ludGVncmF0ZWQnXSAuZmlsZXBvbmQtLXBhbmVsLXJvb3Qge1xcbiAgYm9yZGVyLXJhZGl1czogMDtcXG59XFxuLmZpbGVwb25kLS1yb290W2RhdGEtc3R5bGUtcGFuZWwtbGF5b3V0fj0nY2lyY2xlJ10gLmZpbGVwb25kLS1wYW5lbC1yb290ID4gKixcXG4uZmlsZXBvbmQtLXJvb3RbZGF0YS1zdHlsZS1wYW5lbC1sYXlvdXR+PSdpbnRlZ3JhdGVkJ11cXG4gIC5maWxlcG9uZC0tcGFuZWwtcm9vdFxcbiAgPiAqIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5maWxlcG9uZC0tcm9vdFtkYXRhLXN0eWxlLXBhbmVsLWxheW91dH49J2NpcmNsZSddIC5maWxlcG9uZC0tZHJvcC1sYWJlbCxcXG4uZmlsZXBvbmQtLXJvb3RbZGF0YS1zdHlsZS1wYW5lbC1sYXlvdXR+PSdpbnRlZ3JhdGVkJ10gLmZpbGVwb25kLS1kcm9wLWxhYmVsIHtcXG4gIGJvdHRvbTogMDtcXG4gIGhlaWdodDogYXV0bztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB6LWluZGV4OiA3O1xcbn1cXG5cXG4uZmlsZXBvbmQtLXJvb3RbZGF0YS1zdHlsZS1wYW5lbC1sYXlvdXR+PSdjaXJjbGUnXSAuZmlsZXBvbmQtLWl0ZW0tcGFuZWwsXFxuLmZpbGVwb25kLS1yb290W2RhdGEtc3R5bGUtcGFuZWwtbGF5b3V0fj0naW50ZWdyYXRlZCddIC5maWxlcG9uZC0taXRlbS1wYW5lbCB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uZmlsZXBvbmQtLXJvb3RbZGF0YS1zdHlsZS1wYW5lbC1sYXlvdXR+PSdjb21wYWN0J10gLmZpbGVwb25kLS1saXN0LXNjcm9sbGVyLFxcbi5maWxlcG9uZC0tcm9vdFtkYXRhLXN0eWxlLXBhbmVsLWxheW91dH49J2ludGVncmF0ZWQnXVxcbiAgLmZpbGVwb25kLS1saXN0LXNjcm9sbGVyIHtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBtYXJnaW4tdG9wOiAwO1xcbiAgbWFyZ2luLWJvdHRvbTogMDtcXG59XFxuXFxuLmZpbGVwb25kLS1yb290W2RhdGEtc3R5bGUtcGFuZWwtbGF5b3V0fj0nY29tcGFjdCddIC5maWxlcG9uZC0tbGlzdCxcXG4uZmlsZXBvbmQtLXJvb3RbZGF0YS1zdHlsZS1wYW5lbC1sYXlvdXR+PSdpbnRlZ3JhdGVkJ10gLmZpbGVwb25kLS1saXN0IHtcXG4gIGxlZnQ6IDA7XFxuICByaWdodDogMDtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLmZpbGVwb25kLS1yb290W2RhdGEtc3R5bGUtcGFuZWwtbGF5b3V0fj0nY29tcGFjdCddIC5maWxlcG9uZC0taXRlbSxcXG4uZmlsZXBvbmQtLXJvb3RbZGF0YS1zdHlsZS1wYW5lbC1sYXlvdXR+PSdpbnRlZ3JhdGVkJ10gLmZpbGVwb25kLS1pdGVtIHtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuLmZpbGVwb25kLS1yb290W2RhdGEtc3R5bGUtcGFuZWwtbGF5b3V0fj0nY29tcGFjdCddIC5maWxlcG9uZC0tZmlsZS13cmFwcGVyLFxcbi5maWxlcG9uZC0tcm9vdFtkYXRhLXN0eWxlLXBhbmVsLWxheW91dH49J2ludGVncmF0ZWQnXSAuZmlsZXBvbmQtLWZpbGUtd3JhcHBlciB7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi5maWxlcG9uZC0tcm9vdFtkYXRhLXN0eWxlLXBhbmVsLWxheW91dH49J2NpcmNsZSddIHtcXG4gIGJvcmRlci1yYWRpdXM6IDk5OTk5cmVtO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuLmZpbGVwb25kLS1yb290W2RhdGEtc3R5bGUtcGFuZWwtbGF5b3V0fj0nY2lyY2xlJ10gPiAuZmlsZXBvbmQtLXBhbmVsIHtcXG4gIGJvcmRlci1yYWRpdXM6IGluaGVyaXQ7XFxufVxcbi5maWxlcG9uZC0tcm9vdFtkYXRhLXN0eWxlLXBhbmVsLWxheW91dH49J2NpcmNsZSddID4gLmZpbGVwb25kLS1wYW5lbCA+ICoge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuLmZpbGVwb25kLS1yb290W2RhdGEtc3R5bGUtcGFuZWwtbGF5b3V0fj0nY2lyY2xlJ10gLmZpbGVwb25kLS1maWxlLWluZm8ge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuLmZpbGVwb25kLS1yb290W2RhdGEtc3R5bGUtcGFuZWwtbGF5b3V0fj0nY2lyY2xlJ10gLmZpbGVwb25kLS1maWxlLXN0YXR1cyB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uZmlsZXBvbmQtLXBhbmVsLXJvb3Qge1xcbiAgYm9yZGVyLXJhZGl1czogMC41ZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMGVmO1xcbn1cXG5cXG4uZmlsZXBvbmQtLXBhbmVsIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IDA7XFxuICB0b3A6IDA7XFxuICByaWdodDogMDtcXG4gIG1hcmdpbjogMDtcXG4gIGhlaWdodDogMTAwJSAhaW1wb3J0YW50O1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxufVxcblxcbi5maWxlcG9uZC1wYW5lbDpub3QoW2RhdGEtc2NhbGFibGU9J2ZhbHNlJ10pIHtcXG4gIGhlaWdodDogYXV0byAhaW1wb3J0YW50O1xcbn1cXG5cXG4uZmlsZXBvbmQtLXBhbmVsW2RhdGEtc2NhbGFibGU9J2ZhbHNlJ10gPiBkaXYge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLmZpbGVwb25kLS1wYW5lbFtkYXRhLXNjYWxhYmxlPSd0cnVlJ10ge1xcbiAgLXdlYmtpdC10cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xcbiAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XFxuICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcXG59XFxuXFxuLmZpbGVwb25kLS1wYW5lbC10b3AsXFxuLmZpbGVwb25kLS1wYW5lbC1ib3R0b20sXFxuLmZpbGVwb25kLS1wYW5lbC1jZW50ZXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogMDtcXG4gIHRvcDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuLmZpbGVwb25kLS1wYW5lbC10b3AsXFxuLmZpbGVwb25kLS1wYW5lbC1ib3R0b20ge1xcbiAgaGVpZ2h0OiAwLjVlbTtcXG59XFxuXFxuLmZpbGVwb25kLS1wYW5lbC10b3Age1xcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMCAhaW1wb3J0YW50O1xcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDAgIWltcG9ydGFudDtcXG4gIGJvcmRlci1ib3R0b206IG5vbmUgIWltcG9ydGFudDtcXG59XFxuLmZpbGVwb25kLS1wYW5lbC10b3A6OmFmdGVyIHtcXG4gIGNvbnRlbnQ6ICcnO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgaGVpZ2h0OiAycHg7XFxuICBsZWZ0OiAwO1xcbiAgcmlnaHQ6IDA7XFxuICBib3R0b206IC0xcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xcbn1cXG5cXG4uZmlsZXBvbmQtLXBhbmVsLWNlbnRlcixcXG4uZmlsZXBvbmQtLXBhbmVsLWJvdHRvbSB7XFxuICB3aWxsLWNoYW5nZTogdHJhbnNmb3JtO1xcbiAgLXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XFxuICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XFxuICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IGxlZnQgdG9wO1xcbiAgdHJhbnNmb3JtLW9yaWdpbjogbGVmdCB0b3A7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMC41ZW0sIDApO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLjVlbSwgMCk7XFxufVxcblxcbi5maWxlcG9uZC0tcGFuZWwtYm90dG9tIHtcXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDAgIWltcG9ydGFudDtcXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwICFpbXBvcnRhbnQ7XFxuICBib3JkZXItdG9wOiBub25lICFpbXBvcnRhbnQ7XFxufVxcbi5maWxlcG9uZC0tcGFuZWwtYm90dG9tOjpiZWZvcmUge1xcbiAgY29udGVudDogJyc7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBoZWlnaHQ6IDJweDtcXG4gIGxlZnQ6IDA7XFxuICByaWdodDogMDtcXG4gIHRvcDogLTFweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XFxufVxcblxcbi5maWxlcG9uZC0tcGFuZWwtY2VudGVyIHtcXG4gIGhlaWdodDogMTAwcHggIWltcG9ydGFudDtcXG4gIGJvcmRlci10b3A6IG5vbmUgIWltcG9ydGFudDtcXG4gIGJvcmRlci1ib3R0b206IG5vbmUgIWltcG9ydGFudDtcXG4gIGJvcmRlci1yYWRpdXM6IDAgIWltcG9ydGFudDtcXG59XFxuLmZpbGVwb25kLS1wYW5lbC1jZW50ZXI6bm90KFtzdHlsZV0pIHtcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXG59XFxuXFxuLmZpbGVwb25kLS1wcm9ncmVzcy1pbmRpY2F0b3Ige1xcbiAgcG9zaXRpb246IHN0YXRpYztcXG4gIHdpZHRoOiAxLjI1ZW07XFxuICBoZWlnaHQ6IDEuMjVlbTtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgbWFyZ2luOiAwO1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICB3aWxsLWNoYW5nZTogdHJhbnNmb3JtLCBvcGFjaXR5O1xcbn1cXG5cXG4uZmlsZXBvbmQtLXByb2dyZXNzLWluZGljYXRvciBzdmcge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xcbiAgdHJhbnNmb3JtLWJveDogZmlsbC1ib3g7XFxufVxcblxcbi5maWxlcG9uZC0tcHJvZ3Jlc3MtaW5kaWNhdG9yIHBhdGgge1xcbiAgZmlsbDogbm9uZTtcXG4gIHN0cm9rZTogY3VycmVudENvbG9yO1xcbn1cXG5cXG4uZmlsZXBvbmQtLWxpc3Qtc2Nyb2xsZXIge1xcbiAgei1pbmRleDogNjtcXG59XFxuXFxuLmZpbGVwb25kLS1kcm9wLWxhYmVsIHtcXG4gIHotaW5kZXg6IDU7XFxufVxcblxcbi5maWxlcG9uZC0tZHJpcCB7XFxuICB6LWluZGV4OiAzO1xcbn1cXG5cXG4uZmlsZXBvbmQtLXJvb3QgPiAuZmlsZXBvbmQtLXBhbmVsIHtcXG4gIHotaW5kZXg6IDI7XFxufVxcblxcbi5maWxlcG9uZC0tYnJvd3NlciB7XFxuICB6LWluZGV4OiAxO1xcbn1cXG5cXG4uZmlsZXBvbmQtLXJvb3Qge1xcbiAgLyogbGF5b3V0Ki9cXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBtYXJnaW4tYm90dG9tOiAxZW07XFxuICAvKiBiYXNlIGZvbnQgc2l6ZSBmb3Igd2hvbGUgY29tcG9uZW50ICovXFxuICBmb250LXNpemU6IDFyZW07XFxuICAvKiBiYXNlIGxpbmUgaGVpZ2h0ICovXFxuICBsaW5lLWhlaWdodDogbm9ybWFsO1xcbiAgLyogdXAgdXNlcyBkZWZhdWx0IHN5c3RlbSBmb250IGZhbWlseSAqL1xcbiAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCBIZWx2ZXRpY2EsXFxuICAgIEFyaWFsLCBzYW5zLXNlcmlmLCAnQXBwbGUgQ29sb3IgRW1vamknLCAnU2Vnb2UgVUkgRW1vamknLCAnU2Vnb2UgVUkgU3ltYm9sJztcXG4gIC8qIHdpbGwgaW5jcmVhc2UgZm9udCB3ZWlnaHQgYSBiaXQgb24gU2FmYXJpICovXFxuICBmb250LXdlaWdodDogNDUwO1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG4gIHRleHQtcmVuZGVyaW5nOiBvcHRpbWl6ZUxlZ2liaWxpdHk7XFxuICBkaXJlY3Rpb246IGx0cjtcXG4gIGNvbnRhaW46IGxheW91dCBzdHlsZSBzaXplO1xcbn1cXG4uZmlsZXBvbmQtLXJvb3QgKiB7XFxuICBmb250LXNpemU6IGluaGVyaXQ7XFxuICBib3gtc2l6aW5nOiBpbmhlcml0O1xcbiAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7XFxufVxcbi5maWxlcG9uZC0tcm9vdFtkYXRhLWRpc2FibGVkXSB7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG59XFxuXFxuLyoqXFxuICogUm9vdCBlbGVtZW50IGNoaWxkcmVuIGxheW91dFxcbiAqL1xcbi5maWxlcG9uZC0tcm9vdCAuZmlsZXBvbmQtLWRyb3AtbGFiZWwge1xcbiAgbWluLWhlaWdodDogNC43NWVtO1xcbn1cXG5cXG4uZmlsZXBvbmQtLXJvb3QgLmZpbGVwb25kLS1saXN0LXNjcm9sbGVyIHtcXG4gIG1hcmdpbi10b3A6IDFlbTtcXG4gIG1hcmdpbi1ib3R0b206IDFlbTtcXG59XFxuXCIsIFwiXCJdKTtcblxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXNlU291cmNlTWFwKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuICdAbWVkaWEgJyArIGl0ZW1bMl0gKyAneycgKyBjb250ZW50ICsgJ30nO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgICB9XG4gICAgfSkuam9pbignJyk7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsICcnXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAoaSA9IDA7IGkgPCBtb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IG1vZHVsZXNbaV07IC8vIHNraXAgYWxyZWFkeSBpbXBvcnRlZCBtb2R1bGVcbiAgICAgIC8vIHRoaXMgaW1wbGVtZW50YXRpb24gaXMgbm90IDEwMCUgcGVyZmVjdCBmb3Igd2VpcmQgbWVkaWEgcXVlcnkgY29tYmluYXRpb25zXG4gICAgICAvLyB3aGVuIGEgbW9kdWxlIGlzIGltcG9ydGVkIG11bHRpcGxlIHRpbWVzIHdpdGggZGlmZmVyZW50IG1lZGlhIHF1ZXJpZXMuXG4gICAgICAvLyBJIGhvcGUgdGhpcyB3aWxsIG5ldmVyIG9jY3VyIChIZXkgdGhpcyB3YXkgd2UgaGF2ZSBzbWFsbGVyIGJ1bmRsZXMpXG5cbiAgICAgIGlmIChpdGVtWzBdID09IG51bGwgfHwgIWFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgaWYgKG1lZGlhUXVlcnkgJiYgIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgICAgaXRlbVsyXSA9ICcoJyArIGl0ZW1bMl0gKyAnKSBhbmQgKCcgKyBtZWRpYVF1ZXJ5ICsgJyknO1xuICAgICAgICB9XG5cbiAgICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07XG5cbmZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXSB8fCAnJztcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHVzZVNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gdG9Db21tZW50KGNzc01hcHBpbmcpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gJy8qIyBzb3VyY2VVUkw9JyArIGNzc01hcHBpbmcuc291cmNlUm9vdCArIHNvdXJjZSArICcgKi8nO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn0gLy8gQWRhcHRlZCBmcm9tIGNvbnZlcnQtc291cmNlLW1hcCAoTUlUKVxuXG5cbmZ1bmN0aW9uIHRvQ29tbWVudChzb3VyY2VNYXApIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpO1xuICB2YXIgZGF0YSA9ICdzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCwnICsgYmFzZTY0O1xuICByZXR1cm4gJy8qIyAnICsgZGF0YSArICcgKi8nO1xufSIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGVzY2FwZSh1cmwsIG5lZWRRdW90ZXMpIHtcbiAgaWYgKHR5cGVvZiB1cmwgIT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfSAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXS8udGVzdCh1cmwpIHx8IG5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gJ1wiJyArIHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csICdcXFxcbicpICsgJ1wiJztcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIi8qIVxuICogRmlsZVBvbmQgNC40LjdcbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCwgaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVQvXG4gKiBQbGVhc2UgdmlzaXQgaHR0cHM6Ly9wcWluYS5ubC9maWxlcG9uZC8gZm9yIGRldGFpbHMuXG4gKi9cblxuLyogZXNsaW50LWRpc2FibGUgKi9cblxuKGZ1bmN0aW9uKGdsb2JhbCwgZmFjdG9yeSkge1xuICB0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCdcbiAgICA/IGZhY3RvcnkoZXhwb3J0cylcbiAgICA6IHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZFxuICAgID8gZGVmaW5lKFsnZXhwb3J0cyddLCBmYWN0b3J5KVxuICAgIDogKChnbG9iYWwgPSBnbG9iYWwgfHwgc2VsZiksIGZhY3RvcnkoKGdsb2JhbC5GaWxlUG9uZCA9IHt9KSkpO1xufSkodGhpcywgZnVuY3Rpb24oZXhwb3J0cykge1xuICAndXNlIHN0cmljdCc7XG5cbiAgdmFyIGlzTm9kZSA9IGZ1bmN0aW9uIGlzTm9kZSh2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIEhUTUxFbGVtZW50O1xuICB9O1xuXG4gIHZhciBjcmVhdGVTdG9yZSA9IGZ1bmN0aW9uIGNyZWF0ZVN0b3JlKGluaXRpYWxTdGF0ZSkge1xuICAgIHZhciBxdWVyaWVzID1cbiAgICAgIGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogW107XG4gICAgdmFyIGFjdGlvbnMgPVxuICAgICAgYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiBbXTtcbiAgICAvLyBpbnRlcm5hbCBzdGF0ZVxuICAgIHZhciBzdGF0ZSA9IE9iamVjdC5hc3NpZ24oe30sIGluaXRpYWxTdGF0ZSk7XG5cbiAgICAvLyBjb250YWlucyBhbGwgYWN0aW9ucyBmb3IgbmV4dCBmcmFtZSwgaXMgY2xlYXIgd2hlbiBhY3Rpb25zIGFyZSByZXF1ZXN0ZWRcbiAgICB2YXIgYWN0aW9uUXVldWUgPSBbXTtcbiAgICB2YXIgZGlzcGF0Y2hRdWV1ZSA9IFtdO1xuXG4gICAgLy8gcmV0dXJucyBhIGR1cGxpY2F0ZSBvZiB0aGUgY3VycmVudCBzdGF0ZVxuICAgIHZhciBnZXRTdGF0ZSA9IGZ1bmN0aW9uIGdldFN0YXRlKCkge1xuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlKTtcbiAgICB9O1xuXG4gICAgLy8gcmV0dXJucyBhIGR1cGxpY2F0ZSBvZiB0aGUgYWN0aW9ucyBhcnJheSBhbmQgY2xlYXJzIHRoZSBhY3Rpb25zIGFycmF5XG4gICAgdmFyIHByb2Nlc3NBY3Rpb25RdWV1ZSA9IGZ1bmN0aW9uIHByb2Nlc3NBY3Rpb25RdWV1ZSgpIHtcbiAgICAgIC8vIGNyZWF0ZSBjb3B5IG9mIGFjdGlvbnMgcXVldWVcbiAgICAgIHZhciBxdWV1ZSA9IFtdLmNvbmNhdChhY3Rpb25RdWV1ZSk7XG5cbiAgICAgIC8vIGNsZWFyIGFjdGlvbnMgcXVldWUgKHdlIGRvbid0IHdhbnQgbm8gZG91YmxlIGFjdGlvbnMpXG4gICAgICBhY3Rpb25RdWV1ZS5sZW5ndGggPSAwO1xuXG4gICAgICByZXR1cm4gcXVldWU7XG4gICAgfTtcblxuICAgIC8vIHByb2Nlc3NlcyBhY3Rpb25zIHRoYXQgbWlnaHQgYmxvY2sgdGhlIG1haW4gVUkgdGhyZWFkXG4gICAgdmFyIHByb2Nlc3NEaXNwYXRjaFF1ZXVlID0gZnVuY3Rpb24gcHJvY2Vzc0Rpc3BhdGNoUXVldWUoKSB7XG4gICAgICAvLyBjcmVhdGUgY29weSBvZiBhY3Rpb25zIHF1ZXVlXG4gICAgICB2YXIgcXVldWUgPSBbXS5jb25jYXQoZGlzcGF0Y2hRdWV1ZSk7XG5cbiAgICAgIC8vIGNsZWFyIGFjdGlvbnMgcXVldWUgKHdlIGRvbid0IHdhbnQgbm8gZG91YmxlIGFjdGlvbnMpXG4gICAgICBkaXNwYXRjaFF1ZXVlLmxlbmd0aCA9IDA7XG5cbiAgICAgIC8vIG5vdyBkaXNwYXRjaCB0aGVzZSBhY3Rpb25zXG4gICAgICBxdWV1ZS5mb3JFYWNoKGZ1bmN0aW9uKF9yZWYpIHtcbiAgICAgICAgdmFyIHR5cGUgPSBfcmVmLnR5cGUsXG4gICAgICAgICAgZGF0YSA9IF9yZWYuZGF0YTtcbiAgICAgICAgZGlzcGF0Y2godHlwZSwgZGF0YSk7XG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgLy8gYWRkcyBhIG5ldyBhY3Rpb24sIGNhbGxzIGl0cyBoYW5kbGVyIGFuZFxuICAgIHZhciBkaXNwYXRjaCA9IGZ1bmN0aW9uIGRpc3BhdGNoKHR5cGUsIGRhdGEsIGlzQmxvY2tpbmcpIHtcbiAgICAgIC8vIGlzIGJsb2NraW5nIGFjdGlvblxuICAgICAgaWYgKGlzQmxvY2tpbmcpIHtcbiAgICAgICAgZGlzcGF0Y2hRdWV1ZS5wdXNoKHtcbiAgICAgICAgICB0eXBlOiB0eXBlLFxuICAgICAgICAgIGRhdGE6IGRhdGFcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICAvLyBpZiB0aGlzIGFjdGlvbiBoYXMgYSBoYW5kbGVyLCBoYW5kbGUgdGhlIGFjdGlvblxuICAgICAgaWYgKGFjdGlvbkhhbmRsZXJzW3R5cGVdKSB7XG4gICAgICAgIGFjdGlvbkhhbmRsZXJzW3R5cGVdKGRhdGEpO1xuICAgICAgfVxuXG4gICAgICAvLyBub3cgYWRkIGFjdGlvblxuICAgICAgYWN0aW9uUXVldWUucHVzaCh7XG4gICAgICAgIHR5cGU6IHR5cGUsXG4gICAgICAgIGRhdGE6IGRhdGFcbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICB2YXIgcXVlcnkgPSBmdW5jdGlvbiBxdWVyeShzdHIpIHtcbiAgICAgIHZhciBfcXVlcnlIYW5kbGVzO1xuICAgICAgZm9yIChcbiAgICAgICAgdmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLFxuICAgICAgICAgIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiA+IDEgPyBfbGVuIC0gMSA6IDApLFxuICAgICAgICAgIF9rZXkgPSAxO1xuICAgICAgICBfa2V5IDwgX2xlbjtcbiAgICAgICAgX2tleSsrXG4gICAgICApIHtcbiAgICAgICAgYXJnc1tfa2V5IC0gMV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgICB9XG4gICAgICByZXR1cm4gcXVlcnlIYW5kbGVzW3N0cl1cbiAgICAgICAgPyAoX3F1ZXJ5SGFuZGxlcyA9IHF1ZXJ5SGFuZGxlcylbc3RyXS5hcHBseShfcXVlcnlIYW5kbGVzLCBhcmdzKVxuICAgICAgICA6IG51bGw7XG4gICAgfTtcblxuICAgIHZhciBhcGkgPSB7XG4gICAgICBnZXRTdGF0ZTogZ2V0U3RhdGUsXG4gICAgICBwcm9jZXNzQWN0aW9uUXVldWU6IHByb2Nlc3NBY3Rpb25RdWV1ZSxcbiAgICAgIHByb2Nlc3NEaXNwYXRjaFF1ZXVlOiBwcm9jZXNzRGlzcGF0Y2hRdWV1ZSxcbiAgICAgIGRpc3BhdGNoOiBkaXNwYXRjaCxcbiAgICAgIHF1ZXJ5OiBxdWVyeVxuICAgIH07XG5cbiAgICB2YXIgcXVlcnlIYW5kbGVzID0ge307XG4gICAgcXVlcmllcy5mb3JFYWNoKGZ1bmN0aW9uKHF1ZXJ5KSB7XG4gICAgICBxdWVyeUhhbmRsZXMgPSBPYmplY3QuYXNzaWduKHt9LCBxdWVyeShzdGF0ZSksIHF1ZXJ5SGFuZGxlcyk7XG4gICAgfSk7XG5cbiAgICB2YXIgYWN0aW9uSGFuZGxlcnMgPSB7fTtcbiAgICBhY3Rpb25zLmZvckVhY2goZnVuY3Rpb24oYWN0aW9uKSB7XG4gICAgICBhY3Rpb25IYW5kbGVycyA9IE9iamVjdC5hc3NpZ24oXG4gICAgICAgIHt9LFxuICAgICAgICBhY3Rpb24oZGlzcGF0Y2gsIHF1ZXJ5LCBzdGF0ZSksXG4gICAgICAgIGFjdGlvbkhhbmRsZXJzXG4gICAgICApO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIGFwaTtcbiAgfTtcblxuICB2YXIgZGVmaW5lUHJvcGVydHkgPSBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0eShvYmosIHByb3BlcnR5LCBkZWZpbml0aW9uKSB7XG4gICAgaWYgKHR5cGVvZiBkZWZpbml0aW9uID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBvYmpbcHJvcGVydHldID0gZGVmaW5pdGlvbjtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwgcHJvcGVydHksIE9iamVjdC5hc3NpZ24oe30sIGRlZmluaXRpb24pKTtcbiAgfTtcblxuICB2YXIgZm9yaW4gPSBmdW5jdGlvbiBmb3JpbihvYmosIGNiKSB7XG4gICAgZm9yICh2YXIga2V5IGluIG9iaikge1xuICAgICAgaWYgKCFvYmouaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgY2Ioa2V5LCBvYmpba2V5XSk7XG4gICAgfVxuICB9O1xuXG4gIHZhciBjcmVhdGVPYmplY3QgPSBmdW5jdGlvbiBjcmVhdGVPYmplY3QoZGVmaW5pdGlvbikge1xuICAgIHZhciBvYmogPSB7fTtcbiAgICBmb3JpbihkZWZpbml0aW9uLCBmdW5jdGlvbihwcm9wZXJ0eSkge1xuICAgICAgZGVmaW5lUHJvcGVydHkob2JqLCBwcm9wZXJ0eSwgZGVmaW5pdGlvbltwcm9wZXJ0eV0pO1xuICAgIH0pO1xuICAgIHJldHVybiBvYmo7XG4gIH07XG5cbiAgdmFyIGF0dHIgPSBmdW5jdGlvbiBhdHRyKG5vZGUsIG5hbWUpIHtcbiAgICB2YXIgdmFsdWUgPVxuICAgICAgYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiBudWxsO1xuICAgIGlmICh2YWx1ZSA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuIG5vZGUuZ2V0QXR0cmlidXRlKG5hbWUpIHx8IG5vZGUuaGFzQXR0cmlidXRlKG5hbWUpO1xuICAgIH1cbiAgICBub2RlLnNldEF0dHJpYnV0ZShuYW1lLCB2YWx1ZSk7XG4gIH07XG5cbiAgdmFyIG5zID0gJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJztcbiAgdmFyIHN2Z0VsZW1lbnRzID0gWydzdmcnLCAncGF0aCddOyAvLyBvbmx5IHN2ZyBlbGVtZW50cyB1c2VkXG5cbiAgdmFyIGlzU1ZHRWxlbWVudCA9IGZ1bmN0aW9uIGlzU1ZHRWxlbWVudCh0YWcpIHtcbiAgICByZXR1cm4gc3ZnRWxlbWVudHMuaW5jbHVkZXModGFnKTtcbiAgfTtcblxuICB2YXIgY3JlYXRlRWxlbWVudCA9IGZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnQodGFnLCBjbGFzc05hbWUpIHtcbiAgICB2YXIgYXR0cmlidXRlcyA9XG4gICAgICBhcmd1bWVudHMubGVuZ3RoID4gMiAmJiBhcmd1bWVudHNbMl0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1syXSA6IHt9O1xuICAgIGlmICh0eXBlb2YgY2xhc3NOYW1lID09PSAnb2JqZWN0Jykge1xuICAgICAgYXR0cmlidXRlcyA9IGNsYXNzTmFtZTtcbiAgICAgIGNsYXNzTmFtZSA9IG51bGw7XG4gICAgfVxuICAgIHZhciBlbGVtZW50ID0gaXNTVkdFbGVtZW50KHRhZylcbiAgICAgID8gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKG5zLCB0YWcpXG4gICAgICA6IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnKTtcbiAgICBpZiAoY2xhc3NOYW1lKSB7XG4gICAgICBpZiAoaXNTVkdFbGVtZW50KHRhZykpIHtcbiAgICAgICAgYXR0cihlbGVtZW50LCAnY2xhc3MnLCBjbGFzc05hbWUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZWxlbWVudC5jbGFzc05hbWUgPSBjbGFzc05hbWU7XG4gICAgICB9XG4gICAgfVxuICAgIGZvcmluKGF0dHJpYnV0ZXMsIGZ1bmN0aW9uKG5hbWUsIHZhbHVlKSB7XG4gICAgICBhdHRyKGVsZW1lbnQsIG5hbWUsIHZhbHVlKTtcbiAgICB9KTtcbiAgICByZXR1cm4gZWxlbWVudDtcbiAgfTtcblxuICB2YXIgYXBwZW5kQ2hpbGQgPSBmdW5jdGlvbiBhcHBlbmRDaGlsZChwYXJlbnQpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24oY2hpbGQsIGluZGV4KSB7XG4gICAgICBpZiAodHlwZW9mIGluZGV4ICE9PSAndW5kZWZpbmVkJyAmJiBwYXJlbnQuY2hpbGRyZW5baW5kZXhdKSB7XG4gICAgICAgIHBhcmVudC5pbnNlcnRCZWZvcmUoY2hpbGQsIHBhcmVudC5jaGlsZHJlbltpbmRleF0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcGFyZW50LmFwcGVuZENoaWxkKGNoaWxkKTtcbiAgICAgIH1cbiAgICB9O1xuICB9O1xuXG4gIHZhciBhcHBlbmRDaGlsZFZpZXcgPSBmdW5jdGlvbiBhcHBlbmRDaGlsZFZpZXcocGFyZW50LCBjaGlsZFZpZXdzKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKHZpZXcsIGluZGV4KSB7XG4gICAgICBpZiAodHlwZW9mIGluZGV4ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjaGlsZFZpZXdzLnNwbGljZShpbmRleCwgMCwgdmlldyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjaGlsZFZpZXdzLnB1c2godmlldyk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB2aWV3O1xuICAgIH07XG4gIH07XG5cbiAgdmFyIHJlbW92ZUNoaWxkVmlldyA9IGZ1bmN0aW9uIHJlbW92ZUNoaWxkVmlldyhwYXJlbnQsIGNoaWxkVmlld3MpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24odmlldykge1xuICAgICAgLy8gcmVtb3ZlIGZyb20gY2hpbGQgdmlld3NcbiAgICAgIGNoaWxkVmlld3Muc3BsaWNlKGNoaWxkVmlld3MuaW5kZXhPZih2aWV3KSwgMSk7XG5cbiAgICAgIC8vIHJlbW92ZSB0aGUgZWxlbWVudFxuICAgICAgaWYgKHZpZXcuZWxlbWVudC5wYXJlbnROb2RlKSB7XG4gICAgICAgIHBhcmVudC5yZW1vdmVDaGlsZCh2aWV3LmVsZW1lbnQpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdmlldztcbiAgICB9O1xuICB9O1xuXG4gIHZhciBnZXRWaWV3UmVjdCA9IGZ1bmN0aW9uIGdldFZpZXdSZWN0KFxuICAgIGVsZW1lbnRSZWN0LFxuICAgIGNoaWxkVmlld3MsXG4gICAgb2Zmc2V0LFxuICAgIHNjYWxlXG4gICkge1xuICAgIHZhciBsZWZ0ID0gb2Zmc2V0WzBdIHx8IGVsZW1lbnRSZWN0LmxlZnQ7XG4gICAgdmFyIHRvcCA9IG9mZnNldFsxXSB8fCBlbGVtZW50UmVjdC50b3A7XG4gICAgdmFyIHJpZ2h0ID0gbGVmdCArIGVsZW1lbnRSZWN0LndpZHRoO1xuICAgIHZhciBib3R0b20gPSB0b3AgKyBlbGVtZW50UmVjdC5oZWlnaHQgKiAoc2NhbGVbMV0gfHwgMSk7XG5cbiAgICB2YXIgcmVjdCA9IHtcbiAgICAgIC8vIHRoZSByZWN0YW5nbGUgb2YgdGhlIGVsZW1lbnQgaXRzZWxmXG4gICAgICBlbGVtZW50OiBPYmplY3QuYXNzaWduKHt9LCBlbGVtZW50UmVjdCksXG5cbiAgICAgIC8vIHRoZSByZWN0YW5nbGUgb2YgdGhlIGVsZW1lbnQgZXhwYW5kZWQgdG8gY29udGFpbiBpdHMgY2hpbGRyZW4sIGRvZXMgbm90IGluY2x1ZGUgYW55IG1hcmdpbnNcbiAgICAgIGlubmVyOiB7XG4gICAgICAgIGxlZnQ6IGVsZW1lbnRSZWN0LmxlZnQsXG4gICAgICAgIHRvcDogZWxlbWVudFJlY3QudG9wLFxuICAgICAgICByaWdodDogZWxlbWVudFJlY3QucmlnaHQsXG4gICAgICAgIGJvdHRvbTogZWxlbWVudFJlY3QuYm90dG9tXG4gICAgICB9LFxuXG4gICAgICAvLyB0aGUgcmVjdGFuZ2xlIG9mIHRoZSBlbGVtZW50IGV4cGFuZGVkIHRvIGNvbnRhaW4gaXRzIGNoaWxkcmVuIGluY2x1ZGluZyBvd24gbWFyZ2luIGFuZCBjaGlsZCBtYXJnaW5zXG4gICAgICAvLyBtYXJnaW5zIHdpbGwgYmUgYWRkZWQgYWZ0ZXIgd2UndmUgcmVjYWxjdWxhdGVkIHRoZSBzaXplXG4gICAgICBvdXRlcjoge1xuICAgICAgICBsZWZ0OiBsZWZ0LFxuICAgICAgICB0b3A6IHRvcCxcbiAgICAgICAgcmlnaHQ6IHJpZ2h0LFxuICAgICAgICBib3R0b206IGJvdHRvbVxuICAgICAgfVxuICAgIH07XG5cbiAgICAvLyBleHBhbmQgcmVjdCB0byBmaXQgYWxsIGNoaWxkIHJlY3RhbmdsZXNcbiAgICBjaGlsZFZpZXdzXG4gICAgICAuZmlsdGVyKGZ1bmN0aW9uKGNoaWxkVmlldykge1xuICAgICAgICByZXR1cm4gIWNoaWxkVmlldy5pc1JlY3RJZ25vcmVkKCk7XG4gICAgICB9KVxuICAgICAgLm1hcChmdW5jdGlvbihjaGlsZFZpZXcpIHtcbiAgICAgICAgcmV0dXJuIGNoaWxkVmlldy5yZWN0O1xuICAgICAgfSlcbiAgICAgIC5mb3JFYWNoKGZ1bmN0aW9uKGNoaWxkVmlld1JlY3QpIHtcbiAgICAgICAgZXhwYW5kUmVjdChyZWN0LmlubmVyLCBPYmplY3QuYXNzaWduKHt9LCBjaGlsZFZpZXdSZWN0LmlubmVyKSk7XG4gICAgICAgIGV4cGFuZFJlY3QocmVjdC5vdXRlciwgT2JqZWN0LmFzc2lnbih7fSwgY2hpbGRWaWV3UmVjdC5vdXRlcikpO1xuICAgICAgfSk7XG5cbiAgICAvLyBjYWxjdWxhdGUgaW5uZXIgd2lkdGggYW5kIGhlaWdodFxuICAgIGNhbGN1bGF0ZVJlY3RTaXplKHJlY3QuaW5uZXIpO1xuXG4gICAgLy8gYXBwZW5kIGFkZGl0aW9uYWwgbWFyZ2luICh0b3AgYW5kIGxlZnQgbWFyZ2lucyBhcmUgaW5jbHVkZWQgaW4gdG9wIGFuZCBsZWZ0IGF1dG9tYXRpY2FsbHkpXG4gICAgcmVjdC5vdXRlci5ib3R0b20gKz0gcmVjdC5lbGVtZW50Lm1hcmdpbkJvdHRvbTtcbiAgICByZWN0Lm91dGVyLnJpZ2h0ICs9IHJlY3QuZWxlbWVudC5tYXJnaW5SaWdodDtcblxuICAgIC8vIGNhbGN1bGF0ZSBvdXRlciB3aWR0aCBhbmQgaGVpZ2h0XG4gICAgY2FsY3VsYXRlUmVjdFNpemUocmVjdC5vdXRlcik7XG5cbiAgICByZXR1cm4gcmVjdDtcbiAgfTtcblxuICB2YXIgZXhwYW5kUmVjdCA9IGZ1bmN0aW9uIGV4cGFuZFJlY3QocGFyZW50LCBjaGlsZCkge1xuICAgIC8vIGFkanVzdCBmb3IgcGFyZW50IG9mZnNldFxuICAgIGNoaWxkLnRvcCArPSBwYXJlbnQudG9wO1xuICAgIGNoaWxkLnJpZ2h0ICs9IHBhcmVudC5sZWZ0O1xuICAgIGNoaWxkLmJvdHRvbSArPSBwYXJlbnQudG9wO1xuICAgIGNoaWxkLmxlZnQgKz0gcGFyZW50LmxlZnQ7XG5cbiAgICBpZiAoY2hpbGQuYm90dG9tID4gcGFyZW50LmJvdHRvbSkge1xuICAgICAgcGFyZW50LmJvdHRvbSA9IGNoaWxkLmJvdHRvbTtcbiAgICB9XG5cbiAgICBpZiAoY2hpbGQucmlnaHQgPiBwYXJlbnQucmlnaHQpIHtcbiAgICAgIHBhcmVudC5yaWdodCA9IGNoaWxkLnJpZ2h0O1xuICAgIH1cbiAgfTtcblxuICB2YXIgY2FsY3VsYXRlUmVjdFNpemUgPSBmdW5jdGlvbiBjYWxjdWxhdGVSZWN0U2l6ZShyZWN0KSB7XG4gICAgcmVjdC53aWR0aCA9IHJlY3QucmlnaHQgLSByZWN0LmxlZnQ7XG4gICAgcmVjdC5oZWlnaHQgPSByZWN0LmJvdHRvbSAtIHJlY3QudG9wO1xuICB9O1xuXG4gIHZhciBpc051bWJlciA9IGZ1bmN0aW9uIGlzTnVtYmVyKHZhbHVlKSB7XG4gICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcic7XG4gIH07XG5cbiAgLyoqXG4gICAqIERldGVybWluZXMgaWYgcG9zaXRpb24gaXMgYXQgZGVzdGluYXRpb25cbiAgICogQHBhcmFtIHBvc2l0aW9uXG4gICAqIEBwYXJhbSBkZXN0aW5hdGlvblxuICAgKiBAcGFyYW0gdmVsb2NpdHlcbiAgICogQHBhcmFtIGVycm9yTWFyZ2luXG4gICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgKi9cbiAgdmFyIHRoZXJlWWV0ID0gZnVuY3Rpb24gdGhlcmVZZXQocG9zaXRpb24sIGRlc3RpbmF0aW9uLCB2ZWxvY2l0eSkge1xuICAgIHZhciBlcnJvck1hcmdpbiA9XG4gICAgICBhcmd1bWVudHMubGVuZ3RoID4gMyAmJiBhcmd1bWVudHNbM10gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1szXSA6IDAuMDAxO1xuICAgIHJldHVybiAoXG4gICAgICBNYXRoLmFicyhwb3NpdGlvbiAtIGRlc3RpbmF0aW9uKSA8IGVycm9yTWFyZ2luICYmXG4gICAgICBNYXRoLmFicyh2ZWxvY2l0eSkgPCBlcnJvck1hcmdpblxuICAgICk7XG4gIH07XG5cbiAgLyoqXG4gICAqIFNwcmluZyBhbmltYXRpb25cbiAgICovXG4gIHZhciBzcHJpbmcgPVxuICAgIC8vIGRlZmF1bHQgb3B0aW9uc1xuICAgIGZ1bmN0aW9uIHNwcmluZygpIC8vIG1ldGhvZCBkZWZpbml0aW9uXG4gICAge1xuICAgICAgdmFyIF9yZWYgPVxuICAgICAgICAgIGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkXG4gICAgICAgICAgICA/IGFyZ3VtZW50c1swXVxuICAgICAgICAgICAgOiB7fSxcbiAgICAgICAgX3JlZiRzdGlmZm5lc3MgPSBfcmVmLnN0aWZmbmVzcyxcbiAgICAgICAgc3RpZmZuZXNzID0gX3JlZiRzdGlmZm5lc3MgPT09IHZvaWQgMCA/IDAuNSA6IF9yZWYkc3RpZmZuZXNzLFxuICAgICAgICBfcmVmJGRhbXBpbmcgPSBfcmVmLmRhbXBpbmcsXG4gICAgICAgIGRhbXBpbmcgPSBfcmVmJGRhbXBpbmcgPT09IHZvaWQgMCA/IDAuNzUgOiBfcmVmJGRhbXBpbmcsXG4gICAgICAgIF9yZWYkbWFzcyA9IF9yZWYubWFzcyxcbiAgICAgICAgbWFzcyA9IF9yZWYkbWFzcyA9PT0gdm9pZCAwID8gMTAgOiBfcmVmJG1hc3M7XG4gICAgICB2YXIgdGFyZ2V0ID0gbnVsbDtcbiAgICAgIHZhciBwb3NpdGlvbiA9IG51bGw7XG4gICAgICB2YXIgdmVsb2NpdHkgPSAwO1xuICAgICAgdmFyIHJlc3RpbmcgPSBmYWxzZTtcblxuICAgICAgLy8gdXBkYXRlcyBzcHJpbmcgc3RhdGVcbiAgICAgIHZhciBpbnRlcnBvbGF0ZSA9IGZ1bmN0aW9uIGludGVycG9sYXRlKCkge1xuICAgICAgICAvLyBpbiByZXN0LCBkb24ndCBhbmltYXRlXG4gICAgICAgIGlmIChyZXN0aW5nKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gbmVlZCBhdCBsZWFzdCBhIHRhcmdldCBvciBwb3NpdGlvbiB0byBkbyBzcHJpbmd5IHRoaW5nc1xuICAgICAgICBpZiAoIShpc051bWJlcih0YXJnZXQpICYmIGlzTnVtYmVyKHBvc2l0aW9uKSkpIHtcbiAgICAgICAgICByZXN0aW5nID0gdHJ1ZTtcbiAgICAgICAgICB2ZWxvY2l0eSA9IDA7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gY2FsY3VsYXRlIHNwcmluZyBmb3JjZVxuICAgICAgICB2YXIgZiA9IC0ocG9zaXRpb24gLSB0YXJnZXQpICogc3RpZmZuZXNzO1xuXG4gICAgICAgIC8vIHVwZGF0ZSB2ZWxvY2l0eSBieSBhZGRpbmcgZm9yY2UgYmFzZWQgb24gbWFzc1xuICAgICAgICB2ZWxvY2l0eSArPSBmIC8gbWFzcztcblxuICAgICAgICAvLyB1cGRhdGUgcG9zaXRpb24gYnkgYWRkaW5nIHZlbG9jaXR5XG4gICAgICAgIHBvc2l0aW9uICs9IHZlbG9jaXR5O1xuXG4gICAgICAgIC8vIHNsb3cgZG93biBiYXNlZCBvbiBhbW91bnQgb2YgZGFtcGluZ1xuICAgICAgICB2ZWxvY2l0eSAqPSBkYW1waW5nO1xuXG4gICAgICAgIC8vIHdlJ3ZlIGFycml2ZWQgaWYgd2UncmUgbmVhciB0YXJnZXQgYW5kIG91ciB2ZWxvY2l0eSBpcyBuZWFyIHplcm9cbiAgICAgICAgaWYgKHRoZXJlWWV0KHBvc2l0aW9uLCB0YXJnZXQsIHZlbG9jaXR5KSkge1xuICAgICAgICAgIHBvc2l0aW9uID0gdGFyZ2V0O1xuICAgICAgICAgIHZlbG9jaXR5ID0gMDtcbiAgICAgICAgICByZXN0aW5nID0gdHJ1ZTtcblxuICAgICAgICAgIC8vIHdlIGRvbmVcbiAgICAgICAgICBhcGkub251cGRhdGUocG9zaXRpb24pO1xuICAgICAgICAgIGFwaS5vbmNvbXBsZXRlKHBvc2l0aW9uKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBwcm9ncmVzcyB1cGRhdGVcbiAgICAgICAgICBhcGkub251cGRhdGUocG9zaXRpb24pO1xuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICAvKipcbiAgICAgICAqIFNldCBuZXcgdGFyZ2V0IHZhbHVlXG4gICAgICAgKiBAcGFyYW0gdmFsdWVcbiAgICAgICAqL1xuICAgICAgdmFyIHNldFRhcmdldCA9IGZ1bmN0aW9uIHNldFRhcmdldCh2YWx1ZSkge1xuICAgICAgICAvLyBpZiBjdXJyZW50bHkgaGFzIG5vIHBvc2l0aW9uLCBzZXQgdGFyZ2V0IGFuZCBwb3NpdGlvbiB0byB0aGlzIHZhbHVlXG4gICAgICAgIGlmIChpc051bWJlcih2YWx1ZSkgJiYgIWlzTnVtYmVyKHBvc2l0aW9uKSkge1xuICAgICAgICAgIHBvc2l0aW9uID0gdmFsdWU7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBuZXh0IHRhcmdldCB2YWx1ZSB3aWxsIG5vdCBiZSBhbmltYXRlZCB0b1xuICAgICAgICBpZiAodGFyZ2V0ID09PSBudWxsKSB7XG4gICAgICAgICAgdGFyZ2V0ID0gdmFsdWU7XG4gICAgICAgICAgcG9zaXRpb24gPSB2YWx1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGxldCBzdGFydCBtb3ZpbmcgdG8gdGFyZ2V0XG4gICAgICAgIHRhcmdldCA9IHZhbHVlO1xuXG4gICAgICAgIC8vIGFscmVhZHkgYXQgdGFyZ2V0XG4gICAgICAgIGlmIChwb3NpdGlvbiA9PT0gdGFyZ2V0IHx8IHR5cGVvZiB0YXJnZXQgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgLy8gbm93IHJlc3RpbmcgYXMgdGFyZ2V0IGlzIGN1cnJlbnQgcG9zaXRpb24sIHN0b3AgbW92aW5nXG4gICAgICAgICAgcmVzdGluZyA9IHRydWU7XG4gICAgICAgICAgdmVsb2NpdHkgPSAwO1xuXG4gICAgICAgICAgLy8gZG9uZSFcbiAgICAgICAgICBhcGkub251cGRhdGUocG9zaXRpb24pO1xuICAgICAgICAgIGFwaS5vbmNvbXBsZXRlKHBvc2l0aW9uKTtcblxuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHJlc3RpbmcgPSBmYWxzZTtcbiAgICAgIH07XG5cbiAgICAgIC8vIG5lZWQgJ2FwaScgdG8gY2FsbCBvbnVwZGF0ZSBjYWxsYmFja1xuICAgICAgdmFyIGFwaSA9IGNyZWF0ZU9iamVjdCh7XG4gICAgICAgIGludGVycG9sYXRlOiBpbnRlcnBvbGF0ZSxcbiAgICAgICAgdGFyZ2V0OiB7XG4gICAgICAgICAgc2V0OiBzZXRUYXJnZXQsXG4gICAgICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGFyZ2V0O1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICByZXN0aW5nOiB7XG4gICAgICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVzdGluZztcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgb251cGRhdGU6IGZ1bmN0aW9uIG9udXBkYXRlKHZhbHVlKSB7fSxcbiAgICAgICAgb25jb21wbGV0ZTogZnVuY3Rpb24gb25jb21wbGV0ZSh2YWx1ZSkge31cbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm4gYXBpO1xuICAgIH07XG5cbiAgdmFyIGVhc2VMaW5lYXIgPSBmdW5jdGlvbiBlYXNlTGluZWFyKHQpIHtcbiAgICByZXR1cm4gdDtcbiAgfTtcbiAgdmFyIGVhc2VJbk91dFF1YWQgPSBmdW5jdGlvbiBlYXNlSW5PdXRRdWFkKHQpIHtcbiAgICByZXR1cm4gdCA8IDAuNSA/IDIgKiB0ICogdCA6IC0xICsgKDQgLSAyICogdCkgKiB0O1xuICB9O1xuXG4gIHZhciB0d2VlbiA9XG4gICAgLy8gZGVmYXVsdCB2YWx1ZXNcbiAgICBmdW5jdGlvbiB0d2VlbigpIC8vIG1ldGhvZCBkZWZpbml0aW9uXG4gICAge1xuICAgICAgdmFyIF9yZWYgPVxuICAgICAgICAgIGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkXG4gICAgICAgICAgICA/IGFyZ3VtZW50c1swXVxuICAgICAgICAgICAgOiB7fSxcbiAgICAgICAgX3JlZiRkdXJhdGlvbiA9IF9yZWYuZHVyYXRpb24sXG4gICAgICAgIGR1cmF0aW9uID0gX3JlZiRkdXJhdGlvbiA9PT0gdm9pZCAwID8gNTAwIDogX3JlZiRkdXJhdGlvbixcbiAgICAgICAgX3JlZiRlYXNpbmcgPSBfcmVmLmVhc2luZyxcbiAgICAgICAgZWFzaW5nID0gX3JlZiRlYXNpbmcgPT09IHZvaWQgMCA/IGVhc2VJbk91dFF1YWQgOiBfcmVmJGVhc2luZyxcbiAgICAgICAgX3JlZiRkZWxheSA9IF9yZWYuZGVsYXksXG4gICAgICAgIGRlbGF5ID0gX3JlZiRkZWxheSA9PT0gdm9pZCAwID8gMCA6IF9yZWYkZGVsYXk7XG4gICAgICB2YXIgc3RhcnQgPSBudWxsO1xuICAgICAgdmFyIHQ7XG4gICAgICB2YXIgcDtcbiAgICAgIHZhciByZXN0aW5nID0gdHJ1ZTtcbiAgICAgIHZhciByZXZlcnNlID0gZmFsc2U7XG4gICAgICB2YXIgdGFyZ2V0ID0gbnVsbDtcblxuICAgICAgdmFyIGludGVycG9sYXRlID0gZnVuY3Rpb24gaW50ZXJwb2xhdGUodHMpIHtcbiAgICAgICAgaWYgKHJlc3RpbmcgfHwgdGFyZ2V0ID09PSBudWxsKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHN0YXJ0ID09PSBudWxsKSB7XG4gICAgICAgICAgc3RhcnQgPSB0cztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0cyAtIHN0YXJ0IDwgZGVsYXkpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0ID0gdHMgLSBzdGFydCAtIGRlbGF5O1xuXG4gICAgICAgIGlmICh0IDwgZHVyYXRpb24pIHtcbiAgICAgICAgICBwID0gdCAvIGR1cmF0aW9uO1xuICAgICAgICAgIGFwaS5vbnVwZGF0ZSgodCA+PSAwID8gZWFzaW5nKHJldmVyc2UgPyAxIC0gcCA6IHApIDogMCkgKiB0YXJnZXQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHQgPSAxO1xuICAgICAgICAgIHAgPSByZXZlcnNlID8gMCA6IDE7XG4gICAgICAgICAgYXBpLm9udXBkYXRlKHAgKiB0YXJnZXQpO1xuICAgICAgICAgIGFwaS5vbmNvbXBsZXRlKHAgKiB0YXJnZXQpO1xuICAgICAgICAgIHJlc3RpbmcgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICAvLyBuZWVkICdhcGknIHRvIGNhbGwgb251cGRhdGUgY2FsbGJhY2tcbiAgICAgIHZhciBhcGkgPSBjcmVhdGVPYmplY3Qoe1xuICAgICAgICBpbnRlcnBvbGF0ZTogaW50ZXJwb2xhdGUsXG4gICAgICAgIHRhcmdldDoge1xuICAgICAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICAgICAgcmV0dXJuIHJldmVyc2UgPyAwIDogdGFyZ2V0O1xuICAgICAgICAgIH0sXG4gICAgICAgICAgc2V0OiBmdW5jdGlvbiBzZXQodmFsdWUpIHtcbiAgICAgICAgICAgIC8vIGlzIGluaXRpYWwgdmFsdWVcbiAgICAgICAgICAgIGlmICh0YXJnZXQgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgdGFyZ2V0ID0gdmFsdWU7XG4gICAgICAgICAgICAgIGFwaS5vbnVwZGF0ZSh2YWx1ZSk7XG4gICAgICAgICAgICAgIGFwaS5vbmNvbXBsZXRlKHZhbHVlKTtcbiAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyB3YW50IHRvIHR3ZWVuIHRvIGEgc21hbGxlciB2YWx1ZSBhbmQgaGF2ZSBhIGN1cnJlbnQgdmFsdWVcbiAgICAgICAgICAgIGlmICh2YWx1ZSA8IHRhcmdldCkge1xuICAgICAgICAgICAgICB0YXJnZXQgPSAxO1xuICAgICAgICAgICAgICByZXZlcnNlID0gdHJ1ZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIC8vIG5vdCB0d2VlbmluZyB0byBhIHNtYWxsZXIgdmFsdWVcbiAgICAgICAgICAgICAgcmV2ZXJzZSA9IGZhbHNlO1xuICAgICAgICAgICAgICB0YXJnZXQgPSB2YWx1ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gbGV0J3MgZ28hXG4gICAgICAgICAgICByZXN0aW5nID0gZmFsc2U7XG4gICAgICAgICAgICBzdGFydCA9IG51bGw7XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIHJlc3Rpbmc6IHtcbiAgICAgICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgICAgIHJldHVybiByZXN0aW5nO1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICBvbnVwZGF0ZTogZnVuY3Rpb24gb251cGRhdGUodmFsdWUpIHt9LFxuICAgICAgICBvbmNvbXBsZXRlOiBmdW5jdGlvbiBvbmNvbXBsZXRlKHZhbHVlKSB7fVxuICAgICAgfSk7XG5cbiAgICAgIHJldHVybiBhcGk7XG4gICAgfTtcblxuICB2YXIgYW5pbWF0b3IgPSB7XG4gICAgc3ByaW5nOiBzcHJpbmcsXG4gICAgdHdlZW46IHR3ZWVuXG4gIH07XG5cbiAgLypcbiAgICAgICAgICAgICAgICAgICAgICAgeyB0eXBlOiAnc3ByaW5nJywgc3RpZmZuZXNzOiAuNSwgZGFtcGluZzogLjc1LCBtYXNzOiAxMCB9O1xuICAgICAgICAgICAgICAgICAgICAgICB7IHRyYW5zbGF0aW9uOiB7IHR5cGU6ICdzcHJpbmcnLCAuLi4gfSwgLi4uIH1cbiAgICAgICAgICAgICAgICAgICAgICAgeyB0cmFuc2xhdGlvbjogeyB4OiB7IHR5cGU6ICdzcHJpbmcnLCAuLi4gfSB9IH1cbiAgICAgICAgICAgICAgICAgICAgICAqL1xuICB2YXIgY3JlYXRlQW5pbWF0b3IgPSBmdW5jdGlvbiBjcmVhdGVBbmltYXRvcihkZWZpbml0aW9uLCBjYXRlZ29yeSwgcHJvcGVydHkpIHtcbiAgICAvLyBkZWZhdWx0IGlzIHNpbmdsZSBkZWZpbml0aW9uXG4gICAgLy8gd2UgY2hlY2sgaWYgdHJhbnNmb3JtIGlzIHNldCwgaWYgc28sIHdlIGNoZWNrIGlmIHByb3BlcnR5IGlzIHNldFxuICAgIHZhciBkZWYgPVxuICAgICAgZGVmaW5pdGlvbltjYXRlZ29yeV0gJiYgdHlwZW9mIGRlZmluaXRpb25bY2F0ZWdvcnldW3Byb3BlcnR5XSA9PT0gJ29iamVjdCdcbiAgICAgICAgPyBkZWZpbml0aW9uW2NhdGVnb3J5XVtwcm9wZXJ0eV1cbiAgICAgICAgOiBkZWZpbml0aW9uW2NhdGVnb3J5XSB8fCBkZWZpbml0aW9uO1xuXG4gICAgdmFyIHR5cGUgPSB0eXBlb2YgZGVmID09PSAnc3RyaW5nJyA/IGRlZiA6IGRlZi50eXBlO1xuICAgIHZhciBwcm9wcyA9IHR5cGVvZiBkZWYgPT09ICdvYmplY3QnID8gT2JqZWN0LmFzc2lnbih7fSwgZGVmKSA6IHt9O1xuXG4gICAgcmV0dXJuIGFuaW1hdG9yW3R5cGVdID8gYW5pbWF0b3JbdHlwZV0ocHJvcHMpIDogbnVsbDtcbiAgfTtcblxuICB2YXIgYWRkR2V0U2V0ID0gZnVuY3Rpb24gYWRkR2V0U2V0KGtleXMsIG9iaiwgcHJvcHMpIHtcbiAgICB2YXIgb3ZlcndyaXRlID1cbiAgICAgIGFyZ3VtZW50cy5sZW5ndGggPiAzICYmIGFyZ3VtZW50c1szXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzNdIDogZmFsc2U7XG4gICAgb2JqID0gQXJyYXkuaXNBcnJheShvYmopID8gb2JqIDogW29ial07XG4gICAgb2JqLmZvckVhY2goZnVuY3Rpb24obykge1xuICAgICAga2V5cy5mb3JFYWNoKGZ1bmN0aW9uKGtleSkge1xuICAgICAgICB2YXIgbmFtZSA9IGtleTtcbiAgICAgICAgdmFyIGdldHRlciA9IGZ1bmN0aW9uIGdldHRlcigpIHtcbiAgICAgICAgICByZXR1cm4gcHJvcHNba2V5XTtcbiAgICAgICAgfTtcbiAgICAgICAgdmFyIHNldHRlciA9IGZ1bmN0aW9uIHNldHRlcih2YWx1ZSkge1xuICAgICAgICAgIHJldHVybiAocHJvcHNba2V5XSA9IHZhbHVlKTtcbiAgICAgICAgfTtcblxuICAgICAgICBpZiAodHlwZW9mIGtleSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICBuYW1lID0ga2V5LmtleTtcbiAgICAgICAgICBnZXR0ZXIgPSBrZXkuZ2V0dGVyIHx8IGdldHRlcjtcbiAgICAgICAgICBzZXR0ZXIgPSBrZXkuc2V0dGVyIHx8IHNldHRlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChvW25hbWVdICYmICFvdmVyd3JpdGUpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBvW25hbWVdID0ge1xuICAgICAgICAgIGdldDogZ2V0dGVyLFxuICAgICAgICAgIHNldDogc2V0dGVyXG4gICAgICAgIH07XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfTtcblxuICB2YXIgaXNEZWZpbmVkID0gZnVuY3Rpb24gaXNEZWZpbmVkKHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlICE9IG51bGw7XG4gIH07XG5cbiAgLy8gYWRkIHRvIHN0YXRlLFxuICAvLyBhZGQgZ2V0dGVycyBhbmQgc2V0dGVycyB0byBpbnRlcm5hbCBhbmQgZXh0ZXJuYWwgYXBpIChpZiBub3Qgc2V0KVxuICAvLyBzZXR1cCBhbmltYXRvcnNcblxuICB2YXIgYW5pbWF0aW9ucyA9IGZ1bmN0aW9uIGFuaW1hdGlvbnMoX3JlZikge1xuICAgIHZhciBtaXhpbkNvbmZpZyA9IF9yZWYubWl4aW5Db25maWcsXG4gICAgICB2aWV3UHJvcHMgPSBfcmVmLnZpZXdQcm9wcyxcbiAgICAgIHZpZXdJbnRlcm5hbEFQSSA9IF9yZWYudmlld0ludGVybmFsQVBJLFxuICAgICAgdmlld0V4dGVybmFsQVBJID0gX3JlZi52aWV3RXh0ZXJuYWxBUEksXG4gICAgICB2aWV3U3RhdGUgPSBfcmVmLnZpZXdTdGF0ZTtcbiAgICAvLyBpbml0aWFsIHByb3BlcnRpZXNcbiAgICB2YXIgaW5pdGlhbFByb3BzID0gT2JqZWN0LmFzc2lnbih7fSwgdmlld1Byb3BzKTtcblxuICAgIC8vIGxpc3Qgb2YgYWxsIGFjdGl2ZSBhbmltYXRpb25zXG4gICAgdmFyIGFuaW1hdGlvbnMgPSBbXTtcblxuICAgIC8vIHNldHVwIGFuaW1hdG9yc1xuICAgIGZvcmluKG1peGluQ29uZmlnLCBmdW5jdGlvbihwcm9wZXJ0eSwgYW5pbWF0aW9uKSB7XG4gICAgICB2YXIgYW5pbWF0b3IgPSBjcmVhdGVBbmltYXRvcihhbmltYXRpb24pO1xuICAgICAgaWYgKCFhbmltYXRvcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8vIHdoZW4gdGhlIGFuaW1hdG9yIHVwZGF0ZXMsIHVwZGF0ZSB0aGUgdmlldyBzdGF0ZSB2YWx1ZVxuICAgICAgYW5pbWF0b3Iub251cGRhdGUgPSBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICB2aWV3UHJvcHNbcHJvcGVydHldID0gdmFsdWU7XG4gICAgICB9O1xuXG4gICAgICAvLyBzZXQgYW5pbWF0b3IgdGFyZ2V0XG4gICAgICBhbmltYXRvci50YXJnZXQgPSBpbml0aWFsUHJvcHNbcHJvcGVydHldO1xuXG4gICAgICAvLyB3aGVuIHZhbHVlIGlzIHNldCwgc2V0IHRoZSBhbmltYXRvciB0YXJnZXQgdmFsdWVcbiAgICAgIHZhciBwcm9wID0ge1xuICAgICAgICBrZXk6IHByb3BlcnR5LFxuICAgICAgICBzZXR0ZXI6IGZ1bmN0aW9uIHNldHRlcih2YWx1ZSkge1xuICAgICAgICAgIC8vIGlmIGFscmVhZHkgYXQgdGFyZ2V0LCB3ZSBkb25lIVxuICAgICAgICAgIGlmIChhbmltYXRvci50YXJnZXQgPT09IHZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgYW5pbWF0b3IudGFyZ2V0ID0gdmFsdWU7XG4gICAgICAgIH0sXG4gICAgICAgIGdldHRlcjogZnVuY3Rpb24gZ2V0dGVyKCkge1xuICAgICAgICAgIHJldHVybiB2aWV3UHJvcHNbcHJvcGVydHldO1xuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICAvLyBhZGQgZ2V0dGVycyBhbmQgc2V0dGVyc1xuICAgICAgYWRkR2V0U2V0KFtwcm9wXSwgW3ZpZXdJbnRlcm5hbEFQSSwgdmlld0V4dGVybmFsQVBJXSwgdmlld1Byb3BzLCB0cnVlKTtcblxuICAgICAgLy8gYWRkIGl0IHRvIHRoZSBsaXN0IGZvciBlYXN5IHVwZGF0aW5nIGZyb20gdGhlIF93cml0ZSBtZXRob2RcbiAgICAgIGFuaW1hdGlvbnMucHVzaChhbmltYXRvcik7XG4gICAgfSk7XG5cbiAgICAvLyBleHBvc2UgaW50ZXJuYWwgd3JpdGUgYXBpXG4gICAgcmV0dXJuIHtcbiAgICAgIHdyaXRlOiBmdW5jdGlvbiB3cml0ZSh0cykge1xuICAgICAgICB2YXIgcmVzdGluZyA9IHRydWU7XG4gICAgICAgIGFuaW1hdGlvbnMuZm9yRWFjaChmdW5jdGlvbihhbmltYXRpb24pIHtcbiAgICAgICAgICBpZiAoIWFuaW1hdGlvbi5yZXN0aW5nKSB7XG4gICAgICAgICAgICByZXN0aW5nID0gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICAgIGFuaW1hdGlvbi5pbnRlcnBvbGF0ZSh0cyk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gcmVzdGluZztcbiAgICAgIH0sXG4gICAgICBkZXN0cm95OiBmdW5jdGlvbiBkZXN0cm95KCkge31cbiAgICB9O1xuICB9O1xuXG4gIHZhciBhZGRFdmVudCA9IGZ1bmN0aW9uIGFkZEV2ZW50KGVsZW1lbnQpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24odHlwZSwgZm4pIHtcbiAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcih0eXBlLCBmbik7XG4gICAgfTtcbiAgfTtcblxuICB2YXIgcmVtb3ZlRXZlbnQgPSBmdW5jdGlvbiByZW1vdmVFdmVudChlbGVtZW50KSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKHR5cGUsIGZuKSB7XG4gICAgICBlbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIodHlwZSwgZm4pO1xuICAgIH07XG4gIH07XG5cbiAgLy8gbWl4aW5cbiAgdmFyIGxpc3RlbmVycyA9IGZ1bmN0aW9uIGxpc3RlbmVycyhfcmVmKSB7XG4gICAgdmFyIG1peGluQ29uZmlnID0gX3JlZi5taXhpbkNvbmZpZyxcbiAgICAgIHZpZXdQcm9wcyA9IF9yZWYudmlld1Byb3BzLFxuICAgICAgdmlld0ludGVybmFsQVBJID0gX3JlZi52aWV3SW50ZXJuYWxBUEksXG4gICAgICB2aWV3RXh0ZXJuYWxBUEkgPSBfcmVmLnZpZXdFeHRlcm5hbEFQSSxcbiAgICAgIHZpZXdTdGF0ZSA9IF9yZWYudmlld1N0YXRlLFxuICAgICAgdmlldyA9IF9yZWYudmlldztcbiAgICB2YXIgZXZlbnRzID0gW107XG5cbiAgICB2YXIgYWRkID0gYWRkRXZlbnQodmlldy5lbGVtZW50KTtcbiAgICB2YXIgcmVtb3ZlID0gcmVtb3ZlRXZlbnQodmlldy5lbGVtZW50KTtcblxuICAgIHZpZXdFeHRlcm5hbEFQSS5vbiA9IGZ1bmN0aW9uKHR5cGUsIGZuKSB7XG4gICAgICBldmVudHMucHVzaCh7XG4gICAgICAgIHR5cGU6IHR5cGUsXG4gICAgICAgIGZuOiBmblxuICAgICAgfSk7XG5cbiAgICAgIGFkZCh0eXBlLCBmbik7XG4gICAgfTtcblxuICAgIHZpZXdFeHRlcm5hbEFQSS5vZmYgPSBmdW5jdGlvbih0eXBlLCBmbikge1xuICAgICAgZXZlbnRzLnNwbGljZShcbiAgICAgICAgZXZlbnRzLmZpbmRJbmRleChmdW5jdGlvbihldmVudCkge1xuICAgICAgICAgIHJldHVybiBldmVudC50eXBlID09PSB0eXBlICYmIGV2ZW50LmZuID09PSBmbjtcbiAgICAgICAgfSksXG4gICAgICAgIDFcbiAgICAgICk7XG5cbiAgICAgIHJlbW92ZSh0eXBlLCBmbik7XG4gICAgfTtcblxuICAgIHJldHVybiB7XG4gICAgICB3cml0ZTogZnVuY3Rpb24gd3JpdGUoKSB7XG4gICAgICAgIC8vIG5vdCBidXN5XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfSxcbiAgICAgIGRlc3Ryb3k6IGZ1bmN0aW9uIGRlc3Ryb3koKSB7XG4gICAgICAgIGV2ZW50cy5mb3JFYWNoKGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgICAgcmVtb3ZlKGV2ZW50LnR5cGUsIGV2ZW50LmZuKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfTtcbiAgfTtcblxuICAvLyBhZGQgdG8gZXh0ZXJuYWwgYXBpIGFuZCBsaW5rIHRvIHByb3BzXG5cbiAgdmFyIGFwaXMgPSBmdW5jdGlvbiBhcGlzKF9yZWYpIHtcbiAgICB2YXIgbWl4aW5Db25maWcgPSBfcmVmLm1peGluQ29uZmlnLFxuICAgICAgdmlld1Byb3BzID0gX3JlZi52aWV3UHJvcHMsXG4gICAgICB2aWV3RXh0ZXJuYWxBUEkgPSBfcmVmLnZpZXdFeHRlcm5hbEFQSTtcbiAgICBhZGRHZXRTZXQobWl4aW5Db25maWcsIHZpZXdFeHRlcm5hbEFQSSwgdmlld1Byb3BzKTtcbiAgfTtcblxuICAvLyBhZGQgdG8gc3RhdGUsXG4gIC8vIGFkZCBnZXR0ZXJzIGFuZCBzZXR0ZXJzIHRvIGludGVybmFsIGFuZCBleHRlcm5hbCBhcGkgKGlmIG5vdCBzZXQpXG4gIC8vIHNldCBpbml0aWFsIHN0YXRlIGJhc2VkIG9uIHByb3BzIGluIHZpZXdQcm9wc1xuICAvLyBhcHBseSBhcyB0cmFuc2Zvcm1zIGVhY2ggZnJhbWVcblxuICB2YXIgZGVmYXVsdHMgPSB7XG4gICAgb3BhY2l0eTogMSxcbiAgICBzY2FsZVg6IDEsXG4gICAgc2NhbGVZOiAxLFxuICAgIHRyYW5zbGF0ZVg6IDAsXG4gICAgdHJhbnNsYXRlWTogMCxcbiAgICByb3RhdGVYOiAwLFxuICAgIHJvdGF0ZVk6IDAsXG4gICAgcm90YXRlWjogMCxcbiAgICBvcmlnaW5YOiAwLFxuICAgIG9yaWdpblk6IDBcbiAgfTtcblxuICB2YXIgc3R5bGVzID0gZnVuY3Rpb24gc3R5bGVzKF9yZWYpIHtcbiAgICB2YXIgbWl4aW5Db25maWcgPSBfcmVmLm1peGluQ29uZmlnLFxuICAgICAgdmlld1Byb3BzID0gX3JlZi52aWV3UHJvcHMsXG4gICAgICB2aWV3SW50ZXJuYWxBUEkgPSBfcmVmLnZpZXdJbnRlcm5hbEFQSSxcbiAgICAgIHZpZXdFeHRlcm5hbEFQSSA9IF9yZWYudmlld0V4dGVybmFsQVBJLFxuICAgICAgdmlldyA9IF9yZWYudmlldztcbiAgICAvLyBpbml0aWFsIHByb3BzXG4gICAgdmFyIGluaXRpYWxQcm9wcyA9IE9iamVjdC5hc3NpZ24oe30sIHZpZXdQcm9wcyk7XG5cbiAgICAvLyBjdXJyZW50IHByb3BzXG4gICAgdmFyIGN1cnJlbnRQcm9wcyA9IHt9O1xuXG4gICAgLy8gd2Ugd2lsbCBhZGQgdGhvc2UgcHJvcGVydGllcyB0byB0aGUgZXh0ZXJuYWwgQVBJIGFuZCBsaW5rIHRoZW0gdG8gdGhlIHZpZXdTdGF0ZVxuICAgIGFkZEdldFNldChtaXhpbkNvbmZpZywgW3ZpZXdJbnRlcm5hbEFQSSwgdmlld0V4dGVybmFsQVBJXSwgdmlld1Byb3BzKTtcblxuICAgIC8vIG92ZXJyaWRlIHJlY3Qgb24gaW50ZXJuYWwgYW5kIGV4dGVybmFsIHJlY3QgZ2V0dGVyIHNvIGl0IHRha2VzIGluIGFjY291bnQgdHJhbnNmb3Jtc1xuICAgIHZhciBnZXRPZmZzZXQgPSBmdW5jdGlvbiBnZXRPZmZzZXQoKSB7XG4gICAgICByZXR1cm4gW3ZpZXdQcm9wc1sndHJhbnNsYXRlWCddIHx8IDAsIHZpZXdQcm9wc1sndHJhbnNsYXRlWSddIHx8IDBdO1xuICAgIH07XG5cbiAgICB2YXIgZ2V0U2NhbGUgPSBmdW5jdGlvbiBnZXRTY2FsZSgpIHtcbiAgICAgIHJldHVybiBbdmlld1Byb3BzWydzY2FsZVgnXSB8fCAwLCB2aWV3UHJvcHNbJ3NjYWxlWSddIHx8IDBdO1xuICAgIH07XG4gICAgdmFyIGdldFJlY3QgPSBmdW5jdGlvbiBnZXRSZWN0KCkge1xuICAgICAgcmV0dXJuIHZpZXcucmVjdFxuICAgICAgICA/IGdldFZpZXdSZWN0KHZpZXcucmVjdCwgdmlldy5jaGlsZFZpZXdzLCBnZXRPZmZzZXQoKSwgZ2V0U2NhbGUoKSlcbiAgICAgICAgOiBudWxsO1xuICAgIH07XG4gICAgdmlld0ludGVybmFsQVBJLnJlY3QgPSB7IGdldDogZ2V0UmVjdCB9O1xuICAgIHZpZXdFeHRlcm5hbEFQSS5yZWN0ID0geyBnZXQ6IGdldFJlY3QgfTtcblxuICAgIC8vIGFwcGx5IHZpZXcgcHJvcHNcbiAgICBtaXhpbkNvbmZpZy5mb3JFYWNoKGZ1bmN0aW9uKGtleSkge1xuICAgICAgdmlld1Byb3BzW2tleV0gPVxuICAgICAgICB0eXBlb2YgaW5pdGlhbFByb3BzW2tleV0gPT09ICd1bmRlZmluZWQnXG4gICAgICAgICAgPyBkZWZhdWx0c1trZXldXG4gICAgICAgICAgOiBpbml0aWFsUHJvcHNba2V5XTtcbiAgICB9KTtcblxuICAgIC8vIGV4cG9zZSBhcGlcbiAgICByZXR1cm4ge1xuICAgICAgd3JpdGU6IGZ1bmN0aW9uIHdyaXRlKCkge1xuICAgICAgICAvLyBzZWUgaWYgcHJvcHMgaGF2ZSBjaGFuZ2VkXG4gICAgICAgIGlmICghcHJvcHNIYXZlQ2hhbmdlZChjdXJyZW50UHJvcHMsIHZpZXdQcm9wcykpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyBtb3ZlcyBlbGVtZW50IHRvIGNvcnJlY3QgcG9zaXRpb24gb24gc2NyZWVuXG4gICAgICAgIGFwcGx5U3R5bGVzKHZpZXcuZWxlbWVudCwgdmlld1Byb3BzKTtcblxuICAgICAgICAvLyBzdG9yZSBuZXcgdHJhbnNmb3Jtc1xuICAgICAgICBPYmplY3QuYXNzaWduKGN1cnJlbnRQcm9wcywgT2JqZWN0LmFzc2lnbih7fSwgdmlld1Byb3BzKSk7XG5cbiAgICAgICAgLy8gbm8gbG9uZ2VyIGJ1c3lcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9LFxuICAgICAgZGVzdHJveTogZnVuY3Rpb24gZGVzdHJveSgpIHt9XG4gICAgfTtcbiAgfTtcblxuICB2YXIgcHJvcHNIYXZlQ2hhbmdlZCA9IGZ1bmN0aW9uIHByb3BzSGF2ZUNoYW5nZWQoY3VycmVudFByb3BzLCBuZXdQcm9wcykge1xuICAgIC8vIGRpZmZlcmVudCBhbW91bnQgb2Yga2V5c1xuICAgIGlmIChPYmplY3Qua2V5cyhjdXJyZW50UHJvcHMpLmxlbmd0aCAhPT0gT2JqZWN0LmtleXMobmV3UHJvcHMpLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgLy8gbGV0cyBhbmFseXplIHRoZSBpbmRpdmlkdWFsIHByb3BzXG4gICAgZm9yICh2YXIgcHJvcCBpbiBuZXdQcm9wcykge1xuICAgICAgaWYgKG5ld1Byb3BzW3Byb3BdICE9PSBjdXJyZW50UHJvcHNbcHJvcF0pIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9O1xuXG4gIHZhciBhcHBseVN0eWxlcyA9IGZ1bmN0aW9uIGFwcGx5U3R5bGVzKGVsZW1lbnQsIF9yZWYyKSB7XG4gICAgdmFyIG9wYWNpdHkgPSBfcmVmMi5vcGFjaXR5LFxuICAgICAgcGVyc3BlY3RpdmUgPSBfcmVmMi5wZXJzcGVjdGl2ZSxcbiAgICAgIHRyYW5zbGF0ZVggPSBfcmVmMi50cmFuc2xhdGVYLFxuICAgICAgdHJhbnNsYXRlWSA9IF9yZWYyLnRyYW5zbGF0ZVksXG4gICAgICBzY2FsZVggPSBfcmVmMi5zY2FsZVgsXG4gICAgICBzY2FsZVkgPSBfcmVmMi5zY2FsZVksXG4gICAgICByb3RhdGVYID0gX3JlZjIucm90YXRlWCxcbiAgICAgIHJvdGF0ZVkgPSBfcmVmMi5yb3RhdGVZLFxuICAgICAgcm90YXRlWiA9IF9yZWYyLnJvdGF0ZVosXG4gICAgICBvcmlnaW5YID0gX3JlZjIub3JpZ2luWCxcbiAgICAgIG9yaWdpblkgPSBfcmVmMi5vcmlnaW5ZLFxuICAgICAgd2lkdGggPSBfcmVmMi53aWR0aCxcbiAgICAgIGhlaWdodCA9IF9yZWYyLmhlaWdodDtcblxuICAgIHZhciB0cmFuc2Zvcm1zID0gJyc7XG4gICAgdmFyIHN0eWxlcyA9ICcnO1xuXG4gICAgLy8gaGFuZGxlIHRyYW5zZm9ybSBvcmlnaW5cbiAgICBpZiAoaXNEZWZpbmVkKG9yaWdpblgpIHx8IGlzRGVmaW5lZChvcmlnaW5ZKSkge1xuICAgICAgc3R5bGVzICs9XG4gICAgICAgICd0cmFuc2Zvcm0tb3JpZ2luOiAnICsgKG9yaWdpblggfHwgMCkgKyAncHggJyArIChvcmlnaW5ZIHx8IDApICsgJ3B4Oyc7XG4gICAgfVxuXG4gICAgLy8gdHJhbnNmb3JtIG9yZGVyIGlzIHJlbGV2YW50XG4gICAgLy8gMC4gcGVyc3BlY3RpdmVcbiAgICBpZiAoaXNEZWZpbmVkKHBlcnNwZWN0aXZlKSkge1xuICAgICAgdHJhbnNmb3JtcyArPSAncGVyc3BlY3RpdmUoJyArIHBlcnNwZWN0aXZlICsgJ3B4KSAnO1xuICAgIH1cblxuICAgIC8vIDEuIHRyYW5zbGF0ZVxuICAgIGlmIChpc0RlZmluZWQodHJhbnNsYXRlWCkgfHwgaXNEZWZpbmVkKHRyYW5zbGF0ZVkpKSB7XG4gICAgICB0cmFuc2Zvcm1zICs9XG4gICAgICAgICd0cmFuc2xhdGUzZCgnICtcbiAgICAgICAgKHRyYW5zbGF0ZVggfHwgMCkgK1xuICAgICAgICAncHgsICcgK1xuICAgICAgICAodHJhbnNsYXRlWSB8fCAwKSArXG4gICAgICAgICdweCwgMCkgJztcbiAgICB9XG5cbiAgICAvLyAyLiBzY2FsZVxuICAgIGlmIChpc0RlZmluZWQoc2NhbGVYKSB8fCBpc0RlZmluZWQoc2NhbGVZKSkge1xuICAgICAgdHJhbnNmb3JtcyArPVxuICAgICAgICAnc2NhbGUzZCgnICtcbiAgICAgICAgKGlzRGVmaW5lZChzY2FsZVgpID8gc2NhbGVYIDogMSkgK1xuICAgICAgICAnLCAnICtcbiAgICAgICAgKGlzRGVmaW5lZChzY2FsZVkpID8gc2NhbGVZIDogMSkgK1xuICAgICAgICAnLCAxKSAnO1xuICAgIH1cblxuICAgIC8vIDMuIHJvdGF0ZVxuICAgIGlmIChpc0RlZmluZWQocm90YXRlWikpIHtcbiAgICAgIHRyYW5zZm9ybXMgKz0gJ3JvdGF0ZVooJyArIHJvdGF0ZVogKyAncmFkKSAnO1xuICAgIH1cblxuICAgIGlmIChpc0RlZmluZWQocm90YXRlWCkpIHtcbiAgICAgIHRyYW5zZm9ybXMgKz0gJ3JvdGF0ZVgoJyArIHJvdGF0ZVggKyAncmFkKSAnO1xuICAgIH1cblxuICAgIGlmIChpc0RlZmluZWQocm90YXRlWSkpIHtcbiAgICAgIHRyYW5zZm9ybXMgKz0gJ3JvdGF0ZVkoJyArIHJvdGF0ZVkgKyAncmFkKSAnO1xuICAgIH1cblxuICAgIC8vIGFkZCB0cmFuc2Zvcm1zXG4gICAgaWYgKHRyYW5zZm9ybXMubGVuZ3RoKSB7XG4gICAgICBzdHlsZXMgKz0gJ3RyYW5zZm9ybTonICsgdHJhbnNmb3JtcyArICc7JztcbiAgICB9XG5cbiAgICAvLyBhZGQgb3BhY2l0eVxuICAgIGlmIChpc0RlZmluZWQob3BhY2l0eSkpIHtcbiAgICAgIHN0eWxlcyArPSAnb3BhY2l0eTonICsgb3BhY2l0eSArICc7JztcblxuICAgICAgLy8gaWYgd2UgcmVhY2ggemVybywgd2UgbWFrZSB0aGUgZWxlbWVudCBpbmFjY2Vzc2libGVcbiAgICAgIGlmIChvcGFjaXR5ID09PSAwKSB7XG4gICAgICAgIHN0eWxlcyArPSAndmlzaWJpbGl0eTpoaWRkZW47JztcbiAgICAgIH1cblxuICAgICAgLy8gaWYgd2UncmUgYmVsb3cgMTAwJSBvcGFjaXR5IHRoaXMgZWxlbWVudCBjYW4ndCBiZSBjbGlja2VkXG4gICAgICBpZiAob3BhY2l0eSA8IDEpIHtcbiAgICAgICAgc3R5bGVzICs9ICdwb2ludGVyLWV2ZW50czpub25lOyc7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gYWRkIGhlaWdodFxuICAgIGlmIChpc0RlZmluZWQoaGVpZ2h0KSkge1xuICAgICAgc3R5bGVzICs9ICdoZWlnaHQ6JyArIGhlaWdodCArICdweDsnO1xuICAgIH1cblxuICAgIC8vIGFkZCB3aWR0aFxuICAgIGlmIChpc0RlZmluZWQod2lkdGgpKSB7XG4gICAgICBzdHlsZXMgKz0gJ3dpZHRoOicgKyB3aWR0aCArICdweDsnO1xuICAgIH1cblxuICAgIC8vIGFwcGx5IHN0eWxlc1xuICAgIHZhciBlbGVtZW50Q3VycmVudFN0eWxlID0gZWxlbWVudC5lbGVtZW50Q3VycmVudFN0eWxlIHx8ICcnO1xuXG4gICAgLy8gaWYgbmV3IHN0eWxlcyBkb2VzIG5vdCBtYXRjaCBjdXJyZW50IHN0eWxlcywgbGV0cyB1cGRhdGUhXG4gICAgaWYgKFxuICAgICAgc3R5bGVzLmxlbmd0aCAhPT0gZWxlbWVudEN1cnJlbnRTdHlsZS5sZW5ndGggfHxcbiAgICAgIHN0eWxlcyAhPT0gZWxlbWVudEN1cnJlbnRTdHlsZVxuICAgICkge1xuICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgc3R5bGVzKTtcbiAgICAgIC8vIHN0b3JlIGN1cnJlbnQgc3R5bGVzIHNvIHdlIGNhbiBjb21wYXJlIHRoZW0gdG8gbmV3IHN0eWxlcyBsYXRlciBvblxuICAgICAgLy8gX25vdF8gZ2V0dGluZyB0aGUgc3R5bGUgYXR0cmlidXRlIGlzIGZhc3RlclxuICAgICAgZWxlbWVudC5lbGVtZW50Q3VycmVudFN0eWxlID0gc3R5bGVzO1xuICAgIH1cbiAgfTtcblxuICB2YXIgTWl4aW5zID0ge1xuICAgIHN0eWxlczogc3R5bGVzLFxuICAgIGxpc3RlbmVyczogbGlzdGVuZXJzLFxuICAgIGFuaW1hdGlvbnM6IGFuaW1hdGlvbnMsXG4gICAgYXBpczogYXBpc1xuICB9O1xuXG4gIHZhciB1cGRhdGVSZWN0ID0gZnVuY3Rpb24gdXBkYXRlUmVjdCgpIHtcbiAgICB2YXIgcmVjdCA9XG4gICAgICBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHt9O1xuICAgIHZhciBlbGVtZW50ID1cbiAgICAgIGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG4gICAgdmFyIHN0eWxlID1cbiAgICAgIGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDoge307XG5cbiAgICBpZiAoIWVsZW1lbnQubGF5b3V0Q2FsY3VsYXRlZCkge1xuICAgICAgcmVjdC5wYWRkaW5nVG9wID0gcGFyc2VJbnQoc3R5bGUucGFkZGluZ1RvcCwgMTApIHx8IDA7XG4gICAgICByZWN0Lm1hcmdpblRvcCA9IHBhcnNlSW50KHN0eWxlLm1hcmdpblRvcCwgMTApIHx8IDA7XG4gICAgICByZWN0Lm1hcmdpblJpZ2h0ID0gcGFyc2VJbnQoc3R5bGUubWFyZ2luUmlnaHQsIDEwKSB8fCAwO1xuICAgICAgcmVjdC5tYXJnaW5Cb3R0b20gPSBwYXJzZUludChzdHlsZS5tYXJnaW5Cb3R0b20sIDEwKSB8fCAwO1xuICAgICAgcmVjdC5tYXJnaW5MZWZ0ID0gcGFyc2VJbnQoc3R5bGUubWFyZ2luTGVmdCwgMTApIHx8IDA7XG4gICAgICBlbGVtZW50LmxheW91dENhbGN1bGF0ZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIHJlY3QubGVmdCA9IGVsZW1lbnQub2Zmc2V0TGVmdCB8fCAwO1xuICAgIHJlY3QudG9wID0gZWxlbWVudC5vZmZzZXRUb3AgfHwgMDtcbiAgICByZWN0LndpZHRoID0gZWxlbWVudC5vZmZzZXRXaWR0aCB8fCAwO1xuICAgIHJlY3QuaGVpZ2h0ID0gZWxlbWVudC5vZmZzZXRIZWlnaHQgfHwgMDtcblxuICAgIHJlY3QucmlnaHQgPSByZWN0LmxlZnQgKyByZWN0LndpZHRoO1xuICAgIHJlY3QuYm90dG9tID0gcmVjdC50b3AgKyByZWN0LmhlaWdodDtcblxuICAgIHJlY3Quc2Nyb2xsVG9wID0gZWxlbWVudC5zY3JvbGxUb3A7XG5cbiAgICByZWN0LmhpZGRlbiA9IGVsZW1lbnQub2Zmc2V0UGFyZW50ID09PSBudWxsO1xuXG4gICAgcmV0dXJuIHJlY3Q7XG4gIH07XG5cbiAgdmFyIGNyZWF0ZVZpZXcgPVxuICAgIC8vIGRlZmF1bHQgdmlldyBkZWZpbml0aW9uXG4gICAgZnVuY3Rpb24gY3JlYXRlVmlldygpIHtcbiAgICAgIHZhciBfcmVmID1cbiAgICAgICAgICBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZFxuICAgICAgICAgICAgPyBhcmd1bWVudHNbMF1cbiAgICAgICAgICAgIDoge30sXG4gICAgICAgIF9yZWYkdGFnID0gX3JlZi50YWcsXG4gICAgICAgIHRhZyA9IF9yZWYkdGFnID09PSB2b2lkIDAgPyAnZGl2JyA6IF9yZWYkdGFnLFxuICAgICAgICBfcmVmJG5hbWUgPSBfcmVmLm5hbWUsXG4gICAgICAgIG5hbWUgPSBfcmVmJG5hbWUgPT09IHZvaWQgMCA/IG51bGwgOiBfcmVmJG5hbWUsXG4gICAgICAgIF9yZWYkYXR0cmlidXRlcyA9IF9yZWYuYXR0cmlidXRlcyxcbiAgICAgICAgYXR0cmlidXRlcyA9IF9yZWYkYXR0cmlidXRlcyA9PT0gdm9pZCAwID8ge30gOiBfcmVmJGF0dHJpYnV0ZXMsXG4gICAgICAgIF9yZWYkcmVhZCA9IF9yZWYucmVhZCxcbiAgICAgICAgcmVhZCA9IF9yZWYkcmVhZCA9PT0gdm9pZCAwID8gZnVuY3Rpb24oKSB7fSA6IF9yZWYkcmVhZCxcbiAgICAgICAgX3JlZiR3cml0ZSA9IF9yZWYud3JpdGUsXG4gICAgICAgIHdyaXRlID0gX3JlZiR3cml0ZSA9PT0gdm9pZCAwID8gZnVuY3Rpb24oKSB7fSA6IF9yZWYkd3JpdGUsXG4gICAgICAgIF9yZWYkY3JlYXRlID0gX3JlZi5jcmVhdGUsXG4gICAgICAgIGNyZWF0ZSA9IF9yZWYkY3JlYXRlID09PSB2b2lkIDAgPyBmdW5jdGlvbigpIHt9IDogX3JlZiRjcmVhdGUsXG4gICAgICAgIF9yZWYkZGVzdHJveSA9IF9yZWYuZGVzdHJveSxcbiAgICAgICAgZGVzdHJveSA9IF9yZWYkZGVzdHJveSA9PT0gdm9pZCAwID8gZnVuY3Rpb24oKSB7fSA6IF9yZWYkZGVzdHJveSxcbiAgICAgICAgX3JlZiRmaWx0ZXJGcmFtZUFjdGlvID0gX3JlZi5maWx0ZXJGcmFtZUFjdGlvbnNGb3JDaGlsZCxcbiAgICAgICAgZmlsdGVyRnJhbWVBY3Rpb25zRm9yQ2hpbGQgPVxuICAgICAgICAgIF9yZWYkZmlsdGVyRnJhbWVBY3RpbyA9PT0gdm9pZCAwXG4gICAgICAgICAgICA/IGZ1bmN0aW9uKGNoaWxkLCBhY3Rpb25zKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGFjdGlvbnM7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDogX3JlZiRmaWx0ZXJGcmFtZUFjdGlvLFxuICAgICAgICBfcmVmJGRpZENyZWF0ZVZpZXcgPSBfcmVmLmRpZENyZWF0ZVZpZXcsXG4gICAgICAgIGRpZENyZWF0ZVZpZXcgPVxuICAgICAgICAgIF9yZWYkZGlkQ3JlYXRlVmlldyA9PT0gdm9pZCAwID8gZnVuY3Rpb24oKSB7fSA6IF9yZWYkZGlkQ3JlYXRlVmlldyxcbiAgICAgICAgX3JlZiRkaWRXcml0ZVZpZXcgPSBfcmVmLmRpZFdyaXRlVmlldyxcbiAgICAgICAgZGlkV3JpdGVWaWV3ID1cbiAgICAgICAgICBfcmVmJGRpZFdyaXRlVmlldyA9PT0gdm9pZCAwID8gZnVuY3Rpb24oKSB7fSA6IF9yZWYkZGlkV3JpdGVWaWV3LFxuICAgICAgICBfcmVmJGlnbm9yZVJlY3QgPSBfcmVmLmlnbm9yZVJlY3QsXG4gICAgICAgIGlnbm9yZVJlY3QgPSBfcmVmJGlnbm9yZVJlY3QgPT09IHZvaWQgMCA/IGZhbHNlIDogX3JlZiRpZ25vcmVSZWN0LFxuICAgICAgICBfcmVmJGlnbm9yZVJlY3RVcGRhdGUgPSBfcmVmLmlnbm9yZVJlY3RVcGRhdGUsXG4gICAgICAgIGlnbm9yZVJlY3RVcGRhdGUgPVxuICAgICAgICAgIF9yZWYkaWdub3JlUmVjdFVwZGF0ZSA9PT0gdm9pZCAwID8gZmFsc2UgOiBfcmVmJGlnbm9yZVJlY3RVcGRhdGUsXG4gICAgICAgIF9yZWYkbWl4aW5zID0gX3JlZi5taXhpbnMsXG4gICAgICAgIG1peGlucyA9IF9yZWYkbWl4aW5zID09PSB2b2lkIDAgPyBbXSA6IF9yZWYkbWl4aW5zO1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKFxuICAgICAgICAvLyBlYWNoIHZpZXcgcmVxdWlyZXMgcmVmZXJlbmNlIHRvIHN0b3JlXG4gICAgICAgIHN0b3JlXG4gICAgICApIHtcbiAgICAgICAgdmFyIHByb3BzID1cbiAgICAgICAgICBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZFxuICAgICAgICAgICAgPyBhcmd1bWVudHNbMV1cbiAgICAgICAgICAgIDoge307XG4gICAgICAgIC8vIHJvb3QgZWxlbWVudCBzaG91bGQgbm90IGJlIGNoYW5nZWRcbiAgICAgICAgdmFyIGVsZW1lbnQgPSBjcmVhdGVFbGVtZW50KHRhZywgJ2ZpbGVwb25kLS0nICsgbmFtZSwgYXR0cmlidXRlcyk7XG5cbiAgICAgICAgLy8gc3R5bGUgcmVmZXJlbmNlIHNob3VsZCBhbHNvIG5vdCBiZSBjaGFuZ2VkXG4gICAgICAgIHZhciBzdHlsZSA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQsIG51bGwpO1xuXG4gICAgICAgIC8vIGVsZW1lbnQgcmVjdGFuZ2xlXG4gICAgICAgIHZhciByZWN0ID0gdXBkYXRlUmVjdCgpO1xuICAgICAgICB2YXIgZnJhbWVSZWN0ID0gbnVsbDtcblxuICAgICAgICAvLyByZXN0IHN0YXRlXG4gICAgICAgIHZhciBpc1Jlc3RpbmcgPSBmYWxzZTtcblxuICAgICAgICAvLyBwcmV0dHkgc2VsZiBleHBsYW5hdG9yeVxuICAgICAgICB2YXIgY2hpbGRWaWV3cyA9IFtdO1xuXG4gICAgICAgIC8vIGxvYWRlZCBtaXhpbnNcbiAgICAgICAgdmFyIGFjdGl2ZU1peGlucyA9IFtdO1xuXG4gICAgICAgIC8vIHJlZmVyZW5jZXMgdG8gY3JlYXRlZCBjaGlsZHJlblxuICAgICAgICB2YXIgcmVmID0ge307XG5cbiAgICAgICAgLy8gc3RhdGUgdXNlZCBmb3IgZWFjaCBpbnN0YW5jZVxuICAgICAgICB2YXIgc3RhdGUgPSB7fTtcblxuICAgICAgICAvLyBsaXN0IG9mIHdyaXRlcnMgdGhhdCB3aWxsIGJlIGNhbGxlZCB0byB1cGRhdGUgdGhpcyB2aWV3XG4gICAgICAgIHZhciB3cml0ZXJzID0gW1xuICAgICAgICAgIHdyaXRlIC8vIGRlZmF1bHQgd3JpdGVyXG4gICAgICAgIF07XG5cbiAgICAgICAgdmFyIHJlYWRlcnMgPSBbXG4gICAgICAgICAgcmVhZCAvLyBkZWZhdWx0IHJlYWRlclxuICAgICAgICBdO1xuXG4gICAgICAgIHZhciBkZXN0cm95ZXJzID0gW1xuICAgICAgICAgIGRlc3Ryb3kgLy8gZGVmYXVsdCBkZXN0cm95XG4gICAgICAgIF07XG5cbiAgICAgICAgLy8gY29yZSB2aWV3IG1ldGhvZHNcbiAgICAgICAgdmFyIGdldEVsZW1lbnQgPSBmdW5jdGlvbiBnZXRFbGVtZW50KCkge1xuICAgICAgICAgIHJldHVybiBlbGVtZW50O1xuICAgICAgICB9O1xuICAgICAgICB2YXIgZ2V0Q2hpbGRWaWV3cyA9IGZ1bmN0aW9uIGdldENoaWxkVmlld3MoKSB7XG4gICAgICAgICAgcmV0dXJuIGNoaWxkVmlld3MuY29uY2F0KCk7XG4gICAgICAgIH07XG4gICAgICAgIHZhciBnZXRSZWZlcmVuY2UgPSBmdW5jdGlvbiBnZXRSZWZlcmVuY2UoKSB7XG4gICAgICAgICAgcmV0dXJuIHJlZjtcbiAgICAgICAgfTtcbiAgICAgICAgdmFyIGNyZWF0ZUNoaWxkVmlldyA9IGZ1bmN0aW9uIGNyZWF0ZUNoaWxkVmlldyhzdG9yZSkge1xuICAgICAgICAgIHJldHVybiBmdW5jdGlvbih2aWV3LCBwcm9wcykge1xuICAgICAgICAgICAgcmV0dXJuIHZpZXcoc3RvcmUsIHByb3BzKTtcbiAgICAgICAgICB9O1xuICAgICAgICB9O1xuICAgICAgICB2YXIgZ2V0UmVjdCA9IGZ1bmN0aW9uIGdldFJlY3QoKSB7XG4gICAgICAgICAgaWYgKGZyYW1lUmVjdCkge1xuICAgICAgICAgICAgcmV0dXJuIGZyYW1lUmVjdDtcbiAgICAgICAgICB9XG4gICAgICAgICAgZnJhbWVSZWN0ID0gZ2V0Vmlld1JlY3QocmVjdCwgY2hpbGRWaWV3cywgWzAsIDBdLCBbMSwgMV0pO1xuICAgICAgICAgIHJldHVybiBmcmFtZVJlY3Q7XG4gICAgICAgIH07XG4gICAgICAgIHZhciBnZXRTdHlsZSA9IGZ1bmN0aW9uIGdldFN0eWxlKCkge1xuICAgICAgICAgIHJldHVybiBzdHlsZTtcbiAgICAgICAgfTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogUmVhZCBkYXRhIGZyb20gRE9NXG4gICAgICAgICAqIEBwcml2YXRlXG4gICAgICAgICAqL1xuICAgICAgICB2YXIgX3JlYWQgPSBmdW5jdGlvbiBfcmVhZCgpIHtcbiAgICAgICAgICBmcmFtZVJlY3QgPSBudWxsO1xuXG4gICAgICAgICAgLy8gcmVhZCBjaGlsZCB2aWV3c1xuICAgICAgICAgIGNoaWxkVmlld3MuZm9yRWFjaChmdW5jdGlvbihjaGlsZCkge1xuICAgICAgICAgICAgcmV0dXJuIGNoaWxkLl9yZWFkKCk7XG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICB2YXIgc2hvdWxkVXBkYXRlID0gIShpZ25vcmVSZWN0VXBkYXRlICYmIHJlY3Qud2lkdGggJiYgcmVjdC5oZWlnaHQpO1xuICAgICAgICAgIGlmIChzaG91bGRVcGRhdGUpIHtcbiAgICAgICAgICAgIHVwZGF0ZVJlY3QocmVjdCwgZWxlbWVudCwgc3R5bGUpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIHJlYWRlcnNcbiAgICAgICAgICB2YXIgYXBpID0geyByb290OiBpbnRlcm5hbEFQSSwgcHJvcHM6IHByb3BzLCByZWN0OiByZWN0IH07XG4gICAgICAgICAgcmVhZGVycy5mb3JFYWNoKGZ1bmN0aW9uKHJlYWRlcikge1xuICAgICAgICAgICAgcmV0dXJuIHJlYWRlcihhcGkpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBXcml0ZSBkYXRhIHRvIERPTVxuICAgICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICAgKi9cbiAgICAgICAgdmFyIF93cml0ZSA9IGZ1bmN0aW9uIF93cml0ZSh0cywgZnJhbWVBY3Rpb25zLCBzaG91bGRPcHRpbWl6ZSkge1xuICAgICAgICAgIC8vIGlmIG5vIGFjdGlvbnMsIHdlIGFzc3VtZSB0aGF0IHRoZSB2aWV3IGlzIHJlc3RpbmdcbiAgICAgICAgICB2YXIgcmVzdGluZyA9IGZyYW1lQWN0aW9ucy5sZW5ndGggPT09IDA7XG5cbiAgICAgICAgICAvLyB3cml0ZXJzXG4gICAgICAgICAgd3JpdGVycy5mb3JFYWNoKGZ1bmN0aW9uKHdyaXRlcikge1xuICAgICAgICAgICAgdmFyIHdyaXRlclJlc3RpbmcgPSB3cml0ZXIoe1xuICAgICAgICAgICAgICBwcm9wczogcHJvcHMsXG4gICAgICAgICAgICAgIHJvb3Q6IGludGVybmFsQVBJLFxuICAgICAgICAgICAgICBhY3Rpb25zOiBmcmFtZUFjdGlvbnMsXG4gICAgICAgICAgICAgIHRpbWVzdGFtcDogdHMsXG4gICAgICAgICAgICAgIHNob3VsZE9wdGltaXplOiBzaG91bGRPcHRpbWl6ZVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGlmICh3cml0ZXJSZXN0aW5nID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICByZXN0aW5nID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICAvLyBydW4gbWl4aW5zXG4gICAgICAgICAgYWN0aXZlTWl4aW5zLmZvckVhY2goZnVuY3Rpb24obWl4aW4pIHtcbiAgICAgICAgICAgIC8vIGlmIG9uZSBvZiB0aGUgbWl4aW5zIGlzIHN0aWxsIGJ1c3kgYWZ0ZXIgd3JpdGUgb3BlcmF0aW9uLCB3ZSBhcmUgbm90IHJlc3RpbmdcbiAgICAgICAgICAgIHZhciBtaXhpblJlc3RpbmcgPSBtaXhpbi53cml0ZSh0cyk7XG4gICAgICAgICAgICBpZiAobWl4aW5SZXN0aW5nID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICByZXN0aW5nID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICAvLyB1cGRhdGVzIGNoaWxkIHZpZXdzIHRoYXQgYXJlIGN1cnJlbnRseSBhdHRhY2hlZCB0byB0aGUgRE9NXG4gICAgICAgICAgY2hpbGRWaWV3c1xuICAgICAgICAgICAgLmZpbHRlcihmdW5jdGlvbihjaGlsZCkge1xuICAgICAgICAgICAgICByZXR1cm4gISFjaGlsZC5lbGVtZW50LnBhcmVudE5vZGU7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmZvckVhY2goZnVuY3Rpb24oY2hpbGQpIHtcbiAgICAgICAgICAgICAgLy8gaWYgYSBjaGlsZCB2aWV3IGlzIG5vdCByZXN0aW5nLCB3ZSBhcmUgbm90IHJlc3RpbmdcbiAgICAgICAgICAgICAgdmFyIGNoaWxkUmVzdGluZyA9IGNoaWxkLl93cml0ZShcbiAgICAgICAgICAgICAgICB0cyxcbiAgICAgICAgICAgICAgICBmaWx0ZXJGcmFtZUFjdGlvbnNGb3JDaGlsZChjaGlsZCwgZnJhbWVBY3Rpb25zKSxcbiAgICAgICAgICAgICAgICBzaG91bGRPcHRpbWl6ZVxuICAgICAgICAgICAgICApO1xuXG4gICAgICAgICAgICAgIGlmICghY2hpbGRSZXN0aW5nKSB7XG4gICAgICAgICAgICAgICAgcmVzdGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgIC8vIGFwcGVuZCBuZXcgZWxlbWVudHMgdG8gRE9NIGFuZCB1cGRhdGUgdGhvc2VcbiAgICAgICAgICBjaGlsZFZpZXdzXG4gICAgICAgICAgICAvLy5maWx0ZXIoY2hpbGQgPT4gIWNoaWxkLmVsZW1lbnQucGFyZW50Tm9kZSlcbiAgICAgICAgICAgIC5mb3JFYWNoKGZ1bmN0aW9uKGNoaWxkLCBpbmRleCkge1xuICAgICAgICAgICAgICAvLyBza2lwXG4gICAgICAgICAgICAgIGlmIChjaGlsZC5lbGVtZW50LnBhcmVudE5vZGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAvLyBhcHBlbmQgdG8gRE9NXG4gICAgICAgICAgICAgIGludGVybmFsQVBJLmFwcGVuZENoaWxkKGNoaWxkLmVsZW1lbnQsIGluZGV4KTtcblxuICAgICAgICAgICAgICAvLyBjYWxsIHJlYWQgKG5lZWQgdG8ga25vdyB0aGUgc2l6ZSBvZiB0aGVzZSBlbGVtZW50cylcbiAgICAgICAgICAgICAgY2hpbGQuX3JlYWQoKTtcblxuICAgICAgICAgICAgICAvLyByZS1jYWxsIHdyaXRlXG4gICAgICAgICAgICAgIGNoaWxkLl93cml0ZShcbiAgICAgICAgICAgICAgICB0cyxcbiAgICAgICAgICAgICAgICBmaWx0ZXJGcmFtZUFjdGlvbnNGb3JDaGlsZChjaGlsZCwgZnJhbWVBY3Rpb25zKSxcbiAgICAgICAgICAgICAgICBzaG91bGRPcHRpbWl6ZVxuICAgICAgICAgICAgICApO1xuXG4gICAgICAgICAgICAgIC8vIHdlIGp1c3QgYWRkZWQgc29tdGhpbmcgdG8gdGhlIGRvbSwgbm8gcmVzdFxuICAgICAgICAgICAgICByZXN0aW5nID0gZmFsc2U7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgIC8vIHVwZGF0ZSByZXN0aW5nIHN0YXRlXG4gICAgICAgICAgaXNSZXN0aW5nID0gcmVzdGluZztcblxuICAgICAgICAgIGRpZFdyaXRlVmlldyh7XG4gICAgICAgICAgICBwcm9wczogcHJvcHMsXG4gICAgICAgICAgICByb290OiBpbnRlcm5hbEFQSSxcbiAgICAgICAgICAgIGFjdGlvbnM6IGZyYW1lQWN0aW9ucyxcbiAgICAgICAgICAgIHRpbWVzdGFtcDogdHNcbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIC8vIGxldCBwYXJlbnQga25vdyBpZiB3ZSBhcmUgcmVzdGluZ1xuICAgICAgICAgIHJldHVybiByZXN0aW5nO1xuICAgICAgICB9O1xuXG4gICAgICAgIHZhciBfZGVzdHJveSA9IGZ1bmN0aW9uIF9kZXN0cm95KCkge1xuICAgICAgICAgIGFjdGl2ZU1peGlucy5mb3JFYWNoKGZ1bmN0aW9uKG1peGluKSB7XG4gICAgICAgICAgICByZXR1cm4gbWl4aW4uZGVzdHJveSgpO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIGRlc3Ryb3llcnMuZm9yRWFjaChmdW5jdGlvbihkZXN0cm95ZXIpIHtcbiAgICAgICAgICAgIGRlc3Ryb3llcih7IHJvb3Q6IGludGVybmFsQVBJLCBwcm9wczogcHJvcHMgfSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgY2hpbGRWaWV3cy5mb3JFYWNoKGZ1bmN0aW9uKGNoaWxkKSB7XG4gICAgICAgICAgICByZXR1cm4gY2hpbGQuX2Rlc3Ryb3koKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfTtcblxuICAgICAgICAvLyBzaGFyZWRBUElcbiAgICAgICAgdmFyIHNoYXJlZEFQSURlZmluaXRpb24gPSB7XG4gICAgICAgICAgZWxlbWVudDoge1xuICAgICAgICAgICAgZ2V0OiBnZXRFbGVtZW50XG4gICAgICAgICAgfSxcblxuICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICBnZXQ6IGdldFN0eWxlXG4gICAgICAgICAgfSxcblxuICAgICAgICAgIGNoaWxkVmlld3M6IHtcbiAgICAgICAgICAgIGdldDogZ2V0Q2hpbGRWaWV3c1xuICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICAvLyBwcml2YXRlIEFQSSBkZWZpbml0aW9uXG4gICAgICAgIHZhciBpbnRlcm5hbEFQSURlZmluaXRpb24gPSBPYmplY3QuYXNzaWduKHt9LCBzaGFyZWRBUElEZWZpbml0aW9uLCB7XG4gICAgICAgICAgcmVjdDoge1xuICAgICAgICAgICAgZ2V0OiBnZXRSZWN0XG4gICAgICAgICAgfSxcblxuICAgICAgICAgIC8vIGFjY2VzcyB0byBjdXN0b20gY2hpbGRyZW4gcmVmZXJlbmNlc1xuICAgICAgICAgIHJlZjoge1xuICAgICAgICAgICAgZ2V0OiBnZXRSZWZlcmVuY2VcbiAgICAgICAgICB9LFxuXG4gICAgICAgICAgLy8gZG9tIG1vZGlmaWVyc1xuICAgICAgICAgIGlzOiBmdW5jdGlvbiBpcyhuZWVkbGUpIHtcbiAgICAgICAgICAgIHJldHVybiBuYW1lID09PSBuZWVkbGU7XG4gICAgICAgICAgfSxcbiAgICAgICAgICBhcHBlbmRDaGlsZDogYXBwZW5kQ2hpbGQoZWxlbWVudCksXG4gICAgICAgICAgY3JlYXRlQ2hpbGRWaWV3OiBjcmVhdGVDaGlsZFZpZXcoc3RvcmUpLFxuICAgICAgICAgIGxpbmtWaWV3OiBmdW5jdGlvbiBsaW5rVmlldyh2aWV3KSB7XG4gICAgICAgICAgICBjaGlsZFZpZXdzLnB1c2godmlldyk7XG4gICAgICAgICAgICByZXR1cm4gdmlldztcbiAgICAgICAgICB9LFxuICAgICAgICAgIHVubGlua1ZpZXc6IGZ1bmN0aW9uIHVubGlua1ZpZXcodmlldykge1xuICAgICAgICAgICAgY2hpbGRWaWV3cy5zcGxpY2UoY2hpbGRWaWV3cy5pbmRleE9mKHZpZXcpLCAxKTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIGFwcGVuZENoaWxkVmlldzogYXBwZW5kQ2hpbGRWaWV3KGVsZW1lbnQsIGNoaWxkVmlld3MpLFxuICAgICAgICAgIHJlbW92ZUNoaWxkVmlldzogcmVtb3ZlQ2hpbGRWaWV3KGVsZW1lbnQsIGNoaWxkVmlld3MpLFxuICAgICAgICAgIHJlZ2lzdGVyV3JpdGVyOiBmdW5jdGlvbiByZWdpc3RlcldyaXRlcih3cml0ZXIpIHtcbiAgICAgICAgICAgIHJldHVybiB3cml0ZXJzLnB1c2god3JpdGVyKTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIHJlZ2lzdGVyUmVhZGVyOiBmdW5jdGlvbiByZWdpc3RlclJlYWRlcihyZWFkZXIpIHtcbiAgICAgICAgICAgIHJldHVybiByZWFkZXJzLnB1c2gocmVhZGVyKTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIHJlZ2lzdGVyRGVzdHJveWVyOiBmdW5jdGlvbiByZWdpc3RlckRlc3Ryb3llcihkZXN0cm95ZXIpIHtcbiAgICAgICAgICAgIHJldHVybiBkZXN0cm95ZXJzLnB1c2goZGVzdHJveWVyKTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIGludmFsaWRhdGVMYXlvdXQ6IGZ1bmN0aW9uIGludmFsaWRhdGVMYXlvdXQoKSB7XG4gICAgICAgICAgICByZXR1cm4gKGVsZW1lbnQubGF5b3V0Q2FsY3VsYXRlZCA9IGZhbHNlKTtcbiAgICAgICAgICB9LFxuXG4gICAgICAgICAgLy8gYWNjZXNzIHRvIGRhdGEgc3RvcmVcbiAgICAgICAgICBkaXNwYXRjaDogc3RvcmUuZGlzcGF0Y2gsXG4gICAgICAgICAgcXVlcnk6IHN0b3JlLnF1ZXJ5XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIHB1YmxpYyB2aWV3IEFQSSBtZXRob2RzXG4gICAgICAgIHZhciBleHRlcm5hbEFQSURlZmluaXRpb24gPSB7XG4gICAgICAgICAgZWxlbWVudDoge1xuICAgICAgICAgICAgZ2V0OiBnZXRFbGVtZW50XG4gICAgICAgICAgfSxcblxuICAgICAgICAgIGNoaWxkVmlld3M6IHtcbiAgICAgICAgICAgIGdldDogZ2V0Q2hpbGRWaWV3c1xuICAgICAgICAgIH0sXG5cbiAgICAgICAgICByZWN0OiB7XG4gICAgICAgICAgICBnZXQ6IGdldFJlY3RcbiAgICAgICAgICB9LFxuXG4gICAgICAgICAgcmVzdGluZzoge1xuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgICAgICAgIHJldHVybiBpc1Jlc3Rpbmc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcblxuICAgICAgICAgIGlzUmVjdElnbm9yZWQ6IGZ1bmN0aW9uIGlzUmVjdElnbm9yZWQoKSB7XG4gICAgICAgICAgICByZXR1cm4gaWdub3JlUmVjdDtcbiAgICAgICAgICB9LFxuICAgICAgICAgIF9yZWFkOiBfcmVhZCxcbiAgICAgICAgICBfd3JpdGU6IF93cml0ZSxcbiAgICAgICAgICBfZGVzdHJveTogX2Rlc3Ryb3lcbiAgICAgICAgfTtcblxuICAgICAgICAvLyBtaXhpbiBBUEkgbWV0aG9kc1xuICAgICAgICB2YXIgbWl4aW5BUElEZWZpbml0aW9uID0gT2JqZWN0LmFzc2lnbih7fSwgc2hhcmVkQVBJRGVmaW5pdGlvbiwge1xuICAgICAgICAgIHJlY3Q6IHtcbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICAgICAgICByZXR1cm4gcmVjdDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIGFkZCBtaXhpbiBmdW5jdGlvbmFsaXR5XG4gICAgICAgIE9iamVjdC5rZXlzKG1peGlucylcbiAgICAgICAgICAuc29ydChmdW5jdGlvbihhLCBiKSB7XG4gICAgICAgICAgICAvLyBtb3ZlIHN0eWxlcyB0byB0aGUgYmFjayBvZiB0aGUgbWl4aW4gbGlzdCAoc28gYWRqdXN0bWVudHMgb2Ygb3RoZXIgbWl4aW5zIGFyZSBhcHBsaWVkIHRvIHRoZSBwcm9wcyBjb3JyZWN0bHkpXG4gICAgICAgICAgICBpZiAoYSA9PT0gJ3N0eWxlcycpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGIgPT09ICdzdHlsZXMnKSB7XG4gICAgICAgICAgICAgIHJldHVybiAtMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICAgIH0pXG4gICAgICAgICAgLmZvckVhY2goZnVuY3Rpb24oa2V5KSB7XG4gICAgICAgICAgICB2YXIgbWl4aW5BUEkgPSBNaXhpbnNba2V5XSh7XG4gICAgICAgICAgICAgIG1peGluQ29uZmlnOiBtaXhpbnNba2V5XSxcbiAgICAgICAgICAgICAgdmlld1Byb3BzOiBwcm9wcyxcbiAgICAgICAgICAgICAgdmlld1N0YXRlOiBzdGF0ZSxcbiAgICAgICAgICAgICAgdmlld0ludGVybmFsQVBJOiBpbnRlcm5hbEFQSURlZmluaXRpb24sXG4gICAgICAgICAgICAgIHZpZXdFeHRlcm5hbEFQSTogZXh0ZXJuYWxBUElEZWZpbml0aW9uLFxuICAgICAgICAgICAgICB2aWV3OiBjcmVhdGVPYmplY3QobWl4aW5BUElEZWZpbml0aW9uKVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGlmIChtaXhpbkFQSSkge1xuICAgICAgICAgICAgICBhY3RpdmVNaXhpbnMucHVzaChtaXhpbkFQSSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gY29uc3RydWN0IHByaXZhdGUgYXBpXG4gICAgICAgIHZhciBpbnRlcm5hbEFQSSA9IGNyZWF0ZU9iamVjdChpbnRlcm5hbEFQSURlZmluaXRpb24pO1xuXG4gICAgICAgIC8vIGNyZWF0ZSB0aGUgdmlld1xuICAgICAgICBjcmVhdGUoe1xuICAgICAgICAgIHJvb3Q6IGludGVybmFsQVBJLFxuICAgICAgICAgIHByb3BzOiBwcm9wc1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyBhcHBlbmQgY3JlYXRlZCBjaGlsZCB2aWV3cyB0byByb290IG5vZGVcbiAgICAgICAgdmFyIGNoaWxkQ291bnQgPSBlbGVtZW50LmNoaWxkcmVuLmxlbmd0aDsgLy8gbmVlZCB0byBrbm93IHRoZSBjdXJyZW50IGNoaWxkIGNvdW50IHNvIGFwcGVuZGluZyBoYXBwZW5zIGluIGNvcnJlY3Qgb3JkZXJcbiAgICAgICAgY2hpbGRWaWV3cy5mb3JFYWNoKGZ1bmN0aW9uKGNoaWxkLCBpbmRleCkge1xuICAgICAgICAgIGludGVybmFsQVBJLmFwcGVuZENoaWxkKGNoaWxkLmVsZW1lbnQsIGNoaWxkQ291bnQgKyBpbmRleCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIGNhbGwgZGlkIGNyZWF0ZVxuICAgICAgICBkaWRDcmVhdGVWaWV3KGludGVybmFsQVBJKTtcblxuICAgICAgICAvLyBleHBvc2UgcHVibGljIGFwaVxuICAgICAgICByZXR1cm4gY3JlYXRlT2JqZWN0KGV4dGVybmFsQVBJRGVmaW5pdGlvbiwgcHJvcHMpO1xuICAgICAgfTtcbiAgICB9O1xuXG4gIHZhciBjcmVhdGVQYWludGVyID0gZnVuY3Rpb24gY3JlYXRlUGFpbnRlcihyZWFkLCB3cml0ZSkge1xuICAgIHZhciBmcHMgPVxuICAgICAgYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiA2MDtcblxuICAgIHZhciBuYW1lID0gJ19fZnJhbWVQYWludGVyJztcblxuICAgIC8vIHNldCBnbG9iYWwgcGFpbnRlclxuICAgIGlmICh3aW5kb3dbbmFtZV0pIHtcbiAgICAgIHdpbmRvd1tuYW1lXS5yZWFkZXJzLnB1c2gocmVhZCk7XG4gICAgICB3aW5kb3dbbmFtZV0ud3JpdGVycy5wdXNoKHdyaXRlKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB3aW5kb3dbbmFtZV0gPSB7XG4gICAgICByZWFkZXJzOiBbcmVhZF0sXG4gICAgICB3cml0ZXJzOiBbd3JpdGVdXG4gICAgfTtcblxuICAgIHZhciBwYWludGVyID0gd2luZG93W25hbWVdO1xuXG4gICAgdmFyIGludGVydmFsID0gMTAwMCAvIGZwcztcbiAgICB2YXIgbGFzdCA9IG51bGw7XG4gICAgdmFyIGlkID0gbnVsbDtcbiAgICB2YXIgcmVxdWVzdFRpY2sgPSBudWxsO1xuICAgIHZhciBjYW5jZWxUaWNrID0gbnVsbDtcblxuICAgIHZhciBzZXRUaW1lclR5cGUgPSBmdW5jdGlvbiBzZXRUaW1lclR5cGUoKSB7XG4gICAgICBpZiAoZG9jdW1lbnQuaGlkZGVuKSB7XG4gICAgICAgIHJlcXVlc3RUaWNrID0gZnVuY3Rpb24gcmVxdWVzdFRpY2soKSB7XG4gICAgICAgICAgcmV0dXJuIHdpbmRvdy5zZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRpY2socGVyZm9ybWFuY2Uubm93KCkpO1xuICAgICAgICAgIH0sIGludGVydmFsKTtcbiAgICAgICAgfTtcbiAgICAgICAgY2FuY2VsVGljayA9IGZ1bmN0aW9uIGNhbmNlbFRpY2soKSB7XG4gICAgICAgICAgcmV0dXJuIHdpbmRvdy5jbGVhclRpbWVvdXQoaWQpO1xuICAgICAgICB9O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVxdWVzdFRpY2sgPSBmdW5jdGlvbiByZXF1ZXN0VGljaygpIHtcbiAgICAgICAgICByZXR1cm4gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSh0aWNrKTtcbiAgICAgICAgfTtcbiAgICAgICAgY2FuY2VsVGljayA9IGZ1bmN0aW9uIGNhbmNlbFRpY2soKSB7XG4gICAgICAgICAgcmV0dXJuIHdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZShpZCk7XG4gICAgICAgIH07XG4gICAgICB9XG4gICAgfTtcblxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3Zpc2liaWxpdHljaGFuZ2UnLCBmdW5jdGlvbigpIHtcbiAgICAgIGlmIChjYW5jZWxUaWNrKSBjYW5jZWxUaWNrKCk7XG4gICAgICBzZXRUaW1lclR5cGUoKTtcbiAgICAgIHRpY2socGVyZm9ybWFuY2Uubm93KCkpO1xuICAgIH0pO1xuXG4gICAgdmFyIHRpY2sgPSBmdW5jdGlvbiB0aWNrKHRzKSB7XG4gICAgICAvLyBxdWV1ZSBuZXh0IHRpY2tcbiAgICAgIGlkID0gcmVxdWVzdFRpY2sodGljayk7XG5cbiAgICAgIC8vIGxpbWl0IGZwc1xuICAgICAgaWYgKCFsYXN0KSB7XG4gICAgICAgIGxhc3QgPSB0cztcbiAgICAgIH1cblxuICAgICAgdmFyIGRlbHRhID0gdHMgLSBsYXN0O1xuXG4gICAgICBpZiAoZGVsdGEgPD0gaW50ZXJ2YWwpIHtcbiAgICAgICAgLy8gc2tpcCBmcmFtZVxuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8vIGFsaWduIG5leHQgZnJhbWVcbiAgICAgIGxhc3QgPSB0cyAtIChkZWx0YSAlIGludGVydmFsKTtcblxuICAgICAgLy8gdXBkYXRlIHZpZXdcbiAgICAgIHBhaW50ZXIucmVhZGVycy5mb3JFYWNoKGZ1bmN0aW9uKHJlYWQpIHtcbiAgICAgICAgcmV0dXJuIHJlYWQoKTtcbiAgICAgIH0pO1xuICAgICAgcGFpbnRlci53cml0ZXJzLmZvckVhY2goZnVuY3Rpb24od3JpdGUpIHtcbiAgICAgICAgcmV0dXJuIHdyaXRlKHRzKTtcbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICBzZXRUaW1lclR5cGUoKTtcbiAgICB0aWNrKHBlcmZvcm1hbmNlLm5vdygpKTtcblxuICAgIHJldHVybiB7XG4gICAgICBwYXVzZTogZnVuY3Rpb24gcGF1c2UoKSB7XG4gICAgICAgIGNhbmNlbFRpY2soaWQpO1xuICAgICAgfVxuICAgIH07XG4gIH07XG5cbiAgdmFyIGNyZWF0ZVJvdXRlID0gZnVuY3Rpb24gY3JlYXRlUm91dGUocm91dGVzLCBmbikge1xuICAgIHJldHVybiBmdW5jdGlvbihfcmVmKSB7XG4gICAgICB2YXIgcm9vdCA9IF9yZWYucm9vdCxcbiAgICAgICAgcHJvcHMgPSBfcmVmLnByb3BzLFxuICAgICAgICBfcmVmJGFjdGlvbnMgPSBfcmVmLmFjdGlvbnMsXG4gICAgICAgIGFjdGlvbnMgPSBfcmVmJGFjdGlvbnMgPT09IHZvaWQgMCA/IFtdIDogX3JlZiRhY3Rpb25zLFxuICAgICAgICB0aW1lc3RhbXAgPSBfcmVmLnRpbWVzdGFtcCxcbiAgICAgICAgc2hvdWxkT3B0aW1pemUgPSBfcmVmLnNob3VsZE9wdGltaXplO1xuICAgICAgYWN0aW9uc1xuICAgICAgICAuZmlsdGVyKGZ1bmN0aW9uKGFjdGlvbikge1xuICAgICAgICAgIHJldHVybiByb3V0ZXNbYWN0aW9uLnR5cGVdO1xuICAgICAgICB9KVxuICAgICAgICAuZm9yRWFjaChmdW5jdGlvbihhY3Rpb24pIHtcbiAgICAgICAgICByZXR1cm4gcm91dGVzW2FjdGlvbi50eXBlXSh7XG4gICAgICAgICAgICByb290OiByb290LFxuICAgICAgICAgICAgcHJvcHM6IHByb3BzLFxuICAgICAgICAgICAgYWN0aW9uOiBhY3Rpb24uZGF0YSxcbiAgICAgICAgICAgIHRpbWVzdGFtcDogdGltZXN0YW1wLFxuICAgICAgICAgICAgc2hvdWxkT3B0aW1pemU6IHNob3VsZE9wdGltaXplXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuXG4gICAgICBpZiAoZm4pIHtcbiAgICAgICAgZm4oe1xuICAgICAgICAgIHJvb3Q6IHJvb3QsXG4gICAgICAgICAgcHJvcHM6IHByb3BzLFxuICAgICAgICAgIGFjdGlvbnM6IGFjdGlvbnMsXG4gICAgICAgICAgdGltZXN0YW1wOiB0aW1lc3RhbXAsXG4gICAgICAgICAgc2hvdWxkT3B0aW1pemU6IHNob3VsZE9wdGltaXplXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH07XG4gIH07XG5cbiAgdmFyIGluc2VydEJlZm9yZSA9IGZ1bmN0aW9uIGluc2VydEJlZm9yZShuZXdOb2RlLCByZWZlcmVuY2VOb2RlKSB7XG4gICAgcmV0dXJuIHJlZmVyZW5jZU5vZGUucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUobmV3Tm9kZSwgcmVmZXJlbmNlTm9kZSk7XG4gIH07XG5cbiAgdmFyIGluc2VydEFmdGVyID0gZnVuY3Rpb24gaW5zZXJ0QWZ0ZXIobmV3Tm9kZSwgcmVmZXJlbmNlTm9kZSkge1xuICAgIHJldHVybiByZWZlcmVuY2VOb2RlLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKFxuICAgICAgbmV3Tm9kZSxcbiAgICAgIHJlZmVyZW5jZU5vZGUubmV4dFNpYmxpbmdcbiAgICApO1xuICB9O1xuXG4gIHZhciBpc0FycmF5ID0gZnVuY3Rpb24gaXNBcnJheSh2YWx1ZSkge1xuICAgIHJldHVybiBBcnJheS5pc0FycmF5KHZhbHVlKTtcbiAgfTtcblxuICB2YXIgaXNFbXB0eSA9IGZ1bmN0aW9uIGlzRW1wdHkodmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUgPT0gbnVsbDtcbiAgfTtcblxuICB2YXIgdHJpbSA9IGZ1bmN0aW9uIHRyaW0oc3RyKSB7XG4gICAgcmV0dXJuIHN0ci50cmltKCk7XG4gIH07XG5cbiAgdmFyIHRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcodmFsdWUpIHtcbiAgICByZXR1cm4gJycgKyB2YWx1ZTtcbiAgfTtcblxuICB2YXIgdG9BcnJheSA9IGZ1bmN0aW9uIHRvQXJyYXkodmFsdWUpIHtcbiAgICB2YXIgc3BsaXR0ZXIgPVxuICAgICAgYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiAnLCc7XG4gICAgaWYgKGlzRW1wdHkodmFsdWUpKSB7XG4gICAgICByZXR1cm4gW107XG4gICAgfVxuICAgIGlmIChpc0FycmF5KHZhbHVlKSkge1xuICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cbiAgICByZXR1cm4gdG9TdHJpbmcodmFsdWUpXG4gICAgICAuc3BsaXQoc3BsaXR0ZXIpXG4gICAgICAubWFwKHRyaW0pXG4gICAgICAuZmlsdGVyKGZ1bmN0aW9uKHN0cikge1xuICAgICAgICByZXR1cm4gc3RyLmxlbmd0aDtcbiAgICAgIH0pO1xuICB9O1xuXG4gIHZhciBpc0Jvb2xlYW4gPSBmdW5jdGlvbiBpc0Jvb2xlYW4odmFsdWUpIHtcbiAgICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnYm9vbGVhbic7XG4gIH07XG5cbiAgdmFyIHRvQm9vbGVhbiA9IGZ1bmN0aW9uIHRvQm9vbGVhbih2YWx1ZSkge1xuICAgIHJldHVybiBpc0Jvb2xlYW4odmFsdWUpID8gdmFsdWUgOiB2YWx1ZSA9PT0gJ3RydWUnO1xuICB9O1xuXG4gIHZhciBpc1N0cmluZyA9IGZ1bmN0aW9uIGlzU3RyaW5nKHZhbHVlKSB7XG4gICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZyc7XG4gIH07XG5cbiAgdmFyIHRvTnVtYmVyID0gZnVuY3Rpb24gdG9OdW1iZXIodmFsdWUpIHtcbiAgICByZXR1cm4gaXNOdW1iZXIodmFsdWUpXG4gICAgICA/IHZhbHVlXG4gICAgICA6IGlzU3RyaW5nKHZhbHVlKVxuICAgICAgPyB0b1N0cmluZyh2YWx1ZSkucmVwbGFjZSgvW2Etel0rL2dpLCAnJylcbiAgICAgIDogMDtcbiAgfTtcblxuICB2YXIgdG9JbnQgPSBmdW5jdGlvbiB0b0ludCh2YWx1ZSkge1xuICAgIHJldHVybiBwYXJzZUludCh0b051bWJlcih2YWx1ZSksIDEwKTtcbiAgfTtcblxuICB2YXIgdG9GbG9hdCA9IGZ1bmN0aW9uIHRvRmxvYXQodmFsdWUpIHtcbiAgICByZXR1cm4gcGFyc2VGbG9hdCh0b051bWJlcih2YWx1ZSkpO1xuICB9O1xuXG4gIHZhciBpc0ludCA9IGZ1bmN0aW9uIGlzSW50KHZhbHVlKSB7XG4gICAgcmV0dXJuIGlzTnVtYmVyKHZhbHVlKSAmJiBpc0Zpbml0ZSh2YWx1ZSkgJiYgTWF0aC5mbG9vcih2YWx1ZSkgPT09IHZhbHVlO1xuICB9O1xuXG4gIHZhciB0b0J5dGVzID0gZnVuY3Rpb24gdG9CeXRlcyh2YWx1ZSkge1xuICAgIC8vIGlzIGluIGJ5dGVzXG4gICAgaWYgKGlzSW50KHZhbHVlKSkge1xuICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cblxuICAgIC8vIGlzIG5hdHVyYWwgZmlsZSBzaXplXG4gICAgdmFyIG5hdHVyYWxGaWxlU2l6ZSA9IHRvU3RyaW5nKHZhbHVlKS50cmltKCk7XG5cbiAgICAvLyBpZiBpcyB2YWx1ZSBpbiBtZWdhYnl0ZXNcbiAgICBpZiAoL01CJC9pLnRlc3QobmF0dXJhbEZpbGVTaXplKSkge1xuICAgICAgbmF0dXJhbEZpbGVTaXplID0gbmF0dXJhbEZpbGVTaXplLnJlcGxhY2UoL01CJGkvLCAnJykudHJpbSgpO1xuICAgICAgcmV0dXJuIHRvSW50KG5hdHVyYWxGaWxlU2l6ZSkgKiAxMDAwICogMTAwMDtcbiAgICB9XG5cbiAgICAvLyBpZiBpcyB2YWx1ZSBpbiBraWxvYnl0ZXNcbiAgICBpZiAoL0tCL2kudGVzdChuYXR1cmFsRmlsZVNpemUpKSB7XG4gICAgICBuYXR1cmFsRmlsZVNpemUgPSBuYXR1cmFsRmlsZVNpemUucmVwbGFjZSgvS0IkaS8sICcnKS50cmltKCk7XG4gICAgICByZXR1cm4gdG9JbnQobmF0dXJhbEZpbGVTaXplKSAqIDEwMDA7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRvSW50KG5hdHVyYWxGaWxlU2l6ZSk7XG4gIH07XG5cbiAgdmFyIGlzRnVuY3Rpb24gPSBmdW5jdGlvbiBpc0Z1bmN0aW9uKHZhbHVlKSB7XG4gICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ2Z1bmN0aW9uJztcbiAgfTtcblxuICB2YXIgdG9GdW5jdGlvblJlZmVyZW5jZSA9IGZ1bmN0aW9uIHRvRnVuY3Rpb25SZWZlcmVuY2Uoc3RyaW5nKSB7XG4gICAgdmFyIHJlZiA9IHNlbGY7XG4gICAgdmFyIGxldmVscyA9IHN0cmluZy5zcGxpdCgnLicpO1xuICAgIHZhciBsZXZlbCA9IG51bGw7XG4gICAgd2hpbGUgKChsZXZlbCA9IGxldmVscy5zaGlmdCgpKSkge1xuICAgICAgcmVmID0gcmVmW2xldmVsXTtcbiAgICAgIGlmICghcmVmKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVmO1xuICB9O1xuXG4gIHZhciBtZXRob2RzID0ge1xuICAgIHByb2Nlc3M6ICdQT1NUJyxcbiAgICByZXZlcnQ6ICdERUxFVEUnLFxuICAgIGZldGNoOiAnR0VUJyxcbiAgICByZXN0b3JlOiAnR0VUJyxcbiAgICBsb2FkOiAnR0VUJ1xuICB9O1xuXG4gIHZhciBjcmVhdGVTZXJ2ZXJBUEkgPSBmdW5jdGlvbiBjcmVhdGVTZXJ2ZXJBUEkob3V0bGluZSkge1xuICAgIHZhciBhcGkgPSB7fTtcblxuICAgIGFwaS51cmwgPSBpc1N0cmluZyhvdXRsaW5lKSA/IG91dGxpbmUgOiBvdXRsaW5lLnVybCB8fCAnJztcbiAgICBhcGkudGltZW91dCA9IG91dGxpbmUudGltZW91dCA/IHBhcnNlSW50KG91dGxpbmUudGltZW91dCwgMTApIDogMDtcblxuICAgIGZvcmluKG1ldGhvZHMsIGZ1bmN0aW9uKGtleSkge1xuICAgICAgYXBpW2tleV0gPSBjcmVhdGVBY3Rpb24oa2V5LCBvdXRsaW5lW2tleV0sIG1ldGhvZHNba2V5XSwgYXBpLnRpbWVvdXQpO1xuICAgIH0pO1xuXG4gICAgLy8gc3BlY2lhbCB0cmVhdG1lbnQgZm9yIHJlbW92ZVxuICAgIGFwaS5yZW1vdmUgPSBvdXRsaW5lLnJlbW92ZSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIGFwaTtcbiAgfTtcblxuICB2YXIgY3JlYXRlQWN0aW9uID0gZnVuY3Rpb24gY3JlYXRlQWN0aW9uKG5hbWUsIG91dGxpbmUsIG1ldGhvZCwgdGltZW91dCkge1xuICAgIC8vIGlzIGV4cGxpY2l0ZWx5IHNldCB0byBudWxsIHNvIGRpc2FibGVcbiAgICBpZiAob3V0bGluZSA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgLy8gaWYgaXMgY3VzdG9tIGZ1bmN0aW9uLCBkb25lISBEZXYgaGFuZGxlcyBldmVyeXRoaW5nLlxuICAgIGlmICh0eXBlb2Ygb3V0bGluZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcmV0dXJuIG91dGxpbmU7XG4gICAgfVxuXG4gICAgLy8gYnVpbGQgYWN0aW9uIG9iamVjdFxuICAgIHZhciBhY3Rpb24gPSB7XG4gICAgICB1cmw6IG1ldGhvZCA9PT0gJ0dFVCcgPyAnPycgKyBuYW1lICsgJz0nIDogJycsXG4gICAgICBtZXRob2Q6IG1ldGhvZCxcbiAgICAgIGhlYWRlcnM6IHt9LFxuICAgICAgd2l0aENyZWRlbnRpYWxzOiBmYWxzZSxcbiAgICAgIHRpbWVvdXQ6IHRpbWVvdXQsXG4gICAgICBvbmxvYWQ6IG51bGwsXG4gICAgICBvbmRhdGE6IG51bGwsXG4gICAgICBvbmVycm9yOiBudWxsXG4gICAgfTtcblxuICAgIC8vIGlzIGEgc2luZ2xlIHVybFxuICAgIGlmIChpc1N0cmluZyhvdXRsaW5lKSkge1xuICAgICAgYWN0aW9uLnVybCA9IG91dGxpbmU7XG4gICAgICByZXR1cm4gYWN0aW9uO1xuICAgIH1cblxuICAgIC8vIG92ZXJ3cml0ZVxuICAgIE9iamVjdC5hc3NpZ24oYWN0aW9uLCBvdXRsaW5lKTtcblxuICAgIC8vIHNlZSBpZiBzaG91bGQgcmVmb3JtYXQgaGVhZGVycztcbiAgICBpZiAoaXNTdHJpbmcoYWN0aW9uLmhlYWRlcnMpKSB7XG4gICAgICB2YXIgcGFydHMgPSBhY3Rpb24uaGVhZGVycy5zcGxpdCgvOiguKykvKTtcbiAgICAgIGFjdGlvbi5oZWFkZXJzID0ge1xuICAgICAgICBoZWFkZXI6IHBhcnRzWzBdLFxuICAgICAgICB2YWx1ZTogcGFydHNbMV1cbiAgICAgIH07XG4gICAgfVxuXG4gICAgLy8gaWYgaXMgYm9vbCB3aXRoQ3JlZGVudGlhbHNcbiAgICBhY3Rpb24ud2l0aENyZWRlbnRpYWxzID0gdG9Cb29sZWFuKGFjdGlvbi53aXRoQ3JlZGVudGlhbHMpO1xuXG4gICAgcmV0dXJuIGFjdGlvbjtcbiAgfTtcblxuICB2YXIgdG9TZXJ2ZXJBUEkgPSBmdW5jdGlvbiB0b1NlcnZlckFQSSh2YWx1ZSkge1xuICAgIHJldHVybiBjcmVhdGVTZXJ2ZXJBUEkodmFsdWUpO1xuICB9O1xuXG4gIHZhciBpc051bGwgPSBmdW5jdGlvbiBpc051bGwodmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUgPT09IG51bGw7XG4gIH07XG5cbiAgdmFyIGlzT2JqZWN0ID0gZnVuY3Rpb24gaXNPYmplY3QodmFsdWUpIHtcbiAgICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAhPT0gbnVsbDtcbiAgfTtcblxuICB2YXIgaXNBUEkgPSBmdW5jdGlvbiBpc0FQSSh2YWx1ZSkge1xuICAgIHJldHVybiAoXG4gICAgICBpc09iamVjdCh2YWx1ZSkgJiZcbiAgICAgIGlzU3RyaW5nKHZhbHVlLnVybCkgJiZcbiAgICAgIGlzT2JqZWN0KHZhbHVlLnByb2Nlc3MpICYmXG4gICAgICBpc09iamVjdCh2YWx1ZS5yZXZlcnQpICYmXG4gICAgICBpc09iamVjdCh2YWx1ZS5yZXN0b3JlKSAmJlxuICAgICAgaXNPYmplY3QodmFsdWUuZmV0Y2gpXG4gICAgKTtcbiAgfTtcblxuICB2YXIgZ2V0VHlwZSA9IGZ1bmN0aW9uIGdldFR5cGUodmFsdWUpIHtcbiAgICBpZiAoaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgIHJldHVybiAnYXJyYXknO1xuICAgIH1cblxuICAgIGlmIChpc051bGwodmFsdWUpKSB7XG4gICAgICByZXR1cm4gJ251bGwnO1xuICAgIH1cblxuICAgIGlmIChpc0ludCh2YWx1ZSkpIHtcbiAgICAgIHJldHVybiAnaW50JztcbiAgICB9XG5cbiAgICBpZiAoL15bMC05XSsgPyg/OkdCfE1CfEtCKSQvZ2kudGVzdCh2YWx1ZSkpIHtcbiAgICAgIHJldHVybiAnYnl0ZXMnO1xuICAgIH1cblxuICAgIGlmIChpc0FQSSh2YWx1ZSkpIHtcbiAgICAgIHJldHVybiAnYXBpJztcbiAgICB9XG5cbiAgICByZXR1cm4gdHlwZW9mIHZhbHVlO1xuICB9O1xuXG4gIHZhciByZXBsYWNlU2luZ2xlUXVvdGVzID0gZnVuY3Rpb24gcmVwbGFjZVNpbmdsZVF1b3RlcyhzdHIpIHtcbiAgICByZXR1cm4gc3RyXG4gICAgICAucmVwbGFjZSgve1xccyonL2csICd7XCInKVxuICAgICAgLnJlcGxhY2UoLydcXHMqfS9nLCAnXCJ9JylcbiAgICAgIC5yZXBsYWNlKC8nXFxzKjovZywgJ1wiOicpXG4gICAgICAucmVwbGFjZSgvOlxccyonL2csICc6XCInKVxuICAgICAgLnJlcGxhY2UoLyxcXHMqJy9nLCAnLFwiJylcbiAgICAgIC5yZXBsYWNlKC8nXFxzKiwvZywgJ1wiLCcpO1xuICB9O1xuXG4gIHZhciBjb252ZXJzaW9uVGFibGUgPSB7XG4gICAgYXJyYXk6IHRvQXJyYXksXG4gICAgYm9vbGVhbjogdG9Cb29sZWFuLFxuICAgIGludDogZnVuY3Rpb24gaW50KHZhbHVlKSB7XG4gICAgICByZXR1cm4gZ2V0VHlwZSh2YWx1ZSkgPT09ICdieXRlcycgPyB0b0J5dGVzKHZhbHVlKSA6IHRvSW50KHZhbHVlKTtcbiAgICB9LFxuICAgIG51bWJlcjogdG9GbG9hdCxcbiAgICBmbG9hdDogdG9GbG9hdCxcbiAgICBieXRlczogdG9CeXRlcyxcbiAgICBzdHJpbmc6IGZ1bmN0aW9uIHN0cmluZyh2YWx1ZSkge1xuICAgICAgcmV0dXJuIGlzRnVuY3Rpb24odmFsdWUpID8gdmFsdWUgOiB0b1N0cmluZyh2YWx1ZSk7XG4gICAgfSxcbiAgICBmdW5jdGlvbjogZnVuY3Rpb24gX2Z1bmN0aW9uKHZhbHVlKSB7XG4gICAgICByZXR1cm4gdG9GdW5jdGlvblJlZmVyZW5jZSh2YWx1ZSk7XG4gICAgfSxcbiAgICBzZXJ2ZXJhcGk6IHRvU2VydmVyQVBJLFxuICAgIG9iamVjdDogZnVuY3Rpb24gb2JqZWN0KHZhbHVlKSB7XG4gICAgICB0cnkge1xuICAgICAgICByZXR1cm4gSlNPTi5wYXJzZShyZXBsYWNlU2luZ2xlUXVvdGVzKHZhbHVlKSk7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICB2YXIgY29udmVydFRvID0gZnVuY3Rpb24gY29udmVydFRvKHZhbHVlLCB0eXBlKSB7XG4gICAgcmV0dXJuIGNvbnZlcnNpb25UYWJsZVt0eXBlXSh2YWx1ZSk7XG4gIH07XG5cbiAgdmFyIGdldFZhbHVlQnlUeXBlID0gZnVuY3Rpb24gZ2V0VmFsdWVCeVR5cGUoXG4gICAgbmV3VmFsdWUsXG4gICAgZGVmYXVsdFZhbHVlLFxuICAgIHZhbHVlVHlwZVxuICApIHtcbiAgICAvLyBjYW4gYWx3YXlzIGFzc2lnbiBkZWZhdWx0IHZhbHVlXG4gICAgaWYgKG5ld1ZhbHVlID09PSBkZWZhdWx0VmFsdWUpIHtcbiAgICAgIHJldHVybiBuZXdWYWx1ZTtcbiAgICB9XG5cbiAgICAvLyBnZXQgdGhlIHR5cGUgb2YgdGhlIG5ldyB2YWx1ZVxuICAgIHZhciBuZXdWYWx1ZVR5cGUgPSBnZXRUeXBlKG5ld1ZhbHVlKTtcblxuICAgIC8vIGlzIHZhbGlkIHR5cGU/XG4gICAgaWYgKG5ld1ZhbHVlVHlwZSAhPT0gdmFsdWVUeXBlKSB7XG4gICAgICAvLyBpcyBzdHJpbmcgaW5wdXQsIGxldCdzIGF0dGVtcHQgdG8gY29udmVydFxuICAgICAgdmFyIGNvbnZlcnRlZFZhbHVlID0gY29udmVydFRvKG5ld1ZhbHVlLCB2YWx1ZVR5cGUpO1xuXG4gICAgICAvLyB3aGF0IGlzIHRoZSB0eXBlIG5vd1xuICAgICAgbmV3VmFsdWVUeXBlID0gZ2V0VHlwZShjb252ZXJ0ZWRWYWx1ZSk7XG5cbiAgICAgIC8vIG5vIHZhbGlkIGNvbnZlcnNpb25zIGZvdW5kXG4gICAgICBpZiAoY29udmVydGVkVmFsdWUgPT09IG51bGwpIHtcbiAgICAgICAgdGhyb3cgJ1RyeWluZyB0byBhc3NpZ24gdmFsdWUgd2l0aCBpbmNvcnJlY3QgdHlwZSB0byBcIicgK1xuICAgICAgICAgIG9wdGlvbiArXG4gICAgICAgICAgJ1wiLCBhbGxvd2VkIHR5cGU6IFwiJyArXG4gICAgICAgICAgdmFsdWVUeXBlICtcbiAgICAgICAgICAnXCInO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbmV3VmFsdWUgPSBjb252ZXJ0ZWRWYWx1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBhc3NpZ24gbmV3IHZhbHVlXG4gICAgcmV0dXJuIG5ld1ZhbHVlO1xuICB9O1xuXG4gIHZhciBjcmVhdGVPcHRpb24gPSBmdW5jdGlvbiBjcmVhdGVPcHRpb24oZGVmYXVsdFZhbHVlLCB2YWx1ZVR5cGUpIHtcbiAgICB2YXIgY3VycmVudFZhbHVlID0gZGVmYXVsdFZhbHVlO1xuICAgIHJldHVybiB7XG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgIHJldHVybiBjdXJyZW50VmFsdWU7XG4gICAgICB9LFxuICAgICAgc2V0OiBmdW5jdGlvbiBzZXQobmV3VmFsdWUpIHtcbiAgICAgICAgY3VycmVudFZhbHVlID0gZ2V0VmFsdWVCeVR5cGUobmV3VmFsdWUsIGRlZmF1bHRWYWx1ZSwgdmFsdWVUeXBlKTtcbiAgICAgIH1cbiAgICB9O1xuICB9O1xuXG4gIHZhciBjcmVhdGVPcHRpb25zID0gZnVuY3Rpb24gY3JlYXRlT3B0aW9ucyhvcHRpb25zKSB7XG4gICAgdmFyIG9iaiA9IHt9O1xuICAgIGZvcmluKG9wdGlvbnMsIGZ1bmN0aW9uKHByb3ApIHtcbiAgICAgIHZhciBvcHRpb25EZWZpbml0aW9uID0gb3B0aW9uc1twcm9wXTtcbiAgICAgIG9ialtwcm9wXSA9IGNyZWF0ZU9wdGlvbihvcHRpb25EZWZpbml0aW9uWzBdLCBvcHRpb25EZWZpbml0aW9uWzFdKTtcbiAgICB9KTtcbiAgICByZXR1cm4gY3JlYXRlT2JqZWN0KG9iaik7XG4gIH07XG5cbiAgdmFyIGNyZWF0ZUluaXRpYWxTdGF0ZSA9IGZ1bmN0aW9uIGNyZWF0ZUluaXRpYWxTdGF0ZShvcHRpb25zKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIC8vIG1vZGVsXG4gICAgICBpdGVtczogW10sXG5cbiAgICAgIC8vIHRpbWVvdXQgdXNlZCBmb3IgY2FsbGluZyB1cGRhdGUgaXRlbXNcbiAgICAgIGxpc3RVcGRhdGVUaW1lb3V0OiBudWxsLFxuXG4gICAgICAvLyBxdWV1ZSBvZiBpdGVtcyB3YWl0aW5nIHRvIGJlIHByb2Nlc3NlZFxuICAgICAgcHJvY2Vzc2luZ1F1ZXVlOiBbXSxcblxuICAgICAgLy8gb3B0aW9uc1xuICAgICAgb3B0aW9uczogY3JlYXRlT3B0aW9ucyhvcHRpb25zKVxuICAgIH07XG4gIH07XG5cbiAgdmFyIGZyb21DYW1lbHMgPSBmdW5jdGlvbiBmcm9tQ2FtZWxzKHN0cmluZykge1xuICAgIHZhciBzZXBhcmF0b3IgPVxuICAgICAgYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiAnLSc7XG4gICAgcmV0dXJuIHN0cmluZ1xuICAgICAgLnNwbGl0KC8oPz1bQS1aXSkvKVxuICAgICAgLm1hcChmdW5jdGlvbihwYXJ0KSB7XG4gICAgICAgIHJldHVybiBwYXJ0LnRvTG93ZXJDYXNlKCk7XG4gICAgICB9KVxuICAgICAgLmpvaW4oc2VwYXJhdG9yKTtcbiAgfTtcblxuICB2YXIgY3JlYXRlT3B0aW9uQVBJID0gZnVuY3Rpb24gY3JlYXRlT3B0aW9uQVBJKHN0b3JlLCBvcHRpb25zKSB7XG4gICAgdmFyIG9iaiA9IHt9O1xuICAgIGZvcmluKG9wdGlvbnMsIGZ1bmN0aW9uKGtleSkge1xuICAgICAgb2JqW2tleV0gPSB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICAgIHJldHVybiBzdG9yZS5nZXRTdGF0ZSgpLm9wdGlvbnNba2V5XTtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiBzZXQodmFsdWUpIHtcbiAgICAgICAgICBzdG9yZS5kaXNwYXRjaCgnU0VUXycgKyBmcm9tQ2FtZWxzKGtleSwgJ18nKS50b1VwcGVyQ2FzZSgpLCB7XG4gICAgICAgICAgICB2YWx1ZTogdmFsdWVcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9KTtcbiAgICByZXR1cm4gb2JqO1xuICB9O1xuXG4gIHZhciBjcmVhdGVPcHRpb25BY3Rpb25zID0gZnVuY3Rpb24gY3JlYXRlT3B0aW9uQWN0aW9ucyhvcHRpb25zKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKGRpc3BhdGNoLCBxdWVyeSwgc3RhdGUpIHtcbiAgICAgIHZhciBvYmogPSB7fTtcbiAgICAgIGZvcmluKG9wdGlvbnMsIGZ1bmN0aW9uKGtleSkge1xuICAgICAgICB2YXIgbmFtZSA9IGZyb21DYW1lbHMoa2V5LCAnXycpLnRvVXBwZXJDYXNlKCk7XG5cbiAgICAgICAgb2JqWydTRVRfJyArIG5hbWVdID0gZnVuY3Rpb24oYWN0aW9uKSB7XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHN0YXRlLm9wdGlvbnNba2V5XSA9IGFjdGlvbi52YWx1ZTtcbiAgICAgICAgICB9IGNhdGNoIChlKSB7fSAvLyBub3BlLCBmYWlsZWRcblxuICAgICAgICAgIC8vIHdlIHN1Y2Nlc3NmdWxseSBzZXQgdGhlIHZhbHVlIG9mIHRoaXMgb3B0aW9uXG4gICAgICAgICAgZGlzcGF0Y2goJ0RJRF9TRVRfJyArIG5hbWUsIHsgdmFsdWU6IHN0YXRlLm9wdGlvbnNba2V5XSB9KTtcbiAgICAgICAgfTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIG9iajtcbiAgICB9O1xuICB9O1xuXG4gIHZhciBjcmVhdGVPcHRpb25RdWVyaWVzID0gZnVuY3Rpb24gY3JlYXRlT3B0aW9uUXVlcmllcyhvcHRpb25zKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKHN0YXRlKSB7XG4gICAgICB2YXIgb2JqID0ge307XG4gICAgICBmb3JpbihvcHRpb25zLCBmdW5jdGlvbihrZXkpIHtcbiAgICAgICAgb2JqWydHRVRfJyArIGZyb21DYW1lbHMoa2V5LCAnXycpLnRvVXBwZXJDYXNlKCldID0gZnVuY3Rpb24oYWN0aW9uKSB7XG4gICAgICAgICAgcmV0dXJuIHN0YXRlLm9wdGlvbnNba2V5XTtcbiAgICAgICAgfTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIG9iajtcbiAgICB9O1xuICB9O1xuXG4gIHZhciBJbnRlcmFjdGlvbk1ldGhvZCA9IHtcbiAgICBBUEk6IDEsXG4gICAgRFJPUDogMixcbiAgICBCUk9XU0U6IDMsXG4gICAgUEFTVEU6IDQsXG4gICAgTk9ORTogNVxuICB9O1xuXG4gIHZhciBnZXRVbmlxdWVJZCA9IGZ1bmN0aW9uIGdldFVuaXF1ZUlkKCkge1xuICAgIHJldHVybiBNYXRoLnJhbmRvbSgpXG4gICAgICAudG9TdHJpbmcoMzYpXG4gICAgICAuc3Vic3RyKDIsIDkpO1xuICB9O1xuXG4gIHZhciBhcnJheVJlbW92ZSA9IGZ1bmN0aW9uIGFycmF5UmVtb3ZlKGFyciwgaW5kZXgpIHtcbiAgICByZXR1cm4gYXJyLnNwbGljZShpbmRleCwgMSk7XG4gIH07XG5cbiAgdmFyIG9uID0gZnVuY3Rpb24gb24oKSB7XG4gICAgdmFyIGxpc3RlbmVycyA9IFtdO1xuICAgIHZhciBvZmYgPSBmdW5jdGlvbiBvZmYoZXZlbnQsIGNiKSB7XG4gICAgICBhcnJheVJlbW92ZShcbiAgICAgICAgbGlzdGVuZXJzLFxuICAgICAgICBsaXN0ZW5lcnMuZmluZEluZGV4KGZ1bmN0aW9uKGxpc3RlbmVyKSB7XG4gICAgICAgICAgcmV0dXJuIGxpc3RlbmVyLmV2ZW50ID09PSBldmVudCAmJiAobGlzdGVuZXIuY2IgPT09IGNiIHx8ICFjYik7XG4gICAgICAgIH0pXG4gICAgICApO1xuICAgIH07XG4gICAgcmV0dXJuIHtcbiAgICAgIGZpcmU6IGZ1bmN0aW9uIGZpcmUoZXZlbnQpIHtcbiAgICAgICAgZm9yIChcbiAgICAgICAgICB2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsXG4gICAgICAgICAgICBhcmdzID0gbmV3IEFycmF5KF9sZW4gPiAxID8gX2xlbiAtIDEgOiAwKSxcbiAgICAgICAgICAgIF9rZXkgPSAxO1xuICAgICAgICAgIF9rZXkgPCBfbGVuO1xuICAgICAgICAgIF9rZXkrK1xuICAgICAgICApIHtcbiAgICAgICAgICBhcmdzW19rZXkgLSAxXSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICAgICAgfVxuICAgICAgICBsaXN0ZW5lcnNcbiAgICAgICAgICAuZmlsdGVyKGZ1bmN0aW9uKGxpc3RlbmVyKSB7XG4gICAgICAgICAgICByZXR1cm4gbGlzdGVuZXIuZXZlbnQgPT09IGV2ZW50O1xuICAgICAgICAgIH0pXG4gICAgICAgICAgLm1hcChmdW5jdGlvbihsaXN0ZW5lcikge1xuICAgICAgICAgICAgcmV0dXJuIGxpc3RlbmVyLmNiO1xuICAgICAgICAgIH0pXG4gICAgICAgICAgLmZvckVhY2goZnVuY3Rpb24oY2IpIHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgIGNiLmFwcGx5KHZvaWQgMCwgYXJncyk7XG4gICAgICAgICAgICB9LCAwKTtcbiAgICAgICAgICB9KTtcbiAgICAgIH0sXG4gICAgICBvbjogZnVuY3Rpb24gb24oZXZlbnQsIGNiKSB7XG4gICAgICAgIGxpc3RlbmVycy5wdXNoKHsgZXZlbnQ6IGV2ZW50LCBjYjogY2IgfSk7XG4gICAgICB9LFxuICAgICAgb25PbmNlOiBmdW5jdGlvbiBvbk9uY2UoZXZlbnQsIF9jYikge1xuICAgICAgICBsaXN0ZW5lcnMucHVzaCh7XG4gICAgICAgICAgZXZlbnQ6IGV2ZW50LFxuICAgICAgICAgIGNiOiBmdW5jdGlvbiBjYigpIHtcbiAgICAgICAgICAgIG9mZihldmVudCwgX2NiKTtcbiAgICAgICAgICAgIF9jYi5hcHBseSh2b2lkIDAsIGFyZ3VtZW50cyk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0sXG4gICAgICBvZmY6IG9mZlxuICAgIH07XG4gIH07XG5cbiAgdmFyIGNvcHlPYmplY3RQcm9wZXJ0aWVzVG9PYmplY3QgPSBmdW5jdGlvbiBjb3B5T2JqZWN0UHJvcGVydGllc1RvT2JqZWN0KFxuICAgIHNyYyxcbiAgICB0YXJnZXQsXG4gICAgZXhjbHVkZWRcbiAgKSB7XG4gICAgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoc3JjKVxuICAgICAgLmZpbHRlcihmdW5jdGlvbihwcm9wZXJ0eSkge1xuICAgICAgICByZXR1cm4gIWV4Y2x1ZGVkLmluY2x1ZGVzKHByb3BlcnR5KTtcbiAgICAgIH0pXG4gICAgICAuZm9yRWFjaChmdW5jdGlvbihrZXkpIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShcbiAgICAgICAgICB0YXJnZXQsXG4gICAgICAgICAga2V5LFxuICAgICAgICAgIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc3JjLCBrZXkpXG4gICAgICAgICk7XG4gICAgICB9KTtcbiAgfTtcblxuICB2YXIgUFJJVkFURSA9IFtcbiAgICAnZmlyZScsXG4gICAgJ3Byb2Nlc3MnLFxuICAgICdyZXZlcnQnLFxuICAgICdsb2FkJyxcbiAgICAnb24nLFxuICAgICdvZmYnLFxuICAgICdvbk9uY2UnLFxuICAgICdyZXRyeUxvYWQnLFxuICAgICdleHRlbmQnLFxuICAgICdhcmNoaXZlJyxcbiAgICAnYXJjaGl2ZWQnLFxuICAgICdyZWxlYXNlJyxcbiAgICAncmVsZWFzZWQnLFxuICAgICdyZXF1ZXN0UHJvY2Vzc2luZycsXG4gICAgJ2ZyZWV6ZSdcbiAgXTtcblxuICB2YXIgY3JlYXRlSXRlbUFQSSA9IGZ1bmN0aW9uIGNyZWF0ZUl0ZW1BUEkoaXRlbSkge1xuICAgIHZhciBhcGkgPSB7fTtcbiAgICBjb3B5T2JqZWN0UHJvcGVydGllc1RvT2JqZWN0KGl0ZW0sIGFwaSwgUFJJVkFURSk7XG4gICAgcmV0dXJuIGFwaTtcbiAgfTtcblxuICB2YXIgcmVtb3ZlUmVsZWFzZWRJdGVtcyA9IGZ1bmN0aW9uIHJlbW92ZVJlbGVhc2VkSXRlbXMoaXRlbXMpIHtcbiAgICBpdGVtcy5mb3JFYWNoKGZ1bmN0aW9uKGl0ZW0sIGluZGV4KSB7XG4gICAgICBpZiAoaXRlbS5yZWxlYXNlZCkge1xuICAgICAgICBhcnJheVJlbW92ZShpdGVtcywgaW5kZXgpO1xuICAgICAgfVxuICAgIH0pO1xuICB9O1xuXG4gIHZhciBJdGVtU3RhdHVzID0ge1xuICAgIElOSVQ6IDEsXG4gICAgSURMRTogMixcbiAgICBQUk9DRVNTSU5HX1FVRVVFRDogOSxcbiAgICBQUk9DRVNTSU5HOiAzLFxuICAgIFBST0NFU1NJTkdfQ09NUExFVEU6IDUsXG4gICAgUFJPQ0VTU0lOR19FUlJPUjogNixcbiAgICBQUk9DRVNTSU5HX1JFVkVSVF9FUlJPUjogMTAsXG4gICAgTE9BRElORzogNyxcbiAgICBMT0FEX0VSUk9SOiA4XG4gIH07XG5cbiAgdmFyIEZpbGVPcmlnaW4gPSB7XG4gICAgSU5QVVQ6IDEsXG4gICAgTElNQk86IDIsXG4gICAgTE9DQUw6IDNcbiAgfTtcblxuICB2YXIgZ2V0Tm9uTnVtZXJpYyA9IGZ1bmN0aW9uIGdldE5vbk51bWVyaWMoc3RyKSB7XG4gICAgcmV0dXJuIC9bXjAtOV0rLy5leGVjKHN0cik7XG4gIH07XG5cbiAgdmFyIGdldERlY2ltYWxTZXBhcmF0b3IgPSBmdW5jdGlvbiBnZXREZWNpbWFsU2VwYXJhdG9yKCkge1xuICAgIHJldHVybiBnZXROb25OdW1lcmljKCgxLjEpLnRvTG9jYWxlU3RyaW5nKCkpWzBdO1xuICB9O1xuXG4gIHZhciBnZXRUaG91c2FuZHNTZXBhcmF0b3IgPSBmdW5jdGlvbiBnZXRUaG91c2FuZHNTZXBhcmF0b3IoKSB7XG4gICAgLy8gQWRkZWQgZm9yIGJyb3dzZXJzIHRoYXQgZG8gbm90IHJldHVybiB0aGUgdGhvdXNhbmRzIHNlcGFyYXRvciAoaGFwcGVuZCBvbiBuYXRpdmUgYnJvd3NlciBBbmRyb2lkIDQuNC40KVxuICAgIC8vIFdlIGNoZWNrIGFnYWluc3QgdGhlIG5vcm1hbCB0b1N0cmluZyBvdXRwdXQgYW5kIGlmIHRoZXkncmUgdGhlIHNhbWUgcmV0dXJuIGEgY29tbWEgd2hlbiBkZWNpbWFsIHNlcGFyYXRvciBpcyBhIGRvdFxuICAgIHZhciBkZWNpbWFsU2VwYXJhdG9yID0gZ2V0RGVjaW1hbFNlcGFyYXRvcigpO1xuICAgIHZhciB0aG91c2FuZHNTdHJpbmdXaXRoU2VwYXJhdG9yID0gKDEwMDAuMCkudG9Mb2NhbGVTdHJpbmcoKTtcbiAgICB2YXIgdGhvdXNhbmRzU3RyaW5nV2l0aG91dFNlcGFyYXRvciA9ICgxMDAwLjApLnRvU3RyaW5nKCk7XG4gICAgaWYgKHRob3VzYW5kc1N0cmluZ1dpdGhTZXBhcmF0b3IgIT09IHRob3VzYW5kc1N0cmluZ1dpdGhvdXRTZXBhcmF0b3IpIHtcbiAgICAgIHJldHVybiBnZXROb25OdW1lcmljKHRob3VzYW5kc1N0cmluZ1dpdGhTZXBhcmF0b3IpWzBdO1xuICAgIH1cbiAgICByZXR1cm4gZGVjaW1hbFNlcGFyYXRvciA9PT0gJy4nID8gJywnIDogJy4nO1xuICB9O1xuXG4gIHZhciBUeXBlID0ge1xuICAgIEJPT0xFQU46ICdib29sZWFuJyxcbiAgICBJTlQ6ICdpbnQnLFxuICAgIE5VTUJFUjogJ251bWJlcicsXG4gICAgU1RSSU5HOiAnc3RyaW5nJyxcbiAgICBBUlJBWTogJ2FycmF5JyxcbiAgICBPQkpFQ1Q6ICdvYmplY3QnLFxuICAgIEZVTkNUSU9OOiAnZnVuY3Rpb24nLFxuICAgIEFDVElPTjogJ2FjdGlvbicsXG4gICAgU0VSVkVSX0FQSTogJ3NlcnZlcmFwaScsXG4gICAgUkVHRVg6ICdyZWdleCdcbiAgfTtcblxuICAvLyBhbGwgcmVnaXN0ZXJlZCBmaWx0ZXJzXG4gIHZhciBmaWx0ZXJzID0gW107XG5cbiAgLy8gbG9vcHMgb3ZlciBtYXRjaGluZyBmaWx0ZXJzIGFuZCBwYXNzZXMgb3B0aW9ucyB0byBlYWNoIGZpbHRlciwgcmV0dXJuaW5nIHRoZSBtYXBwZWQgcmVzdWx0c1xuICB2YXIgYXBwbHlGaWx0ZXJDaGFpbiA9IGZ1bmN0aW9uIGFwcGx5RmlsdGVyQ2hhaW4oa2V5LCB2YWx1ZSwgdXRpbHMpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAvLyBmaW5kIG1hdGNoaW5nIGZpbHRlcnMgZm9yIHRoaXMga2V5XG4gICAgICB2YXIgbWF0Y2hpbmdGaWx0ZXJzID0gZmlsdGVyc1xuICAgICAgICAuZmlsdGVyKGZ1bmN0aW9uKGYpIHtcbiAgICAgICAgICByZXR1cm4gZi5rZXkgPT09IGtleTtcbiAgICAgICAgfSlcbiAgICAgICAgLm1hcChmdW5jdGlvbihmKSB7XG4gICAgICAgICAgcmV0dXJuIGYuY2I7XG4gICAgICAgIH0pO1xuXG4gICAgICAvLyByZXNvbHZlIG5vd1xuICAgICAgaWYgKG1hdGNoaW5nRmlsdGVycy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgcmVzb2x2ZSh2YWx1ZSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgLy8gZmlyc3QgZmlsdGVyIHRvIGtpY2sgdGhpbmdzIG9mXG4gICAgICB2YXIgaW5pdGlhbEZpbHRlciA9IG1hdGNoaW5nRmlsdGVycy5zaGlmdCgpO1xuXG4gICAgICAvLyBjaGFpbiBmaWx0ZXJzXG4gICAgICBtYXRjaGluZ0ZpbHRlcnNcbiAgICAgICAgLnJlZHVjZShcbiAgICAgICAgICAvLyBsb29wIG92ZXIgcHJvbWlzZXMgcGFzc2luZyB2YWx1ZSB0byBuZXh0IHByb21pc2VcbiAgICAgICAgICBmdW5jdGlvbihjdXJyZW50LCBuZXh0KSB7XG4gICAgICAgICAgICByZXR1cm4gY3VycmVudC50aGVuKGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgICAgICAgIHJldHVybiBuZXh0KHZhbHVlLCB1dGlscyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9LFxuXG4gICAgICAgICAgLy8gY2FsbCBpbml0aWFsIGZpbHRlciwgd2lsbCByZXR1cm4gYSBwcm9taXNlXG4gICAgICAgICAgaW5pdGlhbEZpbHRlcih2YWx1ZSwgdXRpbHMpXG5cbiAgICAgICAgICAvLyBhbGwgZXhlY3V0ZWRcbiAgICAgICAgKVxuICAgICAgICAudGhlbihmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICAgIHJldHVybiByZXNvbHZlKHZhbHVlKTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKGZ1bmN0aW9uKGVycm9yKSB7XG4gICAgICAgICAgcmV0dXJuIHJlamVjdChlcnJvcik7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuICB9O1xuXG4gIHZhciBhcHBseUZpbHRlcnMgPSBmdW5jdGlvbiBhcHBseUZpbHRlcnMoa2V5LCB2YWx1ZSwgdXRpbHMpIHtcbiAgICByZXR1cm4gZmlsdGVyc1xuICAgICAgLmZpbHRlcihmdW5jdGlvbihmKSB7XG4gICAgICAgIHJldHVybiBmLmtleSA9PT0ga2V5O1xuICAgICAgfSlcbiAgICAgIC5tYXAoZnVuY3Rpb24oZikge1xuICAgICAgICByZXR1cm4gZi5jYih2YWx1ZSwgdXRpbHMpO1xuICAgICAgfSk7XG4gIH07XG5cbiAgLy8gYWRkcyBhIG5ldyBmaWx0ZXIgdG8gdGhlIGxpc3RcbiAgdmFyIGFkZEZpbHRlciA9IGZ1bmN0aW9uIGFkZEZpbHRlcihrZXksIGNiKSB7XG4gICAgcmV0dXJuIGZpbHRlcnMucHVzaCh7IGtleToga2V5LCBjYjogY2IgfSk7XG4gIH07XG5cbiAgdmFyIGV4dGVuZERlZmF1bHRPcHRpb25zID0gZnVuY3Rpb24gZXh0ZW5kRGVmYXVsdE9wdGlvbnMoYWRkaXRpb25hbE9wdGlvbnMpIHtcbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihkZWZhdWx0T3B0aW9ucywgYWRkaXRpb25hbE9wdGlvbnMpO1xuICB9O1xuXG4gIHZhciBnZXRPcHRpb25zID0gZnVuY3Rpb24gZ2V0T3B0aW9ucygpIHtcbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgZGVmYXVsdE9wdGlvbnMpO1xuICB9O1xuXG4gIHZhciBzZXRPcHRpb25zID0gZnVuY3Rpb24gc2V0T3B0aW9ucyhvcHRzKSB7XG4gICAgZm9yaW4ob3B0cywgZnVuY3Rpb24oa2V5LCB2YWx1ZSkge1xuICAgICAgLy8ga2V5IGRvZXMgbm90IGV4aXN0LCBzbyB0aGlzIG9wdGlvbiBjYW5ub3QgYmUgc2V0XG4gICAgICBpZiAoIWRlZmF1bHRPcHRpb25zW2tleV0pIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgZGVmYXVsdE9wdGlvbnNba2V5XVswXSA9IGdldFZhbHVlQnlUeXBlKFxuICAgICAgICB2YWx1ZSxcbiAgICAgICAgZGVmYXVsdE9wdGlvbnNba2V5XVswXSxcbiAgICAgICAgZGVmYXVsdE9wdGlvbnNba2V5XVsxXVxuICAgICAgKTtcbiAgICB9KTtcbiAgfTtcblxuICAvLyBkZWZhdWx0IG9wdGlvbnMgb24gYXBwXG4gIHZhciBkZWZhdWx0T3B0aW9ucyA9IHtcbiAgICAvLyB0aGUgaWQgdG8gYWRkIHRvIHRoZSByb290IGVsZW1lbnRcbiAgICBpZDogW251bGwsIFR5cGUuU1RSSU5HXSxcblxuICAgIC8vIGlucHV0IGZpZWxkIG5hbWUgdG8gdXNlXG4gICAgbmFtZTogWydmaWxlcG9uZCcsIFR5cGUuU1RSSU5HXSxcblxuICAgIC8vIGRpc2FibGUgdGhlIGZpZWxkXG4gICAgZGlzYWJsZWQ6IFtmYWxzZSwgVHlwZS5CT09MRUFOXSxcblxuICAgIC8vIGNsYXNzbmFtZSB0byBwdXQgb24gd3JhcHBlclxuICAgIGNsYXNzTmFtZTogW251bGwsIFR5cGUuU1RSSU5HXSxcblxuICAgIC8vIGlzIHRoZSBmaWVsZCByZXF1aXJlZFxuICAgIHJlcXVpcmVkOiBbZmFsc2UsIFR5cGUuQk9PTEVBTl0sXG5cbiAgICAvLyBBbGxvdyBtZWRpYSBjYXB0dXJlIHdoZW4gdmFsdWUgaXMgc2V0XG4gICAgY2FwdHVyZU1ldGhvZDogW251bGwsIFR5cGUuU1RSSU5HXSxcbiAgICAvLyAtIFwiY2FtZXJhXCIsIFwibWljcm9waG9uZVwiIG9yIFwiY2FtY29yZGVyXCIsXG4gICAgLy8gLSBEb2VzIG5vdCB3b3JrIHdpdGggbXVsdGlwbGUgb24gYXBwbGUgZGV2aWNlc1xuICAgIC8vIC0gSWYgc2V0LCBhY2NlcHRlZEZpbGVUeXBlcyBtdXN0IGJlIG1hZGUgdG8gbWF0Y2ggd2l0aCBtZWRpYSB3aWxkY2FyZCBcImltYWdlLypcIiwgXCJhdWRpby8qXCIgb3IgXCJ2aWRlby8qXCJcblxuICAgIC8vIEZlYXR1cmUgdG9nZ2xlc1xuICAgIGFsbG93RHJvcDogW3RydWUsIFR5cGUuQk9PTEVBTl0sIC8vIEFsbG93IGRyb3BwaW5nIG9mIGZpbGVzXG4gICAgYWxsb3dCcm93c2U6IFt0cnVlLCBUeXBlLkJPT0xFQU5dLCAvLyBBbGxvdyBicm93c2luZyB0aGUgZmlsZSBzeXN0ZW1cbiAgICBhbGxvd1Bhc3RlOiBbdHJ1ZSwgVHlwZS5CT09MRUFOXSwgLy8gQWxsb3cgcGFzdGluZyBmaWxlc1xuICAgIGFsbG93TXVsdGlwbGU6IFtmYWxzZSwgVHlwZS5CT09MRUFOXSwgLy8gQWxsb3cgbXVsdGlwbGUgZmlsZXMgKGRpc2FibGVkIGJ5IGRlZmF1bHQsIGFzIG11bHRpcGxlIGF0dHJpYnV0ZSBpcyBhbHNvIHJlcXVpcmVkIG9uIGlucHV0IHRvIGFsbG93IG11bHRpcGxlKVxuICAgIGFsbG93UmVwbGFjZTogW3RydWUsIFR5cGUuQk9PTEVBTl0sIC8vIEFsbG93IGRyb3BwaW5nIGEgZmlsZSBvbiBvdGhlciBmaWxlIHRvIHJlcGxhY2UgaXQgKG9ubHkgd29ya3Mgd2hlbiBtdWx0aXBsZSBpcyBzZXQgdG8gZmFsc2UpXG4gICAgYWxsb3dSZXZlcnQ6IFt0cnVlLCBUeXBlLkJPT0xFQU5dLCAvLyBBbGxvd3MgdXNlciB0byByZXZlcnQgZmlsZSB1cGxvYWRcblxuICAgIC8vIFJldmVydCBtb2RlXG4gICAgZm9yY2VSZXZlcnQ6IFtmYWxzZSwgVHlwZS5CT09MRUFOXSwgLy8gU2V0IHRvICdmb3JjZScgdG8gcmVxdWlyZSB0aGUgZmlsZSB0byBiZSByZXZlcnRlZCBiZWZvcmUgcmVtb3ZhbFxuXG4gICAgLy8gSW5wdXQgcmVxdWlyZW1lbnRzXG4gICAgbWF4RmlsZXM6IFtudWxsLCBUeXBlLklOVF0sIC8vIE1heCBudW1iZXIgb2YgZmlsZXNcbiAgICBjaGVja1ZhbGlkaXR5OiBbZmFsc2UsIFR5cGUuQk9PTEVBTl0sIC8vIEVuYWJsZXMgY3VzdG9tIHZhbGlkaXR5IG1lc3NhZ2VzXG5cbiAgICAvLyBXaGVyZSB0byBwdXQgZmlsZVxuICAgIGl0ZW1JbnNlcnRMb2NhdGlvbkZyZWVkb206IFt0cnVlLCBUeXBlLkJPT0xFQU5dLCAvLyBTZXQgdG8gZmFsc2UgdG8gYWx3YXlzIGFkZCBpdGVtcyB0byBiZWdpbiBvciBlbmQgb2YgbGlzdFxuICAgIGl0ZW1JbnNlcnRMb2NhdGlvbjogWydiZWZvcmUnLCBUeXBlLlNUUklOR10sIC8vIERlZmF1bHQgaW5kZXggaW4gbGlzdCB0byBhZGQgaXRlbXMgdGhhdCBoYXZlIGJlZW4gZHJvcHBlZCBhdCB0aGUgdG9wIG9mIHRoZSBsaXN0XG4gICAgaXRlbUluc2VydEludGVydmFsOiBbNzUsIFR5cGUuSU5UXSxcblxuICAgIC8vIERyYWcgJ24gRHJvcCByZWxhdGVkXG4gICAgZHJvcE9uUGFnZTogW2ZhbHNlLCBUeXBlLkJPT0xFQU5dLCAvLyBBbGxvdyBkcm9wcGluZyBvZiBmaWxlcyBhbnl3aGVyZSBvbiBwYWdlIChwcmV2ZW50cyBicm93c2VyIGZyb20gb3BlbmluZyBmaWxlIGlmIGRyb3BwZWQgb3V0c2lkZSBvZiBVcClcbiAgICBkcm9wT25FbGVtZW50OiBbdHJ1ZSwgVHlwZS5CT09MRUFOXSwgLy8gRHJvcCBuZWVkcyB0byBoYXBwZW4gb24gZWxlbWVudCAoc2V0IHRvIGZhbHNlIHRvIGFsc28gbG9hZCBkcm9wcyBvdXRzaWRlIG9mIFVwKVxuICAgIGRyb3BWYWxpZGF0aW9uOiBbZmFsc2UsIFR5cGUuQk9PTEVBTl0sIC8vIEVuYWJsZSBvciBkaXNhYmxlIHZhbGlkYXRpbmcgZmlsZXMgb24gZHJvcFxuICAgIGlnbm9yZWRGaWxlczogW1snLmRzX3N0b3JlJywgJ3RodW1icy5kYicsICdkZXNrdG9wLmluaSddLCBUeXBlLkFSUkFZXSxcblxuICAgIC8vIFVwbG9hZCByZWxhdGVkXG4gICAgaW5zdGFudFVwbG9hZDogW3RydWUsIFR5cGUuQk9PTEVBTl0sIC8vIFNob3VsZCB1cGxvYWQgZmlsZXMgaW1taWRpYXRlbHkgb24gZHJvcFxuICAgIG1heFBhcmFsbGVsVXBsb2FkczogWzIsIFR5cGUuSU5UXSwgLy8gTWF4aW11bSBmaWxlcyB0byB1cGxvYWQgaW4gcGFyYWxsZWxcblxuICAgIC8vIFRoZSBzZXJ2ZXIgYXBpIGVuZCBwb2ludHMgdG8gdXNlIGZvciB1cGxvYWRpbmcgKHNlZSBkb2NzKVxuICAgIHNlcnZlcjogW251bGwsIFR5cGUuU0VSVkVSX0FQSV0sXG5cbiAgICAvLyBMYWJlbHMgYW5kIHN0YXR1cyBtZXNzYWdlc1xuICAgIGxhYmVsRGVjaW1hbFNlcGFyYXRvcjogW2dldERlY2ltYWxTZXBhcmF0b3IoKSwgVHlwZS5TVFJJTkddLCAvLyBEZWZhdWx0IGlzIGxvY2FsZSBzZXBhcmF0b3JcbiAgICBsYWJlbFRob3VzYW5kc1NlcGFyYXRvcjogW2dldFRob3VzYW5kc1NlcGFyYXRvcigpLCBUeXBlLlNUUklOR10sIC8vIERlZmF1bHQgaXMgbG9jYWxlIHNlcGFyYXRvclxuXG4gICAgbGFiZWxJZGxlOiBbXG4gICAgICAnRHJhZyAmIERyb3AgeW91ciBmaWxlcyBvciA8c3BhbiBjbGFzcz1cImZpbGVwb25kLS1sYWJlbC1hY3Rpb25cIj5Ccm93c2U8L3NwYW4+JyxcbiAgICAgIFR5cGUuU1RSSU5HXG4gICAgXSxcbiAgICBsYWJlbEludmFsaWRGaWVsZDogWydGaWVsZCBjb250YWlucyBpbnZhbGlkIGZpbGVzJywgVHlwZS5TVFJJTkddLFxuICAgIGxhYmVsRmlsZVdhaXRpbmdGb3JTaXplOiBbJ1dhaXRpbmcgZm9yIHNpemUnLCBUeXBlLlNUUklOR10sXG4gICAgbGFiZWxGaWxlU2l6ZU5vdEF2YWlsYWJsZTogWydTaXplIG5vdCBhdmFpbGFibGUnLCBUeXBlLlNUUklOR10sXG4gICAgbGFiZWxGaWxlQ291bnRTaW5ndWxhcjogWydmaWxlIGluIGxpc3QnLCBUeXBlLlNUUklOR10sXG4gICAgbGFiZWxGaWxlQ291bnRQbHVyYWw6IFsnZmlsZXMgaW4gbGlzdCcsIFR5cGUuU1RSSU5HXSxcbiAgICBsYWJlbEZpbGVMb2FkaW5nOiBbJ0xvYWRpbmcnLCBUeXBlLlNUUklOR10sXG4gICAgbGFiZWxGaWxlQWRkZWQ6IFsnQWRkZWQnLCBUeXBlLlNUUklOR10sIC8vIGFzc2lzdGl2ZSBvbmx5XG4gICAgbGFiZWxGaWxlTG9hZEVycm9yOiBbJ0Vycm9yIGR1cmluZyBsb2FkJywgVHlwZS5TVFJJTkddLFxuICAgIGxhYmVsRmlsZVJlbW92ZWQ6IFsnUmVtb3ZlZCcsIFR5cGUuU1RSSU5HXSwgLy8gYXNzaXN0aXZlIG9ubHlcbiAgICBsYWJlbEZpbGVSZW1vdmVFcnJvcjogWydFcnJvciBkdXJpbmcgcmVtb3ZlJywgVHlwZS5TVFJJTkddLFxuICAgIGxhYmVsRmlsZVByb2Nlc3Npbmc6IFsnVXBsb2FkaW5nJywgVHlwZS5TVFJJTkddLFxuICAgIGxhYmVsRmlsZVByb2Nlc3NpbmdDb21wbGV0ZTogWydVcGxvYWQgY29tcGxldGUnLCBUeXBlLlNUUklOR10sXG4gICAgbGFiZWxGaWxlUHJvY2Vzc2luZ0Fib3J0ZWQ6IFsnVXBsb2FkIGNhbmNlbGxlZCcsIFR5cGUuU1RSSU5HXSxcbiAgICBsYWJlbEZpbGVQcm9jZXNzaW5nRXJyb3I6IFsnRXJyb3IgZHVyaW5nIHVwbG9hZCcsIFR5cGUuU1RSSU5HXSxcbiAgICBsYWJlbEZpbGVQcm9jZXNzaW5nUmV2ZXJ0RXJyb3I6IFsnRXJyb3IgZHVyaW5nIHJldmVydCcsIFR5cGUuU1RSSU5HXSxcblxuICAgIGxhYmVsVGFwVG9DYW5jZWw6IFsndGFwIHRvIGNhbmNlbCcsIFR5cGUuU1RSSU5HXSxcbiAgICBsYWJlbFRhcFRvUmV0cnk6IFsndGFwIHRvIHJldHJ5JywgVHlwZS5TVFJJTkddLFxuICAgIGxhYmVsVGFwVG9VbmRvOiBbJ3RhcCB0byB1bmRvJywgVHlwZS5TVFJJTkddLFxuXG4gICAgbGFiZWxCdXR0b25SZW1vdmVJdGVtOiBbJ1JlbW92ZScsIFR5cGUuU1RSSU5HXSxcbiAgICBsYWJlbEJ1dHRvbkFib3J0SXRlbUxvYWQ6IFsnQWJvcnQnLCBUeXBlLlNUUklOR10sXG4gICAgbGFiZWxCdXR0b25SZXRyeUl0ZW1Mb2FkOiBbJ1JldHJ5JywgVHlwZS5TVFJJTkddLFxuICAgIGxhYmVsQnV0dG9uQWJvcnRJdGVtUHJvY2Vzc2luZzogWydDYW5jZWwnLCBUeXBlLlNUUklOR10sXG4gICAgbGFiZWxCdXR0b25VbmRvSXRlbVByb2Nlc3Npbmc6IFsnVW5kbycsIFR5cGUuU1RSSU5HXSxcbiAgICBsYWJlbEJ1dHRvblJldHJ5SXRlbVByb2Nlc3Npbmc6IFsnUmV0cnknLCBUeXBlLlNUUklOR10sXG4gICAgbGFiZWxCdXR0b25Qcm9jZXNzSXRlbTogWydVcGxvYWQnLCBUeXBlLlNUUklOR10sXG5cbiAgICAvLyBtYWtlIHN1cmUgd2lkdGggYW5kIGhlaWdodCBwbHVzIHZpZXdwb3ggYXJlIGV2ZW4gbnVtYmVycyBzbyBpY29ucyBhcmUgbmljZWx5IGNlbnRlcmVkXG4gICAgaWNvblJlbW92ZTogW1xuICAgICAgJzxzdmcgd2lkdGg9XCIyNlwiIGhlaWdodD1cIjI2XCIgdmlld0JveD1cIjAgMCAyNiAyNlwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj48cGF0aCBkPVwiTTExLjU4NiAxM2wtMi4yOTMgMi4yOTNhMSAxIDAgMCAwIDEuNDE0IDEuNDE0TDEzIDE0LjQxNGwyLjI5MyAyLjI5M2ExIDEgMCAwIDAgMS40MTQtMS40MTRMMTQuNDE0IDEzbDIuMjkzLTIuMjkzYTEgMSAwIDAgMC0xLjQxNC0xLjQxNEwxMyAxMS41ODZsLTIuMjkzLTIuMjkzYTEgMSAwIDAgMC0xLjQxNCAxLjQxNEwxMS41ODYgMTN6XCIgZmlsbD1cImN1cnJlbnRDb2xvclwiIGZpbGwtcnVsZT1cIm5vbnplcm9cIi8+PC9zdmc+JyxcbiAgICAgIFR5cGUuU1RSSU5HXG4gICAgXSxcblxuICAgIGljb25Qcm9jZXNzOiBbXG4gICAgICAnPHN2ZyB3aWR0aD1cIjI2XCIgaGVpZ2h0PVwiMjZcIiB2aWV3Qm94PVwiMCAwIDI2IDI2XCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPjxwYXRoIGQ9XCJNMTQgMTAuNDE0djMuNTg1YTEgMSAwIDAgMS0yIDB2LTMuNTg1bC0xLjI5MyAxLjI5M2ExIDEgMCAwIDEtMS40MTQtMS40MTVsMy0zYTEgMSAwIDAgMSAxLjQxNCAwbDMgM2ExIDEgMCAwIDEtMS40MTQgMS40MTVMMTQgMTAuNDE0ek05IDE4YTEgMSAwIDAgMSAwLTJoOGExIDEgMCAwIDEgMCAySDl6XCIgZmlsbD1cImN1cnJlbnRDb2xvclwiIGZpbGwtcnVsZT1cImV2ZW5vZGRcIi8+PC9zdmc+JyxcbiAgICAgIFR5cGUuU1RSSU5HXG4gICAgXSxcblxuICAgIGljb25SZXRyeTogW1xuICAgICAgJzxzdmcgd2lkdGg9XCIyNlwiIGhlaWdodD1cIjI2XCIgdmlld0JveD1cIjAgMCAyNiAyNlwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj48cGF0aCBkPVwiTTEwLjgxIDkuMTg1bC0uMDM4LjAyQTQuOTk3IDQuOTk3IDAgMCAwIDggMTMuNjgzYTUgNSAwIDAgMCA1IDUgNSA1IDAgMCAwIDUtNSAxIDEgMCAwIDEgMiAwQTcgNyAwIDEgMSA5LjcyMiA3LjQ5NmwtLjg0Mi0uMjFhLjk5OS45OTkgMCAxIDEgLjQ4NC0xLjk0bDMuMjMuODA2Yy41MzUuMTMzLjg2LjY3NS43MyAxLjIxbC0uODA0IDMuMjMzYS45OTcuOTk3IDAgMCAxLTEuMjEuNzMuOTk3Ljk5NyAwIDAgMS0uNzMtMS4yMWwuMjMtLjkyOHYtLjAwMnpcIiBmaWxsPVwiY3VycmVudENvbG9yXCIgZmlsbC1ydWxlPVwibm9uemVyb1wiLz48L3N2Zz4nLFxuICAgICAgVHlwZS5TVFJJTkdcbiAgICBdLFxuXG4gICAgaWNvblVuZG86IFtcbiAgICAgICc8c3ZnIHdpZHRoPVwiMjZcIiBoZWlnaHQ9XCIyNlwiIHZpZXdCb3g9XCIwIDAgMjYgMjZcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+PHBhdGggZD1cIk05LjE4NSAxMC44MWwuMDItLjAzOEE0Ljk5NyA0Ljk5NyAwIDAgMSAxMy42ODMgOGE1IDUgMCAwIDEgNSA1IDUgNSAwIDAgMS01IDUgMSAxIDAgMCAwIDAgMkE3IDcgMCAxIDAgNy40OTYgOS43MjJsLS4yMS0uODQyYS45OTkuOTk5IDAgMSAwLTEuOTQuNDg0bC44MDYgMy4yM2MuMTMzLjUzNS42NzUuODYgMS4yMS43M2wzLjIzMy0uODAzYS45OTcuOTk3IDAgMCAwIC43My0xLjIxLjk5Ny45OTcgMCAwIDAtMS4yMS0uNzNsLS45MjguMjMtLjAwMi0uMDAxelwiIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBmaWxsLXJ1bGU9XCJub256ZXJvXCIvPjwvc3ZnPicsXG4gICAgICBUeXBlLlNUUklOR1xuICAgIF0sXG5cbiAgICBpY29uRG9uZTogW1xuICAgICAgJzxzdmcgd2lkdGg9XCIyNlwiIGhlaWdodD1cIjI2XCIgdmlld0JveD1cIjAgMCAyNiAyNlwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj48cGF0aCBkPVwiTTE4LjI5MyA5LjI5M2ExIDEgMCAwIDEgMS40MTQgMS40MTRsLTcuMDAyIDdhMSAxIDAgMCAxLTEuNDE0IDBsLTMuOTk4LTRhMSAxIDAgMSAxIDEuNDE0LTEuNDE0TDEyIDE1LjU4Nmw2LjI5NC02LjI5M3pcIiBmaWxsPVwiY3VycmVudENvbG9yXCIgZmlsbC1ydWxlPVwibm9uemVyb1wiLz48L3N2Zz4nLFxuICAgICAgVHlwZS5TVFJJTkdcbiAgICBdLFxuXG4gICAgLy8gZXZlbnQgaGFuZGxlcnNcbiAgICBvbmluaXQ6IFtudWxsLCBUeXBlLkZVTkNUSU9OXSxcbiAgICBvbndhcm5pbmc6IFtudWxsLCBUeXBlLkZVTkNUSU9OXSxcbiAgICBvbmVycm9yOiBbbnVsbCwgVHlwZS5GVU5DVElPTl0sXG4gICAgb25hY3RpdmF0ZWZpbGU6IFtudWxsLCBUeXBlLkZVTkNUSU9OXSxcbiAgICBvbmFkZGZpbGVzdGFydDogW251bGwsIFR5cGUuRlVOQ1RJT05dLFxuICAgIG9uYWRkZmlsZXByb2dyZXNzOiBbbnVsbCwgVHlwZS5GVU5DVElPTl0sXG4gICAgb25hZGRmaWxlOiBbbnVsbCwgVHlwZS5GVU5DVElPTl0sXG4gICAgb25wcm9jZXNzZmlsZXN0YXJ0OiBbbnVsbCwgVHlwZS5GVU5DVElPTl0sXG4gICAgb25wcm9jZXNzZmlsZXByb2dyZXNzOiBbbnVsbCwgVHlwZS5GVU5DVElPTl0sXG4gICAgb25wcm9jZXNzZmlsZWFib3J0OiBbbnVsbCwgVHlwZS5GVU5DVElPTl0sXG4gICAgb25wcm9jZXNzZmlsZXJldmVydDogW251bGwsIFR5cGUuRlVOQ1RJT05dLFxuICAgIG9ucHJvY2Vzc2ZpbGU6IFtudWxsLCBUeXBlLkZVTkNUSU9OXSxcbiAgICBvbnByb2Nlc3NmaWxlczogW251bGwsIFR5cGUuRlVOQ1RJT05dLFxuICAgIG9ucmVtb3ZlZmlsZTogW251bGwsIFR5cGUuRlVOQ1RJT05dLFxuICAgIG9ucHJlcGFyZWZpbGU6IFtudWxsLCBUeXBlLkZVTkNUSU9OXSxcbiAgICBvbnVwZGF0ZWZpbGVzOiBbbnVsbCwgVHlwZS5GVU5DVElPTl0sXG5cbiAgICAvLyBob29rc1xuICAgIGJlZm9yZURyb3BGaWxlOiBbbnVsbCwgVHlwZS5GVU5DVElPTl0sXG4gICAgYmVmb3JlQWRkRmlsZTogW251bGwsIFR5cGUuRlVOQ1RJT05dLFxuICAgIGJlZm9yZVJlbW92ZUZpbGU6IFtudWxsLCBUeXBlLkZVTkNUSU9OXSxcblxuICAgIC8vIHN0eWxlc1xuICAgIHN0eWxlUGFuZWxMYXlvdXQ6IFtudWxsLCBUeXBlLlNUUklOR10sIC8vIG51bGwgJ2ludGVncmF0ZWQnLCAnY29tcGFjdCcsICdjaXJjbGUnXG4gICAgc3R5bGVQYW5lbEFzcGVjdFJhdGlvOiBbbnVsbCwgVHlwZS5TVFJJTkddLCAvLyBudWxsIG9yICczOjInIG9yIDFcbiAgICBzdHlsZUl0ZW1QYW5lbEFzcGVjdFJhdGlvOiBbbnVsbCwgVHlwZS5TVFJJTkddLFxuICAgIHN0eWxlQnV0dG9uUmVtb3ZlSXRlbVBvc2l0aW9uOiBbJ2xlZnQnLCBUeXBlLlNUUklOR10sXG4gICAgc3R5bGVCdXR0b25Qcm9jZXNzSXRlbVBvc2l0aW9uOiBbJ3JpZ2h0JywgVHlwZS5TVFJJTkddLFxuICAgIHN0eWxlTG9hZEluZGljYXRvclBvc2l0aW9uOiBbJ3JpZ2h0JywgVHlwZS5TVFJJTkddLFxuICAgIHN0eWxlUHJvZ3Jlc3NJbmRpY2F0b3JQb3NpdGlvbjogWydyaWdodCcsIFR5cGUuU1RSSU5HXSxcblxuICAgIC8vIGN1c3RvbSBpbml0aWFsIGZpbGVzIGFycmF5XG4gICAgZmlsZXM6IFtbXSwgVHlwZS5BUlJBWV1cbiAgfTtcblxuICB2YXIgZ2V0SXRlbUJ5UXVlcnkgPSBmdW5jdGlvbiBnZXRJdGVtQnlRdWVyeShpdGVtcywgcXVlcnkpIHtcbiAgICAvLyBqdXN0IHJldHVybiBmaXJzdCBpbmRleFxuICAgIGlmIChpc0VtcHR5KHF1ZXJ5KSkge1xuICAgICAgcmV0dXJuIGl0ZW1zWzBdIHx8IG51bGw7XG4gICAgfVxuXG4gICAgLy8gcXVlcnkgaXMgaW5kZXhcbiAgICBpZiAoaXNJbnQocXVlcnkpKSB7XG4gICAgICByZXR1cm4gaXRlbXNbcXVlcnldIHx8IG51bGw7XG4gICAgfVxuXG4gICAgLy8gaWYgcXVlcnkgaXMgaXRlbSwgZ2V0IHRoZSBpZFxuICAgIGlmICh0eXBlb2YgcXVlcnkgPT09ICdvYmplY3QnKSB7XG4gICAgICBxdWVyeSA9IHF1ZXJ5LmlkO1xuICAgIH1cblxuICAgIC8vIGFzc3VtZSBxdWVyeSBpcyBhIHN0cmluZyBhbmQgcmV0dXJuIGl0ZW0gYnkgaWRcbiAgICByZXR1cm4gKFxuICAgICAgaXRlbXMuZmluZChmdW5jdGlvbihpdGVtKSB7XG4gICAgICAgIHJldHVybiBpdGVtLmlkID09PSBxdWVyeTtcbiAgICAgIH0pIHx8IG51bGxcbiAgICApO1xuICB9O1xuXG4gIHZhciBnZXROdW1lcmljQXNwZWN0UmF0aW9Gcm9tU3RyaW5nID0gZnVuY3Rpb24gZ2V0TnVtZXJpY0FzcGVjdFJhdGlvRnJvbVN0cmluZyhcbiAgICBhc3BlY3RSYXRpb1xuICApIHtcbiAgICBpZiAoaXNFbXB0eShhc3BlY3RSYXRpbykpIHtcbiAgICAgIHJldHVybiBhc3BlY3RSYXRpbztcbiAgICB9XG4gICAgaWYgKC86Ly50ZXN0KGFzcGVjdFJhdGlvKSkge1xuICAgICAgdmFyIHBhcnRzID0gYXNwZWN0UmF0aW8uc3BsaXQoJzonKTtcbiAgICAgIHJldHVybiBwYXJ0c1sxXSAvIHBhcnRzWzBdO1xuICAgIH1cbiAgICByZXR1cm4gcGFyc2VGbG9hdChhc3BlY3RSYXRpbyk7XG4gIH07XG5cbiAgdmFyIGdldEFjdGl2ZUl0ZW1zID0gZnVuY3Rpb24gZ2V0QWN0aXZlSXRlbXMoaXRlbXMpIHtcbiAgICByZXR1cm4gaXRlbXMuZmlsdGVyKGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICAgIHJldHVybiAhaXRlbS5hcmNoaXZlZDtcbiAgICB9KTtcbiAgfTtcblxuICB2YXIgU3RhdHVzID0ge1xuICAgIEVNUFRZOiAwLFxuICAgIElETEU6IDEsIC8vIHdhaXRpbmdcbiAgICBFUlJPUjogMiwgLy8gYSBmaWxlIGlzIGluIGVycm9yIHN0YXRlXG4gICAgQlVTWTogMywgLy8gYnVzeSBwcm9jZXNzaW5nIG9yIGxvYWRpbmdcbiAgICBSRUFEWTogNCAvLyBhbGwgZmlsZXMgdXBsb2FkZWRcbiAgfTtcblxuICB2YXIgSVRFTV9FUlJPUiA9IFtcbiAgICBJdGVtU3RhdHVzLkxPQURfRVJST1IsXG4gICAgSXRlbVN0YXR1cy5QUk9DRVNTSU5HX0VSUk9SLFxuICAgIEl0ZW1TdGF0dXMuUFJPQ0VTU0lOR19SRVZFUlRfRVJST1JcbiAgXTtcbiAgdmFyIElURU1fQlVTWSA9IFtcbiAgICBJdGVtU3RhdHVzLkxPQURJTkcsXG4gICAgSXRlbVN0YXR1cy5QUk9DRVNTSU5HLFxuICAgIEl0ZW1TdGF0dXMuUFJPQ0VTU0lOR19RVUVVRUQsXG4gICAgSXRlbVN0YXR1cy5JTklUXG4gIF07XG4gIHZhciBJVEVNX1JFQURZID0gW0l0ZW1TdGF0dXMuUFJPQ0VTU0lOR19DT01QTEVURV07XG5cbiAgdmFyIGlzSXRlbUluRXJyb3JTdGF0ZSA9IGZ1bmN0aW9uIGlzSXRlbUluRXJyb3JTdGF0ZShpdGVtKSB7XG4gICAgcmV0dXJuIElURU1fRVJST1IuaW5jbHVkZXMoaXRlbS5zdGF0dXMpO1xuICB9O1xuICB2YXIgaXNJdGVtSW5CdXN5U3RhdGUgPSBmdW5jdGlvbiBpc0l0ZW1JbkJ1c3lTdGF0ZShpdGVtKSB7XG4gICAgcmV0dXJuIElURU1fQlVTWS5pbmNsdWRlcyhpdGVtLnN0YXR1cyk7XG4gIH07XG4gIHZhciBpc0l0ZW1JblJlYWR5U3RhdGUgPSBmdW5jdGlvbiBpc0l0ZW1JblJlYWR5U3RhdGUoaXRlbSkge1xuICAgIHJldHVybiBJVEVNX1JFQURZLmluY2x1ZGVzKGl0ZW0uc3RhdHVzKTtcbiAgfTtcblxuICB2YXIgcXVlcmllcyA9IGZ1bmN0aW9uIHF1ZXJpZXMoc3RhdGUpIHtcbiAgICByZXR1cm4ge1xuICAgICAgR0VUX1NUQVRVUzogZnVuY3Rpb24gR0VUX1NUQVRVUygpIHtcbiAgICAgICAgdmFyIGl0ZW1zID0gZ2V0QWN0aXZlSXRlbXMoc3RhdGUuaXRlbXMpO1xuICAgICAgICB2YXIgRU1QVFkgPSBTdGF0dXMuRU1QVFksXG4gICAgICAgICAgRVJST1IgPSBTdGF0dXMuRVJST1IsXG4gICAgICAgICAgQlVTWSA9IFN0YXR1cy5CVVNZLFxuICAgICAgICAgIElETEUgPSBTdGF0dXMuSURMRSxcbiAgICAgICAgICBSRUFEWSA9IFN0YXR1cy5SRUFEWTtcblxuICAgICAgICBpZiAoaXRlbXMubGVuZ3RoID09PSAwKSByZXR1cm4gRU1QVFk7XG5cbiAgICAgICAgaWYgKGl0ZW1zLnNvbWUoaXNJdGVtSW5FcnJvclN0YXRlKSkgcmV0dXJuIEVSUk9SO1xuXG4gICAgICAgIGlmIChpdGVtcy5zb21lKGlzSXRlbUluQnVzeVN0YXRlKSkgcmV0dXJuIEJVU1k7XG5cbiAgICAgICAgaWYgKGl0ZW1zLnNvbWUoaXNJdGVtSW5SZWFkeVN0YXRlKSkgcmV0dXJuIFJFQURZO1xuXG4gICAgICAgIHJldHVybiBJRExFO1xuICAgICAgfSxcblxuICAgICAgR0VUX0lURU06IGZ1bmN0aW9uIEdFVF9JVEVNKHF1ZXJ5KSB7XG4gICAgICAgIHJldHVybiBnZXRJdGVtQnlRdWVyeShzdGF0ZS5pdGVtcywgcXVlcnkpO1xuICAgICAgfSxcblxuICAgICAgR0VUX0FDVElWRV9JVEVNOiBmdW5jdGlvbiBHRVRfQUNUSVZFX0lURU0ocXVlcnkpIHtcbiAgICAgICAgcmV0dXJuIGdldEl0ZW1CeVF1ZXJ5KGdldEFjdGl2ZUl0ZW1zKHN0YXRlLml0ZW1zKSwgcXVlcnkpO1xuICAgICAgfSxcblxuICAgICAgR0VUX0FDVElWRV9JVEVNUzogZnVuY3Rpb24gR0VUX0FDVElWRV9JVEVNUyhxdWVyeSkge1xuICAgICAgICByZXR1cm4gZ2V0QWN0aXZlSXRlbXMoc3RhdGUuaXRlbXMpO1xuICAgICAgfSxcblxuICAgICAgR0VUX0lURU1TOiBmdW5jdGlvbiBHRVRfSVRFTVMocXVlcnkpIHtcbiAgICAgICAgcmV0dXJuIHN0YXRlLml0ZW1zO1xuICAgICAgfSxcblxuICAgICAgR0VUX0lURU1fTkFNRTogZnVuY3Rpb24gR0VUX0lURU1fTkFNRShxdWVyeSkge1xuICAgICAgICB2YXIgaXRlbSA9IGdldEl0ZW1CeVF1ZXJ5KHN0YXRlLml0ZW1zLCBxdWVyeSk7XG4gICAgICAgIHJldHVybiBpdGVtID8gaXRlbS5maWxlbmFtZSA6IG51bGw7XG4gICAgICB9LFxuXG4gICAgICBHRVRfSVRFTV9TSVpFOiBmdW5jdGlvbiBHRVRfSVRFTV9TSVpFKHF1ZXJ5KSB7XG4gICAgICAgIHZhciBpdGVtID0gZ2V0SXRlbUJ5UXVlcnkoc3RhdGUuaXRlbXMsIHF1ZXJ5KTtcbiAgICAgICAgcmV0dXJuIGl0ZW0gPyBpdGVtLmZpbGVTaXplIDogbnVsbDtcbiAgICAgIH0sXG5cbiAgICAgIEdFVF9TVFlMRVM6IGZ1bmN0aW9uIEdFVF9TVFlMRVMoKSB7XG4gICAgICAgIHJldHVybiBPYmplY3Qua2V5cyhzdGF0ZS5vcHRpb25zKVxuICAgICAgICAgIC5maWx0ZXIoZnVuY3Rpb24oa2V5KSB7XG4gICAgICAgICAgICByZXR1cm4gL15zdHlsZS8udGVzdChrZXkpO1xuICAgICAgICAgIH0pXG4gICAgICAgICAgLm1hcChmdW5jdGlvbihvcHRpb24pIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgIG5hbWU6IG9wdGlvbixcbiAgICAgICAgICAgICAgdmFsdWU6IHN0YXRlLm9wdGlvbnNbb3B0aW9uXVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9KTtcbiAgICAgIH0sXG5cbiAgICAgIEdFVF9QQU5FTF9BU1BFQ1RfUkFUSU86IGZ1bmN0aW9uIEdFVF9QQU5FTF9BU1BFQ1RfUkFUSU8oKSB7XG4gICAgICAgIHZhciBpc1NoYXBlQ2lyY2xlID0gL2NpcmNsZS8udGVzdChzdGF0ZS5vcHRpb25zLnN0eWxlUGFuZWxMYXlvdXQpO1xuICAgICAgICB2YXIgYXNwZWN0UmF0aW8gPSBpc1NoYXBlQ2lyY2xlXG4gICAgICAgICAgPyAxXG4gICAgICAgICAgOiBnZXROdW1lcmljQXNwZWN0UmF0aW9Gcm9tU3RyaW5nKFxuICAgICAgICAgICAgICBzdGF0ZS5vcHRpb25zLnN0eWxlUGFuZWxBc3BlY3RSYXRpb1xuICAgICAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIGFzcGVjdFJhdGlvO1xuICAgICAgfSxcblxuICAgICAgR0VUX0lURU1fUEFORUxfQVNQRUNUX1JBVElPOiBmdW5jdGlvbiBHRVRfSVRFTV9QQU5FTF9BU1BFQ1RfUkFUSU8oKSB7XG4gICAgICAgIHJldHVybiBzdGF0ZS5vcHRpb25zLnN0eWxlSXRlbVBhbmVsQXNwZWN0UmF0aW87XG4gICAgICB9LFxuXG4gICAgICBHRVRfSVRFTVNfQllfU1RBVFVTOiBmdW5jdGlvbiBHRVRfSVRFTVNfQllfU1RBVFVTKHN0YXR1cykge1xuICAgICAgICByZXR1cm4gZ2V0QWN0aXZlSXRlbXMoc3RhdGUuaXRlbXMpLmZpbHRlcihmdW5jdGlvbihpdGVtKSB7XG4gICAgICAgICAgcmV0dXJuIGl0ZW0uc3RhdHVzID09PSBzdGF0dXM7XG4gICAgICAgIH0pO1xuICAgICAgfSxcblxuICAgICAgR0VUX1RPVEFMX0lURU1TOiBmdW5jdGlvbiBHRVRfVE9UQUxfSVRFTVMoKSB7XG4gICAgICAgIHJldHVybiBnZXRBY3RpdmVJdGVtcyhzdGF0ZS5pdGVtcykubGVuZ3RoO1xuICAgICAgfSxcblxuICAgICAgSVNfQVNZTkM6IGZ1bmN0aW9uIElTX0FTWU5DKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIGlzT2JqZWN0KHN0YXRlLm9wdGlvbnMuc2VydmVyKSAmJlxuICAgICAgICAgIChpc09iamVjdChzdGF0ZS5vcHRpb25zLnNlcnZlci5wcm9jZXNzKSB8fFxuICAgICAgICAgICAgaXNGdW5jdGlvbihzdGF0ZS5vcHRpb25zLnNlcnZlci5wcm9jZXNzKSlcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9O1xuICB9O1xuXG4gIHZhciBoYXNSb29tRm9ySXRlbSA9IGZ1bmN0aW9uIGhhc1Jvb21Gb3JJdGVtKHN0YXRlKSB7XG4gICAgdmFyIGNvdW50ID0gZ2V0QWN0aXZlSXRlbXMoc3RhdGUuaXRlbXMpLmxlbmd0aDtcblxuICAgIC8vIGlmIGNhbm5vdCBoYXZlIG11bHRpcGxlIGl0ZW1zLCB0byBhZGQgb25lIGl0ZW0gaXQgc2hvdWxkIGN1cnJlbnRseSBub3QgY29udGFpbiBpdGVtc1xuICAgIGlmICghc3RhdGUub3B0aW9ucy5hbGxvd011bHRpcGxlKSB7XG4gICAgICByZXR1cm4gY291bnQgPT09IDA7XG4gICAgfVxuXG4gICAgLy8gaWYgYWxsb3dzIG11bHRpcGxlIGl0ZW1zLCB3ZSBjaGVjayBpZiBhIG1heCBpdGVtIGNvdW50IGhhcyBiZWVuIHNldCwgaWYgbm90LCB0aGVyZSdzIG5vIGxpbWl0XG4gICAgdmFyIG1heEZpbGVDb3VudCA9IHN0YXRlLm9wdGlvbnMubWF4RmlsZXM7XG4gICAgaWYgKG1heEZpbGVDb3VudCA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgLy8gd2UgY2hlY2sgaWYgdGhlIGN1cnJlbnQgY291bnQgaXMgc21hbGxlciB0aGFuIHRoZSBtYXggY291bnQsIGlmIHNvLCBhbm90aGVyIGZpbGUgY2FuIHN0aWxsIGJlIGFkZGVkXG4gICAgaWYgKGNvdW50IDwgbWF4RmlsZUNvdW50KSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICAvLyBubyBtb3JlIHJvb20gZm9yIGFub3RoZXIgZmlsZVxuICAgIHJldHVybiBmYWxzZTtcbiAgfTtcblxuICB2YXIgbGltaXQgPSBmdW5jdGlvbiBsaW1pdCh2YWx1ZSwgbWluLCBtYXgpIHtcbiAgICByZXR1cm4gTWF0aC5tYXgoTWF0aC5taW4obWF4LCB2YWx1ZSksIG1pbik7XG4gIH07XG5cbiAgdmFyIGFycmF5SW5zZXJ0ID0gZnVuY3Rpb24gYXJyYXlJbnNlcnQoYXJyLCBpbmRleCwgaXRlbSkge1xuICAgIHJldHVybiBhcnIuc3BsaWNlKGluZGV4LCAwLCBpdGVtKTtcbiAgfTtcblxuICB2YXIgaW5zZXJ0SXRlbSA9IGZ1bmN0aW9uIGluc2VydEl0ZW0oaXRlbXMsIGl0ZW0sIGluZGV4KSB7XG4gICAgaWYgKGlzRW1wdHkoaXRlbSkpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIC8vIGlmIGluZGV4IGlzIHVuZGVmaW5lZCwgYXBwZW5kXG4gICAgaWYgKHR5cGVvZiBpbmRleCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGl0ZW1zLnB1c2goaXRlbSk7XG4gICAgICByZXR1cm4gaXRlbTtcbiAgICB9XG5cbiAgICAvLyBsaW1pdCB0aGUgaW5kZXggdG8gdGhlIHNpemUgb2YgdGhlIGl0ZW1zIGFycmF5XG4gICAgaW5kZXggPSBsaW1pdChpbmRleCwgMCwgaXRlbXMubGVuZ3RoKTtcblxuICAgIC8vIGFkZCBpdGVtIHRvIGFycmF5XG4gICAgYXJyYXlJbnNlcnQoaXRlbXMsIGluZGV4LCBpdGVtKTtcblxuICAgIC8vIGV4cG9zZVxuICAgIHJldHVybiBpdGVtO1xuICB9O1xuXG4gIHZhciBpc0Jhc2U2NERhdGFVUkkgPSBmdW5jdGlvbiBpc0Jhc2U2NERhdGFVUkkoc3RyKSB7XG4gICAgcmV0dXJuIC9eXFxzKmRhdGE6KFthLXpdK1xcL1thLXowLTktKy5dKyg7W2Etei1dKz1bYS16MC05LV0rKT8pPyg7YmFzZTY0KT8sKFthLXowLTkhJCYnLCgpKis7PVxcLS5ffjpAXFwvPyVcXHNdKilcXHMqJC9pLnRlc3QoXG4gICAgICBzdHJcbiAgICApO1xuICB9O1xuXG4gIHZhciBnZXRGaWxlbmFtZUZyb21VUkwgPSBmdW5jdGlvbiBnZXRGaWxlbmFtZUZyb21VUkwodXJsKSB7XG4gICAgcmV0dXJuIHVybFxuICAgICAgLnNwbGl0KCcvJylcbiAgICAgIC5wb3AoKVxuICAgICAgLnNwbGl0KCc/JylcbiAgICAgIC5zaGlmdCgpO1xuICB9O1xuXG4gIHZhciBnZXRFeHRlbnNpb25Gcm9tRmlsZW5hbWUgPSBmdW5jdGlvbiBnZXRFeHRlbnNpb25Gcm9tRmlsZW5hbWUobmFtZSkge1xuICAgIHJldHVybiBuYW1lLnNwbGl0KCcuJykucG9wKCk7XG4gIH07XG5cbiAgdmFyIGd1ZXNzdGltYXRlRXh0ZW5zaW9uID0gZnVuY3Rpb24gZ3Vlc3N0aW1hdGVFeHRlbnNpb24odHlwZSkge1xuICAgIC8vIGlmIG5vIGV4dGVuc2lvbiBzdXBwbGllZCwgZXhpdCBoZXJlXG4gICAgaWYgKHR5cGVvZiB0eXBlICE9PSAnc3RyaW5nJykge1xuICAgICAgcmV0dXJuICcnO1xuICAgIH1cblxuICAgIC8vIGdldCBzdWJ0eXBlXG4gICAgdmFyIHN1YnR5cGUgPSB0eXBlLnNwbGl0KCcvJykucG9wKCk7XG5cbiAgICAvLyBpcyBzdmcgc3VidHlwZVxuICAgIGlmICgvc3ZnLy50ZXN0KHN1YnR5cGUpKSB7XG4gICAgICByZXR1cm4gJ3N2Zyc7XG4gICAgfVxuXG4gICAgaWYgKC96aXB8Y29tcHJlc3NlZC8udGVzdChzdWJ0eXBlKSkge1xuICAgICAgcmV0dXJuICd6aXAnO1xuICAgIH1cblxuICAgIGlmICgvcGxhaW4vLnRlc3Qoc3VidHlwZSkpIHtcbiAgICAgIHJldHVybiAndHh0JztcbiAgICB9XG5cbiAgICBpZiAoL21zd29yZC8udGVzdChzdWJ0eXBlKSkge1xuICAgICAgcmV0dXJuICdkb2MnO1xuICAgIH1cblxuICAgIC8vIGlmIGlzIHZhbGlkIHN1YnR5cGVcbiAgICBpZiAoL1thLXpdKy8udGVzdChzdWJ0eXBlKSkge1xuICAgICAgLy8gYWx3YXlzIHVzZSBqcGcgZXh0ZW5zaW9uXG4gICAgICBpZiAoc3VidHlwZSA9PT0gJ2pwZWcnKSB7XG4gICAgICAgIHJldHVybiAnanBnJztcbiAgICAgIH1cblxuICAgICAgLy8gcmV0dXJuIHN1YnR5cGVcbiAgICAgIHJldHVybiBzdWJ0eXBlO1xuICAgIH1cblxuICAgIHJldHVybiAnJztcbiAgfTtcblxuICB2YXIgbGVmdFBhZCA9IGZ1bmN0aW9uIGxlZnRQYWQodmFsdWUpIHtcbiAgICB2YXIgcGFkZGluZyA9XG4gICAgICBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6ICcnO1xuICAgIHJldHVybiAocGFkZGluZyArIHZhbHVlKS5zbGljZSgtcGFkZGluZy5sZW5ndGgpO1xuICB9O1xuXG4gIHZhciBnZXREYXRlU3RyaW5nID0gZnVuY3Rpb24gZ2V0RGF0ZVN0cmluZygpIHtcbiAgICB2YXIgZGF0ZSA9XG4gICAgICBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZFxuICAgICAgICA/IGFyZ3VtZW50c1swXVxuICAgICAgICA6IG5ldyBEYXRlKCk7XG4gICAgcmV0dXJuIChcbiAgICAgIGRhdGUuZ2V0RnVsbFllYXIoKSArXG4gICAgICAnLScgK1xuICAgICAgbGVmdFBhZChkYXRlLmdldE1vbnRoKCkgKyAxLCAnMDAnKSArXG4gICAgICAnLScgK1xuICAgICAgbGVmdFBhZChkYXRlLmdldERhdGUoKSwgJzAwJykgK1xuICAgICAgJ18nICtcbiAgICAgIGxlZnRQYWQoZGF0ZS5nZXRIb3VycygpLCAnMDAnKSArXG4gICAgICAnLScgK1xuICAgICAgbGVmdFBhZChkYXRlLmdldE1pbnV0ZXMoKSwgJzAwJykgK1xuICAgICAgJy0nICtcbiAgICAgIGxlZnRQYWQoZGF0ZS5nZXRTZWNvbmRzKCksICcwMCcpXG4gICAgKTtcbiAgfTtcblxuICB2YXIgZ2V0RmlsZUZyb21CbG9iID0gZnVuY3Rpb24gZ2V0RmlsZUZyb21CbG9iKGJsb2IsIGZpbGVuYW1lKSB7XG4gICAgdmFyIHR5cGUgPVxuICAgICAgYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiBudWxsO1xuICAgIHZhciBleHRlbnNpb24gPVxuICAgICAgYXJndW1lbnRzLmxlbmd0aCA+IDMgJiYgYXJndW1lbnRzWzNdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbM10gOiBudWxsO1xuICAgIHZhciBmaWxlID1cbiAgICAgIHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJ1xuICAgICAgICA/IGJsb2Iuc2xpY2UoMCwgYmxvYi5zaXplLCB0eXBlKVxuICAgICAgICA6IGJsb2Iuc2xpY2UoMCwgYmxvYi5zaXplLCBibG9iLnR5cGUpO1xuICAgIGZpbGUubGFzdE1vZGlmaWVkRGF0ZSA9IG5ldyBEYXRlKCk7XG5cbiAgICAvLyBpZiBibG9iIGhhcyBuYW1lIHByb3BlcnR5LCB1c2UgYXMgZmlsZW5hbWUgaWYgbm8gZmlsZW5hbWUgc3VwcGxpZWRcbiAgICBpZiAoIWlzU3RyaW5nKGZpbGVuYW1lKSkge1xuICAgICAgZmlsZW5hbWUgPSBnZXREYXRlU3RyaW5nKCk7XG4gICAgfVxuXG4gICAgLy8gaWYgZmlsZW5hbWUgc3VwcGxpZWQgYnV0IG5vIGV4dGVuc2lvbiBhbmQgZmlsZW5hbWUgaGFzIGV4dGVuc2lvblxuICAgIGlmIChmaWxlbmFtZSAmJiBleHRlbnNpb24gPT09IG51bGwgJiYgZ2V0RXh0ZW5zaW9uRnJvbUZpbGVuYW1lKGZpbGVuYW1lKSkge1xuICAgICAgZmlsZS5uYW1lID0gZmlsZW5hbWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGV4dGVuc2lvbiA9IGV4dGVuc2lvbiB8fCBndWVzc3RpbWF0ZUV4dGVuc2lvbihmaWxlLnR5cGUpO1xuICAgICAgZmlsZS5uYW1lID0gZmlsZW5hbWUgKyAoZXh0ZW5zaW9uID8gJy4nICsgZXh0ZW5zaW9uIDogJycpO1xuICAgIH1cblxuICAgIHJldHVybiBmaWxlO1xuICB9O1xuXG4gIHZhciBnZXRCbG9iQnVpbGRlciA9IGZ1bmN0aW9uIGdldEJsb2JCdWlsZGVyKCkge1xuICAgIHJldHVybiAod2luZG93LkJsb2JCdWlsZGVyID1cbiAgICAgIHdpbmRvdy5CbG9iQnVpbGRlciB8fFxuICAgICAgd2luZG93LldlYktpdEJsb2JCdWlsZGVyIHx8XG4gICAgICB3aW5kb3cuTW96QmxvYkJ1aWxkZXIgfHxcbiAgICAgIHdpbmRvdy5NU0Jsb2JCdWlsZGVyKTtcbiAgfTtcblxuICB2YXIgY3JlYXRlQmxvYiA9IGZ1bmN0aW9uIGNyZWF0ZUJsb2IoYXJyYXlCdWZmZXIsIG1pbWVUeXBlKSB7XG4gICAgdmFyIEJCID0gZ2V0QmxvYkJ1aWxkZXIoKTtcblxuICAgIGlmIChCQikge1xuICAgICAgdmFyIGJiID0gbmV3IEJCKCk7XG4gICAgICBiYi5hcHBlbmQoYXJyYXlCdWZmZXIpO1xuICAgICAgcmV0dXJuIGJiLmdldEJsb2IobWltZVR5cGUpO1xuICAgIH1cblxuICAgIHJldHVybiBuZXcgQmxvYihbYXJyYXlCdWZmZXJdLCB7XG4gICAgICB0eXBlOiBtaW1lVHlwZVxuICAgIH0pO1xuICB9O1xuXG4gIHZhciBnZXRCbG9iRnJvbUJ5dGVTdHJpbmdXaXRoTWltZVR5cGUgPSBmdW5jdGlvbiBnZXRCbG9iRnJvbUJ5dGVTdHJpbmdXaXRoTWltZVR5cGUoXG4gICAgYnl0ZVN0cmluZyxcbiAgICBtaW1lVHlwZVxuICApIHtcbiAgICB2YXIgYWIgPSBuZXcgQXJyYXlCdWZmZXIoYnl0ZVN0cmluZy5sZW5ndGgpO1xuICAgIHZhciBpYSA9IG5ldyBVaW50OEFycmF5KGFiKTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYnl0ZVN0cmluZy5sZW5ndGg7IGkrKykge1xuICAgICAgaWFbaV0gPSBieXRlU3RyaW5nLmNoYXJDb2RlQXQoaSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNyZWF0ZUJsb2IoYWIsIG1pbWVUeXBlKTtcbiAgfTtcblxuICB2YXIgZ2V0TWltZVR5cGVGcm9tQmFzZTY0RGF0YVVSSSA9IGZ1bmN0aW9uIGdldE1pbWVUeXBlRnJvbUJhc2U2NERhdGFVUkkoXG4gICAgZGF0YVVSSVxuICApIHtcbiAgICByZXR1cm4gKC9eZGF0YTooLispOy8uZXhlYyhkYXRhVVJJKSB8fCBbXSlbMV0gfHwgbnVsbDtcbiAgfTtcblxuICB2YXIgZ2V0QmFzZTY0RGF0YUZyb21CYXNlNjREYXRhVVJJID0gZnVuY3Rpb24gZ2V0QmFzZTY0RGF0YUZyb21CYXNlNjREYXRhVVJJKFxuICAgIGRhdGFVUklcbiAgKSB7XG4gICAgLy8gZ2V0IGRhdGEgcGFydCBvZiBzdHJpbmcgKHJlbW92ZSBkYXRhOmltYWdlL2pwZWcuLi4sKVxuICAgIHZhciBkYXRhID0gZGF0YVVSSS5zcGxpdCgnLCcpWzFdO1xuXG4gICAgLy8gcmVtb3ZlIGFueSB3aGl0ZXNwYWNlIGFzIHRoYXQgY2F1c2VzIEludmFsaWRDaGFyYWN0ZXJFcnJvciBpbiBJRVxuICAgIHJldHVybiBkYXRhLnJlcGxhY2UoL1xccy9nLCAnJyk7XG4gIH07XG5cbiAgdmFyIGdldEJ5dGVTdHJpbmdGcm9tQmFzZTY0RGF0YVVSSSA9IGZ1bmN0aW9uIGdldEJ5dGVTdHJpbmdGcm9tQmFzZTY0RGF0YVVSSShcbiAgICBkYXRhVVJJXG4gICkge1xuICAgIHJldHVybiBhdG9iKGdldEJhc2U2NERhdGFGcm9tQmFzZTY0RGF0YVVSSShkYXRhVVJJKSk7XG4gIH07XG5cbiAgdmFyIGdldEJsb2JGcm9tQmFzZTY0RGF0YVVSSSA9IGZ1bmN0aW9uIGdldEJsb2JGcm9tQmFzZTY0RGF0YVVSSShkYXRhVVJJKSB7XG4gICAgdmFyIG1pbWVUeXBlID0gZ2V0TWltZVR5cGVGcm9tQmFzZTY0RGF0YVVSSShkYXRhVVJJKTtcbiAgICB2YXIgYnl0ZVN0cmluZyA9IGdldEJ5dGVTdHJpbmdGcm9tQmFzZTY0RGF0YVVSSShkYXRhVVJJKTtcblxuICAgIHJldHVybiBnZXRCbG9iRnJvbUJ5dGVTdHJpbmdXaXRoTWltZVR5cGUoYnl0ZVN0cmluZywgbWltZVR5cGUpO1xuICB9O1xuXG4gIHZhciBnZXRGaWxlRnJvbUJhc2U2NERhdGFVUkkgPSBmdW5jdGlvbiBnZXRGaWxlRnJvbUJhc2U2NERhdGFVUkkoXG4gICAgZGF0YVVSSSxcbiAgICBmaWxlbmFtZSxcbiAgICBleHRlbnNpb25cbiAgKSB7XG4gICAgcmV0dXJuIGdldEZpbGVGcm9tQmxvYihcbiAgICAgIGdldEJsb2JGcm9tQmFzZTY0RGF0YVVSSShkYXRhVVJJKSxcbiAgICAgIGZpbGVuYW1lLFxuICAgICAgbnVsbCxcbiAgICAgIGV4dGVuc2lvblxuICAgICk7XG4gIH07XG5cbiAgdmFyIGdldEZpbGVOYW1lRnJvbUhlYWRlciA9IGZ1bmN0aW9uIGdldEZpbGVOYW1lRnJvbUhlYWRlcihoZWFkZXIpIHtcbiAgICAvLyB0ZXN0IGlmIGlzIGNvbnRlbnQgZGlzcG9zaXRpb24gaGVhZGVyLCBpZiBub3QgZXhpdFxuICAgIGlmICghL15jb250ZW50LWRpc3Bvc2l0aW9uOi9pLnRlc3QoaGVhZGVyKSkgcmV0dXJuIG51bGw7XG5cbiAgICAvLyBnZXQgZmlsZW5hbWUgcGFydHNcbiAgICB2YXIgbWF0Y2hlcyA9IGhlYWRlclxuICAgICAgLnNwbGl0KC9maWxlbmFtZT18ZmlsZW5hbWVcXCo9LisnJy8pXG4gICAgICAuc3BsaWNlKDEpXG4gICAgICAubWFwKGZ1bmN0aW9uKG5hbWUpIHtcbiAgICAgICAgcmV0dXJuIG5hbWUudHJpbSgpLnJlcGxhY2UoL15bXCInXXxbO1wiJ117MCwyfSQvZywgJycpO1xuICAgICAgfSlcbiAgICAgIC5maWx0ZXIoZnVuY3Rpb24obmFtZSkge1xuICAgICAgICByZXR1cm4gbmFtZS5sZW5ndGg7XG4gICAgICB9KTtcblxuICAgIHJldHVybiBtYXRjaGVzLmxlbmd0aCA/IGRlY29kZVVSSShtYXRjaGVzW21hdGNoZXMubGVuZ3RoIC0gMV0pIDogbnVsbDtcbiAgfTtcblxuICB2YXIgZ2V0RmlsZVNpemVGcm9tSGVhZGVyID0gZnVuY3Rpb24gZ2V0RmlsZVNpemVGcm9tSGVhZGVyKGhlYWRlcikge1xuICAgIGlmICgvY29udGVudC1sZW5ndGg6L2kudGVzdChoZWFkZXIpKSB7XG4gICAgICB2YXIgc2l6ZSA9IGhlYWRlci5tYXRjaCgvWzAtOV0rLylbMF07XG4gICAgICByZXR1cm4gc2l6ZSA/IHBhcnNlSW50KHNpemUsIDEwKSA6IG51bGw7XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9O1xuXG4gIHZhciBnZXRUcmFuZnNlcklkRnJvbUhlYWRlciA9IGZ1bmN0aW9uIGdldFRyYW5mc2VySWRGcm9tSGVhZGVyKGhlYWRlcikge1xuICAgIGlmICgveC1jb250ZW50LXRyYW5zZmVyLWlkOi9pLnRlc3QoaGVhZGVyKSkge1xuICAgICAgdmFyIGlkID0gKGhlYWRlci5zcGxpdCgnOicpWzFdIHx8ICcnKS50cmltKCk7XG4gICAgICByZXR1cm4gaWQgfHwgbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH07XG5cbiAgdmFyIGdldEZpbGVJbmZvRnJvbUhlYWRlcnMgPSBmdW5jdGlvbiBnZXRGaWxlSW5mb0Zyb21IZWFkZXJzKGhlYWRlcnMpIHtcbiAgICB2YXIgaW5mbyA9IHtcbiAgICAgIHNvdXJjZTogbnVsbCxcbiAgICAgIG5hbWU6IG51bGwsXG4gICAgICBzaXplOiBudWxsXG4gICAgfTtcblxuICAgIHZhciByb3dzID0gaGVhZGVycy5zcGxpdCgnXFxuJyk7XG4gICAgdmFyIF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24gPSB0cnVlO1xuICAgIHZhciBfZGlkSXRlcmF0b3JFcnJvciA9IGZhbHNlO1xuICAgIHZhciBfaXRlcmF0b3JFcnJvciA9IHVuZGVmaW5lZDtcbiAgICB0cnkge1xuICAgICAgZm9yIChcbiAgICAgICAgdmFyIF9pdGVyYXRvciA9IHJvd3NbU3ltYm9sLml0ZXJhdG9yXSgpLCBfc3RlcDtcbiAgICAgICAgIShfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uID0gKF9zdGVwID0gX2l0ZXJhdG9yLm5leHQoKSkuZG9uZSk7XG4gICAgICAgIF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24gPSB0cnVlXG4gICAgICApIHtcbiAgICAgICAgdmFyIGhlYWRlciA9IF9zdGVwLnZhbHVlO1xuXG4gICAgICAgIHZhciBuYW1lID0gZ2V0RmlsZU5hbWVGcm9tSGVhZGVyKGhlYWRlcik7XG4gICAgICAgIGlmIChuYW1lKSB7XG4gICAgICAgICAgaW5mby5uYW1lID0gbmFtZTtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBzaXplID0gZ2V0RmlsZVNpemVGcm9tSGVhZGVyKGhlYWRlcik7XG4gICAgICAgIGlmIChzaXplKSB7XG4gICAgICAgICAgaW5mby5zaXplID0gc2l6ZTtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBzb3VyY2UgPSBnZXRUcmFuZnNlcklkRnJvbUhlYWRlcihoZWFkZXIpO1xuICAgICAgICBpZiAoc291cmNlKSB7XG4gICAgICAgICAgaW5mby5zb3VyY2UgPSBzb3VyY2U7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIF9kaWRJdGVyYXRvckVycm9yID0gdHJ1ZTtcbiAgICAgIF9pdGVyYXRvckVycm9yID0gZXJyO1xuICAgIH0gZmluYWxseSB7XG4gICAgICB0cnkge1xuICAgICAgICBpZiAoIV9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24gJiYgX2l0ZXJhdG9yLnJldHVybiAhPSBudWxsKSB7XG4gICAgICAgICAgX2l0ZXJhdG9yLnJldHVybigpO1xuICAgICAgICB9XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICBpZiAoX2RpZEl0ZXJhdG9yRXJyb3IpIHtcbiAgICAgICAgICB0aHJvdyBfaXRlcmF0b3JFcnJvcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBpbmZvO1xuICB9O1xuXG4gIHZhciBjcmVhdGVGaWxlTG9hZGVyID0gZnVuY3Rpb24gY3JlYXRlRmlsZUxvYWRlcihmZXRjaEZuKSB7XG4gICAgdmFyIHN0YXRlID0ge1xuICAgICAgc291cmNlOiBudWxsLFxuICAgICAgY29tcGxldGU6IGZhbHNlLFxuICAgICAgcHJvZ3Jlc3M6IDAsXG4gICAgICBzaXplOiBudWxsLFxuICAgICAgdGltZXN0YW1wOiBudWxsLFxuICAgICAgZHVyYXRpb246IDAsXG4gICAgICByZXF1ZXN0OiBudWxsXG4gICAgfTtcblxuICAgIHZhciBnZXRQcm9ncmVzcyA9IGZ1bmN0aW9uIGdldFByb2dyZXNzKCkge1xuICAgICAgcmV0dXJuIHN0YXRlLnByb2dyZXNzO1xuICAgIH07XG4gICAgdmFyIGFib3J0ID0gZnVuY3Rpb24gYWJvcnQoKSB7XG4gICAgICBpZiAoIXN0YXRlLnJlcXVlc3QpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgc3RhdGUucmVxdWVzdC5hYm9ydCgpO1xuICAgIH07XG5cbiAgICAvLyBsb2FkIHNvdXJjZVxuICAgIHZhciBsb2FkID0gZnVuY3Rpb24gbG9hZCgpIHtcbiAgICAgIC8vIGdldCBxdWljayByZWZlcmVuY2VcbiAgICAgIHZhciBzb3VyY2UgPSBzdGF0ZS5zb3VyY2U7XG5cbiAgICAgIGFwaS5maXJlKCdpbml0Jywgc291cmNlKTtcblxuICAgICAgLy8gTG9hZCBGaWxlc1xuICAgICAgaWYgKHNvdXJjZSBpbnN0YW5jZW9mIEZpbGUpIHtcbiAgICAgICAgYXBpLmZpcmUoJ2xvYWQnLCBzb3VyY2UpO1xuICAgICAgfSBlbHNlIGlmIChzb3VyY2UgaW5zdGFuY2VvZiBCbG9iKSB7XG4gICAgICAgIC8vIExvYWQgYmxvYnMsIHNldCBkZWZhdWx0IG5hbWUgdG8gY3VycmVudCBkYXRlXG4gICAgICAgIGFwaS5maXJlKCdsb2FkJywgZ2V0RmlsZUZyb21CbG9iKHNvdXJjZSwgc291cmNlLm5hbWUpKTtcbiAgICAgIH0gZWxzZSBpZiAoaXNCYXNlNjREYXRhVVJJKHNvdXJjZSkpIHtcbiAgICAgICAgLy8gTG9hZCBiYXNlIDY0LCBzZXQgZGVmYXVsdCBuYW1lIHRvIGN1cnJlbnQgZGF0ZVxuICAgICAgICBhcGkuZmlyZSgnbG9hZCcsIGdldEZpbGVGcm9tQmFzZTY0RGF0YVVSSShzb3VyY2UpKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIERlYWwgYXMgaWYgaXMgZXh0ZXJuYWwgVVJMLCBsZXQncyBsb2FkIGl0IVxuICAgICAgICBsb2FkVVJMKHNvdXJjZSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIC8vIGxvYWRzIGEgdXJsXG4gICAgdmFyIGxvYWRVUkwgPSBmdW5jdGlvbiBsb2FkVVJMKHVybCkge1xuICAgICAgLy8gaXMgcmVtb3RlIHVybCBhbmQgbm8gZmV0Y2ggbWV0aG9kIHN1cHBsaWVkXG4gICAgICBpZiAoIWZldGNoRm4pIHtcbiAgICAgICAgYXBpLmZpcmUoJ2Vycm9yJywge1xuICAgICAgICAgIHR5cGU6ICdlcnJvcicsXG4gICAgICAgICAgYm9keTogXCJDYW4ndCBsb2FkIFVSTFwiLFxuICAgICAgICAgIGNvZGU6IDQwMFxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8vIHNldCByZXF1ZXN0IHN0YXJ0XG4gICAgICBzdGF0ZS50aW1lc3RhbXAgPSBEYXRlLm5vdygpO1xuXG4gICAgICAvLyBsb2FkIGZpbGVcbiAgICAgIHN0YXRlLnJlcXVlc3QgPSBmZXRjaEZuKFxuICAgICAgICB1cmwsXG4gICAgICAgIGZ1bmN0aW9uKHJlc3BvbnNlKSB7XG4gICAgICAgICAgLy8gdXBkYXRlIGR1cmF0aW9uXG4gICAgICAgICAgc3RhdGUuZHVyYXRpb24gPSBEYXRlLm5vdygpIC0gc3RhdGUudGltZXN0YW1wO1xuXG4gICAgICAgICAgLy8gZG9uZSFcbiAgICAgICAgICBzdGF0ZS5jb21wbGV0ZSA9IHRydWU7XG5cbiAgICAgICAgICAvLyB0dXJuIGJsb2IgcmVzcG9uc2UgaW50byBhIGZpbGVcbiAgICAgICAgICBpZiAocmVzcG9uc2UgaW5zdGFuY2VvZiBCbG9iKSB7XG4gICAgICAgICAgICByZXNwb25zZSA9IGdldEZpbGVGcm9tQmxvYihyZXNwb25zZSwgZ2V0RmlsZW5hbWVGcm9tVVJMKHVybCkpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGFwaS5maXJlKCdsb2FkJywgcmVzcG9uc2UgaW5zdGFuY2VvZiBCbG9iID8gcmVzcG9uc2UgOiByZXNwb25zZS5ib2R5KTtcbiAgICAgICAgfSxcbiAgICAgICAgZnVuY3Rpb24oZXJyb3IpIHtcbiAgICAgICAgICBhcGkuZmlyZShcbiAgICAgICAgICAgICdlcnJvcicsXG4gICAgICAgICAgICB0eXBlb2YgZXJyb3IgPT09ICdzdHJpbmcnXG4gICAgICAgICAgICAgID8ge1xuICAgICAgICAgICAgICAgICAgdHlwZTogJ2Vycm9yJyxcbiAgICAgICAgICAgICAgICAgIGNvZGU6IDAsXG4gICAgICAgICAgICAgICAgICBib2R5OiBlcnJvclxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgOiBlcnJvclxuICAgICAgICAgICk7XG4gICAgICAgIH0sXG4gICAgICAgIGZ1bmN0aW9uKGNvbXB1dGFibGUsIGN1cnJlbnQsIHRvdGFsKSB7XG4gICAgICAgICAgLy8gY29sbGVjdGVkIHNvbWUgbWV0YSBkYXRhIGFscmVhZHlcbiAgICAgICAgICBpZiAodG90YWwpIHtcbiAgICAgICAgICAgIHN0YXRlLnNpemUgPSB0b3RhbDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyB1cGRhdGUgZHVyYXRpb25cbiAgICAgICAgICBzdGF0ZS5kdXJhdGlvbiA9IERhdGUubm93KCkgLSBzdGF0ZS50aW1lc3RhbXA7XG5cbiAgICAgICAgICAvLyBpZiB3ZSBjYW4ndCBjb21wdXRlIHByb2dyZXNzLCB3ZSdyZSBub3QgZ29pbmcgdG8gZmlyZSBwcm9ncmVzcyBldmVudHNcbiAgICAgICAgICBpZiAoIWNvbXB1dGFibGUpIHtcbiAgICAgICAgICAgIHN0YXRlLnByb2dyZXNzID0gbnVsbDtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyB1cGRhdGUgcHJvZ3Jlc3MgcGVyY2VudGFnZVxuICAgICAgICAgIHN0YXRlLnByb2dyZXNzID0gY3VycmVudCAvIHRvdGFsO1xuXG4gICAgICAgICAgLy8gZXhwb3NlXG4gICAgICAgICAgYXBpLmZpcmUoJ3Byb2dyZXNzJywgc3RhdGUucHJvZ3Jlc3MpO1xuICAgICAgICB9LFxuICAgICAgICBmdW5jdGlvbigpIHtcbiAgICAgICAgICBhcGkuZmlyZSgnYWJvcnQnKTtcbiAgICAgICAgfSxcbiAgICAgICAgZnVuY3Rpb24ocmVzcG9uc2UpIHtcbiAgICAgICAgICB2YXIgZmlsZWluZm8gPSBnZXRGaWxlSW5mb0Zyb21IZWFkZXJzKFxuICAgICAgICAgICAgdHlwZW9mIHJlc3BvbnNlID09PSAnc3RyaW5nJyA/IHJlc3BvbnNlIDogcmVzcG9uc2UuaGVhZGVyc1xuICAgICAgICAgICk7XG4gICAgICAgICAgYXBpLmZpcmUoJ21ldGEnLCB7XG4gICAgICAgICAgICBzaXplOiBzdGF0ZS5zaXplIHx8IGZpbGVpbmZvLnNpemUsXG4gICAgICAgICAgICBmaWxlbmFtZTogZmlsZWluZm8ubmFtZSxcbiAgICAgICAgICAgIHNvdXJjZTogZmlsZWluZm8uc291cmNlXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICk7XG4gICAgfTtcblxuICAgIHZhciBhcGkgPSBPYmplY3QuYXNzaWduKHt9LCBvbigpLCB7XG4gICAgICBzZXRTb3VyY2U6IGZ1bmN0aW9uIHNldFNvdXJjZShzb3VyY2UpIHtcbiAgICAgICAgcmV0dXJuIChzdGF0ZS5zb3VyY2UgPSBzb3VyY2UpO1xuICAgICAgfSxcbiAgICAgIGdldFByb2dyZXNzOiBnZXRQcm9ncmVzcywgLy8gZmlsZSBsb2FkIHByb2dyZXNzXG4gICAgICBhYm9ydDogYWJvcnQsIC8vIGFib3J0IGZpbGUgbG9hZFxuICAgICAgbG9hZDogbG9hZCAvLyBzdGFydCBsb2FkXG4gICAgfSk7XG5cbiAgICByZXR1cm4gYXBpO1xuICB9O1xuXG4gIHZhciBpc0dldCA9IGZ1bmN0aW9uIGlzR2V0KG1ldGhvZCkge1xuICAgIHJldHVybiAvR0VUfEhFQUQvLnRlc3QobWV0aG9kKTtcbiAgfTtcblxuICB2YXIgc2VuZFJlcXVlc3QgPSBmdW5jdGlvbiBzZW5kUmVxdWVzdChkYXRhLCB1cmwsIG9wdGlvbnMpIHtcbiAgICB2YXIgYXBpID0ge1xuICAgICAgb25oZWFkZXJzOiBmdW5jdGlvbiBvbmhlYWRlcnMoKSB7fSxcbiAgICAgIG9ucHJvZ3Jlc3M6IGZ1bmN0aW9uIG9ucHJvZ3Jlc3MoKSB7fSxcbiAgICAgIG9ubG9hZDogZnVuY3Rpb24gb25sb2FkKCkge30sXG4gICAgICBvbnRpbWVvdXQ6IGZ1bmN0aW9uIG9udGltZW91dCgpIHt9LFxuICAgICAgb25lcnJvcjogZnVuY3Rpb24gb25lcnJvcigpIHt9LFxuICAgICAgb25hYm9ydDogZnVuY3Rpb24gb25hYm9ydCgpIHt9LFxuICAgICAgYWJvcnQ6IGZ1bmN0aW9uIGFib3J0KCkge1xuICAgICAgICBhYm9ydGVkID0gdHJ1ZTtcbiAgICAgICAgeGhyLmFib3J0KCk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIC8vIHRpbWVvdXQgaWRlbnRpZmllciwgb25seSB1c2VkIHdoZW4gdGltZW91dCBpcyBkZWZpbmVkXG4gICAgdmFyIGFib3J0ZWQgPSBmYWxzZTtcbiAgICB2YXIgaGVhZGVyc1JlY2VpdmVkID0gZmFsc2U7XG5cbiAgICAvLyBzZXQgZGVmYXVsdCBvcHRpb25zXG4gICAgb3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oXG4gICAgICB7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBoZWFkZXJzOiB7fSxcbiAgICAgICAgd2l0aENyZWRlbnRpYWxzOiBmYWxzZVxuICAgICAgfSxcbiAgICAgIG9wdGlvbnNcbiAgICApO1xuXG4gICAgLy8gZW5jb2RlIHVybFxuICAgIHVybCA9IGVuY29kZVVSSSh1cmwpO1xuXG4gICAgLy8gaWYgbWV0aG9kIGlzIEdFVCwgYWRkIGFueSByZWNlaXZlZCBkYXRhIHRvIHVybFxuXG4gICAgaWYgKGlzR2V0KG9wdGlvbnMubWV0aG9kKSAmJiBkYXRhKSB7XG4gICAgICB1cmwgPVxuICAgICAgICAnJyArXG4gICAgICAgIHVybCArXG4gICAgICAgIGVuY29kZVVSSUNvbXBvbmVudChcbiAgICAgICAgICB0eXBlb2YgZGF0YSA9PT0gJ3N0cmluZycgPyBkYXRhIDogSlNPTi5zdHJpbmdpZnkoZGF0YSlcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICAvLyBjcmVhdGUgcmVxdWVzdFxuICAgIHZhciB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcblxuICAgIC8vIHByb2dyZXNzIG9mIGxvYWRcbiAgICB2YXIgcHJvY2VzcyA9IGlzR2V0KG9wdGlvbnMubWV0aG9kKSA/IHhociA6IHhoci51cGxvYWQ7XG4gICAgcHJvY2Vzcy5vbnByb2dyZXNzID0gZnVuY3Rpb24oZSkge1xuICAgICAgLy8gbm8gcHJvZ3Jlc3MgZXZlbnQgd2hlbiBhYm9ydGVkICggb25wcm9ncmVzcyBpcyBjYWxsZWQgb25jZSBhZnRlciBhYm9ydCgpIClcbiAgICAgIGlmIChhYm9ydGVkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLm9ucHJvZ3Jlc3MoZS5sZW5ndGhDb21wdXRhYmxlLCBlLmxvYWRlZCwgZS50b3RhbCk7XG4gICAgfTtcblxuICAgIC8vIHRyaWVzIHRvIGdldCBoZWFkZXIgaW5mbyB0byB0aGUgYXBwIGFzIGZhc3QgYXMgcG9zc2libGVcbiAgICB4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24oKSB7XG4gICAgICAvLyBub3QgaW50ZXJlc3RpbmcgaW4gdGhlc2Ugc3RhdGVzICgndW5zZW50JyBhbmQgJ29wZW5lbmQnIGFzIHRoZXkgZG9uJ3QgZ2l2ZSB1cyBhbnkgYWRkaXRpb25hbCBpbmZvKVxuICAgICAgaWYgKHhoci5yZWFkeVN0YXRlIDwgMikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8vIG5vIHNlcnZlciByZXNwb25zZVxuICAgICAgaWYgKHhoci5yZWFkeVN0YXRlID09PSA0ICYmIHhoci5zdGF0dXMgPT09IDApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAoaGVhZGVyc1JlY2VpdmVkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaGVhZGVyc1JlY2VpdmVkID0gdHJ1ZTtcblxuICAgICAgLy8gd2UndmUgcHJvYmFibHkgcmVjZWl2ZWQgc29tZSB1c2VmdWwgZGF0YSBpbiByZXNwb25zZSBoZWFkZXJzXG4gICAgICBhcGkub25oZWFkZXJzKHhocik7XG4gICAgfTtcblxuICAgIC8vIGxvYWQgc3VjY2Vzc2Z1bFxuICAgIHhoci5vbmxvYWQgPSBmdW5jdGlvbigpIHtcbiAgICAgIC8vIGlzIGNsYXNzaWZpZWQgYXMgdmFsaWQgcmVzcG9uc2VcbiAgICAgIGlmICh4aHIuc3RhdHVzID49IDIwMCAmJiB4aHIuc3RhdHVzIDwgMzAwKSB7XG4gICAgICAgIGFwaS5vbmxvYWQoeGhyKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGFwaS5vbmVycm9yKHhocik7XG4gICAgICB9XG4gICAgfTtcblxuICAgIC8vIGVycm9yIGR1cmluZyBsb2FkXG4gICAgeGhyLm9uZXJyb3IgPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBhcGkub25lcnJvcih4aHIpO1xuICAgIH07XG5cbiAgICAvLyByZXF1ZXN0IGFib3J0ZWRcbiAgICB4aHIub25hYm9ydCA9IGZ1bmN0aW9uKCkge1xuICAgICAgYWJvcnRlZCA9IHRydWU7XG4gICAgICBhcGkub25hYm9ydCgpO1xuICAgIH07XG5cbiAgICAvLyByZXF1ZXN0IHRpbWVvdXRcbiAgICB4aHIub250aW1lb3V0ID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gYXBpLm9udGltZW91dCh4aHIpO1xuICAgIH07XG5cbiAgICAvLyBvcGVuIHVwIG9wZW4gdXAhXG4gICAgeGhyLm9wZW4ob3B0aW9ucy5tZXRob2QsIHVybCwgdHJ1ZSk7XG5cbiAgICAvLyBzZXQgdGltZW91dCBpZiBkZWZpbmVkIChkbyBpdCBhZnRlciBvcGVuIHNvIElFMTEgcGxheXMgYmFsbClcbiAgICBpZiAoaXNJbnQob3B0aW9ucy50aW1lb3V0KSkge1xuICAgICAgeGhyLnRpbWVvdXQgPSBvcHRpb25zLnRpbWVvdXQ7XG4gICAgfVxuXG4gICAgLy8gYWRkIGhlYWRlcnNcbiAgICBPYmplY3Qua2V5cyhvcHRpb25zLmhlYWRlcnMpLmZvckVhY2goZnVuY3Rpb24oa2V5KSB7XG4gICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcihrZXksIG9wdGlvbnMuaGVhZGVyc1trZXldKTtcbiAgICB9KTtcblxuICAgIC8vIHNldCB0eXBlIG9mIHJlc3BvbnNlXG4gICAgaWYgKG9wdGlvbnMucmVzcG9uc2VUeXBlKSB7XG4gICAgICB4aHIucmVzcG9uc2VUeXBlID0gb3B0aW9ucy5yZXNwb25zZVR5cGU7XG4gICAgfVxuXG4gICAgLy8gc2V0IGNyZWRlbnRpYWxzXG4gICAgaWYgKG9wdGlvbnMud2l0aENyZWRlbnRpYWxzKSB7XG4gICAgICB4aHIud2l0aENyZWRlbnRpYWxzID0gdHJ1ZTtcbiAgICB9XG5cbiAgICAvLyBsZXQncyBzZW5kIG91ciBkYXRhXG4gICAgeGhyLnNlbmQoZGF0YSk7XG5cbiAgICByZXR1cm4gYXBpO1xuICB9O1xuXG4gIHZhciBjcmVhdGVSZXNwb25zZSA9IGZ1bmN0aW9uIGNyZWF0ZVJlc3BvbnNlKHR5cGUsIGNvZGUsIGJvZHksIGhlYWRlcnMpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdHlwZTogdHlwZSxcbiAgICAgIGNvZGU6IGNvZGUsXG4gICAgICBib2R5OiBib2R5LFxuICAgICAgaGVhZGVyczogaGVhZGVyc1xuICAgIH07XG4gIH07XG5cbiAgdmFyIGNyZWF0ZVRpbWVvdXRSZXNwb25zZSA9IGZ1bmN0aW9uIGNyZWF0ZVRpbWVvdXRSZXNwb25zZShjYikge1xuICAgIHJldHVybiBmdW5jdGlvbih4aHIpIHtcbiAgICAgIGNiKGNyZWF0ZVJlc3BvbnNlKCdlcnJvcicsIDAsICdUaW1lb3V0JywgeGhyLmdldEFsbFJlc3BvbnNlSGVhZGVycygpKSk7XG4gICAgfTtcbiAgfTtcblxuICB2YXIgY3JlYXRlRmV0Y2hGdW5jdGlvbiA9IGZ1bmN0aW9uIGNyZWF0ZUZldGNoRnVuY3Rpb24oKSB7XG4gICAgdmFyIGFwaVVybCA9XG4gICAgICBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6ICcnO1xuICAgIHZhciBhY3Rpb24gPSBhcmd1bWVudHMubGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZDtcbiAgICAvLyBjdXN0b20gaGFuZGxlciAoc2hvdWxkIGFsc28gaGFuZGxlIGZpbGUsIGxvYWQsIGVycm9yLCBwcm9ncmVzcyBhbmQgYWJvcnQpXG4gICAgaWYgKHR5cGVvZiBhY3Rpb24gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHJldHVybiBhY3Rpb247XG4gICAgfVxuXG4gICAgLy8gbm8gYWN0aW9uIHN1cHBsaWVkXG4gICAgaWYgKCFhY3Rpb24gfHwgIWlzU3RyaW5nKGFjdGlvbi51cmwpKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICAvLyBzZXQgb25sb2FkIGhhbmxkZXJcbiAgICB2YXIgb25sb2FkID1cbiAgICAgIGFjdGlvbi5vbmxvYWQgfHxcbiAgICAgIGZ1bmN0aW9uKHJlcykge1xuICAgICAgICByZXR1cm4gcmVzO1xuICAgICAgfTtcbiAgICB2YXIgb25lcnJvciA9XG4gICAgICBhY3Rpb24ub25lcnJvciB8fFxuICAgICAgZnVuY3Rpb24ocmVzKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfTtcblxuICAgIC8vIGludGVybmFsIGhhbmRsZXJcbiAgICByZXR1cm4gZnVuY3Rpb24odXJsLCBsb2FkLCBlcnJvciwgcHJvZ3Jlc3MsIGFib3J0LCBoZWFkZXJzKSB7XG4gICAgICAvLyBkbyBsb2NhbCBvciByZW1vdGUgcmVxdWVzdCBiYXNlZCBvbiBpZiB0aGUgdXJsIGlzIGV4dGVybmFsXG4gICAgICB2YXIgcmVxdWVzdCA9IHNlbmRSZXF1ZXN0KFxuICAgICAgICB1cmwsXG4gICAgICAgIGFwaVVybCArIGFjdGlvbi51cmwsXG4gICAgICAgIE9iamVjdC5hc3NpZ24oe30sIGFjdGlvbiwge1xuICAgICAgICAgIHJlc3BvbnNlVHlwZTogJ2Jsb2InXG4gICAgICAgIH0pXG4gICAgICApO1xuXG4gICAgICByZXF1ZXN0Lm9ubG9hZCA9IGZ1bmN0aW9uKHhocikge1xuICAgICAgICAvLyBnZXQgaGVhZGVyc1xuICAgICAgICB2YXIgaGVhZGVycyA9IHhoci5nZXRBbGxSZXNwb25zZUhlYWRlcnMoKTtcblxuICAgICAgICAvLyBnZXQgZmlsZW5hbWVcbiAgICAgICAgdmFyIGZpbGVuYW1lID1cbiAgICAgICAgICBnZXRGaWxlSW5mb0Zyb21IZWFkZXJzKGhlYWRlcnMpLm5hbWUgfHwgZ2V0RmlsZW5hbWVGcm9tVVJMKHVybCk7XG5cbiAgICAgICAgLy8gY3JlYXRlIHJlc3BvbnNlXG4gICAgICAgIGxvYWQoXG4gICAgICAgICAgY3JlYXRlUmVzcG9uc2UoXG4gICAgICAgICAgICAnbG9hZCcsXG4gICAgICAgICAgICB4aHIuc3RhdHVzLFxuICAgICAgICAgICAgZ2V0RmlsZUZyb21CbG9iKG9ubG9hZCh4aHIucmVzcG9uc2UpLCBmaWxlbmFtZSksXG4gICAgICAgICAgICBoZWFkZXJzXG4gICAgICAgICAgKVxuICAgICAgICApO1xuICAgICAgfTtcblxuICAgICAgcmVxdWVzdC5vbmVycm9yID0gZnVuY3Rpb24oeGhyKSB7XG4gICAgICAgIGVycm9yKFxuICAgICAgICAgIGNyZWF0ZVJlc3BvbnNlKFxuICAgICAgICAgICAgJ2Vycm9yJyxcbiAgICAgICAgICAgIHhoci5zdGF0dXMsXG4gICAgICAgICAgICBvbmVycm9yKHhoci5yZXNwb25zZSkgfHwgeGhyLnN0YXR1c1RleHQsXG4gICAgICAgICAgICB4aHIuZ2V0QWxsUmVzcG9uc2VIZWFkZXJzKClcbiAgICAgICAgICApXG4gICAgICAgICk7XG4gICAgICB9O1xuXG4gICAgICByZXF1ZXN0Lm9uaGVhZGVycyA9IGZ1bmN0aW9uKHhocikge1xuICAgICAgICBoZWFkZXJzKFxuICAgICAgICAgIGNyZWF0ZVJlc3BvbnNlKFxuICAgICAgICAgICAgJ2hlYWRlcnMnLFxuICAgICAgICAgICAgeGhyLnN0YXR1cyxcbiAgICAgICAgICAgIG51bGwsXG4gICAgICAgICAgICB4aHIuZ2V0QWxsUmVzcG9uc2VIZWFkZXJzKClcbiAgICAgICAgICApXG4gICAgICAgICk7XG4gICAgICB9O1xuXG4gICAgICByZXF1ZXN0Lm9udGltZW91dCA9IGNyZWF0ZVRpbWVvdXRSZXNwb25zZShlcnJvcik7XG4gICAgICByZXF1ZXN0Lm9ucHJvZ3Jlc3MgPSBwcm9ncmVzcztcbiAgICAgIHJlcXVlc3Qub25hYm9ydCA9IGFib3J0O1xuXG4gICAgICAvLyBzaG91bGQgcmV0dXJuIHJlcXVlc3RcbiAgICAgIHJldHVybiByZXF1ZXN0O1xuICAgIH07XG4gIH07XG5cbiAgLypcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gc2lnbmF0dXJlOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChmaWxlLCBtZXRhZGF0YSwgbG9hZCwgZXJyb3IsIHByb2dyZXNzLCBhYm9ydCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFib3J0OigpID0+IHt9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICovXG4gIHZhciBjcmVhdGVQcm9jZXNzb3JGdW5jdGlvbiA9IGZ1bmN0aW9uIGNyZWF0ZVByb2Nlc3NvckZ1bmN0aW9uKCkge1xuICAgIHZhciBhcGlVcmwgPVxuICAgICAgYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiAnJztcbiAgICB2YXIgYWN0aW9uID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQ7XG4gICAgdmFyIG5hbWUgPSBhcmd1bWVudHMubGVuZ3RoID4gMiA/IGFyZ3VtZW50c1syXSA6IHVuZGVmaW5lZDtcbiAgICAvLyBjdXN0b20gaGFuZGxlciAoc2hvdWxkIGFsc28gaGFuZGxlIGZpbGUsIGxvYWQsIGVycm9yLCBwcm9ncmVzcyBhbmQgYWJvcnQpXG4gICAgaWYgKHR5cGVvZiBhY3Rpb24gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgICAgZm9yIChcbiAgICAgICAgICB2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIHBhcmFtcyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7XG4gICAgICAgICAgX2tleSA8IF9sZW47XG4gICAgICAgICAgX2tleSsrXG4gICAgICAgICkge1xuICAgICAgICAgIHBhcmFtc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYWN0aW9uLmFwcGx5KHZvaWQgMCwgW25hbWVdLmNvbmNhdChwYXJhbXMpKTtcbiAgICAgIH07XG4gICAgfVxuXG4gICAgLy8gbm8gYWN0aW9uIHN1cHBsaWVkXG4gICAgaWYgKCFhY3Rpb24gfHwgIWlzU3RyaW5nKGFjdGlvbi51cmwpKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICAvLyBpbnRlcm5hbCBoYW5kbGVyXG4gICAgcmV0dXJuIGZ1bmN0aW9uKGZpbGUsIG1ldGFkYXRhLCBsb2FkLCBlcnJvciwgcHJvZ3Jlc3MsIGFib3J0KSB7XG4gICAgICAvLyBzZXQgb25sb2FkIGhhbmxkZXJcbiAgICAgIHZhciBvbmRhdGEgPVxuICAgICAgICBhY3Rpb24ub25kYXRhIHx8XG4gICAgICAgIGZ1bmN0aW9uKGZkKSB7XG4gICAgICAgICAgcmV0dXJuIGZkO1xuICAgICAgICB9O1xuICAgICAgdmFyIG9ubG9hZCA9XG4gICAgICAgIGFjdGlvbi5vbmxvYWQgfHxcbiAgICAgICAgZnVuY3Rpb24ocmVzKSB7XG4gICAgICAgICAgcmV0dXJuIHJlcztcbiAgICAgICAgfTtcbiAgICAgIHZhciBvbmVycm9yID1cbiAgICAgICAgYWN0aW9uLm9uZXJyb3IgfHxcbiAgICAgICAgZnVuY3Rpb24ocmVzKSB7XG4gICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH07XG5cbiAgICAgIC8vIG5vIGZpbGUgcmVjZWl2ZWRcbiAgICAgIGlmICghZmlsZSkgcmV0dXJuO1xuXG4gICAgICAvLyBjcmVhdGUgZm9ybWRhdGEgb2JqZWN0XG4gICAgICB2YXIgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcblxuICAgICAgLy8gYWRkIG1ldGFkYXRhIHVuZGVyIHNhbWUgbmFtZVxuICAgICAgaWYgKGlzT2JqZWN0KG1ldGFkYXRhKSkge1xuICAgICAgICBmb3JtRGF0YS5hcHBlbmQobmFtZSwgSlNPTi5zdHJpbmdpZnkobWV0YWRhdGEpKTtcbiAgICAgIH1cblxuICAgICAgLy8gVHVybiBpbnRvIGFuIGFycmF5IG9mIG9iamVjdHMgc28gbm8gbWF0dGVyIHdoYXQgdGhlIGlucHV0LCB3ZSBjYW4gaGFuZGxlIGl0IHRoZSBzYW1lIHdheVxuICAgICAgKGZpbGUgaW5zdGFuY2VvZiBCbG9iID8gW3sgbmFtZTogbnVsbCwgZmlsZTogZmlsZSB9XSA6IGZpbGUpLmZvckVhY2goXG4gICAgICAgIGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQoXG4gICAgICAgICAgICBuYW1lLFxuICAgICAgICAgICAgaXRlbS5maWxlLFxuICAgICAgICAgICAgaXRlbS5uYW1lID09PSBudWxsXG4gICAgICAgICAgICAgID8gaXRlbS5maWxlLm5hbWVcbiAgICAgICAgICAgICAgOiAnJyArIGl0ZW0ubmFtZSArIGl0ZW0uZmlsZS5uYW1lXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgKTtcblxuICAgICAgLy8gc2VuZCByZXF1ZXN0IG9iamVjdFxuICAgICAgdmFyIHJlcXVlc3QgPSBzZW5kUmVxdWVzdChvbmRhdGEoZm9ybURhdGEpLCBhcGlVcmwgKyBhY3Rpb24udXJsLCBhY3Rpb24pO1xuICAgICAgcmVxdWVzdC5vbmxvYWQgPSBmdW5jdGlvbih4aHIpIHtcbiAgICAgICAgbG9hZChcbiAgICAgICAgICBjcmVhdGVSZXNwb25zZShcbiAgICAgICAgICAgICdsb2FkJyxcbiAgICAgICAgICAgIHhoci5zdGF0dXMsXG4gICAgICAgICAgICBvbmxvYWQoeGhyLnJlc3BvbnNlKSxcbiAgICAgICAgICAgIHhoci5nZXRBbGxSZXNwb25zZUhlYWRlcnMoKVxuICAgICAgICAgIClcbiAgICAgICAgKTtcbiAgICAgIH07XG5cbiAgICAgIHJlcXVlc3Qub25lcnJvciA9IGZ1bmN0aW9uKHhocikge1xuICAgICAgICBlcnJvcihcbiAgICAgICAgICBjcmVhdGVSZXNwb25zZShcbiAgICAgICAgICAgICdlcnJvcicsXG4gICAgICAgICAgICB4aHIuc3RhdHVzLFxuICAgICAgICAgICAgb25lcnJvcih4aHIucmVzcG9uc2UpIHx8IHhoci5zdGF0dXNUZXh0LFxuICAgICAgICAgICAgeGhyLmdldEFsbFJlc3BvbnNlSGVhZGVycygpXG4gICAgICAgICAgKVxuICAgICAgICApO1xuICAgICAgfTtcblxuICAgICAgcmVxdWVzdC5vbnRpbWVvdXQgPSBjcmVhdGVUaW1lb3V0UmVzcG9uc2UoZXJyb3IpO1xuICAgICAgcmVxdWVzdC5vbnByb2dyZXNzID0gcHJvZ3Jlc3M7XG4gICAgICByZXF1ZXN0Lm9uYWJvcnQgPSBhYm9ydDtcblxuICAgICAgLy8gc2hvdWxkIHJldHVybiByZXF1ZXN0XG4gICAgICByZXR1cm4gcmVxdWVzdDtcbiAgICB9O1xuICB9O1xuXG4gIC8qXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiBzaWduYXR1cmU6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAodW5pcXVlRmlsZUlkLCBsb2FkLCBlcnJvcikgPT4geyB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqL1xuICB2YXIgY3JlYXRlUmV2ZXJ0RnVuY3Rpb24gPSBmdW5jdGlvbiBjcmVhdGVSZXZlcnRGdW5jdGlvbigpIHtcbiAgICB2YXIgYXBpVXJsID1cbiAgICAgIGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDogJyc7XG4gICAgdmFyIGFjdGlvbiA9IGFyZ3VtZW50cy5sZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkO1xuICAgIC8vIGlzIGN1c3RvbSBpbXBsZW1lbnRhdGlvblxuICAgIGlmICh0eXBlb2YgYWN0aW9uID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICByZXR1cm4gYWN0aW9uO1xuICAgIH1cblxuICAgIC8vIG5vIGFjdGlvbiBzdXBwbGllZCwgcmV0dXJuIHN0dWIgZnVuY3Rpb24sIGludGVyZmFjZSB3aWxsIHdvcmssIGJ1dCBmaWxlIHdvbid0IGJlIHJlbW92ZWRcbiAgICBpZiAoIWFjdGlvbiB8fCAhaXNTdHJpbmcoYWN0aW9uLnVybCkpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbih1bmlxdWVGaWxlSWQsIGxvYWQpIHtcbiAgICAgICAgcmV0dXJuIGxvYWQoKTtcbiAgICAgIH07XG4gICAgfVxuXG4gICAgLy8gc2V0IG9ubG9hZCBoYW5sZGVyXG4gICAgdmFyIG9ubG9hZCA9XG4gICAgICBhY3Rpb24ub25sb2FkIHx8XG4gICAgICBmdW5jdGlvbihyZXMpIHtcbiAgICAgICAgcmV0dXJuIHJlcztcbiAgICAgIH07XG4gICAgdmFyIG9uZXJyb3IgPVxuICAgICAgYWN0aW9uLm9uZXJyb3IgfHxcbiAgICAgIGZ1bmN0aW9uKHJlcykge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH07XG5cbiAgICAvLyBpbnRlcm5hbCBpbXBsZW1lbnRhdGlvblxuICAgIHJldHVybiBmdW5jdGlvbih1bmlxdWVGaWxlSWQsIGxvYWQsIGVycm9yKSB7XG4gICAgICB2YXIgcmVxdWVzdCA9IHNlbmRSZXF1ZXN0KFxuICAgICAgICB1bmlxdWVGaWxlSWQsXG4gICAgICAgIGFwaVVybCArIGFjdGlvbi51cmwsXG4gICAgICAgIGFjdGlvbiAvLyBjb250YWlucyBtZXRob2QsIGhlYWRlcnMgYW5kIHdpdGhDcmVkZW50aWFscyBwcm9wZXJ0aWVzXG4gICAgICApO1xuICAgICAgcmVxdWVzdC5vbmxvYWQgPSBmdW5jdGlvbih4aHIpIHtcbiAgICAgICAgbG9hZChcbiAgICAgICAgICBjcmVhdGVSZXNwb25zZShcbiAgICAgICAgICAgICdsb2FkJyxcbiAgICAgICAgICAgIHhoci5zdGF0dXMsXG4gICAgICAgICAgICBvbmxvYWQoeGhyLnJlc3BvbnNlKSxcbiAgICAgICAgICAgIHhoci5nZXRBbGxSZXNwb25zZUhlYWRlcnMoKVxuICAgICAgICAgIClcbiAgICAgICAgKTtcbiAgICAgIH07XG5cbiAgICAgIHJlcXVlc3Qub25lcnJvciA9IGZ1bmN0aW9uKHhocikge1xuICAgICAgICBlcnJvcihcbiAgICAgICAgICBjcmVhdGVSZXNwb25zZShcbiAgICAgICAgICAgICdlcnJvcicsXG4gICAgICAgICAgICB4aHIuc3RhdHVzLFxuICAgICAgICAgICAgb25lcnJvcih4aHIucmVzcG9uc2UpIHx8IHhoci5zdGF0dXNUZXh0LFxuICAgICAgICAgICAgeGhyLmdldEFsbFJlc3BvbnNlSGVhZGVycygpXG4gICAgICAgICAgKVxuICAgICAgICApO1xuICAgICAgfTtcblxuICAgICAgcmVxdWVzdC5vbnRpbWVvdXQgPSBjcmVhdGVUaW1lb3V0UmVzcG9uc2UoZXJyb3IpO1xuXG4gICAgICByZXR1cm4gcmVxdWVzdDtcbiAgICB9O1xuICB9O1xuXG4gIHZhciBnZXRSYW5kb21OdW1iZXIgPSBmdW5jdGlvbiBnZXRSYW5kb21OdW1iZXIoKSB7XG4gICAgdmFyIG1pbiA9XG4gICAgICBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IDA7XG4gICAgdmFyIG1heCA9XG4gICAgICBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IDE7XG4gICAgcmV0dXJuIG1pbiArIE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluKTtcbiAgfTtcblxuICB2YXIgY3JlYXRlUGVyY2VpdmVkUGVyZm9ybWFuY2VVcGRhdGVyID0gZnVuY3Rpb24gY3JlYXRlUGVyY2VpdmVkUGVyZm9ybWFuY2VVcGRhdGVyKFxuICAgIGNiXG4gICkge1xuICAgIHZhciBkdXJhdGlvbiA9XG4gICAgICBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IDEwMDA7XG4gICAgdmFyIG9mZnNldCA9XG4gICAgICBhcmd1bWVudHMubGVuZ3RoID4gMiAmJiBhcmd1bWVudHNbMl0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1syXSA6IDA7XG4gICAgdmFyIHRpY2tNaW4gPVxuICAgICAgYXJndW1lbnRzLmxlbmd0aCA+IDMgJiYgYXJndW1lbnRzWzNdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbM10gOiAyNTtcbiAgICB2YXIgdGlja01heCA9XG4gICAgICBhcmd1bWVudHMubGVuZ3RoID4gNCAmJiBhcmd1bWVudHNbNF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1s0XSA6IDI1MDtcbiAgICB2YXIgdGltZW91dCA9IG51bGw7XG4gICAgdmFyIHN0YXJ0ID0gRGF0ZS5ub3coKTtcblxuICAgIHZhciB0aWNrID0gZnVuY3Rpb24gdGljaygpIHtcbiAgICAgIHZhciBydW50aW1lID0gRGF0ZS5ub3coKSAtIHN0YXJ0O1xuICAgICAgdmFyIGRlbGF5ID0gZ2V0UmFuZG9tTnVtYmVyKHRpY2tNaW4sIHRpY2tNYXgpO1xuXG4gICAgICBpZiAocnVudGltZSArIGRlbGF5ID4gZHVyYXRpb24pIHtcbiAgICAgICAgZGVsYXkgPSBydW50aW1lICsgZGVsYXkgLSBkdXJhdGlvbjtcbiAgICAgIH1cblxuICAgICAgdmFyIHByb2dyZXNzID0gcnVudGltZSAvIGR1cmF0aW9uO1xuICAgICAgaWYgKHByb2dyZXNzID49IDEpIHtcbiAgICAgICAgY2IoMSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgY2IocHJvZ3Jlc3MpO1xuXG4gICAgICB0aW1lb3V0ID0gc2V0VGltZW91dCh0aWNrLCBkZWxheSk7XG4gICAgfTtcblxuICAgIHRpY2soKTtcblxuICAgIHJldHVybiB7XG4gICAgICBjbGVhcjogZnVuY3Rpb24gY2xlYXIoKSB7XG4gICAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0KTtcbiAgICAgIH1cbiAgICB9O1xuICB9O1xuXG4gIHZhciBjcmVhdGVGaWxlUHJvY2Vzc29yID0gZnVuY3Rpb24gY3JlYXRlRmlsZVByb2Nlc3Nvcihwcm9jZXNzRm4pIHtcbiAgICB2YXIgc3RhdGUgPSB7XG4gICAgICBjb21wbGV0ZTogZmFsc2UsXG4gICAgICBwZXJjZWl2ZWRQcm9ncmVzczogMCxcbiAgICAgIHBlcmNlaXZlZFBlcmZvcm1hbmNlVXBkYXRlcjogbnVsbCxcbiAgICAgIHByb2dyZXNzOiBudWxsLFxuICAgICAgdGltZXN0YW1wOiBudWxsLFxuICAgICAgcGVyY2VpdmVkRHVyYXRpb246IDAsXG4gICAgICBkdXJhdGlvbjogMCxcbiAgICAgIHJlcXVlc3Q6IG51bGwsXG4gICAgICByZXNwb25zZTogbnVsbFxuICAgIH07XG5cbiAgICB2YXIgcHJvY2VzcyA9IGZ1bmN0aW9uIHByb2Nlc3MoZmlsZSwgbWV0YWRhdGEpIHtcbiAgICAgIHZhciBwcm9ncmVzc0ZuID0gZnVuY3Rpb24gcHJvZ3Jlc3NGbigpIHtcbiAgICAgICAgLy8gd2UndmUgbm90IHlldCBzdGFydGVkIHRoZSByZWFsIGRvd25sb2FkLCBzdG9wIGhlcmVcbiAgICAgICAgLy8gdGhlIHJlcXVlc3QgbWlnaHQgbm90IGdvIHRocm91Z2gsIGZvciBpbnN0YW5jZSwgdGhlcmUgbWlnaHQgYmUgc29tZSBzZXJ2ZXIgdHJvdWJsZVxuICAgICAgICAvLyBpZiBzdGF0ZS5wcm9ncmVzcyBpcyBudWxsLCB0aGUgc2VydmVyIGRvZXMgbm90IGFsbG93IGNvbXB1dGluZyBwcm9ncmVzcyBhbmQgd2Ugc2hvdyB0aGUgc3Bpbm5lciBpbnN0ZWFkXG4gICAgICAgIGlmIChzdGF0ZS5kdXJhdGlvbiA9PT0gMCB8fCBzdGF0ZS5wcm9ncmVzcyA9PT0gbnVsbCkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGFzIHdlJ3JlIG5vdyBwcm9jZXNzaW5nLCBmaXJlIHRoZSBwcm9ncmVzcyBldmVudFxuICAgICAgICBhcGkuZmlyZSgncHJvZ3Jlc3MnLCBhcGkuZ2V0UHJvZ3Jlc3MoKSk7XG4gICAgICB9O1xuXG4gICAgICB2YXIgY29tcGxldGVGbiA9IGZ1bmN0aW9uIGNvbXBsZXRlRm4oKSB7XG4gICAgICAgIHN0YXRlLmNvbXBsZXRlID0gdHJ1ZTtcblxuICAgICAgICBhcGkuZmlyZSgnbG9hZC1wZXJjZWl2ZWQnLCBzdGF0ZS5yZXNwb25zZS5ib2R5KTtcbiAgICAgIH07XG5cbiAgICAgIC8vIGxldCdzIHN0YXJ0IHByb2Nlc3NpbmdcbiAgICAgIGFwaS5maXJlKCdzdGFydCcpO1xuXG4gICAgICAvLyBzZXQgcmVxdWVzdCBzdGFydFxuICAgICAgc3RhdGUudGltZXN0YW1wID0gRGF0ZS5ub3coKTtcblxuICAgICAgLy8gY3JlYXRlIHBlcmNlaXZlZCBwZXJmb3JtYW5jZSBwcm9ncmVzcyBpbmRpY2F0b3JcbiAgICAgIHN0YXRlLnBlcmNlaXZlZFBlcmZvcm1hbmNlVXBkYXRlciA9IGNyZWF0ZVBlcmNlaXZlZFBlcmZvcm1hbmNlVXBkYXRlcihcbiAgICAgICAgZnVuY3Rpb24ocHJvZ3Jlc3MpIHtcbiAgICAgICAgICBzdGF0ZS5wZXJjZWl2ZWRQcm9ncmVzcyA9IHByb2dyZXNzO1xuICAgICAgICAgIHN0YXRlLnBlcmNlaXZlZER1cmF0aW9uID0gRGF0ZS5ub3coKSAtIHN0YXRlLnRpbWVzdGFtcDtcblxuICAgICAgICAgIHByb2dyZXNzRm4oKTtcblxuICAgICAgICAgIC8vIGlmIGZha2UgcHJvZ3Jlc3MgaXMgZG9uZSwgYW5kIGEgcmVzcG9uc2UgaGFzIGJlZW4gcmVjZWl2ZWQsXG4gICAgICAgICAgLy8gYW5kIHdlJ3ZlIG5vdCB5ZXQgY2FsbGVkIHRoZSBjb21wbGV0ZSBtZXRob2RcbiAgICAgICAgICBpZiAoXG4gICAgICAgICAgICBzdGF0ZS5yZXNwb25zZSAmJlxuICAgICAgICAgICAgc3RhdGUucGVyY2VpdmVkUHJvZ3Jlc3MgPT09IDEgJiZcbiAgICAgICAgICAgICFzdGF0ZS5jb21wbGV0ZVxuICAgICAgICAgICkge1xuICAgICAgICAgICAgLy8gd2UgZG9uZSFcbiAgICAgICAgICAgIGNvbXBsZXRlRm4oKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIC8vIHJhbmRvbSBkZWxheSBhcyBpbiBhIGxpc3Qgb2YgZmlsZXMgeW91IHN0YXJ0IG5vdGljaW5nXG4gICAgICAgIC8vIGZpbGVzIHVwbG9hZGluZyBhdCB0aGUgZXhhY3Qgc2FtZSBzcGVlZFxuICAgICAgICBnZXRSYW5kb21OdW1iZXIoNzUwLCAxNTAwKVxuICAgICAgKTtcblxuICAgICAgLy8gcmVtZW1iZXIgcmVxdWVzdCBzbyB3ZSBjYW4gYWJvcnQgaXQgbGF0ZXJcbiAgICAgIHN0YXRlLnJlcXVlc3QgPSBwcm9jZXNzRm4oXG4gICAgICAgIC8vIHRoZSBmaWxlIHRvIHByb2Nlc3NcbiAgICAgICAgZmlsZSxcblxuICAgICAgICAvLyB0aGUgbWV0YWRhdGEgdG8gc2VuZCBhbG9uZ1xuICAgICAgICBtZXRhZGF0YSxcblxuICAgICAgICAvLyBjYWxsYmFja3MgKGxvYWQsIGVycm9yLCBwcm9ncmVzcywgYWJvcnQpXG4gICAgICAgIC8vIGxvYWQgZXhwZWN0cyB0aGUgYm9keSB0byBiZSBhIHNlcnZlciBpZCBpZlxuICAgICAgICAvLyB5b3Ugd2FudCB0byBtYWtlIHVzZSBvZiByZXZlcnRcbiAgICAgICAgZnVuY3Rpb24ocmVzcG9uc2UpIHtcbiAgICAgICAgICAvLyB3ZSBwdXQgdGhlIHJlc3BvbnNlIGluIHN0YXRlIHNvIHdlIGNhbiBhY2Nlc3NcbiAgICAgICAgICAvLyBpdCBvdXRzaWRlIG9mIHRoaXMgbWV0aG9kXG4gICAgICAgICAgc3RhdGUucmVzcG9uc2UgPSBpc09iamVjdChyZXNwb25zZSlcbiAgICAgICAgICAgID8gcmVzcG9uc2VcbiAgICAgICAgICAgIDoge1xuICAgICAgICAgICAgICAgIHR5cGU6ICdsb2FkJyxcbiAgICAgICAgICAgICAgICBjb2RlOiAyMDAsXG4gICAgICAgICAgICAgICAgYm9keTogJycgKyByZXNwb25zZSxcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7fVxuICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgLy8gdXBkYXRlIGR1cmF0aW9uXG4gICAgICAgICAgc3RhdGUuZHVyYXRpb24gPSBEYXRlLm5vdygpIC0gc3RhdGUudGltZXN0YW1wO1xuXG4gICAgICAgICAgLy8gZm9yY2UgcHJvZ3Jlc3MgdG8gMSBhcyB3ZSdyZSBub3cgZG9uZVxuICAgICAgICAgIHN0YXRlLnByb2dyZXNzID0gMTtcblxuICAgICAgICAgIC8vIGFjdHVhbCBsb2FkIGlzIGRvbmUgbGV0J3Mgc2hhcmUgcmVzdWx0c1xuICAgICAgICAgIGFwaS5maXJlKCdsb2FkJywgc3RhdGUucmVzcG9uc2UuYm9keSk7XG5cbiAgICAgICAgICAvLyB3ZSBhcmUgcmVhbGx5IGRvbmVcbiAgICAgICAgICAvLyBpZiBwZXJjZWl2ZWQgcHJvZ3Jlc3MgaXMgMSAoIHdhaXQgZm9yIHBlcmNlaXZlZCBwcm9ncmVzcyB0byBjb21wbGV0ZSApXG4gICAgICAgICAgLy8gb3IgaWYgc2VydmVyIGRvZXMgbm90IHN1cHBvcnQgcHJvZ3Jlc3MgKCBudWxsIClcbiAgICAgICAgICBpZiAoc3RhdGUucGVyY2VpdmVkUHJvZ3Jlc3MgPT09IDEpIHtcbiAgICAgICAgICAgIGNvbXBsZXRlRm4oKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgLy8gZXJyb3IgaXMgZXhwZWN0ZWQgdG8gYmUgYW4gb2JqZWN0IHdpdGggdHlwZSwgY29kZSwgYm9keVxuICAgICAgICBmdW5jdGlvbihlcnJvcikge1xuICAgICAgICAgIC8vIGNhbmNlbCB1cGRhdGVyXG4gICAgICAgICAgc3RhdGUucGVyY2VpdmVkUGVyZm9ybWFuY2VVcGRhdGVyLmNsZWFyKCk7XG5cbiAgICAgICAgICAvLyB1cGRhdGUgb3RoZXJzIGFib3V0IHRoaXMgZXJyb3JcbiAgICAgICAgICBhcGkuZmlyZShcbiAgICAgICAgICAgICdlcnJvcicsXG4gICAgICAgICAgICBpc09iamVjdChlcnJvcilcbiAgICAgICAgICAgICAgPyBlcnJvclxuICAgICAgICAgICAgICA6IHtcbiAgICAgICAgICAgICAgICAgIHR5cGU6ICdlcnJvcicsXG4gICAgICAgICAgICAgICAgICBjb2RlOiAwLFxuICAgICAgICAgICAgICAgICAgYm9keTogJycgKyBlcnJvclxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICApO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8vIGFjdHVhbCBwcm9jZXNzaW5nIHByb2dyZXNzXG4gICAgICAgIGZ1bmN0aW9uKGNvbXB1dGFibGUsIGN1cnJlbnQsIHRvdGFsKSB7XG4gICAgICAgICAgLy8gdXBkYXRlIGFjdHVhbCBkdXJhdGlvblxuICAgICAgICAgIHN0YXRlLmR1cmF0aW9uID0gRGF0ZS5ub3coKSAtIHN0YXRlLnRpbWVzdGFtcDtcblxuICAgICAgICAgIC8vIHVwZGF0ZSBhY3R1YWwgcHJvZ3Jlc3NcbiAgICAgICAgICBzdGF0ZS5wcm9ncmVzcyA9IGNvbXB1dGFibGUgPyBjdXJyZW50IC8gdG90YWwgOiBudWxsO1xuXG4gICAgICAgICAgcHJvZ3Jlc3NGbigpO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8vIGFib3J0IGRvZXMgbm90IGV4cGVjdCBhIHZhbHVlXG4gICAgICAgIGZ1bmN0aW9uKCkge1xuICAgICAgICAgIC8vIHN0b3AgdXBkYXRlclxuICAgICAgICAgIHN0YXRlLnBlcmNlaXZlZFBlcmZvcm1hbmNlVXBkYXRlci5jbGVhcigpO1xuXG4gICAgICAgICAgLy8gZmlyZSB0aGUgYWJvcnQgZXZlbnQgc28gd2UgY2FuIHN3aXRjaCB2aXN1YWxzXG4gICAgICAgICAgYXBpLmZpcmUoJ2Fib3J0Jywgc3RhdGUucmVzcG9uc2UgPyBzdGF0ZS5yZXNwb25zZS5ib2R5IDogbnVsbCk7XG4gICAgICAgIH1cbiAgICAgICk7XG4gICAgfTtcblxuICAgIHZhciBhYm9ydCA9IGZ1bmN0aW9uIGFib3J0KCkge1xuICAgICAgLy8gbm8gcmVxdWVzdCBydW5uaW5nLCBjYW4ndCBhYm9ydFxuICAgICAgaWYgKCFzdGF0ZS5yZXF1ZXN0KSByZXR1cm47XG5cbiAgICAgIC8vIHN0b3AgdXBkYXRlclxuICAgICAgc3RhdGUucGVyY2VpdmVkUGVyZm9ybWFuY2VVcGRhdGVyLmNsZWFyKCk7XG5cbiAgICAgIC8vIGFib3J0IGFjdHVhbCByZXF1ZXN0XG4gICAgICBzdGF0ZS5yZXF1ZXN0LmFib3J0KCk7XG5cbiAgICAgIC8vIGlmIGhhcyByZXNwb25zZSBvYmplY3QsIHdlJ3ZlIGNvbXBsZXRlZCB0aGUgcmVxdWVzdFxuICAgICAgc3RhdGUuY29tcGxldGUgPSB0cnVlO1xuICAgIH07XG5cbiAgICB2YXIgcmVzZXQgPSBmdW5jdGlvbiByZXNldCgpIHtcbiAgICAgIGFib3J0KCk7XG4gICAgICBzdGF0ZS5jb21wbGV0ZSA9IGZhbHNlO1xuICAgICAgc3RhdGUucGVyY2VpdmVkUHJvZ3Jlc3MgPSAwO1xuICAgICAgc3RhdGUucHJvZ3Jlc3MgPSAwO1xuICAgICAgc3RhdGUudGltZXN0YW1wID0gbnVsbDtcbiAgICAgIHN0YXRlLnBlcmNlaXZlZER1cmF0aW9uID0gMDtcbiAgICAgIHN0YXRlLmR1cmF0aW9uID0gMDtcbiAgICAgIHN0YXRlLnJlcXVlc3QgPSBudWxsO1xuICAgICAgc3RhdGUucmVzcG9uc2UgPSBudWxsO1xuICAgIH07XG5cbiAgICB2YXIgZ2V0UHJvZ3Jlc3MgPSBmdW5jdGlvbiBnZXRQcm9ncmVzcygpIHtcbiAgICAgIHJldHVybiBzdGF0ZS5wcm9ncmVzc1xuICAgICAgICA/IE1hdGgubWluKHN0YXRlLnByb2dyZXNzLCBzdGF0ZS5wZXJjZWl2ZWRQcm9ncmVzcylcbiAgICAgICAgOiBudWxsO1xuICAgIH07XG4gICAgdmFyIGdldER1cmF0aW9uID0gZnVuY3Rpb24gZ2V0RHVyYXRpb24oKSB7XG4gICAgICByZXR1cm4gTWF0aC5taW4oc3RhdGUuZHVyYXRpb24sIHN0YXRlLnBlcmNlaXZlZER1cmF0aW9uKTtcbiAgICB9O1xuXG4gICAgdmFyIGFwaSA9IE9iamVjdC5hc3NpZ24oe30sIG9uKCksIHtcbiAgICAgIHByb2Nlc3M6IHByb2Nlc3MsIC8vIHN0YXJ0IHByb2Nlc3NpbmcgZmlsZVxuICAgICAgYWJvcnQ6IGFib3J0LCAvLyBhYm9ydCBhY3RpdmUgcHJvY2VzcyByZXF1ZXN0XG4gICAgICBnZXRQcm9ncmVzczogZ2V0UHJvZ3Jlc3MsXG4gICAgICBnZXREdXJhdGlvbjogZ2V0RHVyYXRpb24sXG4gICAgICByZXNldDogcmVzZXRcbiAgICB9KTtcblxuICAgIHJldHVybiBhcGk7XG4gIH07XG5cbiAgdmFyIGdldEZpbGVuYW1lV2l0aG91dEV4dGVuc2lvbiA9IGZ1bmN0aW9uIGdldEZpbGVuYW1lV2l0aG91dEV4dGVuc2lvbihuYW1lKSB7XG4gICAgcmV0dXJuIG5hbWUuc3Vic3RyKDAsIG5hbWUubGFzdEluZGV4T2YoJy4nKSkgfHwgbmFtZTtcbiAgfTtcblxuICB2YXIgY3JlYXRlRmlsZVN0dWIgPSBmdW5jdGlvbiBjcmVhdGVGaWxlU3R1Yihzb3VyY2UpIHtcbiAgICB2YXIgZGF0YSA9IFtzb3VyY2UubmFtZSwgc291cmNlLnNpemUsIHNvdXJjZS50eXBlXTtcblxuICAgIC8vIGlzIGJsb2Igb3IgYmFzZTY0LCB0aGVuIHdlIG5lZWQgdG8gc2V0IHRoZSBuYW1lXG4gICAgaWYgKHNvdXJjZSBpbnN0YW5jZW9mIEJsb2IgfHwgaXNCYXNlNjREYXRhVVJJKHNvdXJjZSkpIHtcbiAgICAgIGRhdGFbMF0gPSBzb3VyY2UubmFtZSB8fCBnZXREYXRlU3RyaW5nKCk7XG4gICAgfSBlbHNlIGlmIChpc0Jhc2U2NERhdGFVUkkoc291cmNlKSkge1xuICAgICAgLy8gaWYgaXMgYmFzZTY0IGRhdGEgdXJpIHdlIG5lZWQgdG8gZGV0ZXJtaW5lIHRoZSBhdmVyYWdlIHNpemUgYW5kIHR5cGVcbiAgICAgIGRhdGFbMV0gPSBzb3VyY2UubGVuZ3RoO1xuICAgICAgZGF0YVsyXSA9IGdldE1pbWVUeXBlRnJvbUJhc2U2NERhdGFVUkkoc291cmNlKTtcbiAgICB9IGVsc2UgaWYgKGlzU3RyaW5nKHNvdXJjZSkpIHtcbiAgICAgIC8vIHVybFxuICAgICAgZGF0YVswXSA9IGdldEZpbGVuYW1lRnJvbVVSTChzb3VyY2UpO1xuICAgICAgZGF0YVsxXSA9IDA7XG4gICAgICBkYXRhWzJdID0gJ2FwcGxpY2F0aW9uL29jdGV0LXN0cmVhbSc7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIG5hbWU6IGRhdGFbMF0sXG4gICAgICBzaXplOiBkYXRhWzFdLFxuICAgICAgdHlwZTogZGF0YVsyXVxuICAgIH07XG4gIH07XG5cbiAgdmFyIGlzRmlsZSA9IGZ1bmN0aW9uIGlzRmlsZSh2YWx1ZSkge1xuICAgIHJldHVybiAhISh2YWx1ZSBpbnN0YW5jZW9mIEZpbGUgfHwgKHZhbHVlIGluc3RhbmNlb2YgQmxvYiAmJiB2YWx1ZS5uYW1lKSk7XG4gIH07XG5cbiAgdmFyIGRlZXBDbG9uZU9iamVjdCA9IGZ1bmN0aW9uIGRlZXBDbG9uZU9iamVjdChzcmMpIHtcbiAgICBpZiAoIWlzT2JqZWN0KHNyYykpIHJldHVybiBzcmM7XG4gICAgdmFyIHRhcmdldCA9IGlzQXJyYXkoc3JjKSA/IFtdIDoge307XG4gICAgZm9yICh2YXIga2V5IGluIHNyYykge1xuICAgICAgaWYgKCFzcmMuaGFzT3duUHJvcGVydHkoa2V5KSkgY29udGludWU7XG4gICAgICB2YXIgdiA9IHNyY1trZXldO1xuICAgICAgdGFyZ2V0W2tleV0gPSB2ICYmIGlzT2JqZWN0KHYpID8gZGVlcENsb25lT2JqZWN0KHYpIDogdjtcbiAgICB9XG4gICAgcmV0dXJuIHRhcmdldDtcbiAgfTtcblxuICB2YXIgY3JlYXRlSXRlbSA9IGZ1bmN0aW9uIGNyZWF0ZUl0ZW0oKSB7XG4gICAgdmFyIG9yaWdpbiA9XG4gICAgICBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IG51bGw7XG4gICAgdmFyIHNlcnZlckZpbGVSZWZlcmVuY2UgPVxuICAgICAgYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiBudWxsO1xuICAgIHZhciBmaWxlID1cbiAgICAgIGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDogbnVsbDtcbiAgICAvLyB1bmlxdWUgaWQgZm9yIHRoaXMgaXRlbSwgaXMgdXNlZCB0byBpZGVudGlmeSB0aGUgaXRlbSBhY3Jvc3Mgdmlld3NcbiAgICB2YXIgaWQgPSBnZXRVbmlxdWVJZCgpO1xuXG4gICAgLyoqXG4gICAgICogSW50ZXJuYWwgaXRlbSBzdGF0ZVxuICAgICAqL1xuICAgIHZhciBzdGF0ZSA9IHtcbiAgICAgIC8vIGlzIGFyY2hpdmVkXG4gICAgICBhcmNoaXZlZDogZmFsc2UsXG5cbiAgICAgIC8vIGlmIGlzIGZyb3plbiwgbm8gbG9uZ2VyIGZpcmVzIGV2ZW50c1xuICAgICAgZnJvemVuOiBmYWxzZSxcblxuICAgICAgLy8gcmVtb3ZlZCBmcm9tIHZpZXdcbiAgICAgIHJlbGVhc2VkOiBmYWxzZSxcblxuICAgICAgLy8gb3JpZ2luYWwgc291cmNlXG4gICAgICBzb3VyY2U6IG51bGwsXG5cbiAgICAgIC8vIGZpbGUgbW9kZWwgcmVmZXJlbmNlXG4gICAgICBmaWxlOiBmaWxlLFxuXG4gICAgICAvLyBpZCBvZiBmaWxlIG9uIHNlcnZlclxuICAgICAgc2VydmVyRmlsZVJlZmVyZW5jZTogc2VydmVyRmlsZVJlZmVyZW5jZSxcblxuICAgICAgLy8gY3VycmVudCBpdGVtIHN0YXR1c1xuICAgICAgc3RhdHVzOiBzZXJ2ZXJGaWxlUmVmZXJlbmNlXG4gICAgICAgID8gSXRlbVN0YXR1cy5QUk9DRVNTSU5HX0NPTVBMRVRFXG4gICAgICAgIDogSXRlbVN0YXR1cy5JTklULFxuXG4gICAgICAvLyBhY3RpdmUgcHJvY2Vzc2VzXG4gICAgICBhY3RpdmVMb2FkZXI6IG51bGwsXG4gICAgICBhY3RpdmVQcm9jZXNzb3I6IG51bGxcbiAgICB9O1xuXG4gICAgLy8gY2FsbGJhY2sgdXNlZCB3aGVuIGFib3J0IHByb2Nlc3NpbmcgaXMgY2FsbGVkIHRvIGxpbmsgYmFjayB0byB0aGUgcmVzb2x2ZSBtZXRob2RcbiAgICB2YXIgYWJvcnRQcm9jZXNzaW5nUmVxdWVzdENvbXBsZXRlID0gbnVsbDtcblxuICAgIC8qKlxuICAgICAqIEV4dGVybmFsbHkgYWRkZWQgaXRlbSBtZXRhZGF0YVxuICAgICAqL1xuICAgIHZhciBtZXRhZGF0YSA9IHt9O1xuXG4gICAgLy8gaXRlbSBkYXRhXG4gICAgdmFyIHNldFN0YXR1cyA9IGZ1bmN0aW9uIHNldFN0YXR1cyhzdGF0dXMpIHtcbiAgICAgIHJldHVybiAoc3RhdGUuc3RhdHVzID0gc3RhdHVzKTtcbiAgICB9O1xuXG4gICAgLy8gZmlyZSBldmVudCB1bmxlc3MgdGhlIGl0ZW0gaGFzIGJlZW4gYXJjaGl2ZWRcbiAgICB2YXIgZmlyZSA9IGZ1bmN0aW9uIGZpcmUoZXZlbnQpIHtcbiAgICAgIGlmIChzdGF0ZS5yZWxlYXNlZCB8fCBzdGF0ZS5mcm96ZW4pIHJldHVybjtcbiAgICAgIGZvciAoXG4gICAgICAgIHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCxcbiAgICAgICAgICBwYXJhbXMgPSBuZXcgQXJyYXkoX2xlbiA+IDEgPyBfbGVuIC0gMSA6IDApLFxuICAgICAgICAgIF9rZXkgPSAxO1xuICAgICAgICBfa2V5IDwgX2xlbjtcbiAgICAgICAgX2tleSsrXG4gICAgICApIHtcbiAgICAgICAgcGFyYW1zW19rZXkgLSAxXSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICAgIH1cbiAgICAgIGFwaS5maXJlLmFwcGx5KGFwaSwgW2V2ZW50XS5jb25jYXQocGFyYW1zKSk7XG4gICAgfTtcblxuICAgIC8vIGZpbGUgZGF0YVxuICAgIHZhciBnZXRGaWxlRXh0ZW5zaW9uID0gZnVuY3Rpb24gZ2V0RmlsZUV4dGVuc2lvbigpIHtcbiAgICAgIHJldHVybiBnZXRFeHRlbnNpb25Gcm9tRmlsZW5hbWUoc3RhdGUuZmlsZS5uYW1lKTtcbiAgICB9O1xuICAgIHZhciBnZXRGaWxlVHlwZSA9IGZ1bmN0aW9uIGdldEZpbGVUeXBlKCkge1xuICAgICAgcmV0dXJuIHN0YXRlLmZpbGUudHlwZTtcbiAgICB9O1xuICAgIHZhciBnZXRGaWxlU2l6ZSA9IGZ1bmN0aW9uIGdldEZpbGVTaXplKCkge1xuICAgICAgcmV0dXJuIHN0YXRlLmZpbGUuc2l6ZTtcbiAgICB9O1xuICAgIHZhciBnZXRGaWxlID0gZnVuY3Rpb24gZ2V0RmlsZSgpIHtcbiAgICAgIHJldHVybiBzdGF0ZS5maWxlO1xuICAgIH07XG5cbiAgICAvL1xuICAgIC8vIGxvZ2ljIHRvIGxvYWQgYSBmaWxlXG4gICAgLy9cbiAgICB2YXIgbG9hZCA9IGZ1bmN0aW9uIGxvYWQoc291cmNlLCBsb2FkZXIsIG9ubG9hZCkge1xuICAgICAgLy8gcmVtZW1iZXIgdGhlIG9yaWdpbmFsIGl0ZW0gc291cmNlXG4gICAgICBzdGF0ZS5zb3VyY2UgPSBzb3VyY2U7XG5cbiAgICAgIC8vIGZpbGUgc3R1YiBpcyBhbHJlYWR5IHRoZXJlXG4gICAgICBpZiAoc3RhdGUuZmlsZSkge1xuICAgICAgICBmaXJlKCdsb2FkLXNraXAnKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICAvLyBzZXQgYSBzdHViIGZpbGUgb2JqZWN0IHdoaWxlIGxvYWRpbmcgdGhlIGFjdHVhbCBkYXRhXG4gICAgICBzdGF0ZS5maWxlID0gY3JlYXRlRmlsZVN0dWIoc291cmNlKTtcblxuICAgICAgLy8gc3RhcnRzIGxvYWRpbmdcbiAgICAgIGxvYWRlci5vbignaW5pdCcsIGZ1bmN0aW9uKCkge1xuICAgICAgICBmaXJlKCdsb2FkLWluaXQnKTtcbiAgICAgIH0pO1xuXG4gICAgICAvLyB3ZSdldmUgcmVjZWl2ZWQgYSBzaXplIGluZGljYXRpb24sIGxldCdzIHVwZGF0ZSB0aGUgc3R1YlxuICAgICAgbG9hZGVyLm9uKCdtZXRhJywgZnVuY3Rpb24obWV0YSkge1xuICAgICAgICAvLyBzZXQgc2l6ZSBvZiBmaWxlIHN0dWJcbiAgICAgICAgc3RhdGUuZmlsZS5zaXplID0gbWV0YS5zaXplO1xuXG4gICAgICAgIC8vIHNldCBuYW1lIG9mIGZpbGUgc3R1YlxuICAgICAgICBzdGF0ZS5maWxlLmZpbGVuYW1lID0gbWV0YS5maWxlbmFtZTtcblxuICAgICAgICAvLyBpZiBoYXMgcmVjZWl2ZWQgc291cmNlLCB3ZSBkb25lXG4gICAgICAgIGlmIChtZXRhLnNvdXJjZSkge1xuICAgICAgICAgIG9yaWdpbiA9IEZpbGVPcmlnaW4uTElNQk87XG4gICAgICAgICAgc3RhdGUuc2VydmVyRmlsZVJlZmVyZW5jZSA9IG1ldGEuc291cmNlO1xuICAgICAgICAgIHN0YXRlLnN0YXR1cyA9IEl0ZW1TdGF0dXMuUFJPQ0VTU0lOR19DT01QTEVURTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHNpemUgaGFzIGJlZW4gdXBkYXRlZFxuICAgICAgICBmaXJlKCdsb2FkLW1ldGEnKTtcbiAgICAgIH0pO1xuXG4gICAgICAvLyB0aGUgZmlsZSBpcyBub3cgbG9hZGluZyB3ZSBuZWVkIHRvIHVwZGF0ZSB0aGUgcHJvZ3Jlc3MgaW5kaWNhdG9yc1xuICAgICAgbG9hZGVyLm9uKCdwcm9ncmVzcycsIGZ1bmN0aW9uKHByb2dyZXNzKSB7XG4gICAgICAgIHNldFN0YXR1cyhJdGVtU3RhdHVzLkxPQURJTkcpO1xuXG4gICAgICAgIGZpcmUoJ2xvYWQtcHJvZ3Jlc3MnLCBwcm9ncmVzcyk7XG4gICAgICB9KTtcblxuICAgICAgLy8gYW4gZXJyb3Igd2FzIHRocm93biB3aGlsZSBsb2FkaW5nIHRoZSBmaWxlLCB3ZSBuZWVkIHRvIHN3aXRjaCB0byBlcnJvciBzdGF0ZVxuICAgICAgbG9hZGVyLm9uKCdlcnJvcicsIGZ1bmN0aW9uKGVycm9yKSB7XG4gICAgICAgIHNldFN0YXR1cyhJdGVtU3RhdHVzLkxPQURfRVJST1IpO1xuXG4gICAgICAgIGZpcmUoJ2xvYWQtcmVxdWVzdC1lcnJvcicsIGVycm9yKTtcbiAgICAgIH0pO1xuXG4gICAgICAvLyB1c2VyIG9yIGFub3RoZXIgcHJvY2VzcyBhYm9ydGVkIHRoZSBmaWxlIGxvYWQgKGNhbm5vdCByZXRyeSlcbiAgICAgIGxvYWRlci5vbignYWJvcnQnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgc2V0U3RhdHVzKEl0ZW1TdGF0dXMuSU5JVCk7XG4gICAgICAgIGZpcmUoJ2xvYWQtYWJvcnQnKTtcbiAgICAgIH0pO1xuXG4gICAgICAvLyBkb25lIGxvYWRpbmdcbiAgICAgIGxvYWRlci5vbignbG9hZCcsIGZ1bmN0aW9uKGZpbGUpIHtcbiAgICAgICAgLy8gYXMgd2UndmUgbm93IGxvYWRlZCB0aGUgZmlsZSB0aGUgbG9hZGVyIGlzIG5vIGxvbmdlciByZXF1aXJlZFxuICAgICAgICBzdGF0ZS5hY3RpdmVMb2FkZXIgPSBudWxsO1xuXG4gICAgICAgIC8vIGNhbGxlZCB3aGVuIGZpbGUgaGFzIGxvYWRlZCBzdWNjZXNmdWxseVxuICAgICAgICB2YXIgc3VjY2VzcyA9IGZ1bmN0aW9uIHN1Y2Nlc3MocmVzdWx0KSB7XG4gICAgICAgICAgLy8gc2V0IChwb3NzaWJseSkgdHJhbnNmb3JtZWQgZmlsZVxuICAgICAgICAgIHN0YXRlLmZpbGUgPSBpc0ZpbGUocmVzdWx0KSA/IHJlc3VsdCA6IHN0YXRlLmZpbGU7XG5cbiAgICAgICAgICAvLyBmaWxlIHJlY2VpdmVkXG4gICAgICAgICAgaWYgKG9yaWdpbiA9PT0gRmlsZU9yaWdpbi5MSU1CTyAmJiBzdGF0ZS5zZXJ2ZXJGaWxlUmVmZXJlbmNlKSB7XG4gICAgICAgICAgICBzZXRTdGF0dXMoSXRlbVN0YXR1cy5QUk9DRVNTSU5HX0NPTVBMRVRFKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2V0U3RhdHVzKEl0ZW1TdGF0dXMuSURMRSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgZmlyZSgnbG9hZCcpO1xuICAgICAgICB9O1xuXG4gICAgICAgIHZhciBlcnJvciA9IGZ1bmN0aW9uIGVycm9yKHJlc3VsdCkge1xuICAgICAgICAgIC8vIHNldCBvcmlnaW5hbCBmaWxlXG4gICAgICAgICAgc3RhdGUuZmlsZSA9IGZpbGU7XG4gICAgICAgICAgZmlyZSgnbG9hZC1tZXRhJyk7XG5cbiAgICAgICAgICBzZXRTdGF0dXMoSXRlbVN0YXR1cy5MT0FEX0VSUk9SKTtcbiAgICAgICAgICBmaXJlKCdsb2FkLWZpbGUtZXJyb3InLCByZXN1bHQpO1xuICAgICAgICB9O1xuXG4gICAgICAgIC8vIGlmIHdlIGFscmVhZHkgaGF2ZSBhIHNlcnZlciBmaWxlIHJlZmVyZW5jZSwgd2UgZG9uJ3QgbmVlZCB0byBjYWxsIHRoZSBvbmxvYWQgbWV0aG9kXG4gICAgICAgIGlmIChzdGF0ZS5zZXJ2ZXJGaWxlUmVmZXJlbmNlKSB7XG4gICAgICAgICAgc3VjY2VzcyhmaWxlKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyBubyBzZXJ2ZXIgaWQsIGxldCdzIGdpdmUgdGhpcyBmaWxlIHRoZSBmdWxsIHRyZWF0bWVudFxuICAgICAgICBvbmxvYWQoZmlsZSwgc3VjY2VzcywgZXJyb3IpO1xuICAgICAgfSk7XG5cbiAgICAgIC8vIHNldCBsb2FkZXIgc291cmNlIGRhdGFcbiAgICAgIGxvYWRlci5zZXRTb3VyY2Uoc291cmNlKTtcblxuICAgICAgLy8gc2V0IGFzIGFjdGl2ZSBsb2FkZXJcbiAgICAgIHN0YXRlLmFjdGl2ZUxvYWRlciA9IGxvYWRlcjtcblxuICAgICAgLy8gbG9hZCB0aGUgc291cmNlIGRhdGFcbiAgICAgIGxvYWRlci5sb2FkKCk7XG4gICAgfTtcblxuICAgIHZhciByZXRyeUxvYWQgPSBmdW5jdGlvbiByZXRyeUxvYWQoKSB7XG4gICAgICBpZiAoIXN0YXRlLmFjdGl2ZUxvYWRlcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBzdGF0ZS5hY3RpdmVMb2FkZXIubG9hZCgpO1xuICAgIH07XG5cbiAgICB2YXIgYWJvcnRMb2FkID0gZnVuY3Rpb24gYWJvcnRMb2FkKCkge1xuICAgICAgaWYgKHN0YXRlLmFjdGl2ZUxvYWRlcikge1xuICAgICAgICBzdGF0ZS5hY3RpdmVMb2FkZXIuYWJvcnQoKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgc2V0U3RhdHVzKEl0ZW1TdGF0dXMuSU5JVCk7XG4gICAgICBmaXJlKCdsb2FkLWFib3J0Jyk7XG4gICAgfTtcblxuICAgIC8vXG4gICAgLy8gbG9naWMgdG8gcHJvY2VzcyBhIGZpbGVcbiAgICAvL1xuICAgIHZhciBwcm9jZXNzID0gZnVuY3Rpb24gcHJvY2Vzcyhwcm9jZXNzb3IsIG9ucHJvY2Vzcykge1xuICAgICAgLy8gbm93IHByb2Nlc3NpbmdcbiAgICAgIHNldFN0YXR1cyhJdGVtU3RhdHVzLlBST0NFU1NJTkcpO1xuXG4gICAgICAvLyByZXNldCBhYm9ydCBjYWxsYmFja1xuICAgICAgYWJvcnRQcm9jZXNzaW5nUmVxdWVzdENvbXBsZXRlID0gbnVsbDtcblxuICAgICAgLy8gaWYgbm8gZmlsZSBsb2FkZWQgd2UnbGwgd2FpdCBmb3IgdGhlIGxvYWQgZXZlbnRcbiAgICAgIGlmICghKHN0YXRlLmZpbGUgaW5zdGFuY2VvZiBCbG9iKSkge1xuICAgICAgICBhcGkub24oJ2xvYWQnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICBwcm9jZXNzKHByb2Nlc3Nvciwgb25wcm9jZXNzKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgLy8gc2V0dXAgcHJvY2Vzc29yXG4gICAgICBwcm9jZXNzb3Iub24oJ2xvYWQnLCBmdW5jdGlvbihzZXJ2ZXJGaWxlUmVmZXJlbmNlKSB7XG4gICAgICAgIC8vIG5lZWQgdGhpcyBpZCB0byBiZSBhYmxlIHRvIHJldmVydCB0aGUgdXBsb2FkXG4gICAgICAgIHN0YXRlLnNlcnZlckZpbGVSZWZlcmVuY2UgPSBzZXJ2ZXJGaWxlUmVmZXJlbmNlO1xuICAgICAgfSk7XG5cbiAgICAgIHByb2Nlc3Nvci5vbignbG9hZC1wZXJjZWl2ZWQnLCBmdW5jdGlvbihzZXJ2ZXJGaWxlUmVmZXJlbmNlKSB7XG4gICAgICAgIC8vIG5vIGxvbmdlciByZXF1aXJlZFxuICAgICAgICBzdGF0ZS5hY3RpdmVQcm9jZXNzb3IgPSBudWxsO1xuXG4gICAgICAgIC8vIG5lZWQgdGhpcyBpZCB0byBiZSBhYmxlIHRvIHJldmVyIHRoZSB1cGxvYWRcbiAgICAgICAgc3RhdGUuc2VydmVyRmlsZVJlZmVyZW5jZSA9IHNlcnZlckZpbGVSZWZlcmVuY2U7XG5cbiAgICAgICAgc2V0U3RhdHVzKEl0ZW1TdGF0dXMuUFJPQ0VTU0lOR19DT01QTEVURSk7XG4gICAgICAgIGZpcmUoJ3Byb2Nlc3MtY29tcGxldGUnLCBzZXJ2ZXJGaWxlUmVmZXJlbmNlKTtcbiAgICAgIH0pO1xuXG4gICAgICBwcm9jZXNzb3Iub24oJ3N0YXJ0JywgZnVuY3Rpb24oKSB7XG4gICAgICAgIGZpcmUoJ3Byb2Nlc3Mtc3RhcnQnKTtcbiAgICAgIH0pO1xuXG4gICAgICBwcm9jZXNzb3Iub24oJ2Vycm9yJywgZnVuY3Rpb24oZXJyb3IpIHtcbiAgICAgICAgc3RhdGUuYWN0aXZlUHJvY2Vzc29yID0gbnVsbDtcbiAgICAgICAgc2V0U3RhdHVzKEl0ZW1TdGF0dXMuUFJPQ0VTU0lOR19FUlJPUik7XG4gICAgICAgIGZpcmUoJ3Byb2Nlc3MtZXJyb3InLCBlcnJvcik7XG4gICAgICB9KTtcblxuICAgICAgcHJvY2Vzc29yLm9uKCdhYm9ydCcsIGZ1bmN0aW9uKHNlcnZlckZpbGVSZWZlcmVuY2UpIHtcbiAgICAgICAgc3RhdGUuYWN0aXZlUHJvY2Vzc29yID0gbnVsbDtcblxuICAgICAgICAvLyBpZiBmaWxlIHdhcyB1cGxvYWRlZCBidXQgcHJvY2Vzc2luZyB3YXMgY2FuY2VsbGVkIGR1cmluZyBwZXJjZWl2ZWQgcHJvY2Vzc29yIHRpbWUgc3RvcmUgZmlsZSByZWZlcmVuY2VcbiAgICAgICAgc3RhdGUuc2VydmVyRmlsZVJlZmVyZW5jZSA9IHNlcnZlckZpbGVSZWZlcmVuY2U7XG5cbiAgICAgICAgc2V0U3RhdHVzKEl0ZW1TdGF0dXMuSURMRSk7XG4gICAgICAgIGZpcmUoJ3Byb2Nlc3MtYWJvcnQnKTtcblxuICAgICAgICAvLyBoYXMgdGltZW91dCBzbyBkb2Vzbid0IGludGVyZmVyZSB3aXRoIHJlbW92ZSBhY3Rpb25cbiAgICAgICAgaWYgKGFib3J0UHJvY2Vzc2luZ1JlcXVlc3RDb21wbGV0ZSkge1xuICAgICAgICAgIGFib3J0UHJvY2Vzc2luZ1JlcXVlc3RDb21wbGV0ZSgpO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgcHJvY2Vzc29yLm9uKCdwcm9ncmVzcycsIGZ1bmN0aW9uKHByb2dyZXNzKSB7XG4gICAgICAgIGZpcmUoJ3Byb2Nlc3MtcHJvZ3Jlc3MnLCBwcm9ncmVzcyk7XG4gICAgICB9KTtcblxuICAgICAgLy8gd2hlbiBzdWNjZXNzZnVsbHkgdHJhbnNmb3JtZWRcbiAgICAgIHZhciBzdWNjZXNzID0gZnVuY3Rpb24gc3VjY2VzcyhmaWxlKSB7XG4gICAgICAgIC8vIGlmIHdhcyBhcmNoaXZlZCBpbiB0aGUgbWVhbiB0aW1lLCBkb24ndCBwcm9jZXNzXG4gICAgICAgIGlmIChzdGF0ZS5hcmNoaXZlZCkgcmV0dXJuO1xuXG4gICAgICAgIC8vIHByb2Nlc3MgZmlsZSFcbiAgICAgICAgcHJvY2Vzc29yLnByb2Nlc3MoZmlsZSwgT2JqZWN0LmFzc2lnbih7fSwgbWV0YWRhdGEpKTtcbiAgICAgIH07XG5cbiAgICAgIC8vIHNvbWV0aGluZyB3ZW50IHdyb25nIGR1cmluZyB0cmFuc2Zvcm0gcGhhc2VcbiAgICAgIHZhciBlcnJvciA9IGZ1bmN0aW9uIGVycm9yKHJlc3VsdCkge307XG5cbiAgICAgIC8vIHN0YXJ0IHByb2Nlc3NpbmcgdGhlIGZpbGVcbiAgICAgIG9ucHJvY2VzcyhzdGF0ZS5maWxlLCBzdWNjZXNzLCBlcnJvcik7XG5cbiAgICAgIC8vIHNldCBhcyBhY3RpdmUgcHJvY2Vzc29yXG4gICAgICBzdGF0ZS5hY3RpdmVQcm9jZXNzb3IgPSBwcm9jZXNzb3I7XG4gICAgfTtcblxuICAgIHZhciByZXF1ZXN0UHJvY2Vzc2luZyA9IGZ1bmN0aW9uIHJlcXVlc3RQcm9jZXNzaW5nKCkge1xuICAgICAgc2V0U3RhdHVzKEl0ZW1TdGF0dXMuUFJPQ0VTU0lOR19RVUVVRUQpO1xuICAgIH07XG5cbiAgICB2YXIgYWJvcnRQcm9jZXNzaW5nID0gZnVuY3Rpb24gYWJvcnRQcm9jZXNzaW5nKCkge1xuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUpIHtcbiAgICAgICAgaWYgKCFzdGF0ZS5hY3RpdmVQcm9jZXNzb3IpIHtcbiAgICAgICAgICBzZXRTdGF0dXMoSXRlbVN0YXR1cy5JRExFKTtcbiAgICAgICAgICBmaXJlKCdwcm9jZXNzLWFib3J0Jyk7XG5cbiAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgYWJvcnRQcm9jZXNzaW5nUmVxdWVzdENvbXBsZXRlID0gZnVuY3Rpb24gYWJvcnRQcm9jZXNzaW5nUmVxdWVzdENvbXBsZXRlKCkge1xuICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgfTtcblxuICAgICAgICBzdGF0ZS5hY3RpdmVQcm9jZXNzb3IuYWJvcnQoKTtcbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICAvL1xuICAgIC8vIGxvZ2ljIHRvIHJldmVydCBhIHByb2Nlc3NlZCBmaWxlXG4gICAgLy9cbiAgICB2YXIgcmV2ZXJ0ID0gZnVuY3Rpb24gcmV2ZXJ0KHJldmVydEZpbGVVcGxvYWQsIGZvcmNlUmV2ZXJ0KSB7XG4gICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIC8vIGNhbm5vdCByZXZlcnQgd2l0aG91dCBhIHNlcnZlciBpZCBmb3IgdGhpcyBwcm9jZXNzXG4gICAgICAgIGlmIChzdGF0ZS5zZXJ2ZXJGaWxlUmVmZXJlbmNlID09PSBudWxsKSB7XG4gICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHJldmVydCB0aGUgdXBsb2FkIChmaXJlIGFuZCBmb3JnZXQpXG4gICAgICAgIHJldmVydEZpbGVVcGxvYWQoXG4gICAgICAgICAgc3RhdGUuc2VydmVyRmlsZVJlZmVyZW5jZSxcbiAgICAgICAgICBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIC8vIHJlc2V0IGZpbGUgc2VydmVyIGlkIGFzIG5vdyBpdCdzIG5vIGF2YWlsYWJsZSBvbiB0aGUgc2VydmVyXG4gICAgICAgICAgICBzdGF0ZS5zZXJ2ZXJGaWxlUmVmZXJlbmNlID0gbnVsbDtcbiAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIGZ1bmN0aW9uKGVycm9yKSB7XG4gICAgICAgICAgICAvLyBkb24ndCBzZXQgZXJyb3Igc3RhdGUgd2hlbiByZXZlcnRpbmcgaXMgb3B0aW9uYWwsIGl0IHdpbGwgYWx3YXlzIHJlc29sdmVcbiAgICAgICAgICAgIGlmICghZm9yY2VSZXZlcnQpIHtcbiAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIG9oIG5vIGVycm9yc1xuICAgICAgICAgICAgc2V0U3RhdHVzKEl0ZW1TdGF0dXMuUFJPQ0VTU0lOR19SRVZFUlRfRVJST1IpO1xuICAgICAgICAgICAgZmlyZSgncHJvY2Vzcy1yZXZlcnQtZXJyb3InKTtcbiAgICAgICAgICAgIHJlamVjdChlcnJvcik7XG4gICAgICAgICAgfVxuICAgICAgICApO1xuXG4gICAgICAgIC8vIGZpcmUgZXZlbnRcbiAgICAgICAgc2V0U3RhdHVzKEl0ZW1TdGF0dXMuSURMRSk7XG4gICAgICAgIGZpcmUoJ3Byb2Nlc3MtcmV2ZXJ0Jyk7XG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgLy8gZXhwb3NlZCBtZXRob2RzXG4gICAgdmFyIF9zZXRNZXRhZGF0YSA9IGZ1bmN0aW9uIHNldE1ldGFkYXRhKGtleSwgdmFsdWUsIHNpbGVudCkge1xuICAgICAgdmFyIGtleXMgPSBrZXkuc3BsaXQoJy4nKTtcbiAgICAgIHZhciByb290ID0ga2V5c1swXTtcbiAgICAgIHZhciBsYXN0ID0ga2V5cy5wb3AoKTtcbiAgICAgIHZhciBkYXRhID0gbWV0YWRhdGE7XG4gICAgICBrZXlzLmZvckVhY2goZnVuY3Rpb24oa2V5KSB7XG4gICAgICAgIHJldHVybiAoZGF0YSA9IGRhdGFba2V5XSk7XG4gICAgICB9KTtcblxuICAgICAgLy8gY29tcGFyZSBvbGQgdmFsdWUgYWdhaW5zdCBuZXcgdmFsdWUsIGlmIHRoZXkncmUgdGhlIHNhbWUsIHdlJ3JlIG5vdCB1cGRhdGluZ1xuICAgICAgaWYgKEpTT04uc3RyaW5naWZ5KGRhdGFbbGFzdF0pID09PSBKU09OLnN0cmluZ2lmeSh2YWx1ZSkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICAvLyB1cGRhdGUgdmFsdWVcbiAgICAgIGRhdGFbbGFzdF0gPSB2YWx1ZTtcblxuICAgICAgaWYgKHNpbGVudCkgcmV0dXJuO1xuXG4gICAgICBmaXJlKCdtZXRhZGF0YS11cGRhdGUnLCB7XG4gICAgICAgIGtleTogcm9vdCxcbiAgICAgICAgdmFsdWU6IG1ldGFkYXRhW3Jvb3RdXG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgdmFyIGdldE1ldGFkYXRhID0gZnVuY3Rpb24gZ2V0TWV0YWRhdGEoa2V5KSB7XG4gICAgICByZXR1cm4gZGVlcENsb25lT2JqZWN0KGtleSA/IG1ldGFkYXRhW2tleV0gOiBtZXRhZGF0YSk7XG4gICAgfTtcblxuICAgIHZhciBhcGkgPSBPYmplY3QuYXNzaWduKFxuICAgICAge1xuICAgICAgICBpZDoge1xuICAgICAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICAgICAgcmV0dXJuIGlkO1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgb3JpZ2luOiB7XG4gICAgICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgICAgICByZXR1cm4gb3JpZ2luO1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgc2VydmVySWQ6IHtcbiAgICAgICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZS5zZXJ2ZXJGaWxlUmVmZXJlbmNlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgc3RhdHVzOiB7XG4gICAgICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgICAgICByZXR1cm4gc3RhdGUuc3RhdHVzO1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgZmlsZW5hbWU6IHtcbiAgICAgICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZS5maWxlLm5hbWU7XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBmaWxlbmFtZVdpdGhvdXRFeHRlbnNpb246IHtcbiAgICAgICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgICAgIHJldHVybiBnZXRGaWxlbmFtZVdpdGhvdXRFeHRlbnNpb24oc3RhdGUuZmlsZS5uYW1lKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGZpbGVFeHRlbnNpb246IHsgZ2V0OiBnZXRGaWxlRXh0ZW5zaW9uIH0sXG4gICAgICAgIGZpbGVUeXBlOiB7IGdldDogZ2V0RmlsZVR5cGUgfSxcbiAgICAgICAgZmlsZVNpemU6IHsgZ2V0OiBnZXRGaWxlU2l6ZSB9LFxuICAgICAgICBmaWxlOiB7IGdldDogZ2V0RmlsZSB9LFxuXG4gICAgICAgIHNvdXJjZToge1xuICAgICAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICAgICAgcmV0dXJuIHN0YXRlLnNvdXJjZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgZ2V0TWV0YWRhdGE6IGdldE1ldGFkYXRhLFxuICAgICAgICBzZXRNZXRhZGF0YTogZnVuY3Rpb24gc2V0TWV0YWRhdGEoa2V5LCB2YWx1ZSwgc2lsZW50KSB7XG4gICAgICAgICAgaWYgKGlzT2JqZWN0KGtleSkpIHtcbiAgICAgICAgICAgIHZhciBkYXRhID0ga2V5O1xuICAgICAgICAgICAgT2JqZWN0LmtleXMoZGF0YSkuZm9yRWFjaChmdW5jdGlvbihrZXkpIHtcbiAgICAgICAgICAgICAgX3NldE1ldGFkYXRhKGtleSwgZGF0YVtrZXldLCB2YWx1ZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBrZXk7XG4gICAgICAgICAgfVxuICAgICAgICAgIF9zZXRNZXRhZGF0YShrZXksIHZhbHVlLCBzaWxlbnQpO1xuICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgfSxcblxuICAgICAgICBleHRlbmQ6IGZ1bmN0aW9uIGV4dGVuZChuYW1lLCBoYW5kbGVyKSB7XG4gICAgICAgICAgcmV0dXJuIChpdGVtQVBJW25hbWVdID0gaGFuZGxlcik7XG4gICAgICAgIH0sXG5cbiAgICAgICAgYWJvcnRMb2FkOiBhYm9ydExvYWQsXG4gICAgICAgIHJldHJ5TG9hZDogcmV0cnlMb2FkLFxuICAgICAgICByZXF1ZXN0UHJvY2Vzc2luZzogcmVxdWVzdFByb2Nlc3NpbmcsXG4gICAgICAgIGFib3J0UHJvY2Vzc2luZzogYWJvcnRQcm9jZXNzaW5nLFxuXG4gICAgICAgIGxvYWQ6IGxvYWQsXG4gICAgICAgIHByb2Nlc3M6IHByb2Nlc3MsXG4gICAgICAgIHJldmVydDogcmV2ZXJ0XG4gICAgICB9LFxuXG4gICAgICBvbigpLFxuICAgICAge1xuICAgICAgICBmcmVlemU6IGZ1bmN0aW9uIGZyZWV6ZSgpIHtcbiAgICAgICAgICByZXR1cm4gKHN0YXRlLmZyb3plbiA9IHRydWUpO1xuICAgICAgICB9LFxuXG4gICAgICAgIHJlbGVhc2U6IGZ1bmN0aW9uIHJlbGVhc2UoKSB7XG4gICAgICAgICAgcmV0dXJuIChzdGF0ZS5yZWxlYXNlZCA9IHRydWUpO1xuICAgICAgICB9LFxuICAgICAgICByZWxlYXNlZDoge1xuICAgICAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICAgICAgcmV0dXJuIHN0YXRlLnJlbGVhc2VkO1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICBhcmNoaXZlOiBmdW5jdGlvbiBhcmNoaXZlKCkge1xuICAgICAgICAgIHJldHVybiAoc3RhdGUuYXJjaGl2ZWQgPSB0cnVlKTtcbiAgICAgICAgfSxcbiAgICAgICAgYXJjaGl2ZWQ6IHtcbiAgICAgICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZS5hcmNoaXZlZDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICApO1xuXG4gICAgLy8gY3JlYXRlIGl0IGhlcmUgaW5zdGVhZCBvZiByZXR1cm5pbmcgaXQgaW5zdGFudGx5IHNvIHdlIGNhbiBleHRlbmQgaXQgbGF0ZXJcbiAgICB2YXIgaXRlbUFQSSA9IGNyZWF0ZU9iamVjdChhcGkpO1xuXG4gICAgcmV0dXJuIGl0ZW1BUEk7XG4gIH07XG5cbiAgdmFyIGdldEl0ZW1JbmRleEJ5UXVlcnkgPSBmdW5jdGlvbiBnZXRJdGVtSW5kZXhCeVF1ZXJ5KGl0ZW1zLCBxdWVyeSkge1xuICAgIC8vIGp1c3QgcmV0dXJuIGZpcnN0IGluZGV4XG4gICAgaWYgKGlzRW1wdHkocXVlcnkpKSB7XG4gICAgICByZXR1cm4gMDtcbiAgICB9XG5cbiAgICAvLyBpbnZhbGlkIHF1ZXJpZXNcbiAgICBpZiAoIWlzU3RyaW5nKHF1ZXJ5KSkge1xuICAgICAgcmV0dXJuIC0xO1xuICAgIH1cblxuICAgIC8vIHJldHVybiBpdGVtIGJ5IGlkIChvciAtMSBpZiBub3QgZm91bmQpXG4gICAgcmV0dXJuIGl0ZW1zLmZpbmRJbmRleChmdW5jdGlvbihpdGVtKSB7XG4gICAgICByZXR1cm4gaXRlbS5pZCA9PT0gcXVlcnk7XG4gICAgfSk7XG4gIH07XG5cbiAgdmFyIGdldEl0ZW1CeUlkID0gZnVuY3Rpb24gZ2V0SXRlbUJ5SWQoaXRlbXMsIGl0ZW1JZCkge1xuICAgIHZhciBpbmRleCA9IGdldEl0ZW1JbmRleEJ5UXVlcnkoaXRlbXMsIGl0ZW1JZCk7XG4gICAgaWYgKGluZGV4IDwgMCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICByZXR1cm4gaXRlbXNbaW5kZXhdIHx8IG51bGw7XG4gIH07XG5cbiAgdmFyIGZldGNoTG9jYWwgPSBmdW5jdGlvbiBmZXRjaExvY2FsKFxuICAgIHVybCxcbiAgICBsb2FkLFxuICAgIGVycm9yLFxuICAgIHByb2dyZXNzLFxuICAgIGFib3J0LFxuICAgIGhlYWRlcnNcbiAgKSB7XG4gICAgdmFyIHJlcXVlc3QgPSBzZW5kUmVxdWVzdChudWxsLCB1cmwsIHtcbiAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICByZXNwb25zZVR5cGU6ICdibG9iJ1xuICAgIH0pO1xuXG4gICAgcmVxdWVzdC5vbmxvYWQgPSBmdW5jdGlvbih4aHIpIHtcbiAgICAgIC8vIGdldCBoZWFkZXJzXG4gICAgICB2YXIgaGVhZGVycyA9IHhoci5nZXRBbGxSZXNwb25zZUhlYWRlcnMoKTtcblxuICAgICAgLy8gZ2V0IGZpbGVuYW1lXG4gICAgICB2YXIgZmlsZW5hbWUgPVxuICAgICAgICBnZXRGaWxlSW5mb0Zyb21IZWFkZXJzKGhlYWRlcnMpLm5hbWUgfHwgZ2V0RmlsZW5hbWVGcm9tVVJMKHVybCk7XG5cbiAgICAgIC8vIGNyZWF0ZSByZXNwb25zZVxuICAgICAgbG9hZChcbiAgICAgICAgY3JlYXRlUmVzcG9uc2UoXG4gICAgICAgICAgJ2xvYWQnLFxuICAgICAgICAgIHhoci5zdGF0dXMsXG4gICAgICAgICAgZ2V0RmlsZUZyb21CbG9iKHhoci5yZXNwb25zZSwgZmlsZW5hbWUpLFxuICAgICAgICAgIGhlYWRlcnNcbiAgICAgICAgKVxuICAgICAgKTtcbiAgICB9O1xuXG4gICAgcmVxdWVzdC5vbmVycm9yID0gZnVuY3Rpb24oeGhyKSB7XG4gICAgICBlcnJvcihcbiAgICAgICAgY3JlYXRlUmVzcG9uc2UoXG4gICAgICAgICAgJ2Vycm9yJyxcbiAgICAgICAgICB4aHIuc3RhdHVzLFxuICAgICAgICAgIHhoci5zdGF0dXNUZXh0LFxuICAgICAgICAgIHhoci5nZXRBbGxSZXNwb25zZUhlYWRlcnMoKVxuICAgICAgICApXG4gICAgICApO1xuICAgIH07XG5cbiAgICByZXF1ZXN0Lm9uaGVhZGVycyA9IGZ1bmN0aW9uKHhocikge1xuICAgICAgaGVhZGVycyhcbiAgICAgICAgY3JlYXRlUmVzcG9uc2UoJ2hlYWRlcnMnLCB4aHIuc3RhdHVzLCBudWxsLCB4aHIuZ2V0QWxsUmVzcG9uc2VIZWFkZXJzKCkpXG4gICAgICApO1xuICAgIH07XG5cbiAgICByZXF1ZXN0Lm9udGltZW91dCA9IGNyZWF0ZVRpbWVvdXRSZXNwb25zZShlcnJvcik7XG4gICAgcmVxdWVzdC5vbnByb2dyZXNzID0gcHJvZ3Jlc3M7XG4gICAgcmVxdWVzdC5vbmFib3J0ID0gYWJvcnQ7XG5cbiAgICAvLyBzaG91bGQgcmV0dXJuIHJlcXVlc3RcbiAgICByZXR1cm4gcmVxdWVzdDtcbiAgfTtcblxuICB2YXIgZ2V0RG9tYWluRnJvbVVSTCA9IGZ1bmN0aW9uIGdldERvbWFpbkZyb21VUkwodXJsKSB7XG4gICAgaWYgKHVybC5pbmRleE9mKCcvLycpID09PSAwKSB7XG4gICAgICB1cmwgPSBsb2NhdGlvbi5wcm90b2NvbCArIHVybDtcbiAgICB9XG4gICAgcmV0dXJuIHVybFxuICAgICAgLnRvTG93ZXJDYXNlKClcbiAgICAgIC5yZXBsYWNlKCdibG9iOicsICcnKVxuICAgICAgLnJlcGxhY2UoLyhbYS16XSk/OlxcL1xcLy8sICckMScpXG4gICAgICAuc3BsaXQoJy8nKVswXTtcbiAgfTtcblxuICB2YXIgaXNFeHRlcm5hbFVSTCA9IGZ1bmN0aW9uIGlzRXh0ZXJuYWxVUkwodXJsKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICh1cmwuaW5kZXhPZignOicpID4gLTEgfHwgdXJsLmluZGV4T2YoJy8vJykgPiAtMSkgJiZcbiAgICAgIGdldERvbWFpbkZyb21VUkwobG9jYXRpb24uaHJlZikgIT09IGdldERvbWFpbkZyb21VUkwodXJsKVxuICAgICk7XG4gIH07XG5cbiAgdmFyIGR5bmFtaWNMYWJlbCA9IGZ1bmN0aW9uIGR5bmFtaWNMYWJlbChsYWJlbCkge1xuICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBpc0Z1bmN0aW9uKGxhYmVsKSA/IGxhYmVsLmFwcGx5KHZvaWQgMCwgYXJndW1lbnRzKSA6IGxhYmVsO1xuICAgIH07XG4gIH07XG5cbiAgdmFyIGlzTW9ja0l0ZW0gPSBmdW5jdGlvbiBpc01vY2tJdGVtKGl0ZW0pIHtcbiAgICByZXR1cm4gIWlzRmlsZShpdGVtLmZpbGUpO1xuICB9O1xuXG4gIHZhciBsaXN0VXBkYXRlZCA9IGZ1bmN0aW9uIGxpc3RVcGRhdGVkKGRpc3BhdGNoLCBzdGF0ZSkge1xuICAgIGNsZWFyVGltZW91dChzdGF0ZS5saXN0VXBkYXRlVGltZW91dCk7XG4gICAgc3RhdGUubGlzdFVwZGF0ZVRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgZGlzcGF0Y2goJ0RJRF9VUERBVEVfSVRFTVMnLCB7IGl0ZW1zOiBnZXRBY3RpdmVJdGVtcyhzdGF0ZS5pdGVtcykgfSk7XG4gICAgfSwgMCk7XG4gIH07XG5cbiAgdmFyIG9wdGlvbmFsUHJvbWlzZSA9IGZ1bmN0aW9uIG9wdGlvbmFsUHJvbWlzZShmbikge1xuICAgIGZvciAoXG4gICAgICB2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsXG4gICAgICAgIHBhcmFtcyA9IG5ldyBBcnJheShfbGVuID4gMSA/IF9sZW4gLSAxIDogMCksXG4gICAgICAgIF9rZXkgPSAxO1xuICAgICAgX2tleSA8IF9sZW47XG4gICAgICBfa2V5KytcbiAgICApIHtcbiAgICAgIHBhcmFtc1tfa2V5IC0gMV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlKSB7XG4gICAgICBpZiAoIWZuKSB7XG4gICAgICAgIHJldHVybiByZXNvbHZlKHRydWUpO1xuICAgICAgfVxuXG4gICAgICB2YXIgcmVzdWx0ID0gZm4uYXBwbHkodm9pZCAwLCBwYXJhbXMpO1xuXG4gICAgICBpZiAocmVzdWx0ID09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIHJlc29sdmUodHJ1ZSk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgcmVzdWx0ID09PSAnYm9vbGVhbicpIHtcbiAgICAgICAgcmV0dXJuIHJlc29sdmUocmVzdWx0KTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiByZXN1bHQudGhlbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICByZXN1bHQudGhlbihyZXNvbHZlKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcblxuICB2YXIgc29ydEl0ZW1zID0gZnVuY3Rpb24gc29ydEl0ZW1zKHN0YXRlLCBjb21wYXJlKSB7XG4gICAgc3RhdGUuaXRlbXMuc29ydChmdW5jdGlvbihhLCBiKSB7XG4gICAgICByZXR1cm4gY29tcGFyZShjcmVhdGVJdGVtQVBJKGEpLCBjcmVhdGVJdGVtQVBJKGIpKTtcbiAgICB9KTtcbiAgfTtcblxuICAvLyByZXR1cm5zIGl0ZW0gYmFzZWQgb24gc3RhdGVcbiAgdmFyIGdldEl0ZW1CeVF1ZXJ5RnJvbVN0YXRlID0gZnVuY3Rpb24gZ2V0SXRlbUJ5UXVlcnlGcm9tU3RhdGUoXG4gICAgc3RhdGUsXG4gICAgaXRlbUhhbmRsZXJcbiAgKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIF9yZWYgPVxuICAgICAgICAgIGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkXG4gICAgICAgICAgICA/IGFyZ3VtZW50c1swXVxuICAgICAgICAgICAgOiB7fSxcbiAgICAgICAgcXVlcnkgPSBfcmVmLnF1ZXJ5LFxuICAgICAgICBfcmVmJHN1Y2Nlc3MgPSBfcmVmLnN1Y2Nlc3MsXG4gICAgICAgIHN1Y2Nlc3MgPSBfcmVmJHN1Y2Nlc3MgPT09IHZvaWQgMCA/IGZ1bmN0aW9uKCkge30gOiBfcmVmJHN1Y2Nlc3MsXG4gICAgICAgIF9yZWYkZmFpbHVyZSA9IF9yZWYuZmFpbHVyZSxcbiAgICAgICAgZmFpbHVyZSA9IF9yZWYkZmFpbHVyZSA9PT0gdm9pZCAwID8gZnVuY3Rpb24oKSB7fSA6IF9yZWYkZmFpbHVyZTtcbiAgICAgIHZhciBpdGVtID0gZ2V0SXRlbUJ5UXVlcnkoc3RhdGUuaXRlbXMsIHF1ZXJ5KTtcbiAgICAgIGlmICghaXRlbSkge1xuICAgICAgICBmYWlsdXJlKHtcbiAgICAgICAgICBlcnJvcjogY3JlYXRlUmVzcG9uc2UoJ2Vycm9yJywgMCwgJ0l0ZW0gbm90IGZvdW5kJyksXG5cbiAgICAgICAgICBmaWxlOiBudWxsXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGl0ZW1IYW5kbGVyKGl0ZW0sIHN1Y2Nlc3MsIGZhaWx1cmUpO1xuICAgIH07XG4gIH07XG5cbiAgdmFyIGFjdGlvbnMgPSBmdW5jdGlvbiBhY3Rpb25zKGRpc3BhdGNoLCBxdWVyeSwgc3RhdGUpIHtcbiAgICByZXR1cm4ge1xuICAgICAgLyoqXG4gICAgICAgKiBBYm9ydHMgYWxsIG9uZ29pbmcgcHJvY2Vzc2VzXG4gICAgICAgKi9cbiAgICAgIEFCT1JUX0FMTDogZnVuY3Rpb24gQUJPUlRfQUxMKCkge1xuICAgICAgICBnZXRBY3RpdmVJdGVtcyhzdGF0ZS5pdGVtcykuZm9yRWFjaChmdW5jdGlvbihpdGVtKSB7XG4gICAgICAgICAgaXRlbS5mcmVlemUoKTtcbiAgICAgICAgICBpdGVtLmFib3J0TG9hZCgpO1xuICAgICAgICAgIGl0ZW0uYWJvcnRQcm9jZXNzaW5nKCk7XG4gICAgICAgIH0pO1xuICAgICAgfSxcblxuICAgICAgLyoqXG4gICAgICAgKiBTZXRzIGluaXRpYWwgZmlsZXNcbiAgICAgICAqL1xuICAgICAgRElEX1NFVF9GSUxFUzogZnVuY3Rpb24gRElEX1NFVF9GSUxFUyhfcmVmMikge1xuICAgICAgICB2YXIgX3JlZjIkdmFsdWUgPSBfcmVmMi52YWx1ZSxcbiAgICAgICAgICB2YWx1ZSA9IF9yZWYyJHZhbHVlID09PSB2b2lkIDAgPyBbXSA6IF9yZWYyJHZhbHVlO1xuXG4gICAgICAgIC8vIG1hcCB2YWx1ZXMgdG8gZmlsZSBvYmplY3RzXG4gICAgICAgIHZhciBmaWxlcyA9IHZhbHVlLm1hcChmdW5jdGlvbihmaWxlKSB7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHNvdXJjZTogZmlsZS5zb3VyY2UgPyBmaWxlLnNvdXJjZSA6IGZpbGUsXG4gICAgICAgICAgICBvcHRpb25zOiBmaWxlLm9wdGlvbnNcbiAgICAgICAgICB9O1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyBsb29wIG92ZXIgZmlsZXMsIGlmIGZpbGUgaXMgaW4gbGlzdCwgbGVhdmUgaXQgYmUsIGlmIG5vdCwgcmVtb3ZlXG4gICAgICAgIC8vIHRlc3QgaWYgaXRlbXMgc2hvdWxkIGJlIG1vdmVkXG4gICAgICAgIHZhciBhY3RpdmVJdGVtcyA9IGdldEFjdGl2ZUl0ZW1zKHN0YXRlLml0ZW1zKTtcblxuICAgICAgICBhY3RpdmVJdGVtcy5mb3JFYWNoKGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICAgICAgICAvLyBpZiBpdGVtIG5vdCBpcyBpbiBuZXcgdmFsdWUsIHJlbW92ZVxuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICFmaWxlcy5maW5kKGZ1bmN0aW9uKGZpbGUpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGZpbGUuc291cmNlID09PSBpdGVtLnNvdXJjZSB8fCBmaWxlLnNvdXJjZSA9PT0gaXRlbS5maWxlO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIGRpc3BhdGNoKCdSRU1PVkVfSVRFTScsIHsgcXVlcnk6IGl0ZW0gfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICAvLyBhZGQgbmV3IGZpbGVzXG4gICAgICAgIGFjdGl2ZUl0ZW1zID0gZ2V0QWN0aXZlSXRlbXMoc3RhdGUuaXRlbXMpO1xuICAgICAgICBmaWxlcy5mb3JFYWNoKGZ1bmN0aW9uKGZpbGUsIGluZGV4KSB7XG4gICAgICAgICAgLy8gaWYgZmlsZSBpcyBhbHJlYWR5IGluIGxpc3RcbiAgICAgICAgICBpZiAoXG4gICAgICAgICAgICBhY3RpdmVJdGVtcy5maW5kKGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGl0ZW0uc291cmNlID09PSBmaWxlLnNvdXJjZSB8fCBpdGVtLmZpbGUgPT09IGZpbGUuc291cmNlO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICApXG4gICAgICAgICAgICByZXR1cm47XG5cbiAgICAgICAgICAvLyBub3QgaW4gbGlzdCwgYWRkXG4gICAgICAgICAgZGlzcGF0Y2goXG4gICAgICAgICAgICAnQUREX0lURU0nLFxuICAgICAgICAgICAgT2JqZWN0LmFzc2lnbih7fSwgZmlsZSwge1xuICAgICAgICAgICAgICBpbnRlcmFjdGlvbk1ldGhvZDogSW50ZXJhY3Rpb25NZXRob2QuTk9ORSxcbiAgICAgICAgICAgICAgaW5kZXg6IGluZGV4XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICk7XG4gICAgICAgIH0pO1xuICAgICAgfSxcblxuICAgICAgRElEX1VQREFURV9JVEVNX01FVEFEQVRBOiBmdW5jdGlvbiBESURfVVBEQVRFX0lURU1fTUVUQURBVEEoX3JlZjMpIHtcbiAgICAgICAgdmFyIGlkID0gX3JlZjMuaWQsXG4gICAgICAgICAgY2hhbmdlID0gX3JlZjMuY2hhbmdlO1xuXG4gICAgICAgIHZhciBpdGVtID0gZ2V0SXRlbUJ5SWQoc3RhdGUuaXRlbXMsIGlkKTtcblxuICAgICAgICAvLyBvbmx5IHJldmVydCBhbmQgYXR0ZW1wdCB0byB1cGxvYWQgd2hlbiB3ZSdyZSB1cGxvYWRpbmcgdG8gYSBzZXJ2ZXJcbiAgICAgICAgaWYgKCFxdWVyeSgnSVNfQVNZTkMnKSkge1xuICAgICAgICAgIC8vIHNob3VsZCB3ZSB1cGRhdGUgdGhlIG91dHB1dCBkYXRhXG4gICAgICAgICAgYXBwbHlGaWx0ZXJDaGFpbignU0hPVUxEX1BSRVBBUkVfT1VUUFVUJywgZmFsc2UsIHtcbiAgICAgICAgICAgIGl0ZW06IGl0ZW0sXG4gICAgICAgICAgICBxdWVyeTogcXVlcnlcbiAgICAgICAgICB9KS50aGVuKGZ1bmN0aW9uKHNob3VsZFByZXBhcmVPdXRwdXQpIHtcbiAgICAgICAgICAgIGlmICghc2hvdWxkUHJlcGFyZU91dHB1dCkge1xuICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkaXNwYXRjaChcbiAgICAgICAgICAgICAgJ1JFUVVFU1RfUFJFUEFSRV9PVVRQVVQnLFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcXVlcnk6IGlkLFxuICAgICAgICAgICAgICAgIGl0ZW06IGl0ZW0sXG4gICAgICAgICAgICAgICAgcmVhZHk6IGZ1bmN0aW9uIHJlYWR5KGZpbGUpIHtcbiAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKCdESURfUFJFUEFSRV9PVVRQVVQnLCB7IGlkOiBpZCwgZmlsZTogZmlsZSB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHRydWVcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyBmb3IgYXN5bmMgc2NlbmFyaW9zXG4gICAgICAgIHZhciB1cGxvYWQgPSBmdW5jdGlvbiB1cGxvYWQoKSB7XG4gICAgICAgICAgLy8gd2UgcHVzaCB0aGlzIGZvcndhcmQgYSBiaXQgc28gdGhlIGludGVyZmFjZSBpcyB1cGRhdGVkIGNvcnJlY3RseVxuICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBkaXNwYXRjaCgnUkVRVUVTVF9JVEVNX1BST0NFU1NJTkcnLCB7IHF1ZXJ5OiBpZCB9KTtcbiAgICAgICAgICB9LCAzMik7XG4gICAgICAgIH07XG5cbiAgICAgICAgdmFyIHJldmVydCA9IGZ1bmN0aW9uIHJldmVydChkb1VwbG9hZCkge1xuICAgICAgICAgIGl0ZW1cbiAgICAgICAgICAgIC5yZXZlcnQoXG4gICAgICAgICAgICAgIGNyZWF0ZVJldmVydEZ1bmN0aW9uKFxuICAgICAgICAgICAgICAgIHN0YXRlLm9wdGlvbnMuc2VydmVyLnVybCxcbiAgICAgICAgICAgICAgICBzdGF0ZS5vcHRpb25zLnNlcnZlci5yZXZlcnRcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgcXVlcnkoJ0dFVF9GT1JDRV9SRVZFUlQnKVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgLnRoZW4oZG9VcGxvYWQgPyB1cGxvYWQgOiBmdW5jdGlvbigpIHt9KVxuICAgICAgICAgICAgLmNhdGNoKGZ1bmN0aW9uKCkge30pO1xuICAgICAgICB9O1xuXG4gICAgICAgIHZhciBhYm9ydCA9IGZ1bmN0aW9uIGFib3J0KGRvVXBsb2FkKSB7XG4gICAgICAgICAgaXRlbS5hYm9ydFByb2Nlc3NpbmcoKS50aGVuKGRvVXBsb2FkID8gdXBsb2FkIDogZnVuY3Rpb24oKSB7fSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgLy8gaWYgd2Ugc2hvdWxkIHJlLXVwbG9hZCB0aGUgZmlsZSBpbW1pZGlhdGVseVxuICAgICAgICBpZiAoaXRlbS5zdGF0dXMgPT09IEl0ZW1TdGF0dXMuUFJPQ0VTU0lOR19DT01QTEVURSkge1xuICAgICAgICAgIHJldHVybiByZXZlcnQoc3RhdGUub3B0aW9ucy5pbnN0YW50VXBsb2FkKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGlmIGN1cnJlbnRseSB1cGxvYWRpbmcsIGNhbmNlbCB1cGxvYWRcbiAgICAgICAgaWYgKGl0ZW0uc3RhdHVzID09PSBJdGVtU3RhdHVzLlBST0NFU1NJTkcpIHtcbiAgICAgICAgICByZXR1cm4gYWJvcnQoc3RhdGUub3B0aW9ucy5pbnN0YW50VXBsb2FkKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzdGF0ZS5vcHRpb25zLmluc3RhbnRVcGxvYWQpIHtcbiAgICAgICAgICB1cGxvYWQoKTtcbiAgICAgICAgfVxuICAgICAgfSxcblxuICAgICAgU09SVDogZnVuY3Rpb24gU09SVChfcmVmNCkge1xuICAgICAgICB2YXIgY29tcGFyZSA9IF9yZWY0LmNvbXBhcmU7XG4gICAgICAgIHNvcnRJdGVtcyhzdGF0ZSwgY29tcGFyZSk7XG4gICAgICB9LFxuXG4gICAgICBBRERfSVRFTVM6IGZ1bmN0aW9uIEFERF9JVEVNUyhfcmVmNSkge1xuICAgICAgICB2YXIgaXRlbXMgPSBfcmVmNS5pdGVtcyxcbiAgICAgICAgICBpbmRleCA9IF9yZWY1LmluZGV4LFxuICAgICAgICAgIGludGVyYWN0aW9uTWV0aG9kID0gX3JlZjUuaW50ZXJhY3Rpb25NZXRob2QsXG4gICAgICAgICAgX3JlZjUkc3VjY2VzcyA9IF9yZWY1LnN1Y2Nlc3MsXG4gICAgICAgICAgc3VjY2VzcyA9IF9yZWY1JHN1Y2Nlc3MgPT09IHZvaWQgMCA/IGZ1bmN0aW9uKCkge30gOiBfcmVmNSRzdWNjZXNzLFxuICAgICAgICAgIF9yZWY1JGZhaWx1cmUgPSBfcmVmNS5mYWlsdXJlLFxuICAgICAgICAgIGZhaWx1cmUgPSBfcmVmNSRmYWlsdXJlID09PSB2b2lkIDAgPyBmdW5jdGlvbigpIHt9IDogX3JlZjUkZmFpbHVyZTtcblxuICAgICAgICB2YXIgY3VycmVudEluZGV4ID0gaW5kZXg7XG5cbiAgICAgICAgaWYgKGluZGV4ID09PSAtMSB8fCB0eXBlb2YgaW5kZXggPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgdmFyIGluc2VydExvY2F0aW9uID0gcXVlcnkoJ0dFVF9JVEVNX0lOU0VSVF9MT0NBVElPTicpO1xuICAgICAgICAgIHZhciB0b3RhbEl0ZW1zID0gcXVlcnkoJ0dFVF9UT1RBTF9JVEVNUycpO1xuICAgICAgICAgIGN1cnJlbnRJbmRleCA9IGluc2VydExvY2F0aW9uID09PSAnYmVmb3JlJyA/IDAgOiB0b3RhbEl0ZW1zO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGlnbm9yZWRGaWxlcyA9IHF1ZXJ5KCdHRVRfSUdOT1JFRF9GSUxFUycpO1xuICAgICAgICB2YXIgaXNWYWxpZEZpbGUgPSBmdW5jdGlvbiBpc1ZhbGlkRmlsZShzb3VyY2UpIHtcbiAgICAgICAgICByZXR1cm4gaXNGaWxlKHNvdXJjZSlcbiAgICAgICAgICAgID8gIWlnbm9yZWRGaWxlcy5pbmNsdWRlcyhzb3VyY2UubmFtZS50b0xvd2VyQ2FzZSgpKVxuICAgICAgICAgICAgOiAhaXNFbXB0eShzb3VyY2UpO1xuICAgICAgICB9O1xuICAgICAgICB2YXIgdmFsaWRJdGVtcyA9IGl0ZW1zLmZpbHRlcihpc1ZhbGlkRmlsZSk7XG5cbiAgICAgICAgdmFyIHByb21pc2VzID0gdmFsaWRJdGVtcy5tYXAoZnVuY3Rpb24oc291cmNlKSB7XG4gICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgICAgZGlzcGF0Y2goJ0FERF9JVEVNJywge1xuICAgICAgICAgICAgICBpbnRlcmFjdGlvbk1ldGhvZDogaW50ZXJhY3Rpb25NZXRob2QsXG4gICAgICAgICAgICAgIHNvdXJjZTogc291cmNlLnNvdXJjZSB8fCBzb3VyY2UsXG4gICAgICAgICAgICAgIHN1Y2Nlc3M6IHJlc29sdmUsXG4gICAgICAgICAgICAgIGZhaWx1cmU6IHJlamVjdCxcbiAgICAgICAgICAgICAgaW5kZXg6IGN1cnJlbnRJbmRleCsrLFxuICAgICAgICAgICAgICBvcHRpb25zOiBzb3VyY2Uub3B0aW9ucyB8fCB7fVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIFByb21pc2UuYWxsKHByb21pc2VzKVxuICAgICAgICAgIC50aGVuKHN1Y2Nlc3MpXG4gICAgICAgICAgLmNhdGNoKGZhaWx1cmUpO1xuICAgICAgfSxcblxuICAgICAgLyoqXG4gICAgICAgKiBAcGFyYW0gc291cmNlXG4gICAgICAgKiBAcGFyYW0gaW5kZXhcbiAgICAgICAqIEBwYXJhbSBpbnRlcmFjdGlvbk1ldGhvZFxuICAgICAgICovXG4gICAgICBBRERfSVRFTTogZnVuY3Rpb24gQUREX0lURU0oX3JlZjYpIHtcbiAgICAgICAgdmFyIHNvdXJjZSA9IF9yZWY2LnNvdXJjZSxcbiAgICAgICAgICBfcmVmNiRpbmRleCA9IF9yZWY2LmluZGV4LFxuICAgICAgICAgIGluZGV4ID0gX3JlZjYkaW5kZXggPT09IHZvaWQgMCA/IC0xIDogX3JlZjYkaW5kZXgsXG4gICAgICAgICAgaW50ZXJhY3Rpb25NZXRob2QgPSBfcmVmNi5pbnRlcmFjdGlvbk1ldGhvZCxcbiAgICAgICAgICBfcmVmNiRzdWNjZXNzID0gX3JlZjYuc3VjY2VzcyxcbiAgICAgICAgICBzdWNjZXNzID0gX3JlZjYkc3VjY2VzcyA9PT0gdm9pZCAwID8gZnVuY3Rpb24oKSB7fSA6IF9yZWY2JHN1Y2Nlc3MsXG4gICAgICAgICAgX3JlZjYkZmFpbHVyZSA9IF9yZWY2LmZhaWx1cmUsXG4gICAgICAgICAgZmFpbHVyZSA9IF9yZWY2JGZhaWx1cmUgPT09IHZvaWQgMCA/IGZ1bmN0aW9uKCkge30gOiBfcmVmNiRmYWlsdXJlLFxuICAgICAgICAgIF9yZWY2JG9wdGlvbnMgPSBfcmVmNi5vcHRpb25zLFxuICAgICAgICAgIG9wdGlvbnMgPSBfcmVmNiRvcHRpb25zID09PSB2b2lkIDAgPyB7fSA6IF9yZWY2JG9wdGlvbnM7XG5cbiAgICAgICAgLy8gaWYgbm8gc291cmNlIHN1cHBsaWVkXG4gICAgICAgIGlmIChpc0VtcHR5KHNvdXJjZSkpIHtcbiAgICAgICAgICBmYWlsdXJlKHtcbiAgICAgICAgICAgIGVycm9yOiBjcmVhdGVSZXNwb25zZSgnZXJyb3InLCAwLCAnTm8gc291cmNlJyksXG5cbiAgICAgICAgICAgIGZpbGU6IG51bGxcbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGZpbHRlciBvdXQgaW52YWxpZCBmaWxlIGl0ZW1zLCB1c2VkIHRvIGZpbHRlciBkcm9wcGVkIGRpcmVjdG9yeSBjb250ZW50c1xuICAgICAgICBpZiAoXG4gICAgICAgICAgaXNGaWxlKHNvdXJjZSkgJiZcbiAgICAgICAgICBzdGF0ZS5vcHRpb25zLmlnbm9yZWRGaWxlcy5pbmNsdWRlcyhzb3VyY2UubmFtZS50b0xvd2VyQ2FzZSgpKVxuICAgICAgICApIHtcbiAgICAgICAgICAvLyBmYWlsIHNpbGVudGx5XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gdGVzdCBpZiB0aGVyZSdzIHN0aWxsIHJvb20gaW4gdGhlIGxpc3Qgb2YgZmlsZXNcbiAgICAgICAgaWYgKCFoYXNSb29tRm9ySXRlbShzdGF0ZSkpIHtcbiAgICAgICAgICAvLyBpZiBtdWx0aXBsZSBhbGxvd2VkLCB3ZSBjYW4ndCByZXBsYWNlXG4gICAgICAgICAgLy8gb3IgaWYgb25seSBhIHNpbmdsZSBpdGVtIGlzIGFsbG93ZWQgYnV0IHdlJ3JlIG5vdCBhbGxvd2VkIHRvIHJlcGxhY2UgaXQgd2UgZXhpdFxuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgIHN0YXRlLm9wdGlvbnMuYWxsb3dNdWx0aXBsZSB8fFxuICAgICAgICAgICAgKCFzdGF0ZS5vcHRpb25zLmFsbG93TXVsdGlwbGUgJiYgIXN0YXRlLm9wdGlvbnMuYWxsb3dSZXBsYWNlKVxuICAgICAgICAgICkge1xuICAgICAgICAgICAgdmFyIGVycm9yID0gY3JlYXRlUmVzcG9uc2UoJ3dhcm5pbmcnLCAwLCAnTWF4IGZpbGVzJyk7XG5cbiAgICAgICAgICAgIGRpc3BhdGNoKCdESURfVEhST1dfTUFYX0ZJTEVTJywge1xuICAgICAgICAgICAgICBzb3VyY2U6IHNvdXJjZSxcbiAgICAgICAgICAgICAgZXJyb3I6IGVycm9yXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgZmFpbHVyZSh7IGVycm9yOiBlcnJvciwgZmlsZTogbnVsbCB9KTtcblxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIGxldCdzIHJlcGxhY2UgdGhlIGl0ZW1cbiAgICAgICAgICAvLyBpZCBvZiBmaXJzdCBpdGVtIHdlJ3JlIGFib3V0IHRvIHJlbW92ZVxuICAgICAgICAgIHZhciBfaXRlbSA9IGdldEFjdGl2ZUl0ZW1zKHN0YXRlLml0ZW1zKVswXTtcblxuICAgICAgICAgIC8vIGlmIGhhcyBiZWVuIHByb2Nlc3NlZCByZW1vdmUgaXQgZnJvbSB0aGUgc2VydmVyIGFzIHdlbGxcbiAgICAgICAgICBpZiAoXG4gICAgICAgICAgICBfaXRlbS5zdGF0dXMgPT09IEl0ZW1TdGF0dXMuUFJPQ0VTU0lOR19DT01QTEVURSB8fFxuICAgICAgICAgICAgX2l0ZW0uc3RhdHVzID09PSBJdGVtU3RhdHVzLlBST0NFU1NJTkdfUkVWRVJUX0VSUk9SXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICB2YXIgZm9yY2VSZXZlcnQgPSBxdWVyeSgnR0VUX0ZPUkNFX1JFVkVSVCcpO1xuICAgICAgICAgICAgX2l0ZW1cbiAgICAgICAgICAgICAgLnJldmVydChcbiAgICAgICAgICAgICAgICBjcmVhdGVSZXZlcnRGdW5jdGlvbihcbiAgICAgICAgICAgICAgICAgIHN0YXRlLm9wdGlvbnMuc2VydmVyLnVybCxcbiAgICAgICAgICAgICAgICAgIHN0YXRlLm9wdGlvbnMuc2VydmVyLnJldmVydFxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgZm9yY2VSZXZlcnRcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBpZiAoIWZvcmNlUmV2ZXJ0KSByZXR1cm47XG5cbiAgICAgICAgICAgICAgICAvLyB0cnkgdG8gYWRkIG5vd1xuICAgICAgICAgICAgICAgIGRpc3BhdGNoKCdBRERfSVRFTScsIHtcbiAgICAgICAgICAgICAgICAgIHNvdXJjZTogc291cmNlLFxuICAgICAgICAgICAgICAgICAgaW5kZXg6IGluZGV4LFxuICAgICAgICAgICAgICAgICAgaW50ZXJhY3Rpb25NZXRob2Q6IGludGVyYWN0aW9uTWV0aG9kLFxuICAgICAgICAgICAgICAgICAgc3VjY2Vzczogc3VjY2VzcyxcbiAgICAgICAgICAgICAgICAgIGZhaWx1cmU6IGZhaWx1cmUsXG4gICAgICAgICAgICAgICAgICBvcHRpb25zOiBvcHRpb25zXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIC5jYXRjaChmdW5jdGlvbigpIHt9KTsgLy8gbm8gbmVlZCB0byBoYW5kbGUgdGhpcyBjYXRjaCBzdGF0ZSBmb3Igbm93XG5cbiAgICAgICAgICAgIGlmIChmb3JjZVJldmVydCkgcmV0dXJuO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIHJlbW92ZSBmaXJzdCBpdGVtIGFzIGl0IHdpbGwgYmUgcmVwbGFjZWQgYnkgdGhpcyBpdGVtXG4gICAgICAgICAgZGlzcGF0Y2goJ1JFTU9WRV9JVEVNJywgeyBxdWVyeTogX2l0ZW0uaWQgfSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyB3aGVyZSBkaWQgdGhlIGZpbGUgb3JpZ2luYXRlXG4gICAgICAgIHZhciBvcmlnaW4gPVxuICAgICAgICAgIG9wdGlvbnMudHlwZSA9PT0gJ2xvY2FsJ1xuICAgICAgICAgICAgPyBGaWxlT3JpZ2luLkxPQ0FMXG4gICAgICAgICAgICA6IG9wdGlvbnMudHlwZSA9PT0gJ2xpbWJvJ1xuICAgICAgICAgICAgPyBGaWxlT3JpZ2luLkxJTUJPXG4gICAgICAgICAgICA6IEZpbGVPcmlnaW4uSU5QVVQ7XG5cbiAgICAgICAgLy8gY3JlYXRlIGEgbmV3IGJsYW5rIGl0ZW1cbiAgICAgICAgdmFyIGl0ZW0gPSBjcmVhdGVJdGVtKFxuICAgICAgICAgIC8vIHdoZXJlIGRpZCB0aGlzIGZpbGUgY29tZSBmcm9tXG4gICAgICAgICAgb3JpZ2luLFxuXG4gICAgICAgICAgLy8gYW4gaW5wdXQgZmlsZSBuZXZlciBoYXMgYSBzZXJ2ZXIgZmlsZSByZWZlcmVuY2VcbiAgICAgICAgICBvcmlnaW4gPT09IEZpbGVPcmlnaW4uSU5QVVQgPyBudWxsIDogc291cmNlLFxuXG4gICAgICAgICAgLy8gZmlsZSBtb2NrIGRhdGEsIGlmIGRlZmluZWRcbiAgICAgICAgICBvcHRpb25zLmZpbGVcbiAgICAgICAgKTtcblxuICAgICAgICAvLyBzZXQgaW5pdGlhbCBtZXRhIGRhdGFcbiAgICAgICAgT2JqZWN0LmtleXMob3B0aW9ucy5tZXRhZGF0YSB8fCB7fSkuZm9yRWFjaChmdW5jdGlvbihrZXkpIHtcbiAgICAgICAgICBpdGVtLnNldE1ldGFkYXRhKGtleSwgb3B0aW9ucy5tZXRhZGF0YVtrZXldKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gY3JlYXRlZCB0aGUgaXRlbSwgbGV0IHBsdWdpbnMgYWRkIG1ldGhvZHNcbiAgICAgICAgYXBwbHlGaWx0ZXJzKCdESURfQ1JFQVRFX0lURU0nLCBpdGVtLCB7XG4gICAgICAgICAgcXVlcnk6IHF1ZXJ5LFxuICAgICAgICAgIGRpc3BhdGNoOiBkaXNwYXRjaFxuICAgICAgICB9KTtcblxuICAgICAgICAvLyB3aGVyZSB0byBpbnNlcnQgbmV3IGl0ZW1zXG4gICAgICAgIHZhciBpdGVtSW5zZXJ0TG9jYXRpb24gPSBxdWVyeSgnR0VUX0lURU1fSU5TRVJUX0xPQ0FUSU9OJyk7XG5cbiAgICAgICAgLy8gYWRqdXN0IGluZGV4IGlmIGlzIG5vdCBhbGxvd2VkIHRvIHBpY2sgbG9jYXRpb25cbiAgICAgICAgaWYgKCFzdGF0ZS5vcHRpb25zLml0ZW1JbnNlcnRMb2NhdGlvbkZyZWVkb20pIHtcbiAgICAgICAgICBpbmRleCA9IGl0ZW1JbnNlcnRMb2NhdGlvbiA9PT0gJ2JlZm9yZScgPyAtMSA6IHN0YXRlLml0ZW1zLmxlbmd0aDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGFkZCBpdGVtIHRvIGxpc3RcbiAgICAgICAgaW5zZXJ0SXRlbShzdGF0ZS5pdGVtcywgaXRlbSwgaW5kZXgpO1xuXG4gICAgICAgIC8vIHNvcnQgaXRlbXMgaW4gbGlzdFxuICAgICAgICBpZiAoaXNGdW5jdGlvbihpdGVtSW5zZXJ0TG9jYXRpb24pICYmIHNvdXJjZSkge1xuICAgICAgICAgIHNvcnRJdGVtcyhzdGF0ZSwgaXRlbUluc2VydExvY2F0aW9uKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGdldCBhIHF1aWNrIHJlZmVyZW5jZSB0byB0aGUgaXRlbSBpZFxuICAgICAgICB2YXIgaWQgPSBpdGVtLmlkO1xuXG4gICAgICAgIC8vIG9ic2VydmUgaXRlbSBldmVudHNcbiAgICAgICAgaXRlbS5vbignbG9hZC1pbml0JywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgZGlzcGF0Y2goJ0RJRF9TVEFSVF9JVEVNX0xPQUQnLCB7IGlkOiBpZCB9KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaXRlbS5vbignbG9hZC1tZXRhJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgZGlzcGF0Y2goJ0RJRF9VUERBVEVfSVRFTV9NRVRBJywgeyBpZDogaWQgfSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGl0ZW0ub24oJ2xvYWQtcHJvZ3Jlc3MnLCBmdW5jdGlvbihwcm9ncmVzcykge1xuICAgICAgICAgIGRpc3BhdGNoKCdESURfVVBEQVRFX0lURU1fTE9BRF9QUk9HUkVTUycsIHtcbiAgICAgICAgICAgIGlkOiBpZCxcbiAgICAgICAgICAgIHByb2dyZXNzOiBwcm9ncmVzc1xuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcblxuICAgICAgICBpdGVtLm9uKCdsb2FkLXJlcXVlc3QtZXJyb3InLCBmdW5jdGlvbihlcnJvcikge1xuICAgICAgICAgIHZhciBtYWluU3RhdHVzID0gZHluYW1pY0xhYmVsKHN0YXRlLm9wdGlvbnMubGFiZWxGaWxlTG9hZEVycm9yKShcbiAgICAgICAgICAgIGVycm9yXG4gICAgICAgICAgKTtcblxuICAgICAgICAgIC8vIGlzIGNsaWVudCBlcnJvciwgbm8gd2F5IHRvIHJlY292ZXJcbiAgICAgICAgICBpZiAoZXJyb3IuY29kZSA+PSA0MDAgJiYgZXJyb3IuY29kZSA8IDUwMCkge1xuICAgICAgICAgICAgZGlzcGF0Y2goJ0RJRF9USFJPV19JVEVNX0lOVkFMSUQnLCB7XG4gICAgICAgICAgICAgIGlkOiBpZCxcbiAgICAgICAgICAgICAgZXJyb3I6IGVycm9yLFxuICAgICAgICAgICAgICBzdGF0dXM6IHtcbiAgICAgICAgICAgICAgICBtYWluOiBtYWluU3RhdHVzLFxuICAgICAgICAgICAgICAgIHN1YjogZXJyb3IuY29kZSArICcgKCcgKyBlcnJvci5ib2R5ICsgJyknXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAvLyByZWplY3QgdGhlIGZpbGUgc28gY2FuIGJlIGRlYWx0IHdpdGggdGhyb3VnaCBBUElcbiAgICAgICAgICAgIGZhaWx1cmUoeyBlcnJvcjogZXJyb3IsIGZpbGU6IGNyZWF0ZUl0ZW1BUEkoaXRlbSkgfSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gaXMgcG9zc2libGUgc2VydmVyIGVycm9yLCBzbyBtaWdodCBiZSBwb3NzaWJsZSB0byByZXRyeVxuICAgICAgICAgIGRpc3BhdGNoKCdESURfVEhST1dfSVRFTV9MT0FEX0VSUk9SJywge1xuICAgICAgICAgICAgaWQ6IGlkLFxuICAgICAgICAgICAgZXJyb3I6IGVycm9yLFxuICAgICAgICAgICAgc3RhdHVzOiB7XG4gICAgICAgICAgICAgIG1haW46IG1haW5TdGF0dXMsXG4gICAgICAgICAgICAgIHN1Yjogc3RhdGUub3B0aW9ucy5sYWJlbFRhcFRvUmV0cnlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaXRlbS5vbignbG9hZC1maWxlLWVycm9yJywgZnVuY3Rpb24oZXJyb3IpIHtcbiAgICAgICAgICBkaXNwYXRjaCgnRElEX1RIUk9XX0lURU1fSU5WQUxJRCcsIHtcbiAgICAgICAgICAgIGlkOiBpZCxcbiAgICAgICAgICAgIGVycm9yOiBlcnJvci5zdGF0dXMsXG4gICAgICAgICAgICBzdGF0dXM6IGVycm9yLnN0YXR1c1xuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcblxuICAgICAgICBpdGVtLm9uKCdsb2FkLWFib3J0JywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgZGlzcGF0Y2goJ1JFTU9WRV9JVEVNJywgeyBxdWVyeTogaWQgfSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGl0ZW0ub24oJ2xvYWQtc2tpcCcsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgIGRpc3BhdGNoKCdDT01QTEVURV9MT0FEX0lURU0nLCB7XG4gICAgICAgICAgICBxdWVyeTogaWQsXG4gICAgICAgICAgICBpdGVtOiBpdGVtLFxuICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICBzb3VyY2U6IHNvdXJjZSxcbiAgICAgICAgICAgICAgc3VjY2Vzczogc3VjY2Vzc1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcblxuICAgICAgICBpdGVtLm9uKCdsb2FkJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgdmFyIGhhbmRsZUFkZCA9IGZ1bmN0aW9uIGhhbmRsZUFkZChzaG91bGRBZGQpIHtcbiAgICAgICAgICAgIC8vIG5vIHNob3VsZCBub3QgYWRkIHRoaXMgZmlsZVxuICAgICAgICAgICAgaWYgKCFzaG91bGRBZGQpIHtcbiAgICAgICAgICAgICAgZGlzcGF0Y2goJ1JFTU9WRV9JVEVNJywge1xuICAgICAgICAgICAgICAgIHF1ZXJ5OiBpZFxuICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIG5vdyBpbnRlcmVzdGVkIGluIG1ldGFkYXRhIHVwZGF0ZXNcbiAgICAgICAgICAgIGl0ZW0ub24oJ21ldGFkYXRhLXVwZGF0ZScsIGZ1bmN0aW9uKGNoYW5nZSkge1xuICAgICAgICAgICAgICBkaXNwYXRjaCgnRElEX1VQREFURV9JVEVNX01FVEFEQVRBJywgeyBpZDogaWQsIGNoYW5nZTogY2hhbmdlIH0pO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIC8vIGxldCBwbHVnaW5zIGRlY2lkZSBpZiB0aGUgb3V0cHV0IGRhdGEgc2hvdWxkIGJlIHByZXBhcmVkIGF0IHRoaXMgcG9pbnRcbiAgICAgICAgICAgIC8vIG1lYW5zIHdlJ2xsIGRvIHRoaXMgYW5kIHdhaXQgZm9yIGlkbGUgc3RhdGVcbiAgICAgICAgICAgIGFwcGx5RmlsdGVyQ2hhaW4oJ1NIT1VMRF9QUkVQQVJFX09VVFBVVCcsIGZhbHNlLCB7XG4gICAgICAgICAgICAgIGl0ZW06IGl0ZW0sXG4gICAgICAgICAgICAgIHF1ZXJ5OiBxdWVyeVxuICAgICAgICAgICAgfSkudGhlbihmdW5jdGlvbihzaG91bGRQcmVwYXJlT3V0cHV0KSB7XG4gICAgICAgICAgICAgIHZhciBsb2FkQ29tcGxldGUgPSBmdW5jdGlvbiBsb2FkQ29tcGxldGUoKSB7XG4gICAgICAgICAgICAgICAgZGlzcGF0Y2goJ0NPTVBMRVRFX0xPQURfSVRFTScsIHtcbiAgICAgICAgICAgICAgICAgIHF1ZXJ5OiBpZCxcbiAgICAgICAgICAgICAgICAgIGl0ZW06IGl0ZW0sXG4gICAgICAgICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgIHNvdXJjZTogc291cmNlLFxuICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiBzdWNjZXNzXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICBsaXN0VXBkYXRlZChkaXNwYXRjaCwgc3RhdGUpO1xuICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgIC8vIGV4aXRcbiAgICAgICAgICAgICAgaWYgKHNob3VsZFByZXBhcmVPdXRwdXQpIHtcbiAgICAgICAgICAgICAgICAvLyB3YWl0IGZvciBpZGxlIHN0YXRlIGFuZCB0aGVuIHJ1biBQUkVQQVJFX09VVFBVVFxuICAgICAgICAgICAgICAgIGRpc3BhdGNoKFxuICAgICAgICAgICAgICAgICAgJ1JFUVVFU1RfUFJFUEFSRV9PVVRQVVQnLFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBxdWVyeTogaWQsXG4gICAgICAgICAgICAgICAgICAgIGl0ZW06IGl0ZW0sXG4gICAgICAgICAgICAgICAgICAgIHJlYWR5OiBmdW5jdGlvbiByZWFkeShmaWxlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2goJ0RJRF9QUkVQQVJFX09VVFBVVCcsIHsgaWQ6IGlkLCBmaWxlOiBmaWxlIH0pO1xuICAgICAgICAgICAgICAgICAgICAgIGxvYWRDb21wbGV0ZSgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgdHJ1ZVxuICAgICAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBsb2FkQ29tcGxldGUoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH07XG5cbiAgICAgICAgICAvLyBpdGVtIGxvYWRlZCwgYWxsb3cgcGx1Z2lucyB0b1xuICAgICAgICAgIC8vIC0gcmVhZCBkYXRhIChxdWlja2x5KVxuICAgICAgICAgIC8vIC0gYWRkIG1ldGFkYXRhXG4gICAgICAgICAgYXBwbHlGaWx0ZXJDaGFpbignRElEX0xPQURfSVRFTScsIGl0ZW0sIHtcbiAgICAgICAgICAgIHF1ZXJ5OiBxdWVyeSxcbiAgICAgICAgICAgIGRpc3BhdGNoOiBkaXNwYXRjaFxuICAgICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbihmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgb3B0aW9uYWxQcm9taXNlKFxuICAgICAgICAgICAgICAgIHF1ZXJ5KCdHRVRfQkVGT1JFX0FERF9GSUxFJyksXG4gICAgICAgICAgICAgICAgY3JlYXRlSXRlbUFQSShpdGVtKVxuICAgICAgICAgICAgICApLnRoZW4oaGFuZGxlQWRkKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgIGhhbmRsZUFkZChmYWxzZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaXRlbS5vbigncHJvY2Vzcy1zdGFydCcsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgIGRpc3BhdGNoKCdESURfU1RBUlRfSVRFTV9QUk9DRVNTSU5HJywgeyBpZDogaWQgfSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGl0ZW0ub24oJ3Byb2Nlc3MtcHJvZ3Jlc3MnLCBmdW5jdGlvbihwcm9ncmVzcykge1xuICAgICAgICAgIGRpc3BhdGNoKCdESURfVVBEQVRFX0lURU1fUFJPQ0VTU19QUk9HUkVTUycsIHtcbiAgICAgICAgICAgIGlkOiBpZCxcbiAgICAgICAgICAgIHByb2dyZXNzOiBwcm9ncmVzc1xuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcblxuICAgICAgICBpdGVtLm9uKCdwcm9jZXNzLWVycm9yJywgZnVuY3Rpb24oZXJyb3IpIHtcbiAgICAgICAgICBkaXNwYXRjaCgnRElEX1RIUk9XX0lURU1fUFJPQ0VTU0lOR19FUlJPUicsIHtcbiAgICAgICAgICAgIGlkOiBpZCxcbiAgICAgICAgICAgIGVycm9yOiBlcnJvcixcbiAgICAgICAgICAgIHN0YXR1czoge1xuICAgICAgICAgICAgICBtYWluOiBkeW5hbWljTGFiZWwoc3RhdGUub3B0aW9ucy5sYWJlbEZpbGVQcm9jZXNzaW5nRXJyb3IpKGVycm9yKSxcbiAgICAgICAgICAgICAgc3ViOiBzdGF0ZS5vcHRpb25zLmxhYmVsVGFwVG9SZXRyeVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcblxuICAgICAgICBpdGVtLm9uKCdwcm9jZXNzLXJldmVydC1lcnJvcicsIGZ1bmN0aW9uKGVycm9yKSB7XG4gICAgICAgICAgZGlzcGF0Y2goJ0RJRF9USFJPV19JVEVNX1BST0NFU1NJTkdfUkVWRVJUX0VSUk9SJywge1xuICAgICAgICAgICAgaWQ6IGlkLFxuICAgICAgICAgICAgZXJyb3I6IGVycm9yLFxuICAgICAgICAgICAgc3RhdHVzOiB7XG4gICAgICAgICAgICAgIG1haW46IGR5bmFtaWNMYWJlbChzdGF0ZS5vcHRpb25zLmxhYmVsRmlsZVByb2Nlc3NpbmdSZXZlcnRFcnJvcikoXG4gICAgICAgICAgICAgICAgZXJyb3JcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgc3ViOiBzdGF0ZS5vcHRpb25zLmxhYmVsVGFwVG9SZXRyeVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcblxuICAgICAgICBpdGVtLm9uKCdwcm9jZXNzLWNvbXBsZXRlJywgZnVuY3Rpb24oc2VydmVyRmlsZVJlZmVyZW5jZSkge1xuICAgICAgICAgIGRpc3BhdGNoKCdESURfQ09NUExFVEVfSVRFTV9QUk9DRVNTSU5HJywge1xuICAgICAgICAgICAgaWQ6IGlkLFxuICAgICAgICAgICAgZXJyb3I6IG51bGwsXG4gICAgICAgICAgICBzZXJ2ZXJGaWxlUmVmZXJlbmNlOiBzZXJ2ZXJGaWxlUmVmZXJlbmNlXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGl0ZW0ub24oJ3Byb2Nlc3MtYWJvcnQnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICBkaXNwYXRjaCgnRElEX0FCT1JUX0lURU1fUFJPQ0VTU0lORycsIHsgaWQ6IGlkIH0pO1xuICAgICAgICB9KTtcblxuICAgICAgICBpdGVtLm9uKCdwcm9jZXNzLXJldmVydCcsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgIGRpc3BhdGNoKCdESURfUkVWRVJUX0lURU1fUFJPQ0VTU0lORycsIHsgaWQ6IGlkIH0pO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyBsZXQgdmlldyBrbm93IHRoZSBpdGVtIGhhcyBiZWVuIGluc2VydGVkXG4gICAgICAgIGRpc3BhdGNoKCdESURfQUREX0lURU0nLCB7XG4gICAgICAgICAgaWQ6IGlkLFxuICAgICAgICAgIGluZGV4OiBpbmRleCxcbiAgICAgICAgICBpbnRlcmFjdGlvbk1ldGhvZDogaW50ZXJhY3Rpb25NZXRob2RcbiAgICAgICAgfSk7XG5cbiAgICAgICAgbGlzdFVwZGF0ZWQoZGlzcGF0Y2gsIHN0YXRlKTtcblxuICAgICAgICAvLyBzdGFydCBsb2FkaW5nIHRoZSBzb3VyY2VcbiAgICAgICAgdmFyIF9yZWY3ID0gc3RhdGUub3B0aW9ucy5zZXJ2ZXIgfHwge30sXG4gICAgICAgICAgdXJsID0gX3JlZjcudXJsLFxuICAgICAgICAgIGxvYWQgPSBfcmVmNy5sb2FkLFxuICAgICAgICAgIHJlc3RvcmUgPSBfcmVmNy5yZXN0b3JlLFxuICAgICAgICAgIGZldGNoID0gX3JlZjcuZmV0Y2g7XG5cbiAgICAgICAgaXRlbS5sb2FkKFxuICAgICAgICAgIHNvdXJjZSxcblxuICAgICAgICAgIC8vIHRoaXMgY3JlYXRlcyBhIGZ1bmN0aW9uIHRoYXQgbG9hZHMgdGhlIGZpbGUgYmFzZWQgb24gdGhlIHR5cGUgb2YgZmlsZSAoc3RyaW5nLCBiYXNlNjQsIGJsb2IsIGZpbGUpIGFuZCBsb2NhdGlvbiBvZiBmaWxlIChsb2NhbCwgcmVtb3RlLCBsaW1ibylcbiAgICAgICAgICBjcmVhdGVGaWxlTG9hZGVyKFxuICAgICAgICAgICAgb3JpZ2luID09PSBGaWxlT3JpZ2luLklOUFVUXG4gICAgICAgICAgICAgID8gLy8gaW5wdXRcbiAgICAgICAgICAgICAgICBpc1N0cmluZyhzb3VyY2UpICYmIGlzRXh0ZXJuYWxVUkwoc291cmNlKVxuICAgICAgICAgICAgICAgID8gY3JlYXRlRmV0Y2hGdW5jdGlvbih1cmwsIGZldGNoKSAvLyByZW1vdGUgdXJsXG4gICAgICAgICAgICAgICAgOiBmZXRjaExvY2FsIC8vIGxvY2FsIHVybFxuICAgICAgICAgICAgICA6IC8vIGxpbWJvIG9yIGxvY2FsXG4gICAgICAgICAgICAgIG9yaWdpbiA9PT0gRmlsZU9yaWdpbi5MSU1CT1xuICAgICAgICAgICAgICA/IGNyZWF0ZUZldGNoRnVuY3Rpb24odXJsLCByZXN0b3JlKSAvLyBsaW1ib1xuICAgICAgICAgICAgICA6IGNyZWF0ZUZldGNoRnVuY3Rpb24odXJsLCBsb2FkKSAvLyBsb2NhbFxuICAgICAgICAgICksXG5cbiAgICAgICAgICAvLyBjYWxsZWQgd2hlbiB0aGUgZmlsZSBpcyBsb2FkZWQgc28gaXQgY2FuIGJlIHBpcGVkIHRocm91Z2ggdGhlIGZpbHRlcnNcbiAgICAgICAgICBmdW5jdGlvbihmaWxlLCBzdWNjZXNzLCBlcnJvcikge1xuICAgICAgICAgICAgLy8gbGV0J3MgcHJvY2VzcyB0aGUgZmlsZVxuICAgICAgICAgICAgYXBwbHlGaWx0ZXJDaGFpbignTE9BRF9GSUxFJywgZmlsZSwgeyBxdWVyeTogcXVlcnkgfSlcbiAgICAgICAgICAgICAgLnRoZW4oc3VjY2VzcylcbiAgICAgICAgICAgICAgLmNhdGNoKGVycm9yKTtcbiAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICB9LFxuXG4gICAgICBSRVFVRVNUX1BSRVBBUkVfT1VUUFVUOiBmdW5jdGlvbiBSRVFVRVNUX1BSRVBBUkVfT1VUUFVUKF9yZWY4KSB7XG4gICAgICAgIHZhciBpdGVtID0gX3JlZjguaXRlbSxcbiAgICAgICAgICByZWFkeSA9IF9yZWY4LnJlYWR5O1xuXG4gICAgICAgIC8vIGRvbid0IGhhbmRsZSBhcmNoaXZlZCBpdGVtcywgYW4gaXRlbSBjb3VsZCBoYXZlIGJlZW4gYXJjaGl2ZWQgKGxvYWQgYWJvcnRlZCkgd2hpbGUgd2FpdGluZyB0byBiZSBwcmVwYXJlZFxuICAgICAgICBpZiAoaXRlbS5hcmNoaXZlZCkgcmV0dXJuO1xuXG4gICAgICAgIC8vIGFsbG93IHBsdWdpbnMgdG8gYWx0ZXIgdGhlIGZpbGUgZGF0YVxuICAgICAgICBhcHBseUZpbHRlckNoYWluKCdQUkVQQVJFX09VVFBVVCcsIGl0ZW0uZmlsZSwge1xuICAgICAgICAgIHF1ZXJ5OiBxdWVyeSxcbiAgICAgICAgICBpdGVtOiBpdGVtXG4gICAgICAgIH0pLnRoZW4oZnVuY3Rpb24ocmVzdWx0KSB7XG4gICAgICAgICAgYXBwbHlGaWx0ZXJDaGFpbignQ09NUExFVEVfUFJFUEFSRV9PVVRQVVQnLCByZXN1bHQsIHtcbiAgICAgICAgICAgIHF1ZXJ5OiBxdWVyeSxcbiAgICAgICAgICAgIGl0ZW06IGl0ZW1cbiAgICAgICAgICB9KS50aGVuKGZ1bmN0aW9uKHJlc3VsdCkge1xuICAgICAgICAgICAgLy8gZG9uJ3QgaGFuZGxlIGFyY2hpdmVkIGl0ZW1zLCBhbiBpdGVtIGNvdWxkIGhhdmUgYmVlbiBhcmNoaXZlZCAobG9hZCBhYm9ydGVkKSB3aGlsZSBiZWluZyBwcmVwYXJlZFxuICAgICAgICAgICAgaWYgKGl0ZW0uYXJjaGl2ZWQpIHJldHVybjtcblxuICAgICAgICAgICAgLy8gd2UgZG9uZSFcbiAgICAgICAgICAgIHJlYWR5KHJlc3VsdCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgfSxcblxuICAgICAgQ09NUExFVEVfTE9BRF9JVEVNOiBmdW5jdGlvbiBDT01QTEVURV9MT0FEX0lURU0oX3JlZjkpIHtcbiAgICAgICAgdmFyIGl0ZW0gPSBfcmVmOS5pdGVtLFxuICAgICAgICAgIGRhdGEgPSBfcmVmOS5kYXRhO1xuICAgICAgICB2YXIgc3VjY2VzcyA9IGRhdGEuc3VjY2VzcyxcbiAgICAgICAgICBzb3VyY2UgPSBkYXRhLnNvdXJjZTtcblxuICAgICAgICAvLyBzb3J0IGl0ZW1zIGluIGxpc3RcbiAgICAgICAgdmFyIGl0ZW1JbnNlcnRMb2NhdGlvbiA9IHF1ZXJ5KCdHRVRfSVRFTV9JTlNFUlRfTE9DQVRJT04nKTtcbiAgICAgICAgaWYgKGlzRnVuY3Rpb24oaXRlbUluc2VydExvY2F0aW9uKSAmJiBzb3VyY2UpIHtcbiAgICAgICAgICBzb3J0SXRlbXMoc3RhdGUsIGl0ZW1JbnNlcnRMb2NhdGlvbik7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBsZXQgaW50ZXJmYWNlIGtub3cgdGhlIGl0ZW0gaGFzIGxvYWRlZFxuICAgICAgICBkaXNwYXRjaCgnRElEX0xPQURfSVRFTScsIHtcbiAgICAgICAgICBpZDogaXRlbS5pZCxcbiAgICAgICAgICBlcnJvcjogbnVsbCxcbiAgICAgICAgICBzZXJ2ZXJGaWxlUmVmZXJlbmNlOiBpdGVtLm9yaWdpbiA9PT0gRmlsZU9yaWdpbi5JTlBVVCA/IG51bGwgOiBzb3VyY2VcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gaXRlbSBoYXMgYmVlbiBzdWNjZXNzZnVsbHkgbG9hZGVkIGFuZCBhZGRlZCB0byB0aGVcbiAgICAgICAgLy8gbGlzdCBvZiBpdGVtcyBzbyBjYW4gbm93IGJlIHNhZmVseSByZXR1cm5lZCBmb3IgdXNlXG4gICAgICAgIHN1Y2Nlc3MoY3JlYXRlSXRlbUFQSShpdGVtKSk7XG5cbiAgICAgICAgLy8gaWYgdGhpcyBpcyBhIGxvY2FsIHNlcnZlciBmaWxlIHdlIG5lZWQgdG8gc2hvdyBhIGRpZmZlcmVudCBzdGF0ZVxuICAgICAgICBpZiAoaXRlbS5vcmlnaW4gPT09IEZpbGVPcmlnaW4uTE9DQUwpIHtcbiAgICAgICAgICBkaXNwYXRjaCgnRElEX0xPQURfTE9DQUxfSVRFTScsIHsgaWQ6IGl0ZW0uaWQgfSk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gaWYgaXMgYSB0ZW1wIHNlcnZlciBmaWxlIHdlIHByZXZlbnQgYXN5bmMgdXBsb2FkIGNhbGwgaGVyZSAoYXMgdGhlIGZpbGUgaXMgYWxyZWFkeSBvbiB0aGUgc2VydmVyKVxuICAgICAgICBpZiAoaXRlbS5vcmlnaW4gPT09IEZpbGVPcmlnaW4uTElNQk8pIHtcbiAgICAgICAgICBkaXNwYXRjaCgnRElEX0NPTVBMRVRFX0lURU1fUFJPQ0VTU0lORycsIHtcbiAgICAgICAgICAgIGlkOiBpdGVtLmlkLFxuICAgICAgICAgICAgZXJyb3I6IG51bGwsXG4gICAgICAgICAgICBzZXJ2ZXJGaWxlUmVmZXJlbmNlOiBzb3VyY2VcbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGlkIHdlIGFyZSBhbGxvd2VkIHRvIHVwbG9hZCB0aGUgZmlsZSBpbW1pZGlhdGVseSwgbGV0cyBkbyBpdFxuICAgICAgICBpZiAocXVlcnkoJ0lTX0FTWU5DJykgJiYgc3RhdGUub3B0aW9ucy5pbnN0YW50VXBsb2FkKSB7XG4gICAgICAgICAgZGlzcGF0Y2goJ1JFUVVFU1RfSVRFTV9QUk9DRVNTSU5HJywgeyBxdWVyeTogaXRlbS5pZCB9KTtcbiAgICAgICAgfVxuICAgICAgfSxcblxuICAgICAgUkVUUllfSVRFTV9MT0FEOiBnZXRJdGVtQnlRdWVyeUZyb21TdGF0ZShzdGF0ZSwgZnVuY3Rpb24oaXRlbSkge1xuICAgICAgICAvLyB0cnkgbG9hZGluZyB0aGUgc291cmNlIG9uZSBtb3JlIHRpbWVcbiAgICAgICAgaXRlbS5yZXRyeUxvYWQoKTtcbiAgICAgIH0pLFxuXG4gICAgICBSRVFVRVNUX0lURU1fUFJPQ0VTU0lORzogZ2V0SXRlbUJ5UXVlcnlGcm9tU3RhdGUoc3RhdGUsIGZ1bmN0aW9uKFxuICAgICAgICBpdGVtLFxuICAgICAgICBzdWNjZXNzLFxuICAgICAgICBmYWlsdXJlXG4gICAgICApIHtcbiAgICAgICAgLy8gY2Fubm90IGJlIHF1ZXVlZCAob3IgaXMgYWxyZWFkeSBxdWV1ZWQpXG4gICAgICAgIHZhciBpdGVtQ2FuQmVRdWV1ZWRGb3JQcm9jZXNzaW5nID1cbiAgICAgICAgICAvLyB3YWl0aW5nIGZvciBzb21ldGhpbmdcbiAgICAgICAgICBpdGVtLnN0YXR1cyA9PT0gSXRlbVN0YXR1cy5JRExFIHx8XG4gICAgICAgICAgLy8gcHJvY2Vzc2luZyB3ZW50IHdyb25nIGVhcmxpZXJcbiAgICAgICAgICBpdGVtLnN0YXR1cyA9PT0gSXRlbVN0YXR1cy5QUk9DRVNTSU5HX0VSUk9SO1xuXG4gICAgICAgIC8vIG5vdCByZWFkeSB0byBiZSBwcm9jZXNzZWRcbiAgICAgICAgaWYgKCFpdGVtQ2FuQmVRdWV1ZWRGb3JQcm9jZXNzaW5nKSB7XG4gICAgICAgICAgdmFyIHByb2Nlc3MgPSBmdW5jdGlvbiBwcm9jZXNzKCkge1xuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgZGlzcGF0Y2goJ1JFUVVFU1RfSVRFTV9QUk9DRVNTSU5HJywge1xuICAgICAgICAgICAgICAgIHF1ZXJ5OiBpdGVtLFxuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IHN1Y2Nlc3MsXG4gICAgICAgICAgICAgICAgZmFpbHVyZTogZmFpbHVyZVxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sIDMyKTtcbiAgICAgICAgICB9O1xuXG4gICAgICAgICAgLy8gaWYgYWxyZWFkeSBkb25lIHByb2Nlc3Npbmcgb3IgdHJpZWQgdG8gcmV2ZXJ0IGJ1dCBkaWRuJ3Qgd29yaywgdHJ5IGFnYWluXG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgaXRlbS5zdGF0dXMgPT09IEl0ZW1TdGF0dXMuUFJPQ0VTU0lOR19DT01QTEVURSB8fFxuICAgICAgICAgICAgaXRlbS5zdGF0dXMgPT09IEl0ZW1TdGF0dXMuUFJPQ0VTU0lOR19SRVZFUlRfRVJST1JcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIGl0ZW1cbiAgICAgICAgICAgICAgLnJldmVydChcbiAgICAgICAgICAgICAgICBjcmVhdGVSZXZlcnRGdW5jdGlvbihcbiAgICAgICAgICAgICAgICAgIHN0YXRlLm9wdGlvbnMuc2VydmVyLnVybCxcbiAgICAgICAgICAgICAgICAgIHN0YXRlLm9wdGlvbnMuc2VydmVyLnJldmVydFxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgcXVlcnkoJ0dFVF9GT1JDRV9SRVZFUlQnKVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIC50aGVuKHByb2Nlc3MpXG4gICAgICAgICAgICAgIC5jYXRjaChmdW5jdGlvbigpIHt9KTsgLy8gZG9uJ3QgY29udGludWUgd2l0aCBwcm9jZXNzaW5nIGlmIHNvbWV0aGluZyB3ZW50IHdyb25nXG4gICAgICAgICAgfSBlbHNlIGlmIChpdGVtLnN0YXR1cyA9PT0gSXRlbVN0YXR1cy5QUk9DRVNTSU5HKSB7XG4gICAgICAgICAgICBpdGVtLmFib3J0UHJvY2Vzc2luZygpLnRoZW4ocHJvY2Vzcyk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gYWxyZWFkeSBxdWV1ZWQgZm9yIHByb2Nlc3NpbmdcbiAgICAgICAgaWYgKGl0ZW0uc3RhdHVzID09PSBJdGVtU3RhdHVzLlBST0NFU1NJTkdfUVVFVUVEKSByZXR1cm47XG5cbiAgICAgICAgaXRlbS5yZXF1ZXN0UHJvY2Vzc2luZygpO1xuXG4gICAgICAgIGRpc3BhdGNoKCdESURfUkVRVUVTVF9JVEVNX1BST0NFU1NJTkcnLCB7IGlkOiBpdGVtLmlkIH0pO1xuXG4gICAgICAgIGRpc3BhdGNoKFxuICAgICAgICAgICdQUk9DRVNTX0lURU0nLFxuICAgICAgICAgIHsgcXVlcnk6IGl0ZW0sIHN1Y2Nlc3M6IHN1Y2Nlc3MsIGZhaWx1cmU6IGZhaWx1cmUgfSxcbiAgICAgICAgICB0cnVlXG4gICAgICAgICk7XG4gICAgICB9KSxcblxuICAgICAgUFJPQ0VTU19JVEVNOiBnZXRJdGVtQnlRdWVyeUZyb21TdGF0ZShzdGF0ZSwgZnVuY3Rpb24oXG4gICAgICAgIGl0ZW0sXG4gICAgICAgIHN1Y2Nlc3MsXG4gICAgICAgIGZhaWx1cmVcbiAgICAgICkge1xuICAgICAgICB2YXIgbWF4UGFyYWxsZWxVcGxvYWRzID0gcXVlcnkoJ0dFVF9NQVhfUEFSQUxMRUxfVVBMT0FEUycpO1xuICAgICAgICB2YXIgdG90YWxDdXJyZW50VXBsb2FkcyA9IHF1ZXJ5KFxuICAgICAgICAgICdHRVRfSVRFTVNfQllfU1RBVFVTJyxcbiAgICAgICAgICBJdGVtU3RhdHVzLlBST0NFU1NJTkdcbiAgICAgICAgKS5sZW5ndGg7XG5cbiAgICAgICAgLy8gcXVldWUgYW5kIHdhaXQgdGlsbCBxdWV1ZSBpcyBmcmVlZCB1cFxuICAgICAgICBpZiAodG90YWxDdXJyZW50VXBsb2FkcyA9PT0gbWF4UGFyYWxsZWxVcGxvYWRzKSB7XG4gICAgICAgICAgLy8gcXVldWUgZm9yIGxhdGVyIHByb2Nlc3NpbmdcbiAgICAgICAgICBzdGF0ZS5wcm9jZXNzaW5nUXVldWUucHVzaCh7XG4gICAgICAgICAgICBpZDogaXRlbS5pZCxcbiAgICAgICAgICAgIHN1Y2Nlc3M6IHN1Y2Nlc3MsXG4gICAgICAgICAgICBmYWlsdXJlOiBmYWlsdXJlXG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICAvLyBzdG9wIGl0IVxuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGlmIHdhcyBub3QgcXVldWVkIG9yIGlzIGFscmVhZHkgcHJvY2Vzc2luZyBleGl0IGhlcmVcbiAgICAgICAgaWYgKGl0ZW0uc3RhdHVzID09PSBJdGVtU3RhdHVzLlBST0NFU1NJTkcpIHJldHVybjtcblxuICAgICAgICB2YXIgcHJvY2Vzc05leHQgPSBmdW5jdGlvbiBwcm9jZXNzTmV4dCgpIHtcbiAgICAgICAgICAvLyBwcm9jZXNzIHF1ZXVldWQgaXRlbXNcbiAgICAgICAgICB2YXIgcXVldWVFbnRyeSA9IHN0YXRlLnByb2Nlc3NpbmdRdWV1ZS5zaGlmdCgpO1xuXG4gICAgICAgICAgLy8gbm8gaXRlbXMgbGVmdFxuICAgICAgICAgIGlmICghcXVldWVFbnRyeSkgcmV0dXJuO1xuXG4gICAgICAgICAgLy8gZ2V0IGl0ZW0gcmVmZXJlbmNlXG4gICAgICAgICAgdmFyIGlkID0gcXVldWVFbnRyeS5pZCxcbiAgICAgICAgICAgIHN1Y2Nlc3MgPSBxdWV1ZUVudHJ5LnN1Y2Nlc3MsXG4gICAgICAgICAgICBmYWlsdXJlID0gcXVldWVFbnRyeS5mYWlsdXJlO1xuICAgICAgICAgIHZhciBpdGVtUmVmZXJlbmNlID0gZ2V0SXRlbUJ5UXVlcnkoc3RhdGUuaXRlbXMsIGlkKTtcblxuICAgICAgICAgIC8vIGlmIGl0ZW0gd2FzIGFyY2hpdmVkIHdoaWxlIGluIHF1ZXVlLCBqdW1wIHRvIG5leHRcbiAgICAgICAgICBpZiAoIWl0ZW1SZWZlcmVuY2UgfHwgaXRlbVJlZmVyZW5jZS5hcmNoaXZlZCkge1xuICAgICAgICAgICAgcHJvY2Vzc05leHQoKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyBwcm9jZXNzIHF1ZXVlZCBpdGVtXG4gICAgICAgICAgZGlzcGF0Y2goXG4gICAgICAgICAgICAnUFJPQ0VTU19JVEVNJyxcbiAgICAgICAgICAgIHsgcXVlcnk6IGlkLCBzdWNjZXNzOiBzdWNjZXNzLCBmYWlsdXJlOiBmYWlsdXJlIH0sXG4gICAgICAgICAgICB0cnVlXG4gICAgICAgICAgKTtcbiAgICAgICAgfTtcblxuICAgICAgICAvLyB3ZSBkb25lIGZ1bmN0aW9uXG4gICAgICAgIGl0ZW0ub25PbmNlKCdwcm9jZXNzLWNvbXBsZXRlJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgc3VjY2VzcyhjcmVhdGVJdGVtQVBJKGl0ZW0pKTtcbiAgICAgICAgICBwcm9jZXNzTmV4dCgpO1xuXG4gICAgICAgICAgLy8gQWxsIGl0ZW1zIHByb2Nlc3NlZD8gTm8gZXJyb3JzP1xuICAgICAgICAgIHZhciBhbGxJdGVtc1Byb2Nlc3NlZCA9XG4gICAgICAgICAgICBxdWVyeSgnR0VUX0lURU1TX0JZX1NUQVRVUycsIEl0ZW1TdGF0dXMuUFJPQ0VTU0lOR19DT01QTEVURSlcbiAgICAgICAgICAgICAgLmxlbmd0aCA9PT0gc3RhdGUuaXRlbXMubGVuZ3RoO1xuICAgICAgICAgIGlmIChhbGxJdGVtc1Byb2Nlc3NlZCkge1xuICAgICAgICAgICAgZGlzcGF0Y2goJ0RJRF9DT01QTEVURV9JVEVNX1BST0NFU1NJTkdfQUxMJyk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICAvLyB3ZSBlcnJvciBmdW5jdGlvblxuICAgICAgICBpdGVtLm9uT25jZSgncHJvY2Vzcy1lcnJvcicsIGZ1bmN0aW9uKGVycm9yKSB7XG4gICAgICAgICAgZmFpbHVyZSh7IGVycm9yOiBlcnJvciwgZmlsZTogY3JlYXRlSXRlbUFQSShpdGVtKSB9KTtcbiAgICAgICAgICBwcm9jZXNzTmV4dCgpO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyBzdGFydCBmaWxlIHByb2Nlc3NpbmdcbiAgICAgICAgaXRlbS5wcm9jZXNzKFxuICAgICAgICAgIGNyZWF0ZUZpbGVQcm9jZXNzb3IoXG4gICAgICAgICAgICBjcmVhdGVQcm9jZXNzb3JGdW5jdGlvbihcbiAgICAgICAgICAgICAgc3RhdGUub3B0aW9ucy5zZXJ2ZXIudXJsLFxuICAgICAgICAgICAgICBzdGF0ZS5vcHRpb25zLnNlcnZlci5wcm9jZXNzLFxuICAgICAgICAgICAgICBzdGF0ZS5vcHRpb25zLm5hbWVcbiAgICAgICAgICAgIClcbiAgICAgICAgICApLFxuXG4gICAgICAgICAgLy8gY2FsbGVkIHdoZW4gdGhlIGZpbGUgaXMgYWJvdXQgdG8gYmUgcHJvY2Vzc2VkIHNvIGl0IGNhbiBiZSBwaXBlZCB0aHJvdWdoIHRoZSB0cmFuc2Zvcm0gZmlsdGVyc1xuICAgICAgICAgIGZ1bmN0aW9uKGZpbGUsIHN1Y2Nlc3MsIGVycm9yKSB7XG4gICAgICAgICAgICAvLyBhbGxvdyBwbHVnaW5zIHRvIGFsdGVyIHRoZSBmaWxlIGRhdGFcbiAgICAgICAgICAgIGFwcGx5RmlsdGVyQ2hhaW4oJ1BSRVBBUkVfT1VUUFVUJywgZmlsZSwge1xuICAgICAgICAgICAgICBxdWVyeTogcXVlcnksXG4gICAgICAgICAgICAgIGl0ZW06IGl0ZW1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uKGZpbGUpIHtcbiAgICAgICAgICAgICAgICBkaXNwYXRjaCgnRElEX1BSRVBBUkVfT1VUUFVUJywgeyBpZDogaXRlbS5pZCwgZmlsZTogZmlsZSB9KTtcblxuICAgICAgICAgICAgICAgIHN1Y2Nlc3MoZmlsZSk7XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIC5jYXRjaChlcnJvcik7XG4gICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgfSksXG5cbiAgICAgIFJFVFJZX0lURU1fUFJPQ0VTU0lORzogZ2V0SXRlbUJ5UXVlcnlGcm9tU3RhdGUoc3RhdGUsIGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICAgICAgZGlzcGF0Y2goJ1JFUVVFU1RfSVRFTV9QUk9DRVNTSU5HJywgeyBxdWVyeTogaXRlbSB9KTtcbiAgICAgIH0pLFxuXG4gICAgICBSRVFVRVNUX1JFTU9WRV9JVEVNOiBnZXRJdGVtQnlRdWVyeUZyb21TdGF0ZShzdGF0ZSwgZnVuY3Rpb24oaXRlbSkge1xuICAgICAgICBvcHRpb25hbFByb21pc2UoXG4gICAgICAgICAgcXVlcnkoJ0dFVF9CRUZPUkVfUkVNT1ZFX0ZJTEUnKSxcbiAgICAgICAgICBjcmVhdGVJdGVtQVBJKGl0ZW0pXG4gICAgICAgICkudGhlbihmdW5jdGlvbihzaG91bGRSZW1vdmUpIHtcbiAgICAgICAgICBpZiAoIXNob3VsZFJlbW92ZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgICBkaXNwYXRjaCgnUkVNT1ZFX0lURU0nLCB7IHF1ZXJ5OiBpdGVtIH0pO1xuICAgICAgICB9KTtcbiAgICAgIH0pLFxuXG4gICAgICBSRUxFQVNFX0lURU06IGdldEl0ZW1CeVF1ZXJ5RnJvbVN0YXRlKHN0YXRlLCBmdW5jdGlvbihpdGVtKSB7XG4gICAgICAgIGl0ZW0ucmVsZWFzZSgpO1xuICAgICAgfSksXG5cbiAgICAgIFJFTU9WRV9JVEVNOiBnZXRJdGVtQnlRdWVyeUZyb21TdGF0ZShzdGF0ZSwgZnVuY3Rpb24oaXRlbSwgc3VjY2Vzcykge1xuICAgICAgICB2YXIgcmVtb3ZlRnJvbVZpZXcgPSBmdW5jdGlvbiByZW1vdmVGcm9tVmlldygpIHtcbiAgICAgICAgICAvLyBnZXQgaWQgcmVmZXJlbmNlXG4gICAgICAgICAgdmFyIGlkID0gaXRlbS5pZDtcblxuICAgICAgICAgIC8vIGFyY2hpdmUgdGhlIGl0ZW0sIHRoaXMgZG9lcyBub3QgcmVtb3ZlIGl0IGZyb20gdGhlIGxpc3RcbiAgICAgICAgICBnZXRJdGVtQnlJZChzdGF0ZS5pdGVtcywgaWQpLmFyY2hpdmUoKTtcblxuICAgICAgICAgIC8vIHRlbGwgdGhlIHZpZXcgdGhlIGl0ZW0gaGFzIGJlZW4gcmVtb3ZlZFxuICAgICAgICAgIGRpc3BhdGNoKCdESURfUkVNT1ZFX0lURU0nLCB7IGVycm9yOiBudWxsLCBpZDogaWQsIGl0ZW06IGl0ZW0gfSk7XG5cbiAgICAgICAgICAvLyBub3cgdGhlIGxpc3QgaGFzIGJlZW4gbW9kaWZpZWRcbiAgICAgICAgICBsaXN0VXBkYXRlZChkaXNwYXRjaCwgc3RhdGUpO1xuXG4gICAgICAgICAgLy8gY29ycmVjdGx5IHJlbW92ZWRcbiAgICAgICAgICBzdWNjZXNzKGNyZWF0ZUl0ZW1BUEkoaXRlbSkpO1xuICAgICAgICB9O1xuXG4gICAgICAgIC8vIGlmIHRoaXMgaXMgYSBsb2NhbCBmaWxlIGFuZCB0aGUgc2VydmVyLnJlbW92ZSBmdW5jdGlvbiBoYXMgYmVlbiBjb25maWd1cmVkLCBzZW5kIHNvdXJjZSB0aGVyZSBzbyBkZXYgY2FuIHJlbW92ZSBmaWxlIGZyb20gc2VydmVyXG4gICAgICAgIHZhciBzZXJ2ZXIgPSBzdGF0ZS5vcHRpb25zLnNlcnZlcjtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIGl0ZW0ub3JpZ2luID09PSBGaWxlT3JpZ2luLkxPQ0FMICYmXG4gICAgICAgICAgc2VydmVyICYmXG4gICAgICAgICAgaXNGdW5jdGlvbihzZXJ2ZXIucmVtb3ZlKVxuICAgICAgICApIHtcbiAgICAgICAgICBkaXNwYXRjaCgnRElEX1NUQVJUX0lURU1fUkVNT1ZFJywgeyBpZDogaXRlbS5pZCB9KTtcblxuICAgICAgICAgIHNlcnZlci5yZW1vdmUoXG4gICAgICAgICAgICBpdGVtLnNvdXJjZSxcbiAgICAgICAgICAgIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICByZXR1cm4gcmVtb3ZlRnJvbVZpZXcoKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBmdW5jdGlvbihzdGF0dXMpIHtcbiAgICAgICAgICAgICAgZGlzcGF0Y2goJ0RJRF9USFJPV19JVEVNX1JFTU9WRV9FUlJPUicsIHtcbiAgICAgICAgICAgICAgICBpZDogaXRlbS5pZCxcbiAgICAgICAgICAgICAgICBlcnJvcjogY3JlYXRlUmVzcG9uc2UoJ2Vycm9yJywgMCwgc3RhdHVzLCBudWxsKSxcbiAgICAgICAgICAgICAgICBzdGF0dXM6IHtcbiAgICAgICAgICAgICAgICAgIG1haW46IGR5bmFtaWNMYWJlbChzdGF0ZS5vcHRpb25zLmxhYmVsRmlsZVJlbW92ZUVycm9yKShcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzXG4gICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgc3ViOiBzdGF0ZS5vcHRpb25zLmxhYmVsVGFwVG9SZXRyeVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZW1vdmVGcm9tVmlldygpO1xuICAgICAgICB9XG4gICAgICB9KSxcblxuICAgICAgQUJPUlRfSVRFTV9MT0FEOiBnZXRJdGVtQnlRdWVyeUZyb21TdGF0ZShzdGF0ZSwgZnVuY3Rpb24oaXRlbSkge1xuICAgICAgICBpdGVtLmFib3J0TG9hZCgpO1xuICAgICAgfSksXG5cbiAgICAgIEFCT1JUX0lURU1fUFJPQ0VTU0lORzogZ2V0SXRlbUJ5UXVlcnlGcm9tU3RhdGUoc3RhdGUsIGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICAgICAgLy8gdGVzdCBpZiBpcyBhbHJlYWR5IHByb2Nlc3NlZFxuICAgICAgICBpZiAoaXRlbS5zZXJ2ZXJJZCkge1xuICAgICAgICAgIGRpc3BhdGNoKCdSRVZFUlRfSVRFTV9QUk9DRVNTSU5HJywgeyBpZDogaXRlbS5pZCB9KTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyBhYm9ydFxuICAgICAgICBpdGVtLmFib3J0UHJvY2Vzc2luZygpLnRoZW4oZnVuY3Rpb24oKSB7XG4gICAgICAgICAgdmFyIHNob3VsZFJlbW92ZSA9IHN0YXRlLm9wdGlvbnMuaW5zdGFudFVwbG9hZDtcbiAgICAgICAgICBpZiAoc2hvdWxkUmVtb3ZlKSB7XG4gICAgICAgICAgICBkaXNwYXRjaCgnUkVNT1ZFX0lURU0nLCB7IHF1ZXJ5OiBpdGVtLmlkIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9KSxcblxuICAgICAgUkVRVUVTVF9SRVZFUlRfSVRFTV9QUk9DRVNTSU5HOiBnZXRJdGVtQnlRdWVyeUZyb21TdGF0ZShzdGF0ZSwgZnVuY3Rpb24oXG4gICAgICAgIGl0ZW1cbiAgICAgICkge1xuICAgICAgICAvLyBub3QgaW5zdGFudCB1cGxvYWRpbmcsIHJldmVydCBpbW1pZGlhdGVseVxuICAgICAgICBpZiAoIXN0YXRlLm9wdGlvbnMuaW5zdGFudFVwbG9hZCkge1xuICAgICAgICAgIGRpc3BhdGNoKCdSRVZFUlRfSVRFTV9QUk9DRVNTSU5HJywgeyBxdWVyeTogaXRlbSB9KTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyBpZiB3ZSdyZSBpbnN0YW50IHVwbG9hZGluZyB0aGUgZmlsZSB3aWxsIGFsc28gYmUgcmVtb3ZlZCBpZiB3ZSByZXZlcnQsXG4gICAgICAgIC8vIHNvIGlmIGEgYmVmb3JlIHJlbW92ZSBmaWxlIGhvb2sgaXMgZGVmaW5lZCB3ZSBuZWVkIHRvIHJ1biBpdCBub3dcbiAgICAgICAgdmFyIGhhbmRsZVJldmVydCA9IGZ1bmN0aW9uIGhhbmRsZVJldmVydChzaG91bGRSZXZlcnQpIHtcbiAgICAgICAgICBpZiAoIXNob3VsZFJldmVydCkgcmV0dXJuO1xuICAgICAgICAgIGRpc3BhdGNoKCdSRVZFUlRfSVRFTV9QUk9DRVNTSU5HJywgeyBxdWVyeTogaXRlbSB9KTtcbiAgICAgICAgfTtcblxuICAgICAgICB2YXIgZm4gPSBxdWVyeSgnR0VUX0JFRk9SRV9SRU1PVkVfRklMRScpO1xuICAgICAgICBpZiAoIWZuKSB7XG4gICAgICAgICAgcmV0dXJuIGhhbmRsZVJldmVydCh0cnVlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciByZXF1ZXN0UmVtb3ZlUmVzdWx0ID0gZm4oY3JlYXRlSXRlbUFQSShpdGVtKSk7XG4gICAgICAgIGlmIChyZXF1ZXN0UmVtb3ZlUmVzdWx0ID09IG51bGwpIHtcbiAgICAgICAgICAvLyB1bmRlZmluZWQgb3IgbnVsbFxuICAgICAgICAgIHJldHVybiBoYW5kbGVSZXZlcnQodHJ1ZSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodHlwZW9mIHJlcXVlc3RSZW1vdmVSZXN1bHQgPT09ICdib29sZWFuJykge1xuICAgICAgICAgIHJldHVybiBoYW5kbGVSZXZlcnQocmVxdWVzdFJlbW92ZVJlc3VsdCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodHlwZW9mIHJlcXVlc3RSZW1vdmVSZXN1bHQudGhlbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIHJlcXVlc3RSZW1vdmVSZXN1bHQudGhlbihoYW5kbGVSZXZlcnQpO1xuICAgICAgICB9XG4gICAgICB9KSxcblxuICAgICAgUkVWRVJUX0lURU1fUFJPQ0VTU0lORzogZ2V0SXRlbUJ5UXVlcnlGcm9tU3RhdGUoc3RhdGUsIGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICAgICAgaXRlbVxuICAgICAgICAgIC5yZXZlcnQoXG4gICAgICAgICAgICBjcmVhdGVSZXZlcnRGdW5jdGlvbihcbiAgICAgICAgICAgICAgc3RhdGUub3B0aW9ucy5zZXJ2ZXIudXJsLFxuICAgICAgICAgICAgICBzdGF0ZS5vcHRpb25zLnNlcnZlci5yZXZlcnRcbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBxdWVyeSgnR0VUX0ZPUkNFX1JFVkVSVCcpXG4gICAgICAgICAgKVxuICAgICAgICAgIC50aGVuKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdmFyIHNob3VsZFJlbW92ZSA9IHN0YXRlLm9wdGlvbnMuaW5zdGFudFVwbG9hZCB8fCBpc01vY2tJdGVtKGl0ZW0pO1xuICAgICAgICAgICAgaWYgKHNob3VsZFJlbW92ZSkge1xuICAgICAgICAgICAgICBkaXNwYXRjaCgnUkVNT1ZFX0lURU0nLCB7IHF1ZXJ5OiBpdGVtLmlkIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgICAgLmNhdGNoKGZ1bmN0aW9uKCkge30pO1xuICAgICAgfSksXG5cbiAgICAgIFNFVF9PUFRJT05TOiBmdW5jdGlvbiBTRVRfT1BUSU9OUyhfcmVmMTApIHtcbiAgICAgICAgdmFyIG9wdGlvbnMgPSBfcmVmMTAub3B0aW9ucztcbiAgICAgICAgZm9yaW4ob3B0aW9ucywgZnVuY3Rpb24oa2V5LCB2YWx1ZSkge1xuICAgICAgICAgIGRpc3BhdGNoKCdTRVRfJyArIGZyb21DYW1lbHMoa2V5LCAnXycpLnRvVXBwZXJDYXNlKCksIHtcbiAgICAgICAgICAgIHZhbHVlOiB2YWx1ZVxuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9O1xuICB9O1xuXG4gIHZhciBmb3JtYXRGaWxlbmFtZSA9IGZ1bmN0aW9uIGZvcm1hdEZpbGVuYW1lKG5hbWUpIHtcbiAgICByZXR1cm4gbmFtZTtcbiAgfTtcblxuICB2YXIgY3JlYXRlRWxlbWVudCQxID0gZnVuY3Rpb24gY3JlYXRlRWxlbWVudCh0YWdOYW1lKSB7XG4gICAgcmV0dXJuIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnTmFtZSk7XG4gIH07XG5cbiAgdmFyIHRleHQgPSBmdW5jdGlvbiB0ZXh0KG5vZGUsIHZhbHVlKSB7XG4gICAgdmFyIHRleHROb2RlID0gbm9kZS5jaGlsZE5vZGVzWzBdO1xuICAgIGlmICghdGV4dE5vZGUpIHtcbiAgICAgIHRleHROb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodmFsdWUpO1xuICAgICAgbm9kZS5hcHBlbmRDaGlsZCh0ZXh0Tm9kZSk7XG4gICAgfSBlbHNlIGlmICh2YWx1ZSAhPT0gdGV4dE5vZGUubm9kZVZhbHVlKSB7XG4gICAgICB0ZXh0Tm9kZS5ub2RlVmFsdWUgPSB2YWx1ZTtcbiAgICB9XG4gIH07XG5cbiAgdmFyIHBvbGFyVG9DYXJ0ZXNpYW4gPSBmdW5jdGlvbiBwb2xhclRvQ2FydGVzaWFuKFxuICAgIGNlbnRlclgsXG4gICAgY2VudGVyWSxcbiAgICByYWRpdXMsXG4gICAgYW5nbGVJbkRlZ3JlZXNcbiAgKSB7XG4gICAgdmFyIGFuZ2xlSW5SYWRpYW5zID0gKCgoYW5nbGVJbkRlZ3JlZXMgJSAzNjApIC0gOTApICogTWF0aC5QSSkgLyAxODAuMDtcbiAgICByZXR1cm4ge1xuICAgICAgeDogY2VudGVyWCArIHJhZGl1cyAqIE1hdGguY29zKGFuZ2xlSW5SYWRpYW5zKSxcbiAgICAgIHk6IGNlbnRlclkgKyByYWRpdXMgKiBNYXRoLnNpbihhbmdsZUluUmFkaWFucylcbiAgICB9O1xuICB9O1xuXG4gIHZhciBkZXNjcmliZUFyYyA9IGZ1bmN0aW9uIGRlc2NyaWJlQXJjKFxuICAgIHgsXG4gICAgeSxcbiAgICByYWRpdXMsXG4gICAgc3RhcnRBbmdsZSxcbiAgICBlbmRBbmdsZSxcbiAgICBhcmNTd2VlcFxuICApIHtcbiAgICB2YXIgc3RhcnQgPSBwb2xhclRvQ2FydGVzaWFuKHgsIHksIHJhZGl1cywgZW5kQW5nbGUpO1xuICAgIHZhciBlbmQgPSBwb2xhclRvQ2FydGVzaWFuKHgsIHksIHJhZGl1cywgc3RhcnRBbmdsZSk7XG4gICAgcmV0dXJuIFtcbiAgICAgICdNJyxcbiAgICAgIHN0YXJ0LngsXG4gICAgICBzdGFydC55LFxuICAgICAgJ0EnLFxuICAgICAgcmFkaXVzLFxuICAgICAgcmFkaXVzLFxuICAgICAgMCxcbiAgICAgIGFyY1N3ZWVwLFxuICAgICAgMCxcbiAgICAgIGVuZC54LFxuICAgICAgZW5kLnlcbiAgICBdLmpvaW4oJyAnKTtcbiAgfTtcblxuICB2YXIgcGVyY2VudGFnZUFyYyA9IGZ1bmN0aW9uIHBlcmNlbnRhZ2VBcmMoeCwgeSwgcmFkaXVzLCBmcm9tLCB0bykge1xuICAgIHZhciBhcmNTd2VlcCA9IDE7XG4gICAgaWYgKHRvID4gZnJvbSAmJiB0byAtIGZyb20gPD0gMC41KSB7XG4gICAgICBhcmNTd2VlcCA9IDA7XG4gICAgfVxuICAgIGlmIChmcm9tID4gdG8gJiYgZnJvbSAtIHRvID49IDAuNSkge1xuICAgICAgYXJjU3dlZXAgPSAwO1xuICAgIH1cbiAgICByZXR1cm4gZGVzY3JpYmVBcmMoXG4gICAgICB4LFxuICAgICAgeSxcbiAgICAgIHJhZGl1cyxcbiAgICAgIE1hdGgubWluKDAuOTk5OSwgZnJvbSkgKiAzNjAsXG4gICAgICBNYXRoLm1pbigwLjk5OTksIHRvKSAqIDM2MCxcbiAgICAgIGFyY1N3ZWVwXG4gICAgKTtcbiAgfTtcblxuICB2YXIgY3JlYXRlID0gZnVuY3Rpb24gY3JlYXRlKF9yZWYpIHtcbiAgICB2YXIgcm9vdCA9IF9yZWYucm9vdCxcbiAgICAgIHByb3BzID0gX3JlZi5wcm9wcztcbiAgICAvLyBzdGFydCBhdCAwXG4gICAgcHJvcHMuc3BpbiA9IGZhbHNlO1xuICAgIHByb3BzLnByb2dyZXNzID0gMDtcbiAgICBwcm9wcy5vcGFjaXR5ID0gMDtcblxuICAgIC8vIHN2Z1xuICAgIHZhciBzdmcgPSBjcmVhdGVFbGVtZW50KCdzdmcnKTtcbiAgICByb290LnJlZi5wYXRoID0gY3JlYXRlRWxlbWVudCgncGF0aCcsIHtcbiAgICAgICdzdHJva2Utd2lkdGgnOiAyLFxuICAgICAgJ3N0cm9rZS1saW5lY2FwJzogJ3JvdW5kJ1xuICAgIH0pO1xuXG4gICAgc3ZnLmFwcGVuZENoaWxkKHJvb3QucmVmLnBhdGgpO1xuXG4gICAgcm9vdC5yZWYuc3ZnID0gc3ZnO1xuXG4gICAgcm9vdC5hcHBlbmRDaGlsZChzdmcpO1xuICB9O1xuXG4gIHZhciB3cml0ZSA9IGZ1bmN0aW9uIHdyaXRlKF9yZWYyKSB7XG4gICAgdmFyIHJvb3QgPSBfcmVmMi5yb290LFxuICAgICAgcHJvcHMgPSBfcmVmMi5wcm9wcztcblxuICAgIGlmIChwcm9wcy5vcGFjaXR5ID09PSAwKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHByb3BzLmFsaWduKSB7XG4gICAgICByb290LmVsZW1lbnQuZGF0YXNldC5hbGlnbiA9IHByb3BzLmFsaWduO1xuICAgIH1cblxuICAgIC8vIGdldCB3aWR0aCBvZiBzdHJva2VcbiAgICB2YXIgcmluZ1N0cm9rZVdpZHRoID0gcGFyc2VJbnQoYXR0cihyb290LnJlZi5wYXRoLCAnc3Ryb2tlLXdpZHRoJyksIDEwKTtcblxuICAgIC8vIGNhbGN1bGF0ZSBzaXplIG9mIHJpbmdcbiAgICB2YXIgc2l6ZSA9IHJvb3QucmVjdC5lbGVtZW50LndpZHRoICogMC41O1xuXG4gICAgLy8gcmluZyBzdGF0ZVxuICAgIHZhciByaW5nRnJvbSA9IDA7XG4gICAgdmFyIHJpbmdUbyA9IDA7XG5cbiAgICAvLyBub3cgaW4gYnVzeSBtb2RlXG4gICAgaWYgKHByb3BzLnNwaW4pIHtcbiAgICAgIHJpbmdGcm9tID0gMDtcbiAgICAgIHJpbmdUbyA9IDAuNTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmluZ0Zyb20gPSAwO1xuICAgICAgcmluZ1RvID0gcHJvcHMucHJvZ3Jlc3M7XG4gICAgfVxuXG4gICAgLy8gZ2V0IGFyYyBwYXRoXG4gICAgdmFyIGNvb3JkaW5hdGVzID0gcGVyY2VudGFnZUFyYyhcbiAgICAgIHNpemUsXG4gICAgICBzaXplLFxuICAgICAgc2l6ZSAtIHJpbmdTdHJva2VXaWR0aCxcbiAgICAgIHJpbmdGcm9tLFxuICAgICAgcmluZ1RvXG4gICAgKTtcblxuICAgIC8vIHVwZGF0ZSBwcm9ncmVzcyBiYXJcbiAgICBhdHRyKHJvb3QucmVmLnBhdGgsICdkJywgY29vcmRpbmF0ZXMpO1xuXG4gICAgLy8gaGlkZSB3aGlsZSBjb250YWlucyAwIHZhbHVlXG4gICAgYXR0cihcbiAgICAgIHJvb3QucmVmLnBhdGgsXG4gICAgICAnc3Ryb2tlLW9wYWNpdHknLFxuICAgICAgcHJvcHMuc3BpbiB8fCBwcm9wcy5wcm9ncmVzcyA+IDAgPyAxIDogMFxuICAgICk7XG4gIH07XG5cbiAgdmFyIHByb2dyZXNzSW5kaWNhdG9yID0gY3JlYXRlVmlldyh7XG4gICAgdGFnOiAnZGl2JyxcbiAgICBuYW1lOiAncHJvZ3Jlc3MtaW5kaWNhdG9yJyxcbiAgICBpZ25vcmVSZWN0VXBkYXRlOiB0cnVlLFxuICAgIGlnbm9yZVJlY3Q6IHRydWUsXG4gICAgY3JlYXRlOiBjcmVhdGUsXG4gICAgd3JpdGU6IHdyaXRlLFxuICAgIG1peGluczoge1xuICAgICAgYXBpczogWydwcm9ncmVzcycsICdzcGluJywgJ2FsaWduJ10sXG4gICAgICBzdHlsZXM6IFsnb3BhY2l0eSddLFxuICAgICAgYW5pbWF0aW9uczoge1xuICAgICAgICBvcGFjaXR5OiB7IHR5cGU6ICd0d2VlbicsIGR1cmF0aW9uOiA1MDAgfSxcbiAgICAgICAgcHJvZ3Jlc3M6IHtcbiAgICAgICAgICB0eXBlOiAnc3ByaW5nJyxcbiAgICAgICAgICBzdGlmZm5lc3M6IDAuOTUsXG4gICAgICAgICAgZGFtcGluZzogMC42NSxcbiAgICAgICAgICBtYXNzOiAxMFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9KTtcblxuICB2YXIgY3JlYXRlJDEgPSBmdW5jdGlvbiBjcmVhdGUoX3JlZikge1xuICAgIHZhciByb290ID0gX3JlZi5yb290LFxuICAgICAgcHJvcHMgPSBfcmVmLnByb3BzO1xuICAgIHJvb3QuZWxlbWVudC5pbm5lckhUTUwgPVxuICAgICAgKHByb3BzLmljb24gfHwgJycpICsgKCc8c3Bhbj4nICsgcHJvcHMubGFiZWwgKyAnPC9zcGFuPicpO1xuXG4gICAgcHJvcHMuaXNEaXNhYmxlZCA9IGZhbHNlO1xuICB9O1xuXG4gIHZhciB3cml0ZSQxID0gZnVuY3Rpb24gd3JpdGUoX3JlZjIpIHtcbiAgICB2YXIgcm9vdCA9IF9yZWYyLnJvb3QsXG4gICAgICBwcm9wcyA9IF9yZWYyLnByb3BzO1xuICAgIHZhciBpc0Rpc2FibGVkID0gcHJvcHMuaXNEaXNhYmxlZDtcbiAgICB2YXIgc2hvdWxkRGlzYWJsZSA9IHJvb3QucXVlcnkoJ0dFVF9ESVNBQkxFRCcpIHx8IHByb3BzLm9wYWNpdHkgPT09IDA7XG5cbiAgICBpZiAoc2hvdWxkRGlzYWJsZSAmJiAhaXNEaXNhYmxlZCkge1xuICAgICAgcHJvcHMuaXNEaXNhYmxlZCA9IHRydWU7XG4gICAgICBhdHRyKHJvb3QuZWxlbWVudCwgJ2Rpc2FibGVkJywgJ2Rpc2FibGVkJyk7XG4gICAgfSBlbHNlIGlmICghc2hvdWxkRGlzYWJsZSAmJiBpc0Rpc2FibGVkKSB7XG4gICAgICBwcm9wcy5pc0Rpc2FibGVkID0gZmFsc2U7XG4gICAgICByb290LmVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCdkaXNhYmxlZCcpO1xuICAgIH1cbiAgfTtcblxuICB2YXIgZmlsZUFjdGlvbkJ1dHRvbiA9IGNyZWF0ZVZpZXcoe1xuICAgIHRhZzogJ2J1dHRvbicsXG4gICAgYXR0cmlidXRlczoge1xuICAgICAgdHlwZTogJ2J1dHRvbidcbiAgICB9LFxuXG4gICAgaWdub3JlUmVjdDogdHJ1ZSxcbiAgICBpZ25vcmVSZWN0VXBkYXRlOiB0cnVlLFxuICAgIG5hbWU6ICdmaWxlLWFjdGlvbi1idXR0b24nLFxuICAgIG1peGluczoge1xuICAgICAgYXBpczogWydsYWJlbCddLFxuICAgICAgc3R5bGVzOiBbJ3RyYW5zbGF0ZVgnLCAndHJhbnNsYXRlWScsICdzY2FsZVgnLCAnc2NhbGVZJywgJ29wYWNpdHknXSxcbiAgICAgIGFuaW1hdGlvbnM6IHtcbiAgICAgICAgc2NhbGVYOiAnc3ByaW5nJyxcbiAgICAgICAgc2NhbGVZOiAnc3ByaW5nJyxcbiAgICAgICAgdHJhbnNsYXRlWDogJ3NwcmluZycsXG4gICAgICAgIHRyYW5zbGF0ZVk6ICdzcHJpbmcnLFxuICAgICAgICBvcGFjaXR5OiB7IHR5cGU6ICd0d2VlbicsIGR1cmF0aW9uOiAyNTAgfVxuICAgICAgfSxcblxuICAgICAgbGlzdGVuZXJzOiB0cnVlXG4gICAgfSxcblxuICAgIGNyZWF0ZTogY3JlYXRlJDEsXG4gICAgd3JpdGU6IHdyaXRlJDFcbiAgfSk7XG5cbiAgdmFyIHRvTmF0dXJhbEZpbGVTaXplID0gZnVuY3Rpb24gdG9OYXR1cmFsRmlsZVNpemUoYnl0ZXMpIHtcbiAgICB2YXIgZGVjaW1hbFNlcGFyYXRvciA9XG4gICAgICBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6ICcuJztcbiAgICAvLyBub3BlLCBubyBuZWdhdGl2ZSBieXRlIHNpemVzXG4gICAgYnl0ZXMgPSBNYXRoLnJvdW5kKE1hdGguYWJzKGJ5dGVzKSk7XG5cbiAgICAvLyBqdXN0IGJ5dGVzXG4gICAgaWYgKGJ5dGVzIDwgMTAwMCkge1xuICAgICAgcmV0dXJuIGJ5dGVzICsgJyBieXRlcyc7XG4gICAgfVxuXG4gICAgLy8ga2lsb2J5dGVzXG4gICAgaWYgKGJ5dGVzIDwgTUIpIHtcbiAgICAgIHJldHVybiBNYXRoLmZsb29yKGJ5dGVzIC8gS0IpICsgJyBLQic7XG4gICAgfVxuXG4gICAgLy8gbWVnYWJ5dGVzXG4gICAgaWYgKGJ5dGVzIDwgR0IpIHtcbiAgICAgIHJldHVybiByZW1vdmVEZWNpbWFsc1doZW5aZXJvKGJ5dGVzIC8gTUIsIDEsIGRlY2ltYWxTZXBhcmF0b3IpICsgJyBNQic7XG4gICAgfVxuXG4gICAgLy8gZ2lnYWJ5dGVzXG4gICAgcmV0dXJuIHJlbW92ZURlY2ltYWxzV2hlblplcm8oYnl0ZXMgLyBHQiwgMiwgZGVjaW1hbFNlcGFyYXRvcikgKyAnIEdCJztcbiAgfTtcblxuICB2YXIgS0IgPSAxMDAwO1xuICB2YXIgTUIgPSAxMDAwMDAwO1xuICB2YXIgR0IgPSAxMDAwMDAwMDAwO1xuXG4gIHZhciByZW1vdmVEZWNpbWFsc1doZW5aZXJvID0gZnVuY3Rpb24gcmVtb3ZlRGVjaW1hbHNXaGVuWmVybyhcbiAgICB2YWx1ZSxcbiAgICBkZWNpbWFsQ291bnQsXG4gICAgc2VwYXJhdG9yXG4gICkge1xuICAgIHJldHVybiB2YWx1ZVxuICAgICAgLnRvRml4ZWQoZGVjaW1hbENvdW50KVxuICAgICAgLnNwbGl0KCcuJylcbiAgICAgIC5maWx0ZXIoZnVuY3Rpb24ocGFydCkge1xuICAgICAgICByZXR1cm4gcGFydCAhPT0gJzAnO1xuICAgICAgfSlcbiAgICAgIC5qb2luKHNlcGFyYXRvcik7XG4gIH07XG5cbiAgdmFyIGNyZWF0ZSQyID0gZnVuY3Rpb24gY3JlYXRlKF9yZWYpIHtcbiAgICB2YXIgcm9vdCA9IF9yZWYucm9vdCxcbiAgICAgIHByb3BzID0gX3JlZi5wcm9wcztcbiAgICAvLyBmaWxlbmFtZVxuICAgIHZhciBmaWxlTmFtZSA9IGNyZWF0ZUVsZW1lbnQkMSgnc3BhbicpO1xuICAgIGZpbGVOYW1lLmNsYXNzTmFtZSA9ICdmaWxlcG9uZC0tZmlsZS1pbmZvLW1haW4nO1xuICAgIC8vIGhpZGUgZm9yIHNjcmVlbnJlYWRlcnNcbiAgICAvLyB0aGUgZmlsZSBpcyBjb250YWluZWQgaW4gYSBmaWVsZHNldCB3aXRoIGxlZ2VuZCB0aGF0IGNvbnRhaW5zIHRoZSBmaWxlbmFtZVxuICAgIC8vIG5vIG5lZWQgdG8gcmVhZCBpdCB0d2ljZVxuICAgIGF0dHIoZmlsZU5hbWUsICdhcmlhLWhpZGRlbicsICd0cnVlJyk7XG4gICAgcm9vdC5hcHBlbmRDaGlsZChmaWxlTmFtZSk7XG4gICAgcm9vdC5yZWYuZmlsZU5hbWUgPSBmaWxlTmFtZTtcblxuICAgIC8vIGZpbGVzaXplXG4gICAgdmFyIGZpbGVTaXplID0gY3JlYXRlRWxlbWVudCQxKCdzcGFuJyk7XG4gICAgZmlsZVNpemUuY2xhc3NOYW1lID0gJ2ZpbGVwb25kLS1maWxlLWluZm8tc3ViJztcbiAgICByb290LmFwcGVuZENoaWxkKGZpbGVTaXplKTtcbiAgICByb290LnJlZi5maWxlU2l6ZSA9IGZpbGVTaXplO1xuXG4gICAgLy8gc2V0IGluaXRpYWwgdmFsdWVzXG4gICAgdGV4dChmaWxlU2l6ZSwgcm9vdC5xdWVyeSgnR0VUX0xBQkVMX0ZJTEVfV0FJVElOR19GT1JfU0laRScpKTtcbiAgICB0ZXh0KGZpbGVOYW1lLCBmb3JtYXRGaWxlbmFtZShyb290LnF1ZXJ5KCdHRVRfSVRFTV9OQU1FJywgcHJvcHMuaWQpKSk7XG4gIH07XG5cbiAgdmFyIHVwZGF0ZUZpbGUgPSBmdW5jdGlvbiB1cGRhdGVGaWxlKF9yZWYyKSB7XG4gICAgdmFyIHJvb3QgPSBfcmVmMi5yb290LFxuICAgICAgcHJvcHMgPSBfcmVmMi5wcm9wcztcbiAgICB0ZXh0KFxuICAgICAgcm9vdC5yZWYuZmlsZVNpemUsXG4gICAgICB0b05hdHVyYWxGaWxlU2l6ZShyb290LnF1ZXJ5KCdHRVRfSVRFTV9TSVpFJywgcHJvcHMuaWQpKVxuICAgICk7XG5cbiAgICB0ZXh0KFxuICAgICAgcm9vdC5yZWYuZmlsZU5hbWUsXG4gICAgICBmb3JtYXRGaWxlbmFtZShyb290LnF1ZXJ5KCdHRVRfSVRFTV9OQU1FJywgcHJvcHMuaWQpKVxuICAgICk7XG4gIH07XG5cbiAgdmFyIHVwZGF0ZUZpbGVTaXplT25FcnJvciA9IGZ1bmN0aW9uIHVwZGF0ZUZpbGVTaXplT25FcnJvcihfcmVmMykge1xuICAgIHZhciByb290ID0gX3JlZjMucm9vdCxcbiAgICAgIHByb3BzID0gX3JlZjMucHJvcHM7XG4gICAgLy8gaWYgc2l6ZSBpcyBhdmFpbGFibGUgZG9uJ3QgZmFsbGJhY2sgdG8gdW5rbm93biBzaXplIG1lc3NhZ2VcbiAgICBpZiAoaXNJbnQocm9vdC5xdWVyeSgnR0VUX0lURU1fU0laRScsIHByb3BzLmlkKSkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0ZXh0KHJvb3QucmVmLmZpbGVTaXplLCByb290LnF1ZXJ5KCdHRVRfTEFCRUxfRklMRV9TSVpFX05PVF9BVkFJTEFCTEUnKSk7XG4gIH07XG5cbiAgdmFyIGZpbGVJbmZvID0gY3JlYXRlVmlldyh7XG4gICAgbmFtZTogJ2ZpbGUtaW5mbycsXG4gICAgaWdub3JlUmVjdDogdHJ1ZSxcbiAgICBpZ25vcmVSZWN0VXBkYXRlOiB0cnVlLFxuICAgIHdyaXRlOiBjcmVhdGVSb3V0ZSh7XG4gICAgICBESURfTE9BRF9JVEVNOiB1cGRhdGVGaWxlLFxuICAgICAgRElEX1VQREFURV9JVEVNX01FVEE6IHVwZGF0ZUZpbGUsXG4gICAgICBESURfVEhST1dfSVRFTV9MT0FEX0VSUk9SOiB1cGRhdGVGaWxlU2l6ZU9uRXJyb3IsXG4gICAgICBESURfVEhST1dfSVRFTV9JTlZBTElEOiB1cGRhdGVGaWxlU2l6ZU9uRXJyb3JcbiAgICB9KSxcblxuICAgIGRpZENyZWF0ZVZpZXc6IGZ1bmN0aW9uIGRpZENyZWF0ZVZpZXcocm9vdCkge1xuICAgICAgYXBwbHlGaWx0ZXJzKCdDUkVBVEVfVklFVycsIE9iamVjdC5hc3NpZ24oe30sIHJvb3QsIHsgdmlldzogcm9vdCB9KSk7XG4gICAgfSxcbiAgICBjcmVhdGU6IGNyZWF0ZSQyLFxuICAgIG1peGluczoge1xuICAgICAgc3R5bGVzOiBbJ3RyYW5zbGF0ZVgnLCAndHJhbnNsYXRlWSddLFxuICAgICAgYW5pbWF0aW9uczoge1xuICAgICAgICB0cmFuc2xhdGVYOiAnc3ByaW5nJyxcbiAgICAgICAgdHJhbnNsYXRlWTogJ3NwcmluZydcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuXG4gIHZhciB0b1BlcmNlbnRhZ2UgPSBmdW5jdGlvbiB0b1BlcmNlbnRhZ2UodmFsdWUpIHtcbiAgICByZXR1cm4gTWF0aC5yb3VuZCh2YWx1ZSAqIDEwMCk7XG4gIH07XG5cbiAgdmFyIGNyZWF0ZSQzID0gZnVuY3Rpb24gY3JlYXRlKF9yZWYpIHtcbiAgICB2YXIgcm9vdCA9IF9yZWYucm9vdCxcbiAgICAgIHByb3BzID0gX3JlZi5wcm9wcztcbiAgICAvLyBtYWluIHN0YXR1c1xuICAgIHZhciBtYWluID0gY3JlYXRlRWxlbWVudCQxKCdzcGFuJyk7XG4gICAgbWFpbi5jbGFzc05hbWUgPSAnZmlsZXBvbmQtLWZpbGUtc3RhdHVzLW1haW4nO1xuICAgIHJvb3QuYXBwZW5kQ2hpbGQobWFpbik7XG4gICAgcm9vdC5yZWYubWFpbiA9IG1haW47XG5cbiAgICAvLyBzdWIgc3RhdHVzXG4gICAgdmFyIHN1YiA9IGNyZWF0ZUVsZW1lbnQkMSgnc3BhbicpO1xuICAgIHN1Yi5jbGFzc05hbWUgPSAnZmlsZXBvbmQtLWZpbGUtc3RhdHVzLXN1Yic7XG4gICAgcm9vdC5hcHBlbmRDaGlsZChzdWIpO1xuICAgIHJvb3QucmVmLnN1YiA9IHN1YjtcblxuICAgIGRpZFNldEl0ZW1Mb2FkUHJvZ3Jlc3MoeyByb290OiByb290LCBhY3Rpb246IHsgcHJvZ3Jlc3M6IG51bGwgfSB9KTtcbiAgfTtcblxuICB2YXIgZGlkU2V0SXRlbUxvYWRQcm9ncmVzcyA9IGZ1bmN0aW9uIGRpZFNldEl0ZW1Mb2FkUHJvZ3Jlc3MoX3JlZjIpIHtcbiAgICB2YXIgcm9vdCA9IF9yZWYyLnJvb3QsXG4gICAgICBhY3Rpb24gPSBfcmVmMi5hY3Rpb247XG4gICAgdmFyIHRpdGxlID1cbiAgICAgIGFjdGlvbi5wcm9ncmVzcyA9PT0gbnVsbFxuICAgICAgICA/IHJvb3QucXVlcnkoJ0dFVF9MQUJFTF9GSUxFX0xPQURJTkcnKVxuICAgICAgICA6IHJvb3QucXVlcnkoJ0dFVF9MQUJFTF9GSUxFX0xPQURJTkcnKSArXG4gICAgICAgICAgJyAnICtcbiAgICAgICAgICB0b1BlcmNlbnRhZ2UoYWN0aW9uLnByb2dyZXNzKSArXG4gICAgICAgICAgJyUnO1xuXG4gICAgdGV4dChyb290LnJlZi5tYWluLCB0aXRsZSk7XG4gICAgdGV4dChyb290LnJlZi5zdWIsIHJvb3QucXVlcnkoJ0dFVF9MQUJFTF9UQVBfVE9fQ0FOQ0VMJykpO1xuICB9O1xuXG4gIHZhciBkaWRTZXRJdGVtUHJvY2Vzc1Byb2dyZXNzID0gZnVuY3Rpb24gZGlkU2V0SXRlbVByb2Nlc3NQcm9ncmVzcyhfcmVmMykge1xuICAgIHZhciByb290ID0gX3JlZjMucm9vdCxcbiAgICAgIGFjdGlvbiA9IF9yZWYzLmFjdGlvbjtcbiAgICB2YXIgdGl0bGUgPVxuICAgICAgYWN0aW9uLnByb2dyZXNzID09PSBudWxsXG4gICAgICAgID8gcm9vdC5xdWVyeSgnR0VUX0xBQkVMX0ZJTEVfUFJPQ0VTU0lORycpXG4gICAgICAgIDogcm9vdC5xdWVyeSgnR0VUX0xBQkVMX0ZJTEVfUFJPQ0VTU0lORycpICtcbiAgICAgICAgICAnICcgK1xuICAgICAgICAgIHRvUGVyY2VudGFnZShhY3Rpb24ucHJvZ3Jlc3MpICtcbiAgICAgICAgICAnJSc7XG5cbiAgICB0ZXh0KHJvb3QucmVmLm1haW4sIHRpdGxlKTtcbiAgICB0ZXh0KHJvb3QucmVmLnN1Yiwgcm9vdC5xdWVyeSgnR0VUX0xBQkVMX1RBUF9UT19DQU5DRUwnKSk7XG4gIH07XG5cbiAgdmFyIGRpZFJlcXVlc3RJdGVtUHJvY2Vzc2luZyA9IGZ1bmN0aW9uIGRpZFJlcXVlc3RJdGVtUHJvY2Vzc2luZyhfcmVmNCkge1xuICAgIHZhciByb290ID0gX3JlZjQucm9vdDtcbiAgICB0ZXh0KHJvb3QucmVmLm1haW4sIHJvb3QucXVlcnkoJ0dFVF9MQUJFTF9GSUxFX1BST0NFU1NJTkcnKSk7XG4gICAgdGV4dChyb290LnJlZi5zdWIsIHJvb3QucXVlcnkoJ0dFVF9MQUJFTF9UQVBfVE9fQ0FOQ0VMJykpO1xuICB9O1xuXG4gIHZhciBkaWRBYm9ydEl0ZW1Qcm9jZXNzaW5nID0gZnVuY3Rpb24gZGlkQWJvcnRJdGVtUHJvY2Vzc2luZyhfcmVmNSkge1xuICAgIHZhciByb290ID0gX3JlZjUucm9vdDtcbiAgICB0ZXh0KHJvb3QucmVmLm1haW4sIHJvb3QucXVlcnkoJ0dFVF9MQUJFTF9GSUxFX1BST0NFU1NJTkdfQUJPUlRFRCcpKTtcbiAgICB0ZXh0KHJvb3QucmVmLnN1Yiwgcm9vdC5xdWVyeSgnR0VUX0xBQkVMX1RBUF9UT19SRVRSWScpKTtcbiAgfTtcblxuICB2YXIgZGlkQ29tcGxldGVJdGVtUHJvY2Vzc2luZyA9IGZ1bmN0aW9uIGRpZENvbXBsZXRlSXRlbVByb2Nlc3NpbmcoX3JlZjYpIHtcbiAgICB2YXIgcm9vdCA9IF9yZWY2LnJvb3Q7XG4gICAgdGV4dChyb290LnJlZi5tYWluLCByb290LnF1ZXJ5KCdHRVRfTEFCRUxfRklMRV9QUk9DRVNTSU5HX0NPTVBMRVRFJykpO1xuICAgIHRleHQocm9vdC5yZWYuc3ViLCByb290LnF1ZXJ5KCdHRVRfTEFCRUxfVEFQX1RPX1VORE8nKSk7XG4gIH07XG5cbiAgdmFyIGNsZWFyID0gZnVuY3Rpb24gY2xlYXIoX3JlZjcpIHtcbiAgICB2YXIgcm9vdCA9IF9yZWY3LnJvb3Q7XG4gICAgdGV4dChyb290LnJlZi5tYWluLCAnJyk7XG4gICAgdGV4dChyb290LnJlZi5zdWIsICcnKTtcbiAgfTtcblxuICB2YXIgZXJyb3IgPSBmdW5jdGlvbiBlcnJvcihfcmVmOCkge1xuICAgIHZhciByb290ID0gX3JlZjgucm9vdCxcbiAgICAgIGFjdGlvbiA9IF9yZWY4LmFjdGlvbjtcbiAgICB0ZXh0KHJvb3QucmVmLm1haW4sIGFjdGlvbi5zdGF0dXMubWFpbik7XG4gICAgdGV4dChyb290LnJlZi5zdWIsIGFjdGlvbi5zdGF0dXMuc3ViKTtcbiAgfTtcblxuICB2YXIgZmlsZVN0YXR1cyA9IGNyZWF0ZVZpZXcoe1xuICAgIG5hbWU6ICdmaWxlLXN0YXR1cycsXG4gICAgaWdub3JlUmVjdDogdHJ1ZSxcbiAgICBpZ25vcmVSZWN0VXBkYXRlOiB0cnVlLFxuICAgIHdyaXRlOiBjcmVhdGVSb3V0ZSh7XG4gICAgICBESURfTE9BRF9JVEVNOiBjbGVhcixcbiAgICAgIERJRF9SRVZFUlRfSVRFTV9QUk9DRVNTSU5HOiBjbGVhcixcbiAgICAgIERJRF9SRVFVRVNUX0lURU1fUFJPQ0VTU0lORzogZGlkUmVxdWVzdEl0ZW1Qcm9jZXNzaW5nLFxuICAgICAgRElEX0FCT1JUX0lURU1fUFJPQ0VTU0lORzogZGlkQWJvcnRJdGVtUHJvY2Vzc2luZyxcbiAgICAgIERJRF9DT01QTEVURV9JVEVNX1BST0NFU1NJTkc6IGRpZENvbXBsZXRlSXRlbVByb2Nlc3NpbmcsXG4gICAgICBESURfVVBEQVRFX0lURU1fUFJPQ0VTU19QUk9HUkVTUzogZGlkU2V0SXRlbVByb2Nlc3NQcm9ncmVzcyxcbiAgICAgIERJRF9VUERBVEVfSVRFTV9MT0FEX1BST0dSRVNTOiBkaWRTZXRJdGVtTG9hZFByb2dyZXNzLFxuICAgICAgRElEX1RIUk9XX0lURU1fTE9BRF9FUlJPUjogZXJyb3IsXG4gICAgICBESURfVEhST1dfSVRFTV9JTlZBTElEOiBlcnJvcixcbiAgICAgIERJRF9USFJPV19JVEVNX1BST0NFU1NJTkdfRVJST1I6IGVycm9yLFxuICAgICAgRElEX1RIUk9XX0lURU1fUFJPQ0VTU0lOR19SRVZFUlRfRVJST1I6IGVycm9yLFxuICAgICAgRElEX1RIUk9XX0lURU1fUkVNT1ZFX0VSUk9SOiBlcnJvclxuICAgIH0pLFxuXG4gICAgZGlkQ3JlYXRlVmlldzogZnVuY3Rpb24gZGlkQ3JlYXRlVmlldyhyb290KSB7XG4gICAgICBhcHBseUZpbHRlcnMoJ0NSRUFURV9WSUVXJywgT2JqZWN0LmFzc2lnbih7fSwgcm9vdCwgeyB2aWV3OiByb290IH0pKTtcbiAgICB9LFxuICAgIGNyZWF0ZTogY3JlYXRlJDMsXG4gICAgbWl4aW5zOiB7XG4gICAgICBzdHlsZXM6IFsndHJhbnNsYXRlWCcsICd0cmFuc2xhdGVZJywgJ29wYWNpdHknXSxcbiAgICAgIGFuaW1hdGlvbnM6IHtcbiAgICAgICAgb3BhY2l0eTogeyB0eXBlOiAndHdlZW4nLCBkdXJhdGlvbjogMjUwIH0sXG4gICAgICAgIHRyYW5zbGF0ZVg6ICdzcHJpbmcnLFxuICAgICAgICB0cmFuc2xhdGVZOiAnc3ByaW5nJ1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG5cbiAgLyoqXG4gICAqIEJ1dHRvbiBkZWZpbml0aW9ucyBmb3IgdGhlIGZpbGUgdmlld1xuICAgKi9cblxuICB2YXIgQnV0dG9ucyA9IHtcbiAgICBBYm9ydEl0ZW1Mb2FkOiB7XG4gICAgICBsYWJlbDogJ0dFVF9MQUJFTF9CVVRUT05fQUJPUlRfSVRFTV9MT0FEJyxcbiAgICAgIGFjdGlvbjogJ0FCT1JUX0lURU1fTE9BRCcsXG4gICAgICBjbGFzc05hbWU6ICdmaWxlcG9uZC0tYWN0aW9uLWFib3J0LWl0ZW0tbG9hZCcsXG4gICAgICBhbGlnbjogJ0xPQURfSU5ESUNBVE9SX1BPU0lUSU9OJyAvLyByaWdodFxuICAgIH0sXG4gICAgUmV0cnlJdGVtTG9hZDoge1xuICAgICAgbGFiZWw6ICdHRVRfTEFCRUxfQlVUVE9OX1JFVFJZX0lURU1fTE9BRCcsXG4gICAgICBhY3Rpb246ICdSRVRSWV9JVEVNX0xPQUQnLFxuICAgICAgaWNvbjogJ0dFVF9JQ09OX1JFVFJZJyxcbiAgICAgIGNsYXNzTmFtZTogJ2ZpbGVwb25kLS1hY3Rpb24tcmV0cnktaXRlbS1sb2FkJyxcbiAgICAgIGFsaWduOiAnQlVUVE9OX1BST0NFU1NfSVRFTV9QT1NJVElPTicgLy8gcmlnaHRcbiAgICB9LFxuICAgIFJlbW92ZUl0ZW06IHtcbiAgICAgIGxhYmVsOiAnR0VUX0xBQkVMX0JVVFRPTl9SRU1PVkVfSVRFTScsXG4gICAgICBhY3Rpb246ICdSRVFVRVNUX1JFTU9WRV9JVEVNJyxcbiAgICAgIGljb246ICdHRVRfSUNPTl9SRU1PVkUnLFxuICAgICAgY2xhc3NOYW1lOiAnZmlsZXBvbmQtLWFjdGlvbi1yZW1vdmUtaXRlbScsXG4gICAgICBhbGlnbjogJ0JVVFRPTl9SRU1PVkVfSVRFTV9QT1NJVElPTicgLy8gbGVmdFxuICAgIH0sXG4gICAgUHJvY2Vzc0l0ZW06IHtcbiAgICAgIGxhYmVsOiAnR0VUX0xBQkVMX0JVVFRPTl9QUk9DRVNTX0lURU0nLFxuICAgICAgYWN0aW9uOiAnUkVRVUVTVF9JVEVNX1BST0NFU1NJTkcnLFxuICAgICAgaWNvbjogJ0dFVF9JQ09OX1BST0NFU1MnLFxuICAgICAgY2xhc3NOYW1lOiAnZmlsZXBvbmQtLWFjdGlvbi1wcm9jZXNzLWl0ZW0nLFxuICAgICAgYWxpZ246ICdCVVRUT05fUFJPQ0VTU19JVEVNX1BPU0lUSU9OJyAvLyByaWdodFxuICAgIH0sXG4gICAgQWJvcnRJdGVtUHJvY2Vzc2luZzoge1xuICAgICAgbGFiZWw6ICdHRVRfTEFCRUxfQlVUVE9OX0FCT1JUX0lURU1fUFJPQ0VTU0lORycsXG4gICAgICBhY3Rpb246ICdBQk9SVF9JVEVNX1BST0NFU1NJTkcnLFxuICAgICAgY2xhc3NOYW1lOiAnZmlsZXBvbmQtLWFjdGlvbi1hYm9ydC1pdGVtLXByb2Nlc3NpbmcnLFxuICAgICAgYWxpZ246ICdCVVRUT05fUFJPQ0VTU19JVEVNX1BPU0lUSU9OJyAvLyByaWdodFxuICAgIH0sXG4gICAgUmV0cnlJdGVtUHJvY2Vzc2luZzoge1xuICAgICAgbGFiZWw6ICdHRVRfTEFCRUxfQlVUVE9OX1JFVFJZX0lURU1fUFJPQ0VTU0lORycsXG4gICAgICBhY3Rpb246ICdSRVRSWV9JVEVNX1BST0NFU1NJTkcnLFxuICAgICAgaWNvbjogJ0dFVF9JQ09OX1JFVFJZJyxcbiAgICAgIGNsYXNzTmFtZTogJ2ZpbGVwb25kLS1hY3Rpb24tcmV0cnktaXRlbS1wcm9jZXNzaW5nJyxcbiAgICAgIGFsaWduOiAnQlVUVE9OX1BST0NFU1NfSVRFTV9QT1NJVElPTicgLy8gcmlnaHRcbiAgICB9LFxuICAgIFJldmVydEl0ZW1Qcm9jZXNzaW5nOiB7XG4gICAgICBsYWJlbDogJ0dFVF9MQUJFTF9CVVRUT05fVU5ET19JVEVNX1BST0NFU1NJTkcnLFxuICAgICAgYWN0aW9uOiAnUkVRVUVTVF9SRVZFUlRfSVRFTV9QUk9DRVNTSU5HJyxcbiAgICAgIGljb246ICdHRVRfSUNPTl9VTkRPJyxcbiAgICAgIGNsYXNzTmFtZTogJ2ZpbGVwb25kLS1hY3Rpb24tcmV2ZXJ0LWl0ZW0tcHJvY2Vzc2luZycsXG4gICAgICBhbGlnbjogJ0JVVFRPTl9QUk9DRVNTX0lURU1fUE9TSVRJT04nIC8vIHJpZ2h0XG4gICAgfVxuICB9O1xuXG4gIC8vIG1ha2UgYSBsaXN0IG9mIGJ1dHRvbnMsIHdlIGNhbiB0aGVuIHJlbW92ZSBidXR0b25zIGZyb20gdGhpcyBsaXN0IGlmIHRoZXkncmUgZGlzYWJsZWRcbiAgdmFyIEJ1dHRvbktleXMgPSBbXTtcbiAgZm9yaW4oQnV0dG9ucywgZnVuY3Rpb24oa2V5KSB7XG4gICAgQnV0dG9uS2V5cy5wdXNoKGtleSk7XG4gIH0pO1xuXG4gIHZhciBjYWxjdWxhdGVGaWxlSW5mb09mZnNldCA9IGZ1bmN0aW9uIGNhbGN1bGF0ZUZpbGVJbmZvT2Zmc2V0KHJvb3QpIHtcbiAgICB2YXIgYnV0dG9uUmVjdCA9IHJvb3QucmVmLmJ1dHRvblJlbW92ZUl0ZW0ucmVjdC5lbGVtZW50O1xuICAgIHJldHVybiBidXR0b25SZWN0LmhpZGRlbiA/IG51bGwgOiBidXR0b25SZWN0LndpZHRoICsgYnV0dG9uUmVjdC5sZWZ0O1xuICB9O1xuXG4gIC8vIEZvcmNlIG9uIGZ1bGwgcGl4ZWxzIHNvIHRleHQgc3RheXMgY3JpcHNcbiAgdmFyIGNhbGN1bGF0ZUZpbGVWZXJ0aWNhbENlbnRlck9mZnNldCA9IGZ1bmN0aW9uIGNhbGN1bGF0ZUZpbGVWZXJ0aWNhbENlbnRlck9mZnNldChcbiAgICByb290XG4gICkge1xuICAgIHJldHVybiBNYXRoLmZsb29yKHJvb3QucmVmLmJ1dHRvblJlbW92ZUl0ZW0ucmVjdC5lbGVtZW50LmhlaWdodCAvIDQpO1xuICB9O1xuICB2YXIgY2FsY3VsYXRlRmlsZUhvcml6b250YWxDZW50ZXJPZmZzZXQgPSBmdW5jdGlvbiBjYWxjdWxhdGVGaWxlSG9yaXpvbnRhbENlbnRlck9mZnNldChcbiAgICByb290XG4gICkge1xuICAgIHJldHVybiBNYXRoLmZsb29yKHJvb3QucmVmLmJ1dHRvblJlbW92ZUl0ZW0ucmVjdC5lbGVtZW50LmxlZnQgLyAyKTtcbiAgfTtcblxuICB2YXIgZ2V0TG9hZEluZGljYXRvckFsaWdubWVudCA9IGZ1bmN0aW9uIGdldExvYWRJbmRpY2F0b3JBbGlnbm1lbnQocm9vdCkge1xuICAgIHJldHVybiByb290LnF1ZXJ5KCdHRVRfU1RZTEVfTE9BRF9JTkRJQ0FUT1JfUE9TSVRJT04nKTtcbiAgfTtcbiAgdmFyIGdldFByb2Nlc3NJbmRpY2F0b3JBbGlnbm1lbnQgPSBmdW5jdGlvbiBnZXRQcm9jZXNzSW5kaWNhdG9yQWxpZ25tZW50KFxuICAgIHJvb3RcbiAgKSB7XG4gICAgcmV0dXJuIHJvb3QucXVlcnkoJ0dFVF9TVFlMRV9QUk9HUkVTU19JTkRJQ0FUT1JfUE9TSVRJT04nKTtcbiAgfTtcbiAgdmFyIGdldFJlbW92ZUluZGljYXRvckFsaWdtZW50ID0gZnVuY3Rpb24gZ2V0UmVtb3ZlSW5kaWNhdG9yQWxpZ21lbnQocm9vdCkge1xuICAgIHJldHVybiByb290LnF1ZXJ5KCdHRVRfU1RZTEVfQlVUVE9OX1JFTU9WRV9JVEVNX1BPU0lUSU9OJyk7XG4gIH07XG5cbiAgdmFyIERlZmF1bHRTdHlsZSA9IHtcbiAgICBidXR0b25BYm9ydEl0ZW1Mb2FkOiB7IG9wYWNpdHk6IDAgfSxcbiAgICBidXR0b25SZXRyeUl0ZW1Mb2FkOiB7IG9wYWNpdHk6IDAgfSxcbiAgICBidXR0b25SZW1vdmVJdGVtOiB7IG9wYWNpdHk6IDAgfSxcbiAgICBidXR0b25Qcm9jZXNzSXRlbTogeyBvcGFjaXR5OiAwIH0sXG4gICAgYnV0dG9uQWJvcnRJdGVtUHJvY2Vzc2luZzogeyBvcGFjaXR5OiAwIH0sXG4gICAgYnV0dG9uUmV0cnlJdGVtUHJvY2Vzc2luZzogeyBvcGFjaXR5OiAwIH0sXG4gICAgYnV0dG9uUmV2ZXJ0SXRlbVByb2Nlc3Npbmc6IHsgb3BhY2l0eTogMCB9LFxuICAgIGxvYWRQcm9ncmVzc0luZGljYXRvcjogeyBvcGFjaXR5OiAwLCBhbGlnbjogZ2V0TG9hZEluZGljYXRvckFsaWdubWVudCB9LFxuICAgIHByb2Nlc3NQcm9ncmVzc0luZGljYXRvcjoge1xuICAgICAgb3BhY2l0eTogMCxcbiAgICAgIGFsaWduOiBnZXRQcm9jZXNzSW5kaWNhdG9yQWxpZ25tZW50XG4gICAgfSxcbiAgICBwcm9jZXNzaW5nQ29tcGxldGVJbmRpY2F0b3I6IHsgb3BhY2l0eTogMCwgc2NhbGVYOiAwLjc1LCBzY2FsZVk6IDAuNzUgfSxcbiAgICBpbmZvOiB7IHRyYW5zbGF0ZVg6IDAsIHRyYW5zbGF0ZVk6IDAsIG9wYWNpdHk6IDAgfSxcbiAgICBzdGF0dXM6IHsgdHJhbnNsYXRlWDogMCwgdHJhbnNsYXRlWTogMCwgb3BhY2l0eTogMCB9XG4gIH07XG5cbiAgdmFyIElkbGVTdHlsZSA9IHtcbiAgICBidXR0b25SZW1vdmVJdGVtOiB7IG9wYWNpdHk6IDEgfSxcbiAgICBidXR0b25Qcm9jZXNzSXRlbTogeyBvcGFjaXR5OiAxIH0sXG4gICAgaW5mbzogeyB0cmFuc2xhdGVYOiBjYWxjdWxhdGVGaWxlSW5mb09mZnNldCB9LFxuICAgIHN0YXR1czogeyB0cmFuc2xhdGVYOiBjYWxjdWxhdGVGaWxlSW5mb09mZnNldCB9XG4gIH07XG5cbiAgdmFyIFByb2Nlc3NpbmdTdHlsZSA9IHtcbiAgICBidXR0b25BYm9ydEl0ZW1Qcm9jZXNzaW5nOiB7IG9wYWNpdHk6IDEgfSxcbiAgICBwcm9jZXNzUHJvZ3Jlc3NJbmRpY2F0b3I6IHsgb3BhY2l0eTogMSB9LFxuICAgIHN0YXR1czogeyBvcGFjaXR5OiAxIH1cbiAgfTtcblxuICB2YXIgU3R5bGVNYXAgPSB7XG4gICAgRElEX1RIUk9XX0lURU1fSU5WQUxJRDoge1xuICAgICAgYnV0dG9uUmVtb3ZlSXRlbTogeyBvcGFjaXR5OiAxIH0sXG4gICAgICBpbmZvOiB7IHRyYW5zbGF0ZVg6IGNhbGN1bGF0ZUZpbGVJbmZvT2Zmc2V0IH0sXG4gICAgICBzdGF0dXM6IHsgdHJhbnNsYXRlWDogY2FsY3VsYXRlRmlsZUluZm9PZmZzZXQsIG9wYWNpdHk6IDEgfVxuICAgIH0sXG5cbiAgICBESURfU1RBUlRfSVRFTV9MT0FEOiB7XG4gICAgICBidXR0b25BYm9ydEl0ZW1Mb2FkOiB7IG9wYWNpdHk6IDEgfSxcbiAgICAgIGxvYWRQcm9ncmVzc0luZGljYXRvcjogeyBvcGFjaXR5OiAxIH0sXG4gICAgICBzdGF0dXM6IHsgb3BhY2l0eTogMSB9XG4gICAgfSxcblxuICAgIERJRF9USFJPV19JVEVNX0xPQURfRVJST1I6IHtcbiAgICAgIGJ1dHRvblJldHJ5SXRlbUxvYWQ6IHsgb3BhY2l0eTogMSB9LFxuICAgICAgYnV0dG9uUmVtb3ZlSXRlbTogeyBvcGFjaXR5OiAxIH0sXG4gICAgICBpbmZvOiB7IHRyYW5zbGF0ZVg6IGNhbGN1bGF0ZUZpbGVJbmZvT2Zmc2V0IH0sXG4gICAgICBzdGF0dXM6IHsgb3BhY2l0eTogMSB9XG4gICAgfSxcblxuICAgIERJRF9TVEFSVF9JVEVNX1JFTU9WRToge1xuICAgICAgcHJvY2Vzc1Byb2dyZXNzSW5kaWNhdG9yOiB7XG4gICAgICAgIG9wYWNpdHk6IDEsXG4gICAgICAgIGFsaWduOiBnZXRSZW1vdmVJbmRpY2F0b3JBbGlnbWVudFxuICAgICAgfSxcbiAgICAgIGluZm86IHsgdHJhbnNsYXRlWDogY2FsY3VsYXRlRmlsZUluZm9PZmZzZXQgfSxcbiAgICAgIHN0YXR1czogeyBvcGFjaXR5OiAwIH1cbiAgICB9LFxuXG4gICAgRElEX1RIUk9XX0lURU1fUkVNT1ZFX0VSUk9SOiB7XG4gICAgICBwcm9jZXNzUHJvZ3Jlc3NJbmRpY2F0b3I6IHtcbiAgICAgICAgb3BhY2l0eTogMCxcbiAgICAgICAgYWxpZ246IGdldFJlbW92ZUluZGljYXRvckFsaWdtZW50XG4gICAgICB9LFxuICAgICAgYnV0dG9uUmVtb3ZlSXRlbTogeyBvcGFjaXR5OiAxIH0sXG4gICAgICBpbmZvOiB7IHRyYW5zbGF0ZVg6IGNhbGN1bGF0ZUZpbGVJbmZvT2Zmc2V0IH0sXG4gICAgICBzdGF0dXM6IHsgb3BhY2l0eTogMSwgdHJhbnNsYXRlWDogY2FsY3VsYXRlRmlsZUluZm9PZmZzZXQgfVxuICAgIH0sXG5cbiAgICBESURfTE9BRF9JVEVNOiBJZGxlU3R5bGUsXG4gICAgRElEX0xPQURfTE9DQUxfSVRFTToge1xuICAgICAgYnV0dG9uUmVtb3ZlSXRlbTogeyBvcGFjaXR5OiAxIH0sXG4gICAgICBpbmZvOiB7IHRyYW5zbGF0ZVg6IGNhbGN1bGF0ZUZpbGVJbmZvT2Zmc2V0IH0sXG4gICAgICBzdGF0dXM6IHsgdHJhbnNsYXRlWDogY2FsY3VsYXRlRmlsZUluZm9PZmZzZXQgfVxuICAgIH0sXG5cbiAgICBESURfU1RBUlRfSVRFTV9QUk9DRVNTSU5HOiBQcm9jZXNzaW5nU3R5bGUsXG4gICAgRElEX1JFUVVFU1RfSVRFTV9QUk9DRVNTSU5HOiBQcm9jZXNzaW5nU3R5bGUsXG4gICAgRElEX1VQREFURV9JVEVNX1BST0NFU1NfUFJPR1JFU1M6IFByb2Nlc3NpbmdTdHlsZSxcbiAgICBESURfQ09NUExFVEVfSVRFTV9QUk9DRVNTSU5HOiB7XG4gICAgICBidXR0b25SZXZlcnRJdGVtUHJvY2Vzc2luZzogeyBvcGFjaXR5OiAxIH0sXG4gICAgICBpbmZvOiB7IG9wYWNpdHk6IDEgfSxcbiAgICAgIHN0YXR1czogeyBvcGFjaXR5OiAxIH1cbiAgICB9LFxuXG4gICAgRElEX1RIUk9XX0lURU1fUFJPQ0VTU0lOR19FUlJPUjoge1xuICAgICAgYnV0dG9uUmVtb3ZlSXRlbTogeyBvcGFjaXR5OiAxIH0sXG4gICAgICBidXR0b25SZXRyeUl0ZW1Qcm9jZXNzaW5nOiB7IG9wYWNpdHk6IDEgfSxcbiAgICAgIHN0YXR1czogeyBvcGFjaXR5OiAxIH0sXG4gICAgICBpbmZvOiB7IHRyYW5zbGF0ZVg6IGNhbGN1bGF0ZUZpbGVJbmZvT2Zmc2V0IH1cbiAgICB9LFxuXG4gICAgRElEX1RIUk9XX0lURU1fUFJPQ0VTU0lOR19SRVZFUlRfRVJST1I6IHtcbiAgICAgIGJ1dHRvblJldmVydEl0ZW1Qcm9jZXNzaW5nOiB7IG9wYWNpdHk6IDEgfSxcbiAgICAgIHN0YXR1czogeyBvcGFjaXR5OiAxIH0sXG4gICAgICBpbmZvOiB7IG9wYWNpdHk6IDEgfVxuICAgIH0sXG5cbiAgICBESURfQUJPUlRfSVRFTV9QUk9DRVNTSU5HOiB7XG4gICAgICBidXR0b25SZW1vdmVJdGVtOiB7IG9wYWNpdHk6IDEgfSxcbiAgICAgIGJ1dHRvblByb2Nlc3NJdGVtOiB7IG9wYWNpdHk6IDEgfSxcbiAgICAgIGluZm86IHsgdHJhbnNsYXRlWDogY2FsY3VsYXRlRmlsZUluZm9PZmZzZXQgfSxcbiAgICAgIHN0YXR1czogeyBvcGFjaXR5OiAxIH1cbiAgICB9LFxuXG4gICAgRElEX1JFVkVSVF9JVEVNX1BST0NFU1NJTkc6IElkbGVTdHlsZVxuICB9O1xuXG4gIC8vIGNvbXBsZXRlIGluZGljYXRvciB2aWV3XG4gIHZhciBwcm9jZXNzaW5nQ29tcGxldGVJbmRpY2F0b3JWaWV3ID0gY3JlYXRlVmlldyh7XG4gICAgY3JlYXRlOiBmdW5jdGlvbiBjcmVhdGUoX3JlZikge1xuICAgICAgdmFyIHJvb3QgPSBfcmVmLnJvb3Q7XG4gICAgICByb290LmVsZW1lbnQuaW5uZXJIVE1MID0gcm9vdC5xdWVyeSgnR0VUX0lDT05fRE9ORScpO1xuICAgIH0sXG4gICAgbmFtZTogJ3Byb2Nlc3NpbmctY29tcGxldGUtaW5kaWNhdG9yJyxcbiAgICBpZ25vcmVSZWN0OiB0cnVlLFxuICAgIG1peGluczoge1xuICAgICAgc3R5bGVzOiBbJ3NjYWxlWCcsICdzY2FsZVknLCAnb3BhY2l0eSddLFxuICAgICAgYW5pbWF0aW9uczoge1xuICAgICAgICBzY2FsZVg6ICdzcHJpbmcnLFxuICAgICAgICBzY2FsZVk6ICdzcHJpbmcnLFxuICAgICAgICBvcGFjaXR5OiB7IHR5cGU6ICd0d2VlbicsIGR1cmF0aW9uOiAyNTAgfVxuICAgICAgfVxuICAgIH1cbiAgfSk7XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgdGhlIGZpbGUgdmlld1xuICAgKi9cbiAgdmFyIGNyZWF0ZSQ0ID0gZnVuY3Rpb24gY3JlYXRlKF9yZWYyKSB7XG4gICAgdmFyIHJvb3QgPSBfcmVmMi5yb290LFxuICAgICAgcHJvcHMgPSBfcmVmMi5wcm9wcztcbiAgICB2YXIgaWQgPSBwcm9wcy5pZDtcblxuICAgIC8vIGFsbG93IHJldmVydGluZyB1cGxvYWRcbiAgICB2YXIgYWxsb3dSZXZlcnQgPSByb290LnF1ZXJ5KCdHRVRfQUxMT1dfUkVWRVJUJyk7XG5cbiAgICAvLyBpcyBpbnN0YW50IHVwbG9hZGluZywgbmVlZCB0aGlzIHRvIGRldGVybWluZSB0aGUgaWNvbiBvZiB0aGUgdW5kbyBidXR0b25cbiAgICB2YXIgaW5zdGFudFVwbG9hZCA9IHJvb3QucXVlcnkoJ0dFVF9JTlNUQU5UX1VQTE9BRCcpO1xuXG4gICAgLy8gaXMgYXN5bmMgc2V0IHVwXG4gICAgdmFyIGlzQXN5bmMgPSByb290LnF1ZXJ5KCdJU19BU1lOQycpO1xuXG4gICAgLy8gZW5hYmxlZCBidXR0b25zIGFycmF5XG4gICAgdmFyIGVuYWJsZWRCdXR0b25zID0gaXNBc3luY1xuICAgICAgPyBCdXR0b25LZXlzLmNvbmNhdCgpXG4gICAgICA6IEJ1dHRvbktleXMuZmlsdGVyKGZ1bmN0aW9uKGtleSkge1xuICAgICAgICAgIHJldHVybiAhL1Byb2Nlc3MvLnRlc3Qoa2V5KTtcbiAgICAgICAgfSk7XG5cbiAgICAvLyByZW1vdmUgbGFzdCBidXR0b24gKHJldmVydCkgaWYgbm90IGFsbG93ZWRcbiAgICBpZiAoaXNBc3luYyAmJiAhYWxsb3dSZXZlcnQpIHtcbiAgICAgIGVuYWJsZWRCdXR0b25zLnNwbGljZSgtMSwgMSk7XG4gICAgICB2YXIgbWFwID0gU3R5bGVNYXBbJ0RJRF9DT01QTEVURV9JVEVNX1BST0NFU1NJTkcnXTtcbiAgICAgIG1hcC5pbmZvLnRyYW5zbGF0ZVggPSBjYWxjdWxhdGVGaWxlSG9yaXpvbnRhbENlbnRlck9mZnNldDtcbiAgICAgIG1hcC5pbmZvLnRyYW5zbGF0ZVkgPSBjYWxjdWxhdGVGaWxlVmVydGljYWxDZW50ZXJPZmZzZXQ7XG4gICAgICBtYXAuc3RhdHVzLnRyYW5zbGF0ZVkgPSBjYWxjdWxhdGVGaWxlVmVydGljYWxDZW50ZXJPZmZzZXQ7XG4gICAgICBtYXAucHJvY2Vzc2luZ0NvbXBsZXRlSW5kaWNhdG9yID0geyBvcGFjaXR5OiAxLCBzY2FsZVg6IDEsIHNjYWxlWTogMSB9O1xuICAgIH1cblxuICAgIC8vIHVwZGF0ZSBpY29uIGFuZCBsYWJlbCBmb3IgcmV2ZXJ0IGJ1dHRvbiB3aGVuIGluc3RhbnQgdXBsb2FkaW5nXG4gICAgaWYgKGluc3RhbnRVcGxvYWQgJiYgYWxsb3dSZXZlcnQpIHtcbiAgICAgIEJ1dHRvbnNbJ1JldmVydEl0ZW1Qcm9jZXNzaW5nJ10ubGFiZWwgPSAnR0VUX0xBQkVMX0JVVFRPTl9SRU1PVkVfSVRFTSc7XG4gICAgICBCdXR0b25zWydSZXZlcnRJdGVtUHJvY2Vzc2luZyddLmljb24gPSAnR0VUX0lDT05fUkVNT1ZFJztcbiAgICB9XG5cbiAgICAvLyBjcmVhdGUgdGhlIGJ1dHRvbiB2aWV3c1xuICAgIGZvcmluKEJ1dHRvbnMsIGZ1bmN0aW9uKGtleSwgZGVmaW5pdGlvbikge1xuICAgICAgLy8gY3JlYXRlIGJ1dHRvblxuICAgICAgdmFyIGJ1dHRvblZpZXcgPSByb290LmNyZWF0ZUNoaWxkVmlldyhmaWxlQWN0aW9uQnV0dG9uLCB7XG4gICAgICAgIGxhYmVsOiByb290LnF1ZXJ5KGRlZmluaXRpb24ubGFiZWwpLFxuICAgICAgICBpY29uOiByb290LnF1ZXJ5KGRlZmluaXRpb24uaWNvbiksXG4gICAgICAgIG9wYWNpdHk6IDBcbiAgICAgIH0pO1xuXG4gICAgICAvLyBzaG91bGQgYmUgYXBwZW5kZWQ/XG4gICAgICBpZiAoZW5hYmxlZEJ1dHRvbnMuaW5jbHVkZXMoa2V5KSkge1xuICAgICAgICByb290LmFwcGVuZENoaWxkVmlldyhidXR0b25WaWV3KTtcbiAgICAgIH1cblxuICAgICAgLy8gYWRkIHBvc2l0aW9uIGF0dHJpYnV0ZVxuICAgICAgYnV0dG9uVmlldy5lbGVtZW50LmRhdGFzZXQuYWxpZ24gPSByb290LnF1ZXJ5KFxuICAgICAgICAnR0VUX1NUWUxFXycgKyBkZWZpbml0aW9uLmFsaWduXG4gICAgICApO1xuXG4gICAgICAvLyBhZGQgY2xhc3NcbiAgICAgIGJ1dHRvblZpZXcuZWxlbWVudC5jbGFzc0xpc3QuYWRkKGRlZmluaXRpb24uY2xhc3NOYW1lKTtcblxuICAgICAgLy8gaGFuZGxlIGludGVyYWN0aW9uc1xuICAgICAgYnV0dG9uVmlldy5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIHJvb3QuZGlzcGF0Y2goZGVmaW5pdGlvbi5hY3Rpb24sIHsgcXVlcnk6IGlkIH0pO1xuICAgICAgfSk7XG5cbiAgICAgIC8vIHNldCByZWZlcmVuY2VcbiAgICAgIHJvb3QucmVmWydidXR0b24nICsga2V5XSA9IGJ1dHRvblZpZXc7XG4gICAgfSk7XG5cbiAgICAvLyBjcmVhdGUgZmlsZSBpbmZvIHZpZXdcbiAgICByb290LnJlZi5pbmZvID0gcm9vdC5hcHBlbmRDaGlsZFZpZXcoXG4gICAgICByb290LmNyZWF0ZUNoaWxkVmlldyhmaWxlSW5mbywgeyBpZDogaWQgfSlcbiAgICApO1xuXG4gICAgLy8gY3JlYXRlIGZpbGUgc3RhdHVzIHZpZXdcbiAgICByb290LnJlZi5zdGF0dXMgPSByb290LmFwcGVuZENoaWxkVmlldyhcbiAgICAgIHJvb3QuY3JlYXRlQ2hpbGRWaWV3KGZpbGVTdGF0dXMsIHsgaWQ6IGlkIH0pXG4gICAgKTtcblxuICAgIC8vIGNoZWNrbWFya1xuICAgIHJvb3QucmVmLnByb2Nlc3NpbmdDb21wbGV0ZUluZGljYXRvciA9IHJvb3QuYXBwZW5kQ2hpbGRWaWV3KFxuICAgICAgcm9vdC5jcmVhdGVDaGlsZFZpZXcocHJvY2Vzc2luZ0NvbXBsZXRlSW5kaWNhdG9yVmlldylcbiAgICApO1xuICAgIHJvb3QucmVmLnByb2Nlc3NpbmdDb21wbGV0ZUluZGljYXRvci5lbGVtZW50LmRhdGFzZXQuYWxpZ24gPSByb290LnF1ZXJ5KFxuICAgICAgJ0dFVF9TVFlMRV9CVVRUT05fUFJPQ0VTU19JVEVNX1BPU0lUSU9OJ1xuICAgICk7XG5cbiAgICAvLyBhZGQgcHJvZ3Jlc3MgaW5kaWNhdG9yc1xuICAgIHZhciBsb2FkSW5kaWNhdG9yVmlldyA9IHJvb3QuYXBwZW5kQ2hpbGRWaWV3KFxuICAgICAgcm9vdC5jcmVhdGVDaGlsZFZpZXcocHJvZ3Jlc3NJbmRpY2F0b3IsIHtcbiAgICAgICAgb3BhY2l0eTogMCxcbiAgICAgICAgYWxpZ246IHJvb3QucXVlcnkoJ0dFVF9TVFlMRV9MT0FEX0lORElDQVRPUl9QT1NJVElPTicpXG4gICAgICB9KVxuICAgICk7XG5cbiAgICBsb2FkSW5kaWNhdG9yVmlldy5lbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2ZpbGVwb25kLS1sb2FkLWluZGljYXRvcicpO1xuICAgIHJvb3QucmVmLmxvYWRQcm9ncmVzc0luZGljYXRvciA9IGxvYWRJbmRpY2F0b3JWaWV3O1xuXG4gICAgdmFyIHByb2dyZXNzSW5kaWNhdG9yVmlldyA9IHJvb3QuYXBwZW5kQ2hpbGRWaWV3KFxuICAgICAgcm9vdC5jcmVhdGVDaGlsZFZpZXcocHJvZ3Jlc3NJbmRpY2F0b3IsIHtcbiAgICAgICAgb3BhY2l0eTogMCxcbiAgICAgICAgYWxpZ246IHJvb3QucXVlcnkoJ0dFVF9TVFlMRV9QUk9HUkVTU19JTkRJQ0FUT1JfUE9TSVRJT04nKVxuICAgICAgfSlcbiAgICApO1xuXG4gICAgcHJvZ3Jlc3NJbmRpY2F0b3JWaWV3LmVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnZmlsZXBvbmQtLXByb2Nlc3MtaW5kaWNhdG9yJyk7XG4gICAgcm9vdC5yZWYucHJvY2Vzc1Byb2dyZXNzSW5kaWNhdG9yID0gcHJvZ3Jlc3NJbmRpY2F0b3JWaWV3O1xuXG4gICAgLy8gY3VycmVudCBhY3RpdmUgc3R5bGVzXG4gICAgcm9vdC5yZWYuYWN0aXZlU3R5bGVzID0gW107XG4gIH07XG5cbiAgdmFyIHdyaXRlJDIgPSBmdW5jdGlvbiB3cml0ZShfcmVmMykge1xuICAgIHZhciByb290ID0gX3JlZjMucm9vdCxcbiAgICAgIGFjdGlvbnMgPSBfcmVmMy5hY3Rpb25zLFxuICAgICAgcHJvcHMgPSBfcmVmMy5wcm9wcztcblxuICAgIC8vIHJvdXRlIGFjdGlvbnNcbiAgICByb3V0ZSh7IHJvb3Q6IHJvb3QsIGFjdGlvbnM6IGFjdGlvbnMsIHByb3BzOiBwcm9wcyB9KTtcblxuICAgIC8vIHNlbGVjdCBsYXN0IHN0YXRlIGNoYW5nZSBhY3Rpb25cbiAgICB2YXIgYWN0aW9uID0gYWN0aW9uc1xuICAgICAgLmNvbmNhdCgpXG4gICAgICAuZmlsdGVyKGZ1bmN0aW9uKGFjdGlvbikge1xuICAgICAgICByZXR1cm4gL15ESURfLy50ZXN0KGFjdGlvbi50eXBlKTtcbiAgICAgIH0pXG4gICAgICAucmV2ZXJzZSgpXG4gICAgICAuZmluZChmdW5jdGlvbihhY3Rpb24pIHtcbiAgICAgICAgcmV0dXJuIFN0eWxlTWFwW2FjdGlvbi50eXBlXTtcbiAgICAgIH0pO1xuXG4gICAgLy8gYSBuZXcgYWN0aW9uIGhhcHBlbmVkLCBsZXQncyBnZXQgdGhlIG1hdGNoaW5nIHN0eWxlc1xuICAgIGlmIChhY3Rpb24pIHtcbiAgICAgIC8vIGRlZmluZSBuZXcgYWN0aXZlIHN0eWxlc1xuICAgICAgcm9vdC5yZWYuYWN0aXZlU3R5bGVzID0gW107XG5cbiAgICAgIHZhciBzdHlsZXNUb0FwcGx5ID0gU3R5bGVNYXBbYWN0aW9uLnR5cGVdO1xuICAgICAgZm9yaW4oRGVmYXVsdFN0eWxlLCBmdW5jdGlvbihuYW1lLCBkZWZhdWx0U3R5bGVzKSB7XG4gICAgICAgIC8vIGdldCByZWZlcmVuY2UgdG8gY29udHJvbFxuICAgICAgICB2YXIgY29udHJvbCA9IHJvb3QucmVmW25hbWVdO1xuXG4gICAgICAgIC8vIGxvb3Agb3ZlciBhbGwgc3R5bGVzIGZvciB0aGlzIGNvbnRyb2xcbiAgICAgICAgZm9yaW4oZGVmYXVsdFN0eWxlcywgZnVuY3Rpb24oa2V5LCBkZWZhdWx0VmFsdWUpIHtcbiAgICAgICAgICB2YXIgdmFsdWUgPVxuICAgICAgICAgICAgc3R5bGVzVG9BcHBseVtuYW1lXSAmJlxuICAgICAgICAgICAgdHlwZW9mIHN0eWxlc1RvQXBwbHlbbmFtZV1ba2V5XSAhPT0gJ3VuZGVmaW5lZCdcbiAgICAgICAgICAgICAgPyBzdHlsZXNUb0FwcGx5W25hbWVdW2tleV1cbiAgICAgICAgICAgICAgOiBkZWZhdWx0VmFsdWU7XG4gICAgICAgICAgcm9vdC5yZWYuYWN0aXZlU3R5bGVzLnB1c2goe1xuICAgICAgICAgICAgY29udHJvbDogY29udHJvbCxcbiAgICAgICAgICAgIGtleToga2V5LFxuICAgICAgICAgICAgdmFsdWU6IHZhbHVlXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gYXBwbHkgYWN0aXZlIHN0eWxlcyB0byBlbGVtZW50XG4gICAgcm9vdC5yZWYuYWN0aXZlU3R5bGVzLmZvckVhY2goZnVuY3Rpb24oX3JlZjQpIHtcbiAgICAgIHZhciBjb250cm9sID0gX3JlZjQuY29udHJvbCxcbiAgICAgICAga2V5ID0gX3JlZjQua2V5LFxuICAgICAgICB2YWx1ZSA9IF9yZWY0LnZhbHVlO1xuXG4gICAgICBjb250cm9sW2tleV0gPSB0eXBlb2YgdmFsdWUgPT09ICdmdW5jdGlvbicgPyB2YWx1ZShyb290KSA6IHZhbHVlO1xuICAgIH0pO1xuICB9O1xuXG4gIHZhciByb3V0ZSA9IGNyZWF0ZVJvdXRlKHtcbiAgICBESURfU0VUX0xBQkVMX0JVVFRPTl9BQk9SVF9JVEVNX1BST0NFU1NJTkc6IGZ1bmN0aW9uIERJRF9TRVRfTEFCRUxfQlVUVE9OX0FCT1JUX0lURU1fUFJPQ0VTU0lORyhcbiAgICAgIF9yZWY1XG4gICAgKSB7XG4gICAgICB2YXIgcm9vdCA9IF9yZWY1LnJvb3QsXG4gICAgICAgIGFjdGlvbiA9IF9yZWY1LmFjdGlvbjtcbiAgICAgIHJvb3QucmVmLmJ1dHRvbkFib3J0SXRlbVByb2Nlc3NpbmcubGFiZWwgPSBhY3Rpb24udmFsdWU7XG4gICAgfSxcbiAgICBESURfU0VUX0xBQkVMX0JVVFRPTl9BQk9SVF9JVEVNX0xPQUQ6IGZ1bmN0aW9uIERJRF9TRVRfTEFCRUxfQlVUVE9OX0FCT1JUX0lURU1fTE9BRChcbiAgICAgIF9yZWY2XG4gICAgKSB7XG4gICAgICB2YXIgcm9vdCA9IF9yZWY2LnJvb3QsXG4gICAgICAgIGFjdGlvbiA9IF9yZWY2LmFjdGlvbjtcbiAgICAgIHJvb3QucmVmLmJ1dHRvbkFib3J0SXRlbUxvYWQubGFiZWwgPSBhY3Rpb24udmFsdWU7XG4gICAgfSxcbiAgICBESURfU0VUX0xBQkVMX0JVVFRPTl9BQk9SVF9JVEVNX1JFTU9WQUw6IGZ1bmN0aW9uIERJRF9TRVRfTEFCRUxfQlVUVE9OX0FCT1JUX0lURU1fUkVNT1ZBTChcbiAgICAgIF9yZWY3XG4gICAgKSB7XG4gICAgICB2YXIgcm9vdCA9IF9yZWY3LnJvb3QsXG4gICAgICAgIGFjdGlvbiA9IF9yZWY3LmFjdGlvbjtcbiAgICAgIHJvb3QucmVmLmJ1dHRvbkFib3J0SXRlbVJlbW92YWwubGFiZWwgPSBhY3Rpb24udmFsdWU7XG4gICAgfSxcbiAgICBESURfUkVRVUVTVF9JVEVNX1BST0NFU1NJTkc6IGZ1bmN0aW9uIERJRF9SRVFVRVNUX0lURU1fUFJPQ0VTU0lORyhfcmVmOCkge1xuICAgICAgdmFyIHJvb3QgPSBfcmVmOC5yb290O1xuICAgICAgcm9vdC5yZWYucHJvY2Vzc1Byb2dyZXNzSW5kaWNhdG9yLnNwaW4gPSB0cnVlO1xuICAgICAgcm9vdC5yZWYucHJvY2Vzc1Byb2dyZXNzSW5kaWNhdG9yLnByb2dyZXNzID0gMDtcbiAgICB9LFxuICAgIERJRF9TVEFSVF9JVEVNX0xPQUQ6IGZ1bmN0aW9uIERJRF9TVEFSVF9JVEVNX0xPQUQoX3JlZjkpIHtcbiAgICAgIHZhciByb290ID0gX3JlZjkucm9vdDtcbiAgICAgIHJvb3QucmVmLmxvYWRQcm9ncmVzc0luZGljYXRvci5zcGluID0gdHJ1ZTtcbiAgICAgIHJvb3QucmVmLmxvYWRQcm9ncmVzc0luZGljYXRvci5wcm9ncmVzcyA9IDA7XG4gICAgfSxcbiAgICBESURfU1RBUlRfSVRFTV9SRU1PVkU6IGZ1bmN0aW9uIERJRF9TVEFSVF9JVEVNX1JFTU9WRShfcmVmMTApIHtcbiAgICAgIHZhciByb290ID0gX3JlZjEwLnJvb3Q7XG4gICAgICByb290LnJlZi5wcm9jZXNzUHJvZ3Jlc3NJbmRpY2F0b3Iuc3BpbiA9IHRydWU7XG4gICAgICByb290LnJlZi5wcm9jZXNzUHJvZ3Jlc3NJbmRpY2F0b3IucHJvZ3Jlc3MgPSAwO1xuICAgIH0sXG4gICAgRElEX1VQREFURV9JVEVNX0xPQURfUFJPR1JFU1M6IGZ1bmN0aW9uIERJRF9VUERBVEVfSVRFTV9MT0FEX1BST0dSRVNTKFxuICAgICAgX3JlZjExXG4gICAgKSB7XG4gICAgICB2YXIgcm9vdCA9IF9yZWYxMS5yb290LFxuICAgICAgICBhY3Rpb24gPSBfcmVmMTEuYWN0aW9uO1xuICAgICAgcm9vdC5yZWYubG9hZFByb2dyZXNzSW5kaWNhdG9yLnNwaW4gPSBmYWxzZTtcbiAgICAgIHJvb3QucmVmLmxvYWRQcm9ncmVzc0luZGljYXRvci5wcm9ncmVzcyA9IGFjdGlvbi5wcm9ncmVzcztcbiAgICB9LFxuICAgIERJRF9VUERBVEVfSVRFTV9QUk9DRVNTX1BST0dSRVNTOiBmdW5jdGlvbiBESURfVVBEQVRFX0lURU1fUFJPQ0VTU19QUk9HUkVTUyhcbiAgICAgIF9yZWYxMlxuICAgICkge1xuICAgICAgdmFyIHJvb3QgPSBfcmVmMTIucm9vdCxcbiAgICAgICAgYWN0aW9uID0gX3JlZjEyLmFjdGlvbjtcbiAgICAgIHJvb3QucmVmLnByb2Nlc3NQcm9ncmVzc0luZGljYXRvci5zcGluID0gZmFsc2U7XG4gICAgICByb290LnJlZi5wcm9jZXNzUHJvZ3Jlc3NJbmRpY2F0b3IucHJvZ3Jlc3MgPSBhY3Rpb24ucHJvZ3Jlc3M7XG4gICAgfVxuICB9KTtcblxuICB2YXIgZmlsZSA9IGNyZWF0ZVZpZXcoe1xuICAgIGNyZWF0ZTogY3JlYXRlJDQsXG4gICAgd3JpdGU6IHdyaXRlJDIsXG4gICAgZGlkQ3JlYXRlVmlldzogZnVuY3Rpb24gZGlkQ3JlYXRlVmlldyhyb290KSB7XG4gICAgICBhcHBseUZpbHRlcnMoJ0NSRUFURV9WSUVXJywgT2JqZWN0LmFzc2lnbih7fSwgcm9vdCwgeyB2aWV3OiByb290IH0pKTtcbiAgICB9LFxuICAgIG5hbWU6ICdmaWxlJ1xuICB9KTtcblxuICAvKipcbiAgICogQ3JlYXRlcyB0aGUgZmlsZSB2aWV3XG4gICAqL1xuICB2YXIgY3JlYXRlJDUgPSBmdW5jdGlvbiBjcmVhdGUoX3JlZikge1xuICAgIHZhciByb290ID0gX3JlZi5yb290LFxuICAgICAgcHJvcHMgPSBfcmVmLnByb3BzO1xuXG4gICAgLy8gZmlsZW5hbWVcbiAgICByb290LnJlZi5maWxlTmFtZSA9IGNyZWF0ZUVsZW1lbnQkMSgnbGVnZW5kJyk7XG4gICAgcm9vdC5hcHBlbmRDaGlsZChyb290LnJlZi5maWxlTmFtZSk7XG5cbiAgICAvLyBmaWxlIGFwcGVuZGVkXG4gICAgcm9vdC5yZWYuZmlsZSA9IHJvb3QuYXBwZW5kQ2hpbGRWaWV3KFxuICAgICAgcm9vdC5jcmVhdGVDaGlsZFZpZXcoZmlsZSwgeyBpZDogcHJvcHMuaWQgfSlcbiAgICApO1xuXG4gICAgLy8gY3JlYXRlIGRhdGEgY29udGFpbmVyXG4gICAgdmFyIGRhdGFDb250YWluZXIgPSBjcmVhdGVFbGVtZW50JDEoJ2lucHV0Jyk7XG4gICAgZGF0YUNvbnRhaW5lci50eXBlID0gJ2hpZGRlbic7XG4gICAgZGF0YUNvbnRhaW5lci5uYW1lID0gcm9vdC5xdWVyeSgnR0VUX05BTUUnKTtcbiAgICBkYXRhQ29udGFpbmVyLmRpc2FibGVkID0gcm9vdC5xdWVyeSgnR0VUX0RJU0FCTEVEJyk7XG4gICAgcm9vdC5yZWYuZGF0YSA9IGRhdGFDb250YWluZXI7XG4gICAgcm9vdC5hcHBlbmRDaGlsZChkYXRhQ29udGFpbmVyKTtcbiAgfTtcblxuICB2YXIgZGlkU2V0RGlzYWJsZWQgPSBmdW5jdGlvbiBkaWRTZXREaXNhYmxlZChfcmVmMikge1xuICAgIHZhciByb290ID0gX3JlZjIucm9vdDtcbiAgICByb290LnJlZi5kYXRhLmRpc2FibGVkID0gcm9vdC5xdWVyeSgnR0VUX0RJU0FCTEVEJyk7XG4gIH07XG5cbiAgLyoqXG4gICAqIERhdGEgc3RvcmFnZVxuICAgKi9cbiAgdmFyIGRpZExvYWRJdGVtID0gZnVuY3Rpb24gZGlkTG9hZEl0ZW0oX3JlZjMpIHtcbiAgICB2YXIgcm9vdCA9IF9yZWYzLnJvb3QsXG4gICAgICBhY3Rpb24gPSBfcmVmMy5hY3Rpb24sXG4gICAgICBwcm9wcyA9IF9yZWYzLnByb3BzO1xuICAgIHJvb3QucmVmLmRhdGEudmFsdWUgPSBhY3Rpb24uc2VydmVyRmlsZVJlZmVyZW5jZTtcblxuICAgIC8vIHVwZGF0ZXMgdGhlIGxlZ2VuZCBvZiB0aGUgZmllbGRzZXQgc28gc2NyZWVucmVhZGVycyBjYW4gYmV0dGVyIGdyb3VwIGJ1dHRvbnNcbiAgICB0ZXh0KFxuICAgICAgcm9vdC5yZWYuZmlsZU5hbWUsXG4gICAgICBmb3JtYXRGaWxlbmFtZShyb290LnF1ZXJ5KCdHRVRfSVRFTV9OQU1FJywgcHJvcHMuaWQpKVxuICAgICk7XG4gIH07XG5cbiAgdmFyIGRpZFJlbW92ZUl0ZW0gPSBmdW5jdGlvbiBkaWRSZW1vdmVJdGVtKF9yZWY0KSB7XG4gICAgdmFyIHJvb3QgPSBfcmVmNC5yb290O1xuICAgIHJvb3QucmVmLmRhdGEucmVtb3ZlQXR0cmlidXRlKCd2YWx1ZScpO1xuICB9O1xuXG4gIHZhciBkaWRDb21wbGV0ZUl0ZW1Qcm9jZXNzaW5nJDEgPSBmdW5jdGlvbiBkaWRDb21wbGV0ZUl0ZW1Qcm9jZXNzaW5nKF9yZWY1KSB7XG4gICAgdmFyIHJvb3QgPSBfcmVmNS5yb290LFxuICAgICAgYWN0aW9uID0gX3JlZjUuYWN0aW9uO1xuICAgIHJvb3QucmVmLmRhdGEudmFsdWUgPSBhY3Rpb24uc2VydmVyRmlsZVJlZmVyZW5jZTtcbiAgfTtcblxuICB2YXIgZGlkUmV2ZXJ0SXRlbVByb2Nlc3NpbmcgPSBmdW5jdGlvbiBkaWRSZXZlcnRJdGVtUHJvY2Vzc2luZyhfcmVmNikge1xuICAgIHZhciByb290ID0gX3JlZjYucm9vdDtcbiAgICByb290LnJlZi5kYXRhLnJlbW92ZUF0dHJpYnV0ZSgndmFsdWUnKTtcbiAgfTtcblxuICB2YXIgZmlsZVdyYXBwZXIgPSBjcmVhdGVWaWV3KHtcbiAgICBjcmVhdGU6IGNyZWF0ZSQ1LFxuICAgIGlnbm9yZVJlY3Q6IHRydWUsXG4gICAgd3JpdGU6IGNyZWF0ZVJvdXRlKHtcbiAgICAgIERJRF9TRVRfRElTQUJMRUQ6IGRpZFNldERpc2FibGVkLFxuICAgICAgRElEX0xPQURfSVRFTTogZGlkTG9hZEl0ZW0sXG4gICAgICBESURfUkVNT1ZFX0lURU06IGRpZFJlbW92ZUl0ZW0sXG4gICAgICBESURfQ09NUExFVEVfSVRFTV9QUk9DRVNTSU5HOiBkaWRDb21wbGV0ZUl0ZW1Qcm9jZXNzaW5nJDEsXG4gICAgICBESURfUkVWRVJUX0lURU1fUFJPQ0VTU0lORzogZGlkUmV2ZXJ0SXRlbVByb2Nlc3NpbmdcbiAgICB9KSxcblxuICAgIGRpZENyZWF0ZVZpZXc6IGZ1bmN0aW9uIGRpZENyZWF0ZVZpZXcocm9vdCkge1xuICAgICAgYXBwbHlGaWx0ZXJzKCdDUkVBVEVfVklFVycsIE9iamVjdC5hc3NpZ24oe30sIHJvb3QsIHsgdmlldzogcm9vdCB9KSk7XG4gICAgfSxcbiAgICB0YWc6ICdmaWVsZHNldCcsXG4gICAgbmFtZTogJ2ZpbGUtd3JhcHBlcidcbiAgfSk7XG5cbiAgdmFyIFBBTkVMX1NQUklOR19QUk9QUyA9IHsgdHlwZTogJ3NwcmluZycsIGRhbXBpbmc6IDAuNiwgbWFzczogNyB9O1xuXG4gIHZhciBjcmVhdGUkNiA9IGZ1bmN0aW9uIGNyZWF0ZShfcmVmKSB7XG4gICAgdmFyIHJvb3QgPSBfcmVmLnJvb3QsXG4gICAgICBwcm9wcyA9IF9yZWYucHJvcHM7XG4gICAgW1xuICAgICAge1xuICAgICAgICBuYW1lOiAndG9wJ1xuICAgICAgfSxcblxuICAgICAge1xuICAgICAgICBuYW1lOiAnY2VudGVyJyxcbiAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICB0cmFuc2xhdGVZOiBudWxsLFxuICAgICAgICAgIHNjYWxlWTogbnVsbFxuICAgICAgICB9LFxuXG4gICAgICAgIG1peGluczoge1xuICAgICAgICAgIGFuaW1hdGlvbnM6IHtcbiAgICAgICAgICAgIHNjYWxlWTogUEFORUxfU1BSSU5HX1BST1BTXG4gICAgICAgICAgfSxcblxuICAgICAgICAgIHN0eWxlczogWyd0cmFuc2xhdGVZJywgJ3NjYWxlWSddXG4gICAgICAgIH1cbiAgICAgIH0sXG5cbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ2JvdHRvbScsXG4gICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgdHJhbnNsYXRlWTogbnVsbFxuICAgICAgICB9LFxuXG4gICAgICAgIG1peGluczoge1xuICAgICAgICAgIGFuaW1hdGlvbnM6IHtcbiAgICAgICAgICAgIHRyYW5zbGF0ZVk6IFBBTkVMX1NQUklOR19QUk9QU1xuICAgICAgICAgIH0sXG5cbiAgICAgICAgICBzdHlsZXM6IFsndHJhbnNsYXRlWSddXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBdLmZvckVhY2goZnVuY3Rpb24oc2VjdGlvbikge1xuICAgICAgY3JlYXRlU2VjdGlvbihyb290LCBzZWN0aW9uLCBwcm9wcy5uYW1lKTtcbiAgICB9KTtcblxuICAgIHJvb3QuZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdmaWxlcG9uZC0tJyArIHByb3BzLm5hbWUpO1xuXG4gICAgcm9vdC5yZWYuc2NhbGFibGUgPSBudWxsO1xuICB9O1xuXG4gIHZhciBjcmVhdGVTZWN0aW9uID0gZnVuY3Rpb24gY3JlYXRlU2VjdGlvbihyb290LCBzZWN0aW9uLCBjbGFzc05hbWUpIHtcbiAgICB2YXIgdmlld0NvbnN0cnVjdG9yID0gY3JlYXRlVmlldyh7XG4gICAgICBuYW1lOiAncGFuZWwtJyArIHNlY3Rpb24ubmFtZSArICcgZmlsZXBvbmQtLScgKyBjbGFzc05hbWUsXG4gICAgICBtaXhpbnM6IHNlY3Rpb24ubWl4aW5zLFxuICAgICAgaWdub3JlUmVjdFVwZGF0ZTogdHJ1ZVxuICAgIH0pO1xuXG4gICAgdmFyIHZpZXcgPSByb290LmNyZWF0ZUNoaWxkVmlldyh2aWV3Q29uc3RydWN0b3IsIHNlY3Rpb24ucHJvcHMpO1xuXG4gICAgcm9vdC5yZWZbc2VjdGlvbi5uYW1lXSA9IHJvb3QuYXBwZW5kQ2hpbGRWaWV3KHZpZXcpO1xuICB9O1xuXG4gIHZhciB3cml0ZSQzID0gZnVuY3Rpb24gd3JpdGUoX3JlZjIpIHtcbiAgICB2YXIgcm9vdCA9IF9yZWYyLnJvb3QsXG4gICAgICBwcm9wcyA9IF9yZWYyLnByb3BzO1xuXG4gICAgLy8gdXBkYXRlIHNjYWxhYmxlIHN0YXRlXG4gICAgaWYgKHJvb3QucmVmLnNjYWxhYmxlID09PSBudWxsIHx8IHByb3BzLnNjYWxhYmxlICE9PSByb290LnJlZi5zY2FsYWJsZSkge1xuICAgICAgcm9vdC5yZWYuc2NhbGFibGUgPSBpc0Jvb2xlYW4ocHJvcHMuc2NhbGFibGUpID8gcHJvcHMuc2NhbGFibGUgOiB0cnVlO1xuICAgICAgcm9vdC5lbGVtZW50LmRhdGFzZXQuc2NhbGFibGUgPSByb290LnJlZi5zY2FsYWJsZTtcbiAgICB9XG5cbiAgICAvLyBubyBoZWlnaHQsIGNhbid0IHNldFxuICAgIGlmICghcHJvcHMuaGVpZ2h0KSByZXR1cm47XG5cbiAgICAvLyBnZXQgY2hpbGQgcmVjdHNcbiAgICB2YXIgdG9wUmVjdCA9IHJvb3QucmVmLnRvcC5yZWN0LmVsZW1lbnQ7XG4gICAgdmFyIGJvdHRvbVJlY3QgPSByb290LnJlZi5ib3R0b20ucmVjdC5lbGVtZW50O1xuXG4gICAgLy8gbWFrZSBzdXJlIGhlaWdodCBuZXZlciBpcyBzbWFsbGVyIHRoYW4gYm90dG9tIGFuZCB0b3Agc2VjaXRvbiBoZWlnaHRzIGNvbWJpbmVkICh3aWxsIHByb2JhYmx5IG5ldmVyIGhhcHBlbiwgYnV0IHdobyBrbm93cylcbiAgICB2YXIgaGVpZ2h0ID0gTWF0aC5tYXgodG9wUmVjdC5oZWlnaHQgKyBib3R0b21SZWN0LmhlaWdodCwgcHJvcHMuaGVpZ2h0KTtcblxuICAgIC8vIG9mZnNldCBjZW50ZXIgcGFydFxuICAgIHJvb3QucmVmLmNlbnRlci50cmFuc2xhdGVZID0gdG9wUmVjdC5oZWlnaHQ7XG5cbiAgICAvLyBzY2FsZSBjZW50ZXIgcGFydFxuICAgIC8vIHVzZSBtYXRoIGNlaWwgdG8gcHJldmVudCB0cmFuc3BhcmVudCBsaW5lcyBiZWNhdXNlIG9mIHJvdW5kaW5nIGVycm9yc1xuICAgIHJvb3QucmVmLmNlbnRlci5zY2FsZVkgPVxuICAgICAgKGhlaWdodCAtIHRvcFJlY3QuaGVpZ2h0IC0gYm90dG9tUmVjdC5oZWlnaHQpIC8gMTAwO1xuXG4gICAgLy8gb2Zmc2V0IGJvdHRvbSBwYXJ0XG4gICAgcm9vdC5yZWYuYm90dG9tLnRyYW5zbGF0ZVkgPSBoZWlnaHQgLSBib3R0b21SZWN0LmhlaWdodDtcbiAgfTtcblxuICB2YXIgcGFuZWwgPSBjcmVhdGVWaWV3KHtcbiAgICBuYW1lOiAncGFuZWwnLFxuICAgIHdyaXRlOiB3cml0ZSQzLFxuICAgIGNyZWF0ZTogY3JlYXRlJDYsXG4gICAgaWdub3JlUmVjdDogdHJ1ZSxcbiAgICBtaXhpbnM6IHtcbiAgICAgIGFwaXM6IFsnaGVpZ2h0JywgJ3NjYWxhYmxlJ11cbiAgICB9XG4gIH0pO1xuXG4gIHZhciBJVEVNX1RSQU5TTEFURV9TUFJJTkcgPSB7XG4gICAgdHlwZTogJ3NwcmluZycsXG4gICAgc3RpZmZuZXNzOiAwLjc1LFxuICAgIGRhbXBpbmc6IDAuNDUsXG4gICAgbWFzczogMTBcbiAgfTtcblxuICB2YXIgSVRFTV9TQ0FMRV9TUFJJTkcgPSAnc3ByaW5nJztcblxuICAvKipcbiAgICogQ3JlYXRlcyB0aGUgZmlsZSB2aWV3XG4gICAqL1xuICB2YXIgY3JlYXRlJDcgPSBmdW5jdGlvbiBjcmVhdGUoX3JlZikge1xuICAgIHZhciByb290ID0gX3JlZi5yb290LFxuICAgICAgcHJvcHMgPSBfcmVmLnByb3BzO1xuXG4gICAgLy8gc2VsZWN0XG4gICAgcm9vdC5yZWYuaGFuZGxlQ2xpY2sgPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiByb290LmRpc3BhdGNoKCdESURfQUNUSVZBVEVfSVRFTScsIHsgaWQ6IHByb3BzLmlkIH0pO1xuICAgIH07XG5cbiAgICAvLyBzZXQgaWRcbiAgICByb290LmVsZW1lbnQuaWQgPSAnZmlsZXBvbmQtLWl0ZW0tJyArIHByb3BzLmlkO1xuICAgIHJvb3QuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHJvb3QucmVmLmhhbmRsZUNsaWNrKTtcblxuICAgIC8vIGZpbGUgdmlld1xuICAgIHJvb3QucmVmLmNvbnRhaW5lciA9IHJvb3QuYXBwZW5kQ2hpbGRWaWV3KFxuICAgICAgcm9vdC5jcmVhdGVDaGlsZFZpZXcoZmlsZVdyYXBwZXIsIHsgaWQ6IHByb3BzLmlkIH0pXG4gICAgKTtcblxuICAgIC8vIGZpbGUgcGFuZWxcbiAgICByb290LnJlZi5wYW5lbCA9IHJvb3QuYXBwZW5kQ2hpbGRWaWV3KFxuICAgICAgcm9vdC5jcmVhdGVDaGlsZFZpZXcocGFuZWwsIHsgbmFtZTogJ2l0ZW0tcGFuZWwnIH0pXG4gICAgKTtcblxuICAgIC8vIGRlZmF1bHQgc3RhcnQgaGVpZ2h0XG4gICAgcm9vdC5yZWYucGFuZWwuaGVpZ2h0ID0gbnVsbDtcblxuICAgIC8vIGJ5IGRlZmF1bHQgbm90IG1hcmtlZCBmb3IgcmVtb3ZhbFxuICAgIHByb3BzLm1hcmtlZEZvclJlbW92YWwgPSBmYWxzZTtcbiAgfTtcblxuICB2YXIgU3RhdGVNYXAgPSB7XG4gICAgRElEX1NUQVJUX0lURU1fTE9BRDogJ2J1c3knLFxuICAgIERJRF9VUERBVEVfSVRFTV9MT0FEX1BST0dSRVNTOiAnbG9hZGluZycsXG4gICAgRElEX1RIUk9XX0lURU1fSU5WQUxJRDogJ2xvYWQtaW52YWxpZCcsXG4gICAgRElEX1RIUk9XX0lURU1fTE9BRF9FUlJPUjogJ2xvYWQtZXJyb3InLFxuICAgIERJRF9MT0FEX0lURU06ICdpZGxlJyxcbiAgICBESURfVEhST1dfSVRFTV9SRU1PVkVfRVJST1I6ICdyZW1vdmUtZXJyb3InLFxuICAgIERJRF9TVEFSVF9JVEVNX1JFTU9WRTogJ2J1c3knLFxuICAgIERJRF9TVEFSVF9JVEVNX1BST0NFU1NJTkc6ICdidXN5JyxcbiAgICBESURfUkVRVUVTVF9JVEVNX1BST0NFU1NJTkc6ICdidXN5JyxcbiAgICBESURfVVBEQVRFX0lURU1fUFJPQ0VTU19QUk9HUkVTUzogJ3Byb2Nlc3NpbmcnLFxuICAgIERJRF9DT01QTEVURV9JVEVNX1BST0NFU1NJTkc6ICdwcm9jZXNzaW5nLWNvbXBsZXRlJyxcbiAgICBESURfVEhST1dfSVRFTV9QUk9DRVNTSU5HX0VSUk9SOiAncHJvY2Vzc2luZy1lcnJvcicsXG4gICAgRElEX1RIUk9XX0lURU1fUFJPQ0VTU0lOR19SRVZFUlRfRVJST1I6ICdwcm9jZXNzaW5nLXJldmVydC1lcnJvcicsXG4gICAgRElEX0FCT1JUX0lURU1fUFJPQ0VTU0lORzogJ2NhbmNlbGxlZCcsXG4gICAgRElEX1JFVkVSVF9JVEVNX1BST0NFU1NJTkc6ICdpZGxlJ1xuICB9O1xuXG4gIHZhciByb3V0ZSQxID0gY3JlYXRlUm91dGUoe1xuICAgIERJRF9VUERBVEVfUEFORUxfSEVJR0hUOiBmdW5jdGlvbiBESURfVVBEQVRFX1BBTkVMX0hFSUdIVChfcmVmMikge1xuICAgICAgdmFyIHJvb3QgPSBfcmVmMi5yb290LFxuICAgICAgICBhY3Rpb24gPSBfcmVmMi5hY3Rpb247XG4gICAgICB2YXIgaGVpZ2h0ID0gYWN0aW9uLmhlaWdodDtcbiAgICAgIHJvb3QuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgIH1cbiAgfSk7XG5cbiAgdmFyIHdyaXRlJDQgPSBmdW5jdGlvbiB3cml0ZShfcmVmMykge1xuICAgIHZhciByb290ID0gX3JlZjMucm9vdCxcbiAgICAgIGFjdGlvbnMgPSBfcmVmMy5hY3Rpb25zLFxuICAgICAgcHJvcHMgPSBfcmVmMy5wcm9wcyxcbiAgICAgIHNob3VsZE9wdGltaXplID0gX3JlZjMuc2hvdWxkT3B0aW1pemU7XG5cbiAgICAvLyBzZWxlY3QgbGFzdCBzdGF0ZSBjaGFuZ2UgYWN0aW9uXG4gICAgdmFyIGFjdGlvbiA9IGFjdGlvbnNcbiAgICAgIC5jb25jYXQoKVxuICAgICAgLmZpbHRlcihmdW5jdGlvbihhY3Rpb24pIHtcbiAgICAgICAgcmV0dXJuIC9eRElEXy8udGVzdChhY3Rpb24udHlwZSk7XG4gICAgICB9KVxuICAgICAgLnJldmVyc2UoKVxuICAgICAgLmZpbmQoZnVuY3Rpb24oYWN0aW9uKSB7XG4gICAgICAgIHJldHVybiBTdGF0ZU1hcFthY3Rpb24udHlwZV07XG4gICAgICB9KTtcblxuICAgIC8vIG5vIG5lZWQgdG8gc2V0IHNhbWUgc3RhdGUgdHdpY2VcbiAgICBpZiAoYWN0aW9uICYmIGFjdGlvbi50eXBlICE9PSBwcm9wcy5jdXJyZW50U3RhdGUpIHtcbiAgICAgIC8vIHNldCBjdXJyZW50IHN0YXRlXG4gICAgICBwcm9wcy5jdXJyZW50U3RhdGUgPSBhY3Rpb24udHlwZTtcblxuICAgICAgLy8gc2V0IHN0YXRlXG4gICAgICByb290LmVsZW1lbnQuZGF0YXNldC5maWxlcG9uZEl0ZW1TdGF0ZSA9XG4gICAgICAgIFN0YXRlTWFwW3Byb3BzLmN1cnJlbnRTdGF0ZV0gfHwgJyc7XG4gICAgfVxuXG4gICAgLy8gcm91dGUgYWN0aW9uc1xuICAgIHZhciBhc3BlY3RSYXRpbyA9XG4gICAgICByb290LnF1ZXJ5KCdHRVRfSVRFTV9QQU5FTF9BU1BFQ1RfUkFUSU8nKSB8fFxuICAgICAgcm9vdC5xdWVyeSgnR0VUX1BBTkVMX0FTUEVDVF9SQVRJTycpO1xuICAgIGlmICghYXNwZWN0UmF0aW8pIHtcbiAgICAgIHJvdXRlJDEoeyByb290OiByb290LCBhY3Rpb25zOiBhY3Rpb25zLCBwcm9wczogcHJvcHMgfSk7XG4gICAgICBpZiAoIXJvb3QuaGVpZ2h0ICYmIHJvb3QucmVmLmNvbnRhaW5lci5yZWN0LmVsZW1lbnQuaGVpZ2h0ID4gMCkge1xuICAgICAgICByb290LmhlaWdodCA9IHJvb3QucmVmLmNvbnRhaW5lci5yZWN0LmVsZW1lbnQuaGVpZ2h0O1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoIXNob3VsZE9wdGltaXplKSB7XG4gICAgICByb290LmhlaWdodCA9IHJvb3QucmVjdC5lbGVtZW50LndpZHRoICogYXNwZWN0UmF0aW87XG4gICAgfVxuXG4gICAgLy8gc3luYyBwYW5lbCBoZWlnaHQgd2l0aCBpdGVtIGhlaWdodFxuICAgIGlmIChzaG91bGRPcHRpbWl6ZSkge1xuICAgICAgcm9vdC5yZWYucGFuZWwuaGVpZ2h0ID0gbnVsbDtcbiAgICB9XG5cbiAgICByb290LnJlZi5wYW5lbC5oZWlnaHQgPSByb290LmhlaWdodDtcbiAgfTtcblxuICB2YXIgaXRlbSA9IGNyZWF0ZVZpZXcoe1xuICAgIGNyZWF0ZTogY3JlYXRlJDcsXG4gICAgd3JpdGU6IHdyaXRlJDQsXG4gICAgZGVzdHJveTogZnVuY3Rpb24gZGVzdHJveShfcmVmNCkge1xuICAgICAgdmFyIHJvb3QgPSBfcmVmNC5yb290LFxuICAgICAgICBwcm9wcyA9IF9yZWY0LnByb3BzO1xuICAgICAgcm9vdC5lbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcm9vdC5yZWYuaGFuZGxlQ2xpY2spO1xuICAgICAgcm9vdC5kaXNwYXRjaCgnUkVMRUFTRV9JVEVNJywgeyBxdWVyeTogcHJvcHMuaWQgfSk7XG4gICAgfSxcbiAgICB0YWc6ICdsaScsXG4gICAgbmFtZTogJ2l0ZW0nLFxuICAgIG1peGluczoge1xuICAgICAgYXBpczogWydpZCcsICdpbnRlcmFjdGlvbk1ldGhvZCcsICdtYXJrZWRGb3JSZW1vdmFsJywgJ3NwYXduRGF0ZSddLFxuICAgICAgc3R5bGVzOiBbXG4gICAgICAgICd0cmFuc2xhdGVYJyxcbiAgICAgICAgJ3RyYW5zbGF0ZVknLFxuICAgICAgICAnc2NhbGVYJyxcbiAgICAgICAgJ3NjYWxlWScsXG4gICAgICAgICdvcGFjaXR5JyxcbiAgICAgICAgJ2hlaWdodCdcbiAgICAgIF0sXG5cbiAgICAgIGFuaW1hdGlvbnM6IHtcbiAgICAgICAgc2NhbGVYOiBJVEVNX1NDQUxFX1NQUklORyxcbiAgICAgICAgc2NhbGVZOiBJVEVNX1NDQUxFX1NQUklORyxcbiAgICAgICAgdHJhbnNsYXRlWDogSVRFTV9UUkFOU0xBVEVfU1BSSU5HLFxuICAgICAgICB0cmFuc2xhdGVZOiBJVEVNX1RSQU5TTEFURV9TUFJJTkcsXG4gICAgICAgIG9wYWNpdHk6IHsgdHlwZTogJ3R3ZWVuJywgZHVyYXRpb246IDE1MCB9XG4gICAgICB9XG4gICAgfVxuICB9KTtcblxuICB2YXIgZ2V0SXRlbUluZGV4QnlQb3NpdGlvbiA9IGZ1bmN0aW9uIGdldEl0ZW1JbmRleEJ5UG9zaXRpb24oXG4gICAgdmlldyxcbiAgICBwb3NpdGlvbkluVmlld1xuICApIHtcbiAgICBpZiAoIXBvc2l0aW9uSW5WaWV3KSByZXR1cm47XG5cbiAgICB2YXIgaG9yaXpvbnRhbFNwYWNlID0gdmlldy5yZWN0LmVsZW1lbnQud2lkdGg7XG4gICAgdmFyIGNoaWxkcmVuID0gdmlldy5jaGlsZFZpZXdzO1xuICAgIHZhciBsID0gY2hpbGRyZW4ubGVuZ3RoO1xuICAgIHZhciBsYXN0ID0gbnVsbDtcblxuICAgIC8vIC0xLCBkb24ndCBtb3ZlIGl0ZW1zIHRvIGFjY29tb2RhdGUgKGVpdGhlciBhZGQgdG8gdG9wIG9yIGJvdHRvbSlcbiAgICBpZiAobCA9PT0gMCB8fCBwb3NpdGlvbkluVmlldy50b3AgPCBjaGlsZHJlblswXS5yZWN0LmVsZW1lbnQudG9wKSByZXR1cm4gLTE7XG5cbiAgICAvLyBsZXQncyBnZXQgdGhlIGl0ZW0gd2lkdGhcbiAgICB2YXIgaXRlbSA9IGNoaWxkcmVuWzBdO1xuICAgIHZhciBpdGVtUmVjdCA9IGl0ZW0ucmVjdC5lbGVtZW50O1xuICAgIHZhciBpdGVtSG9yaXpvbnRhbE1hcmdpbiA9IGl0ZW1SZWN0Lm1hcmdpbkxlZnQgKyBpdGVtUmVjdC5tYXJnaW5SaWdodDtcbiAgICB2YXIgaXRlbVdpZHRoID0gaXRlbVJlY3Qud2lkdGggKyBpdGVtSG9yaXpvbnRhbE1hcmdpbjtcbiAgICB2YXIgaXRlbXNQZXJSb3cgPSBNYXRoLnJvdW5kKGhvcml6b250YWxTcGFjZSAvIGl0ZW1XaWR0aCk7XG5cbiAgICAvLyBzdGFja1xuICAgIGlmIChpdGVtc1BlclJvdyA9PT0gMSkge1xuICAgICAgZm9yICh2YXIgaW5kZXggPSAwOyBpbmRleCA8IGw7IGluZGV4KyspIHtcbiAgICAgICAgdmFyIGNoaWxkID0gY2hpbGRyZW5baW5kZXhdO1xuICAgICAgICB2YXIgY2hpbGRNaWQgPSBjaGlsZC5yZWN0Lm91dGVyLnRvcCArIGNoaWxkLnJlY3QuZWxlbWVudC5oZWlnaHQgKiAwLjU7XG4gICAgICAgIGlmIChwb3NpdGlvbkluVmlldy50b3AgPCBjaGlsZE1pZCkge1xuICAgICAgICAgIHJldHVybiBpbmRleDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIGw7XG4gICAgfVxuXG4gICAgLy8gZ3JpZFxuICAgIHZhciBpdGVtVmVydGljYWxNYXJnaW4gPSBpdGVtUmVjdC5tYXJnaW5Ub3AgKyBpdGVtUmVjdC5tYXJnaW5Cb3R0b207XG4gICAgdmFyIGl0ZW1IZWlnaHQgPSBpdGVtUmVjdC5oZWlnaHQgKyBpdGVtVmVydGljYWxNYXJnaW47XG4gICAgZm9yICh2YXIgX2luZGV4ID0gMDsgX2luZGV4IDwgbDsgX2luZGV4KyspIHtcbiAgICAgIHZhciBpbmRleFggPSBfaW5kZXggJSBpdGVtc1BlclJvdztcbiAgICAgIHZhciBpbmRleFkgPSBNYXRoLmZsb29yKF9pbmRleCAvIGl0ZW1zUGVyUm93KTtcblxuICAgICAgdmFyIG9mZnNldFggPSBpbmRleFggKiBpdGVtV2lkdGg7XG4gICAgICB2YXIgb2Zmc2V0WSA9IGluZGV4WSAqIGl0ZW1IZWlnaHQ7XG5cbiAgICAgIHZhciBpdGVtVG9wID0gb2Zmc2V0WSAtIGl0ZW1SZWN0Lm1hcmdpblRvcDtcbiAgICAgIHZhciBpdGVtUmlnaHQgPSBvZmZzZXRYICsgaXRlbVdpZHRoO1xuICAgICAgdmFyIGl0ZW1Cb3R0b20gPSBvZmZzZXRZICsgaXRlbUhlaWdodCArIGl0ZW1SZWN0Lm1hcmdpbkJvdHRvbTtcblxuICAgICAgaWYgKHBvc2l0aW9uSW5WaWV3LnRvcCA8IGl0ZW1Cb3R0b20gJiYgcG9zaXRpb25JblZpZXcudG9wID4gaXRlbVRvcCkge1xuICAgICAgICBpZiAocG9zaXRpb25JblZpZXcubGVmdCA8IGl0ZW1SaWdodCkge1xuICAgICAgICAgIHJldHVybiBfaW5kZXg7XG4gICAgICAgIH0gZWxzZSBpZiAoX2luZGV4ICE9PSBsIC0gMSkge1xuICAgICAgICAgIGxhc3QgPSBfaW5kZXg7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbGFzdCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAobGFzdCAhPT0gbnVsbCkge1xuICAgICAgcmV0dXJuIGxhc3Q7XG4gICAgfVxuXG4gICAgcmV0dXJuIGw7XG4gIH07XG5cbiAgdmFyIGNyZWF0ZSQ4ID0gZnVuY3Rpb24gY3JlYXRlKF9yZWYpIHtcbiAgICB2YXIgcm9vdCA9IF9yZWYucm9vdDtcbiAgICAvLyBuZWVkIHRvIHNldCByb2xlIHRvIGxpc3QgYXMgb3RoZXJ3aXNlIGl0IHdvbid0IGJlIHJlYWQgYXMgYSBsaXN0IGJ5IFZvaWNlT3ZlclxuICAgIGF0dHIocm9vdC5lbGVtZW50LCAncm9sZScsICdsaXN0Jyk7XG5cbiAgICByb290LnJlZi5sYXN0SXRlbVNwYW53RGF0ZSA9IERhdGUubm93KCk7XG4gIH07XG5cbiAgLyoqXG4gICAqIEluc2VydHMgYSBuZXcgaXRlbVxuICAgKiBAcGFyYW0gcm9vdFxuICAgKiBAcGFyYW0gYWN0aW9uXG4gICAqL1xuICB2YXIgYWRkSXRlbVZpZXcgPSBmdW5jdGlvbiBhZGRJdGVtVmlldyhfcmVmMikge1xuICAgIHZhciByb290ID0gX3JlZjIucm9vdCxcbiAgICAgIGFjdGlvbiA9IF9yZWYyLmFjdGlvbjtcbiAgICB2YXIgaWQgPSBhY3Rpb24uaWQsXG4gICAgICBpbmRleCA9IGFjdGlvbi5pbmRleCxcbiAgICAgIGludGVyYWN0aW9uTWV0aG9kID0gYWN0aW9uLmludGVyYWN0aW9uTWV0aG9kO1xuXG4gICAgcm9vdC5yZWYuYWRkSW5kZXggPSBpbmRleDtcblxuICAgIHZhciBub3cgPSBEYXRlLm5vdygpO1xuICAgIHZhciBzcGF3bkRhdGUgPSBub3c7XG4gICAgdmFyIG9wYWNpdHkgPSAxO1xuXG4gICAgaWYgKGludGVyYWN0aW9uTWV0aG9kICE9PSBJbnRlcmFjdGlvbk1ldGhvZC5OT05FKSB7XG4gICAgICBvcGFjaXR5ID0gMDtcbiAgICAgIHZhciBjb29sZG93biA9IHJvb3QucXVlcnkoJ0dFVF9JVEVNX0lOU0VSVF9JTlRFUlZBTCcpO1xuICAgICAgdmFyIGRpc3QgPSBub3cgLSByb290LnJlZi5sYXN0SXRlbVNwYW53RGF0ZTtcbiAgICAgIHNwYXduRGF0ZSA9IGRpc3QgPCBjb29sZG93biA/IG5vdyArIChjb29sZG93biAtIGRpc3QpIDogbm93O1xuICAgIH1cblxuICAgIHJvb3QucmVmLmxhc3RJdGVtU3BhbndEYXRlID0gc3Bhd25EYXRlO1xuXG4gICAgcm9vdC5hcHBlbmRDaGlsZFZpZXcoXG4gICAgICByb290LmNyZWF0ZUNoaWxkVmlldyhcbiAgICAgICAgLy8gdmlldyB0eXBlXG4gICAgICAgIGl0ZW0sXG5cbiAgICAgICAgLy8gcHJvcHNcbiAgICAgICAge1xuICAgICAgICAgIHNwYXduRGF0ZTogc3Bhd25EYXRlLFxuICAgICAgICAgIGlkOiBpZCxcbiAgICAgICAgICBvcGFjaXR5OiBvcGFjaXR5LFxuICAgICAgICAgIGludGVyYWN0aW9uTWV0aG9kOiBpbnRlcmFjdGlvbk1ldGhvZFxuICAgICAgICB9XG4gICAgICApLFxuXG4gICAgICBpbmRleFxuICAgICk7XG4gIH07XG5cbiAgdmFyIG1vdmVJdGVtID0gZnVuY3Rpb24gbW92ZUl0ZW0oaXRlbSwgeCwgeSkge1xuICAgIHZhciB2eCA9XG4gICAgICBhcmd1bWVudHMubGVuZ3RoID4gMyAmJiBhcmd1bWVudHNbM10gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1szXSA6IDA7XG4gICAgdmFyIHZ5ID1cbiAgICAgIGFyZ3VtZW50cy5sZW5ndGggPiA0ICYmIGFyZ3VtZW50c1s0XSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzRdIDogMTtcblxuICAgIGl0ZW0udHJhbnNsYXRlWCA9IHg7XG4gICAgaXRlbS50cmFuc2xhdGVZID0geTtcblxuICAgIGlmIChEYXRlLm5vdygpID4gaXRlbS5zcGF3bkRhdGUpIHtcbiAgICAgIC8vIHJldmVhbCBlbGVtZW50XG4gICAgICBpZiAoaXRlbS5vcGFjaXR5ID09PSAwKSB7XG4gICAgICAgIGludHJvSXRlbVZpZXcoaXRlbSwgeCwgeSwgdngsIHZ5KTtcbiAgICAgIH1cblxuICAgICAgLy8gbWFrZSBzdXJlIGlzIGRlZmF1bHQgc2NhbGUgZXZlcnkgZnJhbWVcbiAgICAgIGl0ZW0uc2NhbGVYID0gMTtcbiAgICAgIGl0ZW0uc2NhbGVZID0gMTtcbiAgICAgIGl0ZW0ub3BhY2l0eSA9IDE7XG4gICAgfVxuICB9O1xuXG4gIHZhciBpbnRyb0l0ZW1WaWV3ID0gZnVuY3Rpb24gaW50cm9JdGVtVmlldyhpdGVtLCB4LCB5LCB2eCwgdnkpIHtcbiAgICBpZiAoaXRlbS5pbnRlcmFjdGlvbk1ldGhvZCA9PT0gSW50ZXJhY3Rpb25NZXRob2QuTk9ORSkge1xuICAgICAgaXRlbS50cmFuc2xhdGVYID0gbnVsbDtcbiAgICAgIGl0ZW0udHJhbnNsYXRlWCA9IHg7XG4gICAgICBpdGVtLnRyYW5zbGF0ZVkgPSBudWxsO1xuICAgICAgaXRlbS50cmFuc2xhdGVZID0geTtcbiAgICB9IGVsc2UgaWYgKGl0ZW0uaW50ZXJhY3Rpb25NZXRob2QgPT09IEludGVyYWN0aW9uTWV0aG9kLkRST1ApIHtcbiAgICAgIGl0ZW0udHJhbnNsYXRlWCA9IG51bGw7XG4gICAgICBpdGVtLnRyYW5zbGF0ZVggPSB4IC0gdnggKiAyMDtcblxuICAgICAgaXRlbS50cmFuc2xhdGVZID0gbnVsbDtcbiAgICAgIGl0ZW0udHJhbnNsYXRlWSA9IHkgLSB2eSAqIDEwO1xuXG4gICAgICBpdGVtLnNjYWxlWCA9IDAuODtcbiAgICAgIGl0ZW0uc2NhbGVZID0gMC44O1xuICAgIH0gZWxzZSBpZiAoaXRlbS5pbnRlcmFjdGlvbk1ldGhvZCA9PT0gSW50ZXJhY3Rpb25NZXRob2QuQlJPV1NFKSB7XG4gICAgICBpdGVtLnRyYW5zbGF0ZVkgPSBudWxsO1xuICAgICAgaXRlbS50cmFuc2xhdGVZID0geSAtIDMwO1xuICAgIH0gZWxzZSBpZiAoaXRlbS5pbnRlcmFjdGlvbk1ldGhvZCA9PT0gSW50ZXJhY3Rpb25NZXRob2QuQVBJKSB7XG4gICAgICBpdGVtLnRyYW5zbGF0ZVggPSBudWxsO1xuICAgICAgaXRlbS50cmFuc2xhdGVYID0geCAtIDMwO1xuICAgICAgaXRlbS50cmFuc2xhdGVZID0gbnVsbDtcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIFJlbW92ZXMgYW4gZXhpc3RpbmcgaXRlbVxuICAgKiBAcGFyYW0gcm9vdFxuICAgKiBAcGFyYW0gYWN0aW9uXG4gICAqL1xuICB2YXIgcmVtb3ZlSXRlbVZpZXcgPSBmdW5jdGlvbiByZW1vdmVJdGVtVmlldyhfcmVmMykge1xuICAgIHZhciByb290ID0gX3JlZjMucm9vdCxcbiAgICAgIGFjdGlvbiA9IF9yZWYzLmFjdGlvbjtcbiAgICB2YXIgaWQgPSBhY3Rpb24uaWQ7XG5cbiAgICAvLyBnZXQgdGhlIHZpZXcgbWF0Y2hpbmcgdGhlIGdpdmVuIGlkXG4gICAgdmFyIHZpZXcgPSByb290LmNoaWxkVmlld3MuZmluZChmdW5jdGlvbihjaGlsZCkge1xuICAgICAgcmV0dXJuIGNoaWxkLmlkID09PSBpZDtcbiAgICB9KTtcblxuICAgIC8vIGlmIG5vIHZpZXcgZm91bmQsIGV4aXRcbiAgICBpZiAoIXZpZXcpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBhbmltYXRlIHZpZXcgb3V0IG9mIHZpZXdcbiAgICB2aWV3LnNjYWxlWCA9IDAuOTtcbiAgICB2aWV3LnNjYWxlWSA9IDAuOTtcbiAgICB2aWV3Lm9wYWNpdHkgPSAwO1xuXG4gICAgLy8gbWFyayBmb3IgcmVtb3ZhbFxuICAgIHZpZXcubWFya2VkRm9yUmVtb3ZhbCA9IHRydWU7XG4gIH07XG5cbiAgLyoqXG4gICAqIFNldHVwIGFjdGlvbiByb3V0ZXNcbiAgICovXG4gIHZhciByb3V0ZSQyID0gY3JlYXRlUm91dGUoe1xuICAgIERJRF9BRERfSVRFTTogYWRkSXRlbVZpZXcsXG4gICAgRElEX1JFTU9WRV9JVEVNOiByZW1vdmVJdGVtVmlld1xuICB9KTtcblxuICAvKipcbiAgICogV3JpdGUgdG8gdmlld1xuICAgKiBAcGFyYW0gcm9vdFxuICAgKiBAcGFyYW0gYWN0aW9uc1xuICAgKiBAcGFyYW0gcHJvcHNcbiAgICovXG4gIHZhciB3cml0ZSQ1ID0gZnVuY3Rpb24gd3JpdGUoX3JlZjQpIHtcbiAgICB2YXIgcm9vdCA9IF9yZWY0LnJvb3QsXG4gICAgICBwcm9wcyA9IF9yZWY0LnByb3BzLFxuICAgICAgYWN0aW9ucyA9IF9yZWY0LmFjdGlvbnMsXG4gICAgICBzaG91bGRPcHRpbWl6ZSA9IF9yZWY0LnNob3VsZE9wdGltaXplO1xuXG4gICAgLy8gcm91dGUgYWN0aW9uc1xuICAgIHJvdXRlJDIoeyByb290OiByb290LCBwcm9wczogcHJvcHMsIGFjdGlvbnM6IGFjdGlvbnMgfSk7XG4gICAgdmFyIGRyYWdDb29yZGluYXRlcyA9IHByb3BzLmRyYWdDb29yZGluYXRlcztcblxuICAgIC8vIGdldCBpbmRleFxuICAgIHZhciBkcmFnSW5kZXggPSBkcmFnQ29vcmRpbmF0ZXNcbiAgICAgID8gZ2V0SXRlbUluZGV4QnlQb3NpdGlvbihyb290LCBkcmFnQ29vcmRpbmF0ZXMpXG4gICAgICA6IG51bGw7XG5cbiAgICAvLyBhdmFpbGFibGUgc3BhY2Ugb24gaG9yaXpvbnRhbCBheGlzXG4gICAgdmFyIGhvcml6b250YWxTcGFjZSA9IHJvb3QucmVjdC5lbGVtZW50LndpZHRoO1xuXG4gICAgLy8gb25seSBkcmF3IGNoaWxkcmVuIHRoYXQgaGF2ZSBkaW1lbnNpb25zXG4gICAgdmFyIHZpc2libGVDaGlsZHJlbiA9IHJvb3QuY2hpbGRWaWV3cy5maWx0ZXIoZnVuY3Rpb24oY2hpbGQpIHtcbiAgICAgIHJldHVybiBjaGlsZC5yZWN0LmVsZW1lbnQuaGVpZ2h0O1xuICAgIH0pO1xuXG4gICAgLy8gc29ydCBiYXNlZCBvbiBjdXJyZW50IGFjdGl2ZSBpdGVtc1xuICAgIHZhciBjaGlsZHJlbiA9IHJvb3RcbiAgICAgIC5xdWVyeSgnR0VUX0FDVElWRV9JVEVNUycpXG4gICAgICAubWFwKGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICAgICAgcmV0dXJuIHZpc2libGVDaGlsZHJlbi5maW5kKGZ1bmN0aW9uKGNoaWxkKSB7XG4gICAgICAgICAgcmV0dXJuIGNoaWxkLmlkID09PSBpdGVtLmlkO1xuICAgICAgICB9KTtcbiAgICAgIH0pXG4gICAgICAuZmlsdGVyKGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICAgICAgcmV0dXJuIGl0ZW07XG4gICAgICB9KTtcblxuICAgIC8vIGFkZCBpbmRleCBpcyB1c2VkIHRvIHJlc2VydmUgdGhlIGRyb3BwZWQvYWRkZWQgaXRlbSBpbmRleCB0aWxsIHRoZSBhY3R1YWwgaXRlbSBpcyByZW5kZXJlZFxuICAgIHZhciBhZGRJbmRleCA9IHJvb3QucmVmLmFkZEluZGV4IHx8IG51bGw7XG5cbiAgICAvLyBhZGQgaW5kZXggbm8gbG9uZ2VyIG5lZWRlZCB0aWxsIHBvc3NpYmx5IG5leHQgZHJhd1xuICAgIHJvb3QucmVmLmFkZEluZGV4ID0gbnVsbDtcblxuICAgIHZhciBkcmFnSW5kZXhPZmZzZXQgPSAwO1xuICAgIHZhciByZW1vdmVJbmRleE9mZnNldCA9IDA7XG4gICAgdmFyIGFkZEluZGV4T2Zmc2V0ID0gMDtcblxuICAgIGlmIChjaGlsZHJlbi5sZW5ndGggPT09IDApIHJldHVybjtcblxuICAgIHZhciBjaGlsZFJlY3QgPSBjaGlsZHJlblswXS5yZWN0LmVsZW1lbnQ7XG4gICAgdmFyIGl0ZW1WZXJ0aWNhbE1hcmdpbiA9IGNoaWxkUmVjdC5tYXJnaW5Ub3AgKyBjaGlsZFJlY3QubWFyZ2luQm90dG9tO1xuICAgIHZhciBpdGVtSG9yaXpvbnRhbE1hcmdpbiA9IGNoaWxkUmVjdC5tYXJnaW5MZWZ0ICsgY2hpbGRSZWN0Lm1hcmdpblJpZ2h0O1xuICAgIHZhciBpdGVtV2lkdGggPSBjaGlsZFJlY3Qud2lkdGggKyBpdGVtSG9yaXpvbnRhbE1hcmdpbjtcbiAgICB2YXIgaXRlbUhlaWdodCA9IGNoaWxkUmVjdC5oZWlnaHQgKyBpdGVtVmVydGljYWxNYXJnaW47XG4gICAgdmFyIGl0ZW1zUGVyUm93ID0gTWF0aC5yb3VuZChob3Jpem9udGFsU3BhY2UgLyBpdGVtV2lkdGgpO1xuXG4gICAgLy8gc3RhY2tcbiAgICBpZiAoaXRlbXNQZXJSb3cgPT09IDEpIHtcbiAgICAgIHZhciBvZmZzZXRZID0gMDtcbiAgICAgIHZhciBkcmFnT2Zmc2V0ID0gMDtcblxuICAgICAgY2hpbGRyZW4uZm9yRWFjaChmdW5jdGlvbihjaGlsZCwgaW5kZXgpIHtcbiAgICAgICAgaWYgKGRyYWdJbmRleCkge1xuICAgICAgICAgIHZhciBkaXN0ID0gaW5kZXggLSBkcmFnSW5kZXg7XG4gICAgICAgICAgaWYgKGRpc3QgPT09IC0yKSB7XG4gICAgICAgICAgICBkcmFnT2Zmc2V0ID0gLWl0ZW1WZXJ0aWNhbE1hcmdpbiAqIDAuMjU7XG4gICAgICAgICAgfSBlbHNlIGlmIChkaXN0ID09PSAtMSkge1xuICAgICAgICAgICAgZHJhZ09mZnNldCA9IC1pdGVtVmVydGljYWxNYXJnaW4gKiAwLjc1O1xuICAgICAgICAgIH0gZWxzZSBpZiAoZGlzdCA9PT0gMCkge1xuICAgICAgICAgICAgZHJhZ09mZnNldCA9IGl0ZW1WZXJ0aWNhbE1hcmdpbiAqIDAuNzU7XG4gICAgICAgICAgfSBlbHNlIGlmIChkaXN0ID09PSAxKSB7XG4gICAgICAgICAgICBkcmFnT2Zmc2V0ID0gaXRlbVZlcnRpY2FsTWFyZ2luICogMC4yNTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZHJhZ09mZnNldCA9IDA7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHNob3VsZE9wdGltaXplKSB7XG4gICAgICAgICAgY2hpbGQudHJhbnNsYXRlWCA9IG51bGw7XG4gICAgICAgICAgY2hpbGQudHJhbnNsYXRlWSA9IG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIWNoaWxkLm1hcmtlZEZvclJlbW92YWwpIHtcbiAgICAgICAgICBtb3ZlSXRlbShjaGlsZCwgMCwgb2Zmc2V0WSArIGRyYWdPZmZzZXQpO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGl0ZW1IZWlnaHQgPSBjaGlsZC5yZWN0LmVsZW1lbnQuaGVpZ2h0ICsgaXRlbVZlcnRpY2FsTWFyZ2luO1xuXG4gICAgICAgIHZhciB2aXN1YWxIZWlnaHQgPVxuICAgICAgICAgIGl0ZW1IZWlnaHQgKiAoY2hpbGQubWFya2VkRm9yUmVtb3ZhbCA/IGNoaWxkLm9wYWNpdHkgOiAxKTtcblxuICAgICAgICBvZmZzZXRZICs9IHZpc3VhbEhlaWdodDtcbiAgICAgIH0pO1xuICAgIH1cbiAgICAvLyBncmlkXG4gICAgZWxzZSB7XG4gICAgICB2YXIgcHJldlggPSAwO1xuICAgICAgdmFyIHByZXZZID0gMDtcblxuICAgICAgY2hpbGRyZW4uZm9yRWFjaChmdW5jdGlvbihjaGlsZCwgaW5kZXgpIHtcbiAgICAgICAgaWYgKGluZGV4ID09PSBkcmFnSW5kZXgpIHtcbiAgICAgICAgICBkcmFnSW5kZXhPZmZzZXQgPSAxO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGluZGV4ID09PSBhZGRJbmRleCkge1xuICAgICAgICAgIGFkZEluZGV4T2Zmc2V0ICs9IDE7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY2hpbGQubWFya2VkRm9yUmVtb3ZhbCAmJiBjaGlsZC5vcGFjaXR5IDwgMC41KSB7XG4gICAgICAgICAgcmVtb3ZlSW5kZXhPZmZzZXQgLT0gMTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciB2aXN1YWxJbmRleCA9XG4gICAgICAgICAgaW5kZXggKyBhZGRJbmRleE9mZnNldCArIGRyYWdJbmRleE9mZnNldCArIHJlbW92ZUluZGV4T2Zmc2V0O1xuXG4gICAgICAgIHZhciBpbmRleFggPSB2aXN1YWxJbmRleCAlIGl0ZW1zUGVyUm93O1xuICAgICAgICB2YXIgaW5kZXhZID0gTWF0aC5mbG9vcih2aXN1YWxJbmRleCAvIGl0ZW1zUGVyUm93KTtcblxuICAgICAgICB2YXIgb2Zmc2V0WCA9IGluZGV4WCAqIGl0ZW1XaWR0aDtcbiAgICAgICAgdmFyIG9mZnNldFkgPSBpbmRleFkgKiBpdGVtSGVpZ2h0O1xuXG4gICAgICAgIHZhciB2ZWN0b3JYID0gTWF0aC5zaWduKG9mZnNldFggLSBwcmV2WCk7XG4gICAgICAgIHZhciB2ZWN0b3JZID0gTWF0aC5zaWduKG9mZnNldFkgLSBwcmV2WSk7XG5cbiAgICAgICAgcHJldlggPSBvZmZzZXRYO1xuICAgICAgICBwcmV2WSA9IG9mZnNldFk7XG5cbiAgICAgICAgaWYgKGNoaWxkLm1hcmtlZEZvclJlbW92YWwpIHJldHVybjtcblxuICAgICAgICBpZiAoc2hvdWxkT3B0aW1pemUpIHtcbiAgICAgICAgICBjaGlsZC50cmFuc2xhdGVYID0gbnVsbDtcbiAgICAgICAgICBjaGlsZC50cmFuc2xhdGVZID0gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIG1vdmVJdGVtKGNoaWxkLCBvZmZzZXRYLCBvZmZzZXRZLCB2ZWN0b3JYLCB2ZWN0b3JZKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogRmlsdGVycyBhY3Rpb25zIHRoYXQgYXJlIG1lYW50IHNwZWNpZmljYWxseSBmb3IgYSBjZXJ0YWluIGNoaWxkIG9mIHRoZSBsaXN0XG4gICAqIEBwYXJhbSBjaGlsZFxuICAgKiBAcGFyYW0gYWN0aW9uc1xuICAgKi9cbiAgdmFyIGZpbHRlclNldEl0ZW1BY3Rpb25zID0gZnVuY3Rpb24gZmlsdGVyU2V0SXRlbUFjdGlvbnMoY2hpbGQsIGFjdGlvbnMpIHtcbiAgICByZXR1cm4gYWN0aW9ucy5maWx0ZXIoZnVuY3Rpb24oYWN0aW9uKSB7XG4gICAgICAvLyBpZiBhY3Rpb24gaGFzIGFuIGlkLCBmaWx0ZXIgb3V0IGFjdGlvbnMgdGhhdCBkb24ndCBoYXZlIHRoaXMgY2hpbGQgaWRcbiAgICAgIGlmIChhY3Rpb24uZGF0YSAmJiBhY3Rpb24uZGF0YS5pZCkge1xuICAgICAgICByZXR1cm4gY2hpbGQuaWQgPT09IGFjdGlvbi5kYXRhLmlkO1xuICAgICAgfVxuXG4gICAgICAvLyBhbGxvdyBhbGwgb3RoZXIgYWN0aW9uc1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSk7XG4gIH07XG5cbiAgdmFyIGxpc3QgPSBjcmVhdGVWaWV3KHtcbiAgICBjcmVhdGU6IGNyZWF0ZSQ4LFxuICAgIHdyaXRlOiB3cml0ZSQ1LFxuICAgIHRhZzogJ3VsJyxcbiAgICBuYW1lOiAnbGlzdCcsXG4gICAgZGlkV3JpdGVWaWV3OiBmdW5jdGlvbiBkaWRXcml0ZVZpZXcoX3JlZjUpIHtcbiAgICAgIHZhciByb290ID0gX3JlZjUucm9vdDtcbiAgICAgIHJvb3QuY2hpbGRWaWV3c1xuICAgICAgICAuZmlsdGVyKGZ1bmN0aW9uKHZpZXcpIHtcbiAgICAgICAgICByZXR1cm4gdmlldy5tYXJrZWRGb3JSZW1vdmFsICYmIHZpZXcub3BhY2l0eSA9PT0gMCAmJiB2aWV3LnJlc3Rpbmc7XG4gICAgICAgIH0pXG4gICAgICAgIC5mb3JFYWNoKGZ1bmN0aW9uKHZpZXcpIHtcbiAgICAgICAgICB2aWV3Ll9kZXN0cm95KCk7XG4gICAgICAgICAgcm9vdC5yZW1vdmVDaGlsZFZpZXcodmlldyk7XG4gICAgICAgIH0pO1xuICAgIH0sXG4gICAgZmlsdGVyRnJhbWVBY3Rpb25zRm9yQ2hpbGQ6IGZpbHRlclNldEl0ZW1BY3Rpb25zLFxuICAgIG1peGluczoge1xuICAgICAgYXBpczogWydkcmFnQ29vcmRpbmF0ZXMnXVxuICAgIH1cbiAgfSk7XG5cbiAgdmFyIGNyZWF0ZSQ5ID0gZnVuY3Rpb24gY3JlYXRlKF9yZWYpIHtcbiAgICB2YXIgcm9vdCA9IF9yZWYucm9vdCxcbiAgICAgIHByb3BzID0gX3JlZi5wcm9wcztcbiAgICByb290LnJlZi5saXN0ID0gcm9vdC5hcHBlbmRDaGlsZFZpZXcocm9vdC5jcmVhdGVDaGlsZFZpZXcobGlzdCkpO1xuICAgIHByb3BzLmRyYWdDb29yZGluYXRlcyA9IG51bGw7XG4gICAgcHJvcHMub3ZlcmZsb3dpbmcgPSBmYWxzZTtcbiAgfTtcblxuICB2YXIgc3RvcmVEcmFnQ29vcmRpbmF0ZXMgPSBmdW5jdGlvbiBzdG9yZURyYWdDb29yZGluYXRlcyhfcmVmMikge1xuICAgIHZhciByb290ID0gX3JlZjIucm9vdCxcbiAgICAgIHByb3BzID0gX3JlZjIucHJvcHMsXG4gICAgICBhY3Rpb24gPSBfcmVmMi5hY3Rpb247XG4gICAgaWYgKCFyb290LnF1ZXJ5KCdHRVRfSVRFTV9JTlNFUlRfTE9DQVRJT05fRlJFRURPTScpKSByZXR1cm47XG4gICAgcHJvcHMuZHJhZ0Nvb3JkaW5hdGVzID0ge1xuICAgICAgbGVmdDogYWN0aW9uLnBvc2l0aW9uLnNjb3BlTGVmdCAtIHJvb3QucmVmLmxpc3QucmVjdC5lbGVtZW50LmxlZnQsXG4gICAgICB0b3A6XG4gICAgICAgIGFjdGlvbi5wb3NpdGlvbi5zY29wZVRvcCAtXG4gICAgICAgIChyb290LnJlY3Qub3V0ZXIudG9wICtcbiAgICAgICAgICByb290LnJlY3QuZWxlbWVudC5tYXJnaW5Ub3AgK1xuICAgICAgICAgIHJvb3QucmVjdC5lbGVtZW50LnNjcm9sbFRvcClcbiAgICB9O1xuICB9O1xuXG4gIHZhciBjbGVhckRyYWdDb29yZGluYXRlcyA9IGZ1bmN0aW9uIGNsZWFyRHJhZ0Nvb3JkaW5hdGVzKF9yZWYzKSB7XG4gICAgdmFyIHByb3BzID0gX3JlZjMucHJvcHM7XG4gICAgcHJvcHMuZHJhZ0Nvb3JkaW5hdGVzID0gbnVsbDtcbiAgfTtcblxuICB2YXIgcm91dGUkMyA9IGNyZWF0ZVJvdXRlKHtcbiAgICBESURfRFJBRzogc3RvcmVEcmFnQ29vcmRpbmF0ZXMsXG4gICAgRElEX0VORF9EUkFHOiBjbGVhckRyYWdDb29yZGluYXRlc1xuICB9KTtcblxuICB2YXIgd3JpdGUkNiA9IGZ1bmN0aW9uIHdyaXRlKF9yZWY0KSB7XG4gICAgdmFyIHJvb3QgPSBfcmVmNC5yb290LFxuICAgICAgcHJvcHMgPSBfcmVmNC5wcm9wcyxcbiAgICAgIGFjdGlvbnMgPSBfcmVmNC5hY3Rpb25zO1xuXG4gICAgLy8gcm91dGUgYWN0aW9uc1xuICAgIHJvdXRlJDMoeyByb290OiByb290LCBwcm9wczogcHJvcHMsIGFjdGlvbnM6IGFjdGlvbnMgfSk7XG5cbiAgICAvLyBjdXJyZW50IGRyYWcgcG9zaXRpb25cbiAgICByb290LnJlZi5saXN0LmRyYWdDb29yZGluYXRlcyA9IHByb3BzLmRyYWdDb29yZGluYXRlcztcblxuICAgIC8vIGlmIGN1cnJlbnRseSBvdmVyZmxvd2luZyBidXQgbm8gbG9uZ2VyIHJlY2VpdmVkIG92ZXJmbG93XG4gICAgaWYgKHByb3BzLm92ZXJmbG93aW5nICYmICFwcm9wcy5vdmVyZmxvdykge1xuICAgICAgcHJvcHMub3ZlcmZsb3dpbmcgPSBmYWxzZTtcblxuICAgICAgLy8gcmVzZXQgb3ZlcmZsb3cgc3RhdGVcbiAgICAgIHJvb3QuZWxlbWVudC5kYXRhc2V0LnN0YXRlID0gJyc7XG4gICAgICByb290LmhlaWdodCA9IG51bGw7XG4gICAgfVxuXG4gICAgLy8gaWYgaXMgbm90IG92ZXJmbG93aW5nIGN1cnJlbnRseSBidXQgZG9lcyByZWNlaXZlIG92ZXJmbG93IHZhbHVlXG4gICAgaWYgKHByb3BzLm92ZXJmbG93KSB7XG4gICAgICB2YXIgbmV3SGVpZ2h0ID0gTWF0aC5yb3VuZChwcm9wcy5vdmVyZmxvdyk7XG4gICAgICBpZiAobmV3SGVpZ2h0ICE9PSByb290LmhlaWdodCkge1xuICAgICAgICBwcm9wcy5vdmVyZmxvd2luZyA9IHRydWU7XG4gICAgICAgIHJvb3QuZWxlbWVudC5kYXRhc2V0LnN0YXRlID0gJ292ZXJmbG93JztcbiAgICAgICAgcm9vdC5oZWlnaHQgPSBuZXdIZWlnaHQ7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIHZhciBsaXN0U2Nyb2xsZXIgPSBjcmVhdGVWaWV3KHtcbiAgICBjcmVhdGU6IGNyZWF0ZSQ5LFxuICAgIHdyaXRlOiB3cml0ZSQ2LFxuICAgIG5hbWU6ICdsaXN0LXNjcm9sbGVyJyxcbiAgICBtaXhpbnM6IHtcbiAgICAgIGFwaXM6IFsnb3ZlcmZsb3cnLCAnZHJhZ0Nvb3JkaW5hdGVzJ10sXG4gICAgICBzdHlsZXM6IFsnaGVpZ2h0JywgJ3RyYW5zbGF0ZVknXSxcbiAgICAgIGFuaW1hdGlvbnM6IHtcbiAgICAgICAgdHJhbnNsYXRlWTogJ3NwcmluZydcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuXG4gIHZhciBhdHRyVG9nZ2xlID0gZnVuY3Rpb24gYXR0clRvZ2dsZShlbGVtZW50LCBuYW1lLCBzdGF0ZSkge1xuICAgIHZhciBlbmFibGVkVmFsdWUgPVxuICAgICAgYXJndW1lbnRzLmxlbmd0aCA+IDMgJiYgYXJndW1lbnRzWzNdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbM10gOiAnJztcbiAgICBpZiAoc3RhdGUpIHtcbiAgICAgIGF0dHIoZWxlbWVudCwgbmFtZSwgZW5hYmxlZFZhbHVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUobmFtZSk7XG4gICAgfVxuICB9O1xuXG4gIHZhciByZXNldEZpbGVJbnB1dCA9IGZ1bmN0aW9uIHJlc2V0RmlsZUlucHV0KGlucHV0KSB7XG4gICAgLy8gbm8gdmFsdWUsIG5vIG5lZWQgdG8gcmVzZXRcbiAgICBpZiAoIWlucHV0IHx8IGlucHV0LnZhbHVlID09PSAnJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRyeSB7XG4gICAgICAvLyBmb3IgbW9kZXJuIGJyb3dzZXJzXG4gICAgICBpbnB1dC52YWx1ZSA9ICcnO1xuICAgIH0gY2F0Y2ggKGVycikge31cblxuICAgIC8vIGZvciBJRTEwXG4gICAgaWYgKGlucHV0LnZhbHVlKSB7XG4gICAgICAvLyBxdWlja2x5IGFwcGVuZCBpbnB1dCB0byB0ZW1wIGZvcm0gYW5kIHJlc2V0IGZvcm1cbiAgICAgIHZhciBmb3JtID0gY3JlYXRlRWxlbWVudCQxKCdmb3JtJyk7XG4gICAgICB2YXIgcGFyZW50Tm9kZSA9IGlucHV0LnBhcmVudE5vZGU7XG4gICAgICB2YXIgcmVmID0gaW5wdXQubmV4dFNpYmxpbmc7XG4gICAgICBmb3JtLmFwcGVuZENoaWxkKGlucHV0KTtcbiAgICAgIGZvcm0ucmVzZXQoKTtcblxuICAgICAgLy8gcmUtaW5qZWN0IGlucHV0IHdoZXJlIGl0IG9yaWdpbmFsbHkgd2FzXG4gICAgICBpZiAocmVmKSB7XG4gICAgICAgIHBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGlucHV0LCByZWYpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcGFyZW50Tm9kZS5hcHBlbmRDaGlsZChpbnB1dCk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIHZhciBjcmVhdGUkYSA9IGZ1bmN0aW9uIGNyZWF0ZShfcmVmKSB7XG4gICAgdmFyIHJvb3QgPSBfcmVmLnJvb3QsXG4gICAgICBwcm9wcyA9IF9yZWYucHJvcHM7XG5cbiAgICAvLyBzZXQgaWQgc28gY2FuIGJlIHJlZmVyZW5jZWQgZnJvbSBvdXRzaWRlIGxhYmVsc1xuICAgIHJvb3QuZWxlbWVudC5pZCA9ICdmaWxlcG9uZC0tYnJvd3Nlci0nICsgcHJvcHMuaWQ7XG5cbiAgICAvLyBzZXQgbmFtZSBvZiBlbGVtZW50IChpcyByZW1vdmVkIHdoZW4gYSB2YWx1ZSBpcyBzZXQpXG4gICAgYXR0cihyb290LmVsZW1lbnQsICduYW1lJywgcm9vdC5xdWVyeSgnR0VUX05BTUUnKSk7XG5cbiAgICAvLyB3ZSBoYXZlIHRvIGxpbmsgdGhpcyBlbGVtZW50IHRvIHRoZSBzdGF0dXMgZWxlbWVudFxuICAgIGF0dHIocm9vdC5lbGVtZW50LCAnYXJpYS1jb250cm9scycsICdmaWxlcG9uZC0tYXNzaXN0YW50LScgKyBwcm9wcy5pZCk7XG5cbiAgICAvLyBzZXQgbGFiZWwsIHdlIHVzZSBsYWJlbGxlZCBieSBhcyBvdGhlcndpc2UgdGhlIHNjcmVlbnJlYWRlciBkb2VzIG5vdCByZWFkIHRoZSBcImJyb3dzZVwiIHRleHQgaW4gdGhlIGxhYmVsIChhcyBpdCBoYXMgdGFiaW5kZXg6IDApXG4gICAgYXR0cihyb290LmVsZW1lbnQsICdhcmlhLWxhYmVsbGVkYnknLCAnZmlsZXBvbmQtLWRyb3AtbGFiZWwtJyArIHByb3BzLmlkKTtcblxuICAgIC8vIGhhbmRsZSBjaGFuZ2VzIHRvIHRoZSBpbnB1dCBmaWVsZFxuICAgIHJvb3QucmVmLmhhbmRsZUNoYW5nZSA9IGZ1bmN0aW9uKGUpIHtcbiAgICAgIGlmICghcm9vdC5lbGVtZW50LnZhbHVlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgLy8gZXh0cmFjdCBmaWxlc1xuICAgICAgdmFyIGZpbGVzID0gQXJyYXkuZnJvbShyb290LmVsZW1lbnQuZmlsZXMpO1xuXG4gICAgICAvLyB3ZSBhZGQgYSBsaXR0bGUgZGVsYXkgc28gdGhlIE9TIGZpbGUgc2VsZWN0IHdpbmRvdyBjYW4gbW92ZSBvdXQgb2YgdGhlIHdheSBiZWZvcmUgd2UgYWRkIG91ciBmaWxlXG4gICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAvLyBsb2FkIGZpbGVzXG4gICAgICAgIHByb3BzLm9ubG9hZChmaWxlcyk7XG5cbiAgICAgICAgLy8gcmVzZXQgaW5wdXQsIGl0J3MganVzdCBmb3IgZXhwb3NpbmcgYSBtZXRob2QgdG8gZHJvcCBmaWxlcywgc2hvdWxkIG5vdCByZXRhaW4gYW55IHN0YXRlXG4gICAgICAgIHJlc2V0RmlsZUlucHV0KHJvb3QuZWxlbWVudCk7XG4gICAgICB9LCAyNTApO1xuICAgIH07XG4gICAgcm9vdC5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHJvb3QucmVmLmhhbmRsZUNoYW5nZSk7XG4gIH07XG5cbiAgdmFyIHNldEFjY2VwdGVkRmlsZVR5cGVzID0gZnVuY3Rpb24gc2V0QWNjZXB0ZWRGaWxlVHlwZXMoX3JlZjIpIHtcbiAgICB2YXIgcm9vdCA9IF9yZWYyLnJvb3QsXG4gICAgICBhY3Rpb24gPSBfcmVmMi5hY3Rpb247XG4gICAgYXR0clRvZ2dsZShcbiAgICAgIHJvb3QuZWxlbWVudCxcbiAgICAgICdhY2NlcHQnLFxuICAgICAgISFhY3Rpb24udmFsdWUsXG4gICAgICBhY3Rpb24udmFsdWUgPyBhY3Rpb24udmFsdWUuam9pbignLCcpIDogJydcbiAgICApO1xuICB9O1xuXG4gIHZhciB0b2dnbGVBbGxvd011bHRpcGxlID0gZnVuY3Rpb24gdG9nZ2xlQWxsb3dNdWx0aXBsZShfcmVmMykge1xuICAgIHZhciByb290ID0gX3JlZjMucm9vdCxcbiAgICAgIGFjdGlvbiA9IF9yZWYzLmFjdGlvbjtcbiAgICBhdHRyVG9nZ2xlKHJvb3QuZWxlbWVudCwgJ211bHRpcGxlJywgYWN0aW9uLnZhbHVlKTtcbiAgfTtcblxuICB2YXIgdG9nZ2xlRGlzYWJsZWQgPSBmdW5jdGlvbiB0b2dnbGVEaXNhYmxlZChfcmVmNCkge1xuICAgIHZhciByb290ID0gX3JlZjQucm9vdCxcbiAgICAgIGFjdGlvbiA9IF9yZWY0LmFjdGlvbjtcbiAgICB2YXIgaXNEaXNhYmxlZCA9IHJvb3QucXVlcnkoJ0dFVF9ESVNBQkxFRCcpO1xuICAgIHZhciBkb2VzQWxsb3dCcm93c2UgPSByb290LnF1ZXJ5KCdHRVRfQUxMT1dfQlJPV1NFJyk7XG4gICAgdmFyIGRpc2FibGVGaWVsZCA9IGlzRGlzYWJsZWQgfHwgIWRvZXNBbGxvd0Jyb3dzZTtcbiAgICBhdHRyVG9nZ2xlKHJvb3QuZWxlbWVudCwgJ2Rpc2FibGVkJywgZGlzYWJsZUZpZWxkKTtcbiAgfTtcblxuICB2YXIgdG9nZ2xlUmVxdWlyZWQgPSBmdW5jdGlvbiB0b2dnbGVSZXF1aXJlZChfcmVmNSkge1xuICAgIHZhciByb290ID0gX3JlZjUucm9vdCxcbiAgICAgIGFjdGlvbiA9IF9yZWY1LmFjdGlvbjtcbiAgICAvLyB3YW50IHRvIHJlbW92ZSByZXF1aXJlZCwgYWx3YXlzIHBvc3NpYmxlXG4gICAgaWYgKCFhY3Rpb24udmFsdWUpIHtcbiAgICAgIGF0dHJUb2dnbGUocm9vdC5lbGVtZW50LCAncmVxdWlyZWQnLCBmYWxzZSk7XG4gICAgfVxuICAgIC8vIGlmIHdhbnQgdG8gbWFrZSByZXF1aXJlZCwgb25seSBwb3NzaWJsZSB3aGVuIHplcm8gaXRlbXNcbiAgICBlbHNlIGlmIChyb290LnF1ZXJ5KCdHRVRfVE9UQUxfSVRFTVMnKSA9PT0gMCkge1xuICAgICAgYXR0clRvZ2dsZShyb290LmVsZW1lbnQsICdyZXF1aXJlZCcsIHRydWUpO1xuICAgIH1cbiAgfTtcblxuICB2YXIgc2V0Q2FwdHVyZU1ldGhvZCA9IGZ1bmN0aW9uIHNldENhcHR1cmVNZXRob2QoX3JlZjYpIHtcbiAgICB2YXIgcm9vdCA9IF9yZWY2LnJvb3QsXG4gICAgICBhY3Rpb24gPSBfcmVmNi5hY3Rpb247XG4gICAgYXR0clRvZ2dsZShcbiAgICAgIHJvb3QuZWxlbWVudCxcbiAgICAgICdjYXB0dXJlJyxcbiAgICAgICEhYWN0aW9uLnZhbHVlLFxuICAgICAgYWN0aW9uLnZhbHVlID09PSB0cnVlID8gJycgOiBhY3Rpb24udmFsdWVcbiAgICApO1xuICB9O1xuXG4gIHZhciB1cGRhdGVSZXF1aXJlZFN0YXR1cyA9IGZ1bmN0aW9uIHVwZGF0ZVJlcXVpcmVkU3RhdHVzKF9yZWY3KSB7XG4gICAgdmFyIHJvb3QgPSBfcmVmNy5yb290O1xuICAgIHZhciBlbGVtZW50ID0gcm9vdC5lbGVtZW50O1xuICAgIC8vIGFsd2F5cyByZW1vdmUgdGhlIHJlcXVpcmVkIGF0dHJpYnV0ZSB3aGVuIG1vcmUgdGhhbiB6ZXJvIGl0ZW1zXG4gICAgaWYgKHJvb3QucXVlcnkoJ0dFVF9UT1RBTF9JVEVNUycpID4gMCkge1xuICAgICAgYXR0clRvZ2dsZShlbGVtZW50LCAncmVxdWlyZWQnLCBmYWxzZSk7XG4gICAgICBhdHRyVG9nZ2xlKGVsZW1lbnQsICduYW1lJywgZmFsc2UpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBhZGQgbmFtZSBhdHRyaWJ1dGVcbiAgICAgIGF0dHJUb2dnbGUoZWxlbWVudCwgJ25hbWUnLCB0cnVlLCByb290LnF1ZXJ5KCdHRVRfTkFNRScpKTtcblxuICAgICAgLy8gcmVtb3ZlIGFueSB2YWxpZGF0aW9uIG1lc3NhZ2VzXG4gICAgICB2YXIgc2hvdWxkQ2hlY2tWYWxpZGl0eSA9IHJvb3QucXVlcnkoJ0dFVF9DSEVDS19WQUxJRElUWScpO1xuICAgICAgaWYgKHNob3VsZENoZWNrVmFsaWRpdHkpIHtcbiAgICAgICAgZWxlbWVudC5zZXRDdXN0b21WYWxpZGl0eSgnJyk7XG4gICAgICB9XG5cbiAgICAgIC8vIHdlIG9ubHkgYWRkIHJlcXVpcmVkIGlmIHRoZSBmaWVsZCBoYXMgYmVlbiBkZWVtZWQgcmVxdWlyZWRcbiAgICAgIGlmIChyb290LnF1ZXJ5KCdHRVRfUkVRVUlSRUQnKSkge1xuICAgICAgICBhdHRyVG9nZ2xlKGVsZW1lbnQsICdyZXF1aXJlZCcsIHRydWUpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICB2YXIgdXBkYXRlRmllbGRWYWxpZGl0eVN0YXR1cyA9IGZ1bmN0aW9uIHVwZGF0ZUZpZWxkVmFsaWRpdHlTdGF0dXMoX3JlZjgpIHtcbiAgICB2YXIgcm9vdCA9IF9yZWY4LnJvb3Q7XG4gICAgdmFyIHNob3VsZENoZWNrVmFsaWRpdHkgPSByb290LnF1ZXJ5KCdHRVRfQ0hFQ0tfVkFMSURJVFknKTtcbiAgICBpZiAoIXNob3VsZENoZWNrVmFsaWRpdHkpIHJldHVybjtcbiAgICByb290LmVsZW1lbnQuc2V0Q3VzdG9tVmFsaWRpdHkocm9vdC5xdWVyeSgnR0VUX0xBQkVMX0lOVkFMSURfRklFTEQnKSk7XG4gIH07XG5cbiAgdmFyIGJyb3dzZXIgPSBjcmVhdGVWaWV3KHtcbiAgICB0YWc6ICdpbnB1dCcsXG4gICAgbmFtZTogJ2Jyb3dzZXInLFxuICAgIGlnbm9yZVJlY3Q6IHRydWUsXG4gICAgaWdub3JlUmVjdFVwZGF0ZTogdHJ1ZSxcbiAgICBhdHRyaWJ1dGVzOiB7XG4gICAgICB0eXBlOiAnZmlsZSdcbiAgICB9LFxuXG4gICAgY3JlYXRlOiBjcmVhdGUkYSxcbiAgICBkZXN0cm95OiBmdW5jdGlvbiBkZXN0cm95KF9yZWY5KSB7XG4gICAgICB2YXIgcm9vdCA9IF9yZWY5LnJvb3Q7XG4gICAgICByb290LmVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgcm9vdC5yZWYuaGFuZGxlQ2hhbmdlKTtcbiAgICB9LFxuICAgIHdyaXRlOiBjcmVhdGVSb3V0ZSh7XG4gICAgICBESURfTE9BRF9JVEVNOiB1cGRhdGVSZXF1aXJlZFN0YXR1cyxcbiAgICAgIERJRF9SRU1PVkVfSVRFTTogdXBkYXRlUmVxdWlyZWRTdGF0dXMsXG4gICAgICBESURfVEhST1dfSVRFTV9JTlZBTElEOiB1cGRhdGVGaWVsZFZhbGlkaXR5U3RhdHVzLFxuXG4gICAgICBESURfU0VUX0RJU0FCTEVEOiB0b2dnbGVEaXNhYmxlZCxcbiAgICAgIERJRF9TRVRfQUxMT1dfQlJPV1NFOiB0b2dnbGVEaXNhYmxlZCxcbiAgICAgIERJRF9TRVRfQUxMT1dfTVVMVElQTEU6IHRvZ2dsZUFsbG93TXVsdGlwbGUsXG4gICAgICBESURfU0VUX0FDQ0VQVEVEX0ZJTEVfVFlQRVM6IHNldEFjY2VwdGVkRmlsZVR5cGVzLFxuICAgICAgRElEX1NFVF9DQVBUVVJFX01FVEhPRDogc2V0Q2FwdHVyZU1ldGhvZCxcbiAgICAgIERJRF9TRVRfUkVRVUlSRUQ6IHRvZ2dsZVJlcXVpcmVkXG4gICAgfSlcbiAgfSk7XG5cbiAgdmFyIEtleSA9IHtcbiAgICBFTlRFUjogMTMsXG4gICAgU1BBQ0U6IDMyXG4gIH07XG5cbiAgdmFyIGNyZWF0ZSRiID0gZnVuY3Rpb24gY3JlYXRlKF9yZWYpIHtcbiAgICB2YXIgcm9vdCA9IF9yZWYucm9vdCxcbiAgICAgIHByb3BzID0gX3JlZi5wcm9wcztcblxuICAgIC8vIGNyZWF0ZSB0aGUgbGFiZWwgYW5kIGxpbmsgaXQgdG8gdGhlIGZpbGUgYnJvd3NlclxuICAgIHZhciBsYWJlbCA9IGNyZWF0ZUVsZW1lbnQkMSgnbGFiZWwnKTtcbiAgICBhdHRyKGxhYmVsLCAnZm9yJywgJ2ZpbGVwb25kLS1icm93c2VyLScgKyBwcm9wcy5pZCk7XG5cbiAgICAvLyB1c2UgZm9yIGxhYmVsaW5nIGZpbGUgaW5wdXQgKGFyaWEtbGFiZWxsZWRieSBvbiBmaWxlIGlucHV0KVxuICAgIGF0dHIobGFiZWwsICdpZCcsICdmaWxlcG9uZC0tZHJvcC1sYWJlbC0nICsgcHJvcHMuaWQpO1xuXG4gICAgLy8gaGlkZSB0aGUgbGFiZWwgZm9yIHNjcmVlbnJlYWRlcnMsIHRoZSBpbnB1dCBlbGVtZW50IHdpbGwgcmVhZCB0aGUgY29udGVudHMgb2YgdGhlIGxhYmVsIHdoZW4gaXQncyBmb2N1c3NlZC4gSWYgd2UgZG9uJ3Qgc2V0IGFyaWEtaGlkZGVuIHRoZSBzY3JlZW5yZWFkZXIgd2lsbCBhbHNvIG5hdmlnYXRlIHRoZSBjb250ZW50cyBvZiB0aGUgbGFiZWwgc2VwYXJhdGVseSBmcm9tIHRoZSBpbnB1dC5cbiAgICBhdHRyKGxhYmVsLCAnYXJpYS1oaWRkZW4nLCAndHJ1ZScpO1xuXG4gICAgLy8gaGFuZGxlIGtleXNcbiAgICBsYWJlbC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZnVuY3Rpb24oZSkge1xuICAgICAgdmFyIGlzQWN0aXZhdGlvbktleSA9IGUua2V5Q29kZSA9PT0gS2V5LkVOVEVSIHx8IGUua2V5Q29kZSA9PT0gS2V5LlNQQUNFO1xuICAgICAgaWYgKCFpc0FjdGl2YXRpb25LZXkpIHJldHVybjtcbiAgICAgIC8vIHN0b3BzIGZyb20gdHJpZ2dlcmluZyB0aGUgZWxlbWVudCBhIHNlY29uZCB0aW1lXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgIC8vIGNsaWNrIGxpbmsgKHdpbGwgdGhlbiBpbiB0dXJuIGFjdGl2YXRlIGZpbGUgaW5wdXQpXG4gICAgICByb290LnJlZi5sYWJlbC5jbGljaygpO1xuICAgIH0pO1xuXG4gICAgcm9vdC5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgICAgdmFyIGlzTGFiZWxDbGljayA9IGUudGFyZ2V0ID09PSBsYWJlbCB8fCBsYWJlbC5jb250YWlucyhlLnRhcmdldCk7XG5cbiAgICAgIC8vIGRvbid0IHdhbnQgdG8gY2xpY2sgdHdpY2VcbiAgICAgIGlmIChpc0xhYmVsQ2xpY2spIHJldHVybjtcblxuICAgICAgLy8gY2xpY2sgbGluayAod2lsbCB0aGVuIGluIHR1cm4gYWN0aXZhdGUgZmlsZSBpbnB1dClcbiAgICAgIHJvb3QucmVmLmxhYmVsLmNsaWNrKCk7XG4gICAgfSk7XG5cbiAgICAvLyB1cGRhdGVcbiAgICB1cGRhdGVMYWJlbFZhbHVlKGxhYmVsLCBwcm9wcy5jYXB0aW9uKTtcblxuICAgIC8vIGFkZCFcbiAgICByb290LmFwcGVuZENoaWxkKGxhYmVsKTtcbiAgICByb290LnJlZi5sYWJlbCA9IGxhYmVsO1xuICB9O1xuXG4gIHZhciB1cGRhdGVMYWJlbFZhbHVlID0gZnVuY3Rpb24gdXBkYXRlTGFiZWxWYWx1ZShsYWJlbCwgdmFsdWUpIHtcbiAgICBsYWJlbC5pbm5lckhUTUwgPSB2YWx1ZTtcbiAgICB2YXIgY2xpY2thYmxlID0gbGFiZWwucXVlcnlTZWxlY3RvcignLmZpbGVwb25kLS1sYWJlbC1hY3Rpb24nKTtcbiAgICBpZiAoY2xpY2thYmxlKSB7XG4gICAgICBhdHRyKGNsaWNrYWJsZSwgJ3RhYmluZGV4JywgJzAnKTtcbiAgICB9XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9O1xuXG4gIHZhciBkcm9wTGFiZWwgPSBjcmVhdGVWaWV3KHtcbiAgICBuYW1lOiAnZHJvcC1sYWJlbCcsXG4gICAgaWdub3JlUmVjdDogdHJ1ZSxcbiAgICBjcmVhdGU6IGNyZWF0ZSRiLFxuICAgIHdyaXRlOiBjcmVhdGVSb3V0ZSh7XG4gICAgICBESURfU0VUX0xBQkVMX0lETEU6IGZ1bmN0aW9uIERJRF9TRVRfTEFCRUxfSURMRShfcmVmMikge1xuICAgICAgICB2YXIgcm9vdCA9IF9yZWYyLnJvb3QsXG4gICAgICAgICAgYWN0aW9uID0gX3JlZjIuYWN0aW9uO1xuICAgICAgICB1cGRhdGVMYWJlbFZhbHVlKHJvb3QucmVmLmxhYmVsLCBhY3Rpb24udmFsdWUpO1xuICAgICAgfVxuICAgIH0pLFxuXG4gICAgbWl4aW5zOiB7XG4gICAgICBzdHlsZXM6IFsnb3BhY2l0eScsICd0cmFuc2xhdGVYJywgJ3RyYW5zbGF0ZVknXSxcbiAgICAgIGFuaW1hdGlvbnM6IHtcbiAgICAgICAgb3BhY2l0eTogeyB0eXBlOiAndHdlZW4nLCBkdXJhdGlvbjogMTUwIH0sXG4gICAgICAgIHRyYW5zbGF0ZVg6ICdzcHJpbmcnLFxuICAgICAgICB0cmFuc2xhdGVZOiAnc3ByaW5nJ1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG5cbiAgdmFyIGJsb2IgPSBjcmVhdGVWaWV3KHtcbiAgICBuYW1lOiAnZHJpcC1ibG9iJyxcbiAgICBpZ25vcmVSZWN0OiB0cnVlLFxuICAgIG1peGluczoge1xuICAgICAgc3R5bGVzOiBbJ3RyYW5zbGF0ZVgnLCAndHJhbnNsYXRlWScsICdzY2FsZVgnLCAnc2NhbGVZJywgJ29wYWNpdHknXSxcbiAgICAgIGFuaW1hdGlvbnM6IHtcbiAgICAgICAgc2NhbGVYOiAnc3ByaW5nJyxcbiAgICAgICAgc2NhbGVZOiAnc3ByaW5nJyxcbiAgICAgICAgdHJhbnNsYXRlWDogJ3NwcmluZycsXG4gICAgICAgIHRyYW5zbGF0ZVk6ICdzcHJpbmcnLFxuICAgICAgICBvcGFjaXR5OiB7IHR5cGU6ICd0d2VlbicsIGR1cmF0aW9uOiAyNTAgfVxuICAgICAgfVxuICAgIH1cbiAgfSk7XG5cbiAgdmFyIGFkZEJsb2IgPSBmdW5jdGlvbiBhZGRCbG9iKF9yZWYpIHtcbiAgICB2YXIgcm9vdCA9IF9yZWYucm9vdDtcbiAgICB2YXIgY2VudGVyWCA9IHJvb3QucmVjdC5lbGVtZW50LndpZHRoICogMC41O1xuICAgIHZhciBjZW50ZXJZID0gcm9vdC5yZWN0LmVsZW1lbnQuaGVpZ2h0ICogMC41O1xuXG4gICAgcm9vdC5yZWYuYmxvYiA9IHJvb3QuYXBwZW5kQ2hpbGRWaWV3KFxuICAgICAgcm9vdC5jcmVhdGVDaGlsZFZpZXcoYmxvYiwge1xuICAgICAgICBvcGFjaXR5OiAwLFxuICAgICAgICBzY2FsZVg6IDIuNSxcbiAgICAgICAgc2NhbGVZOiAyLjUsXG4gICAgICAgIHRyYW5zbGF0ZVg6IGNlbnRlclgsXG4gICAgICAgIHRyYW5zbGF0ZVk6IGNlbnRlcllcbiAgICAgIH0pXG4gICAgKTtcbiAgfTtcblxuICB2YXIgbW92ZUJsb2IgPSBmdW5jdGlvbiBtb3ZlQmxvYihfcmVmMikge1xuICAgIHZhciByb290ID0gX3JlZjIucm9vdCxcbiAgICAgIGFjdGlvbiA9IF9yZWYyLmFjdGlvbjtcbiAgICBpZiAoIXJvb3QucmVmLmJsb2IpIHtcbiAgICAgIGFkZEJsb2IoeyByb290OiByb290IH0pO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHJvb3QucmVmLmJsb2IudHJhbnNsYXRlWCA9IGFjdGlvbi5wb3NpdGlvbi5zY29wZUxlZnQ7XG4gICAgcm9vdC5yZWYuYmxvYi50cmFuc2xhdGVZID0gYWN0aW9uLnBvc2l0aW9uLnNjb3BlVG9wO1xuICAgIHJvb3QucmVmLmJsb2Iuc2NhbGVYID0gMTtcbiAgICByb290LnJlZi5ibG9iLnNjYWxlWSA9IDE7XG4gICAgcm9vdC5yZWYuYmxvYi5vcGFjaXR5ID0gMTtcbiAgfTtcblxuICB2YXIgaGlkZUJsb2IgPSBmdW5jdGlvbiBoaWRlQmxvYihfcmVmMykge1xuICAgIHZhciByb290ID0gX3JlZjMucm9vdDtcbiAgICBpZiAoIXJvb3QucmVmLmJsb2IpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgcm9vdC5yZWYuYmxvYi5vcGFjaXR5ID0gMDtcbiAgfTtcblxuICB2YXIgZXhwbG9kZUJsb2IgPSBmdW5jdGlvbiBleHBsb2RlQmxvYihfcmVmNCkge1xuICAgIHZhciByb290ID0gX3JlZjQucm9vdDtcbiAgICBpZiAoIXJvb3QucmVmLmJsb2IpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgcm9vdC5yZWYuYmxvYi5zY2FsZVggPSAyLjU7XG4gICAgcm9vdC5yZWYuYmxvYi5zY2FsZVkgPSAyLjU7XG4gICAgcm9vdC5yZWYuYmxvYi5vcGFjaXR5ID0gMDtcbiAgfTtcblxuICB2YXIgd3JpdGUkNyA9IGZ1bmN0aW9uIHdyaXRlKF9yZWY1KSB7XG4gICAgdmFyIHJvb3QgPSBfcmVmNS5yb290LFxuICAgICAgcHJvcHMgPSBfcmVmNS5wcm9wcyxcbiAgICAgIGFjdGlvbnMgPSBfcmVmNS5hY3Rpb25zO1xuICAgIHJvdXRlJDQoeyByb290OiByb290LCBwcm9wczogcHJvcHMsIGFjdGlvbnM6IGFjdGlvbnMgfSk7XG4gICAgdmFyIGJsb2IgPSByb290LnJlZi5ibG9iO1xuXG4gICAgaWYgKGFjdGlvbnMubGVuZ3RoID09PSAwICYmIGJsb2IgJiYgYmxvYi5vcGFjaXR5ID09PSAwKSB7XG4gICAgICByb290LnJlbW92ZUNoaWxkVmlldyhibG9iKTtcbiAgICAgIHJvb3QucmVmLmJsb2IgPSBudWxsO1xuICAgIH1cbiAgfTtcblxuICB2YXIgcm91dGUkNCA9IGNyZWF0ZVJvdXRlKHtcbiAgICBESURfRFJBRzogbW92ZUJsb2IsXG4gICAgRElEX0RST1A6IGV4cGxvZGVCbG9iLFxuICAgIERJRF9FTkRfRFJBRzogaGlkZUJsb2JcbiAgfSk7XG5cbiAgdmFyIGRyaXAgPSBjcmVhdGVWaWV3KHtcbiAgICBpZ25vcmVSZWN0OiB0cnVlLFxuICAgIGlnbm9yZVJlY3RVcGRhdGU6IHRydWUsXG4gICAgbmFtZTogJ2RyaXAnLFxuICAgIHdyaXRlOiB3cml0ZSQ3XG4gIH0pO1xuXG4gIHZhciBnZXRSb290Tm9kZSA9IGZ1bmN0aW9uIGdldFJvb3ROb2RlKGVsZW1lbnQpIHtcbiAgICByZXR1cm4gJ2dldFJvb3ROb2RlJyBpbiBlbGVtZW50ID8gZWxlbWVudC5nZXRSb290Tm9kZSgpIDogZG9jdW1lbnQ7XG4gIH07XG5cbiAgdmFyIGltYWdlcyA9IFsnanBnJywgJ2pwZWcnLCAncG5nJywgJ2dpZicsICdibXAnLCAnd2VicCcsICdzdmcnLCAndGlmZiddO1xuICB2YXIgdGV4dCQxID0gWydjc3MnLCAnY3N2JywgJ2h0bWwnLCAndHh0J107XG4gIHZhciBhcHBzID0gWydydGYnLCAncGRmJywgJ2pzb24nXTtcbiAgdmFyIG1hcCA9IHtcbiAgICB6aXA6ICd6aXB8Y29tcHJlc3NlZCcsXG4gICAgZXB1YjogJ2FwcGxpY2F0aW9uL2VwdWIremlwJ1xuICB9O1xuXG4gIHZhciBndWVzc3RpbWF0ZU1pbWVUeXBlID0gZnVuY3Rpb24gZ3Vlc3N0aW1hdGVNaW1lVHlwZSgpIHtcbiAgICB2YXIgZXh0ZW5zaW9uID1cbiAgICAgIGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDogJyc7XG4gICAgZXh0ZW5zaW9uID0gZXh0ZW5zaW9uLnRvTG93ZXJDYXNlKCk7XG4gICAgaWYgKGltYWdlcy5pbmNsdWRlcyhleHRlbnNpb24pKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICAnaW1hZ2UvJyArXG4gICAgICAgIChleHRlbnNpb24gPT09ICdqcGcnXG4gICAgICAgICAgPyAnanBlZydcbiAgICAgICAgICA6IGV4dGVuc2lvbiA9PT0gJ3N2ZydcbiAgICAgICAgICA/ICdzdmcreG1sJ1xuICAgICAgICAgIDogZXh0ZW5zaW9uKVxuICAgICAgKTtcbiAgICB9XG4gICAgaWYgKHRleHQkMS5pbmNsdWRlcyhleHRlbnNpb24pKSB7XG4gICAgICByZXR1cm4gJ3RleHQvJyArIGV4dGVuc2lvbjtcbiAgICB9XG4gICAgcmV0dXJuIG1hcFtleHRlbnNpb25dIHx8IG51bGw7XG4gIH07XG5cbiAgdmFyIHJlcXVlc3REYXRhVHJhbnNmZXJJdGVtcyA9IGZ1bmN0aW9uIHJlcXVlc3REYXRhVHJhbnNmZXJJdGVtcyhcbiAgICBkYXRhVHJhbnNmZXJcbiAgKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgLy8gdHJ5IHRvIGdldCBsaW5rcyBmcm9tIHRyYW5zZmVyLCBpZiBmb3VuZCwgd2UnbGwgZXhpdCBpbW1pZGlhdGVseVxuICAgICAgLy8gYXMgb25seSBvbmUgbGluayBjYW4gYmUgZHJhZ2dlZCBhdCBvbmNlXG4gICAgICB2YXIgbGlua3MgPSBnZXRMaW5rcyhkYXRhVHJhbnNmZXIpO1xuICAgICAgaWYgKGxpbmtzLmxlbmd0aCkge1xuICAgICAgICByZXNvbHZlKGxpbmtzKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICAvLyB0cnkgdG8gZ2V0IGZpbGVzIGZyb20gdGhlIHRyYW5zZmVyXG4gICAgICBnZXRGaWxlcyhkYXRhVHJhbnNmZXIpLnRoZW4ocmVzb2x2ZSk7XG4gICAgfSk7XG4gIH07XG5cbiAgLyoqXG4gICAqIEV4dHJhY3RzIGZpbGVzIGZyb20gYSBEYXRhVHJhbnNmZXIgb2JqZWN0XG4gICAqL1xuICB2YXIgZ2V0RmlsZXMgPSBmdW5jdGlvbiBnZXRGaWxlcyhkYXRhVHJhbnNmZXIpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAvLyBnZXQgdGhlIHRyYW5zZmVyIGl0ZW1zIGFzIHByb21pc2VzXG4gICAgICB2YXIgcHJvbWlzZWRGaWxlcyA9IChkYXRhVHJhbnNmZXIuaXRlbXNcbiAgICAgICAgPyBBcnJheS5mcm9tKGRhdGFUcmFuc2Zlci5pdGVtcylcbiAgICAgICAgOiBbXVxuICAgICAgKVxuICAgICAgICAvLyBvbmx5IGtlZXAgZmlsZSBzeXN0ZW0gaXRlbXMgKGZpbGVzIGFuZCBkaXJlY3RvcmllcylcbiAgICAgICAgLmZpbHRlcihmdW5jdGlvbihpdGVtKSB7XG4gICAgICAgICAgcmV0dXJuIGlzRmlsZVN5c3RlbUl0ZW0oaXRlbSk7XG4gICAgICAgIH0pXG5cbiAgICAgICAgLy8gbWFwIGVhY2ggaXRlbSB0byBwcm9taXNlXG4gICAgICAgIC5tYXAoZnVuY3Rpb24oaXRlbSkge1xuICAgICAgICAgIHJldHVybiBnZXRGaWxlc0Zyb21JdGVtKGl0ZW0pO1xuICAgICAgICB9KTtcblxuICAgICAgLy8gaWYgaXMgZW1wdHksIHNlZSBpZiB3ZSBjYW4gZXh0cmFjdCBzb21lIGluZm8gZnJvbSB0aGUgZmlsZXMgcHJvcGVydHkgYXMgYSBmYWxsYmFja1xuICAgICAgaWYgKCFwcm9taXNlZEZpbGVzLmxlbmd0aCkge1xuICAgICAgICAvLyBUT0RPOiB0ZXN0IGZvciBkaXJlY3RvcmllcyAoc2hvdWxkIG5vdCBiZSBhbGxvd2VkKVxuICAgICAgICAvLyBVc2UgRmlsZVJlYWRlciwgcHJvYmxlbSBpcyB0aGF0IHRoZSBmaWxlcyBwcm9wZXJ0eSBnZXRzIGxvc3QgaW4gdGhlIHByb2Nlc3NcblxuICAgICAgICByZXNvbHZlKGRhdGFUcmFuc2Zlci5maWxlcyA/IEFycmF5LmZyb20oZGF0YVRyYW5zZmVyLmZpbGVzKSA6IFtdKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICAvLyBkb25lIVxuICAgICAgUHJvbWlzZS5hbGwocHJvbWlzZWRGaWxlcykudGhlbihmdW5jdGlvbihyZXR1cmVuZEZpbGVHcm91cHMpIHtcbiAgICAgICAgLy8gZmxhdHRlbiBncm91cHNcbiAgICAgICAgdmFyIGZpbGVzID0gW107XG4gICAgICAgIHJldHVyZW5kRmlsZUdyb3Vwcy5mb3JFYWNoKGZ1bmN0aW9uKGdyb3VwKSB7XG4gICAgICAgICAgZmlsZXMucHVzaC5hcHBseShmaWxlcywgZ3JvdXApO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyBkb25lIChmaWx0ZXIgb3V0IGVtcHR5IGZpbGVzKSFcbiAgICAgICAgcmVzb2x2ZShcbiAgICAgICAgICBmaWxlcy5maWx0ZXIoZnVuY3Rpb24oZmlsZSkge1xuICAgICAgICAgICAgcmV0dXJuIGZpbGU7XG4gICAgICAgICAgfSlcbiAgICAgICAgKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9O1xuXG4gIHZhciBpc0ZpbGVTeXN0ZW1JdGVtID0gZnVuY3Rpb24gaXNGaWxlU3lzdGVtSXRlbShpdGVtKSB7XG4gICAgaWYgKGlzRW50cnkoaXRlbSkpIHtcbiAgICAgIHZhciBlbnRyeSA9IGdldEFzRW50cnkoaXRlbSk7XG4gICAgICBpZiAoZW50cnkpIHtcbiAgICAgICAgcmV0dXJuIGVudHJ5LmlzRmlsZSB8fCBlbnRyeS5pc0RpcmVjdG9yeTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGl0ZW0ua2luZCA9PT0gJ2ZpbGUnO1xuICB9O1xuXG4gIHZhciBnZXRGaWxlc0Zyb21JdGVtID0gZnVuY3Rpb24gZ2V0RmlsZXNGcm9tSXRlbShpdGVtKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgaWYgKGlzRGlyZWN0b3J5RW50cnkoaXRlbSkpIHtcbiAgICAgICAgZ2V0RmlsZXNJbkRpcmVjdG9yeShnZXRBc0VudHJ5KGl0ZW0pKS50aGVuKHJlc29sdmUpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHJlc29sdmUoW2l0ZW0uZ2V0QXNGaWxlKCldKTtcbiAgICB9KTtcbiAgfTtcblxuICB2YXIgZ2V0RmlsZXNJbkRpcmVjdG9yeSA9IGZ1bmN0aW9uIGdldEZpbGVzSW5EaXJlY3RvcnkoZW50cnkpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICB2YXIgZmlsZXMgPSBbXTtcblxuICAgICAgLy8gdGhlIHRvdGFsIGVudHJpZXMgdG8gcmVhZFxuICAgICAgdmFyIHRvdGFsRmlsZXNGb3VuZCA9IDA7XG5cbiAgICAgIC8vIHRoZSByZWN1cnNpdmUgZnVuY3Rpb25cbiAgICAgIHZhciByZWFkRW50cmllcyA9IGZ1bmN0aW9uIHJlYWRFbnRyaWVzKGRpckVudHJ5KSB7XG4gICAgICAgIHZhciBkaXJlY3RvcnlSZWFkZXIgPSBkaXJFbnRyeS5jcmVhdGVSZWFkZXIoKTtcbiAgICAgICAgZGlyZWN0b3J5UmVhZGVyLnJlYWRFbnRyaWVzKGZ1bmN0aW9uKGVudHJpZXMpIHtcbiAgICAgICAgICBlbnRyaWVzLmZvckVhY2goZnVuY3Rpb24oZW50cnkpIHtcbiAgICAgICAgICAgIC8vIHJlY3Vyc2l2ZWx5IHJlYWQgbW9yZSBkaXJlY3Rvcmllc1xuICAgICAgICAgICAgaWYgKGVudHJ5LmlzRGlyZWN0b3J5KSB7XG4gICAgICAgICAgICAgIHJlYWRFbnRyaWVzKGVudHJ5KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIC8vIHJlYWQgYXMgZmlsZVxuICAgICAgICAgICAgICB0b3RhbEZpbGVzRm91bmQrKztcbiAgICAgICAgICAgICAgZW50cnkuZmlsZShmdW5jdGlvbihmaWxlKSB7XG4gICAgICAgICAgICAgICAgZmlsZXMucHVzaChjb3JyZWN0TWlzc2luZ0ZpbGVUeXBlKGZpbGUpKTtcblxuICAgICAgICAgICAgICAgIGlmICh0b3RhbEZpbGVzRm91bmQgPT09IGZpbGVzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgcmVzb2x2ZShmaWxlcyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICB9O1xuXG4gICAgICAvLyBnbyFcbiAgICAgIHJlYWRFbnRyaWVzKGVudHJ5KTtcbiAgICB9KTtcbiAgfTtcblxuICB2YXIgY29ycmVjdE1pc3NpbmdGaWxlVHlwZSA9IGZ1bmN0aW9uIGNvcnJlY3RNaXNzaW5nRmlsZVR5cGUoZmlsZSkge1xuICAgIGlmIChmaWxlLnR5cGUubGVuZ3RoKSByZXR1cm4gZmlsZTtcbiAgICB2YXIgZGF0ZSA9IGZpbGUubGFzdE1vZGlmaWVkRGF0ZTtcbiAgICB2YXIgbmFtZSA9IGZpbGUubmFtZTtcbiAgICBmaWxlID0gZmlsZS5zbGljZShcbiAgICAgIDAsXG4gICAgICBmaWxlLnNpemUsXG4gICAgICBndWVzc3RpbWF0ZU1pbWVUeXBlKGdldEV4dGVuc2lvbkZyb21GaWxlbmFtZShmaWxlLm5hbWUpKVxuICAgICk7XG4gICAgZmlsZS5uYW1lID0gbmFtZTtcbiAgICBmaWxlLmxhc3RNb2RpZmllZERhdGUgPSBkYXRlO1xuICAgIHJldHVybiBmaWxlO1xuICB9O1xuXG4gIHZhciBpc0RpcmVjdG9yeUVudHJ5ID0gZnVuY3Rpb24gaXNEaXJlY3RvcnlFbnRyeShpdGVtKSB7XG4gICAgcmV0dXJuIGlzRW50cnkoaXRlbSkgJiYgKGdldEFzRW50cnkoaXRlbSkgfHwge30pLmlzRGlyZWN0b3J5O1xuICB9O1xuXG4gIHZhciBpc0VudHJ5ID0gZnVuY3Rpb24gaXNFbnRyeShpdGVtKSB7XG4gICAgcmV0dXJuICd3ZWJraXRHZXRBc0VudHJ5JyBpbiBpdGVtO1xuICB9O1xuXG4gIHZhciBnZXRBc0VudHJ5ID0gZnVuY3Rpb24gZ2V0QXNFbnRyeShpdGVtKSB7XG4gICAgcmV0dXJuIGl0ZW0ud2Via2l0R2V0QXNFbnRyeSgpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBFeHRyYWN0cyBsaW5rcyBmcm9tIGEgRGF0YVRyYW5zZmVyIG9iamVjdFxuICAgKi9cbiAgdmFyIGdldExpbmtzID0gZnVuY3Rpb24gZ2V0TGlua3MoZGF0YVRyYW5zZmVyKSB7XG4gICAgdmFyIGxpbmtzID0gW107XG4gICAgdHJ5IHtcbiAgICAgIC8vIGxvb2sgaW4gbWV0YSBkYXRhIHByb3BlcnR5XG4gICAgICBsaW5rcyA9IGdldExpbmtzRnJvbVRyYW5zZmVyTWV0YURhdGEoZGF0YVRyYW5zZmVyKTtcbiAgICAgIGlmIChsaW5rcy5sZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuIGxpbmtzO1xuICAgICAgfVxuICAgICAgbGlua3MgPSBnZXRMaW5rc0Zyb21UcmFuc2ZlclVSTERhdGEoZGF0YVRyYW5zZmVyKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAvLyBub3BlIG5vcGUgbm9wZSAocHJvYmFibHkgSUUgdHJvdWJsZSlcbiAgICB9XG4gICAgcmV0dXJuIGxpbmtzO1xuICB9O1xuXG4gIHZhciBnZXRMaW5rc0Zyb21UcmFuc2ZlclVSTERhdGEgPSBmdW5jdGlvbiBnZXRMaW5rc0Zyb21UcmFuc2ZlclVSTERhdGEoXG4gICAgZGF0YVRyYW5zZmVyXG4gICkge1xuICAgIHZhciBkYXRhID0gZGF0YVRyYW5zZmVyLmdldERhdGEoJ3VybCcpO1xuICAgIGlmICh0eXBlb2YgZGF0YSA9PT0gJ3N0cmluZycgJiYgZGF0YS5sZW5ndGgpIHtcbiAgICAgIHJldHVybiBbZGF0YV07XG4gICAgfVxuICAgIHJldHVybiBbXTtcbiAgfTtcblxuICB2YXIgZ2V0TGlua3NGcm9tVHJhbnNmZXJNZXRhRGF0YSA9IGZ1bmN0aW9uIGdldExpbmtzRnJvbVRyYW5zZmVyTWV0YURhdGEoXG4gICAgZGF0YVRyYW5zZmVyXG4gICkge1xuICAgIHZhciBkYXRhID0gZGF0YVRyYW5zZmVyLmdldERhdGEoJ3RleHQvaHRtbCcpO1xuICAgIGlmICh0eXBlb2YgZGF0YSA9PT0gJ3N0cmluZycgJiYgZGF0YS5sZW5ndGgpIHtcbiAgICAgIHZhciBtYXRjaGVzID0gZGF0YS5tYXRjaCgvc3JjXFxzKj1cXHMqXCIoLis/KVwiLyk7XG4gICAgICBpZiAobWF0Y2hlcykge1xuICAgICAgICByZXR1cm4gW21hdGNoZXNbMV1dO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gW107XG4gIH07XG5cbiAgdmFyIGRyYWdORHJvcE9ic2VydmVycyA9IFtdO1xuXG4gIHZhciBldmVudFBvc2l0aW9uID0gZnVuY3Rpb24gZXZlbnRQb3NpdGlvbihlKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHBhZ2VMZWZ0OiBlLnBhZ2VYLFxuICAgICAgcGFnZVRvcDogZS5wYWdlWSxcbiAgICAgIHNjb3BlTGVmdDogZS5vZmZzZXRYIHx8IGUubGF5ZXJYLFxuICAgICAgc2NvcGVUb3A6IGUub2Zmc2V0WSB8fCBlLmxheWVyWVxuICAgIH07XG4gIH07XG5cbiAgdmFyIGNyZWF0ZURyYWdORHJvcENsaWVudCA9IGZ1bmN0aW9uIGNyZWF0ZURyYWdORHJvcENsaWVudChcbiAgICBlbGVtZW50LFxuICAgIHNjb3BlVG9PYnNlcnZlLFxuICAgIGZpbHRlckVsZW1lbnRcbiAgKSB7XG4gICAgdmFyIG9ic2VydmVyID0gZ2V0RHJhZ05Ecm9wT2JzZXJ2ZXIoc2NvcGVUb09ic2VydmUpO1xuXG4gICAgdmFyIGNsaWVudCA9IHtcbiAgICAgIGVsZW1lbnQ6IGVsZW1lbnQsXG4gICAgICBmaWx0ZXJFbGVtZW50OiBmaWx0ZXJFbGVtZW50LFxuICAgICAgc3RhdGU6IG51bGwsXG4gICAgICBvbmRyb3A6IGZ1bmN0aW9uIG9uZHJvcCgpIHt9LFxuICAgICAgb25lbnRlcjogZnVuY3Rpb24gb25lbnRlcigpIHt9LFxuICAgICAgb25kcmFnOiBmdW5jdGlvbiBvbmRyYWcoKSB7fSxcbiAgICAgIG9uZXhpdDogZnVuY3Rpb24gb25leGl0KCkge30sXG4gICAgICBvbmxvYWQ6IGZ1bmN0aW9uIG9ubG9hZCgpIHt9LFxuICAgICAgYWxsb3dkcm9wOiBmdW5jdGlvbiBhbGxvd2Ryb3AoKSB7fVxuICAgIH07XG5cbiAgICBjbGllbnQuZGVzdHJveSA9IG9ic2VydmVyLmFkZExpc3RlbmVyKGNsaWVudCk7XG5cbiAgICByZXR1cm4gY2xpZW50O1xuICB9O1xuXG4gIHZhciBnZXREcmFnTkRyb3BPYnNlcnZlciA9IGZ1bmN0aW9uIGdldERyYWdORHJvcE9ic2VydmVyKGVsZW1lbnQpIHtcbiAgICAvLyBzZWUgaWYgYWxyZWFkeSBleGlzdHMsIGlmIHNvLCByZXR1cm5cbiAgICB2YXIgb2JzZXJ2ZXIgPSBkcmFnTkRyb3BPYnNlcnZlcnMuZmluZChmdW5jdGlvbihpdGVtKSB7XG4gICAgICByZXR1cm4gaXRlbS5lbGVtZW50ID09PSBlbGVtZW50O1xuICAgIH0pO1xuICAgIGlmIChvYnNlcnZlcikge1xuICAgICAgcmV0dXJuIG9ic2VydmVyO1xuICAgIH1cblxuICAgIC8vIGNyZWF0ZSBuZXcgb2JzZXJ2ZXIsIGRvZXMgbm90IHlldCBleGlzdCBmb3IgdGhpcyBlbGVtZW50XG4gICAgdmFyIG5ld09ic2VydmVyID0gY3JlYXRlRHJhZ05Ecm9wT2JzZXJ2ZXIoZWxlbWVudCk7XG4gICAgZHJhZ05Ecm9wT2JzZXJ2ZXJzLnB1c2gobmV3T2JzZXJ2ZXIpO1xuICAgIHJldHVybiBuZXdPYnNlcnZlcjtcbiAgfTtcblxuICB2YXIgY3JlYXRlRHJhZ05Ecm9wT2JzZXJ2ZXIgPSBmdW5jdGlvbiBjcmVhdGVEcmFnTkRyb3BPYnNlcnZlcihlbGVtZW50KSB7XG4gICAgdmFyIGNsaWVudHMgPSBbXTtcblxuICAgIHZhciByb3V0ZXMgPSB7XG4gICAgICBkcmFnZW50ZXI6IGRyYWdlbnRlcixcbiAgICAgIGRyYWdvdmVyOiBkcmFnb3ZlcixcbiAgICAgIGRyYWdsZWF2ZTogZHJhZ2xlYXZlLFxuICAgICAgZHJvcDogZHJvcFxuICAgIH07XG5cbiAgICB2YXIgaGFuZGxlcnMgPSB7fTtcblxuICAgIGZvcmluKHJvdXRlcywgZnVuY3Rpb24oZXZlbnQsIGNyZWF0ZUhhbmRsZXIpIHtcbiAgICAgIGhhbmRsZXJzW2V2ZW50XSA9IGNyZWF0ZUhhbmRsZXIoZWxlbWVudCwgY2xpZW50cyk7XG4gICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIGhhbmRsZXJzW2V2ZW50XSwgZmFsc2UpO1xuICAgIH0pO1xuXG4gICAgdmFyIG9ic2VydmVyID0ge1xuICAgICAgZWxlbWVudDogZWxlbWVudCxcbiAgICAgIGFkZExpc3RlbmVyOiBmdW5jdGlvbiBhZGRMaXN0ZW5lcihjbGllbnQpIHtcbiAgICAgICAgLy8gYWRkIGFzIGNsaWVudFxuICAgICAgICBjbGllbnRzLnB1c2goY2xpZW50KTtcblxuICAgICAgICAvLyByZXR1cm4gcmVtb3ZlTGlzdGVuZXIgZnVuY3Rpb25cbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgICAgIC8vIHJlbW92ZSBjbGllbnRcbiAgICAgICAgICBjbGllbnRzLnNwbGljZShjbGllbnRzLmluZGV4T2YoY2xpZW50KSwgMSk7XG5cbiAgICAgICAgICAvLyBpZiBubyBtb3JlIGNsaWVudHMsIGNsZWFuIHVwIG9ic2VydmVyXG4gICAgICAgICAgaWYgKGNsaWVudHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICBkcmFnTkRyb3BPYnNlcnZlcnMuc3BsaWNlKGRyYWdORHJvcE9ic2VydmVycy5pbmRleE9mKG9ic2VydmVyKSwgMSk7XG5cbiAgICAgICAgICAgIGZvcmluKHJvdXRlcywgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgICAgICAgZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50LCBoYW5kbGVyc1tldmVudF0sIGZhbHNlKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgcmV0dXJuIG9ic2VydmVyO1xuICB9O1xuXG4gIHZhciBlbGVtZW50RnJvbVBvaW50ID0gZnVuY3Rpb24gZWxlbWVudEZyb21Qb2ludChyb290LCBwb2ludCkge1xuICAgIGlmICghKCdlbGVtZW50RnJvbVBvaW50JyBpbiByb290KSkge1xuICAgICAgcm9vdCA9IGRvY3VtZW50O1xuICAgIH1cbiAgICByZXR1cm4gcm9vdC5lbGVtZW50RnJvbVBvaW50KHBvaW50LngsIHBvaW50LnkpO1xuICB9O1xuXG4gIHZhciBpc0V2ZW50VGFyZ2V0ID0gZnVuY3Rpb24gaXNFdmVudFRhcmdldChlLCB0YXJnZXQpIHtcbiAgICAvLyBnZXQgcm9vdFxuICAgIHZhciByb290ID0gZ2V0Um9vdE5vZGUodGFyZ2V0KTtcblxuICAgIC8vIGdldCBlbGVtZW50IGF0IHBvc2l0aW9uXG4gICAgLy8gaWYgcm9vdCBpcyBub3QgYWN0dWFsIHNoYWRvdyBET00gYW5kIGRvZXMgbm90IGhhdmUgZWxlbWVudEZyb21Qb2ludCBtZXRob2QsIHVzZSB0aGUgb25lIG9uIGRvY3VtZW50XG4gICAgdmFyIGVsZW1lbnRBdFBvc2l0aW9uID0gZWxlbWVudEZyb21Qb2ludChyb290LCB7XG4gICAgICB4OiBlLnBhZ2VYIC0gd2luZG93LnBhZ2VYT2Zmc2V0LFxuICAgICAgeTogZS5wYWdlWSAtIHdpbmRvdy5wYWdlWU9mZnNldFxuICAgIH0pO1xuXG4gICAgLy8gdGVzdCBpZiB0YXJnZXQgaXMgdGhlIGVsZW1lbnQgb3IgaWYgb25lIG9mIGl0cyBjaGlsZHJlbiBpc1xuICAgIHJldHVybiBlbGVtZW50QXRQb3NpdGlvbiA9PT0gdGFyZ2V0IHx8IHRhcmdldC5jb250YWlucyhlbGVtZW50QXRQb3NpdGlvbik7XG4gIH07XG5cbiAgdmFyIGluaXRpYWxUYXJnZXQgPSBudWxsO1xuXG4gIHZhciBzZXREcm9wRWZmZWN0ID0gZnVuY3Rpb24gc2V0RHJvcEVmZmVjdChkYXRhVHJhbnNmZXIsIGVmZmVjdCkge1xuICAgIC8vIGlzIGluIHRyeSBjYXRjaCBhcyBJRTExIHdpbGwgdGhyb3cgZXJyb3IgaWYgbm90XG4gICAgdHJ5IHtcbiAgICAgIGRhdGFUcmFuc2Zlci5kcm9wRWZmZWN0ID0gZWZmZWN0O1xuICAgIH0gY2F0Y2ggKGUpIHt9XG4gIH07XG5cbiAgdmFyIGRyYWdlbnRlciA9IGZ1bmN0aW9uIGRyYWdlbnRlcihyb290LCBjbGllbnRzKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKGUpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgaW5pdGlhbFRhcmdldCA9IGUudGFyZ2V0O1xuXG4gICAgICBjbGllbnRzLmZvckVhY2goZnVuY3Rpb24oY2xpZW50KSB7XG4gICAgICAgIHZhciBlbGVtZW50ID0gY2xpZW50LmVsZW1lbnQsXG4gICAgICAgICAgb25lbnRlciA9IGNsaWVudC5vbmVudGVyO1xuXG4gICAgICAgIGlmIChpc0V2ZW50VGFyZ2V0KGUsIGVsZW1lbnQpKSB7XG4gICAgICAgICAgY2xpZW50LnN0YXRlID0gJ2VudGVyJztcblxuICAgICAgICAgIC8vIGZpcmUgZW50ZXIgZXZlbnRcbiAgICAgICAgICBvbmVudGVyKGV2ZW50UG9zaXRpb24oZSkpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9O1xuICB9O1xuXG4gIHZhciBkcmFnb3ZlciA9IGZ1bmN0aW9uIGRyYWdvdmVyKHJvb3QsIGNsaWVudHMpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24oZSkge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICB2YXIgZGF0YVRyYW5zZmVyID0gZS5kYXRhVHJhbnNmZXI7XG5cbiAgICAgIHJlcXVlc3REYXRhVHJhbnNmZXJJdGVtcyhkYXRhVHJhbnNmZXIpLnRoZW4oZnVuY3Rpb24oaXRlbXMpIHtcbiAgICAgICAgdmFyIG92ZXJEcm9wVGFyZ2V0ID0gZmFsc2U7XG5cbiAgICAgICAgY2xpZW50cy5zb21lKGZ1bmN0aW9uKGNsaWVudCkge1xuICAgICAgICAgIHZhciBmaWx0ZXJFbGVtZW50ID0gY2xpZW50LmZpbHRlckVsZW1lbnQsXG4gICAgICAgICAgICBlbGVtZW50ID0gY2xpZW50LmVsZW1lbnQsXG4gICAgICAgICAgICBvbmVudGVyID0gY2xpZW50Lm9uZW50ZXIsXG4gICAgICAgICAgICBvbmV4aXQgPSBjbGllbnQub25leGl0LFxuICAgICAgICAgICAgb25kcmFnID0gY2xpZW50Lm9uZHJhZyxcbiAgICAgICAgICAgIGFsbG93ZHJvcCA9IGNsaWVudC5hbGxvd2Ryb3A7XG5cbiAgICAgICAgICAvLyBieSBkZWZhdWx0IHdlIGNhbiBkcm9wXG4gICAgICAgICAgc2V0RHJvcEVmZmVjdChkYXRhVHJhbnNmZXIsICdjb3B5Jyk7XG5cbiAgICAgICAgICAvLyBhbGxvdyB0cmFuc2ZlciBvZiB0aGVzZSBpdGVtc1xuICAgICAgICAgIHZhciBhbGxvd3NUcmFuc2ZlciA9IGFsbG93ZHJvcChpdGVtcyk7XG5cbiAgICAgICAgICAvLyBvbmx5IHVzZWQgd2hlbiBjYW4gYmUgZHJvcHBlZCBvbiBwYWdlXG4gICAgICAgICAgaWYgKCFhbGxvd3NUcmFuc2Zlcikge1xuICAgICAgICAgICAgc2V0RHJvcEVmZmVjdChkYXRhVHJhbnNmZXIsICdub25lJyk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gdGFyZ2V0dGluZyB0aGlzIGNsaWVudFxuICAgICAgICAgIGlmIChpc0V2ZW50VGFyZ2V0KGUsIGVsZW1lbnQpKSB7XG4gICAgICAgICAgICBvdmVyRHJvcFRhcmdldCA9IHRydWU7XG5cbiAgICAgICAgICAgIC8vIGhhZCBubyBwcmV2aW91cyBzdGF0ZSwgbWVhbnMgd2UgYXJlIGVudGVyaW5nIHRoaXMgY2xpZW50XG4gICAgICAgICAgICBpZiAoY2xpZW50LnN0YXRlID09PSBudWxsKSB7XG4gICAgICAgICAgICAgIGNsaWVudC5zdGF0ZSA9ICdlbnRlcic7XG4gICAgICAgICAgICAgIG9uZW50ZXIoZXZlbnRQb3NpdGlvbihlKSk7XG4gICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gbm93IG92ZXIgZWxlbWVudCAobm8gbWF0dGVyIGlmIGl0IGFsbG93cyB0aGUgZHJvcCBvciBub3QpXG4gICAgICAgICAgICBjbGllbnQuc3RhdGUgPSAnb3Zlcic7XG5cbiAgICAgICAgICAgIC8vIG5lZWRzIHRvIGFsbG93IHRyYW5zZmVyXG4gICAgICAgICAgICBpZiAoZmlsdGVyRWxlbWVudCAmJiAhYWxsb3dzVHJhbnNmZXIpIHtcbiAgICAgICAgICAgICAgc2V0RHJvcEVmZmVjdChkYXRhVHJhbnNmZXIsICdub25lJyk7XG4gICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gZHJhZ2dpbmdcbiAgICAgICAgICAgIG9uZHJhZyhldmVudFBvc2l0aW9uKGUpKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gc2hvdWxkIGJlIG92ZXIgYW4gZWxlbWVudCB0byBkcm9wXG4gICAgICAgICAgICBpZiAoZmlsdGVyRWxlbWVudCAmJiAhb3ZlckRyb3BUYXJnZXQpIHtcbiAgICAgICAgICAgICAgc2V0RHJvcEVmZmVjdChkYXRhVHJhbnNmZXIsICdub25lJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIG1pZ2h0IGhhdmUganVzdCBsZWZ0IHRoaXMgY2xpZW50P1xuICAgICAgICAgICAgaWYgKGNsaWVudC5zdGF0ZSkge1xuICAgICAgICAgICAgICBjbGllbnQuc3RhdGUgPSBudWxsO1xuICAgICAgICAgICAgICBvbmV4aXQoZXZlbnRQb3NpdGlvbihlKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH07XG4gIH07XG5cbiAgdmFyIGRyb3AgPSBmdW5jdGlvbiBkcm9wKHJvb3QsIGNsaWVudHMpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24oZSkge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICB2YXIgZGF0YVRyYW5zZmVyID0gZS5kYXRhVHJhbnNmZXI7XG5cbiAgICAgIHJlcXVlc3REYXRhVHJhbnNmZXJJdGVtcyhkYXRhVHJhbnNmZXIpLnRoZW4oZnVuY3Rpb24oaXRlbXMpIHtcbiAgICAgICAgY2xpZW50cy5mb3JFYWNoKGZ1bmN0aW9uKGNsaWVudCkge1xuICAgICAgICAgIHZhciBmaWx0ZXJFbGVtZW50ID0gY2xpZW50LmZpbHRlckVsZW1lbnQsXG4gICAgICAgICAgICBlbGVtZW50ID0gY2xpZW50LmVsZW1lbnQsXG4gICAgICAgICAgICBvbmRyb3AgPSBjbGllbnQub25kcm9wLFxuICAgICAgICAgICAgb25leGl0ID0gY2xpZW50Lm9uZXhpdCxcbiAgICAgICAgICAgIGFsbG93ZHJvcCA9IGNsaWVudC5hbGxvd2Ryb3A7XG5cbiAgICAgICAgICBjbGllbnQuc3RhdGUgPSBudWxsO1xuXG4gICAgICAgICAgdmFyIGFsbG93c1RyYW5zZmVyID0gYWxsb3dkcm9wKGl0ZW1zKTtcblxuICAgICAgICAgIC8vIG5vIHRyYW5zZmVyIGZvciB0aGlzIGNsaWVudFxuICAgICAgICAgIGlmICghYWxsb3dzVHJhbnNmZXIpIHtcbiAgICAgICAgICAgIG9uZXhpdChldmVudFBvc2l0aW9uKGUpKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyBpZiB3ZSdyZSBmaWx0ZXJpbmcgb24gZWxlbWVudCB3ZSBuZWVkIHRvIGJlIG92ZXIgdGhlIGVsZW1lbnQgdG8gZHJvcFxuICAgICAgICAgIGlmIChmaWx0ZXJFbGVtZW50ICYmICFpc0V2ZW50VGFyZ2V0KGUsIGVsZW1lbnQpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgb25kcm9wKGV2ZW50UG9zaXRpb24oZSksIGl0ZW1zKTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9O1xuICB9O1xuXG4gIHZhciBkcmFnbGVhdmUgPSBmdW5jdGlvbiBkcmFnbGVhdmUocm9vdCwgY2xpZW50cykge1xuICAgIHJldHVybiBmdW5jdGlvbihlKSB7XG4gICAgICBpZiAoaW5pdGlhbFRhcmdldCAhPT0gZS50YXJnZXQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBjbGllbnRzLmZvckVhY2goZnVuY3Rpb24oY2xpZW50KSB7XG4gICAgICAgIHZhciBvbmV4aXQgPSBjbGllbnQub25leGl0O1xuXG4gICAgICAgIGNsaWVudC5zdGF0ZSA9IG51bGw7XG5cbiAgICAgICAgb25leGl0KGV2ZW50UG9zaXRpb24oZSkpO1xuICAgICAgfSk7XG4gICAgfTtcbiAgfTtcblxuICB2YXIgY3JlYXRlSG9wcGVyID0gZnVuY3Rpb24gY3JlYXRlSG9wcGVyKHNjb3BlLCB2YWxpZGF0ZUl0ZW1zLCBvcHRpb25zKSB7XG4gICAgLy8gaXMgbm93IGhvcHBlciBzY29wZVxuICAgIHNjb3BlLmNsYXNzTGlzdC5hZGQoJ2ZpbGVwb25kLS1ob3BwZXInKTtcblxuICAgIC8vIHNob3J0Y3V0c1xuICAgIHZhciBjYXRjaGVzRHJvcHNPblBhZ2UgPSBvcHRpb25zLmNhdGNoZXNEcm9wc09uUGFnZSxcbiAgICAgIHJlcXVpcmVzRHJvcE9uRWxlbWVudCA9IG9wdGlvbnMucmVxdWlyZXNEcm9wT25FbGVtZW50LFxuICAgICAgX29wdGlvbnMkZmlsdGVySXRlbXMgPSBvcHRpb25zLmZpbHRlckl0ZW1zLFxuICAgICAgZmlsdGVySXRlbXMgPVxuICAgICAgICBfb3B0aW9ucyRmaWx0ZXJJdGVtcyA9PT0gdm9pZCAwXG4gICAgICAgICAgPyBmdW5jdGlvbihpdGVtcykge1xuICAgICAgICAgICAgICByZXR1cm4gaXRlbXM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgOiBfb3B0aW9ucyRmaWx0ZXJJdGVtcztcblxuICAgIC8vIGNyZWF0ZSBhIGRuZCBjbGllbnRcbiAgICB2YXIgY2xpZW50ID0gY3JlYXRlRHJhZ05Ecm9wQ2xpZW50KFxuICAgICAgc2NvcGUsXG4gICAgICBjYXRjaGVzRHJvcHNPblBhZ2UgPyBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQgOiBzY29wZSxcbiAgICAgIHJlcXVpcmVzRHJvcE9uRWxlbWVudFxuICAgICk7XG5cbiAgICAvLyBjdXJyZW50IGNsaWVudCBzdGF0ZVxuICAgIHZhciBsYXN0U3RhdGUgPSAnJztcbiAgICB2YXIgY3VycmVudFN0YXRlID0gJyc7XG5cbiAgICAvLyBkZXRlcm1pbmVzIGlmIGEgZmlsZSBtYXkgYmUgZHJvcHBlZFxuICAgIGNsaWVudC5hbGxvd2Ryb3AgPSBmdW5jdGlvbihpdGVtcykge1xuICAgICAgLy8gVE9ETzogaWYgd2UgY2FuLCB0aHJvdyBlcnJvciB0byBpbmRpY2F0ZSB0aGUgaXRlbXMgY2Fubm90IGJ5IGRyb3BwZWRcblxuICAgICAgcmV0dXJuIHZhbGlkYXRlSXRlbXMoZmlsdGVySXRlbXMoaXRlbXMpKTtcbiAgICB9O1xuXG4gICAgY2xpZW50Lm9uZHJvcCA9IGZ1bmN0aW9uKHBvc2l0aW9uLCBpdGVtcykge1xuICAgICAgdmFyIGZpbHRlcmVkSXRlbXMgPSBmaWx0ZXJJdGVtcyhpdGVtcyk7XG5cbiAgICAgIGlmICghdmFsaWRhdGVJdGVtcyhmaWx0ZXJlZEl0ZW1zKSkge1xuICAgICAgICBhcGkub25kcmFnZW5kKHBvc2l0aW9uKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBjdXJyZW50U3RhdGUgPSAnZHJhZy1kcm9wJztcblxuICAgICAgYXBpLm9ubG9hZChmaWx0ZXJlZEl0ZW1zLCBwb3NpdGlvbik7XG4gICAgfTtcblxuICAgIGNsaWVudC5vbmRyYWcgPSBmdW5jdGlvbihwb3NpdGlvbikge1xuICAgICAgYXBpLm9uZHJhZyhwb3NpdGlvbik7XG4gICAgfTtcblxuICAgIGNsaWVudC5vbmVudGVyID0gZnVuY3Rpb24ocG9zaXRpb24pIHtcbiAgICAgIGN1cnJlbnRTdGF0ZSA9ICdkcmFnLW92ZXInO1xuXG4gICAgICBhcGkub25kcmFnc3RhcnQocG9zaXRpb24pO1xuICAgIH07XG5cbiAgICBjbGllbnQub25leGl0ID0gZnVuY3Rpb24ocG9zaXRpb24pIHtcbiAgICAgIGN1cnJlbnRTdGF0ZSA9ICdkcmFnLWV4aXQnO1xuXG4gICAgICBhcGkub25kcmFnZW5kKHBvc2l0aW9uKTtcbiAgICB9O1xuXG4gICAgdmFyIGFwaSA9IHtcbiAgICAgIHVwZGF0ZUhvcHBlclN0YXRlOiBmdW5jdGlvbiB1cGRhdGVIb3BwZXJTdGF0ZSgpIHtcbiAgICAgICAgaWYgKGxhc3RTdGF0ZSAhPT0gY3VycmVudFN0YXRlKSB7XG4gICAgICAgICAgc2NvcGUuZGF0YXNldC5ob3BwZXJTdGF0ZSA9IGN1cnJlbnRTdGF0ZTtcbiAgICAgICAgICBsYXN0U3RhdGUgPSBjdXJyZW50U3RhdGU7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBvbmxvYWQ6IGZ1bmN0aW9uIG9ubG9hZCgpIHt9LFxuICAgICAgb25kcmFnc3RhcnQ6IGZ1bmN0aW9uIG9uZHJhZ3N0YXJ0KCkge30sXG4gICAgICBvbmRyYWc6IGZ1bmN0aW9uIG9uZHJhZygpIHt9LFxuICAgICAgb25kcmFnZW5kOiBmdW5jdGlvbiBvbmRyYWdlbmQoKSB7fSxcbiAgICAgIGRlc3Ryb3k6IGZ1bmN0aW9uIGRlc3Ryb3koKSB7XG4gICAgICAgIC8vIGRlc3Ryb3kgY2xpZW50XG4gICAgICAgIGNsaWVudC5kZXN0cm95KCk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHJldHVybiBhcGk7XG4gIH07XG5cbiAgdmFyIGxpc3RlbmluZyA9IGZhbHNlO1xuICB2YXIgbGlzdGVuZXJzJDEgPSBbXTtcblxuICB2YXIgaGFuZGxlUGFzdGUgPSBmdW5jdGlvbiBoYW5kbGVQYXN0ZShlKSB7XG4gICAgcmVxdWVzdERhdGFUcmFuc2Zlckl0ZW1zKGUuY2xpcGJvYXJkRGF0YSkudGhlbihmdW5jdGlvbihmaWxlcykge1xuICAgICAgLy8gbm8gZmlsZXMgcmVjZWl2ZWRcbiAgICAgIGlmICghZmlsZXMubGVuZ3RoKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgLy8gbm90aWZ5IGxpc3RlbmVycyBvZiByZWNlaXZlZCBmaWxlc1xuICAgICAgbGlzdGVuZXJzJDEuZm9yRWFjaChmdW5jdGlvbihsaXN0ZW5lcikge1xuICAgICAgICByZXR1cm4gbGlzdGVuZXIoZmlsZXMpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH07XG5cbiAgdmFyIGxpc3RlbiA9IGZ1bmN0aW9uIGxpc3RlbihjYikge1xuICAgIC8vIGNhbid0IGFkZCB0d2ljZVxuICAgIGlmIChsaXN0ZW5lcnMkMS5pbmNsdWRlcyhjYikpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBhZGQgaW5pdGlhbCBsaXN0ZW5lclxuICAgIGxpc3RlbmVycyQxLnB1c2goY2IpO1xuXG4gICAgLy8gc2V0dXAgcGFzdGUgbGlzdGVuZXIgZm9yIGVudGlyZSBwYWdlXG4gICAgaWYgKGxpc3RlbmluZykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGxpc3RlbmluZyA9IHRydWU7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigncGFzdGUnLCBoYW5kbGVQYXN0ZSk7XG4gIH07XG5cbiAgdmFyIHVubGlzdGVuID0gZnVuY3Rpb24gdW5saXN0ZW4obGlzdGVuZXIpIHtcbiAgICBhcnJheVJlbW92ZShsaXN0ZW5lcnMkMSwgbGlzdGVuZXJzJDEuaW5kZXhPZihsaXN0ZW5lcikpO1xuXG4gICAgLy8gY2xlYW4gdXBcbiAgICBpZiAobGlzdGVuZXJzJDEubGVuZ3RoID09PSAwKSB7XG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdwYXN0ZScsIGhhbmRsZVBhc3RlKTtcbiAgICAgIGxpc3RlbmluZyA9IGZhbHNlO1xuICAgIH1cbiAgfTtcblxuICB2YXIgY3JlYXRlUGFzdGVyID0gZnVuY3Rpb24gY3JlYXRlUGFzdGVyKCkge1xuICAgIHZhciBjYiA9IGZ1bmN0aW9uIGNiKGZpbGVzKSB7XG4gICAgICBhcGkub25sb2FkKGZpbGVzKTtcbiAgICB9O1xuXG4gICAgdmFyIGFwaSA9IHtcbiAgICAgIGRlc3Ryb3k6IGZ1bmN0aW9uIGRlc3Ryb3koKSB7XG4gICAgICAgIHVubGlzdGVuKGNiKTtcbiAgICAgIH0sXG4gICAgICBvbmxvYWQ6IGZ1bmN0aW9uIG9ubG9hZCgpIHt9XG4gICAgfTtcblxuICAgIGxpc3RlbihjYik7XG5cbiAgICByZXR1cm4gYXBpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBDcmVhdGVzIHRoZSBmaWxlIHZpZXdcbiAgICovXG4gIHZhciBjcmVhdGUkYyA9IGZ1bmN0aW9uIGNyZWF0ZShfcmVmKSB7XG4gICAgdmFyIHJvb3QgPSBfcmVmLnJvb3QsXG4gICAgICBwcm9wcyA9IF9yZWYucHJvcHM7XG4gICAgcm9vdC5lbGVtZW50LmlkID0gJ2ZpbGVwb25kLS1hc3Npc3RhbnQtJyArIHByb3BzLmlkO1xuICAgIGF0dHIocm9vdC5lbGVtZW50LCAncm9sZScsICdzdGF0dXMnKTtcbiAgICBhdHRyKHJvb3QuZWxlbWVudCwgJ2FyaWEtbGl2ZScsICdwb2xpdGUnKTtcbiAgICBhdHRyKHJvb3QuZWxlbWVudCwgJ2FyaWEtcmVsZXZhbnQnLCAnYWRkaXRpb25zJyk7XG4gIH07XG5cbiAgdmFyIGFkZEZpbGVzTm90aWZpY2F0aW9uVGltZW91dCA9IG51bGw7XG4gIHZhciBub3RpZmljYXRpb25DbGVhclRpbWVvdXQgPSBudWxsO1xuXG4gIHZhciBmaWxlbmFtZXMgPSBbXTtcblxuICB2YXIgYXNzaXN0ID0gZnVuY3Rpb24gYXNzaXN0KHJvb3QsIG1lc3NhZ2UpIHtcbiAgICByb290LmVsZW1lbnQudGV4dENvbnRlbnQgPSBtZXNzYWdlO1xuICB9O1xuXG4gIHZhciBjbGVhciQxID0gZnVuY3Rpb24gY2xlYXIocm9vdCkge1xuICAgIHJvb3QuZWxlbWVudC50ZXh0Q29udGVudCA9ICcnO1xuICB9O1xuXG4gIHZhciBsaXN0TW9kaWZpZWQgPSBmdW5jdGlvbiBsaXN0TW9kaWZpZWQocm9vdCwgZmlsZW5hbWUsIGxhYmVsKSB7XG4gICAgdmFyIHRvdGFsID0gcm9vdC5xdWVyeSgnR0VUX1RPVEFMX0lURU1TJyk7XG4gICAgYXNzaXN0KFxuICAgICAgcm9vdCxcbiAgICAgIGxhYmVsICtcbiAgICAgICAgJyAnICtcbiAgICAgICAgZmlsZW5hbWUgK1xuICAgICAgICAnLCAnICtcbiAgICAgICAgdG90YWwgK1xuICAgICAgICAnICcgK1xuICAgICAgICAodG90YWwgPT09IDFcbiAgICAgICAgICA/IHJvb3QucXVlcnkoJ0dFVF9MQUJFTF9GSUxFX0NPVU5UX1NJTkdVTEFSJylcbiAgICAgICAgICA6IHJvb3QucXVlcnkoJ0dFVF9MQUJFTF9GSUxFX0NPVU5UX1BMVVJBTCcpKVxuICAgICk7XG5cbiAgICAvLyBjbGVhciBncm91cCBhZnRlciBzZXQgYW1vdW50IG9mIHRpbWUgc28gdGhlIHN0YXR1cyBpcyBub3QgcmVhZCB0d2ljZVxuICAgIGNsZWFyVGltZW91dChub3RpZmljYXRpb25DbGVhclRpbWVvdXQpO1xuICAgIG5vdGlmaWNhdGlvbkNsZWFyVGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICBjbGVhciQxKHJvb3QpO1xuICAgIH0sIDE1MDApO1xuICB9O1xuXG4gIHZhciBpc1VzaW5nRmlsZVBvbmQgPSBmdW5jdGlvbiBpc1VzaW5nRmlsZVBvbmQocm9vdCkge1xuICAgIHJldHVybiByb290LmVsZW1lbnQucGFyZW50Tm9kZS5jb250YWlucyhkb2N1bWVudC5hY3RpdmVFbGVtZW50KTtcbiAgfTtcblxuICB2YXIgaXRlbUFkZGVkID0gZnVuY3Rpb24gaXRlbUFkZGVkKF9yZWYyKSB7XG4gICAgdmFyIHJvb3QgPSBfcmVmMi5yb290LFxuICAgICAgYWN0aW9uID0gX3JlZjIuYWN0aW9uO1xuICAgIGlmICghaXNVc2luZ0ZpbGVQb25kKHJvb3QpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgcm9vdC5lbGVtZW50LnRleHRDb250ZW50ID0gJyc7XG4gICAgdmFyIGl0ZW0gPSByb290LnF1ZXJ5KCdHRVRfSVRFTScsIGFjdGlvbi5pZCk7XG4gICAgZmlsZW5hbWVzLnB1c2goaXRlbS5maWxlbmFtZSk7XG5cbiAgICBjbGVhclRpbWVvdXQoYWRkRmlsZXNOb3RpZmljYXRpb25UaW1lb3V0KTtcbiAgICBhZGRGaWxlc05vdGlmaWNhdGlvblRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgbGlzdE1vZGlmaWVkKFxuICAgICAgICByb290LFxuICAgICAgICBmaWxlbmFtZXMuam9pbignLCAnKSxcbiAgICAgICAgcm9vdC5xdWVyeSgnR0VUX0xBQkVMX0ZJTEVfQURERUQnKVxuICAgICAgKTtcblxuICAgICAgZmlsZW5hbWVzLmxlbmd0aCA9IDA7XG4gICAgfSwgNzUwKTtcbiAgfTtcblxuICB2YXIgaXRlbVJlbW92ZWQgPSBmdW5jdGlvbiBpdGVtUmVtb3ZlZChfcmVmMykge1xuICAgIHZhciByb290ID0gX3JlZjMucm9vdCxcbiAgICAgIGFjdGlvbiA9IF9yZWYzLmFjdGlvbjtcbiAgICBpZiAoIWlzVXNpbmdGaWxlUG9uZChyb290KSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBpdGVtID0gYWN0aW9uLml0ZW07XG4gICAgbGlzdE1vZGlmaWVkKHJvb3QsIGl0ZW0uZmlsZW5hbWUsIHJvb3QucXVlcnkoJ0dFVF9MQUJFTF9GSUxFX1JFTU9WRUQnKSk7XG4gIH07XG5cbiAgdmFyIGl0ZW1Qcm9jZXNzZWQgPSBmdW5jdGlvbiBpdGVtUHJvY2Vzc2VkKF9yZWY0KSB7XG4gICAgdmFyIHJvb3QgPSBfcmVmNC5yb290LFxuICAgICAgYWN0aW9uID0gX3JlZjQuYWN0aW9uO1xuICAgIC8vIHdpbGwgYWxzbyBub3RpZnkgdGhlIHVzZXIgd2hlbiBGaWxlUG9uZCBpcyBub3QgYmVpbmcgdXNlZCwgYXMgdGhlIHVzZXIgbWlnaHQgYmUgb2NjdXBpZWQgd2l0aCBvdGhlciBhY3Rpdml0aWVzIHdoaWxlIHVwbG9hZGluZyBhIGZpbGVcblxuICAgIHZhciBpdGVtID0gcm9vdC5xdWVyeSgnR0VUX0lURU0nLCBhY3Rpb24uaWQpO1xuICAgIHZhciBmaWxlbmFtZSA9IGl0ZW0uZmlsZW5hbWU7XG4gICAgdmFyIGxhYmVsID0gcm9vdC5xdWVyeSgnR0VUX0xBQkVMX0ZJTEVfUFJPQ0VTU0lOR19DT01QTEVURScpO1xuXG4gICAgYXNzaXN0KHJvb3QsIGZpbGVuYW1lICsgJyAnICsgbGFiZWwpO1xuICB9O1xuXG4gIHZhciBpdGVtUHJvY2Vzc2VkVW5kbyA9IGZ1bmN0aW9uIGl0ZW1Qcm9jZXNzZWRVbmRvKF9yZWY1KSB7XG4gICAgdmFyIHJvb3QgPSBfcmVmNS5yb290LFxuICAgICAgYWN0aW9uID0gX3JlZjUuYWN0aW9uO1xuICAgIHZhciBpdGVtID0gcm9vdC5xdWVyeSgnR0VUX0lURU0nLCBhY3Rpb24uaWQpO1xuICAgIHZhciBmaWxlbmFtZSA9IGl0ZW0uZmlsZW5hbWU7XG4gICAgdmFyIGxhYmVsID0gcm9vdC5xdWVyeSgnR0VUX0xBQkVMX0ZJTEVfUFJPQ0VTU0lOR19BQk9SVEVEJyk7XG5cbiAgICBhc3Npc3Qocm9vdCwgZmlsZW5hbWUgKyAnICcgKyBsYWJlbCk7XG4gIH07XG5cbiAgdmFyIGl0ZW1FcnJvciA9IGZ1bmN0aW9uIGl0ZW1FcnJvcihfcmVmNikge1xuICAgIHZhciByb290ID0gX3JlZjYucm9vdCxcbiAgICAgIGFjdGlvbiA9IF9yZWY2LmFjdGlvbjtcbiAgICB2YXIgaXRlbSA9IHJvb3QucXVlcnkoJ0dFVF9JVEVNJywgYWN0aW9uLmlkKTtcbiAgICB2YXIgZmlsZW5hbWUgPSBpdGVtLmZpbGVuYW1lO1xuXG4gICAgLy8gd2lsbCBhbHNvIG5vdGlmeSB0aGUgdXNlciB3aGVuIEZpbGVQb25kIGlzIG5vdCBiZWluZyB1c2VkLCBhcyB0aGUgdXNlciBtaWdodCBiZSBvY2N1cGllZCB3aXRoIG90aGVyIGFjdGl2aXRpZXMgd2hpbGUgdXBsb2FkaW5nIGEgZmlsZVxuXG4gICAgYXNzaXN0KHJvb3QsIGFjdGlvbi5zdGF0dXMubWFpbiArICcgJyArIGZpbGVuYW1lICsgJyAnICsgYWN0aW9uLnN0YXR1cy5zdWIpO1xuICB9O1xuXG4gIHZhciBhc3Npc3RhbnQgPSBjcmVhdGVWaWV3KHtcbiAgICBjcmVhdGU6IGNyZWF0ZSRjLFxuICAgIGlnbm9yZVJlY3Q6IHRydWUsXG4gICAgaWdub3JlUmVjdFVwZGF0ZTogdHJ1ZSxcbiAgICB3cml0ZTogY3JlYXRlUm91dGUoe1xuICAgICAgRElEX0xPQURfSVRFTTogaXRlbUFkZGVkLFxuICAgICAgRElEX1JFTU9WRV9JVEVNOiBpdGVtUmVtb3ZlZCxcbiAgICAgIERJRF9DT01QTEVURV9JVEVNX1BST0NFU1NJTkc6IGl0ZW1Qcm9jZXNzZWQsXG5cbiAgICAgIERJRF9BQk9SVF9JVEVNX1BST0NFU1NJTkc6IGl0ZW1Qcm9jZXNzZWRVbmRvLFxuICAgICAgRElEX1JFVkVSVF9JVEVNX1BST0NFU1NJTkc6IGl0ZW1Qcm9jZXNzZWRVbmRvLFxuXG4gICAgICBESURfVEhST1dfSVRFTV9SRU1PVkVfRVJST1I6IGl0ZW1FcnJvcixcbiAgICAgIERJRF9USFJPV19JVEVNX0xPQURfRVJST1I6IGl0ZW1FcnJvcixcbiAgICAgIERJRF9USFJPV19JVEVNX0lOVkFMSUQ6IGl0ZW1FcnJvcixcbiAgICAgIERJRF9USFJPV19JVEVNX1BST0NFU1NJTkdfRVJST1I6IGl0ZW1FcnJvclxuICAgIH0pLFxuXG4gICAgdGFnOiAnc3BhbicsXG4gICAgbmFtZTogJ2Fzc2lzdGFudCdcbiAgfSk7XG5cbiAgdmFyIHRvQ2FtZWxzID0gZnVuY3Rpb24gdG9DYW1lbHMoc3RyaW5nKSB7XG4gICAgdmFyIHNlcGFyYXRvciA9XG4gICAgICBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6ICctJztcbiAgICByZXR1cm4gc3RyaW5nLnJlcGxhY2UobmV3IFJlZ0V4cChzZXBhcmF0b3IgKyAnLicsICdnJyksIGZ1bmN0aW9uKHN1Yikge1xuICAgICAgcmV0dXJuIHN1Yi5jaGFyQXQoMSkudG9VcHBlckNhc2UoKTtcbiAgICB9KTtcbiAgfTtcblxuICB2YXIgZGVib3VuY2UgPSBmdW5jdGlvbiBkZWJvdW5jZShmdW5jKSB7XG4gICAgdmFyIGludGVydmFsID1cbiAgICAgIGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogMTY7XG4gICAgdmFyIGltbWlkaWF0ZU9ubHkgPVxuICAgICAgYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiB0cnVlO1xuICAgIHZhciBsYXN0ID0gRGF0ZS5ub3coKTtcbiAgICB2YXIgdGltZW91dCA9IG51bGw7XG5cbiAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICBmb3IgKFxuICAgICAgICB2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwO1xuICAgICAgICBfa2V5IDwgX2xlbjtcbiAgICAgICAgX2tleSsrXG4gICAgICApIHtcbiAgICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICAgIH1cbiAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0KTtcblxuICAgICAgdmFyIGRpc3QgPSBEYXRlLm5vdygpIC0gbGFzdDtcblxuICAgICAgdmFyIGZuID0gZnVuY3Rpb24gZm4oKSB7XG4gICAgICAgIGxhc3QgPSBEYXRlLm5vdygpO1xuICAgICAgICBmdW5jLmFwcGx5KHZvaWQgMCwgYXJncyk7XG4gICAgICB9O1xuXG4gICAgICBpZiAoZGlzdCA8IGludGVydmFsKSB7XG4gICAgICAgIC8vIHdlIG5lZWQgdG8gZGVsYXkgYnkgdGhlIGRpZmZlcmVuY2UgYmV0d2VlbiBpbnRlcnZhbCBhbmQgZGlzdFxuICAgICAgICAvLyBmb3IgZXhhbXBsZTogaWYgZGlzdGFuY2UgaXMgMTAgbXMgYW5kIGludGVydmFsIGlzIDE2IG1zLFxuICAgICAgICAvLyB3ZSBuZWVkIHRvIHdhaXQgYW4gYWRkaXRpb25hbCA2bXMgYmVmb3JlIGNhbGxpbmcgdGhlIGZ1bmN0aW9uKVxuICAgICAgICBpZiAoIWltbWlkaWF0ZU9ubHkpIHtcbiAgICAgICAgICB0aW1lb3V0ID0gc2V0VGltZW91dChmbiwgaW50ZXJ2YWwgLSBkaXN0KTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gZ28hXG4gICAgICAgIGZuKCk7XG4gICAgICB9XG4gICAgfTtcbiAgfTtcblxuICB2YXIgTUFYX0ZJTEVTX0xJTUlUID0gMTAwMDAwMDtcblxuICB2YXIgY3JlYXRlJGQgPSBmdW5jdGlvbiBjcmVhdGUoX3JlZikge1xuICAgIHZhciByb290ID0gX3JlZi5yb290LFxuICAgICAgcHJvcHMgPSBfcmVmLnByb3BzO1xuXG4gICAgLy8gQWRkIGlkXG4gICAgdmFyIGlkID0gcm9vdC5xdWVyeSgnR0VUX0lEJyk7XG4gICAgaWYgKGlkKSB7XG4gICAgICByb290LmVsZW1lbnQuaWQgPSBpZDtcbiAgICB9XG5cbiAgICAvLyBBZGQgY2xhc3NOYW1lXG4gICAgdmFyIGNsYXNzTmFtZSA9IHJvb3QucXVlcnkoJ0dFVF9DTEFTU19OQU1FJyk7XG4gICAgaWYgKGNsYXNzTmFtZSkge1xuICAgICAgY2xhc3NOYW1lLnNwbGl0KCcgJykuZm9yRWFjaChmdW5jdGlvbihuYW1lKSB7XG4gICAgICAgIHJvb3QuZWxlbWVudC5jbGFzc0xpc3QuYWRkKG5hbWUpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gRmllbGQgbGFiZWxcbiAgICByb290LnJlZi5sYWJlbCA9IHJvb3QuYXBwZW5kQ2hpbGRWaWV3KFxuICAgICAgcm9vdC5jcmVhdGVDaGlsZFZpZXcoXG4gICAgICAgIGRyb3BMYWJlbCxcbiAgICAgICAgT2JqZWN0LmFzc2lnbih7fSwgcHJvcHMsIHtcbiAgICAgICAgICB0cmFuc2xhdGVZOiBudWxsLFxuICAgICAgICAgIGNhcHRpb246IHJvb3QucXVlcnkoJ0dFVF9MQUJFTF9JRExFJylcbiAgICAgICAgfSlcbiAgICAgIClcbiAgICApO1xuXG4gICAgLy8gTGlzdCBvZiBpdGVtc1xuICAgIHJvb3QucmVmLmxpc3QgPSByb290LmFwcGVuZENoaWxkVmlldyhcbiAgICAgIHJvb3QuY3JlYXRlQ2hpbGRWaWV3KGxpc3RTY3JvbGxlciwgeyB0cmFuc2xhdGVZOiBudWxsIH0pXG4gICAgKTtcblxuICAgIC8vIEJhY2tncm91bmQgcGFuZWxcbiAgICByb290LnJlZi5wYW5lbCA9IHJvb3QuYXBwZW5kQ2hpbGRWaWV3KFxuICAgICAgcm9vdC5jcmVhdGVDaGlsZFZpZXcocGFuZWwsIHsgbmFtZTogJ3BhbmVsLXJvb3QnIH0pXG4gICAgKTtcblxuICAgIC8vIEFzc2lzdGFudCBub3RpZmllcyBhc3Npc3RpdmUgdGVjaCB3aGVuIGNvbnRlbnQgY2hhbmdlc1xuICAgIHJvb3QucmVmLmFzc2lzdGFudCA9IHJvb3QuYXBwZW5kQ2hpbGRWaWV3KFxuICAgICAgcm9vdC5jcmVhdGVDaGlsZFZpZXcoYXNzaXN0YW50LCBPYmplY3QuYXNzaWduKHt9LCBwcm9wcykpXG4gICAgKTtcblxuICAgIC8vIE1lYXN1cmUgKHRlc3RzIGlmIGZpeGVkIGhlaWdodCB3YXMgc2V0KVxuICAgIC8vIERPQ1RZUEUgbmVlZHMgdG8gYmUgc2V0IGZvciB0aGlzIHRvIHdvcmtcbiAgICByb290LnJlZi5tZWFzdXJlID0gY3JlYXRlRWxlbWVudCQxKCdkaXYnKTtcbiAgICByb290LnJlZi5tZWFzdXJlLnN0eWxlLmhlaWdodCA9ICcxMDAlJztcbiAgICByb290LmVsZW1lbnQuYXBwZW5kQ2hpbGQocm9vdC5yZWYubWVhc3VyZSk7XG5cbiAgICAvLyBpbmZvcm1hdGlvbiBvbiB0aGUgcm9vdCBoZWlnaHQgb3IgZml4ZWQgaGVpZ2h0IHN0YXR1c1xuICAgIHJvb3QucmVmLmJvdW5kcyA9IG51bGw7XG5cbiAgICAvLyBhcHBseSBpbml0aWFsIHN0eWxlIHByb3BlcnRpZXNcbiAgICByb290XG4gICAgICAucXVlcnkoJ0dFVF9TVFlMRVMnKVxuICAgICAgLmZpbHRlcihmdW5jdGlvbihzdHlsZSkge1xuICAgICAgICByZXR1cm4gIWlzRW1wdHkoc3R5bGUudmFsdWUpO1xuICAgICAgfSlcbiAgICAgIC5tYXAoZnVuY3Rpb24oX3JlZjIpIHtcbiAgICAgICAgdmFyIG5hbWUgPSBfcmVmMi5uYW1lLFxuICAgICAgICAgIHZhbHVlID0gX3JlZjIudmFsdWU7XG4gICAgICAgIHJvb3QuZWxlbWVudC5kYXRhc2V0W25hbWVdID0gdmFsdWU7XG4gICAgICB9KTtcblxuICAgIC8vIGRldGVybWluZSBpZiB3aWR0aCBjaGFuZ2VkXG4gICAgcm9vdC5yZWYud2lkdGhQcmV2aW91cyA9IG51bGw7XG4gICAgcm9vdC5yZWYud2lkdGhVcGRhdGVkID0gZGVib3VuY2UoZnVuY3Rpb24oKSB7XG4gICAgICByb290LmRpc3BhdGNoKCdESURfUkVTSVpFX1JPT1QnKTtcbiAgICB9LCAyNTApO1xuXG4gICAgLy8gaGlzdG9yeSBvZiB1cGRhdGVzXG4gICAgcm9vdC5yZWYucHJldmlvdXNBc3BlY3RSYXRpbyA9IG51bGw7XG4gICAgcm9vdC5yZWYudXBkYXRlSGlzdG9yeSA9IFtdO1xuICB9O1xuXG4gIHZhciB3cml0ZSQ4ID0gZnVuY3Rpb24gd3JpdGUoX3JlZjMpIHtcbiAgICB2YXIgcm9vdCA9IF9yZWYzLnJvb3QsXG4gICAgICBwcm9wcyA9IF9yZWYzLnByb3BzLFxuICAgICAgYWN0aW9ucyA9IF9yZWYzLmFjdGlvbnM7XG5cbiAgICAvLyByb3V0ZSBhY3Rpb25zXG4gICAgcm91dGUkNSh7IHJvb3Q6IHJvb3QsIHByb3BzOiBwcm9wcywgYWN0aW9uczogYWN0aW9ucyB9KTtcblxuICAgIC8vIGFwcGx5IHN0eWxlIHByb3BlcnRpZXNcbiAgICBhY3Rpb25zXG4gICAgICAuZmlsdGVyKGZ1bmN0aW9uKGFjdGlvbikge1xuICAgICAgICByZXR1cm4gL15ESURfU0VUX1NUWUxFXy8udGVzdChhY3Rpb24udHlwZSk7XG4gICAgICB9KVxuICAgICAgLmZpbHRlcihmdW5jdGlvbihhY3Rpb24pIHtcbiAgICAgICAgcmV0dXJuICFpc0VtcHR5KGFjdGlvbi5kYXRhLnZhbHVlKTtcbiAgICAgIH0pXG4gICAgICAubWFwKGZ1bmN0aW9uKF9yZWY0KSB7XG4gICAgICAgIHZhciB0eXBlID0gX3JlZjQudHlwZSxcbiAgICAgICAgICBkYXRhID0gX3JlZjQuZGF0YTtcbiAgICAgICAgdmFyIG5hbWUgPSB0b0NhbWVscyh0eXBlLnN1YnN0cig4KS50b0xvd2VyQ2FzZSgpLCAnXycpO1xuICAgICAgICByb290LmVsZW1lbnQuZGF0YXNldFtuYW1lXSA9IGRhdGEudmFsdWU7XG4gICAgICAgIHJvb3QuaW52YWxpZGF0ZUxheW91dCgpO1xuICAgICAgfSk7XG5cbiAgICBpZiAocm9vdC5yZWN0LmVsZW1lbnQuaGlkZGVuKSByZXR1cm47XG5cbiAgICBpZiAocm9vdC5yZWN0LmVsZW1lbnQud2lkdGggIT09IHJvb3QucmVmLndpZHRoUHJldmlvdXMpIHtcbiAgICAgIHJvb3QucmVmLndpZHRoUHJldmlvdXMgPSByb290LnJlY3QuZWxlbWVudC53aWR0aDtcbiAgICAgIHJvb3QucmVmLndpZHRoVXBkYXRlZCgpO1xuICAgIH1cblxuICAgIC8vIGdldCBib3ggYm91bmRzLCB3ZSBkbyB0aGlzIG9ubHkgb25jZVxuICAgIHZhciBib3VuZHMgPSByb290LnJlZi5ib3VuZHM7XG4gICAgaWYgKCFib3VuZHMpIHtcbiAgICAgIGJvdW5kcyA9IHJvb3QucmVmLmJvdW5kcyA9IGNhbGN1bGF0ZVJvb3RCb3VuZGluZ0JveEhlaWdodChyb290KTtcblxuICAgICAgLy8gZGVzdHJveSBtZWFzdXJlIGVsZW1lbnRcbiAgICAgIHJvb3QuZWxlbWVudC5yZW1vdmVDaGlsZChyb290LnJlZi5tZWFzdXJlKTtcbiAgICAgIHJvb3QucmVmLm1lYXN1cmUgPSBudWxsO1xuICAgIH1cblxuICAgIC8vIGdldCBxdWljayByZWZlcmVuY2VzIHRvIHZhcmlvdXMgaGlnaCBsZXZlbCBwYXJ0cyBvZiB0aGUgdXBsb2FkIHRvb2xcbiAgICB2YXIgX3Jvb3QkcmVmID0gcm9vdC5yZWYsXG4gICAgICBob3BwZXIgPSBfcm9vdCRyZWYuaG9wcGVyLFxuICAgICAgbGFiZWwgPSBfcm9vdCRyZWYubGFiZWwsXG4gICAgICBsaXN0ID0gX3Jvb3QkcmVmLmxpc3QsXG4gICAgICBwYW5lbCA9IF9yb290JHJlZi5wYW5lbDtcblxuICAgIC8vIHNldHMgY29ycmVjdCBzdGF0ZSB0byBob3BwZXIgc2NvcGVcbiAgICBpZiAoaG9wcGVyKSB7XG4gICAgICBob3BwZXIudXBkYXRlSG9wcGVyU3RhdGUoKTtcbiAgICB9XG5cbiAgICAvLyBib29sIHRvIGluZGljYXRlIGlmIHdlJ3JlIGZ1bGwgb3Igbm90XG4gICAgdmFyIGFzcGVjdFJhdGlvID0gcm9vdC5xdWVyeSgnR0VUX1BBTkVMX0FTUEVDVF9SQVRJTycpO1xuICAgIHZhciBpc011bHRpSXRlbSA9IHJvb3QucXVlcnkoJ0dFVF9BTExPV19NVUxUSVBMRScpO1xuICAgIHZhciB0b3RhbEl0ZW1zID0gcm9vdC5xdWVyeSgnR0VUX1RPVEFMX0lURU1TJyk7XG4gICAgdmFyIG1heEl0ZW1zID0gaXNNdWx0aUl0ZW1cbiAgICAgID8gcm9vdC5xdWVyeSgnR0VUX01BWF9GSUxFUycpIHx8IE1BWF9GSUxFU19MSU1JVFxuICAgICAgOiAxO1xuICAgIHZhciBhdE1heENhcGFjaXR5ID0gdG90YWxJdGVtcyA9PT0gbWF4SXRlbXM7XG5cbiAgICAvLyBhY3Rpb24gdXNlZCB0byBhZGQgaXRlbVxuICAgIHZhciBhZGRBY3Rpb24gPSBhY3Rpb25zLmZpbmQoZnVuY3Rpb24oYWN0aW9uKSB7XG4gICAgICByZXR1cm4gYWN0aW9uLnR5cGUgPT09ICdESURfQUREX0lURU0nO1xuICAgIH0pO1xuXG4gICAgLy8gaWYgcmVhY2hlZCBtYXggY2FwYWNpdHkgYW5kIHdlJ3ZlIGp1c3QgcmVhY2hlZCBpdFxuICAgIGlmIChhdE1heENhcGFjaXR5ICYmIGFkZEFjdGlvbikge1xuICAgICAgLy8gZ2V0IGludGVyYWN0aW9uIHR5cGVcbiAgICAgIHZhciBpbnRlcmFjdGlvbk1ldGhvZCA9IGFkZEFjdGlvbi5kYXRhLmludGVyYWN0aW9uTWV0aG9kO1xuXG4gICAgICAvLyBoaWRlIGxhYmVsXG4gICAgICBsYWJlbC5vcGFjaXR5ID0gMDtcblxuICAgICAgaWYgKGlzTXVsdGlJdGVtKSB7XG4gICAgICAgIGxhYmVsLnRyYW5zbGF0ZVkgPSAtNDA7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoaW50ZXJhY3Rpb25NZXRob2QgPT09IEludGVyYWN0aW9uTWV0aG9kLkFQSSkge1xuICAgICAgICAgIGxhYmVsLnRyYW5zbGF0ZVggPSA0MDtcbiAgICAgICAgfSBlbHNlIGlmIChpbnRlcmFjdGlvbk1ldGhvZCA9PT0gSW50ZXJhY3Rpb25NZXRob2QuQlJPV1NFKSB7XG4gICAgICAgICAgbGFiZWwudHJhbnNsYXRlWSA9IDQwO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGxhYmVsLnRyYW5zbGF0ZVkgPSAzMDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoIWF0TWF4Q2FwYWNpdHkpIHtcbiAgICAgIGxhYmVsLm9wYWNpdHkgPSAxO1xuICAgICAgbGFiZWwudHJhbnNsYXRlWCA9IDA7XG4gICAgICBsYWJlbC50cmFuc2xhdGVZID0gMDtcbiAgICB9XG5cbiAgICB2YXIgbGlzdEl0ZW1NYXJnaW4gPSBjYWxjdWxhdGVMaXN0SXRlbU1hcmdpbihyb290KTtcblxuICAgIHZhciBsaXN0SGVpZ2h0ID0gY2FsY3VsYXRlTGlzdEhlaWdodChyb290KTtcblxuICAgIHZhciBsYWJlbEhlaWdodCA9IGxhYmVsLnJlY3QuZWxlbWVudC5oZWlnaHQ7XG4gICAgdmFyIGN1cnJlbnRMYWJlbEhlaWdodCA9ICFpc011bHRpSXRlbSB8fCBhdE1heENhcGFjaXR5ID8gMCA6IGxhYmVsSGVpZ2h0O1xuXG4gICAgdmFyIGxpc3RNYXJnaW5Ub3AgPSBhdE1heENhcGFjaXR5ID8gbGlzdC5yZWN0LmVsZW1lbnQubWFyZ2luVG9wIDogMDtcbiAgICB2YXIgbGlzdE1hcmdpbkJvdHRvbSA9XG4gICAgICB0b3RhbEl0ZW1zID09PSAwID8gMCA6IGxpc3QucmVjdC5lbGVtZW50Lm1hcmdpbkJvdHRvbTtcblxuICAgIHZhciB2aXN1YWxIZWlnaHQgPVxuICAgICAgY3VycmVudExhYmVsSGVpZ2h0ICsgbGlzdE1hcmdpblRvcCArIGxpc3RIZWlnaHQudmlzdWFsICsgbGlzdE1hcmdpbkJvdHRvbTtcbiAgICB2YXIgYm91bmRzSGVpZ2h0ID1cbiAgICAgIGN1cnJlbnRMYWJlbEhlaWdodCArIGxpc3RNYXJnaW5Ub3AgKyBsaXN0SGVpZ2h0LmJvdW5kcyArIGxpc3RNYXJnaW5Cb3R0b207XG5cbiAgICAvLyBsaW5rIGxpc3QgdG8gbGFiZWwgYm90dG9tIHBvc2l0aW9uXG4gICAgbGlzdC50cmFuc2xhdGVZID1cbiAgICAgIE1hdGgubWF4KDAsIGN1cnJlbnRMYWJlbEhlaWdodCAtIGxpc3QucmVjdC5lbGVtZW50Lm1hcmdpblRvcCkgLVxuICAgICAgbGlzdEl0ZW1NYXJnaW4udG9wO1xuXG4gICAgaWYgKGFzcGVjdFJhdGlvKSB7XG4gICAgICAvLyBmaXhlZCBhc3BlY3QgcmF0aW9cblxuICAgICAgLy8gY2FsY3VsYXRlIGhlaWdodCBiYXNlZCBvbiB3aWR0aFxuICAgICAgdmFyIHdpZHRoID0gcm9vdC5yZWN0LmVsZW1lbnQud2lkdGg7XG4gICAgICB2YXIgaGVpZ2h0ID0gd2lkdGggKiBhc3BlY3RSYXRpbztcblxuICAgICAgLy8gY2xlYXIgaGlzdG9yeSBpZiBhc3BlY3QgcmF0aW8gaGFzIGNoYW5nZWRcbiAgICAgIGlmIChhc3BlY3RSYXRpbyAhPT0gcm9vdC5yZWYucHJldmlvdXNBc3BlY3RSYXRpbykge1xuICAgICAgICByb290LnJlZi5wcmV2aW91c0FzcGVjdFJhdGlvID0gYXNwZWN0UmF0aW87XG4gICAgICAgIHJvb3QucmVmLnVwZGF0ZUhpc3RvcnkgPSBbXTtcbiAgICAgIH1cblxuICAgICAgLy8gcmVtZW1iZXIgdGhpcyB3aWR0aFxuICAgICAgdmFyIGhpc3RvcnkgPSByb290LnJlZi51cGRhdGVIaXN0b3J5O1xuICAgICAgaGlzdG9yeS5wdXNoKHdpZHRoKTtcblxuICAgICAgdmFyIE1BWF9CT1VOQ0VTID0gMjtcbiAgICAgIGlmIChoaXN0b3J5Lmxlbmd0aCA+IE1BWF9CT1VOQ0VTICogMikge1xuICAgICAgICB2YXIgbCA9IGhpc3RvcnkubGVuZ3RoO1xuICAgICAgICB2YXIgYm90dG9tID0gbCAtIDEwO1xuICAgICAgICB2YXIgYm91bmNlcyA9IDA7XG4gICAgICAgIGZvciAodmFyIGkgPSBsOyBpID49IGJvdHRvbTsgaS0tKSB7XG4gICAgICAgICAgaWYgKGhpc3RvcnlbaV0gPT09IGhpc3RvcnlbaSAtIDJdKSB7XG4gICAgICAgICAgICBib3VuY2VzKys7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKGJvdW5jZXMgPj0gTUFYX0JPVU5DRVMpIHtcbiAgICAgICAgICAgIC8vIGRvbnQgYWRqdXN0IGhlaWdodFxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBmaXggaGVpZ2h0IG9mIHBhbmVsIHNvIGl0IGFkaGVyZXMgdG8gYXNwZWN0IHJhdGlvXG4gICAgICBwYW5lbC5zY2FsYWJsZSA9IGZhbHNlO1xuICAgICAgcGFuZWwuaGVpZ2h0ID0gaGVpZ2h0O1xuXG4gICAgICAvLyBhdmFpbGFibGUgaGVpZ2h0IGZvciBsaXN0XG4gICAgICB2YXIgbGlzdEF2YWlsYWJsZUhlaWdodCA9XG4gICAgICAgIC8vIHRoZSBoZWlnaHQgb2YgdGhlIHBhbmVsIG1pbnVzIHRoZSBsYWJlbCBoZWlnaHRcbiAgICAgICAgaGVpZ2h0IC1cbiAgICAgICAgY3VycmVudExhYmVsSGVpZ2h0IC1cbiAgICAgICAgLy8gdGhlIHJvb20gd2UgbGVhdmUgb3BlbiBiZXR3ZWVuIHRoZSBlbmQgb2YgdGhlIGxpc3QgYW5kIHRoZSBwYW5lbCBib3R0b21cbiAgICAgICAgKGxpc3RNYXJnaW5Cb3R0b20gLSBsaXN0SXRlbU1hcmdpbi5ib3R0b20pIC1cbiAgICAgICAgLy8gaWYgd2UncmUgZnVsbCB3ZSBuZWVkIHRvIGxlYXZlIHNvbWUgcm9vbSBiZXR3ZWVuIHRoZSB0b3Agb2YgdGhlIHBhbmVsIGFuZCB0aGUgbGlzdFxuICAgICAgICAoYXRNYXhDYXBhY2l0eSA/IGxpc3RNYXJnaW5Ub3AgOiAwKTtcblxuICAgICAgaWYgKGxpc3RIZWlnaHQudmlzdWFsID4gbGlzdEF2YWlsYWJsZUhlaWdodCkge1xuICAgICAgICBsaXN0Lm92ZXJmbG93ID0gbGlzdEF2YWlsYWJsZUhlaWdodDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxpc3Qub3ZlcmZsb3cgPSBudWxsO1xuICAgICAgfVxuXG4gICAgICAvLyBzZXQgY29udGFpbmVyIGJvdW5kcyAoc28gcHVzaGVzIHNpYmxpbmdzIGRvd253YXJkcylcbiAgICAgIHJvb3QuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgIH0gZWxzZSBpZiAoYm91bmRzLmZpeGVkSGVpZ2h0KSB7XG4gICAgICAvLyBmaXhlZCBoZWlnaHRcblxuICAgICAgLy8gZml4IGhlaWdodCBvZiBwYW5lbFxuICAgICAgcGFuZWwuc2NhbGFibGUgPSBmYWxzZTtcblxuICAgICAgLy8gYXZhaWxhYmxlIGhlaWdodCBmb3IgbGlzdFxuICAgICAgdmFyIF9saXN0QXZhaWxhYmxlSGVpZ2h0ID1cbiAgICAgICAgLy8gdGhlIGhlaWdodCBvZiB0aGUgcGFuZWwgbWludXMgdGhlIGxhYmVsIGhlaWdodFxuICAgICAgICBib3VuZHMuZml4ZWRIZWlnaHQgLVxuICAgICAgICBjdXJyZW50TGFiZWxIZWlnaHQgLVxuICAgICAgICAvLyB0aGUgcm9vbSB3ZSBsZWF2ZSBvcGVuIGJldHdlZW4gdGhlIGVuZCBvZiB0aGUgbGlzdCBhbmQgdGhlIHBhbmVsIGJvdHRvbVxuICAgICAgICAobGlzdE1hcmdpbkJvdHRvbSAtIGxpc3RJdGVtTWFyZ2luLmJvdHRvbSkgLVxuICAgICAgICAvLyBpZiB3ZSdyZSBmdWxsIHdlIG5lZWQgdG8gbGVhdmUgc29tZSByb29tIGJldHdlZW4gdGhlIHRvcCBvZiB0aGUgcGFuZWwgYW5kIHRoZSBsaXN0XG4gICAgICAgIChhdE1heENhcGFjaXR5ID8gbGlzdE1hcmdpblRvcCA6IDApO1xuXG4gICAgICAvLyBzZXQgbGlzdCBoZWlnaHRcbiAgICAgIGlmIChsaXN0SGVpZ2h0LnZpc3VhbCA+IF9saXN0QXZhaWxhYmxlSGVpZ2h0KSB7XG4gICAgICAgIGxpc3Qub3ZlcmZsb3cgPSBfbGlzdEF2YWlsYWJsZUhlaWdodDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxpc3Qub3ZlcmZsb3cgPSBudWxsO1xuICAgICAgfVxuXG4gICAgICAvLyBubyBuZWVkIHRvIHNldCBjb250YWluZXIgYm91bmRzIGFzIHRoZXNlIGFyZSBoYW5kbGVzIGJ5IENTUyBmaXhlZCBoZWlnaHRcbiAgICB9IGVsc2UgaWYgKGJvdW5kcy5jYXBwZWRIZWlnaHQpIHtcbiAgICAgIC8vIG1heC1oZWlnaHRcblxuICAgICAgLy8gbm90IGEgZml4ZWQgaGVpZ2h0IHBhbmVsXG4gICAgICB2YXIgaXNDYXBwZWRIZWlnaHQgPSB2aXN1YWxIZWlnaHQgPj0gYm91bmRzLmNhcHBlZEhlaWdodDtcbiAgICAgIHZhciBwYW5lbEhlaWdodCA9IE1hdGgubWluKGJvdW5kcy5jYXBwZWRIZWlnaHQsIHZpc3VhbEhlaWdodCk7XG4gICAgICBwYW5lbC5zY2FsYWJsZSA9IHRydWU7XG4gICAgICBwYW5lbC5oZWlnaHQgPSBpc0NhcHBlZEhlaWdodFxuICAgICAgICA/IHBhbmVsSGVpZ2h0XG4gICAgICAgIDogcGFuZWxIZWlnaHQgLSBsaXN0SXRlbU1hcmdpbi50b3AgLSBsaXN0SXRlbU1hcmdpbi5ib3R0b207XG5cbiAgICAgIC8vIGF2YWlsYWJsZSBoZWlnaHQgZm9yIGxpc3RcbiAgICAgIHZhciBfbGlzdEF2YWlsYWJsZUhlaWdodDIgPVxuICAgICAgICAvLyB0aGUgaGVpZ2h0IG9mIHRoZSBwYW5lbCBtaW51cyB0aGUgbGFiZWwgaGVpZ2h0XG4gICAgICAgIHBhbmVsSGVpZ2h0IC1cbiAgICAgICAgY3VycmVudExhYmVsSGVpZ2h0IC1cbiAgICAgICAgLy8gdGhlIHJvb20gd2UgbGVhdmUgb3BlbiBiZXR3ZWVuIHRoZSBlbmQgb2YgdGhlIGxpc3QgYW5kIHRoZSBwYW5lbCBib3R0b21cbiAgICAgICAgKGxpc3RNYXJnaW5Cb3R0b20gLSBsaXN0SXRlbU1hcmdpbi5ib3R0b20pIC1cbiAgICAgICAgLy8gaWYgd2UncmUgZnVsbCB3ZSBuZWVkIHRvIGxlYXZlIHNvbWUgcm9vbSBiZXR3ZWVuIHRoZSB0b3Agb2YgdGhlIHBhbmVsIGFuZCB0aGUgbGlzdFxuICAgICAgICAoYXRNYXhDYXBhY2l0eSA/IGxpc3RNYXJnaW5Ub3AgOiAwKTtcblxuICAgICAgLy8gc2V0IGxpc3QgaGVpZ2h0IChpZiBpcyBvdmVyZmxvd2luZylcbiAgICAgIGlmIChcbiAgICAgICAgdmlzdWFsSGVpZ2h0ID4gYm91bmRzLmNhcHBlZEhlaWdodCAmJlxuICAgICAgICBsaXN0SGVpZ2h0LnZpc3VhbCA+IF9saXN0QXZhaWxhYmxlSGVpZ2h0MlxuICAgICAgKSB7XG4gICAgICAgIGxpc3Qub3ZlcmZsb3cgPSBfbGlzdEF2YWlsYWJsZUhlaWdodDI7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsaXN0Lm92ZXJmbG93ID0gbnVsbDtcbiAgICAgIH1cblxuICAgICAgLy8gc2V0IGNvbnRhaW5lciBib3VuZHMgKHNvIHB1c2hlcyBzaWJsaW5ncyBkb3dud2FyZHMpXG4gICAgICByb290LmhlaWdodCA9IE1hdGgubWluKFxuICAgICAgICBib3VuZHMuY2FwcGVkSGVpZ2h0LFxuICAgICAgICBib3VuZHNIZWlnaHQgLSBsaXN0SXRlbU1hcmdpbi50b3AgLSBsaXN0SXRlbU1hcmdpbi5ib3R0b21cbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGZsZXhpYmxlIGhlaWdodFxuXG4gICAgICAvLyBub3QgYSBmaXhlZCBoZWlnaHQgcGFuZWxcbiAgICAgIHZhciBpdGVtTWFyZ2luID1cbiAgICAgICAgdG90YWxJdGVtcyA+IDAgPyBsaXN0SXRlbU1hcmdpbi50b3AgKyBsaXN0SXRlbU1hcmdpbi5ib3R0b20gOiAwO1xuICAgICAgcGFuZWwuc2NhbGFibGUgPSB0cnVlO1xuICAgICAgcGFuZWwuaGVpZ2h0ID0gTWF0aC5tYXgobGFiZWxIZWlnaHQsIHZpc3VhbEhlaWdodCAtIGl0ZW1NYXJnaW4pO1xuXG4gICAgICAvLyBzZXQgY29udGFpbmVyIGJvdW5kcyAoc28gcHVzaGVzIHNpYmxpbmdzIGRvd253YXJkcylcbiAgICAgIHJvb3QuaGVpZ2h0ID0gTWF0aC5tYXgobGFiZWxIZWlnaHQsIGJvdW5kc0hlaWdodCAtIGl0ZW1NYXJnaW4pO1xuICAgIH1cbiAgfTtcblxuICB2YXIgY2FsY3VsYXRlTGlzdEl0ZW1NYXJnaW4gPSBmdW5jdGlvbiBjYWxjdWxhdGVMaXN0SXRlbU1hcmdpbihyb290KSB7XG4gICAgdmFyIGl0ZW0gPSByb290LnJlZi5saXN0LmNoaWxkVmlld3NbMF0uY2hpbGRWaWV3c1swXTtcbiAgICByZXR1cm4gaXRlbVxuICAgICAgPyB7XG4gICAgICAgICAgdG9wOiBpdGVtLnJlY3QuZWxlbWVudC5tYXJnaW5Ub3AsXG4gICAgICAgICAgYm90dG9tOiBpdGVtLnJlY3QuZWxlbWVudC5tYXJnaW5Cb3R0b21cbiAgICAgICAgfVxuICAgICAgOiB7XG4gICAgICAgICAgdG9wOiAwLFxuICAgICAgICAgIGJvdHRvbTogMFxuICAgICAgICB9O1xuICB9O1xuXG4gIHZhciBjYWxjdWxhdGVMaXN0SGVpZ2h0ID0gZnVuY3Rpb24gY2FsY3VsYXRlTGlzdEhlaWdodChyb290KSB7XG4gICAgdmFyIHZpc3VhbCA9IDA7XG4gICAgdmFyIGJvdW5kcyA9IDA7XG5cbiAgICAvLyBnZXQgZmlsZSBsaXN0IHJlZmVyZW5jZVxuICAgIHZhciBzY3JvbGxMaXN0ID0gcm9vdC5yZWYubGlzdDtcbiAgICB2YXIgaXRlbUxpc3QgPSBzY3JvbGxMaXN0LmNoaWxkVmlld3NbMF07XG4gICAgdmFyIGNoaWxkcmVuID0gaXRlbUxpc3QuY2hpbGRWaWV3cztcblxuICAgIC8vIG5vIGNoaWxkcmVuLCBkb25lIVxuICAgIGlmIChjaGlsZHJlbi5sZW5ndGggPT09IDApIHJldHVybiB7IHZpc3VhbDogdmlzdWFsLCBib3VuZHM6IGJvdW5kcyB9O1xuXG4gICAgdmFyIGhvcml6b250YWxTcGFjZSA9IGl0ZW1MaXN0LnJlY3QuZWxlbWVudC53aWR0aDtcbiAgICB2YXIgZHJhZ0luZGV4ID0gZ2V0SXRlbUluZGV4QnlQb3NpdGlvbihcbiAgICAgIGl0ZW1MaXN0LFxuICAgICAgc2Nyb2xsTGlzdC5kcmFnQ29vcmRpbmF0ZXNcbiAgICApO1xuXG4gICAgdmFyIGNoaWxkUmVjdCA9IGNoaWxkcmVuWzBdLnJlY3QuZWxlbWVudDtcblxuICAgIHZhciBpdGVtVmVydGljYWxNYXJnaW4gPSBjaGlsZFJlY3QubWFyZ2luVG9wICsgY2hpbGRSZWN0Lm1hcmdpbkJvdHRvbTtcbiAgICB2YXIgaXRlbUhvcml6b250YWxNYXJnaW4gPSBjaGlsZFJlY3QubWFyZ2luTGVmdCArIGNoaWxkUmVjdC5tYXJnaW5SaWdodDtcblxuICAgIHZhciBpdGVtV2lkdGggPSBjaGlsZFJlY3Qud2lkdGggKyBpdGVtSG9yaXpvbnRhbE1hcmdpbjtcbiAgICB2YXIgaXRlbUhlaWdodCA9IGNoaWxkUmVjdC5oZWlnaHQgKyBpdGVtVmVydGljYWxNYXJnaW47XG5cbiAgICB2YXIgbmV3SXRlbSA9IHR5cGVvZiBkcmFnSW5kZXggIT09ICd1bmRlZmluZWQnICYmIGRyYWdJbmRleCA+PSAwID8gMSA6IDA7XG4gICAgdmFyIHJlbW92ZWRJdGVtID0gY2hpbGRyZW4uZmluZChmdW5jdGlvbihjaGlsZCkge1xuICAgICAgcmV0dXJuIGNoaWxkLm1hcmtlZEZvclJlbW92YWwgJiYgY2hpbGQub3BhY2l0eSA8IDAuNDU7XG4gICAgfSlcbiAgICAgID8gLTFcbiAgICAgIDogMDtcbiAgICB2YXIgdmVydGljYWxJdGVtQ291bnQgPSBjaGlsZHJlbi5sZW5ndGggKyBuZXdJdGVtICsgcmVtb3ZlZEl0ZW07XG4gICAgdmFyIGl0ZW1zUGVyUm93ID0gTWF0aC5yb3VuZChob3Jpem9udGFsU3BhY2UgLyBpdGVtV2lkdGgpO1xuXG4gICAgLy8gc3RhY2tcbiAgICBpZiAoaXRlbXNQZXJSb3cgPT09IDEpIHtcbiAgICAgIGNoaWxkcmVuLmZvckVhY2goZnVuY3Rpb24oaXRlbSkge1xuICAgICAgICB2YXIgaGVpZ2h0ID0gaXRlbS5yZWN0LmVsZW1lbnQuaGVpZ2h0ICsgaXRlbVZlcnRpY2FsTWFyZ2luO1xuICAgICAgICBib3VuZHMgKz0gaGVpZ2h0O1xuICAgICAgICB2aXN1YWwgKz0gaGVpZ2h0ICogaXRlbS5vcGFjaXR5O1xuICAgICAgfSk7XG4gICAgfVxuICAgIC8vIGdyaWRcbiAgICBlbHNlIHtcbiAgICAgIGJvdW5kcyA9IE1hdGguY2VpbCh2ZXJ0aWNhbEl0ZW1Db3VudCAvIGl0ZW1zUGVyUm93KSAqIGl0ZW1IZWlnaHQ7XG4gICAgICB2aXN1YWwgPSBib3VuZHM7XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgdmlzdWFsOiB2aXN1YWwsIGJvdW5kczogYm91bmRzIH07XG4gIH07XG5cbiAgdmFyIGNhbGN1bGF0ZVJvb3RCb3VuZGluZ0JveEhlaWdodCA9IGZ1bmN0aW9uIGNhbGN1bGF0ZVJvb3RCb3VuZGluZ0JveEhlaWdodChcbiAgICByb290XG4gICkge1xuICAgIHZhciBoZWlnaHQgPSByb290LnJlZi5tZWFzdXJlSGVpZ2h0IHx8IG51bGw7XG4gICAgdmFyIGNhcHBlZEhlaWdodCA9IHBhcnNlSW50KHJvb3Quc3R5bGUubWF4SGVpZ2h0LCAxMCkgfHwgbnVsbDtcbiAgICB2YXIgZml4ZWRIZWlnaHQgPSBoZWlnaHQgPT09IDAgPyBudWxsIDogaGVpZ2h0O1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIGNhcHBlZEhlaWdodDogY2FwcGVkSGVpZ2h0LFxuICAgICAgZml4ZWRIZWlnaHQ6IGZpeGVkSGVpZ2h0XG4gICAgfTtcbiAgfTtcblxuICB2YXIgZXhjZWVkc01heEZpbGVzID0gZnVuY3Rpb24gZXhjZWVkc01heEZpbGVzKHJvb3QsIGl0ZW1zKSB7XG4gICAgdmFyIGFsbG93UmVwbGFjZSA9IHJvb3QucXVlcnkoJ0dFVF9BTExPV19SRVBMQUNFJyk7XG4gICAgdmFyIGFsbG93TXVsdGlwbGUgPSByb290LnF1ZXJ5KCdHRVRfQUxMT1dfTVVMVElQTEUnKTtcbiAgICB2YXIgdG90YWxJdGVtcyA9IHJvb3QucXVlcnkoJ0dFVF9UT1RBTF9JVEVNUycpO1xuICAgIHZhciBtYXhJdGVtcyA9IHJvb3QucXVlcnkoJ0dFVF9NQVhfRklMRVMnKTtcblxuICAgIC8vIHRvdGFsIGFtb3VudCBvZiBpdGVtcyBiZWluZyBkcmFnZ2VkXG4gICAgdmFyIHRvdGFsQnJvd3NlSXRlbXMgPSBpdGVtcy5sZW5ndGg7XG5cbiAgICAvLyBpZiBkb2VzIG5vdCBhbGxvdyBtdWx0aXBsZSBpdGVtcyBhbmQgZHJhZ2dpbmcgbW9yZSB0aGFuIG9uZSBpdGVtXG4gICAgaWYgKCFhbGxvd011bHRpcGxlICYmIHRvdGFsQnJvd3NlSXRlbXMgPiAxKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICAvLyBsaW1pdCBtYXggaXRlbXMgdG8gb25lIGlmIG5vdCBhbGxvd2VkIHRvIGRyb3AgbXVsdGlwbGUgaXRlbXNcbiAgICBtYXhJdGVtcyA9IGFsbG93TXVsdGlwbGUgPyBtYXhJdGVtcyA6IGFsbG93UmVwbGFjZSA/IG1heEl0ZW1zIDogMTtcblxuICAgIC8vIG5vIG1vcmUgcm9vbT9cbiAgICB2YXIgaGFzTWF4SXRlbXMgPSBpc0ludChtYXhJdGVtcyk7XG4gICAgaWYgKGhhc01heEl0ZW1zICYmIHRvdGFsSXRlbXMgKyB0b3RhbEJyb3dzZUl0ZW1zID4gbWF4SXRlbXMpIHtcbiAgICAgIHJvb3QuZGlzcGF0Y2goJ0RJRF9USFJPV19NQVhfRklMRVMnLCB7XG4gICAgICAgIHNvdXJjZTogaXRlbXMsXG4gICAgICAgIGVycm9yOiBjcmVhdGVSZXNwb25zZSgnd2FybmluZycsIDAsICdNYXggZmlsZXMnKVxuICAgICAgfSk7XG5cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbiAgfTtcblxuICB2YXIgZ2V0RHJhZ0luZGV4ID0gZnVuY3Rpb24gZ2V0RHJhZ0luZGV4KGxpc3QsIHBvc2l0aW9uKSB7XG4gICAgdmFyIGl0ZW1MaXN0ID0gbGlzdC5jaGlsZFZpZXdzWzBdO1xuICAgIHJldHVybiBnZXRJdGVtSW5kZXhCeVBvc2l0aW9uKGl0ZW1MaXN0LCB7XG4gICAgICBsZWZ0OiBwb3NpdGlvbi5zY29wZUxlZnQgLSBpdGVtTGlzdC5yZWN0LmVsZW1lbnQubGVmdCxcbiAgICAgIHRvcDpcbiAgICAgICAgcG9zaXRpb24uc2NvcGVUb3AgLVxuICAgICAgICAobGlzdC5yZWN0Lm91dGVyLnRvcCArXG4gICAgICAgICAgbGlzdC5yZWN0LmVsZW1lbnQubWFyZ2luVG9wICtcbiAgICAgICAgICBsaXN0LnJlY3QuZWxlbWVudC5zY3JvbGxUb3ApXG4gICAgfSk7XG4gIH07XG5cbiAgLyoqXG4gICAqIEVuYWJsZSBvciBkaXNhYmxlIGZpbGUgZHJvcCBmdW5jdGlvbmFsaXR5XG4gICAqL1xuICB2YXIgdG9nZ2xlRHJvcCA9IGZ1bmN0aW9uIHRvZ2dsZURyb3Aocm9vdCkge1xuICAgIHZhciBpc0FsbG93ZWQgPSByb290LnF1ZXJ5KCdHRVRfQUxMT1dfRFJPUCcpO1xuICAgIHZhciBpc0Rpc2FibGVkID0gcm9vdC5xdWVyeSgnR0VUX0RJU0FCTEVEJyk7XG4gICAgdmFyIGVuYWJsZWQgPSBpc0FsbG93ZWQgJiYgIWlzRGlzYWJsZWQ7XG4gICAgaWYgKGVuYWJsZWQgJiYgIXJvb3QucmVmLmhvcHBlcikge1xuICAgICAgdmFyIGhvcHBlciA9IGNyZWF0ZUhvcHBlcihcbiAgICAgICAgcm9vdC5lbGVtZW50LFxuICAgICAgICBmdW5jdGlvbihpdGVtcykge1xuICAgICAgICAgIC8vIHRoZXNlIGZpbGVzIGRvbid0IGZpdCBzbyBzdG9wIGhlcmVcbiAgICAgICAgICBpZiAoZXhjZWVkc01heEZpbGVzKHJvb3QsIGl0ZW1zKSkgcmV0dXJuIGZhbHNlO1xuXG4gICAgICAgICAgLy8gYWxsb3cgcXVpY2sgdmFsaWRhdGlvbiBvZiBkcm9wcGVkIGl0ZW1zXG4gICAgICAgICAgdmFyIGJlZm9yZURyb3BGaWxlID1cbiAgICAgICAgICAgIHJvb3QucXVlcnkoJ0dFVF9CRUZPUkVfRFJPUF9GSUxFJykgfHxcbiAgICAgICAgICAgIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAvLyBhbGwgaXRlbXMgc2hvdWxkIGJlIHZhbGlkYXRlZCBieSBhbGwgZmlsdGVycyBhcyB2YWxpZFxuICAgICAgICAgIHZhciBkcm9wVmFsaWRhdGlvbiA9IHJvb3QucXVlcnkoJ0dFVF9EUk9QX1ZBTElEQVRJT04nKTtcbiAgICAgICAgICByZXR1cm4gZHJvcFZhbGlkYXRpb25cbiAgICAgICAgICAgID8gaXRlbXMuZXZlcnkoZnVuY3Rpb24oaXRlbSkge1xuICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICBhcHBseUZpbHRlcnMoJ0FMTE9XX0hPUFBFUl9JVEVNJywgaXRlbSwge1xuICAgICAgICAgICAgICAgICAgICBxdWVyeTogcm9vdC5xdWVyeVxuICAgICAgICAgICAgICAgICAgfSkuZXZlcnkoZnVuY3Rpb24ocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQgPT09IHRydWU7XG4gICAgICAgICAgICAgICAgICB9KSAmJiBiZWZvcmVEcm9wRmlsZShpdGVtKVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICA6IHRydWU7XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBmaWx0ZXJJdGVtczogZnVuY3Rpb24gZmlsdGVySXRlbXMoaXRlbXMpIHtcbiAgICAgICAgICAgIHZhciBpZ25vcmVkRmlsZXMgPSByb290LnF1ZXJ5KCdHRVRfSUdOT1JFRF9GSUxFUycpO1xuICAgICAgICAgICAgcmV0dXJuIGl0ZW1zLmZpbHRlcihmdW5jdGlvbihpdGVtKSB7XG4gICAgICAgICAgICAgIGlmIChpc0ZpbGUoaXRlbSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gIWlnbm9yZWRGaWxlcy5pbmNsdWRlcyhpdGVtLm5hbWUudG9Mb3dlckNhc2UoKSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIGNhdGNoZXNEcm9wc09uUGFnZTogcm9vdC5xdWVyeSgnR0VUX0RST1BfT05fUEFHRScpLFxuICAgICAgICAgIHJlcXVpcmVzRHJvcE9uRWxlbWVudDogcm9vdC5xdWVyeSgnR0VUX0RST1BfT05fRUxFTUVOVCcpXG4gICAgICAgIH1cbiAgICAgICk7XG5cbiAgICAgIGhvcHBlci5vbmxvYWQgPSBmdW5jdGlvbihpdGVtcywgcG9zaXRpb24pIHtcbiAgICAgICAgcm9vdC5kaXNwYXRjaCgnQUREX0lURU1TJywge1xuICAgICAgICAgIGl0ZW1zOiBpdGVtcyxcbiAgICAgICAgICBpbmRleDogZ2V0RHJhZ0luZGV4KHJvb3QucmVmLmxpc3QsIHBvc2l0aW9uKSxcbiAgICAgICAgICBpbnRlcmFjdGlvbk1ldGhvZDogSW50ZXJhY3Rpb25NZXRob2QuRFJPUFxuICAgICAgICB9KTtcblxuICAgICAgICByb290LmRpc3BhdGNoKCdESURfRFJPUCcsIHsgcG9zaXRpb246IHBvc2l0aW9uIH0pO1xuXG4gICAgICAgIHJvb3QuZGlzcGF0Y2goJ0RJRF9FTkRfRFJBRycsIHsgcG9zaXRpb246IHBvc2l0aW9uIH0pO1xuICAgICAgfTtcblxuICAgICAgaG9wcGVyLm9uZHJhZ3N0YXJ0ID0gZnVuY3Rpb24ocG9zaXRpb24pIHtcbiAgICAgICAgcm9vdC5kaXNwYXRjaCgnRElEX1NUQVJUX0RSQUcnLCB7IHBvc2l0aW9uOiBwb3NpdGlvbiB9KTtcbiAgICAgIH07XG5cbiAgICAgIGhvcHBlci5vbmRyYWcgPSBkZWJvdW5jZShmdW5jdGlvbihwb3NpdGlvbikge1xuICAgICAgICByb290LmRpc3BhdGNoKCdESURfRFJBRycsIHsgcG9zaXRpb246IHBvc2l0aW9uIH0pO1xuICAgICAgfSk7XG5cbiAgICAgIGhvcHBlci5vbmRyYWdlbmQgPSBmdW5jdGlvbihwb3NpdGlvbikge1xuICAgICAgICByb290LmRpc3BhdGNoKCdESURfRU5EX0RSQUcnLCB7IHBvc2l0aW9uOiBwb3NpdGlvbiB9KTtcbiAgICAgIH07XG5cbiAgICAgIHJvb3QucmVmLmhvcHBlciA9IGhvcHBlcjtcblxuICAgICAgcm9vdC5yZWYuZHJpcCA9IHJvb3QuYXBwZW5kQ2hpbGRWaWV3KHJvb3QuY3JlYXRlQ2hpbGRWaWV3KGRyaXApKTtcbiAgICB9IGVsc2UgaWYgKCFlbmFibGVkICYmIHJvb3QucmVmLmhvcHBlcikge1xuICAgICAgcm9vdC5yZWYuaG9wcGVyLmRlc3Ryb3koKTtcbiAgICAgIHJvb3QucmVmLmhvcHBlciA9IG51bGw7XG4gICAgICByb290LnJlbW92ZUNoaWxkVmlldyhyb290LnJlZi5kcmlwKTtcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIEVuYWJsZSBvciBkaXNhYmxlIGJyb3dzZSBmdW5jdGlvbmFsaXR5XG4gICAqL1xuICB2YXIgdG9nZ2xlQnJvd3NlID0gZnVuY3Rpb24gdG9nZ2xlQnJvd3NlKHJvb3QsIHByb3BzKSB7XG4gICAgdmFyIGlzQWxsb3dlZCA9IHJvb3QucXVlcnkoJ0dFVF9BTExPV19CUk9XU0UnKTtcbiAgICB2YXIgaXNEaXNhYmxlZCA9IHJvb3QucXVlcnkoJ0dFVF9ESVNBQkxFRCcpO1xuICAgIHZhciBlbmFibGVkID0gaXNBbGxvd2VkICYmICFpc0Rpc2FibGVkO1xuICAgIGlmIChlbmFibGVkICYmICFyb290LnJlZi5icm93c2VyKSB7XG4gICAgICByb290LnJlZi5icm93c2VyID0gcm9vdC5hcHBlbmRDaGlsZFZpZXcoXG4gICAgICAgIHJvb3QuY3JlYXRlQ2hpbGRWaWV3KFxuICAgICAgICAgIGJyb3dzZXIsXG4gICAgICAgICAgT2JqZWN0LmFzc2lnbih7fSwgcHJvcHMsIHtcbiAgICAgICAgICAgIG9ubG9hZDogZnVuY3Rpb24gb25sb2FkKGl0ZW1zKSB7XG4gICAgICAgICAgICAgIC8vIHRoZXNlIGZpbGVzIGRvbid0IGZpdCBzbyBzdG9wIGhlcmVcbiAgICAgICAgICAgICAgaWYgKGV4Y2VlZHNNYXhGaWxlcyhyb290LCBpdGVtcykpIHJldHVybiBmYWxzZTtcblxuICAgICAgICAgICAgICAvLyBhZGQgaXRlbXMhXG4gICAgICAgICAgICAgIHJvb3QuZGlzcGF0Y2goJ0FERF9JVEVNUycsIHtcbiAgICAgICAgICAgICAgICBpdGVtczogaXRlbXMsXG4gICAgICAgICAgICAgICAgaW5kZXg6IC0xLFxuICAgICAgICAgICAgICAgIGludGVyYWN0aW9uTWV0aG9kOiBJbnRlcmFjdGlvbk1ldGhvZC5CUk9XU0VcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICAgKSxcblxuICAgICAgICAwXG4gICAgICApO1xuICAgIH0gZWxzZSBpZiAoIWVuYWJsZWQgJiYgcm9vdC5yZWYuYnJvd3Nlcikge1xuICAgICAgcm9vdC5yZW1vdmVDaGlsZFZpZXcocm9vdC5yZWYuYnJvd3Nlcik7XG4gICAgICByb290LnJlZi5icm93c2VyID0gbnVsbDtcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIEVuYWJsZSBvciBkaXNhYmxlIHBhc3RlIGZ1bmN0aW9uYWxpdHlcbiAgICovXG4gIHZhciB0b2dnbGVQYXN0ZSA9IGZ1bmN0aW9uIHRvZ2dsZVBhc3RlKHJvb3QpIHtcbiAgICB2YXIgaXNBbGxvd2VkID0gcm9vdC5xdWVyeSgnR0VUX0FMTE9XX1BBU1RFJyk7XG4gICAgdmFyIGlzRGlzYWJsZWQgPSByb290LnF1ZXJ5KCdHRVRfRElTQUJMRUQnKTtcbiAgICB2YXIgZW5hYmxlZCA9IGlzQWxsb3dlZCAmJiAhaXNEaXNhYmxlZDtcbiAgICBpZiAoZW5hYmxlZCAmJiAhcm9vdC5yZWYucGFzdGVyKSB7XG4gICAgICByb290LnJlZi5wYXN0ZXIgPSBjcmVhdGVQYXN0ZXIoKTtcbiAgICAgIHJvb3QucmVmLnBhc3Rlci5vbmxvYWQgPSBmdW5jdGlvbihpdGVtcykge1xuICAgICAgICByb290LmRpc3BhdGNoKCdBRERfSVRFTVMnLCB7XG4gICAgICAgICAgaXRlbXM6IGl0ZW1zLFxuICAgICAgICAgIGluZGV4OiAtMSxcbiAgICAgICAgICBpbnRlcmFjdGlvbk1ldGhvZDogSW50ZXJhY3Rpb25NZXRob2QuUEFTVEVcbiAgICAgICAgfSk7XG4gICAgICB9O1xuICAgIH0gZWxzZSBpZiAoIWVuYWJsZWQgJiYgcm9vdC5yZWYucGFzdGVyKSB7XG4gICAgICByb290LnJlZi5wYXN0ZXIuZGVzdHJveSgpO1xuICAgICAgcm9vdC5yZWYucGFzdGVyID0gbnVsbDtcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIFJvdXRlIGFjdGlvbnNcbiAgICovXG4gIHZhciByb3V0ZSQ1ID0gY3JlYXRlUm91dGUoe1xuICAgIERJRF9TRVRfQUxMT1dfQlJPV1NFOiBmdW5jdGlvbiBESURfU0VUX0FMTE9XX0JST1dTRShfcmVmNSkge1xuICAgICAgdmFyIHJvb3QgPSBfcmVmNS5yb290LFxuICAgICAgICBwcm9wcyA9IF9yZWY1LnByb3BzO1xuICAgICAgdG9nZ2xlQnJvd3NlKHJvb3QsIHByb3BzKTtcbiAgICB9LFxuICAgIERJRF9TRVRfQUxMT1dfRFJPUDogZnVuY3Rpb24gRElEX1NFVF9BTExPV19EUk9QKF9yZWY2KSB7XG4gICAgICB2YXIgcm9vdCA9IF9yZWY2LnJvb3Q7XG4gICAgICB0b2dnbGVEcm9wKHJvb3QpO1xuICAgIH0sXG4gICAgRElEX1NFVF9BTExPV19QQVNURTogZnVuY3Rpb24gRElEX1NFVF9BTExPV19QQVNURShfcmVmNykge1xuICAgICAgdmFyIHJvb3QgPSBfcmVmNy5yb290O1xuICAgICAgdG9nZ2xlUGFzdGUocm9vdCk7XG4gICAgfSxcbiAgICBESURfU0VUX0RJU0FCTEVEOiBmdW5jdGlvbiBESURfU0VUX0RJU0FCTEVEKF9yZWY4KSB7XG4gICAgICB2YXIgcm9vdCA9IF9yZWY4LnJvb3QsXG4gICAgICAgIHByb3BzID0gX3JlZjgucHJvcHM7XG4gICAgICB0b2dnbGVEcm9wKHJvb3QpO1xuICAgICAgdG9nZ2xlUGFzdGUocm9vdCk7XG4gICAgICB0b2dnbGVCcm93c2Uocm9vdCwgcHJvcHMpO1xuICAgICAgdmFyIGlzRGlzYWJsZWQgPSByb290LnF1ZXJ5KCdHRVRfRElTQUJMRUQnKTtcbiAgICAgIGlmIChpc0Rpc2FibGVkKSB7XG4gICAgICAgIHJvb3QuZWxlbWVudC5kYXRhc2V0LmRpc2FibGVkID0gJ2Rpc2FibGVkJztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRlbGV0ZSByb290LmVsZW1lbnQuZGF0YXNldC5kaXNhYmxlZDtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuXG4gIHZhciByb290ID0gY3JlYXRlVmlldyh7XG4gICAgbmFtZTogJ3Jvb3QnLFxuICAgIHJlYWQ6IGZ1bmN0aW9uIHJlYWQoX3JlZjkpIHtcbiAgICAgIHZhciByb290ID0gX3JlZjkucm9vdDtcbiAgICAgIGlmIChyb290LnJlZi5tZWFzdXJlKSB7XG4gICAgICAgIHJvb3QucmVmLm1lYXN1cmVIZWlnaHQgPSByb290LnJlZi5tZWFzdXJlLm9mZnNldEhlaWdodDtcbiAgICAgIH1cbiAgICB9LFxuICAgIGNyZWF0ZTogY3JlYXRlJGQsXG4gICAgd3JpdGU6IHdyaXRlJDgsXG4gICAgZGVzdHJveTogZnVuY3Rpb24gZGVzdHJveShfcmVmMTApIHtcbiAgICAgIHZhciByb290ID0gX3JlZjEwLnJvb3Q7XG4gICAgICBpZiAocm9vdC5yZWYucGFzdGVyKSB7XG4gICAgICAgIHJvb3QucmVmLnBhc3Rlci5kZXN0cm95KCk7XG4gICAgICB9XG4gICAgICBpZiAocm9vdC5yZWYuaG9wcGVyKSB7XG4gICAgICAgIHJvb3QucmVmLmhvcHBlci5kZXN0cm95KCk7XG4gICAgICB9XG4gICAgfSxcbiAgICBtaXhpbnM6IHtcbiAgICAgIHN0eWxlczogWydoZWlnaHQnXVxuICAgIH1cbiAgfSk7XG5cbiAgLy8gY3JlYXRlcyB0aGUgYXBwXG4gIHZhciBjcmVhdGVBcHAgPSBmdW5jdGlvbiBjcmVhdGVBcHAoKSB7XG4gICAgdmFyIGluaXRpYWxPcHRpb25zID1cbiAgICAgIGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDoge307XG4gICAgLy8gbGV0IGVsZW1lbnRcbiAgICB2YXIgb3JpZ2luYWxFbGVtZW50ID0gbnVsbDtcblxuICAgIC8vIGdldCBkZWZhdWx0IG9wdGlvbnNcbiAgICB2YXIgZGVmYXVsdE9wdGlvbnMgPSBnZXRPcHRpb25zKCk7XG5cbiAgICAvLyBjcmVhdGUgdGhlIGRhdGEgc3RvcmUsIHRoaXMgd2lsbCBjb250YWluIGFsbCBvdXIgYXBwIGluZm9cbiAgICB2YXIgc3RvcmUgPSBjcmVhdGVTdG9yZShcbiAgICAgIC8vIGluaXRpYWwgc3RhdGUgKHNob3VsZCBiZSBzZXJpYWxpemFibGUpXG4gICAgICBjcmVhdGVJbml0aWFsU3RhdGUoZGVmYXVsdE9wdGlvbnMpLFxuXG4gICAgICAvLyBxdWVyaWVzXG4gICAgICBbcXVlcmllcywgY3JlYXRlT3B0aW9uUXVlcmllcyhkZWZhdWx0T3B0aW9ucyldLFxuXG4gICAgICAvLyBhY3Rpb24gaGFuZGxlcnNcbiAgICAgIFthY3Rpb25zLCBjcmVhdGVPcHRpb25BY3Rpb25zKGRlZmF1bHRPcHRpb25zKV1cbiAgICApO1xuXG4gICAgLy8gc2V0IGluaXRpYWwgb3B0aW9uc1xuICAgIHN0b3JlLmRpc3BhdGNoKCdTRVRfT1BUSU9OUycsIHsgb3B0aW9uczogaW5pdGlhbE9wdGlvbnMgfSk7XG5cbiAgICAvLyBraWNrIHRocmVhZCBpZiB2aXNpYmlsaXR5IGNoYW5nZXNcbiAgICB2YXIgdmlzaWJpbGl0eUhhbmRsZXIgPSBmdW5jdGlvbiB2aXNpYmlsaXR5SGFuZGxlcigpIHtcbiAgICAgIGlmIChkb2N1bWVudC5oaWRkZW4pIHJldHVybjtcbiAgICAgIHN0b3JlLmRpc3BhdGNoKCdLSUNLJyk7XG4gICAgfTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCd2aXNpYmlsaXR5Y2hhbmdlJywgdmlzaWJpbGl0eUhhbmRsZXIpO1xuXG4gICAgLy8gcmUtcmVuZGVyIG9uIHdpbmRvdyByZXNpemUgc3RhcnQgYW5kIGZpbmlzaFxuICAgIHZhciByZXNpemVEb25lVGltZXIgPSBudWxsO1xuICAgIHZhciBpc1Jlc2l6aW5nID0gZmFsc2U7XG4gICAgdmFyIGlzUmVzaXppbmdIb3Jpem9udGFsbHkgPSBmYWxzZTtcbiAgICB2YXIgaW5pdGlhbFdpbmRvd1dpZHRoID0gbnVsbDtcbiAgICB2YXIgY3VycmVudFdpbmRvd1dpZHRoID0gbnVsbDtcbiAgICB2YXIgcmVzaXplSGFuZGxlciA9IGZ1bmN0aW9uIHJlc2l6ZUhhbmRsZXIoKSB7XG4gICAgICBpZiAoIWlzUmVzaXppbmcpIHtcbiAgICAgICAgaXNSZXNpemluZyA9IHRydWU7XG4gICAgICB9XG4gICAgICBjbGVhclRpbWVvdXQocmVzaXplRG9uZVRpbWVyKTtcbiAgICAgIHJlc2l6ZURvbmVUaW1lciA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgIGlzUmVzaXppbmcgPSBmYWxzZTtcbiAgICAgICAgaW5pdGlhbFdpbmRvd1dpZHRoID0gbnVsbDtcbiAgICAgICAgY3VycmVudFdpbmRvd1dpZHRoID0gbnVsbDtcbiAgICAgICAgaWYgKGlzUmVzaXppbmdIb3Jpem9udGFsbHkpIHtcbiAgICAgICAgICBpc1Jlc2l6aW5nSG9yaXpvbnRhbGx5ID0gZmFsc2U7XG4gICAgICAgICAgc3RvcmUuZGlzcGF0Y2goJ0RJRF9TVE9QX1JFU0laRScpO1xuICAgICAgICB9XG4gICAgICB9LCA1MDApO1xuICAgIH07XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHJlc2l6ZUhhbmRsZXIpO1xuXG4gICAgLy8gcmVuZGVyIGluaXRpYWwgdmlld1xuICAgIHZhciB2aWV3ID0gcm9vdChzdG9yZSwgeyBpZDogZ2V0VW5pcXVlSWQoKSB9KTtcblxuICAgIC8vXG4gICAgLy8gUFJJVkFURSBBUEkgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vXG4gICAgdmFyIGlzUmVzdGluZyA9IGZhbHNlO1xuICAgIHZhciBpc0hpZGRlbiA9IGZhbHNlO1xuXG4gICAgdmFyIHJlYWRXcml0ZUFwaSA9IHtcbiAgICAgIC8vIG5lY2Vzc2FyeSBmb3IgdXBkYXRlIGxvb3BcblxuICAgICAgLyoqXG4gICAgICAgKiBSZWFkcyBmcm9tIGRvbSAobmV2ZXIgY2FsbCBtYW51YWxseSlcbiAgICAgICAqIEBwcml2YXRlXG4gICAgICAgKi9cbiAgICAgIF9yZWFkOiBmdW5jdGlvbiBfcmVhZCgpIHtcbiAgICAgICAgLy8gdGVzdCBpZiB3ZSdyZSByZXNpemluZyBob3Jpem9udGFsbHlcbiAgICAgICAgLy8gVE9ETzogc2VlIGlmIHdlIGNhbiBvcHRpbWl6ZSB0aGlzIGJ5IG1lYXN1cmluZyByb290IHJlY3RcbiAgICAgICAgaWYgKGlzUmVzaXppbmcpIHtcbiAgICAgICAgICBjdXJyZW50V2luZG93V2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgICAgICAgICBpZiAoIWluaXRpYWxXaW5kb3dXaWR0aCkge1xuICAgICAgICAgICAgaW5pdGlhbFdpbmRvd1dpZHRoID0gY3VycmVudFdpbmRvd1dpZHRoO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICFpc1Jlc2l6aW5nSG9yaXpvbnRhbGx5ICYmXG4gICAgICAgICAgICBjdXJyZW50V2luZG93V2lkdGggIT09IGluaXRpYWxXaW5kb3dXaWR0aFxuICAgICAgICAgICkge1xuICAgICAgICAgICAgc3RvcmUuZGlzcGF0Y2goJ0RJRF9TVEFSVF9SRVNJWkUnKTtcbiAgICAgICAgICAgIGlzUmVzaXppbmdIb3Jpem9udGFsbHkgPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpc0hpZGRlbiAmJiBpc1Jlc3RpbmcpIHtcbiAgICAgICAgICAvLyB0ZXN0IGlmIGlzIG5vIGxvbmdlciBoaWRkZW5cbiAgICAgICAgICBpc1Jlc3RpbmcgPSB2aWV3LmVsZW1lbnQub2Zmc2V0UGFyZW50ID09PSBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gaWYgcmVzdGluZywgbm8gbmVlZCB0byByZWFkIGFzIG51bWJlcnMgd2lsbCBzdGlsbCBhbGwgYmUgY29ycmVjdFxuICAgICAgICBpZiAoaXNSZXN0aW5nKSByZXR1cm47XG5cbiAgICAgICAgLy8gcmVhZCB2aWV3IGRhdGFcbiAgICAgICAgdmlldy5fcmVhZCgpO1xuXG4gICAgICAgIC8vIGlmIGlzIGhpZGRlbiB3ZSBuZWVkIHRvIGtub3cgc28gd2UgZXhpdCByZXN0IG1vZGUgd2hlbiByZXZlYWxlZFxuICAgICAgICBpc0hpZGRlbiA9IHZpZXcucmVjdC5lbGVtZW50LmhpZGRlbjtcbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogV3JpdGVzIHRvIGRvbSAobmV2ZXIgY2FsbCBtYW51YWxseSlcbiAgICAgICAqIEBwcml2YXRlXG4gICAgICAgKi9cbiAgICAgIF93cml0ZTogZnVuY3Rpb24gX3dyaXRlKHRzKSB7XG4gICAgICAgIC8vIGdldCBhbGwgYWN0aW9ucyBmcm9tIHN0b3JlXG4gICAgICAgIHZhciBhY3Rpb25zID0gc3RvcmVcbiAgICAgICAgICAucHJvY2Vzc0FjdGlvblF1ZXVlKClcblxuICAgICAgICAgIC8vIGZpbHRlciBvdXQgc2V0IGFjdGlvbnMgKHRoZXNlIHdpbGwgYXV0b21hdGljYWxseSB0cmlnZ2VyIERJRF9TRVQpXG4gICAgICAgICAgLmZpbHRlcihmdW5jdGlvbihhY3Rpb24pIHtcbiAgICAgICAgICAgIHJldHVybiAhL15TRVRfLy50ZXN0KGFjdGlvbi50eXBlKTtcbiAgICAgICAgICB9KTtcblxuICAgICAgICAvLyBpZiB3YXMgaWRsaW5nIGFuZCBubyBhY3Rpb25zIHN0b3AgaGVyZVxuICAgICAgICBpZiAoaXNSZXN0aW5nICYmICFhY3Rpb25zLmxlbmd0aCkgcmV0dXJuO1xuXG4gICAgICAgIC8vIHNvbWUgYWN0aW9ucyBtaWdodCB0cmlnZ2VyIGV2ZW50c1xuICAgICAgICByb3V0ZUFjdGlvbnNUb0V2ZW50cyhhY3Rpb25zKTtcblxuICAgICAgICAvLyB1cGRhdGUgdGhlIHZpZXdcbiAgICAgICAgaXNSZXN0aW5nID0gdmlldy5fd3JpdGUodHMsIGFjdGlvbnMsIGlzUmVzaXppbmdIb3Jpem9udGFsbHkpO1xuXG4gICAgICAgIC8vIHdpbGwgY2xlYW4gdXAgYWxsIGFyY2hpdmVkIGl0ZW1zXG4gICAgICAgIHJlbW92ZVJlbGVhc2VkSXRlbXMoc3RvcmUucXVlcnkoJ0dFVF9JVEVNUycpKTtcblxuICAgICAgICAvLyBub3cgaWRsaW5nXG4gICAgICAgIGlmIChpc1Jlc3RpbmcpIHtcbiAgICAgICAgICBzdG9yZS5wcm9jZXNzRGlzcGF0Y2hRdWV1ZSgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcblxuICAgIC8vXG4gICAgLy8gRVhQT1NFIEVWRU5UUyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy9cbiAgICB2YXIgY3JlYXRlRXZlbnQgPSBmdW5jdGlvbiBjcmVhdGVFdmVudChuYW1lKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAvLyBjcmVhdGUgZGVmYXVsdCBldmVudFxuICAgICAgICB2YXIgZXZlbnQgPSB7XG4gICAgICAgICAgdHlwZTogbmFtZVxuICAgICAgICB9O1xuXG4gICAgICAgIC8vIG5vIGRhdGEgdG8gYWRkXG4gICAgICAgIGlmICghZGF0YSkge1xuICAgICAgICAgIHJldHVybiBldmVudDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGNvcHkgcmVsZXZhbnQgcHJvcHNcbiAgICAgICAgaWYgKGRhdGEuaGFzT3duUHJvcGVydHkoJ2Vycm9yJykpIHtcbiAgICAgICAgICBldmVudC5lcnJvciA9IGRhdGEuZXJyb3IgPyBPYmplY3QuYXNzaWduKHt9LCBkYXRhLmVycm9yKSA6IG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZGF0YS5zdGF0dXMpIHtcbiAgICAgICAgICBldmVudC5zdGF0dXMgPSBPYmplY3QuYXNzaWduKHt9LCBkYXRhLnN0YXR1cyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZGF0YS5maWxlKSB7XG4gICAgICAgICAgZXZlbnQub3V0cHV0ID0gZGF0YS5maWxlO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gb25seSBzb3VyY2UgaXMgYXZhaWxhYmxlLCBlbHNlIGFkZCBpdGVtIGlmIHBvc3NpYmxlXG4gICAgICAgIGlmIChkYXRhLnNvdXJjZSkge1xuICAgICAgICAgIGV2ZW50LmZpbGUgPSBkYXRhLnNvdXJjZTtcbiAgICAgICAgfSBlbHNlIGlmIChkYXRhLml0ZW0gfHwgZGF0YS5pZCkge1xuICAgICAgICAgIHZhciBpdGVtID0gZGF0YS5pdGVtID8gZGF0YS5pdGVtIDogc3RvcmUucXVlcnkoJ0dFVF9JVEVNJywgZGF0YS5pZCk7XG4gICAgICAgICAgZXZlbnQuZmlsZSA9IGl0ZW0gPyBjcmVhdGVJdGVtQVBJKGl0ZW0pIDogbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIG1hcCBhbGwgaXRlbXMgaW4gYSBwb3NzaWJsZSBpdGVtcyBhcnJheVxuICAgICAgICBpZiAoZGF0YS5pdGVtcykge1xuICAgICAgICAgIGV2ZW50Lml0ZW1zID0gZGF0YS5pdGVtcy5tYXAoY3JlYXRlSXRlbUFQSSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBpZiB0aGlzIGlzIGEgcHJvZ3Jlc3MgZXZlbnQgYWRkIHRoZSBwcm9ncmVzcyBhbW91bnRcbiAgICAgICAgaWYgKC9wcm9ncmVzcy8udGVzdChuYW1lKSkge1xuICAgICAgICAgIGV2ZW50LnByb2dyZXNzID0gZGF0YS5wcm9ncmVzcztcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBldmVudDtcbiAgICAgIH07XG4gICAgfTtcblxuICAgIHZhciBldmVudFJvdXRlcyA9IHtcbiAgICAgIERJRF9ERVNUUk9ZOiBjcmVhdGVFdmVudCgnZGVzdHJveScpLFxuXG4gICAgICBESURfSU5JVDogY3JlYXRlRXZlbnQoJ2luaXQnKSxcblxuICAgICAgRElEX1RIUk9XX01BWF9GSUxFUzogY3JlYXRlRXZlbnQoJ3dhcm5pbmcnKSxcblxuICAgICAgRElEX1NUQVJUX0lURU1fTE9BRDogY3JlYXRlRXZlbnQoJ2FkZGZpbGVzdGFydCcpLFxuICAgICAgRElEX1VQREFURV9JVEVNX0xPQURfUFJPR1JFU1M6IGNyZWF0ZUV2ZW50KCdhZGRmaWxlcHJvZ3Jlc3MnKSxcbiAgICAgIERJRF9MT0FEX0lURU06IGNyZWF0ZUV2ZW50KCdhZGRmaWxlJyksXG5cbiAgICAgIERJRF9USFJPV19JVEVNX0lOVkFMSUQ6IFtjcmVhdGVFdmVudCgnZXJyb3InKSwgY3JlYXRlRXZlbnQoJ2FkZGZpbGUnKV0sXG5cbiAgICAgIERJRF9USFJPV19JVEVNX0xPQURfRVJST1I6IFtjcmVhdGVFdmVudCgnZXJyb3InKSwgY3JlYXRlRXZlbnQoJ2FkZGZpbGUnKV0sXG5cbiAgICAgIERJRF9USFJPV19JVEVNX1JFTU9WRV9FUlJPUjogW1xuICAgICAgICBjcmVhdGVFdmVudCgnZXJyb3InKSxcbiAgICAgICAgY3JlYXRlRXZlbnQoJ3JlbW92ZWZpbGUnKVxuICAgICAgXSxcblxuICAgICAgRElEX1BSRVBBUkVfT1VUUFVUOiBjcmVhdGVFdmVudCgncHJlcGFyZWZpbGUnKSxcblxuICAgICAgRElEX1NUQVJUX0lURU1fUFJPQ0VTU0lORzogY3JlYXRlRXZlbnQoJ3Byb2Nlc3NmaWxlc3RhcnQnKSxcbiAgICAgIERJRF9VUERBVEVfSVRFTV9QUk9DRVNTX1BST0dSRVNTOiBjcmVhdGVFdmVudCgncHJvY2Vzc2ZpbGVwcm9ncmVzcycpLFxuICAgICAgRElEX0FCT1JUX0lURU1fUFJPQ0VTU0lORzogY3JlYXRlRXZlbnQoJ3Byb2Nlc3NmaWxlYWJvcnQnKSxcbiAgICAgIERJRF9DT01QTEVURV9JVEVNX1BST0NFU1NJTkc6IGNyZWF0ZUV2ZW50KCdwcm9jZXNzZmlsZScpLFxuICAgICAgRElEX0NPTVBMRVRFX0lURU1fUFJPQ0VTU0lOR19BTEw6IGNyZWF0ZUV2ZW50KCdwcm9jZXNzZmlsZXMnKSxcbiAgICAgIERJRF9SRVZFUlRfSVRFTV9QUk9DRVNTSU5HOiBjcmVhdGVFdmVudCgncHJvY2Vzc2ZpbGVyZXZlcnQnKSxcblxuICAgICAgRElEX1RIUk9XX0lURU1fUFJPQ0VTU0lOR19FUlJPUjogW1xuICAgICAgICBjcmVhdGVFdmVudCgnZXJyb3InKSxcbiAgICAgICAgY3JlYXRlRXZlbnQoJ3Byb2Nlc3NmaWxlJylcbiAgICAgIF0sXG5cbiAgICAgIERJRF9SRU1PVkVfSVRFTTogY3JlYXRlRXZlbnQoJ3JlbW92ZWZpbGUnKSxcblxuICAgICAgRElEX1VQREFURV9JVEVNUzogY3JlYXRlRXZlbnQoJ3VwZGF0ZWZpbGVzJyksXG5cbiAgICAgIERJRF9BQ1RJVkFURV9JVEVNOiBjcmVhdGVFdmVudCgnYWN0aXZhdGVmaWxlJylcbiAgICB9O1xuXG4gICAgdmFyIGV4cG9zZUV2ZW50ID0gZnVuY3Rpb24gZXhwb3NlRXZlbnQoZXZlbnQpIHtcbiAgICAgIC8vIGNyZWF0ZSBldmVudCBvYmplY3QgdG8gYmUgZGlzcGF0Y2hlZFxuICAgICAgdmFyIGRldGFpbCA9IE9iamVjdC5hc3NpZ24oeyBwb25kOiBleHBvcnRzIH0sIGV2ZW50KTtcbiAgICAgIGRlbGV0ZSBkZXRhaWwudHlwZTtcbiAgICAgIHZpZXcuZWxlbWVudC5kaXNwYXRjaEV2ZW50KFxuICAgICAgICBuZXcgQ3VzdG9tRXZlbnQoJ0ZpbGVQb25kOicgKyBldmVudC50eXBlLCB7XG4gICAgICAgICAgLy8gZXZlbnQgaW5mb1xuICAgICAgICAgIGRldGFpbDogZGV0YWlsLFxuXG4gICAgICAgICAgLy8gZXZlbnQgYmVoYXZpb3VyXG4gICAgICAgICAgYnViYmxlczogdHJ1ZSxcbiAgICAgICAgICBjYW5jZWxhYmxlOiB0cnVlLFxuICAgICAgICAgIGNvbXBvc2VkOiB0cnVlIC8vIHRyaWdnZXJzIGxpc3RlbmVycyBvdXRzaWRlIG9mIHNoYWRvdyByb290XG4gICAgICAgIH0pXG4gICAgICApO1xuXG4gICAgICAvLyBldmVudCBvYmplY3QgdG8gcGFyYW1zIHVzZWQgZm9yIGBvbigpYCBldmVudCBoYW5kbGVycyBhbmQgY2FsbGJhY2tzIGBvbmluaXQoKWBcbiAgICAgIHZhciBwYXJhbXMgPSBbXTtcblxuICAgICAgLy8gaWYgaXMgcG9zc2libGUgZXJyb3IgZXZlbnQsIG1ha2UgaXQgdGhlIGZpcnN0IHBhcmFtXG4gICAgICBpZiAoZXZlbnQuaGFzT3duUHJvcGVydHkoJ2Vycm9yJykpIHtcbiAgICAgICAgcGFyYW1zLnB1c2goZXZlbnQuZXJyb3IpO1xuICAgICAgfVxuXG4gICAgICAvLyBmaWxlIGlzIGFsd2F5cyBzZWN0aW9uXG4gICAgICBpZiAoZXZlbnQuaGFzT3duUHJvcGVydHkoJ2ZpbGUnKSkge1xuICAgICAgICBwYXJhbXMucHVzaChldmVudC5maWxlKTtcbiAgICAgIH1cblxuICAgICAgLy8gYXBwZW5kIG90aGVyIHByb3BzXG4gICAgICB2YXIgZmlsdGVyZWQgPSBbJ3R5cGUnLCAnZXJyb3InLCAnZmlsZSddO1xuICAgICAgT2JqZWN0LmtleXMoZXZlbnQpXG4gICAgICAgIC5maWx0ZXIoZnVuY3Rpb24oa2V5KSB7XG4gICAgICAgICAgcmV0dXJuICFmaWx0ZXJlZC5pbmNsdWRlcyhrZXkpO1xuICAgICAgICB9KVxuICAgICAgICAuZm9yRWFjaChmdW5jdGlvbihrZXkpIHtcbiAgICAgICAgICByZXR1cm4gcGFyYW1zLnB1c2goZXZlbnRba2V5XSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAvLyBvbih0eXBlLCAoKSA9PiB7IH0pXG4gICAgICBleHBvcnRzLmZpcmUuYXBwbHkoZXhwb3J0cywgW2V2ZW50LnR5cGVdLmNvbmNhdChwYXJhbXMpKTtcblxuICAgICAgLy8gb25pbml0ID0gKCkgPT4ge31cbiAgICAgIHZhciBoYW5kbGVyID0gc3RvcmUucXVlcnkoJ0dFVF9PTicgKyBldmVudC50eXBlLnRvVXBwZXJDYXNlKCkpO1xuICAgICAgaWYgKGhhbmRsZXIpIHtcbiAgICAgICAgaGFuZGxlci5hcHBseSh2b2lkIDAsIHBhcmFtcyk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHZhciByb3V0ZUFjdGlvbnNUb0V2ZW50cyA9IGZ1bmN0aW9uIHJvdXRlQWN0aW9uc1RvRXZlbnRzKGFjdGlvbnMpIHtcbiAgICAgIGlmICghYWN0aW9ucy5sZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhY3Rpb25zLmZvckVhY2goZnVuY3Rpb24oYWN0aW9uKSB7XG4gICAgICAgIGlmICghZXZlbnRSb3V0ZXNbYWN0aW9uLnR5cGVdKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHZhciByb3V0ZXMgPSBldmVudFJvdXRlc1thY3Rpb24udHlwZV07XG4gICAgICAgIChBcnJheS5pc0FycmF5KHJvdXRlcykgPyByb3V0ZXMgOiBbcm91dGVzXSkuZm9yRWFjaChmdW5jdGlvbihyb3V0ZSkge1xuICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBleHBvc2VFdmVudChyb3V0ZShhY3Rpb24uZGF0YSkpO1xuICAgICAgICAgIH0sIDApO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICAvL1xuICAgIC8vIFBVQkxJQyBBUEkgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vXG4gICAgdmFyIHNldE9wdGlvbnMgPSBmdW5jdGlvbiBzZXRPcHRpb25zKG9wdGlvbnMpIHtcbiAgICAgIHJldHVybiBzdG9yZS5kaXNwYXRjaCgnU0VUX09QVElPTlMnLCB7IG9wdGlvbnM6IG9wdGlvbnMgfSk7XG4gICAgfTtcblxuICAgIHZhciBnZXRGaWxlID0gZnVuY3Rpb24gZ2V0RmlsZShxdWVyeSkge1xuICAgICAgcmV0dXJuIHN0b3JlLnF1ZXJ5KCdHRVRfQUNUSVZFX0lURU0nLCBxdWVyeSk7XG4gICAgfTtcblxuICAgIHZhciBhZGRGaWxlID0gZnVuY3Rpb24gYWRkRmlsZShzb3VyY2UpIHtcbiAgICAgIHZhciBvcHRpb25zID1cbiAgICAgICAgYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7fTtcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgYWRkRmlsZXMoW3sgc291cmNlOiBzb3VyY2UsIG9wdGlvbnM6IG9wdGlvbnMgfV0sIHtcbiAgICAgICAgICBpbmRleDogb3B0aW9ucy5pbmRleFxuICAgICAgICB9KVxuICAgICAgICAgIC50aGVuKGZ1bmN0aW9uKGl0ZW1zKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVzb2x2ZShpdGVtcyAmJiBpdGVtc1swXSk7XG4gICAgICAgICAgfSlcbiAgICAgICAgICAuY2F0Y2gocmVqZWN0KTtcbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICB2YXIgcmVtb3ZlRmlsZSA9IGZ1bmN0aW9uIHJlbW92ZUZpbGUocXVlcnkpIHtcbiAgICAgIC8vIHJlcXVlc3QgaXRlbSByZW1vdmFsXG4gICAgICBzdG9yZS5kaXNwYXRjaCgnUkVNT1ZFX0lURU0nLCB7IHF1ZXJ5OiBxdWVyeSB9KTtcblxuICAgICAgLy8gc2VlIGlmIGl0ZW0gaGFzIGJlZW4gcmVtb3ZlZFxuICAgICAgcmV0dXJuIHN0b3JlLnF1ZXJ5KCdHRVRfQUNUSVZFX0lURU0nLCBxdWVyeSkgPT09IG51bGw7XG4gICAgfTtcblxuICAgIHZhciBhZGRGaWxlcyA9IGZ1bmN0aW9uIGFkZEZpbGVzKCkge1xuICAgICAgZm9yIChcbiAgICAgICAgdmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDtcbiAgICAgICAgX2tleSA8IF9sZW47XG4gICAgICAgIF9rZXkrK1xuICAgICAgKSB7XG4gICAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgICB9XG4gICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIHZhciBzb3VyY2VzID0gW107XG4gICAgICAgIHZhciBvcHRpb25zID0ge307XG5cbiAgICAgICAgLy8gdXNlciBwYXNzZWQgYSBzb3VyY2VzIGFycmF5XG4gICAgICAgIGlmIChpc0FycmF5KGFyZ3NbMF0pKSB7XG4gICAgICAgICAgc291cmNlcy5wdXNoLmFwcGx5KHNvdXJjZXMsIGFyZ3NbMF0pO1xuICAgICAgICAgIE9iamVjdC5hc3NpZ24ob3B0aW9ucywgYXJnc1sxXSB8fCB7fSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gdXNlciBwYXNzZWQgc291cmNlcyBhcyBhcmd1bWVudHMsIGxhc3Qgb25lIG1pZ2h0IGJlIG9wdGlvbnMgb2JqZWN0XG4gICAgICAgICAgdmFyIGxhc3RBcmd1bWVudCA9IGFyZ3NbYXJncy5sZW5ndGggLSAxXTtcbiAgICAgICAgICBpZiAoXG4gICAgICAgICAgICB0eXBlb2YgbGFzdEFyZ3VtZW50ID09PSAnb2JqZWN0JyAmJlxuICAgICAgICAgICAgIShsYXN0QXJndW1lbnQgaW5zdGFuY2VvZiBCbG9iKVxuICAgICAgICAgICkge1xuICAgICAgICAgICAgT2JqZWN0LmFzc2lnbihvcHRpb25zLCBhcmdzLnBvcCgpKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyBhZGQgcmVzdCB0byBzb3VyY2VzXG4gICAgICAgICAgc291cmNlcy5wdXNoLmFwcGx5KHNvdXJjZXMsIGFyZ3MpO1xuICAgICAgICB9XG5cbiAgICAgICAgc3RvcmUuZGlzcGF0Y2goJ0FERF9JVEVNUycsIHtcbiAgICAgICAgICBpdGVtczogc291cmNlcyxcbiAgICAgICAgICBpbmRleDogb3B0aW9ucy5pbmRleCxcbiAgICAgICAgICBpbnRlcmFjdGlvbk1ldGhvZDogSW50ZXJhY3Rpb25NZXRob2QuQVBJLFxuICAgICAgICAgIHN1Y2Nlc3M6IHJlc29sdmUsXG4gICAgICAgICAgZmFpbHVyZTogcmVqZWN0XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfTtcblxuICAgIHZhciBnZXRGaWxlcyA9IGZ1bmN0aW9uIGdldEZpbGVzKCkge1xuICAgICAgcmV0dXJuIHN0b3JlLnF1ZXJ5KCdHRVRfQUNUSVZFX0lURU1TJyk7XG4gICAgfTtcblxuICAgIHZhciBwcm9jZXNzRmlsZSA9IGZ1bmN0aW9uIHByb2Nlc3NGaWxlKHF1ZXJ5KSB7XG4gICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIHN0b3JlLmRpc3BhdGNoKCdSRVFVRVNUX0lURU1fUFJPQ0VTU0lORycsIHtcbiAgICAgICAgICBxdWVyeTogcXVlcnksXG4gICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gc3VjY2VzcyhpdGVtKSB7XG4gICAgICAgICAgICByZXNvbHZlKGl0ZW0pO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgZmFpbHVyZTogZnVuY3Rpb24gZmFpbHVyZShlcnJvcikge1xuICAgICAgICAgICAgcmVqZWN0KGVycm9yKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfTtcblxuICAgIHZhciBwcm9jZXNzRmlsZXMgPSBmdW5jdGlvbiBwcm9jZXNzRmlsZXMoKSB7XG4gICAgICBmb3IgKFxuICAgICAgICB2YXIgX2xlbjIgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4yKSwgX2tleTIgPSAwO1xuICAgICAgICBfa2V5MiA8IF9sZW4yO1xuICAgICAgICBfa2V5MisrXG4gICAgICApIHtcbiAgICAgICAgYXJnc1tfa2V5Ml0gPSBhcmd1bWVudHNbX2tleTJdO1xuICAgICAgfVxuICAgICAgdmFyIHF1ZXJpZXMgPSBBcnJheS5pc0FycmF5KGFyZ3NbMF0pID8gYXJnc1swXSA6IGFyZ3M7XG4gICAgICBpZiAoIXF1ZXJpZXMubGVuZ3RoKSB7XG4gICAgICAgIHZhciBmaWxlcyA9IGdldEZpbGVzKCkuZmlsdGVyKGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgIShcbiAgICAgICAgICAgICAgaXRlbS5zdGF0dXMgPT09IEl0ZW1TdGF0dXMuSURMRSAmJlxuICAgICAgICAgICAgICBpdGVtLm9yaWdpbiA9PT0gRmlsZU9yaWdpbi5MT0NBTFxuICAgICAgICAgICAgKSAmJlxuICAgICAgICAgICAgaXRlbS5zdGF0dXMgIT09IEl0ZW1TdGF0dXMuUFJPQ0VTU0lORyAmJlxuICAgICAgICAgICAgaXRlbS5zdGF0dXMgIT09IEl0ZW1TdGF0dXMuUFJPQ0VTU0lOR19DT01QTEVURSAmJlxuICAgICAgICAgICAgaXRlbS5zdGF0dXMgIT09IEl0ZW1TdGF0dXMuUFJPQ0VTU0lOR19SRVZFUlRfRVJST1JcbiAgICAgICAgICApO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gUHJvbWlzZS5hbGwoZmlsZXMubWFwKHByb2Nlc3NGaWxlKSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gUHJvbWlzZS5hbGwocXVlcmllcy5tYXAocHJvY2Vzc0ZpbGUpKTtcbiAgICB9O1xuXG4gICAgdmFyIHJlbW92ZUZpbGVzID0gZnVuY3Rpb24gcmVtb3ZlRmlsZXMoKSB7XG4gICAgICBmb3IgKFxuICAgICAgICB2YXIgX2xlbjMgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4zKSwgX2tleTMgPSAwO1xuICAgICAgICBfa2V5MyA8IF9sZW4zO1xuICAgICAgICBfa2V5MysrXG4gICAgICApIHtcbiAgICAgICAgYXJnc1tfa2V5M10gPSBhcmd1bWVudHNbX2tleTNdO1xuICAgICAgfVxuICAgICAgdmFyIHF1ZXJpZXMgPSBBcnJheS5pc0FycmF5KGFyZ3NbMF0pID8gYXJnc1swXSA6IGFyZ3M7XG4gICAgICB2YXIgZmlsZXMgPSBnZXRGaWxlcygpO1xuXG4gICAgICBpZiAoIXF1ZXJpZXMubGVuZ3RoKSB7XG4gICAgICAgIHJldHVybiBQcm9taXNlLmFsbChmaWxlcy5tYXAocmVtb3ZlRmlsZSkpO1xuICAgICAgfVxuXG4gICAgICAvLyB3aGVuIHJlbW92aW5nIGJ5IGluZGV4IHRoZSBpbmRleGVzIHNoaWZ0IGFmdGVyIGVhY2ggZmlsZSByZW1vdmFsIHNvIHdlIG5lZWQgdG8gY29udmVydCBpbmRleGVzIHRvIGlkc1xuICAgICAgdmFyIG1hcHBlZFF1ZXJpZXMgPSBxdWVyaWVzXG4gICAgICAgIC5tYXAoZnVuY3Rpb24ocXVlcnkpIHtcbiAgICAgICAgICByZXR1cm4gaXNOdW1iZXIocXVlcnkpXG4gICAgICAgICAgICA/IGZpbGVzW3F1ZXJ5XVxuICAgICAgICAgICAgICA/IGZpbGVzW3F1ZXJ5XS5pZFxuICAgICAgICAgICAgICA6IG51bGxcbiAgICAgICAgICAgIDogcXVlcnk7XG4gICAgICAgIH0pXG4gICAgICAgIC5maWx0ZXIoZnVuY3Rpb24ocXVlcnkpIHtcbiAgICAgICAgICByZXR1cm4gcXVlcnk7XG4gICAgICAgIH0pO1xuXG4gICAgICByZXR1cm4gbWFwcGVkUXVlcmllcy5tYXAocmVtb3ZlRmlsZSk7XG4gICAgfTtcblxuICAgIHZhciBleHBvcnRzID0gT2JqZWN0LmFzc2lnbihcbiAgICAgIHt9LFxuXG4gICAgICBvbigpLFxuXG4gICAgICByZWFkV3JpdGVBcGksXG5cbiAgICAgIGNyZWF0ZU9wdGlvbkFQSShzdG9yZSwgZGVmYXVsdE9wdGlvbnMpLFxuICAgICAge1xuICAgICAgICAvKipcbiAgICAgICAgICogT3ZlcnJpZGUgb3B0aW9ucyBkZWZpbmVkIGluIG9wdGlvbnMgb2JqZWN0XG4gICAgICAgICAqIEBwYXJhbSBvcHRpb25zXG4gICAgICAgICAqL1xuICAgICAgICBzZXRPcHRpb25zOiBzZXRPcHRpb25zLFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBMb2FkIHRoZSBnaXZlbiBmaWxlXG4gICAgICAgICAqIEBwYXJhbSBzb3VyY2UgLSB0aGUgc291cmNlIG9mIHRoZSBmaWxlIChlaXRoZXIgYSBGaWxlLCBiYXNlNjQgZGF0YSB1cmkgb3IgdXJsKVxuICAgICAgICAgKiBAcGFyYW0gb3B0aW9ucyAtIG9iamVjdCwgeyBpbmRleDogMCB9XG4gICAgICAgICAqL1xuICAgICAgICBhZGRGaWxlOiBhZGRGaWxlLFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBMb2FkIHRoZSBnaXZlbiBmaWxlc1xuICAgICAgICAgKiBAcGFyYW0gc291cmNlcyAtIHRoZSBzb3VyY2VzIG9mIHRoZSBmaWxlcyB0byBsb2FkXG4gICAgICAgICAqIEBwYXJhbSBvcHRpb25zIC0gb2JqZWN0LCB7IGluZGV4OiAwIH1cbiAgICAgICAgICovXG4gICAgICAgIGFkZEZpbGVzOiBhZGRGaWxlcyxcblxuICAgICAgICAvKipcbiAgICAgICAgICogUmV0dXJucyB0aGUgZmlsZSBvYmplY3RzIG1hdGNoaW5nIHRoZSBnaXZlbiBxdWVyeVxuICAgICAgICAgKiBAcGFyYW0gcXVlcnkgeyBzdHJpbmcsIG51bWJlciwgbnVsbCB9XG4gICAgICAgICAqL1xuICAgICAgICBnZXRGaWxlOiBnZXRGaWxlLFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBVcGxvYWQgZmlsZSB3aXRoIGdpdmVuIG5hbWVcbiAgICAgICAgICogQHBhcmFtIHF1ZXJ5IHsgc3RyaW5nLCBudW1iZXIsIG51bGwgIH1cbiAgICAgICAgICovXG4gICAgICAgIHByb2Nlc3NGaWxlOiBwcm9jZXNzRmlsZSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogUmVtb3ZlcyBhIGZpbGUgYnkgaXRzIG5hbWVcbiAgICAgICAgICogQHBhcmFtIHF1ZXJ5IHsgc3RyaW5nLCBudW1iZXIsIG51bGwgIH1cbiAgICAgICAgICovXG4gICAgICAgIHJlbW92ZUZpbGU6IHJlbW92ZUZpbGUsXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJldHVybnMgYWxsIGZpbGVzICh3cmFwcGVkIGluIHB1YmxpYyBhcGkpXG4gICAgICAgICAqL1xuICAgICAgICBnZXRGaWxlczogZ2V0RmlsZXMsXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFN0YXJ0cyB1cGxvYWRpbmcgYWxsIGZpbGVzXG4gICAgICAgICAqL1xuICAgICAgICBwcm9jZXNzRmlsZXM6IHByb2Nlc3NGaWxlcyxcblxuICAgICAgICAvKipcbiAgICAgICAgICogQ2xlYXJzIGFsbCBmaWxlcyBmcm9tIHRoZSBmaWxlcyBsaXN0XG4gICAgICAgICAqL1xuICAgICAgICByZW1vdmVGaWxlczogcmVtb3ZlRmlsZXMsXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFNvcnQgbGlzdCBvZiBmaWxlc1xuICAgICAgICAgKi9cbiAgICAgICAgc29ydDogZnVuY3Rpb24gc29ydChjb21wYXJlKSB7XG4gICAgICAgICAgcmV0dXJuIHN0b3JlLmRpc3BhdGNoKCdTT1JUJywgeyBjb21wYXJlOiBjb21wYXJlIH0pO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBCcm93c2UgdGhlIGZpbGUgc3lzdGVtIGZvciBhIGZpbGVcbiAgICAgICAgICovXG4gICAgICAgIGJyb3dzZTogZnVuY3Rpb24gYnJvd3NlKCkge1xuICAgICAgICAgIC8vIG5lZWRzIHRvIGJlIHRyaWdnZXIgZGlyZWN0bHkgYXMgdXNlciBhY3Rpb24gbmVlZHMgdG8gYmUgdHJhY2VhYmxlIChpcyBub3QgdHJhY2VhYmxlIGluIHJlcXVlc3RBbmltYXRpb25GcmFtZSlcbiAgICAgICAgICB2YXIgaW5wdXQgPSB2aWV3LmVsZW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbdHlwZT1maWxlXScpO1xuICAgICAgICAgIGlmIChpbnB1dCkge1xuICAgICAgICAgICAgaW5wdXQuY2xpY2soKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIERlc3Ryb3lzIHRoZSBhcHBcbiAgICAgICAgICovXG4gICAgICAgIGRlc3Ryb3k6IGZ1bmN0aW9uIGRlc3Ryb3koKSB7XG4gICAgICAgICAgLy8gcmVxdWVzdCBkZXN0cnVjdGlvblxuICAgICAgICAgIGV4cG9ydHMuZmlyZSgnZGVzdHJveScsIHZpZXcuZWxlbWVudCk7XG5cbiAgICAgICAgICAvLyBzdG9wIGFjdGl2ZSBwcm9jZXNzZXMgKGZpbGUgdXBsb2FkcywgZmV0Y2hlcywgc3R1ZmYgbGlrZSB0aGF0KVxuICAgICAgICAgIC8vIGxvb3Agb3ZlciBpdGVtcyBhbmQgZGVwZW5kaW5nIG9uIHN0YXRlcyBjYWxsIGFib3J0IGZvciBvbmdvaW5nIHByb2Nlc3Nlc1xuICAgICAgICAgIHN0b3JlLmRpc3BhdGNoKCdBQk9SVF9BTEwnKTtcblxuICAgICAgICAgIC8vIGRlc3Ryb3kgdmlld1xuICAgICAgICAgIHZpZXcuX2Rlc3Ryb3koKTtcblxuICAgICAgICAgIC8vIHN0b3AgbGlzdGVuaW5nIHRvIHJlc2l6ZVxuICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCByZXNpemVIYW5kbGVyKTtcblxuICAgICAgICAgIC8vIHN0b3AgbGlzdGVuaW5nIHRvIHRoZSB2aXNpYmxpdHljaGFuZ2UgZXZlbnRcbiAgICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCd2aXNpYmlsaXR5Y2hhbmdlJywgdmlzaWJpbGl0eUhhbmRsZXIpO1xuXG4gICAgICAgICAgLy8gZGlzcGF0Y2ggZGVzdHJveVxuICAgICAgICAgIHN0b3JlLmRpc3BhdGNoKCdESURfREVTVFJPWScpO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJbnNlcnRzIHRoZSBwbHVnaW4gYmVmb3JlIHRoZSB0YXJnZXQgZWxlbWVudFxuICAgICAgICAgKi9cbiAgICAgICAgaW5zZXJ0QmVmb3JlOiBmdW5jdGlvbiBpbnNlcnRCZWZvcmUkMShlbGVtZW50KSB7XG4gICAgICAgICAgcmV0dXJuIGluc2VydEJlZm9yZSh2aWV3LmVsZW1lbnQsIGVsZW1lbnQpO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJbnNlcnRzIHRoZSBwbHVnaW4gYWZ0ZXIgdGhlIHRhcmdldCBlbGVtZW50XG4gICAgICAgICAqL1xuICAgICAgICBpbnNlcnRBZnRlcjogZnVuY3Rpb24gaW5zZXJ0QWZ0ZXIkMShlbGVtZW50KSB7XG4gICAgICAgICAgcmV0dXJuIGluc2VydEFmdGVyKHZpZXcuZWxlbWVudCwgZWxlbWVudCk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEFwcGVuZHMgdGhlIHBsdWdpbiB0byB0aGUgdGFyZ2V0IGVsZW1lbnRcbiAgICAgICAgICovXG4gICAgICAgIGFwcGVuZFRvOiBmdW5jdGlvbiBhcHBlbmRUbyhlbGVtZW50KSB7XG4gICAgICAgICAgcmV0dXJuIGVsZW1lbnQuYXBwZW5kQ2hpbGQodmlldy5lbGVtZW50KTtcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogUmVwbGFjZXMgYW4gZWxlbWVudCB3aXRoIHRoZSBhcHBcbiAgICAgICAgICovXG4gICAgICAgIHJlcGxhY2VFbGVtZW50OiBmdW5jdGlvbiByZXBsYWNlRWxlbWVudChlbGVtZW50KSB7XG4gICAgICAgICAgLy8gaW5zZXJ0IHRoZSBhcHAgYmVmb3JlIHRoZSBlbGVtZW50XG4gICAgICAgICAgaW5zZXJ0QmVmb3JlKHZpZXcuZWxlbWVudCwgZWxlbWVudCk7XG5cbiAgICAgICAgICAvLyByZW1vdmUgdGhlIG9yaWdpbmFsIGVsZW1lbnRcbiAgICAgICAgICBlbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZWxlbWVudCk7XG5cbiAgICAgICAgICAvLyByZW1lbWJlciBvcmlnaW5hbCBlbGVtZW50XG4gICAgICAgICAgb3JpZ2luYWxFbGVtZW50ID0gZWxlbWVudDtcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogUmVzdG9yZXMgdGhlIG9yaWdpbmFsIGVsZW1lbnRcbiAgICAgICAgICovXG4gICAgICAgIHJlc3RvcmVFbGVtZW50OiBmdW5jdGlvbiByZXN0b3JlRWxlbWVudCgpIHtcbiAgICAgICAgICBpZiAoIW9yaWdpbmFsRWxlbWVudCkge1xuICAgICAgICAgICAgcmV0dXJuOyAvLyBubyBlbGVtZW50IHRvIHJlc3RvcmVcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyByZXN0b3JlIG9yaWdpbmFsIGVsZW1lbnRcbiAgICAgICAgICBpbnNlcnRBZnRlcihvcmlnaW5hbEVsZW1lbnQsIHZpZXcuZWxlbWVudCk7XG5cbiAgICAgICAgICAvLyByZW1vdmUgb3VyIGVsZW1lbnRcbiAgICAgICAgICB2aWV3LmVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh2aWV3LmVsZW1lbnQpO1xuXG4gICAgICAgICAgLy8gcmVtb3ZlIHJlZmVyZW5jZVxuICAgICAgICAgIG9yaWdpbmFsRWxlbWVudCA9IG51bGw7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgYXBwIHJvb3QgaXMgYXR0YWNoZWQgdG8gZ2l2ZW4gZWxlbWVudFxuICAgICAgICAgKiBAcGFyYW0gZWxlbWVudFxuICAgICAgICAgKi9cbiAgICAgICAgaXNBdHRhY2hlZFRvOiBmdW5jdGlvbiBpc0F0dGFjaGVkVG8oZWxlbWVudCkge1xuICAgICAgICAgIHJldHVybiB2aWV3LmVsZW1lbnQgPT09IGVsZW1lbnQgfHwgb3JpZ2luYWxFbGVtZW50ID09PSBlbGVtZW50O1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZXR1cm5zIHRoZSByb290IGVsZW1lbnRcbiAgICAgICAgICovXG4gICAgICAgIGVsZW1lbnQ6IHtcbiAgICAgICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgICAgIHJldHVybiB2aWV3LmVsZW1lbnQ7XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZXR1cm5zIHRoZSBjdXJyZW50IHBvbmQgc3RhdHVzXG4gICAgICAgICAqL1xuICAgICAgICBzdGF0dXM6IHtcbiAgICAgICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgICAgIHJldHVybiBzdG9yZS5xdWVyeSgnR0VUX1NUQVRVUycpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICk7XG5cbiAgICAvLyBEb25lIVxuICAgIHN0b3JlLmRpc3BhdGNoKCdESURfSU5JVCcpO1xuXG4gICAgLy8gY3JlYXRlIGFjdHVhbCBhcGkgb2JqZWN0XG4gICAgcmV0dXJuIGNyZWF0ZU9iamVjdChleHBvcnRzKTtcbiAgfTtcblxuICB2YXIgY3JlYXRlQXBwT2JqZWN0ID0gZnVuY3Rpb24gY3JlYXRlQXBwT2JqZWN0KCkge1xuICAgIHZhciBjdXN0b21PcHRpb25zID1cbiAgICAgIGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDoge307XG4gICAgLy8gZGVmYXVsdCBvcHRpb25zXG4gICAgdmFyIGRlZmF1bHRPcHRpb25zID0ge307XG4gICAgZm9yaW4oZ2V0T3B0aW9ucygpLCBmdW5jdGlvbihrZXksIHZhbHVlKSB7XG4gICAgICBkZWZhdWx0T3B0aW9uc1trZXldID0gdmFsdWVbMF07XG4gICAgfSk7XG5cbiAgICAvLyBzZXQgYXBwIG9wdGlvbnNcbiAgICB2YXIgYXBwID0gY3JlYXRlQXBwKFxuICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAge30sXG5cbiAgICAgICAgZGVmYXVsdE9wdGlvbnMsXG5cbiAgICAgICAgY3VzdG9tT3B0aW9uc1xuICAgICAgKVxuICAgICk7XG5cbiAgICAvLyByZXR1cm4gdGhlIHBsdWdpbiBpbnN0YW5jZVxuICAgIHJldHVybiBhcHA7XG4gIH07XG5cbiAgdmFyIGxvd2VyQ2FzZUZpcnN0TGV0dGVyID0gZnVuY3Rpb24gbG93ZXJDYXNlRmlyc3RMZXR0ZXIoc3RyaW5nKSB7XG4gICAgcmV0dXJuIHN0cmluZy5jaGFyQXQoMCkudG9Mb3dlckNhc2UoKSArIHN0cmluZy5zbGljZSgxKTtcbiAgfTtcblxuICB2YXIgYXR0cmlidXRlTmFtZVRvUHJvcGVydHlOYW1lID0gZnVuY3Rpb24gYXR0cmlidXRlTmFtZVRvUHJvcGVydHlOYW1lKFxuICAgIGF0dHJpYnV0ZU5hbWVcbiAgKSB7XG4gICAgcmV0dXJuIHRvQ2FtZWxzKGF0dHJpYnV0ZU5hbWUucmVwbGFjZSgvXmRhdGEtLywgJycpKTtcbiAgfTtcblxuICB2YXIgbWFwT2JqZWN0ID0gZnVuY3Rpb24gbWFwT2JqZWN0KG9iamVjdCwgcHJvcGVydHlNYXApIHtcbiAgICAvLyByZW1vdmUgdW53YW50ZWRcbiAgICBmb3Jpbihwcm9wZXJ0eU1hcCwgZnVuY3Rpb24oc2VsZWN0b3IsIG1hcHBpbmcpIHtcbiAgICAgIGZvcmluKG9iamVjdCwgZnVuY3Rpb24ocHJvcGVydHksIHZhbHVlKSB7XG4gICAgICAgIC8vIGNyZWF0ZSByZWdleHAgc2hvcnRjdXRcbiAgICAgICAgdmFyIHNlbGVjdG9yUmVnRXhwID0gbmV3IFJlZ0V4cChzZWxlY3Rvcik7XG5cbiAgICAgICAgLy8gdGVzdHMgaWZcbiAgICAgICAgdmFyIG1hdGNoZXMgPSBzZWxlY3RvclJlZ0V4cC50ZXN0KHByb3BlcnR5KTtcblxuICAgICAgICAvLyBubyBtYXRjaCwgc2tpcFxuICAgICAgICBpZiAoIW1hdGNoZXMpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyBpZiB0aGVyZSdzIGEgbWFwcGluZywgdGhlIG9yaWdpbmFsIHByb3BlcnR5IGlzIGFsd2F5cyByZW1vdmVkXG4gICAgICAgIGRlbGV0ZSBvYmplY3RbcHJvcGVydHldO1xuXG4gICAgICAgIC8vIHNob3VsZCBvbmx5IHJlbW92ZSwgd2UgZG9uZSFcbiAgICAgICAgaWYgKG1hcHBpbmcgPT09IGZhbHNlKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gbW92ZSB2YWx1ZSB0byBuZXcgcHJvcGVydHlcbiAgICAgICAgaWYgKGlzU3RyaW5nKG1hcHBpbmcpKSB7XG4gICAgICAgICAgb2JqZWN0W21hcHBpbmddID0gdmFsdWU7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gbW92ZSB0byBncm91cFxuICAgICAgICB2YXIgZ3JvdXAgPSBtYXBwaW5nLmdyb3VwO1xuICAgICAgICBpZiAoaXNPYmplY3QobWFwcGluZykgJiYgIW9iamVjdFtncm91cF0pIHtcbiAgICAgICAgICBvYmplY3RbZ3JvdXBdID0ge307XG4gICAgICAgIH1cblxuICAgICAgICBvYmplY3RbZ3JvdXBdW1xuICAgICAgICAgIGxvd2VyQ2FzZUZpcnN0TGV0dGVyKHByb3BlcnR5LnJlcGxhY2Uoc2VsZWN0b3JSZWdFeHAsICcnKSlcbiAgICAgICAgXSA9IHZhbHVlO1xuICAgICAgfSk7XG5cbiAgICAgIC8vIGRvIHN1Ym1hcHBpbmdcbiAgICAgIGlmIChtYXBwaW5nLm1hcHBpbmcpIHtcbiAgICAgICAgbWFwT2JqZWN0KG9iamVjdFttYXBwaW5nLmdyb3VwXSwgbWFwcGluZy5tYXBwaW5nKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcblxuICB2YXIgZ2V0QXR0cmlidXRlc0FzT2JqZWN0ID0gZnVuY3Rpb24gZ2V0QXR0cmlidXRlc0FzT2JqZWN0KG5vZGUpIHtcbiAgICB2YXIgYXR0cmlidXRlTWFwcGluZyA9XG4gICAgICBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuICAgIC8vIHR1cm4gYXR0cmlidXRlcyBpbnRvIG9iamVjdFxuICAgIHZhciBhdHRyaWJ1dGVzID0gW107XG4gICAgZm9yaW4obm9kZS5hdHRyaWJ1dGVzLCBmdW5jdGlvbihpbmRleCkge1xuICAgICAgYXR0cmlidXRlcy5wdXNoKG5vZGUuYXR0cmlidXRlc1tpbmRleF0pO1xuICAgIH0pO1xuXG4gICAgdmFyIG91dHB1dCA9IGF0dHJpYnV0ZXNcbiAgICAgIC5maWx0ZXIoZnVuY3Rpb24oYXR0cmlidXRlKSB7XG4gICAgICAgIHJldHVybiBhdHRyaWJ1dGUubmFtZTtcbiAgICAgIH0pXG4gICAgICAucmVkdWNlKGZ1bmN0aW9uKG9iaiwgYXR0cmlidXRlKSB7XG4gICAgICAgIHZhciB2YWx1ZSA9IGF0dHIobm9kZSwgYXR0cmlidXRlLm5hbWUpO1xuXG4gICAgICAgIG9ialthdHRyaWJ1dGVOYW1lVG9Qcm9wZXJ0eU5hbWUoYXR0cmlidXRlLm5hbWUpXSA9XG4gICAgICAgICAgdmFsdWUgPT09IGF0dHJpYnV0ZS5uYW1lID8gdHJ1ZSA6IHZhbHVlO1xuICAgICAgICByZXR1cm4gb2JqO1xuICAgICAgfSwge30pO1xuXG4gICAgLy8gZG8gbWFwcGluZyBvZiBvYmplY3QgcHJvcGVydGllc1xuICAgIG1hcE9iamVjdChvdXRwdXQsIGF0dHJpYnV0ZU1hcHBpbmcpO1xuXG4gICAgcmV0dXJuIG91dHB1dDtcbiAgfTtcblxuICB2YXIgY3JlYXRlQXBwQXRFbGVtZW50ID0gZnVuY3Rpb24gY3JlYXRlQXBwQXRFbGVtZW50KGVsZW1lbnQpIHtcbiAgICB2YXIgb3B0aW9ucyA9XG4gICAgICBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuXG4gICAgLy8gaG93IGF0dHJpYnV0ZXMgb2YgdGhlIGlucHV0IGVsZW1lbnQgYXJlIG1hcHBlZCB0byB0aGUgb3B0aW9ucyBmb3IgdGhlIHBsdWdpblxuICAgIHZhciBhdHRyaWJ1dGVNYXBwaW5nID0ge1xuICAgICAgLy8gdHJhbnNsYXRlIHRvIG90aGVyIG5hbWVcbiAgICAgICdeY2xhc3MkJzogJ2NsYXNzTmFtZScsXG4gICAgICAnXm11bHRpcGxlJCc6ICdhbGxvd011bHRpcGxlJyxcbiAgICAgICdeY2FwdHVyZSQnOiAnY2FwdHVyZU1ldGhvZCcsXG5cbiAgICAgIC8vIGdyb3VwIHVuZGVyIHNpbmdsZSBwcm9wZXJ0eVxuICAgICAgJ15zZXJ2ZXInOiB7XG4gICAgICAgIGdyb3VwOiAnc2VydmVyJyxcbiAgICAgICAgbWFwcGluZzoge1xuICAgICAgICAgICdecHJvY2Vzcyc6IHtcbiAgICAgICAgICAgIGdyb3VwOiAncHJvY2VzcydcbiAgICAgICAgICB9LFxuXG4gICAgICAgICAgJ15yZXZlcnQnOiB7XG4gICAgICAgICAgICBncm91cDogJ3JldmVydCdcbiAgICAgICAgICB9LFxuXG4gICAgICAgICAgJ15mZXRjaCc6IHtcbiAgICAgICAgICAgIGdyb3VwOiAnZmV0Y2gnXG4gICAgICAgICAgfSxcblxuICAgICAgICAgICdecmVzdG9yZSc6IHtcbiAgICAgICAgICAgIGdyb3VwOiAncmVzdG9yZSdcbiAgICAgICAgICB9LFxuXG4gICAgICAgICAgJ15sb2FkJzoge1xuICAgICAgICAgICAgZ3JvdXA6ICdsb2FkJ1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSxcblxuICAgICAgLy8gZG9uJ3QgaW5jbHVkZSBpbiBvYmplY3RcbiAgICAgICdedHlwZSQnOiBmYWxzZSxcbiAgICAgICdeZmlsZXMkJzogZmFsc2VcbiAgICB9O1xuXG4gICAgLy8gYWRkIGFkZGl0aW9uYWwgb3B0aW9uIHRyYW5zbGF0b3JzXG4gICAgYXBwbHlGaWx0ZXJzKCdTRVRfQVRUUklCVVRFX1RPX09QVElPTl9NQVAnLCBhdHRyaWJ1dGVNYXBwaW5nKTtcblxuICAgIC8vIGNyZWF0ZSBmaW5hbCBvcHRpb25zIG9iamVjdCBieSBzZXR0aW5nIG9wdGlvbnMgb2JqZWN0IGFuZCB0aGVuIG92ZXJyaWRpbmcgb3B0aW9ucyBzdXBwbGllZCBvbiBlbGVtZW50XG4gICAgdmFyIG1lcmdlZE9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHt9LCBvcHRpb25zKTtcblxuICAgIHZhciBhdHRyaWJ1dGVPcHRpb25zID0gZ2V0QXR0cmlidXRlc0FzT2JqZWN0KFxuICAgICAgZWxlbWVudC5ub2RlTmFtZSA9PT0gJ0ZJRUxEU0VUJ1xuICAgICAgICA/IGVsZW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbdHlwZT1maWxlXScpXG4gICAgICAgIDogZWxlbWVudCxcbiAgICAgIGF0dHJpYnV0ZU1hcHBpbmdcbiAgICApO1xuXG4gICAgLy8gbWVyZ2Ugd2l0aCBvcHRpb25zIG9iamVjdFxuICAgIE9iamVjdC5rZXlzKGF0dHJpYnV0ZU9wdGlvbnMpLmZvckVhY2goZnVuY3Rpb24oa2V5KSB7XG4gICAgICBpZiAoaXNPYmplY3QoYXR0cmlidXRlT3B0aW9uc1trZXldKSkge1xuICAgICAgICBpZiAoIWlzT2JqZWN0KG1lcmdlZE9wdGlvbnNba2V5XSkpIHtcbiAgICAgICAgICBtZXJnZWRPcHRpb25zW2tleV0gPSB7fTtcbiAgICAgICAgfVxuICAgICAgICBPYmplY3QuYXNzaWduKG1lcmdlZE9wdGlvbnNba2V5XSwgYXR0cmlidXRlT3B0aW9uc1trZXldKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG1lcmdlZE9wdGlvbnNba2V5XSA9IGF0dHJpYnV0ZU9wdGlvbnNba2V5XTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIC8vIGlmIHBhcmVudCBpcyBhIGZpZWxkc2V0LCBnZXQgZmlsZXMgZnJvbSBwYXJlbnQgYnkgc2VsZWN0aW5nIGFsbCBpbnB1dCBmaWVsZHMgdGhhdCBhcmUgbm90IGZpbGUgdXBsb2FkIGZpZWxkc1xuICAgIC8vIHRoZXNlIHdpbGwgdGhlbiBiZSBhdXRvbWF0aWNhbGx5IHNldCB0byB0aGUgaW5pdGlhbCBmaWxlc1xuICAgIG1lcmdlZE9wdGlvbnMuZmlsZXMgPSAob3B0aW9ucy5maWxlcyB8fCBbXSkuY29uY2F0KFxuICAgICAgQXJyYXkuZnJvbShlbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0Om5vdChbdHlwZT1maWxlXSknKSkubWFwKFxuICAgICAgICBmdW5jdGlvbihpbnB1dCkge1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBzb3VyY2U6IGlucHV0LnZhbHVlLFxuICAgICAgICAgICAgb3B0aW9uczoge1xuICAgICAgICAgICAgICB0eXBlOiBpbnB1dC5kYXRhc2V0LnR5cGVcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICApXG4gICAgKTtcblxuICAgIC8vIGJ1aWxkIHBsdWdpblxuICAgIHZhciBhcHAgPSBjcmVhdGVBcHBPYmplY3QobWVyZ2VkT3B0aW9ucyk7XG5cbiAgICAvLyBhZGQgYWxyZWFkeSBzZWxlY3RlZCBmaWxlc1xuICAgIGlmIChlbGVtZW50LmZpbGVzKSB7XG4gICAgICBBcnJheS5mcm9tKGVsZW1lbnQuZmlsZXMpLmZvckVhY2goZnVuY3Rpb24oZmlsZSkge1xuICAgICAgICBhcHAuYWRkRmlsZShmaWxlKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIHJlcGxhY2UgdGhlIHRhcmdldCBlbGVtZW50XG4gICAgYXBwLnJlcGxhY2VFbGVtZW50KGVsZW1lbnQpO1xuXG4gICAgLy8gZXhwb3NlXG4gICAgcmV0dXJuIGFwcDtcbiAgfTtcblxuICAvLyBpZiBhbiBlbGVtZW50IGlzIHBhc3NlZCwgd2UgY3JlYXRlIHRoZSBpbnN0YW5jZSBhdCB0aGF0IGVsZW1lbnQsIGlmIG5vdCwgd2UganVzdCBjcmVhdGUgYW4gdXAgb2JqZWN0XG4gIHZhciBjcmVhdGVBcHAkMSA9IGZ1bmN0aW9uIGNyZWF0ZUFwcCgpIHtcbiAgICByZXR1cm4gaXNOb2RlKGFyZ3VtZW50cy5sZW5ndGggPD0gMCA/IHVuZGVmaW5lZCA6IGFyZ3VtZW50c1swXSlcbiAgICAgID8gY3JlYXRlQXBwQXRFbGVtZW50LmFwcGx5KHZvaWQgMCwgYXJndW1lbnRzKVxuICAgICAgOiBjcmVhdGVBcHBPYmplY3QuYXBwbHkodm9pZCAwLCBhcmd1bWVudHMpO1xuICB9O1xuXG4gIHZhciBQUklWQVRFX01FVEhPRFMgPSBbJ2ZpcmUnLCAnX3JlYWQnLCAnX3dyaXRlJ107XG5cbiAgdmFyIGNyZWF0ZUFwcEFQSSA9IGZ1bmN0aW9uIGNyZWF0ZUFwcEFQSShhcHApIHtcbiAgICB2YXIgYXBpID0ge307XG5cbiAgICBjb3B5T2JqZWN0UHJvcGVydGllc1RvT2JqZWN0KGFwcCwgYXBpLCBQUklWQVRFX01FVEhPRFMpO1xuXG4gICAgcmV0dXJuIGFwaTtcbiAgfTtcblxuICAvKipcbiAgICogUmVwbGFjZXMgcGxhY2Vob2xkZXJzIGluIGdpdmVuIHN0cmluZyB3aXRoIHJlcGxhY2VtZW50c1xuICAgKiBAcGFyYW0gc3RyaW5nIC0gXCJGb28ge2Jhcn1cIlwiXG4gICAqIEBwYXJhbSByZXBsYWNlbWVudHMgLSB7IFwiYmFyXCI6IDEwIH1cbiAgICovXG4gIHZhciByZXBsYWNlSW5TdHJpbmcgPSBmdW5jdGlvbiByZXBsYWNlSW5TdHJpbmcoc3RyaW5nLCByZXBsYWNlbWVudHMpIHtcbiAgICByZXR1cm4gc3RyaW5nLnJlcGxhY2UoLyg/OnsoW2EtekEtWl0rKX0pL2csIGZ1bmN0aW9uKG1hdGNoLCBncm91cCkge1xuICAgICAgcmV0dXJuIHJlcGxhY2VtZW50c1tncm91cF07XG4gICAgfSk7XG4gIH07XG5cbiAgdmFyIGNyZWF0ZVdvcmtlciA9IGZ1bmN0aW9uIGNyZWF0ZVdvcmtlcihmbikge1xuICAgIHZhciB3b3JrZXJCbG9iID0gbmV3IEJsb2IoWycoJywgZm4udG9TdHJpbmcoKSwgJykoKSddLCB7XG4gICAgICB0eXBlOiAnYXBwbGljYXRpb24vamF2YXNjcmlwdCdcbiAgICB9KTtcblxuICAgIHZhciB3b3JrZXJVUkwgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKHdvcmtlckJsb2IpO1xuICAgIHZhciB3b3JrZXIgPSBuZXcgV29ya2VyKHdvcmtlclVSTCk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgdHJhbnNmZXI6IGZ1bmN0aW9uIHRyYW5zZmVyKG1lc3NhZ2UsIGNiKSB7fSxcbiAgICAgIHBvc3Q6IGZ1bmN0aW9uIHBvc3QobWVzc2FnZSwgY2IsIHRyYW5zZmVyTGlzdCkge1xuICAgICAgICB2YXIgaWQgPSBnZXRVbmlxdWVJZCgpO1xuXG4gICAgICAgIHdvcmtlci5vbm1lc3NhZ2UgPSBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgaWYgKGUuZGF0YS5pZCA9PT0gaWQpIHtcbiAgICAgICAgICAgIGNiKGUuZGF0YS5tZXNzYWdlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgd29ya2VyLnBvc3RNZXNzYWdlKFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGlkOiBpZCxcbiAgICAgICAgICAgIG1lc3NhZ2U6IG1lc3NhZ2VcbiAgICAgICAgICB9LFxuXG4gICAgICAgICAgdHJhbnNmZXJMaXN0XG4gICAgICAgICk7XG4gICAgICB9LFxuICAgICAgdGVybWluYXRlOiBmdW5jdGlvbiB0ZXJtaW5hdGUoKSB7XG4gICAgICAgIHdvcmtlci50ZXJtaW5hdGUoKTtcbiAgICAgICAgVVJMLnJldm9rZU9iamVjdFVSTCh3b3JrZXJVUkwpO1xuICAgICAgfVxuICAgIH07XG4gIH07XG5cbiAgdmFyIGxvYWRJbWFnZSA9IGZ1bmN0aW9uIGxvYWRJbWFnZSh1cmwpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICB2YXIgaW1nID0gbmV3IEltYWdlKCk7XG4gICAgICBpbWcub25sb2FkID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJlc29sdmUoaW1nKTtcbiAgICAgIH07XG4gICAgICBpbWcub25lcnJvciA9IGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgcmVqZWN0KGUpO1xuICAgICAgfTtcbiAgICAgIGltZy5zcmMgPSB1cmw7XG4gICAgfSk7XG4gIH07XG5cbiAgdmFyIHJlbmFtZUZpbGUgPSBmdW5jdGlvbiByZW5hbWVGaWxlKGZpbGUsIG5hbWUpIHtcbiAgICB2YXIgcmVuYW1lZEZpbGUgPSBmaWxlLnNsaWNlKDAsIGZpbGUuc2l6ZSwgZmlsZS50eXBlKTtcbiAgICByZW5hbWVkRmlsZS5sYXN0TW9kaWZpZWREYXRlID0gZmlsZS5sYXN0TW9kaWZpZWREYXRlO1xuICAgIHJlbmFtZWRGaWxlLm5hbWUgPSBuYW1lO1xuICAgIHJldHVybiByZW5hbWVkRmlsZTtcbiAgfTtcblxuICB2YXIgY29weUZpbGUgPSBmdW5jdGlvbiBjb3B5RmlsZShmaWxlKSB7XG4gICAgcmV0dXJuIHJlbmFtZUZpbGUoZmlsZSwgZmlsZS5uYW1lKTtcbiAgfTtcblxuICAvLyBhbHJlYWR5IHJlZ2lzdGVyZWQgcGx1Z2lucyAoY2FuJ3QgcmVnaXN0ZXIgdHdpY2UpXG4gIHZhciByZWdpc3RlcmVkUGx1Z2lucyA9IFtdO1xuXG4gIC8vIHBhc3MgdXRpbHMgdG8gcGx1Z2luXG4gIHZhciBjcmVhdGVBcHBQbHVnaW4gPSBmdW5jdGlvbiBjcmVhdGVBcHBQbHVnaW4ocGx1Z2luKSB7XG4gICAgLy8gYWxyZWFkeSByZWdpc3RlcmVkXG4gICAgaWYgKHJlZ2lzdGVyZWRQbHVnaW5zLmluY2x1ZGVzKHBsdWdpbikpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyByZW1lbWJlciB0aGlzIHBsdWdpblxuICAgIHJlZ2lzdGVyZWRQbHVnaW5zLnB1c2gocGx1Z2luKTtcblxuICAgIC8vIHNldHVwIVxuICAgIHZhciBwbHVnaW5PdXRsaW5lID0gcGx1Z2luKHtcbiAgICAgIGFkZEZpbHRlcjogYWRkRmlsdGVyLFxuICAgICAgdXRpbHM6IHtcbiAgICAgICAgVHlwZTogVHlwZSxcbiAgICAgICAgZm9yaW46IGZvcmluLFxuICAgICAgICBpc1N0cmluZzogaXNTdHJpbmcsXG4gICAgICAgIGlzRmlsZTogaXNGaWxlLFxuICAgICAgICB0b05hdHVyYWxGaWxlU2l6ZTogdG9OYXR1cmFsRmlsZVNpemUsXG4gICAgICAgIHJlcGxhY2VJblN0cmluZzogcmVwbGFjZUluU3RyaW5nLFxuICAgICAgICBnZXRFeHRlbnNpb25Gcm9tRmlsZW5hbWU6IGdldEV4dGVuc2lvbkZyb21GaWxlbmFtZSxcbiAgICAgICAgZ2V0RmlsZW5hbWVXaXRob3V0RXh0ZW5zaW9uOiBnZXRGaWxlbmFtZVdpdGhvdXRFeHRlbnNpb24sXG4gICAgICAgIGd1ZXNzdGltYXRlTWltZVR5cGU6IGd1ZXNzdGltYXRlTWltZVR5cGUsXG4gICAgICAgIGdldEZpbGVGcm9tQmxvYjogZ2V0RmlsZUZyb21CbG9iLFxuICAgICAgICBnZXRGaWxlbmFtZUZyb21VUkw6IGdldEZpbGVuYW1lRnJvbVVSTCxcbiAgICAgICAgY3JlYXRlUm91dGU6IGNyZWF0ZVJvdXRlLFxuICAgICAgICBjcmVhdGVXb3JrZXI6IGNyZWF0ZVdvcmtlcixcbiAgICAgICAgY3JlYXRlVmlldzogY3JlYXRlVmlldyxcbiAgICAgICAgY3JlYXRlSXRlbUFQSTogY3JlYXRlSXRlbUFQSSxcbiAgICAgICAgbG9hZEltYWdlOiBsb2FkSW1hZ2UsXG4gICAgICAgIGNvcHlGaWxlOiBjb3B5RmlsZSxcbiAgICAgICAgcmVuYW1lRmlsZTogcmVuYW1lRmlsZSxcbiAgICAgICAgY3JlYXRlQmxvYjogY3JlYXRlQmxvYixcbiAgICAgICAgYXBwbHlGaWx0ZXJDaGFpbjogYXBwbHlGaWx0ZXJDaGFpbixcbiAgICAgICAgdGV4dDogdGV4dCxcbiAgICAgICAgZ2V0TnVtZXJpY0FzcGVjdFJhdGlvRnJvbVN0cmluZzogZ2V0TnVtZXJpY0FzcGVjdFJhdGlvRnJvbVN0cmluZ1xuICAgICAgfSxcblxuICAgICAgdmlld3M6IHtcbiAgICAgICAgZmlsZUFjdGlvbkJ1dHRvbjogZmlsZUFjdGlvbkJ1dHRvblxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgLy8gYWRkIHBsdWdpbiBvcHRpb25zIHRvIGRlZmF1bHQgb3B0aW9uc1xuICAgIGV4dGVuZERlZmF1bHRPcHRpb25zKHBsdWdpbk91dGxpbmUub3B0aW9ucyk7XG4gIH07XG5cbiAgLy8gZmVhdHVyZSBkZXRlY3Rpb24gdXNlZCBieSBzdXBwb3J0ZWQoKSBtZXRob2RcbiAgdmFyIGlzT3BlcmFNaW5pID0gZnVuY3Rpb24gaXNPcGVyYU1pbmkoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh3aW5kb3cub3BlcmFtaW5pKSA9PT0gJ1tvYmplY3QgT3BlcmFNaW5pXSdcbiAgICApO1xuICB9O1xuICB2YXIgaGFzUHJvbWlzZXMgPSBmdW5jdGlvbiBoYXNQcm9taXNlcygpIHtcbiAgICByZXR1cm4gJ1Byb21pc2UnIGluIHdpbmRvdztcbiAgfTtcbiAgdmFyIGhhc0Jsb2JTbGljZSA9IGZ1bmN0aW9uIGhhc0Jsb2JTbGljZSgpIHtcbiAgICByZXR1cm4gJ3NsaWNlJyBpbiBCbG9iLnByb3RvdHlwZTtcbiAgfTtcbiAgdmFyIGhhc0NyZWF0ZU9iamVjdFVSTCA9IGZ1bmN0aW9uIGhhc0NyZWF0ZU9iamVjdFVSTCgpIHtcbiAgICByZXR1cm4gJ1VSTCcgaW4gd2luZG93ICYmICdjcmVhdGVPYmplY3RVUkwnIGluIHdpbmRvdy5VUkw7XG4gIH07XG4gIHZhciBoYXNWaXNpYmlsaXR5ID0gZnVuY3Rpb24gaGFzVmlzaWJpbGl0eSgpIHtcbiAgICByZXR1cm4gJ3Zpc2liaWxpdHlTdGF0ZScgaW4gZG9jdW1lbnQ7XG4gIH07XG4gIHZhciBoYXNUaW1pbmcgPSBmdW5jdGlvbiBoYXNUaW1pbmcoKSB7XG4gICAgcmV0dXJuICdwZXJmb3JtYW5jZScgaW4gd2luZG93O1xuICB9OyAvLyBpT1MgOC54XG4gIHZhciBpc0Jyb3dzZXIgPSBmdW5jdGlvbiBpc0Jyb3dzZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiB3aW5kb3cuZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnXG4gICAgKTtcbiAgfTtcblxuICB2YXIgc3VwcG9ydGVkID0gKGZ1bmN0aW9uKCkge1xuICAgIC8vIFJ1bnMgaW1taWRpYXRlbHkgYW5kIHRoZW4gcmVtZW1iZXJzIHJlc3VsdCBmb3Igc3Vic2VxdWVudCBjYWxsc1xuICAgIHZhciBpc1N1cHBvcnRlZCA9XG4gICAgICAvLyBIYXMgdG8gYmUgYSBicm93c2VyXG4gICAgICBpc0Jyb3dzZXIoKSAmJlxuICAgICAgLy8gQ2FuJ3QgcnVuIG9uIE9wZXJhIE1pbmkgZHVlIHRvIGxhY2sgb2YgZXZlcnl0aGluZ1xuICAgICAgIWlzT3BlcmFNaW5pKCkgJiZcbiAgICAgIC8vIFJlcXVpcmUgdGhlc2UgQVBJcyB0byBmZWF0dXJlIGRldGVjdCBhIG1vZGVybiBicm93c2VyXG4gICAgICBoYXNWaXNpYmlsaXR5KCkgJiZcbiAgICAgIGhhc1Byb21pc2VzKCkgJiZcbiAgICAgIGhhc0Jsb2JTbGljZSgpICYmXG4gICAgICBoYXNDcmVhdGVPYmplY3RVUkwoKSAmJlxuICAgICAgaGFzVGltaW5nKCk7XG5cbiAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gaXNTdXBwb3J0ZWQ7XG4gICAgfTtcbiAgfSkoKTtcblxuICAvKipcbiAgICogUGx1Z2luIGludGVybmFsIHN0YXRlIChvdmVyIGFsbCBpbnN0YW5jZXMpXG4gICAqL1xuICB2YXIgc3RhdGUgPSB7XG4gICAgLy8gYWN0aXZlIGFwcCBpbnN0YW5jZXMsIHVzZWQgdG8gcmVkcmF3IHRoZSBhcHBzIGFuZCB0byBmaW5kIHRoZSBsYXRlclxuICAgIGFwcHM6IFtdXG4gIH07XG5cbiAgLy8gcGx1Z2luIG5hbWVcbiAgdmFyIG5hbWUgPSAnZmlsZXBvbmQnO1xuXG4gIC8qKlxuICAgKiBQdWJsaWMgUGx1Z2luIG1ldGhvZHNcbiAgICovXG4gIHZhciBmbiA9IGZ1bmN0aW9uIGZuKCkge307XG4gIGV4cG9ydHMuU3RhdHVzID0ge307XG4gIGV4cG9ydHMuRmlsZVN0YXR1cyA9IHt9O1xuICBleHBvcnRzLkZpbGVPcmlnaW4gPSB7fTtcbiAgZXhwb3J0cy5PcHRpb25UeXBlcyA9IHt9O1xuICBleHBvcnRzLmNyZWF0ZSA9IGZuO1xuICBleHBvcnRzLmRlc3Ryb3kgPSBmbjtcbiAgZXhwb3J0cy5wYXJzZSA9IGZuO1xuICBleHBvcnRzLmZpbmQgPSBmbjtcbiAgZXhwb3J0cy5yZWdpc3RlclBsdWdpbiA9IGZuO1xuICBleHBvcnRzLmdldE9wdGlvbnMgPSBmbjtcbiAgZXhwb3J0cy5zZXRPcHRpb25zID0gZm47XG5cbiAgLy8gaWYgbm90IHN1cHBvcnRlZCwgbm8gQVBJXG4gIGlmIChzdXBwb3J0ZWQoKSkge1xuICAgIC8vIHN0YXJ0IHBhaW50ZXIgYW5kIGZpcmUgbG9hZCBldmVudFxuICAgIGNyZWF0ZVBhaW50ZXIoXG4gICAgICBmdW5jdGlvbigpIHtcbiAgICAgICAgc3RhdGUuYXBwcy5mb3JFYWNoKGZ1bmN0aW9uKGFwcCkge1xuICAgICAgICAgIHJldHVybiBhcHAuX3JlYWQoKTtcbiAgICAgICAgfSk7XG4gICAgICB9LFxuICAgICAgZnVuY3Rpb24odHMpIHtcbiAgICAgICAgc3RhdGUuYXBwcy5mb3JFYWNoKGZ1bmN0aW9uKGFwcCkge1xuICAgICAgICAgIHJldHVybiBhcHAuX3dyaXRlKHRzKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgKTtcblxuICAgIC8vIGZpcmUgbG9hZGVkIGV2ZW50IHNvIHdlIGtub3cgd2hlbiBGaWxlUG9uZCBpcyBhdmFpbGFibGVcbiAgICB2YXIgZGlzcGF0Y2ggPSBmdW5jdGlvbiBkaXNwYXRjaCgpIHtcbiAgICAgIC8vIGxldCBvdGhlcnMga25vdyB3ZSBoYXZlIGFyZWEgcmVhZHlcbiAgICAgIGRvY3VtZW50LmRpc3BhdGNoRXZlbnQoXG4gICAgICAgIG5ldyBDdXN0b21FdmVudCgnRmlsZVBvbmQ6bG9hZGVkJywge1xuICAgICAgICAgIGRldGFpbDoge1xuICAgICAgICAgICAgc3VwcG9ydGVkOiBzdXBwb3J0ZWQsXG4gICAgICAgICAgICBjcmVhdGU6IGV4cG9ydHMuY3JlYXRlLFxuICAgICAgICAgICAgZGVzdHJveTogZXhwb3J0cy5kZXN0cm95LFxuICAgICAgICAgICAgcGFyc2U6IGV4cG9ydHMucGFyc2UsXG4gICAgICAgICAgICBmaW5kOiBleHBvcnRzLmZpbmQsXG4gICAgICAgICAgICByZWdpc3RlclBsdWdpbjogZXhwb3J0cy5yZWdpc3RlclBsdWdpbixcbiAgICAgICAgICAgIHNldE9wdGlvbnM6IGV4cG9ydHMuc2V0T3B0aW9uc1xuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICk7XG5cbiAgICAgIC8vIGNsZWFuIHVwIGV2ZW50XG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZGlzcGF0Y2gpO1xuICAgIH07XG5cbiAgICBpZiAoZG9jdW1lbnQucmVhZHlTdGF0ZSAhPT0gJ2xvYWRpbmcnKSB7XG4gICAgICAvLyBtb3ZlIHRvIGJhY2sgb2YgZXhlY3V0aW9uIHF1ZXVlLCBGaWxlUG9uZCBzaG91bGQgaGF2ZSBiZWVuIGV4cG9ydGVkIGJ5IHRoZW5cbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBkaXNwYXRjaCgpO1xuICAgICAgfSwgMCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBkaXNwYXRjaCk7XG4gICAgfVxuXG4gICAgLy8gdXBkYXRlcyB0aGUgT3B0aW9uVHlwZXMgb2JqZWN0IGJhc2VkIG9uIHRoZSBjdXJyZW50IG9wdGlvbnNcbiAgICB2YXIgdXBkYXRlT3B0aW9uVHlwZXMgPSBmdW5jdGlvbiB1cGRhdGVPcHRpb25UeXBlcygpIHtcbiAgICAgIHJldHVybiBmb3JpbihnZXRPcHRpb25zKCksIGZ1bmN0aW9uKGtleSwgdmFsdWUpIHtcbiAgICAgICAgZXhwb3J0cy5PcHRpb25UeXBlc1trZXldID0gdmFsdWVbMV07XG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgZXhwb3J0cy5TdGF0dXMgPSBPYmplY3QuYXNzaWduKHt9LCBTdGF0dXMpO1xuICAgIGV4cG9ydHMuRmlsZU9yaWdpbiA9IE9iamVjdC5hc3NpZ24oe30sIEZpbGVPcmlnaW4pO1xuICAgIGV4cG9ydHMuRmlsZVN0YXR1cyA9IE9iamVjdC5hc3NpZ24oe30sIEl0ZW1TdGF0dXMpO1xuXG4gICAgZXhwb3J0cy5PcHRpb25UeXBlcyA9IHt9O1xuICAgIHVwZGF0ZU9wdGlvblR5cGVzKCk7XG5cbiAgICAvLyBjcmVhdGUgbWV0aG9kLCBjcmVhdGVzIGFwcHMgYW5kIGFkZHMgdGhlbSB0byB0aGUgYXBwIGFycmF5XG4gICAgZXhwb3J0cy5jcmVhdGUgPSBmdW5jdGlvbiBjcmVhdGUoKSB7XG4gICAgICB2YXIgYXBwID0gY3JlYXRlQXBwJDEuYXBwbHkodm9pZCAwLCBhcmd1bWVudHMpO1xuICAgICAgYXBwLm9uKCdkZXN0cm95JywgZXhwb3J0cy5kZXN0cm95KTtcbiAgICAgIHN0YXRlLmFwcHMucHVzaChhcHApO1xuICAgICAgcmV0dXJuIGNyZWF0ZUFwcEFQSShhcHApO1xuICAgIH07XG5cbiAgICAvLyBkZXN0cm95cyBhcHBzIGFuZCByZW1vdmVzIHRoZW0gZnJvbSB0aGUgYXBwIGFycmF5XG4gICAgZXhwb3J0cy5kZXN0cm95ID0gZnVuY3Rpb24gZGVzdHJveShob29rKSB7XG4gICAgICAvLyByZXR1cm5zIHRydWUgaWYgdGhlIGFwcCB3YXMgZGVzdHJveWVkIHN1Y2Nlc3NmdWxseVxuICAgICAgdmFyIGluZGV4VG9SZW1vdmUgPSBzdGF0ZS5hcHBzLmZpbmRJbmRleChmdW5jdGlvbihhcHApIHtcbiAgICAgICAgcmV0dXJuIGFwcC5pc0F0dGFjaGVkVG8oaG9vayk7XG4gICAgICB9KTtcbiAgICAgIGlmIChpbmRleFRvUmVtb3ZlID49IDApIHtcbiAgICAgICAgLy8gcmVtb3ZlIGZyb20gYXBwc1xuICAgICAgICB2YXIgYXBwID0gc3RhdGUuYXBwcy5zcGxpY2UoaW5kZXhUb1JlbW92ZSwgMSlbMF07XG5cbiAgICAgICAgLy8gcmVzdG9yZSBvcmlnaW5hbCBkb20gZWxlbWVudFxuICAgICAgICBhcHAucmVzdG9yZUVsZW1lbnQoKTtcblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH07XG5cbiAgICAvLyBwYXJzZXMgdGhlIGdpdmVuIGNvbnRleHQgZm9yIHBsdWdpbnMgKGRvZXMgbm90IGluY2x1ZGUgdGhlIGNvbnRleHQgZWxlbWVudCBpdHNlbGYpXG4gICAgZXhwb3J0cy5wYXJzZSA9IGZ1bmN0aW9uIHBhcnNlKGNvbnRleHQpIHtcbiAgICAgIC8vIGdldCBhbGwgcG9zc2libGUgaG9va3NcbiAgICAgIHZhciBtYXRjaGVkSG9va3MgPSBBcnJheS5mcm9tKGNvbnRleHQucXVlcnlTZWxlY3RvckFsbCgnLicgKyBuYW1lKSk7XG5cbiAgICAgIC8vIGZpbHRlciBvdXQgYWxyZWFkeSBhY3RpdmUgaG9va3NcbiAgICAgIHZhciBuZXdIb29rcyA9IG1hdGNoZWRIb29rcy5maWx0ZXIoZnVuY3Rpb24obmV3SG9vaykge1xuICAgICAgICByZXR1cm4gIXN0YXRlLmFwcHMuZmluZChmdW5jdGlvbihhcHApIHtcbiAgICAgICAgICByZXR1cm4gYXBwLmlzQXR0YWNoZWRUbyhuZXdIb29rKTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcblxuICAgICAgLy8gY3JlYXRlIG5ldyBpbnN0YW5jZSBmb3IgZWFjaCBob29rXG4gICAgICByZXR1cm4gbmV3SG9va3MubWFwKGZ1bmN0aW9uKGhvb2spIHtcbiAgICAgICAgcmV0dXJuIGV4cG9ydHMuY3JlYXRlKGhvb2spO1xuICAgICAgfSk7XG4gICAgfTtcblxuICAgIC8vIHJldHVybnMgYW4gYXBwIGJhc2VkIG9uIHRoZSBnaXZlbiBlbGVtZW50IGhvb2tcbiAgICBleHBvcnRzLmZpbmQgPSBmdW5jdGlvbiBmaW5kKGhvb2spIHtcbiAgICAgIHZhciBhcHAgPSBzdGF0ZS5hcHBzLmZpbmQoZnVuY3Rpb24oYXBwKSB7XG4gICAgICAgIHJldHVybiBhcHAuaXNBdHRhY2hlZFRvKGhvb2spO1xuICAgICAgfSk7XG4gICAgICBpZiAoIWFwcCkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjcmVhdGVBcHBBUEkoYXBwKTtcbiAgICB9O1xuXG4gICAgLy8gYWRkcyBhIHBsdWdpbiBleHRlbnNpb25cbiAgICBleHBvcnRzLnJlZ2lzdGVyUGx1Z2luID0gZnVuY3Rpb24gcmVnaXN0ZXJQbHVnaW4oKSB7XG4gICAgICBmb3IgKFxuICAgICAgICB2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIHBsdWdpbnMgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwO1xuICAgICAgICBfa2V5IDwgX2xlbjtcbiAgICAgICAgX2tleSsrXG4gICAgICApIHtcbiAgICAgICAgcGx1Z2luc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICAgIH1cblxuICAgICAgLy8gcmVnaXN0ZXIgcGx1Z2luc1xuICAgICAgcGx1Z2lucy5mb3JFYWNoKGNyZWF0ZUFwcFBsdWdpbik7XG5cbiAgICAgIC8vIHVwZGF0ZSBPcHRpb25UeXBlcywgZWFjaCBwbHVnaW4gbWlnaHQgaGF2ZSBleHRlbmRlZCB0aGUgZGVmYXVsdCBvcHRpb25zXG4gICAgICB1cGRhdGVPcHRpb25UeXBlcygpO1xuICAgIH07XG5cbiAgICBleHBvcnRzLmdldE9wdGlvbnMgPSBmdW5jdGlvbiBnZXRPcHRpb25zJDEoKSB7XG4gICAgICB2YXIgb3B0cyA9IHt9O1xuICAgICAgZm9yaW4oZ2V0T3B0aW9ucygpLCBmdW5jdGlvbihrZXksIHZhbHVlKSB7XG4gICAgICAgIG9wdHNba2V5XSA9IHZhbHVlWzBdO1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gb3B0cztcbiAgICB9O1xuXG4gICAgZXhwb3J0cy5zZXRPcHRpb25zID0gZnVuY3Rpb24gc2V0T3B0aW9ucyQxKG9wdHMpIHtcbiAgICAgIGlmIChpc09iamVjdChvcHRzKSkge1xuICAgICAgICAvLyB1cGRhdGUgZXhpc3RpbmcgcGx1Z2luc1xuICAgICAgICBzdGF0ZS5hcHBzLmZvckVhY2goZnVuY3Rpb24oYXBwKSB7XG4gICAgICAgICAgYXBwLnNldE9wdGlvbnMob3B0cyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIG92ZXJyaWRlIGRlZmF1bHRzXG4gICAgICAgIHNldE9wdGlvbnMob3B0cyk7XG4gICAgICB9XG5cbiAgICAgIC8vIHJldHVybiBuZXcgb3B0aW9uc1xuICAgICAgcmV0dXJuIGV4cG9ydHMuZ2V0T3B0aW9ucygpO1xuICAgIH07XG4gIH1cblxuICBleHBvcnRzLnN1cHBvcnRlZCA9IHN1cHBvcnRlZDtcblxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufSk7XG4iLCIoZnVuY3Rpb24gKGNhbGxlciwgYnVzKSB7XG4gIGlmICh0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IGJ1cygpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jykge1xuICAgIGV4cG9ydHMuRXZlbnRCdXMgPSBidXMoKTtcbiAgfSBlbHNlIHtcbiAgICBjYWxsZXIuRXZlbnRCdXMgPSBidXMoKTtcbiAgfVxufSkodGhpcywgZnVuY3Rpb24gKCkge1xuICB2YXIgRXZlbnRCdXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5saXN0ZW5lcnMgPSB7fTtcblxuICAgIHRoaXMucmVnaXN0ZXJMaXN0ZW5lciA9IGZ1bmN0aW9uIChldmVudCwgY2FsbGJhY2ssIG51bWJlcikge1xuICAgICAgdmFyIHR5cGUgPSBldmVudC5jb25zdHJ1Y3Rvci5uYW1lO1xuICAgICAgbnVtYmVyID0gdGhpcy52YWxpZGF0ZU51bWJlcihudW1iZXIgfHwgJ2FueScpO1xuICBcbiAgICAgIGlmICh0eXBlICE9PSAnQXJyYXknKSB7XG4gICAgICAgIGV2ZW50ID0gW2V2ZW50XTtcbiAgICAgIH1cblxuICAgICAgZXZlbnQuZm9yRWFjaChmdW5jdGlvbiAoZSkge1xuICAgICAgICBpZiAoZS5jb25zdHJ1Y3Rvci5uYW1lICE9PSAnU3RyaW5nJykge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignT25seSBgU3RyaW5nYCBhbmQgYXJyYXkgb2YgYFN0cmluZ2AgYXJlIGFjY2VwdGVkIGZvciB0aGUgZXZlbnQgbmFtZXMhJyk7XG4gICAgICAgIH1cbiAgXG4gICAgICAgIHRoYXQubGlzdGVuZXJzW2VdID0gdGhhdC5saXN0ZW5lcnNbZV0gfHzCoFtdO1xuICAgICAgICB0aGF0Lmxpc3RlbmVyc1tlXS5wdXNoKHtcbiAgICAgICAgICBjYWxsYmFjazogY2FsbGJhY2ssXG4gICAgICAgICAgbnVtYmVyOiBudW1iZXJcbiAgICAgICAgfSk7XG4gIFxuICAgICAgfSk7XG4gICAgfTtcblxuICAgIC8vIHZhbGlvZGF0ZSB0aGF0IHRoZSBudW1iZXIgaXMgYSB2aWxkIG51bWJlciBmb3IgdGhlIG51bWJlciBvZiBleGVjdXRpb25zXG4gICAgdGhpcy52YWxpZGF0ZU51bWJlciA9IGZ1bmN0aW9uIChuKSB7XG4gICAgICB2YXIgdHlwZSA9IG4uY29uc3RydWN0b3IubmFtZTtcblxuICAgICAgaWYgKHR5cGUgPT09ICdOdW1iZXInKSB7XG4gICAgICAgIHJldHVybiBuO1xuICAgICAgfSBlbHNlIGlmICh0eXBlID09PSAnU3RyaW5nJyAmJiBuLnRvTG93ZXJDYXNlKCkgPT09ICdhbnknKSB7XG4gICAgICAgIHJldHVybiAnYW55JztcbiAgICAgIH1cblxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdPbmx5IGBOdW1iZXJgIGFuZCBgYW55YCBhcmUgYWNjZXB0ZWQgaW4gdGhlIG51bWJlciBvZiBwb3NzaWJsZSBleGVjdXRpb25zIScpO1xuICAgIH07XG5cbiAgICAvLyByZXR1cm4gd2V0aGVyIG9yIG5vdCB0aGlzIGV2ZW50IG5lZWRzIHRvIGJlIHJlbW92ZWQgXG4gICAgdGhpcy50b0JlUmVtb3ZlZCA9IGZ1bmN0aW9uIChpbmZvKSB7XG4gICAgICB2YXIgbnVtYmVyID0gaW5mby5udW1iZXI7XG4gICAgICBpbmZvLmV4ZWN1dGlvbiA9IGluZm8uZXhlY3V0aW9uIHx8IDA7XG4gICAgICBpbmZvLmV4ZWN1dGlvbisrO1xuXG4gICAgICBpZiAobnVtYmVyID09PSAnYW55JyB8fCBpbmZvLmV4ZWN1dGlvbiA8IG51bWJlcikge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH07XG5cbiAgICB2YXIgdGhhdCA9IHRoaXM7XG4gICAgcmV0dXJuIHtcbiAgICAgIC8qKlxuICAgICAgICogQXR0YWNoIGEgY2FsbGJhY2sgdG8gYW4gZXZlbnRcbiAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBldmVudE5hbWUgLSBuYW1lIG9mIHRoZSBldmVudC5cbiAgICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IGNhbGxiYWNrIC0gY2FsbGJhY2sgZXhlY3V0ZWQgd2hlbiB0aGlzIGV2ZW50IGlzIHRyaWdnZXJlZFxuICAgICAgICovXG4gICAgICBvbjogZnVuY3Rpb24gKGV2ZW50TmFtZSwgY2FsbGJhY2spIHtcbiAgICAgICAgdGhhdC5yZWdpc3Rlckxpc3RlbmVyLmJpbmQodGhhdCkoZXZlbnROYW1lLCBjYWxsYmFjaywgJ2FueScpO1xuICAgICAgfSxcblxuICAgICAgLyoqXG4gICAgICAgKiBBdHRhY2ggYSBjYWxsYmFjayB0byBhbiBldmVudC4gVGhpcyBjYWxsYmFjayB3aWxsIG5vdCBiZSBleGVjdXRlZCBtb3JlIHRoYW4gb25jZSBpZiB0aGUgZXZlbnQgaXMgdHJpZ2dlciBtdXRpcGxlIHRpbWVzXG4gICAgICAgKiBAcGFyYW0ge3N0cmluZ30gZXZlbnROYW1lIC0gbmFtZSBvZiB0aGUgZXZlbnQuXG4gICAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBjYWxsYmFjayAtIGNhbGxiYWNrIGV4ZWN1dGVkIHdoZW4gdGhpcyBldmVudCBpcyB0cmlnZ2VyZWRcbiAgICAgICAqL1xuICAgICAgb25jZTogZnVuY3Rpb24gKGV2ZW50TmFtZSwgY2FsbGJhY2spIHtcbiAgICAgICAgdGhhdC5yZWdpc3Rlckxpc3RlbmVyLmJpbmQodGhhdCkoZXZlbnROYW1lLCBjYWxsYmFjaywgMSk7XG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIEF0dGFjaCBhIGNhbGxiYWNrIHRvIGFuIGV2ZW50LiBUaGlzIGNhbGxiYWNrIHdpbGwgYmUgZXhlY3V0ZWQgd2lsbCBub3QgYmUgZXhlY3V0ZWQgbW9yZSB0aGFuIHRoZSBudW1iZXIgaWYgdGhlIGV2ZW50IGlzIHRyaWdnZXIgbXV0aXBsZSB0aW1lc1xuICAgICAgICogQHBhcmFtIHtudW1iZXJ9IG51bWJlciAtIG1heCBudW1iZXIgb2YgZXhlY3V0aW9uc1xuICAgICAgICogQHBhcmFtIHtzdHJpbmd9IGV2ZW50TmFtZSAtIG5hbWUgb2YgdGhlIGV2ZW50LlxuICAgICAgICogQHBhcmFtIHtmdW5jdGlvbn0gY2FsbGJhY2sgLSBjYWxsYmFjayBleGVjdXRlZCB3aGVuIHRoaXMgZXZlbnQgaXMgdHJpZ2dlcmVkXG4gICAgICAgKi9cbiAgICAgIGV4YWN0bHk6IGZ1bmN0aW9uIChudW1iZXIsIGV2ZW50TmFtZSwgY2FsbGJhY2spIHtcbiAgICAgICAgdGhhdC5yZWdpc3Rlckxpc3RlbmVyLmJpbmQodGhhdCkoZXZlbnROYW1lLCBjYWxsYmFjaywgbnVtYmVyKTtcbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogS2lsbCBhbiBldmVudCB3aXRoIGFsbCBpdCdzIGNhbGxiYWNrc1xuICAgICAgICogQHBhcmFtIHtzdHJpbmd9IGV2ZW50TmFtZSAtIG5hbWUgb2YgdGhlIGV2ZW50LlxuICAgICAgICovXG4gICAgICBkaWU6IGZ1bmN0aW9uIChldmVudE5hbWUpIHtcbiAgICAgICAgZGVsZXRlIHRoYXQubGlzdGVuZXJzW2V2ZW50TmFtZV07XG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIEtpbGwgYW4gZXZlbnQgd2l0aCBhbGwgaXQncyBjYWxsYmFja3NcbiAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBldmVudE5hbWUgLSBuYW1lIG9mIHRoZSBldmVudC5cbiAgICAgICAqL1xuICAgICAgb2ZmOiBmdW5jdGlvbiAoZXZlbnROYW1lKSB7XG4gICAgICAgIHRoaXMuZGllKGV2ZW50TmFtZSk7XG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIFJlbW92ZSB0aGUgY2FsbGJhY2sgZm9yIHRoZSBnaXZlbiBldmVudFxuICAgICAgICogQHBhcmFtIHtzdHJpbmd9IGV2ZW50TmFtZSAtIG5hbWUgb2YgdGhlIGV2ZW50LlxuICAgICAgICogQHBhcmFtIHtjYWxsYmFja30gY2FsbGJhY2sgLSB0aGUgY2FsbGJhY2sgdG8gcmVtb3ZlICh1bmRlZmluZWQgdG8gcmVtb3ZlIGFsbCBvZiB0aGVtKS5cbiAgICAgICAqL1xuICAgICAgZGV0YWNoOiBmdW5jdGlvbiAoZXZlbnROYW1lLCBjYWxsYmFjaykge1xuICAgICAgICBmb3IgKHZhciBrIGluIHRoYXQubGlzdGVuZXJzW2V2ZW50TmFtZV0pIHtcbiAgICAgICAgICBpZiAoXG4gICAgICAgICAgICB0aGF0Lmxpc3RlbmVyc1tldmVudE5hbWVdLmhhc093blByb3BlcnR5KGspICYmIFxuICAgICAgICAgICAgKHRoYXQubGlzdGVuZXJzW2V2ZW50TmFtZV1ba10uY2FsbGJhY2sgPT09IGNhbGxiYWNrIHx8IGNhbGxiYWNrID09PSB1bmRlZmluZWQpXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICB0aGF0Lmxpc3RlbmVyc1tldmVudE5hbWVdLnNwbGljZShrLCAxKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogUmVtb3ZlIGFsbCB0aGUgZXZlbnRzXG4gICAgICAgKi9cbiAgICAgIGRldGFjaEFsbDogZnVuY3Rpb24gKCkge1xuICAgICAgICBmb3IgKHZhciBldmVudE5hbWUgaW4gdGhhdC5saXN0ZW5lcnMpIHtcbiAgICAgICAgICBpZiAodGhhdC5saXN0ZW5lcnMuaGFzT3duUHJvcGVydHkoZXZlbnROYW1lKSkge1xuICAgICAgICAgICAgdGhpcy5kZXRhY2goZXZlbnROYW1lKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogRW1pdCB0aGUgZXZlbnRcbiAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBldmVudE5hbWUgLSBuYW1lIG9mIHRoZSBldmVudC5cbiAgICAgICAqL1xuICAgICAgZW1pdDogZnVuY3Rpb24gKGV2ZW50TmFtZSwgY29udGV4dCkge1xuICAgICAgICB2YXIgbGlzdGVuZXJzID0gdGhhdC5saXN0ZW5lcnNbZXZlbnROYW1lXSB8fCBbXTtcbiAgICAgICAgdmFyIHBhcmVudEFyZ3MgPSBhcmd1bWVudHM7XG5cbiAgICAgICAgY29udGV4dCA9IGNvbnRleHQgfHwgdGhpcztcbiAgICAgICAgbGlzdGVuZXJzLmZvckVhY2goZnVuY3Rpb24gKGluZm8sIGluZGV4KSB7XG4gICAgICAgICAgdmFyIGNhbGxiYWNrID0gaW5mby5jYWxsYmFjaztcbiAgICAgICAgICB2YXIgbnVtYmVyID0gaW5mby5udW1iZXI7XG5cbiAgICAgICAgICBpZiAoY29udGV4dCkge1xuICAgICAgICAgICAgY2FsbGJhY2sgPSBjYWxsYmFjay5iaW5kKGNvbnRleHQpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHZhciBhcmdzID0gW107XG4gICAgICAgICAgT2JqZWN0XG4gICAgICAgICAgICAua2V5cyhwYXJlbnRBcmdzKVxuICAgICAgICAgICAgLm1hcChmdW5jdGlvbiAoaSkge1xuICAgICAgICAgICAgICBpZiAoaSA+IDEpIHtcbiAgICAgICAgICAgICAgICBhcmdzLnB1c2gocGFyZW50QXJnc1tpXSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgLy8gdGhpcyBldmVudCBjYW5ub3QgYmUgZmlyZWQgYWdhaW4sIHJlbW92ZSBmcm9tIHRoZSBzdGFja1xuICAgICAgICAgIGlmICh0aGF0LnRvQmVSZW1vdmVkKGluZm8pKSB7XG4gICAgICAgICAgICB0aGF0Lmxpc3RlbmVyc1tldmVudE5hbWVdLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY2FsbGJhY2suYXBwbHkobnVsbCwgYXJncyk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH07XG4gIH07XG5cbiAgcmV0dXJuIEV2ZW50QnVzO1xufSk7IiwiLy8gQ29weXJpZ2h0IChjKSAyMDEzIFBpZXJveHkgPHBpZXJveHlAcGllcm94eS5uZXQ+XG4vLyBUaGlzIHdvcmsgaXMgZnJlZS4gWW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeSBpdFxuLy8gdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBXVEZQTCwgVmVyc2lvbiAyXG4vLyBGb3IgbW9yZSBpbmZvcm1hdGlvbiBzZWUgTElDRU5TRS50eHQgb3IgaHR0cDovL3d3dy53dGZwbC5uZXQvXG4vL1xuLy8gRm9yIG1vcmUgaW5mb3JtYXRpb24sIHRoZSBob21lIHBhZ2U6XG4vLyBodHRwOi8vcGllcm94eS5uZXQvYmxvZy9wYWdlcy9sei1zdHJpbmcvdGVzdGluZy5odG1sXG4vL1xuLy8gTFotYmFzZWQgY29tcHJlc3Npb24gYWxnb3JpdGhtLCB2ZXJzaW9uIDEuNC40XG52YXIgTFpTdHJpbmcgPSAoZnVuY3Rpb24oKSB7XG5cbi8vIHByaXZhdGUgcHJvcGVydHlcbnZhciBmID0gU3RyaW5nLmZyb21DaGFyQ29kZTtcbnZhciBrZXlTdHJCYXNlNjQgPSBcIkFCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXowMTIzNDU2Nzg5Ky89XCI7XG52YXIga2V5U3RyVXJpU2FmZSA9IFwiQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ejAxMjM0NTY3ODkrLSRcIjtcbnZhciBiYXNlUmV2ZXJzZURpYyA9IHt9O1xuXG5mdW5jdGlvbiBnZXRCYXNlVmFsdWUoYWxwaGFiZXQsIGNoYXJhY3Rlcikge1xuICBpZiAoIWJhc2VSZXZlcnNlRGljW2FscGhhYmV0XSkge1xuICAgIGJhc2VSZXZlcnNlRGljW2FscGhhYmV0XSA9IHt9O1xuICAgIGZvciAodmFyIGk9MCA7IGk8YWxwaGFiZXQubGVuZ3RoIDsgaSsrKSB7XG4gICAgICBiYXNlUmV2ZXJzZURpY1thbHBoYWJldF1bYWxwaGFiZXQuY2hhckF0KGkpXSA9IGk7XG4gICAgfVxuICB9XG4gIHJldHVybiBiYXNlUmV2ZXJzZURpY1thbHBoYWJldF1bY2hhcmFjdGVyXTtcbn1cblxudmFyIExaU3RyaW5nID0ge1xuICBjb21wcmVzc1RvQmFzZTY0IDogZnVuY3Rpb24gKGlucHV0KSB7XG4gICAgaWYgKGlucHV0ID09IG51bGwpIHJldHVybiBcIlwiO1xuICAgIHZhciByZXMgPSBMWlN0cmluZy5fY29tcHJlc3MoaW5wdXQsIDYsIGZ1bmN0aW9uKGEpe3JldHVybiBrZXlTdHJCYXNlNjQuY2hhckF0KGEpO30pO1xuICAgIHN3aXRjaCAocmVzLmxlbmd0aCAlIDQpIHsgLy8gVG8gcHJvZHVjZSB2YWxpZCBCYXNlNjRcbiAgICBkZWZhdWx0OiAvLyBXaGVuIGNvdWxkIHRoaXMgaGFwcGVuID9cbiAgICBjYXNlIDAgOiByZXR1cm4gcmVzO1xuICAgIGNhc2UgMSA6IHJldHVybiByZXMrXCI9PT1cIjtcbiAgICBjYXNlIDIgOiByZXR1cm4gcmVzK1wiPT1cIjtcbiAgICBjYXNlIDMgOiByZXR1cm4gcmVzK1wiPVwiO1xuICAgIH1cbiAgfSxcblxuICBkZWNvbXByZXNzRnJvbUJhc2U2NCA6IGZ1bmN0aW9uIChpbnB1dCkge1xuICAgIGlmIChpbnB1dCA9PSBudWxsKSByZXR1cm4gXCJcIjtcbiAgICBpZiAoaW5wdXQgPT0gXCJcIikgcmV0dXJuIG51bGw7XG4gICAgcmV0dXJuIExaU3RyaW5nLl9kZWNvbXByZXNzKGlucHV0Lmxlbmd0aCwgMzIsIGZ1bmN0aW9uKGluZGV4KSB7IHJldHVybiBnZXRCYXNlVmFsdWUoa2V5U3RyQmFzZTY0LCBpbnB1dC5jaGFyQXQoaW5kZXgpKTsgfSk7XG4gIH0sXG5cbiAgY29tcHJlc3NUb1VURjE2IDogZnVuY3Rpb24gKGlucHV0KSB7XG4gICAgaWYgKGlucHV0ID09IG51bGwpIHJldHVybiBcIlwiO1xuICAgIHJldHVybiBMWlN0cmluZy5fY29tcHJlc3MoaW5wdXQsIDE1LCBmdW5jdGlvbihhKXtyZXR1cm4gZihhKzMyKTt9KSArIFwiIFwiO1xuICB9LFxuXG4gIGRlY29tcHJlc3NGcm9tVVRGMTY6IGZ1bmN0aW9uIChjb21wcmVzc2VkKSB7XG4gICAgaWYgKGNvbXByZXNzZWQgPT0gbnVsbCkgcmV0dXJuIFwiXCI7XG4gICAgaWYgKGNvbXByZXNzZWQgPT0gXCJcIikgcmV0dXJuIG51bGw7XG4gICAgcmV0dXJuIExaU3RyaW5nLl9kZWNvbXByZXNzKGNvbXByZXNzZWQubGVuZ3RoLCAxNjM4NCwgZnVuY3Rpb24oaW5kZXgpIHsgcmV0dXJuIGNvbXByZXNzZWQuY2hhckNvZGVBdChpbmRleCkgLSAzMjsgfSk7XG4gIH0sXG5cbiAgLy9jb21wcmVzcyBpbnRvIHVpbnQ4YXJyYXkgKFVDUy0yIGJpZyBlbmRpYW4gZm9ybWF0KVxuICBjb21wcmVzc1RvVWludDhBcnJheTogZnVuY3Rpb24gKHVuY29tcHJlc3NlZCkge1xuICAgIHZhciBjb21wcmVzc2VkID0gTFpTdHJpbmcuY29tcHJlc3ModW5jb21wcmVzc2VkKTtcbiAgICB2YXIgYnVmPW5ldyBVaW50OEFycmF5KGNvbXByZXNzZWQubGVuZ3RoKjIpOyAvLyAyIGJ5dGVzIHBlciBjaGFyYWN0ZXJcblxuICAgIGZvciAodmFyIGk9MCwgVG90YWxMZW49Y29tcHJlc3NlZC5sZW5ndGg7IGk8VG90YWxMZW47IGkrKykge1xuICAgICAgdmFyIGN1cnJlbnRfdmFsdWUgPSBjb21wcmVzc2VkLmNoYXJDb2RlQXQoaSk7XG4gICAgICBidWZbaSoyXSA9IGN1cnJlbnRfdmFsdWUgPj4+IDg7XG4gICAgICBidWZbaSoyKzFdID0gY3VycmVudF92YWx1ZSAlIDI1NjtcbiAgICB9XG4gICAgcmV0dXJuIGJ1ZjtcbiAgfSxcblxuICAvL2RlY29tcHJlc3MgZnJvbSB1aW50OGFycmF5IChVQ1MtMiBiaWcgZW5kaWFuIGZvcm1hdClcbiAgZGVjb21wcmVzc0Zyb21VaW50OEFycmF5OmZ1bmN0aW9uIChjb21wcmVzc2VkKSB7XG4gICAgaWYgKGNvbXByZXNzZWQ9PT1udWxsIHx8IGNvbXByZXNzZWQ9PT11bmRlZmluZWQpe1xuICAgICAgICByZXR1cm4gTFpTdHJpbmcuZGVjb21wcmVzcyhjb21wcmVzc2VkKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgYnVmPW5ldyBBcnJheShjb21wcmVzc2VkLmxlbmd0aC8yKTsgLy8gMiBieXRlcyBwZXIgY2hhcmFjdGVyXG4gICAgICAgIGZvciAodmFyIGk9MCwgVG90YWxMZW49YnVmLmxlbmd0aDsgaTxUb3RhbExlbjsgaSsrKSB7XG4gICAgICAgICAgYnVmW2ldPWNvbXByZXNzZWRbaSoyXSoyNTYrY29tcHJlc3NlZFtpKjIrMV07XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgcmVzdWx0ID0gW107XG4gICAgICAgIGJ1Zi5mb3JFYWNoKGZ1bmN0aW9uIChjKSB7XG4gICAgICAgICAgcmVzdWx0LnB1c2goZihjKSk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gTFpTdHJpbmcuZGVjb21wcmVzcyhyZXN1bHQuam9pbignJykpO1xuXG4gICAgfVxuXG4gIH0sXG5cblxuICAvL2NvbXByZXNzIGludG8gYSBzdHJpbmcgdGhhdCBpcyBhbHJlYWR5IFVSSSBlbmNvZGVkXG4gIGNvbXByZXNzVG9FbmNvZGVkVVJJQ29tcG9uZW50OiBmdW5jdGlvbiAoaW5wdXQpIHtcbiAgICBpZiAoaW5wdXQgPT0gbnVsbCkgcmV0dXJuIFwiXCI7XG4gICAgcmV0dXJuIExaU3RyaW5nLl9jb21wcmVzcyhpbnB1dCwgNiwgZnVuY3Rpb24oYSl7cmV0dXJuIGtleVN0clVyaVNhZmUuY2hhckF0KGEpO30pO1xuICB9LFxuXG4gIC8vZGVjb21wcmVzcyBmcm9tIGFuIG91dHB1dCBvZiBjb21wcmVzc1RvRW5jb2RlZFVSSUNvbXBvbmVudFxuICBkZWNvbXByZXNzRnJvbUVuY29kZWRVUklDb21wb25lbnQ6ZnVuY3Rpb24gKGlucHV0KSB7XG4gICAgaWYgKGlucHV0ID09IG51bGwpIHJldHVybiBcIlwiO1xuICAgIGlmIChpbnB1dCA9PSBcIlwiKSByZXR1cm4gbnVsbDtcbiAgICBpbnB1dCA9IGlucHV0LnJlcGxhY2UoLyAvZywgXCIrXCIpO1xuICAgIHJldHVybiBMWlN0cmluZy5fZGVjb21wcmVzcyhpbnB1dC5sZW5ndGgsIDMyLCBmdW5jdGlvbihpbmRleCkgeyByZXR1cm4gZ2V0QmFzZVZhbHVlKGtleVN0clVyaVNhZmUsIGlucHV0LmNoYXJBdChpbmRleCkpOyB9KTtcbiAgfSxcblxuICBjb21wcmVzczogZnVuY3Rpb24gKHVuY29tcHJlc3NlZCkge1xuICAgIHJldHVybiBMWlN0cmluZy5fY29tcHJlc3ModW5jb21wcmVzc2VkLCAxNiwgZnVuY3Rpb24oYSl7cmV0dXJuIGYoYSk7fSk7XG4gIH0sXG4gIF9jb21wcmVzczogZnVuY3Rpb24gKHVuY29tcHJlc3NlZCwgYml0c1BlckNoYXIsIGdldENoYXJGcm9tSW50KSB7XG4gICAgaWYgKHVuY29tcHJlc3NlZCA9PSBudWxsKSByZXR1cm4gXCJcIjtcbiAgICB2YXIgaSwgdmFsdWUsXG4gICAgICAgIGNvbnRleHRfZGljdGlvbmFyeT0ge30sXG4gICAgICAgIGNvbnRleHRfZGljdGlvbmFyeVRvQ3JlYXRlPSB7fSxcbiAgICAgICAgY29udGV4dF9jPVwiXCIsXG4gICAgICAgIGNvbnRleHRfd2M9XCJcIixcbiAgICAgICAgY29udGV4dF93PVwiXCIsXG4gICAgICAgIGNvbnRleHRfZW5sYXJnZUluPSAyLCAvLyBDb21wZW5zYXRlIGZvciB0aGUgZmlyc3QgZW50cnkgd2hpY2ggc2hvdWxkIG5vdCBjb3VudFxuICAgICAgICBjb250ZXh0X2RpY3RTaXplPSAzLFxuICAgICAgICBjb250ZXh0X251bUJpdHM9IDIsXG4gICAgICAgIGNvbnRleHRfZGF0YT1bXSxcbiAgICAgICAgY29udGV4dF9kYXRhX3ZhbD0wLFxuICAgICAgICBjb250ZXh0X2RhdGFfcG9zaXRpb249MCxcbiAgICAgICAgaWk7XG5cbiAgICBmb3IgKGlpID0gMDsgaWkgPCB1bmNvbXByZXNzZWQubGVuZ3RoOyBpaSArPSAxKSB7XG4gICAgICBjb250ZXh0X2MgPSB1bmNvbXByZXNzZWQuY2hhckF0KGlpKTtcbiAgICAgIGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGNvbnRleHRfZGljdGlvbmFyeSxjb250ZXh0X2MpKSB7XG4gICAgICAgIGNvbnRleHRfZGljdGlvbmFyeVtjb250ZXh0X2NdID0gY29udGV4dF9kaWN0U2l6ZSsrO1xuICAgICAgICBjb250ZXh0X2RpY3Rpb25hcnlUb0NyZWF0ZVtjb250ZXh0X2NdID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgY29udGV4dF93YyA9IGNvbnRleHRfdyArIGNvbnRleHRfYztcbiAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoY29udGV4dF9kaWN0aW9uYXJ5LGNvbnRleHRfd2MpKSB7XG4gICAgICAgIGNvbnRleHRfdyA9IGNvbnRleHRfd2M7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGNvbnRleHRfZGljdGlvbmFyeVRvQ3JlYXRlLGNvbnRleHRfdykpIHtcbiAgICAgICAgICBpZiAoY29udGV4dF93LmNoYXJDb2RlQXQoMCk8MjU2KSB7XG4gICAgICAgICAgICBmb3IgKGk9MCA7IGk8Y29udGV4dF9udW1CaXRzIDsgaSsrKSB7XG4gICAgICAgICAgICAgIGNvbnRleHRfZGF0YV92YWwgPSAoY29udGV4dF9kYXRhX3ZhbCA8PCAxKTtcbiAgICAgICAgICAgICAgaWYgKGNvbnRleHRfZGF0YV9wb3NpdGlvbiA9PSBiaXRzUGVyQ2hhci0xKSB7XG4gICAgICAgICAgICAgICAgY29udGV4dF9kYXRhX3Bvc2l0aW9uID0gMDtcbiAgICAgICAgICAgICAgICBjb250ZXh0X2RhdGEucHVzaChnZXRDaGFyRnJvbUludChjb250ZXh0X2RhdGFfdmFsKSk7XG4gICAgICAgICAgICAgICAgY29udGV4dF9kYXRhX3ZhbCA9IDA7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29udGV4dF9kYXRhX3Bvc2l0aW9uKys7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhbHVlID0gY29udGV4dF93LmNoYXJDb2RlQXQoMCk7XG4gICAgICAgICAgICBmb3IgKGk9MCA7IGk8OCA7IGkrKykge1xuICAgICAgICAgICAgICBjb250ZXh0X2RhdGFfdmFsID0gKGNvbnRleHRfZGF0YV92YWwgPDwgMSkgfCAodmFsdWUmMSk7XG4gICAgICAgICAgICAgIGlmIChjb250ZXh0X2RhdGFfcG9zaXRpb24gPT0gYml0c1BlckNoYXItMSkge1xuICAgICAgICAgICAgICAgIGNvbnRleHRfZGF0YV9wb3NpdGlvbiA9IDA7XG4gICAgICAgICAgICAgICAgY29udGV4dF9kYXRhLnB1c2goZ2V0Q2hhckZyb21JbnQoY29udGV4dF9kYXRhX3ZhbCkpO1xuICAgICAgICAgICAgICAgIGNvbnRleHRfZGF0YV92YWwgPSAwO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnRleHRfZGF0YV9wb3NpdGlvbisrO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHZhbHVlID0gdmFsdWUgPj4gMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmFsdWUgPSAxO1xuICAgICAgICAgICAgZm9yIChpPTAgOyBpPGNvbnRleHRfbnVtQml0cyA7IGkrKykge1xuICAgICAgICAgICAgICBjb250ZXh0X2RhdGFfdmFsID0gKGNvbnRleHRfZGF0YV92YWwgPDwgMSkgfCB2YWx1ZTtcbiAgICAgICAgICAgICAgaWYgKGNvbnRleHRfZGF0YV9wb3NpdGlvbiA9PWJpdHNQZXJDaGFyLTEpIHtcbiAgICAgICAgICAgICAgICBjb250ZXh0X2RhdGFfcG9zaXRpb24gPSAwO1xuICAgICAgICAgICAgICAgIGNvbnRleHRfZGF0YS5wdXNoKGdldENoYXJGcm9tSW50KGNvbnRleHRfZGF0YV92YWwpKTtcbiAgICAgICAgICAgICAgICBjb250ZXh0X2RhdGFfdmFsID0gMDtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb250ZXh0X2RhdGFfcG9zaXRpb24rKztcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB2YWx1ZSA9IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YWx1ZSA9IGNvbnRleHRfdy5jaGFyQ29kZUF0KDApO1xuICAgICAgICAgICAgZm9yIChpPTAgOyBpPDE2IDsgaSsrKSB7XG4gICAgICAgICAgICAgIGNvbnRleHRfZGF0YV92YWwgPSAoY29udGV4dF9kYXRhX3ZhbCA8PCAxKSB8ICh2YWx1ZSYxKTtcbiAgICAgICAgICAgICAgaWYgKGNvbnRleHRfZGF0YV9wb3NpdGlvbiA9PSBiaXRzUGVyQ2hhci0xKSB7XG4gICAgICAgICAgICAgICAgY29udGV4dF9kYXRhX3Bvc2l0aW9uID0gMDtcbiAgICAgICAgICAgICAgICBjb250ZXh0X2RhdGEucHVzaChnZXRDaGFyRnJvbUludChjb250ZXh0X2RhdGFfdmFsKSk7XG4gICAgICAgICAgICAgICAgY29udGV4dF9kYXRhX3ZhbCA9IDA7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29udGV4dF9kYXRhX3Bvc2l0aW9uKys7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgdmFsdWUgPSB2YWx1ZSA+PiAxO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBjb250ZXh0X2VubGFyZ2VJbi0tO1xuICAgICAgICAgIGlmIChjb250ZXh0X2VubGFyZ2VJbiA9PSAwKSB7XG4gICAgICAgICAgICBjb250ZXh0X2VubGFyZ2VJbiA9IE1hdGgucG93KDIsIGNvbnRleHRfbnVtQml0cyk7XG4gICAgICAgICAgICBjb250ZXh0X251bUJpdHMrKztcbiAgICAgICAgICB9XG4gICAgICAgICAgZGVsZXRlIGNvbnRleHRfZGljdGlvbmFyeVRvQ3JlYXRlW2NvbnRleHRfd107XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdmFsdWUgPSBjb250ZXh0X2RpY3Rpb25hcnlbY29udGV4dF93XTtcbiAgICAgICAgICBmb3IgKGk9MCA7IGk8Y29udGV4dF9udW1CaXRzIDsgaSsrKSB7XG4gICAgICAgICAgICBjb250ZXh0X2RhdGFfdmFsID0gKGNvbnRleHRfZGF0YV92YWwgPDwgMSkgfCAodmFsdWUmMSk7XG4gICAgICAgICAgICBpZiAoY29udGV4dF9kYXRhX3Bvc2l0aW9uID09IGJpdHNQZXJDaGFyLTEpIHtcbiAgICAgICAgICAgICAgY29udGV4dF9kYXRhX3Bvc2l0aW9uID0gMDtcbiAgICAgICAgICAgICAgY29udGV4dF9kYXRhLnB1c2goZ2V0Q2hhckZyb21JbnQoY29udGV4dF9kYXRhX3ZhbCkpO1xuICAgICAgICAgICAgICBjb250ZXh0X2RhdGFfdmFsID0gMDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGNvbnRleHRfZGF0YV9wb3NpdGlvbisrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFsdWUgPSB2YWx1ZSA+PiAxO1xuICAgICAgICAgIH1cblxuXG4gICAgICAgIH1cbiAgICAgICAgY29udGV4dF9lbmxhcmdlSW4tLTtcbiAgICAgICAgaWYgKGNvbnRleHRfZW5sYXJnZUluID09IDApIHtcbiAgICAgICAgICBjb250ZXh0X2VubGFyZ2VJbiA9IE1hdGgucG93KDIsIGNvbnRleHRfbnVtQml0cyk7XG4gICAgICAgICAgY29udGV4dF9udW1CaXRzKys7XG4gICAgICAgIH1cbiAgICAgICAgLy8gQWRkIHdjIHRvIHRoZSBkaWN0aW9uYXJ5LlxuICAgICAgICBjb250ZXh0X2RpY3Rpb25hcnlbY29udGV4dF93Y10gPSBjb250ZXh0X2RpY3RTaXplKys7XG4gICAgICAgIGNvbnRleHRfdyA9IFN0cmluZyhjb250ZXh0X2MpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIE91dHB1dCB0aGUgY29kZSBmb3Igdy5cbiAgICBpZiAoY29udGV4dF93ICE9PSBcIlwiKSB7XG4gICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGNvbnRleHRfZGljdGlvbmFyeVRvQ3JlYXRlLGNvbnRleHRfdykpIHtcbiAgICAgICAgaWYgKGNvbnRleHRfdy5jaGFyQ29kZUF0KDApPDI1Nikge1xuICAgICAgICAgIGZvciAoaT0wIDsgaTxjb250ZXh0X251bUJpdHMgOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnRleHRfZGF0YV92YWwgPSAoY29udGV4dF9kYXRhX3ZhbCA8PCAxKTtcbiAgICAgICAgICAgIGlmIChjb250ZXh0X2RhdGFfcG9zaXRpb24gPT0gYml0c1BlckNoYXItMSkge1xuICAgICAgICAgICAgICBjb250ZXh0X2RhdGFfcG9zaXRpb24gPSAwO1xuICAgICAgICAgICAgICBjb250ZXh0X2RhdGEucHVzaChnZXRDaGFyRnJvbUludChjb250ZXh0X2RhdGFfdmFsKSk7XG4gICAgICAgICAgICAgIGNvbnRleHRfZGF0YV92YWwgPSAwO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgY29udGV4dF9kYXRhX3Bvc2l0aW9uKys7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIHZhbHVlID0gY29udGV4dF93LmNoYXJDb2RlQXQoMCk7XG4gICAgICAgICAgZm9yIChpPTAgOyBpPDggOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnRleHRfZGF0YV92YWwgPSAoY29udGV4dF9kYXRhX3ZhbCA8PCAxKSB8ICh2YWx1ZSYxKTtcbiAgICAgICAgICAgIGlmIChjb250ZXh0X2RhdGFfcG9zaXRpb24gPT0gYml0c1BlckNoYXItMSkge1xuICAgICAgICAgICAgICBjb250ZXh0X2RhdGFfcG9zaXRpb24gPSAwO1xuICAgICAgICAgICAgICBjb250ZXh0X2RhdGEucHVzaChnZXRDaGFyRnJvbUludChjb250ZXh0X2RhdGFfdmFsKSk7XG4gICAgICAgICAgICAgIGNvbnRleHRfZGF0YV92YWwgPSAwO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgY29udGV4dF9kYXRhX3Bvc2l0aW9uKys7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YWx1ZSA9IHZhbHVlID4+IDE7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHZhbHVlID0gMTtcbiAgICAgICAgICBmb3IgKGk9MCA7IGk8Y29udGV4dF9udW1CaXRzIDsgaSsrKSB7XG4gICAgICAgICAgICBjb250ZXh0X2RhdGFfdmFsID0gKGNvbnRleHRfZGF0YV92YWwgPDwgMSkgfCB2YWx1ZTtcbiAgICAgICAgICAgIGlmIChjb250ZXh0X2RhdGFfcG9zaXRpb24gPT0gYml0c1BlckNoYXItMSkge1xuICAgICAgICAgICAgICBjb250ZXh0X2RhdGFfcG9zaXRpb24gPSAwO1xuICAgICAgICAgICAgICBjb250ZXh0X2RhdGEucHVzaChnZXRDaGFyRnJvbUludChjb250ZXh0X2RhdGFfdmFsKSk7XG4gICAgICAgICAgICAgIGNvbnRleHRfZGF0YV92YWwgPSAwO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgY29udGV4dF9kYXRhX3Bvc2l0aW9uKys7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YWx1ZSA9IDA7XG4gICAgICAgICAgfVxuICAgICAgICAgIHZhbHVlID0gY29udGV4dF93LmNoYXJDb2RlQXQoMCk7XG4gICAgICAgICAgZm9yIChpPTAgOyBpPDE2IDsgaSsrKSB7XG4gICAgICAgICAgICBjb250ZXh0X2RhdGFfdmFsID0gKGNvbnRleHRfZGF0YV92YWwgPDwgMSkgfCAodmFsdWUmMSk7XG4gICAgICAgICAgICBpZiAoY29udGV4dF9kYXRhX3Bvc2l0aW9uID09IGJpdHNQZXJDaGFyLTEpIHtcbiAgICAgICAgICAgICAgY29udGV4dF9kYXRhX3Bvc2l0aW9uID0gMDtcbiAgICAgICAgICAgICAgY29udGV4dF9kYXRhLnB1c2goZ2V0Q2hhckZyb21JbnQoY29udGV4dF9kYXRhX3ZhbCkpO1xuICAgICAgICAgICAgICBjb250ZXh0X2RhdGFfdmFsID0gMDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGNvbnRleHRfZGF0YV9wb3NpdGlvbisrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFsdWUgPSB2YWx1ZSA+PiAxO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjb250ZXh0X2VubGFyZ2VJbi0tO1xuICAgICAgICBpZiAoY29udGV4dF9lbmxhcmdlSW4gPT0gMCkge1xuICAgICAgICAgIGNvbnRleHRfZW5sYXJnZUluID0gTWF0aC5wb3coMiwgY29udGV4dF9udW1CaXRzKTtcbiAgICAgICAgICBjb250ZXh0X251bUJpdHMrKztcbiAgICAgICAgfVxuICAgICAgICBkZWxldGUgY29udGV4dF9kaWN0aW9uYXJ5VG9DcmVhdGVbY29udGV4dF93XTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhbHVlID0gY29udGV4dF9kaWN0aW9uYXJ5W2NvbnRleHRfd107XG4gICAgICAgIGZvciAoaT0wIDsgaTxjb250ZXh0X251bUJpdHMgOyBpKyspIHtcbiAgICAgICAgICBjb250ZXh0X2RhdGFfdmFsID0gKGNvbnRleHRfZGF0YV92YWwgPDwgMSkgfCAodmFsdWUmMSk7XG4gICAgICAgICAgaWYgKGNvbnRleHRfZGF0YV9wb3NpdGlvbiA9PSBiaXRzUGVyQ2hhci0xKSB7XG4gICAgICAgICAgICBjb250ZXh0X2RhdGFfcG9zaXRpb24gPSAwO1xuICAgICAgICAgICAgY29udGV4dF9kYXRhLnB1c2goZ2V0Q2hhckZyb21JbnQoY29udGV4dF9kYXRhX3ZhbCkpO1xuICAgICAgICAgICAgY29udGV4dF9kYXRhX3ZhbCA9IDA7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnRleHRfZGF0YV9wb3NpdGlvbisrO1xuICAgICAgICAgIH1cbiAgICAgICAgICB2YWx1ZSA9IHZhbHVlID4+IDE7XG4gICAgICAgIH1cblxuXG4gICAgICB9XG4gICAgICBjb250ZXh0X2VubGFyZ2VJbi0tO1xuICAgICAgaWYgKGNvbnRleHRfZW5sYXJnZUluID09IDApIHtcbiAgICAgICAgY29udGV4dF9lbmxhcmdlSW4gPSBNYXRoLnBvdygyLCBjb250ZXh0X251bUJpdHMpO1xuICAgICAgICBjb250ZXh0X251bUJpdHMrKztcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBNYXJrIHRoZSBlbmQgb2YgdGhlIHN0cmVhbVxuICAgIHZhbHVlID0gMjtcbiAgICBmb3IgKGk9MCA7IGk8Y29udGV4dF9udW1CaXRzIDsgaSsrKSB7XG4gICAgICBjb250ZXh0X2RhdGFfdmFsID0gKGNvbnRleHRfZGF0YV92YWwgPDwgMSkgfCAodmFsdWUmMSk7XG4gICAgICBpZiAoY29udGV4dF9kYXRhX3Bvc2l0aW9uID09IGJpdHNQZXJDaGFyLTEpIHtcbiAgICAgICAgY29udGV4dF9kYXRhX3Bvc2l0aW9uID0gMDtcbiAgICAgICAgY29udGV4dF9kYXRhLnB1c2goZ2V0Q2hhckZyb21JbnQoY29udGV4dF9kYXRhX3ZhbCkpO1xuICAgICAgICBjb250ZXh0X2RhdGFfdmFsID0gMDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnRleHRfZGF0YV9wb3NpdGlvbisrO1xuICAgICAgfVxuICAgICAgdmFsdWUgPSB2YWx1ZSA+PiAxO1xuICAgIH1cblxuICAgIC8vIEZsdXNoIHRoZSBsYXN0IGNoYXJcbiAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgY29udGV4dF9kYXRhX3ZhbCA9IChjb250ZXh0X2RhdGFfdmFsIDw8IDEpO1xuICAgICAgaWYgKGNvbnRleHRfZGF0YV9wb3NpdGlvbiA9PSBiaXRzUGVyQ2hhci0xKSB7XG4gICAgICAgIGNvbnRleHRfZGF0YS5wdXNoKGdldENoYXJGcm9tSW50KGNvbnRleHRfZGF0YV92YWwpKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBlbHNlIGNvbnRleHRfZGF0YV9wb3NpdGlvbisrO1xuICAgIH1cbiAgICByZXR1cm4gY29udGV4dF9kYXRhLmpvaW4oJycpO1xuICB9LFxuXG4gIGRlY29tcHJlc3M6IGZ1bmN0aW9uIChjb21wcmVzc2VkKSB7XG4gICAgaWYgKGNvbXByZXNzZWQgPT0gbnVsbCkgcmV0dXJuIFwiXCI7XG4gICAgaWYgKGNvbXByZXNzZWQgPT0gXCJcIikgcmV0dXJuIG51bGw7XG4gICAgcmV0dXJuIExaU3RyaW5nLl9kZWNvbXByZXNzKGNvbXByZXNzZWQubGVuZ3RoLCAzMjc2OCwgZnVuY3Rpb24oaW5kZXgpIHsgcmV0dXJuIGNvbXByZXNzZWQuY2hhckNvZGVBdChpbmRleCk7IH0pO1xuICB9LFxuXG4gIF9kZWNvbXByZXNzOiBmdW5jdGlvbiAobGVuZ3RoLCByZXNldFZhbHVlLCBnZXROZXh0VmFsdWUpIHtcbiAgICB2YXIgZGljdGlvbmFyeSA9IFtdLFxuICAgICAgICBuZXh0LFxuICAgICAgICBlbmxhcmdlSW4gPSA0LFxuICAgICAgICBkaWN0U2l6ZSA9IDQsXG4gICAgICAgIG51bUJpdHMgPSAzLFxuICAgICAgICBlbnRyeSA9IFwiXCIsXG4gICAgICAgIHJlc3VsdCA9IFtdLFxuICAgICAgICBpLFxuICAgICAgICB3LFxuICAgICAgICBiaXRzLCByZXNiLCBtYXhwb3dlciwgcG93ZXIsXG4gICAgICAgIGMsXG4gICAgICAgIGRhdGEgPSB7dmFsOmdldE5leHRWYWx1ZSgwKSwgcG9zaXRpb246cmVzZXRWYWx1ZSwgaW5kZXg6MX07XG5cbiAgICBmb3IgKGkgPSAwOyBpIDwgMzsgaSArPSAxKSB7XG4gICAgICBkaWN0aW9uYXJ5W2ldID0gaTtcbiAgICB9XG5cbiAgICBiaXRzID0gMDtcbiAgICBtYXhwb3dlciA9IE1hdGgucG93KDIsMik7XG4gICAgcG93ZXI9MTtcbiAgICB3aGlsZSAocG93ZXIhPW1heHBvd2VyKSB7XG4gICAgICByZXNiID0gZGF0YS52YWwgJiBkYXRhLnBvc2l0aW9uO1xuICAgICAgZGF0YS5wb3NpdGlvbiA+Pj0gMTtcbiAgICAgIGlmIChkYXRhLnBvc2l0aW9uID09IDApIHtcbiAgICAgICAgZGF0YS5wb3NpdGlvbiA9IHJlc2V0VmFsdWU7XG4gICAgICAgIGRhdGEudmFsID0gZ2V0TmV4dFZhbHVlKGRhdGEuaW5kZXgrKyk7XG4gICAgICB9XG4gICAgICBiaXRzIHw9IChyZXNiPjAgPyAxIDogMCkgKiBwb3dlcjtcbiAgICAgIHBvd2VyIDw8PSAxO1xuICAgIH1cblxuICAgIHN3aXRjaCAobmV4dCA9IGJpdHMpIHtcbiAgICAgIGNhc2UgMDpcbiAgICAgICAgICBiaXRzID0gMDtcbiAgICAgICAgICBtYXhwb3dlciA9IE1hdGgucG93KDIsOCk7XG4gICAgICAgICAgcG93ZXI9MTtcbiAgICAgICAgICB3aGlsZSAocG93ZXIhPW1heHBvd2VyKSB7XG4gICAgICAgICAgICByZXNiID0gZGF0YS52YWwgJiBkYXRhLnBvc2l0aW9uO1xuICAgICAgICAgICAgZGF0YS5wb3NpdGlvbiA+Pj0gMTtcbiAgICAgICAgICAgIGlmIChkYXRhLnBvc2l0aW9uID09IDApIHtcbiAgICAgICAgICAgICAgZGF0YS5wb3NpdGlvbiA9IHJlc2V0VmFsdWU7XG4gICAgICAgICAgICAgIGRhdGEudmFsID0gZ2V0TmV4dFZhbHVlKGRhdGEuaW5kZXgrKyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBiaXRzIHw9IChyZXNiPjAgPyAxIDogMCkgKiBwb3dlcjtcbiAgICAgICAgICAgIHBvd2VyIDw8PSAxO1xuICAgICAgICAgIH1cbiAgICAgICAgYyA9IGYoYml0cyk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAxOlxuICAgICAgICAgIGJpdHMgPSAwO1xuICAgICAgICAgIG1heHBvd2VyID0gTWF0aC5wb3coMiwxNik7XG4gICAgICAgICAgcG93ZXI9MTtcbiAgICAgICAgICB3aGlsZSAocG93ZXIhPW1heHBvd2VyKSB7XG4gICAgICAgICAgICByZXNiID0gZGF0YS52YWwgJiBkYXRhLnBvc2l0aW9uO1xuICAgICAgICAgICAgZGF0YS5wb3NpdGlvbiA+Pj0gMTtcbiAgICAgICAgICAgIGlmIChkYXRhLnBvc2l0aW9uID09IDApIHtcbiAgICAgICAgICAgICAgZGF0YS5wb3NpdGlvbiA9IHJlc2V0VmFsdWU7XG4gICAgICAgICAgICAgIGRhdGEudmFsID0gZ2V0TmV4dFZhbHVlKGRhdGEuaW5kZXgrKyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBiaXRzIHw9IChyZXNiPjAgPyAxIDogMCkgKiBwb3dlcjtcbiAgICAgICAgICAgIHBvd2VyIDw8PSAxO1xuICAgICAgICAgIH1cbiAgICAgICAgYyA9IGYoYml0cyk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAyOlxuICAgICAgICByZXR1cm4gXCJcIjtcbiAgICB9XG4gICAgZGljdGlvbmFyeVszXSA9IGM7XG4gICAgdyA9IGM7XG4gICAgcmVzdWx0LnB1c2goYyk7XG4gICAgd2hpbGUgKHRydWUpIHtcbiAgICAgIGlmIChkYXRhLmluZGV4ID4gbGVuZ3RoKSB7XG4gICAgICAgIHJldHVybiBcIlwiO1xuICAgICAgfVxuXG4gICAgICBiaXRzID0gMDtcbiAgICAgIG1heHBvd2VyID0gTWF0aC5wb3coMixudW1CaXRzKTtcbiAgICAgIHBvd2VyPTE7XG4gICAgICB3aGlsZSAocG93ZXIhPW1heHBvd2VyKSB7XG4gICAgICAgIHJlc2IgPSBkYXRhLnZhbCAmIGRhdGEucG9zaXRpb247XG4gICAgICAgIGRhdGEucG9zaXRpb24gPj49IDE7XG4gICAgICAgIGlmIChkYXRhLnBvc2l0aW9uID09IDApIHtcbiAgICAgICAgICBkYXRhLnBvc2l0aW9uID0gcmVzZXRWYWx1ZTtcbiAgICAgICAgICBkYXRhLnZhbCA9IGdldE5leHRWYWx1ZShkYXRhLmluZGV4KyspO1xuICAgICAgICB9XG4gICAgICAgIGJpdHMgfD0gKHJlc2I+MCA/IDEgOiAwKSAqIHBvd2VyO1xuICAgICAgICBwb3dlciA8PD0gMTtcbiAgICAgIH1cblxuICAgICAgc3dpdGNoIChjID0gYml0cykge1xuICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgYml0cyA9IDA7XG4gICAgICAgICAgbWF4cG93ZXIgPSBNYXRoLnBvdygyLDgpO1xuICAgICAgICAgIHBvd2VyPTE7XG4gICAgICAgICAgd2hpbGUgKHBvd2VyIT1tYXhwb3dlcikge1xuICAgICAgICAgICAgcmVzYiA9IGRhdGEudmFsICYgZGF0YS5wb3NpdGlvbjtcbiAgICAgICAgICAgIGRhdGEucG9zaXRpb24gPj49IDE7XG4gICAgICAgICAgICBpZiAoZGF0YS5wb3NpdGlvbiA9PSAwKSB7XG4gICAgICAgICAgICAgIGRhdGEucG9zaXRpb24gPSByZXNldFZhbHVlO1xuICAgICAgICAgICAgICBkYXRhLnZhbCA9IGdldE5leHRWYWx1ZShkYXRhLmluZGV4KyspO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYml0cyB8PSAocmVzYj4wID8gMSA6IDApICogcG93ZXI7XG4gICAgICAgICAgICBwb3dlciA8PD0gMTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBkaWN0aW9uYXJ5W2RpY3RTaXplKytdID0gZihiaXRzKTtcbiAgICAgICAgICBjID0gZGljdFNpemUtMTtcbiAgICAgICAgICBlbmxhcmdlSW4tLTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIGJpdHMgPSAwO1xuICAgICAgICAgIG1heHBvd2VyID0gTWF0aC5wb3coMiwxNik7XG4gICAgICAgICAgcG93ZXI9MTtcbiAgICAgICAgICB3aGlsZSAocG93ZXIhPW1heHBvd2VyKSB7XG4gICAgICAgICAgICByZXNiID0gZGF0YS52YWwgJiBkYXRhLnBvc2l0aW9uO1xuICAgICAgICAgICAgZGF0YS5wb3NpdGlvbiA+Pj0gMTtcbiAgICAgICAgICAgIGlmIChkYXRhLnBvc2l0aW9uID09IDApIHtcbiAgICAgICAgICAgICAgZGF0YS5wb3NpdGlvbiA9IHJlc2V0VmFsdWU7XG4gICAgICAgICAgICAgIGRhdGEudmFsID0gZ2V0TmV4dFZhbHVlKGRhdGEuaW5kZXgrKyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBiaXRzIHw9IChyZXNiPjAgPyAxIDogMCkgKiBwb3dlcjtcbiAgICAgICAgICAgIHBvd2VyIDw8PSAxO1xuICAgICAgICAgIH1cbiAgICAgICAgICBkaWN0aW9uYXJ5W2RpY3RTaXplKytdID0gZihiaXRzKTtcbiAgICAgICAgICBjID0gZGljdFNpemUtMTtcbiAgICAgICAgICBlbmxhcmdlSW4tLTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgIHJldHVybiByZXN1bHQuam9pbignJyk7XG4gICAgICB9XG5cbiAgICAgIGlmIChlbmxhcmdlSW4gPT0gMCkge1xuICAgICAgICBlbmxhcmdlSW4gPSBNYXRoLnBvdygyLCBudW1CaXRzKTtcbiAgICAgICAgbnVtQml0cysrO1xuICAgICAgfVxuXG4gICAgICBpZiAoZGljdGlvbmFyeVtjXSkge1xuICAgICAgICBlbnRyeSA9IGRpY3Rpb25hcnlbY107XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoYyA9PT0gZGljdFNpemUpIHtcbiAgICAgICAgICBlbnRyeSA9IHcgKyB3LmNoYXJBdCgwKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmVzdWx0LnB1c2goZW50cnkpO1xuXG4gICAgICAvLyBBZGQgdytlbnRyeVswXSB0byB0aGUgZGljdGlvbmFyeS5cbiAgICAgIGRpY3Rpb25hcnlbZGljdFNpemUrK10gPSB3ICsgZW50cnkuY2hhckF0KDApO1xuICAgICAgZW5sYXJnZUluLS07XG5cbiAgICAgIHcgPSBlbnRyeTtcblxuICAgICAgaWYgKGVubGFyZ2VJbiA9PSAwKSB7XG4gICAgICAgIGVubGFyZ2VJbiA9IE1hdGgucG93KDIsIG51bUJpdHMpO1xuICAgICAgICBudW1CaXRzKys7XG4gICAgICB9XG5cbiAgICB9XG4gIH1cbn07XG4gIHJldHVybiBMWlN0cmluZztcbn0pKCk7XG5cbmlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpIHtcbiAgZGVmaW5lKGZ1bmN0aW9uICgpIHsgcmV0dXJuIExaU3RyaW5nOyB9KTtcbn0gZWxzZSBpZiggdHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgJiYgbW9kdWxlICE9IG51bGwgKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gTFpTdHJpbmdcbn1cbiIsIi8vIHNoaW0gZm9yIHVzaW5nIHByb2Nlc3MgaW4gYnJvd3NlclxudmFyIHByb2Nlc3MgPSBtb2R1bGUuZXhwb3J0cyA9IHt9O1xuXG4vLyBjYWNoZWQgZnJvbSB3aGF0ZXZlciBnbG9iYWwgaXMgcHJlc2VudCBzbyB0aGF0IHRlc3QgcnVubmVycyB0aGF0IHN0dWIgaXRcbi8vIGRvbid0IGJyZWFrIHRoaW5ncy4gIEJ1dCB3ZSBuZWVkIHRvIHdyYXAgaXQgaW4gYSB0cnkgY2F0Y2ggaW4gY2FzZSBpdCBpc1xuLy8gd3JhcHBlZCBpbiBzdHJpY3QgbW9kZSBjb2RlIHdoaWNoIGRvZXNuJ3QgZGVmaW5lIGFueSBnbG9iYWxzLiAgSXQncyBpbnNpZGUgYVxuLy8gZnVuY3Rpb24gYmVjYXVzZSB0cnkvY2F0Y2hlcyBkZW9wdGltaXplIGluIGNlcnRhaW4gZW5naW5lcy5cblxudmFyIGNhY2hlZFNldFRpbWVvdXQ7XG52YXIgY2FjaGVkQ2xlYXJUaW1lb3V0O1xuXG5mdW5jdGlvbiBkZWZhdWx0U2V0VGltb3V0KCkge1xuICAgIHRocm93IG5ldyBFcnJvcignc2V0VGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuZnVuY3Rpb24gZGVmYXVsdENsZWFyVGltZW91dCAoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdjbGVhclRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbihmdW5jdGlvbiAoKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBzZXRUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBjbGVhclRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgfVxufSAoKSlcbmZ1bmN0aW9uIHJ1blRpbWVvdXQoZnVuKSB7XG4gICAgaWYgKGNhY2hlZFNldFRpbWVvdXQgPT09IHNldFRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIC8vIGlmIHNldFRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRTZXRUaW1lb3V0ID09PSBkZWZhdWx0U2V0VGltb3V0IHx8ICFjYWNoZWRTZXRUaW1lb3V0KSAmJiBzZXRUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfSBjYXRjaChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbChudWxsLCBmdW4sIDApO1xuICAgICAgICB9IGNhdGNoKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3JcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwodGhpcywgZnVuLCAwKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG59XG5mdW5jdGlvbiBydW5DbGVhclRpbWVvdXQobWFya2VyKSB7XG4gICAgaWYgKGNhY2hlZENsZWFyVGltZW91dCA9PT0gY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIC8vIGlmIGNsZWFyVGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZENsZWFyVGltZW91dCA9PT0gZGVmYXVsdENsZWFyVGltZW91dCB8fCAhY2FjaGVkQ2xlYXJUaW1lb3V0KSAmJiBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0ICB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKG51bGwsIG1hcmtlcik7XG4gICAgICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3IuXG4gICAgICAgICAgICAvLyBTb21lIHZlcnNpb25zIG9mIEkuRS4gaGF2ZSBkaWZmZXJlbnQgcnVsZXMgZm9yIGNsZWFyVGltZW91dCB2cyBzZXRUaW1lb3V0XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwodGhpcywgbWFya2VyKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG5cbn1cbnZhciBxdWV1ZSA9IFtdO1xudmFyIGRyYWluaW5nID0gZmFsc2U7XG52YXIgY3VycmVudFF1ZXVlO1xudmFyIHF1ZXVlSW5kZXggPSAtMTtcblxuZnVuY3Rpb24gY2xlYW5VcE5leHRUaWNrKCkge1xuICAgIGlmICghZHJhaW5pbmcgfHwgIWN1cnJlbnRRdWV1ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgaWYgKGN1cnJlbnRRdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgcXVldWUgPSBjdXJyZW50UXVldWUuY29uY2F0KHF1ZXVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgfVxuICAgIGlmIChxdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgZHJhaW5RdWV1ZSgpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZHJhaW5RdWV1ZSgpIHtcbiAgICBpZiAoZHJhaW5pbmcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgdGltZW91dCA9IHJ1blRpbWVvdXQoY2xlYW5VcE5leHRUaWNrKTtcbiAgICBkcmFpbmluZyA9IHRydWU7XG5cbiAgICB2YXIgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIHdoaWxlKGxlbikge1xuICAgICAgICBjdXJyZW50UXVldWUgPSBxdWV1ZTtcbiAgICAgICAgcXVldWUgPSBbXTtcbiAgICAgICAgd2hpbGUgKCsrcXVldWVJbmRleCA8IGxlbikge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRRdWV1ZSkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRRdWV1ZVtxdWV1ZUluZGV4XS5ydW4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgICAgIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB9XG4gICAgY3VycmVudFF1ZXVlID0gbnVsbDtcbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIHJ1bkNsZWFyVGltZW91dCh0aW1lb3V0KTtcbn1cblxucHJvY2Vzcy5uZXh0VGljayA9IGZ1bmN0aW9uIChmdW4pIHtcbiAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoIC0gMSk7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBhcmdzW2kgLSAxXSA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBxdWV1ZS5wdXNoKG5ldyBJdGVtKGZ1biwgYXJncykpO1xuICAgIGlmIChxdWV1ZS5sZW5ndGggPT09IDEgJiYgIWRyYWluaW5nKSB7XG4gICAgICAgIHJ1blRpbWVvdXQoZHJhaW5RdWV1ZSk7XG4gICAgfVxufTtcblxuLy8gdjggbGlrZXMgcHJlZGljdGlibGUgb2JqZWN0c1xuZnVuY3Rpb24gSXRlbShmdW4sIGFycmF5KSB7XG4gICAgdGhpcy5mdW4gPSBmdW47XG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xufVxuSXRlbS5wcm90b3R5cGUucnVuID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZnVuLmFwcGx5KG51bGwsIHRoaXMuYXJyYXkpO1xufTtcbnByb2Nlc3MudGl0bGUgPSAnYnJvd3Nlcic7XG5wcm9jZXNzLmJyb3dzZXIgPSB0cnVlO1xucHJvY2Vzcy5lbnYgPSB7fTtcbnByb2Nlc3MuYXJndiA9IFtdO1xucHJvY2Vzcy52ZXJzaW9uID0gJyc7IC8vIGVtcHR5IHN0cmluZyB0byBhdm9pZCByZWdleHAgaXNzdWVzXG5wcm9jZXNzLnZlcnNpb25zID0ge307XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5wcm9jZXNzLm9uID0gbm9vcDtcbnByb2Nlc3MuYWRkTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5vbmNlID0gbm9vcDtcbnByb2Nlc3Mub2ZmID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVBbGxMaXN0ZW5lcnMgPSBub29wO1xucHJvY2Vzcy5lbWl0ID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZE9uY2VMaXN0ZW5lciA9IG5vb3A7XG5cbnByb2Nlc3MubGlzdGVuZXJzID0gZnVuY3Rpb24gKG5hbWUpIHsgcmV0dXJuIFtdIH1cblxucHJvY2Vzcy5iaW5kaW5nID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuYmluZGluZyBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xuXG5wcm9jZXNzLmN3ZCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICcvJyB9O1xucHJvY2Vzcy5jaGRpciA9IGZ1bmN0aW9uIChkaXIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuY2hkaXIgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcbnByb2Nlc3MudW1hc2sgPSBmdW5jdGlvbigpIHsgcmV0dXJuIDA7IH07XG4iLCIvKlxuXHRNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuXHRBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuXG52YXIgc3R5bGVzSW5Eb20gPSB7fTtcblxudmFyXHRtZW1vaXplID0gZnVuY3Rpb24gKGZuKSB7XG5cdHZhciBtZW1vO1xuXG5cdHJldHVybiBmdW5jdGlvbiAoKSB7XG5cdFx0aWYgKHR5cGVvZiBtZW1vID09PSBcInVuZGVmaW5lZFwiKSBtZW1vID0gZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcblx0XHRyZXR1cm4gbWVtbztcblx0fTtcbn07XG5cbnZhciBpc09sZElFID0gbWVtb2l6ZShmdW5jdGlvbiAoKSB7XG5cdC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG5cdC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcblx0Ly8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuXHQvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcblx0Ly8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG5cdHJldHVybiB3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYjtcbn0pO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gKHRhcmdldCwgcGFyZW50KSB7XG4gIGlmIChwYXJlbnQpe1xuICAgIHJldHVybiBwYXJlbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuICB9XG4gIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG59O1xuXG52YXIgZ2V0RWxlbWVudCA9IChmdW5jdGlvbiAoZm4pIHtcblx0dmFyIG1lbW8gPSB7fTtcblxuXHRyZXR1cm4gZnVuY3Rpb24odGFyZ2V0LCBwYXJlbnQpIHtcbiAgICAgICAgICAgICAgICAvLyBJZiBwYXNzaW5nIGZ1bmN0aW9uIGluIG9wdGlvbnMsIHRoZW4gdXNlIGl0IGZvciByZXNvbHZlIFwiaGVhZFwiIGVsZW1lbnQuXG4gICAgICAgICAgICAgICAgLy8gVXNlZnVsIGZvciBTaGFkb3cgUm9vdCBzdHlsZSBpLmVcbiAgICAgICAgICAgICAgICAvLyB7XG4gICAgICAgICAgICAgICAgLy8gICBpbnNlcnRJbnRvOiBmdW5jdGlvbiAoKSB7IHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Zvb1wiKS5zaGFkb3dSb290IH1cbiAgICAgICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB0YXJnZXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0YXJnZXQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcblx0XHRcdHZhciBzdHlsZVRhcmdldCA9IGdldFRhcmdldC5jYWxsKHRoaXMsIHRhcmdldCwgcGFyZW50KTtcblx0XHRcdC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cdFx0XHRpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG5cdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0Ly8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcblx0XHRcdFx0XHQvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuXHRcdFx0XHRcdHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG5cdFx0XHRcdH0gY2F0Y2goZSkge1xuXHRcdFx0XHRcdHN0eWxlVGFyZ2V0ID0gbnVsbDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0bWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG5cdFx0fVxuXHRcdHJldHVybiBtZW1vW3RhcmdldF1cblx0fTtcbn0pKCk7XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyXHRzaW5nbGV0b25Db3VudGVyID0gMDtcbnZhclx0c3R5bGVzSW5zZXJ0ZWRBdFRvcCA9IFtdO1xuXG52YXJcdGZpeFVybHMgPSByZXF1aXJlKFwiLi91cmxzXCIpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGxpc3QsIG9wdGlvbnMpIHtcblx0aWYgKHR5cGVvZiBERUJVRyAhPT0gXCJ1bmRlZmluZWRcIiAmJiBERUJVRykge1xuXHRcdGlmICh0eXBlb2YgZG9jdW1lbnQgIT09IFwib2JqZWN0XCIpIHRocm93IG5ldyBFcnJvcihcIlRoZSBzdHlsZS1sb2FkZXIgY2Fubm90IGJlIHVzZWQgaW4gYSBub24tYnJvd3NlciBlbnZpcm9ubWVudFwiKTtcblx0fVxuXG5cdG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG5cdG9wdGlvbnMuYXR0cnMgPSB0eXBlb2Ygb3B0aW9ucy5hdHRycyA9PT0gXCJvYmplY3RcIiA/IG9wdGlvbnMuYXR0cnMgOiB7fTtcblxuXHQvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cblx0Ly8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXHRpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gXCJib29sZWFuXCIpIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuXG5cdC8vIEJ5IGRlZmF1bHQsIGFkZCA8c3R5bGU+IHRhZ3MgdG8gdGhlIDxoZWFkPiBlbGVtZW50XG4gICAgICAgIGlmICghb3B0aW9ucy5pbnNlcnRJbnRvKSBvcHRpb25zLmluc2VydEludG8gPSBcImhlYWRcIjtcblxuXHQvLyBCeSBkZWZhdWx0LCBhZGQgPHN0eWxlPiB0YWdzIHRvIHRoZSBib3R0b20gb2YgdGhlIHRhcmdldFxuXHRpZiAoIW9wdGlvbnMuaW5zZXJ0QXQpIG9wdGlvbnMuaW5zZXJ0QXQgPSBcImJvdHRvbVwiO1xuXG5cdHZhciBzdHlsZXMgPSBsaXN0VG9TdHlsZXMobGlzdCwgb3B0aW9ucyk7XG5cblx0YWRkU3R5bGVzVG9Eb20oc3R5bGVzLCBvcHRpb25zKTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlIChuZXdMaXN0KSB7XG5cdFx0dmFyIG1heVJlbW92ZSA9IFtdO1xuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xuXHRcdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XG5cblx0XHRcdGRvbVN0eWxlLnJlZnMtLTtcblx0XHRcdG1heVJlbW92ZS5wdXNoKGRvbVN0eWxlKTtcblx0XHR9XG5cblx0XHRpZihuZXdMaXN0KSB7XG5cdFx0XHR2YXIgbmV3U3R5bGVzID0gbGlzdFRvU3R5bGVzKG5ld0xpc3QsIG9wdGlvbnMpO1xuXHRcdFx0YWRkU3R5bGVzVG9Eb20obmV3U3R5bGVzLCBvcHRpb25zKTtcblx0XHR9XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IG1heVJlbW92ZS5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGRvbVN0eWxlID0gbWF5UmVtb3ZlW2ldO1xuXG5cdFx0XHRpZihkb21TdHlsZS5yZWZzID09PSAwKSB7XG5cdFx0XHRcdGZvciAodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIGRvbVN0eWxlLnBhcnRzW2pdKCk7XG5cblx0XHRcdFx0ZGVsZXRlIHN0eWxlc0luRG9tW2RvbVN0eWxlLmlkXTtcblx0XHRcdH1cblx0XHR9XG5cdH07XG59O1xuXG5mdW5jdGlvbiBhZGRTdHlsZXNUb0RvbSAoc3R5bGVzLCBvcHRpb25zKSB7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIGl0ZW0gPSBzdHlsZXNbaV07XG5cdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XG5cblx0XHRpZihkb21TdHlsZSkge1xuXHRcdFx0ZG9tU3R5bGUucmVmcysrO1xuXG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0ZG9tU3R5bGUucGFydHNbal0oaXRlbS5wYXJ0c1tqXSk7XG5cdFx0XHR9XG5cblx0XHRcdGZvcig7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdGRvbVN0eWxlLnBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHR2YXIgcGFydHMgPSBbXTtcblxuXHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0cGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XG5cdFx0XHR9XG5cblx0XHRcdHN0eWxlc0luRG9tW2l0ZW0uaWRdID0ge2lkOiBpdGVtLmlkLCByZWZzOiAxLCBwYXJ0czogcGFydHN9O1xuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBsaXN0VG9TdHlsZXMgKGxpc3QsIG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlcyA9IFtdO1xuXHR2YXIgbmV3U3R5bGVzID0ge307XG5cblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIGl0ZW0gPSBsaXN0W2ldO1xuXHRcdHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuXHRcdHZhciBjc3MgPSBpdGVtWzFdO1xuXHRcdHZhciBtZWRpYSA9IGl0ZW1bMl07XG5cdFx0dmFyIHNvdXJjZU1hcCA9IGl0ZW1bM107XG5cdFx0dmFyIHBhcnQgPSB7Y3NzOiBjc3MsIG1lZGlhOiBtZWRpYSwgc291cmNlTWFwOiBzb3VyY2VNYXB9O1xuXG5cdFx0aWYoIW5ld1N0eWxlc1tpZF0pIHN0eWxlcy5wdXNoKG5ld1N0eWxlc1tpZF0gPSB7aWQ6IGlkLCBwYXJ0czogW3BhcnRdfSk7XG5cdFx0ZWxzZSBuZXdTdHlsZXNbaWRdLnBhcnRzLnB1c2gocGFydCk7XG5cdH1cblxuXHRyZXR1cm4gc3R5bGVzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQgKG9wdGlvbnMsIHN0eWxlKSB7XG5cdHZhciB0YXJnZXQgPSBnZXRFbGVtZW50KG9wdGlvbnMuaW5zZXJ0SW50bylcblxuXHRpZiAoIXRhcmdldCkge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0SW50bycgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuXHR9XG5cblx0dmFyIGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wID0gc3R5bGVzSW5zZXJ0ZWRBdFRvcFtzdHlsZXNJbnNlcnRlZEF0VG9wLmxlbmd0aCAtIDFdO1xuXG5cdGlmIChvcHRpb25zLmluc2VydEF0ID09PSBcInRvcFwiKSB7XG5cdFx0aWYgKCFsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcCkge1xuXHRcdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgdGFyZ2V0LmZpcnN0Q2hpbGQpO1xuXHRcdH0gZWxzZSBpZiAobGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AubmV4dFNpYmxpbmcpIHtcblx0XHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wLm5leHRTaWJsaW5nKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcblx0XHR9XG5cdFx0c3R5bGVzSW5zZXJ0ZWRBdFRvcC5wdXNoKHN0eWxlKTtcblx0fSBlbHNlIGlmIChvcHRpb25zLmluc2VydEF0ID09PSBcImJvdHRvbVwiKSB7XG5cdFx0dGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcblx0fSBlbHNlIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJvYmplY3RcIiAmJiBvcHRpb25zLmluc2VydEF0LmJlZm9yZSkge1xuXHRcdHZhciBuZXh0U2libGluZyA9IGdldEVsZW1lbnQob3B0aW9ucy5pbnNlcnRBdC5iZWZvcmUsIHRhcmdldCk7XG5cdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgbmV4dFNpYmxpbmcpO1xuXHR9IGVsc2Uge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIltTdHlsZSBMb2FkZXJdXFxuXFxuIEludmFsaWQgdmFsdWUgZm9yIHBhcmFtZXRlciAnaW5zZXJ0QXQnICgnb3B0aW9ucy5pbnNlcnRBdCcpIGZvdW5kLlxcbiBNdXN0IGJlICd0b3AnLCAnYm90dG9tJywgb3IgT2JqZWN0LlxcbiAoaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIjaW5zZXJ0YXQpXFxuXCIpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudCAoc3R5bGUpIHtcblx0aWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHJldHVybiBmYWxzZTtcblx0c3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG5cblx0dmFyIGlkeCA9IHN0eWxlc0luc2VydGVkQXRUb3AuaW5kZXhPZihzdHlsZSk7XG5cdGlmKGlkeCA+PSAwKSB7XG5cdFx0c3R5bGVzSW5zZXJ0ZWRBdFRvcC5zcGxpY2UoaWR4LCAxKTtcblx0fVxufVxuXG5mdW5jdGlvbiBjcmVhdGVTdHlsZUVsZW1lbnQgKG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuXG5cdGlmKG9wdGlvbnMuYXR0cnMudHlwZSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0b3B0aW9ucy5hdHRycy50eXBlID0gXCJ0ZXh0L2Nzc1wiO1xuXHR9XG5cblx0aWYob3B0aW9ucy5hdHRycy5ub25jZSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0dmFyIG5vbmNlID0gZ2V0Tm9uY2UoKTtcblx0XHRpZiAobm9uY2UpIHtcblx0XHRcdG9wdGlvbnMuYXR0cnMubm9uY2UgPSBub25jZTtcblx0XHR9XG5cdH1cblxuXHRhZGRBdHRycyhzdHlsZSwgb3B0aW9ucy5hdHRycyk7XG5cdGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBzdHlsZSk7XG5cblx0cmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVMaW5rRWxlbWVudCAob3B0aW9ucykge1xuXHR2YXIgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIpO1xuXG5cdGlmKG9wdGlvbnMuYXR0cnMudHlwZSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0b3B0aW9ucy5hdHRycy50eXBlID0gXCJ0ZXh0L2Nzc1wiO1xuXHR9XG5cdG9wdGlvbnMuYXR0cnMucmVsID0gXCJzdHlsZXNoZWV0XCI7XG5cblx0YWRkQXR0cnMobGluaywgb3B0aW9ucy5hdHRycyk7XG5cdGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBsaW5rKTtcblxuXHRyZXR1cm4gbGluaztcbn1cblxuZnVuY3Rpb24gYWRkQXR0cnMgKGVsLCBhdHRycykge1xuXHRPYmplY3Qua2V5cyhhdHRycykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG5cdFx0ZWwuc2V0QXR0cmlidXRlKGtleSwgYXR0cnNba2V5XSk7XG5cdH0pO1xufVxuXG5mdW5jdGlvbiBnZXROb25jZSgpIHtcblx0aWYgKHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyA9PT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRyZXR1cm4gbnVsbDtcblx0fVxuXG5cdHJldHVybiBfX3dlYnBhY2tfbm9uY2VfXztcbn1cblxuZnVuY3Rpb24gYWRkU3R5bGUgKG9iaiwgb3B0aW9ucykge1xuXHR2YXIgc3R5bGUsIHVwZGF0ZSwgcmVtb3ZlLCByZXN1bHQ7XG5cblx0Ly8gSWYgYSB0cmFuc2Zvcm0gZnVuY3Rpb24gd2FzIGRlZmluZWQsIHJ1biBpdCBvbiB0aGUgY3NzXG5cdGlmIChvcHRpb25zLnRyYW5zZm9ybSAmJiBvYmouY3NzKSB7XG5cdCAgICByZXN1bHQgPSB0eXBlb2Ygb3B0aW9ucy50cmFuc2Zvcm0gPT09ICdmdW5jdGlvbidcblx0XHQgPyBvcHRpb25zLnRyYW5zZm9ybShvYmouY3NzKSBcblx0XHQgOiBvcHRpb25zLnRyYW5zZm9ybS5kZWZhdWx0KG9iai5jc3MpO1xuXG5cdCAgICBpZiAocmVzdWx0KSB7XG5cdCAgICBcdC8vIElmIHRyYW5zZm9ybSByZXR1cm5zIGEgdmFsdWUsIHVzZSB0aGF0IGluc3RlYWQgb2YgdGhlIG9yaWdpbmFsIGNzcy5cblx0ICAgIFx0Ly8gVGhpcyBhbGxvd3MgcnVubmluZyBydW50aW1lIHRyYW5zZm9ybWF0aW9ucyBvbiB0aGUgY3NzLlxuXHQgICAgXHRvYmouY3NzID0gcmVzdWx0O1xuXHQgICAgfSBlbHNlIHtcblx0ICAgIFx0Ly8gSWYgdGhlIHRyYW5zZm9ybSBmdW5jdGlvbiByZXR1cm5zIGEgZmFsc3kgdmFsdWUsIGRvbid0IGFkZCB0aGlzIGNzcy5cblx0ICAgIFx0Ly8gVGhpcyBhbGxvd3MgY29uZGl0aW9uYWwgbG9hZGluZyBvZiBjc3Ncblx0ICAgIFx0cmV0dXJuIGZ1bmN0aW9uKCkge1xuXHQgICAgXHRcdC8vIG5vb3Bcblx0ICAgIFx0fTtcblx0ICAgIH1cblx0fVxuXG5cdGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuXHRcdHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuXG5cdFx0c3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKSk7XG5cblx0XHR1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcblx0XHRyZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuXG5cdH0gZWxzZSBpZiAoXG5cdFx0b2JqLnNvdXJjZU1hcCAmJlxuXHRcdHR5cGVvZiBVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBVUkwuY3JlYXRlT2JqZWN0VVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgVVJMLnJldm9rZU9iamVjdFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIEJsb2IgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCJcblx0KSB7XG5cdFx0c3R5bGUgPSBjcmVhdGVMaW5rRWxlbWVudChvcHRpb25zKTtcblx0XHR1cGRhdGUgPSB1cGRhdGVMaW5rLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXHRcdHJlbW92ZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG5cblx0XHRcdGlmKHN0eWxlLmhyZWYpIFVSTC5yZXZva2VPYmplY3RVUkwoc3R5bGUuaHJlZik7XG5cdFx0fTtcblx0fSBlbHNlIHtcblx0XHRzdHlsZSA9IGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKTtcblx0XHR1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUpO1xuXHRcdHJlbW92ZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG5cdFx0fTtcblx0fVxuXG5cdHVwZGF0ZShvYmopO1xuXG5cdHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZSAobmV3T2JqKSB7XG5cdFx0aWYgKG5ld09iaikge1xuXHRcdFx0aWYgKFxuXHRcdFx0XHRuZXdPYmouY3NzID09PSBvYmouY3NzICYmXG5cdFx0XHRcdG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmXG5cdFx0XHRcdG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXBcblx0XHRcdCkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdHVwZGF0ZShvYmogPSBuZXdPYmopO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZW1vdmUoKTtcblx0XHR9XG5cdH07XG59XG5cbnZhciByZXBsYWNlVGV4dCA9IChmdW5jdGlvbiAoKSB7XG5cdHZhciB0ZXh0U3RvcmUgPSBbXTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gKGluZGV4LCByZXBsYWNlbWVudCkge1xuXHRcdHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcblxuXHRcdHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuXHR9O1xufSkoKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyAoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuXHR2YXIgY3NzID0gcmVtb3ZlID8gXCJcIiA6IG9iai5jc3M7XG5cblx0aWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcblx0XHRzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcblx0fSBlbHNlIHtcblx0XHR2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG5cdFx0dmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG5cdFx0aWYgKGNoaWxkTm9kZXNbaW5kZXhdKSBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG5cblx0XHRpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcblx0XHRcdHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnIChzdHlsZSwgb2JqKSB7XG5cdHZhciBjc3MgPSBvYmouY3NzO1xuXHR2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG5cblx0aWYobWVkaWEpIHtcblx0XHRzdHlsZS5zZXRBdHRyaWJ1dGUoXCJtZWRpYVwiLCBtZWRpYSlcblx0fVxuXG5cdGlmKHN0eWxlLnN0eWxlU2hlZXQpIHtcblx0XHRzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG5cdH0gZWxzZSB7XG5cdFx0d2hpbGUoc3R5bGUuZmlyc3RDaGlsZCkge1xuXHRcdFx0c3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG5cdFx0fVxuXG5cdFx0c3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gdXBkYXRlTGluayAobGluaywgb3B0aW9ucywgb2JqKSB7XG5cdHZhciBjc3MgPSBvYmouY3NzO1xuXHR2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuXHQvKlxuXHRcdElmIGNvbnZlcnRUb0Fic29sdXRlVXJscyBpc24ndCBkZWZpbmVkLCBidXQgc291cmNlbWFwcyBhcmUgZW5hYmxlZFxuXHRcdGFuZCB0aGVyZSBpcyBubyBwdWJsaWNQYXRoIGRlZmluZWQgdGhlbiBsZXRzIHR1cm4gY29udmVydFRvQWJzb2x1dGVVcmxzXG5cdFx0b24gYnkgZGVmYXVsdC4gIE90aGVyd2lzZSBkZWZhdWx0IHRvIHRoZSBjb252ZXJ0VG9BYnNvbHV0ZVVybHMgb3B0aW9uXG5cdFx0ZGlyZWN0bHlcblx0Ki9cblx0dmFyIGF1dG9GaXhVcmxzID0gb3B0aW9ucy5jb252ZXJ0VG9BYnNvbHV0ZVVybHMgPT09IHVuZGVmaW5lZCAmJiBzb3VyY2VNYXA7XG5cblx0aWYgKG9wdGlvbnMuY29udmVydFRvQWJzb2x1dGVVcmxzIHx8IGF1dG9GaXhVcmxzKSB7XG5cdFx0Y3NzID0gZml4VXJscyhjc3MpO1xuXHR9XG5cblx0aWYgKHNvdXJjZU1hcCkge1xuXHRcdC8vIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzI2NjAzODc1XG5cdFx0Y3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIiArIGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSkgKyBcIiAqL1wiO1xuXHR9XG5cblx0dmFyIGJsb2IgPSBuZXcgQmxvYihbY3NzXSwgeyB0eXBlOiBcInRleHQvY3NzXCIgfSk7XG5cblx0dmFyIG9sZFNyYyA9IGxpbmsuaHJlZjtcblxuXHRsaW5rLmhyZWYgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xuXG5cdGlmKG9sZFNyYykgVVJMLnJldm9rZU9iamVjdFVSTChvbGRTcmMpO1xufVxuIiwiXG4vKipcbiAqIFdoZW4gc291cmNlIG1hcHMgYXJlIGVuYWJsZWQsIGBzdHlsZS1sb2FkZXJgIHVzZXMgYSBsaW5rIGVsZW1lbnQgd2l0aCBhIGRhdGEtdXJpIHRvXG4gKiBlbWJlZCB0aGUgY3NzIG9uIHRoZSBwYWdlLiBUaGlzIGJyZWFrcyBhbGwgcmVsYXRpdmUgdXJscyBiZWNhdXNlIG5vdyB0aGV5IGFyZSByZWxhdGl2ZSB0byBhXG4gKiBidW5kbGUgaW5zdGVhZCBvZiB0aGUgY3VycmVudCBwYWdlLlxuICpcbiAqIE9uZSBzb2x1dGlvbiBpcyB0byBvbmx5IHVzZSBmdWxsIHVybHMsIGJ1dCB0aGF0IG1heSBiZSBpbXBvc3NpYmxlLlxuICpcbiAqIEluc3RlYWQsIHRoaXMgZnVuY3Rpb24gXCJmaXhlc1wiIHRoZSByZWxhdGl2ZSB1cmxzIHRvIGJlIGFic29sdXRlIGFjY29yZGluZyB0byB0aGUgY3VycmVudCBwYWdlIGxvY2F0aW9uLlxuICpcbiAqIEEgcnVkaW1lbnRhcnkgdGVzdCBzdWl0ZSBpcyBsb2NhdGVkIGF0IGB0ZXN0L2ZpeFVybHMuanNgIGFuZCBjYW4gYmUgcnVuIHZpYSB0aGUgYG5wbSB0ZXN0YCBjb21tYW5kLlxuICpcbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3MpIHtcbiAgLy8gZ2V0IGN1cnJlbnQgbG9jYXRpb25cbiAgdmFyIGxvY2F0aW9uID0gdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiAmJiB3aW5kb3cubG9jYXRpb247XG5cbiAgaWYgKCFsb2NhdGlvbikge1xuICAgIHRocm93IG5ldyBFcnJvcihcImZpeFVybHMgcmVxdWlyZXMgd2luZG93LmxvY2F0aW9uXCIpO1xuICB9XG5cblx0Ly8gYmxhbmsgb3IgbnVsbD9cblx0aWYgKCFjc3MgfHwgdHlwZW9mIGNzcyAhPT0gXCJzdHJpbmdcIikge1xuXHQgIHJldHVybiBjc3M7XG4gIH1cblxuICB2YXIgYmFzZVVybCA9IGxvY2F0aW9uLnByb3RvY29sICsgXCIvL1wiICsgbG9jYXRpb24uaG9zdDtcbiAgdmFyIGN1cnJlbnREaXIgPSBiYXNlVXJsICsgbG9jYXRpb24ucGF0aG5hbWUucmVwbGFjZSgvXFwvW15cXC9dKiQvLCBcIi9cIik7XG5cblx0Ly8gY29udmVydCBlYWNoIHVybCguLi4pXG5cdC8qXG5cdFRoaXMgcmVndWxhciBleHByZXNzaW9uIGlzIGp1c3QgYSB3YXkgdG8gcmVjdXJzaXZlbHkgbWF0Y2ggYnJhY2tldHMgd2l0aGluXG5cdGEgc3RyaW5nLlxuXG5cdCAvdXJsXFxzKlxcKCAgPSBNYXRjaCBvbiB0aGUgd29yZCBcInVybFwiIHdpdGggYW55IHdoaXRlc3BhY2UgYWZ0ZXIgaXQgYW5kIHRoZW4gYSBwYXJlbnNcblx0ICAgKCAgPSBTdGFydCBhIGNhcHR1cmluZyBncm91cFxuXHQgICAgICg/OiAgPSBTdGFydCBhIG5vbi1jYXB0dXJpbmcgZ3JvdXBcblx0ICAgICAgICAgW14pKF0gID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgIHwgID0gT1Jcblx0ICAgICAgICAgXFwoICA9IE1hdGNoIGEgc3RhcnQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICg/OiAgPSBTdGFydCBhbm90aGVyIG5vbi1jYXB0dXJpbmcgZ3JvdXBzXG5cdCAgICAgICAgICAgICAgICAgW14pKF0rICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgIHwgID0gT1Jcblx0ICAgICAgICAgICAgICAgICBcXCggID0gTWF0Y2ggYSBzdGFydCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgICAgICBbXikoXSogID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgXFwpICA9IE1hdGNoIGEgZW5kIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICApICA9IEVuZCBHcm91cFxuICAgICAgICAgICAgICAqXFwpID0gTWF0Y2ggYW55dGhpbmcgYW5kIHRoZW4gYSBjbG9zZSBwYXJlbnNcbiAgICAgICAgICApICA9IENsb3NlIG5vbi1jYXB0dXJpbmcgZ3JvdXBcbiAgICAgICAgICAqICA9IE1hdGNoIGFueXRoaW5nXG4gICAgICAgKSAgPSBDbG9zZSBjYXB0dXJpbmcgZ3JvdXBcblx0IFxcKSAgPSBNYXRjaCBhIGNsb3NlIHBhcmVuc1xuXG5cdCAvZ2kgID0gR2V0IGFsbCBtYXRjaGVzLCBub3QgdGhlIGZpcnN0LiAgQmUgY2FzZSBpbnNlbnNpdGl2ZS5cblx0ICovXG5cdHZhciBmaXhlZENzcyA9IGNzcy5yZXBsYWNlKC91cmxcXHMqXFwoKCg/OlteKShdfFxcKCg/OlteKShdK3xcXChbXikoXSpcXCkpKlxcKSkqKVxcKS9naSwgZnVuY3Rpb24oZnVsbE1hdGNoLCBvcmlnVXJsKSB7XG5cdFx0Ly8gc3RyaXAgcXVvdGVzIChpZiB0aGV5IGV4aXN0KVxuXHRcdHZhciB1bnF1b3RlZE9yaWdVcmwgPSBvcmlnVXJsXG5cdFx0XHQudHJpbSgpXG5cdFx0XHQucmVwbGFjZSgvXlwiKC4qKVwiJC8sIGZ1bmN0aW9uKG8sICQxKXsgcmV0dXJuICQxOyB9KVxuXHRcdFx0LnJlcGxhY2UoL14nKC4qKSckLywgZnVuY3Rpb24obywgJDEpeyByZXR1cm4gJDE7IH0pO1xuXG5cdFx0Ly8gYWxyZWFkeSBhIGZ1bGwgdXJsPyBubyBjaGFuZ2Vcblx0XHRpZiAoL14oI3xkYXRhOnxodHRwOlxcL1xcL3xodHRwczpcXC9cXC98ZmlsZTpcXC9cXC9cXC98XFxzKiQpL2kudGVzdCh1bnF1b3RlZE9yaWdVcmwpKSB7XG5cdFx0ICByZXR1cm4gZnVsbE1hdGNoO1xuXHRcdH1cblxuXHRcdC8vIGNvbnZlcnQgdGhlIHVybCB0byBhIGZ1bGwgdXJsXG5cdFx0dmFyIG5ld1VybDtcblxuXHRcdGlmICh1bnF1b3RlZE9yaWdVcmwuaW5kZXhPZihcIi8vXCIpID09PSAwKSB7XG5cdFx0ICBcdC8vVE9ETzogc2hvdWxkIHdlIGFkZCBwcm90b2NvbD9cblx0XHRcdG5ld1VybCA9IHVucXVvdGVkT3JpZ1VybDtcblx0XHR9IGVsc2UgaWYgKHVucXVvdGVkT3JpZ1VybC5pbmRleE9mKFwiL1wiKSA9PT0gMCkge1xuXHRcdFx0Ly8gcGF0aCBzaG91bGQgYmUgcmVsYXRpdmUgdG8gdGhlIGJhc2UgdXJsXG5cdFx0XHRuZXdVcmwgPSBiYXNlVXJsICsgdW5xdW90ZWRPcmlnVXJsOyAvLyBhbHJlYWR5IHN0YXJ0cyB3aXRoICcvJ1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQvLyBwYXRoIHNob3VsZCBiZSByZWxhdGl2ZSB0byBjdXJyZW50IGRpcmVjdG9yeVxuXHRcdFx0bmV3VXJsID0gY3VycmVudERpciArIHVucXVvdGVkT3JpZ1VybC5yZXBsYWNlKC9eXFwuXFwvLywgXCJcIik7IC8vIFN0cmlwIGxlYWRpbmcgJy4vJ1xuXHRcdH1cblxuXHRcdC8vIHNlbmQgYmFjayB0aGUgZml4ZWQgdXJsKC4uLilcblx0XHRyZXR1cm4gXCJ1cmwoXCIgKyBKU09OLnN0cmluZ2lmeShuZXdVcmwpICsgXCIpXCI7XG5cdH0pO1xuXG5cdC8vIHNlbmQgYmFjayB0aGUgZml4ZWQgY3NzXG5cdHJldHVybiBmaXhlZENzcztcbn07XG4iLCJ2YXIgZGVmYXVsdE9wdGlvbnMgPSB7XG4gICAgLy8gd29ya2VyUGF0aDogJ2h0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9naC9uYXB0aGEvdGVzc2VyYWN0LmpzQDAuMi4wL2Rpc3Qvd29ya2VyLmpzJyxcbiAgICBjb3JlUGF0aDogJ2h0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9naC9uYXB0aGEvdGVzc2VyYWN0LmpzLWNvcmVAMC4xLjAvaW5kZXguanMnLCAgICBcbiAgICBsYW5nUGF0aDogJ2h0dHBzOi8vdGVzc2RhdGEucHJvamVjdG5hcHRoYS5jb20vMy4wMi8nLFxufVxuXG5pZiAocHJvY2Vzcy5lbnYuVEVTU19FTlYgPT09IFwiZGV2ZWxvcG1lbnRcIikge1xuICAgIGNvbnNvbGUuZGVidWcoJ1VzaW5nIERldmVsb3BtZW50IENvbmZpZ3VyYXRpb24nKVxuICAgIGRlZmF1bHRPcHRpb25zLndvcmtlclBhdGggPSBsb2NhdGlvbi5wcm90b2NvbCArICcvLycgKyBsb2NhdGlvbi5ob3N0ICsgJy9kaXN0L3dvcmtlci5kZXYuanM/bm9jYWNoZT0nICsgTWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc2xpY2UoMylcbn1lbHNle1xuICAgIHZhciB2ZXJzaW9uID0gcmVxdWlyZSgnLi4vLi4vcGFja2FnZS5qc29uJykudmVyc2lvbjtcbiAgICBkZWZhdWx0T3B0aW9ucy53b3JrZXJQYXRoID0gJ2h0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9naC9uYXB0aGEvdGVzc2VyYWN0LmpzQCcgKyB2ZXJzaW9uICsgJy9kaXN0L3dvcmtlci5qcydcbn1cblxuZXhwb3J0cy5kZWZhdWx0T3B0aW9ucyA9IGRlZmF1bHRPcHRpb25zO1xuXG5cbmV4cG9ydHMuc3Bhd25Xb3JrZXIgPSBmdW5jdGlvbiBzcGF3bldvcmtlcihpbnN0YW5jZSwgd29ya2VyT3B0aW9ucyl7XG4gICAgaWYoQmxvYiAmJiBVUkwpe1xuICAgICAgICB2YXIgYmxvYiA9IG5ldyBCbG9iKFsnaW1wb3J0U2NyaXB0cyhcIicgKyB3b3JrZXJPcHRpb25zLndvcmtlclBhdGggKyAnXCIpOyddLCB7XG4gICAgICAgICAgICB0eXBlOiAnYXBwbGljYXRpb24vamF2YXNjcmlwdCdcbiAgICAgICAgfSk7XG4gICAgICAgIHZhciB3b3JrZXIgPSBuZXcgV29ya2VyKFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYikpO1xuICAgIH1lbHNle1xuICAgICAgICB2YXIgd29ya2VyID0gbmV3IFdvcmtlcih3b3JrZXJPcHRpb25zLndvcmtlclBhdGgpXG4gICAgfVxuXG4gICAgd29ya2VyLm9ubWVzc2FnZSA9IGZ1bmN0aW9uKGUpe1xuICAgICAgICB2YXIgcGFja2V0ID0gZS5kYXRhO1xuICAgICAgICBpbnN0YW5jZS5fcmVjdihwYWNrZXQpXG4gICAgfVxuICAgIHJldHVybiB3b3JrZXJcbn1cblxuZXhwb3J0cy50ZXJtaW5hdGVXb3JrZXIgPSBmdW5jdGlvbihpbnN0YW5jZSl7XG4gICAgaW5zdGFuY2Uud29ya2VyLnRlcm1pbmF0ZSgpXG59XG5cbmV4cG9ydHMuc2VuZFBhY2tldCA9IGZ1bmN0aW9uIHNlbmRQYWNrZXQoaW5zdGFuY2UsIHBhY2tldCl7XG4gICAgbG9hZEltYWdlKHBhY2tldC5wYXlsb2FkLmltYWdlLCBmdW5jdGlvbihpbWcpe1xuICAgICAgICBwYWNrZXQucGF5bG9hZC5pbWFnZSA9IGltZ1xuICAgICAgICBpbnN0YW5jZS53b3JrZXIucG9zdE1lc3NhZ2UocGFja2V0KSBcbiAgICB9KVxufVxuXG5cbmZ1bmN0aW9uIGxvYWRJbWFnZShpbWFnZSwgY2Ipe1xuICAgIGlmKHR5cGVvZiBpbWFnZSA9PT0gJ3N0cmluZycpe1xuICAgICAgICBpZigvXlxcIy8udGVzdChpbWFnZSkpe1xuICAgICAgICAgICAgLy8gZWxlbWVudCBjc3Mgc2VsZWN0b3JcbiAgICAgICAgICAgIHJldHVybiBsb2FkSW1hZ2UoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihpbWFnZSksIGNiKVxuICAgICAgICB9ZWxzZSBpZigvKGJsb2J8ZGF0YSlcXDovLnRlc3QoaW1hZ2UpKXtcbiAgICAgICAgICAgIC8vIGRhdGEgdXJsXG4gICAgICAgICAgICB2YXIgaW0gPSBuZXcgSW1hZ2VcbiAgICAgICAgICAgIGltLnNyYyA9IGltYWdlO1xuICAgICAgICAgICAgaW0ub25sb2FkID0gZSA9PiBsb2FkSW1hZ2UoaW0sIGNiKTtcbiAgICAgICAgICAgIGltLm9uZXJyb3IgPSBlID0+IHsgdGhyb3cgZTsgfTtcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIHZhciB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICAgICAgICAgIHhoci5vcGVuKCdHRVQnLCBpbWFnZSwgdHJ1ZSlcbiAgICAgICAgICAgIHhoci5yZXNwb25zZVR5cGUgPSBcImJsb2JcIjtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgeGhyLm9ubG9hZCA9IGUgPT4ge1xuICAgICAgICAgICAgICAgIGlmICh4aHIuc3RhdHVzID49IDQwMCl7XG4gICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ZhaWwgdG8gZ2V0IGltYWdlIGFzIEJsb2InKTtcbiAgICAgICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgbG9hZEltYWdlKHhoci5yZXNwb25zZSwgY2IpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICB4aHIub25lcnJvciA9IGUgPT4geyB0aHJvdyBlOyB9OyBcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgeGhyLnNlbmQobnVsbClcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgfWVsc2UgaWYoaW1hZ2UgaW5zdGFuY2VvZiBGaWxlKXtcbiAgICAgICAgLy8gZmlsZXNcbiAgICAgICAgdmFyIGZyID0gbmV3IEZpbGVSZWFkZXIoKVxuICAgICAgICBmci5vbmxvYWQgPSBlID0+IGxvYWRJbWFnZShmci5yZXN1bHQsIGNiKTtcbiAgICAgICAgZnIub25lcnJvciA9IGUgPT4geyB0aHJvdyBlOyB9OyBcbiAgICAgICAgZnIucmVhZEFzRGF0YVVSTChpbWFnZSlcbiAgICAgICAgcmV0dXJuXG4gICAgfWVsc2UgaWYoaW1hZ2UgaW5zdGFuY2VvZiBCbG9iKXtcbiAgICAgICAgcmV0dXJuIGxvYWRJbWFnZShVUkwuY3JlYXRlT2JqZWN0VVJMKGltYWdlKSwgY2IpXG4gICAgfWVsc2UgaWYoaW1hZ2UuZ2V0Q29udGV4dCl7XG4gICAgICAgIC8vIGNhbnZhcyBlbGVtZW50XG4gICAgICAgIHJldHVybiBsb2FkSW1hZ2UoaW1hZ2UuZ2V0Q29udGV4dCgnMmQnKSwgY2IpXG4gICAgfWVsc2UgaWYoaW1hZ2UudGFnTmFtZSA9PSBcIklNR1wiIHx8IGltYWdlLnRhZ05hbWUgPT0gXCJWSURFT1wiKXtcbiAgICAgICAgLy8gaW1hZ2UgZWxlbWVudCBvciB2aWRlbyBlbGVtZW50XG4gICAgICAgIHZhciBjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gICAgICAgIGMud2lkdGggID0gaW1hZ2UubmF0dXJhbFdpZHRoICB8fCBpbWFnZS52aWRlb1dpZHRoO1xuICAgICAgICBjLmhlaWdodCA9IGltYWdlLm5hdHVyYWxIZWlnaHQgfHwgaW1hZ2UudmlkZW9IZWlnaHQ7XG4gICAgICAgIHZhciBjdHggPSBjLmdldENvbnRleHQoJzJkJyk7XG4gICAgICAgIGN0eC5kcmF3SW1hZ2UoaW1hZ2UsIDAsIDApO1xuICAgICAgICByZXR1cm4gbG9hZEltYWdlKGN0eCwgY2IpXG4gICAgfWVsc2UgaWYoaW1hZ2UuZ2V0SW1hZ2VEYXRhKXtcbiAgICAgICAgLy8gY2FudmFzIGNvbnRleHRcbiAgICAgICAgdmFyIGRhdGEgPSBpbWFnZS5nZXRJbWFnZURhdGEoMCwgMCwgaW1hZ2UuY2FudmFzLndpZHRoLCBpbWFnZS5jYW52YXMuaGVpZ2h0KTtcbiAgICAgICAgcmV0dXJuIGxvYWRJbWFnZShkYXRhLCBjYilcbiAgICB9ZWxzZXtcbiAgICAgICAgcmV0dXJuIGNiKGltYWdlKVxuICAgIH1cbiAgICB0aHJvdyBuZXcgRXJyb3IoJ01pc3NpbmcgcmV0dXJuIGluIGxvYWRJbWFnZSBjYXNjYWRlJylcblxufVxuIiwiLy8gVGhlIHJlc3VsdCBvZiBkdW1wLmpzIGlzIGEgYmlnIEpTT04gdHJlZVxuLy8gd2hpY2ggY2FuIGJlIGVhc2lseSBzZXJpYWxpemVkIChmb3IgaW5zdGFuY2Vcbi8vIHRvIGJlIHNlbnQgZnJvbSBhIHdlYndvcmtlciB0byB0aGUgbWFpbiBhcHBcbi8vIG9yIHRocm91Z2ggTm9kZSdzIElQQyksIGJ1dCB3ZSB3YW50XG4vLyBhIChjaXJjdWxhcikgRE9NLWxpa2UgaW50ZXJmYWNlIGZvciB3YWxraW5nXG4vLyB0aHJvdWdoIHRoZSBkYXRhLiBcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjaXJjdWxhcml6ZShwYWdlKXtcbiAgICBwYWdlLnBhcmFncmFwaHMgPSBbXVxuICAgIHBhZ2UubGluZXMgPSBbXVxuICAgIHBhZ2Uud29yZHMgPSBbXVxuICAgIHBhZ2Uuc3ltYm9scyA9IFtdXG5cbiAgICBwYWdlLmJsb2Nrcy5mb3JFYWNoKGZ1bmN0aW9uKGJsb2NrKXtcbiAgICAgICAgYmxvY2sucGFnZSA9IHBhZ2U7XG5cbiAgICAgICAgYmxvY2subGluZXMgPSBbXVxuICAgICAgICBibG9jay53b3JkcyA9IFtdXG4gICAgICAgIGJsb2NrLnN5bWJvbHMgPSBbXVxuXG4gICAgICAgIGJsb2NrLnBhcmFncmFwaHMuZm9yRWFjaChmdW5jdGlvbihwYXJhKXtcbiAgICAgICAgICAgIHBhcmEuYmxvY2sgPSBibG9jaztcbiAgICAgICAgICAgIHBhcmEucGFnZSA9IHBhZ2U7XG5cbiAgICAgICAgICAgIHBhcmEud29yZHMgPSBbXVxuICAgICAgICAgICAgcGFyYS5zeW1ib2xzID0gW11cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgcGFyYS5saW5lcy5mb3JFYWNoKGZ1bmN0aW9uKGxpbmUpe1xuICAgICAgICAgICAgICAgIGxpbmUucGFyYWdyYXBoID0gcGFyYTtcbiAgICAgICAgICAgICAgICBsaW5lLmJsb2NrID0gYmxvY2s7XG4gICAgICAgICAgICAgICAgbGluZS5wYWdlID0gcGFnZTtcblxuICAgICAgICAgICAgICAgIGxpbmUuc3ltYm9scyA9IFtdXG5cbiAgICAgICAgICAgICAgICBsaW5lLndvcmRzLmZvckVhY2goZnVuY3Rpb24od29yZCl7XG4gICAgICAgICAgICAgICAgICAgIHdvcmQubGluZSA9IGxpbmU7XG4gICAgICAgICAgICAgICAgICAgIHdvcmQucGFyYWdyYXBoID0gcGFyYTtcbiAgICAgICAgICAgICAgICAgICAgd29yZC5ibG9jayA9IGJsb2NrO1xuICAgICAgICAgICAgICAgICAgICB3b3JkLnBhZ2UgPSBwYWdlO1xuICAgICAgICAgICAgICAgICAgICB3b3JkLnN5bWJvbHMuZm9yRWFjaChmdW5jdGlvbihzeW0pe1xuICAgICAgICAgICAgICAgICAgICAgICAgc3ltLndvcmQgPSB3b3JkO1xuICAgICAgICAgICAgICAgICAgICAgICAgc3ltLmxpbmUgPSBsaW5lO1xuICAgICAgICAgICAgICAgICAgICAgICAgc3ltLnBhcmFncmFwaCA9IHBhcmE7XG4gICAgICAgICAgICAgICAgICAgICAgICBzeW0uYmxvY2sgPSBibG9jaztcbiAgICAgICAgICAgICAgICAgICAgICAgIHN5bS5wYWdlID0gcGFnZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgc3ltLmxpbmUuc3ltYm9scy5wdXNoKHN5bSlcbiAgICAgICAgICAgICAgICAgICAgICAgIHN5bS5wYXJhZ3JhcGguc3ltYm9scy5wdXNoKHN5bSlcbiAgICAgICAgICAgICAgICAgICAgICAgIHN5bS5ibG9jay5zeW1ib2xzLnB1c2goc3ltKVxuICAgICAgICAgICAgICAgICAgICAgICAgc3ltLnBhZ2Uuc3ltYm9scy5wdXNoKHN5bSlcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgd29yZC5wYXJhZ3JhcGgud29yZHMucHVzaCh3b3JkKVxuICAgICAgICAgICAgICAgICAgICB3b3JkLmJsb2NrLndvcmRzLnB1c2god29yZClcbiAgICAgICAgICAgICAgICAgICAgd29yZC5wYWdlLndvcmRzLnB1c2god29yZClcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIGxpbmUuYmxvY2subGluZXMucHVzaChsaW5lKVxuICAgICAgICAgICAgICAgIGxpbmUucGFnZS5saW5lcy5wdXNoKGxpbmUpXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgcGFyYS5wYWdlLnBhcmFncmFwaHMucHVzaChwYXJhKVxuICAgICAgICB9KVxuICAgIH0pXG4gICAgcmV0dXJuIHBhZ2Vcbn0iLCJjb25zdCBhZGFwdGVyID0gcmVxdWlyZSgnLi4vbm9kZS9pbmRleC5qcycpXG5cbmxldCBqb2JDb3VudGVyID0gMDtcblxubW9kdWxlLmV4cG9ydHMgPSBjbGFzcyBUZXNzZXJhY3RKb2Ige1xuICAgIGNvbnN0cnVjdG9yKGluc3RhbmNlKXtcbiAgICAgICAgdGhpcy5pZCA9ICdKb2ItJyArICgrK2pvYkNvdW50ZXIpICsgJy0nICsgTWF0aC5yYW5kb20oKS50b1N0cmluZygxNikuc2xpY2UoMywgOClcblxuICAgICAgICB0aGlzLl9pbnN0YW5jZSA9IGluc3RhbmNlO1xuICAgICAgICB0aGlzLl9yZXNvbHZlID0gW11cbiAgICAgICAgdGhpcy5fcmVqZWN0ID0gW11cbiAgICAgICAgdGhpcy5fcHJvZ3Jlc3MgPSBbXVxuICAgICAgICB0aGlzLl9maW5hbGx5ID0gW11cbiAgICB9XG5cbiAgICB0aGVuKHJlc29sdmUsIHJlamVjdCl7XG4gICAgICAgIGlmKHRoaXMuX3Jlc29sdmUucHVzaCl7XG4gICAgICAgICAgICB0aGlzLl9yZXNvbHZlLnB1c2gocmVzb2x2ZSkgXG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgcmVzb2x2ZSh0aGlzLl9yZXNvbHZlKVxuICAgICAgICB9XG5cbiAgICAgICAgaWYocmVqZWN0KSB0aGlzLmNhdGNoKHJlamVjdCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBjYXRjaChyZWplY3Qpe1xuICAgICAgICBpZih0aGlzLl9yZWplY3QucHVzaCl7XG4gICAgICAgICAgICB0aGlzLl9yZWplY3QucHVzaChyZWplY3QpIFxuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIHJlamVjdCh0aGlzLl9yZWplY3QpXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIHByb2dyZXNzKGZuKXtcbiAgICAgICAgdGhpcy5fcHJvZ3Jlc3MucHVzaChmbilcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIGZpbmFsbHkoZm4pIHtcbiAgICAgICAgdGhpcy5fZmluYWxseS5wdXNoKGZuKVxuICAgICAgICByZXR1cm4gdGhpczsgIFxuICAgIH1cbiAgICBfc2VuZChhY3Rpb24sIHBheWxvYWQpe1xuICAgICAgICBhZGFwdGVyLnNlbmRQYWNrZXQodGhpcy5faW5zdGFuY2UsIHtcbiAgICAgICAgICAgIGpvYklkOiB0aGlzLmlkLFxuICAgICAgICAgICAgYWN0aW9uOiBhY3Rpb24sXG4gICAgICAgICAgICBwYXlsb2FkOiBwYXlsb2FkXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgX2hhbmRsZShwYWNrZXQpe1xuICAgICAgICB2YXIgZGF0YSA9IHBhY2tldC5kYXRhO1xuICAgICAgICBsZXQgcnVuRmluYWxseUNicyA9IGZhbHNlO1xuXG4gICAgICAgIGlmKHBhY2tldC5zdGF0dXMgPT09ICdyZXNvbHZlJyl7XG4gICAgICAgICAgICBpZih0aGlzLl9yZXNvbHZlLmxlbmd0aCA9PT0gMCkgY29uc29sZS5sb2coZGF0YSk7XG4gICAgICAgICAgICB0aGlzLl9yZXNvbHZlLmZvckVhY2goZm4gPT4ge1xuICAgICAgICAgICAgICAgIHZhciByZXQgPSBmbihkYXRhKTtcbiAgICAgICAgICAgICAgICBpZihyZXQgJiYgdHlwZW9mIHJldC50aGVuID09ICdmdW5jdGlvbicpe1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oJ1Rlc3NlcmFjdEpvYiBpbnN0YW5jZXMgZG8gbm90IGNoYWluIGxpa2UgRVM2IFByb21pc2VzLiBUbyBjb252ZXJ0IGl0IGludG8gYSByZWFsIHByb21pc2UsIHVzZSBQcm9taXNlLnJlc29sdmUuJylcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgdGhpcy5fcmVzb2x2ZSA9IGRhdGE7XG4gICAgICAgICAgICB0aGlzLl9pbnN0YW5jZS5fZGVxdWV1ZSgpXG4gICAgICAgICAgICBydW5GaW5hbGx5Q2JzID0gdHJ1ZTtcbiAgICAgICAgfWVsc2UgaWYocGFja2V0LnN0YXR1cyA9PT0gJ3JlamVjdCcpe1xuICAgICAgICAgICAgaWYodGhpcy5fcmVqZWN0Lmxlbmd0aCA9PT0gMCkgY29uc29sZS5lcnJvcihkYXRhKTtcbiAgICAgICAgICAgIHRoaXMuX3JlamVjdC5mb3JFYWNoKGZuID0+IGZuKGRhdGEpKVxuICAgICAgICAgICAgdGhpcy5fcmVqZWN0ID0gZGF0YTtcbiAgICAgICAgICAgIHRoaXMuX2luc3RhbmNlLl9kZXF1ZXVlKClcbiAgICAgICAgICAgIHJ1bkZpbmFsbHlDYnMgPSB0cnVlO1xuICAgICAgICB9ZWxzZSBpZihwYWNrZXQuc3RhdHVzID09PSAncHJvZ3Jlc3MnKXtcbiAgICAgICAgICAgIHRoaXMuX3Byb2dyZXNzLmZvckVhY2goZm4gPT4gZm4oZGF0YSkpXG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgY29uc29sZS53YXJuKCdNZXNzYWdlIHR5cGUgdW5rbm93bicsIHBhY2tldC5zdGF0dXMpXG4gICAgICAgIH1cblxuICAgICAgICBpZiAocnVuRmluYWxseUNicykge1xuICAgICAgICAgICAgdGhpcy5fZmluYWxseS5mb3JFYWNoKGZuID0+IGZuKGRhdGEpKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsImNvbnN0IGFkYXB0ZXIgPSByZXF1aXJlKCcuL25vZGUvaW5kZXguanMnKVxuY29uc3QgY2lyY3VsYXJpemUgPSByZXF1aXJlKCcuL2NvbW1vbi9jaXJjdWxhcml6ZS5qcycpXG5jb25zdCBUZXNzZXJhY3RKb2IgPSByZXF1aXJlKCcuL2NvbW1vbi9qb2InKTtcbmNvbnN0IHZlcnNpb24gPSByZXF1aXJlKCcuLi9wYWNrYWdlLmpzb24nKS52ZXJzaW9uO1xuXG5jb25zdCBjcmVhdGUgPSBmdW5jdGlvbih3b3JrZXJPcHRpb25zID0ge30pe1xuXHR2YXIgd29ya2VyID0gbmV3IFRlc3NlcmFjdFdvcmtlcihPYmplY3QuYXNzaWduKHt9LCBhZGFwdGVyLmRlZmF1bHRPcHRpb25zLCB3b3JrZXJPcHRpb25zKSk7XG5cdHdvcmtlci5jcmVhdGUgPSBjcmVhdGU7XG5cdHdvcmtlci52ZXJzaW9uID0gdmVyc2lvbjtcblx0cmV0dXJuIHdvcmtlcjtcbn1cblxuY2xhc3MgVGVzc2VyYWN0V29ya2VyIHtcblx0Y29uc3RydWN0b3Iod29ya2VyT3B0aW9ucyl7XG5cdFx0dGhpcy53b3JrZXIgPSBudWxsO1xuXHRcdHRoaXMud29ya2VyT3B0aW9ucyA9IHdvcmtlck9wdGlvbnM7XG5cdFx0dGhpcy5fY3VycmVudEpvYiA9IG51bGw7XG5cdFx0dGhpcy5fcXVldWUgPSBbXTtcblx0fVxuXG5cdHJlY29nbml6ZShpbWFnZSwgb3B0aW9ucyA9IHt9KXtcblx0XHRyZXR1cm4gdGhpcy5fZGVsYXkoam9iID0+IHtcblx0XHRcdGlmICh0eXBlb2Ygb3B0aW9ucyA9PT0gJ3N0cmluZycpIG9wdGlvbnMgPSB7bGFuZzogb3B0aW9uc31cblx0XHRcdG9wdGlvbnMubGFuZyA9IG9wdGlvbnMubGFuZyB8fCAnZW5nJztcblxuXHRcdFx0am9iLl9zZW5kKCdyZWNvZ25pemUnLCB7IGltYWdlLCBvcHRpb25zLCB3b3JrZXJPcHRpb25zOiB0aGlzLndvcmtlck9wdGlvbnMgfSk7XG5cdFx0fSlcblx0fVxuXHRkZXRlY3QoaW1hZ2UsIG9wdGlvbnMgPSB7fSl7XG5cdFx0cmV0dXJuIHRoaXMuX2RlbGF5KGpvYiA9PiB7XG5cdFx0XHRqb2IuX3NlbmQoJ2RldGVjdCcsIHsgaW1hZ2UsIG9wdGlvbnMsIHdvcmtlck9wdGlvbnM6IHRoaXMud29ya2VyT3B0aW9ucyB9KTtcblx0XHR9KVxuXHR9XG5cblx0dGVybWluYXRlKCl7XG5cdFx0aWYodGhpcy53b3JrZXIpIGFkYXB0ZXIudGVybWluYXRlV29ya2VyKHRoaXMpO1xuXHRcdHRoaXMud29ya2VyID0gbnVsbDtcblx0XHR0aGlzLl9jdXJyZW50Sm9iID0gbnVsbDtcblx0XHR0aGlzLl9xdWV1ZSA9IFtdO1xuXHR9XG5cblx0X2RlbGF5KGZuKXtcblx0XHRpZighdGhpcy53b3JrZXIpIHRoaXMud29ya2VyID0gYWRhcHRlci5zcGF3bldvcmtlcih0aGlzLCB0aGlzLndvcmtlck9wdGlvbnMpO1xuXG5cdFx0dmFyIGpvYiA9IG5ldyBUZXNzZXJhY3RKb2IodGhpcyk7XG5cdFx0dGhpcy5fcXVldWUucHVzaChlID0+IHtcblx0XHRcdHRoaXMuX3F1ZXVlLnNoaWZ0KCk7XG5cdFx0XHR0aGlzLl9jdXJyZW50Sm9iID0gam9iO1xuXHRcdFx0Zm4oam9iKTtcblx0XHR9KTtcblx0XHRpZighdGhpcy5fY3VycmVudEpvYikgdGhpcy5fZGVxdWV1ZSgpO1xuXHRcdHJldHVybiBqb2I7XG5cdH1cblxuXHRfZGVxdWV1ZSgpe1xuXHRcdHRoaXMuX2N1cnJlbnRKb2IgPSBudWxsO1xuXHRcdGlmKHRoaXMuX3F1ZXVlLmxlbmd0aCl7XG5cdFx0XHR0aGlzLl9xdWV1ZVswXSgpO1xuXHRcdH1cblx0fVxuXG5cdF9yZWN2KHBhY2tldCl7XG4gICAgICAgIGlmKHBhY2tldC5zdGF0dXMgPT09ICdyZXNvbHZlJyAmJiBwYWNrZXQuYWN0aW9uID09PSAncmVjb2duaXplJyl7XG4gICAgICAgICAgICBwYWNrZXQuZGF0YSA9IGNpcmN1bGFyaXplKHBhY2tldC5kYXRhKTtcbiAgICAgICAgfVxuXG5cdFx0aWYodGhpcy5fY3VycmVudEpvYi5pZCA9PT0gcGFja2V0LmpvYklkKXtcblx0XHRcdHRoaXMuX2N1cnJlbnRKb2IuX2hhbmRsZShwYWNrZXQpXG5cdFx0fSBlbHNlIHtcblx0XHRcdGNvbnNvbGUud2FybignSm9iIElEICcgKyBwYWNrZXQuam9iSWQgKyAnIG5vdCBrbm93bi4nKVxuXHRcdH1cblx0fVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNyZWF0ZSgpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==