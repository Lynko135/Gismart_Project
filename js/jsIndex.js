$(document).ready ( function(){
    $("h1").css("opacity", "1");
    $(window).scroll(function() {
        var height = $(window).scrollTop();
        var width = $(window).width();
        if(height > 2900 && width > 1250){
            $('#map>img').css("opacity", "1");
            $('#map>img').css("paddingTop", "10px");
            $('#map>img:nth-of-type(2)').css("transitionDelay", ".5s");
            $('#map>img:nth-of-type(3)').css("transitionDelay", ".7s");
            $('#map>img:nth-of-type(4)').css("transitionDelay", ".9s");
            $('#map>img:nth-of-type(5)').css("transitionDelay", "1.1s");
        }
        if(height > 1700 && width < 1250 && width > 950){
            $('#map>img').css("opacity", "1");
            $('#map>img').css("paddingTop", "10px");
            $('#map>img:nth-of-type(2)').css("transitionDelay", ".5s");
            $('#map>img:nth-of-type(3)').css("transitionDelay", ".7s");
            $('#map>img:nth-of-type(4)').css("transitionDelay", ".9s");
            $('#map>img:nth-of-type(5)').css("transitionDelay", "1.1s");
        }
        if(height > 1600 && width < 950 && width > 768){
            $('#map>img').css("opacity", "1");
            $('#map>img').css("paddingTop", "10px");
            $('#map>img:nth-of-type(2)').css("transitionDelay", ".5s");
            $('#map>img:nth-of-type(3)').css("transitionDelay", ".7s");
            $('#map>img:nth-of-type(4)').css("transitionDelay", ".9s");
            $('#map>img:nth-of-type(5)').css("transitionDelay", "1.1s");
        }
        if(height > 1800 && width < 768){
            $('#map>img').css("opacity", "1");
            $('#map>img').css("paddingTop", "10px");
            $('#map>img:nth-of-type(2)').css("transitionDelay", ".5s");
            $('#map>img:nth-of-type(3)').css("transitionDelay", ".7s");
            $('#map>img:nth-of-type(4)').css("transitionDelay", ".9s");
            $('#map>img:nth-of-type(5)').css("transitionDelay", "1.1s");
        }
    });
    $(window).scroll(function() {
        var height = $(window).scrollTop();
        var width = $(window).width();
        if(height > 5200 && width > 1550){
            $('.productText').css("opacity", "1");
            $('.productText').css("paddingTop", "10px");
            $('.productText:nth-of-type(1)').css("transitionDelay", ".5s");
            $('.productText:nth-of-type(2)').css("transitionDelay", ".7s");
            $('.productText:nth-of-type(3)').css("transitionDelay", "1.3s");
            $('.productText:nth-of-type(4)').css("transitionDelay", "1.5s");
        }
    });
    $(window).scroll(function() {
        var height = $(window).scrollTop();
        var width = $(window).width();
        if(height > 4600 && width > 1250){
            $('.productText').css("opacity", "1");
            $('.productText').css("paddingTop", "10px");
            $('.productText:nth-of-type(1)').css("transitionDelay", ".5s");
            $('.productText:nth-of-type(2)').css("transitionDelay", ".7s");
            $('.productText:nth-of-type(3)').css("transitionDelay", "1.3s");
            $('.productText:nth-of-type(4)').css("transitionDelay", "1.5s");
        }
    });
    $(window).scroll(function() {
        var height = $(window).scrollTop();
        var width = $(window).width();
        if(height > 3500 && width < 1250 && width > 768){
            $('.productText').css("opacity", "1");
            $('.productText').css("paddingTop", "10px");
            $('.productText:nth-of-type(1)').css("transitionDelay", ".5s");
            $('.productText:nth-of-type(2)').css("transitionDelay", ".7s");
            $('.productText:nth-of-type(3)').css("transitionDelay", "1.3s");
            $('.productText:nth-of-type(4)').css("transitionDelay", "1.5s");
        }
        if(height > 4300 && width < 768){
            $('.productText').css("opacity", "1");
            $('.productText').css("paddingTop", "10px");
            $('.productText:nth-of-type(1)').css("transitionDelay", ".5s");
            $('.productText:nth-of-type(2)').css("transitionDelay", ".7s");
            $('.productText:nth-of-type(3)').css("transitionDelay", "1.3s");
            $('.productText:nth-of-type(4)').css("transitionDelay", "1.5s");
        }
    });
    $(window).scroll(function() {
        var height = $(window).scrollTop();
        var currentNumber = $('.number').text();
        var width = $(window).width();
        if(height > 4000 && width > 1250){
            $('.numberAnim').css("opacity", "1");
            $('.numberAnim').css("marginTop", "10px");
            $('.reviews .owl-carousel.owl-loaded').css("opacity", "1");
            $({numberValue: currentNumber}).animate({numberValue: 48}, {
                duration: 2000,
                easing: 'linear',
                step: function() { 
                    $('.number').text(Math.ceil(this.numberValue)); 
                }
            });
        }
        if(height > 1900 && width < 1250 && width > 768){
            $('.numberAnim').css("opacity", "1");
            $('.numberAnim').css("marginTop", "10px");
            $('.reviews .owl-carousel.owl-loaded').css("opacity", "1");
            $({numberValue: currentNumber}).animate({numberValue: 48}, {
                duration: 2000,
                easing: 'linear',
                step: function() { 
                    $('.number').text(Math.ceil(this.numberValue)); 
                }
            });
        }
        if(height > 2900 && width < 768){
            $('.numberAnim').css("opacity", "1");
            $('.numberAnim').css("marginTop", "10px");
            $('.reviews .owl-carousel.owl-loaded').css("opacity", "1");
            $({numberValue: currentNumber}).animate({numberValue: 48}, {
                duration: 2000,
                easing: 'linear',
                step: function() { 
                    $('.number').text(Math.ceil(this.numberValue)); 
                }
            });
        }
    });
    $('.comments').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        items:5,
        autoplay:true,
        autoplayTimeout:2500,
        autoplayHoverPause:true,
        responsive:{
            0:{
                items:1
            },
            580:{
                items:2.
            },
            960:{
                items:2.5
            },
            1220:{
                items:3
            },
            1550:{
                items:5
            }
        }
    });
    $('.loop').owlCarousel({
        center: true,
        items:1,
        loop:true,
        nav:true,
        
        responsive:{
            1550:{
                items:2.3,
                margin:220,
            },
            1250: {
                items:2.2,
            },
            700: {
                margin:10,
                items:1,
            },
            400: {
                items:1,
            }
        }
    });
    $('.all').css("display", "block");
    $('.all').css("opacity", "1");
    $('#apps').click(function(){
        $('.all').css("display", "none");
        $('.games').css("display", "none");
        $('.apps').css("opacity", "1");
        $('.apps').css("display", "block");
    });
    $('#all').click(function(){
        $('.apps').css("display", "none");
        $('.games').css("display", "none");
        $('.all').css("opacity", "1");
        $('.all').css("display", "block");
    });
    $('#games').click(function(){
        $('.all').css("display", "none");
        $('.apps').css("display", "none");
        $('.games').css("opacity", "1");
        $('.games').css("display", "block");
    });
    $('.blogs').owlCarousel({
        center: true,
        items:1,
        loop:true,
        nav:true,
        margin:0,
    });
});




