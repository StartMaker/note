(function () {
   function axios(method,url,data) {
       return new Promise(function (resolve, reject) {
           let XHR = new XMLHttpRequest();
           XHR.open(method,url,true);
           XHR.send(data);
           XHR.onload = function (response) {
                resolve(response);
           };
           XHR.onerror = function (error) {
               reject(error);
           }
       });
   }
   axios('post','http://baidu.com',{})
       .then(function (data) {
            console.log(data);
        })
       .catch(function (reason) {
           console.log(reason);
       })
}());