"use strict";

function timer() {
  var deadline = '2019-02-19';

  function getTimeRemaining(endtime) {
    //узнаем промежуток времени м/у дедлайн и текущей датой
    var t = Date.parse(endtime) - Date.parse(new Date()),
        //получение миллисекунд от конечной даты и текущей
    seconds = Math.floor(t / 1000 % 60),
        // перевод из миллисекунд в секунды
    minutes = Math.floor(t / 1000 / 60 % 60),
        hours = Math.floor(t / (1000 * 60 * 60));
    return {
      'total': t,
      'hours': hours,
      'minutes': minutes,
      'seconds': seconds
    };
  }

  function setClock(id, endtime) {
    // функция создает различные переменные(берет со страницы)
    var timer = document.getElementById(id),
        hours = timer.querySelector('.hours'),
        minutes = timer.querySelector('.minutes'),
        seconds = timer.querySelector('.seconds'),
        timeInterval = setInterval(updateClock, 1000);

    function updateClock() {
      //получает разницу во времени и записываем данные
      var t = getTimeRemaining(endtime);

      if (t.hours < 10) {
        hours.textContent = '0' + t.hours;
      } else {
        hours.textContent = t.hours;
      }

      if (t.minute < 10) {
        minutes.textContent = '0' + t.minutes;
      } else {
        minutes.textContent = t.minutes;
      }

      if (t.seconds < 10) {
        seconds.textContent = '0' + t.seconds;
      } else {
        seconds.textContent = t.seconds;
      }

      if (t.total <= 0) {
        clearInterval(timeInterval);
        hours.textContent = '00';
        minutes.textContent = '00';
        seconds.textContent = '00';
      }
    }
  }

  setClock('timer', deadline);
}

module.exports = timer;