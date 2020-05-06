(function ($) {
    "use strict";

        /*---------------------------------------------------
            home screen carousel
        ----------------------------------------------------*/
        $('.home-screen-carousel').owlCarousel({
            loop: true,
            margin: 0,
            animateOut: 'fadeOut',
            animateIn: 'fadeIn',
            responsive: {
                0: {
                    items: 1
                },
                768: {
                    items: 1
                },
                991: {
                    items: 1
                },
                1200: {
                    items: 1
                },
                1920: {
                    items: 1
                }
            }
        });


    /*---------------------------------------------------
                popUp video
        ----------------------------------------------------*/
        $('.popup-video').magnificPopup({
            disableOn: 700,
            type: 'iframe',
            mainClass: 'mfp-fade',
            removalDelay: 160,
            preloader: false,
            fixedContentPos: false,
            disableOn: 300
        });

         /*---------------------------------------------------
            screenshot carousel
        ----------------------------------------------------*/
        $('.screen-carousel').owlCarousel({
            loop: true,
            margin: 0,
            center: true,
            responsive: {
                0: {
                    items: 1
                },
                768: {
                    items: 3
                },
                991: {
                    items: 4
                },
                1200: {
                    items: 4
                },
                1920: {
                    items: 4
                }
            }
        });

         //Review Carousel
    var review = $('.review-wrap');
    review.owlCarousel({
        items: 1,
        autoplay: true,
        loop: true,
        dots: false
    });

     /*---------------------------------------------------
            faq accordian
        ----------------------------------------------------*/
        $('.collapse').on('shown.bs.collapse', function () {
            $(this).prev().addClass('active');
        });

        $('.collapse').on('hidden.bs.collapse', function () {
            $(this).prev().removeClass('active');
        });
}(jQuery));