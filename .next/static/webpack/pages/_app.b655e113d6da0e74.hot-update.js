"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/store/testReducer.tsx":
/*!***********************************!*\
  !*** ./src/store/testReducer.tsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"modalSlice\": function() { return /* binding */ modalSlice; },\n/* harmony export */   \"modalCart\": function() { return /* binding */ modalCart; },\n/* harmony export */   \"modalFilter\": function() { return /* binding */ modalFilter; }\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @reduxjs/toolkit */ \"./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js\");\n/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./store */ \"./src/store/store.tsx\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\n// const initialState ={\n//   modalCart:\n// }\nvar modalSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.createSlice)({\n    name: \"store\",\n    initialState: _store__WEBPACK_IMPORTED_MODULE_0__.initialState,\n    reducers: {\n        modalCart: function(state) {\n            return _objectSpread({}, state, {\n                modalCart: !state.modalCart\n            });\n        },\n        modalFilter: function(state) {\n            return _objectSpread({}, state, {\n                modalFilter: !state.modalFilter\n            });\n        }\n    }\n});\nvar _actions = modalSlice.actions;\nvar modalCart = _actions.modalCart, modalFilter = _actions.modalFilter;\n/* harmony default export */ __webpack_exports__[\"default\"] = (modalSlice.reducer);\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3RvcmUvdGVzdFJlZHVjZXIudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUE4QztBQUNSOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUl0QyxFQUF3QjtBQUN4QixFQUFlO0FBQ2YsRUFBSTtBQUNHLEdBQUssQ0FBQ0UsVUFBVSxHQUFHRiw2REFBVyxDQUFDLENBQUM7SUFDckNHLElBQUksRUFBRSxDQUFPO0lBQ2JGLFlBQVksRUFBWkEsZ0RBQVk7SUFDWkcsUUFBUSxFQUFFLENBQUM7UUFDVEMsU0FBUyxFQUFFLFFBQVEsQ0FBUEMsS0FBVSxFQUFLLENBQUM7WUFDMUIsTUFBTSxtQkFBTUEsS0FBSztnQkFBRUQsU0FBUyxHQUFHQyxLQUFLLENBQUNELFNBQVM7O1FBQ2hELENBQUM7UUFDREUsV0FBVyxFQUFFLFFBQVEsQ0FBUEQsS0FBVSxFQUFLLENBQUM7WUFDNUIsTUFBTSxtQkFBTUEsS0FBSztnQkFBRUMsV0FBVyxHQUFHRCxLQUFLLENBQUNDLFdBQVc7O1FBQ3BELENBQUM7SUFDSCxDQUFDO0FBQ0gsQ0FBQztJQUV5Q0wsUUFBa0IsR0FBbEJBLFVBQVUsQ0FBQ00sT0FBTztBQUFyRCxHQUFLLENBQUdILFNBQVMsR0FBa0JILFFBQWtCLENBQTdDRyxTQUFTLEVBQUVFLFdBQVcsR0FBS0wsUUFBa0IsQ0FBbENLLFdBQVc7QUFFckMsK0RBQWVMLFVBQVUsQ0FBQ08sT0FBTyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9zdG9yZS90ZXN0UmVkdWNlci50c3g/OTFhMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVTbGljZSB9IGZyb20gXCJAcmVkdXhqcy90b29sa2l0XCI7XG5pbXBvcnQgeyBpbml0aWFsU3RhdGUgfSBmcm9tIFwiLi9zdG9yZVwiO1xuaW1wb3J0IHsgZ2V0ZmVhdHVyZWRQcm9kdWN0IH0gZnJvbSBcInNyYy91dGlscy9mZWF0dXJlZFByb2R1Y3RcIjtcbmltcG9ydCB7IGZpbmRQcm9kdWN0QnlJZCB9IGZyb20gXCJzcmMvdXRpbHMvY2FydFV0aWxzXCI7XG5cbi8vIGNvbnN0IGluaXRpYWxTdGF0ZSA9e1xuLy8gICBtb2RhbENhcnQ6XG4vLyB9XG5leHBvcnQgY29uc3QgbW9kYWxTbGljZSA9IGNyZWF0ZVNsaWNlKHtcbiAgbmFtZTogXCJzdG9yZVwiLFxuICBpbml0aWFsU3RhdGUsXG4gIHJlZHVjZXJzOiB7XG4gICAgbW9kYWxDYXJ0OiAoc3RhdGU6IGFueSkgPT4ge1xuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIG1vZGFsQ2FydDogIXN0YXRlLm1vZGFsQ2FydCB9O1xuICAgIH0sXG4gICAgbW9kYWxGaWx0ZXI6IChzdGF0ZTogYW55KSA9PiB7XG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgbW9kYWxGaWx0ZXI6ICFzdGF0ZS5tb2RhbEZpbHRlciB9O1xuICAgIH0sXG4gIH0sXG59KTtcblxuZXhwb3J0IGNvbnN0IHsgbW9kYWxDYXJ0LCBtb2RhbEZpbHRlciB9ID0gbW9kYWxTbGljZS5hY3Rpb25zO1xuXG5leHBvcnQgZGVmYXVsdCBtb2RhbFNsaWNlLnJlZHVjZXI7XG4iXSwibmFtZXMiOlsiY3JlYXRlU2xpY2UiLCJpbml0aWFsU3RhdGUiLCJtb2RhbFNsaWNlIiwibmFtZSIsInJlZHVjZXJzIiwibW9kYWxDYXJ0Iiwic3RhdGUiLCJtb2RhbEZpbHRlciIsImFjdGlvbnMiLCJyZWR1Y2VyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/store/testReducer.tsx\n");

/***/ })

});