(function () {
    let observer = (function () {
        let messages = {};
        return {
            register: function (type,fn) {
                if(typeof messages[type] === 'undefined'){
                    messages[type] = [fn];
                }
                else{
                    messages[type].push(fn);
                }
            },
            fire: function (type,args) {
                if(!messages[type]){
                    return;
                }

            },
            removeMessage: function () {
                
            }
        }
    }())
}());