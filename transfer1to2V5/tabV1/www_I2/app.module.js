import {NgModule, ErrorHandler} from '@angular/core';
import {IonicApp, IonicModule, IonicErrorHandler} from 'ionic-angular';

import {Init} from './pages/basic/init';
import {MainTabs} from './pages/basic/mainTabs';


// import {$stateParams} from './middle/service/stateParams';
import {HomePage, ListPage, ListDetailPage} from './middle/transferController';
// import {CommonPathService} from './middle/service/commonPathService';
import {StaticData, CommonPathService} from './middle/transferService';


import {AboutPage} from './pages/about/about';

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
