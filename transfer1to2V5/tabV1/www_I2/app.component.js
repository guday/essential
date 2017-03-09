//@Component({
//    selector: "my-app",
//    template: '<h1>Hello angular V2 js</h1>'
//})
//export class AppComponent {
//    constructor() {
//
//    }
//}
//
//
//import { Component } from '@angular/core';
//var AppComponent = Component({
//    selector: "my-app",
//    template: '<h1>Hello angular V2 js</h1>'
//})
//    .Class({
//        constructor: function () {}
//    })
//
//export default AppComponent;
//

import { Component } from '@angular/core';

export class AppComponent {
    constructor() {}
}

AppComponent.annotations = [
    new Component({
        selector: "my-app",
        template: '<h1>Hello angular V2 js with annotations</h1>'
    })
]