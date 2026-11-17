/* Bước 3-5: gọi GET đến web service trả về danh sách thành phố dạng JSON.
   Địa chỉ gốc của giáo trình (http, có thể không còn hoạt động và bị chặn khi trang chạy trên https):
   http://www.randyconnolly.com/funwebdev/services/travel/cities.php
   Bản nộp dùng tệp JSON cục bộ có cùng cấu trúc để chạy ổn định trên GitHub Pages. */
$(function() {
    $("#consume").click(function() {
        var url = "../data/cities.json";
        $("#results").html("<ul></ul>");
        $.get(url, function (data, status) {
            // Bước 4: kiểm tra trạng thái trả về
            if (status == "success") {
                // Bước 5: dùng $.each() thay cho vòng lặp for
                $.each(data, function(index,value) {
                    var li = $('<li/>').html(value.name);
                    li.appendTo("div#results ul");
                });
            }
        });
    });
});

/* Bước 3 (cách viết dùng vòng lặp for, đã thay bằng $.each ở bước 5):
$.get(url, function (data, status) {
    var list = "";
    for (var i=0; i < data.length; i++) {
        list += data[i].name + "<br>";
    }
    $("#results").html(list);
});
*/
