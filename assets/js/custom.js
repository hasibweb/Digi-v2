(function ($) {

    $(document).ready(function () {
        searchSuggestionToggle();
    });

    $(window).on("load", function () {
        preloader();
    });

    /////// Preloader ///////
    function preloader() {
        $(".se-pre-con").fadeOut("slow", function () {
            $(this).remove();
        });
    }

    // Search Suggestion
    function searchSuggestionToggle() {
        $('.header_search_input').focus(function (e) {
            $(this).parent().find($('.search_suggestion')).removeClass('d-none')

        })
        $('.header_search_input').focusout(function (e) {
            $(this).parent().find($('.search_suggestion')).addClass('d-none')
        })
    }
})(jQuery);