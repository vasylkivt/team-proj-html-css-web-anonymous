const smallImages = document.querySelectorAll('.small-image');
const mainImage = document.querySelector('.main-image');

if (window.screen.width >= 768) {
  smallImages.forEach(image => {
    image.addEventListener('click', () => {
      const source = image.getAttribute('src');

      // Анімація зміни маленької картинки на головну картинку
      image.style.transform = 'scale(1.5)';
      image.style.border = '2px solid black';
      image.style.opacity = '0.5';

      // Анімація зміни головної картинки на маленьку картинку
      mainImage.style.transform = 'scale(0.6)';
      mainImage.style.border = '2px solid black';
      mainImage.style.opacity = '0.5';

      setTimeout(() => {
        // Зміна джерела картинки
        image.setAttribute('src', mainImage.getAttribute('src'));
        mainImage.setAttribute('src', source);

        // Анімація повернення до початкового стану
        image.style.transform = 'scale(1)';
        image.style.border = '1px solid black';
        image.style.opacity = '1';
        mainImage.style.transform = 'scale(1)';
        mainImage.style.border = '1px solid black';
        mainImage.style.opacity = '1';
      }, 600);
    });
  });
} else {
  $('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,

    //  variableWidth: true, //* своя ширина
    fade: true,
    asNavFor: '.slider-nav',
  });
  $('.slider-nav').slick({
    slidesToShow: 2,
    //  infinite: false,
    //  arrows: false,
    prevArrow: $('.gallery-slider-btn-prev'),
    nextArrow: $('.gallery-slider-btn-next'),

    slidesToScroll: 1,
    variableWidth: true, //* своя ширина
    asNavFor: '.slider-for',
    //  dots: true,
    //  centerMode: true,
    focusOnSelect: true,
  });
}
