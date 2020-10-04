$(document).ready(function() {

    $('.services__slider').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      infinite: false,
      variableWidth: true
  });

});
let $status = $('.pagingInfo');
let $slickElement = $('.services__slider');

$slickElement.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
  let i = (currentSlide ? currentSlide : 0) + 1;
  $status.text(i + '/' + slick.slideCount);
});