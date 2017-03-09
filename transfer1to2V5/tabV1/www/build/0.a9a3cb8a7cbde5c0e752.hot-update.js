webpackHotUpdate(0,{

/***/ 209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__transferService__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__transferController__ = __webpack_require__(354);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_3__transferController__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_3__transferController__["c"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_3__transferController__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_2__transferService__["a"]; });





//全新service
// import {CommonPathService} from './service/commonPathService';



//
// var nameMap = {
//   "StaticData": StaticData,    //数据
//   "$state": CommonPathService, //跳转
//   "$stateParams": NavParams,   //获取参数
// }

window.injector = {
  get: function (name) {
    // var provide = nameMap[name];
    // if (provide) {
    //   var provider = ReflectiveInjector.resolveAndCreate([provide]).get(provide);
    //   if (name == "$state") {
    //     // var subProvider = ReflectiveInjector.resolveAndCreate([App]).get(App);
    //     // provider.setNav(subProvider);
    //   }
    //   return provider;
    // } else {
    //   return null;
    // }
  }
};

// var $state = CommonPathService;
// var $stateParams = NavParams;




/***/ }),

/***/ 211:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__middle_service_static__ = __webpack_require__(361);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_commonPathService__ = __webpack_require__(210);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__middle_service_static__["a"]; });
/* unused harmony reexport CommonPathService */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return $location; });


//middle过来的
// import {StaticData} from '../../i2Transfer/service/static';

__WEBPACK_IMPORTED_MODULE_1__middle_service_static__["a" /* StaticData */].annotations = [new __WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* Injectable */]()];

// @Injectable();

//全新service


var $location = __WEBPACK_IMPORTED_MODULE_3__service_commonPathService__["a" /* CommonPathService */];
// var $stateParams = NavParams;

// var $state = function () {
//   return CommonPathService;
// };
// var $stateParams = function () {
//   return NavParams;
// };

// var $state = forwardRef(() => CommonPathService);
// var $stateParams = forwardRef(() => NavParams);



/***/ }),

/***/ 359:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__www_I2_middle_transferService__ = __webpack_require__(211);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListDetailController; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ListDetailDirective; });




let ListDetailController = class ListDetailController {
  constructor(StaticData, $stateParams, $location) {
    this.StaticData = StaticData;
    this.$stateParams = $stateParams;
    this.$location = $location;

    var $injector = window.injector;

    this.detail = this.StaticData.get(this.$stateParams.data.id);

    var search = this.$location.search();
    console.log(search);
  }
};

ListDetailController.parameters = [[__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* forwardRef */])(() => __WEBPACK_IMPORTED_MODULE_1__www_I2_middle_transferService__["a" /* StaticData */])], [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* forwardRef */])(() => __WEBPACK_IMPORTED_MODULE_1__www_I2_middle_transferService__["$stateParams"])], [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* forwardRef */])(() => __WEBPACK_IMPORTED_MODULE_1__www_I2_middle_transferService__["c" /* $location */])]];

var ListDetailDirective = function () {
  return {
    restrict: "E",
    template: __webpack_require__(507),
    controller: ListDetailController,
    controllerAs: "vm",
    bindToController: true
  };
};



/***/ })

})
//# sourceMappingURL=0.a9a3cb8a7cbde5c0e752.hot-update.js.map