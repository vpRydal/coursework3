$(document).ready(function () {
    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider-nav',
        lazyLoad: 'progressive',

    });
    $('.slider-nav').slick({
        slidesToShow:4 ,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        focusOnSelect: true,
        lazyLoad: 'progressive',
        autoplay: true,
        autoplaySpeed: 2000,

    });
});

