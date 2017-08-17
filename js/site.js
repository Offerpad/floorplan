var OP = (function (op, $) {
    if (typeof $ === 'undefined') {
        throw new Error('site.js requires jQuery');
    }

    var $body =     $('body'),
        $menuButton = $('.js-menu-button'),
        $navMenu =  $('.js-nav-menu');

    $menuButton.on('click', function () {
        navToggle();
    });

    function navToggle() {
        if (!$body.hasClass('js-nav-open')) {
            openMenu();
            hamToX();
            $body.addClass('js-nav-open');
        } else {
            closeMenu();
            xToHam();
            $body.removeClass('js-nav-open');
        }
    }

    function openMenu() {
        $navMenu.slideDown('fast');
    }

    function closeMenu() {
        $navMenu.slideUp('fast');
    }

    function hamToX() {
        $menuButton.addClass('menu-icon--x');
    }

    function xToHam() {
        $menuButton.removeClass('menu-icon--x');
    }

    return op;
}(OP || {}, jQuery));
