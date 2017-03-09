class ListDetailController {
  constructor() {
    var $injector = window.injector;
    this.StaticData = $injector.get('StaticData');
    this.$stateParams = $injector.get('$stateParams');
    this.$location = $injector.get("$location");

    this.detail = this.StaticData.get(this.$stateParams.id);

    var search = this.$location.search();
    console.log(search);

  }
}

var ListDetailDirective = function () {
  return {
    restrict: "E",
    template: require('./list-detail.html'),
    controller: ListDetailController,
    controllerAs: "vm",
    bindToController: true
  }
};

export {ListDetailController, ListDetailDirective};
