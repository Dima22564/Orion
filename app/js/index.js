$(document).ready(function () {
  $(".currecy-select")
    .selectmenu({
      classes: {
        "ui-selectmenu-button-closed": "drop-menu-currecy-select",
        "ui-selectmenu-button-open": "drop-menu-currecy-select",
        "ui-menu-item-wrapper": "drop-menu",
      },
      icons: { button: "custom-icon" },
      transferClasses: true,
      focus: function (event, ui) {
        $(ui).addClass('custom');
      },
    })

    .selectmenu("menuWidget")

  function date(parent) {
    $(parent).on('input', function () {
      let val = $(parent).find('input').val();
      $(parent).find('.js-out').html(val);

    })
  }

  date('.js-date-1')
  date('.js-date-2')
  date('.js-date-3')
  date('.js-date-4')
  date('.js-date-5')
  date('.js-date-6')

  $(".currency-select-1")
    .selectmenu({
      classes: {
        "ui-selectmenu-button-closed": "drop-menu-currecy-select-1",
        "ui-selectmenu-button-open": "drop-menu-currecy-select-1",
        "ui-menu-item-wrapper": "drop-menu",
      },
      icons: { button: "custom-icon" },
      transferClasses: true,
      focus: function (event, ui) {
        $(ui).addClass('custom');
      },
    })

    .selectmenu("menuWidget")

  $('.js-copy').click(function (e) {
    e.preventDefault();
    var refLink = $(this).parent().find('.js-copy-text');
    refLink.select();
    document.execCommand('copy');
    window.getSelection().empty();
  });

  $('.js-add-wallet').click(function (e) {
    e.preventDefault();
    $('.js-add-wallet-1').fadeIn();
    $('body').css('overflow', 'hidden')
  })

  $('.js-close').click(function (e) {
    e.preventDefault();
    $('.popup-wrapper').fadeOut();
    $('body').css('overflow', 'visible')
  })

  $('.popup-wrapper').click(function (e) {
    if ($(e.target).hasClass('popup-body')) {
      $(this).fadeOut();
      $('body').css('overflow', 'visible')
    }
  })

  $('.js-next-step').click(function(e){
    e.preventDefault();
    $('.js-add-wallet-1').fadeOut(300, function(e){
      $('.js-add-wallet-2').fadeIn();
    })
  })

  $('.js-go-back-to-1').click(function(e){
    e.preventDefault();
    $('.js-add-wallet-2').fadeOut(300, function(e){
      $('.js-add-wallet-1').fadeIn();
    })
  })

  $('.js-tab-btn').click(function(e){
    e.preventDefault();
    $('.js-tab-btn').removeClass('active');
    $(this).addClass('active');
    var attr = $(this).attr('data-tab');
    $('.tabs .tab').hide();
    $('.tabs').find(`.tab-${attr}`).show();
  })

  $('.js-sidebar-line').hover(function(e){
    if(screen.width < 1200){
      $(this).css('transform', 'translateX(-300%)')
      $('.js-sidebar-wrapper').css('transform', 'translateX(0)')

    }
  })
  $('.js-sidebar-wrapper').hover(function(){
    if(screen.width < 1200){
      $(this).css('transform', 'translateX(0)')
      $('.js-sidebar-line').css('transform', 'translateX(-300%)')

    }
  }, function(){
    if(screen.width < 1200){
      $(this).css('transform', 'translateX(-300%)')
      $('.js-sidebar-line').css('transform', 'translateX(0)')

    }
  })

  $('.js-sidebar-line').click(function(e){
    if(screen.width < 1200){
      e.stopPropagation()
      $(this).css('transform', 'translateX(-300%)')
      $('.js-sidebar-wrapper').css('transform', 'translateX(0)')

    }
  })

  $('body').click(function(e){
    if(screen.width < 1200){
      e.stopPropagation()
      if($(e.target).hasClass('js-sidebar-wrapper') == false){
        console.log(e.target)
        $('.js-sidebar-wrapper').css('transform', 'translateX(-300%)')
        $('.js-sidebar-line').css('transform', 'translateX(0)')
      }
    }
  })

  $(window).on('resize', function(e){
    if(screen.width > 1200){
      $('.js-sidebar-wrapper').css({
        transform: 'translateX(0)'
      })
    }
    else if(screen.width < 1200){
      $('.js-sidebar-wrapper').css({
        transform: 'translateX(-300%)'
      })
    }
  })


  $('.js-sidebar-wrapper').hover(function(e){
    $(this).css({
      position: 'absolute'
    })
    $('body').css({
      paddingLeft: '72px'
    })
    setTimeout(function(){
      $('.js-sidebar-wrapper').addClass('open')

    }, 350)
  }, function(e){
    $(this).removeClass('open')
    setTimeout(function(){
      $('.js-sidebar-wrapper').css({
        position: 'initial'
      })
      $('body').css({
        paddingLeft: '0'
      })

    }, 350)
  })
});