self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/Header.js":
/*!**********************************!*\
  !*** ./src/components/Header.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_hp_Desktop_Amazon_starter_template_nextjs_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @heroicons/react/outline */ "./node_modules/@heroicons/react/outline/esm/index.js");
/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next-auth/client */ "./node_modules/next-auth/dist/client/index.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _slices_basketSlice__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../slices/basketSlice */ "./src/slices/basketSlice.js");
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "C:\\Users\\hp\\Desktop\\Amazon-starter-template-nextjs\\src\\components\\Header.js",
    _s = $RefreshSig$();









function Header() {
  _s();

  var _useSession = (0,next_auth_client__WEBPACK_IMPORTED_MODULE_5__.useSession)(),
      _useSession2 = (0,C_Users_hp_Desktop_Amazon_starter_template_nextjs_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.default)(_useSession, 1),
      session = _useSession2[0];

  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)();
  var items = (0,react_redux__WEBPACK_IMPORTED_MODULE_7__.useSelector)(_slices_basketSlice__WEBPACK_IMPORTED_MODULE_8__.selectItems);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("header", {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "flex items-center bg-amazon_blue p-1 flex-grow",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "mt-2 flex items-center flex-grow sm:flex-grow-0 ml-10",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
          onClick: function onClick() {
            return router.push('/');
          },
          src: "http://links.papareact.com/f90",
          width: 150,
          height: 40,
          className: "cursor-pointer "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: " sm:flex hidden items-center bg-yellow-400 h-10 rounded-md flex-grow cursor-pointer mx-4 ",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
          className: "p-2 rounded-l-md h-full w-6 flex-grow flex-shrink focus:outline-none px-4",
          type: "text"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_4__.SearchIcon, {
          className: "h-12 p-4 "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "text-white flex items-center text-xs space-x-6 mx-6 whitespace-nowrap ",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          onClick: !session ? next_auth_client__WEBPACK_IMPORTED_MODULE_5__.signIn : next_auth_client__WEBPACK_IMPORTED_MODULE_5__.signOut,
          className: "cursor-pointer link flex flex-col items-center",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "flex items-center space-x-4",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
              children: session ? "Hello, ".concat(session.user.name) : "Sign In"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 40,
              columnNumber: 17
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
              children: session ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                src: session.user.image,
                height: 30,
                width: 30,
                className: "rounded-full"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 41,
                columnNumber: 31
              }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_4__.UserCircleIcon, {
                className: "h-8 text-white "
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 41,
                columnNumber: 116
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 41,
              columnNumber: 17
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 39,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            className: "font-extrabold md:text-sm",
            children: "Account & Lists"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 43,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "link",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            children: "Returns"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 46,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            className: "font-extrabold md:text-sm",
            children: "& Orders"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 47,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          onClick: function onClick() {
            return router.push('/checkout');
          },
          className: "link relative flex items-center",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            className: "absolute top-0 right-0 md:right-10 h-4 w-4 bg-yellow-400 text-center rounded-full text-black font-bold",
            children: items.length
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 50,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_4__.ShoppingCartIcon, {
            className: "h-10"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 53,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            className: "hidden md:inline font-extrabold md:text-sm",
            children: "Basket"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 54,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 19,
    columnNumber: 5
  }, this);
}

_s(Header, "labAizgvwkmtkcNhy7CcOsuGFj8=", false, function () {
  return [next_auth_client__WEBPACK_IMPORTED_MODULE_5__.useSession, next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter, react_redux__WEBPACK_IMPORTED_MODULE_7__.useSelector];
});

_c = Header;
/* harmony default export */ __webpack_exports__["default"] = (Header);

var _c;

$RefreshReg$(_c, "Header");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvSGVhZGVyLmpzIl0sIm5hbWVzIjpbIkhlYWRlciIsInVzZVNlc3Npb24iLCJzZXNzaW9uIiwicm91dGVyIiwidXNlUm91dGVyIiwiaXRlbXMiLCJ1c2VTZWxlY3RvciIsInNlbGVjdEl0ZW1zIiwicHVzaCIsInNpZ25JbiIsInNpZ25PdXQiLCJ1c2VyIiwibmFtZSIsImltYWdlIiwibGVuZ3RoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFNQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxNQUFULEdBQWtCO0FBQUE7O0FBQUEsb0JBQ0VDLDREQUFVLEVBRFo7QUFBQTtBQUFBLE1BQ1RDLE9BRFM7O0FBRWhCLE1BQU1DLE1BQU0sR0FBR0Msc0RBQVMsRUFBeEI7QUFDQSxNQUFNQyxLQUFLLEdBQUdDLHdEQUFXLENBQUNDLDREQUFELENBQXpCO0FBQ0Esc0JBQ0U7QUFBQSwyQkFDRTtBQUFLLGVBQVMsRUFBQyxnREFBZjtBQUFBLDhCQUNFO0FBQUssaUJBQVMsRUFBQyx1REFBZjtBQUFBLCtCQUNFLDhEQUFDLG1EQUFEO0FBQU8saUJBQU8sRUFBRTtBQUFBLG1CQUFJSixNQUFNLENBQUNLLElBQVAsQ0FBWSxHQUFaLENBQUo7QUFBQSxXQUFoQjtBQUFzQyxhQUFHLEVBQUMsZ0NBQTFDO0FBQTJFLGVBQUssRUFBRSxHQUFsRjtBQUF1RixnQkFBTSxFQUFFLEVBQS9GO0FBQW1HLG1CQUFTLEVBQUM7QUFBN0c7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQUtFO0FBQUssaUJBQVMsRUFBQywyRkFBZjtBQUFBLGdDQUNFO0FBQ0UsbUJBQVMsRUFBQywyRUFEWjtBQUVFLGNBQUksRUFBQztBQUZQO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsZUFLRSw4REFBQyxnRUFBRDtBQUFZLG1CQUFTLEVBQUM7QUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFMRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FMRixlQWNFO0FBQUssaUJBQVMsRUFBQyx3RUFBZjtBQUFBLGdDQUNFO0FBQ0UsaUJBQU8sRUFBRSxDQUFDTixPQUFELEdBQVdPLG9EQUFYLEdBQW9CQyxxREFEL0I7QUFFRSxtQkFBUyxFQUFDLGdEQUZaO0FBQUEsa0NBSUU7QUFBSyxxQkFBUyxFQUFDLDZCQUFmO0FBQUEsb0NBQ0k7QUFBQSx3QkFBSVIsT0FBTyxvQkFBYUEsT0FBTyxDQUFDUyxJQUFSLENBQWFDLElBQTFCLElBQW1DO0FBQTlDO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBREosZUFFSTtBQUFBLHdCQUFJVixPQUFPLGdCQUFHLDhEQUFDLG1EQUFEO0FBQU8sbUJBQUcsRUFBRUEsT0FBTyxDQUFDUyxJQUFSLENBQWFFLEtBQXpCO0FBQWdDLHNCQUFNLEVBQUUsRUFBeEM7QUFBNEMscUJBQUssRUFBRSxFQUFuRDtBQUF1RCx5QkFBUyxFQUFDO0FBQWpFO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBQUgsZ0JBQXdGLDhEQUFDLG9FQUFEO0FBQWdCLHlCQUFTLEVBQUM7QUFBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFuRztBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFKRixlQVFFO0FBQUcscUJBQVMsRUFBQywyQkFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFSRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsZUFXRTtBQUFLLG1CQUFTLEVBQUMsTUFBZjtBQUFBLGtDQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURGLGVBRUU7QUFBRyxxQkFBUyxFQUFDLDJCQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFYRixlQWVFO0FBQUssaUJBQU8sRUFBRTtBQUFBLG1CQUFJVixNQUFNLENBQUNLLElBQVAsQ0FBWSxXQUFaLENBQUo7QUFBQSxXQUFkO0FBQTRDLG1CQUFTLEVBQUMsaUNBQXREO0FBQUEsa0NBQ0U7QUFBTSxxQkFBUyxFQUFDLHdHQUFoQjtBQUFBLHNCQUNHSCxLQUFLLENBQUNTO0FBRFQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERixlQUlFLDhEQUFDLHNFQUFEO0FBQWtCLHFCQUFTLEVBQUM7QUFBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFKRixlQUtFO0FBQUcscUJBQVMsRUFBQyw0Q0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFMRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBZkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBZEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBMENEOztHQTlDUWQsTTtVQUNXQyx3RCxFQUNIRyxrRCxFQUNERSxvRDs7O0tBSFBOLE07QUFnRFQsK0RBQWVBLE1BQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNDA0M2RlOGU3YmY1OTIxYTJjMmUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XHJcbmltcG9ydCB7XHJcbiAgU2VhcmNoSWNvbixcclxuICBNZW51SWNvbixcclxuICBTaG9wcGluZ0NhcnRJY29uLFxyXG4gIFVzZXJDaXJjbGVJY29uLFxyXG59IGZyb20gXCJAaGVyb2ljb25zL3JlYWN0L291dGxpbmVcIjtcclxuaW1wb3J0IHsgc2lnbkluLCBzaWduT3V0LCB1c2VTZXNzaW9uIH0gZnJvbSBcIm5leHQtYXV0aC9jbGllbnRcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCJcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHsgc2VsZWN0SXRlbXMgfSBmcm9tIFwiLi4vc2xpY2VzL2Jhc2tldFNsaWNlXCI7XHJcblxyXG5mdW5jdGlvbiBIZWFkZXIoKSB7XHJcbiAgY29uc3QgW3Nlc3Npb25dID0gdXNlU2Vzc2lvbigpO1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IGl0ZW1zID0gdXNlU2VsZWN0b3Ioc2VsZWN0SXRlbXMpXHJcbiAgcmV0dXJuIChcclxuICAgIDxoZWFkZXI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgYmctYW1hem9uX2JsdWUgcC0xIGZsZXgtZ3Jvd1wiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtMiBmbGV4IGl0ZW1zLWNlbnRlciBmbGV4LWdyb3cgc206ZmxleC1ncm93LTAgbWwtMTBcIj5cclxuICAgICAgICAgIDxJbWFnZSBvbkNsaWNrPXsoKT0+cm91dGVyLnB1c2goJy8nKX0gc3JjPVwiaHR0cDovL2xpbmtzLnBhcGFyZWFjdC5jb20vZjkwXCIgd2lkdGg9ezE1MH0gaGVpZ2h0PXs0MH0gY2xhc3NOYW1lPVwiY3Vyc29yLXBvaW50ZXIgXCIvPlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIiBzbTpmbGV4IGhpZGRlbiBpdGVtcy1jZW50ZXIgYmcteWVsbG93LTQwMCBoLTEwIHJvdW5kZWQtbWQgZmxleC1ncm93IGN1cnNvci1wb2ludGVyIG14LTQgXCI+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwicC0yIHJvdW5kZWQtbC1tZCBoLWZ1bGwgdy02IGZsZXgtZ3JvdyBmbGV4LXNocmluayBmb2N1czpvdXRsaW5lLW5vbmUgcHgtNFwiXHJcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8U2VhcmNoSWNvbiBjbGFzc05hbWU9XCJoLTEyIHAtNCBcIiAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICB7LyogcmlnaHQgKi99XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIGZsZXggaXRlbXMtY2VudGVyIHRleHQteHMgc3BhY2UteC02IG14LTYgd2hpdGVzcGFjZS1ub3dyYXAgXCI+XHJcbiAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eyFzZXNzaW9uID8gc2lnbkluIDogc2lnbk91dH1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiY3Vyc29yLXBvaW50ZXIgbGluayBmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlclwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgc3BhY2UteC00XCI+XHJcbiAgICAgICAgICAgICAgICA8cD57c2Vzc2lvbiA/IGBIZWxsbywgJHtzZXNzaW9uLnVzZXIubmFtZX1gIDogXCJTaWduIEluXCJ9PC9wPlxyXG4gICAgICAgICAgICAgICAgPHA+e3Nlc3Npb24gPyA8SW1hZ2Ugc3JjPXtzZXNzaW9uLnVzZXIuaW1hZ2V9IGhlaWdodD17MzB9IHdpZHRoPXszMH0gY2xhc3NOYW1lPVwicm91bmRlZC1mdWxsXCIgLz4gOiA8VXNlckNpcmNsZUljb24gY2xhc3NOYW1lPVwiaC04IHRleHQtd2hpdGUgXCIvPn08L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmb250LWV4dHJhYm9sZCBtZDp0ZXh0LXNtXCI+QWNjb3VudCAmIExpc3RzPC9wPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpbmtcIj5cclxuICAgICAgICAgICAgPHA+UmV0dXJuczwvcD5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZm9udC1leHRyYWJvbGQgbWQ6dGV4dC1zbVwiPiYgT3JkZXJzPC9wPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IG9uQ2xpY2s9eygpPT5yb3V0ZXIucHVzaCgnL2NoZWNrb3V0Jyl9IGNsYXNzTmFtZT1cImxpbmsgcmVsYXRpdmUgZmxleCBpdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYWJzb2x1dGUgdG9wLTAgcmlnaHQtMCBtZDpyaWdodC0xMCBoLTQgdy00IGJnLXllbGxvdy00MDAgdGV4dC1jZW50ZXIgcm91bmRlZC1mdWxsIHRleHQtYmxhY2sgZm9udC1ib2xkXCI+XHJcbiAgICAgICAgICAgICAge2l0ZW1zLmxlbmd0aH1cclxuICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICA8U2hvcHBpbmdDYXJ0SWNvbiBjbGFzc05hbWU9XCJoLTEwXCIgLz5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiaGlkZGVuIG1kOmlubGluZSBmb250LWV4dHJhYm9sZCBtZDp0ZXh0LXNtXCI+QmFza2V0PC9wPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9oZWFkZXI+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9