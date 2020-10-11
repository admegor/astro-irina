$(document).ready(function() {

//   $('.faq__accordion-title').click(function() {
//     $(this).next('.faq__accordion-inner').slideToggle();
// })

$('.faq__accordion').accordion({
  // heightStyle: 'content',
  collapsible: true,
	header: '> .faq__accordion-item > .faq__accordion-title'
});

    $('.services__slider').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      infinite: false,
      variableWidth: true
  });

    $('.feedback__slider').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      infinite: false,
      variableWidth: true,
      responsive: [
        {
          breakpoint: 900,
          settings: {
            variableWidth: false
          }
        }
      ]
  });

});



let $status = $('.pagingInfo');
let $slickElement = $('.services__slider');

$slickElement.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
  let i = (currentSlide ? currentSlide : 0) + 1;
  $status.text(i + '/' + slick.slideCount);
});

let $statusFB = $('.pagingInfoFeedback');
let $slickElementFB = $('.feedback__slider');

$slickElementFB.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
  let i = (currentSlide ? currentSlide : 0) + 1;
  $statusFB.text(i + '/' + slick.slideCount);
});