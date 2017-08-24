var OP = (function (op, $) {
    if (typeof $ === 'undefined') {
        throw new Error('site.js requires jQuery');
    }

    var $body =         $('body'),
        bodyNavOpen =   'body--nav-open',
        $navBar =       $('.navigation'),
        $menuButton =   $('.js-menu-button'),
        $navMenu =      $('.js-nav-menu');

    var resizeTimer;

    $(window).on('resize', function () {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(closeMenuOnDelay, 100);
    });

    function closeMenuOnDelay() {

        if($('.navigation__header').css('width') != '48px') { // if mobile
            closeMenu();
            xToHam();
            $body.removeClass(bodyNavOpen);
        }
        else {
            $navMenu.css('display', '');
            xToHam();
            $body.removeClass(bodyNavOpen);
        }
    }

    $menuButton.on('click', function () {
        navToggle();
    });

    function navToggle() {
        if (!$body.hasClass(bodyNavOpen)) {
            openMenu();
            hamToX();
            $body.addClass(bodyNavOpen);
        } else {
            closeMenu();
            xToHam();
            $body.removeClass(bodyNavOpen);
        }
    }

    function openMenu() {
        $navBar.removeClass('js-collapsed');
        if($('.navigation__header').css('width') != '48px') { // if mobile
            $navMenu.slideDown(400, "swing");
        }
    }

    function closeMenu() {
        $navBar.addClass('js-collapsed');
        if($('.navigation__header').css('width') != '48px') { // if mobile
            $navMenu.slideUp(400, "swing");
        }
    }

    function hamToX() {
        $menuButton.addClass('menu-icon--x');
    }

    function xToHam() {
        $menuButton.removeClass('menu-icon--x');
    }

    return op;
}(OP || {}, jQuery));
