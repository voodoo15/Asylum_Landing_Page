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

$(document).ready(() => {

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

    //HIDE PAYPAL OPTIONS
    $("#portfolioArtPaymentForm input[name='on7']").parent('td').hide();
    $("#portfolioArtPaymentForm select[name='os7']").hide();
    $("#portfolioArtPaymentForm input[name='on3']").parent('td').hide();
    $("#portfolioArtPaymentForm select[name='os3']").hide();
    $("#portfolioArtPaymentForm input[name='on4']").parent('td').hide();
    $("#portfolioArtPaymentForm select[name='os4']").hide();

    $("#animationPaymentForm input[name='on7']").parent('td').hide();
    $("#animationPaymentForm select[name='os7']").hide();
    $("#animationPaymentForm input[name='on3']").parent('td').hide();
    $("#animationPaymentForm select[name='os3']").hide();
    $("#animationPaymentForm input[name='on4']").parent('td').hide();
    $("#animationPaymentForm select[name='os4']").hide();

    $("#lifeDrawingPaymentForm input[name='on7']").parent('td').hide();
    $("#lifeDrawingPaymentForm select[name='os7']").hide();
    $("#lifeDrawingPaymentForm input[name='on3']").parent('td').hide();
    $("#lifeDrawingPaymentForm select[name='os3']").hide();
    $("#lifeDrawingPaymentForm input[name='on4']").parent('td').hide();
    $("#lifeDrawingPaymentForm select[name='os4']").hide();

    //SHOW/HIDE PAYPAL OPTIONS ON CHANGE
    $("#portfolioArtPaymentForm select[name='os0']").change(function() {

        if ($("#portfolioArtPaymentForm select[name='os0'] option:selected").index() === 0) {
            $("#portfolioArtPaymentForm input[name='on7']").parent('td').hide();
            $("#portfolioArtPaymentForm select[name='os7']").hide();
            $("#portfolioArtPaymentForm input[name='on3']").parent('td').hide();
            $("#portfolioArtPaymentForm select[name='os3']").hide();
            $("#portfolioArtPaymentForm input[name='on4']").parent('td').hide();
            $("#portfolioArtPaymentForm select[name='os4']").hide();
        } else if ($("#portfolioArtPaymentForm select[name='os0'] option:selected").index() === 1) {
            $("#portfolioArtPaymentForm input[name='on7']").parent('td').hide();
            $("#portfolioArtPaymentForm select[name='os7']").hide();
            $("#portfolioArtPaymentForm input[name='on3']").parent('td').show();
            $("#portfolioArtPaymentForm select[name='os3']").show();
            $("#portfolioArtPaymentForm input[name='on4']").parent('td').hide();
            $("#portfolioArtPaymentForm select[name='os4']").hide();
        } else if ($("#portfolioArtPaymentForm select[name='os0'] option:selected").index() === 2) {
            $("#portfolioArtPaymentForm input[name='on7']").parent('td').hide();
            $("#portfolioArtPaymentForm select[name='os7']").hide();
            $("#portfolioArtPaymentForm input[name='on3']").parent('td').show();
            $("#portfolioArtPaymentForm select[name='os3']").show();
            $("#portfolioArtPaymentForm input[name='on4']").parent('td').show();
            $("#portfolioArtPaymentForm select[name='os4']").show();
        } else if ($("#portfolioArtPaymentForm select[name='os0'] option:selected").index() === 3) {
            $("#portfolioArtPaymentForm input[name='on7']").parent('td').show();
            $("#portfolioArtPaymentForm select[name='os7']").show();
            $("#portfolioArtPaymentForm input[name='on3']").parent('td').show();
            $("#portfolioArtPaymentForm select[name='os3']").show();
            $("#portfolioArtPaymentForm input[name='on4']").parent('td').show();
            $("#portfolioArtPaymentForm select[name='os4']").show();
        }
    });

    $("#animationPaymentForm select[name='os0']").change(function() {

        if ($("#animationPaymentForm select[name='os0'] option:selected").index() === 0) {
            $("#animationPaymentForm input[name='on7']").parent('td').hide();
            $("#animationPaymentForm select[name='os7']").hide();
            $("#animationPaymentForm input[name='on3']").parent('td').hide();
            $("#animationPaymentForm select[name='os3']").hide();
            $("#animationPaymentForm input[name='on4']").parent('td').hide();
            $("#animationPaymentForm select[name='os4']").hide();
        } else if ($("#animationPaymentForm select[name='os0'] option:selected").index() === 1) {
            $("#animationPaymentForm input[name='on7']").parent('td').hide();
            $("#animationPaymentForm select[name='os7']").hide();
            $("#animationPaymentForm input[name='on3']").parent('td').show();
            $("#animationPaymentForm select[name='os3']").show();
            $("#animationPaymentForm input[name='on4']").parent('td').hide();
            $("#animationPaymentForm select[name='os4']").hide();
        } else if ($("#animationPaymentForm select[name='os0'] option:selected").index() === 2) {
            $("#animationPaymentForm input[name='on7']").parent('td').hide();
            $("#animationPaymentForm select[name='os7']").hide();
            $("#animationPaymentForm input[name='on3']").parent('td').show();
            $("#animationPaymentForm select[name='os3']").show();
            $("#animationPaymentForm input[name='on4']").parent('td').show();
            $("#animationPaymentForm select[name='os4']").show();
        } else if ($("#animationPaymentForm select[name='os0'] option:selected").index() === 3) {
            $("#animationPaymentForm input[name='on7']").parent('td').show();
            $("#animationPaymentForm select[name='os7']").show();
            $("#animationPaymentForm input[name='on3']").parent('td').show();
            $("#animationPaymentForm select[name='os3']").show();
            $("#animationPaymentForm input[name='on4']").parent('td').show();
            $("#animationPaymentForm select[name='os4']").show();
        }
    });

    $("#lifeDrawingPaymentForm select[name='os0']").change(function() {

        if ($("#lifeDrawingPaymentForm select[name='os0'] option:selected").index() === 0) {
            $("#lifeDrawingPaymentForm input[name='on7']").parent('td').hide();
            $("#lifeDrawingPaymentForm select[name='os7']").hide();
            $("#lifeDrawingPaymentForm input[name='on3']").parent('td').hide();
            $("#lifeDrawingPaymentForm select[name='os3']").hide();
            $("#lifeDrawingPaymentForm input[name='on4']").parent('td').hide();
            $("#lifeDrawingPaymentForm select[name='os4']").hide();
        } else if ($("#lifeDrawingPaymentForm select[name='os0'] option:selected").index() === 1) {
            $("#lifeDrawingPaymentForm input[name='on7']").parent('td').hide();
            $("#lifeDrawingPaymentForm select[name='os7']").hide();
            $("#lifeDrawingPaymentForm input[name='on3']").parent('td').show();
            $("#lifeDrawingPaymentForm select[name='os3']").show();
            $("#lifeDrawingPaymentForm input[name='on4']").parent('td').hide();
            $("#lifeDrawingPaymentForm select[name='os4']").hide();
        } else if ($("#lifeDrawingPaymentForm select[name='os0'] option:selected").index() === 2) {
            $("#lifeDrawingPaymentForm input[name='on7']").parent('td').hide();
            $("#lifeDrawingPaymentForm select[name='os7']").hide();
            $("#lifeDrawingPaymentForm input[name='on3']").parent('td').show();
            $("#lifeDrawingPaymentForm select[name='os3']").show();
            $("#lifeDrawingPaymentForm input[name='on4']").parent('td').show();
            $("#lifeDrawingPaymentForm select[name='os4']").show();
        } else if ($("#lifeDrawingPaymentForm select[name='os0'] option:selected").index() === 3) {
            $("#lifeDrawingPaymentForm input[name='on7']").parent('td').show();
            $("#lifeDrawingPaymentForm select[name='os7']").show();
            $("#lifeDrawingPaymentForm input[name='on3']").parent('td').show();
            $("#lifeDrawingPaymentForm select[name='os3']").show();
            $("#lifeDrawingPaymentForm input[name='on4']").parent('td').show();
            $("#lifeDrawingPaymentForm select[name='os4']").show();
        }
    });


}); // Close $(document).ready()
