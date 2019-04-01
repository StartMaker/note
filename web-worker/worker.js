onmessage = function (e) {
    console.log(e);
    postMessage(e.data * 10);
};