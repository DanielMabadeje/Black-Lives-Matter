// $('.owl-carousel').owlCarousel({
//     stagePadding: 0,
//     loop:true,
//     margin:10,
//     nav:false,
//     items:1,
//     lazyLoad: true,
//     nav:true,
//   responsive:{
//         0:{
//             items:1,
//             stagePadding: 60
//         },
//         600:{
//             items:1,
//             stagePadding: 100
//         },
//         1000:{
//             items:1,
//             stagePadding: 200
//         },
//         1200:{
//             items:1,
//             stagePadding: 250
//         },
//         1400:{
//             items:1,
//             stagePadding: 300
//         },
//         1600:{
//             items:1,
//             stagePadding: 350
//         },
//         1800:{
//             items:1,
//             stagePadding: 400
//         }
//     }
// })


$('.center').slick({
    centerMode: true,
    centerPadding: '0',
    slidesToShow: 2,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      },
      {
        breakpoint: 1193,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });