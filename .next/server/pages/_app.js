(function() {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 393:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ _app; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(282);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(79);
// EXTERNAL MODULE: external "@reduxjs/toolkit"
var toolkit_ = __webpack_require__(139);
// EXTERNAL MODULE: ./src/slices/basketSlice.js
var basketSlice = __webpack_require__(336);
;// CONCATENATED MODULE: ./src/app/store.js


const store = (0,toolkit_.configureStore)({
  reducer: {
    basket: basketSlice/* default */.ZP
  }
});
// EXTERNAL MODULE: external "next-auth/client"
var client_ = __webpack_require__(104);
;// CONCATENATED MODULE: ./src/pages/_app.js


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






const MyApp = ({
  Component,
  pageProps
}) => {
  return /*#__PURE__*/jsx_runtime_.jsx(client_.Provider, {
    session: pageProps.session,
    children: /*#__PURE__*/jsx_runtime_.jsx(external_react_redux_.Provider, {
      store: store,
      children: /*#__PURE__*/jsx_runtime_.jsx(Component, _objectSpread({}, pageProps))
    })
  });
};

/* harmony default export */ var _app = (MyApp);

/***/ }),

/***/ 336:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "H": function() { return /* binding */ addToBasket; },
/* harmony export */   "Er": function() { return /* binding */ removeFromBasket; },
/* harmony export */   "r7": function() { return /* binding */ removeGroupedFromBasket; },
/* harmony export */   "a1": function() { return /* binding */ selectItems; },
/* harmony export */   "mS": function() { return /* binding */ selectTotal; }
/* harmony export */ });
/* unused harmony exports basketSlice, hydrate */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(139);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

const initialState = {
  items: []
};
const basketSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
  name: "basket",
  initialState,
  reducers: {
    hydrate: (state, action) => {
      return action.payload;
    },
    // Store actions
    addToBasket: (state, action) => {
      state.items = [...state.items, action.payload];
    },
    removeFromBasket: (state, action) => {
      let pos = state.items.findIndex(item => item.id === action.payload.id);
      let newBasket = [...state.items];

      if (pos > -1) {
        newBasket.splice(pos, 1);
      } else {
        console.warn(`Can't remove product (id: ${action.payload.id}) as its not in the basket`);
      }

      state.items = newBasket;
    },
    removeGroupedFromBasket: (state, action) => {
      let newBasket = state.items.filter(item => item.id !== action.payload.id);
      state.items = newBasket;
    }
  }
});
const {
  addToBasket,
  removeFromBasket,
  removeGroupedFromBasket,
  hydrate
} = basketSlice.actions; // Selectors - This is how we pull information from the Global store slice

const selectItems = state => state.basket.items;
const selectTotal = state => state.basket.items.reduce((total, item) => total + item.price, 0);
/* harmony default export */ __webpack_exports__["ZP"] = (basketSlice.reducer);

/***/ }),

/***/ 139:
/***/ (function(module) {

"use strict";
module.exports = require("@reduxjs/toolkit");;

/***/ }),

/***/ 104:
/***/ (function(module) {

"use strict";
module.exports = require("next-auth/client");;

/***/ }),

/***/ 79:
/***/ (function(module) {

"use strict";
module.exports = require("react-redux");;

/***/ }),

/***/ 282:
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__(393));
module.exports = __webpack_exports__;

})();