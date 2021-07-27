self["webpackHotUpdate_N_E"]("pages/checkout",{

/***/ "./src/pages/checkout.js":
/*!*******************************!*\
  !*** ./src/pages/checkout.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_hp_Desktop_Amazon_starter_template_nextjs_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Header */ "./src/components/Header.js");
/* harmony import */ var _components_CheckoutProduct__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/CheckoutProduct */ "./src/components/CheckoutProduct.js");
/* harmony import */ var _slices_basketSlice__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../slices/basketSlice */ "./src/slices/basketSlice.js");
/* harmony import */ var react_currency_formatter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-currency-formatter */ "./node_modules/react-currency-formatter/dist/react-currency-formatter.umd.js");
/* harmony import */ var react_currency_formatter__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_currency_formatter__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next-auth/client */ "./node_modules/next-auth/dist/client/index.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_9__);
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "C:\\Users\\hp\\Desktop\\Amazon-starter-template-nextjs\\src\\pages\\checkout.js",
    _s = $RefreshSig$();










function Checkout() {
  _s();

  var _this = this;

  var items = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)(_slices_basketSlice__WEBPACK_IMPORTED_MODULE_6__.selectItems);
  var total = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)(_slices_basketSlice__WEBPACK_IMPORTED_MODULE_6__.selectTotal);

  var _useSession = (0,next_auth_client__WEBPACK_IMPORTED_MODULE_8__.useSession)(),
      _useSession2 = (0,C_Users_hp_Desktop_Amazon_starter_template_nextjs_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.default)(_useSession, 1),
      session = _useSession2[0];

  var groupedItems = Object.values((0,lodash__WEBPACK_IMPORTED_MODULE_9__.groupBy)(items, "id"));
  console.log(groupedItems);
  console.log(groupedItems[0]);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "bg-gray-100",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header__WEBPACK_IMPORTED_MODULE_4__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("main", {
      className: "lg:flex max-w-screen-2xl mx-auto",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "flex-grow m-5 shadow-sm",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
          src: "https://links.papareact.com/ikj",
          width: 1020,
          height: 250,
          objectFit: "contain"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "flex flex-col p-5 space-y-50 bg-white",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
            className: "text-3xl ".concat(items.length > 0 ? "border-b pb-4" : "pb-2"),
            children: items.length === 0 ? "Your Amazon Basket is empty." : "Shopping Basket"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 35,
            columnNumber: 25
          }, this), groupedItems.map(function (group, i) {
            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              timeout: 500,
              classNames: "item",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_CheckoutProduct__WEBPACK_IMPORTED_MODULE_5__.default, {
                id: group[0].id,
                title: group[0].title,
                rating: group[0].rating,
                price: group[0].price,
                description: group[0].description,
                category: group[0].category,
                image: group[0].image,
                hasPrime: group[0].hasPrime,
                quantity: group.length
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 48,
                columnNumber: 37
              }, _this)
            }, group[0].image, false, {
              fileName: _jsxFileName,
              lineNumber: 44,
              columnNumber: 33
            }, _this);
          })]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        "in": items.length > 0,
        timeout: 300,
        classNames: "disappear",
        unmountOnExit: true,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "flex flex-col bg-white p-10 shadow-md",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
            className: "whitespace-nowrap",
            children: ["Subtotal (", items.length, " items):", " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              className: "font-bold",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_currency_formatter__WEBPACK_IMPORTED_MODULE_7___default()), {
                quantity: total,
                currency: "INR"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 74,
                columnNumber: 33
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 73,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 71,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
            disabled: !session,
            className: "button mt-2 ".concat(!session && "from-gray-300 to-gray-500 border-gray-200 text-gray-300 cursor-not-allowed hover:from-gray-300"),
            children: !session ? "Sign in to checkout" : "Proceed to checkout"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 78,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 70,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 21,
    columnNumber: 9
  }, this);
}

_s(Checkout, "4q390FI+KBOvb6t1DrKpN7MM3M4=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector, react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector, next_auth_client__WEBPACK_IMPORTED_MODULE_8__.useSession];
});

_c = Checkout;
/* harmony default export */ __webpack_exports__["default"] = (Checkout);

var _c;

$RefreshReg$(_c, "Checkout");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2NoZWNrb3V0LmpzIl0sIm5hbWVzIjpbIkNoZWNrb3V0IiwiaXRlbXMiLCJ1c2VTZWxlY3RvciIsInNlbGVjdEl0ZW1zIiwidG90YWwiLCJzZWxlY3RUb3RhbCIsInVzZVNlc3Npb24iLCJzZXNzaW9uIiwiZ3JvdXBlZEl0ZW1zIiwiT2JqZWN0IiwidmFsdWVzIiwiZ3JvdXBCeSIsImNvbnNvbGUiLCJsb2ciLCJsZW5ndGgiLCJtYXAiLCJncm91cCIsImkiLCJpZCIsInRpdGxlIiwicmF0aW5nIiwicHJpY2UiLCJkZXNjcmlwdGlvbiIsImNhdGVnb3J5IiwiaW1hZ2UiLCJoYXNQcmltZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBR0EsU0FBU0EsUUFBVCxHQUFvQjtBQUFBOztBQUFBOztBQUNoQixNQUFNQyxLQUFLLEdBQUdDLHdEQUFXLENBQUNDLDREQUFELENBQXpCO0FBQ0EsTUFBTUMsS0FBSyxHQUFHRix3REFBVyxDQUFDRyw0REFBRCxDQUF6Qjs7QUFGZ0Isb0JBR0VDLDREQUFVLEVBSFo7QUFBQTtBQUFBLE1BR1RDLE9BSFM7O0FBS2hCLE1BQU1DLFlBQVksR0FBR0MsTUFBTSxDQUFDQyxNQUFQLENBQWNDLCtDQUFPLENBQUNWLEtBQUQsRUFBUSxJQUFSLENBQXJCLENBQXJCO0FBQ0FXLFNBQU8sQ0FBQ0MsR0FBUixDQUFZTCxZQUFaO0FBQ0FJLFNBQU8sQ0FBQ0MsR0FBUixDQUFZTCxZQUFZLENBQUMsQ0FBRCxDQUF4QjtBQUVBLHNCQUNJO0FBQUssYUFBUyxFQUFDLGFBQWY7QUFBQSw0QkFDSSw4REFBQyx1REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREosZUFHSTtBQUFNLGVBQVMsRUFBQyxrQ0FBaEI7QUFBQSw4QkFFSTtBQUFLLGlCQUFTLEVBQUMseUJBQWY7QUFBQSxnQ0FD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M2E4YWEwZDk2ODFlNmU4NmFmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi4vY29tcG9uZW50cy9IZWFkZXJcIjtcclxuaW1wb3J0IENoZWNrb3V0UHJvZHVjdCBmcm9tIFwiLi4vY29tcG9uZW50cy9DaGVja291dFByb2R1Y3RcIjtcclxuaW1wb3J0IHsgc2VsZWN0SXRlbXMsIHNlbGVjdFRvdGFsIH0gZnJvbSBcIi4uL3NsaWNlcy9iYXNrZXRTbGljZVwiO1xyXG5pbXBvcnQgQ3VycmVuY3kgZnJvbSBcInJlYWN0LWN1cnJlbmN5LWZvcm1hdHRlclwiO1xyXG5pbXBvcnQgeyB1c2VTZXNzaW9uIH0gZnJvbSBcIm5leHQtYXV0aC9jbGllbnRcIjtcclxuaW1wb3J0IHsgZ3JvdXBCeSB9IGZyb20gXCJsb2Rhc2hcIjtcclxuXHJcblxyXG5mdW5jdGlvbiBDaGVja291dCgpIHtcclxuICAgIGNvbnN0IGl0ZW1zID0gdXNlU2VsZWN0b3Ioc2VsZWN0SXRlbXMpO1xyXG4gICAgY29uc3QgdG90YWwgPSB1c2VTZWxlY3RvcihzZWxlY3RUb3RhbCk7XHJcbiAgICBjb25zdCBbc2Vzc2lvbl0gPSB1c2VTZXNzaW9uKCk7XHJcblxyXG4gICAgY29uc3QgZ3JvdXBlZEl0ZW1zID0gT2JqZWN0LnZhbHVlcyhncm91cEJ5KGl0ZW1zLCBcImlkXCIpKTtcclxuICAgIGNvbnNvbGUubG9nKGdyb3VwZWRJdGVtcyk7XHJcbiAgICBjb25zb2xlLmxvZyhncm91cGVkSXRlbXNbMF0pO1xyXG4gICAgXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctZ3JheS0xMDBcIj5cclxuICAgICAgICAgICAgPEhlYWRlciAvPlxyXG5cclxuICAgICAgICAgICAgPG1haW4gY2xhc3NOYW1lPVwibGc6ZmxleCBtYXgtdy1zY3JlZW4tMnhsIG14LWF1dG9cIj5cclxuICAgICAgICAgICAgICAgIHsvKiBMZWZ0ICovfVxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LWdyb3cgbS01IHNoYWRvdy1zbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzcmM9XCJodHRwczovL2xpbmtzLnBhcGFyZWFjdC5jb20vaWtqXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezEwMjB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD17MjUwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvYmplY3RGaXQ9XCJjb250YWluXCJcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgcC01IHNwYWNlLXktNTAgYmctd2hpdGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgxXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2B0ZXh0LTN4bCAke1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zLmxlbmd0aCA+IDAgPyBcImJvcmRlci1iIHBiLTRcIiA6IFwicGItMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXRlbXMubGVuZ3RoID09PSAwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcIllvdXIgQW1hem9uIEJhc2tldCBpcyBlbXB0eS5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJTaG9wcGluZyBCYXNrZXRcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9oMT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtncm91cGVkSXRlbXMubWFwKChncm91cCwgaSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtncm91cFswXS5pbWFnZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGltZW91dD17NTAwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWVzPVwiaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2hlY2tvdXRQcm9kdWN0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD17Z3JvdXBbMF0uaWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17Z3JvdXBbMF0udGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXRpbmc9e2dyb3VwWzBdLnJhdGluZ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByaWNlPXtncm91cFswXS5wcmljZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPXtncm91cFswXS5kZXNjcmlwdGlvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhdGVnb3J5PXtncm91cFswXS5jYXRlZ29yeX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlPXtncm91cFswXS5pbWFnZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhc1ByaW1lPXtncm91cFswXS5oYXNQcmltZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF1YW50aXR5PXtncm91cC5sZW5ndGh9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIHsvKiBSaWdodCAqL31cclxuICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICBpbj17aXRlbXMubGVuZ3RoID4gMH1cclxuICAgICAgICAgICAgICAgICAgICB0aW1lb3V0PXszMDB9XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lcz1cImRpc2FwcGVhclwiXHJcbiAgICAgICAgICAgICAgICAgICAgdW5tb3VudE9uRXhpdD5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgYmctd2hpdGUgcC0xMCBzaGFkb3ctbWRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cIndoaXRlc3BhY2Utbm93cmFwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBTdWJ0b3RhbCAoe2l0ZW1zLmxlbmd0aH0gaXRlbXMpOntcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZvbnQtYm9sZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDdXJyZW5jeSBxdWFudGl0eT17dG90YWx9IGN1cnJlbmN5PVwiSU5SXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9oMj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXshc2Vzc2lvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGJ1dHRvbiBtdC0yICR7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIXNlc3Npb24gJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImZyb20tZ3JheS0zMDAgdG8tZ3JheS01MDAgYm9yZGVyLWdyYXktMjAwIHRleHQtZ3JheS0zMDAgY3Vyc29yLW5vdC1hbGxvd2VkIGhvdmVyOmZyb20tZ3JheS0zMDBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyFzZXNzaW9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcIlNpZ24gaW4gdG8gY2hlY2tvdXRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJQcm9jZWVkIHRvIGNoZWNrb3V0XCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvbWFpbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENoZWNrb3V0OyJdLCJzb3VyY2VSb290IjoiIn0=