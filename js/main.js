

$(document).ready(function () {
    $('.comments__slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,

        dots: true,
        adaptiveHeight: true,
        arrows: true,
        draggable: false,

        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 542,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });

    /*window.onresize = function () {
        if (screen.width < 584) {
            $(".footer__list").find("ul").slideDown();
        }
    };

    $(".footer__list").click(function () {
        if (screen.width < 584) {
            $(".footer__list").find("ul").slideToggle();
        }
    });*/

    $(".header__burger").click(function (e) {
        e.preventDefault();

        $(this).toggleClass("active");
        $(".header__inner").toggleClass("active");

        $(".wrapper").toggleClass("hidden");
    });

    $(".header__nav").find("a").click(function () {
        if ($(".header__inner").hasClass("active")) {
            $(".header__inner").removeClass("active");
            $(".header__burger").removeClass("active");

            $(".wrapper").removeClass("hidden");
        }
    });
});

