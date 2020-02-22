jQuery(document).ready( function($) {
    $('.sidebar__tongue').click(function() {
        $(this).parent('.sidebar')[0].classList.toggle('sidebar_opened');
        $(this).parent('.sidebar').find('.sidebar__title')[0].classList.toggle('sidebar__title_opened');
        var sidebartext = $(this).parent('.sidebar').find('.sidebar__text');
        for (var i = 0; i < sidebartext.length; i++) {
            sidebartext[i].classList.toggle('sidebar__text_opened');
        }
        if ($(this).parent('.sidebar')[0].classList.contains('sidebar_opened'))
          $(this).find('#svg-logo-tongue').attr("xlink:href", "assets/img/icon-exit.svg");
        else
          $(this).find('#svg-logo-tongue').attr("xlink:href", "assets/img/icon-burger.svg");

        if (window.matchMedia('screen and (max-width: 767px)').matches) {
            $(this).parent('.sidebar').find('.sidebar__logo')[0].classList.toggle('sidebar__logo_opened');
            $(this).parent('.sidebar').find('.sidebar__header')[0].classList.toggle('sidebar__header_opened');
            $(this).parent('.sidebar').find('.sidebar__menu')[0].classList.toggle('sidebar__menu_opened');
        }
    });
    $('.sidebar__item').click(function() {
        $('.beco__title')[0].innerHTML = $(this).find('.sidebar__text')[0].innerHTML;
    });
});