
$(document).ready(function () {

    $('.hamburger').click(function(){
        
        $('ul').stop().toggleClass('nav-show');
    });
    $('.hamburger').mouseenter(function(){
        $('.hamburger span').css("line-height","51px").text("點我");
    })
    
    $('.hamburger').mousedown(function(){
        $('.hamburger span').css("transform","scale(0)");
    })
    $('.hamburger').mouseup(function(){
        $('.hamburger span').css("transform","scale(1)");
    })
    $('.hamburger').mouseleave(function(){
        $('.hamburger span').css("transform","scale(1)");
        $('.hamburger span').text("");
    })
});