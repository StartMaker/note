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

    let map =new Map();
    map.set('1','1');
    map.set('2','1');
    map.set('3','1');
    map.set('4','1');
    var o = [...map.values()];
    console.log(o);
}());