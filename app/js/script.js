const btnHumburger = document.querySelector("#btnHumburger");
const body = document.querySelector('body');
const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay');
const topBar = document.querySelector('.top-bar');

btnHumburger.addEventListener('click', function () {
    if (header.classList.contains('open')) {
        body.classList.remove('noscroll')
        header.classList.remove('open')
        overlay.classList.remove('fade-in');
        overlay.classList.add('fade-out');
    } else {
        body.classList.add('noscroll')
        header.classList.add('open')
        overlay.classList.add('fade-in');
        overlay.classList.remove('fade-out');
    }
})


$(window).on('scroll', function () {
    if ($(this).scrollTop() > 40) {
        // console.log('x')
        $('.header').addClass('shadow');
    } else {
        $('.header').removeClass('shadow');
    }
})

// var baneerCarousel = document.querySelector('#baneerCarousel')
// var bCarousel = new bootstrap.Carousel(baneerCarousel)

// $('.3d-slider').carousel({
//     // options here.
//     duration: 200,
//     dist: -100,
//     fullWidth: false,
//     noWrap: false

// });

$('.banner-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    dots: true,
    autoplay: false,
    autoplayTimeout: 4000,
    smartSpeed: 1700,
    navText: [
        "<i class='fa fa-angle-left'></i>",
        "<i class='fa fa-angle-right'></i>"
    ],
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
})


// courses carosel
$('.courses-owl-carousel, .tools-owl-carousel, .robots-owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    dots: true,
    // autoplayTimeout: 2000,
    smartSpeed: 1000,
    navText: [
        "<i class='fa fa-angle-left'></i>",
        "<i class='fa fa-angle-right'></i>"
    ],
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 3
        }
    }
})
// $('.tools-owl-carousel').owlCarousel({
//     loop: true,
//     margin: 10,
//     nav: true,
//     dots: true,
//     autoplay: false,
//     // autoplayTimeout: 2000,
//     smartSpeed: 1000,
//     navText: [
//         "<i class='fa fa-angle-left'></i>",
//         "<i class='fa fa-angle-right'></i>"
//     ],
//     responsive: {
//         0: {
//             items: 1
//         },
//         600: {
//             items: 2
//         },
//         1000: {
//             items: 3
//         }
//     }
// })

// sponsores carosel
$('.sponsors-owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    autoplay: true,
    // autoplayTimeout: 2000,
    smartSpeed: 1500,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 5
        }
    }
})