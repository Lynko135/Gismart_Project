$(document).ready ( function(){
    $("h1").css("opacity", "0");
    $("h1").addClass('zagAnim');
    $("#submit").addClass('zagAnim');
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        items:1,
        animateOut: 'fadeOut'
    })
});

