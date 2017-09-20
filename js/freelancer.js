// Freelancer Theme JavaScript

(function($) {
    "use strict"; // Start of use strict

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('.page-scroll a').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 100)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 100
    });

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function(){ 
            $('.navbar-toggle:visible').click();
    });

    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 100
        }
    })

    // Floating label headings for the contact form
    $(function() {
        $("body").on("input propertychange", ".floating-label-form-group", function(e) {
            $(this).toggleClass("floating-label-form-group-with-value", !!$(e.target).val());
        }).on("focus", ".floating-label-form-group", function() {
            $(this).addClass("floating-label-form-group-with-focus");
        }).on("blur", ".floating-label-form-group", function() {
            $(this).removeClass("floating-label-form-group-with-focus");
        });
    });

})(jQuery); // End of use strict

// change opacity if window is resized and navbar has collapsed 
$(window).resize(function() {
  if ($(this).width() >= 1024) {
      $('.collapse').collapse('hide');
      $('header').animate({
          opacity: 1
      }, 'fast');
  }
});

// change opacity of top div once navbar is toggled
$('#bs-example-navbar-collapse-1').on('show.bs.collapse', function () {
   $('header').animate({
         opacity: 0.3,
    }, 'fast');
});

$('#bs-example-navbar-collapse-1').on('hide.bs.collapse', function () {
   $('header').animate({
         opacity: 1
    }, 'fast');
});








