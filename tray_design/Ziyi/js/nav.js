window.onload=window.onresize=function(){
    /********nav********/
    $('.iconNav').click(function(){
        showNav();
    });

    $('.iconClose').click(function(){
        hideNav();
    });

    $('.navcon li').click(function(){
        if($(window).width()<=640){
            hideNav();
        }

    });

    function showNav(){
        $('.iconNav').css("display","none");
        $('.iconClose').css("display","block");
        $('.navcon').css("display","block");
        $('.nav').addClass("navAfter");
    }

    function hideNav(){
        $('.iconNav').css("display","block");
        $('.iconClose').css("display","none");
        $('.navcon').css("display","none");
        $('.nav').removeClass("navAfter");
    };


};


