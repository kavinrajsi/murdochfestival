import $ from 'jquery';
window.jQuery = $;
window.$ = $;

$(document).ready(function() {
    $('.menu--item__link:not([data-toggle]), .button--out__more').click(function(e) {
        e.preventDefault();
        var target = $(this).attr('href');

        var headerHeight = $('.nav--dark_bg').height();

        $('html, body').animate({
            scrollTop: $(target).offset().top - 110
        }, 400);
    });
});