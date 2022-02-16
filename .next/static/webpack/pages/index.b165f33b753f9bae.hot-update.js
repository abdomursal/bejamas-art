"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/sections/FeaturedProduct/index.tsx":
/*!***********************************************************!*\
  !*** ./src/components/sections/FeaturedProduct/index.tsx ***!
  \***********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _FeaturedProduct_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./FeaturedProduct.module.css */ \"./src/components/sections/FeaturedProduct/FeaturedProduct.module.css\");\n/* harmony import */ var _FeaturedProduct_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_FeaturedProduct_module_css__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var src_components_ui_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/components/ui/Button */ \"./src/components/ui/Button/index.tsx\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var src_store_testReducer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/store/testReducer */ \"./src/store/testReducer.tsx\");\n/* harmony import */ var src_store_cartReducer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/store/cartReducer */ \"./src/store/cartReducer.tsx\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar myLoader = function(param) {\n    var src = param.src, width = param.width, quality = param.quality;\n    return \"https://example.com/\".concat(src, \"?w=\").concat(width, \"&q=\").concat(quality || 75);\n};\nvar FeaturedProduct = function() {\n    _s();\n    var isFilterModalOpen = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)(function(state) {\n        return state.modal.modalFilter;\n    });\n    var featuredProduct = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)(function(state) {\n        return state.product.featuredProduct;\n    });\n    var name = featuredProduct.name, details = featuredProduct.details, category = featuredProduct.category;\n    var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useDispatch)();\n    var openModalHandle = function() {\n        dispatch((0,src_store_cartReducer__WEBPACK_IMPORTED_MODULE_6__.addCart)(featuredProduct));\n        dispatch((0,src_store_testReducer__WEBPACK_IMPORTED_MODULE_5__.modalCart)());\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_FeaturedProduct_module_css__WEBPACK_IMPORTED_MODULE_7___default().container),\n        style: {\n            display: isFilterModalOpen ? 'none' : 'grid'\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_FeaturedProduct_module_css__WEBPACK_IMPORTED_MODULE_7___default().header),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        className: (_FeaturedProduct_module_css__WEBPACK_IMPORTED_MODULE_7___default().featureTitle),\n                        children: name\n                    }, void 0, false, {\n                        fileName: \"/Users/abdo/Downloads/Telegram Desktop/Artwork-bejamas/src/components/sections/FeaturedProduct/index.tsx\",\n                        lineNumber: 32,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(src_components_ui_Button__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        onClick: function() {\n                            return openModalHandle();\n                        },\n                        buttonType: \"primary\",\n                        label: \" ADD TO CART\",\n                        className: (_FeaturedProduct_module_css__WEBPACK_IMPORTED_MODULE_7___default().cartButton)\n                    }, void 0, false, {\n                        fileName: \"/Users/abdo/Downloads/Telegram Desktop/Artwork-bejamas/src/components/sections/FeaturedProduct/index.tsx\",\n                        lineNumber: 33,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/abdo/Downloads/Telegram Desktop/Artwork-bejamas/src/components/sections/FeaturedProduct/index.tsx\",\n                lineNumber: 31,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_FeaturedProduct_module_css__WEBPACK_IMPORTED_MODULE_7___default().featureImageWrapper),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        // placeholder=\"blur\"\n                        // loader={myLoader}\n                        // onLoadingComplete={() => myLoader}\n                        alt: \"Bejamas-featuredProduct\",\n                        // blurDataURL={`${featuredImage}`}\n                        src: \"https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60\",\n                        // height={300}\n                        // width={400}\n                        layout: \"fill\"\n                    }, void 0, false, {\n                        fileName: \"/Users/abdo/Downloads/Telegram Desktop/Artwork-bejamas/src/components/sections/FeaturedProduct/index.tsx\",\n                        lineNumber: 41,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_FeaturedProduct_module_css__WEBPACK_IMPORTED_MODULE_7___default().featureTagWrapper),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            children: \" Photo of the day\"\n                        }, void 0, false, {\n                            fileName: \"/Users/abdo/Downloads/Telegram Desktop/Artwork-bejamas/src/components/sections/FeaturedProduct/index.tsx\",\n                            lineNumber: 56,\n                            columnNumber: 11\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/abdo/Downloads/Telegram Desktop/Artwork-bejamas/src/components/sections/FeaturedProduct/index.tsx\",\n                        lineNumber: 55,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/abdo/Downloads/Telegram Desktop/Artwork-bejamas/src/components/sections/FeaturedProduct/index.tsx\",\n                lineNumber: 40,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(src_components_ui_Button__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                onClick: function() {\n                    return openModalHandle();\n                },\n                buttonType: \"primary\",\n                label: \" ADD TO CART\",\n                className: (_FeaturedProduct_module_css__WEBPACK_IMPORTED_MODULE_7___default().cartButtonMobile)\n            }, void 0, false, {\n                fileName: \"/Users/abdo/Downloads/Telegram Desktop/Artwork-bejamas/src/components/sections/FeaturedProduct/index.tsx\",\n                lineNumber: 59,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_FeaturedProduct_module_css__WEBPACK_IMPORTED_MODULE_7___default().descriptionSectionWrapper),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_FeaturedProduct_module_css__WEBPACK_IMPORTED_MODULE_7___default().featureDescriptionWrapper),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                className: (_FeaturedProduct_module_css__WEBPACK_IMPORTED_MODULE_7___default().featureTitle),\n                                children: [\n                                    \"About the \",\n                                    name\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/abdo/Downloads/Telegram Desktop/Artwork-bejamas/src/components/sections/FeaturedProduct/index.tsx\",\n                                lineNumber: 67,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                className: (_FeaturedProduct_module_css__WEBPACK_IMPORTED_MODULE_7___default().categoryName),\n                                children: category\n                            }, void 0, false, {\n                                fileName: \"/Users/abdo/Downloads/Telegram Desktop/Artwork-bejamas/src/components/sections/FeaturedProduct/index.tsx\",\n                                lineNumber: 68,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: (_FeaturedProduct_module_css__WEBPACK_IMPORTED_MODULE_7___default().descriptionText),\n                                children: details === null || details === void 0 ? void 0 : details.description\n                            }, void 0, false, {\n                                fileName: \"/Users/abdo/Downloads/Telegram Desktop/Artwork-bejamas/src/components/sections/FeaturedProduct/index.tsx\",\n                                lineNumber: 69,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/abdo/Downloads/Telegram Desktop/Artwork-bejamas/src/components/sections/FeaturedProduct/index.tsx\",\n                        lineNumber: 66,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_FeaturedProduct_module_css__WEBPACK_IMPORTED_MODULE_7___default().featureRecommandationWrapper),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                className: (_FeaturedProduct_module_css__WEBPACK_IMPORTED_MODULE_7___default().recommendationTitle),\n                                children: \"People also buy\"\n                            }, void 0, false, {\n                                fileName: \"/Users/abdo/Downloads/Telegram Desktop/Artwork-bejamas/src/components/sections/FeaturedProduct/index.tsx\",\n                                lineNumber: 72,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_FeaturedProduct_module_css__WEBPACK_IMPORTED_MODULE_7___default().recomendationImagesWrap),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                        src: \"/images/pic1.png\",\n                                        height: 147,\n                                        width: 117\n                                    }, void 0, false, {\n                                        fileName: \"/Users/abdo/Downloads/Telegram Desktop/Artwork-bejamas/src/components/sections/FeaturedProduct/index.tsx\",\n                                        lineNumber: 74,\n                                        columnNumber: 13\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                        src: \"/images/pic2.png\",\n                                        height: 147,\n                                        width: 117\n                                    }, void 0, false, {\n                                        fileName: \"/Users/abdo/Downloads/Telegram Desktop/Artwork-bejamas/src/components/sections/FeaturedProduct/index.tsx\",\n                                        lineNumber: 75,\n                                        columnNumber: 13\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                        src: \"/images/pic3.png\",\n                                        height: 147,\n                                        width: 117\n                                    }, void 0, false, {\n                                        fileName: \"/Users/abdo/Downloads/Telegram Desktop/Artwork-bejamas/src/components/sections/FeaturedProduct/index.tsx\",\n                                        lineNumber: 76,\n                                        columnNumber: 13\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/abdo/Downloads/Telegram Desktop/Artwork-bejamas/src/components/sections/FeaturedProduct/index.tsx\",\n                                lineNumber: 73,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_FeaturedProduct_module_css__WEBPACK_IMPORTED_MODULE_7___default().recomendationDetailsWrapper),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                        className: (_FeaturedProduct_module_css__WEBPACK_IMPORTED_MODULE_7___default().detailsSizeTitle),\n                                        children: \"Details\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/abdo/Downloads/Telegram Desktop/Artwork-bejamas/src/components/sections/FeaturedProduct/index.tsx\",\n                                        lineNumber: 79,\n                                        columnNumber: 13\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: (_FeaturedProduct_module_css__WEBPACK_IMPORTED_MODULE_7___default().sizes),\n                                        children: [\n                                            \"Size:\",\n                                            details === null || details === void 0 ? void 0 : details.dimmentions.height,\n                                            \"x\",\n                                            details === null || details === void 0 ? void 0 : details.dimmentions.width,\n                                            \" pixel\"\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/abdo/Downloads/Telegram Desktop/Artwork-bejamas/src/components/sections/FeaturedProduct/index.tsx\",\n                                        lineNumber: 80,\n                                        columnNumber: 13\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: (_FeaturedProduct_module_css__WEBPACK_IMPORTED_MODULE_7___default().sizes),\n                                        children: [\n                                            \"Size: \",\n                                            details === null || details === void 0 ? void 0 : details.size,\n                                            \" ms \"\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/abdo/Downloads/Telegram Desktop/Artwork-bejamas/src/components/sections/FeaturedProduct/index.tsx\",\n                                        lineNumber: 83,\n                                        columnNumber: 13\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/abdo/Downloads/Telegram Desktop/Artwork-bejamas/src/components/sections/FeaturedProduct/index.tsx\",\n                                lineNumber: 78,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/abdo/Downloads/Telegram Desktop/Artwork-bejamas/src/components/sections/FeaturedProduct/index.tsx\",\n                        lineNumber: 71,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/abdo/Downloads/Telegram Desktop/Artwork-bejamas/src/components/sections/FeaturedProduct/index.tsx\",\n                lineNumber: 65,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/abdo/Downloads/Telegram Desktop/Artwork-bejamas/src/components/sections/FeaturedProduct/index.tsx\",\n        lineNumber: 30,\n        columnNumber: 5\n    }, _this));\n};\n_s(FeaturedProduct, \"RK0Y7zkxcNarOkzSWhjAIJe8jxs=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_4__.useDispatch\n    ];\n});\n_c = FeaturedProduct;\n/* harmony default export */ __webpack_exports__[\"default\"] = (FeaturedProduct);\nvar _c;\n$RefreshReg$(_c, \"FeaturedProduct\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9zZWN0aW9ucy9GZWF0dXJlZFByb2R1Y3QvaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUF1QztBQUNUO0FBQ21CO0FBQ0o7QUFFUztBQUNMO0FBQ0Y7OztBQUUvQyxHQUFLLENBQUNRLFFBQVEsR0FBRyxRQUFRQyxRQUFxQixDQUFDO1FBQTNCQyxHQUFHLFNBQUhBLEdBQUcsRUFBRUQsS0FBSyxTQUFMQSxLQUFLLEVBQUVFLE9BQU8sU0FBUEEsT0FBTztJQUNyQyxNQUFNLENBQUUsQ0FBb0Isc0JBQVdGLE1BQUssQ0FBZEMsR0FBRyxFQUFDLENBQUcsTUFBYUMsTUFBYSxDQUF4QkYsS0FBSyxFQUFDLENBQUcsTUFBZ0IsT0FBZEUsT0FBTyxJQUFJLEVBQUU7QUFDakUsQ0FBQztBQUVELEdBQUssQ0FBQ0MsZUFBZSxHQUFHLFFBQ3hCLEdBRDhCLENBQUM7O0lBQzdCLEdBQUssQ0FBQ0MsaUJBQWlCLEdBQUVSLHdEQUFXLENBQUMsUUFBUSxDQUFQUyxLQUFTO1FBQUlBLE1BQU1DLENBQU5ELEtBQUssQ0FBQ0MsS0FBSyxDQUFDQyxXQUFXOztJQUMxRSxHQUFLLENBQUNDLGVBQWUsR0FBR1osd0RBQVcsQ0FDakMsUUFBUSxDQUFQUyxLQUFVO1FBQUtBLE1BQU1JLENBQU5KLEtBQUssQ0FBQ0ksT0FBTyxDQUFDRCxlQUFlOztJQUUvQyxHQUFLLENBQUdFLElBQUksR0FBd0JGLGVBQWUsQ0FBM0NFLElBQUksRUFBRUMsT0FBTyxHQUFlSCxlQUFlLENBQXJDRyxPQUFPLEVBQUVDLFFBQVEsR0FBS0osZUFBZSxDQUE1QkksUUFBUTtJQUUvQixHQUFLLENBQUNDLFFBQVEsR0FBR2xCLHdEQUFXO0lBRzVCLEdBQUssQ0FBQ21CLGVBQWUsR0FBRyxRQUMxQixHQURnQyxDQUFDO1FBQzdCRCxRQUFRLENBQUNmLDhEQUFPLENBQUNVLGVBQWU7UUFDaENLLFFBQVEsQ0FBQ2hCLGdFQUFTO0lBQ3BCLENBQUM7SUFFRCxN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LENBQUNKLE1BQU07NENBQUMsQ0FBQzs0Q0FBQy9CLE9BQU8sYUFBUEEsT0FBTyxLQUFQQSxJQUFJLENBQUpBLENBQW9CLEdBQXBCQSxJQUFJLENBQUpBLENBQW9CLEdBQXBCQSxPQUFPLENBQUVtQyxXQUFXLENBQUM5QyxLQUFLOzRDQUFDLENBQ2pFOzs7Ozs7O2dIQUNDb0MsQ0FBQzt3Q0FBQ3BCLFNBQVMsRUFBRXZCLDBFQUFZOzs0Q0FBRSxDQUFNOzRDQUFDa0IsT0FBTyxhQUFQQSxPQUFPLEtBQVBBLElBQUksQ0FBSkEsQ0FBYSxHQUFiQSxJQUFJLENBQUpBLENBQWEsR0FBYkEsT0FBTyxDQUFFb0MsSUFBSTs0Q0FBQyxDQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTWpFLENBQUM7R0EzRUs1QyxlQUFlOztRQUNNUCxvREFBVztRQUNaQSxvREFBVztRQUtsQkQsb0RBQVc7OztLQVB4QlEsZUFBZTtBQTZFckIsK0RBQWVBLGVBQWUsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9zZWN0aW9ucy9GZWF0dXJlZFByb2R1Y3QvaW5kZXgudHN4P2EzNWUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vRmVhdHVyZWRQcm9kdWN0Lm1vZHVsZS5jc3NcIjtcbmltcG9ydCBCdXR0b24gZnJvbSBcInNyYy9jb21wb25lbnRzL3VpL0J1dHRvblwiO1xuaW1wb3J0IGZlYXR1cmVkSW1hZ2UgZnJvbSBcInB1YmxpYy9pbWFnZXMvZmVhdHVyZWRQcm9kdWN0LnBuZ1wiO1xuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgeyBtb2RhbENhcnQgfSBmcm9tIFwic3JjL3N0b3JlL3Rlc3RSZWR1Y2VyXCI7XG5pbXBvcnQgeyBhZGRDYXJ0IH0gZnJvbSBcInNyYy9zdG9yZS9jYXJ0UmVkdWNlclwiO1xuXG5jb25zdCBteUxvYWRlciA9ICh7IHNyYywgd2lkdGgsIHF1YWxpdHkgfSkgPT4ge1xuICByZXR1cm4gYGh0dHBzOi8vZXhhbXBsZS5jb20vJHtzcmN9P3c9JHt3aWR0aH0mcT0ke3F1YWxpdHkgfHwgNzV9YDtcbn07XG5cbmNvbnN0IEZlYXR1cmVkUHJvZHVjdCA9ICgpID0+IHtcbiAgY29uc3QgaXNGaWx0ZXJNb2RhbE9wZW49IHVzZVNlbGVjdG9yKChzdGF0ZTphbnkpPT4gc3RhdGUubW9kYWwubW9kYWxGaWx0ZXIpXG4gIGNvbnN0IGZlYXR1cmVkUHJvZHVjdCA9IHVzZVNlbGVjdG9yKFxuICAgIChzdGF0ZTogYW55KSA9PiBzdGF0ZS5wcm9kdWN0LmZlYXR1cmVkUHJvZHVjdFxuICApO1xuICBjb25zdCB7IG5hbWUsIGRldGFpbHMsIGNhdGVnb3J5IH0gPSBmZWF0dXJlZFByb2R1Y3Q7XG5cbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuXG4gIFxuICBjb25zdCBvcGVuTW9kYWxIYW5kbGUgPSAoKSA9PiB7XG4gICAgZGlzcGF0Y2goYWRkQ2FydChmZWF0dXJlZFByb2R1Y3QpKTtcbiAgICBkaXNwYXRjaChtb2RhbENhcnQoKSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0gc3R5bGU9e3tkaXNwbGF5OmlzRmlsdGVyTW9kYWxPcGVuPydub25lJzonZ3JpZCd9fT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaGVhZGVyfT5cbiAgICAgICAgPGEgY2xhc3NOYW1lPXtzdHlsZXMuZmVhdHVyZVRpdGxlfT57bmFtZX08L2E+XG4gICAgICAgIDxCdXR0b25cbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBvcGVuTW9kYWxIYW5kbGUoKX1cbiAgICAgICAgICBidXR0b25UeXBlPVwicHJpbWFyeVwiXG4gICAgICAgICAgbGFiZWw9XCIgQUREIFRPIENBUlRcIlxuICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmNhcnRCdXR0b259XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZmVhdHVyZUltYWdlV3JhcHBlcn0+XG4gICAgICAgIDxJbWFnZVxuICAgICAgICAgIC8vIHBsYWNlaG9sZGVyPVwiYmx1clwiXG4gICAgICAgICAgLy8gbG9hZGVyPXtteUxvYWRlcn1cbiAgICAgICAgICAvLyBvbkxvYWRpbmdDb21wbGV0ZT17KCkgPT4gbXlMb2FkZXJ9XG4gICAgICAgICAgYWx0PVwiQmVqYW1hcy1mZWF0dXJlZFByb2R1Y3RcIlxuICAgICAgICAgIC8vIGJsdXJEYXRhVVJMPXtgJHtmZWF0dXJlZEltYWdlfWB9XG4gICAgICAgICAgc3JjPXtcbiAgICAgICAgICAgIFwiaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE1MTUwMDMxOTcyMTAtZTBjZDcxODEwYjVmP2l4bGliPXJiLTEuMi4xJml4aWQ9TW53eE1qQTNmREI4TUh4elpXRnlZMmg4TWpCOGZHWnZiMlI4Wlc1OE1IeDhNSHg4JmF1dG89Zm9ybWF0JmZpdD1jcm9wJnc9ODAwJnE9NjBcIlxuICAgICAgICAgIH1cbiAgICAgICAgICAvLyBoZWlnaHQ9ezMwMH1cbiAgICAgICAgICAvLyB3aWR0aD17NDAwfVxuICAgICAgICAgIGxheW91dD1cImZpbGxcIlxuICAgICAgICAgIC8vIG9iamVjdEZpdD1cImNvdmVyXCJcbiAgICAgICAgLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5mZWF0dXJlVGFnV3JhcHBlcn0+XG4gICAgICAgICAgPGE+IFBob3RvIG9mIHRoZSBkYXk8L2E+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8QnV0dG9uXG4gICAgICAgIG9uQ2xpY2s9eygpID0+IG9wZW5Nb2RhbEhhbmRsZSgpfVxuICAgICAgICBidXR0b25UeXBlPVwicHJpbWFyeVwiXG4gICAgICAgIGxhYmVsPVwiIEFERCBUTyBDQVJUXCJcbiAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuY2FydEJ1dHRvbk1vYmlsZX1cbiAgICAgIC8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmRlc2NyaXB0aW9uU2VjdGlvbldyYXBwZXJ9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZlYXR1cmVEZXNjcmlwdGlvbldyYXBwZXJ9PlxuICAgICAgICAgIDxoMyBjbGFzc05hbWU9e3N0eWxlcy5mZWF0dXJlVGl0bGV9PkFib3V0IHRoZSB7bmFtZX08L2gzPlxuICAgICAgICAgIDxhIGNsYXNzTmFtZT17c3R5bGVzLmNhdGVnb3J5TmFtZX0+e2NhdGVnb3J5fTwvYT5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5kZXNjcmlwdGlvblRleHR9PntkZXRhaWxzPy5kZXNjcmlwdGlvbn08L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZlYXR1cmVSZWNvbW1hbmRhdGlvbldyYXBwZXJ9PlxuICAgICAgICAgIDxoMyBjbGFzc05hbWU9e3N0eWxlcy5yZWNvbW1lbmRhdGlvblRpdGxlfT5QZW9wbGUgYWxzbyBidXk8L2gzPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucmVjb21lbmRhdGlvbkltYWdlc1dyYXB9PlxuICAgICAgICAgICAgPEltYWdlIHNyYz17XCIvaW1hZ2VzL3BpYzEucG5nXCJ9IGhlaWdodD17MTQ3fSB3aWR0aD17MTE3fSAvPlxuICAgICAgICAgICAgPEltYWdlIHNyYz17XCIvaW1hZ2VzL3BpYzIucG5nXCJ9IGhlaWdodD17MTQ3fSB3aWR0aD17MTE3fSAvPlxuICAgICAgICAgICAgPEltYWdlIHNyYz17XCIvaW1hZ2VzL3BpYzMucG5nXCJ9IGhlaWdodD17MTQ3fSB3aWR0aD17MTE3fSAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucmVjb21lbmRhdGlvbkRldGFpbHNXcmFwcGVyfT5cbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17c3R5bGVzLmRldGFpbHNTaXplVGl0bGV9PkRldGFpbHM8L2E+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5zaXplc30+XG4gICAgICAgICAgICAgIFNpemU6e2RldGFpbHM/LmRpbW1lbnRpb25zLmhlaWdodH14e2RldGFpbHM/LmRpbW1lbnRpb25zLndpZHRofSBwaXhlbFxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMuc2l6ZXN9PlNpemU6IHtkZXRhaWxzPy5zaXplfSBtcyA8L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBGZWF0dXJlZFByb2R1Y3Q7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJJbWFnZSIsInN0eWxlcyIsIkJ1dHRvbiIsInVzZURpc3BhdGNoIiwidXNlU2VsZWN0b3IiLCJtb2RhbENhcnQiLCJhZGRDYXJ0IiwibXlMb2FkZXIiLCJ3aWR0aCIsInNyYyIsInF1YWxpdHkiLCJGZWF0dXJlZFByb2R1Y3QiLCJpc0ZpbHRlck1vZGFsT3BlbiIsInN0YXRlIiwibW9kYWwiLCJtb2RhbEZpbHRlciIsImZlYXR1cmVkUHJvZHVjdCIsInByb2R1Y3QiLCJuYW1lIiwiZGV0YWlscyIsImNhdGVnb3J5IiwiZGlzcGF0Y2giLCJvcGVuTW9kYWxIYW5kbGUiLCJkaXYiLCJjbGFzc05hbWUiLCJjb250YWluZXIiLCJzdHlsZSIsImRpc3BsYXkiLCJoZWFkZXIiLCJhIiwiZmVhdHVyZVRpdGxlIiwib25DbGljayIsImJ1dHRvblR5cGUiLCJsYWJlbCIsImNhcnRCdXR0b24iLCJmZWF0dXJlSW1hZ2VXcmFwcGVyIiwiYWx0IiwibGF5b3V0IiwiZmVhdHVyZVRhZ1dyYXBwZXIiLCJjYXJ0QnV0dG9uTW9iaWxlIiwiZGVzY3JpcHRpb25TZWN0aW9uV3JhcHBlciIsImZlYXR1cmVEZXNjcmlwdGlvbldyYXBwZXIiLCJoMyIsImNhdGVnb3J5TmFtZSIsInAiLCJkZXNjcmlwdGlvblRleHQiLCJkZXNjcmlwdGlvbiIsImZlYXR1cmVSZWNvbW1hbmRhdGlvbldyYXBwZXIiLCJyZWNvbW1lbmRhdGlvblRpdGxlIiwicmVjb21lbmRhdGlvbkltYWdlc1dyYXAiLCJoZWlnaHQiLCJyZWNvbWVuZGF0aW9uRGV0YWlsc1dyYXBwZXIiLCJkZXRhaWxzU2l6ZVRpdGxlIiwic2l6ZXMiLCJkaW1tZW50aW9ucyIsInNpemUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/sections/FeaturedProduct/index.tsx\n");

/***/ })

});