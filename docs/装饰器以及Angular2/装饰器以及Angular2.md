

# 装饰器以及Angular2
###### --seraphwu@20170212

## 背景

* 学习angular2时，第一印象就是多了个@:装饰器
* 希望借此文档

	1. 了解装饰器
	2. 看angular2的装饰器。
	2. 装饰器在es5下是否好写。

* 最终是希望为angular1升级2时做技术积累。


## angular2中看到的装饰器

* 模块

	```js
	@NgModule({
	  declarations: [
	    ...
	  ],
	  imports: [
	    IonicModule.forRoot(MyApp)
	  ],
	  bootstrap: [IonicApp],
	  entryComponents: [
	    ...
	  ]
	})
	export class AppModule {}
	
	```

* 组件

	```js
	@Component({
	  templateUrl: 'app.html'
	})
	export class MyApp {
	  rootPage = TabsPage;
	  constructor(platform: Platform) {
	    ...
	  }
	}
	
	```

## 装饰器的例子说明

* 例子说明：[from](https://aotu.io/notes/2016/10/24/decorator/)
	
	```js
	function isAnimal(target) {
	    target.isAnimal = true;
	    return target;
	}
	@isAnimal
	class Cat {
	    ...
	}
	console.log(Cat.isAnimal);    // true
	
	```

* 等同于

	```js
	function isAnimal(target) {
	    target.isAnimal = true;
	    return target;
	}
	Cat = isAnimal(function Cat() {
	    ...
	});
	console.log(Cat.isAnimal);    // true
	
	```

* 总结
	1. 装饰器对被装饰类进行一种包装。


##实现代码上看装饰器

* ts源码

	```js
	//装饰器实现
	function isAnimal(target) {
	    return target;
	}
	
	function isPerson(target) {
	    return target;
	}
	
	//应用两个装饰器
	@isAnimal
	@isPerson
	class cat {
	
	}
	
	//应用一个装饰器
	@isPerson
	class person {
	
	}
	
	//无装饰器
	class dog {
	
	}
	
	```
	
* 转换成es5代码

	```js
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	        return c > 3 && r && Object.defineProperty(target, key, r), r;
	    };
	//装饰器实现
	function isAnimal(target) {
	    return target;
	}
	function isPerson(target) {
	    return target;
	}
	//应用两个装饰器
	var cat = (function () {
	    function cat() {
	    }
	
	    return cat;
	}());
	cat = __decorate([
	    isAnimal,
	    isPerson
	], cat);
	//应用一个装饰器
	var person = (function () {
	    function person() {
	    }
	
	    return person;
	}());
	person = __decorate([
	    isPerson
	], person);
	//无装饰器
	var dog = (function () {
	    function dog() {
	    }
	
	    return dog;
	}());
	
	```
	
* 总结

1. 代码转换后，申明的装饰器类和被装饰类，都没变化。（class是语法糖）
2. 而是新增了__decorate 函数，并支持传入数组参数，数组是多个装饰器函数，返回值替代了被装饰的类。


## 关键函数__decorate

* 源码初步排版后如下：

	```js
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	        var argumentLength = arguments.length;
	        var r = argumentLength < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc;
	        var d;
	        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") {
	            r = Reflect.decorate(decorators, target, key, desc);
	        }
	        else {
	            for (var i = decorators.length - 1; i >= 0; i--)
	                if (d = decorators[i]) {
	                    r = (argumentLength < 3 ? d(r) : argumentLength > 3 ? d(target, key, r) : d(target, key)) || r;
	                }
	        }
	        return argumentLength > 3 && r && Object.defineProperty(target, key, r), r;
	    };
	    
	```

* 考虑仅传入第一个参数，过滤掉无用代码，如下：
	
	```js
	var __decorate = function (decorators, target, key, desc) {
	    var r = target;
	    var d;
	
	    for (var i = decorators.length - 1; i >= 0; i--)
	        if (d = decorators[i]) {
	            r = d(r) || r;
	        }
	
	    return r;
	};
	
	```

* 总结
	1. 被装饰类被当做参数，传入装饰器，进行执行，并返回执行结果。
	2. 如果有多个装饰器，则依次对多个类进行执行。
	

## 带参数的装饰器
* 装饰器带上参数
	
	```js
	//ts源码：
	//应用两个装饰器
	@isAnimal("test")
	@isPerson("test1", "test2")
	class cat {
	
	}
	
	//转码后：
	//应用两个装饰器
	var cat = (function () {
	    function cat() {
	    }
	    return cat;
	}());
	cat = __decorate([
	    isAnimal("test"),
	    isPerson("test1", "test2")
	], cat);
	```

* 总结
	1. 结合__decorate的实现。 可知：装饰器，实际是一种偏函数的实现。
	2. 装饰器如果接受参数，则返回一个函数，来接受被装饰类作为参数，并用返回值替代被装饰类。


## Angular2中第一个装饰器ngModule的实现

* ngModule

	```js
	/**
	 * NgModule decorator and metadata.
	 *
	 * @stable
	 * @Annotation
	 */
	export var NgModule = makeDecorator('NgModule', {
	    providers: undefined,
	    declarations: undefined,
	    imports: undefined,
	    exports: undefined,
	    entryComponents: undefined,
	    bootstrap: undefined,
	    schemas: undefined,
	    id: undefined,
	});
	
	```
	
* makeDecorator又是什么

	```js
	export function makeDecorator(name, props, parentClass, chainFn) {
	    if (chainFn === void 0) { chainFn = null; }
	    //预处理参数的函数
	    var metaCtor = makeMetadataCtor([props]);
	    //最终的装饰器函数  objOrType即装饰器参数
	    //该DecoratorFactory 也可以直接调用，传入元数据，进行模块初始化
	    function DecoratorFactory(objOrType) {
	        if (!(Reflect && Reflect.getMetadata)) {
	            throw 'reflect-metadata shim is required when using class decorators';
	        }
	        if (this instanceof DecoratorFactory) {
	            //预处理装饰器参数
	            metaCtor.call(this, objOrType);
	            return this;
	        }
	        var annotationInstance = new DecoratorFactory(objOrType);
	        var chainAnnotation = typeof this === 'function' && Array.isArray(this.annotations) ? this.annotations : [];
	        chainAnnotation.push(annotationInstance);
	        //装饰器返回此函数，将被装饰类 作为参数cls传入，最终return 的cls替代传入参数的cls
	        var TypeDecorator = function TypeDecorator(cls) {
	            var annotations = Reflect.getOwnMetadata('annotations', cls) || [];
	            annotations.push(annotationInstance);
	            //装饰器实际上做的事情，设置metadata
	            Reflect.defineMetadata('annotations', annotations, cls);
	            return cls;
	        };
	        TypeDecorator.annotations = chainAnnotation;
	        TypeDecorator.Class = Class;
	        if (chainFn)
	            chainFn(TypeDecorator);
	        return TypeDecorator;
	    }
	    if (parentClass) {
	        DecoratorFactory.prototype = Object.create(parentClass.prototype);
	    }
	    DecoratorFactory.prototype.toString = function () { return ("@" + name); };
	    DecoratorFactory.annotationCls = DecoratorFactory;
	    return DecoratorFactory;
	}
	
	```

* 总结
	1. 源码中DecoratorFactory类即预处理过默认参数的装饰器类。
	2. TypeDecorator则是包装被装饰类的函数。


## ES5下使用@装饰器

* 装饰器是ES2017语法，我们默认用webpack的babel来转码装饰器，会报错
	
	```
	ERROR in ./es5Decorator.js
	Module build failed: SyntaxError: Unexpected token (11:0)
	
	   9 | 
	  10 | //应用两个装饰器
	> 11 | @isAnimal("test")
	     | ^
	  12 | @isPerson("test1", "test2")
	  13 | class cat {
	  14 | 
	
	```

* [babel官网](https://babeljs.io/)在进行装饰器转码时，会提示

	```
	repl: Decorators are not officially supported yet in 6.x pending a proposal update.
	However, if you need to use them you can install the legacy decorators transform with:
	
	npm install babel-plugin-transform-decorators-legacy --save-dev
	
	and add the following line to your .babelrc file:
	
	{
	  "plugins": ["transform-decorators-legacy"]
	}
	
	```
	
*  按指引进行npm安装与配置后，可在es5下转码，转码结果：

	```
	...
	/***/ (function(module, exports) {
	
	var _dec, _dec2, _class, _class2;
	
	//装饰器实现
	function isAnimal(target) {
	    return target;
	}
	
	function isPerson(target) {
	    return target;
	}
	
	//应用两个装饰器
	let cat = (_dec = isAnimal("test"), _dec2 = isPerson("test1", "test2"), _dec(_class = _dec2(_class = class cat {}) || _class) || _class);
	
	//应用一个装饰器
	
	let person = isPerson(_class2 = class person {}) || _class2;
	
	//无装饰器
	
	
	let dog = class dog {};
	
	/***/ })
	/******/ ]);
	...
	
	```

* 总结
	
	1. 看转码结果中的运算顺序，与ts的转码结果相似。
	2. 可以在es5下写装饰器，如真要写，还要考虑下编辑器的提示问题。

	
## Angular2在ES6下的装饰器兼容写法

* es6+@装饰器写法

	```js
	@Component({
	    selector: "my-app",
	    template: '<h1>Hello angular V2 js</h1>'
	})
	export class AppComponent {
	    constructor() {}
	}
	
	```

* 无@写法1

	```js
	export class AppComponent {
	    constructor() {}
	}
	
	AppComponent.annotations = [
	    new Component({
	        selector: "my-app",
	        template: '<h1>Hello angular V2 js with annotations</h1>'
	    })
	]
	
	```

* 无@写法2

	```js
	var AppComponent = Component({
	    selector: "my-app",
	    template: '<h1>Hello angular V2 js</h1>'
	})
	    .Class({
	        constructor: function () {}
	    })
	
	export default AppComponent;
	
	```
	
* 总结
	
	1. angular2的ngModule实现中提到，装饰器执行到最后，是设置annotations元数据值，与上文第二种写法相似。
	2. angular2的ngModule实现中提到：DecoratorFactory，其实就是上文Component。对应第三种写法，可直接传入元数据，进行组件的创建。
	2. 无@的写法可以结合angular1升级到2的中间程序，进行应用。


## 元数据

* 参考此文：[http://qianduan.guru/2016/04/13/decorators-metadata-reflection-in-typescript-part-iv/](http://qianduan.guru/2016/04/13/decorators-metadata-reflection-in-typescript-part-iv/)

* 关注三点
	1. 类型元数据使用元数据键"design:type"
	2. 参数类型元数据使用元数据键"design:paramtypes"
	3. 返回值类型元数据使用元数据键"design:returntype"
* 通过元数据，可以获取类，或者属性的类型，参数类型，以及返回类型。
* 看看元数据的一些API:[https://github.com/rbuckton/reflect-metadata](https://github.com/rbuckton/reflect-metadata)

	```js
	// define metadata on an object or property
	Reflect.defineMetadata(metadataKey, metadataValue, target);
	Reflect.defineMetadata(metadataKey, metadataValue, target, propertyKey);
	
	// check for presence of a metadata key on the prototype chain of an object or property
	let result = Reflect.hasMetadata(metadataKey, target);
	let result = Reflect.hasMetadata(metadataKey, target, propertyKey);
	
	// check for presence of an own metadata key of an object or property
	let result = Reflect.hasOwnMetadata(metadataKey, target);
	let result = Reflect.hasOwnMetadata(metadataKey, target, propertyKey);
	
	// get metadata value of a metadata key on the prototype chain of an object or property
	let result = Reflect.getMetadata(metadataKey, target);
	let result = Reflect.getMetadata(metadataKey, target, propertyKey);
	
	// get metadata value of an own metadata key of an object or property
	let result = Reflect.getOwnMetadata(metadataKey, target);
	let result = Reflect.getOwnMetadata(metadataKey, target, propertyKey);
	
	// get all metadata keys on the prototype chain of an object or property
	let result = Reflect.getMetadataKeys(target);
	let result = Reflect.getMetadataKeys(target, propertyKey);
	
	// get all own metadata keys of an object or property
	let result = Reflect.getOwnMetadataKeys(target);
	let result = Reflect.getOwnMetadataKeys(target, propertyKey);
	
	// delete metadata from an object or property
	let result = Reflect.deleteMetadata(metadataKey, target);
	let result = Reflect.deleteMetadata(metadataKey, target, propertyKey);
	
	```

* API的特点是，支持自定义，可增删改查。

## Angular2，装饰器，元数据

* 我理解装饰器，元数据在Angular2中的意义是：
	1. 通过装饰器，给类，属性，设置元数据。
	2. 在依赖注入时，通过元数据找到注入引用所依赖的类，进行类的实例新建或者引用。
* 官网介绍依赖注入教程时提到：



At runtime, injectors can read class metadata in the transpiled JavaScript code and use the constructor parameter type information to determine what things to inject.



## 参考

* Angular1下类似装饰器写法 [angular2to1](https://github.com/orizens/angular2to1)

	```js
	var myApp = ng.core
	    .Component({
	        selector: 'my-app'
	        providers: [ 
	            'core.services'
	        ],
	        bindings: {
	            title: '@'
	        }
	    })
	    .View({
	        template: '<div> {{ myApp.title }} </div>'
	    })
	    .Class({
	        constructor: 'MyAppCtrl'
	    })
	    
	```

* Typescript to script

* [阮一峰对装饰器的详解](http://es6.ruanyifeng.com/#docs/decorator)
* 此文强烈推荐：[TypeScript to JavaScript](https://angular.io/docs/js/latest/cookbook/ts-to-js.html)