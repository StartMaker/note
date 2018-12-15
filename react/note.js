//箭头函数
(function () {
    //一般函数
    var obj1 = {
        name: "ltp",
        func: function () {
            console.log(this); //func,this指向func
        }
    };
    //箭头函数
    var obj2 = {
        name: "ltp",
        func: () => {
            console.log(this); //obj2,this指向obj2
        }
    };
}());