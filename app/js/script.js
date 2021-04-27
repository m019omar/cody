const btnHumburger = document.querySelector("#btnHumburger");
const body = document.querySelector('body');
const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay');

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




// courses carosel
$('.courses-owl-carousel, .tools-owl-carousel, .robots-owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    dots: true,
    autoplay: false,
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