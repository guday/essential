
 import {Inject, forwardRef} from '@angular/core';

 import {StaticData, $stateParams, $location, Location2} from '../../../www_I2/middle/transferService';
class ListDetailController {
  constructor(StaticData, $stateParams, $location, location2){
    this.StaticData = StaticData;
    this.$stateParams = $stateParams;
    this.$location = $location;

    var $injector = window.injector;

    this.detail = this.StaticData.get(this.$stateParams.data.id);

    var search = location2.search();
    console.log(search)

  }
}
ListDetailController.parameters =
[[forwardRef(() => StaticData)],[forwardRef(() => $stateParams)],[forwardRef(() => $location)],[forwardRef(() => Location2)]];


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
