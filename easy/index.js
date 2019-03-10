(function () {
    let a = 111;
    console.log(a.toString(3));
}());
(function () {
    function * f() {
        yield () =>{return 11;};
        yield 1;
        console.log('generator');
    }
    let F = f();
    F.next();
    F.next();
    F.next();
}());
(function () {
    async function f() {
        await Promise.resolve(1);
        console.log('async');
    }
    f();
}());