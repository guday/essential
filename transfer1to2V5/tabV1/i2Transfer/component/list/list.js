
 import {Inject, forwardRef} from '@angular/core';

 import {StaticData, $location} from '../../../www_I2/middle/transferService';
class ListController {
  constructor(StaticData, $location){
    this.StaticData = StaticData;
    this.$location = $location;

    var $injector = window.injector;


    this.list = this.StaticData.all();

  }

  remove(item) {
    this.list.remove(item);
  }

  onClickItem(item) {
    this.$location.path("/tab/detail/" + item.id).search({msg: "ok"});

  }

}
ListController.parameters = 
[[forwardRef(() => StaticData)],[forwardRef(() => $location)]];


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
