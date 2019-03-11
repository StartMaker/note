(function () {
    // let set = new Set();
    // set.add({});
    // set.add(["you"]);
    // set.add(["he"]);
    // console.log(set);
    // for(let i of set.entries()){
    //     console.log(i);
    // }
    // for(let i of set.keys()){
    //     console.log(i);
    // }
    // set.forEach(function (item) {
    //     console.log(item);
    // });
    let a= {};
    a.a = a;
    let b = [1];
    let set = new WeakMap();
    set.set(b,'b');
    console.log(set);
}());