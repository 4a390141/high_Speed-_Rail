$(document).ready(function () {
    $('.a').click(function () {
        $('html,body').stop().animate({ scrollTop: $('.box-1').offset().top }, 1000);
    });
    $('.b').click(function () {
        $('html,body').stop().animate({ scrollTop: $('.box-2').offset().top }, 1000);
    });
    $('.c').click(function () {
        $('html,body').stop().animate({ scrollTop: $('.box-3').offset().top }, 1000);
    });

});