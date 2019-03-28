(function () {
    let test = function () {
        let t = new Date().getTime();
        test = function () {
            return t;
        };
        return test();
    };
    console.log(test());
    console.log(test());
    console.log(test());
    console.log(test());
    console.log(test());
    console.log(test());
}());