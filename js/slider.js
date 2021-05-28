const sectionTopEl = document.querySelector('.top');
console.log(sectionTopEl);
// console.dir(sectionTopEl);

const sliderNavEl = document.querySelector('.slider-navigation');
console.log(sliderNavEl);

sliderNavEl.addEventListener('click', onSliderNavClick);
let currentClass = 'top-slide-one';

const sliderClasses = ['top-slide-one', 'top-slide-two', 'top-slide-three'];

function getIndex(array) {
    return array.indexOf(sectionTopEl)


}

function changeClass() {

}

function onSliderNavClick() {
    let index = getIndex(sliderClasses);
    if ((index + 1) > (sliderClasses.length - 1)) {
      currentClass = sliderClasses[0];
    } else {
      currentClass = sliderClasses[index + 1];
    }

//     sliderClasses.forEach((elem, index) => {
// console.log(elem);
//         if(sectionTopEl.classList.contains(`${elem}`)){
//             sectionTopEl.classList.remove(`${elem}`);
//             let a = sliderClasses[index + 1];
//             console.log(a);
//             sectionTopEl.classList.add(`${a}`)

//             // console.log(sectionTopEl.classList.add(`${sliderClasses[index+1]}`));
//             // console.log(sectionTopEl.classList.add(`${sliderClasses[index]}`));
//             console.log(index+1);
//         }
// });

}
