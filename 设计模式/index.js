(function () {
    //继承的发展
    //1、借用原型链
    (function () {
        function Origin() {}
        Origin.prototype = {
            name: 'ltp'
        };
        function parent() {}
        parent.prototype = new Origin();
        function son() {}
        son.prototype = new parent();
    }());
    //2、最终版本=>继承prototype
    function inherit(target,origin) {
        function F() {}
        F.prototype = origin.prototype;
        target = new F();
        target.constructor = target;
    }
    //test:
    function parent() {
        this.name = 'ltp';
    }
    parent.prototype = {
        sex: '男'
    };
    function son() {

    }
    inherit(son,parent);
    console.log(son.sex);
    console.log(son.name);
}());
(function () {
    //链式添加
    function parent() {
        this.addName = function (name) {
            this.name = name;
            return this;
        };
        this.addAge = function (age) {
            this.age = age;
            return this;
        };
    }
    let child = new parent();
    child.addAge(11).addName('ltp');
}());
(function () {
    //安全模式
    function Book(title,author) {
        if(this instanceof Book){
            this.title = title;
            this.author = author;
        }
        else {
            return new Book(title,author);
        }
    }
    //叙述：
    let book1 = new Book('格兰童话','ltp');
    let book2 = Book('指环王','阿米尔');
    console.log(book1);
    console.log(book2);
}());
(function () {
    //构造函数继承
    function parent(id) {
        this.id = id;
    }
    parent.prototype = {
        name: 'ltp'
    };
    //继承父类
    function child(id) {
        parent.call(this,id);
    }
    //创造实例
    let child_example = new child(12);
    console.log(child.prototype.name);
    console.log(child_example.name);//undefined
    //构造函数的缺点：子类实例无法访问父类的原型属性
}());
(function () {
    //类式继承
    function parent(sex) {
        this.name = [];
        this.sex = sex;
    }
    parent.prototype = {
        age: 12
    };
    function child(){}
    //继承父类
    child.prototype = new parent();//为什么添加这一句：子类的原型就可以直接访问到父类
    //类式继承的缺陷：
    // 1、子类继承父类的属性为引用类型时，会影响其他子类实例的属性
    let child_example1 = new child();
    let child_example2 = new child();
    console.log(child_example1.name);//[]
    console.log(child_example2.name);//[]
    child_example1.name.push(1);
    console.log(child_example1.name);//[1]
    console.log(child_example2.name);//[1]
    //2、子类实例无法初始化父类中构造函数的方法和属性，违反了代码复用原则
}());
(function () {
    //组合继承
    function parent() {
        this.name = 'ltp';
    }
    parent.prototype = {
        sex: '男'
    };
    function child() {
        //继承
        parent.call(this);
    }
    child.prototype = new parent();
    let child_example = new child();
    console.log(child_example.name);
    console.log(child_example.sex);
    //组合继承的缺陷：使用构造函数继承时执行了一遍父类的构造函数，而在实现子类原型的类式继承中又调用了一遍父类的构造函数，因此父类的构造函数执行了两次
}());
(function () {
    //原型式继承=>对类式继承的封装
    let obj = {
        arr: []
    };
    function inheritObject(obj) {
        function F() {}
        F.prototype = obj;
        return new F();
    }
    let child = inheritObject(obj);
    let  child2 = inheritObject(obj);
    console.log(child);
    console.log(child.arr);
    console.log(child2.arr);
    child.arr.push(1);
    //子类实例互相影响，若父类构造函数为引用类型
    console.log(child2.arr);
    //原型式与类式继承的不同点在于可否初始化对象，类式继承无法初始化父类，而原型式能初始化父类
}());
(function () {
  //寄生式继承
    let obj = {
        name: 'ltp',
        sex: 'man'
    };
    function inheritObject(obj) {
        function F() {}
        F.prototype = obj;
        return new F();
    }
    function createObject(obj) {
        let o = new inheritObject(obj);
        //拓展新对象
        o.age = 44;
        return o;
    }
    let child = createObject(obj);
    console.log(child);
    function f() {

    }
    console.log(f.prototype);

}());
(function () {
    //new 继承
    function parent() {}
    parent.prototype = {
        sex: []
    };
    let child = new parent();
    let child2 = new parent();
    console.log(child);
    console.log(child.sex);
    child.sex.push(1);
    console.log(child2.sex);
}());
(function () {
    function inheritObject(obj) {
        function F() {}
        F.prototype = obj;
        return new F();
    }
    function inheritPrototype(child,parent) {
        let p = inheritObject(parent.prototype);
        //修正因重写子类原型导致子类的constructor属性被修改
        p.constructor = child;
        child.prototype = p;
    }
}());
(function () {
    //简单工厂模式==>创建实例
    function createFactory(name,sex,age) {
        let obj = new Object();
        obj.name = name;
        obj.sex = sex;
        obj.age = age;
        return obj;
    }
    let people = createFactory('ltp','男',11);
    console.log(people);
    //工厂方法模式 + 安全:创造很多不同的方法
    function createMethodFactory(type,content) {
        if(this instanceof createMethodFactory){
            return new this[type](content);
        }
        else {
            return new createMethodFactory(type,content);
        }
    }
    createMethodFactory.prototype = {
        book: function (content) {
            
        },
        history: function (content) {
            
        }
    };
    //工厂抽象模式：创造子类而非实例对象
    function createAbstractFactory(subType,superType) {
        if(typeof createAbstractFactory[superType] === 'function'){
            function F() {}
            F.prototype = createAbstractFactory[superType].prototype;
            subType.prototype = new F();
            subType.constructor = subType;
        }
        else {
            throw new Error('工厂无此方法');
        }
    }
}());
(function () {
   //单例模式:放公共的属性和工具
    let jq = (function () {

        return {
            get: function () {

            }
        }
    }());
}());
(function () {
    //发布订阅模式/观察者模式：多个模块同时注册一则消息，并且一次执行
    //发布订阅和观察者的区别在于，状态发生改变时，是手动执行还是自动执行
    let Observer = (function () {
        let messages = {};
        return {
            //注册
            register: function () {

            },
            //发布
            fire: function () {

            },
            //移除
            remove: function () {

            }
        }
    })

}());
(function () {
    //委托模式 ==> 事件委托
    //缺点：内存泄漏
}());
(function () {
    async function F() {
        return await 1;
    }
    F().then(function (a) {
        console.log(a);
    });
}());
