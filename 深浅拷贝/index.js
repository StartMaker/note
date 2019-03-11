(function () {
    //深度克隆(解决环的问题)：
    function deepClone(obj) {
        let objClone = {};
        let set = new WeakMap();
        for(let key in obj){
            if(Object.prototype.toString.call(obj[key])==='object Object'){
                if(!set.has(obj[key])){
                    objClone[key] = deepClone(obj[key]);
                    set.set(obj[key],objClone[key]);
                }
                else {
                    objClone[key] = set.get(obj[key]);
                }
            }
            else {
                objClone[key] = obj[key];
            }
        }
        return objClone;
    }
    let a = {};
    a.a = a;
    let cc = deepClone(a);
    console.log(cc);
}());