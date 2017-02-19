// SMOOTH SCROLL
$('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
            $('html, body').animate({
                scrollTop: target.offset().top
            }, 1000);
            return false;
        }
    }
});

$(document).ready( () => {

  // NAV CLASS CHANGE
  if (screen.width <= 768) {
    $("nav").addClass("navbar-default");
    $("nav").removeClass("navbar-transparent");
  } else {
    $(window).scroll(function() {
      var scroll = $(window).scrollTop();

      if (scroll > 600) {
        $("nav").addClass("navbar-default");
        $("nav").removeClass("navbar-transparent");
      } else {
        $("nav").addClass("navbar-transparent");
        $("nav").removeClass("navbar-default");
      }
    });
  }
}); // Close $(document).ready()
