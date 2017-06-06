$(document).ready(function(){
    
    $(".menu-btn").click(function(){
        $(this).toggleClass('open');
        $('.mobileMenu ul').slideToggle();
        return false;
    });
    
});

$(window).scroll(function(){
    if($(window).scrollTop() > 150){
        $("body").addClass("header_active")
    }
    else {
        $("body").removeClass("header_active")
    }
})
