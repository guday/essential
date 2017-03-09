/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 9);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_router_js__ = __webpack_require__(5);
/* harmony export (immutable) */ __webpack_exports__["a"] = routing;


function routing($stateProvider) {
  for (let i in __WEBPACK_IMPORTED_MODULE_0__app_router_js__["a" /* default */]) {
    let item = __WEBPACK_IMPORTED_MODULE_0__app_router_js__["a" /* default */][i];
    // $routeProvider.when(item.url, {
    //   template: item.template
    // })
    //$stateProvider.state(router[i].state, router[i])

    $stateProvider.state(item.state, {
      url: item.url,
      views: item.views
    });
  }
}

routing.$inject = ['$stateProvider'];

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export HomeController */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeDirective; });
let HomeController = class HomeController {
  constructor() {
    var $injector = window.injector;

    this.items = [{
      content: "调试页面:ng-click,ng-src,ng-style,ng-if"
    }, {
      content: "调试页面:ng-repeat"
    }, {
      content: "调试js:注入"
    }, {
      content: "调试js:元数据"
    }, {
      content: "调试页面"
    }];

    this.onClickPhone = phone => {
      // this.$location.path("/phones/" + phone.id)
    };
  }

  onClickPageOnly() {
    // this.$location.path('pageOnly')
  }
};


var HomeDirective = function () {
  return {
    restrict: "E",
    template: __webpack_require__(6),
    controller: HomeController,
    controllerAs: "vm",
    bindToController: true
  };
};



/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ListDetailController */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListDetailDirective; });
let ListDetailController = class ListDetailController {
  constructor() {
    var $injector = window.injector;
    this.StaticData = $injector.get('StaticData');
    this.$stateParams = $injector.get('$stateParams');
    this.$location = $injector.get("$location");

    this.detail = this.StaticData.get(this.$stateParams.id);

    var search = this.$location.search();
    console.log(search);
  }
};


var ListDetailDirective = function () {
  return {
    restrict: "E",
    template: __webpack_require__(7),
    controller: ListDetailController,
    controllerAs: "vm",
    bindToController: true
  };
};



/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ListController */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListDirective; });
let ListController = class ListController {
  constructor() {
    var $injector = window.injector;
    this.StaticData = $injector.get('StaticData');
    this.$location = $injector.get('$location');

    this.list = this.StaticData.all();
  }

  remove(item) {
    this.list.remove(item);
  }

  onClickItem(item) {
    this.$location.path("/tab/detail/" + item.id).search({ msg: "ok" });
  }

};


var ListDirective = function () {
  return {
    restrict: "E",
    template: __webpack_require__(8),
    controller: ListController,
    controllerAs: "vm",
    bindToController: true
  };
};



/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StaticData; });
let StaticData = class StaticData {
  constructor() {
    this.data = [{
      id: 0,
      name: 'Ben Sparrow',
      lastText: 'You on your way?',
      face: 'img/ben.png'
    }, {
      id: 1,
      name: 'Max Lynx',
      lastText: 'Hey, it\'s me',
      face: 'img/max.png'
    }, {
      id: 2,
      name: 'Adam Bradleyson',
      lastText: 'I should buy a boat',
      face: 'img/adam.jpg'
    }, {
      id: 3,
      name: 'Perry Governor',
      lastText: 'Look at my mukluks!',
      face: 'img/perry.png'
    }, {
      id: 4,
      name: 'Mike Harrington',
      lastText: 'This is wicked good ice cream.',
      face: 'img/mike.png'
    }];
  }

  all() {
    return this.data;
  }

  remove(item) {
    this.data.splice(this.data.indexOf(item), 1);
  }

  get(id) {
    for (var i = 0; i < this.data.length; i++) {
      if (this.data[i].id === parseInt(id)) {
        return this.data[i];
      }
    }
    return null;
  }
};

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = [{
  state: 'tab.home',
  url: '/home',
  views: {
    'tab-home': {
      template: `<home-directive></home-directive>`
    }
  }
  // url: '/phones',
  // template: '<h1>phone list middle</h1><phone-list></phone-list>'
}, {
  state: 'tab.list',
  url: '/list',
  views: {
    'tab-list': {
      template: `<list-directive></list-directive>`
    }
  }
}, {
  state: 'tab.detail',
  url: '/detail/:id',
  views: {
    'tab-list': {
      template: `<list-detail-directive></list-detail-directive>`
    }
  }
}];

//when('/phones', {
//    template: '<h1>phone list</h1><phone-list></phone-list>'
//}).

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = "<ion-view view-title=\"Home\">\n  <ion-content class=\"padding\">\n    <ion-list>\n      <ion-item ng-repeat=\"item in vm.items\">\n        {{item.content}}\n      </ion-item>\n    </ion-list>\n  </ion-content>\n</ion-view>\n"

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = "<ion-view view-title=\"xx\">\n  <ion-content class=\"padding\">\n    <img ng-src=\"{{vm.detail.face}}\" style=\"width: 64px; height: 64px\">\n    <p>\n      {{vm.detail.lastText}}\n    </p>\n  </ion-content>\n</ion-view>\n"

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = "<ion-view view-title=\"list\">\n  <ion-content>\n    <ion-list>\n      <ion-item class=\"item-remove-animate item-avatar item-icon-right\" ng-repeat=\"item in vm.list\" type=\"item-text-wrap\"  ng-click=\"vm.onClickItem(item)\">\n        <img ng-src=\"{{item.face}}\">\n        <h2>{{item.name}}</h2>\n        <p>{{item.lastText}}</p>\n        <i class=\"icon ion-chevron-right icon-accessory\"></i>\n\n        <ion-option-button class=\"button-assertive\" ng-click=\"vm.remove(item)\">\n          Delete\n        </ion-option-button>\n      </ion-item>\n    </ion-list>\n  </ion-content>\n</ion-view>\n"

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_config_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__component_home_home_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__component_list_list_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__component_list_list_detail_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__service_static__ = __webpack_require__(4);

let app = angular.module('starter');
app.config(__WEBPACK_IMPORTED_MODULE_0__app_config_js__["a" /* default */]);


app.directive('homeDirective', __WEBPACK_IMPORTED_MODULE_1__component_home_home_js__["a" /* HomeDirective */]);


app.directive('listDirective', __WEBPACK_IMPORTED_MODULE_2__component_list_list_js__["a" /* ListDirective */]);


app.directive('listDetailDirective', __WEBPACK_IMPORTED_MODULE_3__component_list_list_detail_js__["a" /* ListDetailDirective */]);

//
// import {PageOnlyController, PageOnlyDirective} from './component/page-only/page-only.js';
// app.directive('pageOnly', PageOnlyDirective);



app.service('StaticData', __WEBPACK_IMPORTED_MODULE_4__service_static__["a" /* StaticData */]);

/***/ })
/******/ ]);