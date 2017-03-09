class ListController {
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
    this.$location.path("/tab/detail/" + item.id).search({msg: "ok"});

  }

}

var ListDirective = function () {
  return {
    restrict: "E",
    template: require('./list.html'),
    controller: ListController,
    controllerAs: "vm",
    bindToController: true
  }
};

export {ListController, ListDirective};
