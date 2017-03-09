import {Component} from '@angular/core';

export class IonOptionButtonComponent {
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

IonOptionButtonComponent.annotations = [
  new Component({
    selector: 'ion-option-button',
    template: `<button><ng-content></ng-content></button>`
  })
]
