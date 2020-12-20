const slideLeft = document.querySelector('.slide-left');
const slideRight = document.querySelector('.slide-right');
const item = document.querySelectorAll('.slide-left__item');
const arrLeft = document.querySelector('.slide-button__left');
const arrRight = document.querySelector('.slide-button__right');

let counter = 0;
slideLeft.style.top = `-${(item.length-1) * 100}vh`;

arrLeft.addEventListener('click',() => slider('down'));
arrRight.addEventListener('click',() => slider('up'));

function slider (status) {
    const container = document.querySelector('.container').clientHeight;

    if (status === 'up') {
        counter++;
        if (counter > item.length - 1) counter = 0;
    } else {
        counter--;
        if (counter < 0) counter = item.length - 1;
    }

    slideLeft.style.transform = `translateY(${counter * container}px)`;
    slideRight.style.transform = `translateY(-${counter * container}px)`;
}
