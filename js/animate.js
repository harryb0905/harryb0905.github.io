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
    $(".portfolio-item").hover(
        function() {
            // item is being hovered over
            $elem.removeClass('start');
            $elem.addClass('start');
        }, function() {
            // item is no longer being hovered over
            $elem.removeClass('start');
        }
    );

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
window.srt = ScrollReveal({ reset: false });

srt.reveal('.about-me-custom', { duration: 1200, origin: 'top' });
srt.reveal('.about-me-text', { duration: 1200, origin: 'bottom' })
srt.reveal('.details-div', { duration: 1200, origin: 'bottom' });
srt.reveal('.portfolio-item', { duration: 1200, origin: 'left', rotate: { x: 20, y: 0, z: 0 } });
srt.reveal('.portfolio-text', { duration: 1400, origin: 'right'});
srt.reveal('#portfolio-quote', { duration: 1400, origin: 'top'});
srt.reveal('.name', { duration: 1800, origin: 'left'});
srt.reveal('.skills', { duration: 1900, origin: 'right'});
srt.reveal('.profile-pic', { duration: 1700, origin: 'top'});
srt.reveal('#languages', { duration: 800, origin: 'bottom'});

// navbar change color on scroll
$(function () {
  $(document).scroll(function () {
    var $nav = $(".navbar-fixed-top");
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
  });
});

// nav button animation
$("#downBtn").hover(
    function() {
        //mouse over
        $(this).addClass('hovered')
        $(this).removeClass('removed')
    }, function() {
        //mouse out
        $(this).addClass('removed')
        $(this).removeClass('hovered')
    });

// animate down button to position on page
$("#downBtn").click(function() {
    $('html,body').animate({
        scrollTop: $("#about").offset().top - 100},
        1200);
});






