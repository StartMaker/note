(function () {
    while(1){
        let timer = setTimeout(() => {
            console.log('timer1');
        },200);
    }
    let timer2 = setInterval(() => {
        console.log('timer2');
    },200);
}());