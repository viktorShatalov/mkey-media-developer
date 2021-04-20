"use strict";

jQuery(document).ready(function ($) {
  // header burger
  $("header .burger-js").on("click", function () {
    var burger = $(this);
    var headerMenu = $(".header__menu");
    burger.toggleClass('active');
    headerMenu.toggleClass("active");
  });
  $("footer .burger-js").on("click", function () {
    var burger = $(this);
    var footerMenu = $(".footer__menu");
    burger.toggleClass('active');
    footerMenu.toggleClass("active");
  }); // footer__form

  $(".btn__form-js").on("click", function () {
    $(this).addClass("active");
    $(".footer__form-js").addClass("active");
  });
  $(".form__request-menu-close-js").on("click", function () {
    $(".btn__form-js").removeClass("active");
    $(".footer__form-js").removeClass("active");
  }); // sound change

  $(".sound-js").on("click", function () {
    var text = $(".text-chenge");
    var bottomSpan = $(".header__bottom-line span");
    text.html() == "Off" ? (text.html("On"), bottomSpan.addClass("active")) : (text.html("Off"), bottomSpan.removeClass("active"));
  }); // scroll 

  $(".header__scroll-js").on("click", "a", function (event) {
    event.preventDefault();
    var id = $(this).attr('href'),
        top = $(id).offset().top;
    $('body,html').animate({
      scrollTop: top
    }, 1000);
  });
  $(".about__scroll-js").on("click", "a", function (event) {
    event.preventDefault();
    var id = $(this).attr('href'),
        top = $(id).offset().top;
    $('body,html').animate({
      scrollTop: top
    }, 2500);
  }); // development__content

  function tab(el) {
    var tabLink = el;
    tabLink.forEach(function (item) {
      item.addEventListener("mouseover", selsectTabLink);
    });

    function selsectTabLink() {
      tabLink.forEach(function (item) {
        item.classList.remove("active");
      });
      this.classList.add("active");
    }
  }

  tab(document.querySelectorAll(".development__top-js ul li"));
  tab(document.querySelectorAll(".development_bottom-js ul li")); // glitch

  setInterval(function () {
    $('.glitch').addClass("active");
    setTimeout(function () {
      $('.glitch').removeClass("active");
    }, 1000);
  }, 5000); // modal

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

  modal(); // input file

  $('input[type="file"]').change(function () {
    var value = $("input[type='file']").val();
    var deleteBtn = $(".form__file_pseudo-delete");
    var line = $(".form__file_pseudo-line");
    var textValue = $('.form__file_pseudo-text');
    textValue.text(value);
    deleteBtn.addClass("active");
    line.addClass("active");
    deleteBtn.on("click", function () {
      textValue.text("Прикрепить файл");
      deleteBtn.removeClass("active");
      line.removeClass("active");
    });
  }); // webp
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
  } // pagepiling


  $('#pagepiling').pagepiling({
    anchors: ['header', 'second__block', 'do-not', 'recognize', 'love', 'reach', 'planet', 'founder', 'about__product', 'development', 'personalization', 'benefits', 'about__us', 'footer'],
    navigation: {
      'position': 'right',
      'tooltips': [],
      "bulletsColor": "#e2e3e4",
      "textColor": "#e2e3e4"
    },
    onLeave: function onLeave(index, nextIndex, direction) {
      if (nextIndex == 1) {
        $('#pp-nav').removeClass('active');
      } else {
        $('#pp-nav').addClass('active');
      } // console.log(index)
      // console.log(nextIndex)
      // console.log(direction)

    }
  });
});