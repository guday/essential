import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

//引入页面组件
import { Localstorage } from '../pages/localstorage/localstorage';
import { CurrentScope } from '../pages/currentScope/currentScope';
import { Log} from '../pages/log/log';
import { Net} from '../pages/net/net';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = Log;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform) {
    this.initializeApp();

    this.initData();

    this.initView();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

  /**
   * 初始化 数据
   */
  initData(){
    //菜单数据
    this.pages = [
      { title: 'Log', component: Log },
      { title: 'Net', component: Net },
      { title: 'Localstorage', component: Localstorage },
      { title: 'CurrentScope', component: CurrentScope }
    ];


  }

  /**
   * 初始化 视图显示
   */
  initView(){

  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
