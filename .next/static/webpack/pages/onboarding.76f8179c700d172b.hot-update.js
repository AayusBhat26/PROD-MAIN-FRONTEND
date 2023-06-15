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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_common_Avatar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/common/Avatar */ \"./src/components/common/Avatar.jsx\");\n/* harmony import */ var _components_common_Input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/common/Input */ \"./src/components/common/Input.jsx\");\n/* harmony import */ var _context_StateContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/context/StateContext */ \"./src/context/StateContext.jsx\");\n/* harmony import */ var _utils_ApiRoutes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/utils/ApiRoutes */ \"./src/utils/ApiRoutes.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_spinners_PacmanLoader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-spinners/PacmanLoader */ \"./node_modules/react-spinners/PacmanLoader.js\");\n/* harmony import */ var react_spinners_PacmanLoader__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_spinners_PacmanLoader__WEBPACK_IMPORTED_MODULE_7__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n// import { PacmanLoader } from \"react-spinners\";\n\n\nfunction onboarding() {\n    _s();\n    let [color, setColor] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(\"#ffffff\");\n    const [{ userInfo  }] = (0,_context_StateContext__WEBPACK_IMPORTED_MODULE_3__.useStateProvider)();\n    const [name, setName] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)((userInfo === null || userInfo === void 0 ? void 0 : userInfo.name) || \"\");\n    const [about, setAbout] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(\"\");\n    const [image, setImage] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(\"/default_avatar.png\");\n    const onBoardUserHandler = async ()=>{\n        if (validateDetails()) {\n            const email = userInfo.email;\n            try {\n                const { data  } = axios__WEBPACK_IMPORTED_MODULE_6__[\"default\"].post(_utils_ApiRoutes__WEBPACK_IMPORTED_MODULE_4__.ONBOARD_USER_ROUTE, {\n                    email,\n                    name,\n                    about,\n                    image\n                });\n                if (data.status) {}\n            } catch (error) {}\n        }\n    };\n    const validateDetails = ()=>{\n        if (name.length < 3) {\n            return false;\n        }\n        return true;\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"bg-black h-screen w-screen text-white flex flex-col items-center justify-center\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"font-extrabold text-4xl mb-5 \",\n                    children: \"PROD\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\Aayush Kumar Bhat\\\\WEB DEV\\\\main-projects\\\\Currently\\\\full-prod-mern\\\\client\\\\src\\\\pages\\\\onboarding.jsx\",\n                    lineNumber: 43,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    className: \"text-xl mb-10\",\n                    children: \"Add More details\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\Aayush Kumar Bhat\\\\WEB DEV\\\\main-projects\\\\Currently\\\\full-prod-mern\\\\client\\\\src\\\\pages\\\\onboarding.jsx\",\n                    lineNumber: 44,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex items-center justify-center \",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_spinners_PacmanLoader__WEBPACK_IMPORTED_MODULE_7___default()), {\n                        color: color,\n                        size: 50\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Aayush Kumar Bhat\\\\WEB DEV\\\\main-projects\\\\Currently\\\\full-prod-mern\\\\client\\\\src\\\\pages\\\\onboarding.jsx\",\n                        lineNumber: 47,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"D:\\\\Aayush Kumar Bhat\\\\WEB DEV\\\\main-projects\\\\Currently\\\\full-prod-mern\\\\client\\\\src\\\\pages\\\\onboarding.jsx\",\n                    lineNumber: 46,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex gap-6 \",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-col items-center justify-center mt-6 gap-6 \",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_common_Input__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                name: \"Display Name\",\n                                state: name,\n                                setState: setName,\n                                label: true\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Aayush Kumar Bhat\\\\WEB DEV\\\\main-projects\\\\Currently\\\\full-prod-mern\\\\client\\\\src\\\\pages\\\\onboarding.jsx\",\n                                lineNumber: 53,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_common_Input__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                name: \"About\",\n                                state: about,\n                                setState: setAbout,\n                                label: true\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Aayush Kumar Bhat\\\\WEB DEV\\\\main-projects\\\\Currently\\\\full-prod-mern\\\\client\\\\src\\\\pages\\\\onboarding.jsx\",\n                                lineNumber: 54,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex item-center justify-center \",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    className: \"flex items-center justify-center gap-6 bg-search-input-container-background p-4 rounded-lg hover:bg-blue-500 font-semibold\",\n                                    onClick: onBoardUserHandler,\n                                    children: [\n                                        \" \",\n                                        about,\n                                        \"Create Profile\"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"D:\\\\Aayush Kumar Bhat\\\\WEB DEV\\\\main-projects\\\\Currently\\\\full-prod-mern\\\\client\\\\src\\\\pages\\\\onboarding.jsx\",\n                                    lineNumber: 56,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Aayush Kumar Bhat\\\\WEB DEV\\\\main-projects\\\\Currently\\\\full-prod-mern\\\\client\\\\src\\\\pages\\\\onboarding.jsx\",\n                                lineNumber: 55,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\Aayush Kumar Bhat\\\\WEB DEV\\\\main-projects\\\\Currently\\\\full-prod-mern\\\\client\\\\src\\\\pages\\\\onboarding.jsx\",\n                        lineNumber: 51,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"D:\\\\Aayush Kumar Bhat\\\\WEB DEV\\\\main-projects\\\\Currently\\\\full-prod-mern\\\\client\\\\src\\\\pages\\\\onboarding.jsx\",\n                    lineNumber: 50,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"mt-4 text-white\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_common_Avatar__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                        type: \"xl\",\n                        image: image,\n                        setImage: setImage\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Aayush Kumar Bhat\\\\WEB DEV\\\\main-projects\\\\Currently\\\\full-prod-mern\\\\client\\\\src\\\\pages\\\\onboarding.jsx\",\n                        lineNumber: 64,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"D:\\\\Aayush Kumar Bhat\\\\WEB DEV\\\\main-projects\\\\Currently\\\\full-prod-mern\\\\client\\\\src\\\\pages\\\\onboarding.jsx\",\n                    lineNumber: 63,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"D:\\\\Aayush Kumar Bhat\\\\WEB DEV\\\\main-projects\\\\Currently\\\\full-prod-mern\\\\client\\\\src\\\\pages\\\\onboarding.jsx\",\n            lineNumber: 42,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n}\n_s(onboarding, \"HmhPaZvoDTnnwQX3gJdzgajZN44=\", false, function() {\n    return [\n        _context_StateContext__WEBPACK_IMPORTED_MODULE_3__.useStateProvider\n    ];\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (onboarding);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvb25ib2FyZGluZy5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBZ0Q7QUFDRjtBQUNZO0FBQ0g7QUFDN0I7QUFDQTtBQUMxQixpREFBaUQ7QUFDRDtBQUNPO0FBQ3ZELFNBQVNTLGFBQWE7O0lBQ3BCLElBQUksQ0FBQ0MsT0FBT0MsU0FBUyxHQUFHTCwrQ0FBUUEsQ0FBQztJQUNqQyxNQUFNLENBQUMsRUFBQ00sU0FBUSxFQUFDLENBQUMsR0FBRVYsdUVBQWdCQTtJQUNwQyxNQUFNLENBQUNXLE1BQU1DLFFBQVEsR0FBR1IsK0NBQVFBLENBQUNNLENBQUFBLHFCQUFBQSxzQkFBQUEsS0FBQUEsSUFBQUEsU0FBVUMsSUFBSSxLQUFHO0lBQ2xELE1BQU0sQ0FBQ0UsT0FBT0MsU0FBUyxHQUFHViwrQ0FBUUEsQ0FBQztJQUNuQyxNQUFNLENBQUNXLE9BQU9DLFNBQVMsR0FBR1osK0NBQVFBLENBQUM7SUFDbkMsTUFBTWEscUJBQXFCLFVBQVk7UUFDckMsSUFBR0MsbUJBQWtCO1lBQ25CLE1BQU1DLFFBQVFULFNBQVNTLEtBQUs7WUFDNUIsSUFBSTtnQkFDRixNQUFNLEVBQUNDLEtBQUksRUFBQyxHQUFHbEIsa0RBQVUsQ0FBQ0QsZ0VBQWtCQSxFQUFFO29CQUM1Q2tCO29CQUNBUjtvQkFDQUU7b0JBQ0FFO2dCQUNGO2dCQUNBLElBQUdLLEtBQUtFLE1BQU0sRUFBQyxDQUVmLENBQUM7WUFDSCxFQUFFLE9BQU9DLE9BQU8sQ0FFaEI7UUFDRixDQUFDO0lBQ0g7SUFDQSxNQUFNTCxrQkFBa0IsSUFBSTtRQUMxQixJQUFHUCxLQUFLYSxNQUFNLEdBQUcsR0FBRTtZQUNqQixPQUFPLEtBQUs7UUFDZCxDQUFDO1FBQ0QsT0FBTyxJQUFJO0lBQ2I7SUFDQSxxQkFDRTtrQkFDRSw0RUFBQ0M7WUFBSUMsV0FBVTs7OEJBQ2IsOERBQUNDO29CQUFHRCxXQUFVOzhCQUFnQzs7Ozs7OzhCQUM5Qyw4REFBQ0U7b0JBQUdGLFdBQVU7OEJBQWdCOzs7Ozs7OEJBRTlCLDhEQUFDRDtvQkFBSUMsV0FBVTs4QkFDYiw0RUFBQ3BCLG9FQUFZQTt3QkFBQ0UsT0FBT0E7d0JBQU9xQixNQUFNOzs7Ozs7Ozs7Ozs4QkFHcEMsOERBQUNKO29CQUFJQyxXQUFVOzhCQUNiLDRFQUFDRDt3QkFBSUMsV0FBVTs7MENBRWIsOERBQUMzQixnRUFBS0E7Z0NBQUNZLE1BQUs7Z0NBQWVtQixPQUFPbkI7Z0NBQU1vQixVQUFVbkI7Z0NBQVNvQixLQUFLOzs7Ozs7MENBQ2hFLDhEQUFDakMsZ0VBQUtBO2dDQUFDWSxNQUFLO2dDQUFRbUIsT0FBT2pCO2dDQUFPa0IsVUFBVWpCO2dDQUFVa0IsS0FBSzs7Ozs7OzBDQUMzRCw4REFBQ1A7Z0NBQUlDLFdBQVU7MENBQ2IsNEVBQUNPO29DQUFPUCxXQUFVO29DQUE2SFEsU0FBU2pCOzt3Q0FBb0I7d0NBQUVKO3dDQUFNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs4QkFPMUwsOERBQUNZO29CQUFJQyxXQUFVOzhCQUNiLDRFQUFDNUIsaUVBQU1BO3dCQUFDcUMsTUFBTTt3QkFBTXBCLE9BQU9BO3dCQUFPQyxVQUFVQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS3REO0dBM0RTVDs7UUFFYVAsbUVBQWdCQTs7O0FBMkR0QywrREFBZU8sVUFBVUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvb25ib2FyZGluZy5qc3g/ODI4NSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQXZhdGFyIGZyb20gXCJAL2NvbXBvbmVudHMvY29tbW9uL0F2YXRhclwiO1xuaW1wb3J0IElucHV0IGZyb20gXCJAL2NvbXBvbmVudHMvY29tbW9uL0lucHV0XCI7XG5pbXBvcnQgeyB1c2VTdGF0ZVByb3ZpZGVyIH0gZnJvbSBcIkAvY29udGV4dC9TdGF0ZUNvbnRleHRcIjtcbmltcG9ydCB7IE9OQk9BUkRfVVNFUl9ST1VURSB9IGZyb20gXCJAL3V0aWxzL0FwaVJvdXRlc1wiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuLy8gaW1wb3J0IHsgUGFjbWFuTG9hZGVyIH0gZnJvbSBcInJlYWN0LXNwaW5uZXJzXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSwgQ1NTUHJvcGVydGllcyB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFBhY21hbkxvYWRlciBmcm9tIFwicmVhY3Qtc3Bpbm5lcnMvUGFjbWFuTG9hZGVyXCI7XG5mdW5jdGlvbiBvbmJvYXJkaW5nKCkge1xuICBsZXQgW2NvbG9yLCBzZXRDb2xvcl0gPSB1c2VTdGF0ZShcIiNmZmZmZmZcIik7XG4gIGNvbnN0IFt7dXNlckluZm99XT0gdXNlU3RhdGVQcm92aWRlcigpO1xuICBjb25zdCBbbmFtZSwgc2V0TmFtZV0gPSB1c2VTdGF0ZSh1c2VySW5mbz8ubmFtZSB8fFwiXCIpO1xuICBjb25zdCBbYWJvdXQsIHNldEFib3V0XSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbaW1hZ2UsIHNldEltYWdlXSA9IHVzZVN0YXRlKFwiL2RlZmF1bHRfYXZhdGFyLnBuZ1wiKTtcbiAgY29uc3Qgb25Cb2FyZFVzZXJIYW5kbGVyID0gYXN5bmMgKCkgPT4ge1xuICAgIGlmKHZhbGlkYXRlRGV0YWlscygpKXtcbiAgICAgIGNvbnN0IGVtYWlsID0gdXNlckluZm8uZW1haWw7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCB7ZGF0YX0gPSBheGlvcy5wb3N0KE9OQk9BUkRfVVNFUl9ST1VURSwge1xuICAgICAgICAgIGVtYWlsLCBcbiAgICAgICAgICBuYW1lLCBcbiAgICAgICAgICBhYm91dCwgXG4gICAgICAgICAgaW1hZ2VcbiAgICAgICAgfSlcbiAgICAgICAgaWYoZGF0YS5zdGF0dXMpe1xuICAgICAgICAgIFxuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBcbiAgICAgIH1cbiAgICB9XG4gIH07XG4gIGNvbnN0IHZhbGlkYXRlRGV0YWlscyA9ICgpPT57XG4gICAgaWYobmFtZS5sZW5ndGggPCAzKXtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1ibGFjayBoLXNjcmVlbiB3LXNjcmVlbiB0ZXh0LXdoaXRlIGZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCI+XG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJmb250LWV4dHJhYm9sZCB0ZXh0LTR4bCBtYi01IFwiPlBST0Q8L2gxPlxuICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC14bCBtYi0xMFwiPkFkZCBNb3JlIGRldGFpbHM8L2gyPlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgXCI+XG4gICAgICAgICAgPFBhY21hbkxvYWRlciBjb2xvcj17Y29sb3J9IHNpemU9ezUwfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgey8qIFBST0QgKi99XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBnYXAtNiBcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIG10LTYgZ2FwLTYgXCI+XG4gICAgICAgICAgICB7Lyoge3VzZXJJbmZvLm5hbWUgfSAqL31cbiAgICAgICAgICAgIDxJbnB1dCBuYW1lPVwiRGlzcGxheSBOYW1lXCIgc3RhdGU9e25hbWV9IHNldFN0YXRlPXtzZXROYW1lfSBsYWJlbCAvPlxuICAgICAgICAgICAgPElucHV0IG5hbWU9XCJBYm91dFwiIHN0YXRlPXthYm91dH0gc2V0U3RhdGU9e3NldEFib3V0fSBsYWJlbCAvPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW0tY2VudGVyIGp1c3RpZnktY2VudGVyIFwiPlxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGdhcC02IGJnLXNlYXJjaC1pbnB1dC1jb250YWluZXItYmFja2dyb3VuZCBwLTQgcm91bmRlZC1sZyBob3ZlcjpiZy1ibHVlLTUwMCBmb250LXNlbWlib2xkXCIgb25DbGljaz17b25Cb2FyZFVzZXJIYW5kbGVyfT4ge2Fib3V0fVxuICAgICAgICAgICAgICAgIENyZWF0ZSBQcm9maWxlXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgey8qIDxkaXY+ZGFzZGFzZDwvZGl2PiAqL31cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtNCB0ZXh0LXdoaXRlXCI+XG4gICAgICAgICAgPEF2YXRhciB0eXBlPXtcInhsXCJ9IGltYWdlPXtpbWFnZX0gc2V0SW1hZ2U9e3NldEltYWdlfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBvbmJvYXJkaW5nO1xuIl0sIm5hbWVzIjpbIkF2YXRhciIsIklucHV0IiwidXNlU3RhdGVQcm92aWRlciIsIk9OQk9BUkRfVVNFUl9ST1VURSIsImF4aW9zIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsIkNTU1Byb3BlcnRpZXMiLCJQYWNtYW5Mb2FkZXIiLCJvbmJvYXJkaW5nIiwiY29sb3IiLCJzZXRDb2xvciIsInVzZXJJbmZvIiwibmFtZSIsInNldE5hbWUiLCJhYm91dCIsInNldEFib3V0IiwiaW1hZ2UiLCJzZXRJbWFnZSIsIm9uQm9hcmRVc2VySGFuZGxlciIsInZhbGlkYXRlRGV0YWlscyIsImVtYWlsIiwiZGF0YSIsInBvc3QiLCJzdGF0dXMiLCJlcnJvciIsImxlbmd0aCIsImRpdiIsImNsYXNzTmFtZSIsImgxIiwiaDIiLCJzaXplIiwic3RhdGUiLCJzZXRTdGF0ZSIsImxhYmVsIiwiYnV0dG9uIiwib25DbGljayIsInR5cGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/onboarding.jsx\n"));

/***/ })

});