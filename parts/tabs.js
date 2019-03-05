"use strict";

function tabs() {
  var tab = document.querySelectorAll('.info-header-tab'),
      // выводим псевдоммассив наших табов(иконок меню)
  info = document.querySelector('.info-header'),
      //получаем родительский эл наших табов, (див в котором они находятся)
  tabContant = document.querySelectorAll('.info-tabcontent'); //псевдомассив табличек для вывода

  function hideTabContent(a) {
    //функция скрытия табов(передается номер блока)
    for (var i = a; i < tabContant.length; i++) {
      //цикл для 
      tabContant[i].classList.remove('show'); //удаление класса show

      tabContant[i].classList.add('hide'); //добавление класса add 
    }
  }

  hideTabContent(1); // при загрузки страницы чтобы всегда отображался на 0 блок про лечение, чтобы цикл скрытие начинался с 1

  function showTabContant(b) {
    //функция отражение таб блоков 
    if (tabContant[b].classList.contains('hide')) {
      //проверяем дейстительно ли эл hide скрыт
      tabContant[b].classList.remove('hide'); //удаление класса hide

      tabContant[b].classList.add('show'); //добавление класса show
    }
  }

  info.addEventListener('click', function (event) {
    //для родителя, обработчик событий при клики, включается функция, в котрую передается событие 
    var target = event.target; //переменная таргет = это исходный элемент, на котором произошло событие, в процессе всплытия он неизменен

    if (target && target.classList.contains('info-header-tab')) {
      //если элемент и у нашего эл класс ....
      for (var i = 0; i < tab.length; i++) {
        // i сравнивается с количеством переключателями табов(типа меню)
        if (target == tab[i]) {
          //если наша цель при нажатии равно табу с номером i
          hideTabContent(0); //скрывается все элементы 

          showTabContant(i); //показывается только таб с нужным номером

          break;
        }
      }
    }
  });
}

module.exports = tabs;