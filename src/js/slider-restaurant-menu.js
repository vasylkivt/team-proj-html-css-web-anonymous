$('.slider-restaurant-menu').slick({
  infinite: false, //* безкінечний скрол
  speed: 300, //* швидкість анімації скролу
  slidesToScroll: 1, //* кількість карнинок при скролі
  // slidesToShow: 4,      //* кількість елементів
  // autoplay: true, //* автоскрол
  autoplaySpeed: 2000, //* період автоскролу
  variableWidth: true, //* своя ширина

  prevArrow: $('.restaurant-slider-btn-prev'),
  nextArrow: $('.restaurant-slider-btn-next'),
  responsive: [
    {
      breakpoint: 1440,
      settings: {
        variableWidth: false,
        slidesToShow: 1,
      },
    },
    {
      breakpoint: 768,
      settings: {
        variableWidth: false,
        slidesToShow: 1,
      },
    },
  ],
});
if ($(window).width() >= 1440) {
  $('.slider-restaurant-menu')
    .slick('unslick')
    .not('.slider-restaurant-menu:not(.slick-initialized)')
    .removeClass('slider-restaurant-menu');
}
