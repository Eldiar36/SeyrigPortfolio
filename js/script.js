$(document).ready(function(){
    $(".portfolio-slider").owlCarousel({
        items: 1,
        loop:true,
        nav:true,
        navText:["" , ""],
        dots:false,
        margin:10,
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
$('.mobile-btn').on(  'click',function (e) {
    e.preventDefault();
    $('.mobile-btn').toggleClass('active')
    $('.nav-menu').toggleClass('active')
})
$('.nav-menu  li').on('click',function () {
    $('.mobile-btn').removeClass('active')
    $('.nav-menu').removeClass('active')
});
window.onscroll = function showHeader() {
    let header =    document.querySelector(".header");
    if (window.pageYOffset > 200) {
        header.classList.add("header-fixed")
    }
    else  {
        header.classList.remove("header-fixed")
    }
};