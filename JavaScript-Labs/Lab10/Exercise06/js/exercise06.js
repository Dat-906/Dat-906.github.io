/* put your animation code here */

$(function() {
    // Bước 2-3: hiện dần / ẩn dần trong 1000 ms
    $("#btnFadeIn").click(function() {
        $("figure").fadeIn(1000);
    });
    $("#btnFadeOut").click(function() {
        $("figure").fadeOut(1000);
    });

    // Bước 4: bật/tắt dần dần
    $("#btnFade").click(function() {
        $("figure").fadeToggle(500);
    });

    // Bước 5: trượt xuống / lên / bật tắt
    $("#btnSlideDown").click(function() {
        $("figure").slideDown("slow");
    });
    $("#btnSlideUp").click(function() {
        $("figure").slideUp("slow");
    });
    $("#btnSlide").click(function() {
        $("figure").slideToggle(2000);
    });
});
