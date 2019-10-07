
$(function(){

  //显示导航栏并禁止页面滚动
  $('.navbar-toggler').click(function(){
    $('body').addClass('noscroll');
    $('.s-right-nav').show();
  });
  //隐藏导航栏
  $('.close').click(function(){
    $('body').removeClass('noscroll');
    $('.s-right-nav').hide();
  });
  //折叠菜单显示隐藏
  $('.s-nav-list').click(function(){
    var thisClass = $(this).attr('class');
    if (thisClass.indexOf('toggle') != -1) {
      //隐藏
      $('.s-nav-list').removeClass('toggle');
      $(this).removeClass('toggle');
      $(this).find('.s-subnav-lists').hide();
    }else{
      //显示
      $('.s-nav-list').removeClass('toggle');
      $(this).addClass('toggle');
      $(this).find('.s-subnav-lists').show();
    }
  });

  $('.z-solution-nav-item').click(function(){
    var length = $('.z-solution-nav-item').length;
    var index = $(this).index();
    $('.z-solution-nav-item').removeClass('active-title');
    $(this).addClass('active-title');
    $('.z-solution-item').hide();
    $('.z-solution-item').eq(index).show();
    if (index > 0 && index < length-1) {
      var width = index*25*(index-1);
      $('.z-solution-main-title').css({'transform':'translate3d(-'+width+'px, 0px, 0px)'});
    }
  });

  //底部折叠
  $('.s-description').click(function(){
    var thisClass = $(this).attr('class');
    if (thisClass.indexOf('s-description-active') != -1) {
      //隐藏
      $('.s-description').removeClass('s-description-active');
      $(this).removeClass('toggle');
    }else{
      //显示
      $('.s-description').removeClass('s-description-active');
      $(this).addClass('s-description-active');
    }
  });
  //transition-duration: 3500ms; transform: translate3d(-3285.06px, 0px, 0px);
  var px = 0;
  var times = 200;
  setInterval(function(){
    $('#cooperate-brand').css({'transform':'translate3d(-'+px+'px, 0px, 0px)'});
    if (px >= 2180) {
      px = 0;
    }else{
      px = px+20;
    }
  },times);


  var windowHeight = $(window).height(),$body = $("body");
  $body.css("height", windowHeight); 
  var startX = 0;
  var startY = 0;
  $('.swiper-slide').on("touchstart", function(e) {
      e.preventDefault();
      startX = e.originalEvent.changedTouches[0].pageX,
      startY = e.originalEvent.changedTouches[0].pageY;
  });

  $('.s-product-content .swiper-slide').on('touchmove',function(e){

    e.preventDefault();
    moveEndX = e.originalEvent.changedTouches[0].pageX;
    moveEndY = e.originalEvent.changedTouches[0].pageY;

    X = moveEndX - startX,
    Y = moveEndY - startY;
    var index = $(this).index();

    var length = $('#product').children('.swiper-slide').length;

    if (X > 0) {
      if (index-1 > 0) {
        var activeWidth = $(this).css('width');
        var widthNum = (activeWidth.substr(0,activeWidth.length-2)*(index-1));
        $('#swiper-slide').css({'transform':'translate3d(-'+widthNum+'px, 0px, 0px)'});
        $(this).removeClass('swiper-slide-duplicate-active');

        $('#product_list .s-swiper-phone').children('.swiper-pagination-bullet').eq(index).removeClass('swiper-pagination-bullet-active');

        $('#product_list .s-swiper-phone').children('.swiper-pagination-bullet').eq(index-1).addClass('swiper-pagination-bullet-active');

        $('#product_list .swiper-slide').eq(index-1).addClass('swiper-slide-duplicate-active');
      }else{
        $('#product_list .s-swiper-phone').children('.swiper-pagination-bullet').removeClass('swiper-pagination-bullet-active');

        $('#product_list .s-swiper-phone').children('.swiper-pagination-bullet').eq(0).addClass('swiper-pagination-bullet-active');

        $('#product_list .swiper-slide').removeClass('swiper-slide-duplicate-active');
        $('#product_list .swiper-slide').eq(0).addClass('swiper-slide-duplicate-active');
      }
    }else{
      var activeWidth = $(this).css('width');
      var widthNum = (activeWidth.substr(0,activeWidth.length-2)*(index+1));
      $('#swiper-slide').css({'transform':'translate3d(-'+widthNum+'px, 0px, 0px)'});
      if (index+1 < length) {
        $(this).removeClass('swiper-slide-duplicate-active');

        $('#product_list .s-swiper-phone').children('.swiper-pagination-bullet').eq(index).removeClass('swiper-pagination-bullet-active');

        $('#product_list .s-swiper-phone').children('.swiper-pagination-bullet').eq(index+1).addClass('swiper-pagination-bullet-active');

        $('#product_list .swiper-slide').eq(index+1).addClass('swiper-slide-duplicate-active')
      }
    
    }
    
  });

   $('.s-fubei-introduce-container .swiper-slide').on('touchmove',function(e){

    e.preventDefault();
    moveEndX = e.originalEvent.changedTouches[0].pageX;
    moveEndY = e.originalEvent.changedTouches[0].pageY;

    X = moveEndX - startX,
    Y = moveEndY - startY;

    var length = $('.s-fubei-introduce-container .swiper-slide').length;
    var index = $(this).index();
    if (X > 0) {
      if (index-1 <= length-1) {
        var width = $(this).css('width');
        width = (37.5-width.substr(0,width.length-2))*(index-1);
        if (width >= 0) {
          width = 37.5;
        }
        $('.s-fubei-introduce-container .swiper-wrapper').css({'transition-duration': '300ms','transform':'translate3d('+width+'px, 0px, 0px)'})
        
        var t=setTimeout(function(){
          $('.s-fubei-introduce-container .swiper-wrapper').css({'transition-duration': '0ms','transform':'translate3d('+width+'px, 0px, 0px)'});
        },600);
      }
    }else{
      if (index+1 <= length-1) {
      var width = $(this).css('width');
        width = (37.5-width.substr(0,width.length-2))*(index+1);
        if (width >= 0) {
          width = 37.5;
        }
        console.log(width);
        $('.s-fubei-introduce-container .swiper-wrapper').css({'transition-duration': '300ms','transform':'translate3d('+width+'px, 0px, 0px)'})
        var t=setTimeout(function(){
          $('.s-fubei-introduce-container .swiper-wrapper').css({'transition-duration': '0ms','transform':'translate3d('+width+'px, 0px, 0px)'});
        },600);
      }
    }
  });
});

















