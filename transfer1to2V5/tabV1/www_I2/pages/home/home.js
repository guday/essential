import {Component} from '@angular/core';

export class HomePage {

  constructor() {

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

HomePage.annotations = [
  new Component({
    selector: 'page-home',
    template: `
<ion-header>
  <ion-navbar>
    <ion-title>Home</ion-title>
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
]
