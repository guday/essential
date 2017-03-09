webpackHotUpdate(0,{

/***/ 504:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(60);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IonViewComponent; });



let IonViewComponent = class IonViewComponent {
  constructor(app) {
    this.app = app;
    console.log("in IonViewComponent");
    // this.app.viewDidEnter.next(this.ionViewDidEnter)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad');
  }

  ionViewWillEnter() {
    console.log('ionViewWillEnter');
  }

  ionViewDidEnter() {
    console.log('ionViewDidEnter');
  }

  ionViewWillLeave() {
    console.log('ionViewWillLeave');
  }

  ionViewDidLeave() {
    console.log('ionViewDidLeave');
  }

  ionViewWillUnload() {
    console.log('ionViewWillUnload');
  }
};

IonViewComponent.annotations = [new __WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Component */]({
  selector: 'ion-view',
  template: `<ng-content></ng-content>`,
  inputs: ["viewTitle"]
})];

IonViewComponent.parameters = [[__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* App */]]];

/***/ })

})
//# sourceMappingURL=0.3f83f2b51164e3206835.hot-update.js.map