//防抖函数
function _anti_shake(fn, wait, immediate) {
    let timer;
    let context;
    let arg;
    const later = ()=> setTimeout(() => {
        timer = null;
        if(!immediate){
            fn.apply(context,arg);
            context = arg = null;
        }
    },wait);

    return function (...parmas) {
        if(!timer){
            timer = later();
            if(immediate){
                fn.apply(this,parmas);
            }
            else {
                context = this;
                arg = parmas;
            }
        }
        else {
            clearTimeout(timer);
            timer = later();
        }
    }
}