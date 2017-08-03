# 面向对象编程（Object-Oriented Programming）

## 面向过程编程

> 通过编写多个函数来解决问题，会产生多个全局变量，不利于别人重复使用， 一旦别人使用你提供的方法，你就不能轻易的去修改这些方法，这不利于团队代码维护。


## 面向对象编程

> 将你的需求抽象成一个对象，然后针对这个对象分析其特征（属性）与动作（方法）。这个对象我们称为类，面向对象编程的一个特点是封装，就是把需要的功能放在一个对象里。

## 封装一个类

[demo1](https://jsfiddle.net/m4LwdeLo/2/)

这样将我们将要用到的属性和方法都封装到抽象的Book类里面了,当使用功能方法时,不能直接使用Book类，需要使用new关键字来实例化新的对象。

> 通过this添加的属性和方法同在prototype中添加的属性和方法有什么区别?

“通过thist添加的属性和方法是在当前对象上添加的,然而JavaScript是一种基于原型prototype的语言,所以每创建一个对象时（当然在JavaScript中函数也是一种对象）,它都有一个原型prototype用于指向其继承的属性、方法。这样通过prototype继承的方法并不是对象自身的，所以在使用这些方法时，需要通过prototype一级一级的查找来得到。这样你会发现通过this定义的属性和方法是对象拥有的，所以每次通过类创建一个对象时，this指向的属性和方法都会得到创建，通过prototypej继承的属性和方法是每个对象通过prototype访问到,所以我们每次通过类创建一个新对象时这些属性和方法不会再次创建。”

constructor是一个属性，当创建一个函数时都会为其创建一个原型对象prototype，在prototype对象中又会像函数中创建this一样创建一个constructor属性,那么constructor属性指向的就是拥有整个原型对象的函数或者对象

在这个例子中 Book prototype中的constructors属性指向的就是Book类对象。

## 属性与方法封装

JavaScript是函数级作用域，声明在函数内部的变量和方法在外界是访问不到的,通过特性可以可以创建类的私有变量和私有方法。

[demo2](https://jsfiddle.net/Ln9jq88v/)

“通过new关键字创建对象实质上是对新对象this的不断赋值，并将prototype指向类的prototype所指向的对象，而类的构造函数外面通过点语法定义的属性方法是不会添加到新创建的对象上去的。因此要想在新创建的对象中使用isChinese就得通过Book类使用而不能通过this，如Book.isChinese，而类的原型prototype上定义的属性在新对象上可以直接使用，这是因为新对象的prototype和类的prototype指向的是同一个对象。”

## 通过闭包实现来实现类的静态变量

> 闭包：有权访问另外一个函数作用域中变量的函数，即在一个函数内部创建另外一个函数。

[demo3](https://jsfiddle.net/Ln9jq88v/1/)

我们将这个闭包作为创建对象的构造函数，这样它既是闭包又是可以实例对象的函数，即可以访问到类函数作用域中的变量，如bookNum这个变量，此时这个变量叫静态私有变量,并且checkBook可称为静态私有方法。当然闭包内部也有私有的变量及方法，如price、checkID().但是外部添加属性和方法看上去像是脱离了闭包这个类，所以有时候要在闭包中实现一个完整的类，然后将其返回。

[demo4](https://jsfiddle.net/Ln9jq88v/2/)

## 创建对象的安全模式

> 如果忘记了使用new关键字就会报undefined错误。

[问题demo](https://fiddle.jshell.net/zg0658kp/2/)

[解决](https://fiddle.jshell.net/zg0658kp/3/)

## 继承

### 子类的原型对象--类式继承


