jQuery(document).ready( function($) {
    $(this).scroll(function() {
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        if (scrollTop > 10) {
            $(this).find('.beco__search')[0].classList.add('beco__search_scrolled');
            if (window.matchMedia('screen and (max-width: 767px)').matches) {
                $(this).find('.search__icon')[0].classList.add('search__icon_scrolled');
            }
        }
        else {
            $(this).find('.beco__search')[0].classList.remove('beco__search_scrolled');
            if (window.matchMedia('screen and (max-width: 767px)').matches) {
                $(this).find('.search__icon')[0].classList.remove('search__icon_scrolled');
            }
        }
    })
});