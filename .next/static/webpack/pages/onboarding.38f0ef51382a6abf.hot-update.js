"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/onboarding",{

/***/ "./src/components/common/Input.jsx":
/*!*****************************************!*\
  !*** ./src/components/common/Input.jsx ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction Input(param) {\n    let { name , state , setState , label =false  } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex  w-screen  items-center justify-center\",\n        children: [\n            label && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                htmlFor: name,\n                className: \"text-white text-lg px-1\",\n                children: name\n            }, void 0, false, {\n                fileName: \"D:\\\\Aayush Kumar Bhat\\\\WEB DEV\\\\main-projects\\\\Currently\\\\full-prod-mern\\\\client\\\\src\\\\components\\\\common\\\\Input.jsx\",\n                lineNumber: 7,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    type: \"text\",\n                    name: name,\n                    value: state,\n                    onChange: (e)=>setState(e.target.value),\n                    className: \"bg-input-background text-start focus:outline-none text-white h-10 rounded-lg px-5 py-4 w-full\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\Aayush Kumar Bhat\\\\WEB DEV\\\\main-projects\\\\Currently\\\\full-prod-mern\\\\client\\\\src\\\\components\\\\common\\\\Input.jsx\",\n                    lineNumber: 12,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"D:\\\\Aayush Kumar Bhat\\\\WEB DEV\\\\main-projects\\\\Currently\\\\full-prod-mern\\\\client\\\\src\\\\components\\\\common\\\\Input.jsx\",\n                lineNumber: 11,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\Aayush Kumar Bhat\\\\WEB DEV\\\\main-projects\\\\Currently\\\\full-prod-mern\\\\client\\\\src\\\\components\\\\common\\\\Input.jsx\",\n        lineNumber: 5,\n        columnNumber: 5\n    }, this);\n}\n_c = Input;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Input);\nvar _c;\n$RefreshReg$(_c, \"Input\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9jb21tb24vSW5wdXQuanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUEwQjtBQUUxQixTQUFTQyxNQUFNLEtBQXNDLEVBQUU7UUFBeEMsRUFBRUMsS0FBSSxFQUFFQyxNQUFLLEVBQUVDLFNBQVEsRUFBRUMsT0FBTSxLQUFLLEdBQUUsR0FBdEM7SUFDYixxQkFDRSw4REFBQ0M7UUFBSUMsV0FBVTs7WUFDWkYsdUJBQ0MsOERBQUNBO2dCQUFNRyxTQUFTTjtnQkFBTUssV0FBVTswQkFDN0JMOzs7Ozs7MEJBR0wsOERBQUNJOzBCQUNDLDRFQUFDRztvQkFDQ0MsTUFBSztvQkFDTFIsTUFBTUE7b0JBQ05TLE9BQU9SO29CQUNQUyxVQUFVLENBQUNDLElBQU1ULFNBQVNTLEVBQUVDLE1BQU0sQ0FBQ0gsS0FBSztvQkFDeENKLFdBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS3BCO0tBbkJTTjtBQXFCVCwrREFBZUEsS0FBS0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9jb21tb24vSW5wdXQuanN4Pzc5NDYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5mdW5jdGlvbiBJbnB1dCh7IG5hbWUsIHN0YXRlLCBzZXRTdGF0ZSwgbGFiZWw9ZmFsc2UgfSkge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCAgdy1zY3JlZW4gIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAge2xhYmVsICYmIChcbiAgICAgICAgPGxhYmVsIGh0bWxGb3I9e25hbWV9IGNsYXNzTmFtZT1cInRleHQtd2hpdGUgdGV4dC1sZyBweC0xXCI+XG4gICAgICAgICAge25hbWV9XG4gICAgICAgIDwvbGFiZWw+XG4gICAgICApfVxuICAgICAgPGRpdj5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgIG5hbWU9e25hbWV9XG4gICAgICAgICAgdmFsdWU9e3N0YXRlfVxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0U3RhdGUoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgIGNsYXNzTmFtZT1cImJnLWlucHV0LWJhY2tncm91bmQgdGV4dC1zdGFydCBmb2N1czpvdXRsaW5lLW5vbmUgdGV4dC13aGl0ZSBoLTEwIHJvdW5kZWQtbGcgcHgtNSBweS00IHctZnVsbFwiXG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgSW5wdXQ7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJJbnB1dCIsIm5hbWUiLCJzdGF0ZSIsInNldFN0YXRlIiwibGFiZWwiLCJkaXYiLCJjbGFzc05hbWUiLCJodG1sRm9yIiwiaW5wdXQiLCJ0eXBlIiwidmFsdWUiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/common/Input.jsx\n"));

/***/ })

});