let elCarousel = document.getElementsByClassName('carousel__item');
let elNext = document.getElementById('id-next');
let next = 1;
let px = 500;

console.log(elCarousel.item[0]);

elNext.addEventListener('click', ()=> {
  if(next >= elCarousel.length) {
    next = 0;
    px = +500;
  }
  elCarousel[next].style.transform = `translateY(-${px}px)`;
  ++next;
  px += 500;
});