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

/***/ "./src/components/common/Avatar.jsx":
/*!******************************************!*\
  !*** ./src/components/common/Avatar.jsx ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-icons/fa */ \"./node_modules/react-icons/fa/index.esm.js\");\n/* harmony import */ var _ContextMenu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ContextMenu */ \"./src/components/common/ContextMenu.jsx\");\n/* harmony import */ var _PhotoPicker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./PhotoPicker */ \"./src/components/common/PhotoPicker.jsx\");\n/* harmony import */ var _PhotoLibrary__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./PhotoLibrary */ \"./src/components/common/PhotoLibrary.jsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction Avatar(param) {\n    let { type , image , setImage  } = param;\n    _s();\n    const [hover, setHover] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const [conextVisible, setContextVisible] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const [contextMenuCoorindates, setContextMenuCoordiantes] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({\n        x: 0,\n        y: 0\n    });\n    const [grabPhoto, setGrabphoto] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const [showPhotoLibrary, setShowPhotoLibrary] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const [showCapturePhoto, setShowCapterPhoto] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const showContextMenu = (e)=>{\n        e.preventDefault();\n        setContextMenuCoordiantes({\n            x: e.pageX,\n            y: e.pageY\n        });\n        setContextVisible(true);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        if (grabPhoto) {\n            const data = document.getElementById(\"photo-picker\");\n            data.click();\n            document.body.onfocus = (e)=>{\n                setTimeout(()=>{\n                    setGrabphoto(false);\n                }, [\n                    1000\n                ]);\n            };\n        }\n    }, [\n        grabPhoto\n    ]);\n    const contextMenuOptions = [\n        {\n            name: \"Take A Photo\",\n            callback: ()=>{}\n        },\n        {\n            name: \"Choose From Library\",\n            callback: ()=>{\n                setShowPhotoLibrary(true);\n            }\n        },\n        {\n            name: \"Upload Photo\",\n            callback: ()=>{\n                setGrabphoto(true);\n            }\n        },\n        {\n            name: \"Remove Photo\",\n            callback: ()=>{\n                setImage(\"/default_avatar.png\");\n            }\n        }\n    ];\n    const photoPickerChange = async (e)=>{\n        const file = e.target.files[0];\n        const reader = new FileReader();\n        const data = document.createElement(\"img\");\n        reader.onload = function(event) {\n            data.src = event.target.result;\n            data.setAttribute(\"data-src\", event.target.result);\n        };\n        reader.readAsDataURL(file);\n        setTimeout(()=>{\n            setImage(data.src);\n        }, 100);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex items-center justify-center text-black\",\n                children: [\n                    type === \"sm\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"relative h-10 w-10\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: image,\n                            alt: \"avatar\",\n                            className: \"rounded-full\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Aayush Kumar Bhat\\\\WEB DEV\\\\main-projects\\\\Currently\\\\full-prod-mern\\\\client\\\\src\\\\components\\\\common\\\\Avatar.jsx\",\n                            lineNumber: 80,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Aayush Kumar Bhat\\\\WEB DEV\\\\main-projects\\\\Currently\\\\full-prod-mern\\\\client\\\\src\\\\components\\\\common\\\\Avatar.jsx\",\n                        lineNumber: 79,\n                        columnNumber: 11\n                    }, this),\n                    type === \"lg\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"relative h-14 w-14\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: image,\n                            alt: \"avatar\",\n                            className: \"rounded-full\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Aayush Kumar Bhat\\\\WEB DEV\\\\main-projects\\\\Currently\\\\full-prod-mern\\\\client\\\\src\\\\components\\\\common\\\\Avatar.jsx\",\n                            lineNumber: 85,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Aayush Kumar Bhat\\\\WEB DEV\\\\main-projects\\\\Currently\\\\full-prod-mern\\\\client\\\\src\\\\components\\\\common\\\\Avatar.jsx\",\n                        lineNumber: 84,\n                        columnNumber: 11\n                    }, this),\n                    type === \"xl\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"relative cursor-pointer z-0 text-black\",\n                        onMouseEnter: ()=>setHover(true),\n                        onMouseLeave: ()=>setHover(false),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"bg-photopicker-overlay-background h-60 w-60 absolute top-0 left-0 flex items-center rounded-full justify-center flex-col text-center gap-2 \".concat(hover ? \"visible\" : \"hidden\"),\n                                onClick: (e)=>showContextMenu(e),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_6__.FaCamera, {\n                                        className: \"text-2xl\",\n                                        id: \"context-opener\",\n                                        onClick: (e)=>showContextMenu(e)\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\Aayush Kumar Bhat\\\\WEB DEV\\\\main-projects\\\\Currently\\\\full-prod-mern\\\\client\\\\src\\\\components\\\\common\\\\Avatar.jsx\",\n                                        lineNumber: 100,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"text-black\",\n                                        onClick: (e)=>showContextMenu(e),\n                                        children: \"Change Profile Picture\"\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\Aayush Kumar Bhat\\\\WEB DEV\\\\main-projects\\\\Currently\\\\full-prod-mern\\\\client\\\\src\\\\components\\\\common\\\\Avatar.jsx\",\n                                        lineNumber: 105,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\Aayush Kumar Bhat\\\\WEB DEV\\\\main-projects\\\\Currently\\\\full-prod-mern\\\\client\\\\src\\\\components\\\\common\\\\Avatar.jsx\",\n                                lineNumber: 94,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \" h-60 w-60 \",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    src: image,\n                                    alt: \"avatar\",\n                                    className: \"rounded-full\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\Aayush Kumar Bhat\\\\WEB DEV\\\\main-projects\\\\Currently\\\\full-prod-mern\\\\client\\\\src\\\\components\\\\common\\\\Avatar.jsx\",\n                                    lineNumber: 111,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Aayush Kumar Bhat\\\\WEB DEV\\\\main-projects\\\\Currently\\\\full-prod-mern\\\\client\\\\src\\\\components\\\\common\\\\Avatar.jsx\",\n                                lineNumber: 110,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\Aayush Kumar Bhat\\\\WEB DEV\\\\main-projects\\\\Currently\\\\full-prod-mern\\\\client\\\\src\\\\components\\\\common\\\\Avatar.jsx\",\n                        lineNumber: 89,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Aayush Kumar Bhat\\\\WEB DEV\\\\main-projects\\\\Currently\\\\full-prod-mern\\\\client\\\\src\\\\components\\\\common\\\\Avatar.jsx\",\n                lineNumber: 77,\n                columnNumber: 7\n            }, this),\n            conextVisible && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ContextMenu__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                options: contextMenuOptions,\n                coordinates: contextMenuCoorindates,\n                contextMenu: conextVisible,\n                setContextMenu: setContextVisible\n            }, void 0, false, {\n                fileName: \"D:\\\\Aayush Kumar Bhat\\\\WEB DEV\\\\main-projects\\\\Currently\\\\full-prod-mern\\\\client\\\\src\\\\components\\\\common\\\\Avatar.jsx\",\n                lineNumber: 117,\n                columnNumber: 9\n            }, this),\n            showPhotoLibrary && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_PhotoLibrary__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                setImage: setImage,\n                hidePhotoLibrary: setShowPhotoLibrary\n            }, void 0, false, {\n                fileName: \"D:\\\\Aayush Kumar Bhat\\\\WEB DEV\\\\main-projects\\\\Currently\\\\full-prod-mern\\\\client\\\\src\\\\components\\\\common\\\\Avatar.jsx\",\n                lineNumber: 124,\n                columnNumber: 28\n            }, this),\n            grabPhoto && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_PhotoPicker__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                onChange: photoPickerChange\n            }, void 0, false, {\n                fileName: \"D:\\\\Aayush Kumar Bhat\\\\WEB DEV\\\\main-projects\\\\Currently\\\\full-prod-mern\\\\client\\\\src\\\\components\\\\common\\\\Avatar.jsx\",\n                lineNumber: 126,\n                columnNumber: 22\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Avatar, \"CFgKtJx8KAZTX107VUzxBk9fhtU=\");\n_c = Avatar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Avatar);\nvar _c;\n$RefreshReg$(_c, \"Avatar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QkFDQ0MsV0FBVTt3QkFDVkcsY0FBYyxJQUFNN0MsU0FBUyxJQUFJO3dCQUNqQzhDLGNBQWMsSUFBTTlDLFNBQVMsS0FBSzs7MENBRWxDLDhEQUFDeUM7Z0NBQ0NDLFdBQVcsOElBRVYsT0FEQzNDLFFBQVEsWUFBWSxRQUFRO2dDQUU5QmdELFNBQVMsQ0FBQ2pDLElBQU1ELGdCQUFnQkM7O2tEQUVoQyw4REFBQ3ZCLG9EQUFRQTt3Q0FDUG1ELFdBQVU7d0NBQ1ZNLElBQUc7d0NBQ0hELFNBQVMsQ0FBQ2pDLElBQU1ELGdCQUFnQkM7Ozs7OztrREFFbEMsOERBQUNtQzt3Q0FBS1AsV0FBVTt3Q0FBYUssU0FBUyxDQUFDakMsSUFBTUQsZ0JBQWdCQztrREFBSTs7Ozs7Ozs7Ozs7OzBDQUtuRSw4REFBQzJCO2dDQUFJQyxXQUFVOzBDQUNiLDRFQUFDQztvQ0FBSU4sS0FBS3hDO29DQUFPK0MsS0FBSTtvQ0FBU0YsV0FBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFLL0N6QywrQkFDQyw4REFBQ1Qsb0RBQVdBO2dCQUNWMEQsU0FBU3pCO2dCQUNUMEIsYUFBYWhEO2dCQUNiaUQsYUFBYW5EO2dCQUNib0QsZ0JBQWdCbkQ7Ozs7OztZQUduQk8sa0NBQW9CLDhEQUFDZixxREFBWUE7Z0JBQUNJLFVBQVdBO2dCQUFVd0Qsa0JBQWtCNUM7Ozs7OztZQUV4RUgsMkJBQWEsOERBQUNkLG9EQUFXQTtnQkFBQzhELFVBQVUzQjs7Ozs7Ozs7QUFJNUM7R0F4SFNqQztLQUFBQTtBQTBIVCwrREFBZUEsTUFBTUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9jb21tb24vQXZhdGFyLmpzeD8wMTdjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7XG4gIEZhQWNjZXNzaWJsZUljb24sXG4gIEZhQ2FtZXJhXG59IGZyb20gXCJyZWFjdC1pY29ucy9mYVwiXG5pbXBvcnQgQ29udGV4dE1lbnUgZnJvbSBcIi4vQ29udGV4dE1lbnVcIjtcbmltcG9ydCBQaG90b1BpY2tlciBmcm9tIFwiLi9QaG90b1BpY2tlclwiO1xuaW1wb3J0IFBob3RvTGlicmFyeSBmcm9tIFwiLi9QaG90b0xpYnJhcnlcIjtcbmZ1bmN0aW9uIEF2YXRhcih7dHlwZSwgaW1hZ2UsIHNldEltYWdlfSkge1xuICBjb25zdCBbaG92ZXIsIHNldEhvdmVyXSA9IHVzZVN0YXRlKGZhbHNlKVxuICBjb25zdCBbY29uZXh0VmlzaWJsZSwgc2V0Q29udGV4dFZpc2libGVdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbY29udGV4dE1lbnVDb29yaW5kYXRlcywgc2V0Q29udGV4dE1lbnVDb29yZGlhbnRlc10gPSB1c2VTdGF0ZSh7XG4gICAgeDowLCB5OjBcbiAgfSlcbiAgY29uc3QgW2dyYWJQaG90bywgc2V0R3JhYnBob3RvXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW3Nob3dQaG90b0xpYnJhcnksIHNldFNob3dQaG90b0xpYnJhcnldID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbc2hvd0NhcHR1cmVQaG90bywgc2V0U2hvd0NhcHRlclBob3RvXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3Qgc2hvd0NvbnRleHRNZW51ID0gKGUpPT57XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHNldENvbnRleHRNZW51Q29vcmRpYW50ZXMoeyB4OiBlLnBhZ2VYLCB5OiBlLnBhZ2VZIH0pO1xuICAgIHNldENvbnRleHRWaXNpYmxlKHRydWUpO1xuICB9O1xuICB1c2VFZmZlY3QoKCk9PntcbiAgICBpZihncmFiUGhvdG8pe1xuICAgICAgY29uc3QgZGF0YSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGhvdG8tcGlja2VyXCIpXG4gICAgICBkYXRhLmNsaWNrKClcbiAgICAgIGRvY3VtZW50LmJvZHkub25mb2N1cyA9IChlKT0+e1xuICAgICAgICBzZXRUaW1lb3V0KCgpPT57XG4gICAgICAgICAgc2V0R3JhYnBob3RvKGZhbHNlKVxuXG4gICAgICAgIH0sIFsxMDAwXSlcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtncmFiUGhvdG9dKVxuICBjb25zdCBjb250ZXh0TWVudU9wdGlvbnMgPSBbXG4gICAge1xuICAgICAgbmFtZTogXCJUYWtlIEEgUGhvdG9cIixcbiAgICAgIGNhbGxiYWNrOiAoKSA9PiB7fSxcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6IFwiQ2hvb3NlIEZyb20gTGlicmFyeVwiLFxuICAgICAgY2FsbGJhY2s6ICgpID0+IHtcbiAgICAgICAgc2V0U2hvd1Bob3RvTGlicmFyeSh0cnVlKTtcbiAgICAgIH0sXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiBcIlVwbG9hZCBQaG90b1wiLFxuICAgICAgY2FsbGJhY2s6ICgpID0+IHtcbiAgICAgICAgc2V0R3JhYnBob3RvKHRydWUpO1xuICAgICAgfSxcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6IFwiUmVtb3ZlIFBob3RvXCIsXG4gICAgICBjYWxsYmFjazogKCkgPT4ge1xuICAgICAgICBzZXRJbWFnZShcIi9kZWZhdWx0X2F2YXRhci5wbmdcIik7XG4gICAgICB9LFxuICAgIH0sXG4gIF07XG4gIGNvbnN0IHBob3RvUGlja2VyQ2hhbmdlID0gYXN5bmMoZSk9PntcbiAgICBjb25zdCBmaWxlID0gZS50YXJnZXQuZmlsZXNbMF07XG4gICAgY29uc3QgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcbiAgICBjb25zdCBkYXRhICA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgcmVhZGVyLm9ubG9hZCAgPSBmdW5jdGlvbihldmVudCl7XG4gICAgICBkYXRhLnNyYyA9IGV2ZW50LnRhcmdldC5yZXN1bHQ7XG4gICAgICBkYXRhLnNldEF0dHJpYnV0ZShcImRhdGEtc3JjXCIsIGV2ZW50LnRhcmdldC5yZXN1bHQpO1xuICAgICAgXG4gICAgfVxuICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKGZpbGUpO1xuICAgIHNldFRpbWVvdXQoKCk9PntcbiAgICAgIHNldEltYWdlKGRhdGEuc3JjKTtcbiAgICB9LCAxMDApXG4gIH1cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgey8qIDxpbWcgc3JjPXtpbWFnZX0gYWx0PVwiXCIgLz4gKi99XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHRleHQtYmxhY2tcIj5cbiAgICAgICAge3R5cGUgPT09IFwic21cIiAmJiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBoLTEwIHctMTBcIj5cbiAgICAgICAgICAgIDxpbWcgc3JjPXtpbWFnZX0gYWx0PVwiYXZhdGFyXCIgY2xhc3NOYW1lPVwicm91bmRlZC1mdWxsXCIgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKX1cbiAgICAgICAge3R5cGUgPT09IFwibGdcIiAmJiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBoLTE0IHctMTRcIj5cbiAgICAgICAgICAgIDxpbWcgc3JjPXtpbWFnZX0gYWx0PVwiYXZhdGFyXCIgY2xhc3NOYW1lPVwicm91bmRlZC1mdWxsXCIgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKX1cbiAgICAgICAge3R5cGUgPT09IFwieGxcIiAmJiAoXG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwicmVsYXRpdmUgY3Vyc29yLXBvaW50ZXIgei0wIHRleHQtYmxhY2tcIlxuICAgICAgICAgICAgb25Nb3VzZUVudGVyPXsoKSA9PiBzZXRIb3Zlcih0cnVlKX1cbiAgICAgICAgICAgIG9uTW91c2VMZWF2ZT17KCkgPT4gc2V0SG92ZXIoZmFsc2UpfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgYmctcGhvdG9waWNrZXItb3ZlcmxheS1iYWNrZ3JvdW5kIGgtNjAgdy02MCBhYnNvbHV0ZSB0b3AtMCBsZWZ0LTAgZmxleCBpdGVtcy1jZW50ZXIgcm91bmRlZC1mdWxsIGp1c3RpZnktY2VudGVyIGZsZXgtY29sIHRleHQtY2VudGVyIGdhcC0yICR7XG4gICAgICAgICAgICAgICAgaG92ZXIgPyBcInZpc2libGVcIiA6IFwiaGlkZGVuXCJcbiAgICAgICAgICAgICAgfWB9XG4gICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiBzaG93Q29udGV4dE1lbnUoZSl9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxGYUNhbWVyYVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtMnhsXCJcbiAgICAgICAgICAgICAgICBpZD1cImNvbnRleHQtb3BlbmVyXCJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4gc2hvd0NvbnRleHRNZW51KGUpfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWJsYWNrXCIgb25DbGljaz17KGUpID0+IHNob3dDb250ZXh0TWVudShlKX0+XG4gICAgICAgICAgICAgICAgQ2hhbmdlIFByb2ZpbGUgUGljdHVyZVxuICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCIgaC02MCB3LTYwIFwiPlxuICAgICAgICAgICAgICA8aW1nIHNyYz17aW1hZ2V9IGFsdD1cImF2YXRhclwiIGNsYXNzTmFtZT1cInJvdW5kZWQtZnVsbFwiIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuICAgICAge2NvbmV4dFZpc2libGUgJiYgKFxuICAgICAgICA8Q29udGV4dE1lbnVcbiAgICAgICAgICBvcHRpb25zPXtjb250ZXh0TWVudU9wdGlvbnN9XG4gICAgICAgICAgY29vcmRpbmF0ZXM9e2NvbnRleHRNZW51Q29vcmluZGF0ZXN9XG4gICAgICAgICAgY29udGV4dE1lbnU9e2NvbmV4dFZpc2libGV9XG4gICAgICAgICAgc2V0Q29udGV4dE1lbnU9e3NldENvbnRleHRWaXNpYmxlfVxuICAgICAgICAvPlxuICAgICAgKX1cbiAgICAgIHtzaG93UGhvdG9MaWJyYXJ5ICYmIDxQaG90b0xpYnJhcnkgc2V0SW1hZ2UgPXtzZXRJbWFnZX0gaGlkZVBob3RvTGlicmFyeT17c2V0U2hvd1Bob3RvTGlicmFyeX0vPn1cbiAgICAgIHtcbiAgICAgICAgZ3JhYlBob3RvICYmIDxQaG90b1BpY2tlciBvbkNoYW5nZT17cGhvdG9QaWNrZXJDaGFuZ2V9Lz5cbiAgICAgIH1cbiAgICA8Lz5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQXZhdGFyO1xuIl0sIm5hbWVzIjpbIkltYWdlIiwiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkZhQWNjZXNzaWJsZUljb24iLCJGYUNhbWVyYSIsIkNvbnRleHRNZW51IiwiUGhvdG9QaWNrZXIiLCJQaG90b0xpYnJhcnkiLCJBdmF0YXIiLCJ0eXBlIiwiaW1hZ2UiLCJzZXRJbWFnZSIsImhvdmVyIiwic2V0SG92ZXIiLCJjb25leHRWaXNpYmxlIiwic2V0Q29udGV4dFZpc2libGUiLCJjb250ZXh0TWVudUNvb3JpbmRhdGVzIiwic2V0Q29udGV4dE1lbnVDb29yZGlhbnRlcyIsIngiLCJ5IiwiZ3JhYlBob3RvIiwic2V0R3JhYnBob3RvIiwic2hvd1Bob3RvTGlicmFyeSIsInNldFNob3dQaG90b0xpYnJhcnkiLCJzaG93Q2FwdHVyZVBob3RvIiwic2V0U2hvd0NhcHRlclBob3RvIiwic2hvd0NvbnRleHRNZW51IiwiZSIsInByZXZlbnREZWZhdWx0IiwicGFnZVgiLCJwYWdlWSIsImRhdGEiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiY2xpY2siLCJib2R5Iiwib25mb2N1cyIsInNldFRpbWVvdXQiLCJjb250ZXh0TWVudU9wdGlvbnMiLCJuYW1lIiwiY2FsbGJhY2siLCJwaG90b1BpY2tlckNoYW5nZSIsImZpbGUiLCJ0YXJnZXQiLCJmaWxlcyIsInJlYWRlciIsIkZpbGVSZWFkZXIiLCJjcmVhdGVFbGVtZW50Iiwib25sb2FkIiwiZXZlbnQiLCJzcmMiLCJyZXN1bHQiLCJzZXRBdHRyaWJ1dGUiLCJyZWFkQXNEYXRhVVJMIiwiZGl2IiwiY2xhc3NOYW1lIiwiaW1nIiwiYWx0Iiwib25Nb3VzZUVudGVyIiwib25Nb3VzZUxlYXZlIiwib25DbGljayIsImlkIiwic3BhbiIsIm9wdGlvbnMiLCJjb29yZGluYXRlcyIsImNvbnRleHRNZW51Iiwic2V0Q29udGV4dE1lbnUiLCJoaWRlUGhvdG9MaWJyYXJ5Iiwib25DaGFuZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/common/Avatar.jsx\n"));

/***/ })

});