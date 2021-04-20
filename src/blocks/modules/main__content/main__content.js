
jQuery(document).ready(function ($) {

    // header burger
    $("header .burger-js").on("click", function () {
        let burger = $(this)
        let headerMenu = $(".header__menu")
        burger.toggleClass('active')
        headerMenu.toggleClass("active")
    })
    $("footer .burger-js").on("click", function () {
        let burger = $(this)
        let footerMenu = $(".footer__menu")
        burger.toggleClass('active')
        footerMenu.toggleClass("active")
    })

    // footer__form
    $(".btn__form-js").on("click", function () {
        $(this).addClass("active")
        $(".footer__form-js").addClass("active")
    })
    $(".form__request-menu-close-js").on("click", function () {
        $(".btn__form-js").removeClass("active")
        $(".footer__form-js").removeClass("active")
    })

    // sound change
    $(".sound-js").on("click", function () {
        let text = $(".text-chenge")
        let bottomSpan = $(".header__bottom-line span")
        text.html() == "Off"
            ? (text.html("On"), bottomSpan.addClass("active"))
            : (text.html("Off"), bottomSpan.removeClass("active"))

    })

    // scroll 
    $(".header__scroll-js").on("click", "a", function (event) {
        event.preventDefault();
        let id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({ scrollTop: top }, 1000);
    });
    $(".about__scroll-js").on("click", "a", function (event) {
        event.preventDefault();
        let id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({ scrollTop: top }, 2500);
    });

    // development__content

    function tab(el) {
        let tabLink = el

        tabLink.forEach((item) => {
            item.addEventListener("mouseover", selsectTabLink);
        });
        function selsectTabLink() {
            tabLink.forEach((item) => {
                item.classList.remove("active");
            });
            this.classList.add("active");
        }
    }
    tab(document.querySelectorAll(".development__top-js ul li"))
    tab(document.querySelectorAll(".development_bottom-js ul li"))

    // glitch
    setInterval(function () {
        $('.glitch').addClass("active")
        setTimeout(function () {
            $('.glitch').removeClass("active")
        }, 1000)
    }, 5000)

    // modal

    function modal() {
        const openModalButtons = document.querySelectorAll("[data-modal-target]");
        const closeModalButtons = document.querySelectorAll("[data-close-button]");
        const body = document.body

        openModalButtons.forEach((button) => {
            button.addEventListener("click", (e) => {
                e.preventDefault();
                const modal = document.querySelector(button.dataset.modalTarget);
                openModal(modal);
                body.style.overflow = "hidden"
            });
        });

        closeModalButtons.forEach((button) => {
            button.addEventListener("click", () => {
                const modal = button.closest(".modal");
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
            body.style.overflow = "auto"
            body.style.overflowX = "hidden"
        }
    }
    modal();

    // input file
    $('input[type="file"]').change(function () {
        let value = $("input[type='file']").val();
        let deleteBtn = $(".form__file_pseudo-delete")
        let line = $(".form__file_pseudo-line")
        let textValue = $('.form__file_pseudo-text')

        textValue.text(value);
        deleteBtn.addClass("active")
        line.addClass("active")
        deleteBtn.on("click", function () {
            textValue.text("Прикрепить файл")
            deleteBtn.removeClass("active")
            line.removeClass("active")
        })
    });

    // webp
    // Проверяем, можно ли использовать Webp формат
    function canUseWebp() {
        let elem = document.createElement('canvas');
        if (!!(elem.getContext && elem.getContext('2d'))) {
            return elem.toDataURL('image/webp').indexOf('data:image/webp') == 0;
        }
        return false;
    }

    let images = document.querySelectorAll('[data-bg]');
    for (let i = 0; i < images.length; i++) {
        let image = images[i].getAttribute('data-bg');
        images[i].style.backgroundImage = 'url(' + image + ')';
    }
    // Проверяем, является ли браузер посетителя сайта Firefox и получаем его версию
    const isitFirefox = window.navigator.userAgent.match(/Firefox\/([0-9]+)\./);
    const firefoxVer = isitFirefox ? parseInt(isitFirefox[1]) : 0;

    // Если есть поддержка Webp или браузер Firefox версии больше или равно 65
    if (canUseWebp() || firefoxVer >= 65) {
        let imagesWebp = document.querySelectorAll('[data-bg-webp]');
        for (let i = 0; i < imagesWebp.length; i++) {
            let imageWebp = imagesWebp[i].getAttribute('data-bg-webp');
            imagesWebp[i].style.backgroundImage = 'url(' + imageWebp + ')';
        }
    }


    // pagepiling

    $('#pagepiling').pagepiling({
        anchors: [
            'header',
            'second__block',
            'do-not',
            'recognize',
            'love',
            'reach',
            'planet',
            'founder',
            'about__product',
            'development',
            'personalization',
            'benefits',
            'about__us',
            'footer',],
        navigation: {
            'position': 'right',
            'tooltips': [],
            "bulletsColor": "#e2e3e4",
            "textColor": "#e2e3e4",
        },
        onLeave: function (index, nextIndex, direction) {
            if (nextIndex == 1) {
                $('#pp-nav').removeClass('active');
            }
            else{
                $('#pp-nav').addClass('active');
            }
            // console.log(index)
            // console.log(nextIndex)
            // console.log(direction)


        },
    })


})




