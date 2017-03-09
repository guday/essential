import {Injectable, forwardRef} from '@angular/core';


//middle过来的
// import {StaticData} from '../../i2Transfer/service/static';
import {StaticData} from '../../middle/service/static';
StaticData.annotations = [
  new Injectable()
];

// @Injectable();
import {App} from 'ionic-angular';
//全新service
import {CommonPathService} from './service/commonPathService';
import {$stateParams} from './service/stateParams';

var $location = CommonPathService;
// var $stateParams = NavParams;

// var $state = function () {
//   return CommonPathService;
// };
// var $stateParams = function () {
//   return NavParams;
// };

// var $state = forwardRef(() => CommonPathService);
// var $stateParams = forwardRef(() => NavParams);

export {StaticData, $location, CommonPathService, $stateParams};
