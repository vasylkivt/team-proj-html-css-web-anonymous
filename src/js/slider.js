$('.slider-container').slick({
  infinite: false, //* безкінечний скрол
  speed: 300, //* швидкість анімації скролу
  slidesToScroll: 1, //* кількість карнинок при скролі
  // slidesToShow: 4,      //* кількість елементів
  // autoplay: true, //* автоскрол
  autoplaySpeed: 2000, //* період автоскролу
  variableWidth: true, //* своя ширина

  prevArrow: $('.slider-btn-prev'),
  nextArrow: $('.slider-btn-next'),
  responsive: [
    {
      breakpoint: 1440,
      settings: {
        variableWidth: true,
        // slidesToShow: 2,
      },
    },
    {
      breakpoint: 768,
      settings: {
        variableWidth: true,
        // slidesToShow: 2,
      },
    },
  ],
});
