

window.onscroll = function () {
  if (window.screen.width >= 768) {
    scrollY <= 70
      ? document.getElementById('header').classList.remove('header-scroll')
      : document.getElementById('header').classList.add('header-scroll');
    scrollY <= 700
      ? document.getElementById('button-top').classList.add('button-hidden')
      : document.getElementById('button-top').classList.remove('button-hidden');
  } else {
    scrollY <= 120
      ? document.getElementById('header').classList.remove('header-scroll')
      : document.getElementById('header').classList.add('header-scroll');
    scrollY <= 700
      ? document.getElementById('button-top').classList.add('button-hidden')
      : document.getElementById('button-top').classList.remove('button-hidden');
  }
};