$('.carousel.carousel-slider').carousel({ fullWidth: true });
$('.button-collapse').sideNav();

function toSection(elementId) {
  document.getElementById(elementId).scrollIntoView({
    behavior: 'smooth',
    inline: 'nearest'
  });
}
