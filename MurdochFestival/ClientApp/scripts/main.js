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

    var burgermenu  = ('#nav-burgermenu');
    var burgermenuIcon  = ('.buger-menu-icon');
    var menuList  = ('.menu.list-inline');

    $('#nav-burgermenu').click(function(e){
        e.preventDefault();
        $(burgermenu).toggleClass('active');
        $(burgermenuIcon).toggleClass('active');
        $(menuList).toggleClass('menu-drawer-open');
    });

    $('.menu--item__link').click(function(e){
        if($(window).width() <= 767){
            e.preventDefault();
            var target = $(this).attr('href');
            $(burgermenu).toggleClass('active');
            $(burgermenuIcon).toggleClass('active');
            $(menuList).toggleClass('menu-drawer-open');
        }
    });

});