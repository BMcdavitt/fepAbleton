const slideIn = new IntersectionObserver((entries) => {
  //
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('slideRight')
    } else {
      entry.target.classList.remove('slideRight')
    }
  })
})

const fadeIn = new IntersectionObserver((entries) => {
  //
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fadeIn')
    } else {
      entry.target.classList.remove('fadeIn')
    }
  })
})

const rollIn = new IntersectionObserver((entries) => {
  //
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('spinSide')
    } else {
      entry.target.classList.remove('spinSide')
    }
  })
})

fadeIn.observe(document.querySelector('.collageImage1'))
fadeIn.observe(document.querySelector('.collageImage2'))
fadeIn.observe(document.querySelector('.collageImage3'))
fadeIn.observe(document.querySelector('.collageImage4'))
fadeIn.observe(document.querySelector('.collageImage5'))
fadeIn.observe(document.querySelector('.collageImage6'))
fadeIn.observe(document.querySelector('.collageImage7'))
