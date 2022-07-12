
$(document).ready(function(){
    $(window).scroll(function() {
        var height = $(window).scrollTop();
        var width = $(window).width();
        if(height > 700){
            $('.line h5:eq(0)').css("opacity", "1");
            $('.line h5:eq(0)').css("paddingTop", "0");
            $('.line p:eq(0)').css("opacity", "1");
            $('.line p:eq(0)').css("paddingTop", "0");
        }
        if(height > 550 && width < 1260 && width > 768){
            $('.line h5:eq(0)').css("opacity", "1");
            $('.line p:eq(0)').css("opacity", "1");
        }
        if(height > 300 && width < 768){
            $('.line h5:eq(0)').css("opacity", "1");
            $('.line p:eq(0)').css("opacity", "1");
        }
    });
    $(window).scroll(function() {
        var height = $(window).scrollTop();
        var width = $(window).width();
        if(height > 1050 && width > 1260){
            $('.line h5:eq(1)').css("opacity", "1");
            $('.line h5:eq(1)').css("paddingTop", "0");
            $('.line p:eq(1)').css("opacity", "1");
            $('.line p:eq(1)').css("paddingTop", "0");
        }
        if(height > 500 && width < 1260 && width > 768){
            $('.line h5:eq(1)').css("opacity", "1");
            $('.line p:eq(1)').css("opacity", "1");
        }
        if(height > 750 && width < 768){
            $('.line h5:eq(1)').css("opacity", "1");
            $('.line p:eq(1)').css("opacity", "1");
        }
    });
    $(window).scroll(function() {
        var height = $(window).scrollTop();
        var width = $(window).width();
        if(height > 1400){
            $('.line h5:eq(2)').css("opacity", "1");
            $('.line h5:eq(2)').css("paddingTop", "0");
            $('.line p:eq(2)').css("opacity", "1");
            $('.line p:eq(2)').css("paddingTop", "0");
        }
        if(height > 1250 && width < 1260 && width > 768){
            $('.line h5:eq(2)').css("opacity", "1");
            $('.line p:eq(2)').css("opacity", "1");
        }
        if(height > 1800 && width < 768){
            $('.line h5:eq(2)').css("opacity", "1");
            $('.line p:eq(2)').css("opacity", "1");
        }
    });
    var windowHeight = $(window).height();
 
	$(document).on('scroll', function() {
		$('.block').each(function() {
			var self = $(this),
			height = self.offset().top + self.height();
			if ($(document).scrollTop() + windowHeight >= height) {
				self.addClass('blockAnimation')
			}
		});
	});

});
