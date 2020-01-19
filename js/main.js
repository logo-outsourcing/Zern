$('.header__menu--open').click(function (e) {
    e.preventDefault();
    $('.header__navigation').toggleClass('header__navigation--open');
    $('.header__menu--open').toggleClass('header__menu--close');
});
$('.banner__slider').slick({
    dots: true,
    arrows: true,
    infinite: true,
    slidesToShow: 1,
    slide: "div",
    dotsClass: ' slick-dots banner__dots',
    prevArrow: ".banner__prev",
    nextArrow: ".banner__next",
});
$(window).ready(function(){
    $(".header__modal").each( function(){
        $(this).wrap('<div class="header__overlay"></div>')
    });

    $(".open-modal").on('click', function(e){
        e.preventDefault();
        e.stopImmediatePropagation;

        var $this = $(this),
            modal = $($this).data("modal");

        $(modal).parents(".header__overlay").addClass("header__modal--open");
        setTimeout( function(){
            $(modal).addClass("header__modal--open");
        }, 350);

        $(document).on('click', function(e){
            var target = $(e.target);

            if ($(target).hasClass("header__overlay")){
                $(target).find(".header__modal").each( function(){
                    $(this).removeClass("header__modal--open");
                });
                setTimeout( function(){
                    $(target).removeClass("header__modal--open");
                }, 350);
            }

        });

    });

    $(".close-modal").on('click', function(e){
        e.preventDefault();
        e.stopImmediatePropagation;

        var $this = $(this),
            modal = $($this).data("modal");

        $(modal).removeClass("header__modal--open");
        setTimeout( function(){
            $(modal).parents(".header__overlay").removeClass("header__modal--open");
        }, 350);

    });
});



var map = $('.reach__map')[0];
var uluru = {lat: 49.5687689, lng: 34.5858791};
var map1 = new google.maps.Map(map,
    {
        center: uluru,
        zoom: 3
    });
var pos1 = new google.maps.LatLng(50.4374807, 30.6095538);
var pos2 = new google.maps.LatLng(-4.0101626, 17.2339139);
var pos3 = new google.maps.LatLng(4.6420843, -78.8351989);
var pos4 = new google.maps.LatLng(15.7583519, 101.4151049);
var marker = new google.maps.Marker({
    position: pos1,
    map: map1,
    title: '',
    icon: "img/home/marker.svg"


});
var marker = new google.maps.Marker({
    position: pos2,
    map: map1,
    icon: "img/home/marker.svg",
    title: 'Кленовая Улица д.2'
});
var marker = new google.maps.Marker({
    position: pos3,
    map: map1,
    icon: "img/home/marker.svg",
    title: 'Кленовая Улица д.2'
});
var marker = new google.maps.Marker({
    position: pos4,
    map: map1,
    icon: "img/home/marker.svg",
    title: 'Кленовая Улица д.2'
});



// 1. Получить ответ гугл капчи
// var captcha = grecaptcha.getResponse();
//
// // 2. Если ответ пустой, то выводим сообщение о том, что пользователь не прошёл тест.
// // Такую форму не будем отправлять на сервер.
// if (!captcha.length) {
//     // Выводим сообщение об ошибке
//     $('#recaptchaError').text('* Вы не прошли проверку "Я не робот"');
// } else {
//     // получаем элемент, содержащий капчу
//     $('#recaptchaError').text('');
// }
//
// // 3. Если форма валидна и длина капчи не равно пустой строке, то отправляем форму на сервер (AJAX)
// if ((formValid) && (captcha.length)) {
//     // добавить в formData значение 'g-recaptcha-response'=значение_recaptcha
//     formData.append('g-recaptcha-response', captcha);
//
// }
//
// // 4. Если сервер вернул ответ error, то делаем следующее...
// // Сбрасываем виджет reCaptcha
// grecaptcha.reset();
// // Если существует свойство msg у объекта $data, то...
// if ($data.msg) {
//     // вывести её в элемент у которого id=recaptchaError
//     $('#recaptchaError').text($data.msg);
// }
function changeCapthaSize() {
    var reCaptchaWidth = 302;
    var containerWidth = $('.reach__captcha').width();
    if(reCaptchaWidth > containerWidth) {
        var reCaptchaScale = containerWidth / reCaptchaWidth;
        $('.g-recaptcha').css({
'transform':'scale(' +reCaptchaScale+ ')',
    'transform-origin':'left top'
    });
    }
};

$(window).ready(function(){
    changeCapthaSize();
});
$(window).resize(function(){
    changeCapthaSize();
});