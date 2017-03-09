import {NgModule, Component}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
//
// import {PhoneListDirective, PhoneListController} from '../middle/component/phone-list/phone-list.component.js';
// import {PageOnlyController} from '../middle/component/page-only/page-only.js';
//
// var PhoneListObj = PhoneListDirective();
// var PhoneListTemplate = transferHtmlStr(PhoneListObj.template);
//
// PhoneListController.annotations = [
//     new Component({
//         selector: "phone-list",
//         template: PhoneListTemplate
//     })
// ]
//
// PageOnlyController.annotations = [
//     new Component({
//         selector: "page-only",
//         template: '<h1>page-only middle</h1>'
//     })
// ]

import {HomeController, HomeDirective} from  '../middle/component/home/home';

var HomeObj = HomeDirective();
var HomeTemplate = transferHtmlStr(HomeObj.template);


HomeController.annotations = [
  new Component({
    selector: "phone-list",
    template: HomeTemplate
  })
]

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
  newStr = newStr.replace(/\$ctrl\./g, '');

  return newStr;
}

var AppModule = NgModule({
  imports: [BrowserModule],
  declarations: [
    AppComponent,
    HomeController,
  ],
  bootstrap: [HomeController]
}).Class({
  constructor: function () {

  }
})

export default AppModule;
