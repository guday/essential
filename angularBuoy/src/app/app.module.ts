import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';

import { MyApp } from './app.component';
import { Localstorage } from '../pages/localstorage/localstorage';
import { CurrentScope } from '../pages/currentScope/currentScope';
import { Log} from '../pages/log/log';
import { Net} from '../pages/net/net';

import {AppService} from './app.service';

@NgModule({
  declarations: [
    MyApp,
    Localstorage,
    CurrentScope,
    Log,
    Net
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Localstorage,
    CurrentScope,
    Log,
    Net
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, AppService]
})
export class AppModule {}
