/* Bước 2-3: jQuery được nạp từ CDN trong <head>, nếu CDN không tải được thì dùng bản cục bộ ../js/jquery-3.1.1.min.js.
   Dòng dưới chỉ để kiểm tra jQuery đã sẵn sàng: in phiên bản vào ô textarea và Console. */
$(function () {
    var nguon = (window.jQuery && $.fn.jquery) ? $.fn.jquery : "không tải được";
    $('#msgArea').val("jQuery " + nguon + " đã được nạp");
    console.log("jQuery version:", nguon);
});
