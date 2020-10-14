$(document).ready(function() {

$('.faq__accordion-title').click(function() {
        
  $(".faq__accordion-content").not($(this).next()).slideUp(400);
  $(this).next().slideToggle(400);
  
  $(".faq__accordion-item").not($(this).closest(".faq__accordion-item")).removeClass("open-accordion");
  $(this).closest(".faq__accordion-item").toggleClass("open-accordion");
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

      $('.blog__slider').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: false,
        // variableWidth: true
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