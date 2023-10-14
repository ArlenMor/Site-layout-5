"use strict";

console.log('global');
var bodySryles = window.getComputedStyle(document.body);
var gap = parseInt(bodySryles.getPropertyValue('--grid-gap'));
"use strict";

console.log('maxgraph');
"use strict";

// const circle = document.querySelector('.progress');

// const progressAnimation = () => {

//     let percentageProgress = Math.floor(50);

//     let radius = circle.getAttribute('r');
//     let circleLength = 2 * Math.PI * radius;
//     circle.setAttribute('stroke-dasharray', circleLength);
//     circle.setAttribute('stroke-dashoffset', circleLength - circleLength * percentageProgress / 100);
// }

// progressAnimation();

var circles = document.querySelectorAll('.facts-element__circle');
circles.forEach(function (el) {
  var percentageProgress;
  if (el.dataset.percentage == 'true') {
    var progress = el.querySelector('.progress');
    var valueBlock = el.querySelector('.facts-element__value');
    var radius = progress.getAttribute('r');
    var circleLength = 2 * Math.PI * radius;
    var full = el.dataset.full;
    var value = el.dataset.value;
    var _percentageProgress = Math.floor(value / full * 100);
    valueBlock.textContent = value;
    progress.setAttribute('stroke-dasharray', circleLength);
    progress.setAttribute('stroke-dashoffset', circleLength - circleLength * _percentageProgress / 100);
  } else {
    var _progress = el.querySelector('.progress');
    var _value = el.querySelector('.facts-element__value');
    var _radius = _progress.getAttribute('r');
    var _circleLength = 2 * Math.PI * _radius;
    var percent = el.dataset.percent;
    var _percentageProgress2 = Math.floor(percent);
    _value.textContent = percent + "%";
    _progress.setAttribute('stroke-dasharray', _circleLength);
    _progress.setAttribute('stroke-dashoffset', _circleLength - _circleLength * _percentageProgress2 / 100);
  }
});
"use strict";

var portSlider = document.querySelector('.portfolio-section__items');
var portfolioSlider = new Swiper(portSlider, {
  slidesPerView: 3,
  spaceBetween: gap,
  on: {
    init: function init() {
      var activeSlide = portSlider.querySelector('.swiper-slide-active');
      var nextActiveSlide = activeSlide.nextElementSibling;
      var nextNextActiveSlide = nextActiveSlide.nextElementSibling;
      activeSlide.classList.add('slider-visible');
      nextActiveSlide.classList.add('slider-visible');
      nextNextActiveSlide.classList.add('slider-visible');
    }
  },
  // Navigation arrows
  navigation: {
    nextEl: '.portfolio-section__next',
    prevEl: '.portfolio-section__prev'
  }
});
document.querySelector('.portfolio-section__prev').addEventListener('click', function () {
  var activeSlide = portSlider.querySelector('.swiper-slide-next');
  document.querySelectorAll('.portfolio-section__items .swiper-slide').forEach(function (el) {
    el.classList.remove('slider-visible');
  });
  if (activeSlide.previousElementSibling) {
    var nextActiveSlide = activeSlide.previousElementSibling;
    activeSlide.classList.add('slider-visible');
    nextActiveSlide.classList.add('slider-visible');
    activeSlide.nextElementSibling.classList.add('slider-visible');
  }
});
document.querySelector('.portfolio-section__next').addEventListener('click', function () {
  var activeSlide = portSlider.querySelector('.swiper-slide-active');
  var nextActiveSlide = activeSlide.nextElementSibling;
  var nextNextActiveSlide = nextActiveSlide.nextElementSibling;
  document.querySelectorAll('.portfolio-section__items .swiper-slide').forEach(function (el) {
    el.classList.remove('slider-visible');
  });
  activeSlide.classList.add('slider-visible');
  nextActiveSlide.classList.add('slider-visible');
  nextNextActiveSlide.classList.add('slider-visible');
});
var testimonialsSlider = new Swiper('.testimonials__items', {
  slidesPerView: 1,
  spaceBetween: gap,
  loop: true,
  // Navigation arrows
  navigation: {
    nextEl: '.testimonials__next',
    prevEl: '.testimonials__prev'
  }
});
/**
  * название функции
  *
  * @param {number} first - первое число
  * @returns {number}
  */
"use strict";
//# sourceMappingURL=main.js.map
