$('.peoples').owlCarousel({
    center: false,
    items:4,
    nav:true,
    dots:false,
    autoWidth:true,
    loop:false,
    margin:60,
    responsive:{
        0:{
            items:3,
        },
        768:{
            items:3,
            margin:0,
        }
    }
})


$('.logos').owlCarousel({
    items:2,
    nav:true,
    dots:false,
    loop:false,
    responsive:{
        0:{
            items:1,
        },
        992:{
            items:1,
            margin:30,
        }
    }
})