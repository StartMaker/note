(function () {
   function fn() {
       var number = 0;
       return function () {
           number ++ ;
           console.log(number);
       }
   }
   let ff = fn();
   ff();
   ff();
   ff();
   let dd = fn();
   dd();
   dd();
   dd();
}());