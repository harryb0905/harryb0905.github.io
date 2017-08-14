// animate elements if in the current viewport
function isElementInViewport(elem) {
    var $elem = $(elem);

    // Get the scroll position of the page.
    var scrollElem = ((navigator.userAgent.toLowerCase().indexOf('webkit') != -1) ? 'body' : 'html');
    var viewportTop = $(scrollElem).scrollTop();
    var viewportBottom = viewportTop + $(window).height();

    // Get the position of the element on the page.
    var elemTop = Math.round( $elem.offset().top );
    var elemBottom = elemTop + $elem.height();

    return ((elemTop < viewportBottom) && (elemBottom > viewportTop));
}

// Check if it's time to start the animation.
function checkAnimation() {
    var $elem = $('.bar .level');

    // If the animation has already been started
    if ($elem.hasClass('start')) return;

    if (isElementInViewport($elem)) {
        // Start the animation
        $elem.addClass('start');
    }
}

// Capture scroll events
$(window).scroll(function(){
    checkAnimation();
});

// Scroll Reveal code
window.srt = ScrollReveal({ reset: true });

srt.reveal('.about-me-custom', { duration: 1200, origin: 'top' });
srt.reveal('.about-me-text', { duration: 1200, origin: 'bottom' });
srt.reveal('.portfolio-item', { duration: 1400, origin: 'left', rotate: { x: 40, y: 40, z: 0 } });
srt.reveal('.portfolio-text', { duration: 1400, origin: 'top'});
srt.reveal('.name', { duration: 1800, origin: 'left', reset: false});
srt.reveal('.skills', { duration: 1800, origin: 'right', reset: false});
srt.reveal('.pic', { duration: 1800, origin: 'top', reset: false});
srt.reveal('.nav-pic', { duration: 1800, origin: 'left', reset: false});
