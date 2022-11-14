$(document).on("click",".search-btn",function(){
    $(".search-bx").toggleClass("active")}
    );


$('.banner-slider').owlCarousel({
        loop: true,
        margin: 0,
        responsiveClass: true,
        items: 1,
        dots: true,
        nav: false,
        autoplay: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            600: {
                items: 1,
                nav: false
            },
            1000: {
                items: 1,
                dots: true,
                nav: false,
                loop: true
            }
        }
    })

