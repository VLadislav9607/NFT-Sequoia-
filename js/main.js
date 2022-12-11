
const buttonMobile = document.querySelector('.button__mobile'),
   buttonMobileActive = document.querySelector('.button__mobile-icon'),
   navMobile = document.querySelector('.nav__mobile');

buttonMobile.addEventListener('click', () => {
   buttonMobileActive.classList.toggle('button-active');
   navMobile.classList.toggle('show');

});





$('.roadmap__slider').slick({
   infinite: true,
   slidesToShow: 4,
   slidesToScroll: 4,
   arrows: false,
   dots: true,
   responsive: [
      {
         breakpoint: 1024,
         settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
         }
      },
      {
         breakpoint: 780,
         settings: {
            slidesToShow: 2,
            slidesToScroll: 2
         }
      },
      {
         breakpoint: 480,
         settings: {
            dots: false,
            slidesToShow: 1,
            slidesToScroll: 1
         }
      }
   ]
});
