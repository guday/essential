import {App, NavParams} from 'ionic-angular';
import {Component, Injectable, ReflectiveInjector} from '@angular/core';

import {StaticData} from './transferService';

//全新service
// import {CommonPathService} from './service/commonPathService';

import {HomePage, ListPage, ListDetailPage} from './transferController';



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
// var $stateParams = NavParams;


export {HomePage, ListPage, ListDetailPage, StaticData};
