(function () {
    function add(a,b,c,d) {
        return a+b+c+d;
    }
    function curry(fn) {
        let args = [].slice.call(arguments,1);
        let context = arguments;
        if(args.length < fn.length){
            return function () {
                let a = [].slice.call(context,0);
                let b = [].slice.call(arguments,0);
                let c = a.concat(b);
                return curry.apply(this,c);
            }
        }
        else {
            return fn.apply(this,args);
        }
    }
    let aa = curry(add);
    let bb = aa(1);
    let cc = bb(2,8);
    let dd = cc(8);
    console.log(dd);
}());