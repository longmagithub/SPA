/**
 * Created by MAL on 10/1/16.
 */
$(document).ready(function() {
    //Set up intro text animation with delays
    setTimeout(
        function()
        {
            //do something special
            $("#intro_channel").css("visibility","visible").addClass('animated zoomIn');
        }, 300);
    setTimeout(
        function()
        {
            //do something special
            $("#intro_news").css("visibility","visible").addClass('animated bounceInLeft');
        }, 800);
    setTimeout(
        function()
        {
            //do something special
            $("#intro_con").css("visibility","visible").addClass('animated bounceInRight');
        }, 1200);
    setTimeout(
        function()
        {
            //do something special
            $("#intro_main").css("visibility","visible").addClass('animated slideInUp');
        }, 2000);
    $(function() {
        $('a[href*="#"]:not([href="#"])').click(function() {
            if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
                if (target.length) {
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 800);
                    return false;
                }
            }
        });
    });
});