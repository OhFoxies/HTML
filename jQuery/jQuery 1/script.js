$(document).ready(
    function() {
        $('#m1').click(
            function() {
                $('#test').css("display", "flex").hide().fadeIn(500);
                $('#d1').fadeOut();
                $('#d2').fadeOut();
                $('#d3').fadeOut();
                $('#d1').fadeIn(500);
            }
        );
        $('#m2').click(
            function() {
                $('#test').css("display", "flex").hide().fadeIn(500);
                $('#d1').fadeOut();
                $('#d2').fadeOut();
                $('#d3').fadeOut();
                $('#d2').fadeIn(500);
            }
        );
        $('#m3').click(
            function() {
                $('#test').css("display", "flex").hide().fadeIn();
                $('#d1').fadeOut();
                $('#d2').fadeOut();
                $('#d3').fadeOut();
                $('#d3').fadeIn(500);
            }
        );
        $('#close').click(
            function() {
                $('#test').slideUp();
                $('#d1').fadeOut();
                $('#d2').fadeOut();
                $('#d3').fadeOut();
            }
        );
    }
);