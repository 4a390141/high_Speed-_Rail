$(document).ready(function () {
    $('ul li').css("cursor","pointer");
/*    $('.first_rwd').attr("href", "first_rwd.html");
    $('.porridge_rwd').attr("href", "porridge_rwd.html");
    $('.tag').attr("href", "tag.html");  */
    $('.first_rwd').click(function(){
        window.location.assign("rwd/first_rwd.html",9000);
    });
    $('.porridge_rwd').click(function(){
        window.location.assign("rwd/porridge_rwd.html");
    });
    $('.tag').click(function(){
        window.location.assign("jq/tag.html");
    });
    $('.full_page').click(function(){
        window.location.assign("jq/full_page.html");
    });
});
