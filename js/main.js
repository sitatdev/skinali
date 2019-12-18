$(window).load(function() {
  $(".before-after").twentytwenty({
    before_label: 'Без скинали', // Set a custom before label
    after_label: 'Со скинали' // Set a custom after label
  });
  $('.before-slider').slick({
    draggable: false,
    dots: true,
    dotsClass: 'before-slider__dots',
    prevArrow: $('.arrow-left'),
    nextArrow: $('.arrow-right'),
    responsive: [
      {
        breakpoint: 768,
        settings: {
          draggable: false,
          prevArrow: false,
          nextArrow: false
        }
      }
    ]
  });
  $('.responsive').slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 3,
    prevArrow: false,
    nextArrow: false,
    dotsClass: 'before-slider__dots',
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });

  $('.menu-button').on('click', function(){
    $('.menu').toggleClass('menu_active');
  });
  $("a[href^='#']").click(function() {
    var _href = $(this).attr("href");
    $("html,body").animate({scrollTop: $(_href).offset().top -120 + "px"});
    return false;
  });
  $('[type="tel"]').mask("+7 (999) 999-99-99");
  //Показывать карту только, когда докрутили до нее
  var reviews = $('.reviews');
  var reviewsTop = reviews.offset().top;
  $(window).bind('scroll', function() {
    var windowTop = $(this).scrollTop();
    if (windowTop > reviewsTop) {
      $('#map').html('<script type="text/javascript" charset="utf-8" async src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3Ac01541123bc290ebd3398e39acd4236df811975ef15656b01f26021d654103be&amp;width=100%25&amp;height=410&amp;lang=ru_RU&amp;scroll=false"></script>')
      $(window).unbind('scroll')
    }
  });
  /*Слайдер для отзывов
  $('.multiple-items').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    dots: true,
    dotsClass: 'before-slider__dots',
  });*/
});