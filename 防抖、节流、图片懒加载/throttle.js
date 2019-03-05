//时间节流器
function throttle(fn,wait) {
    let last_time = 0;
    return function () {
        let now = new Date().getTime();
        let context = this;
        let args;
        args = arguments;
        if(now - last_time >= wait){
            fn.apply(context,args);
            last_time = now;
        }
    }
}
//计时器节流器
//延时性节流器
function throttle2(fn,wait) {
    let timer;
    return function () {
        let context = this;
        let args;
        args = arguments;
        if(!timer){
            timer = setTimeout(()=>{
                fn.apply(context,args);
                timer = null;
            },wait);
        }
    }
}