// (function () {
//     //promise
//     function timer1() {
//         let timer = setTimeout(() => {
//             console.log('timer1 success');
//             clearTimeout(timer);
//         },1000);
//     }
//     function timer2() {
//         let timer = setTimeout(() => {
//             console.log('timer2 success');
//             clearTimeout(timer);
//         },1000);
//     }
//     function promiseDemo() {
//         return new Promise(function (resolve) {
//             console.log('start');
//             resolve(0);
//         });
//     }
//     promiseDemo()
//         .then(function (res) {
//             console.log(res);
//             timer1();
//             return 1;
//         })
//         .then(function (res) {
//             console.log(res);
//             timer2();
//             return 2;
//         })
//         .then(function (res) {
//             console.log(res);
//             console.log('end');
//         })
//         .catch(function (error) {
//             console.log(error);
//         });
// }());
// (function () {
//     function timer() {
//         return new Promise(function (resolve) {
//             let timer = setTimeout(() => {
//                 console.log('timer success');
//                 resolve(0);
//             },1000);
//         })
//     }
//     timer()
//         .then(function (res) {
//             console.log(res);
//             console.log('end');
//         });
// }());
// (function () {
//     function timer1() {
//         return new Promise(function (resolve) {
//             let timer = setTimeout(() => {
//                 console.log('timer1 is succeed');
//                 resolve('timer1');
//                 clearTimeout(timer);
//             },1000);
//         });
//     }
//     function timer2() {
//         return new Promise(function (resolve) {
//             let timer = setTimeout(() => {
//                 console.log('timer2 is succeed');
//                 resolve('timer2');
//                 clearTimeout(timer);
//             },1000);
//         });
//     }
//     function promiseDemo() {
//         return Promise.all([timer1(),timer2()]);
//     }
//     promiseDemo()
//         .then(function (res) {
//             console.log(res);
//         });
    // function promiseDemo2() {
    //     return Promise.race([timer1(),timer2()]);
    // }
    // promiseDemo2()
    //     .then(function (res) {
    //         console.log(res);
    //     })
// }());
(function () {
   //async函数
    async function Fn() {
        let a = await Promise.resolve(1);
        console.log(a);
    }
    Fn();
    //async:
    function timer(text){
        return new Promise(function (resolve) {
            let timer = setTimeout(() => {
                console.log(text);
                if(text+1 === 13){
                    throw new Error('error');
                }
                resolve(text+1);
            },1000);
        })
    }
    async function Main() {
        let a = await timer(11);
        let b = await timer(a);
        let c = await timer(b);
        let d = await timer(c);
        return d;
    }
    Main()
        .then(function (res) {
            console.log(res);
        })
        .catch(function (reson) {
            console.log(reson);
        });
}());