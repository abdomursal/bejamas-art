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

/***/ "./src/components/sections/Products/index.tsx":
/*!****************************************************!*\
  !*** ./src/components/sections/Products/index.tsx ***!
  \****************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"NotFound\": function() { return /* binding */ NotFound; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var src_components_ui_Card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/components/ui/Card */ \"./src/components/ui/Card/index.tsx\");\n/* harmony import */ var src_components_ui_PaginationBar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/components/ui/PaginationBar */ \"./src/components/ui/PaginationBar/index.tsx\");\n/* harmony import */ var src_components_sections_Filter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/components/sections/Filter */ \"./src/components/sections/Filter/index.tsx\");\n/* harmony import */ var _Products_module_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Products.module.css */ \"./src/components/sections/Products/Products.module.css\");\n/* harmony import */ var _Products_module_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_Products_module_css__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var src_constant_category__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/constant/category */ \"./src/constant/category.ts\");\n/* harmony import */ var src_constant_Prices__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/constant/Prices */ \"./src/constant/Prices.ts\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\n\n\n\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithoutHoles(arr) {\n    if (Array.isArray(arr)) return _arrayLikeToArray(arr);\n}\nfunction _iterableToArray(iter) {\n    if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter);\n}\nfunction _nonIterableSpread() {\n    throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _toConsumableArray(arr) {\n    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar NotFound = function() {\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            display: 'flex',\n            alignItems: 'center',\n            justifyContent: \"center\"\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n            style: {\n                fontWeight: 'bold',\n                fontSize: 30\n            },\n            children: \"NOT FOUND\"\n        }, void 0, false, {\n            fileName: \"/Users/abdo/Downloads/Telegram Desktop/Artwork-bejamas/src/components/sections/Products/index.tsx\",\n            lineNumber: 17,\n            columnNumber: 9\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/abdo/Downloads/Telegram Desktop/Artwork-bejamas/src/components/sections/Products/index.tsx\",\n        lineNumber: 16,\n        columnNumber: 5\n    }, _this));\n};\n_c = NotFound;\nvar Products = function() {\n    var _this1 = _this;\n    _s();\n    var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_6__.useDispatch)();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), data = ref[0], setData = ref[1];\n    var orignalProducts = (0,react_redux__WEBPACK_IMPORTED_MODULE_6__.useSelector)(function(state) {\n        return state.product.products;\n    });\n    var filterItems = (0,react_redux__WEBPACK_IMPORTED_MODULE_6__.useSelector)(function(state) {\n        return state.product.processedProducts.filterItems;\n    });\n    var processedProducts = (0,react_redux__WEBPACK_IMPORTED_MODULE_6__.useSelector)(function(state) {\n        return state.product.processedProducts.products;\n    });\n    console.log(\"FROM PRODUCT PAGE\", data);\n    var filterProduct = function() {\n        var z = [];\n        var x = _toConsumableArray(orignalProducts);\n        if (filterItems != []) {\n            z = x.filter(function(item) {\n                return filterItems.includes(item.category);\n            });\n            setData(z);\n            return z;\n        }\n        return setData(orignalProducts);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        filterProduct();\n    }, [\n        filterItems\n    ]);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_Products_module_css__WEBPACK_IMPORTED_MODULE_9___default().contianer),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_Products_module_css__WEBPACK_IMPORTED_MODULE_9___default().product_section_header),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                className: (_Products_module_css__WEBPACK_IMPORTED_MODULE_9___default().mainSectionTitle),\n                                children: \"Photography / \"\n                            }, void 0, false, {\n                                fileName: \"/Users/abdo/Downloads/Telegram Desktop/Artwork-bejamas/src/components/sections/Products/index.tsx\",\n                                lineNumber: 55,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                className: (_Products_module_css__WEBPACK_IMPORTED_MODULE_9___default().filterdTitle),\n                                children: \"PremuimArt\"\n                            }, void 0, false, {\n                                fileName: \"/Users/abdo/Downloads/Telegram Desktop/Artwork-bejamas/src/components/sections/Products/index.tsx\",\n                                lineNumber: 56,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/abdo/Downloads/Telegram Desktop/Artwork-bejamas/src/components/sections/Products/index.tsx\",\n                        lineNumber: 54,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: (_Products_module_css__WEBPACK_IMPORTED_MODULE_9___default().sortWrapper),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: (_Products_module_css__WEBPACK_IMPORTED_MODULE_9___default().sortMobileIcone),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                    src: \"/images/filterMobileIcon.png\",\n                                    height: 29,\n                                    width: 29\n                                }, void 0, false, {\n                                    fileName: \"/Users/abdo/Downloads/Telegram Desktop/Artwork-bejamas/src/components/sections/Products/index.tsx\",\n                                    lineNumber: 60,\n                                    columnNumber: 13\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"/Users/abdo/Downloads/Telegram Desktop/Artwork-bejamas/src/components/sections/Products/index.tsx\",\n                                lineNumber: 59,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                                className: (_Products_module_css__WEBPACK_IMPORTED_MODULE_9___default().selectWrapper),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: (_Products_module_css__WEBPACK_IMPORTED_MODULE_9___default().sortArrowIcon),\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                            src: \"/images/sort.png\",\n                                            height: 18,\n                                            width: 18\n                                        }, void 0, false, {\n                                            fileName: \"/Users/abdo/Downloads/Telegram Desktop/Artwork-bejamas/src/components/sections/Products/index.tsx\",\n                                            lineNumber: 69,\n                                            columnNumber: 15\n                                        }, _this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/abdo/Downloads/Telegram Desktop/Artwork-bejamas/src/components/sections/Products/index.tsx\",\n                                        lineNumber: 68,\n                                        columnNumber: 13\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                        className: (_Products_module_css__WEBPACK_IMPORTED_MODULE_9___default().sortBy),\n                                        children: \"Sort By\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/abdo/Downloads/Telegram Desktop/Artwork-bejamas/src/components/sections/Products/index.tsx\",\n                                        lineNumber: 71,\n                                        columnNumber: 13\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                                        className: (_Products_module_css__WEBPACK_IMPORTED_MODULE_9___default().sortSelect),\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                                value: \"Price\",\n                                                children: \"Price\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/abdo/Downloads/Telegram Desktop/Artwork-bejamas/src/components/sections/Products/index.tsx\",\n                                                lineNumber: 73,\n                                                columnNumber: 15\n                                            }, _this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                                value: \"Order\",\n                                                children: \"Order\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/abdo/Downloads/Telegram Desktop/Artwork-bejamas/src/components/sections/Products/index.tsx\",\n                                                lineNumber: 74,\n                                                columnNumber: 15\n                                            }, _this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/abdo/Downloads/Telegram Desktop/Artwork-bejamas/src/components/sections/Products/index.tsx\",\n                                        lineNumber: 72,\n                                        columnNumber: 13\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/abdo/Downloads/Telegram Desktop/Artwork-bejamas/src/components/sections/Products/index.tsx\",\n                                lineNumber: 67,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/abdo/Downloads/Telegram Desktop/Artwork-bejamas/src/components/sections/Products/index.tsx\",\n                        lineNumber: 58,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/abdo/Downloads/Telegram Desktop/Artwork-bejamas/src/components/sections/Products/index.tsx\",\n                lineNumber: 53,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_Products_module_css__WEBPACK_IMPORTED_MODULE_9___default().mainSection),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_Products_module_css__WEBPACK_IMPORTED_MODULE_9___default().filterSection),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(src_components_sections_Filter__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                filterType: \"category\",\n                                title: \"category\",\n                                items: src_constant_category__WEBPACK_IMPORTED_MODULE_7__.Categories\n                            }, void 0, false, {\n                                fileName: \"/Users/abdo/Downloads/Telegram Desktop/Artwork-bejamas/src/components/sections/Products/index.tsx\",\n                                lineNumber: 81,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(src_components_sections_Filter__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                filterType: \"price\",\n                                title: \"Price Range\",\n                                items: src_constant_Prices__WEBPACK_IMPORTED_MODULE_8__.Prices\n                            }, void 0, false, {\n                                fileName: \"/Users/abdo/Downloads/Telegram Desktop/Artwork-bejamas/src/components/sections/Products/index.tsx\",\n                                lineNumber: 82,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/abdo/Downloads/Telegram Desktop/Artwork-bejamas/src/components/sections/Products/index.tsx\",\n                        lineNumber: 80,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_Products_module_css__WEBPACK_IMPORTED_MODULE_9___default().productsWrapper),\n                                children: processedProducts === null || processedProducts === void 0 ? void 0 : processedProducts.map(function(product, index) {\n                                    var bestSeller = product.bestSeller, image = product.image, category = product.category, name = product.name, price = product.price;\n                                    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(src_components_ui_Card__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                        product: product,\n                                        bestSeller: bestSeller,\n                                        image: image,\n                                        category: category,\n                                        name: name,\n                                        price: price\n                                    }, index, false, {\n                                        fileName: \"/Users/abdo/Downloads/Telegram Desktop/Artwork-bejamas/src/components/sections/Products/index.tsx\",\n                                        lineNumber: 90,\n                                        columnNumber: 17\n                                    }, _this1));\n                                })\n                            }, void 0, false, {\n                                fileName: \"/Users/abdo/Downloads/Telegram Desktop/Artwork-bejamas/src/components/sections/Products/index.tsx\",\n                                lineNumber: 85,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_Products_module_css__WEBPACK_IMPORTED_MODULE_9___default().paginationWrapper),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(src_components_ui_PaginationBar__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                                    fileName: \"/Users/abdo/Downloads/Telegram Desktop/Artwork-bejamas/src/components/sections/Products/index.tsx\",\n                                    lineNumber: 103,\n                                    columnNumber: 13\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"/Users/abdo/Downloads/Telegram Desktop/Artwork-bejamas/src/components/sections/Products/index.tsx\",\n                                lineNumber: 102,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/abdo/Downloads/Telegram Desktop/Artwork-bejamas/src/components/sections/Products/index.tsx\",\n                        lineNumber: 84,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/abdo/Downloads/Telegram Desktop/Artwork-bejamas/src/components/sections/Products/index.tsx\",\n                lineNumber: 79,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/abdo/Downloads/Telegram Desktop/Artwork-bejamas/src/components/sections/Products/index.tsx\",\n        lineNumber: 52,\n        columnNumber: 5\n    }, _this));\n};\n_s(Products, \"YTGMLWzEMwEfV9ZauILMi8ecgNM=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_6__.useDispatch,\n        react_redux__WEBPACK_IMPORTED_MODULE_6__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_6__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_6__.useSelector\n    ];\n});\n_c1 = Products;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Products);\nvar _c, _c1;\n$RefreshReg$(_c, \"NotFound\");\n$RefreshReg$(_c1, \"Products\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9zZWN0aW9ucy9Qcm9kdWN0cy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBOEI7QUFDb0I7QUFDVDtBQUVrQjtBQUNSO0FBQ1Q7QUFDWTtBQUNKO0FBQ047Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJckMsR0FBSyxDQUFDWSxRQUFRLEdBQUUsUUFDckIsR0FEeUIsQ0FBQztJQUMxQixNQUFNLDZFQUNIQyxDQUFHO1FBQUNDLEtBQUssRUFBRSxDQUFDQztZQUFBQSxPQUFPLEVBQUMsQ0FBTTtZQUFFQyxVQUFVLEVBQUMsQ0FBUTtZQUFFQyxjQUFjLEVBQUMsQ0FBUTtRQUFBLENBQUM7OEZBQ3JFQyxDQUFDO1lBQUNKLEtBQUssRUFBRSxDQUFDSztnQkFBQUEsVUFBVSxFQUFFLENBQU07Z0JBQUVDLFFBQVEsRUFBQyxFQUFFO1lBQUEsQ0FBQztzQkFBRSxDQUFTOzs7Ozs7Ozs7OztBQUc5RCxDQUFDO0tBTllSLFFBQVE7QUFTckIsR0FBSyxDQUFDUyxRQUFRLEdBQUcsUUFDakIsR0FEdUIsQ0FBQzs7O0lBQ3RCLEdBQUssQ0FBQ0MsUUFBUSxHQUFHYix3REFBVztJQUM1QixHQUFLLENBQW1CTixHQUFZLEdBQVpBLCtDQUFRLENBQUMsQ0FBQyxDQUFDLEdBQTVCb0IsSUFBSSxHQUFhcEIsR0FBWSxLQUF2QnFCLE9BQU8sR0FBSXJCLEdBQVk7SUFFcEMsR0FBSyxDQUFDc0IsZUFBZSxHQUFFakIsd0RBQVcsQ0FBQyxRQUFRLENBQVBrQixLQUFTO1FBQUlBLE1BQU1DLENBQU5ELEtBQUssQ0FBQ0MsT0FBTyxDQUFDQyxRQUFROztJQUN2RSxHQUFLLENBQUNDLFdBQVcsR0FBR3JCLHdEQUFXLENBQUMsUUFBUSxDQUFQa0IsS0FBUztRQUFHQSxNQUFNQyxDQUFORCxLQUFLLENBQUNDLE9BQU8sQ0FBQ0csaUJBQWlCLENBQUNELFdBQVc7O0lBQ3hGLEdBQUssQ0FBQ0MsaUJBQWlCLEdBQUd0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QUFFb0MsR0FBRyxDQUFDLFFBQVEsQ0FBUHZDLE9BQU8sRUFBRXdDLEtBQUssRUFBSyxDQUFDO29DQUMzQyxHQUFLLENBQUdDLFVBQVUsR0FBbUN6QyxPQUFPLENBQXBEeUMsVUFBVSxFQUFFQyxLQUFLLEdBQTRCMUMsT0FBTyxDQUF4QzBDLEtBQUssRUFBRTlCLFFBQVEsR0FBa0JaLE9BQU8sQ0FBakNZLFFBQVEsRUFBRStCLElBQUksR0FBWTNDLE9BQU8sQ0FBdkIyQyxJQUFJLEVBQUVDLEtBQUssR0FBSzVDLE9BQU8sQ0FBakI0QyxLQUFLO29DQUNoRCxNQUFNLDZFQUNIbkUsOERBQUk7d0NBQ0h1QixPQUFPLEVBQUVBLE9BQU87d0NBQ2hCeUMsVUFBVSxFQUFFQSxVQUFVO3dDQUN0QkMsS0FBSyxFQUFFQSxLQUFLO3dDQUVaOUIsUUFBUSxFQUFFQSxRQUFRO3dDQUNsQitCLElBQUksRUFBRUEsSUFBSTt3Q0FDVkMsS0FBSyxFQUFFQSxLQUFLO3VDQUhQSixLQUFLOzs7OztnQ0FNaEIsQ0FBQzs7Ozs7O3dHQUVGdEQsQ0FBRztnQ0FBQzJCLFNBQVMsRUFBRWpDLCtFQUF3QjtzSEFDckNGLHVFQUFhOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTTFCLENBQUM7R0F0RktnQixRQUFROztRQUNLWixvREFBVztRQUdMRCxvREFBVztRQUNkQSxvREFBVztRQUNMQSxvREFBVzs7O01BTmpDYSxRQUFRO0FBd0ZkLCtEQUFlQSxRQUFRLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvc2VjdGlvbnMvUHJvZHVjdHMvaW5kZXgudHN4PzAyZmUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IENhcmQgZnJvbSBcInNyYy9jb21wb25lbnRzL3VpL0NhcmRcIjtcbmltcG9ydCBDaGVja0JveCBmcm9tIFwic3JjL2NvbXBvbmVudHMvdWkvQ2hlY2tCb3hcIjtcbmltcG9ydCBQYWdpbmF0aW9uQmFyIGZyb20gXCJzcmMvY29tcG9uZW50cy91aS9QYWdpbmF0aW9uQmFyXCI7XG5pbXBvcnQgRmlsdGVyIGZyb20gXCJzcmMvY29tcG9uZW50cy9zZWN0aW9ucy9GaWx0ZXJcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vUHJvZHVjdHMubW9kdWxlLmNzc1wiO1xuaW1wb3J0IHsgdXNlU2VsZWN0b3IsIHVzZURpc3BhdGNoIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgeyBDYXRlZ29yaWVzIH0gZnJvbSBcInNyYy9jb25zdGFudC9jYXRlZ29yeVwiO1xuaW1wb3J0IHsgUHJpY2VzIH0gZnJvbSBcInNyYy9jb25zdGFudC9QcmljZXNcIjtcbmltcG9ydCB7IGFkZEZpbHRlciwgc3RvcmVEYXRhIH0gZnJvbSBcInNyYy9zdG9yZS9wcm9kdWN0c1JlZHVjZXJcIjtcblxuXG5leHBvcnQgY29uc3QgTm90Rm91bmQgPSgpPT57XG4gIHJldHVybiAoXG4gICAgPGRpdiBzdHlsZT17e2Rpc3BsYXk6J2ZsZXgnLCBhbGlnbkl0ZW1zOidjZW50ZXInLCBqdXN0aWZ5Q29udGVudDpcImNlbnRlclwifX0+XG4gICAgICAgIDxhIHN0eWxlPXt7Zm9udFdlaWdodDogJ2JvbGQnLCBmb250U2l6ZTozMH19Pk5PVCBGT1VORDwvYT5cbiAgPC9kaXY+XG4gICAgKVxufVxuXG5cbmNvbnN0IFByb2R1Y3RzID0gKCkgPT4ge1xuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKClcbiAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGUoW10pXG5cbiAgY29uc3Qgb3JpZ25hbFByb2R1Y3RzID11c2VTZWxlY3Rvcigoc3RhdGU6YW55KT0+IHN0YXRlLnByb2R1Y3QucHJvZHVjdHMpXG4gIGNvbnN0IGZpbHRlckl0ZW1zID0gdXNlU2VsZWN0b3IoKHN0YXRlOmFueSk9PnN0YXRlLnByb2R1Y3QucHJvY2Vzc2VkUHJvZHVjdHMuZmlsdGVySXRlbXMpXG4gIGNvbnN0IHByb2Nlc3NlZFByb2R1Y3RzID0gdXNlU2VsZWN0b3IoXG4gICAgKHN0YXRlOiBhbnkpID0+IHN0YXRlLnByb2R1Y3QucHJvY2Vzc2VkUHJvZHVjdHMucHJvZHVjdHNcbiAgKTtcbiAgXG4gIFxuICBjb25zb2xlLmxvZyhcIkZST00gUFJPRFVDVCBQQUdFXCIsIGRhdGEpO1xuICBjb25zdCBmaWx0ZXJQcm9kdWN0ID0oKT0+e1xuICAgIGxldCB6ID1bXVxuICAgIGxldCB4ID1bLi4ub3JpZ25hbFByb2R1Y3RzXVxuICAgIGlmKGZpbHRlckl0ZW1zICE9IFtdKXtcbiAgICAgIHo9IHguZmlsdGVyKChpdGVtKT0+IGZpbHRlckl0ZW1zLmluY2x1ZGVzKGl0ZW0uY2F0ZWdvcnkpKVxuICAgICAgc2V0RGF0YSh6KVxuICAgICAgcmV0dXJuIHpcbiAgICB9XG4gICAgcmV0dXJuIHNldERhdGEob3JpZ25hbFByb2R1Y3RzKVxuICAgICAgXG4gICAgfVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZmlsdGVyUHJvZHVjdCgpXG4gIH0sIFtmaWx0ZXJJdGVtc10pXG4gIFxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGlhbmVyfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucHJvZHVjdF9zZWN0aW9uX2hlYWRlcn0+XG4gICAgICAgIDxzcGFuPlxuICAgICAgICAgIDxhIGNsYXNzTmFtZT17c3R5bGVzLm1haW5TZWN0aW9uVGl0bGV9PlBob3RvZ3JhcGh5IC8gPC9hPlxuICAgICAgICAgIDxhIGNsYXNzTmFtZT17c3R5bGVzLmZpbHRlcmRUaXRsZX0+UHJlbXVpbUFydDwvYT5cbiAgICAgICAgPC9zcGFuPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5zb3J0V3JhcHBlcn0+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuc29ydE1vYmlsZUljb25lfT5cbiAgICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgICBzcmM9e1wiL2ltYWdlcy9maWx0ZXJNb2JpbGVJY29uLnBuZ1wifVxuICAgICAgICAgICAgICBoZWlnaHQ9ezI5fVxuICAgICAgICAgICAgICB3aWR0aD17Mjl9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvc3Bhbj5cblxuICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT17c3R5bGVzLnNlbGVjdFdyYXBwZXJ9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zb3J0QXJyb3dJY29ufT5cbiAgICAgICAgICAgICAgPEltYWdlIHNyYz17XCIvaW1hZ2VzL3NvcnQucG5nXCJ9IGhlaWdodD17MTh9IHdpZHRoPXsxOH0gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT17c3R5bGVzLnNvcnRCeX0+U29ydCBCeTwvbGFiZWw+XG4gICAgICAgICAgICA8c2VsZWN0IGNsYXNzTmFtZT17c3R5bGVzLnNvcnRTZWxlY3R9PlxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiUHJpY2VcIj5QcmljZTwvb3B0aW9uPlxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiT3JkZXJcIj5PcmRlcjwvb3B0aW9uPlxuICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgPC9mb3JtPlxuICAgICAgICA8L3NwYW4+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubWFpblNlY3Rpb259PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZpbHRlclNlY3Rpb259PlxuICAgICAgICAgIDxGaWx0ZXIgZmlsdGVyVHlwZT1cImNhdGVnb3J5XCIgdGl0bGU9XCJjYXRlZ29yeVwiIGl0ZW1zPXtDYXRlZ29yaWVzfSAvPlxuICAgICAgICAgIDxGaWx0ZXIgZmlsdGVyVHlwZT1cInByaWNlXCIgdGl0bGU9XCJQcmljZSBSYW5nZVwiIGl0ZW1zPXtQcmljZXN9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucHJvZHVjdHNXcmFwcGVyfT5cbiAgICAgICAgICAgIHsvKiB7cHJvY2Vzc2VkUHJvZHVjdHMubGVuZ3RoIDwwICYmIDxOb3RGb3VuZC8+fSAqL31cbiAgICAgICAgICAgIHtwcm9jZXNzZWRQcm9kdWN0cz8ubWFwKChwcm9kdWN0LCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCB7IGJlc3RTZWxsZXIsIGltYWdlLCBjYXRlZ29yeSwgbmFtZSwgcHJpY2UgfSA9IHByb2R1Y3Q7XG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPENhcmRcbiAgICAgICAgICAgICAgICAgIHByb2R1Y3Q9e3Byb2R1Y3R9XG4gICAgICAgICAgICAgICAgICBiZXN0U2VsbGVyPXtiZXN0U2VsbGVyfVxuICAgICAgICAgICAgICAgICAgaW1hZ2U9e2ltYWdlfVxuICAgICAgICAgICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICAgICAgICAgIGNhdGVnb3J5PXtjYXRlZ29yeX1cbiAgICAgICAgICAgICAgICAgIG5hbWU9e25hbWV9XG4gICAgICAgICAgICAgICAgICBwcmljZT17cHJpY2V9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0pfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucGFnaW5hdGlvbldyYXBwZXJ9PlxuICAgICAgICAgICAgPFBhZ2luYXRpb25CYXIgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3RzO1xuIl0sIm5hbWVzIjpbIkltYWdlIiwiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkNhcmQiLCJQYWdpbmF0aW9uQmFyIiwiRmlsdGVyIiwic3R5bGVzIiwidXNlU2VsZWN0b3IiLCJ1c2VEaXNwYXRjaCIsIkNhdGVnb3JpZXMiLCJQcmljZXMiLCJOb3RGb3VuZCIsImRpdiIsInN0eWxlIiwiZGlzcGxheSIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCIsImEiLCJmb250V2VpZ2h0IiwiZm9udFNpemUiLCJQcm9kdWN0cyIsImRpc3BhdGNoIiwiZGF0YSIsInNldERhdGEiLCJvcmlnbmFsUHJvZHVjdHMiLCJzdGF0ZSIsInByb2R1Y3QiLCJwcm9kdWN0cyIsImZpbHRlckl0ZW1zIiwicHJvY2Vzc2VkUHJvZHVjdHMiLCJjb25zb2xlIiwibG9nIiwiZmlsdGVyUHJvZHVjdCIsInoiLCJ4IiwiZmlsdGVyIiwiaXRlbSIsImluY2x1ZGVzIiwiY2F0ZWdvcnkiLCJjbGFzc05hbWUiLCJjb250aWFuZXIiLCJwcm9kdWN0X3NlY3Rpb25faGVhZGVyIiwic3BhbiIsIm1haW5TZWN0aW9uVGl0bGUiLCJmaWx0ZXJkVGl0bGUiLCJzb3J0V3JhcHBlciIsInNvcnRNb2JpbGVJY29uZSIsInNyYyIsImhlaWdodCIsIndpZHRoIiwiZm9ybSIsInNlbGVjdFdyYXBwZXIiLCJzb3J0QXJyb3dJY29uIiwibGFiZWwiLCJzb3J0QnkiLCJzZWxlY3QiLCJzb3J0U2VsZWN0Iiwib3B0aW9uIiwidmFsdWUiLCJtYWluU2VjdGlvbiIsImZpbHRlclNlY3Rpb24iLCJmaWx0ZXJUeXBlIiwidGl0bGUiLCJpdGVtcyIsInByb2R1Y3RzV3JhcHBlciIsIm1hcCIsImluZGV4IiwiYmVzdFNlbGxlciIsImltYWdlIiwibmFtZSIsInByaWNlIiwicGFnaW5hdGlvbldyYXBwZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/sections/Products/index.tsx\n");

/***/ })

});