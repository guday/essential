
import {NavController, NavParams} from 'ionic-angular';
import {Component, Injectable, ReflectiveInjector} from '@angular/core';
import {HomeController, HomeDirective} from '../../middle/component/home/home';
import {ListController, ListDirective} from '../../middle/component/list/list';
import {ListDetailController, ListDetailDirective} from '../../middle/component/list/list-detail';

var HomePage = HomeController;
var HomeObj = HomeDirective();
var HomeTemplate = transferHtmlStr(HomeObj.template);

HomePage.annotations = [
  new Component({
    selector: "page-home",
    template: HomeTemplate
  })
];


var ListPage = ListController;
var ListObj = ListDirective();
var ListTemplate = transferHtmlStr(ListObj.template);

ListPage.annotations = [
  new Component({
    selector: "page-list",
    template: ListTemplate
  })
];


var ListDetailPage = ListDetailController;
var ListDetailObj = ListDetailDirective();
var ListDetailTemplate = transferHtmlStr(ListDetailObj.template);

ListDetailPage.annotations = [
  new Component({
    selector: "page-list-detail",
    template: ListDetailTemplate
  })
];



function transferHtmlStr(srcStr) {
  var newStr = srcStr;
  newStr = newStr.replace(/ng-src=(['"]{1}){{(.*?)}}(['"]{1})/g, '[src]=$1$2$3');
  newStr = newStr.replace(/ng-repeat=(['"]{1})(.*?)(['"]{1})/g, function (a, b, c) {
    let before = RegExp.$1;
    let content = RegExp.$2;
    let end = RegExp.$3;

    content = content.replace(" in ", " of ");
    content = 'let ' + content;
    return '*ngFor=' + before + content + end;
  });
  newStr = newStr.replace(/ng-click/g, '(click)');
  newStr = newStr.replace(/vm\./g, '');
  // newStr = newStr.replace(/ion-view/g, 'div');

  return newStr;
}






//middle过来的
import {StaticData} from '../../middle/service/static';
StaticData.annotations = [
  new Injectable()
];

//全新service
import {CommonPathService} from './service/commonPathService';


var nameMap = {
  "StaticData":StaticData,    //数据
  "$state":CommonPathService, //跳转
  "$stateParams":NavParams,   //获取参数
}

window.injector = {
  get: function (name) {
    var provide = nameMap[name];
    if (provide) {
      return ReflectiveInjector.resolveAndCreate([provide]).get(provide)
    } else {
      return null;
    }
  }
}


export {HomePage, ListPage, ListDetailPage, StaticData, CommonPathService};
