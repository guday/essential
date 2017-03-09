webpackHotUpdate(0,{

/***/ 209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__transferService__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__transferController__ = __webpack_require__(353);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_3__transferController__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_3__transferController__["c"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_3__transferController__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_2__transferService__["a"]; });
/* unused harmony export $stateParams */





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
var $stateParams = __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["d" /* NavParams */];



/***/ }),

/***/ 210:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__stateParams__ = __webpack_require__(504);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__transferController__ = __webpack_require__(353);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommonPathService; });
var _dec, _class;







let CommonPathService = (_dec = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["i" /* Injectable */])(), _dec(_class = class CommonPathService {
  constructor(_app, state) {
    this.app = _app;
    this.state = state;
  }

  //$state.go
  go(to, param, option) {
    // this.app = ReflectiveInjector.resolveAndCreate([App]).get(App);
    var pageMap = {
      'tab.detail': __WEBPACK_IMPORTED_MODULE_3__transferController__["a" /* ListDetailPage */]
    };
    var page = pageMap[to];
    this.nav = this.app.getActiveNav();
    this.nav.push(page, param, option);
  }

  //$location.path
  path(pathStr) {
    if (pathStr) {
      var self = this;
      this.page = null;
      this.param = {};
      this.option = {};

      var arr = pathStr.split('/');
      arr = arr.filter(function (item) {
        return !!item;
      });
      var map = {
        "tab/detail": {
          page: __WEBPACK_IMPORTED_MODULE_3__transferController__["a" /* ListDetailPage */],
          param: ["id"]
        }
      };

      if (arr.length > 1) {
        var path = arr[0] + "/" + arr[1];
        var obj = map[path];
        if (obj) {
          var param = {};
          for (var i = 0; i < obj.param.length && i < arr.length - 2; i++) {
            param[obj.param[i]] = arr[i + 2];
          }
          this.page = obj.page;
          this.param = param;
          setTimeout(function () {
            self.redirect();
          });
          return this;
        }
      }
    } else {
      return this.state.path();
    }
  }

  //$location.path().search();
  search(obj) {
    if (obj) {
      for (var i in obj) {
        this.param[i] = obj[i];
      }
    } else {
      return this.state.search();
    }
  }

  redirect() {
    if (this.page) {
      this.nav = this.app.getActiveNav();
      this.nav.push(this.page, this.param);
    }
  }

  setNav(nav) {
    this.app = nav;
  }
}) || _class);

CommonPathService.parameters = [[__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["e" /* App */], __WEBPACK_IMPORTED_MODULE_2__stateParams__["a" /* $stateParams */]]];

/***/ }),

/***/ 211:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__middle_service_static__ = __webpack_require__(360);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_commonPathService__ = __webpack_require__(210);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__middle_service_static__["a"]; });
/* unused harmony reexport CommonPathService */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return $stateParams; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return $location; });


//middle过来的
// import {StaticData} from '../../i2Transfer/service/static';

__WEBPACK_IMPORTED_MODULE_1__middle_service_static__["a" /* StaticData */].annotations = [new __WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* Injectable */]()];

// @Injectable();

//全新service


var $location = __WEBPACK_IMPORTED_MODULE_3__service_commonPathService__["a" /* CommonPathService */];
var $stateParams = __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* NavParams */];

// var $state = function () {
//   return CommonPathService;
// };
// var $stateParams = function () {
//   return NavParams;
// };

// var $state = forwardRef(() => CommonPathService);
// var $stateParams = forwardRef(() => NavParams);



/***/ }),

/***/ 501:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_basic_init__ = __webpack_require__(505);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_basic_mainTabs__ = __webpack_require__(355);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__middle_bridge__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__middle_service_commonPathService__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__middle_service_stateParams__ = __webpack_require__(504);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_about_about__ = __webpack_require__(354);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_ion_ionView__ = __webpack_require__(503);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_ion_ionOptionButton__ = __webpack_require__(502);






// // import {HomePage} from './pages/home/home';
// import {StaticData} from './middle/transferService';
// import {CommonPathService} from './middle/service/commonPathService'





// import {ListPage} from './pages/list/list';

//兼容组件



var AppModule = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
  declarations: [__WEBPACK_IMPORTED_MODULE_2__pages_basic_init__["a" /* Init */], __WEBPACK_IMPORTED_MODULE_3__pages_basic_mainTabs__["a" /* MainTabs */], __WEBPACK_IMPORTED_MODULE_4__middle_bridge__["a" /* HomePage */], __WEBPACK_IMPORTED_MODULE_7__pages_about_about__["a" /* AboutPage */], __WEBPACK_IMPORTED_MODULE_4__middle_bridge__["b" /* ListPage */], __WEBPACK_IMPORTED_MODULE_4__middle_bridge__["c" /* ListDetailPage */], __WEBPACK_IMPORTED_MODULE_8__components_ion_ionView__["a" /* IonViewComponent */], __WEBPACK_IMPORTED_MODULE_9__components_ion_ionOptionButton__["a" /* IonOptionButtonComponent */]],
  imports: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_2__pages_basic_init__["a" /* Init */])],
  bootstrap: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* IonicApp */]],
  entryComponents: [__WEBPACK_IMPORTED_MODULE_2__pages_basic_init__["a" /* Init */], __WEBPACK_IMPORTED_MODULE_3__pages_basic_mainTabs__["a" /* MainTabs */], __WEBPACK_IMPORTED_MODULE_4__middle_bridge__["a" /* HomePage */], __WEBPACK_IMPORTED_MODULE_7__pages_about_about__["a" /* AboutPage */], __WEBPACK_IMPORTED_MODULE_4__middle_bridge__["b" /* ListPage */], __WEBPACK_IMPORTED_MODULE_4__middle_bridge__["c" /* ListDetailPage */]],
  providers: [__WEBPACK_IMPORTED_MODULE_4__middle_bridge__["d" /* StaticData */], __WEBPACK_IMPORTED_MODULE_5__middle_service_commonPathService__["a" /* CommonPathService */], __WEBPACK_IMPORTED_MODULE_6__middle_service_stateParams__["a" /* $stateParams */],
  // $state,
  { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* IonicErrorHandler */] }]
}).Class({
  constructor: function () {}
});
/* harmony default export */ __webpack_exports__["a"] = AppModule;

/***/ }),

/***/ 504:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(60);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return $stateParams; });
var _dec, _class;



// import {CommonPathService} from './commonPathService'


let $stateParams = (_dec = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* Injectable */])(), _dec(_class = class $stateParams {
  constructor(navParams) {
    this.navParams = navParams;
  }

  path() {}

  search() {
    return this.navParams.data;
  }

}) || _class);

$stateParams.parameters = [[__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavParams */]]];

/***/ }),

/***/ 505:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mainTabs__ = __webpack_require__(355);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Init; });




let Init = class Init {

  constructor() {
    this.rootPage = __WEBPACK_IMPORTED_MODULE_2__mainTabs__["a" /* MainTabs */];
  }
};

Init.annotations = [new __WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Component */]({
  template: `<ion-nav #myNav [root]="rootPage"></ion-nav>`,
  queries: {
    views: new __WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* ViewChild */](__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */])
  }
})];

/***/ }),

/***/ 60:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(436);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_action_sheet_action_sheet__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_alert_alert__ = __webpack_require__(181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_app_app__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_app_app_root__ = __webpack_require__(182);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__config_config__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__navigation_deep_linker__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__platform_dom_controller__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__util_events__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__util_form__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__gestures_gesture_controller__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__tap_click_haptic__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__gestures_gesture_config__ = __webpack_require__(475);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__platform_keyboard__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_loading_loading__ = __webpack_require__(306);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_menu_menu_controller__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_modal_modal__ = __webpack_require__(310);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_picker_picker__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__platform_platform__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__platform_platform_registry__ = __webpack_require__(481);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__components_popover_popover__ = __webpack_require__(315);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__tap_click_tap_click__ = __webpack_require__(344);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__components_toast_toast__ = __webpack_require__(332);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__config_mode_registry__ = __webpack_require__(474);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__transitions_transition_registry__ = __webpack_require__(345);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__transitions_transition_controller__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__navigation_url_serializer__ = __webpack_require__(340);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__components_action_sheet_action_sheet_component__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__components_alert_alert_component__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__components_loading_loading_component__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__components_modal_modal_component__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__components_picker_picker_component__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__components_popover_popover_component__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__components_toast_toast_component__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__components_avatar_avatar__ = __webpack_require__(293);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__components_backdrop_backdrop__ = __webpack_require__(183);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__components_badge_badge__ = __webpack_require__(294);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__components_button_button__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__components_card_card__ = __webpack_require__(295);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__components_checkbox_checkbox__ = __webpack_require__(296);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__components_chip_chip__ = __webpack_require__(297);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__util_click_block__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__components_content_content__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__components_datetime_datetime__ = __webpack_require__(298);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__components_fab_fab__ = __webpack_require__(299);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49__components_grid_grid__ = __webpack_require__(300);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50__components_icon_icon__ = __webpack_require__(184);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_51__components_img_img__ = __webpack_require__(301);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_52__components_infinite_scroll_infinite_scroll__ = __webpack_require__(185);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_53__components_infinite_scroll_infinite_scroll_content__ = __webpack_require__(302);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_54__components_item_item__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_55__components_item_item_reorder__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_56__components_item_item_sliding__ = __webpack_require__(305);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_57__components_label_label__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_58__components_list_list__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_59__components_list_list_header__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_60__components_menu_menu__ = __webpack_require__(309);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_61__components_menu_menu_close__ = __webpack_require__(307);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_62__components_menu_menu_toggle__ = __webpack_require__(308);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_63__components_input_native_input__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_64__components_nav_nav__ = __webpack_require__(313);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_65__components_nav_nav_pop__ = __webpack_require__(311);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_66__components_nav_nav_push__ = __webpack_require__(312);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_67__components_navbar_navbar__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_68__components_note_note__ = __webpack_require__(314);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_69__components_option_option__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_70__components_nav_overlay_portal__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_71__components_radio_radio_button__ = __webpack_require__(316);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_72__components_radio_radio_group__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_73__components_range_range__ = __webpack_require__(318);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_74__components_range_range_knob__ = __webpack_require__(317);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_75__components_refresher_refresher__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_76__components_refresher_refresher_content__ = __webpack_require__(319);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_77__components_scroll_scroll__ = __webpack_require__(320);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_78__components_searchbar_searchbar__ = __webpack_require__(321);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_79__components_segment_segment__ = __webpack_require__(322);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_80__components_select_select__ = __webpack_require__(323);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_81__components_show_hide_when_show_hide_when__ = __webpack_require__(324);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_82__components_slides_slide__ = __webpack_require__(325);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_83__components_slides_slides__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_84__components_spinner_spinner__ = __webpack_require__(328);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_85__components_tabs_tab__ = __webpack_require__(330);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_86__components_tabs_tabs__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_87__components_tabs_tab_button__ = __webpack_require__(329);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_88__components_tabs_tab_highlight__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_89__components_input_input__ = __webpack_require__(303);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_90__components_thumbnail_thumbnail__ = __webpack_require__(331);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_91__components_toggle_toggle__ = __webpack_require__(333);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_92__components_toolbar_toolbar__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_93__components_toolbar_toolbar_item__ = __webpack_require__(334);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_94__components_toolbar_toolbar_title__ = __webpack_require__(335);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_95__components_typography_typography__ = __webpack_require__(336);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_96__components_virtual_scroll_virtual_scroll__ = __webpack_require__(338);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_97__components_virtual_scroll_virtual_item__ = __webpack_require__(337);
/* unused harmony reexport ActionSheet */
/* unused harmony reexport ActionSheetController */
/* unused harmony reexport Alert */
/* unused harmony reexport AlertController */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_7__components_app_app__["a"]; });
/* unused harmony reexport Avatar */
/* unused harmony reexport Backdrop */
/* unused harmony reexport Badge */
/* unused harmony reexport Button */
/* unused harmony reexport Card */
/* unused harmony reexport CardContent */
/* unused harmony reexport CardHeader */
/* unused harmony reexport CardTitle */
/* unused harmony reexport Checkbox */
/* unused harmony reexport Chip */
/* unused harmony reexport ClickBlock */
/* unused harmony reexport Content */
/* unused harmony reexport DateTime */
/* unused harmony reexport FabContainer */
/* unused harmony reexport FabButton */
/* unused harmony reexport FabList */
/* unused harmony reexport Grid */
/* unused harmony reexport Row */
/* unused harmony reexport Col */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_98__components_ion__ = __webpack_require__(6);
/* unused harmony reexport Ion */
/* unused harmony reexport Icon */
/* unused harmony reexport Img */
/* unused harmony reexport InfiniteScroll */
/* unused harmony reexport InfiniteScrollContent */
/* unused harmony reexport TextInput */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_8__components_app_app_root__["a"]; });
/* unused harmony reexport Item */
/* unused harmony reexport ItemContent */
/* unused harmony reexport ItemDivider */
/* unused harmony reexport ItemGroup */
/* unused harmony reexport ItemReorder */
/* unused harmony reexport Reorder */
/* unused harmony reexport ItemSliding */
/* unused harmony reexport ItemOptions */
/* unused harmony reexport Label */
/* unused harmony reexport List */
/* unused harmony reexport ListHeader */
/* unused harmony reexport Loading */
/* unused harmony reexport LoadingController */
/* unused harmony reexport Menu */
/* unused harmony reexport MenuClose */
/* unused harmony reexport MenuController */
/* unused harmony reexport MenuToggle */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_99__components_menu_menu_types__ = __webpack_require__(463);
/* unused harmony reexport MenuType */
/* unused harmony reexport Modal */
/* unused harmony reexport ModalController */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_64__components_nav_nav__["a"]; });
/* unused harmony reexport NavPop */
/* unused harmony reexport NavPopAnchor */
/* unused harmony reexport NavPush */
/* unused harmony reexport NavPushAnchor */
/* unused harmony reexport Navbar */
/* unused harmony reexport NativeInput */
/* unused harmony reexport NextInput */
/* unused harmony reexport Note */
/* unused harmony reexport Option */
/* unused harmony reexport OverlayPortal */
/* unused harmony reexport Picker */
/* unused harmony reexport PickerController */
/* unused harmony reexport Popover */
/* unused harmony reexport PopoverController */
/* unused harmony reexport RadioButton */
/* unused harmony reexport RadioGroup */
/* unused harmony reexport Range */
/* unused harmony reexport RangeKnob */
/* unused harmony reexport Refresher */
/* unused harmony reexport RefresherContent */
/* unused harmony reexport Scroll */
/* unused harmony reexport Searchbar */
/* unused harmony reexport Segment */
/* unused harmony reexport SegmentButton */
/* unused harmony reexport Select */
/* unused harmony reexport ShowWhen */
/* unused harmony reexport HideWhen */
/* unused harmony reexport DisplayWhen */
/* unused harmony reexport Slide */
/* unused harmony reexport Slides */
/* unused harmony reexport Spinner */
/* unused harmony reexport Tab */
/* unused harmony reexport TabButton */
/* unused harmony reexport TabHighlight */
/* unused harmony reexport Tabs */
/* unused harmony reexport TapClick */
/* unused harmony reexport setupTapClick */
/* unused harmony reexport isActivatable */
/* unused harmony reexport Toast */
/* unused harmony reexport ToastController */
/* unused harmony reexport Toggle */
/* unused harmony reexport Toolbar */
/* unused harmony reexport ToolbarBase */
/* unused harmony reexport Header */
/* unused harmony reexport Footer */
/* unused harmony reexport ToolbarItem */
/* unused harmony reexport ToolbarTitle */
/* unused harmony reexport Thumbnail */
/* unused harmony reexport Typography */
/* unused harmony reexport VirtualScroll */
/* unused harmony reexport Config */
/* unused harmony reexport setupConfig */
/* unused harmony reexport ConfigToken */
/* unused harmony reexport DomController */
/* unused harmony reexport Platform */
/* unused harmony reexport setupPlatform */
/* unused harmony reexport Haptic */
/* unused harmony reexport DeepLinker */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_100__navigation_nav_controller__ = __webpack_require__(36);
/* unused harmony reexport NavController */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_101__navigation_nav_controller_base__ = __webpack_require__(120);
/* unused harmony reexport NavControllerBase */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_102__navigation_nav_params__ = __webpack_require__(31);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_102__navigation_nav_params__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_103__navigation_nav_util__ = __webpack_require__(61);
/* unused harmony reexport DeepLink */
/* unused harmony reexport DeepLinkMetadata */
/* unused harmony reexport UrlSerializer */
/* unused harmony reexport DeepLinkConfigToken */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_104__navigation_view_controller__ = __webpack_require__(8);
/* unused harmony reexport ViewController */
/* unused harmony reexport ActionSheetCmp */
/* unused harmony reexport AlertCmp */
/* unused harmony reexport LoadingCmp */
/* unused harmony reexport ModalCmp */
/* unused harmony reexport PickerCmp */
/* unused harmony reexport PickerColumnCmp */
/* unused harmony reexport PopoverCmp */
/* unused harmony reexport ToastCmp */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_105__gestures_drag_gesture__ = __webpack_require__(119);
/* unused harmony reexport PanGesture */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_106__gestures_gesture__ = __webpack_require__(476);
/* unused harmony reexport Gesture */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_107__gestures_slide_edge_gesture__ = __webpack_require__(206);
/* unused harmony reexport SlideEdgeGesture */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_108__gestures_slide_gesture__ = __webpack_require__(339);
/* unused harmony reexport SlideGesture */
/* unused harmony reexport BLOCK_ALL */
/* unused harmony reexport GESTURE_GO_BACK_SWIPE */
/* unused harmony reexport GESTURE_MENU_SWIPE */
/* unused harmony reexport GESTURE_ITEM_SWIPE */
/* unused harmony reexport GESTURE_REFRESHER */
/* unused harmony reexport GESTURE_TOGGLE */
/* unused harmony reexport GestureController */
/* unused harmony reexport GestureDelegate */
/* unused harmony reexport BlockerDelegate */
/* unused harmony reexport Events */
/* unused harmony reexport setupEvents */
/* unused harmony reexport setupProvideEvents */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_109__util_ionic_error_handler__ = __webpack_require__(488);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_109__util_ionic_error_handler__["a"]; });
/* unused harmony reexport Keyboard */
/* unused harmony reexport Form */
/* unused harmony reexport IonicFormInput */
/* unused harmony reexport IonicTapInput */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_110__util_util__ = __webpack_require__(1);
/* unused harmony reexport reorderArray */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_111__animations_animation__ = __webpack_require__(17);
/* unused harmony reexport Animation */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_112__transitions_page_transition__ = __webpack_require__(62);
/* unused harmony reexport PageTransition */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_113__transitions_transition__ = __webpack_require__(51);
/* unused harmony reexport Transition */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IonicModule; });
/* unused harmony export provideLocationStrategy */




































































































/**
 * Export Components/Directives
 */








































































/**
 * Export Providers
 */


















/**
 * Export Utils
 */













/**
 * @name IonicModule
 * @description
 * IonicModule is an NgModule that helps bootstrap a whole Ionic App. By passing a root component, IonicModule will make sure that all the components and directives from the framework are provided. This includes components such as Tabs, Menus, and Slides, as well as classes like AlertController.
 *
 *
 * We're also able to pass any configuration to our app as a second argument for `.forRoot`. This is any valid config property from [the Config Class](/docs/v2/api/config/Config/).
 *
 * The last functionality that IonicModule allows you to configure is optional routes for DeepLinker. For more information on DeepLinker, please see the [DeepLinker Docs](/docs/v2/api/navigation/DeepLinker/)
 *
 * @usage
 * ```ts
 * import { NgModule } from '@angular/core';
 * import { IonicApp, IonicModule } from 'ionic-angular';
 * import { MyApp } from './app.component';
 * import { HomePage } from '../pages/home/home';
 * @NgModule({
 *   declarations: [
 *     MyApp,
 *     HomePage
 *   ],
 *   imports: [
 *     IonicModule.forRoot(MyApp)
 *   ],
 *   bootstrap: [IonicApp],
 *   entryComponents: [
 *     MyApp,
 *     HomePage
 *   ],
 *   providers: []
 * })
 * export class AppModule {}
 * ```
 */
var IonicModule = function () {
    function IonicModule() {}
    /**
     * Set the root app component for you IonicModule
     * @param {any} appRoot The root AppComponent for this app.
     * @param {any} config Config Options for the app. Accepts any config property.
     * @param {any} deepLinkConfig Any configuration needed for the Ionic Deeplinker.
     */
    IonicModule.forRoot = function (appRoot, config, deepLinkConfig) {
        if (config === void 0) {
            config = null;
        }
        if (deepLinkConfig === void 0) {
            deepLinkConfig = null;
        }
        return {
            ngModule: IonicModule,
            providers: [
            // useValue: bootstrap values
            { provide: __WEBPACK_IMPORTED_MODULE_8__components_app_app_root__["b" /* AppRootToken */], useValue: appRoot }, { provide: __WEBPACK_IMPORTED_MODULE_9__config_config__["a" /* ConfigToken */], useValue: config }, { provide: __WEBPACK_IMPORTED_MODULE_30__navigation_url_serializer__["a" /* DeepLinkConfigToken */], useValue: deepLinkConfig },
            // useFactory: user values
            { provide: __WEBPACK_IMPORTED_MODULE_23__platform_platform_registry__["a" /* PlatformConfigToken */], useFactory: __WEBPACK_IMPORTED_MODULE_23__platform_platform_registry__["b" /* providePlatformConfigs */] },
            // useFactory: ionic core providers
            { provide: __WEBPACK_IMPORTED_MODULE_22__platform_platform__["a" /* Platform */], useFactory: __WEBPACK_IMPORTED_MODULE_22__platform_platform__["b" /* setupPlatform */], deps: [__WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* DOCUMENT */], __WEBPACK_IMPORTED_MODULE_23__platform_platform_registry__["a" /* PlatformConfigToken */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* NgZone */]] }, { provide: __WEBPACK_IMPORTED_MODULE_9__config_config__["b" /* Config */], useFactory: __WEBPACK_IMPORTED_MODULE_9__config_config__["c" /* setupConfig */], deps: [__WEBPACK_IMPORTED_MODULE_9__config_config__["a" /* ConfigToken */], __WEBPACK_IMPORTED_MODULE_22__platform_platform__["a" /* Platform */]] },
            // useFactory: ionic app initializers
            { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* APP_INITIALIZER */], useFactory: __WEBPACK_IMPORTED_MODULE_27__config_mode_registry__["a" /* registerModeConfigs */], deps: [__WEBPACK_IMPORTED_MODULE_9__config_config__["b" /* Config */]], multi: true }, { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* APP_INITIALIZER */], useFactory: __WEBPACK_IMPORTED_MODULE_28__transitions_transition_registry__["a" /* registerTransitions */], deps: [__WEBPACK_IMPORTED_MODULE_9__config_config__["b" /* Config */]], multi: true }, { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* APP_INITIALIZER */], useFactory: __WEBPACK_IMPORTED_MODULE_12__util_events__["a" /* setupProvideEvents */], deps: [__WEBPACK_IMPORTED_MODULE_22__platform_platform__["a" /* Platform */], __WEBPACK_IMPORTED_MODULE_11__platform_dom_controller__["a" /* DomController */]], multi: true }, { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* APP_INITIALIZER */], useFactory: __WEBPACK_IMPORTED_MODULE_25__tap_click_tap_click__["a" /* setupTapClick */], deps: [__WEBPACK_IMPORTED_MODULE_9__config_config__["b" /* Config */], __WEBPACK_IMPORTED_MODULE_22__platform_platform__["a" /* Platform */], __WEBPACK_IMPORTED_MODULE_11__platform_dom_controller__["a" /* DomController */], __WEBPACK_IMPORTED_MODULE_7__components_app_app__["a" /* App */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* NgZone */], __WEBPACK_IMPORTED_MODULE_14__gestures_gesture_controller__["a" /* GestureController */]], multi: true },
            // useClass
            { provide: __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["b" /* HAMMER_GESTURE_CONFIG */], useClass: __WEBPACK_IMPORTED_MODULE_16__gestures_gesture_config__["a" /* IonicGestureConfig */] },
            // useValue
            { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* ANALYZE_FOR_ENTRY_COMPONENTS */], useValue: appRoot, multi: true },
            // ionic providers
            __WEBPACK_IMPORTED_MODULE_5__components_action_sheet_action_sheet__["a" /* ActionSheetController */], __WEBPACK_IMPORTED_MODULE_6__components_alert_alert__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_7__components_app_app__["a" /* App */], __WEBPACK_IMPORTED_MODULE_11__platform_dom_controller__["a" /* DomController */], __WEBPACK_IMPORTED_MODULE_12__util_events__["b" /* Events */], __WEBPACK_IMPORTED_MODULE_13__util_form__["a" /* Form */], __WEBPACK_IMPORTED_MODULE_14__gestures_gesture_controller__["a" /* GestureController */], __WEBPACK_IMPORTED_MODULE_15__tap_click_haptic__["a" /* Haptic */], __WEBPACK_IMPORTED_MODULE_17__platform_keyboard__["a" /* Keyboard */], __WEBPACK_IMPORTED_MODULE_18__components_loading_loading__["a" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* Location */], __WEBPACK_IMPORTED_MODULE_19__components_menu_menu_controller__["a" /* MenuController */], __WEBPACK_IMPORTED_MODULE_20__components_modal_modal__["a" /* ModalController */], __WEBPACK_IMPORTED_MODULE_21__components_picker_picker__["a" /* PickerController */], __WEBPACK_IMPORTED_MODULE_24__components_popover_popover__["a" /* PopoverController */], __WEBPACK_IMPORTED_MODULE_25__tap_click_tap_click__["b" /* TapClick */], __WEBPACK_IMPORTED_MODULE_26__components_toast_toast__["a" /* ToastController */], __WEBPACK_IMPORTED_MODULE_29__transitions_transition_controller__["a" /* TransitionController */], { provide: __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* LocationStrategy */], useFactory: provideLocationStrategy, deps: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["c" /* PlatformLocation */], [new __WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* Inject */](__WEBPACK_IMPORTED_MODULE_1__angular_common__["d" /* APP_BASE_HREF */]), new __WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* Optional */]()], __WEBPACK_IMPORTED_MODULE_9__config_config__["b" /* Config */]] }, { provide: __WEBPACK_IMPORTED_MODULE_30__navigation_url_serializer__["b" /* UrlSerializer */], useFactory: __WEBPACK_IMPORTED_MODULE_30__navigation_url_serializer__["c" /* setupUrlSerializer */], deps: [__WEBPACK_IMPORTED_MODULE_30__navigation_url_serializer__["a" /* DeepLinkConfigToken */]] }, { provide: __WEBPACK_IMPORTED_MODULE_10__navigation_deep_linker__["a" /* DeepLinker */], useFactory: __WEBPACK_IMPORTED_MODULE_10__navigation_deep_linker__["b" /* setupDeepLinker */], deps: [__WEBPACK_IMPORTED_MODULE_7__components_app_app__["a" /* App */], __WEBPACK_IMPORTED_MODULE_30__navigation_url_serializer__["b" /* UrlSerializer */], __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* Location */]] }]
        };
    };
    IonicModule.decorators = [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */], args: [{
            imports: [__WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["c" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* HttpModule */], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* ReactiveFormsModule */]],
            exports: [__WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["c" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* HttpModule */], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* ReactiveFormsModule */], __WEBPACK_IMPORTED_MODULE_38__components_avatar_avatar__["a" /* Avatar */], __WEBPACK_IMPORTED_MODULE_39__components_backdrop_backdrop__["a" /* Backdrop */], __WEBPACK_IMPORTED_MODULE_40__components_badge_badge__["a" /* Badge */], __WEBPACK_IMPORTED_MODULE_41__components_button_button__["a" /* Button */], __WEBPACK_IMPORTED_MODULE_42__components_card_card__["a" /* Card */], __WEBPACK_IMPORTED_MODULE_42__components_card_card__["b" /* CardContent */], __WEBPACK_IMPORTED_MODULE_42__components_card_card__["c" /* CardHeader */], __WEBPACK_IMPORTED_MODULE_42__components_card_card__["d" /* CardTitle */], __WEBPACK_IMPORTED_MODULE_43__components_checkbox_checkbox__["a" /* Checkbox */], __WEBPACK_IMPORTED_MODULE_44__components_chip_chip__["a" /* Chip */], __WEBPACK_IMPORTED_MODULE_45__util_click_block__["a" /* ClickBlock */], __WEBPACK_IMPORTED_MODULE_49__components_grid_grid__["a" /* Col */], __WEBPACK_IMPORTED_MODULE_46__components_content_content__["a" /* Content */], __WEBPACK_IMPORTED_MODULE_47__components_datetime_datetime__["a" /* DateTime */], __WEBPACK_IMPORTED_MODULE_48__components_fab_fab__["a" /* FabContainer */], __WEBPACK_IMPORTED_MODULE_48__components_fab_fab__["b" /* FabButton */], __WEBPACK_IMPORTED_MODULE_48__components_fab_fab__["c" /* FabList */], __WEBPACK_IMPORTED_MODULE_92__components_toolbar_toolbar__["a" /* Footer */], __WEBPACK_IMPORTED_MODULE_49__components_grid_grid__["b" /* Grid */], __WEBPACK_IMPORTED_MODULE_92__components_toolbar_toolbar__["b" /* Header */], __WEBPACK_IMPORTED_MODULE_81__components_show_hide_when_show_hide_when__["a" /* HideWhen */], __WEBPACK_IMPORTED_MODULE_50__components_icon_icon__["a" /* Icon */], __WEBPACK_IMPORTED_MODULE_51__components_img_img__["a" /* Img */], __WEBPACK_IMPORTED_MODULE_52__components_infinite_scroll_infinite_scroll__["a" /* InfiniteScroll */], __WEBPACK_IMPORTED_MODULE_53__components_infinite_scroll_infinite_scroll_content__["a" /* InfiniteScrollContent */], __WEBPACK_IMPORTED_MODULE_8__components_app_app_root__["a" /* IonicApp */], __WEBPACK_IMPORTED_MODULE_54__components_item_item__["a" /* Item */], __WEBPACK_IMPORTED_MODULE_54__components_item_item__["b" /* ItemContent */], __WEBPACK_IMPORTED_MODULE_54__components_item_item__["c" /* ItemDivider */], __WEBPACK_IMPORTED_MODULE_54__components_item_item__["d" /* ItemGroup */], __WEBPACK_IMPORTED_MODULE_56__components_item_item_sliding__["a" /* ItemOptions */], __WEBPACK_IMPORTED_MODULE_55__components_item_item_reorder__["a" /* ItemReorder */], __WEBPACK_IMPORTED_MODULE_56__components_item_item_sliding__["b" /* ItemSliding */], __WEBPACK_IMPORTED_MODULE_57__components_label_label__["a" /* Label */], __WEBPACK_IMPORTED_MODULE_58__components_list_list__["a" /* List */], __WEBPACK_IMPORTED_MODULE_59__components_list_list_header__["a" /* ListHeader */], __WEBPACK_IMPORTED_MODULE_60__components_menu_menu__["a" /* Menu */], __WEBPACK_IMPORTED_MODULE_61__components_menu_menu_close__["a" /* MenuClose */], __WEBPACK_IMPORTED_MODULE_62__components_menu_menu_toggle__["a" /* MenuToggle */], __WEBPACK_IMPORTED_MODULE_63__components_input_native_input__["a" /* NativeInput */], __WEBPACK_IMPORTED_MODULE_64__components_nav_nav__["a" /* Nav */], __WEBPACK_IMPORTED_MODULE_67__components_navbar_navbar__["a" /* Navbar */], __WEBPACK_IMPORTED_MODULE_65__components_nav_nav_pop__["a" /* NavPop */], __WEBPACK_IMPORTED_MODULE_65__components_nav_nav_pop__["b" /* NavPopAnchor */], __WEBPACK_IMPORTED_MODULE_66__components_nav_nav_push__["a" /* NavPush */], __WEBPACK_IMPORTED_MODULE_66__components_nav_nav_push__["b" /* NavPushAnchor */], __WEBPACK_IMPORTED_MODULE_63__components_input_native_input__["b" /* NextInput */], __WEBPACK_IMPORTED_MODULE_68__components_note_note__["a" /* Note */], __WEBPACK_IMPORTED_MODULE_69__components_option_option__["a" /* Option */], __WEBPACK_IMPORTED_MODULE_70__components_nav_overlay_portal__["a" /* OverlayPortal */], __WEBPACK_IMPORTED_MODULE_35__components_picker_picker_component__["a" /* PickerColumnCmp */], __WEBPACK_IMPORTED_MODULE_71__components_radio_radio_button__["a" /* RadioButton */], __WEBPACK_IMPORTED_MODULE_72__components_radio_radio_group__["a" /* RadioGroup */], __WEBPACK_IMPORTED_MODULE_73__components_range_range__["a" /* Range */], __WEBPACK_IMPORTED_MODULE_74__components_range_range_knob__["a" /* RangeKnob */], __WEBPACK_IMPORTED_MODULE_75__components_refresher_refresher__["a" /* Refresher */], __WEBPACK_IMPORTED_MODULE_76__components_refresher_refresher_content__["a" /* RefresherContent */], __WEBPACK_IMPORTED_MODULE_55__components_item_item_reorder__["b" /* Reorder */], __WEBPACK_IMPORTED_MODULE_49__components_grid_grid__["c" /* Row */], __WEBPACK_IMPORTED_MODULE_77__components_scroll_scroll__["a" /* Scroll */], __WEBPACK_IMPORTED_MODULE_78__components_searchbar_searchbar__["a" /* Searchbar */], __WEBPACK_IMPORTED_MODULE_79__components_segment_segment__["a" /* Segment */], __WEBPACK_IMPORTED_MODULE_79__components_segment_segment__["b" /* SegmentButton */], __WEBPACK_IMPORTED_MODULE_80__components_select_select__["a" /* Select */], __WEBPACK_IMPORTED_MODULE_81__components_show_hide_when_show_hide_when__["b" /* ShowWhen */], __WEBPACK_IMPORTED_MODULE_82__components_slides_slide__["a" /* Slide */], __WEBPACK_IMPORTED_MODULE_83__components_slides_slides__["a" /* Slides */], __WEBPACK_IMPORTED_MODULE_84__components_spinner_spinner__["a" /* Spinner */], __WEBPACK_IMPORTED_MODULE_85__components_tabs_tab__["a" /* Tab */], __WEBPACK_IMPORTED_MODULE_86__components_tabs_tabs__["a" /* Tabs */], __WEBPACK_IMPORTED_MODULE_87__components_tabs_tab_button__["a" /* TabButton */], __WEBPACK_IMPORTED_MODULE_88__components_tabs_tab_highlight__["a" /* TabHighlight */], __WEBPACK_IMPORTED_MODULE_89__components_input_input__["a" /* TextInput */], __WEBPACK_IMPORTED_MODULE_90__components_thumbnail_thumbnail__["a" /* Thumbnail */], __WEBPACK_IMPORTED_MODULE_91__components_toggle_toggle__["a" /* Toggle */], __WEBPACK_IMPORTED_MODULE_92__components_toolbar_toolbar__["c" /* Toolbar */], __WEBPACK_IMPORTED_MODULE_93__components_toolbar_toolbar_item__["a" /* ToolbarItem */], __WEBPACK_IMPORTED_MODULE_94__components_toolbar_toolbar_title__["a" /* ToolbarTitle */], __WEBPACK_IMPORTED_MODULE_95__components_typography_typography__["a" /* Typography */], __WEBPACK_IMPORTED_MODULE_97__components_virtual_scroll_virtual_item__["a" /* VirtualFooter */], __WEBPACK_IMPORTED_MODULE_97__components_virtual_scroll_virtual_item__["b" /* VirtualHeader */], __WEBPACK_IMPORTED_MODULE_97__components_virtual_scroll_virtual_item__["c" /* VirtualItem */], __WEBPACK_IMPORTED_MODULE_96__components_virtual_scroll_virtual_scroll__["a" /* VirtualScroll */]],
            declarations: [__WEBPACK_IMPORTED_MODULE_31__components_action_sheet_action_sheet_component__["a" /* ActionSheetCmp */], __WEBPACK_IMPORTED_MODULE_32__components_alert_alert_component__["a" /* AlertCmp */], __WEBPACK_IMPORTED_MODULE_45__util_click_block__["a" /* ClickBlock */], __WEBPACK_IMPORTED_MODULE_33__components_loading_loading_component__["a" /* LoadingCmp */], __WEBPACK_IMPORTED_MODULE_34__components_modal_modal_component__["a" /* ModalCmp */], __WEBPACK_IMPORTED_MODULE_35__components_picker_picker_component__["b" /* PickerCmp */], __WEBPACK_IMPORTED_MODULE_36__components_popover_popover_component__["a" /* PopoverCmp */], __WEBPACK_IMPORTED_MODULE_37__components_toast_toast_component__["a" /* ToastCmp */], __WEBPACK_IMPORTED_MODULE_38__components_avatar_avatar__["a" /* Avatar */], __WEBPACK_IMPORTED_MODULE_39__components_backdrop_backdrop__["a" /* Backdrop */], __WEBPACK_IMPORTED_MODULE_40__components_badge_badge__["a" /* Badge */], __WEBPACK_IMPORTED_MODULE_41__components_button_button__["a" /* Button */], __WEBPACK_IMPORTED_MODULE_42__components_card_card__["a" /* Card */], __WEBPACK_IMPORTED_MODULE_42__components_card_card__["b" /* CardContent */], __WEBPACK_IMPORTED_MODULE_42__components_card_card__["c" /* CardHeader */], __WEBPACK_IMPORTED_MODULE_42__components_card_card__["d" /* CardTitle */], __WEBPACK_IMPORTED_MODULE_43__components_checkbox_checkbox__["a" /* Checkbox */], __WEBPACK_IMPORTED_MODULE_44__components_chip_chip__["a" /* Chip */], __WEBPACK_IMPORTED_MODULE_45__util_click_block__["a" /* ClickBlock */], __WEBPACK_IMPORTED_MODULE_49__components_grid_grid__["a" /* Col */], __WEBPACK_IMPORTED_MODULE_46__components_content_content__["a" /* Content */], __WEBPACK_IMPORTED_MODULE_47__components_datetime_datetime__["a" /* DateTime */], __WEBPACK_IMPORTED_MODULE_48__components_fab_fab__["a" /* FabContainer */], __WEBPACK_IMPORTED_MODULE_48__components_fab_fab__["b" /* FabButton */], __WEBPACK_IMPORTED_MODULE_48__components_fab_fab__["c" /* FabList */], __WEBPACK_IMPORTED_MODULE_92__components_toolbar_toolbar__["a" /* Footer */], __WEBPACK_IMPORTED_MODULE_49__components_grid_grid__["b" /* Grid */], __WEBPACK_IMPORTED_MODULE_92__components_toolbar_toolbar__["b" /* Header */], __WEBPACK_IMPORTED_MODULE_81__components_show_hide_when_show_hide_when__["a" /* HideWhen */], __WEBPACK_IMPORTED_MODULE_50__components_icon_icon__["a" /* Icon */], __WEBPACK_IMPORTED_MODULE_51__components_img_img__["a" /* Img */], __WEBPACK_IMPORTED_MODULE_52__components_infinite_scroll_infinite_scroll__["a" /* InfiniteScroll */], __WEBPACK_IMPORTED_MODULE_53__components_infinite_scroll_infinite_scroll_content__["a" /* InfiniteScrollContent */], __WEBPACK_IMPORTED_MODULE_8__components_app_app_root__["a" /* IonicApp */], __WEBPACK_IMPORTED_MODULE_54__components_item_item__["a" /* Item */], __WEBPACK_IMPORTED_MODULE_54__components_item_item__["b" /* ItemContent */], __WEBPACK_IMPORTED_MODULE_54__components_item_item__["c" /* ItemDivider */], __WEBPACK_IMPORTED_MODULE_54__components_item_item__["d" /* ItemGroup */], __WEBPACK_IMPORTED_MODULE_56__components_item_item_sliding__["a" /* ItemOptions */], __WEBPACK_IMPORTED_MODULE_55__components_item_item_reorder__["a" /* ItemReorder */], __WEBPACK_IMPORTED_MODULE_56__components_item_item_sliding__["b" /* ItemSliding */], __WEBPACK_IMPORTED_MODULE_57__components_label_label__["a" /* Label */], __WEBPACK_IMPORTED_MODULE_58__components_list_list__["a" /* List */], __WEBPACK_IMPORTED_MODULE_59__components_list_list_header__["a" /* ListHeader */], __WEBPACK_IMPORTED_MODULE_60__components_menu_menu__["a" /* Menu */], __WEBPACK_IMPORTED_MODULE_61__components_menu_menu_close__["a" /* MenuClose */], __WEBPACK_IMPORTED_MODULE_62__components_menu_menu_toggle__["a" /* MenuToggle */], __WEBPACK_IMPORTED_MODULE_63__components_input_native_input__["a" /* NativeInput */], __WEBPACK_IMPORTED_MODULE_64__components_nav_nav__["a" /* Nav */], __WEBPACK_IMPORTED_MODULE_67__components_navbar_navbar__["a" /* Navbar */], __WEBPACK_IMPORTED_MODULE_65__components_nav_nav_pop__["a" /* NavPop */], __WEBPACK_IMPORTED_MODULE_65__components_nav_nav_pop__["b" /* NavPopAnchor */], __WEBPACK_IMPORTED_MODULE_66__components_nav_nav_push__["a" /* NavPush */], __WEBPACK_IMPORTED_MODULE_66__components_nav_nav_push__["b" /* NavPushAnchor */], __WEBPACK_IMPORTED_MODULE_63__components_input_native_input__["b" /* NextInput */], __WEBPACK_IMPORTED_MODULE_68__components_note_note__["a" /* Note */], __WEBPACK_IMPORTED_MODULE_69__components_option_option__["a" /* Option */], __WEBPACK_IMPORTED_MODULE_70__components_nav_overlay_portal__["a" /* OverlayPortal */], __WEBPACK_IMPORTED_MODULE_35__components_picker_picker_component__["a" /* PickerColumnCmp */], __WEBPACK_IMPORTED_MODULE_71__components_radio_radio_button__["a" /* RadioButton */], __WEBPACK_IMPORTED_MODULE_72__components_radio_radio_group__["a" /* RadioGroup */], __WEBPACK_IMPORTED_MODULE_73__components_range_range__["a" /* Range */], __WEBPACK_IMPORTED_MODULE_74__components_range_range_knob__["a" /* RangeKnob */], __WEBPACK_IMPORTED_MODULE_75__components_refresher_refresher__["a" /* Refresher */], __WEBPACK_IMPORTED_MODULE_76__components_refresher_refresher_content__["a" /* RefresherContent */], __WEBPACK_IMPORTED_MODULE_55__components_item_item_reorder__["b" /* Reorder */], __WEBPACK_IMPORTED_MODULE_49__components_grid_grid__["c" /* Row */], __WEBPACK_IMPORTED_MODULE_77__components_scroll_scroll__["a" /* Scroll */], __WEBPACK_IMPORTED_MODULE_78__components_searchbar_searchbar__["a" /* Searchbar */], __WEBPACK_IMPORTED_MODULE_79__components_segment_segment__["a" /* Segment */], __WEBPACK_IMPORTED_MODULE_79__components_segment_segment__["b" /* SegmentButton */], __WEBPACK_IMPORTED_MODULE_80__components_select_select__["a" /* Select */], __WEBPACK_IMPORTED_MODULE_81__components_show_hide_when_show_hide_when__["b" /* ShowWhen */], __WEBPACK_IMPORTED_MODULE_82__components_slides_slide__["a" /* Slide */], __WEBPACK_IMPORTED_MODULE_83__components_slides_slides__["a" /* Slides */], __WEBPACK_IMPORTED_MODULE_84__components_spinner_spinner__["a" /* Spinner */], __WEBPACK_IMPORTED_MODULE_85__components_tabs_tab__["a" /* Tab */], __WEBPACK_IMPORTED_MODULE_86__components_tabs_tabs__["a" /* Tabs */], __WEBPACK_IMPORTED_MODULE_87__components_tabs_tab_button__["a" /* TabButton */], __WEBPACK_IMPORTED_MODULE_88__components_tabs_tab_highlight__["a" /* TabHighlight */], __WEBPACK_IMPORTED_MODULE_89__components_input_input__["a" /* TextInput */], __WEBPACK_IMPORTED_MODULE_90__components_thumbnail_thumbnail__["a" /* Thumbnail */], __WEBPACK_IMPORTED_MODULE_91__components_toggle_toggle__["a" /* Toggle */], __WEBPACK_IMPORTED_MODULE_92__components_toolbar_toolbar__["c" /* Toolbar */], __WEBPACK_IMPORTED_MODULE_93__components_toolbar_toolbar_item__["a" /* ToolbarItem */], __WEBPACK_IMPORTED_MODULE_94__components_toolbar_toolbar_title__["a" /* ToolbarTitle */], __WEBPACK_IMPORTED_MODULE_95__components_typography_typography__["a" /* Typography */], __WEBPACK_IMPORTED_MODULE_97__components_virtual_scroll_virtual_item__["a" /* VirtualFooter */], __WEBPACK_IMPORTED_MODULE_97__components_virtual_scroll_virtual_item__["b" /* VirtualHeader */], __WEBPACK_IMPORTED_MODULE_97__components_virtual_scroll_virtual_item__["c" /* VirtualItem */], __WEBPACK_IMPORTED_MODULE_96__components_virtual_scroll_virtual_scroll__["a" /* VirtualScroll */]],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_31__components_action_sheet_action_sheet_component__["a" /* ActionSheetCmp */], __WEBPACK_IMPORTED_MODULE_32__components_alert_alert_component__["a" /* AlertCmp */], __WEBPACK_IMPORTED_MODULE_8__components_app_app_root__["a" /* IonicApp */], __WEBPACK_IMPORTED_MODULE_33__components_loading_loading_component__["a" /* LoadingCmp */], __WEBPACK_IMPORTED_MODULE_34__components_modal_modal_component__["a" /* ModalCmp */], __WEBPACK_IMPORTED_MODULE_35__components_picker_picker_component__["b" /* PickerCmp */], __WEBPACK_IMPORTED_MODULE_36__components_popover_popover_component__["a" /* PopoverCmp */], __WEBPACK_IMPORTED_MODULE_37__components_toast_toast_component__["a" /* ToastCmp */]]
        }] }];
    /** @nocollapse */
    IonicModule.ctorParameters = [];
    return IonicModule;
}();
/**
 * @private
 */
function provideLocationStrategy(platformLocationStrategy, baseHref, config) {
    return config.get('locationStrategy') === 'path' ? new __WEBPACK_IMPORTED_MODULE_1__angular_common__["e" /* PathLocationStrategy */](platformLocationStrategy, baseHref) : new __WEBPACK_IMPORTED_MODULE_1__angular_common__["f" /* HashLocationStrategy */](platformLocationStrategy, baseHref);
}
//# sourceMappingURL=index.js.map

/***/ })

})
//# sourceMappingURL=0.c35a92fb3488b85243e1.hot-update.js.map