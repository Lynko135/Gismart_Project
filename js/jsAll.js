
$(document).ready(function(){
    $(window).scroll(function() {
        var height = $(window).scrollTop();
        var width = $(window).width();
        if(height > 1700 && width > 1250){
            $('#show').addClass('anim1');
        }
        if(height > 800 && width < 1250 && width > 768){
            $('#show').addClass('anim1');
        }
        if(height > 800 && width < 768){
            $('#show').addClass('anim1');
        }
    });
    $(window).scroll(function() {
        var height = $(window).scrollTop();
        var width = $(window).width();
        if(height > 1700 && width > 1250){
            $('#show1').addClass('anim2');
        }
        if(height > 800 && width < 1250 && width > 768){
            $('#show1').addClass('anim2');
        }
        if(height > 1000 && width < 768){
            $('#show1').addClass('anim2');
        }  
    });
    $(window).scroll(function() {
        var height = $(window).scrollTop();
        var width = $(window).width();
        if(height > 1700 && width > 1250){
            $('#show2').addClass('anim3');
        }
        if(height > 800 && width < 1250 && width > 768){
            $('#show2').addClass('anim3');
        }
        if(height > 1200 && width < 768){
            $('#show2').addClass('anim3');
        }
    });
    $(window).scroll(function() {
        var height = $(window).scrollTop();
        var width = $(window).width();
        if(height > 1900 && width > 1250){
            $('#nimbersAnim').css("opacity", "1");
            $('#nimbersAnim').css("paddingTop", "50px");
        }
        if(height > 900 && width < 1250){
            $('#nimbersAnim').css("opacity", "1");
            $('#nimbersAnim').css("paddingTop", "70px");
        }
        if(height > 1000 && width < 768){
            $('#nimbersAnim').css("opacity", "1");
            $('#nimbersAnim').css("paddingTop", "60px");
        }
    });
    $(".main_input_file").change(function() {
        var f_name = [];
        for (var i = 0; i < $(this).get(0).files.length; ++i) {
            f_name.push(" " + $(this).get(0).files[i].name);
        }
        $("#f_name").val(f_name.join(", "));
    });
    $('.sorry').click(function(){
        alert ('Oops! Something went wrong!')
    });
    $("#open").click(function (){
        $("#menu").css("right", "0");
        $("#menu").css("display", "flex");
        $(this).css("display", "none");
        $("#close").css("display", "block");
    })
    $("#close").click(function (){
        $("#menu").css("right", "-1000px");
        $("#menu").css("display", "none");
        $(this).css("display", "none");
        $("#open").css("display", "block");
    });
    $("h1").css("opacity", "0");
    $("h1").addClass('zagAnim');
});
