$('.header__menu--open').click(function (e) {
    e.preventDefault();
    $('.header__navigation').toggleClass('header__navigation--open');
    $('.header__menu--open').toggleClass('header__menu--close');
    $('.header__language').toggleClass('header__language--hidden');
});
$(".header__modal--open").fancybox({
    'hideOnContentClick': true
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
'use strick';

(function ($) {
    $(document).ready(function () {
        var uluru = {lat: 49.5687689, lng: 34.5858791};
        if ($("div").is(".reach__map")) {
            map = new google.maps.Map(document.getElementById('map'), {
                center: uluru,
                zoom: 3,
            });
            var pos1 = new google.maps.LatLng(50.4374807, 30.6095538);
            var pos2 = new google.maps.LatLng(-4.0101626, 17.2339139);
            var pos3 = new google.maps.LatLng(4.6420843, -78.8351989);
            var pos4 = new google.maps.LatLng(15.7583519, 101.4151049);
            var marker1 = new google.maps.Marker({
                position: pos1,
                map: map,
                icon: "img/home/marker.svg",
                title: 'Кленовая Улица д.2'
            });
            var marker = new google.maps.Marker({
                position: pos2,
                map: map,
                icon: "img/home/marker.svg",
                title: 'Кленовая Улица д.2'
            });

            var popupContent = '<div class="reach__window">' +
                '<h4 class="reach__window--title">Адрес производства</h4>' +
                '<p class="reach__window--text">Адрес: Украина, Киев, Ул. Соборности 36</p>' +
                '<a href="#" class="reach__window--link">E-mail: sale@vents.ua</a>' +
                '<a href="#" class="reach__window--link">Телефон: (044) 406-36-27 (044) 406-07-50</a>' +
                '</div>';
            var infowindow = new google.maps.InfoWindow({
                content: popupContent
            });
            marker.addListener('click', function () {
                infowindow.open(map, marker);
            });

            var marker3 = new google.maps.Marker({
                position: pos3,
                map: map,
                icon: "img/home/marker.svg",
                title: 'Кленовая Улица д.2'
            });
            var marker4 = new google.maps.Marker({
                position: pos4,
                map: map,
                icon: "img/home/marker.svg",
                title: 'Кленовая Улица д.2'
            });
        } else {
            return;
        }
    })
})(jQuery);
(function ($) {
    $(document).ready(function () {
        if ($("div").is(".manufacturing__map")) {
            map2 = new google.maps.Map(document.getElementById('map2'), {
                center: {lat: 55.6796158, lng: 29.9771609},
                zoom: 3,
            });
            var pos1 = new google.maps.LatLng(40.4381311, -3.8196196);
            var pos2 = new google.maps.LatLng(50.9085284, 16.916228);
            var pos3 = new google.maps.LatLng(47.5811346, 31.2783761);
            var pos4 = new google.maps.LatLng(41.6739767, 37.932022);
            var marker = new google.maps.Marker({
                position: pos1,
                map: map2,
                title: '',
                icon: "img/home/marker.svg"
            });
            var marker2 = new google.maps.Marker({
                position: pos2,
                map: map2,
                icon: "img/home/marker.svg",
                title: 'Кленовая Улица д.2'
            });
            var marker3 = new google.maps.Marker({
                position: pos3,
                map: map2,
                icon: "img/home/marker.svg",
                title: 'Кленовая Улица д.2'
            });
            var marker4 = new google.maps.Marker({
                position: pos4,
                map: map2,
                icon: "img/home/marker.svg",
                title: 'Кленовая Улица д.2'
            });

            var popupContent = '<div class="reach__window">' +
                '<h4 class="reach__window--title">Адрес производства</h4>' +
                '<p class="reach__window--text">Адрес: Украина, Киев, Ул. Соборности 36</p>' +
                '<a href="#" class="reach__window--link">E-mail: sale@vents.ua</a>' +
                '<a href="#" class="reach__window--link">Телефон: (044) 406-36-27 (044) 406-07-50</a>' +
                '</div>';
            var infowindow = new google.maps.InfoWindow({
                content: popupContent
            });
            marker.addListener('click', function () {
                infowindow.open(map2, marker);
            });
        } else {
            return;
        }

    })
})(jQuery);


// //1. Получить ответ гугл капчи
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
    if (reCaptchaWidth > containerWidth) {
        var reCaptchaScale = containerWidth / reCaptchaWidth;
        $('.g-recaptcha').css({
            'transform': 'scale(' + reCaptchaScale + ')',
            'transform-origin': 'left top'
        });
    }
};

$(window).ready(function () {
    changeCapthaSize();
});
$(window).resize(function () {
    changeCapthaSize();
});