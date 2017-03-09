
 import {Inject, forwardRef} from '@angular/core';

 import {StaticData, $stateParams, $location} from '../../../www_I2/middle/transferService';
class ListDetailController {
  constructor(StaticData, $stateParams, $location){
    this.StaticData = StaticData;
    this.$stateParams = $stateParams;
    this.$location = $location;

    var $injector = window.injector;

    this.detail = this.StaticData.get(this.$stateParams.data.id);

    // var search = this.$location.search();
    // console.log(sea)

  }
}
ListDetailController.parameters =
[[forwardRef(() => StaticData)],[forwardRef(() => $stateParams)],[forwardRef(() => $location)]];


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
