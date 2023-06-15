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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_common_Avatar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/common/Avatar */ \"./src/components/common/Avatar.jsx\");\n/* harmony import */ var _components_common_Input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/common/Input */ \"./src/components/common/Input.jsx\");\n/* harmony import */ var _context_StateContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/context/StateContext */ \"./src/context/StateContext.jsx\");\n/* harmony import */ var _utils_ApiRoutes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/utils/ApiRoutes */ \"./src/utils/ApiRoutes.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react_spinners_PacmanLoader__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-spinners/PacmanLoader */ \"./node_modules/react-spinners/PacmanLoader.js\");\n/* harmony import */ var react_spinners_PacmanLoader__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_spinners_PacmanLoader__WEBPACK_IMPORTED_MODULE_8__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n// import { PacmanLoader } from \"react-spinners\";\n\n\nfunction onboarding() {\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();\n    let [color, setColor] = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(\"#ffffff\");\n    const [{ userInfo , newUser  }] = (0,_context_StateContext__WEBPACK_IMPORTED_MODULE_3__.useStateProvider)();\n    const [name, setName] = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)((userInfo === null || userInfo === void 0 ? void 0 : userInfo.name) || \"\");\n    const [about, setAbout] = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(\"\");\n    const [image, setImage] = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(\"/default_avatar.png\");\n    (0,react__WEBPACK_IMPORTED_MODULE_6__.useEffect)(()=>{\n        if (!newUser && !userInfo.email) router.push(\"/login\");\n        else if (!newUser && (userInfo === null || userInfo === void 0 ? void 0 : userInfo.email)) router.push(\"/\");\n    }, [\n        newUser,\n        userInfo,\n        router\n    ]);\n    const onBoardUserHandler = async ()=>{\n        if (validateDetails()) {\n            const email = userInfo.email;\n            try {\n                const { data  } = axios__WEBPACK_IMPORTED_MODULE_7__[\"default\"].post(_utils_ApiRoutes__WEBPACK_IMPORTED_MODULE_4__.ONBOARD_USER_ROUTE, {\n                    email,\n                    name,\n                    about,\n                    image\n                });\n                if (data.status) {\n                    dispatch({\n                        type: reducerCases.SET_NEW_USER,\n                        newUser: false\n                    });\n                    dispatch({\n                        type: reducerCases.SET_USER_INFO,\n                        userInfo: {\n                            name,\n                            email,\n                            profileImage: image,\n                            status: about\n                        }\n                    });\n                    router.push(\"/\");\n                }\n            } catch (error) {}\n        }\n    };\n    const validateDetails = ()=>{\n        if (name.length < 3) {\n            return false;\n        }\n        return true;\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"bg-black h-screen w-screen text-white flex flex-col items-center justify-center\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"font-extrabold text-4xl mb-5 \",\n                    children: \"PROD\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\Aayush Kumar Bhat\\\\WEB DEV\\\\main-projects\\\\Currently\\\\full-prod-mern\\\\client\\\\src\\\\pages\\\\onboarding.jsx\",\n                    lineNumber: 59,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    className: \"text-xl mb-10\",\n                    children: \"Add More details\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\Aayush Kumar Bhat\\\\WEB DEV\\\\main-projects\\\\Currently\\\\full-prod-mern\\\\client\\\\src\\\\pages\\\\onboarding.jsx\",\n                    lineNumber: 60,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex items-center justify-center \",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_spinners_PacmanLoader__WEBPACK_IMPORTED_MODULE_8___default()), {\n                        color: color,\n                        size: 50\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Aayush Kumar Bhat\\\\WEB DEV\\\\main-projects\\\\Currently\\\\full-prod-mern\\\\client\\\\src\\\\pages\\\\onboarding.jsx\",\n                        lineNumber: 63,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"D:\\\\Aayush Kumar Bhat\\\\WEB DEV\\\\main-projects\\\\Currently\\\\full-prod-mern\\\\client\\\\src\\\\pages\\\\onboarding.jsx\",\n                    lineNumber: 62,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex gap-6 \",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-col items-center justify-center mt-6 gap-6 \",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_common_Input__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                name: \"Display Name\",\n                                state: name,\n                                setState: setName,\n                                label: true\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Aayush Kumar Bhat\\\\WEB DEV\\\\main-projects\\\\Currently\\\\full-prod-mern\\\\client\\\\src\\\\pages\\\\onboarding.jsx\",\n                                lineNumber: 69,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_common_Input__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                name: \"About\",\n                                state: about,\n                                setState: setAbout,\n                                label: true\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Aayush Kumar Bhat\\\\WEB DEV\\\\main-projects\\\\Currently\\\\full-prod-mern\\\\client\\\\src\\\\pages\\\\onboarding.jsx\",\n                                lineNumber: 70,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex item-center justify-center \",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    className: \"flex items-center justify-center gap-6 bg-search-input-container-background p-4 rounded-lg hover:bg-blue-500 font-semibold\",\n                                    onClick: onBoardUserHandler,\n                                    children: \"Create Profile\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\Aayush Kumar Bhat\\\\WEB DEV\\\\main-projects\\\\Currently\\\\full-prod-mern\\\\client\\\\src\\\\pages\\\\onboarding.jsx\",\n                                    lineNumber: 72,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Aayush Kumar Bhat\\\\WEB DEV\\\\main-projects\\\\Currently\\\\full-prod-mern\\\\client\\\\src\\\\pages\\\\onboarding.jsx\",\n                                lineNumber: 71,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\Aayush Kumar Bhat\\\\WEB DEV\\\\main-projects\\\\Currently\\\\full-prod-mern\\\\client\\\\src\\\\pages\\\\onboarding.jsx\",\n                        lineNumber: 67,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"D:\\\\Aayush Kumar Bhat\\\\WEB DEV\\\\main-projects\\\\Currently\\\\full-prod-mern\\\\client\\\\src\\\\pages\\\\onboarding.jsx\",\n                    lineNumber: 66,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"mt-4 text-white\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_common_Avatar__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                        type: \"xl\",\n                        image: image,\n                        setImage: setImage\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Aayush Kumar Bhat\\\\WEB DEV\\\\main-projects\\\\Currently\\\\full-prod-mern\\\\client\\\\src\\\\pages\\\\onboarding.jsx\",\n                        lineNumber: 80,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"D:\\\\Aayush Kumar Bhat\\\\WEB DEV\\\\main-projects\\\\Currently\\\\full-prod-mern\\\\client\\\\src\\\\pages\\\\onboarding.jsx\",\n                    lineNumber: 79,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"D:\\\\Aayush Kumar Bhat\\\\WEB DEV\\\\main-projects\\\\Currently\\\\full-prod-mern\\\\client\\\\src\\\\pages\\\\onboarding.jsx\",\n            lineNumber: 58,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n}\n_s(onboarding, \"eHFdfm8kGnk0oZZvikYfLNuKk4w=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter,\n        _context_StateContext__WEBPACK_IMPORTED_MODULE_3__.useStateProvider\n    ];\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (onboarding);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QU1WLE9BQU9BO3dCQUFPQyxVQUFVQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS3REO0dBMUVTWDs7UUFDUU4sa0RBQVNBO1FBRUtILG1FQUFnQkE7OztBQXlFL0MsK0RBQWVTLFVBQVVBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL29uYm9hcmRpbmcuanN4PzgyODUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEF2YXRhciBmcm9tIFwiQC9jb21wb25lbnRzL2NvbW1vbi9BdmF0YXJcIjtcbmltcG9ydCBJbnB1dCBmcm9tIFwiQC9jb21wb25lbnRzL2NvbW1vbi9JbnB1dFwiO1xuaW1wb3J0IHsgdXNlU3RhdGVQcm92aWRlciB9IGZyb20gXCJAL2NvbnRleHQvU3RhdGVDb250ZXh0XCI7XG5pbXBvcnQgeyBPTkJPQVJEX1VTRVJfUk9VVEUgfSBmcm9tIFwiQC91dGlscy9BcGlSb3V0ZXNcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuLy8gaW1wb3J0IHsgUGFjbWFuTG9hZGVyIH0gZnJvbSBcInJlYWN0LXNwaW5uZXJzXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSwgQ1NTUHJvcGVydGllcyB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFBhY21hbkxvYWRlciBmcm9tIFwicmVhY3Qtc3Bpbm5lcnMvUGFjbWFuTG9hZGVyXCI7XG5mdW5jdGlvbiBvbmJvYXJkaW5nKCkge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgbGV0IFtjb2xvciwgc2V0Q29sb3JdID0gdXNlU3RhdGUoXCIjZmZmZmZmXCIpO1xuICBjb25zdCBbe3VzZXJJbmZvLCBuZXdVc2VyfV09IHVzZVN0YXRlUHJvdmlkZXIoKTtcbiAgY29uc3QgW25hbWUsIHNldE5hbWVdID0gdXNlU3RhdGUodXNlckluZm8/Lm5hbWUgfHxcIlwiKTtcbiAgY29uc3QgW2Fib3V0LCBzZXRBYm91dF0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW2ltYWdlLCBzZXRJbWFnZV0gPSB1c2VTdGF0ZShcIi9kZWZhdWx0X2F2YXRhci5wbmdcIik7XG4gIHVzZUVmZmVjdCgoKT0+e1xuICAgIGlmKCFuZXdVc2VyICYmICF1c2VySW5mby5lbWFpbCkgcm91dGVyLnB1c2goXCIvbG9naW5cIilcbiAgICBlbHNlIGlmKCFuZXdVc2VyICYmIHVzZXJJbmZvPy5lbWFpbCkgcm91dGVyLnB1c2goXCIvXCIpXG4gIH0sIFtuZXdVc2VyLCB1c2VySW5mbywgcm91dGVyXSlcbiAgY29uc3Qgb25Cb2FyZFVzZXJIYW5kbGVyID0gYXN5bmMgKCkgPT4ge1xuICAgIGlmKHZhbGlkYXRlRGV0YWlscygpKXtcbiAgICAgIGNvbnN0IGVtYWlsID0gdXNlckluZm8uZW1haWw7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCB7ZGF0YX0gPSBheGlvcy5wb3N0KE9OQk9BUkRfVVNFUl9ST1VURSwge1xuICAgICAgICAgIGVtYWlsLCBcbiAgICAgICAgICBuYW1lLCBcbiAgICAgICAgICBhYm91dCwgXG4gICAgICAgICAgaW1hZ2VcbiAgICAgICAgfSlcbiAgICAgICAgaWYoZGF0YS5zdGF0dXMpe1xuICAgICAgICAgIGRpc3BhdGNoKHsgdHlwZTogcmVkdWNlckNhc2VzLlNFVF9ORVdfVVNFUiwgbmV3VXNlcjogZmFsc2UgfSk7XG4gICAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgICAgdHlwZTogcmVkdWNlckNhc2VzLlNFVF9VU0VSX0lORk8sXG4gICAgICAgICAgICB1c2VySW5mbzoge1xuICAgICAgICAgICAgICBuYW1lLFxuICAgICAgICAgICAgICBlbWFpbCxcbiAgICAgICAgICAgICAgcHJvZmlsZUltYWdlOmltYWdlLFxuICAgICAgICAgICAgICBzdGF0dXM6IGFib3V0LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9KTtcbiAgICAgICAgICByb3V0ZXIucHVzaChcIi9cIilcbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgXG4gICAgICB9XG4gICAgfVxuICB9O1xuICBjb25zdCB2YWxpZGF0ZURldGFpbHMgPSAoKT0+e1xuICAgIGlmKG5hbWUubGVuZ3RoIDwgMyl7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctYmxhY2sgaC1zY3JlZW4gdy1zY3JlZW4gdGV4dC13aGl0ZSBmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwiZm9udC1leHRyYWJvbGQgdGV4dC00eGwgbWItNSBcIj5QUk9EPC9oMT5cbiAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQteGwgbWItMTBcIj5BZGQgTW9yZSBkZXRhaWxzPC9oMj5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIFwiPlxuICAgICAgICAgIDxQYWNtYW5Mb2FkZXIgY29sb3I9e2NvbG9yfSBzaXplPXs1MH0gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIHsvKiBQUk9EICovfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZ2FwLTYgXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBtdC02IGdhcC02IFwiPlxuICAgICAgICAgICAgey8qIHt1c2VySW5mby5uYW1lIH0gKi99XG4gICAgICAgICAgICA8SW5wdXQgbmFtZT1cIkRpc3BsYXkgTmFtZVwiIHN0YXRlPXtuYW1lfSBzZXRTdGF0ZT17c2V0TmFtZX0gbGFiZWwgLz5cbiAgICAgICAgICAgIDxJbnB1dCBuYW1lPVwiQWJvdXRcIiBzdGF0ZT17YWJvdXR9IHNldFN0YXRlPXtzZXRBYm91dH0gbGFiZWwgLz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBcIj5cbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBnYXAtNiBiZy1zZWFyY2gtaW5wdXQtY29udGFpbmVyLWJhY2tncm91bmQgcC00IHJvdW5kZWQtbGcgaG92ZXI6YmctYmx1ZS01MDAgZm9udC1zZW1pYm9sZFwiIG9uQ2xpY2s9e29uQm9hcmRVc2VySGFuZGxlcn0+IFxuICAgICAgICAgICAgICAgIENyZWF0ZSBQcm9maWxlXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgey8qIDxkaXY+ZGFzZGFzZDwvZGl2PiAqL31cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtNCB0ZXh0LXdoaXRlXCI+XG4gICAgICAgICAgPEF2YXRhciB0eXBlPXtcInhsXCJ9IGltYWdlPXtpbWFnZX0gc2V0SW1hZ2U9e3NldEltYWdlfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBvbmJvYXJkaW5nO1xuIl0sIm5hbWVzIjpbIkF2YXRhciIsIklucHV0IiwidXNlU3RhdGVQcm92aWRlciIsIk9OQk9BUkRfVVNFUl9ST1VURSIsImF4aW9zIiwidXNlUm91dGVyIiwiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkNTU1Byb3BlcnRpZXMiLCJQYWNtYW5Mb2FkZXIiLCJvbmJvYXJkaW5nIiwicm91dGVyIiwiY29sb3IiLCJzZXRDb2xvciIsInVzZXJJbmZvIiwibmV3VXNlciIsIm5hbWUiLCJzZXROYW1lIiwiYWJvdXQiLCJzZXRBYm91dCIsImltYWdlIiwic2V0SW1hZ2UiLCJlbWFpbCIsInB1c2giLCJvbkJvYXJkVXNlckhhbmRsZXIiLCJ2YWxpZGF0ZURldGFpbHMiLCJkYXRhIiwicG9zdCIsInN0YXR1cyIsImRpc3BhdGNoIiwidHlwZSIsInJlZHVjZXJDYXNlcyIsIlNFVF9ORVdfVVNFUiIsIlNFVF9VU0VSX0lORk8iLCJwcm9maWxlSW1hZ2UiLCJlcnJvciIsImxlbmd0aCIsImRpdiIsImNsYXNzTmFtZSIsImgxIiwiaDIiLCJzaXplIiwic3RhdGUiLCJzZXRTdGF0ZSIsImxhYmVsIiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/onboarding.jsx\n"));

/***/ })

});