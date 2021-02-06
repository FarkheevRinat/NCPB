$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 30,
    nav: true,
    responsive:{
        0:{
            items: 1,
            margin: 10,
        },
        480:{
            items: 2
        },
        800:{
            items: 3
        },
        1000:{
            items: 4
        }
    }
})