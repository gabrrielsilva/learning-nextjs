"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Home),\n/* harmony export */   \"getStaticProps\": () => (/* binding */ getStaticProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction Home({ tasks , date  }) {\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                children: tasks.map((task)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: task\n                    }, task, false, {\n                        fileName: \"C:\\\\development\\\\nodejs\\\\next-basic\\\\pages\\\\index.tsx\",\n                        lineNumber: 8,\n                        columnNumber: 11\n                    }, this)\n                )\n            }, void 0, false, {\n                fileName: \"C:\\\\development\\\\nodejs\\\\next-basic\\\\pages\\\\index.tsx\",\n                lineNumber: 6,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: date\n            }, void 0, false, {\n                fileName: \"C:\\\\development\\\\nodejs\\\\next-basic\\\\pages\\\\index.tsx\",\n                lineNumber: 11,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true));\n};\n// export const getServerSideProps: GetServerSideProps = async () => {\n//   const response = await fetch(\n//     'https://jsonplaceholder.typicode.com/todos'\n//   );\n//   const data = await response.json();\n//   const task = data.map((item) => item.title);\n//   return {\n//     props: {\n//       tasks: task,\n//       date: new Date().toISOString(),\n//     },\n//   };\n// };\nconst getStaticProps = async ()=>{\n    const response = await fetch('https://jsonplaceholder.typicode.com/todos');\n    const data = await response.json();\n    const task = data.map((item)=>item.title\n    );\n    return {\n        props: {\n            tasks: task,\n            date: new Date().toISOString()\n        },\n        revalidate: 60 * 60 * 4\n    };\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFFZSxRQUFRLENBQUNBLElBQUksQ0FBQyxDQUFDLENBQUNDLEtBQUssR0FBRUMsSUFBSSxFQUFDLENBQUMsRUFBRSxDQUFDO0lBQzdDLE1BQU07O3dGQUVEQyxDQUFFOzBCQUNBRixLQUFLLENBQUNHLEdBQUcsRUFBRUMsSUFBSSwrRUFDYkMsQ0FBRTtrQ0FBYUQsSUFBSTt1QkFBWEEsSUFBSTs7Ozs7Ozs7Ozs7d0ZBR2hCRSxDQUFFOzBCQUFFTCxJQUFJOzs7Ozs7OztBQUdmLENBQUM7QUFFRCxFQUFzRTtBQUN0RSxFQUFrQztBQUNsQyxFQUFtRDtBQUNuRCxFQUFPO0FBRVAsRUFBd0M7QUFDeEMsRUFBaUQ7QUFFakQsRUFBYTtBQUNiLEVBQWU7QUFDZixFQUFxQjtBQUNyQixFQUF3QztBQUN4QyxFQUFTO0FBQ1QsRUFBTztBQUNQLEVBQUs7QUFFRSxLQUFLLENBQUNNLGNBQWMsYUFBK0IsQ0FBQztJQUN6RCxLQUFLLENBQUNDLFFBQVEsR0FBRyxLQUFLLENBQUNDLEtBQUssQ0FBQyxDQUE0QztJQUV6RSxLQUFLLENBQUNDLElBQUksR0FBRyxLQUFLLENBQUNGLFFBQVEsQ0FBQ0csSUFBSTtJQUNoQyxLQUFLLENBQUNQLElBQUksR0FBR00sSUFBSSxDQUFDUCxHQUFHLEVBQUVTLElBQUksR0FBS0EsSUFBSSxDQUFDQyxLQUFLOztJQUUxQyxNQUFNLENBQUMsQ0FBQztRQUNOQyxLQUFLLEVBQUUsQ0FBQztZQUNOZCxLQUFLLEVBQUVJLElBQUk7WUFDWEgsSUFBSSxFQUFFLEdBQUcsQ0FBQ2MsSUFBSSxHQUFHQyxXQUFXO1FBQzlCLENBQUM7UUFDREMsVUFBVSxFQUFFLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQztJQUN6QixDQUFDO0FBQ0gsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL25leHQtYmFzaWMvLi9wYWdlcy9pbmRleC50c3g/MDdmZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHZXRTdGF0aWNQcm9wcyB9IGZyb20gJ25leHQnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKHsgdGFza3MsIGRhdGUgfSkge1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8dWw+XG4gICAgICAgIHt0YXNrcy5tYXAoKHRhc2spID0+IChcbiAgICAgICAgICA8bGkga2V5PXt0YXNrfT57dGFza308L2xpPlxuICAgICAgICApKX1cbiAgICAgIDwvdWw+XG4gICAgICA8aDE+e2RhdGV9PC9oMT5cbiAgICA8Lz5cbiAgKTtcbn1cblxuLy8gZXhwb3J0IGNvbnN0IGdldFNlcnZlclNpZGVQcm9wczogR2V0U2VydmVyU2lkZVByb3BzID0gYXN5bmMgKCkgPT4ge1xuLy8gICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxuLy8gICAgICdodHRwczovL2pzb25wbGFjZWhvbGRlci50eXBpY29kZS5jb20vdG9kb3MnXG4vLyAgICk7XG5cbi8vICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbi8vICAgY29uc3QgdGFzayA9IGRhdGEubWFwKChpdGVtKSA9PiBpdGVtLnRpdGxlKTtcblxuLy8gICByZXR1cm4ge1xuLy8gICAgIHByb3BzOiB7XG4vLyAgICAgICB0YXNrczogdGFzayxcbi8vICAgICAgIGRhdGU6IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKSxcbi8vICAgICB9LFxuLy8gICB9O1xuLy8gfTtcblxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1Byb3BzOiBHZXRTdGF0aWNQcm9wcyA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9qc29ucGxhY2Vob2xkZXIudHlwaWNvZGUuY29tL3RvZG9zJyk7XG5cbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgY29uc3QgdGFzayA9IGRhdGEubWFwKChpdGVtKSA9PiBpdGVtLnRpdGxlKTtcblxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICB0YXNrczogdGFzayxcbiAgICAgIGRhdGU6IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKSxcbiAgICB9LFxuICAgIHJldmFsaWRhdGU6IDYwICogNjAgKiA0LCAvLzQgaG91cnNcbiAgfTtcbn07XG4iXSwibmFtZXMiOlsiSG9tZSIsInRhc2tzIiwiZGF0ZSIsInVsIiwibWFwIiwidGFzayIsImxpIiwiaDEiLCJnZXRTdGF0aWNQcm9wcyIsInJlc3BvbnNlIiwiZmV0Y2giLCJkYXRhIiwianNvbiIsIml0ZW0iLCJ0aXRsZSIsInByb3BzIiwiRGF0ZSIsInRvSVNPU3RyaW5nIiwicmV2YWxpZGF0ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.tsx"));
module.exports = __webpack_exports__;

})();