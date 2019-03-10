(function () {
    async function sleep(timeout) {
        return await new Promise((resolve) => {
            let timer = setTimeout(() => {
                resolve('sleep is finished');
            },timeout);
        });
    }
    sleep(5000)
        .then((msg) => {
            console.log(msg);
        });
}());