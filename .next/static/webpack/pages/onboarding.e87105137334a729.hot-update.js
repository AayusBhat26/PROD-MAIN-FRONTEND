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

/***/ "./src/pages/onboarding.jsx":
/*!**********************************!*\
  !*** ./src/pages/onboarding.jsx ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_common_Input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/common/Input */ \"./src/components/common/Input.jsx\");\n/* harmony import */ var _context_StateContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/context/StateContext */ \"./src/context/StateContext.jsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_spinners_PacmanLoader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-spinners/PacmanLoader */ \"./node_modules/react-spinners/PacmanLoader.js\");\n/* harmony import */ var react_spinners_PacmanLoader__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_spinners_PacmanLoader__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\n// import { PacmanLoader } from \"react-spinners\";\n\n\nfunction onboarding() {\n    _s();\n    let [color, setColor] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"#ffffff\");\n    const [{ userInfo  }] = (0,_context_StateContext__WEBPACK_IMPORTED_MODULE_2__.useStateProvider)();\n    const [name, setName] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)((userInfo === null || userInfo === void 0 ? void 0 : userInfo.name) || \"\");\n    const [about, setAbout] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    const [image, setImage] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"bg-black h-screen w-screen text-white flex flex-col items-center justify-center\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: \"text-4xl mb-10\",\n                children: \"Create Profile\"\n            }, void 0, false, {\n                fileName: \"D:\\\\Aayush Kumar Bhat\\\\WEB DEV\\\\main-projects\\\\Currently\\\\full-prod-mern\\\\client\\\\src\\\\pages\\\\onboarding.jsx\",\n                lineNumber: 15,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex items-center justify-center \",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_spinners_PacmanLoader__WEBPACK_IMPORTED_MODULE_4___default()), {\n                    color: color,\n                    size: 50\n                }, void 0, false, {\n                    fileName: \"D:\\\\Aayush Kumar Bhat\\\\WEB DEV\\\\main-projects\\\\Currently\\\\full-prod-mern\\\\client\\\\src\\\\pages\\\\onboarding.jsx\",\n                    lineNumber: 18,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"D:\\\\Aayush Kumar Bhat\\\\WEB DEV\\\\main-projects\\\\Currently\\\\full-prod-mern\\\\client\\\\src\\\\pages\\\\onboarding.jsx\",\n                lineNumber: 17,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex gap-6 mt-6\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex flex-col items-center justify-center mt-6 gap-6\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_common_Input__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                            name: \"Display Name\",\n                            state: name,\n                            setState: setName,\n                            label: true\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Aayush Kumar Bhat\\\\WEB DEV\\\\main-projects\\\\Currently\\\\full-prod-mern\\\\client\\\\src\\\\pages\\\\onboarding.jsx\",\n                            lineNumber: 24,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_common_Input__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                            name: \"About\",\n                            state: about,\n                            setState: setAbout,\n                            label: true\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Aayush Kumar Bhat\\\\WEB DEV\\\\main-projects\\\\Currently\\\\full-prod-mern\\\\client\\\\src\\\\pages\\\\onboarding.jsx\",\n                            lineNumber: 25,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\Aayush Kumar Bhat\\\\WEB DEV\\\\main-projects\\\\Currently\\\\full-prod-mern\\\\client\\\\src\\\\pages\\\\onboarding.jsx\",\n                    lineNumber: 22,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"D:\\\\Aayush Kumar Bhat\\\\WEB DEV\\\\main-projects\\\\Currently\\\\full-prod-mern\\\\client\\\\src\\\\pages\\\\onboarding.jsx\",\n                lineNumber: 21,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\Aayush Kumar Bhat\\\\WEB DEV\\\\main-projects\\\\Currently\\\\full-prod-mern\\\\client\\\\src\\\\pages\\\\onboarding.jsx\",\n        lineNumber: 14,\n        columnNumber: 5\n    }, this);\n}\n_s(onboarding, \"xWpJeMCNgvmq1W1uP64iyCI8ue0=\", false, function() {\n    return [\n        _context_StateContext__WEBPACK_IMPORTED_MODULE_2__.useStateProvider\n    ];\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (onboarding);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvb25ib2FyZGluZy5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBOEM7QUFDWTtBQUNoQztBQUMxQixpREFBaUQ7QUFDRDtBQUNPO0FBQ3ZELFNBQVNNLGFBQWE7O0lBQ3BCLElBQUksQ0FBQ0MsT0FBT0MsU0FBUyxHQUFHTCwrQ0FBUUEsQ0FBQztJQUNqQyxNQUFNLENBQUMsRUFBQ00sU0FBUSxFQUFDLENBQUMsR0FBRVIsdUVBQWdCQTtJQUNwQyxNQUFNLENBQUNTLE1BQU1DLFFBQVEsR0FBR1IsK0NBQVFBLENBQUNNLENBQUFBLHFCQUFBQSxzQkFBQUEsS0FBQUEsSUFBQUEsU0FBVUMsSUFBSSxLQUFHO0lBQ2xELE1BQU0sQ0FBQ0UsT0FBT0MsU0FBUyxHQUFHViwrQ0FBUUEsQ0FBQztJQUNuQyxNQUFNLENBQUNXLE9BQU9DLFNBQVMsR0FBQ1osK0NBQVFBLENBQUM7SUFDakMscUJBQ0UsOERBQUNhO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDQztnQkFBR0QsV0FBVTswQkFBaUI7Ozs7OzswQkFFL0IsOERBQUNEO2dCQUFJQyxXQUFVOzBCQUNiLDRFQUFDWixvRUFBWUE7b0JBQUNFLE9BQU9BO29CQUFPWSxNQUFNOzs7Ozs7Ozs7OzswQkFHcEMsOERBQUNIO2dCQUFJQyxXQUFVOzBCQUNiLDRFQUFDRDtvQkFBSUMsV0FBVTs7c0NBRWIsOERBQUNqQixnRUFBS0E7NEJBQUNVLE1BQUs7NEJBQWVVLE9BQU9WOzRCQUFNVyxVQUFVVjs0QkFBU1csS0FBSzs7Ozs7O3NDQUNoRSw4REFBQ3RCLGdFQUFLQTs0QkFBQ1UsTUFBSzs0QkFBUVUsT0FBT1I7NEJBQU9TLFVBQVVSOzRCQUFVUyxLQUFLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUtyRTtHQXZCU2hCOztRQUVhTCxtRUFBZ0JBOzs7QUF1QnRDLCtEQUFlSyxVQUFVQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9vbmJvYXJkaW5nLmpzeD84Mjg1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJbnB1dCBmcm9tIFwiQC9jb21wb25lbnRzL2NvbW1vbi9JbnB1dFwiO1xuaW1wb3J0IHsgdXNlU3RhdGVQcm92aWRlciB9IGZyb20gXCJAL2NvbnRleHQvU3RhdGVDb250ZXh0XCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG4vLyBpbXBvcnQgeyBQYWNtYW5Mb2FkZXIgfSBmcm9tIFwicmVhY3Qtc3Bpbm5lcnNcIjtcbmltcG9ydCB7IHVzZVN0YXRlLCBDU1NQcm9wZXJ0aWVzIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUGFjbWFuTG9hZGVyIGZyb20gXCJyZWFjdC1zcGlubmVycy9QYWNtYW5Mb2FkZXJcIjtcbmZ1bmN0aW9uIG9uYm9hcmRpbmcoKSB7XG4gIGxldCBbY29sb3IsIHNldENvbG9yXSA9IHVzZVN0YXRlKFwiI2ZmZmZmZlwiKTtcbiAgY29uc3QgW3t1c2VySW5mb31dPSB1c2VTdGF0ZVByb3ZpZGVyKCk7XG4gIGNvbnN0IFtuYW1lLCBzZXROYW1lXSA9IHVzZVN0YXRlKHVzZXJJbmZvPy5uYW1lIHx8XCJcIik7XG4gIGNvbnN0IFthYm91dCwgc2V0QWJvdXRdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtpbWFnZSAsc2V0SW1hZ2VdPXVzZVN0YXRlKFwiXCIpXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJiZy1ibGFjayBoLXNjcmVlbiB3LXNjcmVlbiB0ZXh0LXdoaXRlIGZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCI+XG4gICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC00eGwgbWItMTBcIj5DcmVhdGUgUHJvZmlsZTwvaDI+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgXCI+XG4gICAgICAgIDxQYWNtYW5Mb2FkZXIgY29sb3I9e2NvbG9yfSBzaXplPXs1MH0gLz5cbiAgICAgIDwvZGl2PlxuICAgICAgey8qIFBST0QgKi99XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZ2FwLTYgbXQtNlwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIG10LTYgZ2FwLTZcIj5cbiAgICAgICAgICB7Lyoge3VzZXJJbmZvLm5hbWUgfSAqL31cbiAgICAgICAgICA8SW5wdXQgbmFtZT1cIkRpc3BsYXkgTmFtZVwiIHN0YXRlPXtuYW1lfSBzZXRTdGF0ZT17c2V0TmFtZX0gbGFiZWwgLz5cbiAgICAgICAgICA8SW5wdXQgbmFtZT1cIkFib3V0XCIgc3RhdGU9e2Fib3V0fSBzZXRTdGF0ZT17c2V0QWJvdXR9IGxhYmVsIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IG9uYm9hcmRpbmc7XG4iXSwibmFtZXMiOlsiSW5wdXQiLCJ1c2VTdGF0ZVByb3ZpZGVyIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsIkNTU1Byb3BlcnRpZXMiLCJQYWNtYW5Mb2FkZXIiLCJvbmJvYXJkaW5nIiwiY29sb3IiLCJzZXRDb2xvciIsInVzZXJJbmZvIiwibmFtZSIsInNldE5hbWUiLCJhYm91dCIsInNldEFib3V0IiwiaW1hZ2UiLCJzZXRJbWFnZSIsImRpdiIsImNsYXNzTmFtZSIsImgyIiwic2l6ZSIsInN0YXRlIiwic2V0U3RhdGUiLCJsYWJlbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/onboarding.jsx\n"));

/***/ })

});