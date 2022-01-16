$(window).scroll(function (event) {
    function footer() {
        var scroll = $(window).scrollTop();
        if (scroll > 20) {
            $(".footer ").fadeIn("slow ").removeClass("show ");
        } else {
            $(".footer ").fadeOut("slow ").removeClass("show ");
        }
  
        clearTimeout($.data(this, 'scrollTimer'));
        $.data(this, 'scrollTimer', setTimeout(function () {
            if ($('.footer').is(':hover')) {
                footer();
            } else {
                $(".footer ").fadeOut("slow ");
            }
        }, 2000));
    }
    footer();
  });