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

    $(window).on('mousewheel', function(e) {
        console.log(e.delta);
        if(e.delta==10){
            $('html,body').stop().animate({ scrollTop: $('.box-3').offset().top }, 1000);
        }
    })
    
});
