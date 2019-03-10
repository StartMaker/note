(function () {
   function sleep(sleepTime) {
       return new Promise((resolve,reject) => {
           let timer = setTimeout(() => {
               resolve('finish sleep!');
           },sleepTime);
       })
   }
   sleep(5000)
       .then((msg) => {
           console.log(msg);
       });
}());