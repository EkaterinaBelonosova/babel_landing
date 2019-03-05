"use strict";

function calc() {
  var persons = document.querySelectorAll('.counter-block-input')[0],
      restDays = document.querySelectorAll('.counter-block-input')[1],
      place = document.getElementById('select'),
      totalValue = document.getElementById('total'),
      personsSum = 0,
      daysSum = 0,
      total = 0;
  totalValue.innerHTML = 0;
  persons.addEventListener('change', function () {
    if (persons.value == '') {
      totalValue.innerHTML = 0;
    } else {
      personsSum = +this.value;
      total = (daysSum + personsSum) * 4000;

      if (restDays.value == '') {
        totalValue.innerHTML = 0;
      } else {
        totalValue.innerHTML = total;
      }
    }
  });
  restDays.addEventListener('change', function () {
    if (restDays.value == '') {
      totalValue.innerHTML = 0;
    } else {
      daysSum = +this.value;
      total = (daysSum + personsSum) * 4000;

      if (persons.value == '') {
        totalValue.innerHTML = 0;
      } else {
        totalValue.innerHTML = total;
      }
    }
  });
  place.addEventListener('change', function () {
    if (restDays.value == '' || persons.value == '') {
      totalValue.innerHTML = 0;
    } else {
      var a = total; //если будут часто выбирать фильтры, и не создавать эту переменную, тогда тотал бы увеличивался постоянно

      totalValue.innerHTML = a * this.options[this.selectedIndex].value; //ччтобы подтягивалось именно текущее значение из value
    }
  });
}

module.exports = calc;