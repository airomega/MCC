$(document).ready(function(){
    $("#bounce").click(function(){
        $(this).fadeOut('fast');
    });
    
    $("#bounce").hover(function(){
        $(this).addClass("red");
    });

});