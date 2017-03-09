import routing from './app.config.js';
let app = angular.module('starter');
app.config(routing);

import {HomeController, HomeDirective} from './component/home/home.js';
app.directive('homeDirective', HomeDirective);

import {ListController, ListDirective} from './component/list/list.js';
app.directive('listDirective', ListDirective);


import {ListDetailController, ListDetailDirective} from './component/list/list-detail.js';
app.directive('listDetailDirective', ListDetailDirective);


//
// import {PageOnlyController, PageOnlyDirective} from './component/page-only/page-only.js';
// app.directive('pageOnly', PageOnlyDirective);



import {StaticData} from './service/static';
app.service('StaticData', StaticData);
