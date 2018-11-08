$(document).ready(function () {
    $('li').css("cursor","pointer");
    $('.content').hide().first(0).show().addClass('active');
    $('li').click(function(e){
        var index = $(this).index(); 
        $('.content.active').removeClass('active').stop().fadeOut(function(){
            $('.content').eq(index).stop().fadeIn(500).addClass('active');
        });

    });
});