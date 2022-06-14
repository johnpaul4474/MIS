"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_App_js"],{

/***/ "./resources/js/App.js":
/*!*****************************!*\
  !*** ./resources/js/App.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js");
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./router */ "./resources/js/router.js");
/* harmony import */ var vuetify_dist_vuetify_min_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuetify/dist/vuetify.min.css */ "./node_modules/vuetify/dist/vuetify.min.css");
/* harmony import */ var vuetify_lib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vuetify/lib */ "./node_modules/vuetify/lib/framework.js");
__webpack_require__(/*! ./bootstrap */ "./resources/js/bootstrap.js");

window.Vue = (__webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js")["default"]);




vue__WEBPACK_IMPORTED_MODULE_2__["default"].use(vuetify_lib__WEBPACK_IMPORTED_MODULE_3__["default"]);
vue__WEBPACK_IMPORTED_MODULE_2__["default"].config.productionTip = false;
new vue__WEBPACK_IMPORTED_MODULE_2__["default"]({
  el: '#app',
  router: _router__WEBPACK_IMPORTED_MODULE_0__["default"],
  vuetify: new vuetify_lib__WEBPACK_IMPORTED_MODULE_3__["default"](),
  components: {
    'App': function App() {
      return Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./App */ "./resources/js/App.js"));
    }
  }
});

/***/ })

}]);