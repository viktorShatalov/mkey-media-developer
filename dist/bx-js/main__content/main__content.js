"use strict";

jQuery(document).ready(function ($) {
  // header burger
  $(".header__burger").on("click", function () {
    var burger = $(this);
    var headerMenu = $(".header__menu");
    burger.toggleClass('active');
    headerMenu.toggleClass("active");
  }); // sound change

  $(".header__bottom-text").on("click", function () {
    var text = $(".text-chenge");
    var bottomSpan = $(".header__bottom-line span");
    text.html() == "Off" ? (text.html("On"), bottomSpan.addClass("active")) : (text.html("Off"), bottomSpan.removeClass("active"));
  }); // modal

  function modal() {
    var openModalButtons = document.querySelectorAll("[data-modal-target]");
    var closeModalButtons = document.querySelectorAll("[data-close-button]");
    var body = document.body;
    openModalButtons.forEach(function (button) {
      button.addEventListener("click", function (e) {
        e.preventDefault();
        var modal = document.querySelector(button.dataset.modalTarget);
        openModal(modal);
        body.style.overflow = "hidden";
      });
    });
    closeModalButtons.forEach(function (button) {
      button.addEventListener("click", function () {
        var modal = button.closest(".modal");
        closeModal(modal);
      });
    });

    function openModal(modal) {
      if (modal == null) return;
      modal.classList.add("active");
    }

    function closeModal(modal) {
      if (modal == null) return;
      modal.classList.remove("active");
      body.style.overflow = "auto";
      body.style.overflowX = "hidden";
    }
  }

  modal(); // js_mask
  // const isComplate = function () {
  //     this.css({
  //         "background-color": "white",
  //         "background-image": "url(./img/awesome/checked_valid.png)",
  //         "background-repeat": "no-repeat",
  //         "background-position": "center right 15px"
  //     });
  // }
  // js-mask_date
  // $(".js-mask_date").mask("99/99/9999", {
  //     completed: isComplate
  // });
  // js-mask_tel
  // $.mask.definitions['N'] = '[/9|9/]';
  // $(".js-mask_tel").mask("+7 N99 999-99-99", {
  //     completed: isComplate
  // });
  // js-mask_email
  // const pattern = /^[a-z0-9_-]+@[a-z0-9-]+\.[a-z]{2,6}$/i;
  // const mail = $('.js-mask_email');
  // mail.blur(function () {
  //     if (mail.val() != '') {
  //         if (mail.val().search(pattern) == 0) {
  //             mail.addClass("valid")
  //             $('.form__control_valid').text('');
  //             $('.form__control_valid').removeClass('valid');
  //             $('.form__control_valid').removeClass('error');
  //         } else {
  //             $('.form__control_valid').text('Email введён не верно');
  //             $('.form__control_valid').addClass('error');
  //         }
  //     } else {
  //         $('.form__control_valid').text('Поле e-mail не должно быть пустым!');
  //         $('.form__control_valid').addClass('error');
  //     }
  // });
  // js-mask_text
  // const maskText = $(".js-mask_text")
  // maskText.each(function () {
  //     $(this).blur(function () {
  //         if ($(this).val() != "") {
  //             $(this).addClass("valid")
  //         }
  //         else {
  //             maskText.removeClass("valid")
  //         }
  //     })
  // })
  // js-select
  // const select = document.querySelector('.js-select');
  // const choices = new Choices(select, {
  //     searchEnabled: false,
  //     itemSelectText: '',
  //     classNames: {
  //         containerInner: 'form__control_input',
  //         itemSelectable: 'choices__item--selectable',
  //     }
  // });
  // webp
  // Проверяем, можно ли использовать Webp формат

  function canUseWebp() {
    var elem = document.createElement('canvas');

    if (!!(elem.getContext && elem.getContext('2d'))) {
      return elem.toDataURL('image/webp').indexOf('data:image/webp') == 0;
    }

    return false;
  }

  var images = document.querySelectorAll('[data-bg]');

  for (var i = 0; i < images.length; i++) {
    var image = images[i].getAttribute('data-bg');
    images[i].style.backgroundImage = 'url(' + image + ')';
  } // Проверяем, является ли браузер посетителя сайта Firefox и получаем его версию


  var isitFirefox = window.navigator.userAgent.match(/Firefox\/([0-9]+)\./);
  var firefoxVer = isitFirefox ? parseInt(isitFirefox[1]) : 0; // Если есть поддержка Webp или браузер Firefox версии больше или равно 65

  if (canUseWebp() || firefoxVer >= 65) {
    var imagesWebp = document.querySelectorAll('[data-bg-webp]');

    for (var _i = 0; _i < imagesWebp.length; _i++) {
      var imageWebp = imagesWebp[_i].getAttribute('data-bg-webp');

      imagesWebp[_i].style.backgroundImage = 'url(' + imageWebp + ')';
    }
  }
});