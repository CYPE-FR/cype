$(document).ready(function() {
    "use strict";
    /* =================================
    LOADER 
    =================================== */
    $(".loader").delay(400).fadeOut();
    $(".animationload").delay(400).fadeOut("fast");
    /* =================================
    NAVBAR 
    =================================== */
    var top = jQuery(document).scrollTop();
    var batas = 200;
    if (top > batas) {
        jQuery('.navbar-main').addClass('stiky');
    }
    jQuery(window).scroll(function() {
        top = jQuery(document).scrollTop();
        if (top > batas) {
            jQuery('.navbar-main').addClass('stiky');
        } else {
            jQuery('.navbar-main').removeClass('stiky');
        }
    });
    /* =================================
    BANNER ROTATOR IMAGE 
    =================================== */
    $('#slides').superslides({
        //animation: "fade",
        play: 5000,
        slide_speed: 800,
        pagination: true,
        hashchange: false,
        scrollable: true,

    });

    /* =================================
    BACK TO TOP 
    =================================== */
    // browser window scroll (in pixels) after which the "back to top" link is shown
    var offset = 300,
        //browser window scroll (in pixels) after which the "back to top" link opacity is reduced
        offset_opacity = 1200,
        //duration of the top scrolling animation (in ms)
        scroll_top_duration = 700,
        //grab the "back to top" link
        $back_to_top = $('.cd-top');

    //hide or show the "back to top" link
    $(window).scroll(function() {
        ($(this).scrollTop() > offset) ? $back_to_top.addClass('cd-is-visible'): $back_to_top.removeClass('cd-is-visible cd-fade-out');
        if ($(this).scrollTop() > offset_opacity) {
            $back_to_top.addClass('cd-fade-out');
        }
    });

    //smooth scroll to top
    $back_to_top.on('click', function(event) {
        event.preventDefault();
        $('body,html').animate({
            scrollTop: 0,
        }, scroll_top_duration);
    });

    /* =================================
    ISOTOPE
    =================================== */
    $(window).load(function() {
        // INITIALIZE ISOTOPE
        var $container = $('.grid-services');
        $container.isotope({
            filter: '*',
        });
        $('.portfolio_filter a').on('click', function() {
            $('.portfolio_filter .active').removeClass('active');
            $(this).addClass('active');

            var selector = $(this).attr('data-filter');
            $container.isotope({
                filter: selector,
                animationOptions: {
                    duration: 500,
                    animationEngine: "jquery"
                }
            });
            return false;
        });
    });

    /* =================================
    OWL
    =================================== */

    var caro = $("#caro");
    caro.owlCarousel({
        items: 1,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        loop: true,
    });

    var owl = $("#owl-testimony");
    owl.owlCarousel({
        autoplay: 5000,
        stopOnHover: true,
        margin: 30,
        items: 2,
        nav: true,
        navText: ["<span class='fa fa-chevron-left'></span>", "<span class='fa fa-chevron-right'></span>"],
        dots: true,
        loop: true,
        responsive: {
            0: {
                items: 1
            },
            1000: {
                items: 2
            }
        }
    });

    var testimony2 = $("#owl-testimony2");
    testimony2.owlCarousel({
        items: 1,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        navText: ["<span class='fa fa-chevron-left'></span>", "<span class='fa fa-chevron-right'></span>"],
        dots: true,
        loop: true
    });

    var project = $("#caro-project");
    project.owlCarousel({
        margin: 10,
        items: 4,
        nav: true,
        navText: ["<span class='fa fa-chevron-left'></span>", "<span class='fa fa-chevron-right'></span>"],
        dots: true,
        loop: true,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            1000: {
                items: 4
            }
        }
    });

    var project2 = $("#caro-project-2");
    project2.owlCarousel({
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        items: 4,
        nav: true,
        navText: ["<span class='fa fa-chevron-left'></span>", "<span class='fa fa-chevron-right'></span>"],
        dots: false,
        loop: true,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            1000: {
                items: 4
            }
        }
    });

    /* =================================
    FAQ
    =================================== */
    $(".panel").on("show.bs.collapse hide.bs.collapse", function(e) {
        if (e.type == 'show') {
            $(this).addClass('active');
        } else {
            $(this).removeClass('active');
        }
    });

    /* =================================
    MAGNIFIC POPUP
    =================================== */
    $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,

        fixedContentPos: false
    });

    /* --------------------------- KEKE ---------------------------------- */
    /* Carousel */
    $('.team-slider').owlCarousel({
        loop: true,
        nav: false,
        autoplay: true,
        autoplayTimeout: 5000,
        smartSpeed: 450,
        margin: 20,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            991: {
                items: 3
            },
            1200: {
                items: 3
            },
            1920: {
                items: 3
            }
        }
    });
});