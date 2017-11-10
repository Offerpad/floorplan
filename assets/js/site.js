var OP = (function (op, $) {
    if (typeof $ === 'undefined') {
        throw new Error('site.js requires jQuery');
    }

    var $body =         $('body'),
        bodyNavOpen =   'body--nav-open',
        $navBar =       $('.site-header'),
        $menuButton =   $('.js-menu-button'),
        $navMenu =      $('.js-nav-menu'),
        $fpMeasure =    $('.js-fp-measure');

    var resizeTimer;
    fpMeasureUpdate();

    $(window).on('resize', function () {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(closeMenuOnDelay, 100);
        fpMeasureUpdate();
    });

    function fpMeasureUpdate() {
        if ($fpMeasure) {
            $fpMeasure.attr('data-value', $(window).width() + " px");
        }
    }

    function closeMenuOnDelay() {
        $('.js-nav-drawer').hide();
        if($menuButton.css('display') != 'none') { // if mobile
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
        if($menuButton.css('display') != 'none') { // if mobile
            $navMenu.slideDown(400, "swing");
        }
    }

    function closeMenu() {
        $navBar.addClass('js-collapsed');
        if($menuButton.css('display') != 'none') { // if mobile
            $navMenu.slideUp(400, "swing");
        }
    }

    function hamToX() {
        $menuButton.addClass('menu-icon--x');
    }

    function xToHam() {
        $menuButton.removeClass('menu-icon--x');
    }

    // nav drawers

    $('.js-nav-link').on('click', function() {
        $(this).next().toggle();
    });

    $('.js-drawer-close').on('click', function() {
        $('.js-nav-drawer').hide();
    })

    // blizzard's media query toggle thing
    function Media() {
        this.elems = [],
        this.matches = {}
    }
    Media.sizes = ["original", "mobile-large", "tablet", "nav-bp", "desktop", "desktop-large"];
    Media.widths = [0, 576, 768, 768, 992, 1200];
    Media.attrs = Media.sizes.map(function (size) {
         return "media-" + size;
     });
    Media.query = Media.attrs.map(function (attr) {
        return "[" + attr + "]"
    }).join(",");
    Media.spaceReg = /\s+/;
    Media.prototype = {
        init: function () {
    		this.update();
            $media = this;
            $(Media.query).each(function() {
                $media.addElem(this);
            })
    		$(window).on("resize", this.update.bind(this));
    		$(window).on("load", this.resize.bind(this));
    	},
        resize: function () {
    		if (window.trigger) {
    			window.trigger("resize");
    		} else {
    			this.update();
    		}
    	},
        addElem: function (elem) {
    		// save the original classes and always apply them
        	$(elem).attr("media-original", elem.className);
    		this.elems.push(elem);
    		this.updateElem(elem);
    	},
        update: function () {
    		this.width = window.innerWidth;
    		var minWidth = Media.widths[1];
    		if (this.width < minWidth) {
    			this.width = minWidth;
    		}
    		Media.widths.map(this.updateWidth.bind(this))
    		this.elems.map(this.updateElem.bind(this));
    	},
        updateWidth: function (width, i) {
    		var media = "media-" + Media.sizes[i];
    		this.matches[media] = this.width >= width;
    	},
        updateElem: function (elem) {
    		Media.attrs.map(this.updateMedia.bind(this, elem));
    	},
        updateMedia: function (elem, media) {
    		var attr = $(elem).attr(media);
    		if (attr) {
    			var classes = attr.split(Media.spaceReg);
    			classes.map(this.updateClass.bind(this, elem, media))
    		}
	    },
        updateClass: function (elem, media, elemClass) {
    		var match = this.matches[media];
    		var negate = elemClass.charAt(0) === "!";
    		if (negate) {
    			if (match) {
    				var doubleNegate = elemClass.charAt(1) === "!";
    				if (doubleNegate) {
    					elem.classList.add(elemClass.slice(2));
    				} else {
    					elem.classList.remove(elemClass.slice(1));
    				}
    			}
    		} else {
    			elem.classList[match ? "add" : "remove"](elemClass);
    		}
    	}
    };
    var media = new Media();
    media.init();
    window.Media = Media;
    window.media = media;

    return op;
}(OP || {}, jQuery));
