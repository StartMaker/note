(function () {
    function * sleep(sleepTime) {
        yield new Promise((resolve) => {
            let timeout = setTimeout(() => {
                resolve('sleep is finished');
            },sleepTime);
        });
    }
    let _sleep = sleep(5000);
    _sleep.next().value
        .then((msg) => {
            console.log(msg);
        });
}());