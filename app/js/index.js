$(document).ready(function () {
  $('.js-burger-icon').click(function(e){
    $('.js-burger-menu').slideToggle();
    if(screen.width < 991){
      $('.js-main-wrapper').toggleClass('active')
    }
  });

  $('.js-main-wrapper').click(function(){
    if(screen.width < 991){
      $('.js-burger-menu').slideUp();
      $(this).removeClass('active');

    }
  })

  // Slider under  header
  $('.js-slider-header').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    prevArrow: $('.js-btn-prev'),
    nextArrow: $('.js-btn-next'),
  })
  $('.js-second-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    centerMode: true,
    variableWidth: true,
    prevArrow: $('.second-slider-prev-btn'),
    nextArrow: $('.second-slider-next-btn'),
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
          variableWidth: false,

        }
      },
    ]
  })

  if(screen.width > 991){
    $('.js-burger-menu').slideDown();
  }
  else{
    $('.js-burger-menu').hide();
  }

  $(window).on('resize', function(){
    if(screen.width > 991){
      $('.js-burger-menu').slideDown();
    }
    else{
    $('.js-burger-menu').hide();

    }
  })

  // popup
  $('.js-popup').click(function(e){
    if($(e.target).hasClass('popup-body')){
      closePopup();
    }
  })

  $('.js-btn-more').click(openPopup);

  $('.js-close').click(closePopup)

  function closePopup(){
    $('.js-popup').fadeOut();
  }

  function openPopup(e){
    e.preventDefault();
    $('.js-popup').fadeIn();
  }

  // drop-link
  $('.js-drop-link').click(function(e){
    $('.js-drop-down-links').slideToggle();
    $(this).toggleClass('active')
  })
  $('.js-drop-down-links').hover(function(){
    return 1
  }, function(){
    $(this).slideUp();
    $('.js-drop-link').removeClass('active');
  })
});