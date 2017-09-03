(function ($) {

  $('.js-scroll-trigger').click(function () {
    $('.navbar-collapse').collapse('hide');
  });

  $(window).scroll(function () {
    if ($("#mainNav").offset().top > 60) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  });
  $('.carousel').carousel('cycle');
  if ($(".typed-text").length > 0) {
    var typed = new Typed('.typed-text', {
      strings: ["Proactive Management?", "Build And Release?", "Maximize Revenue?"],
      typeSpeed: 80,
      loop: true,
      fadeOut: true,
      fadeOutClass: 'typed-fade-out',
      fadeOutDelay: 500,
    });
  }

})(jQuery); 
