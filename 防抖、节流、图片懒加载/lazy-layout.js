let imgCollection = [];
(function () {
    for(let i=0;i< 20; i++){
        let img = document.createElement("img");
        img.src = '';
        img.setAttribute('data-src','http://ww4.sinaimg.cn/large/006y8mN6gw1fa5obmqrmvj305k05k3yh.jpg');
        img.setAttribute("load-height",i*200);
        console.log(i*200);
        img.setAttribute("class",'imgToBlock');
        imgCollection.push(img);
    }
    console.log(imgCollection);
}());

window.onload = function () {
    let displayImg = document.querySelector('#display-img');
    imgCollection.forEach(function (dom,index) {
        displayImg.appendChild(dom);
        console.log(dom.getAttribute('load-height'));
        if(dom.getAttribute('load-height') <= 1000){
            dom.src = dom.getAttribute("data-src");
        }
    });
    displayImg.addEventListener('scroll',function (event) {
        console.log(event.target.scrollTop);
        imgCollection.forEach(function (dom,index) {
            if(dom.getAttribute('load-height')< event.target.scrollTop + 600){
                dom.src = dom.getAttribute('data-src');
            }
        })
    });
};