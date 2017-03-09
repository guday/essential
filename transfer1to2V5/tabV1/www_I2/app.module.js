import {NgModule, ErrorHandler} from '@angular/core';
import {IonicApp, IonicModule, IonicErrorHandler} from 'ionic-angular';

import {Init} from './pages/basic/init';
import {MainTabs} from './pages/basic/mainTabs';

// // import {HomePage} from './pages/home/home';
// import {StaticData} from './middle/transferService';
// import {CommonPathService} from './middle/service/commonPathService'
import {HomePage, ListPage, ListDetailPage, StaticData} from './middle/bridge';
import {CommonPathService} from './middle/service/commonPathService';
// import {$stateParams} from './middle/service/stateParams';

import {AboutPage} from './pages/about/about';
// import {ListPage} from './pages/list/list';

//兼容组件
import  {IonViewComponent} from  './components/ion/ionView'
import  {IonOptionButtonComponent} from  './components/ion/ionOptionButton'


var AppModule = NgModule({
  declarations: [
    Init,
    MainTabs,
    HomePage,
    AboutPage,
    ListPage,
    ListDetailPage,

    IonViewComponent,
    IonOptionButtonComponent,
    // ListDetailPage
  ],
  imports: [
    IonicModule.forRoot(Init)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    Init,
    MainTabs,
    HomePage,
    AboutPage,
    ListPage,
    ListDetailPage,
  ],
  providers: [
    StaticData,
    CommonPathService,
    // $stateParams,
    // $state,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
  ]
}).Class({
  constructor: function () {

  }
})
export default AppModule;
