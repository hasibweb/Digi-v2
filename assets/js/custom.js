(function ($) {

    $(document).ready(function () { });

    $(window).on("load", function () {
        preloader();
    });

    /////// Preloader ///////
    function preloader() {
        $(".se-pre-con").fadeOut("slow", function () {
            $(this).remove();
        });
    }
})(jQuery);