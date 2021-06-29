

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

    if (screen.width < 584) {
        $(".footer__list").addClass("footer__list_spoiler");
    }
    else {
        $(".footer__list").removeClass("footer__list_spoiler");
    }

    $(".footer__title").click(function () {
        if (screen.width < 584) {
            $(this).toggleClass("footer__title_open");
            $(this).siblings("ul").slideToggle();
        }  
    });

    window.onscroll = function () {
        var sticky = $(document).scrollTop();

        if (sticky > 50) {
            $(".header").addClass("sticky");
        } else {
            $(".header").removeClass("sticky");
        }
    };

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

