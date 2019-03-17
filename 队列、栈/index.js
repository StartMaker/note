(function () {
    let arr = [];
    //进栈、入队列
    for(let i=0; i< 10; i++){
        arr.push(i);
    }
    //出栈
    let item = arr.shift();
    console.log(item);
    console.log(arr);
    //出队列
    let item2 = arr.pop();
    console.log(item2);
    console.log(arr);
    //排序：
    //1、逆序：
    arr.reverse();
    console.log(arr);
    //2、随机
    function myRandom() {
        let a = Math.random() >= 0.5? 1: -1;
        return a;
    }
    arr.sort(myRandom);
    console.log(arr);
}());

