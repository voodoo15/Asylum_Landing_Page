// SMOOTH SCROLL
$('a[href*="#"]:not([href="#"])').click(function() {
  if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
    if (target.length) {
      $('html, body').animate({
        scrollTop: target.offset().top
      }, 1000);
      return false;
    }
  }
});

// NAV CLASS CHANGE
$(window).scroll(function() {
    var scroll = $(window).scrollTop();

    if(scroll >= 500) {
        $("nav").addClass("navbar-default");
        $("nav").removeClass("navbar-transparent");
    } else {
      $("nav").addClass("navbar-transparent").fadeIn("slow");
        $("nav").removeClass("navbar-default");
    }
});
