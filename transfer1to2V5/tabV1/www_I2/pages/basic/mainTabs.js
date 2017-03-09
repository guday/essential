import {Component} from '@angular/core';

// import {HomePage} from '../home/home';
import {HomePage, ListPage} from '../../middle/bridge';
import {AboutPage} from '../about/about';
// import {ListPage} from '../list/list';

export class MainTabs {

  constructor() {
    this.tab1Root = HomePage;
    this.tab2Root = ListPage;
    this.tab3Root = AboutPage;
  }
}

MainTabs.annotations = [
  new Component({
    template: `<ion-tabs>
    <ion-tab [root]="tab1Root" tabTitle="Home" tabIcon="home"></ion-tab>
    <ion-tab [root]="tab2Root" tabTitle="List" tabIcon="contacts"></ion-tab>
    <ion-tab [root]="tab3Root" tabTitle="About" tabIcon="information-circle"></ion-tab>
</ion-tabs>
`
  })
]
