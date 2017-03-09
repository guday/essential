import {Component} from '@angular/core';
import {App} from 'ionic-angular';

export class IonViewComponent {
  constructor(app) {
    this.app = app;
    console.log("in IonViewComponent");
    this.app.viewDidEnter.subscribe((view)=>{
      var a = view;
    })
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

IonViewComponent.annotations = [
  new Component({
    selector: 'ion-view',
    template: `<ng-content></ng-content>`,
    inputs:[
      "viewTitle"
    ]
  })
]

IonViewComponent.parameters = [
  [App]
]
