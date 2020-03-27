/*
document.addEventListener("DOMContentLoaded", function(event) {
  const modal = document.querySelector('.modal');
  const modalBtn = document.querySelectorAll('[data-toggle=modal]');
  const closeBtn = document.querySelector('.modal__close');
  const switchModal = () => {
    modal.classList.toggle('modal--visible');
  } 
  modalBtn.forEach(element => {
    element.addEventListener('click', switchModal);
    
  });

    closeBtn.addEventListener('click', switchModal);

});
*/

$(document).ready(function () {
  var modal = $('.modal'),
      modalBtn = $('[data-toggle=modal]'),
      closeBtn = $('.modal__close');

  modalBtn.on('click', function () {
    modal.toggleClass('modal--visible');
  });

  closeBtn.on('click', function () {
    modal.toggleClass('modal--visible');
  });
});

$("#navigation, #hero").on("click","a", function (event) {
  event.preventDefault();
  var id  = $(this).attr('href'),
      top = $(id).offset().top;
  $('body,html').animate({scrollTop: top}, 1500);
});

$(document).ready(function(){
 
  $(window).scroll(function(){
  if ($(this).scrollTop() > 100) {
  $('.scrollup').fadeIn();
  } else {
  $('.scrollup').fadeOut();
  }
  });
   
  $('.scrollup').click(function(){
  $("html, body").animate({ scrollTop: 0 }, 600);
  return false;
  });

  

  var mySwiper = new Swiper ('.swiper-container', {
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
    },

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

  })

  var next = $('.swiper-button-next');
  var prev = $('.swiper-button-prev');
  var bullets = $('.swiper-pagination');

  next.css('left', prev.width() + 10 + bullets.width() + 30)
  bullets.css('left', prev.width() + 20);

  new WOW().init();

  // Валидация формы
  $('.modal__form').validate({
    rules: {
      // Строчное правило
      userName: {
        required: true,
        rangelength: [2, 15]
      },
      userPhone: {
        required: true,
        minlength: 17
      },
      // Правило-объект (блок)
      userEmail: {
        required: true,
        email: true
      },
      modalCheckbox: "required"
    }, 
    errorClass: "invalid",
    errorElement: "em",
      // Сообщения
      messages: {
        userName: {
          required: "Имя обязательно",
          rangelength: "Имя от 2 до 15 символов"
        },
        userPhone: {
          required: "Телефон обязателен",
          minlength: "Введите корректный номер"
        },
        userEmail: {
          required: "Обязательно укажите Email",
          email: "Введите в формате: name@domain.com"
        },
          modalCheckbox: "Поставьте галочку" 
    },
      submitHandler: function(form) {
        $.ajax({
          type: "POST",
          url: "send.php",
          data: $(form).serialize(),
          success: function (response) {
            console.log('Ajax сработал. Ответ сервера: ' + response);
            location.href = "http://muxammad.ru/repair-design/thanks.html";
            $(form)[0].reset();
            modal.removeClass('modal--visible');
            
          },
          error: function (response) {
            console.error('Ошмбка запроса ' + response);
          }
        });
      }
  });

  // Валидация формы
  $('.footer__form').validate({
    rules: {
      // Строчное правило
      footerName: {
        required: true,
        rangelength: [2, 15]
      },
      footerPhone: {
        required: true,
        minlength: 17
      },
      // Правило-объект (блок)
      userEmail: {
        required: true,
        email: true
      },
      footerCheckbox: "required",
      footerQuestion: {
        required: true,
      }
    }, 
    errorClass: "invalid",
    errorElement: "div",
      // Сообщения
      messages: {
        footerName: {
          required: "Имя обязательно",
          rangelength: "Имя от 2 до 15 символов"
        },
        footerPhone: {
          required: "Телефон обязателен",
          minlength: "Введите корректный номер"
        },
        footerCheckbox: "Поставьте галочку",
        footerQuestion: "Заполните поле",
        footerEmail: {
          required: "Обязательно укажите Email",
          email: "Введите в формате: name@domain.com"
      }
    },
    submitHandler: function(form) {
      $.ajax({
        type: "POST",
        url: "send.php",
        data: $(form).serialize(),
        success: function (response) {
          console.log('Ajax сработал. Ответ сервера: ' + response);
          location.href = "http://muxammad.ru/repair-design/thanks.html";
          $(form)[0].reset();
          modal.removeClass('modal--visible');
        },
        error: function (response) {
          console.error('Ошибка запроса ' + response);
        }
      });
    }
  });

  // Валидация формы
  $('.control__form').validate({
    rules: {
      // Строчное правило
      controlName: {
        required: true,
        rangelength: [2, 15]
      },
      controlPhone: {
        required: true,
        minlength: 17
      },
      // Правило-объект (блок)
      userEmail: {
        required: true,
        email: true
      },
      controlCheckbox: "required"
    }, 
    errorClass: "invalid",
    errorElement: "blockquote",
      // Сообщения
      messages: {
        controlName: {
          required: "Имя обязательно",
          rangelength: "Имя от 2 до 15 символов"
        },
        controlPhone: {
          required: "Телефон обязателен",
          minlength: "Введите корректный номер"
        },
        controlCheckbox: "Поставьте галочку",
        controlEmail: {
          required: "Обязательно укажите Email",
          email: "Введите в формате: name@domain.com"
      }
    },
    submitHandler: function(form) {
      $.ajax({
        type: "POST",
        url: "send.php",
        data: $(form).serialize(),
        success: function (response) {
          console.log('Ajax сработал. Ответ сервера: ' + response);
          location.href = "http://muxammad.ru/repair-design/thanks.html";
          $(form)[0].reset();
          modal.removeClass('modal--visible');
        },
        error: function (response) {
          console.error('Ошмбка запроса ' + response);
          ym(61377106, 'reachGoal', 'requisition'); return true;
        }
      });
    }
  });

  $("img.lazy").lazyload();
  
  

// Маска для телефона

$('[type=tel]').mask('+7(999) 999-99-99', {placeholder: "Ваш номер телефона"});

var player;
$('.video__play').on('click', function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    height: '465',
    width: '100%',
    videoId: 'ex7jGbyFgpA',
    events: {
      'onReady': videoPlay,
    }
  });
})

function videoPlay(event) {
  event.target.playVideo();
}

/*// Карта
ymaps.ready(function () {
  var myMap = new ymaps.Map('map', {
          center: [42.97638, 47.50236],
          zoom: 16,
      }, {
          searchControlProvider: 'yandex#search'
      });


      // Создаём макет содержимого.
      MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
          '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
      ),

      myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
          hintContent: 'Собственный значок метки',
          balloonContent: 'Это красивая метка'
      }, {
          // Опции.
          // Необходимо указать данный тип макета.
          iconLayout: 'default#image',
          // Своё изображение иконки метки.
          iconImageHref: 'img/marker.png',
          // Размеры метки.
          iconImageSize: [64, 64],
          // Смещение левого верхнего угла иконки относительно
          // её "ножки" (точки привязки).
          iconImageOffset: [-5, -38]
      }),

      myPlacemarkWithContent = new ymaps.Placemark([55.661574, 37.573856], {
          hintContent: 'Собственный значок метки с контентом',
          balloonContent: 'А эта — новогодняя',
          iconContent: '12'
      }, {
          // Опции.
          // Необходимо указать данный тип макета.
          iconLayout: 'default#imageWithContent',
          // Своё изображение иконки метки.
          iconImageHref: 'images/ball.png',
          // Размеры метки.
          iconImageSize: [48, 48],
          // Смещение левого верхнего угла иконки относительно
          // её "ножки" (точки привязки).
          iconImageOffset: [-24, -24],
          // Смещение слоя с содержимым относительно слоя с картинкой.
          iconContentOffset: [15, 15],
          // Макет содержимого.
          iconContentLayout: MyIconContentLayout
      });

  myMap.geoObjects
      .add(myPlacemark)
      .add(myPlacemarkWithContent);
});

*/

});