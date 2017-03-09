import {Component} from '@angular/core';

import {StaticData} from 'middle/bridge';
import {CommonPathService} from 'middle/service/commonPathService';
export class AboutPage {

  constructor(a,b) {
this.a = a;
this.b = b;
  }


  ionViewDidLoad(){
    console.log('ionViewDidLoad')
  }

  ionViewWillEnter(){
    console.log('ionViewWillEnter')
  }

  ionViewDidEnter(){
    console.log('ionViewDidEnter')
  }

  ionViewWillLeave(){
    console.log('ionViewWillLeave')
  }

  ionViewDidLeave(){
    console.log('ionViewDidLeave')
  }

  ionViewWillUnload(){
    console.log('ionViewWillUnload')
  }

}

AboutPage.annotations = [
  new Component({
    selector: 'page-about',
    template: `
<ion-header>
  <ion-navbar>
    <ion-title>about</ion-title>
  </ion-navbar>
</ion-header>

<ion-content padding>
  <h2>Welcome to Ionic!</h2>
  <p>
    This starter project comes with simple tabs-based layout for apps
    that are going to primarily use a Tabbed UI.
  </p>
  <p>
    Take a look at the <code>src/pages/</code> directory to add or change tabs,
    update any existing page or create new pages.
  </p>
</ion-content>
`
  })
];

AboutPage.parameters = [
  [StaticData, CommonPathService]
]
