$(document).ready(function(){
    $(".portfolio-slider").owlCarousel({
        items: 1,
        loop:true,
        nav:true,
        navText:["" , ""],
        dots:false,
        responsive: {
            0: {
                items:1,
                dots: false
            },
            600: {
                items:1
            },
            900: {
                items:1
            },
            1200: {
                items:1
            },
            1400: {
                items:1

            }

        }
    });
});