const prevBtn = document.querySelector('.btns__prev')
const nextBtn = document.querySelector('.btns__next')
const gallery = document.querySelector('.slider__gallery')
const slide_1 = document.querySelector('.slider__item-red'),
      slide_2 = document.querySelector('.slider__item-green'),
      slide_3 = document.querySelector('.slider__item-blue'),
      slide_4 = document.querySelector('.slider__item-yellow'),
      slide_5 = document.querySelector('.slider__item-magenta')
const slides = [ slide_1, slide_2, slide_3, slide_4, slide_5 ]

let current,
    shift

window.onload = () => {
  current = 0
  shift = 0
}

prevBtn.addEventListener('click', () => {
  
  if (current > 0) {
    current--
    shift += 300
    gallery.style.transform = `translateX(` + shift + `px)`
    gallery.style.transition = 'transform 1s'
  }
})

nextBtn.addEventListener('click', () => {
  
  if (current < slides.length - 1) {
    current++
    shift -= 300
    gallery.style.transform = `translateX(` + shift + `px)`
    gallery.style.transition = 'transform 1s'
  }
})


