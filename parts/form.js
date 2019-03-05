"use strict";

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.promise");

function form() {
  var message = {
    loading: 'Загрузка...',
    success: 'Спасибо! Скоро мы с вами свяжемся!',
    failure: 'Что-то пошло не так...'
  };
  var form = document.querySelector('.main-form'),
      formBootom = document.getElementById('form'),
      input = form.getElementsByTagName('input'),
      statusMessage = document.createElement('div'); //создаем див для передачи пользователю сообщения статуса    

  statusMessage.classList.add('status');

  function sendForm(elem) {
    elem.addEventListener('submit', function (event) {
      //вещаем обработчик события именно на форму, а не на кнопку в форме, потому что нам нужно знать когда именно форма отправляется на сервер
      event.preventDefault(); //для того чтобы не обновлялась страница при нажатии на кнопку форму(обновление браузера)

      elem.appendChild(statusMessage);
      var formData = new FormData(elem); //с помощью объекта формдата получаем все что пользовтаель ответил  в форме

      function postData(data) {
        return new Promise(function (resolve, reject) {
          var request = new XMLHttpRequest();
          request.open('POST', 'server.php'); //request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded'); 
          //for json

          request.setRequestHeader('Content-type', 'application/json; charset=uft-8'); //end for json

          request.onreadystatechange = function () {
            //чтобы отлеживать статусы отправлений
            if (request.readyState < 4) {
              resolve();
            } else if (request.readyState === 4) {
              if (request.status == 200 && request.status < 300) {
                resolve();
              } else {
                reject();
              }
            }
          }; //for json


          var obj = {}; //создем новый объект в который помещаем данные

          data.forEach(function (value, key) {
            //с помощью метода forEach берем все данные из формдаты и помещаем в объект obj
            obj[key] = value;
          });
          var json = JSON.stringify(obj); //превращаем в json формат

          request.send(json); // отправляем на сервер
          //end for json
          //request.send(formData); //форм дата - это данные которые ввел пользователь 
        });
      }

      function clearInput() {
        for (var i = 0; i < input.length; i++) {
          input[i].value = '';
        }
      }

      postData(formData).then(function () {
        return statusMessage.innerHTML = message.loading;
      }).then(function () {
        return statusMessage.innerHTML = message.success;
      }).catch(function () {
        return statusMessage.innerHTML = message.failure;
      }).then(clearInput);
    });
  }

  sendForm(form);
  sendForm(formBootom);
}

module.exports = form;