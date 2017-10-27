# tree sharking(摇摇更健康)
###### seraphwu@20171024

## 概述
* 说说什么是tree sharking。
* 说说模块化的语法。
* 做个总结。

## 什么是tree sharking
* 想象一下秋日里的树，摇一摇树干，落下一片片枯叶。
* 对js的语法树进行引用遍历，去掉静态分析后执行不了的代码，就是tree sharking了。
* 就是消除 ```dead code elimination```。

## webpack中怎么配置
* 要求 ```webpack2```。
* 使用插件 ```uglifyjs-webpack-plugin```。

	```js
	const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
	
	module.exports = {
	  plugins: [
	    new UglifyJSPlugin()
	  ]
	}
	
	```

## 项目中应用的前提
* 使用ES6 Module的方式，进行模块的导入与导出

	```js
	export function fun(){}
	
	import {fun} from 'file';
	
	```

## 我们项目中能应用么(微众银行app)
* 几乎不能，99%不能。
* 因为：
	* 大部分的 export，都是class的方式。```tree sharking``` 不会对class内部处理。
	* 少部分的单独export，其实都有引用的地方。```tree sharking``` 处理不掉这些代码。
* 所以，本文只是聊聊就好。

## 什么场景才有tree sharking意义
* 模块的导入和导出都是用ES6 Module的语法

	```js
	export function fun(){};
	export {fun}
	export default function(){};
	export {a as b}
	
	import fun from 'file';
	import {fun} from 'file';
	import {* as fun} from 'file';
	
	```


## 什么场景没有tree sharking意义
* 模块的导入和导出都是用 ```CommonJS``` 语法。
	
	```js
	exports.fun = function(){}
	
	var fun = require('file')
	
	```
	
* 模块的导出是用 ```ES6 Module```，但是导入是用 ```CommonJS``` 语法。

	```js
	export {fun}
	
	var fun = require('file')
	
	```
	
* 模块导入导出都是用 ```ES6 Module```
	* 但是导出模块是个整体。
	* 但是所有导出模块都被引用了。


## 其实概念一直都在
* ```dead code elimination```
	* ```uglify``` 在做的，就是消灭没意义的代码

	```js
	//处理前
	export function get11() {
	    var a = 1;
	    var b = 'x';
	    return 'get11' + b;
	}

	//处理后
	export function get11() {
	    return 'get11x';
	}
	
	```
	
* 所以
	* ```tree sharking```，只是 ```ES6 Module``` 引入后，才变得有意义，也是一种类型的  ```dead code elimination``` 。

* 有没发现
	* webpack的 ```tree sharking``` 是在uglify 插件中的，默认支持，无需配置。
	* ```tree sharking``` 与 原始 ```dead code elimination``` 都是一个目的。

## 承上启下
* 既然tree sharking是建立在ES6 Module之上的，那我们就看看各种模块规范语法规范吧。



## 模块语法:CommonJS 规范
* 概述
	* Node 应用由模块组成，采用 ```CommonJS``` 模块规范。（给后台服务用的）
	* 每个文件就是一个模块，有自己的作用域。在一个文件里面定义的变量、函数、类，都是私有的，对其他文件不可见。
* 例子

	```js
	//定义
	var x = 5;
	var addX = function (value) {
	  return value + x;
	};
	module.exports.x = x;
	module.exports.addX = addX;
	
	//引用
	var example = require('./example.js');
	console.log(example.x); // 5
	console.log(example.addX(1)); // 6
	
	```
	
* AMD
	* 重点：异步，浏览器
	* 写法很多，仅举一例
	
	```js
	define("module", [ "dep1", "dep2"], function( dep1, dep2 ){
	    export.do = function(){
	    }
	});
	
	```
	
* CMD
	* 重点：异步，浏览器
	* 写法很多，仅举一例
	
	```js
	define('module', ['dep'], function(require, exports, module) {
	
	  exports = {
        foo : 'bar', // 向外提供的属性
        do : function(){} // 向外提供的方法
    }
	
	});
	
	```
	
* 问题
	* AMD和CMD显然是无法支撑 ```tree sharking``` 的。
	* 但是commonJS语法是单独导出的，为什么也不支持 ```tree sharking```呢。
		* 就说我了解的一点。
		* require 的时候，将会执行一遍被require的js，故无论你怎么exports，都无法避免js文件中代码的 ```side effect```。
		
## 模块语法:ES6 Module语法
* 重点：编译时加载
* ES6 模块的设计思想，是尽量的静态化，使得编译时就能确定模块的依赖关系，以及输入和输出的变量。
* 集中导入导出的例子：
	
	```js
	//导出1
	export {moduleX} ；
	//导出2
	export {fun as moduleX};
	//导出3
	export function moduleX(){}
		
	//导入1
	import {moduleX} from 'xx';
	//导入2
	import * as cons from 'xx'; 
	cons. moduleX
	//导入3
	import {moduleX as fun} from 'xx';
		
	//导出4
	export default function(){}
	//导入4
	import Unknown from 'xx';
		
	```
	
* 问题：
	* 为什么 ```ES6 Module``` 就可以做 ```tree sharking``` 了
	* 因为，请看该语法的规范
		1. 只能作为模块顶层的语句出现，不能出现在 function 里面或是 if 里面。（ECMA-262 15.2)
		2. import 的模块名只能是字符串常量。(ECMA-262 15.2.2)
		3. 不管 import 的语句出现的位置在哪里，在模块初始化的时候所有的 import 都必须已经导入完成。换句话说，ES6 imports are hoisted。(ECMA-262 15.2.1.16.4 - 8.a)
		4. import binding 是 immutable 的，类似 const。比如说你不能 import { a } from './a' 然后给 a 赋值个其他什么东西。(ECMA-262 15.2.1.16.4 - 12.c.3)

	* 这些规范，让其语法支持被静态分析，引用分析，从而去除无效代码。

	
## 模块语法:UMD
* 重点：兼容
* [https://unpkg.com/#/](https://unpkg.com/#/)网站，有各种插件的umd
* Angular2的在线例子中，[大量应用](https://embed.plnkr.co/?show=preview)

	```js
	map: {
   
      '@angular/animations': 'npm:@angular/animations/bundles/animations.umd.js',
      '@angular/animations/browser': 'npm:@angular/animations/bundles/animations-browser.umd.js',
      '@angular/core': 'npm:@angular/core/bundles/core.umd.js',
      '@angular/common': 'npm:@angular/common/bundles/common.umd.js',
      '@angular/common/http': 'npm:@angular/common/bundles/common-http.umd.js',
    }
    
	```
	
* 我们项目的 ```app.service.js``` 中，也引用了一把其中的关键语法。用于兼容App的ES6加载方法与 webpack的 ```CommonJS``` 加载语法。

	```js
	(function (global, factory) {
	    (typeof(exports) === 'object' && typeof(module) !== 'undefined') ? factory(exports) :
	        typeof define === 'function' && define.amd ? define(['exports'], factory) :
	            (factory((global.acorn = global.acorn || {})));
	}(this, (function (exports) {
		 	//逻辑代码
	        exports.services = "";
	    }
	)));
	
	```
	
* 解开上述代码，看看

	```js
	(function (global, factory) {
	    if (typeof(exports) === 'object' && typeof(module) !== 'undefined') {
	        //CommonJS 规范
	        factory(exports)
	    } else {
	        if (typeof define === 'function' && define.amd) {
	            //AMD 规范
	            define(['exports'], factory)
	        } else {
	            factory((global.acorn = global.acorn || {}));
	            //不知道是什么，acorn是个类似esprima的 ast解析工具
	        }
	    }
	}(this, (function (exports) {
	         //逻辑代码
	        exports.services = "";
	
	    }
	)));
	
	```
	
* 问题：
	* 我们的代码是browser项目，为什么要判断 ```CommonJS``` 规范， 这不是node才这么应用么。
		* 因为，看过webpack后的源码都知道，每个js文件都被下一段代码包围着

			```js
			/* 0 */         //这是webpack的chunkid
			/***/
			(function (module, exports, __webpack_require__) {
			    "use strict";
			    //js代码正文
			})
			
			```
		* 所以，只是 webpack 传了exports 和 module参数过来，帮你做了兼容。 
		
## 总结
* 问题1：为什么我们的项目里面，使用 ```CommonJS``` 语法(exports)导出，却可以使用ES6模块语法(import)导入
	* 因为webpack默认会把ES6的模块转化为 ```CommonJS``` 规范的。
	* 所有，export 导出的，用require也可以加载，反正，都会被转为require的。
* 问题2：既然require能代替import，那 ```tree sharking``` 还能运行吗?
	* 不能
	* 上文解释过，使用require，会导致被require文件被执行，产生的 ```side effect``` 无法评估，故无法删代码。
* 问题3：听说过 ```closure``` 么，相比于uglify，他有更激进的无效代码删除方案，有空，为何不自己去看看呢。
* 问题4：ES6 Module 的能力，还带来了什么有趣的应用。
	* webpack3 的 [Scope Hosting(作用域提升)](https://zhuanlan.zhihu.com/p/27828233)，可提高代码执行效率。