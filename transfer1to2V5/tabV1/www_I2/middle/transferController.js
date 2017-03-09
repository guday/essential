import {Component} from '@angular/core';

import {HomeController, HomeDirective} from '../../i2Transfer/component/home/home';
import {ListController, ListDirective} from '../../i2Transfer/component/list/list';
import {ListDetailController, ListDetailDirective} from '../../i2Transfer/component/list/list-detail';

// import {HomeController, HomeDirective} from '../../middle/component/home/home';
// import {ListController, ListDirective} from '../../middle/component/list/list';
// import {ListDetailController, ListDetailDirective} from '../../middle/component/list/list-detail';

import {Location2} from './service/stateParams'
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
    template: ListDetailTemplate,
    providers: [
      Location2
    ]
  })
];

function transferHtmlStr(srcStr) {
  return srcStr;
}

export {HomePage, ListPage, ListDetailPage};
