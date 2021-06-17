const sectionTopEl = document.querySelector('.top');
console.log(sectionTopEl);
// console.dir(sectionTopEl);

const sliderNavEl = document.querySelector('.slider-navigation');
console.log(sliderNavEl);

sliderNavEl.addEventListener('click', onSliderNavClick);
// let currentClass = 'top-slide-one';
let currentClass = '';

const sliderClasses = ['top-slide-one', 'top-slide-two', 'top-slide-three'];

function getIndex(array) {
    return array.indexOf(sectionTopEl)


}

function changeClass() {
  sliderClasses.forEach((elem,index) => {
    sectionTopEl.classList.add(elem);
    // sectionTopEl.classList.remove(elem[index-1])
})
  // for (let i = 0; i < sliderClasses.length; i+=1) {
  //   if ( i + 1 > sliderClasses.length-1) {
  //     currentClass = sliderClasses[0];
  //     sectionTopEl.classList.add(currentClass);
  //     sectionTopEl.classList.remove(sliderClasses[sliderClasses.length - 1]);

  //   } else {
  //     currentClass = sliderClasses[i];
  //   sectionTopEl.classList.add(sliderClasses[i]);
  //   sectionTopEl.classList.remove(sliderClasses[i - 1]);

  //   }
  // }
  // let index = sliderClasses.indexOf()




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

window.addEventListener('DOMContentLoaded', onChangeSliderImgAuto)

function onChangeSliderImgAuto() {
  setInterval(() => {
    changeClass()
  }, 5000)
}
