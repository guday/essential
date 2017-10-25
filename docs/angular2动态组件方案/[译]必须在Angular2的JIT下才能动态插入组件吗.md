#[译]必须在Angular2的JIT下才能动态插入组件吗
######seraphwu@20171013 / 20171024
######[原文地址:https://medium.com/@isaacplmann/if-you-think-you-need-the-angular-2-runtime-jit-compiler-2ed4308f7515](https://medium.com/@isaacplmann/if-you-think-you-need-the-angular-2-runtime-jit-compiler-2ed4308f7515)
##当然不是
* 很久以前，我是这么认为的。
* 但是经过诸多的调试，踩了坑，碰了壁。发现在AOT下也可以有很多的方法动态插入组件。

##所以
* 下文中，我将列出六种动态插入组件的方法。
* 其中一种是在JIT下插入的，剩下五种是在AOT下插入的。
* 相信看完本文，AOT下的任何动态插入组件需求，都不在话下了。

##1.只能JIT下动态插入的方法
* [例子的链接(plunker)](http://plnkr.co/edit/Fca9sWr058gza4qXinjO?p=preview)
* 第一个例子是只能JIT下实现动态插入(在AOT编译后，会运行时报错)，如果其他例子不适合你的项目，使用这个例子的方法也还马虎。
* 核心实现，直接上代码了：
	* 通过 ```createDynamicComponent``` 函数
		* 动态创建一个组件模板。(函数里创建组件，看起来是不是很恶心)
	
		```
		private createDynamicComponent(): Type<any> {
		  @Component({
		    template: ‘<p>This was inserted!</p>’
		  })
		  class InsertedComponent { }
		 
		  return InsertedComponent;
		}
		
		```

	* 通过 ```_createAdHocComponentFactory``` 函数：

		* 创建一个 ```NgModule```
		* 将，通过 ```createDynamicComponent``` 创建的组件模板，注册到 ```NgModule``` 中
		* 使用 ```Compiler``` 在JIT下 创建该组件的工厂实例。
		* 然后返回这个组件的工厂实例
	
		```
		_createAdHocComponentFactory(component: any): ComponentFactory<any> {
		  @NgModule({
		    declarations: [component],
		    entryComponents: [component],
		    imports: [CommonModule],
		  })
		  class AdHocModule {}
		  let factory = this.compiler.compileModuleAndAllComponentsSync(AdHocModule).componentFactories
		    .find(factory => factory.componentType === component);
		  this.factories.push(factory);
		  return factory;
		}
		
		```
		
	* 运用上述两个函数，创建了 组件工厂实例
		* 通过 ```createComponent``` 接口，取得组件的实例，插入到 ```viewContainerRef``` 的引用位置
	
		```
		let component = this.createDynamicComponent();
	    let componentFactory = this.adHocComponentFactoryCreator.getFactory(component);
	    let componentRef = this.viewContainerRef.createComponent(componentFactory);
	    
		```
	
* 这种方式的动态插入组件，写了很多代码，感觉在写Angular2的框架，而不是使用其框架了，毕竟官方的文档也没提到这些写法。
* 下文描述的方法，都是在AOT下可用的动态插入组件了。

##2.使用\*ngIf 或者 \*ngSwitch
* [例子的链接(plunker)](http://plnkr.co/edit/WDAe0pq6kH9o9q2tcgGp?p=preview)
* 这种方案是最容易理解的，动态插入组件，不就是根据条件判断，在指定位置插入预定义的组件嘛。
* 但这种方案有个缺陷，即父组件(可能是页面，或者组件)需要列出每个可能动态插入的组件，不利于扩展和组件化。

	```
	<div *ngIf="toggle">
	  <my-first-inserted-component></my-first-inserted-component>
	</div>
	<div *ngIf="!toggle">
	  <my-second-inserted-component></my-second-inserted-component>
	</div>
	
	```
	
##3.在ViewContainerRef 中插入组件
* [例子的链接(plunker)](http://plnkr.co/edit/7u79EAWmWICPi8gWy0lH?p=preview)
* ```ViewContainerRef``` 是Angular的核心模块，注入后 对应的 宿主 Element。
* 这个例子中：
	* ```SwitcherComponent``` 不需要知道要插入哪个组件，而由特定应用场景决定。 
	* ```AppComponent``` 通过参数将要动态插入的组件传给 ```SwitchComponent```。

	```
	<my-switcher-component [insertedComponent]="insertedComponent"></my-switcher-component>

	```
	
	* 这样的话，动态插入的逻辑，被封装到组件中，核心逻辑在函数：```SwitcherComponent.renderComponent()```
	
	```
	renderComponent() {
	  let componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.insertedComponent);
	  this.viewContainerRef.clear();
	  let componentRef = this.viewContainerRef.createComponent(componentFactory);
	  componentRef.changeDetectorRef.detectChanges();
	}
	
	```
* 这个方案的缺点是：组件只能被插入到父组件 ```SwitchComponent``` 的template的根部。
* 备注： 例子3，4，5中，动态插入的组件 ```FirstInsertedComponent``` 和 ```SecondInsertedComponent``` 都需要在 ```AppModule```的 ```entryComponents``` 中申明。

##4.在view template 中插入组件
* [例子的链接(plunker)](http://plnkr.co/edit/Umx4RYoGB5nGlx9jFTNx?p=preview)
* ```view template``` 即组件的 template 元数据属性。
* 这个例子中：
	* 可以将组件插入到父组件的任何位置。
	* 只需要在父组件```SwitcherComponent```的 template 中，定义插入的位置  ```#insertionPoint```。

	```
	<div><ul>
		<li><span #insertionPoint></span></li>
	</ul></div>
	
	```

	* 再用下述语法通过 ```ViewContainerRef ``` 将插入位置 ```#insertionPoint ``` 加载到变量 ```insertionPoint``` 上。

	```
	@ViewChild('insertionPoint', { read: ViewContainerRef }) public insertionPoint: ViewContainerRef;
	
	```
	
	* 然后使用 ```this.insertionPoint.createComponent``` 创建动态组件。

	```
	let componentRef = this.insertionPoint.createComponent(componentFactory);
	
	```

##5.在 content 中插入组件
* [例子的链接(plunker)](http://plnkr.co/edit/20tVkZfMiqymXiy7HOX7?p=preview)
* ```content``` 即组件的 ```ng-content``` ， 类似angular1中的directive 的 ```ng-transclude```.
* 这里例子中：

	* 动态组件的不是在父组件的申明中插入的，而是在父组件的应用实例的 ```ng-content``` 中插入。
	* 首先，父组件 ```SwitchComponent``` 的template中使用 ```ng-content```。

	```
	@Component({
	  selector: 'my-switcher-component',
	  template: `<b>Inserted Component:</b>
	  <div><ul><li><ng-content></ng-content></li></ul></div>`
	})
	
	```
	* 然后，在应用父组件 ```<my-switcher-component>``` 时，在其内容中 写组件插入位置的引用 ```#insertionPoint```。

	```
	<my-switcher-component [insertedComponent]="insertedComponent">
	  Content: <i><span #insertionPoint></span></i> (Cool, huh?)
	</my-switcher-component>

	```
	
	* 最后，在父组件中使用 ```@ContentChild``` (而不是```@ViewChild```) 来获取动态插入的位置。

	```
	@ContentChild('insertionPoint', { read: ViewContainerRef }) public insertionPoint: ViewContainerRef;
	
	```
	
	* 获得插入位置引用后，就可以在位置上创建动态组件了。

##承上启下
* 3，4，5三个例子都是使用高大上的 ```ComponentFactorResolver``` 接口，来在指定位置创建插入的组件的。
* 而我们本意是希望在 组件的 ```template``` 之外，扩展其html的支持。即在组件之外，写该组件相关的html。
* 所以，看看下面的template方法

##6.使用templates！

* [例子的链接(plunker)](http://plnkr.co/edit/sxrnnAYjPMXi7h7Ur2ve?p=preview)
* Angular2 的 ```Templates``` 超级好用，我花了6个月的时间，才领悟到其内涵。
* 使用 ```templates``` 的能力，可以在组件内运行写在组件外部的html。 而本文描述的，动态插入组件，说的不就是这个能力么。
* 这个例子中：
	
	* 在AppComponent 的template定义中: ```<my-switcher-component>``` 标签中包含了 ```<template>``` 标签。

	```
	<my-switcher-component>
	  <template #itemTemplate let-item>
	    <b>{{ item.label }}:</b> {{item.value}}<br/>
	    <div *ngIf="outsideValue === 'on'">
	      <my-first-inserted-component></my-first-inserted-component>
	    </div>
	    <div *ngIf="outsideValue !== 'on'">
	      <my-second-inserted-component></my-second-inserted-component>
	    </div>
	    {{ outsideValue }}
	  </template>
	</my-switcher-component>
	
	```
	
	* ```SwitchComponent``` 组件 可以通过 ```@ContentChild``` 来获取 ```#itemTemplate``` 指定的宿主元素。
	* ```let-item``` 可以和 组件内的 变量 ```$implicit``` 数据绑定，给 ```item``` 赋值。
	* 这样的话，通过 ```<template>``` 内部的html，即可以使用 ```AppComponent``` 下的数据，也可以通过 ```item``` 变量，来使用 ```SwitchComponent``` 组件中的数据。
	* 再看 ```SwitchComponent``` 的主要实现。 通过 ```@ContentChild``` 和关键词 ```itemTemplate```， 实现组件内和组件外的 ```<template>``` 的相互绑定

	```
	<template [ngTemplateOutlet]="itemTemplate"
  [ngOutletContext]="{ $implicit: item }"></template>
  
	```
	
	* 其中
		* ```ngTemplateOutlet``` 属性，告知外部html(```TemplateRef```)要插入的位置。
		* ```ngOutletContext``` 属性，用于传递给外部html(```TemplateRef```)的数据。

* 是不是

	* 很简单
	* 很强大
	* 关键是，AOT下也能运行。

##总结
* 我(作者)在JAMS工作，主要做MVP系统(IT自动化和优化解决方案)，在用Angular2在写web客户端。 觉得Angular2棒棒哒。
* 本文虽然提供了六种方法实现动态插入组件，相信还有很多其他方法。
* 同时，如果你的需求要求必须在运行时编译(JIT)，可以回复我，讨论讨论。

##作者补充
* 只能在运行时编译(JIT)中，才能 动态的改变 ```component``` 的 ```metadata```。AOT下是无法改 ```metadata``` 的。
* Mikulas Hayek 提到了新一种方法，将DOM 元素插入到组件中，[看看他是怎么说的](https://medium.com/@necroskillz/hi-f8f81a2a10d3)。
	
##译者补充
* 本文作者主要提供AOT下，动态插入组件的五种方法，和JIT下的一种方法。
* 作者说 ```动态插入组件```， 而不是 ```动态编译```。
* 但是，往往很多项目需要用到动态编译html，类似angular1中的 compile能力。
* 翻译作者的项目就是遇到这个问题，才找到这个文章的
	* 关键是，还找到其他文章，提到：[AOT和JIT同时运行](http://blog.assaf.co/angular-2-harmony-aot-compilation-with-lazy-jit-2/)。
	* 还准备翻译这篇文章。
	* 并分享自己的体会与实践。
	
