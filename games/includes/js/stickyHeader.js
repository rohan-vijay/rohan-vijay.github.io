$(window).scroll(function(){
    $(".sticky").css("top",Math.max(40,140-$(this).scrollTop()));
});

