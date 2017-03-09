
class HomeController {
  constructor() {
    var $injector = window.injector;

    this.items = [
      {
        content: "调试页面:ng-click,ng-src,ng-style,ng-if"
      },
      {
        content: "调试页面:ng-repeat"
      },
      {
        content: "调试js:注入"
      },
      {
        content: "调试js:元数据"
      },
      {
        content: "调试页面"
      },
    ];


    this.onClickPhone = (phone) => {
      // this.$location.path("/phones/" + phone.id)
    }
  }

  onClickPageOnly() {
    // this.$location.path('pageOnly')
  }
}

var HomeDirective = function () {
  return {
    restrict: "E",
    template: require('./home.html'),
    controller: HomeController,
    controllerAs: "vm",
    bindToController: true
  }
};

export {HomeController, HomeDirective};
