$(document).ready(function () {
    setTimeout(() => {
        $('#index-news-carousel').slick({
            infinite: true,
            dots: true,
            slidesToShow: 4,
            slidesToScroll: 4,
            autoplay: true,
            autoplaySpeed: 2000,
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        arrows: false,
                        centerMode: true,
                        centerPadding: '45px',
                        slidesToShow: 1
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        arrows: false,
                        centerMode: true,
                        centerPadding: '45px',
                        slidesToShow: 1
                    }
                }
            ]
        });
    }, 1)

})

