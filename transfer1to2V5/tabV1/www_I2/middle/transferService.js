import {Injectable} from '@angular/core';
import { NavParams} from 'ionic-angular';

//middle过来的
import {StaticData} from '../../i2Transfer/service/static';
// import {StaticData} from '../../middle/service/static';

StaticData.annotations = [
  new Injectable()
];


import {Location2} from './service/stateParams';
//全新service
import {CommonPathService} from './service/commonPathService';


var $location = CommonPathService;
var $stateParams = NavParams;


export {StaticData, $location, CommonPathService, $stateParams, Location2};
