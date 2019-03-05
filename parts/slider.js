"use strict";

require("core-js/modules/web.dom.iterable");

function slider() {
  var slideIndex = 1,
      //переменная для переключения слайдов
  slides = document.querySelectorAll('.slider-item'),
      prev = document.querySelector('.prev'),
      next = document.querySelector('.next'),
      dotsWrap = document.querySelector('.slider-dots'),
      dots = document.querySelectorAll('.dot');
  showSlides(slideIndex);

  function showSlides(n) {
    if (n > slides.length) {
      //если номер слайда больше чем количесво слайдов
      slideIndex = 1; //если слайды закончились, то мы возвращаемся к самому первому
    }

    if (n < 1) {
      //если листаем слайд назад, то возвращамся к последнему
      slideIndex = slides.length;
    }

    slides.forEach(function (item) {
      return item.style.display = 'none';
    }); //показываем слайд который нам нужен

    /*for (let i = 0; i < slides.length; i++){
        slides[i].style.display = 'none';
    }*/
    //тоже самое что строка выше

    dots.forEach(function (item) {
      return item.classList.remove('dot-active');
    }); //у всех точек убираем класс activ

    slides[slideIndex - 1].style.display = 'block';
    dots[slideIndex - 1].classList.add('dot-active');
  }

  function plusSlides(n) {
    showSlides(slideIndex += n);
  }

  function currentSlide(n) {
    showSlides(slideIndex = n);
  }

  prev.addEventListener('click', function () {
    plusSlides(-1);
  });
  next.addEventListener('click', function () {
    plusSlides(1);
  });
  dotsWrap.addEventListener('click', function (event) {
    for (var i = 0; i < dots.length + 1; i++) {
      if (event.target.classList.contains('dot') && event.target == dots[i - 1]) {
        currentSlide(i);
      }
    }
  });
}

module.exports = slider;