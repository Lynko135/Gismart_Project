$(document).ready(function(){
    $('.all').css("display", "flex");
    $('#more').click(function(){
        $('.all').css("height", "auto")
    });
    $('#apps').click(function(){
        var width = $(window).width();
        $('.all').css("display", "none");
        $('.games').css("display", "none");
        $('.apps').css("display", "flex");
        $('.apps').css("height", "775px")
        $('#more').click(function(){
            $('.apps').css("height", "auto")
        });
    });
    $('#all').click(function(){
        var width = $(window).width();
        $('.apps').css("display", "none");
        $('.games').css("display", "none");
        $('.all').css("display", "flex");
        $('.all').css("height", "775px")
        $('#more').click(function(){
            $('.all').css("height", "auto")
        });
    });
    $('#games').click(function(){
        var width = $(window).width();
        $('.all').css("display", "none");
        $('.apps').css("display", "none");
        $('.games').css("display", "flex");
        $('.games').css("height", "775px")
        $('#more').click(function(){
            $('.games').css("height", "auto")
        });
    });
    $("h1").css("opacity", "0");
    $("h1").addClass('zagAnim');
    $(".header .containerMy > div:nth-of-type(3)").addClass('zagAnim');
    $('.header').addClass('back');
  });
