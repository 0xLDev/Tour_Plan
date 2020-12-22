$(document).ready(function () {
    var hotelSlider = new Swiper('.hotel-slider', {
        // Optional parameters
        loop: true,
    
        // Navigation arrows
    
        navigation:  {
            nextEl: '.hotel-slider__button--next',
            prevEl: '.hotel-slider__button--prev',
        },
        // Перелистывать слайдер с помощью клавиатуры
        keyboard: {
            enabled: true,
        }   
    })
    var reviewsSlider = new Swiper('.reviews-slider', {
        // Optional parameters
        loop: true,
    
        // Navigation arrows
    
        navigation:  {
            nextEl: '.reviews-slider__button--next',
            prevEl: '.reviews-slider__button--prev',
        },
        // Перелистывать слайдер с помощью клавиатуры
        keyboard: {
            enabled: true,
        }   
    })
    
    var menuButton = document.querySelector('.menu-button')
    menuButton.addEventListener('click', function () {
        console.log('Клик по кнопке меню')
        document.querySelector('.navbar-bottom').classList.toggle('navbar-bottom--visible')
    })

    var modalButton = $('[data-toggle=modal]')
    var closeModalButton = $('.modal__close')
    modalButton.on('click', openModal)
    closeModalButton.on('click', closeModal)

    function openModal () {
        var modalOverlay = $('.modal__overlay')
        var modalDialog = $('.modal__dialog')
        modalOverlay.addClass('modal__overlay--visible')
        modalDialog.addClass('modal__dialog--visible')
    }

    function closeModal (event) {
        event.preventDefault()
        var modalOverlay = $('.modal__overlay')
        var modalDialog = $('.modal__dialog')
        modalOverlay.removeClass('modal__overlay--visible')
        modalDialog.removeClass('modal__dialog--visible')
    }

    // Закрытие модального окна при нажатии ESC
    $(document).keyup(function(e) { 
       if (e.keyCode == 27) {
        var modalOverlay = $('.modal__overlay')
        var modalDialog = $('.modal__dialog')
        modalOverlay.removeClass('modal__overlay--visible')
        modalDialog.removeClass('modal__dialog--visible')
       }   
   })

    // Обработка форм
    $('.form').each(function () {
        $(this).validate({
            errorClass: "invalid",
            messages: {
                name: {
                    required: "Provide a name",
                    minlength: "Name must be at least 2 letters long"
                },
                email: {
                  required: "We need your email address to contact you",
                  email: "Your email address must be in the format of name@domain.com"
                },
                phone: {
                    required: "Phone is required",
                    minlength: "Phone number must be at least 11 digits"
                },
            },     
        })
    })
    // Маска для номера телефона
    var maskedInput = $('input[type="tel"]'); 
        maskedInput.each(function(){
        $(this).mask("+7 (999) 999-99-99");
    });

    // Маска для инпута name
    $("#name").mask("SSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSS"), {
        watchDataMask: true,
        watchInterval: 100,
        translation: {
            $: {
                pattern: /[A-Za-z]/,
                optional: true,
            }
        }

    }

    $("#modal-name").mask("SSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSS"), {
        watchDataMask: true,
        watchInterval: 100,
        translation: {
            $: {
                pattern: /[A-Za-z]/,
                optional: true,
            }
        }

    }

    // Библиотека анимации
    AOS.init();

    // Подгрузка карты
    $(".map").mousemove(function (event) {
        $("#image-maps").remove();
        $(".google-maps").append('<iframe class="maps" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3952.0413263625383!2d98.29254741535308!3d7.890745494315381!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30503b7bfcd9f903%3A0xf7065fac1e3d7c48!2sDoubleTree%20by%20Hilton%20Phuket%20Banthai%20Resort!5e0!3m2!1sru!2sru!4v1595320439950!5m2!1sru!2sru" height="213" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>');
    });
});
