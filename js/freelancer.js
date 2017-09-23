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

// change opacity of top div once navbar is showm
$('#bs-example-navbar-collapse-1').on('show.bs.collapse', function () {
   $('header').animate({
         opacity: 0.2
    }, 'fast');
    
    $('.navbar-custom li a').css({"color": "black"});
    
});

// change opacity of top div once navbar is hidden
$('#bs-example-navbar-collapse-1').on('hidden.bs.collapse', function () {
   $('header').animate({
         opacity: 1
    }, 'fast');
    
   $('.navbar-custom li a').css({"color": "white"});

});

// toggle navbar collapse when clicking outside of navabar
$(document).click(function (event) {
    var clickover = $(event.target);
    var $navbar = $(".navbar-collapse");               
    var _opened = $navbar.hasClass("in");
    if (_opened === true && !clickover.hasClass("navbar-toggle")) {      
        $navbar.collapse('hide');
    }
});

// portfolio item hover effect
$('.portfolio-link').hover(function() {
  
  // mouse over    
  $(this).parent().addClass('start');
  
}, function() {
  
  // mouse out
  $(this).parent().removeClass('start');
  
});

// Scroll Reveal code
window.srt = ScrollReveal({ reset: false });

srt.reveal('.details-div', { duration: 1200, origin: 'bottom' });
srt.reveal('.portfolio-item', { duration: 1000});
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

// animate in a portfolio item title on hover
$('.portfolio-link').hover(function() {
    // mouse over
    var title = $(this).find($('.portfolio-title'));
    var text = $(this).find($('.caption-text'));
    $(title).addClass('title-hovered')
    $(text).addClass('text-hovered')
}, function() {
    //mouse out
    var title = $(this).find($('.portfolio-title'));
    var text = $(this).find($('.caption-text'));
    $(title).removeClass('title-hovered')
    $(text).removeClass('text-hovered')
});

// animate the level bars once modal window has opened
$('.portfolio-modal').on('show.bs.modal', function () {
    
  var id = "#" + $(this).closest(".portfolio-modal").attr("id");
  var bars = $(id).find(".bar .level");  
  $(bars).addClass('start');

});

// animate the level bars once modal window has opened
$('.portfolio-modal').on('hidden.bs.modal', function () {
    
  var id = "#" + $(this).closest(".portfolio-modal").attr("id");
  var bars = $(id).find(".bar .level");  
  $(bars).removeClass('start');

});













