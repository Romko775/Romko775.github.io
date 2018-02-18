$(window).on('load', function () {
    var preloader = $('.preloader'),
        preloader_animation = preloader.find('.preloader_animation');
    preloader_animation.fadeOut(1200);
    preloader.delay(350).fadeOut('slow', function(){
        $('#loaded').fadeIn(1500);
        $('.text, #thumbArrowDown, #thumbArrowUp').css('opacity', '1').addClass('animated jackInTheBox');
    });
});