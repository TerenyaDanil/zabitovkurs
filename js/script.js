(function($) {
    "use strict";
    let v = document.getElementById("video")

    $('.ham').click(function(e){
        e.preventDefault()
        $('.ham').toggleClass("is-active");
        $('.menu').toggleClass("_active");
        $('.menuBg').toggleClass("_active");
        $('.menuWrapper').toggleClass("_active");
    });

    $('.menuLink').click(function(e){
        e.preventDefault()
        $('.ham').toggleClass("is-active");
        $('.menu').toggleClass("_active");
        $('.menuBg').toggleClass("_active");
        $('.menuWrapper').toggleClass("_active");
    });

    $('#spanOne').click(function(e){
        e.preventDefault()
        $('#questionOne').toggleClass("_active");
        $('.oneMinus').toggleClass("_active");
        $('.onePlus').toggleClass("_active");
    });

    $('#spanTwo').click(function(e){
        e.preventDefault()
        $('#questionTwo').toggleClass("_active");
        $('.twoMinus').toggleClass("_active");
        $('.twoPlus').toggleClass("_active");
    });

    $('#spanThree').click(function(e){
        e.preventDefault()
        $('#questionThree').toggleClass("_active");
        $('.threeMinus').toggleClass("_active");
        $('.threePlus').toggleClass("_active");
    });

    $('#spanFour').click(function(e){
        e.preventDefault()
        $('#questionFour').toggleClass("_active");
        $('.fourMinus').toggleClass("_active");
        $('.fourPlus').toggleClass("_active");
    });

    $('.playImg').click(function(e){
        e.preventDefault()
        $('.playImg').removeClass("_active");
        v.controls = true
        v.play()
        console.log(1)
    });

    v.addEventListener("pause", () => {
        v.controls = false
        $('.playImg').addClass("_active")
        console.log(2)
    })

    v.addEventListener("play", () => {
        v.controls = true
        $('.playImg').removeClass("_active")
        console.log(3)
    })


    $('.smoothScroll').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 1000); // The number here represents the speed of the scroll in milliseconds
                return false;
            }
        }
    });



})(jQuery);