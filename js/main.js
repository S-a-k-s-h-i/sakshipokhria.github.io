console.log("hello");
$(document).ready(function(){
    $(window).scroll(function(){
        var positiontop=$(document).scrollTop();
        console.log(positiontop);
        if(positiontop>1500){
            $('.flex').addClass('animate__animated animate__bounce');
        }
    });
});


$(document).ready(function(){
    $(window).scroll(function(){
        let oTop=$(".proj").offset().top-window.innerHeight;
        if($(window).scrollTop()>oTop){
            $('.proj').addClass('animate__animated animate__zoomIn');
        }
    });
});
$(document).ready(function(){
    $(window).scroll(function(){
        let oTop=$("#about").offset().top-window.innerHeight;
        if($(window).scrollTop()>oTop){
            $('#about').addClass('animate__animated animate__zoomIn');
        }
    });
});



let navbar=$(".navbar");
$(window).scroll(function(){
    let oTop=$("#about").offset().top-window.innerHeight;
    if($(window).scrollTop()>oTop){
        navbar.addClass('sticky');
    }else{
        navbar.removeClass("sticky");
    }
});

$("a").click(function(){
  var pageId = $(this).attr("data-page");
  $("html, body").animate({ scrollTop: $("#"+pageId).offset().top }, 1000);
});


