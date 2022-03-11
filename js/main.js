let elCarousel = document.getElementById('id-box');
let elNext = document.getElementById('id-next');
let elBack = document.getElementById('id-back');

let img = document.querySelectorAll('#id-box img');

let idx = 0;

function changeImg() {
    if (idx > img.length - 1) {
        idx = 0
    } else if (idx < 0) {
        idx = img.length - 1
    }
    elCarousel.style.transform = `translateX(${-idx * 500}px)`
}

elNext.addEventListener('click', function change() {
    idx++;
    changeImg()
})
elBack.addEventListener('click', function change() {
    idx--;
    changeImg()
})