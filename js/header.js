$(function () {
    $('header').load('header.html .head', sw);

    function sw() {
        $('.buger-wrap').on('click', swift);

        function swift() {
            $('.menu_icon').toggleClass('active');
            $('.hidden-menu').toggleClass('active');
        };
    };
});
