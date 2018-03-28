$(document).ready(function() {
    /* Parallax */
    parallaxTop = $('.parallax').offset(top);
    $('.parallax').css({
        "background-position": "bottom center"
    });

    $(window).scroll(function () {
        scrollT = $(window).scrollTop();
        $('.parallax').css({
            "background-position": "bottom " + (-scrollT / 2.5) + "px center"
        });

        //scroll to top
        scrollT > 200 ? $('.top-btn_js').fadeIn() : $('.top-btn_js').fadeOut();

        //fixed menu
        (scrollT > 0) ? $('.header__top').addClass('fixed') : $('.header__top').removeClass('fixed');

        var w_top = $(window).scrollTop();        // Количество пикселей на которое была прокручена страница
        var e_top = $('.section-icons__js').offset().top;     // Расстояние отблока со счетчиками до верха всего документа
        var w_height = $(window).height();         // Высота окна браузера
        var c_height = document.body.clientHeight;        // Высота окна браузера
        var d_height = $(document).height();      // Высота всего документа
        var e_height = $('.section-icons__js').outerHeight(); // Полная высота блока со счетчиками
       /* if(w_top + 200 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height){
            count();
        }*/
        if((w_top + c_height) > e_top){
            count();
        }


    });
    var nav = $('.header .nav');
    $('.nav__item__link__js').click(function (event) {
        event.preventDefault();
        var idLink  = $(this).attr('href'),
            topOffset = $(idLink).offset().top;
        $('body,html').animate({scrollTop: topOffset}, 1000);
         if (nav.hasClass('active')) {
             nav.fadeOut().removeClass('active');
             $('.menu-icon').removeClass('open');
         }
    });


    $('.top-btn_js').click(function () {
        $('body, html').animate({
            scrollTop: 0
        }, 1000);
    });

    $('.menu-icon').click(function () {
        $(this).toggleClass('open');
        nav.fadeToggle().toggleClass('active');
    });

    var count = function(){
        $('.icon__info__header__js').each(function() {
            var numb = $(this).attr('data-value');
            $(this).animate({ num: numb - 100/* - начало */ }, {
                duration: 3000,
                step: function (num) {
                    this.innerHTML = (num + 100).toFixed(0)
                }
            })
        })
    };
});