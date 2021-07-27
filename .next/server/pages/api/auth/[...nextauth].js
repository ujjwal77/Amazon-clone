(function() {
var exports = {};
exports.id = 748;
exports.ids = [748];
exports.modules = {

/***/ 303:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ _nextauth_; }
});

;// CONCATENATED MODULE: external "next-auth"
var external_next_auth_namespaceObject = require("next-auth");;
var external_next_auth_default = /*#__PURE__*/__webpack_require__.n(external_next_auth_namespaceObject);
;// CONCATENATED MODULE: external "next-auth/providers"
var providers_namespaceObject = require("next-auth/providers");;
var providers_default = /*#__PURE__*/__webpack_require__.n(providers_namespaceObject);
;// CONCATENATED MODULE: ./src/pages/api/auth/[...nextauth].js


/* harmony default export */ var _nextauth_ = (external_next_auth_default()({
  // Configure one or more authentication providers
  providers: [providers_default().Google({
    clientId: '555288237532-151mlmg1lr24mjonv284eni50vrt1383.apps.googleusercontent.com',
    clientSecret: 'wmoNnA-LJOJIwWpkmelFzmYT'
  }), providers_default().GitHub({
    clientId: '555288237532-151mlmg1lr24mjonv284eni50vrt1383.apps.googleusercontent.com',
    clientSecret: 'wmoNnA-LJOJIwWpkmelFzmYT'
  })]
}));

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__(303));
module.exports = __webpack_exports__;

})();